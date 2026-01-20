# GitHub Pages Deployment Guide

**Last Updated:** January 20, 2026  
**Status:** ✅ Configured & Ready  
**Framework:** React + Vite (SPA)  
**Platform:** GitHub Pages

---

## 📋 Overview

This repository is configured for **optional GitHub Pages deployment** as a secondary hosting option. The primary deployment platform is **Vercel**.

### Key Differences: GitHub Pages vs Vercel

| Feature | GitHub Pages | Vercel |
|---------|-------------|--------|
| **Build Method** | GitHub Actions | Git integration |
| **Custom Headers** | ❌ Not supported | ✅ Supported |
| **SPA Routing** | ⚠️ Requires workarounds | ✅ Native support |
| **Environment Variables** | ⚠️ Limited (secrets only) | ✅ Full support |
| **Performance** | Good | Excellent |
| **SSL/HTTPS** | ✅ Free | ✅ Free |
| **Custom Domain** | ✅ Supported | ✅ Supported |
| **Build Time** | ~5-7 minutes | ~3-5 minutes |

**Recommendation:** Use **Vercel** for production, GitHub Pages as backup or staging.

---

## 🚀 Quick Start - Enable GitHub Pages

### Enable in Repository Settings

1. Go to **Repository Settings** → **Pages**
2. Under **Source**, select:
   - **Source:** `GitHub Actions` (recommended)
   - Or: **Branch:** `gh-pages` (if using branch deployment)
3. Click **Save**

### Trigger Deployment

The GitHub Actions workflow (`.github/workflows/deploy-github-pages.yml`) is already configured and will:
- Trigger on push to `main` branch
- Or can be manually triggered via **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

---

## 📄 GitHub Actions Workflow Configuration

### Workflow File Location
```
.github/workflows/deploy-github-pages.yml
```

### What It Does
1. ✅ Checks out repository
2. ✅ Sets up Node.js 20.11.0
3. ✅ Installs dependencies with `npm ci`
4. ✅ Runs build: `npm run build` (outputs to `dist/`)
5. ✅ Adds `.nojekyll` file (disables Jekyll processing)
6. ✅ Uploads `dist/` as artifact
7. ✅ Deploys to GitHub Pages

### Trigger Conditions
```yaml
on:
  push:
    branches:
      - main
  workflow_dispatch:  # Manual trigger
```

---

## 🔍 Understanding the Configuration

### 1. `.nojekyll` File

**Purpose:** Prevents GitHub Pages from processing your site with Jekyll (a static site generator).

**Why needed:**
- Vite builds already produce static files
- Jekyll would interfere with asset paths
- Files/folders starting with `_` would be ignored without this

**How it's added:**
```bash
touch dist/.nojekyll
```
This is automatically done in the workflow.

### 2. Base URL Configuration

⚠️ **Important for Repository Pages**

If deploying to a **repository page** (e.g., `https://username.github.io/repo-name/`), you MUST set the base URL in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/HOME-MASSAGE-UBUD/',  // Replace with your repo name
  // ... rest of config
});
```

**Current Configuration:** Base URL is set to `/` (root), which works for:
- ✅ Custom domain (e.g., `homemassageubud.com`)
- ✅ Organization page (e.g., `ddandanell.github.io`)
- ❌ Repository page (would need `/HOME-MASSAGE-UBUD/`)

---

## 🌐 Custom Domain Setup

### Add Custom Domain

1. **In Repository Settings**
   - Go to **Settings** → **Pages**
   - Under **Custom domain**, enter your domain (e.g., `homemassageubud.com`)
   - Click **Save**
   - Enable **Enforce HTTPS** checkbox

2. **Configure DNS**
   
   For an **apex domain** (e.g., `homemassageubud.com`):
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
   
   For a **subdomain** (e.g., `www.homemassageubud.com`):
   ```
   Type: CNAME
   Name: www
   Value: ddandanell.github.io
   ```

3. **Add CNAME File**
   
   Create `client/public/CNAME` with your domain:
   ```
   homemassageubud.com
   ```
   
   This file will be copied to `dist/` during build.

### Verify Custom Domain

```bash
# Check DNS propagation
nslookup homemassageubud.com

# Should resolve to GitHub Pages IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153
```

**DNS Propagation Time:** 24-48 hours

---

## ⚠️ Known Limitations & Workarounds

### 1. SPA Routing (404 on Refresh)

**Problem:**
- GitHub Pages serves static files only
- Direct link to `/home-massage` returns 404
- Refreshing any route (except `/`) shows 404 page

**Workaround Options:**

#### Option A: Hash Router (Easiest)
Change React Router to use hash-based routing:
```typescript
// Instead of: import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom';

// URLs become: homemassageubud.com/#/home-massage
```

**Pros:** Simple, works perfectly  
**Cons:** URLs have `#` in them (less SEO-friendly)

#### Option B: 404 Redirect Trick
Create `client/public/404.html` with redirect script:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/'">
</head>
<body></body>
</html>
```

Then in `index.html`:
```html
<script>
  (function() {
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

**Pros:** Clean URLs  
**Cons:** Complex, slight delay on direct links

#### Option C: Use Vercel Instead
✅ **RECOMMENDED:** Deploy to Vercel where SPA routing works natively.

---

### 2. Custom Headers Not Supported

**Problem:** GitHub Pages doesn't support custom HTTP headers (security headers, cache control, etc.).

**Impact:**
- No custom security headers (X-Frame-Options, CSP, etc.)
- No control over cache behavior
- No custom CORS configuration

**Workaround:** Use Vercel for production where headers are fully supported.

---

### 3. Environment Variables

**Problem:** GitHub Pages doesn't support runtime environment variables.

**Workaround:**
- Use **GitHub Secrets** for build-time variables
- Add to workflow:
  ```yaml
  - name: Build
    run: npm run build
    env:
      VITE_API_URL: ${{ secrets.API_URL }}
  ```
- Variables are baked into the build (not runtime-configurable)

---

## 🧪 Testing GitHub Pages Deployment

### Manual Testing

1. **Trigger Deployment**
   ```bash
   git push origin main
   ```
   
   Or manually via GitHub Actions tab.

2. **Check Workflow Status**
   - Go to **Actions** tab
   - Click on **Deploy to GitHub Pages** workflow
   - Monitor progress (takes 5-7 minutes)

3. **Verify Deployment**
   - Visit `https://ddandanell.github.io/HOME-MASSAGE-UBUD/`
   - Or your custom domain if configured

### Automated Testing

```bash
# Test homepage
curl -I https://ddandanell.github.io/HOME-MASSAGE-UBUD/
# Should return 200 OK

# Test 404 handling
curl -I https://ddandanell.github.io/HOME-MASSAGE-UBUD/nonexistent
# Should return 404 (expected)

# Test sitemap
curl -I https://ddandanell.github.io/HOME-MASSAGE-UBUD/sitemap.xml
# Should return 200 OK
```

---

## 🐛 Troubleshooting

### Issue 1: Workflow Fails with Permission Error

**Symptom:**
```
Error: Resource not accessible by integration
```

**Solution:**
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ✅ **Read and write permissions**
3. Click **Save**

---

### Issue 2: Assets Return 404

**Symptom:**
- Page loads but CSS/JS files return 404
- DevTools console shows: `GET /assets/index-*.js 404`

**Cause:** Incorrect base URL configuration.

**Solution:**
1. Check if deploying to repository page vs custom domain
2. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/HOME-MASSAGE-UBUD/',  // For repo page
     // OR
     base: '/',  // For custom domain
   });
   ```
3. Rebuild and redeploy

---

### Issue 3: Page Shows Old Content

**Symptom:**
- Pushed changes but site shows old version
- Hard refresh doesn't help

**Cause:** Browser caching or CDN propagation delay.

**Solution:**
```bash
# Clear GitHub Pages cache
# (Done automatically on new deployment)

# Test with cache bypass
curl -H "Cache-Control: no-cache" https://your-site.github.io/

# Force refresh in browser
# Mac: Cmd+Shift+R
# Windows: Ctrl+Shift+R
```

---

### Issue 4: Custom Domain Shows 404

**Symptom:**
- Custom domain is configured but shows 404
- GitHub Pages URL works fine

**Cause:** DNS not configured or CNAME file missing.

**Solution:**
1. Verify DNS records (see Custom Domain Setup)
2. Ensure `CNAME` file exists in `client/public/`
3. Check repository settings: Custom domain is correctly set
4. Wait 24-48 hours for DNS propagation

---

## 📊 Build & Deployment Logs

### View Logs

1. Go to **Actions** tab
2. Click on workflow run
3. Expand steps to view logs

### Key Sections to Check

- **Build** - Should complete in 5-10 seconds
- **Upload artifact** - Should upload ~4-5 MB
- **Deploy to GitHub Pages** - Should complete in 30-60 seconds

### Example Successful Build
```
✓ 1934 modules transformed.
✓ built in 6.38s
✓ Artifact uploaded successfully
✓ Deployed to GitHub Pages
```

---

## 🔄 Rollback Procedure

### Option 1: Redeploy Previous Commit

```bash
# Find previous working commit
git log --oneline

# Create new branch from previous commit
git checkout -b rollback <commit-hash>

# Push to main (or merge via PR)
git push origin rollback:main
```

### Option 2: Manual Workflow Dispatch

1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages**
3. Click **Run workflow**
4. Select branch with working code
5. Click **Run**

---

## 📈 Performance & SEO Considerations

### GitHub Pages Performance

**Pros:**
- ✅ Free CDN (fast globally)
- ✅ Automatic HTTPS
- ✅ Good uptime (99.9%+)

**Cons:**
- ❌ No custom cache headers
- ❌ No image optimization
- ❌ No automatic compression (except gzip)
- ❌ Limited to 100 GB bandwidth/month
- ❌ Max 1 GB repository size

### SEO Limitations

- ⚠️ No server-side rendering (SSR)
- ⚠️ No dynamic meta tags per route
- ⚠️ Hash router URLs less SEO-friendly
- ✅ Sitemap works fine (static)
- ✅ Robots.txt supported

**Recommendation:** For maximum SEO performance, use **Vercel** with proper meta tag management.

---

## 🔐 Security Considerations

### What's Protected
- ✅ HTTPS enforced (if configured)
- ✅ GitHub authentication for repository
- ✅ Secrets management for CI/CD

### What's NOT Protected
- ❌ No custom security headers (X-Frame-Options, CSP, etc.)
- ❌ No rate limiting
- ❌ No DDoS protection beyond GitHub's defaults
- ❌ No WAF (Web Application Firewall)

**Recommendation:** For production sites handling sensitive data, use **Vercel** with proper security headers.

---

## 📚 Official Documentation

### GitHub Pages
- [Official Documentation](https://docs.github.com/en/pages)
- [Publishing Sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Custom Domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Troubleshooting 404s](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

### GitHub Actions
- [Actions Documentation](https://docs.github.com/en/actions)
- [deploy-pages Action](https://github.com/actions/deploy-pages)
- [Workflow Syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)

---

## ✅ Deployment Checklist

### Initial Setup (One-Time)
- [ ] Enable GitHub Pages in repository settings
- [ ] Configure workflow permissions (read/write)
- [ ] Add `.nojekyll` to workflow (already done)
- [ ] Configure base URL in vite.config.ts (if needed)
- [ ] Test workflow runs successfully

### Before Each Deployment
- [ ] Run `npm run build` locally - builds successfully
- [ ] Test with `npm run preview` locally
- [ ] Review changes - no breaking changes
- [ ] Update sitemap if routes changed

### After Deployment
- [ ] Verify workflow completed successfully
- [ ] Test production site loads
- [ ] Test 3-4 key routes
- [ ] Check sitemap.xml is accessible
- [ ] Monitor for errors in browser console

---

## 🆘 Getting Help

### GitHub Support
- [Community Forum](https://github.community/)
- [GitHub Support](https://support.github.com/)
- [Status Page](https://www.githubstatus.com/)

### Useful Commands

```bash
# Check workflow status
gh workflow view "Deploy to GitHub Pages"

# Trigger manual deployment
gh workflow run deploy-github-pages.yml

# View recent deployments
gh run list --workflow=deploy-github-pages.yml

# View specific deployment logs
gh run view <run-id> --log
```

---

## 🎯 Decision: Vercel vs GitHub Pages

### Use Vercel When:
- ✅ Need custom HTTP headers (security, caching)
- ✅ Need proper SPA routing without hacks
- ✅ Need environment variables per deployment
- ✅ Want faster builds (3-5 min vs 5-7 min)
- ✅ Need preview deployments per branch
- ✅ Want better analytics & monitoring
- ✅ Production site with high traffic

### Use GitHub Pages When:
- ✅ Simple static site or documentation
- ✅ Personal project or portfolio
- ✅ Want 100% free hosting (no credit card)
- ✅ Low traffic site
- ✅ Backup/staging deployment
- ✅ Don't need custom headers or advanced features

---

**Last Updated:** January 20, 2026  
**Maintained By:** Development Team  
**Status:** ✅ Configured & Ready (Secondary Platform)
