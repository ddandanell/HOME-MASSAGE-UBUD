# SEO Audit Tool

This tool performs a comprehensive technical and on-page SEO audit of all pages on HomeMassageUbud.com.

## Features

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

## Installation

Dependencies are already included in the project's `package.json`. If you need to reinstall them:

```bash
npm install
```

## Usage

Run the SEO audit:

```bash
npm run seo:audit
```

This will:
1. Fetch the sitemap from https://homemassageubud.com/sitemap.xml
2. Analyze each page (with a 1-second delay between requests)
3. Generate two report files in the `reports/` directory:
   - `seo-audit-[timestamp].md` - Human-readable markdown report
   - `seo-audit-[timestamp].json` - Raw data in JSON format

## Report Structure

### Markdown Report (.md)

The markdown report includes:

1. **Page Analysis Table**: Summary of all pages with:
   - URL
   - Current title
   - Recommended title approach
   - Meta description excerpt
   - Keyword focus (extracted from URL)
   - Top issues found
   - Key recommendations

2. **Summary Statistics**:
   - Count of pages with various issues
   - Average word count across all pages

3. **Detailed Findings**:
   - Site-wide issues (duplicates, etc.)
   - Page-specific recommendations
   - Priority actions to take

### JSON Report (.json)

The JSON report contains raw data for:
- Complete page data including all metadata
- Full list of issues per page
- All recommendations
- Site-wide issues

## Customization

To audit a different website or modify the analysis:

1. Edit `scripts/seo-audit.ts`
2. Change the `sitemapUrl` in the `runAudit()` function
3. Modify thresholds (word count, title length, etc.) in the `analyzePage()` function
4. Add custom recommendations in the `generateRecommendations()` function

## Understanding the Output

### Common Issues

- **Missing title/meta description**: Page lacks basic SEO metadata
- **Duplicate content**: Multiple pages share the same title or description
- **Low word count**: Page has less than 300 words of visible content
- **Missing schema**: No JSON-LD structured data found
- **Multiple H1 tags**: More than one H1 tag on a page (SEO best practice is one per page)

### Recommendations

The tool provides specific recommendations based on:
- Page type (service pages, area pages, etc.)
- Detected issues
- SEO best practices

## Technical Details

- Built with TypeScript
- Uses Axios for HTTP requests
- Uses Cheerio for HTML parsing
- Uses xml2js for sitemap parsing
- Includes 1-second delay between requests to avoid overwhelming the server

## Notes

- The audit runs against the live website (homemassageubud.com)
- Analysis includes only visible content (scripts, styles removed)
- Word count includes all text within the `<body>` tag after cleaning
- Schema detection looks for `application/ld+json` script tags
