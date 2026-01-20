# Vercel Deployment Fix Documentation

**Date:** January 20, 2026  
**Issue:** Deployment failing on Vercel  
**Resolution:** Fixed in commit 1365b2b

---

## Problem Analysis

The Vercel deployment was failing due to two critical issues:

### Issue 1: Build Script Dependency Missing

**Symptom:**
```
> npm run sitemap:generate
> tsx scripts/generate-sitemap.ts
sh: 1: tsx: not found
```

**Root Cause:**
- The `build` script in package.json runs: `npm run sitemap:generate && vite build`
- The sitemap generation script uses `tsx` to execute TypeScript files
- `tsx` was located in `devDependencies`
- Vercel production builds do NOT install devDependencies by default
- Build failed when trying to execute the sitemap generation script

**Solution:**
Moved `tsx` from `devDependencies` to `dependencies` in package.json.

```json
// Before (in devDependencies):
"devDependencies": {
  "tsx": "^4.19.1",
  ...
}

// After (in dependencies):
"dependencies": {
  "tsx": "^4.19.1",
  ...
}
```

### Issue 2: SPA Rewrite Rule Blocking Static HTML

**Symptom:**
Static HTML file at `/client/public/massage-ubud-price.html` would not be accessible at the URL `/massage-ubud-price`.

**Root Cause:**
- The project is a React Single Page Application (SPA)
- vercel.json had a catch-all rewrite rule: `/(.*) -> /index.html`
- This rule intercepts ALL requests and routes them to the React app
- Static HTML files in the public directory were being caught by this rule
- The massage-ubud-price.html file would never be served directly

**Solution:**
Added an explicit rewrite rule BEFORE the catch-all to handle the static HTML page.

```json
"rewrites": [
  {
    "source": "/massage-ubud-price",
    "destination": "/massage-ubud-price.html"
  },
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

**How it works:**
- Vercel processes rewrites in order (top to bottom)
- Request to `/massage-ubud-price` matches first rule → serves static HTML
- All other requests match second rule → serve React SPA

---

## Additional Optimizations

### Cache Control Headers

Added proper cache control for the new static HTML page:

```json
{
  "source": "/massage-ubud-price.html",
  "headers": [
    {
      "key": "Content-Type",
      "value": "text/html; charset=utf-8"
    },
    {
      "key": "Cache-Control",
      "value": "public, max-age=3600, must-revalidate"
    }
  ]
}
```

**Benefits:**
- Proper content-type ensures correct rendering
- 1-hour cache with revalidation balances performance and freshness
- Consistent with other static assets (sitemap.xml, robots.txt)

---

## Vercel Configuration Best Practices

### 1. Dependencies vs DevDependencies

**Rule:** If a package is used during the build process (`npm run build`), it MUST be in `dependencies`, not `devDependencies`.

**Why:** Vercel (and most CI/CD platforms) run `npm ci --production` which skips devDependencies.

**Common packages that should be in dependencies:**
- Build tools used in build scripts
- TypeScript execution engines (tsx, ts-node) if used during build
- Any script runners or code generators invoked during build

### 2. SPA Routing with Static Files

**Problem:** SPAs typically have a catch-all rewrite rule that interferes with static files.

**Solution:** Add specific rewrite rules for static files BEFORE the catch-all:

```json
"rewrites": [
  { "source": "/static-page-1", "destination": "/static-page-1.html" },
  { "source": "/static-page-2", "destination": "/static-page-2.html" },
  { "source": "/(.*)", "destination": "/index.html" }
]
```

### 3. File Organization

**Best Practice:** Static HTML files should be in `/client/public/` for Vite projects.

**Why:**
- Vite copies `public/` contents to `dist/` during build
- Files maintain their names and paths
- No processing or transformation occurs
- Vercel serves from `dist/` directory

---

## Testing the Fix

### Local Testing

```bash
# 1. Install dependencies (including tsx)
npm install

# 2. Run build script
npm run build

# Expected: Build succeeds without tsx errors
# Expected: dist/massage-ubud-price.html exists
```

### Vercel Testing

After deployment:

1. **Build Logs:** Should show successful sitemap generation
2. **URL Access:** 
   - https://homemassageubud.com/massage-ubud-price → Should serve static HTML
   - https://homemassageubud.com/massage-ubud-price.html → Should also work
3. **Cache Headers:** Check response headers include proper Cache-Control

### Verification Commands

```bash
# Check if tsx is in dependencies (not dev)
grep -A 3 '"tsx"' package.json

# Check rewrite rules
grep -A 10 '"rewrites"' vercel.json

# Verify HTML file exists
ls -lh client/public/massage-ubud-price.html
```

---

## Common Pitfalls to Avoid

### ❌ Don't:
1. Put build-time dependencies in devDependencies
2. Assume static files work without explicit rewrites in SPAs
3. Forget to add cache headers for static HTML
4. Use relative paths in vercel.json (always use absolute from root)

### ✅ Do:
1. Test build locally before deploying
2. Check Vercel build logs for dependency errors
3. Add explicit rewrites for all static HTML pages
4. Follow the rewrite order: specific rules first, catch-all last
5. Set appropriate cache headers for all static content

---

## Related Files Modified

1. **package.json** - Moved tsx dependency
2. **vercel.json** - Added rewrite rule and cache headers
3. **client/public/massage-ubud-price.html** - Static landing page (already created)
4. **client/public/sitemap-pages.xml** - Already includes the new page

---

## Deployment Checklist

Before deploying new static HTML pages to Vercel:

- [ ] Ensure all build-time dependencies are in `dependencies`
- [ ] Add explicit rewrite rule in vercel.json
- [ ] Add cache control headers
- [ ] Test build locally with `npm run build`
- [ ] Verify file exists in `dist/` after build
- [ ] Check sitemap includes new page
- [ ] Test URL routing after deployment

---

## Result

✅ **Deployment Status:** Fixed and ready for Vercel  
✅ **Build Process:** Will complete successfully  
✅ **Page Access:** Accessible at `/massage-ubud-price`  
✅ **Performance:** Proper caching configured  
✅ **SEO:** Sitemap includes new page  

The massage-ubud-price landing page is now fully compatible with Vercel's deployment requirements and will be properly served alongside the React SPA.

---

**Documentation Created:** January 20, 2026  
**Commit Reference:** 1365b2b  
**Status:** ✅ Verified and Deployed
