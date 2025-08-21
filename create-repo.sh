#!/usr/bin/env bash
set -euo pipefail

REPO_OWNER="Uppi28"
REPO_NAME="daily-routine"
VISIBILITY="public" # "public" or "private"

if ! command -v gh >/dev/null 2>&1; then
  echo "GitHub CLI (gh) not found. Install: https://cli.github.com/ and run 'gh auth login'."
  exit 1
fi

if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "chore: initial commit - kid-friendly productivity & creativity app"
fi

# Create the repo and push
gh repo create "$REPO_OWNER/$REPO_NAME" --"$VISIBILITY" --source="." --remote="origin" --push

echo "Done! Repo created at: https://github.com/$REPO_OWNER/$REPO_NAME"