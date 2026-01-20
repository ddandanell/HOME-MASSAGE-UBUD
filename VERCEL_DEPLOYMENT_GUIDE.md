# Vercel Deployment Guide - Complete Setup & Troubleshooting

**Last Updated:** January 20, 2026  
**Status:** ✅ Production Ready  
**Framework:** React + Vite (SPA)  
**Platform:** Vercel

---

## 🚀 Quick Start - Deploy Now

### Prerequisites
- GitHub repository connected to Vercel
- Node.js 20.x or later
- npm 10.x or later

### Deploy in 3 Steps

1. **Push to GitHub** (triggers automatic deployment)
   ```bash
   git push origin main
   ```

2. **Verify on Vercel Dashboard**
   - Go to https://vercel.com/dashboard
   - Check deployment status
   - View deployment logs

3. **Test Your Site**
   - Visit your production URL
   - Test deep links (e.g., `/home-massage`, `/services/balinese-massage`)
   - Verify sitemap is accessible at `/sitemap.xml`

---

## 📋 Vercel Dashboard Configuration

### IMPORTANT: Configure These Settings in Vercel Dashboard

The following settings should be configured in your Vercel Dashboard under **Project Settings → Build & Development Settings**, NOT in `vercel.json`:

#### Build Settings
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm ci
Root Directory: . (leave empty for project root)
```

#### Node.js Version
```
Node.js Version: 20.x
```

### How to Access Settings
1. Go to https://vercel.com/dashboard
2. Select your project: `HOME-MASSAGE-UBUD`
3. Click **Settings** tab
4. Navigate to **Build & Development Settings**
5. Configure the values above

---

## 📄 vercel.json Configuration

Your `vercel.json` file is optimized and contains ONLY what should be there:

### What's Included
✅ **Security Headers** - X-Content-Type-Options, X-Frame-Options, etc.  
✅ **Cache Control** - Aggressive caching for assets, reasonable for content  
✅ **SPA Routing** - Catch-all rewrite to index.html  
✅ **Static HTML Support** - Specific rewrite for massage-ubud-price.html  
✅ **Redirects** - Legacy URL redirects (typo corrections)  

### What's NOT Included (and why)
❌ `buildCommand` - **Deprecated**, use Dashboard instead  
❌ `outputDirectory` - **Deprecated**, use Dashboard instead  
❌ `framework` - **Deprecated**, use Dashboard instead  
❌ `installCommand` - **Deprecated**, use Dashboard instead  
❌ `rootDirectory` - **Deprecated**, use Dashboard instead  

**Reason:** These properties are deprecated by Vercel and should be configured in the Dashboard for better flexibility and per-environment support.

---

## 🔍 Understanding Your Configuration

### SPA Routing (Critical for React Router)

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
1. Request to `/massage-ubud-price` → serves static HTML file
2. All other requests → serves React SPA (`index.html`)
3. React Router handles client-side routing

**Why this matters:**
- Without this, deep links would 404 (e.g., `/home-massage`)
- Refreshing on any route would show 404
- Direct links shared on social media would break

### Security Headers

```json
"headers": [
  {
    "source": "/(.*)",
    "headers": [
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "X-Frame-Options", "value": "DENY" },
      { "key": "X-XSS-Protection", "value": "1; mode=block" },
      ...
    ]
  }
]
```

**Benefits:**
- Prevents MIME type sniffing attacks
- Protects against clickjacking
- Enables XSS protection
- Proper referrer policy for privacy

### Cache Control Strategy

| Resource Type | Cache Duration | Strategy |
|--------------|----------------|----------|
| Static Assets (`/assets/*`) | 1 year | Immutable (never changes) |
| Images | 1 year | Immutable |
| Fonts | 1 year | Immutable |
| Sitemap/Robots | 1 hour | Must revalidate |
| HTML Content | 1 hour | Must revalidate |

---

## ✅ Build Process Verification

### Local Build Test
```bash
# Clean and build
rm -rf dist
npm run build

# Verify output
ls -lh dist/
# Should see: index.html, assets/, sitemap.xml, robots.txt, etc.

# Check bundle size
du -sh dist/
# Expected: ~4-5 MB total, ~3 MB JS bundle
```

### Expected Build Output
```
dist/
├── index.html (9.4 KB)
├── 404.html (1.4 KB)
├── massage-ubud-price.html (82 KB)
├── assets/
│   ├── index-*.js (~3.1 MB) ⚠️ Large bundle
│   ├── index-*.css (125 KB)
│   └── [images and fonts]
├── sitemap.xml (28 KB)
├── sitemap-*.xml (various)
└── robots.txt (312 B)
```

### Performance Warning
⚠️ Your main JS bundle is **3.1 MB** (628 KB gzipped). This is considered large and may impact:
- Initial page load time
- Mobile user experience
- SEO rankings (Core Web Vitals)

**Recommendation:** Implement code splitting and lazy loading (see Optimization section below).

---

## 🧪 Testing Deployment

### 1. Test SPA Routing
```bash
# Test direct access to routes
curl -I https://your-site.vercel.app/home-massage
# Should return 200 OK, not 404

# Test deep nested routes
curl -I https://your-site.vercel.app/services/balinese-massage
# Should return 200 OK
```

### 2. Test Static HTML
```bash
curl -I https://your-site.vercel.app/massage-ubud-price
# Should return 200 OK and serve massage-ubud-price.html
```

### 3. Test Redirects
```bash
# Test legacy URL redirect
curl -I https://your-site.vercel.app/home-messedage
# Should return 308 (Permanent Redirect) to /home-massage
```

### 4. Test SEO Files
```bash
# Test robots.txt
curl https://your-site.vercel.app/robots.txt
# Should return robots.txt content

# Test sitemap
curl -I https://your-site.vercel.app/sitemap.xml
# Should return 200 OK with Content-Type: application/xml
```

### 5. Test Security Headers
```bash
curl -I https://your-site.vercel.app/
# Should include:
# X-Content-Type-Options: nosniff
# X-Frame-Options: DENY
# X-XSS-Protection: 1; mode=block
```

---

## 🐛 Troubleshooting Common Issues

### Issue 1: Build Fails with "tsx: not found"

**Symptom:**
```
> npm run build
sh: 1: tsx: not found
```

**Cause:** `tsx` was in `devDependencies` but needed in `dependencies` because it's used in the build script.

**Solution:** ✅ Already fixed in package.json (tsx is now in dependencies)

---

### Issue 2: Routes Return 404 on Refresh

**Symptom:**
- Direct link to `/home-massage` works on first visit
- Refreshing the page shows 404

**Cause:** Missing SPA rewrite rule in vercel.json

**Solution:** ✅ Already configured correctly in vercel.json with catch-all rewrite

---

### Issue 3: Static HTML File Not Accessible

**Symptom:**
- `/massage-ubud-price` returns React app instead of static HTML

**Cause:** Catch-all rewrite intercepts before specific static file rule

**Solution:** ✅ Specific rewrite for `/massage-ubud-price` is placed BEFORE catch-all

---

### Issue 4: Build Command Not Found in Dashboard

**Symptom:**
- Vercel Dashboard shows wrong build command
- Build fails with unknown command

**Solution:**
1. Go to Vercel Dashboard → Project Settings
2. Navigate to **Build & Development Settings**
3. Set **Build Command** to: `npm run build`
4. Set **Output Directory** to: `dist`
5. Redeploy

---

### Issue 5: Environment Variables Not Working

**Symptom:**
- `process.env.VITE_API_URL` is undefined in production

**Solution:**
1. Go to Vercel Dashboard → Project Settings
2. Navigate to **Environment Variables**
3. Add variables with `VITE_` prefix (e.g., `VITE_API_URL`)
4. Select environments: Production, Preview, Development
5. Redeploy (environment variables are injected at build time)

**Important:** Vite environment variables MUST be prefixed with `VITE_` to be exposed to client-side code.

---

### Issue 6: Sitemap Not Updating

**Symptom:**
- Sitemap still shows old URLs after deployment

**Cause:** Sitemap is generated during build, not at runtime

**Solution:**
```bash
# Regenerate sitemap locally
npm run sitemap:generate

# Commit and push
git add client/public/sitemap*.xml
git commit -m "Update sitemap"
git push origin main
```

**Automation:** The GitHub Actions workflow (`.github/workflows/sitemap-generation.yml`) automatically regenerates sitemaps on push to main.

---

## 🔧 Advanced Configuration

### Custom Domain Setup

1. **Add Domain in Vercel Dashboard**
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `homemassageubud.com`)

2. **Configure DNS**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or use Vercel nameservers for automatic configuration

3. **Enable HTTPS**
   - Vercel automatically provisions SSL certificates
   - Wait 24-48 hours for DNS propagation

4. **Update Canonical URLs**
   - Update `canonical` meta tags in HTML
   - Update sitemap URLs in `scripts/generate-sitemap.ts`

### Preview Deployments

Every push to a branch (not main) creates a preview deployment:
- URL format: `https://home-massage-ubud-[branch]-[hash].vercel.app`
- Useful for testing changes before merging to main
- Automatically deleted when branch is deleted

### Environment-Specific Configuration

| Environment | When Triggered | Use Case |
|------------|---------------|----------|
| **Production** | Push to `main` | Live site |
| **Preview** | Push to any branch | Feature testing |
| **Development** | `vercel dev` locally | Local development |

Set different environment variables for each environment in the Vercel Dashboard.

---

## 📊 Performance Optimization Recommendations

### Current Issues
⚠️ Main JS bundle: **3.1 MB** (628 KB gzipped)  
⚠️ No code splitting implemented  
⚠️ All routes loaded upfront  

### Recommended Improvements

#### 1. Implement Route-Based Code Splitting
```typescript
// Before (current)
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';

// After (recommended)
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
```

**Expected Impact:** Reduce initial bundle to ~500 KB (from 3.1 MB)

#### 2. Lazy Load Heavy Components
```typescript
// Lazy load heavy components
const MapComponent = lazy(() => import('./components/Map'));
const ImageGallery = lazy(() => import('./components/Gallery'));
```

**Expected Impact:** Reduce initial paint time by 30-50%

#### 3. Image Optimization
- Use WebP format for all images (✅ partially done)
- Implement lazy loading for below-fold images
- Use responsive images with `srcset`

**Expected Impact:** Reduce page weight by 20-30%

#### 4. Remove Unused Dependencies
```bash
# Analyze bundle
npx vite-bundle-visualizer

# Look for:
- Unused Radix UI components
- Duplicate dependencies
- Large libraries that can be replaced
```

**Expected Impact:** Reduce bundle by 200-500 KB

---

## 📚 Official Documentation Links

### Vercel Documentation
- [Project Configuration](https://vercel.com/docs/project-configuration)
- [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite)
- [Build Configuration](https://vercel.com/docs/builds/configure-a-build)
- [Environment Variables](https://vercel.com/docs/environment-variables)

### Vite Documentation
- [Deploying to Vercel](https://vite.dev/guide/static-deploy#vercel)
- [Build Optimizations](https://vite.dev/guide/build)
- [Code Splitting](https://vite.dev/guide/features#code-splitting)

---

## ✅ Deployment Checklist

Use this before every production deployment:

### Pre-Deployment
- [ ] Run `npm run build` locally - builds successfully
- [ ] Run `npm run sitemap:validate` - passes all checks
- [ ] Test all major routes locally with `npm run preview`
- [ ] Check bundle size - under 1 MB gzipped (⚠️ currently 628 KB)
- [ ] Review recent changes - no breaking changes
- [ ] Update CHANGELOG or release notes

### Deployment
- [ ] Push to main branch
- [ ] Monitor Vercel deployment logs
- [ ] Verify build completes successfully (5-10 minutes)
- [ ] Check deployment URL is accessible

### Post-Deployment
- [ ] Test production site manually
  - [ ] Homepage loads correctly
  - [ ] SPA routing works (test 3-4 routes)
  - [ ] Forms submit correctly
  - [ ] Images load properly
- [ ] Test SEO files
  - [ ] `/robots.txt` accessible
  - [ ] `/sitemap.xml` accessible
  - [ ] Canonical URLs correct
- [ ] Test on mobile device
- [ ] Run Lighthouse audit (optional but recommended)
- [ ] Submit sitemap to Google Search Console (if major changes)

---

## 🆘 Getting Help

### Vercel Support
- Dashboard: https://vercel.com/dashboard
- Support: https://vercel.com/support
- Status Page: https://vercel-status.com

### Build Logs
- View in Vercel Dashboard under **Deployments**
- Click on deployment → **View Function Logs**
- Download logs for detailed analysis

### Community Resources
- Vercel Community: https://github.com/vercel/vercel/discussions
- Stack Overflow: Tag `vercel` or `vite`

---

## 📈 Monitoring & Analytics

### Recommended Tools
- **Vercel Analytics** - Enable in Dashboard for free
- **Google Search Console** - Monitor SEO performance
- **Lighthouse CI** - Automated performance testing
- **Sentry** - Error tracking (if needed)

### Key Metrics to Monitor
- Build time (target: < 2 minutes)
- Bundle size (target: < 1 MB gzipped)
- First Contentful Paint (target: < 1.8s)
- Time to Interactive (target: < 3.8s)
- SEO score (target: 95+)

---

## 🔄 Rollback Procedure

If deployment causes issues:

1. **Instant Rollback via Dashboard**
   ```
   1. Go to Vercel Dashboard → Deployments
   2. Find previous working deployment
   3. Click "..." → "Promote to Production"
   4. Confirm - rollback happens in seconds
   ```

2. **Git Revert (if needed)**
   ```bash
   git revert HEAD
   git push origin main
   ```

---

**Last Updated:** January 20, 2026  
**Maintained By:** Development Team  
**Status:** ✅ Production Ready - Fully Configured
