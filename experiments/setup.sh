#!/usr/bin/env bash
# experiments/setup.sh
# Bootstrap both workspace projects from the template.
# Idempotent: safe to run multiple times.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
TEMPLATE_DIR="${SCRIPT_DIR}/template"
WORKSPACE_DIR="${SCRIPT_DIR}/workspace"

log() { echo "[setup] $*"; }

# ---------------------------------------------------------------------------
# 1. Ensure workspace directory exists
# ---------------------------------------------------------------------------
mkdir -p "${WORKSPACE_DIR}"

# ---------------------------------------------------------------------------
# 2. Helper: bootstrap one project variant
#    Usage: bootstrap_project <dir_name> <ui_package> <ui_import_path>
# ---------------------------------------------------------------------------
bootstrap_project() {
  local project_name="$1"       # e.g. project-zero
  local ui_package="$2"         # e.g. zero-shot  or  @mui/material
  local ui_import="$3"          # e.g. zero-shot  or  @mui/material
  local project_dir="${WORKSPACE_DIR}/${project_name}"

  log "Bootstrapping ${project_name} → ${project_dir}"

  # Copy template (overwrite if re-running)
  rm -rf "${project_dir}"
  cp -r "${TEMPLATE_DIR}/." "${project_dir}"

  # ----- Replace UI import placeholder -----
  # The template uses the literal string  PLACEHOLDER_UI_IMPORT  in source files.
  # We replace it with the real package import path.
  node - "${project_dir}" "${ui_import}" <<'NODE_EOF'
const fs   = require('fs');
const path = require('path');

const projectDir = process.argv[2];
const uiImport   = process.argv[3];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') { walk(full); }
    else if (entry.isFile() && /\.(ts|tsx|js|jsx)$/.test(entry.name)) {
      const src = fs.readFileSync(full, 'utf8');
      const replaced = src.replace(/PLACEHOLDER_UI_IMPORT/g, uiImport);
      if (replaced !== src) {
        fs.writeFileSync(full, replaced, 'utf8');
        console.log('  patched:', full.replace(projectDir + '/', ''));
      }
    }
  }
}
walk(projectDir);
NODE_EOF

  # ----- Update package.json name and add real UI dependency -----
  node - "${project_dir}" "${project_name}" "${ui_package}" <<'NODE_EOF'
const fs   = require('fs');
const path = require('path');

const projectDir   = process.argv[2];
const projectName  = process.argv[3];
const uiPackage    = process.argv[4];

const pkgPath = path.join(projectDir, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

pkg.name = projectName;
pkg.dependencies = pkg.dependencies || {};
// Remove template placeholder dependency key if present
delete pkg.dependencies['PLACEHOLDER_UI_PACKAGE'];
pkg.dependencies[uiPackage] = '*';

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
console.log('  package.json updated for', projectName, '- added', uiPackage);
NODE_EOF

  # ----- Install dependencies -----
  log "  Installing npm dependencies for ${project_name}..."
  (cd "${project_dir}" && npm install --prefer-offline 2>&1 | tail -5)

  # ----- Create git baseline -----
  if [ ! -d "${project_dir}/.git" ]; then
    log "  Initialising git repo and committing baseline for ${project_name}..."
    (
      cd "${project_dir}"
      git init -q
      git config user.email "experiment-bot@zeroshot"
      git config user.name  "Experiment Bot"
      git add -A
      git commit -q -m "baseline: ${project_name} fresh from template"
    )
  else
    log "  Git repo already exists in ${project_name}; skipping init."
    (
      cd "${project_dir}"
      git config user.email "experiment-bot@zeroshot"
      git config user.name  "Experiment Bot"
      # Re-commit any changes so baseline is always the latest template state
      git add -A
      git diff --cached --quiet || git commit -q -m "baseline: refresh ${project_name}"
    )
  fi

  log "  Done: ${project_name}"
}

# ---------------------------------------------------------------------------
# 3. Bootstrap both variants
# ---------------------------------------------------------------------------
bootstrap_project "project-zero" "zero-shot"    "zero-shot"
bootstrap_project "project-mui"  "@mui/material" "@mui/material"

# ---------------------------------------------------------------------------
# 4. Create results directories (if not present)
# ---------------------------------------------------------------------------
mkdir -p "${SCRIPT_DIR}/results/raw"
mkdir -p "${SCRIPT_DIR}/results/manual_responses/sample_task/project-zero"
mkdir -p "${SCRIPT_DIR}/results/manual_responses/sample_task/project-mui"

log "Setup complete."
log ""
log "Next steps:"
log "  pip install -r experiments/requirements.txt"
log "  python experiments/run_trial.py --dry-run --all-tasks --all-variants"
