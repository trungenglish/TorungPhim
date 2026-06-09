#!/usr/bin/env bash

# Local replica of the GitHub Actions CI pipeline defined in .github/workflows/ci-cd.yml
# Usage: ./scripts/run-ci.sh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

command -v pnpm >/dev/null 2>&1 || {
  echo "❌ pnpm is required. Install it via 'npm install -g pnpm'." >&2
  exit 1
}

echo "▶️  Starting local CI run..."

run_step() {
  local label="$1"
  local cmd="$2"
  local allow_failure="${3:-false}"

  echo ""
  echo "🔹 ${label}"
  echo "    ↳ ${cmd}"

  if [ "${allow_failure}" = "true" ]; then
    if ! bash -c "${cmd}"; then
      echo "    ⚠️  ${label} failed but continuing (allow_failure)."
    fi
  else
    bash -c "${cmd}"
  fi
}

run_step "Install dependencies" "pnpm install"
run_step "Lint code" "pnpm lint" true
run_step "Type check" "pnpm type-check" true
run_step "Security audit" "pnpm audit --audit-level=high" true
run_step "Build" "pnpm build"
run_step "Unit tests" "pnpm test" true
run_step "Coverage" "pnpm run test:coverage" true
run_step "E2E tests" "pnpm test:e2e" true

echo ""
echo "✅ Local CI run finished."

