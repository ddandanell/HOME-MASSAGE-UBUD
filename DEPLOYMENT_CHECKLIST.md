# Deployment Checklist - Google Search Console Ready

**Purpose:** Pre-deployment validation for every release  
**Run before:** Every production deployment  
**Time Required:** 5-10 minutes  
**Status:** ⚠️ Must pass before deploying

---

## Quick Start

Run automated checks:
```bash
npm run sitemap:generate
npm run sitemap:validate
```

Then verify the manual checklist below.

---

## 1. Security & Access ✓

### HTTPS
- [ ] All URLs resolve to `https://` (no mixed protocol)
- [ ] HTTP automatically redirects to HTTPS (301 redirect)
- [ ] No mixed content errors (check browser console)
- [ ] Valid SSL certificate (check browser address bar)

**How to verify:**
```bash
# Check HTTP redirect
curl -I http://homemassageubud.com | grep -i location

# Should see: Location: https://homemassageubud.com
```

**Google Search Console check:**
- Navigation: Security & Manual Actions → HTTPS
- Expected: "No issues detected"

### Mixed Content Check
- [ ] Open site in Incognito/Private mode
- [ ] Open DevTools (F12) → Console
- [ ] Navigate to 3-4 different pages
- [ ] Verify: No mixed content warnings

---

## 2. Indexing Infrastructure ✓

### Sitemap
- [ ] `sitemap.xml` exists in `/client/public/`
- [ ] Sitemap includes all pages (currently 73 URLs)
- [ ] Sitemap has correct date format (YYYY-MM-DD)
- [ ] All URLs use canonical format (no query params)
- [ ] All URLs start with `https://`
- [ ] No duplicate URLs in sitemap

**How to verify:**
```bash
# Generate fresh sitemap
npm run sitemap:generate

# Validate
npm run sitemap:validate
```

**Manual check:**
- Open: `https://homemassageubud.com/sitemap.xml`
- Verify: XML loads without errors
- Check: `<lastmod>` dates are recent

### Sitemap Submission
- [ ] Sitemap submitted to Google Search Console
- [ ] Sitemap shows "Success" status in GSC
- [ ] No errors reported for sitemap

**Google Search Console:**
- Navigation: Sitemaps
- Check: "Success" status
- Expected: 73 pages discovered

### Canonical URLs
- [ ] Homepage has canonical tag
- [ ] All key pages have canonical tags
- [ ] Canonical URLs match actual page URLs
- [ ] No relative canonicals (must be absolute URLs)

**How to verify:**
```bash
# Check homepage
curl -s https://homemassageubud.com | grep -i canonical

# Should see: <link rel="canonical" href="https://homemassageubud.com" />
```

**Sample pages to check:**
- [ ] Homepage: `/`
- [ ] Services: `/services`
- [ ] Treatments: `/treatments`
- [ ] Area page: `/seminyak`
- [ ] Treatment page: `/ubud/deep-tissue-massage`

---

## 3. Performance Check ✓

### Core Web Vitals

**Not measured here, but documented for post-deploy check:**

Required metrics to monitor after deployment:
- **LCP (Largest Contentful Paint)**: < 2.5s (Good)
- **CLS (Cumulative Layout Shift)**: < 0.1 (Good)
- **INP (Interaction to Next Paint)**: < 200ms (Good)

**Check after deployment:**
1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Test homepage URL: `https://homemassageubud.com`
3. Check Mobile score
4. Verify: No red "Poor" ratings

**Google Search Console (check 24h after deploy):**
- Navigation: Core Web Vitals
- Expected: Green "Good URLs" for Mobile and Desktop

### Mobile-First
- [ ] Site is mobile responsive
- [ ] No horizontal scroll on mobile
- [ ] Touch targets are appropriate size
- [ ] Text is readable without zooming

**How to verify:**
1. Open site in Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test iPhone SE, iPad, Desktop sizes
4. Navigate through 3-4 pages

---

## 4. Structured Data Enhancements ✓

### Breadcrumbs
- [ ] Breadcrumb component exists on pages
- [ ] Breadcrumb schema (JSON-LD) is present
- [ ] Breadcrumbs reflect actual URL hierarchy
- [ ] Visible breadcrumbs match schema

**How to verify:**
```bash
# Check for breadcrumb schema
curl -s https://homemassageubud.com/seminyak | grep -i "BreadcrumbList"

# Should find: "@type": "BreadcrumbList"
```

**Test with Google:**
1. Go to [Rich Results Test](https://search.google.com/test/rich-results)
2. Enter URL: `https://homemassageubud.com/seminyak`
3. Verify: "Breadcrumb" detected with no errors

**Google Search Console (check post-deploy):**
- Navigation: Enhancements → Breadcrumbs
- Expected: Valid items, no errors

### FAQ Schema
- [ ] FAQ sections visible on relevant pages
- [ ] FAQ schema matches visible FAQs
- [ ] Questions are real user questions (not promotional)
- [ ] Answers are complete (2-3 sentences minimum)

**Pages with FAQs:**
- [ ] Homepage
- [ ] Services page
- [ ] Area pages
- [ ] Treatment pages

**How to verify:**
```bash
# Check for FAQ schema
curl -s https://homemassageubud.com | grep -i "FAQPage"

# Should find: "@type": "FAQPage"
```

**Test with Google:**
1. Rich Results Test
2. Enter page URL
3. Verify: "FAQ" detected with no errors

**Google Search Console (check post-deploy):**
- Navigation: Enhancements → FAQ
- Expected: Valid items, no errors

### Review Snippets
- [ ] Reviews visible on page match schema
- [ ] Aggregate rating matches actual reviews
- [ ] Review count is accurate
- [ ] Individual reviews have author, date, rating

**How to verify:**
```bash
# Check for review schema
curl -s https://homemassageubud.com | grep -i "AggregateRating"

# Should find: "@type": "AggregateRating"
```

**Test with Google:**
1. Rich Results Test
2. Enter homepage URL
3. Verify: "Review" or "AggregateRating" detected

**Google Search Console (check post-deploy):**
- Navigation: Enhancements → Review snippets
- Expected: Valid items, no errors (if implemented)

---

## 5. Internal Linking Structure ✓

### Hub Pages
- [ ] Every page links to at least one hub page
- [ ] Hub pages: Home, Services, Service Areas, Treatments

### Sibling Pages
- [ ] Every page links to at least one sibling page
- [ ] Area pages link to nearby areas
- [ ] Treatment pages link to related treatments

### Orphan Page Check
- [ ] No orphan pages (all pages reachable from nav)
- [ ] Breadcrumbs provide navigation path
- [ ] Footer links reach important pages

**How to verify:**
1. Open site
2. Navigate to a deep page (e.g., `/ubud/deep-tissue-massage`)
3. Verify: Can reach homepage via breadcrumbs or nav
4. Verify: Related pages linked in content

---

## 6. Robots.txt Configuration ✓

- [ ] `robots.txt` exists at `/client/public/robots.txt`
- [ ] Contains `User-agent: *`
- [ ] Contains `Allow: /`
- [ ] Contains `Sitemap:` directive
- [ ] No accidental `Disallow: /` blocking everything

**How to verify:**
```bash
curl -s https://homemassageubud.com/robots.txt
```

**Expected content:**
```
User-agent: *
Allow: /

Sitemap: https://homemassageubud.com/sitemap.xml
```

**Test with Google:**
1. Go to Google Search Console
2. Navigation: Settings → robots.txt
3. Verify: No syntax errors

---

## 7. Redirect Management ✓

### URL Changes
- [ ] Old URLs redirect to new URLs (301)
- [ ] No redirect chains (A→B→C should be A→C)
- [ ] No soft 404s (returns 200 but shows "not found")

**How to verify:**
```bash
# Check if redirect works (if you have any)
curl -I https://homemassageubud.com/old-page | grep -i location

# Should see: Location: https://homemassageubud.com/new-page
# Status should be: 301 Moved Permanently
```

### Deleted Pages
- [ ] Deleted pages redirect to closest matching page
- [ ] No 404 errors for important pages
- [ ] 404 page exists and is helpful

**Google Search Console (check post-deploy):**
- Navigation: Pages → Not indexed
- Check for: "Soft 404" or "404" errors
- Expected: Minimal 404s, only for truly deleted content

---

## 8. CI/CD Automation ✓

### Pre-Deployment
- [ ] Sitemap auto-generated before build
- [ ] SEO validation passes
- [ ] No build errors

**Verify workflow:**
```bash
# Check workflow exists
ls .github/workflows/sitemap-generation.yml

# Test locally
npm run sitemap:generate
npm run sitemap:validate
```

### Post-Deployment
- [ ] Sitemap auto-commits if changed
- [ ] Google pinged about sitemap update
- [ ] No deployment errors

**GitHub Actions:**
- Check: Latest workflow run status
- Expected: ✅ Green checkmark

---

## 9. Documentation ✓

### For Developers
- [ ] `README.md` has deployment instructions
- [ ] `DEPLOYMENT_CHECKLIST.md` exists (this file)
- [ ] `SCHEMA_TEMPLATES.md` available
- [ ] Scripts documented

### For Staff
- [ ] `GOOGLE_SEARCH_CONSOLE_SOP.md` exists
- [ ] Staff trained on weekly checks
- [ ] Escalation process documented

---

## 10. Final Verification ✓

### Automated Checks
```bash
# Run all checks
npm run sitemap:generate
npm run sitemap:validate
npm run build
```

**All should pass with no errors**

### Manual Spot Checks
1. [ ] Open site in incognito
2. [ ] Test 5 random pages
3. [ ] Check mobile view
4. [ ] Verify HTTPS lock icon
5. [ ] Check breadcrumbs visible
6. [ ] Check page load speed feels fast

### Post-Deploy (Within 24 Hours)
- [ ] Check Google Search Console for errors
- [ ] Test Rich Results on 3-5 pages
- [ ] Check PageSpeed Insights score
- [ ] Verify sitemap was pinged successfully

---

## Sign-Off

**Deployed By:** ____________________  
**Date:** ____________________  
**Time:** ____________________  

**Checklist Status:**
- [ ] All automated checks passed
- [ ] All manual checks completed
- [ ] No critical issues found
- [ ] Post-deploy monitoring scheduled

**Notes:**
```
[Any deployment notes, issues encountered, or special considerations]
```

---

## Emergency Rollback Plan

If critical issues found post-deploy:

1. **Immediate:** Notify team lead
2. **Within 30 min:** Rollback to previous version
3. **Within 1 hour:** Document what went wrong
4. **Within 24 hours:** Fix issue and re-deploy with checks

---

## Support Contacts

- **Web Developer:** [Contact Info]
- **SEO Manager:** [Contact Info]
- **DevOps:** [Contact Info]

---

## Checklist Updates

This checklist should be reviewed and updated:
- After major Google algorithm updates
- Quarterly (every 3 months)
- When adding new features
- After any SEO-related incidents

**Last Reviewed:** January 16, 2026  
**Version:** 1.0  
**Next Review Due:** April 16, 2026

---

## Quick Commands Reference

```bash
# Generate sitemap
npm run sitemap:generate

# Validate SEO setup
npm run sitemap:validate

# Build site (includes sitemap generation)
npm run build

# Generate and ping Google
npm run deploy:notify

# Submit to IndexNow
npm run indexnow:submit

# Run SEO audit
npm run seo:audit
```

---

**✅ Checklist Complete - Ready for Deployment**
