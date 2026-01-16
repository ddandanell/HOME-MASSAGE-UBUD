import axios from 'axios';
import * as cheerio from 'cheerio';
import * as xml2js from 'xml2js';

/**
 * New Page Validation Script
 * 
 * Validates that new pages have proper internal linking
 * before they become orphans.
 * 
 * Usage: tsx scripts/validate-new-page.ts <page-url>
 */

const CONFIG = {
  sitemapUrl: 'https://homemassageubud.com/sitemap.xml',
  domain: 'homemassageubud.com',
  baseUrl: 'https://homemassageubud.com',
  userAgent: 'Mozilla/5.0 (compatible; PageValidator/1.0)',
  minInternalLinks: 2,
  minWordCount: 300,
  requiredElements: {
    title: true,
    metaDescription: true,
    h1: true,
    canonical: true,
    schema: false // Optional but recommended
  }
};

interface ValidationResult {
  url: string;
  passed: boolean;
  errors: string[];
  warnings: string[];
  recommendations: string[];
  details: {
    inSitemap: boolean;
    internalLinksCount: number;
    linkedFromPages: string[];
    hasTitle: boolean;
    hasMetaDescription: boolean;
    hasH1: boolean;
    hasCanonical: boolean;
    hasSchema: boolean;
    wordCount: number;
    suggestedLinkSources: string[];
  };
}

// Fetch sitemap
async function fetchSitemap(): Promise<string[]> {
  try {
    const response = await axios.get(CONFIG.sitemapUrl, {
      headers: { 'User-Agent': CONFIG.userAgent },
      timeout: 30000
    });
    
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(response.data);
    
    const urls: string[] = [];
    if (result.urlset && result.urlset.url) {
      for (const urlEntry of result.urlset.url) {
        if (urlEntry.loc && urlEntry.loc[0]) {
          urls.push(urlEntry.loc[0]);
        }
      }
    }
    
    return urls;
  } catch (error: any) {
    console.error('Error fetching sitemap:', error.message);
    return [];
  }
}

// Normalize URL
function normalizeUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return `${urlObj.protocol}//${urlObj.hostname}${urlObj.pathname}`.replace(/\/$/, '') || `${urlObj.protocol}//${urlObj.hostname}`;
  } catch {
    return url;
  }
}

// Check if page is in sitemap
function isInSitemap(pageUrl: string, sitemapUrls: string[]): boolean {
  const normalized = normalizeUrl(pageUrl);
  return sitemapUrls.some(url => normalizeUrl(url) === normalized);
}

// Count internal links pointing to this page
// NOTE: This is a quick validation check that samples pages for speed.
// For comprehensive link counting, use the full orphan detector script.
async function countInternalLinksTo(targetUrl: string, sitemapUrls: string[]): Promise<{ count: number; sources: string[] }> {
  const normalizedTarget = normalizeUrl(targetUrl);
  const sources: string[] = [];
  let count = 0;
  
  // Sample check from first 20 pages (for speed in validation)
  // For production: make this configurable or check all pages
  const samplesToCheck = Math.min(20, sitemapUrls.length);
  
  for (let i = 0; i < samplesToCheck; i++) {
    const sourceUrl = sitemapUrls[i];
    
    try {
      const response = await axios.get(sourceUrl, {
        headers: { 'User-Agent': CONFIG.userAgent },
        timeout: 15000
      });
      
      const $ = cheerio.load(response.data);
      
      $('a[href]').each((idx, elem) => {
        const href = $(elem).attr('href');
        
        if (!href) return;
        
        try {
          let absoluteUrl: string;
          
          if (href.startsWith('http://') || href.startsWith('https://')) {
            absoluteUrl = href;
          } else {
            absoluteUrl = new URL(href, sourceUrl).href;
          }
          
          if (normalizeUrl(absoluteUrl) === normalizedTarget) {
            count++;
            if (!sources.includes(sourceUrl)) {
              sources.push(sourceUrl);
            }
          }
        } catch {
          // Skip invalid URLs
        }
      });
    } catch (error) {
      // Skip pages that fail to load
    }
  }
  
  return { count, sources };
}

// Analyze page content
async function analyzePage(url: string): Promise<any> {
  try {
    const response = await axios.get(url, {
      headers: { 'User-Agent': CONFIG.userAgent },
      timeout: 30000
    });
    
    const $ = cheerio.load(response.data);
    
    // Check title
    const title = $('title').first().text().trim();
    
    // Check meta description
    const metaDescription = $('meta[name="description"]').attr('content')?.trim() || '';
    
    // Check H1
    const h1Count = $('h1').length;
    
    // Check canonical
    const canonical = $('link[rel="canonical"]').attr('href') || '';
    
    // Check schema
    let hasSchema = false;
    $('script[type="application/ld+json"]').each(() => {
      hasSchema = true;
    });
    
    // Word count
    $('script, style, noscript, iframe, svg').remove();
    const bodyText = $('body').text();
    const words = bodyText.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    return {
      hasTitle: title.length > 0,
      title,
      hasMetaDescription: metaDescription.length > 0,
      hasH1: h1Count === 1,
      h1Count,
      hasCanonical: canonical.length > 0,
      hasSchema,
      wordCount
    };
  } catch (error: any) {
    throw new Error(`Failed to analyze page: ${error.message}`);
  }
}

// Find suggested link sources
async function findSuggestedLinkSources(pageUrl: string, sitemapUrls: string[]): Promise<string[]> {
  const suggestions: string[] = [];
  
  // Extract keywords from URL
  const urlPath = new URL(pageUrl).pathname;
  const segments = urlPath.split('/').filter(s => s);
  
  // Look for pages with similar paths
  for (const url of sitemapUrls) {
    if (url === pageUrl) continue;
    
    const otherPath = new URL(url).pathname;
    const otherSegments = otherPath.split('/').filter(s => s);
    
    // Check for common segments
    const commonSegments = segments.filter(s => otherSegments.includes(s));
    
    if (commonSegments.length > 0) {
      suggestions.push(url);
    }
    
    if (suggestions.length >= 10) break;
  }
  
  // If not enough suggestions, add some high-level pages
  if (suggestions.length < 5) {
    const highLevel = sitemapUrls.filter(url => {
      const path = new URL(url).pathname;
      const segs = path.split('/').filter(s => s);
      return segs.length <= 2; // Only 1-2 segments deep
    });
    
    suggestions.push(...highLevel.slice(0, 5 - suggestions.length));
  }
  
  return suggestions;
}

// Validate a page
async function validatePage(pageUrl: string): Promise<ValidationResult> {
  console.log(`\n🔍 Validating page: ${pageUrl}\n`);
  
  const errors: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];
  
  // Fetch sitemap
  console.log('📡 Fetching sitemap...');
  const sitemapUrls = await fetchSitemap();
  
  // Check if page is in sitemap
  console.log('📋 Checking sitemap inclusion...');
  const inSitemap = isInSitemap(pageUrl, sitemapUrls);
  
  if (!inSitemap) {
    errors.push('Page is NOT in sitemap.xml');
    recommendations.push('Add page to sitemap.xml');
  }
  
  // Analyze page content
  console.log('🔎 Analyzing page content...');
  const analysis = await analyzePage(pageUrl);
  
  // Check required elements
  if (!analysis.hasTitle) {
    errors.push('Missing title tag');
    recommendations.push('Add a unique, descriptive title tag (50-60 characters)');
  }
  
  if (!analysis.hasMetaDescription) {
    errors.push('Missing meta description');
    recommendations.push('Add a compelling meta description (120-160 characters)');
  }
  
  if (!analysis.hasH1) {
    if (analysis.h1Count === 0) {
      errors.push('Missing H1 tag');
      recommendations.push('Add exactly one H1 tag with primary keyword');
    } else {
      warnings.push(`Multiple H1 tags found (${analysis.h1Count})`);
      recommendations.push('Use only one H1 tag per page');
    }
  }
  
  if (!analysis.hasCanonical) {
    warnings.push('Missing canonical tag');
    recommendations.push('Add canonical tag pointing to this page');
  }
  
  if (!analysis.hasSchema) {
    warnings.push('No JSON-LD schema found');
    recommendations.push('Add structured data (LocalBusiness, Service, FAQ)');
  }
  
  if (analysis.wordCount < CONFIG.minWordCount) {
    warnings.push(`Low word count (${analysis.wordCount} words, minimum: ${CONFIG.minWordCount})`);
    recommendations.push(`Increase content to at least ${CONFIG.minWordCount} words`);
  }
  
  // Check internal links
  console.log('🔗 Checking internal links...');
  const { count: internalLinksCount, sources: linkedFromPages } = await countInternalLinksTo(pageUrl, sitemapUrls);
  
  if (internalLinksCount < CONFIG.minInternalLinks) {
    errors.push(`Insufficient internal links (${internalLinksCount} found, minimum: ${CONFIG.minInternalLinks})`);
    recommendations.push(`Add at least ${CONFIG.minInternalLinks - internalLinksCount} more internal link(s) from relevant pages`);
  }
  
  // Get suggested link sources
  console.log('💡 Finding suggested link sources...');
  const suggestedLinkSources = await findSuggestedLinkSources(pageUrl, sitemapUrls);
  
  const passed = errors.length === 0;
  
  return {
    url: pageUrl,
    passed,
    errors,
    warnings,
    recommendations,
    details: {
      inSitemap,
      internalLinksCount,
      linkedFromPages,
      hasTitle: analysis.hasTitle,
      hasMetaDescription: analysis.hasMetaDescription,
      hasH1: analysis.hasH1,
      hasCanonical: analysis.hasCanonical,
      hasSchema: analysis.hasSchema,
      wordCount: analysis.wordCount,
      suggestedLinkSources
    }
  };
}

// Print validation result
function printResult(result: ValidationResult): void {
  console.log('\n' + '='.repeat(70));
  console.log(`VALIDATION RESULT: ${result.passed ? '✅ PASSED' : '❌ FAILED'}`);
  console.log('='.repeat(70) + '\n');
  
  console.log(`URL: ${result.url}\n`);
  
  if (result.errors.length > 0) {
    console.log('🔴 ERRORS (Must Fix):');
    result.errors.forEach(error => {
      console.log(`   ❌ ${error}`);
    });
    console.log();
  }
  
  if (result.warnings.length > 0) {
    console.log('🟡 WARNINGS (Should Fix):');
    result.warnings.forEach(warning => {
      console.log(`   ⚠️  ${warning}`);
    });
    console.log();
  }
  
  if (result.recommendations.length > 0) {
    console.log('💡 RECOMMENDATIONS:');
    result.recommendations.forEach(rec => {
      console.log(`   → ${rec}`);
    });
    console.log();
  }
  
  console.log('📊 DETAILS:');
  console.log(`   In Sitemap: ${result.details.inSitemap ? '✅' : '❌'}`);
  console.log(`   Internal Links: ${result.details.internalLinksCount} (minimum: ${CONFIG.minInternalLinks})`);
  console.log(`   Word Count: ${result.details.wordCount} (minimum: ${CONFIG.minWordCount})`);
  console.log(`   Has Title: ${result.details.hasTitle ? '✅' : '❌'}`);
  console.log(`   Has Meta Description: ${result.details.hasMetaDescription ? '✅' : '❌'}`);
  console.log(`   Has H1: ${result.details.hasH1 ? '✅' : '❌'}`);
  console.log(`   Has Canonical: ${result.details.hasCanonical ? '✅' : '❌'}`);
  console.log(`   Has Schema: ${result.details.hasSchema ? '✅' : '⚠️'}`);
  console.log();
  
  if (result.details.linkedFromPages.length > 0) {
    console.log('🔗 LINKED FROM:');
    result.details.linkedFromPages.forEach(url => {
      console.log(`   - ${url}`);
    });
    console.log();
  }
  
  if (result.details.suggestedLinkSources.length > 0) {
    console.log('💡 SUGGESTED PAGES TO LINK FROM:');
    result.details.suggestedLinkSources.forEach(url => {
      console.log(`   - ${url}`);
    });
    console.log();
  }
  
  if (!result.passed) {
    console.log('⚠️  This page will become an ORPHAN if published without fixing the errors!\n');
  }
  
  console.log('='.repeat(70) + '\n');
}

// Main
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: tsx scripts/validate-new-page.ts <page-url>');
    console.error('\nExample:');
    console.error('  tsx scripts/validate-new-page.ts https://homemassageubud.com/services/new-service');
    process.exit(1);
  }
  
  const pageUrl = args[0];
  
  try {
    const result = await validatePage(pageUrl);
    printResult(result);
    
    if (!result.passed) {
      process.exit(1);
    }
  } catch (error: any) {
    console.error(`\n❌ Validation failed: ${error.message}\n`);
    process.exit(1);
  }
}

main();
