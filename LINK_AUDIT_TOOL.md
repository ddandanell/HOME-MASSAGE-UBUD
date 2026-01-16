# Link Audit Tool - Complete Documentation

## Overview

This comprehensive link audit tool scans **homemassageubud.com** for broken links, redirect chains, broken buttons/CTAs, and broken images. It generates actionable reports with SEO impact scoring and prioritized fix recommendations.

## Features

### 1. Comprehensive Link Detection
- ✅ **Internal links** - All links between pages on your domain
- ✅ **External links** - Links to partner resorts and other websites
- ✅ **Images** - All `<img src="">` references
- ✅ **Buttons/CTAs** - WhatsApp, Call Now, Book Now buttons
- ✅ **Media files** - Any linked media resources

### 2. Link Status Checking
- **Broken links** - 404, 500, and other error responses
- **Redirect links** - 301, 302, 303 redirects
- **Valid links** - 200 OK responses
- **Warning links** - Suspicious patterns or configurations

### 3. SEO Impact Scoring
The tool automatically prioritizes broken links based on SEO value:

**🔴 High Priority** (Immediate fixes needed)
- Service/product pages (e.g., `/services/balinese-massage`)
- Location pages (e.g., `/ubud`, `/seminyak`)
- Homepage links
- Pages likely to have backlinks or traffic

**🟠 Medium Priority** (Quick wins)
- Other internal pages
- External partner/resort links
- Navigation elements

**🟢 Low Priority** (Long-term cleanup)
- Broken images
- Minor buttons
- Cosmetic issues

### 4. Report Generation

The tool generates three types of reports:

#### CSV Report (`link-audit-[timestamp].csv`)
Spreadsheet-ready format with columns:
- Source URL
- Broken Link (Target URL)
- Type (internal/external/image/button)
- Status Code
- Link Text
- Priority (High/Medium/Low)
- SEO Impact Score
- Redirect Recommendation
- Estimated Effort (hours)

Perfect for:
- Importing into Excel/Google Sheets
- Tracking fixes
- Assigning tasks to team members

#### Markdown Report (`link-audit-[timestamp].md`)
Human-readable summary with:
- Executive summary with key metrics
- Priority breakdown
- Detailed tables of broken links
- Redirect recommendations
- Button/CTA issues
- Action plan with timeline

Perfect for:
- Sharing with stakeholders
- Documentation
- Quick reviews

#### JSON Report (`link-audit-[timestamp].json`)
Raw structured data with:
- Complete link metadata
- Status codes and error messages
- Redirect chains
- Button configurations

Perfect for:
- Programmatic processing
- Integration with other tools
- Automated fixes

## Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm package manager
- Internet access to scan the live website

### Dependencies
All required dependencies are already in `package.json`:
```json
{
  "axios": "HTTP client for fetching pages",
  "cheerio": "HTML parsing and DOM manipulation",
  "xml2js": "XML sitemap parsing",
  "tsx": "TypeScript execution"
}
```

### Installation
Dependencies are already installed. If needed:
```bash
npm install
```

## Usage

### Running the Link Audit

Execute the audit with:
```bash
npm run link:audit
```

### What Happens
1. **Fetches sitemap** from `https://homemassageubud.com/sitemap.xml`
2. **Extracts all URLs** from the sitemap
3. **Scans each page** for links, images, and buttons
4. **Checks each link** for validity (with rate limiting)
5. **Categorizes issues** by priority and type
6. **Generates reports** in CSV, Markdown, and JSON formats
7. **Saves to `reports/` directory**

### Expected Output

```
🚀 Starting Link Audit for homemassageubud.com

📡 Fetching sitemap from https://homemassageubud.com/sitemap.xml...
✅ Found 52 URLs in sitemap

🔍 Scanning https://homemassageubud.com/...
🔍 Scanning https://homemassageubud.com/services...
...

📊 Total links found: 347
📊 Total buttons found: 156

🔗 Checking 289 unique links...
   Progress: 10/289 links checked...
   Progress: 20/289 links checked...
   ...

✅ Link Audit Complete!

📄 Markdown Report: reports/link-audit-2026-01-16T12-00-00.md
📊 CSV Report: reports/link-audit-2026-01-16T12-00-00.csv
📋 JSON Data: reports/link-audit-2026-01-16T12-00-00.json

Summary:
  - Total links checked: 289
  - Broken links: 12
  - High priority issues: 3
  - Medium priority issues: 7
  - Low priority issues: 2
  - Redirect links: 8
  - Broken buttons: 1
```

### Example Audit Duration
- Small site (<50 pages): 5-10 minutes
- Medium site (50-100 pages): 10-20 minutes
- Large site (100+ pages): 20-40 minutes

Duration depends on:
- Number of pages in sitemap
- Number of links per page
- Server response times
- Rate limiting delays (1s between pages)

## Understanding the Reports

### CSV Report Structure

```csv
Source URL,Broken Link (Target URL),Type,Status Code,Link Text,Priority,SEO Impact,Redirect Recommendation,Estimated Effort (hours)
"/services","/services/deep-tissue","internal","404","Deep Tissue Massage","High","High - Service/product page with traffic","Redirect to /services or homepage","2-4"
```

**Columns explained:**
- **Source URL**: Page where the broken link was found
- **Broken Link**: The link that's broken
- **Type**: internal/external/image/button/media
- **Status Code**: HTTP status (404, 500, etc.)
- **Link Text**: Anchor text or image alt text
- **Priority**: High/Medium/Low based on SEO impact
- **SEO Impact**: Description of potential SEO consequences
- **Redirect Recommendation**: Suggested 301 redirect target
- **Estimated Effort**: Time needed to fix (in hours)

### Markdown Report Structure

**Executive Summary**
- Quick overview of total links, broken links, and issues

**Priority Breakdown**
- Count of high/medium/low priority issues

**Detailed Tables**
- 🔴 High Priority Broken Links (top 20)
- 🟡 Redirect Links (top 10)
- 🔘 Broken Buttons/CTAs
- 🖼️ Broken Images summary

**Recommended Actions**
- Immediate fixes (Week 1-2)
- Quick wins (Week 3-4)
- Long-term cleanup (Month 2-3)

### JSON Report Structure

```json
{
  "timestamp": "2026-01-16T12:00:00.000Z",
  "totalLinksChecked": 289,
  "brokenLinks": [...],
  "redirectLinks": [...],
  "externalLinks": [...],
  "brokenButtons": [...],
  "brokenImages": [...],
  "seoImpact": {
    "highPriority": [...],
    "mediumPriority": [...],
    "lowPriority": [...]
  }
}
```

## Taking Action on Results

### Step 1: Review the Reports

1. Open the Markdown report for a quick overview
2. Import CSV into Google Sheets for tracking
3. Sort by Priority (High → Medium → Low)

### Step 2: Fix High Priority Issues First

**For broken service/product pages:**
```
1. Identify the correct target page
2. Set up 301 redirect in your server config
3. Test the redirect
4. Monitor in Google Search Console
```

**Example redirect configuration (for Vercel/Express):**
```javascript
// In your server/routing config
{
  source: '/old-service-page',
  destination: '/services/new-page',
  permanent: true // 301 redirect
}
```

### Step 3: Fix Broken Buttons

**WhatsApp buttons:**
- Verify phone number is correct
- Format: `https://wa.me/6281234567890`
- Include message parameter if desired

**Call buttons:**
- Format: `tel:+6281234567890`
- Ensure clickable on mobile devices

**Book Now buttons:**
- Link to booking form or WhatsApp
- Test on mobile and desktop

### Step 4: Replace Broken Images

1. Find replacement images
2. Optimize (compress, resize)
3. Upload to `/public/images/` or CDN
4. Update `src` attribute
5. Add descriptive `alt` text for SEO

**Image optimization checklist:**
- [ ] Compress (use TinyPNG, ImageOptim)
- [ ] Resize to actual display size
- [ ] Use WebP format where supported
- [ ] Add descriptive alt text
- [ ] Implement lazy loading

### Step 5: Update Redirect Links

Instead of linking to a URL that redirects:
```html
<!-- Bad: Causes extra redirect -->
<a href="/old-page">Link Text</a>

<!-- Good: Links directly to final destination -->
<a href="/new-page">Link Text</a>
```

Benefits:
- Faster page load
- Better user experience
- Slightly better SEO

## Best Practices

### When to Run the Audit

**Regular schedule:**
- ✅ **Monthly** - Catch issues early
- ✅ **After major updates** - Verify no broken links
- ✅ **Before SEO campaigns** - Clean up before pushing traffic
- ✅ **After migrations** - Ensure all redirects work

**Triggered audits:**
- After redesigns
- After URL structure changes
- After content updates
- When 404 errors spike in GSC

### Preventing Future Broken Links

**1. Use relative URLs for internal links**
```html
<!-- Good -->
<a href="/services/massage">Services</a>

<!-- Avoid -->
<a href="https://homemassageubud.com/services/massage">Services</a>
```

**2. Test before deploying**
- Run link audit in staging
- Fix issues before production
- Use CI/CD integration

**3. Monitor in Google Search Console**
- Check Coverage report weekly
- Set up email alerts for 404 errors
- Track crawl errors

**4. Document URL changes**
- Keep a redirect map
- Update internal links when URLs change
- Set up proper 301 redirects

**5. Implement link governance**
- Review process for new pages
- Naming conventions for URLs
- No orphan pages
- Regular audits

## Customization

### Modify URL Patterns

Edit `scripts/link-audit.ts` to customize:

**Change the website URL:**
```typescript
const sitemapUrl = 'https://your-website.com/sitemap.xml';
```

**Adjust priority criteria:**
```typescript
const highPriority = brokenLinks.filter(l => 
  l.linkType === 'internal' && 
  (l.targetUrl.includes('/your-important-section/') || 
   l.sourceUrl.endsWith('/'))
);
```

**Add custom button detection:**
```typescript
$('a, button').each((i, elem) => {
  const text = $(elem).text().trim().toLowerCase();
  if (text.includes('your-custom-button-text')) {
    // Add to buttons array
  }
});
```

**Skip certain link types:**
```typescript
// Skip checking specific domains
if (link.targetUrl.includes('example.com')) {
  link.status = 'untested';
  continue;
}
```

### Adjust Rate Limiting

To speed up or slow down the audit:

```typescript
// Between pages (currently 1000ms = 1 second)
await new Promise(resolve => setTimeout(resolve, 1000));

// Between link checks (currently 200ms)
await new Promise(resolve => setTimeout(resolve, 200));
```

**Note:** Be respectful of the server. Don't reduce delays too much.

### Add External Link Checking

By default, external links are not checked (to speed up the audit). To enable:

```typescript
// Remove this condition
if (link.linkType === 'external' && !link.targetUrl.includes('homemassageubud.com')) {
  link.status = 'untested';
  continue;
}
```

## Troubleshooting

### Common Issues

**"Could not resolve host"**
- Website might be down
- Check internet connection
- Verify sitemap URL is accessible

**"Timeout errors"**
- Increase timeout in script:
```typescript
timeout: 30000 // 30 seconds
```

**"Too many requests"**
- Server is rate limiting
- Increase delays between requests
- Run during off-peak hours

**"No URLs found in sitemap"**
- Verify sitemap exists at URL
- Check sitemap format (must be XML)
- Ensure sitemap is publicly accessible

**"Module not found"**
```bash
npm install
```

### Getting Detailed Logs

For debugging, add console.log statements:

```typescript
console.log('Checking link:', link.targetUrl);
console.log('Response:', result);
```

## Integration with Other Tools

### Google Search Console

1. Run link audit
2. Compare with GSC Coverage report
3. Cross-reference 404 errors
4. Fix discrepancies

### Ahrefs/Screaming Frog

This tool can complement:
- **Ahrefs Site Audit** - For backlink analysis
- **Screaming Frog** - For deeper technical SEO
- **Google Search Console** - For actual search data

Use this tool for:
- Quick, automated audits
- Regular monitoring
- CI/CD integration
- Custom reporting

### CI/CD Integration

Add to GitHub Actions workflow:

```yaml
- name: Run Link Audit
  run: npm run link:audit
  
- name: Upload Reports
  uses: actions/upload-artifact@v2
  with:
    name: link-audit-reports
    path: reports/
```

## Next Steps

After running your first audit:

1. **Review the reports** (start with Markdown)
2. **Import CSV to spreadsheet** for tracking
3. **Fix high priority issues** first
4. **Set up 301 redirects** for valuable broken pages
5. **Create custom 404 page** with booking CTA
6. **Schedule monthly audits** for ongoing monitoring
7. **Set up GSC monitoring** for new 404 errors
8. **Document your fixes** for future reference

## Related Documentation

- `SEO_AUDIT_TOOL.md` - For on-page SEO analysis
- `GOOGLE_SEARCH_CONSOLE_SETUP.md` - For GSC integration
- `INTERNAL_LINKING_ARCHITECTURE.md` - For link structure
- `DEPLOYMENT_CHECKLIST.md` - For pre-deployment checks

## Support

For issues or questions:
1. Check this documentation
2. Review the script at `scripts/link-audit.ts`
3. Check example reports in `reports/` directory
4. Review TypeScript error messages

## Conclusion

This link audit tool provides comprehensive, automated link checking for **homemassageubud.com**. Regular use will help:

- ✅ Maintain excellent user experience
- ✅ Preserve SEO value
- ✅ Catch issues before users do
- ✅ Track improvements over time
- ✅ Prevent broken link penalties

Run it monthly and address issues promptly for best results!
