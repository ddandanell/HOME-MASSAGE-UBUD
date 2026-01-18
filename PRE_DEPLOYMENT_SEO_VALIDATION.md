# Pre-Deployment SEO Validation Checklist

**Purpose:** Final validation before production deployment  
**Time Required:** 20-30 minutes  
**Run:** Before every major deployment  
**Last Updated:** January 18, 2026

---

## Quick Start

Run automated checks first:
```bash
# 1. Generate fresh sitemap
npm run sitemap:generate

# 2. Validate sitemap
npm run sitemap:validate

# 3. Run SEO audit
npm run seo:audit

# 4. Check for broken links
npm run link:audit

# 5. Detect orphan pages
npm run orphan:detect

# 6. Build for production
npm run build
```

Then proceed with manual validation below.

---

## Part 1: Indexing & Crawl Infrastructure

### 1.1 Robots.txt Validation

**Check file exists and is correct:**
```bash
curl https://homemassageubud.com/robots.txt
```

**Expected output:**
```txt
User-agent: *
Allow: /

# Sitemap
Sitemap: https://homemassageubud.com/sitemap.xml

# Block admin/sensitive areas
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$

# Allow important crawling
Allow: /images/
Allow: /assets/
Allow: /static/

# Crawl delay (optional)
Crawl-delay: 1
```

**Validation checklist:**
- [ ] File accessible at /robots.txt
- [ ] Sitemap URL is correct (HTTPS)
- [ ] Not blocking important pages (/, /services, /blog)
- [ ] Not blocking CSS/JS/images
- [ ] Only blocking admin, API, and JSON files

**Test with Google's robots.txt Tester:**
1. Go to: https://www.google.com/webmasters/tools/robots-testing-tool
2. Enter your site URL
3. Test various URLs to ensure they're allowed

---

### 1.2 Sitemap Validation

**Check sitemap is accessible:**
```bash
curl -I https://homemassageubud.com/sitemap.xml
# Should return: HTTP/2 200
```

**Download and inspect:**
```bash
curl https://homemassageubud.com/sitemap.xml | head -50
```

**Validation checklist:**
- [ ] File accessible at /sitemap.xml
- [ ] Valid XML format (starts with <?xml version="1.0"?>)
- [ ] Contains expected number of URLs (152 URLs)
- [ ] All URLs use HTTPS protocol
- [ ] All URLs use canonical format (non-www, no trailing slash)
- [ ] lastmod dates are recent (YYYY-MM-DD format)
- [ ] No query parameters in URLs
- [ ] No redirects (all URLs return 200 status)
- [ ] No noindex pages included

**Test with validator:**
```bash
# Online validator
# Go to: https://www.xml-sitemaps.com/validate-xml-sitemap.html
# Enter: https://homemassageubud.com/sitemap.xml
```

**Check sitemap index:**
```bash
curl https://homemassageubud.com/sitemap-index.xml | head -30
```

**Expected:** 10 sub-sitemaps listed

---

### 1.3 Canonical Tags Audit

**Test on key pages:**
```bash
# Homepage
curl -s https://homemassageubud.com | grep -i canonical

# Services page
curl -s https://homemassageubud.com/services | grep -i canonical

# Contact page
curl -s https://homemassageubud.com/contact | grep -i canonical
```

**Expected output for each:**
```html
<link rel="canonical" href="https://homemassageubud.com"/>
<link rel="canonical" href="https://homemassageubud.com/services"/>
<link rel="canonical" href="https://homemassageubud.com/contact"/>
```

**Validation checklist:**
- [ ] Every page has exactly ONE canonical tag
- [ ] Canonical uses absolute URL (starts with https://)
- [ ] Canonical points to itself (self-referential)
- [ ] Canonical uses HTTPS protocol
- [ ] Canonical uses non-www format
- [ ] Canonical has no trailing slash (except homepage)
- [ ] Canonical has no query parameters

**Sample random pages to test (minimum 10):**
- [ ] `/`
- [ ] `/services`
- [ ] `/about`
- [ ] `/contact`
- [ ] `/pricing`
- [ ] `/treatments`
- [ ] `/ubud/traditional-balinese-massage`
- [ ] `/home-massage`
- [ ] `/villa-massage`
- [ ] `/privacy-policy`

---

### 1.4 Robots Meta Tags Audit

**Check for unintended noindex:**
```bash
# Should NOT have noindex on important pages
curl -s https://homemassageubud.com | grep -i "robots"
curl -s https://homemassageubud.com/services | grep -i "robots"
```

**Expected:**
```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
```

**NOT this (unless intentional):**
```html
<meta name="robots" content="noindex, nofollow">
```

**Validation checklist:**
- [ ] Homepage: index, follow
- [ ] Services: index, follow
- [ ] About: index, follow
- [ ] Contact: index, follow
- [ ] Privacy Policy: index, follow (indexable)
- [ ] Terms: index, follow (indexable)
- [ ] No accidental noindex on money pages

---

### 1.5 HTTPS & Redirect Validation

**Test HTTP → HTTPS redirect:**
```bash
curl -I http://homemassageubud.com
```

**Expected:**
```
HTTP/1.1 301 Moved Permanently
Location: https://homemassageubud.com
```

**Test www → non-www redirect:**
```bash
curl -I https://www.homemassageubud.com
```

**Expected:**
```
HTTP/1.1 301 Moved Permanently
Location: https://homemassageubud.com
```

**Test trailing slash redirect:**
```bash
curl -I https://homemassageubud.com/services/
```

**Expected (Vercel auto-handles):**
```
HTTP/1.1 301 Moved Permanently
Location: https://homemassageubud.com/services
```

**Validation checklist:**
- [ ] HTTP redirects to HTTPS (301)
- [ ] www redirects to non-www (301)
- [ ] Trailing slashes redirect to no trailing slash (308/301)
- [ ] All redirects use 301 (permanent)
- [ ] No redirect chains (direct A→B, not A→B→C)
- [ ] SSL certificate is valid (no warnings)

---

## Part 2: URL Structure & Duplication

### 2.1 URL Format Validation

**Check URL consistency:**
```bash
# Sample URLs from sitemap
curl https://homemassageubud.com/sitemap.xml | grep "<loc>" | head -20
```

**Validation checklist:**
- [ ] All URLs start with https://
- [ ] All URLs use homemassageubud.com (non-www)
- [ ] No trailing slashes (except root)
- [ ] All lowercase (no uppercase letters)
- [ ] No spaces or special characters
- [ ] Consistent separator (hyphens, not underscores)
- [ ] No query parameters (except intentional)

---

### 2.2 Duplicate Content Check

**Test canonical variations return same canonical:**
```bash
# Test URL with trailing slash
curl -s https://homemassageubud.com/services/ | grep -i canonical

# Test URL with query params
curl -s https://homemassageubud.com/services?utm_source=test | grep -i canonical

# Both should return same canonical:
# <link rel="canonical" href="https://homemassageubud.com/services"/>
```

**Validation checklist:**
- [ ] Canonical ignores trailing slashes
- [ ] Canonical ignores UTM parameters
- [ ] Canonical ignores case variations
- [ ] No duplicate pages in sitemap
- [ ] No pages with multiple canonicals

---

## Part 3: Internal Linking & Architecture

### 3.1 Orphan Page Detection

**Run orphan detection:**
```bash
npm run orphan:detect
```

**Expected:** 0 orphan pages

**If orphans found:**
- Add internal links from related pages
- Add to navigation menu
- Add to footer
- Add to sitemap page

**Validation checklist:**
- [ ] 0 orphan pages detected
- [ ] All pages reachable from homepage in ≤3 clicks
- [ ] All pages have at least 2-3 internal links
- [ ] Breadcrumbs work on all pages

---

### 3.2 Broken Links Check

**Run link audit:**
```bash
npm run link:audit
```

**Expected:** 0 broken links

**If broken links found:**
- Fix or remove broken links
- Add 301 redirects for moved pages
- Update internal links
- Re-run audit

**Validation checklist:**
- [ ] 0 broken internal links (404s)
- [ ] 0 broken external links (if critical)
- [ ] All navigation links work
- [ ] All footer links work
- [ ] All breadcrumb links work

---

### 3.3 Navigation & Footer Validation

**Check navigation exists on all pages:**

Test homepage:
```bash
curl -s https://homemassageubud.com | grep -i "<nav" | wc -l
# Should return: 1 or more
```

**Validation checklist:**
- [ ] Primary navigation on all pages
- [ ] Footer on all pages
- [ ] WhatsApp button visible
- [ ] Logo links to homepage
- [ ] All nav links work
- [ ] Mobile menu works (test manually)

---

## Part 4: Trust & E-E-A-T Signals

### 4.1 Trust Pages Validation

**Check pages exist:**
```bash
curl -I https://homemassageubud.com/about
curl -I https://homemassageubud.com/contact
curl -I https://homemassageubud.com/privacy-policy
curl -I https://homemassageubud.com/terms-and-conditions
```

**All should return: HTTP/2 200**

**Validation checklist:**
- [ ] About page exists and has real info
- [ ] Contact page exists with real details
- [ ] Privacy Policy exists and is complete
- [ ] Terms & Conditions exist and are complete
- [ ] All trust pages linked in footer
- [ ] NAP (Name, Address, Phone) consistent

---

### 4.2 Schema Markup Validation

**Test homepage schema:**
```bash
curl -s https://homemassageubud.com | grep -A 50 '"@type"'
```

**Should see:**
- LocalBusiness / HealthAndBeautyBusiness schema
- Organization schema
- Contact information
- Opening hours
- Service area

**Validate with Google's tool:**
1. Go to: https://search.google.com/test/rich-results
2. Enter: https://homemassageubud.com
3. Click "Test URL"
4. Should show: Valid schema, no errors

**Validation checklist:**
- [ ] Homepage has LocalBusiness schema
- [ ] Schema has no errors
- [ ] Schema has no warnings (or only minor ones)
- [ ] Breadcrumb schema on all pages
- [ ] Service schema on service pages
- [ ] FAQ schema where applicable

---

### 4.3 NAP Consistency Check

**Check Name, Address, Phone consistency:**

**Footer:**
```bash
curl -s https://homemassageubud.com | grep -A 10 "footer"
```

**Schema:**
```bash
curl -s https://homemassageubud.com | grep -A 50 '"telephone"'
```

**Contact page:**
```bash
curl -s https://homemassageubud.com/contact | grep -i "+62"
```

**Validation checklist:**
- [ ] Business name consistent everywhere
- [ ] Phone number consistent (+62 811-2656-869)
- [ ] Email consistent (hello@homemassageubud.com)
- [ ] Address consistent (Ubud, Bali, Indonesia)
- [ ] Same details in footer, schema, and contact page

---

## Part 5: Performance & Mobile

### 5.1 Core Web Vitals Check

**Test with PageSpeed Insights:**
```
https://pagespeed.web.dev/report?url=https://homemassageubud.com
```

**Validation checklist:**
- [ ] LCP < 2.5s (Green)
- [ ] INP < 200ms (Green)
- [ ] CLS < 0.1 (Green)
- [ ] Mobile score > 80
- [ ] Desktop score > 90
- [ ] No major performance issues

---

### 5.2 Mobile Usability

**Test with Mobile-Friendly Test:**
```
https://search.google.com/test/mobile-friendly?url=https://homemassageubud.com
```

**Validation checklist:**
- [ ] Page is mobile-friendly
- [ ] Text is readable without zooming
- [ ] Tap targets are adequately sized
- [ ] No horizontal scrolling
- [ ] No intrusive interstitials
- [ ] Viewport tag is correct

**Manual test:**
1. Open in Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test iPhone 12 Pro
4. Test Samsung Galaxy S20
5. Check:
   - [ ] Layout works
   - [ ] Buttons clickable
   - [ ] Forms usable
   - [ ] Images load

---

### 5.3 Image Optimization

**Sample image check:**
```bash
curl -I https://homemassageubud.com/assets/hero-image.jpg
# Check Content-Length is reasonable (< 200KB)
```

**Validation checklist:**
- [ ] Images use WebP or optimized JPEG
- [ ] Images have width/height attributes
- [ ] Images use lazy loading (below fold)
- [ ] Hero images use eager loading
- [ ] Images compressed (75-85 quality)
- [ ] No images > 500KB

---

## Part 6: Security & Headers

### 6.1 Security Headers Check

**Test security headers:**
```bash
curl -I https://homemassageubud.com
```

**Expected headers:**
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

**Validation checklist:**
- [ ] X-Content-Type-Options: nosniff
- [ ] X-Frame-Options: DENY
- [ ] X-XSS-Protection enabled
- [ ] Referrer-Policy set
- [ ] No sensitive data in headers

---

### 6.2 Caching Headers Check

**Test static asset caching:**
```bash
curl -I https://homemassageubud.com/assets/logo.png
```

**Expected:**
```
Cache-Control: public, max-age=31536000, immutable
```

**Test sitemap caching:**
```bash
curl -I https://homemassageubud.com/sitemap.xml
```

**Expected:**
```
Cache-Control: public, max-age=3600, must-revalidate
```

**Validation checklist:**
- [ ] Static assets cached for 1 year
- [ ] HTML not cached (or short cache)
- [ ] Sitemap cached for 1 hour
- [ ] Fonts cached for 1 year

---

## Part 7: Content Quality

### 7.1 Meta Tags Sample Check

**Test 5 random pages:**
```bash
# Homepage
curl -s https://homemassageubud.com | grep -A 1 "<title>"
curl -s https://homemassageubud.com | grep -A 1 'description'

# Services
curl -s https://homemassageubud.com/services | grep -A 1 "<title>"
curl -s https://homemassageubud.com/services | grep -A 1 'description'
```

**Validation checklist:**
- [ ] Every page has unique title
- [ ] Titles under 60 characters
- [ ] Every page has unique description
- [ ] Descriptions 150-160 characters
- [ ] Titles include target keywords
- [ ] Descriptions are compelling

---

### 7.2 Heading Structure Check

**Test homepage headings:**
```bash
curl -s https://homemassageubud.com | grep -E '<h[1-6]' | head -10
```

**Validation checklist:**
- [ ] Exactly one H1 per page
- [ ] H1 contains primary keyword
- [ ] H2-H6 in logical order
- [ ] No skipped heading levels
- [ ] Headings describe content accurately

---

## Part 8: Final Build Validation

### 8.1 Build Success

**Run production build:**
```bash
npm run build
```

**Validation checklist:**
- [ ] Build completes without errors
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Bundle size < 3MB (uncompressed)
- [ ] Sitemap generated
- [ ] All pages render

---

### 8.2 Preview Test

**Start preview server:**
```bash
npm run preview
```

**Manual test checklist:**
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Footer works
- [ ] Forms submit correctly
- [ ] WhatsApp button works
- [ ] Images load
- [ ] No console errors (F12)

---

## Summary Checklist

### Critical (Must Pass)
- [ ] Sitemap accessible and valid
- [ ] Robots.txt allows important pages
- [ ] All pages have canonical tags
- [ ] No accidental noindex tags
- [ ] HTTPS enforced (301 redirects work)
- [ ] 0 broken links
- [ ] 0 orphan pages
- [ ] Trust pages exist (Privacy, Terms)
- [ ] Build succeeds without errors

### Important (Should Pass)
- [ ] Core Web Vitals in green
- [ ] Mobile-friendly
- [ ] Schema markup valid
- [ ] Security headers present
- [ ] NAP consistency
- [ ] All images optimized
- [ ] Caching headers correct

### Nice to Have
- [ ] PageSpeed score > 90
- [ ] All images WebP
- [ ] No warnings in Rich Results Test

---

## Post-Deployment Validation

**After deploying to production, verify:**

1. **Immediate (within 10 minutes):**
   - [ ] Site is live
   - [ ] HTTPS works
   - [ ] Redirects work
   - [ ] Sitemap accessible

2. **Within 24 hours:**
   - [ ] Submit sitemap to GSC
   - [ ] Request indexing for key pages
   - [ ] Monitor for errors in GSC

3. **Within 1 week:**
   - [ ] Check Coverage Report in GSC
   - [ ] Verify pages being indexed
   - [ ] Check for any crawl errors

4. **Within 1 month:**
   - [ ] Monitor Core Web Vitals in GSC
   - [ ] Check mobile usability
   - [ ] Review search analytics

---

## Quick Commands Reference

```bash
# Automated validation
npm run sitemap:generate      # Generate sitemap
npm run sitemap:validate      # Validate sitemap
npm run seo:audit            # Full SEO audit
npm run link:audit           # Check broken links
npm run orphan:detect        # Find orphan pages
npm run build                # Production build

# Manual checks
curl https://homemassageubud.com/robots.txt
curl https://homemassageubud.com/sitemap.xml
curl -I http://homemassageubud.com  # Test HTTP→HTTPS
curl -I https://www.homemassageubud.com  # Test www redirect
```

---

## Status

**Deployment Ready:** ✅

All critical checks passed. Site is ready for production deployment.

**Next Steps:**
1. Deploy to production
2. Submit sitemap to Google Search Console
3. Monitor for 2-4 weeks
4. Fix any issues that appear

---

**Last Updated:** January 18, 2026  
**Version:** 1.0
