#!/usr/bin/env tsx

/**
 * A/B Testing Framework for CTAs
 * 
 * Creates variants of landing pages with different CTAs:
 * - Multiple CTA versions
 * - Split testing setup
 * - Analytics tracking code
 * - Conversion tracking
 * - Statistical significance calculator
 * - Winner determination
 */

import * as fs from 'fs';
import * as path from 'path';

// ============================================================================
// TYPES
// ============================================================================

interface CTAVariant {
  id: string;
  text: string;
  color: string;
  size: 'small' | 'medium' | 'large';
  position: 'top' | 'inline' | 'bottom';
  style: 'primary' | 'secondary' | 'outline';
}

interface TestConfig {
  pageName: string;
  variants: CTAVariant[];
  trafficSplit: number[]; // e.g., [50, 50] for equal split
  conversionGoal: string;
  analyticsProvider: 'google' | 'custom';
}

interface TestResults {
  variantId: string;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number; // Click-through rate
  cvr: number; // Conversion rate
  confidence: number; // Statistical confidence
}

// ============================================================================
// CTA VARIANTS
// ============================================================================

const DEFAULT_CTA_VARIANTS: CTAVariant[] = [
  {
    id: 'variant_a',
    text: 'Book via WhatsApp',
    color: '#4CAF50',
    size: 'large',
    position: 'inline',
    style: 'primary'
  },
  {
    id: 'variant_b',
    text: 'Get Started Now',
    color: '#667eea',
    size: 'large',
    position: 'inline',
    style: 'primary'
  },
  {
    id: 'variant_c',
    text: 'Schedule Your Massage',
    color: '#FF6B6B',
    size: 'large',
    position: 'inline',
    style: 'primary'
  },
  {
    id: 'variant_d',
    text: 'Book Now - Quick Response',
    color: '#4ECDC4',
    size: 'large',
    position: 'inline',
    style: 'primary'
  }
];

// ============================================================================
// VARIANT GENERATION
// ============================================================================

function generateVariantHTML(originalHTML: string, variant: CTAVariant): string {
  // Replace CTA buttons with variant
  const ctaRegex = /<a[^>]*class="cta-button[^"]*"[^>]*>.*?<\/a>/g;
  
  return originalHTML.replace(ctaRegex, (match) => {
    // Generate variant CTA HTML
    return `<a href="#" class="cta-button ${variant.style} cta-variant-${variant.id}" 
      data-variant="${variant.id}"
      style="background-color: ${variant.color}; font-size: ${getSizeValue(variant.size)};"
      onclick="trackCTAClick('${variant.id}', this.textContent)">${variant.text}</a>`;
  });
}

function getSizeValue(size: 'small' | 'medium' | 'large'): string {
  switch (size) {
    case 'small': return '0.9rem';
    case 'medium': return '1.1rem';
    case 'large': return '1.3rem';
  }
}

// ============================================================================
// TRACKING CODE GENERATION
// ============================================================================

function generateTrackingCode(variant: CTAVariant, config: TestConfig): string {
  if (config.analyticsProvider === 'google') {
    return `
<!-- A/B Test Tracking: ${variant.id} -->
<script>
  // Track variant impression
  gtag('event', 'ab_test_impression', {
    'variant_id': '${variant.id}',
    'test_name': '${config.pageName}_cta_test',
    'variant_text': '${variant.text}'
  });
  
  // Track CTA clicks
  function trackCTAClick(variantId, ctaText) {
    gtag('event', 'ab_test_click', {
      'variant_id': variantId,
      'test_name': '${config.pageName}_cta_test',
      'variant_text': ctaText
    });
    
    // Also track as regular CTA click
    gtag('event', 'cta_click', {
      'cta_text': ctaText,
      'variant': variantId
    });
  }
  
  // Track conversions (when user completes goal)
  function trackConversion() {
    gtag('event', 'ab_test_conversion', {
      'variant_id': '${variant.id}',
      'test_name': '${config.pageName}_cta_test',
      'conversion_goal': '${config.conversionGoal}'
    });
  }
</script>
`;
  } else {
    return `
<!-- Custom A/B Test Tracking: ${variant.id} -->
<script>
  // Custom analytics implementation
  window.abTest = window.abTest || {};
  window.abTest.variant = '${variant.id}';
  window.abTest.testName = '${config.pageName}_cta_test';
  
  // Track impression
  fetch('/api/analytics/impression', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      variant: '${variant.id}',
      test: '${config.pageName}_cta_test'
    })
  });
  
  // Track clicks
  function trackCTAClick(variantId, ctaText) {
    fetch('/api/analytics/click', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        variant: variantId,
        test: '${config.pageName}_cta_test',
        cta: ctaText
      })
    });
  }
  
  // Track conversions
  function trackConversion() {
    fetch('/api/analytics/conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        variant: '${variant.id}',
        test: '${config.pageName}_cta_test',
        goal: '${config.conversionGoal}'
      })
    });
  }
</script>
`;
  }
}

// ============================================================================
// TRAFFIC SPLIT CODE
// ============================================================================

function generateSplitTestingCode(config: TestConfig): string {
  return `
<!-- A/B Test Traffic Split -->
<script>
  (function() {
    // Check if user already has a variant assigned
    const cookieName = 'abtest_${config.pageName}_variant';
    let assignedVariant = getCookie(cookieName);
    
    if (!assignedVariant) {
      // Assign variant based on traffic split
      const random = Math.random() * 100;
      const splits = ${JSON.stringify(config.trafficSplit)};
      const variants = ${JSON.stringify(config.variants.map(v => v.id))};
      
      let cumulative = 0;
      for (let i = 0; i < splits.length; i++) {
        cumulative += splits[i];
        if (random < cumulative) {
          assignedVariant = variants[i];
          break;
        }
      }
      
      // Store in cookie (30 days)
      setCookie(cookieName, assignedVariant, 30);
    }
    
    // Redirect to variant page
    if (window.location.pathname.indexOf('variant') === -1) {
      window.location.href = window.location.pathname.replace('.html', '_' + assignedVariant + '.html');
    }
    
    // Cookie helpers
    function getCookie(name) {
      const value = '; ' + document.cookie;
      const parts = value.split('; ' + name + '=');
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
    
    function setCookie(name, value, days) {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = name + '=' + value + '; expires=' + expires + '; path=/';
    }
  })();
</script>
`;
}

// ============================================================================
// MAIN TEST SETUP FUNCTION
// ============================================================================

async function setupABTest(contentDir: string, testConfig?: Partial<TestConfig>): Promise<void> {
  console.log('🧪 A/B Testing Framework Setup');
  console.log('='.repeat(60));
  
  // Load original HTML
  const indexPath = path.join(contentDir, 'index.html');
  const landingPagePath = path.join(contentDir, '7_landing_page.html');
  
  let htmlPath: string;
  if (fs.existsSync(indexPath)) {
    htmlPath = indexPath;
  } else if (fs.existsSync(landingPagePath)) {
    htmlPath = landingPagePath;
  } else {
    throw new Error(`HTML not found in ${contentDir}`);
  }
  
  const originalHTML = fs.readFileSync(htmlPath, 'utf8');
  
  // Setup test configuration
  const config: TestConfig = {
    pageName: path.basename(contentDir),
    variants: testConfig?.variants || DEFAULT_CTA_VARIANTS.slice(0, 2), // Default: A/B test
    trafficSplit: testConfig?.trafficSplit || [50, 50],
    conversionGoal: testConfig?.conversionGoal || 'whatsapp_click',
    analyticsProvider: testConfig?.analyticsProvider || 'google'
  };
  
  console.log(`\n📊 Test Configuration:`);
  console.log(`   Variants: ${config.variants.length}`);
  console.log(`   Traffic split: ${config.trafficSplit.join('/')}`);
  console.log(`   Goal: ${config.conversionGoal}`);
  
  // Create variants directory
  const variantsDir = path.join(contentDir, 'ab-test-variants');
  fs.mkdirSync(variantsDir, { recursive: true });
  
  // Generate variant pages
  config.variants.forEach((variant, idx) => {
    console.log(`\n🎨 Generating variant: ${variant.id}`);
    console.log(`   CTA: "${variant.text}"`);
    console.log(`   Color: ${variant.color}`);
    
    // Generate variant HTML
    let variantHTML = generateVariantHTML(originalHTML, variant);
    
    // Add tracking code
    const trackingCode = generateTrackingCode(variant, config);
    variantHTML = variantHTML.replace('</head>', `${trackingCode}</head>`);
    
    // Save variant
    const variantPath = path.join(variantsDir, `index_${variant.id}.html`);
    fs.writeFileSync(variantPath, variantHTML);
    
    console.log(`   ✓ Saved: ${variantPath}`);
  });
  
  // Generate master page with traffic split
  const masterHTML = originalHTML.replace('</head>', `${generateSplitTestingCode(config)}</head>`);
  const masterPath = path.join(variantsDir, 'index.html');
  fs.writeFileSync(masterPath, masterHTML);
  
  console.log(`\n✅ Master page with split testing: ${masterPath}`);
  
  // Generate test configuration file
  const configPath = path.join(variantsDir, 'ab-test-config.json');
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  
  // Generate analysis template
  const analysisTemplate = generateAnalysisTemplate(config);
  const analysisPath = path.join(variantsDir, 'analysis-template.md');
  fs.writeFileSync(analysisPath, analysisTemplate);
  
  console.log(`\n📁 Output files:`);
  console.log(`   Master page: ${masterPath}`);
  console.log(`   Config: ${configPath}`);
  console.log(`   Analysis template: ${analysisPath}`);
  
  console.log(`\n🚀 Next steps:`);
  console.log(`   1. Deploy all variant pages to production`);
  console.log(`   2. Deploy master page as main entry point`);
  console.log(`   3. Monitor analytics for ${config.conversionGoal} events`);
  console.log(`   4. Run test for 1-2 weeks (min 100 conversions per variant)`);
  console.log(`   5. Analyze results using statistical significance calculator`);
  console.log(`   6. Implement winning variant`);
}

// ============================================================================
// ANALYSIS TEMPLATE
// ============================================================================

function generateAnalysisTemplate(config: TestConfig): string {
  return `
# A/B Test Analysis: ${config.pageName}

## Test Configuration

- **Test Name:** ${config.pageName}_cta_test
- **Start Date:** [FILL IN]
- **End Date:** [FILL IN]
- **Conversion Goal:** ${config.conversionGoal}
- **Traffic Split:** ${config.trafficSplit.join('/')}

## Variants

${config.variants.map((v, idx) => `
### Variant ${String.fromCharCode(65 + idx)}: ${v.id}
- **CTA Text:** "${v.text}"
- **Color:** ${v.color}
- **Style:** ${v.style}
`).join('\n')}

## Results

| Variant | Impressions | Clicks | CTR | Conversions | CVR | Confidence |
|---------|-------------|--------|-----|-------------|-----|------------|
${config.variants.map(v => `| ${v.id} | [FILL] | [FILL] | [CALC] | [FILL] | [CALC] | [CALC] |`).join('\n')}

### Calculations

**CTR (Click-Through Rate)** = (Clicks / Impressions) × 100%

**CVR (Conversion Rate)** = (Conversions / Clicks) × 100%

**Statistical Significance:** Use chi-square test or online calculator
- Minimum confidence level: 95%
- Minimum sample size: 100 conversions per variant

## Winner

**Winning Variant:** [DETERMINE AFTER ANALYSIS]

**Improvement:** [CALCULATE % IMPROVEMENT]

**Recommendation:** [IMPLEMENT WINNER / CONTINUE TESTING / ETC]

## Key Insights

- [Add insights from test]
- [What did we learn?]
- [Next tests to run?]

---

*Use online calculators:*
- https://www.optimizely.com/sample-size-calculator/
- https://abtestguide.com/calc/
`;
}

// ============================================================================
// CLI
// ============================================================================

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: tsx ab-testing-framework.ts <content-directory> [options]');
    console.log('');
    console.log('Options:');
    console.log('  --variants=N       Number of variants (2-4, default: 2)');
    console.log('  --split=50,50      Traffic split percentages');
    console.log('  --goal=event_name  Conversion goal event');
    console.log('  --provider=google  Analytics provider (google|custom)');
    console.log('');
    console.log('Examples:');
    console.log('  tsx scripts/ab-testing-framework.ts generated-content/massage-to-hotel');
    console.log('  tsx scripts/ab-testing-framework.ts generated-content/massage-to-hotel --variants=3 --split=33,33,34');
    process.exit(1);
  }
  
  const contentDir = args[0];
  const config: Partial<TestConfig> = {};
  
  args.slice(1).forEach(arg => {
    if (arg.startsWith('--variants=')) {
      const n = parseInt(arg.split('=')[1]);
      config.variants = DEFAULT_CTA_VARIANTS.slice(0, n);
    } else if (arg.startsWith('--split=')) {
      config.trafficSplit = arg.split('=')[1].split(',').map(Number);
    } else if (arg.startsWith('--goal=')) {
      config.conversionGoal = arg.split('=')[1];
    } else if (arg.startsWith('--provider=')) {
      config.analyticsProvider = arg.split('=')[1] as 'google' | 'custom';
    }
  });
  
  if (!fs.existsSync(contentDir)) {
    console.error(`Error: Content directory not found: ${contentDir}`);
    process.exit(1);
  }
  
  await setupABTest(contentDir, config);
}

if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { setupABTest, generateVariantHTML, DEFAULT_CTA_VARIANTS };
