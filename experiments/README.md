# Automated Experiment: ZeroShot vs MUI for AI Code-Assistants

## Overview

This experiment measures whether AI code-assistants (GitHub Copilot, ChatGPT/OpenAI, etc.)
produce better results when the target codebase uses the **zero-shot** library compared to
a codebase using **MUI (Material-UI)** conventions.

The hypothesis is that zero-shot's minimal, AI-native API surface reduces ambiguity for
LLMs, resulting in higher task-success rates, fewer required iterations, and cleaner code.

---

## Metrics

| Metric | Type | Collection |
|--------|------|-----------|
| Task success rate (tests pass) | Primary | Automated |
| Time to working solution (seconds) | Primary | Automated |
| Lines of code changed (LOC) | Secondary | Automated |
| Number of files changed | Secondary | Automated |
| Token usage / cost | Secondary | Automated (API) |
| Code quality rating (1–5) | Qualitative | Human review |

Results are stored in `experiments/results/trials.csv` and summarised in
`experiments/results/summary.json` / `experiments/results/report.md`.

---

## Directory Structure

```
experiments/
├── README.md                      # This file
├── setup.sh                       # Bootstrap: creates workspace/project-zero and workspace/project-mui
├── run_trial.py                   # Orchestrator: runs tasks against assistants, records results
├── prompts.md                     # Canonical system + user prompts and expected output format
├── requirements.txt               # Python dependencies
├── .gitignore                     # Excludes results/raw and node_modules
│
├── template/                      # Minimal TypeScript Vite/React app with placeholder
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   └── utils/formatDate.ts    # Intentionally broken for sample task
│   └── tests/
│       └── formatDate.test.ts     # Failing baseline test (sample task)
│
├── harness/
│   └── sample_task/
│       ├── task.json              # Task metadata and prompt
│       └── tests/
│           └── formatDate.test.ts # Objective success criterion test
│
├── utils/
│   └── apply_patch.py             # Robust patch applier (unified diff or full-file)
│
├── analysis/
│   └── aggregate.py               # Load trials.csv → summary.json + report.md
│
├── results/                       # Generated at runtime (gitignored except for committed examples)
│   ├── trials.csv
│   ├── summary.json
│   ├── report.md
│   └── raw/<task>/<assistant>/<variant>/
│
└── .github/
    └── workflows/
        └── experiment.yml         # CI: runs pilot on push or workflow_dispatch
```

---

## Requirements

### Local

- Node.js 20+ and npm
- Python 3.11+
- `pip install -r experiments/requirements.txt`
- (Optional) `OPENAI_API_KEY` environment variable for API-mode runs

### CI (GitHub Actions)

- Repository secret: `OPENAI_API_KEY` (optional; CI defaults to `local` adapter)
- No other secrets required for the default pilot run

---

## Quick-Start: Run Locally

### 1. Bootstrap the workspace

```bash
# From the repo root
bash experiments/setup.sh
```

This creates `experiments/workspace/project-zero` (uses `zero-shot`) and
`experiments/workspace/project-mui` (uses `@mui/material`), installs npm
dependencies, and commits a baseline so each trial can be reset cleanly.

### 2. Install Python dependencies

```bash
pip install -r experiments/requirements.txt
```

### 3. Run a single trial (dry-run — no API calls)

```bash
python experiments/run_trial.py \
  --task harness/sample_task \
  --assistant local \
  --variant project-zero \
  --dry-run
```

### 4. Run all trials with the local adapter (manual responses)

Place assistant responses under
`experiments/results/manual_responses/<task>/<variant>/response.txt`
(unified diff or full-file format — see `experiments/prompts.md`).

```bash
python experiments/run_trial.py \
  --assistant local \
  --all-tasks \
  --all-variants
```

### 5. Run all trials with the OpenAI adapter

```bash
export OPENAI_API_KEY="sk-..."
python experiments/run_trial.py \
  --assistant openai \
  --model gpt-4o \
  --all-tasks \
  --all-variants
```

### 6. Run analysis and generate summary

```bash
python experiments/analysis/aggregate.py
# Outputs: experiments/results/summary.json and experiments/results/report.md
```

---

## Required GitHub Secrets

| Secret | Purpose |
|--------|---------|
| `OPENAI_API_KEY` | API-mode runs; leave unset to use local adapter |

Set via: **Settings → Secrets and variables → Actions → New repository secret**

---

## Triggering the CI Workflow Manually

1. Open the **Actions** tab in GitHub.
2. Select **Experiment: ZeroShot vs MUI** workflow.
3. Click **Run workflow**.
4. (Optional) Fill `assistant` input (`local` or `openai`), then click **Run workflow**.

The default pilot runs with `assistant=local` and reads pre-committed sample responses.

---

## Interpreting Results

### `results/trials.csv`

Each row is one trial: one task × one assistant × one variant.

| Column | Meaning |
|--------|---------|
| `timestamp` | ISO-8601 time the trial completed |
| `task` | Task identifier (e.g., `sample_task`) |
| `assistant` | Assistant name (e.g., `openai`, `local`) |
| `variant` | Project variant (`project-zero` or `project-mui`) |
| `success` | `1` if tests passed, `0` otherwise |
| `time_sec` | Wall-clock seconds from request to test completion |
| `loc_changed` | Lines added + removed |
| `files_changed` | Number of files edited |
| `raw_response_path` | Path to saved raw assistant response |

### `results/summary.json`

Aggregated success rates, mean times, and paired statistical test results.

### `results/report.md`

Human-readable markdown report with tables and interpretation text.

### Reading the stats

- `success_rate_zero` vs `success_rate_mui` — higher is better.
- `p_value` < 0.05 on the paired test indicates a statistically significant difference.
- `effect_size` (Cohen's d or rank-biserial) quantifies practical significance.

---

## Adding New Tasks

1. Create `experiments/harness/<task_name>/task.json` (see `sample_task/task.json` as template).
2. Add objective test(s) to `experiments/harness/<task_name>/tests/`.
3. Add the same test file to `experiments/template/tests/` (it will fail on baseline).
4. Re-run `setup.sh` to copy the new test into the workspace projects.

---

## Privacy and Security

- **Never commit API keys.** Use environment variables locally and GitHub Secrets in CI.
- Raw assistant responses saved under `results/raw/` are gitignored.
- The `local` adapter reads only from `results/manual_responses/` which you control.
