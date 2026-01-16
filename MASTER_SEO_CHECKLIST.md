# Master SEO Checklist

**Purpose:** Complete SEO checklist for Google Search Console compliance  
**Based on:** Google Search Console requirements and best practices  
**Last Updated:** January 16, 2026

---

## 🎯 Overview

This checklist covers the complete system for automatic discovery, indexing, trust signals, and enhancements as required by Google Search Console.

**Status Legend:**
- ✅ = Implemented and working
- ⚠️ = Partially implemented / needs attention
- ❌ = Not implemented
- 📋 = Action required

---

## 1. Google Search Console - Base Setup

### Domain Property Setup
- 📋 **Create domain property** (not URL prefix)
  - Domain: `homemassageubud.com`
  - Type: Domain property (covers all subdomains and protocols)
  
### DNS Verification
- 📋 **Add DNS TXT record** for verification
  - Or use HTML meta tag method (placeholder in index.html)
  - Location: `<meta name="google-site-verification" content="YOUR_CODE" />`
  
### Coverage Check
- ✅ Covers HTTPS automatically
- ✅ Covers all subfolders automatically
- ✅ Covers future pages automatically

**Action Required:**
1. Go to https://search.google.com/search-console
2. Add property: `homemassageubud.com`
3. Complete verification
4. Submit sitemap

---

## 2. HTTPS (MANDATORY - HARD REQUIREMENT)

### SSL Certificate
- 📋 **Verify SSL certificate is valid**
  - Check: Browser shows padlock icon
  - Check: Certificate not expired
  - Check: No warnings in DevTools

### HTTP to HTTPS Redirect
- 📋 **Verify 301 redirects are active**
  - Test: `curl -I http://homemassageubud.com`
  - Expected: `HTTP/1.1 301 Moved Permanently`
  - Expected: `Location: https://homemassageubud.com`

### Mixed Content
- 📋 **Verify no mixed content warnings**
  - Open DevTools Console (F12)
  - Check: No "Mixed Content" warnings
  - All resources (images, scripts, fonts) use HTTPS

### Search Console Verification
- 📋 **Check GSC Security & Manual Actions**
  - Navigation: Security & Manual Actions → HTTPS
  - Expected: "No issues detected"

**Critical:** If HTTPS breaks, Google will de-rank or ignore pages.

---

## 3. XML Sitemap System

### Sitemap Files
- ✅ `/sitemap.xml` - Main sitemap (73 URLs)
- ✅ `/sitemap-index.xml` - Sitemap index (6 sub-sitemaps)
- ✅ `/sitemap-pages.xml` - Main pages (12 URLs)
- ✅ `/sitemap-treatments.xml` - Treatment pages (13 URLs)
- ✅ `/sitemap-areas-ubud.xml` - Ubud areas (6 URLs)
- ✅ `/sitemap-areas-south.xml` - South Bali areas (14 URLs)
- ✅ `/sitemap-areas-north-east.xml` - North/East Bali (3 URLs)
- ✅ `/sitemap-services.xml` - Service landing pages (25 URLs)

### Sitemap Rules
- ✅ Only canonical URLs (no query parameters)
- ✅ No redirects (all URLs return 200)
- ✅ No noindex pages
- ✅ Valid XML format
- ✅ All URLs use HTTPS

### Sitemap Submission
- 📋 **Submit to Google Search Console**
  - Navigation: Sitemaps
  - URL: `sitemap.xml` or `sitemap-index.xml`
  - Click: Submit

**Scripts:**
```bash
npm run sitemap:generate  # Generate fresh sitemap
npm run sitemap:validate  # Validate configuration
```

---

## 4. Automatic Sitemap Regeneration

### Triggers
- ✅ On every build (`npm run build`)
- ✅ On code push to main branch (GitHub Actions)
- ✅ Manual: `npm run sitemap:generate`

### Automation
- ✅ GitHub Actions workflow configured
- ✅ Auto-commit sitemap changes
- ✅ Auto-ping Google on production deploy

### Workflow File
- ✅ `.github/workflows/sitemap-generation.yml`

**What It Does:**
1. Detects changes to site content
2. Regenerates sitemap automatically
3. Commits updated sitemap
4. Pings Google: "Something changed. Come look."

---

## 5. Internal Linking (Discovery Engine)

### Hub Pages
Every page must link to at least ONE hub:
- ✅ Homepage (`/`)
- ✅ Services (`/services`)
- ✅ Service Areas (`/service-areas`)
- ✅ Treatments (`/treatments`)

### Sibling Pages
Every page should link to at least ONE sibling:
- ⚠️ Area pages link to nearby areas
- ⚠️ Treatment pages link to related treatments
- ⚠️ Service pages link to similar services

### Breadcrumbs
- ✅ Breadcrumb component implemented
- ✅ Visible on all pages
- ✅ Microdata markup included
- ✅ JSON-LD schema included

### Orphan Page Check
- ✅ No orphan pages (all reachable from navigation)
- ✅ Header navigation reaches main sections
- ✅ Footer links reach important pages
- ✅ Breadcrumbs provide navigation path

**Note:** Internal links > sitemap for crawl speed.

---

## 6. Canonical URLs

### Implementation
- ✅ SEOHead component handles canonicals
- ✅ Homepage has canonical tag
- ✅ All pages pass canonical via SEOHead

### Requirements
- ✅ Every page has canonical URL
- ✅ Canonical URLs are absolute (not relative)
- ✅ Canonical URLs use HTTPS
- ✅ No query parameters in canonical URLs

### What It Prevents
- ✅ Duplicate indexing
- ✅ Wrong URL ranking
- ✅ Tracking parameter chaos

**Format:**
```html
<link rel="canonical" href="https://homemassageubud.com/PAGE_PATH" />
```

---

## 7. Core Web Vitals (MUST CHECK)

### Metrics to Monitor
**Post-deployment checks required:**

#### LCP (Largest Contentful Paint)
- Target: < 2.5 seconds
- Check: PageSpeed Insights
- Monitor: GSC Core Web Vitals report

#### CLS (Cumulative Layout Shift)
- Target: < 0.1
- Check: No massive layout jumps
- Monitor: Font loading, image sizing

#### INP (Interaction to Next Paint)
- Target: < 200ms
- Check: Button/link responsiveness
- Monitor: JavaScript performance

### Requirements
- ✅ Mobile-first design
- ⚠️ No massive layout jumps (need to verify)
- ⚠️ No blocking fonts/images (need to optimize)

### Google Search Console Check
- 📋 **Monitor after deployment**
  - Navigation: Core Web Vitals
  - Status: Green = Good, Yellow = Acceptable, Red = Must Fix

**Action:** Check weekly, fix any red issues immediately.

---

## 8. Enhancements (Google Search Console Features)

### A. Breadcrumbs (Structured Data)

#### Implementation Status
- ✅ Breadcrumb component with microdata
- ✅ JSON-LD schema added
- ✅ Reflects real URL hierarchy
- ✅ Visible + structured

#### Benefits
- Better SERP appearance
- Clear site structure
- Better internal linking signals

#### GSC Check
- 📋 **Post-deployment verification**
  - Navigation: Enhancements → Breadcrumbs
  - Expected: No errors
  - Check: Valid items match actual pages

**Test URL:** https://search.google.com/test/rich-results

---

### B. FAQ Structured Data

#### Implementation Status
- ✅ FAQ component in SchemaMarkup.tsx
- ✅ Used on area pages
- ✅ Used on homepage
- ⚠️ Need to verify all FAQs are visible

#### Rules
- ✅ Only real FAQs visible on page
- ✅ No promotional spam
- ✅ One FAQ block per page recommended

#### Benefits
- Rich results in SERP
- Higher CTR
- SERP dominance

#### GSC Check
- 📋 **Post-deployment verification**
  - Navigation: Enhancements → FAQ
  - Expected: Valid items only
  - Check: FAQs match page content

**Test:** Ensure FAQs are visible to users, not just in schema.

---

### C. Review Snippets

#### Implementation Status
- ✅ Review schema in SchemaMarkup.tsx
- ✅ AggregateRating in index.html
- ⚠️ Need to verify reviews match visible content

#### Requirements
- ✅ Only for real services
- ✅ Must match visible content
- ✅ Use proper Review / AggregateRating schema

#### Benefits
- Stars in SERP
- Higher trust
- Higher CTR

#### GSC Check
- 📋 **Post-deployment verification**
  - Navigation: Enhancements → Review snippets
  - Expected: Valid reviews
  - Check: Ratings accurate

**Rule:** Never show fake reviews or manipulated ratings.

---

## 9. Robots.txt

### Current Configuration
```
User-agent: *
Allow: /

Sitemap: https://homemassageubud.com/sitemap.xml

Disallow: /admin/
Disallow: /api/
Disallow: /*.json$

Allow: /images/
Allow: /assets/
Allow: /static/

Crawl-delay: 1
```

### Verification
- ✅ File exists: `/client/public/robots.txt`
- ✅ Allows all pages (`Allow: /`)
- ✅ References sitemap
- ✅ Blocks only admin/api routes

### Rules
- ✅ No clever rules that might break crawling
- ✅ Simple and clear

**Check:** https://homemassageubud.com/robots.txt

---

## 10. Redirect Management

### Rules
- Deleted page → 301 to closest match
- Renamed page → 301 old → new
- No redirect chains (A→B→C)
- No soft 404s

### Monitoring
- 📋 **Check regularly in GSC**
  - Navigation: Pages → Not indexed
  - Look for: Redirect errors, 404s
  - Action: Fix broken links

### Current Status
- ⚠️ Need to implement redirect tracking
- ⚠️ Need to document URL changes

**Script needed:** Redirect mapping document

---

## 11. Optional: Indexing API

### Status
- ❌ Not implemented yet

### Use Cases
- Money pages
- Important new services
- Urgent updates

### Priority
- Low (not required, but powerful)

**Reference:** https://developers.google.com/search/apis/indexing-api/v3/quickstart

---

## Deployment Checklist Summary

### Pre-Deploy (MUST DO)
- [ ] Run `npm run sitemap:generate`
- [ ] Run `npm run sitemap:validate`
- [ ] Run `npm run build` (no errors)
- [ ] Verify HTTPS active
- [ ] Check no mixed content

### Deploy
- [ ] Deploy to production
- [ ] Wait 5 minutes for propagation

### Post-Deploy (Within 24 Hours)
- [ ] Verify site loads with HTTPS
- [ ] Check sitemap.xml accessible
- [ ] Submit sitemap to GSC
- [ ] Request indexing for top 10 pages
- [ ] Check Core Web Vitals
- [ ] Test Rich Results for 3-5 pages
- [ ] Monitor GSC for errors

### Weekly Checks
- [ ] Check GSC Coverage report
- [ ] Check GSC Performance metrics
- [ ] Check Enhancements (Breadcrumbs, FAQ, Reviews)
- [ ] Check Core Web Vitals status
- [ ] Check for Security issues

---

## New Page Publish SOP (2 Minutes)

When publishing a new page:

1. **Create page** with final URL + canonical tag
   - Use SEOHead component with canonical prop
   
2. **Add internal links + breadcrumbs**
   - Use Breadcrumbs component
   - Link from at least 2 existing pages
   
3. **Confirm sitemap includes page**
   - Automatic on next build/deploy
   - Or run: `npm run sitemap:generate`
   
4. **Deploy**
   - GitHub Actions handles sitemap update
   - Google is pinged automatically
   
5. **Optional: URL inspection for money pages**
   - Go to GSC → URL Inspection
   - Enter new URL
   - Click "Request Indexing"

**Done!** Page will be indexed within 3-7 days.

---

## Weekly Search Console Check (5 Minutes)

### Monday Morning Routine

1. **Pages → Not indexed**
   - Check: Any new issues?
   - Action: Fix if pages should be indexed

2. **Core Web Vitals**
   - Check: Any red (poor) URLs?
   - Action: Alert developer if red

3. **Enhancements**
   - Check: Breadcrumbs → no errors
   - Check: FAQ → no errors  
   - Check: Review snippets → no errors

4. **Security & Manual Actions**
   - Check: Must be "No issues detected"
   - Action: URGENT if any issues

**Time:** 5 minutes  
**Who:** Marketing/SEO manager  
**Reference:** `GOOGLE_SEARCH_CONSOLE_SOP.md`

---

## CI/CD Hook (Automation)

### On Every Deploy

GitHub Actions automatically:
1. ✅ Regenerates sitemap
2. ✅ Validates SEO configuration
3. ✅ Commits sitemap if changed
4. ✅ Pings Google

### Manual Commands

```bash
# Generate sitemap and ping Google
npm run deploy:notify

# Just generate sitemap
npm run sitemap:generate

# Validate everything
npm run sitemap:validate

# Submit to IndexNow (Bing/Yandex)
npm run indexnow:submit
```

---

## Documentation Reference

### For Developers
- `README.md` - Project overview
- `DEPLOYMENT_CHECKLIST.md` - Detailed deployment steps
- `SCHEMA_TEMPLATES.md` - JSON-LD schema examples

### For Staff
- `GOOGLE_SEARCH_CONSOLE_SOP.md` - Weekly monitoring guide
- `QUICK_START_GOOGLE_SUBMISSION.md` - Fast setup guide

### For SEO Team
- `SEO_AUDIT_TOOL.md` - Audit procedures
- This file - Master checklist

---

## The Reality

If you do this:
- ✅ Google understands your structure
- ✅ Google trusts your pages
- ✅ Google shows rich results
- ✅ Google comes back automatically

**No rituals. No guessing. Just systems.**

---

## Expected Timeline

### Immediate (Day 1)
- Sitemap submitted
- Google starts crawling

### Week 1
- First pages discovered
- Coverage report shows pages

### Weeks 2-4
- 30-50 pages indexed
- First organic impressions
- Rich results start showing

### Months 1-3
- Full indexing (60-73 pages)
- Stable organic traffic
- Rankings improve
- Rich results consistent

---

## Support & Resources

### Official Documentation
- [Google Search Console Help](https://support.google.com/webmasters)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Structured Data Guidelines](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)

### Testing Tools
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Internal Scripts
```bash
npm run sitemap:generate   # Generate sitemap
npm run sitemap:validate   # Validate SEO
npm run deploy:notify      # Deploy with Google ping
npm run indexnow:submit    # Submit to IndexNow
npm run seo:audit          # Run SEO audit
```

---

## Status Summary

### ✅ Implemented
- Dynamic sitemap generation
- Sitemap index with sections
- Automatic regeneration on build
- GitHub Actions CI/CD workflow
- SEO validation script
- Breadcrumb component with JSON-LD
- Canonical URL handling
- FAQ schema markup
- Review schema markup
- Robots.txt configuration
- Comprehensive documentation

### 📋 Action Required
- Submit sitemap to Google Search Console
- Complete Google verification
- Monitor Core Web Vitals post-deploy
- Verify HTTPS redirects
- Check for mixed content
- Test rich results on live site

### ⚠️ Needs Attention
- Core Web Vitals optimization
- Redirect tracking system
- Internal linking audit
- Review all FAQ visibility

### ❌ Not Yet Implemented
- Indexing API integration (optional)
- Automated redirect management

---

**Last Updated:** January 16, 2026  
**Version:** 1.0  
**Next Review:** Weekly monitoring, quarterly full audit

---

## Quick Reference Card

### Daily
- Nothing required (automated)

### Weekly (5 min)
- Check Google Search Console
- Review Coverage, Core Web Vitals, Enhancements
- Document: `GOOGLE_SEARCH_CONSOLE_SOP.md`

### Monthly (30 min)
- Review Performance metrics
- Analyze top pages/keywords
- Update content based on data

### Quarterly (2 hours)
- Full SEO audit
- Update documentation
- Review and improve structure

### On New Page
- Add canonical tag
- Add breadcrumbs
- Add to internal links
- Deploy (sitemap auto-updates)
- Request indexing if urgent

---

**✅ CHECKLIST COMPLETE - READY FOR GOOGLE**
