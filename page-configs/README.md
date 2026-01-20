# Landing Page Configuration Files

This directory contains YAML configuration files for the Autonomous Landing Page Builder v3.1.

## Structure

Each YAML file defines all the parameters needed to generate a complete landing page autonomously:

- **Site & Business Info**: URLs, business name, location
- **Content Strategy**: Service focus, content angles, target audience
- **SEO Configuration**: Keywords, density targets, H1 formula
- **Page Targets**: Word counts, section counts, CTA requirements
- **FAQ & Internal Linking**: Themes to cover, links to include
- **Execution Notes**: Specific landmarks, areas, and style guidance

## Usage

### Generate a Single Page

```bash
npm run landing:generate page-configs/massage-to-hotel.yaml
```

### Batch Generate Multiple Pages

```bash
# Generate all pages in sequence
for config in page-configs/*.yaml; do
  npm run landing:generate "$config"
done
```

## Creating New Configurations

1. **Copy an existing template:**
   ```bash
   cp page-configs/massage-to-hotel.yaml page-configs/your-new-page.yaml
   ```

2. **Update the YAML fields:**
   - Change `target_landing_page_url`
   - Update `service_focus` and `content_angles`
   - Modify `primary_keywords` for your target
   - Adjust `h1_formula`
   - Update `faq_focus_themes`
   - Customize `execution_notes`

3. **Generate the page:**
   ```bash
   npm run landing:generate page-configs/your-new-page.yaml
   ```

## Example Configurations

### massage-to-hotel.yaml
Mobile massage service to hotels and villas. Focus on convenience, fast response time, and eliminating travel hassle.

### couples-villa-massage.yaml
Romantic couples massage experience. Focus on intimacy, side-by-side treatment, and special occasions.

## Configuration Fields

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `existing_website_url` | URL to scrape business data from | `https://homemassageubud.com` |
| `target_landing_page_url` | URL where page will be deployed | `/massage-to-hotel` |
| `service_focus` | Brief description of the service | `Mobile massage to hotel/villa` |
| `content_angles` | 6 key angles to address in content | See examples |
| `target_audience` | Who this page is for | `Hotel guests, villa renters` |
| `primary_keywords` | 8-10 target keywords | Array of keywords |
| `h1_formula` | H1 heading structure | `[Service] [Location] – [Benefit]` |

### Extractable Fields

Use `[EXTRACT]` or `[EXTRACT FROM WEBSITE]` to auto-extract from the existing website:

```yaml
business_name: "[EXTRACT FROM WEBSITE]"
contact_methods:
  whatsapp: "[EXTRACT]"
  phone: "[EXTRACT]"
  email: "[EXTRACT]"
```

### Keyword Targets

Control keyword density to avoid spam:

```yaml
keyword_targets:
  exact_match_per_keyword:
    min: 6      # Minimum exact matches per keyword
    max: 14     # Maximum exact matches per keyword
  partial_variations_per_keyword:
    min: 8      # Minimum variations (e.g., "massage in Ubud")
    max: 20     # Maximum variations
  overall_density_cap: 2.0  # Max 2% keyword density
```

### Page Targets

Set quality requirements:

```yaml
targets:
  total_word_count: "3200-4200"   # Target word range
  sections_min: 20                # Minimum sections (H2/H3)
  faqs: 10                        # Number of FAQs
  ctas_min: 10                    # Minimum CTAs
  internal_links_min: 12          # Minimum internal links
  images_min: 12                  # Minimum images
  mobile_friendly: true           # Must be mobile-responsive
  page_speed_target: 80           # Target PageSpeed score
```

## Output Structure

After generation, find outputs in `generated-pages/[page-name]/`:

```
generated-pages/massage-to-hotel/
├── 1_business_profile.json      # Extracted business data
├── 2_site_url_map.json          # Internal URL structure
├── 3_competitor_analysis.json   # SERP research results
├── 4_page_blueprint.json        # Complete page structure
├── 5_meta_pack.json            # SEO meta tags
├── 6_schema_pack.json          # JSON-LD schema markup
├── 7_landing_page.html         # Complete HTML page
├── 8_image_specs.json          # Image requirements
└── 9_deployment_checklist.md   # Implementation steps
```

## Best Practices

### 1. Keyword Research First
Run keyword research before creating configs. Use tools like:
- Google Keyword Planner
- Ahrefs
- SEMrush
- Answer The Public

### 2. One Service Focus Per Page
Don't try to cover multiple services in one page. Create separate configs for:
- ✓ Couples massage (separate)
- ✓ Post-yoga recovery (separate)
- ❌ "All massage services" (too broad)

### 3. Local Specificity
Include specific landmarks and areas in `execution_notes`:
```yaml
execution_notes: "Include Monkey Forest, Campuhan Ridge, mention Como Uma and Viceroy hotels, reference Yoga Barn for yogis"
```

### 4. Unique Content Angles
Make each page's `content_angles` unique:
- Massage to hotel: Speed, convenience, professionalism
- Couples massage: Romance, intimacy, special occasions
- Post-yoga: Flexibility, recovery, yogi-specific techniques

### 5. FAQ Themes Match Intent
Align FAQ themes with what that audience asks:
- Hotel guests ask: "How quickly can you come?" "Which areas?"
- Couples ask: "Can we request male/female therapists?" "Space needed?"
- Yogis ask: "Do therapists understand yoga anatomy?" "Timing after class?"

## Troubleshooting

### "Config file not found"
Make sure the path is correct:
```bash
npm run landing:generate page-configs/your-file.yaml
# Not: your-file.yaml (missing directory)
```

### "Required field missing"
Check that all required fields are filled:
- `existing_website_url`
- `target_landing_page_url`
- `primary_keywords` (at least 1)

### "Keyword density too high"
Lower the keyword targets or increase word count:
```yaml
keyword_targets:
  exact_match_per_keyword:
    min: 4  # Lower from 6
    max: 10 # Lower from 14
```

### "Not enough sections"
Either:
1. Add more `content_angles` (each becomes a section)
2. Lower `sections_min` target

## Advanced Usage

### Batch Processing with Custom Metadata

Create a batch script:

```bash
#!/bin/bash
# batch-generate.sh

PAGES=(
  "massage-to-hotel"
  "couples-villa-massage"
  "post-yoga-recovery"
  "surf-recovery-massage"
)

for page in "${PAGES[@]}"; do
  echo "Generating: $page"
  npm run landing:generate "page-configs/${page}.yaml"
  
  # Wait between generations to avoid rate limits
  sleep 5
done

echo "Batch generation complete!"
```

### Dynamic Configuration

Generate configs programmatically:

```javascript
const fs = require('fs');
const yaml = require('js-yaml');

const template = {
  existing_website_url: "https://homemassageubud.com",
  // ... base config
};

const pages = [
  { name: 'canggu', keywords: ['massage canggu', ...] },
  { name: 'seminyak', keywords: ['massage seminyak', ...] },
];

pages.forEach(page => {
  const config = {
    ...template,
    target_landing_page_url: `/massage-${page.name}`,
    primary_keywords: page.keywords,
    // ... customize per page
  };
  
  fs.writeFileSync(
    `page-configs/massage-${page.name}.yaml`,
    yaml.dump(config)
  );
});
```

## Template Library

Coming soon: Pre-built templates for common page types:
- Location pages (city-specific)
- Service pages (treatment-specific)
- Audience pages (couples, yogis, surfers)
- Package pages (honeymoon, group, multi-day)
- Comparison pages (vs hotel spas, vs clinics)

## Support

Questions? Check the main documentation:
- `AUTONOMOUS_LANDING_PAGE_BUILDER_V3.1.md` - Full prompt
- `AUTONOMOUS_LANDING_PAGE_V3.1_GUIDE.md` - Implementation guide
- `AUTONOMOUS_LANDING_PAGE_V3.1_EXAMPLE.md` - Copy-paste example
- `AUTONOMOUS_LANDING_PAGE_V3.1_COMPARISON.md` - vs legacy system

---

**Version**: 3.1  
**Last Updated**: January 2026  
**Status**: Production Ready
