# Canonical Prompts for the ZeroShot vs MUI Experiment

This file documents the exact system prompt, user prompt template, and expected
output format used in each trial. Keeping prompts identical across variants
(project-zero and project-mui) ensures that any performance difference is
attributable to the library choice, not to prompt quality.

---

## System Prompt

```
You are an expert TypeScript/React developer. When asked to fix or implement
code, return your solution as a unified diff (git diff format) or as a complete
replacement file using the explicit file-header format described below.
Do NOT include explanations or prose — output only the patch or file content.
```

---

## User Prompt Template

The user prompt is loaded from `harness/<task_id>/task.json` → `user_prompt`
field at runtime.  The orchestrator prepends the relevant source file content
as context:

```
<context>
File: src/utils/formatDate.ts
---
{FILE_CONTENT}
---
File: tests/formatDate.test.ts
---
{TEST_CONTENT}
---
</context>

{task.user_prompt}
```

---

## Expected Output Format

The assistant may return output in either of two formats.  The `apply_patch.py`
utility handles both.

### Format A — Unified diff (preferred)

```diff
--- a/src/utils/formatDate.ts
+++ b/src/utils/formatDate.ts
@@ -1,10 +1,15 @@
+/**
+ * formatDate — formats an ISO date string as 'Mon DD, YYYY'.
+ */
 export function formatDate(isoDate: string): string {
-  // BUG: just returns the raw ISO string — does NOT format it
-  return isoDate;
+  const [year, month, day] = isoDate.split('-').map(Number);
+  const date = new Date(year, month - 1, day);
+  return date.toLocaleDateString('en-US', {
+    month: 'short',
+    day: 'numeric',
+    year: 'numeric',
+  });
 }
```

### Format B — Full file with explicit header (fallback)

```
### FILE: src/utils/formatDate.ts
/**
 * formatDate — formats an ISO date string as 'Mon DD, YYYY'.
 */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
```

---

## Notes for Human Reviewers (local adapter)

When providing a manual response:

1. Create the file at the path printed by the orchestrator:
   `experiments/results/manual_responses/<task_id>/<variant>/response.txt`
2. Write the assistant's output in **Format A** (diff) or **Format B** (full file).
3. Re-run `run_trial.py --assistant local` to apply and evaluate.

---

## Multi-Task Prompt Chaining (future)

For multi-step tasks, include previous conversation turns in the API request
`messages` array.  The `run_trial.py` orchestrator supports this via the
`--conversation` flag (not yet implemented for the pilot).
