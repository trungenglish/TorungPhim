echo "Checking branch: $VERCEL_GIT_COMMIT_REF"

if [ "$VERCEL_GIT_COMMIT_REF" = "main" ] || [ "$VERCEL_GIT_COMMIT_REF" = "develop" ]; then
  echo "✅ Deploy allowed"
  exit 1
else
  echo "🛑 Deploy blocked"
  exit 0
fi
