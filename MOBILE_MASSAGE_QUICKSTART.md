# Mobile Massage Content Generator - Quick Start

Get your mobile massage SEO content generated in 5 minutes.

## Prerequisites

- Node.js installed
- This repository cloned
- Dependencies installed (`npm install`)

## Step 1: Extract Business Facts (30 seconds)

Extract verified business data from the website:

```bash
npm run extract:mobile
```

**What this does:**
- Scrapes homemassageubud.com for contact info, pricing, locations
- Validates against spec defaults
- Generates `data-extraction/mobile-massage-facts.json`
- Creates `data-extraction/mobile-massage-extraction-report.md`

**Output location**: `data-extraction/mobile-massage-facts.json`

## Step 2: Review Facts (2 minutes)

Open and verify the facts file:

```bash
cat data-extraction/mobile-massage-facts.json
```

Check these critical fields:
- ✅ `contacts.phone` — correct phone number?
- ✅ `contacts.whatsapp` — correct WhatsApp?
- ✅ `contacts.email` — correct email?
- ✅ `pricing.mobile_massage` — correct prices?
- ✅ `service_areas.all_locations` — all locations included?

**If any data is incorrect**: Edit `mobile-massage-facts.json` directly before proceeding.

**If extraction failed**: The spec contains sensible defaults in `mobile-massage.spec.json`. The generator will use those.

## Step 3: Generate Content (10 seconds)

Run the content generator:

```bash
npm run generate:mobile
```

**What happens:**
1. Loads `mobile-massage.spec.json` (specification)
2. Loads `mobile-massage-facts.json` (business data)
3. Generates 50 pages following `chunk_order`:
   - 1 hub page
   - 1 service index
   - 10 service pages
   - 1 cities index
   - 15 city pages
   - 1 blog index
   - 8 blog posts
   - 5 venue pages
   - 4 comparison pages
   - 4 specialty pages
4. Runs QA gates on each page
5. Saves to `generated-content/mobile-massage/`
6. Generates reports

**Expected output:**
```
🚀 Starting Mobile Massage Content Generation
======================================================================
Keyword: mobile massage
Target: 50 pages
Target Words: 75,000
======================================================================

📦 Chunk 1: hub_page (1 pages)
  ✓ /mobile-massage
      Words: 3247, Links: 28

📦 Chunk 2: service_types_index (1 pages)
  ✓ /mobile-massage/services
      Words: 1853, Links: 18

...

======================================================================
📊 GENERATION REPORT
======================================================================

Total Pages Generated: 50
Total Word Count: 76,420
Total Internal Links: 582

✓ QA Passed: 50
✗ QA Failed: 0

⏱ Generation Time: 8s

📄 Detailed report saved: generated-content/mobile-massage/GENERATION_REPORT.md
======================================================================
✅ GENERATION COMPLETE
======================================================================
```

## Step 4: Review Output (2 minutes)

### Check the report

```bash
cat generated-content/mobile-massage/GENERATION_REPORT.md
```

Look for:
- ✅ All 50 pages generated
- ✅ All QA gates passed
- ✅ No unknowns flagged
- ✅ Word count meets target (~75,000 words)
- ✅ Link count meets target (~500+ links)

### Browse generated files

```bash
# View directory structure
tree generated-content/mobile-massage/ -L 2

# Read a sample page
cat generated-content/mobile-massage/mobile-massage.md

# Read a service page
cat generated-content/mobile-massage/services/mobile-massage_services_balinese-mobile-massage.md

# Read a city page
cat generated-content/mobile-massage/cities/mobile-massage_locations_ubud.md
```

### Check frontmatter

Each page includes:
```yaml
---
path: /mobile-massage/services/balinese-mobile-massage
title: Balinese Mobile Massage Bali - Mobile Service | Home Massage Ubud
metaDescription: Professional balinese mobile massage...
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
```

## Step 5: Next Actions

### If QA Passed (Ideal)

✅ **Content is ready!** You can:

1. **Convert to React TSX** (if needed):
   ```bash
   # Create conversion script or manually convert markdown to components
   ```

2. **Deploy to production**:
   ```bash
   git add generated-content/
   git commit -m "Add generated mobile massage content"
   git push
   ```

3. **Submit to search engines**:
   ```bash
   npm run indexnow:submit
   ```

4. **Monitor rankings**:
   - Google Search Console
   - Track keyword positions
   - Monitor traffic

### If QA Failed (Troubleshoot)

Review failures in the report:

```bash
grep "QA Failed" generated-content/mobile-massage/GENERATION_REPORT.md
```

Common issues:

**❌ Word count too low**
- Template needs expansion
- Edit template generator methods in the script

**❌ Not enough internal links**
- Add more related links in templates
- Check `linking_rules` in spec

**❌ Broken links**
- Link path doesn't exist in page registry
- Fix path in template or add missing page

**❌ Meta tags wrong length**
- Title should be 50-60 chars
- Meta description should be 140-160 chars
- Adjust in page definition or template

**❌ Unknowns flagged**
- Data missing from `facts_json`
- Add missing data and re-generate

**Fix and re-run**:
```bash
npm run generate:mobile
```

## Quick Verification Checklist

After generation, verify:

- [ ] 50 pages created
- [ ] All QA gates passed
- [ ] No unknowns flagged
- [ ] Total word count ~75,000
- [ ] Average links per page ~12
- [ ] Pricing matches facts_json
- [ ] Contact info matches facts_json
- [ ] All internal links valid
- [ ] Meta tags proper length
- [ ] Keyword in H1 and intro
- [ ] Content is unique per page
- [ ] Natural, readable prose

## Common Commands

```bash
# Extract facts
npm run extract:mobile

# Generate content
npm run generate:mobile

# View report
cat generated-content/mobile-massage/GENERATION_REPORT.md

# View JSON report
cat generated-content/mobile-massage/generation-report.json | jq

# Count generated pages
find generated-content/mobile-massage -name "*.md" | wc -l

# Check total word count
find generated-content/mobile-massage -name "*.md" -exec wc -w {} + | tail -1

# List all categories
find generated-content/mobile-massage -type d
```

## File Locations Reference

| File | Purpose | Location |
|------|---------|----------|
| Spec | Content specification | `mobile-massage.spec.json` |
| Generator Script | Main generator | `scripts/mobile-massage-content-generator.ts` |
| Extractor Script | Data extraction | `scripts/mobile-massage-data-extractor.ts` |
| Facts JSON | Business data | `data-extraction/mobile-massage-facts.json` |
| Generated Pages | Output markdown | `generated-content/mobile-massage/**/*.md` |
| Generation Report | Detailed stats | `generated-content/mobile-massage/GENERATION_REPORT.md` |
| JSON Report | Machine-readable | `generated-content/mobile-massage/generation-report.json` |
| README | Full documentation | `MOBILE_MASSAGE_CONTENT_GENERATOR_README.md` |

## Troubleshooting

### "Facts file not found"

**Solution**: Run extraction first
```bash
npm run extract:mobile
```

### "Spec file not found"

**Solution**: Ensure `mobile-massage.spec.json` exists in project root
```bash
ls -la mobile-massage.spec.json
```

### "Module not found" errors

**Solution**: Install dependencies
```bash
npm install
```

### TypeScript errors

**Solution**: Use `tsx` to run (already configured in npm scripts)
```bash
npx tsx scripts/mobile-massage-content-generator.ts
```

### Generation is slow

**Normal**: Generating 50 pages with QA gates takes ~8-12 seconds

### Some pages failed QA

**Solution**: Review `GENERATION_REPORT.md`, fix issues in templates, re-run

### Unknowns were flagged

**Solution**: Add missing data to `mobile-massage-facts.json`, re-run

## Next Steps

After successful generation:

1. **Review content quality** — Read sample pages
2. **Validate links** — Click through to ensure pages connect properly
3. **Convert to components** — Transform markdown to React TSX if needed
4. **Deploy** — Push to production
5. **Submit to search engines** — IndexNow or sitemap
6. **Monitor** — Track rankings and traffic

## Support

- **Full Documentation**: `MOBILE_MASSAGE_CONTENT_GENERATOR_README.md`
- **Spec File**: `mobile-massage.spec.json`
- **Generation Report**: `generated-content/mobile-massage/GENERATION_REPORT.md`

## Success Criteria

You know it worked when:

✅ Console shows "✅ GENERATION COMPLETE"  
✅ 50 .md files in `generated-content/mobile-massage/`  
✅ GENERATION_REPORT.md shows "QA Pass Rate: 100%"  
✅ No unknowns flagged  
✅ Total word count ~75,000  
✅ Total internal links ~500+

**Time to completion**: 5 minutes from start to finish! 🚀

---

*Last updated: 2025-01-23*
