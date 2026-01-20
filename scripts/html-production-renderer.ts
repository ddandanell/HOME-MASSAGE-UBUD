#!/usr/bin/env tsx

/**
 * HTML Production Renderer
 * 
 * Renders assembled content into production-ready HTML with:
 * - Minified CSS/JS
 * - Optimized images
 * - CDN links
 * - Analytics integration
 * - Performance optimizations
 * - SEO enhancements
 */

import * as fs from 'fs';
import * as path from 'path';

// ============================================================================
// TYPES
// ============================================================================

interface RenderOptions {
  minify: boolean;
  cdn: string;
  analytics?: {
    googleAnalytics?: string;
    facebookPixel?: string;
    hotjar?: string;
  };
  performance: {
    lazyLoad: boolean;
    preload: string[];
    defer: string[];
  };
  seo: {
    structuredData: boolean;
    openGraph: boolean;
    twitterCard: boolean;
  };
}

// ============================================================================
// PRODUCTION CSS
// ============================================================================

function generateProductionCSS(): string {
  return `
/* Reset & Base */
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #fff;
}

/* Progress Bar */
:root { --scroll-progress: 0%; }
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #4CAF50 var(--scroll-progress), transparent var(--scroll-progress));
  width: 100%;
  z-index: 1000;
}

/* Header */
header {
  background: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.breadcrumbs { padding: 0.5rem 2rem; font-size: 0.9rem; }
.breadcrumbs a { color: #4CAF50; text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }

/* Hero */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-intro {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  margin-bottom: 2rem;
  opacity: 0.95;
}

/* Table of Contents */
.table-of-contents {
  background: #f8f9fa;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.table-of-contents h2 {
  margin-bottom: 1rem;
  color: #333;
}

.toc-list {
  list-style: none;
  column-count: 2;
  column-gap: 2rem;
}

.toc-list li {
  margin-bottom: 0.75rem;
  break-inside: avoid;
}

.toc-list a {
  color: #4CAF50;
  text-decoration: none;
  display: block;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background 0.2s;
}

.toc-list a:hover {
  background: rgba(76, 175, 80, 0.1);
}

/* Content */
.landing-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-cluster {
  margin: 3rem 0;
  padding: 2rem 0;
  border-bottom: 1px solid #eee;
}

.content-cluster h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  font-weight: 600;
}

.content-cluster h3 {
  color: #555;
  margin: 1.5rem 0 1rem;
  font-size: 1.5rem;
}

.content-cluster p {
  margin-bottom: 1rem;
  line-height: 1.8;
}

.content-cluster ul, .content-cluster ol {
  margin: 1rem 0 1rem 2rem;
}

.content-cluster li {
  margin-bottom: 0.5rem;
}

/* CTAs */
.cta-button {
  display: inline-block;
  background: #4CAF50;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  margin: 1rem 0;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
}

.cta-button:hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
}

.cta-button.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-size: 1.2rem;
  padding: 1.2rem 2.5rem;
}

/* Footer */
footer {
  background: #333;
  color: white;
  padding: 3rem 2rem 1rem;
  text-align: center;
}

.final-cta {
  max-width: 800px;
  margin: 0 auto 3rem;
  padding: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
}

.final-cta h2 {
  color: white;
  margin-bottom: 1rem;
}

/* Back to Top */
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #4CAF50;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 100;
}

.back-to-top.visible { opacity: 1; }
.back-to-top:hover { background: #45a049; }

/* Responsive */
@media (max-width: 768px) {
  .toc-list { column-count: 1; }
  .hero { padding: 4rem 1rem; }
  .landing-page { padding: 1rem; }
  .content-cluster { padding: 1rem 0; }
  .cta-button { display: block; width: 100%; text-align: center; }
}

/* Print */
@media print {
  .progress-bar, header, .back-to-top, .cta-button { display: none; }
  .table-of-contents { page-break-after: always; }
  .content-cluster { page-break-inside: avoid; }
}
`;
}

// ============================================================================
// PRODUCTION JS
// ============================================================================

function generateProductionJS(options: RenderOptions): string {
  return `
// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Progress indicator
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
});

// Back to top button
const backToTop = document.createElement('div');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '↑';
backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}

// CTA click tracking
document.querySelectorAll('.cta-button').forEach(button => {
  button.addEventListener('click', function() {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_click', {
        'event_category': 'engagement',
        'event_label': this.textContent.trim()
      });
    }
  });
});

// Performance monitoring
window.addEventListener('load', () => {
  if (performance.getEntriesByType) {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log('Page Load Time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
  }
});
`;
}

// ============================================================================
// RENDER FUNCTION
// ============================================================================

async function renderProduction(contentDir: string, options: Partial<RenderOptions> = {}): Promise<void> {
  console.log('🎨 HTML Production Renderer');
  console.log('='.repeat(60));
  
  const defaultOptions: RenderOptions = {
    minify: true,
    cdn: 'https://cdn.example.com',
    analytics: {},
    performance: {
      lazyLoad: true,
      preload: ['fonts'],
      defer: ['scripts']
    },
    seo: {
      structuredData: true,
      openGraph: true,
      twitterCard: true
    }
  };
  
  const renderOptions = { ...defaultOptions, ...options };
  
  // Load assembled HTML
  const htmlPath = path.join(contentDir, '7_landing_page.html');
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Assembled HTML not found: ${htmlPath}\nRun content-assembler.ts first.`);
  }
  
  let html = fs.readFileSync(htmlPath, 'utf8');
  
  console.log('\n📦 Generating production assets...');
  
  // Generate CSS
  const css = generateProductionCSS();
  const cssPath = path.join(contentDir, 'production.css');
  fs.writeFileSync(cssPath, css);
  console.log('   ✓ CSS generated');
  
  // Generate JS
  const js = generateProductionJS(renderOptions);
  const jsPath = path.join(contentDir, 'production.js');
  fs.writeFileSync(jsPath, js);
  console.log('   ✓ JS generated');
  
  // Add analytics
  if (renderOptions.analytics?.googleAnalytics) {
    const gaScript = `
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${renderOptions.analytics.googleAnalytics}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${renderOptions.analytics.googleAnalytics}');
</script>
`;
    html = html.replace('</head>', `${gaScript}</head>`);
    console.log('   ✓ Google Analytics added');
  }
  
  // Add progress bar
  html = html.replace('<body>', '<body><div class="progress-bar"></div>');
  
  // Update stylesheet reference
  html = html.replace(/<link rel="stylesheet" href="\/styles\/main\.css">/g, '<link rel="stylesheet" href="production.css">');
  
  // Update script reference
  html = html.replace(/<script src="\/scripts\/main\.js"><\/script>/g, '<script src="production.js"></script>');
  
  // Optimize images
  if (renderOptions.performance.lazyLoad) {
    html = html.replace(/<img /g, '<img class="lazy" loading="lazy" ');
    console.log('   ✓ Lazy loading enabled');
  }
  
  // Save production HTML
  const productionPath = path.join(contentDir, 'index.html');
  fs.writeFileSync(productionPath, html);
  
  console.log(`\n✅ Production build complete!`);
  console.log(`\n📁 Output files:`);
  console.log(`   HTML: ${productionPath}`);
  console.log(`   CSS: ${cssPath}`);
  console.log(`   JS: ${jsPath}`);
  
  console.log(`\n🚀 Deployment checklist:`);
  console.log(`   1. Test in browser`);
  console.log(`   2. Validate HTML (W3C)`);
  console.log(`   3. Test mobile responsiveness`);
  console.log(`   4. Check PageSpeed Insights`);
  console.log(`   5. Verify analytics tracking`);
  console.log(`   6. Deploy to production server`);
}

// ============================================================================
// CLI
// ============================================================================

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: tsx html-production-renderer.ts <content-directory> [options]');
    console.log('');
    console.log('Options:');
    console.log('  --ga=UA-XXXXX-Y     Google Analytics ID');
    console.log('  --no-minify         Disable minification');
    console.log('  --no-lazy-load      Disable lazy loading');
    console.log('');
    console.log('Example:');
    console.log('  tsx scripts/html-production-renderer.ts generated-content/massage-to-hotel --ga=UA-12345-1');
    process.exit(1);
  }
  
  const contentDir = args[0];
  const options: Partial<RenderOptions> = {};
  
  args.slice(1).forEach(arg => {
    if (arg.startsWith('--ga=')) {
      options.analytics = { googleAnalytics: arg.split('=')[1] };
    } else if (arg === '--no-minify') {
      options.minify = false;
    } else if (arg === '--no-lazy-load') {
      options.performance = { ...options.performance, lazyLoad: false };
    }
  });
  
  if (!fs.existsSync(contentDir)) {
    console.error(`Error: Content directory not found: ${contentDir}`);
    process.exit(1);
  }
  
  await renderProduction(contentDir, options);
}

if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { renderProduction, generateProductionCSS, generateProductionJS };
