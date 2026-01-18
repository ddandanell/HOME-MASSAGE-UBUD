# Google Search Console Setup & Submission Guide

**Purpose:** Step-by-step guide for setting up Google Search Console and submitting your sitemap  
**Target Audience:** Website owners, SEO managers  
**Time Required:** 15-30 minutes  
**Last Updated:** January 18, 2026

---

## Overview

Google Search Console (GSC) is a free tool that helps you monitor, maintain, and troubleshoot your site's presence in Google Search results. This guide covers everything you need to get started.

**What you'll accomplish:**
1. Verify ownership of your domain
2. Submit your sitemap
3. Monitor indexing status
4. Track Core Web Vitals
5. Identify and fix issues

---

## Prerequisites

Before starting, ensure you have:
- [ ] Admin access to your domain's DNS settings or website hosting
- [ ] A Google account (Gmail)
- [ ] Your website is live at https://homemassageubud.com
- [ ] Sitemap is generated and accessible at /sitemap.xml

---

## Part 1: Create Google Search Console Property

### Step 1: Access Google Search Console

1. Go to https://search.google.com/search-console
2. Sign in with your Google account
3. Click "Start now" if this is your first time

### Step 2: Choose Property Type

You have two options:

#### Option A: Domain Property (Recommended)
**Benefits:**
- Covers all subdomains (www, blog, shop, etc.)
- Covers both HTTP and HTTPS
- Covers all URL variations
- More comprehensive

**How to set up:**
1. Click "Domain" on the left side
2. Enter: `homemassageubud.com` (without https:// or www)
3. Click "Continue"
4. You'll see DNS verification instructions (proceed to Step 3)

#### Option B: URL Prefix Property
**Benefits:**
- Easier to verify (multiple verification methods)
- Specific to one URL version

**How to set up:**
1. Click "URL prefix" on the right side
2. Enter: `https://homemassageubud.com`
3. Click "Continue"
4. You'll see multiple verification options (proceed to Step 3)

**Recommendation:** Use Domain Property for comprehensive coverage.

---

## Part 2: Verify Domain Ownership

### Method 1: DNS Verification (Required for Domain Property)

**For Domain Property, this is the ONLY verification method.**

#### Step 1: Get Your TXT Record

After entering your domain, Google will show:
```
Copy this TXT record to your DNS configuration:

google-site-verification=ABC123XYZ789RandomStringHere
```

**Save this code!** You'll need it in the next step.

#### Step 2: Add TXT Record to DNS

The process varies by hosting provider. Here are instructions for common providers:

**Vercel (Recommended):**
1. Go to https://vercel.com/dashboard
2. Select your project: HOME-MASSAGE-UBUD
3. Go to Settings → Domains
4. Find: homemassageubud.com
5. Click "Edit" → "DNS Records"
6. Click "Add Record"
7. Set:
   - Type: TXT
   - Name: @ (or leave blank)
   - Value: `google-site-verification=ABC123XYZ789RandomStringHere`
   - TTL: 3600 (or default)
8. Click "Save"

**Cloudflare:**
1. Log in to Cloudflare dashboard
2. Select your domain: homemassageubud.com
3. Go to DNS → Records
4. Click "Add record"
5. Set:
   - Type: TXT
   - Name: @ (or leave blank)
   - Content: `google-site-verification=ABC123XYZ789RandomStringHere`
   - TTL: Auto
6. Click "Save"

**GoDaddy:**
1. Log in to GoDaddy account
2. Go to My Products → DNS
3. Scroll to "Records"
4. Click "Add"
5. Set:
   - Type: TXT
   - Name: @ (or leave blank)
   - Value: `google-site-verification=ABC123XYZ789RandomStringHere`
   - TTL: 1 Hour
6. Click "Save"

**Namecheap:**
1. Log in to Namecheap account
2. Go to Domain List → Manage
3. Click "Advanced DNS"
4. Click "Add New Record"
5. Set:
   - Type: TXT Record
   - Host: @
   - Value: `google-site-verification=ABC123XYZ789RandomStringHere`
   - TTL: Automatic
6. Click the checkmark to save

#### Step 3: Wait for DNS Propagation

DNS changes can take time to propagate:
- **Minimum:** 5-10 minutes
- **Typical:** 1-2 hours
- **Maximum:** 24-48 hours

**Check if propagated:**
```bash
# On Mac/Linux
dig TXT homemassageubud.com

# On Windows (Command Prompt)
nslookup -type=TXT homemassageubud.com

# Look for: google-site-verification=ABC123XYZ789RandomStringHere
```

**Online checker:**
- https://toolbox.googleapps.com/apps/dig/
- Enter domain: homemassageubud.com
- Type: TXT
- Look for your verification string

#### Step 4: Verify in Google Search Console

1. Return to Google Search Console
2. Click "Verify" button
3. If successful: You'll see "Ownership verified" ✅
4. If failed: 
   - Wait 10-30 minutes for DNS propagation
   - Try "Verify" again
   - Check DNS record is correct

---

### Method 2: HTML Meta Tag (For URL Prefix Property Only)

**Not available for Domain Property.**

#### Step 1: Get Meta Tag

Google will show:
```html
<meta name="google-site-verification" content="ABC123XYZ789RandomStringHere" />
```

#### Step 2: Add to Website

1. Open: `/home/runner/work/HOME-MASSAGE-UBUD/HOME-MASSAGE-UBUD/client/index.html`
2. Find line 12: `<meta name="google-site-verification" content="REPLACE_WITH_YOUR_VERIFICATION_CODE" />`
3. Replace with your actual code:
```html
<meta name="google-site-verification" content="ABC123XYZ789RandomStringHere" />
```
4. Save file
5. Commit changes:
```bash
git add client/index.html
git commit -m "Add Google Search Console verification meta tag"
git push
```
6. Wait for deployment (5-10 minutes on Vercel)

#### Step 3: Verify in Google Search Console

1. Return to Google Search Console
2. Click "Verify" button
3. If successful: "Ownership verified" ✅
4. If failed:
   - Check meta tag is in `<head>` section
   - Verify site is deployed
   - Check meta tag code is correct
   - Wait 5 minutes and try again

---

### Method 3: HTML File Upload (For URL Prefix Property Only)

#### Step 1: Download Verification File

1. Google will provide a file like: `google1234567890abcdef.html`
2. Click "Download" to save it

#### Step 2: Upload to Website

1. Place file in: `/home/runner/work/HOME-MASSAGE-UBUD/HOME-MASSAGE-UBUD/client/public/`
2. Commit and push:
```bash
git add client/public/google1234567890abcdef.html
git commit -m "Add Google Search Console verification file"
git push
```
3. Wait for deployment (5-10 minutes)

#### Step 3: Verify File is Accessible

Open in browser:
```
https://homemassageubud.com/google1234567890abcdef.html
```

Should show:
```
google-site-verification: google1234567890abcdef.html
```

#### Step 4: Verify in Google Search Console

1. Return to Google Search Console
2. Click "Verify"
3. If successful: "Ownership verified" ✅

---

## Part 3: Submit Sitemap

Once verified, submit your sitemap so Google can discover all your pages.

### Step 1: Verify Sitemap is Accessible

Open in browser:
```
https://homemassageubud.com/sitemap.xml
```

**Should see XML content starting with:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://homemassageubud.com/</loc>
    ...
```

**If not accessible:**
```bash
# Regenerate sitemap
cd /home/runner/work/HOME-MASSAGE-UBUD/HOME-MASSAGE-UBUD
npm run sitemap:generate

# Deploy
git add client/public/sitemap*.xml
git commit -m "Regenerate sitemap"
git push
```

### Step 2: Submit in Google Search Console

1. In Google Search Console, click "Sitemaps" in left sidebar
2. Under "Add a new sitemap", enter: `sitemap.xml`
3. Click "Submit"
4. Status should change to "Success" within minutes

**Expected results:**
```
Sitemap: sitemap.xml
Status: Success
Type: Sitemap
Submitted: [today's date]
Last read: [today's date]
Discovered URLs: 152
```

### Step 3: Submit Sitemap Index (Optional)

For better organization, also submit the sitemap index:

1. Enter: `sitemap-index.xml`
2. Click "Submit"
3. This will help Google discover all sub-sitemaps

---

## Part 4: Monitor Indexing Status

### Check Coverage Report

1. Go to "Coverage" (or "Pages") in left sidebar
2. Wait 2-7 days for initial data
3. Review results:

**Good signs:**
- "Valid" pages: All 152 pages
- No "Error" pages
- No "Excluded" pages (or minimal, expected exclusions)

**Issues to investigate:**
- **Excluded - Crawled, currently not indexed:** Low quality, duplicate, or thin content
- **Excluded - Discovered, currently not indexed:** Not important enough yet, wait or add more internal links
- **Excluded - Duplicate without user-selected canonical:** Fix canonical tags
- **Error - Server error (5xx):** Fix server issues
- **Error - Submitted URL not found (404):** Remove from sitemap or fix URL

### Request Indexing for Key Pages

For important pages, request immediate indexing:

1. Click "URL Inspection" at top
2. Enter full URL: `https://homemassageubud.com/services`
3. Click "Test live URL"
4. If OK, click "Request indexing"
5. Wait 1-7 days for indexing

**Priority pages to request:**
- Homepage: `/`
- Services: `/services`
- Pricing: `/pricing`
- Contact: `/contact`
- Top 5 money pages

---

## Part 5: Set Up Performance Monitoring

### Core Web Vitals

1. Go to "Core Web Vitals" in left sidebar
2. Wait 28 days for data (requires real user metrics)
3. Monitor:
   - **LCP (Largest Contentful Paint):** < 2.5s
   - **INP (Interaction to Next Paint):** < 200ms
   - **CLS (Cumulative Layout Shift):** < 0.1

**If issues appear:**
- Click on "Poor" or "Needs improvement" URLs
- Review recommendations
- Refer to: `CORE_WEB_VITALS_GUIDE.md`

### Mobile Usability

1. Go to "Mobile Usability" in left sidebar
2. Should show "No issues detected"
3. If issues:
   - Click to see details
   - Fix issues on mobile
   - Request validation

---

## Part 6: Set Up Email Notifications

Get alerts for critical issues:

1. Click settings icon (gear) in top right
2. Go to "Users and permissions"
3. Verify your email is listed
4. Click "Users and permissions" → Edit your email
5. Enable notifications:
   - ☑️ Site issues
   - ☑️ Mobile usability issues
   - ☑️ Manual actions
   - ☑️ Security issues
   - ☑️ Rich results issues
6. Save

---

## Part 7: Weekly/Monthly Checks

### Weekly Tasks (5 minutes)

- [ ] Check Coverage Report → Look for new errors
- [ ] Check Performance → Monitor impressions/clicks
- [ ] Check Mobile Usability → No new issues
- [ ] Review any email alerts

### Monthly Tasks (15 minutes)

- [ ] Deep dive into Coverage Report
- [ ] Review Core Web Vitals trends
- [ ] Check for manual actions
- [ ] Analyze Search Analytics (queries, pages, countries)
- [ ] Request indexing for new pages
- [ ] Update sitemap if pages added/removed

---

## Troubleshooting

### Issue: Verification Failed

**DNS TXT Record:**
- Wait 1-2 hours for propagation
- Check DNS record is correct: `dig TXT homemassageubud.com`
- Ensure no typos in verification string
- Try verification again after waiting

**HTML Meta Tag:**
- Check tag is in `<head>` section
- Verify site is deployed
- Check for typos in content attribute
- Clear browser cache and check source code

**HTML File:**
- Ensure file is in root directory (`/client/public/`)
- Check file is accessible in browser
- Verify filename exactly matches
- Check file wasn't renamed during deployment

### Issue: Sitemap Not Found

**Check:**
```bash
# 1. Verify sitemap exists
ls -la /home/runner/work/HOME-MASSAGE-UBUD/HOME-MASSAGE-UBUD/client/public/sitemap.xml

# 2. Regenerate if missing
npm run sitemap:generate

# 3. Test accessibility
curl https://homemassageubud.com/sitemap.xml
```

**Common causes:**
- Sitemap not deployed
- .gitignore blocking sitemap
- Build process not generating sitemap
- Wrong URL (should be `/sitemap.xml` not `/sitemap/`)

### Issue: Pages Not Indexing

**Reasons:**
1. **Too new:** Wait 1-4 weeks
2. **No internal links:** Add links from other pages
3. **Low quality content:** Improve content depth
4. **Duplicate content:** Add unique value
5. **Blocked by robots.txt:** Check rules
6. **Has noindex tag:** Remove if unintended

**Action steps:**
1. Check robots.txt: `curl https://homemassageubud.com/robots.txt`
2. Check page has canonical tag pointing to itself
3. Check no `noindex` meta tag
4. Add internal links from 3-5 relevant pages
5. Request indexing via URL Inspection
6. Wait 1-2 weeks

### Issue: Duplicate Content

**Check:**
1. All pages have self-referential canonical tags
2. Redirects are working (HTTP→HTTPS, www→non-www)
3. No URL parameter duplicates
4. No trailing slash duplicates

**Verify redirects:**
```bash
# Should redirect to HTTPS non-www
curl -I http://homemassageubud.com
curl -I http://www.homemassageubud.com
curl -I https://www.homemassageubud.com

# All should show:
# Location: https://homemassageubud.com
```

---

## Quick Reference Commands

```bash
# Regenerate sitemap
npm run sitemap:generate

# Validate SEO
npm run sitemap:validate

# Full SEO audit
npm run seo:audit

# Check for broken links
npm run link:audit

# Detect orphan pages
npm run orphan:detect

# Check DNS TXT record
dig TXT homemassageubud.com

# Check if sitemap is accessible
curl https://homemassageubud.com/sitemap.xml

# Check redirects
curl -I http://homemassageubud.com
curl -I http://www.homemassageubud.com
```

---

## Success Metrics

After 4-8 weeks, you should see:

### Coverage
- ✅ 152/152 pages indexed (100%)
- ✅ 0 errors
- ✅ Minimal excluded pages

### Performance
- ✅ Impressions increasing week-over-week
- ✅ Click-through rate: 2-5%
- ✅ Average position improving

### Core Web Vitals
- ✅ LCP: < 2.5s (Green)
- ✅ INP: < 200ms (Green)
- ✅ CLS: < 0.1 (Green)

### Mobile Usability
- ✅ No issues detected
- ✅ All pages mobile-friendly

---

## Additional Resources

### Google Documentation
- Search Console Help: https://support.google.com/webmasters
- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Rich Results Test: https://search.google.com/test/rich-results

### Internal Documentation
- `TECHNICAL_SEO_CONFIGURATION.md` - Technical SEO setup
- `CORE_WEB_VITALS_GUIDE.md` - Performance optimization
- `MASTER_SEO_CHECKLIST.md` - Complete SEO checklist
- `DEPLOYMENT_CHECKLIST.md` - Pre-deployment checks

### Tools
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Lighthouse (Chrome DevTools): F12 → Lighthouse tab
- Structured Data Testing: https://validator.schema.org/

---

## Support

If you need help:
1. Check troubleshooting section above
2. Review Google Search Console Help Center
3. Run audit tools: `npm run seo:audit`
4. Check documentation in this repository

---

## Checklist Summary

- [ ] Google Search Console property created
- [ ] Domain ownership verified (DNS TXT or meta tag)
- [ ] Sitemap submitted (sitemap.xml)
- [ ] Coverage report reviewed (wait 2-7 days)
- [ ] Core Web Vitals monitoring enabled (wait 28 days)
- [ ] Mobile usability checked
- [ ] Email notifications configured
- [ ] Key pages requested for indexing
- [ ] Weekly monitoring schedule set up

**Status:** Ready for production submission ✅

---

**Last Updated:** January 18, 2026  
**Version:** 1.0  
**Author:** Technical SEO Documentation
