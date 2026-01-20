# Landing Page Generation - Complete Toolkit

## Overview

This toolkit provides 10 integrated scripts for generating, managing, and optimizing 40K-50K word landing pages with A/B testing and CMS integration.

## Scripts Overview

| Script | Purpose | Command |
|--------|---------|---------|
| **Multi-Agent Generator** | Generate 12 cluster prompts | `npm run landing:multi-agent <config.yaml>` |
| **Content Assembler** | Combine 12 clusters into HTML | `npm run landing:assemble <content-dir>` |
| **Keyword Validator** | Check keyword density | `npm run landing:validate <content-dir>` |
| **HTML Renderer** | Production-ready HTML + assets | `npm run landing:render <content-dir>` |
| **Progress Tracker** | Track multi-day generation | `npm run landing:progress <content-dir>` |
| **Batch Processor** | Process 10+ pages | `npm run landing:batch <config-dir>` |
| **CMS Integration** | Push to WordPress/custom CMS | `npm run landing:cms <content-dir> --platform=wp` |
| **A/B Testing** | Create CTA variants | `npm run landing:ab-test <content-dir>` |

## Complete Workflow

### Single Page (8-12 hours)

```bash
# Day 1-5: Generate content clusters
npm run landing:multi-agent page-configs/massage-to-hotel.yaml
# Outputs 12 prompts in generated-content/massage-to-hotel/

# Manually: Paste each prompt into AI tool, save outputs

# Check progress anytime
npm run landing:progress generated-content/massage-to-hotel

# After all clusters are done: Assemble
npm run landing:assemble generated-content/massage-to-hotel

# Validate keyword density
npm run landing:validate generated-content/massage-to-hotel

# Render production HTML
npm run landing:render generated-content/massage-to-hotel --ga=UA-XXXXX-Y

# Optional: Setup A/B test
npm run landing:ab-test generated-content/massage-to-hotel

# Optional: Push to WordPress
npm run landing:cms generated-content/massage-to-hotel \
  --platform=wordpress \
  --endpoint=https://yoursite.com \
  --username=admin \
  --password=xxxx-xxxx-xxxx-xxxx
```

### Batch Processing (10+ Pages)

```bash
# Generate prompts for all pages
npm run landing:batch page-configs --parallel=2

# For each completed page:
npm run landing:assemble generated-content/page-name
npm run landing:validate generated-content/page-name
npm run landing:render generated-content/page-name
```

## Detailed Script Documentation

### 1. Content Assembler

**Purpose:** Combines 12 content clusters into single HTML file

**Features:**
- Table of contents generation
- CTA placement
- Schema integration
- Image placeholders
- Internal linking

**Usage:**
```bash
npm run landing:assemble generated-content/massage-to-hotel
```

**Inputs:**
- `cluster_01_content.md` through `cluster_12_content.md`
- `generation_plan.json`

**Outputs:**
- `7_landing_page.html` - Complete assembled page
- `assembly_stats.json` - Statistics

### 2. Keyword Density Validator

**Purpose:** Validates keyword usage across 40K+ words

**Features:**
- Exact match counting
- Variation detection
- Density calculation per keyword
- Overall density check
- Location analysis (H1, title, etc.)
- Pass/fail determination

**Usage:**
```bash
npm run landing:validate generated-content/massage-to-hotel
```

**Outputs:**
- `keyword_density_report.json`
- `keyword_density_report.csv`
- Console report with recommendations

**Quality Gates:**
- ✅ Each keyword: 25-60 exact matches
- ✅ Each keyword: 50-120 variations
- ✅ Overall density: ≤2.0%
- ❌ Fails if any threshold exceeded

### 3. HTML Production Renderer

**Purpose:** Creates production-ready HTML with optimizations

**Features:**
- Minified CSS/JS
- Lazy loading
- Progress bar
- Back-to-top button
- Google Analytics integration
- Performance optimizations

**Usage:**
```bash
npm run landing:render generated-content/massage-to-hotel --ga=UA-123456-1
```

**Options:**
- `--ga=UA-XXXXX-Y` - Google Analytics ID
- `--no-minify` - Disable minification
- `--no-lazy-load` - Disable lazy loading

**Outputs:**
- `index.html` - Production HTML
- `production.css` - Optimized CSS
- `production.js` - Optimized JavaScript

### 4. Progress Tracker

**Purpose:** Tracks multi-day generation progress

**Features:**
- Visual dashboard
- Cluster status tracking
- Daily goals
- Word count monitoring
- Time estimates
- Progress reports

**Usage:**
```bash
# Show dashboard
npm run landing:progress generated-content/massage-to-hotel

# Mark cluster as started
npm run landing:progress generated-content/massage-to-hotel start cluster_01

# Generate report
npm run landing:progress generated-content/massage-to-hotel report
```

**Dashboard Example:**
```
╔════════════════════════════════════════════════════════════════════╗
║                LANDING PAGE PROGRESS TRACKER                        ║
╚════════════════════════════════════════════════════════════════════╝

📊 Project: massage-to-hotel
📅 Started: 2026-01-20 → Target: 2026-01-25
📝 Progress: 8/12 clusters (66.7%)
📖 Words: 32,500/45,000
⏱️  Estimated time remaining: 3 hours

[████████████████████████████░░░░░░░░░░░░] 66.7%
```

### 5. Batch Processor

**Purpose:** Process 10+ pages in parallel

**Features:**
- Parallel execution (configurable)
- Queue management
- Error handling
- Retry failed jobs
- Progress tracking
- Batch reports

**Usage:**
```bash
# Process all configs in directory
npm run landing:batch page-configs --parallel=2
```

**Options:**
- `--parallel=N` - Max parallel jobs (default: 2)
- `--no-retry` - Don't retry failures

**Outputs:**
- `batch_config.json` - Batch configuration
- `batch_report.md` - Detailed report
- Individual page outputs in `generated-content/`

### 6. CMS Integration

**Purpose:** Push generated pages to CMS platforms

**Supported Platforms:**
- WordPress (REST API)
- Custom headless CMS

**Usage:**

**WordPress:**
```bash
npm run landing:cms generated-content/massage-to-hotel \
  --platform=wordpress \
  --endpoint=https://homemassageubud.com \
  --username=admin \
  --password=xxxx-xxxx-xxxx-xxxx
```

**Custom CMS:**
```bash
npm run landing:cms generated-content/massage-to-hotel \
  --platform=custom \
  --endpoint=https://api.yoursite.com \
  --token=your_api_token
```

**Features:**
- Auto page creation
- Meta data sync
- Schema injection
- Draft status (for review)
- Custom fields support

**Outputs:**
- `cms_integration.json` - Integration results with page ID and URL

### 7. A/B Testing Framework

**Purpose:** Create CTA variants for split testing

**Features:**
- Multiple CTA variants (2-4)
- Traffic splitting
- Analytics tracking
- Conversion tracking
- Winner determination

**Usage:**
```bash
# Default A/B test (2 variants)
npm run landing:ab-test generated-content/massage-to-hotel

# 3-way test
npm run landing:ab-test generated-content/massage-to-hotel --variants=3 --split=33,33,34

# Custom goal
npm run landing:ab-test generated-content/massage-to-hotel --goal=whatsapp_click
```

**Options:**
- `--variants=N` - Number of variants (2-4)
- `--split=50,50` - Traffic split percentages
- `--goal=event_name` - Conversion goal
- `--provider=google` - Analytics provider

**Default CTA Variants:**
1. "Book via WhatsApp" (green)
2. "Get Started Now" (purple)
3. "Schedule Your Massage" (red)
4. "Book Now - Quick Response" (teal)

**Outputs:**
- `ab-test-variants/` directory
- `index.html` - Master page with traffic split
- `index_variant_a.html` through `index_variant_d.html`
- `ab-test-config.json`
- `analysis-template.md` - For tracking results

## Quick Reference

### Daily Workflow (Multi-Day Generation)

**Day 1:**
```bash
npm run landing:multi-agent page-configs/your-page.yaml
npm run landing:progress generated-content/your-page
# Generate clusters 1, 5, 9 (paste prompts into AI)
```

**Day 2-4:**
```bash
npm run landing:progress generated-content/your-page
# Continue generating remaining clusters
```

**Day 5:**
```bash
npm run landing:progress generated-content/your-page
# Verify all clusters complete
npm run landing:assemble generated-content/your-page
npm run landing:validate generated-content/your-page
```

**Deployment:**
```bash
npm run landing:render generated-content/your-page --ga=UA-XXXXX-Y
npm run landing:ab-test generated-content/your-page
npm run landing:cms generated-content/your-page --platform=wordpress ...
```

### Batch Workflow (10 Pages)

**Setup (30 min):**
```bash
# Create 10 YAML configs in page-configs/
# page-1.yaml, page-2.yaml, ... page-10.yaml
```

**Generation (2-4 hours):**
```bash
npm run landing:batch page-configs --parallel=2
# Processes all 10 configs, generates 120 prompts (10 × 12)
```

**Content Creation (5-7 days):**
```bash
# Use progress tracker for each page
npm run landing:progress generated-content/page-1
# Generate content for all clusters across all pages
```

**Assembly & Deployment (1-2 days):**
```bash
# For each completed page:
for dir in generated-content/*/; do
  npm run landing:assemble "$dir"
  npm run landing:validate "$dir"
  npm run landing:render "$dir"
done
```

## File Structure

```
project/
├── page-configs/
│   ├── massage-to-hotel.yaml
│   ├── couples-massage.yaml
│   └── ... (10+ configs)
├── generated-content/
│   ├── massage-to-hotel/
│   │   ├── generation_plan.json
│   │   ├── cluster_01_prompt.md
│   │   ├── cluster_01_content.md
│   │   ├── ... (12 clusters)
│   │   ├── progress.json
│   │   ├── 7_landing_page.html
│   │   ├── keyword_density_report.json
│   │   ├── index.html (production)
│   │   ├── production.css
│   │   ├── production.js
│   │   └── ab-test-variants/
│   └── ... (10+ pages)
└── scripts/
    ├── multi-agent-content-generator.ts
    ├── content-assembler.ts
    ├── keyword-density-validator.ts
    ├── html-production-renderer.ts
    ├── progress-tracker.ts
    ├── batch-processor.ts
    ├── cms-integration.ts
    └── ab-testing-framework.ts
```

## Troubleshooting

### Issue: Assembly fails with "cluster not found"
**Solution:** Ensure all 12 `cluster_XX_content.md` files exist

### Issue: Keyword density validation fails
**Solution:** Edit content to reduce keyword usage or increase word count

### Issue: CMS integration fails
**Solution:** 
- WordPress: Verify application password, not regular password
- Check endpoint URL is correct
- Ensure REST API is enabled

### Issue: A/B test tracking not working
**Solution:** 
- Verify Google Analytics is installed
- Check event names match in GA dashboard
- Wait 24-48 hours for data to appear

### Issue: Batch processor hangs
**Solution:** 
- Reduce `--parallel` value
- Check system resources
- Review individual job logs

## Performance Tips

1. **Use parallel processing** for batch jobs (max 2-4 depending on system)
2. **Track progress daily** to stay motivated
3. **Validate early** - run keyword validator after 3-4 clusters
4. **Test incrementally** - render HTML for one page before doing all
5. **Automate deployment** - create shell scripts for common workflows

## Integration with Existing Tools

These new scripts complement existing tools:

| Existing Tool | New Script | Integration |
|---------------|------------|-------------|
| `seo-audit.ts` | `keyword-density-validator.ts` | Validate before audit |
| `link-audit.ts` | `content-assembler.ts` | Check internal links |
| `generate-sitemap.ts` | `cms-integration.ts` | Auto-submit after CMS push |
| N/A | All new scripts | Complete workflow |

## Support & Documentation

- **Main prompt:** `AUTONOMOUS_LANDING_PAGE_BUILDER_V3.1.md`
- **Guide:** `AUTONOMOUS_LANDING_PAGE_V3.1_GUIDE.md`
- **Quick start:** `40K_LANDING_PAGE_QUICKSTART.md`
- **Complete docs:** `IMPLEMENTATION_COMPLETE.md`

## Updates & Maintenance

**Version:** 1.0.0  
**Last Updated:** January 2026  
**Status:** Production Ready  
**License:** Internal Use

---

**Questions?** Check the individual script files - each has detailed documentation in its header comments.
