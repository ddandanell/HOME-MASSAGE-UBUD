import axios from 'axios';
import * as cheerio from 'cheerio';
import * as xml2js from 'xml2js';
import * as fs from 'fs';
import * as path from 'path';

// Configuration
const CONFIG = {
  sitemapUrl: 'https://homemassageubud.com/sitemap.xml',
  domain: 'homemassageubud.com',
  highPriorityPatterns: [
    '/services/',
    '/massage/',
    '/areas/',
    /\/(ubud|seminyak|canggu|sanur|kuta)/i
  ],
  delays: {
    betweenPages: 1000,   // 1 second between page scans
    betweenChecks: 200    // 200ms between link checks
  }
};

interface LinkData {
  sourceUrl: string;
  targetUrl: string;
  linkText: string;
  linkType: 'internal' | 'external' | 'image' | 'button' | 'media';
  statusCode: number | null;
  status: 'valid' | 'broken' | 'redirect' | 'warning' | 'untested';
  errorMessage?: string;
  redirectTarget?: string;
}

interface ButtonData {
  sourceUrl: string;
  buttonText: string;
  buttonType: 'whatsapp' | 'call' | 'book' | 'other';
  targetUrl: string;
  status: 'valid' | 'broken' | 'warning';
  errorMessage?: string;
}

interface AuditReport {
  timestamp: string;
  totalLinksChecked: number;
  brokenLinks: LinkData[];
  redirectLinks: LinkData[];
  externalLinks: LinkData[];
  brokenButtons: ButtonData[];
  brokenImages: LinkData[];
  seoImpact: {
    highPriority: LinkData[];
    mediumPriority: LinkData[];
    lowPriority: LinkData[];
  };
}

// Fetch and parse sitemap
async function fetchSitemap(sitemapUrl: string): Promise<string[]> {
  try {
    console.log(`📡 Fetching sitemap from ${sitemapUrl}...`);
    const response = await axios.get(sitemapUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkAuditBot/1.0)'
      },
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
    
    console.log(`✅ Found ${urls.length} URLs in sitemap`);
    return urls;
  } catch (error: any) {
    console.error('❌ Error fetching sitemap:', error.message);
    throw error;
  }
}

// Check if URL is valid and reachable
async function checkUrl(url: string, sourceUrl: string): Promise<{ status: number | null; redirect?: string; error?: string }> {
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkAuditBot/1.0)'
      },
      timeout: 15000,
      maxRedirects: 0, // Don't follow redirects automatically
      validateStatus: (status) => status < 500 // Don't throw on 4xx errors
    });
    
    return { status: response.status };
  } catch (error: any) {
    // Check if it's a redirect (3xx status)
    if (error.response && error.response.status >= 300 && error.response.status < 400) {
      const redirectLocation = error.response.headers.location;
      return { 
        status: error.response.status, 
        redirect: redirectLocation ? new URL(redirectLocation, url).href : undefined 
      };
    }
    
    // Other errors
    if (error.response) {
      return { status: error.response.status, error: error.message };
    }
    return { status: null, error: error.message };
  }
}

// Extract all links from a page
async function extractLinks(url: string): Promise<{ links: LinkData[]; buttons: ButtonData[] }> {
  try {
    console.log(`🔍 Scanning ${url}...`);
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkAuditBot/1.0)'
      },
      timeout: 30000
    });
    
    const $ = cheerio.load(response.data);
    const baseUrl = new URL(url);
    const links: LinkData[] = [];
    const buttons: ButtonData[] = [];
    
    // Extract regular anchor links
    $('a[href]').each((i, elem) => {
      const href = $(elem).attr('href');
      const text = $(elem).text().trim();
      
      if (!href || href.startsWith('#') || href.startsWith('javascript:')) {
        return; // Skip anchor links and javascript links
      }
      
      let absoluteUrl: string;
      let linkType: 'internal' | 'external';
      
      try {
        if (href.startsWith('http://') || href.startsWith('https://')) {
          absoluteUrl = href;
          linkType = new URL(href).hostname === baseUrl.hostname ? 'internal' : 'external';
        } else {
          absoluteUrl = new URL(href, url).href;
          linkType = 'internal';
        }
        
        links.push({
          sourceUrl: url,
          targetUrl: absoluteUrl,
          linkText: text,
          linkType: linkType,
          statusCode: null,
          status: 'untested'
        });
      } catch (e) {
        // Invalid URL
        links.push({
          sourceUrl: url,
          targetUrl: href,
          linkText: text,
          linkType: 'internal',
          statusCode: null,
          status: 'broken',
          errorMessage: 'Invalid URL format'
        });
      }
    });
    
    // Extract images
    $('img[src]').each((i, elem) => {
      const src = $(elem).attr('src');
      const alt = $(elem).attr('alt') || '';
      
      if (!src) return;
      
      let absoluteUrl: string;
      
      try {
        if (src.startsWith('http://') || src.startsWith('https://')) {
          absoluteUrl = src;
        } else if (src.startsWith('data:')) {
          return; // Skip data URLs
        } else {
          absoluteUrl = new URL(src, url).href;
        }
        
        links.push({
          sourceUrl: url,
          targetUrl: absoluteUrl,
          linkText: alt,
          linkType: 'image',
          statusCode: null,
          status: 'untested'
        });
      } catch (e) {
        links.push({
          sourceUrl: url,
          targetUrl: src,
          linkText: alt,
          linkType: 'image',
          statusCode: null,
          status: 'broken',
          errorMessage: 'Invalid image URL'
        });
      }
    });
    
    // Extract buttons with special actions (WhatsApp, Call, Book)
    $('a[href^="https://wa.me/"], a[href^="https://api.whatsapp.com/"]').each((i, elem) => {
      const href = $(elem).attr('href') || '';
      const text = $(elem).text().trim();
      
      buttons.push({
        sourceUrl: url,
        buttonText: text,
        buttonType: 'whatsapp',
        targetUrl: href,
        status: 'valid' // WhatsApp links are always valid if formatted correctly
      });
    });
    
    $('a[href^="tel:"]').each((i, elem) => {
      const href = $(elem).attr('href') || '';
      const text = $(elem).text().trim();
      
      buttons.push({
        sourceUrl: url,
        buttonText: text,
        buttonType: 'call',
        targetUrl: href,
        status: 'valid' // Tel links are always valid
      });
    });
    
    // Look for booking buttons
    $('a, button').each((i, elem) => {
      const text = $(elem).text().trim().toLowerCase();
      const href = $(elem).attr('href') || '';
      
      if (text.includes('book now') || text.includes('book') || text.includes('reserve')) {
        buttons.push({
          sourceUrl: url,
          buttonText: $(elem).text().trim(),
          buttonType: 'book',
          targetUrl: href,
          status: href ? 'valid' : 'broken',
          errorMessage: href ? undefined : 'No href attribute found'
        });
      }
    });
    
    return { links, buttons };
  } catch (error: any) {
    console.error(`❌ Error scanning ${url}:`, error.message);
    return { links: [], buttons: [] };
  }
}

// Check all links and categorize them
async function auditLinks(urls: string[]): Promise<AuditReport> {
  const allLinks: LinkData[] = [];
  const allButtons: ButtonData[] = [];
  
  // Extract all links from all pages
  for (const url of urls) {
    const { links, buttons } = await extractLinks(url);
    allLinks.push(...links);
    allButtons.push(...buttons);
    
    // Add delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, CONFIG.delays.betweenPages));
  }
  
  console.log(`\n📊 Total links found: ${allLinks.length}`);
  console.log(`📊 Total buttons found: ${allButtons.length}`);
  
  // Deduplicate links
  const uniqueLinks = new Map<string, LinkData>();
  allLinks.forEach(link => {
    const key = `${link.sourceUrl}|${link.targetUrl}`;
    if (!uniqueLinks.has(key)) {
      uniqueLinks.set(key, link);
    }
  });
  
  console.log(`\n🔗 Checking ${uniqueLinks.size} unique links...`);
  
  // Check each unique link
  let checked = 0;
  const linksArray = Array.from(uniqueLinks.values());
  
  for (const link of linksArray) {
    checked++;
    if (checked % 10 === 0) {
      console.log(`   Progress: ${checked}/${uniqueLinks.size} links checked...`);
    }
    
    // Skip external links for now (can be enabled but slows down significantly)
    if (link.linkType === 'external' && !link.targetUrl.includes(CONFIG.domain)) {
      link.status = 'untested';
      link.errorMessage = 'External link not tested';
      continue;
    }
    
    const result = await checkUrl(link.targetUrl, link.sourceUrl);
    link.statusCode = result.status;
    
    if (result.status === null || result.status >= 400) {
      link.status = 'broken';
      link.errorMessage = result.error || `HTTP ${result.status}`;
    } else if (result.status >= 300 && result.status < 400) {
      link.status = 'redirect';
      link.redirectTarget = result.redirect;
    } else {
      link.status = 'valid';
    }
    
    // Add small delay between checks
    await new Promise(resolve => setTimeout(resolve, CONFIG.delays.betweenChecks));
  }
  
  // Update the Map with checked links
  linksArray.forEach(link => {
    const key = `${link.sourceUrl}|${link.targetUrl}`;
    uniqueLinks.set(key, link);
  });
  
  // Get final array after all checks
  const finalLinksArray = Array.from(uniqueLinks.values());
  
  // Categorize links
  const brokenLinks = finalLinksArray.filter(l => l.status === 'broken');
  const redirectLinks = finalLinksArray.filter(l => l.status === 'redirect');
  const externalLinks = finalLinksArray.filter(l => l.linkType === 'external');
  const brokenImages = brokenLinks.filter(l => l.linkType === 'image');
  const brokenButtons = allButtons.filter(b => b.status === 'broken');
  
  // Prioritize broken links by SEO impact
  const highPriority = brokenLinks.filter(l => {
    if (l.linkType !== 'internal') return false;
    
    // Check if source is homepage
    if (l.sourceUrl.endsWith('/')) return true;
    
    // Check against high priority patterns
    return CONFIG.highPriorityPatterns.some(pattern => {
      if (typeof pattern === 'string') {
        return l.targetUrl.includes(pattern);
      } else {
        return pattern.test(l.targetUrl);
      }
    });
  });
  
  const mediumPriority = brokenLinks.filter(l => 
    l.linkType === 'external' || 
    (l.linkType === 'internal' && !highPriority.includes(l))
  );
  
  const lowPriority = brokenImages;
  
  return {
    timestamp: new Date().toISOString(),
    totalLinksChecked: finalLinksArray.length,
    brokenLinks,
    redirectLinks,
    externalLinks,
    brokenButtons,
    brokenImages,
    seoImpact: {
      highPriority,
      mediumPriority,
      lowPriority
    }
  };
}

// Generate CSV report
function generateCSVReport(report: AuditReport): string {
  let csv = 'Source URL,Broken Link (Target URL),Type,Status Code,Link Text,Priority,SEO Impact,Redirect Recommendation,Estimated Effort (hours)\n';
  
  const domainPattern = new RegExp(`https://${CONFIG.domain}`, 'g');
  
  // High priority broken links
  report.seoImpact.highPriority.forEach(link => {
    const targetPath = link.targetUrl.replace(domainPattern, '');
    const sourcePath = link.sourceUrl.replace(domainPattern, '');
    const redirectRec = targetPath.includes('/services/') ? 'Redirect to /services or homepage' : 'Redirect to homepage';
    
    csv += `"${sourcePath}","${targetPath}","${link.linkType}","${link.statusCode || 'N/A'}","${link.linkText}","High","High - Service/product page with traffic","${redirectRec}","2-4"\n`;
  });
  
  // Medium priority broken links
  report.seoImpact.mediumPriority.forEach(link => {
    const targetPath = link.targetUrl.replace(domainPattern, '');
    const sourcePath = link.sourceUrl.replace(domainPattern, '');
    
    csv += `"${sourcePath}","${targetPath}","${link.linkType}","${link.statusCode || 'N/A'}","${link.linkText}","Medium","Medium - Internal/external link","Update or remove link","1-2"\n`;
  });
  
  // Low priority (images)
  report.seoImpact.lowPriority.forEach(link => {
    const targetPath = link.targetUrl.replace(domainPattern, '');
    const sourcePath = link.sourceUrl.replace(domainPattern, '');
    
    csv += `"${sourcePath}","${targetPath}","image","${link.statusCode || 'N/A'}","${link.linkText}","Low","Low - Broken image","Replace image + add alt-text","0.5-1"\n`;
  });
  
  return csv;
}

// Generate markdown report
function generateMarkdownReport(report: AuditReport): string {
  let md = '# Link Audit Report\n\n';
  md += `**Generated:** ${new Date().toLocaleString()}\n\n`;
  md += `**Total Links Checked:** ${report.totalLinksChecked}\n\n`;
  
  md += '## Executive Summary\n\n';
  md += `- 🔴 **Broken Links:** ${report.brokenLinks.length}\n`;
  md += `- 🟡 **Redirect Links:** ${report.redirectLinks.length}\n`;
  md += `- 🔵 **External Links:** ${report.externalLinks.length}\n`;
  md += `- 🖼️ **Broken Images:** ${report.brokenImages.length}\n`;
  md += `- 🔘 **Broken Buttons:** ${report.brokenButtons.length}\n\n`;
  
  md += '## Priority Breakdown\n\n';
  md += `- 🔴 **High Priority:** ${report.seoImpact.highPriority.length} (Service/product pages with backlinks/traffic)\n`;
  md += `- 🟠 **Medium Priority:** ${report.seoImpact.mediumPriority.length} (Other internal/external links)\n`;
  md += `- 🟢 **Low Priority:** ${report.seoImpact.lowPriority.length} (Broken images)\n\n`;
  
  if (report.brokenLinks.length === 0 && report.brokenButtons.length === 0) {
    md += '## ✅ Great News!\n\n';
    md += 'No broken links or buttons were found on your website. Your site is in excellent shape!\n\n';
  }
  
  if (report.seoImpact.highPriority.length > 0) {
    md += '## 🔴 High Priority Broken Links (Immediate Action Required)\n\n';
    md += '| Source Page | Broken Link | Type | Status | Action |\n';
    md += '|------------|-------------|------|--------|--------|\n';
    
    report.seoImpact.highPriority.slice(0, 20).forEach(link => {
      const source = link.sourceUrl.replace(domainPattern, '');
      const target = link.targetUrl.replace(domainPattern, '');
      md += `| ${source} | ${target} | ${link.linkType} | ${link.statusCode || 'N/A'} | Apply 301 redirect |\n`;
    });
    
    if (report.seoImpact.highPriority.length > 20) {
      md += `\n*... and ${report.seoImpact.highPriority.length - 20} more high priority issues*\n`;
    }
    md += '\n';
  }
  
  if (report.redirectLinks.length > 0) {
    md += '## 🟡 Redirect Links (Update Recommended)\n\n';
    md += '| Source Page | Link | Redirects To | Action |\n';
    md += '|------------|------|--------------|--------|\n';
    
    report.redirectLinks.slice(0, 10).forEach(link => {
      const source = link.sourceUrl.replace(domainPattern, '');
      const target = link.targetUrl.replace(domainPattern, '');
      const redirect = link.redirectTarget ? link.redirectTarget.replace(domainPattern, '') : '';
      md += `| ${source} | ${target} | ${redirect} | Update link to final destination |\n`;
    });
    
    if (report.redirectLinks.length > 10) {
      md += `\n*... and ${report.redirectLinks.length - 10} more redirect issues*\n`;
    }
    md += '\n';
  }
  
  if (report.brokenButtons.length > 0) {
    md += '## 🔘 Broken Buttons/CTAs\n\n';
    md += '| Source Page | Button Text | Type | Issue |\n';
    md += '|------------|-------------|------|-------|\n';
    
    report.brokenButtons.forEach(button => {
      const source = button.sourceUrl.replace(domainPattern, '');
      md += `| ${source} | ${button.buttonText} | ${button.buttonType} | ${button.errorMessage || 'Unknown'} |\n`;
    });
    md += '\n';
  }
  
  if (report.brokenImages.length > 0) {
    md += '## 🖼️ Broken Images\n\n';
    md += `Found ${report.brokenImages.length} broken images. These should be:\n`;
    md += '1. Replaced with valid images\n';
    md += '2. Compressed for performance\n';
    md += '3. Given descriptive alt-text for accessibility and SEO\n\n';
  }
  
  md += '## 📋 Recommended Actions\n\n';
  md += '### Immediate (Week 1-2)\n';
  md += '- [ ] Apply 301 redirects for high-priority broken service/product pages\n';
  md += '- [ ] Fix broken WhatsApp/Call buttons\n';
  md += '- [ ] Create custom 404 page with booking CTA\n';
  md += '- [ ] Replace broken images and add alt-text\n\n';
  
  md += '### Quick Wins (Week 3-4)\n';
  md += '- [ ] Update links that redirect to their final destination\n';
  md += '- [ ] Verify/update external resort/partner links\n';
  md += '- [ ] Remove duplicate or meaningless links\n\n';
  
  md += '### Long-Term (Month 2-3)\n';
  md += '- [ ] Set up Google Search Console monitoring for new 404s\n';
  md += '- [ ] Implement monthly automated link audit\n';
  md += '- [ ] Standardize URL structure\n';
  md += '- [ ] Create link governance documentation\n\n';
  
  return md;
}

// Utility function to format timestamp for filenames
function formatTimestamp(date: Date): string {
  return date.toISOString().replace(/:/g, '-').split('.')[0];
}

// Main audit function
async function runLinkAudit() {
  const sitemapUrl = CONFIG.sitemapUrl;
  
  try {
    console.log(`🚀 Starting Link Audit for ${CONFIG.domain}\n`);
    
    // Fetch sitemap
    const urls = await fetchSitemap(sitemapUrl);
    
    // Run audit
    const report = await auditLinks(urls);
    
    // Generate reports
    const csvReport = generateCSVReport(report);
    const mdReport = generateMarkdownReport(report);
    
    // Save reports
    const outputDir = path.join(process.cwd(), 'reports');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const timestamp = formatTimestamp(new Date());
    const csvPath = path.join(outputDir, `link-audit-${timestamp}.csv`);
    const mdPath = path.join(outputDir, `link-audit-${timestamp}.md`);
    const jsonPath = path.join(outputDir, `link-audit-${timestamp}.json`);
    
    fs.writeFileSync(csvPath, csvReport);
    fs.writeFileSync(mdPath, mdReport);
    fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
    
    console.log('\n✅ Link Audit Complete!\n');
    console.log(`📄 Markdown Report: ${mdPath}`);
    console.log(`📊 CSV Report: ${csvPath}`);
    console.log(`📋 JSON Data: ${jsonPath}\n`);
    console.log('Summary:');
    console.log(`  - Total links checked: ${report.totalLinksChecked}`);
    console.log(`  - Broken links: ${report.brokenLinks.length}`);
    console.log(`  - High priority issues: ${report.seoImpact.highPriority.length}`);
    console.log(`  - Medium priority issues: ${report.seoImpact.mediumPriority.length}`);
    console.log(`  - Low priority issues: ${report.seoImpact.lowPriority.length}`);
    console.log(`  - Redirect links: ${report.redirectLinks.length}`);
    console.log(`  - Broken buttons: ${report.brokenButtons.length}`);
    
  } catch (error: any) {
    console.error('❌ Audit failed:', error.message);
    process.exit(1);
  }
}

// Run the audit
runLinkAudit();
