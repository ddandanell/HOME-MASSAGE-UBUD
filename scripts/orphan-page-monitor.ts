import axios from 'axios';
import * as cheerio from 'cheerio';
import * as xml2js from 'xml2js';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Orphan Page Monitoring System
 * 
 * This script runs automated weekly scans to detect NEW orphan pages
 * and sends alerts when orphans are detected.
 */

// Configuration
const CONFIG = {
  sitemapUrl: 'https://homemassageubud.com/sitemap.xml',
  domain: 'homemassageubud.com',
  userAgent: 'Mozilla/5.0 (compatible; OrphanPageMonitor/1.0)',
  alertThreshold: 0, // Alert if any new orphans are found
  historyFile: 'reports/orphan-history.json',
  delays: {
    betweenPages: 1000
  }
};

interface MonitoringResult {
  timestamp: string;
  totalPages: number;
  orphanPages: string[];
  newOrphans: string[];
  resolvedOrphans: string[];
  alerts: string[];
}

interface HistoryRecord {
  timestamp: string;
  orphanPages: string[];
}

// Fetch and parse sitemap
async function fetchSitemap(sitemapUrl: string): Promise<string[]> {
  try {
    console.log(`📡 Fetching sitemap from ${sitemapUrl}...`);
    const response = await axios.get(sitemapUrl, {
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
    
    console.log(`✅ Found ${urls.length} URLs in sitemap`);
    return urls;
  } catch (error: any) {
    console.error('❌ Error fetching sitemap:', error.message);
    throw error;
  }
}

// Quick check for internal links
async function countInternalLinks(url: string, allUrls: Set<string>): Promise<number> {
  try {
    const response = await axios.get(url, {
      headers: { 'User-Agent': CONFIG.userAgent },
      timeout: 30000
    });
    
    const $ = cheerio.load(response.data);
    let count = 0;
    
    $('a[href]').each((i, elem) => {
      const href = $(elem).attr('href');
      
      if (!href || href.startsWith('#') || href.startsWith('javascript:') || 
          href.startsWith('tel:') || href.startsWith('mailto:')) {
        return;
      }
      
      try {
        let absoluteUrl: string;
        
        if (href.startsWith('http://') || href.startsWith('https://')) {
          absoluteUrl = href;
        } else {
          absoluteUrl = new URL(href, url).href;
        }
        
        // Normalize URL
        const urlObj = new URL(absoluteUrl);
        const normalizedUrl = `${urlObj.protocol}//${urlObj.hostname}${urlObj.pathname}`.replace(/\/$/, '') || `${urlObj.protocol}//${urlObj.hostname}`;
        
        if (allUrls.has(normalizedUrl)) {
          count++;
        }
      } catch (e) {
        // Skip invalid URLs
      }
    });
    
    return count;
  } catch (error: any) {
    console.error(`❌ Error checking ${url}:`, error.message);
    return 0;
  }
}

// Load previous scan history
function loadHistory(): HistoryRecord[] {
  const historyPath = path.join(process.cwd(), CONFIG.historyFile);
  
  if (fs.existsSync(historyPath)) {
    try {
      const content = fs.readFileSync(historyPath, 'utf-8');
      return JSON.parse(content);
    } catch (error) {
      console.warn('⚠️ Could not load history file, starting fresh');
      return [];
    }
  }
  
  return [];
}

// Save scan history
function saveHistory(history: HistoryRecord[]): void {
  const historyPath = path.join(process.cwd(), CONFIG.historyFile);
  const outputDir = path.dirname(historyPath);
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(historyPath, JSON.stringify(history, null, 2));
}

// Detect orphan pages with quick scan
async function quickOrphanScan(urls: string[]): Promise<Map<string, number>> {
  console.log('\n🔍 Scanning for orphan pages...\n');
  
  // Normalize URLs
  const normalizedUrls = urls.map(url => {
    const urlObj = new URL(url);
    return `${urlObj.protocol}//${urlObj.hostname}${urlObj.pathname}`.replace(/\/$/, '') || `${urlObj.protocol}//${urlObj.hostname}`;
  });
  
  const urlSet = new Set(normalizedUrls);
  const internalLinkCounts = new Map<string, number>();
  
  // Initialize counts
  normalizedUrls.forEach(url => {
    internalLinkCounts.set(url, 0);
  });
  
  // Build link graph
  const linkGraph = new Map<string, string[]>();
  
  let processed = 0;
  for (const url of normalizedUrls) {
    processed++;
    console.log(`   [${processed}/${normalizedUrls.length}] Scanning ${url}...`);
    
    try {
      const response = await axios.get(url, {
        headers: { 'User-Agent': CONFIG.userAgent },
        timeout: 30000
      });
      
      const $ = cheerio.load(response.data);
      const links: string[] = [];
      
      $('a[href]').each((i, elem) => {
        const href = $(elem).attr('href');
        
        if (!href || href.startsWith('#') || href.startsWith('javascript:') || 
            href.startsWith('tel:') || href.startsWith('mailto:') ||
            href.startsWith('whatsapp:') || href.startsWith('https://wa.me/') ||
            href.startsWith('https://api.whatsapp.com/')) {
          return;
        }
        
        try {
          let absoluteUrl: string;
          
          if (href.startsWith('http://') || href.startsWith('https://')) {
            absoluteUrl = href;
          } else {
            absoluteUrl = new URL(href, url).href;
          }
          
          const urlObj = new URL(absoluteUrl);
          const normalizedUrl = `${urlObj.protocol}//${urlObj.hostname}${urlObj.pathname}`.replace(/\/$/, '') || `${urlObj.protocol}//${urlObj.hostname}`;
          
          if (urlSet.has(normalizedUrl)) {
            links.push(normalizedUrl);
          }
        } catch (e) {
          // Skip invalid URLs
        }
      });
      
      linkGraph.set(url, links);
    } catch (error: any) {
      console.error(`   ❌ Error scanning ${url}:`, error.message);
    }
    
    await new Promise(resolve => setTimeout(resolve, CONFIG.delays.betweenPages));
  }
  
  // Calculate internal link counts
  console.log('\n📊 Calculating internal link counts...\n');
  for (const [sourceUrl, targetUrls] of linkGraph.entries()) {
    for (const targetUrl of targetUrls) {
      if (internalLinkCounts.has(targetUrl)) {
        internalLinkCounts.set(targetUrl, internalLinkCounts.get(targetUrl)! + 1);
      }
    }
  }
  
  return internalLinkCounts;
}

// Generate alert message
function generateAlertMessage(result: MonitoringResult): string {
  let message = '🚨 ORPHAN PAGE ALERT 🚨\n\n';
  
  if (result.newOrphans.length > 0) {
    message += `⚠️ ${result.newOrphans.length} NEW ORPHAN PAGE(S) DETECTED!\n\n`;
    message += 'New orphans:\n';
    result.newOrphans.forEach(url => {
      message += `  - ${url}\n`;
    });
    message += '\n';
  }
  
  if (result.resolvedOrphans.length > 0) {
    message += `✅ ${result.resolvedOrphans.length} orphan page(s) resolved!\n\n`;
    message += 'Resolved orphans:\n';
    result.resolvedOrphans.forEach(url => {
      message += `  - ${url}\n`;
    });
    message += '\n';
  }
  
  message += `Total orphan pages: ${result.orphanPages.length}\n`;
  message += `Total pages in sitemap: ${result.totalPages}\n\n`;
  
  message += 'Action Required:\n';
  message += '1. Review new orphan pages immediately\n';
  message += '2. Add internal links from relevant pages\n';
  message += '3. Run full orphan detection: npm run orphan:detect\n';
  message += '4. Update tracking spreadsheet\n\n';
  
  return message;
}

// Send alert (can be extended to email, Slack, etc.)
function sendAlert(message: string): void {
  console.log('\n' + '='.repeat(60));
  console.log(message);
  console.log('='.repeat(60) + '\n');
  
  // Save alert to file
  const alertPath = path.join(process.cwd(), 'reports', `orphan-alert-${new Date().toISOString().replace(/:/g, '-').split('.')[0]}.txt`);
  fs.writeFileSync(alertPath, message);
  console.log(`📝 Alert saved to: ${alertPath}\n`);
  
  // TODO: Integrate with email service or Slack webhook
  // Example:
  // await sendEmail({ to: 'admin@example.com', subject: 'Orphan Page Alert', body: message });
  // await sendSlackMessage({ channel: '#seo-alerts', text: message });
}

// Main monitoring function
async function monitorOrphanPages(): Promise<void> {
  console.log('🔍 Starting Orphan Page Monitoring System\n');
  console.log(`   Domain: ${CONFIG.domain}`);
  console.log(`   Sitemap: ${CONFIG.sitemapUrl}\n`);
  
  try {
    // Fetch sitemap
    const sitemapUrls = await fetchSitemap(CONFIG.sitemapUrl);
    
    // Quick orphan scan
    const linkCounts = await quickOrphanScan(sitemapUrls);
    
    // Identify current orphans
    const currentOrphans: string[] = [];
    linkCounts.forEach((count, url) => {
      if (count === 0) {
        currentOrphans.push(url);
      }
    });
    
    // Load history
    const history = loadHistory();
    const previousOrphans = history.length > 0 ? history[history.length - 1].orphanPages : [];
    
    // Compare with previous scan
    const newOrphans = currentOrphans.filter(url => !previousOrphans.includes(url));
    const resolvedOrphans = previousOrphans.filter(url => !currentOrphans.includes(url));
    
    // Generate alerts
    const alerts: string[] = [];
    
    if (newOrphans.length > CONFIG.alertThreshold) {
      alerts.push(`${newOrphans.length} new orphan page(s) detected`);
    }
    
    if (resolvedOrphans.length > 0) {
      alerts.push(`${resolvedOrphans.length} orphan page(s) resolved`);
    }
    
    // Create result
    const result: MonitoringResult = {
      timestamp: new Date().toISOString(),
      totalPages: sitemapUrls.length,
      orphanPages: currentOrphans,
      newOrphans,
      resolvedOrphans,
      alerts
    };
    
    // Update history
    history.push({
      timestamp: result.timestamp,
      orphanPages: currentOrphans
    });
    
    // Keep only last 30 scans
    if (history.length > 30) {
      history.shift();
    }
    
    saveHistory(history);
    
    // Save result
    const outputDir = path.join(process.cwd(), 'reports');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
    const resultPath = path.join(outputDir, `orphan-monitor-${timestamp}.json`);
    fs.writeFileSync(resultPath, JSON.stringify(result, null, 2));
    
    // Generate and save summary report
    let summary = '# Orphan Page Monitoring Report\n\n';
    summary += `**Scan Date:** ${new Date(result.timestamp).toLocaleString()}\n\n`;
    summary += `**Total Pages:** ${result.totalPages}\n`;
    summary += `**Current Orphans:** ${result.orphanPages.length}\n`;
    summary += `**New Orphans:** ${result.newOrphans.length}\n`;
    summary += `**Resolved Orphans:** ${result.resolvedOrphans.length}\n\n`;
    
    if (result.orphanPages.length > 0) {
      summary += '## Current Orphan Pages\n\n';
      result.orphanPages.forEach(url => {
        summary += `- ${url}\n`;
      });
      summary += '\n';
    }
    
    if (result.newOrphans.length > 0) {
      summary += '## 🆕 New Orphan Pages (Since Last Scan)\n\n';
      result.newOrphans.forEach(url => {
        summary += `- ⚠️ ${url}\n`;
      });
      summary += '\n';
    }
    
    if (result.resolvedOrphans.length > 0) {
      summary += '## ✅ Resolved Orphan Pages\n\n';
      result.resolvedOrphans.forEach(url => {
        summary += `- ${url}\n`;
      });
      summary += '\n';
    }
    
    summary += '## Historical Trend\n\n';
    summary += '| Scan Date | Orphan Count |\n';
    summary += '|-----------|-------------|\n';
    history.slice(-10).forEach(record => {
      const date = new Date(record.timestamp).toLocaleDateString();
      summary += `| ${date} | ${record.orphanPages.length} |\n`;
    });
    summary += '\n';
    
    const summaryPath = path.join(outputDir, `orphan-monitor-${timestamp}.md`);
    fs.writeFileSync(summaryPath, summary);
    
    // Console output
    console.log('\n✅ Monitoring Scan Complete!\n');
    console.log(`📊 Results:`);
    console.log(`   - Total pages: ${result.totalPages}`);
    console.log(`   - Current orphans: ${result.orphanPages.length}`);
    console.log(`   - New orphans: ${result.newOrphans.length}`);
    console.log(`   - Resolved orphans: ${result.resolvedOrphans.length}\n`);
    
    console.log(`📄 Reports saved:`);
    console.log(`   - JSON: ${resultPath}`);
    console.log(`   - Summary: ${summaryPath}\n`);
    
    // Send alert if needed
    if (alerts.length > 0) {
      const alertMessage = generateAlertMessage(result);
      sendAlert(alertMessage);
    } else {
      console.log('✅ No alerts triggered - all pages properly linked!\n');
    }
    
  } catch (error: any) {
    console.error('❌ Monitoring failed:', error.message);
    process.exit(1);
  }
}

// Run monitoring
monitorOrphanPages();
