# Autonomous SEO Landing Page Builder

## Overview

This production-ready script generates fully optimized SEO landing pages with zero hallucinations. It extracts all data from the codebase, implements comprehensive SEO, and validates against strict acceptance criteria.

## Features

### ✅ What It Does

1. **Website Reconnaissance** - Extracts business data from codebase
   - Reads WhatsApp config from `client/src/lib/whatsapp.ts`
   - Extracts services and treatments
   - Maps internal URLs for link building
   - Identifies missing data (marked, never fabricated)

2. **Page Strategy** - Defines comprehensive structure
   - 20+ content sections
   - Keyword distribution plan
   - CTA placement strategy
   - Internal linking architecture

3. **Keyword Integration** - Tracks & validates keyword usage
   - Exact match counting per keyword
   - Partial variation tracking
   - Keyword density calculation
   - Target validation (6-14 exact matches per keyword, <2% density)

4. **HTML Generation** - Creates semantic, SEO-optimized markup
   - Single H1 in hero
   - Logical H2/H3 hierarchy
   - 10+ WhatsApp CTAs
   - 12+ internal links to real URLs
   - Mobile-first responsive design

5. **Meta & Technical SEO** - Complete tag implementation
   - Title tag (≤60 chars)
   - Meta description (150-160 chars)
   - Canonical URL
   - Open Graph tags (7)
   - Twitter Cards (5)
   - Geo tags (4)

6. **Schema Markup** - JSON-LD structured data
   - HealthAndBeautyBusiness
   - Service
   - BreadcrumbList
   - FAQPage
   - ⚠️ NO AggregateRating (no fake ratings)

7. **Image Planning** - Complete image specifications
   - 12+ images with filenames
   - Subject descriptions
   - Dimensions & format (WebP + fallback)
   - SEO-optimized alt text
   - Loading behavior (lazy/eager)

8. **Validation** - Automated acceptance criteria checking
   - Word count (3200-4200 target)
   - Sections (20+ required)
   - FAQs (10 required)
   - CTAs (10+ required)
   - Internal links (12+ required)
   - Images (12+ required)
   - Keyword targets
   - Mobile-friendly check

### 🚫 Hard Rules (Never Violated)

- ❌ NO invented facts
- ❌ NO hallucinated data
- ❌ NO fake reviews or ratings
- ❌ NO keyword stuffing
- ✅ All missing data explicitly marked
- ✅ Only factual codebase data used

## Usage

### Quick Start

```bash
# Run the builder
npm run landing:build

# Or directly with npx
npx tsx scripts/autonomous-landing-page-builder.ts
```

### Output

All files are generated in `/reports/landing-page-best-massage/`:

1. **business-profile.json** - Extracted business data
2. **internal-link-map.json** - All internal URLs mapped
3. **section-blueprint.json** - 20-section page structure
4. **meta-pack.json** - All meta tags
5. **schema-pack.json** - JSON-LD schemas
6. **best-massage-landing-page.html** - Full HTML page
7. **image-specifications.json** - Image requirements
8. **missing-data.json** - Data not found in codebase
9. **acceptance-criteria.json** - Validation results
10. **SUMMARY.md** - Human-readable overview

### Review Generated Output

```bash
# View summary
cat reports/landing-page-best-massage/SUMMARY.md

# Check acceptance criteria
cat reports/landing-page-best-massage/acceptance-criteria.json

# View HTML structure
cat reports/landing-page-best-massage/best-massage-landing-page.html
```

## Configuration

Edit `CONFIG` object at top of script:

```typescript
const CONFIG = {
  existing_website_url: "https://homemassageubud.com",
  target_landing_page_url: "https://homemassageubud.com/best-massage",
  primary_keywords_exact: [
    "best massage",
    "top massage",
    "professional massage",
    "good massage",
    "quality massage"
  ],
  keyword_targets: {
    exact_match_per_keyword: { min: 6, max: 14 },
    partial_variations_per_keyword: { min: 8, max: 20 },
    overall_density_cap: 2.0
  },
  targets: {
    total_word_count: { min: 3200, max: 4200 },
    sections_min: 20,
    faqs: 10,
    ctas_min: 10,
    internal_links_min: 12,
    images_min: 12,
    mobile_friendly: true,
    page_speed_target: 80
  }
};
```

## Customization

### For Different Landing Pages

1. Change `target_landing_page_url`
2. Update `primary_keywords_exact`
3. Modify section blueprints in `definePageStrategy()`
4. Adjust word count targets if needed

### For Different Keywords

Update the `primary_keywords_exact` array with your target keywords. The script will:
- Track exact matches
- Count partial variations
- Validate against targets
- Distribute naturally across sections

## Architecture

### Class: KeywordTracker

Tracks and validates keyword usage throughout content:

```typescript
const tracker = new KeywordTracker(['best massage', 'top massage']);
tracker.trackText('This is the best massage service...');
const report = tracker.getReport(); // Get statistics
const validation = tracker.validate(targets); // Check against targets
```

### Functions

- `performReconnaissance()` - Extract data from codebase
- `definePageStrategy()` - Create section blueprints
- `generateHTMLPage()` - Write full HTML with content
- `generateMetaPack()` - Create all meta tags
- `generateSchemaPack()` - Build JSON-LD schemas
- `generateImageSpecs()` - Plan image requirements
- `validateAcceptanceCriteria()` - Check all targets
- `writeOutputFiles()` - Save all 10 output files

## Next Steps After Generation

1. **Review HTML** - Check generated content for tone/accuracy
2. **Create Images** - Use image-specifications.json as guide
3. **Implement in React** - Convert HTML to React components
4. **Add to Sitemap** - Include in sitemap.xml
5. **Submit to Google** - Use Google Search Console
6. **Monitor Performance** - Track rankings and CTR

## Technical Notes

- **TypeScript**: Fully typed for safety
- **Zero Dependencies**: Uses only Node.js built-ins
- **File I/O**: Reads from codebase, writes to reports/
- **Validation**: Automated acceptance criteria checking
- **Extensible**: Easy to add new sections or modify structure

## Troubleshooting

### "tsx: not found"

Use npx: `npx tsx scripts/autonomous-landing-page-builder.ts`

### Missing Data in Output

Check `missing-data.json` to see what wasn't found in codebase. This is by design to prevent hallucinations.

### Keyword Validation Fails

Adjust keyword targets in CONFIG or modify content generation to increase keyword usage naturally.

### Word Count Too Low

The current implementation generates structure and metadata. Expand the HTML generation section to add full 3200-4200 word content for each of the 20 sections.

## Framework vs. Full Implementation

This is a **comprehensive framework** that:

✅ Generates all structure (20 sections)
✅ Creates all metadata (meta tags, schema)
✅ Maps all internal links
✅ Plans all images
✅ Validates all criteria
✅ Produces 10 output files

To create full 3200-4200 word content, expand the `generateHTMLPage()` function with complete paragraph text for each of the 20 sections following the section blueprints.

## License

MIT

## Version

v1.0 - Autonomous SEO Landing Page Builder
