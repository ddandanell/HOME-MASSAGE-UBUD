# SEO & Orphan Page Detection Tools

This directory contains comprehensive tools for SEO auditing, link management, and orphan page detection.

## Available Tools

### 1. Orphan Page Detector (`orphan-page-detector.ts`)

**Purpose:** Comprehensive orphan page detection and SEO optimization system

**Usage:**
```bash
npm run orphan:detect
```

**Features:**
- Full site crawl with internal link mapping
- Identifies pages with zero internal links (orphans)
- Classifies orphans by priority (high/medium/low)
- Generates automated fix recommendations:
  - Add internal links (with suggestions)
  - Merge & 301 redirect (with targets)
  - Add noindex tag
  - Delete page
- Simulates traffic and backlink analysis
- Content quality assessment
- Creates tracking spreadsheet

**Output:**
- `orphan-detection-[timestamp].md` - Comprehensive report
- `orphan-detection-[timestamp].json` - Raw data
- `orphan-page-tracking-[timestamp].csv` - Excel tracking spreadsheet

**Documentation:** See `ORPHAN_PAGE_DETECTION_GUIDE.md`

---

### 2. Orphan Page Monitor (`orphan-page-monitor.ts`)

**Purpose:** Automated weekly monitoring for new orphan pages

**Usage:**
```bash
npm run orphan:monitor
```

**Features:**
- Quick scan mode for speed
- Detects NEW orphan pages since last scan
- Tracks resolved orphans
- Historical trend analysis (last 30 scans)
- Automated alerts when orphans detected
- Generates monitoring reports

**Output:**
- `orphan-monitor-[timestamp].json` - Scan results
- `orphan-monitor-[timestamp].md` - Summary report
- `orphan-alert-[timestamp].txt` - Alert messages
- `orphan-history.json` - Historical data

**Recommended:** Run weekly via cron or CI/CD

---

### 3. New Page Validator (`validate-new-page.ts`)

**Purpose:** Pre-publication validation to prevent orphan pages

**Usage:**
```bash
npm run page:validate https://homemassageubud.com/your-page
```

**Features:**
- Validates page is in sitemap.xml
- Counts internal links (requires minimum 2)
- Checks SEO elements (title, meta, H1, canonical)
- Verifies content quality (minimum 300 words)
- Suggests pages to link from
- Prevents orphan pages before they happen

**Validation Criteria:**
- ✅ In sitemap
- ✅ At least 2 internal links
- ✅ Title tag (50-60 chars)
- ✅ Meta description (120-160 chars)
- ✅ Single H1 tag
- ✅ Minimum 300 words

**Recommended:** Run before deploying new pages

---

### 4. SEO Audit Tool (`seo-audit.ts`)

**Purpose:** Comprehensive technical and on-page SEO audit

**Usage:**
```bash
npm run seo:audit
```

**Features:**
- Fetches and parses sitemap.xml automatically
- Analyzes all pages for:
  - Title tags and meta descriptions
  - Canonical tags
  - JSON-LD structured data
  - Heading tag structure (H1-H6)
  - Content word count
- Identifies issues:
  - Duplicate or missing titles/descriptions
  - Duplicate canonical tags
  - Missing schema or inconsistent structured data
  - Pages with low word count or empty content
- Generates comprehensive reports with:
  - Summary statistics
  - Page-by-page analysis table
  - Site-wide issues
  - Specific recommendations for each page

**Output:**
- `seo-audit-[timestamp].md` - Human-readable report
- `seo-audit-[timestamp].json` - Raw data

---

### 5. Link Audit Tool (`link-audit.ts`)

**Purpose:** Scan for broken links, buttons, images, and redirects

**Usage:**
```bash
npm run link:audit
```

**Features:**
- Scans all internal/external links
- Detects broken links (404, 500 errors)
- Finds redirect chains
- Checks buttons and CTAs
- Validates images
- Priority scoring by SEO impact
- Generates actionable recommendations

**Output:**
- `link-audit-[timestamp].md` - Report with recommendations
- `link-audit-[timestamp].csv` - Spreadsheet export
- `link-audit-[timestamp].json` - Raw data

**Documentation:** See `LINK_AUDIT_TOOL.md`

---

## Quick Start

### Initial Setup

1. **Run comprehensive orphan detection:**
   ```bash
   npm run orphan:detect
   ```

2. **Review reports in `reports/` directory**

3. **Fix high-priority orphans first** (service/area pages)

4. **Set up weekly monitoring:**
   ```bash
   npm run orphan:monitor
   ```

### Before Publishing New Pages

```bash
# Validate new page
npm run page:validate https://homemassageubud.com/new-page

# If validation passes, publish
# Then verify after 24 hours
npm run orphan:monitor
```

### Monthly Maintenance

```bash
# Full SEO audit
npm run seo:audit

# Link audit
npm run link:audit

# Orphan detection
npm run orphan:detect
```

---

## Installation

Dependencies are already included in the project's `package.json`. If you need to reinstall them:

```bash
npm install
```

---

## Report Outputs

All tools generate reports in the `reports/` directory:

```
reports/
├── orphan-detection-[timestamp].md
├── orphan-detection-[timestamp].json
├── orphan-page-tracking-[timestamp].csv
├── orphan-monitor-[timestamp].md
├── orphan-monitor-[timestamp].json
├── orphan-history.json
├── seo-audit-[timestamp].md
├── seo-audit-[timestamp].json
├── link-audit-[timestamp].md
├── link-audit-[timestamp].csv
└── link-audit-[timestamp].json
```

---

## Complete Documentation

- **`ORPHAN_PAGE_DETECTION_GUIDE.md`** - Complete orphan detection system guide
- **`ORPHAN_PAGE_PREVENTION.md`** - Best practices and content workflow
- **`SEO_AUDIT_TOOL.md`** - SEO audit documentation
- **`LINK_AUDIT_TOOL.md`** - Link audit documentation
- **`INTERNAL_LINKING_ARCHITECTURE.md`** - Internal linking strategy

---

## Customization

To customize for a different website:

1. Edit the respective script file in `scripts/`
2. Update the `CONFIG` object:
   ```typescript
   const CONFIG = {
     sitemapUrl: 'https://yoursite.com/sitemap.xml',
     domain: 'yoursite.com',
     baseUrl: 'https://yoursite.com',
     // ... other settings
   };
   ```
3. Adjust thresholds as needed (word count, link count, etc.)

---

## Best Practices

### For Content Creators
- Always add 2-3 internal links BEFORE publishing
- Run `page:validate` before deploying
- Use descriptive anchor text
- Link to AND from related content

### For Developers
- Automate sitemap updates
- Set up weekly monitoring in CI/CD
- Implement pre-deployment validation
- Track orphan metrics

### For SEO Teams
- Run monthly comprehensive audits
- Fix high-priority orphans within 48 hours
- Monitor historical trends
- Document all changes

---

## Troubleshooting

### Issue: Script fails with timeout error

**Solution:**
- Increase timeout in CONFIG
- Reduce number of pages scanned
- Check network connectivity

### Issue: Too many false positives

**Solution:**
- Adjust classification thresholds
- Review content type detection logic
- Update priority rules

### Issue: Missing reports directory

**Solution:**
- Reports directory is created automatically
- Check write permissions
- Verify script completed successfully

---

## Technical Details

## Technical Details

- **Language:** TypeScript
- **HTTP Client:** Axios
- **HTML Parser:** Cheerio
- **XML Parser:** xml2js
- **Rate Limiting:** Configurable delays between requests
- **Error Handling:** Graceful degradation with detailed logging

---

## Notes

- All audits run against the live website
- Analysis includes only visible content (scripts, styles removed)
- Delays between requests prevent overwhelming the server
- Historical data is preserved for trend analysis
- Reports are timestamped for version control

---

## Contributing

To improve these tools:
1. Add new classification rules
2. Enhance link suggestion algorithms
3. Integrate additional data sources (Analytics, Search Console)
4. Improve reporting formats
5. Add new validation checks

---

## License

MIT License - See LICENSE file for details
