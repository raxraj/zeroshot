#!/usr/bin/env python3
"""
experiments/run_trial.py
========================
Orchestrator for the ZeroShot vs MUI AI code-assistant experiment.

Usage examples
--------------
# Dry-run (no API calls, no file changes) — just print steps:
    python experiments/run_trial.py --dry-run --all-tasks --all-variants

# Single trial with the local (manual) adapter:
    python experiments/run_trial.py \\
        --task harness/sample_task \\
        --assistant local \\
        --variant project-zero

# All tasks × all variants with OpenAI:
    OPENAI_API_KEY=sk-... python experiments/run_trial.py \\
        --assistant openai --model gpt-4o \\
        --all-tasks --all-variants

Results are written to experiments/results/trials.csv.
Raw responses are saved to experiments/results/raw/<task>/<assistant>/<variant>/.
"""

from __future__ import annotations

import argparse
import csv
import json
import os
import shutil
import subprocess
import sys
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
SCRIPT_DIR   = Path(__file__).parent.resolve()
WORKSPACE    = SCRIPT_DIR / "workspace"
HARNESS_DIR  = SCRIPT_DIR / "harness"
RESULTS_DIR  = SCRIPT_DIR / "results"
RAW_DIR      = RESULTS_DIR / "raw"
MANUAL_DIR   = RESULTS_DIR / "manual_responses"
TRIALS_CSV   = RESULTS_DIR / "trials.csv"

TRIALS_CSV_HEADER = [
    "timestamp", "task", "assistant", "variant",
    "success", "time_sec", "loc_changed", "files_changed",
    "raw_response_path",
]

# ---------------------------------------------------------------------------
# Utility helpers
# ---------------------------------------------------------------------------

def log(msg: str) -> None:
    print(f"[run_trial] {msg}", flush=True)


def run(cmd: list[str], cwd: Path, check: bool = True, capture: bool = False):
    """Run a subprocess; return CompletedProcess."""
    kwargs: dict = {"cwd": cwd}
    if capture:
        kwargs["stdout"] = subprocess.PIPE
        kwargs["stderr"] = subprocess.PIPE
        kwargs["text"] = True
    result = subprocess.run(cmd, **kwargs)
    if check and result.returncode != 0:
        raise RuntimeError(
            f"Command {cmd} failed with exit code {result.returncode}"
        )
    return result


def count_loc(diff_text: str) -> int:
    """Count lines added + removed in a unified diff string."""
    added   = sum(1 for l in diff_text.splitlines() if l.startswith("+") and not l.startswith("+++"))
    removed = sum(1 for l in diff_text.splitlines() if l.startswith("-") and not l.startswith("---"))
    return added + removed


def count_files(diff_text: str) -> int:
    """Count distinct files mentioned in a unified diff."""
    return sum(1 for l in diff_text.splitlines() if l.startswith("+++"))


def ensure_csv_header() -> None:
    RESULTS_DIR.mkdir(parents=True, exist_ok=True)
    if not TRIALS_CSV.exists():
        with TRIALS_CSV.open("w", newline="") as f:
            csv.writer(f).writerow(TRIALS_CSV_HEADER)


def append_trial(row: dict) -> None:
    ensure_csv_header()
    with TRIALS_CSV.open("a", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=TRIALS_CSV_HEADER)
        writer.writerow(row)


# ---------------------------------------------------------------------------
# Assistant adapters
# ---------------------------------------------------------------------------

class LocalAdapter:
    """
    Reads assistant output from a pre-written file.

    Place responses at:
        experiments/results/manual_responses/<task>/<variant>/response.txt
    """
    name = "local"

    def __init__(self, **kwargs):
        pass

    def complete(self, task_id: str, variant: str, prompt: str) -> str:
        response_path = MANUAL_DIR / task_id / variant / "response.txt"
        if not response_path.exists():
            raise FileNotFoundError(
                f"Local response file not found: {response_path}\n"
                f"Create it with the assistant output (unified diff or full file)."
            )
        return response_path.read_text()


class OpenAIAdapter:
    """
    Calls the OpenAI Chat Completions API.

    Requires OPENAI_API_KEY environment variable.
    """
    name = "openai"

    def __init__(self, model: str = "gpt-4o", **kwargs):
        self.model = model
        try:
            import openai  # noqa: F401 — checked here for a clear error message
        except ImportError:
            raise ImportError(
                "openai package not installed. Run: pip install openai"
            )
        self._client = None  # lazy init

    def _get_client(self):
        if self._client is None:
            import openai
            api_key = os.environ.get("OPENAI_API_KEY")
            if not api_key:
                raise EnvironmentError(
                    "OPENAI_API_KEY environment variable is not set. "
                    "Export it or pass --assistant local for manual mode."
                )
            self._client = openai.OpenAI(api_key=api_key)
        return self._client

    def complete(self, task_id: str, variant: str, prompt: str) -> str:
        client = self._get_client()
        system_prompt = (
            "You are an expert TypeScript/React developer. "
            "When asked to fix or implement code, return your solution as a "
            "unified diff (git diff format) or as a complete replacement file "
            "using the explicit file-header format (### FILE: path/to/file.ts). "
            "Do NOT include explanations or prose — output only the patch or file content."
        )
        response = client.chat.completions.create(
            model=self.model,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user",   "content": prompt},
            ],
            temperature=0,
        )
        return response.choices[0].message.content or ""


ADAPTERS: dict[str, type] = {
    "local":  LocalAdapter,
    "openai": OpenAIAdapter,
}


def make_adapter(name: str, **kwargs):
    if name not in ADAPTERS:
        raise ValueError(f"Unknown adapter '{name}'. Choose from: {list(ADAPTERS)}")
    return ADAPTERS[name](**kwargs)


# ---------------------------------------------------------------------------
# Patch application
# ---------------------------------------------------------------------------

def apply_response(response: str, project_dir: Path, dry_run: bool) -> None:
    """
    Apply the assistant response to the project directory.
    Delegates to utils/apply_patch.py for robust handling.
    """
    from utils.apply_patch import apply_patch  # type: ignore
    apply_patch(response, project_dir, dry_run=dry_run)


# ---------------------------------------------------------------------------
# Trial runner
# ---------------------------------------------------------------------------

def build_prompt(task: dict, project_dir: Path) -> str:
    """Build the full user prompt with inline context files."""
    lines: list[str] = ["<context>"]
    for rel_path in task.get("context_files", []):
        full = project_dir / rel_path
        if full.exists():
            lines.append(f"File: {rel_path}")
            lines.append("---")
            lines.append(full.read_text())
            lines.append("---")
    lines.append("</context>")
    lines.append("")
    lines.append(task["user_prompt"])
    return "\n".join(lines)


def reset_project(project_dir: Path) -> None:
    """Reset project to git baseline."""
    run(["git", "checkout", "--", "."], cwd=project_dir)
    run(["git", "clean", "-fd"], cwd=project_dir)


def run_tests(project_dir: Path, tests_command: str, capture: bool = True):
    """Run tests, return (success: bool, stdout: str, stderr: str)."""
    cmd = tests_command.split()
    result = subprocess.run(
        cmd, cwd=project_dir,
        stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True
    )
    return result.returncode == 0, result.stdout, result.stderr


def get_diff(project_dir: Path) -> str:
    """Get git diff of all changes since HEAD."""
    result = subprocess.run(
        ["git", "diff", "HEAD"],
        cwd=project_dir, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True
    )
    return result.stdout


def run_trial(
    task_dir: Path,
    variant: str,
    adapter,
    dry_run: bool,
) -> dict:
    """Run a single trial. Returns a metrics dict."""
    task_id = task_dir.name
    project_dir = WORKSPACE / variant

    # Load task
    task_path = task_dir / "task.json"
    if not task_path.exists():
        raise FileNotFoundError(f"task.json not found: {task_path}")
    task = json.loads(task_path.read_text())

    log(f"Trial: task={task_id}  variant={variant}  assistant={adapter.name}")

    # Build prompt
    prompt = build_prompt(task, project_dir)

    # Prepare raw output directory
    raw_out_dir = RAW_DIR / task_id / adapter.name / variant
    raw_out_dir.mkdir(parents=True, exist_ok=True)
    ts = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
    raw_response_path = raw_out_dir / f"response_{ts}.txt"

    if dry_run:
        log(f"  [dry-run] Would call {adapter.name} and apply patch to {project_dir}")
        log(f"  [dry-run] Would run: {task['tests_command']}")
        return {
            "timestamp": ts,
            "task": task_id,
            "assistant": adapter.name,
            "variant": variant,
            "success": "",
            "time_sec": 0.0,
            "loc_changed": 0,
            "files_changed": 0,
            "raw_response_path": str(raw_response_path),
        }

    # Reset to baseline
    reset_project(project_dir)

    # Call assistant
    t0 = time.monotonic()
    response = adapter.complete(task_id, variant, prompt)
    elapsed = time.monotonic() - t0

    # Save raw response
    raw_response_path.write_text(response)
    log(f"  Response saved → {raw_response_path}")

    # Apply patch
    try:
        apply_response(response, project_dir, dry_run=False)
    except Exception as exc:
        log(f"  WARN: patch application failed: {exc}")
        # Still run tests to record baseline failure

    # Measure diff
    diff = get_diff(project_dir)
    loc  = count_loc(diff)
    nfiles = count_files(diff)

    # Run tests
    success, stdout, stderr = run_tests(project_dir, task["tests_command"])
    log(f"  Tests {'PASSED' if success else 'FAILED'} | {elapsed:.1f}s | LOC={loc} | files={nfiles}")
    if not success:
        log(f"  --- stdout ---\n{stdout[-2000:]}")
        log(f"  --- stderr ---\n{stderr[-1000:]}")

    # Reset again after trial
    reset_project(project_dir)

    return {
        "timestamp": ts,
        "task": task_id,
        "assistant": adapter.name,
        "variant": variant,
        "success": 1 if success else 0,
        "time_sec": round(elapsed, 2),
        "loc_changed": loc,
        "files_changed": nfiles,
        "raw_response_path": str(raw_response_path),
    }


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def discover_tasks() -> list[Path]:
    return sorted(
        p for p in HARNESS_DIR.iterdir()
        if p.is_dir() and (p / "task.json").exists()
    )


def discover_variants() -> list[str]:
    if not WORKSPACE.exists():
        return []
    return sorted(p.name for p in WORKSPACE.iterdir() if p.is_dir())


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Run ZeroShot vs MUI experiment trials."
    )
    parser.add_argument(
        "--task",
        help="Path to a specific task directory (e.g. harness/sample_task)",
    )
    parser.add_argument(
        "--all-tasks", action="store_true",
        help="Run all tasks discovered in harness/",
    )
    parser.add_argument(
        "--variant",
        help="Project variant name (e.g. project-zero or project-mui)",
    )
    parser.add_argument(
        "--all-variants", action="store_true",
        help="Run all project variants in workspace/",
    )
    parser.add_argument(
        "--assistant", default="local",
        choices=list(ADAPTERS),
        help="Assistant adapter to use (default: local)",
    )
    parser.add_argument(
        "--model", default="gpt-4o",
        help="Model identifier passed to the assistant adapter (OpenAI only)",
    )
    parser.add_argument(
        "--dry-run", action="store_true",
        help="Print steps without calling assistants or modifying files",
    )
    args = parser.parse_args()

    # Resolve tasks
    if args.all_tasks:
        tasks = discover_tasks()
        if not tasks:
            log("ERROR: No tasks found in harness/")
            return 1
    elif args.task:
        task_path = SCRIPT_DIR / args.task if not Path(args.task).is_absolute() else Path(args.task)
        tasks = [task_path]
    else:
        parser.error("Specify --task <path> or --all-tasks")

    # Resolve variants
    if args.all_variants:
        variants = discover_variants()
        if not variants:
            log("ERROR: No variants found in workspace/ — run setup.sh first")
            return 1
    elif args.variant:
        variants = [args.variant]
    else:
        parser.error("Specify --variant <name> or --all-variants")

    # Make adapter
    adapter = make_adapter(args.assistant, model=args.model)

    # Add apply_patch to path
    sys.path.insert(0, str(SCRIPT_DIR))

    errors = 0
    for task_dir in tasks:
        for variant in variants:
            try:
                metrics = run_trial(
                    task_dir=task_dir,
                    variant=variant,
                    adapter=adapter,
                    dry_run=args.dry_run,
                )
                if not args.dry_run:
                    append_trial(metrics)
                    log(f"  Recorded → {TRIALS_CSV}")
                else:
                    log(f"  [dry-run] Would record: {metrics}")
            except Exception as exc:
                log(f"ERROR in trial {task_dir.name}/{variant}: {exc}")
                errors += 1

    if errors:
        log(f"\n{errors} trial(s) failed.")
        return 1

    log("\nAll trials complete.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
