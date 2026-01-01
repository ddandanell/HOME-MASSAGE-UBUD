# SEO Audit Tool - Quick Start Guide

## What Is This?

A comprehensive TypeScript-based tool that audits **all pages** of HomeMassageUbud.com for technical and on-page SEO issues.

## What Does It Do?

✅ Fetches sitemap from https://homemassageubud.com/sitemap.xml
✅ Analyzes every page for SEO metadata
✅ Detects duplicates and missing content
✅ Generates detailed reports with recommendations

## Installation

Dependencies are already installed. If needed:

```bash
npm install
```

## Usage

**Single Command:**

```bash
npm run seo:audit
```

This will:
1. Fetch the sitemap
2. Analyze all pages (with rate limiting)
3. Generate reports in `reports/` directory

## Output

Two files are created:

```
reports/
  ├── seo-audit-2026-01-01T21-00-00.md    # Human-readable report
  └── seo-audit-2026-01-01T21-00-00.json  # Raw data (JSON)
```

## What Gets Analyzed?

For each page:
- ✓ Title tag (presence, length, uniqueness)
- ✓ Meta description (presence, length, uniqueness)
- ✓ Canonical tag (presence, configuration)
- ✓ JSON-LD schema (LocalBusiness, Service, FAQ)
- ✓ Heading tags (H1-H6 counts)
- ✓ Word count (visible text only)

## What Issues Are Detected?

- ⚠️ Duplicate titles or descriptions
- ⚠️ Missing metadata
- ⚠️ Duplicate canonical tags
- ⚠️ Missing structured data
- ⚠️ Low word count pages (<300 words)
- ⚠️ Multiple or missing H1 tags

## Example Report

See `reports/seo-audit-example.md` for a complete example.

## Report Includes

1. **Page Analysis Table**
   - URL, title, description
   - Keyword focus
   - Issues found
   - Recommendations

2. **Summary Statistics**
   - Count of pages with issues
   - Average word count

3. **Detailed Recommendations**
   - Page-specific fixes
   - Site-wide issues
   - Priority actions

## Documentation

- **This Guide**: Quick start (you are here)
- **Tool Docs**: `scripts/README.md`
- **Complete Guide**: `SEO_AUDIT_TOOL.md`
- **Implementation**: `SEO_AUDIT_SUMMARY.md`
- **Example Output**: `reports/seo-audit-example.md`

## Customization

Edit `scripts/seo-audit.ts` to:
- Change the website URL
- Adjust thresholds (word count, title length)
- Add custom checks
- Modify recommendations

## Need Help?

1. Check the example report: `reports/seo-audit-example.md`
2. Read tool documentation: `scripts/README.md`
3. Review complete guide: `SEO_AUDIT_TOOL.md`

## Technical Details

- **Language**: TypeScript
- **Dependencies**: axios, cheerio, xml2js
- **Rate Limiting**: 1 second between requests
- **Timeout**: 30 seconds per page
- **Error Handling**: Continues on failed requests

## Quick Reference

```bash
# Run audit
npm run seo:audit

# View example
cat reports/seo-audit-example.md

# Check script
cat scripts/seo-audit.ts
```

## What's Next?

1. Run the audit: `npm run seo:audit`
2. Review the generated report
3. Prioritize fixes based on recommendations
4. Implement improvements
5. Run audit again to verify

---

**Ready to start?** Run: `npm run seo:audit`
