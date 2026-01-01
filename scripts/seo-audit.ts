import axios from 'axios';
import * as cheerio from 'cheerio';
import * as xml2js from 'xml2js';
import * as fs from 'fs';
import * as path from 'path';

interface PageData {
  url: string;
  title: string;
  metaDescription: string;
  canonical: string;
  jsonLdSchema: any[];
  headingCounts: { [key: string]: number };
  wordCount: number;
  issues: string[];
}

interface AuditReport {
  pages: PageData[];
  siteWideIssues: string[];
  recommendations: { [url: string]: string[] };
}

// Fetch and parse sitemap
async function fetchSitemap(sitemapUrl: string): Promise<string[]> {
  try {
    console.log(`Fetching sitemap from ${sitemapUrl}...`);
    const response = await axios.get(sitemapUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SEO-Audit-Bot/1.0)'
      }
    });
    
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(response.data);
    
    // Extract URLs from sitemap
    const urls: string[] = [];
    if (result.urlset && result.urlset.url) {
      for (const urlEntry of result.urlset.url) {
        if (urlEntry.loc && urlEntry.loc[0]) {
          urls.push(urlEntry.loc[0]);
        }
      }
    }
    
    console.log(`Found ${urls.length} URLs in sitemap`);
    return urls;
  } catch (error) {
    console.error('Error fetching sitemap:', error);
    throw error;
  }
}

// Fetch and analyze a single page
async function analyzePage(url: string): Promise<PageData> {
  try {
    console.log(`Analyzing ${url}...`);
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SEO-Audit-Bot/1.0)'
      },
      timeout: 30000
    });
    
    const $ = cheerio.load(response.data);
    
    // Extract title
    const title = $('title').first().text().trim();
    
    // Extract meta description
    const metaDescription = $('meta[name="description"]').attr('content')?.trim() || '';
    
    // Extract canonical
    const canonical = $('link[rel="canonical"]').attr('href')?.trim() || '';
    
    // Extract JSON-LD schemas
    const jsonLdSchema: any[] = [];
    $('script[type="application/ld+json"]').each((i, elem) => {
      try {
        const schemaText = $(elem).html();
        if (schemaText) {
          const schema = JSON.parse(schemaText);
          jsonLdSchema.push(schema);
        }
      } catch (e) {
        // Skip invalid JSON-LD
      }
    });
    
    // Count heading tags
    const headingCounts: { [key: string]: number } = {
      h1: $('h1').length,
      h2: $('h2').length,
      h3: $('h3').length,
      h4: $('h4').length,
      h5: $('h5').length,
      h6: $('h6').length,
    };
    
    // Calculate word count (visible text only)
    // Remove script, style, and other non-visible elements
    $('script, style, noscript, iframe, svg').remove();
    const bodyText = $('body').text();
    const words = bodyText.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    const issues: string[] = [];
    
    // Check for issues
    if (!title) {
      issues.push('Missing title tag');
    }
    if (!metaDescription) {
      issues.push('Missing meta description');
    }
    if (!canonical) {
      issues.push('Missing canonical tag');
    }
    if (jsonLdSchema.length === 0) {
      issues.push('Missing JSON-LD schema');
    }
    if (headingCounts.h1 === 0) {
      issues.push('Missing H1 tag');
    }
    if (headingCounts.h1 > 1) {
      issues.push('Multiple H1 tags');
    }
    if (wordCount < 300) {
      issues.push(`Low word count (${wordCount} words)`);
    }
    if (title.length > 60) {
      issues.push(`Title too long (${title.length} chars)`);
    }
    if (metaDescription.length > 160) {
      issues.push(`Meta description too long (${metaDescription.length} chars)`);
    }
    
    return {
      url,
      title,
      metaDescription,
      canonical,
      jsonLdSchema,
      headingCounts,
      wordCount,
      issues
    };
  } catch (error) {
    console.error(`Error analyzing ${url}:`, error);
    return {
      url,
      title: '',
      metaDescription: '',
      canonical: '',
      jsonLdSchema: [],
      headingCounts: { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 },
      wordCount: 0,
      issues: [`Failed to fetch: ${error}`]
    };
  }
}

// Detect duplicate issues across pages
function detectDuplicates(pages: PageData[]): string[] {
  const siteWideIssues: string[] = [];
  
  // Check for duplicate titles
  const titleCounts = new Map<string, string[]>();
  pages.forEach(page => {
    if (page.title) {
      if (!titleCounts.has(page.title)) {
        titleCounts.set(page.title, []);
      }
      titleCounts.get(page.title)!.push(page.url);
    }
  });
  
  titleCounts.forEach((urls, title) => {
    if (urls.length > 1) {
      siteWideIssues.push(`Duplicate title "${title}" on ${urls.length} pages: ${urls.join(', ')}`);
    }
  });
  
  // Check for duplicate descriptions
  const descCounts = new Map<string, string[]>();
  pages.forEach(page => {
    if (page.metaDescription) {
      if (!descCounts.has(page.metaDescription)) {
        descCounts.set(page.metaDescription, []);
      }
      descCounts.get(page.metaDescription)!.push(page.url);
    }
  });
  
  descCounts.forEach((urls, desc) => {
    if (urls.length > 1) {
      siteWideIssues.push(`Duplicate meta description on ${urls.length} pages: ${urls.join(', ')}`);
    }
  });
  
  // Check for duplicate canonicals (different pages pointing to same canonical)
  const canonicalCounts = new Map<string, string[]>();
  pages.forEach(page => {
    if (page.canonical) {
      if (!canonicalCounts.has(page.canonical)) {
        canonicalCounts.set(page.canonical, []);
      }
      canonicalCounts.get(page.canonical)!.push(page.url);
    }
  });
  
  canonicalCounts.forEach((urls, canonical) => {
    if (urls.length > 1) {
      const uniqueUrls = Array.from(new Set(urls));
      if (uniqueUrls.length > 1) {
        siteWideIssues.push(`Multiple pages pointing to same canonical ${canonical}: ${uniqueUrls.join(', ')}`);
      }
    }
  });
  
  return siteWideIssues;
}

// Generate recommendations for each page
function generateRecommendations(pages: PageData[]): { [url: string]: string[] } {
  const recommendations: { [url: string]: string[] } = {};
  
  pages.forEach(page => {
    const pageRecs: string[] = [];
    
    if (!page.title) {
      pageRecs.push('Add a unique, descriptive title (50-60 characters)');
    }
    if (!page.metaDescription) {
      pageRecs.push('Add a compelling meta description (120-160 characters)');
    }
    if (!page.canonical) {
      pageRecs.push('Add canonical tag pointing to this page');
    }
    if (page.jsonLdSchema.length === 0) {
      pageRecs.push('Add JSON-LD structured data (LocalBusiness, Service, FAQ)');
    }
    if (page.wordCount < 300) {
      pageRecs.push(`Increase content to at least 600 words (current: ${page.wordCount})`);
    }
    if (page.headingCounts.h1 === 0) {
      pageRecs.push('Add a single H1 tag with primary keyword');
    }
    if (page.headingCounts.h1 > 1) {
      pageRecs.push('Use only one H1 tag per page');
    }
    
    // Suggest content additions based on URL patterns
    if (page.url.includes('/services/')) {
      pageRecs.push('Consider adding: pricing table, comparison chart, process steps');
    }
    if (page.url.match(/\/(ubud|seminyak|canggu|sanur|kuta)/i)) {
      pageRecs.push('Consider adding: area description, local landmarks, service radius map');
    }
    if (page.url.includes('massage')) {
      pageRecs.push('Consider adding: benefits list, duration options, therapist qualifications');
    }
    
    if (pageRecs.length > 0) {
      recommendations[page.url] = pageRecs;
    }
  });
  
  return recommendations;
}

// Extract keyword focus from URL
function extractKeywordFocus(url: string): string {
  const urlPath = new URL(url).pathname;
  const segments = urlPath.split('/').filter(s => s);
  
  if (segments.length === 0) {
    return 'home massage ubud';
  }
  
  const lastSegment = segments[segments.length - 1];
  const keyword = lastSegment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
  
  return keyword;
}

// Generate markdown table
function generateMarkdownTable(pages: PageData[], recommendations: { [url: string]: string[] }): string {
  let markdown = '# SEO Audit Report\n\n';
  markdown += `Generated: ${new Date().toISOString()}\n\n`;
  markdown += `Total Pages Analyzed: ${pages.length}\n\n`;
  
  markdown += '## Page Analysis\n\n';
  markdown += '| URL | Current Title | Recommended Title | Meta Description | Keyword Focus | Issues | Recommendations |\n';
  markdown += '|-----|---------------|-------------------|------------------|---------------|--------|------------------|\n';
  
  pages.forEach(page => {
    const url = page.url.replace('https://homemassageubud.com', '');
    const title = page.title.replace(/\|/g, '\\|').substring(0, 40) + (page.title.length > 40 ? '...' : '');
    const recommendedTitle = page.title ? 'Optimize length & keywords' : 'Add unique title';
    const metaDesc = page.metaDescription.substring(0, 40) + (page.metaDescription.length > 40 ? '...' : '');
    const keywordFocus = extractKeywordFocus(page.url);
    const issues = page.issues.length > 0 ? page.issues.slice(0, 2).join('; ') : 'None';
    const recs = recommendations[page.url] ? recommendations[page.url].slice(0, 2).join('; ') : 'None';
    
    markdown += `| ${url} | ${title} | ${recommendedTitle} | ${metaDesc} | ${keywordFocus} | ${issues} | ${recs} |\n`;
  });
  
  return markdown;
}

// Generate detailed recommendations report
function generateDetailedReport(pages: PageData[], siteWideIssues: string[], recommendations: { [url: string]: string[] }): string {
  let report = '\n\n## Detailed Findings and Recommendations\n\n';
  
  report += '### Site-Wide Issues\n\n';
  if (siteWideIssues.length > 0) {
    siteWideIssues.forEach(issue => {
      report += `- ${issue}\n`;
    });
  } else {
    report += 'No site-wide issues detected.\n';
  }
  
  report += '\n### Page-Specific Recommendations\n\n';
  
  Object.entries(recommendations).forEach(([url, recs]) => {
    const urlPath = url.replace('https://homemassageubud.com', '');
    report += `#### ${urlPath}\n\n`;
    recs.forEach(rec => {
      report += `- ${rec}\n`;
    });
    report += '\n';
  });
  
  report += '\n### Priority Actions\n\n';
  report += '1. **Fix Duplicate Content**: Ensure all titles and meta descriptions are unique\n';
  report += '2. **Add Missing Schema**: Implement LocalBusiness, Service, and FAQ schema on all pages\n';
  report += '3. **Optimize Low Word Count Pages**: Add valuable content to pages with <300 words\n';
  report += '4. **Fix Canonical Tags**: Ensure proper canonical tag configuration\n';
  report += '5. **Improve Internal Linking**: Add contextual internal links between related pages\n';
  
  return report;
}

// Generate summary statistics
function generateSummary(pages: PageData[]): string {
  let summary = '\n\n## Summary Statistics\n\n';
  
  const missingTitle = pages.filter(p => !p.title).length;
  const missingDesc = pages.filter(p => !p.metaDescription).length;
  const missingCanonical = pages.filter(p => !p.canonical).length;
  const missingSchema = pages.filter(p => p.jsonLdSchema.length === 0).length;
  const lowWordCount = pages.filter(p => p.wordCount < 300).length;
  const multipleH1 = pages.filter(p => p.headingCounts.h1 > 1).length;
  const noH1 = pages.filter(p => p.headingCounts.h1 === 0).length;
  
  summary += `- **Missing Title Tag**: ${missingTitle} pages\n`;
  summary += `- **Missing Meta Description**: ${missingDesc} pages\n`;
  summary += `- **Missing Canonical Tag**: ${missingCanonical} pages\n`;
  summary += `- **Missing JSON-LD Schema**: ${missingSchema} pages\n`;
  summary += `- **Low Word Count (<300)**: ${lowWordCount} pages\n`;
  summary += `- **Multiple H1 Tags**: ${multipleH1} pages\n`;
  summary += `- **No H1 Tag**: ${noH1} pages\n`;
  
  const avgWordCount = Math.round(pages.reduce((sum, p) => sum + p.wordCount, 0) / pages.length);
  summary += `\n**Average Word Count**: ${avgWordCount} words\n`;
  
  return summary;
}

// Main audit function
async function runAudit() {
  const sitemapUrl = 'https://homemassageubud.com/sitemap.xml';
  
  try {
    // Fetch sitemap
    const urls = await fetchSitemap(sitemapUrl);
    
    // Analyze each page
    const pages: PageData[] = [];
    for (const url of urls) {
      const pageData = await analyzePage(url);
      pages.push(pageData);
      
      // Add a small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Detect site-wide issues
    const siteWideIssues = detectDuplicates(pages);
    
    // Generate recommendations
    const recommendations = generateRecommendations(pages);
    
    // Generate reports
    const markdownTable = generateMarkdownTable(pages, recommendations);
    const detailedReport = generateDetailedReport(pages, siteWideIssues, recommendations);
    const summary = generateSummary(pages);
    
    const fullReport = markdownTable + summary + detailedReport;
    
    // Save report to file
    const outputDir = path.join(process.cwd(), 'reports');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
    const reportPath = path.join(outputDir, `seo-audit-${timestamp}.md`);
    fs.writeFileSync(reportPath, fullReport);
    
    console.log(`\n✅ Audit complete! Report saved to: ${reportPath}`);
    console.log(`\nPages analyzed: ${pages.length}`);
    console.log(`Site-wide issues found: ${siteWideIssues.length}`);
    console.log(`Pages with recommendations: ${Object.keys(recommendations).length}`);
    
    // Also save raw data as JSON
    const jsonPath = path.join(outputDir, `seo-audit-${timestamp}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify({ pages, siteWideIssues, recommendations }, null, 2));
    console.log(`Raw data saved to: ${jsonPath}`);
    
  } catch (error) {
    console.error('Audit failed:', error);
    process.exit(1);
  }
}

// Run the audit
runAudit();
