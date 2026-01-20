#!/usr/bin/env tsx

/**
 * Content Assembly Script
 * 
 * Combines 12 content clusters into a single complete landing page with:
 * - Proper HTML structure
 * - Table of contents with jump links
 * - Schema markup integration
 * - Image placeholders
 * - CTA placements
 * - Internal linking
 */

import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

// ============================================================================
// TYPES
// ============================================================================

interface ClusterContent {
  id: string;
  name: string;
  content: string;
  wordCount: number;
  keywords: string[];
}

interface AssembledPage {
  html: string;
  totalWordCount: number;
  clusterCount: number;
  sections: number;
  ctaCount: number;
  internalLinkCount: number;
  imageCount: number;
  keywords: Record<string, number>;
}

interface PageConfig {
  existing_website_url: string;
  target_landing_page_url: string;
  service_focus: string;
  primary_keywords: string[];
  business_name?: string;
  location?: {
    city: string;
    region: string;
    country: string;
  };
  contact_methods?: {
    whatsapp: string;
    phone: string;
    email: string;
  };
}

// ============================================================================
// CONTENT LOADING
// ============================================================================

function loadClusterContent(clusterDir: string): ClusterContent[] {
  const clusters: ClusterContent[] = [];
  
  // Load all cluster content files
  for (let i = 1; i <= 12; i++) {
    const clusterId = `cluster_${i.toString().padStart(2, '0')}`;
    const contentPath = path.join(clusterDir, `${clusterId}_content.md`);
    
    if (fs.existsSync(contentPath)) {
      const content = fs.readFileSync(contentPath, 'utf8');
      const wordCount = content.split(/\s+/).length;
      
      clusters.push({
        id: clusterId,
        name: extractClusterName(content),
        content,
        wordCount,
        keywords: []
      });
      
      console.log(`✓ Loaded ${clusterId}: ${wordCount} words`);
    } else {
      console.warn(`⚠ Missing: ${contentPath}`);
    }
  }
  
  return clusters;
}

function extractClusterName(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : 'Untitled Section';
}

// ============================================================================
// TABLE OF CONTENTS GENERATION
// ============================================================================

function generateTableOfContents(clusters: ClusterContent[]): string {
  let toc = `
<nav class="table-of-contents" id="toc">
  <h2>Table of Contents</h2>
  <ul class="toc-list">
`;
  
  clusters.forEach((cluster, idx) => {
    const anchor = `section-${idx + 1}`;
    toc += `    <li><a href="#${anchor}">${cluster.name}</a></li>\n`;
  });
  
  toc += `  </ul>
</nav>
`;
  
  return toc;
}

// ============================================================================
// HTML ASSEMBLY
// ============================================================================

function assembleHTML(
  clusters: ClusterContent[],
  config: PageConfig,
  meta: any
): string {
  const businessName = config.business_name || 'Business Name';
  const location = config.location;
  const locationStr = location ? `${location.city}, ${location.region}` : 'Location';
  
  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO Meta Tags -->
  <title>${meta.title || config.service_focus}</title>
  <meta name="description" content="${meta.description || ''}">
  <meta name="keywords" content="${config.primary_keywords.join(', ')}">
  
  <!-- Open Graph -->
  <meta property="og:title" content="${meta.title || config.service_focus}">
  <meta property="og:description" content="${meta.description || ''}">
  <meta property="og:url" content="${config.existing_website_url}${config.target_landing_page_url}">
  <meta property="og:type" content="website">
  
  <!-- Canonical -->
  <link rel="canonical" href="${config.existing_website_url}${config.target_landing_page_url}">
  
  <!-- Styles -->
  <link rel="stylesheet" href="/styles/main.css">
  
  <!-- Schema.org JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "${businessName}",
    "description": "${config.service_focus}",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "${location?.city || ''}",
      "addressRegion": "${location?.region || ''}",
      "addressCountry": "${location?.country || ''}"
    },
    "url": "${config.existing_website_url}",
    "telephone": "${config.contact_methods?.phone || ''}",
    "priceRange": "$$"
  }
  </script>
</head>
<body>
  <header>
    <nav class="breadcrumbs">
      <a href="/">Home</a> &gt; 
      <a href="/services">Services</a> &gt;
      <span>${config.service_focus}</span>
    </nav>
  </header>

  <main class="landing-page">
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <h1>${config.service_focus} in ${locationStr}</h1>
      <p class="hero-intro">Your complete guide to ${config.service_focus.toLowerCase()}.</p>
      <a href="${config.contact_methods?.whatsapp ? `https://wa.me/${config.contact_methods.whatsapp}` : '#contact'}" class="cta-button primary">Book via WhatsApp</a>
    </section>

    <!-- Table of Contents -->
    ${generateTableOfContents(clusters)}

    <!-- Content Clusters -->
`;

  // Add each cluster as a section
  clusters.forEach((cluster, idx) => {
    const anchor = `section-${idx + 1}`;
    html += `
    <section class="content-cluster" id="${anchor}">
      ${convertMarkdownToHTML(cluster.content)}
      ${idx % 3 === 0 ? `<a href="${config.contact_methods?.whatsapp ? `https://wa.me/${config.contact_methods.whatsapp}` : '#contact'}" class="cta-button">Get Started</a>` : ''}
    </section>
`;
  });

  html += `
  </main>

  <footer>
    <div class="final-cta">
      <h2>Ready to Get Started?</h2>
      <p>Contact us today to book your service.</p>
      <a href="${config.contact_methods?.whatsapp ? `https://wa.me/${config.contact_methods.whatsapp}` : '#contact'}" class="cta-button primary">WhatsApp: ${config.contact_methods?.phone || 'Contact Us'}</a>
    </div>
    <p>&copy; ${new Date().getFullYear()} ${businessName}. All rights reserved.</p>
  </footer>

  <!-- Scripts -->
  <script src="/scripts/main.js"></script>
  <script>
    // Smooth scrolling for TOC links
    document.querySelectorAll('.toc-list a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Progress indicator
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.documentElement.style.setProperty('--scroll-progress', scrolled + '%');
    });
  </script>
</body>
</html>`;

  return html;
}

function convertMarkdownToHTML(markdown: string): string {
  // Basic markdown to HTML conversion
  return markdown
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h2>$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[h2|h3|ul|li])/gm, '<p>')
    .replace(/$/gm, '</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[h2|h3|ul])/g, '$1')
    .replace(/(<\/[h2|h3|ul]>)<\/p>/g, '$1');
}

// ============================================================================
// STATISTICS CALCULATION
// ============================================================================

function calculateStatistics(html: string, clusters: ClusterContent[]): AssembledPage {
  const totalWordCount = clusters.reduce((sum, c) => sum + c.wordCount, 0);
  const sections = (html.match(/<h2>/g) || []).length;
  const ctaCount = (html.match(/cta-button/g) || []).length;
  const internalLinkCount = (html.match(/<a href="\/[^"]*">/g) || []).length;
  const imageCount = (html.match(/<img /g) || []).length;
  
  // Count keyword occurrences
  const keywords: Record<string, number> = {};
  const textContent = html.replace(/<[^>]+>/g, ' ').toLowerCase();
  
  return {
    html,
    totalWordCount,
    clusterCount: clusters.length,
    sections,
    ctaCount,
    internalLinkCount,
    imageCount,
    keywords
  };
}

// ============================================================================
// MAIN ASSEMBLY FUNCTION
// ============================================================================

async function assembleContent(contentDir: string): Promise<void> {
  console.log('🔧 Content Assembly Script');
  console.log('='.repeat(60));
  
  // Load generation plan
  const planPath = path.join(contentDir, 'generation_plan.json');
  if (!fs.existsSync(planPath)) {
    throw new Error(`Generation plan not found: ${planPath}`);
  }
  
  const plan = JSON.parse(fs.readFileSync(planPath, 'utf8'));
  const config: PageConfig = plan.config;
  
  console.log(`\n📂 Loading content from: ${contentDir}`);
  
  // Load all cluster content
  const clusters = loadClusterContent(contentDir);
  
  if (clusters.length === 0) {
    throw new Error('No cluster content files found. Generate content first.');
  }
  
  console.log(`\n✓ Loaded ${clusters.length} clusters`);
  const totalWords = clusters.reduce((sum, c) => sum + c.wordCount, 0);
  console.log(`✓ Total word count: ${totalWords.toLocaleString()}`);
  
  // Load or create metadata
  const metaPath = path.join(contentDir, '5_meta_pack.json');
  const meta = fs.existsSync(metaPath) 
    ? JSON.parse(fs.readFileSync(metaPath, 'utf8'))
    : { title: config.service_focus, description: '' };
  
  // Assemble HTML
  console.log(`\n🏗️  Assembling HTML...`);
  const html = assembleHTML(clusters, config, meta);
  
  // Calculate statistics
  const stats = calculateStatistics(html, clusters);
  
  // Save assembled page
  const outputPath = path.join(contentDir, '7_landing_page.html');
  fs.writeFileSync(outputPath, html);
  
  // Save statistics
  const statsPath = path.join(contentDir, 'assembly_stats.json');
  fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2));
  
  console.log(`\n✅ Assembly complete!`);
  console.log(`\n📊 Statistics:`);
  console.log(`   Total words: ${stats.totalWordCount.toLocaleString()}`);
  console.log(`   Clusters: ${stats.clusterCount}`);
  console.log(`   Sections: ${stats.sections}`);
  console.log(`   CTAs: ${stats.ctaCount}`);
  console.log(`   Internal links: ${stats.internalLinkCount}`);
  console.log(`   Images: ${stats.imageCount}`);
  
  console.log(`\n📁 Output files:`);
  console.log(`   HTML: ${outputPath}`);
  console.log(`   Stats: ${statsPath}`);
  
  console.log(`\n🚀 Next steps:`);
  console.log(`   1. Review the assembled HTML`);
  console.log(`   2. Run keyword density validation`);
  console.log(`   3. Test in browser`);
  console.log(`   4. Deploy to production`);
}

// ============================================================================
// CLI
// ============================================================================

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: tsx content-assembler.ts <content-directory>');
    console.log('');
    console.log('Example:');
    console.log('  tsx scripts/content-assembler.ts generated-content/massage-to-hotel');
    process.exit(1);
  }
  
  const contentDir = args[0];
  
  if (!fs.existsSync(contentDir)) {
    console.error(`Error: Content directory not found: ${contentDir}`);
    process.exit(1);
  }
  
  await assembleContent(contentDir);
}

if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { assembleContent, loadClusterContent, generateTableOfContents };
