# Mobile Massage Content Generator

Comprehensive TypeScript script for generating SEO-optimized mobile massage content following the `mobile-massage.spec.json` specification.

## Overview

This production-ready content generator creates 50 interlinked pages with comprehensive QA gates, dense mesh linking, and strict adherence to facts_json data.

### Features

✅ **Sequential Generation**: Follows `chunk_order` from specification  
✅ **Comprehensive QA Gates**: Word count, linking, facts validation, unknown handling, keyword integration, meta tags  
✅ **Dense Mesh Linking**: Implements all `linking_rules` requirements  
✅ **Multiple Page Types**: Hub, indices, services, cities, blog, venues, comparisons, specialty  
✅ **Facts-Only Content**: Never invents data not in `facts_json`  
✅ **Detailed Reporting**: Generation stats, QA results, unknowns flagged  
✅ **TypeScript Types**: Fully typed for safety and IDE support  
✅ **Error Handling**: Graceful error handling with detailed console output

## File Structure

```
scripts/
├── mobile-massage-content-generator.ts   # Main generator (1965 lines)
├── mobile-massage-data-extractor.ts      # Data extraction utility
└── indexnow-submit.ts                    # Post-generation submission

mobile-massage.spec.json                  # Content specification
data-extraction/
└── mobile-massage-facts.json             # Extracted business facts

generated-content/mobile-massage/         # Output directory
├── services/                             # Service type pages
├── cities/                               # Location pages
├── blog/                                 # Blog posts
├── venues/                               # Venue-specific pages
├── comparisons/                          # Comparison pages
├── specialty/                            # Specialty pages
├── GENERATION_REPORT.md                  # Detailed markdown report
└── generation-report.json                # Machine-readable report
```

## Installation & Setup

### 1. Extract Business Facts

First, extract and validate business data:

```bash
npm run extract:mobile
```

This will:
- Scrape website for contact info, pricing, locations
- Validate against spec defaults
- Generate `mobile-massage-facts.json`
- Create extraction report

### 2. Review Facts JSON

Review and update `data-extraction/mobile-massage-facts.json` to ensure accuracy:

```json
{
  "brand": { "name": "Home Massage Ubud", ... },
  "contacts": { "phone": "+62 811 2656 869", ... },
  "pricing": { "mobile_massage": [...] },
  "service_areas": { "all_locations": [...] },
  ...
}
```

## Usage

### Generate Content

```bash
npm run generate:mobile
```

### What Happens

The generator will:

1. **Load Specification**: Reads `mobile-massage.spec.json`
2. **Load Facts**: Reads `mobile-massage-facts.json` (or uses spec defaults)
3. **Build Path Registry**: Creates all 50 page paths for link validation
4. **Process Chunks Sequentially**: Following `chunk_order`:
   - Chunk 1: Hub page (1 page)
   - Chunk 2: Service types index (1 page)
   - Chunk 3: Service type pages (10 pages)
   - Chunk 4: Cities index (1 page)
   - Chunk 5: City pages (15 pages)
   - Chunk 6: Blog index (1 page)
   - Chunk 7: Blog posts (8 pages)
   - Chunk 8: Venue type pages (5 pages)
   - Chunk 9: Comparison pages (4 pages)
   - Chunk 10: Specialty pages (4 pages)
5. **Run QA Gates**: Validate each page before saving
6. **Generate Reports**: Create detailed generation reports

### Output

Each generated page includes:

```markdown
---
path: /mobile-massage/services/balinese-mobile-massage
title: Balinese Mobile Massage Bali - Mobile Service | Home Massage Ubud
metaDescription: Professional balinese mobile massage delivered to your...
h1: Balinese Mobile Massage - Professional Service in Bali
category: service
wordCount: 1247
internalLinks: 12
factsUsed: pricing, therapists, contacts
unknownFlags: none
qaPass: PASS
qaIssues: none
generated: 2025-01-23T10:30:00.000Z
---

# Balinese Mobile Massage - Professional Service in Bali

Experience professional **balinese mobile massage**...
```

## QA Gates

### 1. Word Count Gate

**Rules**:
- Hub pages: minimum 2500 words
- Index pages: minimum 1200 words
- Service/city pages: minimum 1000 words
- Blog posts: minimum 1500 words
- Other pages: minimum 800 words

**Failure Action**: Page fails QA, logged in report

### 2. Linking Gate

**Rules**:
- Hub page: minimum 20 links
- Index pages: minimum 15 links
- Service/city pages: minimum 10 links
- Blog posts: minimum 10 links
- Venue/comparison/specialty: minimum 7-8 links
- All links must point to valid pages in the ecosystem
- No broken links allowed

**Failure Action**: Page fails QA, missing/broken links listed

### 3. Facts JSON Gate

**Rules**:
- Prices must match `facts_json` exactly
- Contact info from `facts_json` only
- Brand name must match
- Service areas from `facts_json` only

**Failure Action**: Page fails QA, invented data reported

### 4. Unknown Handling Gate

**Rules**:
- Flag any unknown information as `UNKNOWN`
- Never invent testimonials
- Never invent therapist names
- Never create fictional statistics

**Failure Action**: Page flagged with unknowns, requires manual review

### 5. Keyword Integration Gate

**Rules**:
- Primary keyword in H1
- Primary keyword in first 100 words
- Keyword density 1-2% (not stuffed)
- Keyword variations throughout
- Natural, readable prose

**Failure Action**: Warning (may still pass if readable)

### 6. Meta Tags Gate

**Rules**:
- Title tag: 50-60 characters
- Meta description: 140-160 characters
- Both include primary keyword
- Unique per page

**Failure Action**: Page fails QA

## Linking Architecture

### Dense Mesh Strategy

Every page links to minimum 8 other pages in the ecosystem.

### Link Patterns

**Hub Page** → All services, all indices, top 5 cities  
**Service Index** → Hub, all services, cities index, blog posts  
**Service Page** → Hub, service index, 3 related services, 3 cities, 1 blog, 1 comparison  
**City Index** → Hub, service index, all cities  
**City Page** → Hub, city index, service index, 3 services, 3 related cities, 1 blog  
**Blog Post** → Hub, blog index, 3 services, 3 cities, 2 related blogs  
**Venue Page** → Hub, service index, cities index, 3 services, 2 cities  
**Comparison Page** → Hub, service index, 2 services, 2 cities, 1 blog  
**Specialty Page** → Hub, service index, 2 services, 2 cities, 1 blog

### Link Placement

- Naturally integrated into content (not dumped in lists)
- Descriptive anchor text with keyword variations
- Distributed throughout (intro, body, conclusion)
- Navigation breadcrumbs at top
- Related content section near bottom
- Service/location grids as clickable links

## Page Templates

### 1. Hub Page

**Path**: `/mobile-massage`  
**Word Count**: 3000+  
**Links**: 20+  
**Sections**:
- Hero with value proposition
- What is mobile massage
- Service types overview (with links)
- How it works
- Pricing transparency
- Service areas (with city links)
- Why choose us
- Therapist qualifications
- FAQ section
- Strong CTA

### 2. Service Type Pages (10 pages)

**Path**: `/mobile-massage/services/{slug}`  
**Word Count**: 1000+  
**Links**: 10+  
**Examples**: balinese, swedish, deep-tissue, hot-stone, aromatherapy, prenatal, sports, couples, thai, reflexology

### 3. City Pages (15 pages)

**Path**: `/mobile-massage/locations/{slug}`  
**Word Count**: 1000+  
**Links**: 10+  
**Examples**: ubud, seminyak, canggu, sanur, nusa-dua, etc.

### 4. Blog Posts (8 pages)

**Path**: `/mobile-massage/blog/{slug}`  
**Word Count**: 1500+  
**Links**: 10+  
**Topics**: benefits, vs spa, preparation, first time, travelers, couples, safety, choosing therapist

### 5. Venue Pages (5 pages)

**Path**: `/mobile-massage/venues/{slug}`  
**Word Count**: 800+  
**Links**: 8+  
**Types**: hotel, villa, resort, guesthouse, airbnb

### 6. Comparison Pages (4 pages)

**Path**: `/mobile-massage/compare/{slug}`  
**Word Count**: 800+  
**Links**: 7+  
**Topics**: vs spa, vs hotel, cost comparison, traditional vs mobile

### 7. Specialty Pages (4 pages)

**Path**: `/mobile-massage/specialty/{slug}`  
**Word Count**: 800+  
**Links**: 7+  
**Topics**: same-day, luxury, group events, late-night

## Generation Report

After generation, review these files:

### 1. GENERATION_REPORT.md

Comprehensive markdown report with:
- Summary statistics
- Pages by category
- QA gate results
- Flagged unknowns
- Page details table
- Next steps
- Facts JSON reference

### 2. generation-report.json

Machine-readable JSON with:
- Full report object
- Array of all generated pages
- Per-page QA results
- Link counts and word counts

## Console Output

During generation, you'll see:

```
🚀 Starting Mobile Massage Content Generation
======================================================================
Keyword: mobile massage
Target: 50 pages
Target Words: 75,000
======================================================================

📦 Chunk 1: hub_page (1 pages)
   Main landing page for mobile massage keyword

  ✓ /mobile-massage
      Words: 3247, Links: 28

📦 Chunk 2: service_types_index (1 pages)
   Index/hub page for all mobile massage service variations

  ✓ /mobile-massage/services
      Words: 1853, Links: 18

📦 Chunk 3: service_type_pages (10 pages)
   Individual pages for each service type offering

  ✓ /mobile-massage/services/balinese-mobile-massage
      Words: 1247, Links: 12
  ✓ /mobile-massage/services/swedish-mobile-massage
      Words: 1251, Links: 12
  ...

======================================================================
📊 GENERATION REPORT
======================================================================

Total Pages Generated: 50
Total Word Count: 76,420
Total Internal Links: 582
Average Words/Page: 1528
Average Links/Page: 12

Pages by Category:
  - hub_page: 1
  - index: 3
  - service: 10
  - city: 15
  - blog: 8
  - venue: 5
  - comparison: 4
  - specialty: 4

✓ QA Passed: 50
✗ QA Failed: 0

⏱ Generation Time: 8s

📄 Detailed report saved: generated-content/mobile-massage/GENERATION_REPORT.md
📄 JSON report saved: generated-content/mobile-massage/generation-report.json

======================================================================
✅ GENERATION COMPLETE
======================================================================
```

## Troubleshooting

### "Facts file not found"

Run data extraction first:
```bash
npm run extract:mobile
```

### "QA Gate Failures"

Review the report to see which gates failed:
- **Word count too low**: Template needs expansion
- **Not enough links**: Add more internal links
- **Meta tags wrong length**: Adjust title/description
- **Broken links**: Check path exists in `allPaths`

### "Unknowns Flagged"

Review unknowns in report:
- Update `mobile-massage-facts.json` with missing data
- Re-run generator

### TypeScript Errors

The script uses modern JS features. Run with `tsx`:
```bash
npx tsx scripts/mobile-massage-content-generator.ts
```

## Customization

### Modify Templates

Edit template generator methods:
- `generateHubPage()`
- `generateServicePage()`
- `generateCityPage()`
- `generateBlogPost()`
- etc.

### Adjust QA Gates

Modify in `runQAGates()` method:
- Change minimum word counts
- Adjust minimum link counts
- Modify validation rules

### Add New Page Types

1. Add to `chunk_order` in spec
2. Add page definitions
3. Create template generator method
4. Add case to `processChunk()`

## Next Steps After Generation

1. **Review Reports**: Check for QA failures and unknowns
2. **Validate Links**: Test internal links work correctly
3. **Manual Review**: Read sample pages for quality
4. **Convert to Components**: Transform markdown to React TSX if needed
5. **Deploy**: Push to production
6. **Submit to Search Engines**: Use IndexNow or sitemaps
7. **Monitor**: Track rankings and traffic

## Scripts Reference

```bash
# Extract business facts from website
npm run extract:mobile

# Generate all mobile massage content
npm run generate:mobile

# Generate lymphatic drainage content (separate system)
npm run generate:lymphatic

# Submit URLs to search engines
npm run indexnow:submit

# Run SEO audit
npm run seo:audit
```

## Architecture

### Code Structure

```typescript
// Type definitions (~300 lines)
interface Spec { ... }
interface FactsJSON { ... }
interface GeneratedPage { ... }

// Main generator class (~1600 lines)
class MobileMassageContentGenerator {
  // Initialization
  constructor()
  buildAllPaths()
  
  // Utility functions
  formatPrice()
  countWords()
  extractLinks()
  
  // QA gates
  runQAGates()
  getMinWordCount()
  getMinLinks()
  
  // Shared content blocks
  getPricingBlock()
  getContactCTA()
  getServiceAreasLinks()
  
  // Template generators
  generateHubPage()
  generateServiceIndex()
  generateServicePage()
  generateCityIndex()
  generateCityPage()
  generateBlogIndex()
  generateBlogPost()
  generateVenuePage()
  generateComparisonPage()
  generateSpecialtyPage()
  
  // Generation logic
  generate()
  createDirectoryStructure()
  processChunk()
  generateAndSave()
  generateFinalReport()
  buildReportMarkdown()
}

// Main execution
main()
```

### Design Principles

1. **Facts-First**: All data from `facts_json`, never invented
2. **Sequential Processing**: Follow `chunk_order` for dependencies
3. **Comprehensive QA**: Multiple gates ensure quality
4. **Dense Linking**: Every page highly interconnected
5. **Template-Based**: Consistent structure across page types
6. **Detailed Reporting**: Full transparency on generation
7. **Error Handling**: Graceful failures with clear messages

## Performance

- **Generation Time**: ~8-12 seconds for 50 pages
- **Average Page Size**: ~1500 words
- **Total Output**: ~75,000 words, 500+ internal links
- **Memory Usage**: < 100MB

## Support

For issues or questions:
1. Check this README
2. Review `GENERATION_REPORT.md` after running
3. Check console output for errors
4. Review `mobile-massage.spec.json` for requirements

## License

Part of HOME-MASSAGE-UBUD project.

---

*Last updated: 2025-01-23*
