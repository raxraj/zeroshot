#!/usr/bin/env python3
"""
experiments/analysis/aggregate.py
===================================
Load results/trials.csv and produce:
  - results/summary.json  — statistics per variant
  - results/report.md     — human-readable markdown report

Usage:
    python experiments/analysis/aggregate.py
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

SCRIPT_DIR  = Path(__file__).parent.parent.resolve()
RESULTS_DIR = SCRIPT_DIR / "results"
TRIALS_CSV  = RESULTS_DIR / "trials.csv"
SUMMARY_JSON = RESULTS_DIR / "summary.json"
REPORT_MD    = RESULTS_DIR / "report.md"


def load_trials():
    try:
        import pandas as pd
    except ImportError:
        print("pandas not installed. Run: pip install pandas", file=sys.stderr)
        sys.exit(1)

    if not TRIALS_CSV.exists():
        print(f"No trials CSV found at {TRIALS_CSV}", file=sys.stderr)
        sys.exit(1)

    df = pd.read_csv(TRIALS_CSV)
    # Coerce numeric columns
    for col in ("success", "time_sec", "loc_changed", "files_changed"):
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")
    return df


def paired_test(zero_successes, mui_successes):
    """Run a paired Wilcoxon signed-rank test if scipy is available."""
    try:
        from scipy import stats  # type: ignore
    except ImportError:
        return None, None

    import numpy as np  # noqa: F401 (scipy depends on it)
    if len(zero_successes) < 2 or len(mui_successes) < 2:
        return None, None

    # Align lengths
    n = min(len(zero_successes), len(mui_successes))
    diff = [z - m for z, m in zip(zero_successes[:n], mui_successes[:n])]
    if all(d == 0 for d in diff):
        return 1.0, 0.0  # identical results — p=1, stat=0

    try:
        result = stats.wilcoxon(diff, alternative="two-sided")
        return float(result.pvalue), float(result.statistic)
    except Exception:
        return None, None


def compute_summary(df):
    import pandas as pd

    summary: dict = {
        "n_trials": int(len(df)),
        "tasks": sorted(df["task"].unique().tolist()) if "task" in df.columns else [],
        "assistants": sorted(df["assistant"].unique().tolist()) if "assistant" in df.columns else [],
        "variants": sorted(df["variant"].unique().tolist()) if "variant" in df.columns else [],
        "per_variant": {},
        "per_task": {},
        "statistical_test": {},
    }

    # Per-variant stats
    if "variant" in df.columns and "success" in df.columns:
        for variant, grp in df.groupby("variant"):
            valid = grp["success"].dropna()
            summary["per_variant"][str(variant)] = {
                "n": int(len(valid)),
                "success_rate": round(float(valid.mean()), 4) if len(valid) > 0 else None,
                "mean_time_sec": round(float(grp["time_sec"].mean()), 2) if "time_sec" in grp else None,
                "mean_loc_changed": round(float(grp["loc_changed"].mean()), 1) if "loc_changed" in grp else None,
            }

    # Per-task stats
    if "task" in df.columns:
        for task, grp in df.groupby("task"):
            summary["per_task"][str(task)] = {}
            if "variant" in grp.columns and "success" in grp.columns:
                for variant, vgrp in grp.groupby("variant"):
                    valid = vgrp["success"].dropna()
                    summary["per_task"][str(task)][str(variant)] = {
                        "success_rate": round(float(valid.mean()), 4) if len(valid) > 0 else None,
                        "n": int(len(valid)),
                    }

    # Paired statistical test (project-zero vs project-mui)
    try:
        zero_df = df[df["variant"] == "project-zero"].sort_values(["task", "assistant"])
        mui_df  = df[df["variant"] == "project-mui"].sort_values(["task", "assistant"])

        zero_s = zero_df["success"].dropna().tolist()
        mui_s  = mui_df["success"].dropna().tolist()

        p, stat = paired_test(zero_s, mui_s)
        summary["statistical_test"] = {
            "test": "wilcoxon_signed_rank",
            "n_pairs": min(len(zero_s), len(mui_s)),
            "p_value": p,
            "statistic": stat,
            "interpretation": (
                "statistically significant (p<0.05)" if p is not None and p < 0.05
                else "not statistically significant" if p is not None
                else "insufficient data"
            ),
        }
    except Exception as exc:
        summary["statistical_test"] = {"error": str(exc)}

    return summary


def write_report(summary: dict) -> str:
    lines = [
        "# ZeroShot vs MUI Experiment — Summary Report",
        "",
        f"**Total trials:** {summary['n_trials']}  ",
        f"**Tasks:** {', '.join(summary['tasks']) or 'none'}  ",
        f"**Assistants:** {', '.join(summary['assistants']) or 'none'}  ",
        f"**Variants:** {', '.join(summary['variants']) or 'none'}  ",
        "",
        "## Success Rates by Variant",
        "",
        "| Variant | N | Success Rate | Mean Time (s) | Mean LOC Changed |",
        "|---------|---|-------------|---------------|-----------------|",
    ]
    for variant, stats in summary.get("per_variant", {}).items():
        sr  = f"{stats['success_rate']:.1%}" if stats['success_rate'] is not None else "N/A"
        t   = str(stats.get("mean_time_sec", "N/A"))
        loc = str(stats.get("mean_loc_changed", "N/A"))
        lines.append(f"| {variant} | {stats['n']} | {sr} | {t} | {loc} |")

    lines += [
        "",
        "## Statistical Test",
        "",
    ]
    st = summary.get("statistical_test", {})
    if "error" in st:
        lines.append(f"Error: {st['error']}")
    else:
        lines += [
            f"- **Test:** {st.get('test', 'N/A')}",
            f"- **N pairs:** {st.get('n_pairs', 'N/A')}",
            f"- **p-value:** {st.get('p_value', 'N/A')}",
            f"- **Interpretation:** {st.get('interpretation', 'N/A')}",
        ]

    lines += [
        "",
        "## Per-Task Breakdown",
        "",
        "| Task | project-zero success | project-mui success |",
        "|------|---------------------|---------------------|",
    ]
    for task, variants in summary.get("per_task", {}).items():
        zero = variants.get("project-zero", {}).get("success_rate")
        mui  = variants.get("project-mui",  {}).get("success_rate")
        zs = f"{zero:.1%}" if zero is not None else "N/A"
        ms = f"{mui:.1%}"  if mui  is not None else "N/A"
        lines.append(f"| {task} | {zs} | {ms} |")

    lines += [
        "",
        "---",
        "_Generated by experiments/analysis/aggregate.py_",
    ]
    return "\n".join(lines) + "\n"


def main() -> int:
    df = load_trials()
    print(f"Loaded {len(df)} trial(s) from {TRIALS_CSV}")

    summary = compute_summary(df)

    RESULTS_DIR.mkdir(parents=True, exist_ok=True)
    SUMMARY_JSON.write_text(json.dumps(summary, indent=2) + "\n")
    print(f"Summary written → {SUMMARY_JSON}")

    report = write_report(summary)
    REPORT_MD.write_text(report)
    print(f"Report written  → {REPORT_MD}")

    # Print brief
    for variant, stats in summary.get("per_variant", {}).items():
        sr = f"{stats['success_rate']:.1%}" if stats['success_rate'] is not None else "N/A"
        print(f"  {variant}: success_rate={sr}  n={stats['n']}")

    st = summary.get("statistical_test", {})
    print(f"  Statistical test: {st.get('interpretation', 'N/A')} (p={st.get('p_value', 'N/A')})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
