#!/bin/bash
# Civic Architecture Lab — local dev launcher.
# Double-click this file in Finder to start the CAL site on your Mac.

cd "$(dirname "$0")" || exit 1

echo "==============================================="
echo "  Civic Architecture Lab (CAL) — local dev"
echo "==============================================="

if ! command -v node >/dev/null 2>&1; then
  echo ""
  echo "Node.js is not installed."
  echo "Install Node 20 LTS from https://nodejs.org , then double-click this again."
  echo ""
  read -r -p "Press Enter to close..." _
  exit 1
fi

echo "Using Node $(node -v)"

if [ ! -d node_modules ]; then
  echo ""
  echo "First run: installing dependencies (this can take a couple of minutes)..."
  npm install || { echo "Install failed."; read -r -p "Press Enter to close..." _; exit 1; }
fi

echo ""
echo "Starting dev server at http://localhost:3001"
echo "Your browser will open shortly. Press Ctrl+C here to stop the server."
echo ""

( sleep 4 && open "http://localhost:3001" ) &

npm run dev
