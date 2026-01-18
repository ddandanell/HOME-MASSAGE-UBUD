# Technical SEO Configuration Guide

**Purpose:** Complete reference for technical SEO implementation  
**Last Updated:** January 18, 2026  
**Status:** ✅ Implemented

---

## 1. Canonical URL Structure

### Chosen Format
- **Protocol:** HTTPS only (HTTP redirects to HTTPS via Vercel)
- **Domain:** `homemassageubud.com` (non-www)
- **Trailing Slash:** No trailing slashes (clean URLs)
- **Case:** Lowercase only

### Examples
✅ Correct: `https://homemassageubud.com/services`  
❌ Wrong: `http://homemassageubud.com/services/`  
❌ Wrong: `https://www.homemassageubud.com/Services`

### Implementation
All canonical URLs are automatically generated in `SEOHead.tsx` component:
- Self-referential canonical tags on every page
- Strips trailing slashes
- Uses current URL path if canonical not explicitly provided
- Always uses absolute URLs with HTTPS

---

## 2. 301 Redirect Rules (vercel.json)

### HTTP → HTTPS
Automatically handled by Vercel platform. All HTTP requests are redirected to HTTPS with 301 status.

**Test:**
```bash
curl -I http://homemassageubud.com
# Should return: HTTP/1.1 301 Moved Permanently
# Location: https://homemassageubud.com
```

### www ↔ non-www
**Canonical Choice:** Non-www (`homemassageubud.com`)

Vercel automatically redirects www to non-www when domain is configured as apex domain.

**Test:**
```bash
curl -I https://www.homemassageubud.com
# Should return: HTTP/1.1 301 Moved Permanently
# Location: https://homemassageubud.com
```

### Trailing Slash Normalization
Configured in `vercel.json`:
```json
"trailingSlash": false,
"cleanUrls": true
```

This ensures:
- `/services/` → redirects to → `/services`
- `/about/` → redirects to → `/about`

### URL Parameter Handling
UTM parameters are preserved but don't create duplicate pages:
- Canonical tags ignore UTM parameters
- No separate indexing for `?utm_source=...` variants
- Parameters handled: `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`

### Case Sensitivity
Vercel handles case-insensitive routing automatically for static sites.

---

## 3. Robots.txt Configuration

**Location:** `/client/public/robots.txt`

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

### What's Blocked
- `/admin/` - Admin areas (if added in future)
- `/api/` - API endpoints (not for indexing)
- `/*.json$` - JSON files (data files, not pages)

### What's Allowed
- All pages: `/`, `/services`, `/about`, etc.
- All images: `/images/`, `/assets/`
- CSS and JavaScript files (required for rendering)
- Sitemap files

### Verification
```bash
# Check robots.txt
curl https://homemassageubud.com/robots.txt

# Verify not blocking important resources
# Should NOT see: Disallow: /assets/
# Should NOT see: Disallow: /*.css
# Should NOT see: Disallow: /*.js
```

---

## 4. Robots Meta Tags

### Default Behavior
All pages use: `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`

This tells search engines:
- `index` - Include this page in search results
- `follow` - Follow links on this page
- `max-image-preview:large` - Can show large image previews
- `max-snippet:-1` - No limit on text snippet length
- `max-video-preview:-1` - No limit on video preview length

### Noindex Pages
Set `noindex={true}` in SEOHead component for pages that should NOT be indexed:

```tsx
<SEOHead 
  title="Search Results"
  description="..."
  noindex={true}  // This page won't be indexed
/>
```

**When to use noindex:**
- Internal search results pages
- Tag/category archive pages (if duplicate content)
- Filtered/sorted pages (if duplicates exist)
- Staging/test pages
- Thank you pages
- Login/signup pages

### Current Implementation
✅ All main pages: `index, follow`  
✅ All service pages: `index, follow`  
✅ All area pages: `index, follow`  
✅ All blog pages: `index, follow`  
✅ No unintended noindex tags

---

## 5. XML Sitemap

### Structure
- **Main Sitemap:** `/sitemap.xml` (150 URLs)
- **Sitemap Index:** `/sitemap-index.xml` (10 sub-sitemaps)

### Sub-sitemaps
1. `sitemap-pages.xml` - Main pages (14 URLs)
2. `sitemap-blog.xml` - Blog articles (1 URL)
3. `sitemap-treatments.xml` - Treatment pages (13 URLs)
4. `sitemap-areas-ubud.xml` - Ubud areas (6 URLs)
5. `sitemap-areas-south.xml` - South Bali areas (14 URLs)
6. `sitemap-areas-north-east.xml` - North/East Bali (3 URLs)
7. `sitemap-services.xml` - Service landing pages (26 URLs)
8. `sitemap-home-massage.xml` - Home massage silo (23 URLs)
9. `sitemap-mobile-massage.xml` - Mobile massage silo (22 URLs)
10. `sitemap-villa-massage.xml` - Villa massage silo (28 URLs)

### Sitemap Rules
✅ Only canonical URLs (no query parameters)  
✅ Only HTTPS URLs  
✅ No trailing slashes  
✅ Only pages that return 200 status  
✅ No redirects (3xx)  
✅ No error pages (4xx/5xx)  
✅ No noindex pages  
✅ Valid XML format  
✅ Proper lastmod dates (YYYY-MM-DD)

### Generation
```bash
# Generate fresh sitemap
npm run sitemap:generate

# Validate sitemap
npm run sitemap:validate
```

### Automatic Updates
- Sitemap regenerates on every build (`npm run build`)
- Committed to repository automatically
- Deployed with site on Vercel

### Google Search Console Submission
1. Go to https://search.google.com/search-console
2. Select property: `homemassageubud.com`
3. Navigate to: Sitemaps
4. Enter: `sitemap.xml`
5. Click: Submit

**Expected Result:** "Success" status with 150 URLs discovered

---

## 6. Caching & Performance Headers

### Static Assets (Images, Fonts, JS, CSS)
**Cache:** 1 year (31,536,000 seconds)
```
Cache-Control: public, max-age=31536000, immutable
```

Applies to:
- Images: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.avif`, `.ico`, `.svg`
- Fonts: `.woff`, `.woff2`, `.ttf`, `.otf`
- Static folders: `/assets/*`, `/static/*`

### Dynamic Content (HTML pages)
**Cache:** No cache (always fresh from server)
```
Cache-Control: no-cache, no-store, must-revalidate
```

### Sitemap & Robots.txt
**Cache:** 1 hour (3600 seconds)
```
Cache-Control: public, max-age=3600, must-revalidate
```

This allows:
- Search engines to cache for 1 hour
- Changes to be picked up within 1 hour
- Reduced server load

---

## 7. Security Headers

Implemented in `vercel.json` for all pages:

### X-Content-Type-Options
```
X-Content-Type-Options: nosniff
```
Prevents MIME type sniffing attacks.

### X-Frame-Options
```
X-Frame-Options: DENY
```
Prevents clickjacking by blocking iframe embedding.

### X-XSS-Protection
```
X-XSS-Protection: 1; mode=block
```
Enables browser XSS protection.

### Referrer-Policy
```
Referrer-Policy: strict-origin-when-cross-origin
```
Controls referrer information sent with requests.

### Permissions-Policy
```
Permissions-Policy: camera=(), microphone=(), geolocation=()
```
Disables unnecessary browser features.

---

## 8. Page-Level SEO Implementation

### Every Page Must Have:
1. ✅ `<title>` tag (unique, under 60 characters)
2. ✅ `<meta name="description">` (unique, 150-160 characters)
3. ✅ `<link rel="canonical">` (self-referential, absolute URL)
4. ✅ `<meta name="robots">` (default: index, follow)
5. ✅ Open Graph tags (og:title, og:description, og:image, og:url)
6. ✅ Twitter Card tags

### Implementation Example
```tsx
import SEOHead from "@/components/SEOHead";

function MyPage() {
  return (
    <>
      <SEOHead
        title="Professional Massage Services Ubud"
        description="Expert massage therapy delivered to your villa in Ubud. Traditional Balinese, deep tissue & aromatherapy. Book now!"
        canonical="https://homemassageubud.com/services"
        keywords="massage ubud, villa massage, balinese massage"
      />
      {/* Page content */}
    </>
  );
}
```

---

## 9. URL Structure & Hierarchy

### Site Structure
```
/ (homepage)
├── /services (services index)
├── /treatments (treatments index)
│   └── /ubud/traditional-balinese-massage
│   └── /ubud/deep-tissue-massage
├── /service-areas (areas index)
│   ├── /ubud-centre
│   ├── /canggu
│   └── /seminyak
├── /home-massage (silo hub)
│   ├── /home-massage/services
│   ├── /home-massage/cities
│   ├── /home-massage/knowledge
│   └── /home-massage/blog
├── /mobile-massage (silo hub)
│   └── [same structure]
├── /villa-massage (silo hub)
│   └── [same structure]
├── /about
├── /contact
├── /pricing
└── /blog
```

### Hierarchy Rules
✅ Key pages reachable in ≤3 clicks from homepage  
✅ Clear parent-child relationships  
✅ Consistent URL patterns within silos  
✅ No deep nesting (max 3 levels: /silo/category/page)

---

## 10. Internal Linking Strategy

### Hub Pages (Every page links to at least one)
- Homepage: `/`
- Services: `/services`
- Treatments: `/treatments`
- Service Areas: `/service-areas`

### Navigation Links
- Primary nav links to money pages (Services, Pricing, Contact)
- Footer links to trust pages (About, Privacy, Terms, Contact)

### Breadcrumbs
✅ Implemented on all pages  
✅ Schema markup included  
✅ Links work correctly

### No Orphan Pages
Every indexable page has at least 1 internal link from another indexable page.

**Verification:**
```bash
npm run orphan:detect
```

---

## 11. Duplicate Content Prevention

### URL Variations Handled
✅ HTTP vs HTTPS → 301 redirect  
✅ www vs non-www → 301 redirect  
✅ Trailing slash vs no trailing slash → 301 redirect  
✅ Uppercase vs lowercase → Handled by Vercel  
✅ Query parameters → Canonical ignores UTM parameters

### Pagination (if implemented in future)
When adding pagination:
- Page 1: `<link rel="canonical" href="https://homemassageubud.com/blog">`
- Page 2: `<link rel="canonical" href="https://homemassageubud.com/blog?page=2">`
- Page 3: `<link rel="canonical" href="https://homemassageubud.com/blog?page=3">`

**Do NOT** canonicalize all paginated pages to page 1.

---

## 12. Monitoring & Validation

### Google Search Console Checks
After deployment, monitor:
1. **Coverage Report:** Ensure all 150 pages are indexed
2. **Index Status:** No "Excluded" issues
3. **Sitemaps:** "Success" status
4. **Mobile Usability:** No issues
5. **Core Web Vitals:** Green scores
6. **Manual Actions:** No penalties

### Regular Audits
```bash
# Run full SEO audit
npm run seo:audit

# Check for broken links
npm run link:audit

# Detect orphan pages
npm run orphan:detect

# Validate sitemap
npm run sitemap:validate
```

### Pre-Deployment Checklist
Before every deployment:
1. Generate fresh sitemap: `npm run sitemap:generate`
2. Validate SEO: `npm run sitemap:validate`
3. Check build: `npm run build`
4. Test locally: `npm run preview`

---

## 13. Google Search Console Setup

### Domain Verification
1. Go to https://search.google.com/search-console
2. Click "Add Property"
3. Choose "Domain" property type
4. Enter: `homemassageubud.com`
5. Add DNS TXT record provided by Google
6. Click "Verify"

### Alternative: HTML Meta Tag Verification
Add to `index.html`:
```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```
Replace `YOUR_VERIFICATION_CODE` with code from Google Search Console.

### Submit Sitemap
1. Navigate to: Sitemaps
2. Enter: `sitemap.xml`
3. Click: Submit
4. Wait for "Success" status

### Request Indexing (for new pages)
1. Navigate to: URL Inspection
2. Enter full URL: `https://homemassageubud.com/new-page`
3. Click: "Request Indexing"
4. Wait 1-7 days for indexing

---

## 14. Troubleshooting

### Page Not Indexed
Check:
1. Is URL in sitemap?
2. Does robots.txt allow it?
3. Does page have `noindex` meta tag?
4. Is canonical pointing to correct URL?
5. Does page return 200 status?
6. Is there an internal link to this page?

### Duplicate Content Issues
Check:
1. Are canonical tags correct?
2. Are 301 redirects working?
3. Are there multiple versions of same page?
4. Are paginated pages handled correctly?

### "Discovered, Not Indexed"
This means Google found the page but hasn't indexed it yet. Causes:
1. Low-quality content
2. Thin content (too short)
3. Duplicate content
4. Low internal linking
5. Page too new (wait 1-4 weeks)

**Fix:**
1. Add internal links to this page
2. Improve content quality
3. Add unique value
4. Request indexing in GSC

---

## Summary Checklist

✅ HTTPS enforced (HTTP → HTTPS 301)  
✅ Canonical URL structure defined (non-www, no trailing slash)  
✅ All pages have self-referential canonical tags  
✅ robots.txt configured correctly  
✅ No unintended noindex tags  
✅ XML sitemap generated (150 URLs)  
✅ Sitemap follows all rules (200 status, canonical URLs only)  
✅ Caching headers optimized  
✅ Security headers implemented  
✅ URL structure is clean and hierarchical  
✅ Internal linking strategy in place  
✅ Duplicate content prevention configured  
✅ Google Search Console setup documented  

**Status:** ✅ Production Ready

---

## Next Steps

1. Deploy to production
2. Verify HTTPS and redirects work
3. Submit sitemap to Google Search Console
4. Monitor Coverage Report for 2-4 weeks
5. Fix any "Excluded" issues that appear
6. Run monthly SEO audits

---

## Support

For questions or issues:
- Check scripts: `npm run seo:audit`, `npm run link:audit`
- Review documentation: `DEPLOYMENT_CHECKLIST.md`, `MASTER_SEO_CHECKLIST.md`
- Test locally: `npm run build && npm run preview`
