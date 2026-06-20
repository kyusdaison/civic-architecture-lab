#!/bin/bash
# Civic Architecture Lab — deploy to its OWN GitHub repo (Cloudflare Pages auto-builds).
# FIRST TIME: create an EMPTY GitHub repo (no README/gitignore) named to match REPO below,
# then double-click this file. After it pushes, connect the repo to Cloudflare Pages
# (Build command: npm run build   |   Output directory: dist).

cd "$(dirname "$0")" || exit 1

# >>> If you used a different repo name/owner, edit this one line <<<
REPO="https://github.com/kyusdaison/civic-architecture-lab.git"
BRANCH="main"

pause() { echo ""; read -r -p "Press Enter to close this window..." _; }

echo "================================================="
echo "  Civic Architecture Lab — deploy via GitHub"
echo "================================================="

if ! command -v git >/dev/null 2>&1; then
  echo "Git isn't installed. Run:  xcode-select --install   then try again."
  pause; exit 1
fi

# Make sure build artifacts are never committed.
if [ ! -f .gitignore ]; then
  printf "node_modules\ndist\n.DS_Store\n*.local\n.vercel\n" > .gitignore
fi

# Initialise the repo on first run.
if [ ! -d .git ]; then
  echo "First run — initialising local git repo..."
  git init -q
  git branch -M "$BRANCH"
fi
git remote remove origin 2>/dev/null
git remote add origin "$REPO"
git config user.email "kyus.daison@gmail.com"
git config user.name  "Kyus Daison"

git add -A
if git diff --cached --quiet && git rev-parse HEAD >/dev/null 2>&1; then
  echo "No changes to deploy."
  pause; exit 0
fi

echo ""
echo "Changes to be deployed:"
git status --short

git commit -q -m "Deploy Civic Architecture Lab (CAL) site"

echo ""
echo "Pushing to $REPO ($BRANCH)..."
echo "(If asked to sign in: GitHub needs a Personal Access Token, not your password —"
echo " tell Claude \"help me make a GitHub token\" if you don't have one.)"
if git push -u origin "$BRANCH"; then
  echo ""
  echo "Done. Now in Cloudflare → Pages → Create → Connect to Git → select 'civic-architecture-lab':"
  echo "   Build command:      npm run build"
  echo "   Output directory:   dist"
  echo "Then add your custom domain. (SPA routing is handled by public/_redirects.)"
else
  echo ""
  echo "Push failed — almost always authentication, or the GitHub repo doesn't exist yet."
  echo "Create the EMPTY repo on github.com first, then run this again."
fi
pause
