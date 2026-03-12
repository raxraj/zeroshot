"""
experiments/utils/apply_patch.py
=================================
Robust assistant-output applier.

Supports two formats:
  A) Unified diff  (git diff / diff -u output)
  B) Full-file blocks with  ### FILE: path/to/file  header markers

Falls back to writing the entire response as a single file if neither
format is detected and there is only one file in files_to_edit.
"""

from __future__ import annotations

import re
import subprocess
import tempfile
from pathlib import Path


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def apply_patch(response: str, project_dir: Path, dry_run: bool = False) -> None:
    """
    Detect format and apply the assistant response to project_dir.

    Raises RuntimeError on unrecoverable failure.
    """
    response = response.strip()
    if not response:
        raise ValueError("Assistant returned an empty response.")

    if _looks_like_unified_diff(response):
        _apply_unified_diff(response, project_dir, dry_run)
    elif _looks_like_file_blocks(response):
        _apply_file_blocks(response, project_dir, dry_run)
    else:
        raise ValueError(
            "Could not detect patch format in assistant response.\n"
            "Expected a unified diff (--- / +++ lines) or full-file blocks "
            "(### FILE: path lines).\n"
            f"Response preview:\n{response[:300]}"
        )


# ---------------------------------------------------------------------------
# Format detection
# ---------------------------------------------------------------------------

_UNIFIED_DIFF_RE = re.compile(r"^---\s+\S", re.MULTILINE)
_FILE_BLOCK_RE   = re.compile(r"^###\s+FILE:\s+\S", re.MULTILINE)


def _looks_like_unified_diff(text: str) -> bool:
    return bool(_UNIFIED_DIFF_RE.search(text))


def _looks_like_file_blocks(text: str) -> bool:
    return bool(_FILE_BLOCK_RE.search(text))


# ---------------------------------------------------------------------------
# Format A: unified diff
# ---------------------------------------------------------------------------

def _strip_markdown_fence(text: str) -> str:
    """Remove optional ``` or ```diff fences around the diff."""
    text = re.sub(r"^```[a-z]*\n", "", text.strip(), flags=re.MULTILINE)
    text = re.sub(r"\n```$", "", text.strip(), flags=re.MULTILINE)
    return text.strip()


def _apply_unified_diff(response: str, project_dir: Path, dry_run: bool) -> None:
    diff_text = _strip_markdown_fence(response)

    # Remove leading `a/` and `b/` prefixes that git adds (git apply handles
    # them, but plain `patch` may not in --dry-run).  We use git apply.
    if dry_run:
        print(f"[apply_patch] [dry-run] Would apply unified diff to {project_dir}:")
        print(diff_text[:500])
        return

    with tempfile.NamedTemporaryFile(
        mode="w", suffix=".patch", delete=False
    ) as tmp:
        tmp.write(diff_text)
        tmp_path = tmp.name

    try:
        result = subprocess.run(
            ["git", "apply", "--whitespace=fix", tmp_path],
            cwd=project_dir,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        )
        if result.returncode != 0:
            # Try with -p0 (no path stripping) in case there are no a/ b/ prefixes
            result2 = subprocess.run(
                ["git", "apply", "--whitespace=fix", "-p0", tmp_path],
                cwd=project_dir,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
            )
            if result2.returncode != 0:
                raise RuntimeError(
                    f"git apply failed:\n{result.stderr}\n{result2.stderr}"
                )
    finally:
        Path(tmp_path).unlink(missing_ok=True)


# ---------------------------------------------------------------------------
# Format B: full-file blocks
# ---------------------------------------------------------------------------

_FILE_BLOCK_SPLIT = re.compile(r"^###\s+FILE:\s+(.+)$", re.MULTILINE)


def _apply_file_blocks(response: str, project_dir: Path, dry_run: bool) -> None:
    """
    Parse blocks of the form:

        ### FILE: src/utils/formatDate.ts
        <file content here>

    and write each block to the corresponding path inside project_dir.
    """
    parts = _FILE_BLOCK_SPLIT.split(response)
    # parts = [ leading_text, path1, content1, path2, content2, ... ]
    # parts[0] is any text before the first ### FILE: header

    if len(parts) < 3:
        raise ValueError("File-block format detected but no blocks parsed.")

    # Iterate pairs (path, content)
    for i in range(1, len(parts), 2):
        rel_path = parts[i].strip()
        content  = parts[i + 1].strip() if i + 1 < len(parts) else ""

        # Strip markdown code fence if present
        content = re.sub(r"^```[a-z]*\n", "", content)
        content = re.sub(r"\n```$", "", content)
        content = content.strip() + "\n"

        target = (project_dir / rel_path).resolve()

        # Safety: ensure target is inside project_dir
        project_dir_resolved = project_dir.resolve()
        if not str(target).startswith(str(project_dir_resolved)):
            raise ValueError(
                f"Path traversal attempt blocked: {rel_path} → {target}"
            )

        if dry_run:
            print(f"[apply_patch] [dry-run] Would write {len(content)} bytes → {rel_path}")
            continue

        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(content)
        print(f"[apply_patch] Wrote {len(content)} bytes → {rel_path}")
