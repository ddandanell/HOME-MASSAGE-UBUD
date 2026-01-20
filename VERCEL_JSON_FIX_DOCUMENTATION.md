# Vercel.json Schema Validation Fix

## Problem

The build on the `copilot/optimize-landing-page-seo` branch was failing with the following error:

```
Build Failed
The `vercel.json` schema validation failed with the following message: should NOT have additional property `rootDirectory`
```

This error occurred at commit `e3ee467` and affects the deployment to Vercel.

## Root Cause

The `vercel.json` file in the `copilot/optimize-landing-page-seo` branch contained two properties that were added in commit `aa529bf`:

1. `"rootDirectory": "."` (line 5)
2. `"installCommand": "npm ci"` (line 6)

According to official Vercel documentation and community forums, the `rootDirectory` property has been deprecated and removed from the supported Vercel configuration schema. It can no longer be specified in `vercel.json` and must instead be configured through the Vercel dashboard under Project Settings > General > Root Directory.

## Solution

**The fix**: Remove the `rootDirectory` property from `vercel.json`.

### What was changed:

**Before (invalid schema)**:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rootDirectory": ".",
  "installCommand": "npm ci",
  ...
}
```

**After (valid schema)**:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm ci",
  ...
}
```

### What was kept:

- `installCommand`: This property **IS** officially supported by Vercel and was correctly retained.
- All other properties (headers, redirects, rewrites, etc.) remain unchanged.

## Implementation

The fix has been applied to the `copilot/optimize-landing-page-seo` branch in commit `8b89b3c`.

### Applying the Fix

If you need to apply this fix to other branches, use one of these methods:

#### Method 1: Cherry-pick the fix commit
```bash
git checkout your-branch
git cherry-pick 8b89b3c
```

#### Method 2: Apply the patch manually
Remove line 5 from `vercel.json`:
```diff
   "buildCommand": "npm run build",
   "outputDirectory": "dist",
   "framework": "vite",
-  "rootDirectory": ".",
   "installCommand": "npm ci",
```

#### Method 3: Use the patch file
```bash
git apply /tmp/vercel-json-fix.patch
```

## Verification

After applying the fix:

1. **Validate JSON syntax**:
   ```bash
   cat vercel.json | python3 -m json.tool > /dev/null && echo "Valid JSON"
   ```

2. **Check for the removed property**:
   ```bash
   grep "rootDirectory" vercel.json
   # Should return nothing (exit code 1)
   ```

3. **Deploy to Vercel**: The build should now pass schema validation.

## References

- [Vercel Project Configuration Documentation](https://vercel.com/docs/project-configuration)
- [Vercel vercel.json Schema](https://vercel.com/docs/project-configuration/vercel-json)
- Community discussion: [Help needed configuring root directory](https://community.vercel.com/t/help-needed-configuring-root-directory/7436)

## Notes

- The `rootDirectory` setting must now be configured through the Vercel dashboard if needed for monorepo or subdirectory deployments.
- For this project, `rootDirectory: "."` specified the repository root, which is the default behavior, so removing it has no functional impact.
- The `installCommand` property is retained as it IS a valid and supported configuration option.
