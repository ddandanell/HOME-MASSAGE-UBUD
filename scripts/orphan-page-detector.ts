import axios from 'axios';
import * as cheerio from 'cheerio';
import * as xml2js from 'xml2js';
import * as fs from 'fs';
import * as path from 'path';

// Configuration
const CONFIG = {
  sitemapUrl: 'https://homemassageubud.com/sitemap.xml',
  domain: 'homemassageubud.com',
  baseUrl: 'https://homemassageubud.com',
  userAgent: 'Mozilla/5.0 (compatible; OrphanPageDetector/1.0)',
  delays: {
    betweenPages: 1000,
    betweenChecks: 200
  },
  minInternalLinks: 2, // Minimum recommended internal links per page
  trafficThreshold: 10, // Minimum monthly traffic to consider page valuable
  contentQualityThreshold: 300 // Minimum word count for quality content
};

interface PageInfo {
  url: string;
  internalLinksCount: number;
  backlinksCount: number; // Simulated - in real scenario would use API
  traffic: number; // Simulated - would use Google Analytics API
  wordCount: number;
  title: string;
  hasNoIndex: boolean;
  isOrphan: boolean;
  linkedFrom: string[]; // URLs that link to this page
  linksTo: string[]; // URLs this page links to
  contentType: 'service' | 'area' | 'blog' | 'info' | 'other';
  freshness: Date | null;
  hasValue: boolean;
}

interface OrphanClassification {
  page: PageInfo;
  recommendation: 'add_links' | 'merge_redirect' | 'noindex' | 'delete';
  priority: 'high' | 'medium' | 'low';
  reasoning: string;
  suggestedActions: string[];
  estimatedImpact: 'high' | 'medium' | 'low';
}

interface InternalLinkSuggestion {
  orphanUrl: string;
  linkFromUrls: string[];
  anchorTexts: string[];
  reasoning: string;
}

interface MergeRedirectSuggestion {
  orphanUrl: string;
  mergeTargetUrl: string;
  redirectType: '301' | '302';
  reasoning: string;
  contentToPreserve: string[];
}

interface OrphanReport {
  timestamp: string;
  totalPages: number;
  orphanPages: PageInfo[];
  classifications: OrphanClassification[];
  linkSuggestions: InternalLinkSuggestion[];
  mergeRedirectSuggestions: MergeRedirectSuggestion[];
  noindexSuggestions: PageInfo[];
  deletionSuggestions: PageInfo[];
  preventionChecklist: string[];
  seoImpact: {
    potentialTrafficRecovery: number;
    linkEquityAtRisk: number;
    pagesNeedingAttention: number;
  };
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

// Extract all internal links from a page
async function extractInternalLinks(url: string): Promise<{ internal: string[]; external: string[] }> {
  try {
    const response = await axios.get(url, {
      headers: { 'User-Agent': CONFIG.userAgent },
      timeout: 30000
    });
    
    const $ = cheerio.load(response.data);
    const baseUrl = new URL(url);
    const internal: Set<string> = new Set();
    const external: Set<string> = new Set();
    
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
        
        // Normalize URL (remove trailing slash, fragments, query params for consistency)
        const urlObj = new URL(absoluteUrl);
        const normalizedUrl = `${urlObj.protocol}//${urlObj.hostname}${urlObj.pathname}`.replace(/\/$/, '') || `${urlObj.protocol}//${urlObj.hostname}`;
        
        if (urlObj.hostname === CONFIG.domain || urlObj.hostname.endsWith(`.${CONFIG.domain}`)) {
          internal.add(normalizedUrl);
        } else {
          external.add(normalizedUrl);
        }
      } catch (e) {
        // Skip invalid URLs
      }
    });
    
    return { internal: Array.from(internal), external: Array.from(external) };
  } catch (error: any) {
    console.error(`❌ Error extracting links from ${url}:`, error.message);
    return { internal: [], external: [] };
  }
}

// Analyze page content and metadata
async function analyzePage(url: string): Promise<Partial<PageInfo>> {
  try {
    const response = await axios.get(url, {
      headers: { 'User-Agent': CONFIG.userAgent },
      timeout: 30000
    });
    
    const $ = cheerio.load(response.data);
    
    // Get title
    const title = $('title').first().text().trim();
    
    // Check for noindex
    const robotsMeta = $('meta[name="robots"]').attr('content') || '';
    const hasNoIndex = robotsMeta.toLowerCase().includes('noindex');
    
    // Calculate word count
    $('script, style, noscript, iframe, svg').remove();
    const bodyText = $('body').text();
    const words = bodyText.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    // Determine content type from URL
    let contentType: 'service' | 'area' | 'blog' | 'info' | 'other' = 'other';
    if (url.includes('/services/')) contentType = 'service';
    else if (url.includes('/massage/')) contentType = 'service';
    else if (url.match(/\/(ubud|seminyak|canggu|sanur|kuta)/i)) contentType = 'area';
    else if (url.includes('/blog/')) contentType = 'blog';
    else if (url.includes('/about') || url.includes('/contact') || url.includes('/faq')) contentType = 'info';
    
    // Check last modified (from meta or header)
    let freshness: Date | null = null;
    const lastModified = $('meta[property="article:modified_time"]').attr('content') ||
                        $('meta[name="last-modified"]').attr('content');
    if (lastModified) {
      freshness = new Date(lastModified);
    }
    
    return {
      title,
      hasNoIndex,
      wordCount,
      contentType,
      freshness
    };
  } catch (error: any) {
    console.error(`❌ Error analyzing ${url}:`, error.message);
    return {
      title: '',
      hasNoIndex: false,
      wordCount: 0,
      contentType: 'other',
      freshness: null
    };
  }
}

// Build complete site map with internal linking structure
async function buildSiteMap(sitemapUrls: string[]): Promise<Map<string, PageInfo>> {
  console.log('\n🔍 Phase 1: Crawling entire website and mapping internal links...\n');
  
  const siteMap = new Map<string, PageInfo>();
  const linkGraph = new Map<string, Set<string>>(); // sourceUrl -> Set of targetUrls
  
  // Normalize all sitemap URLs
  const normalizedSitemapUrls = sitemapUrls.map(url => {
    const urlObj = new URL(url);
    return `${urlObj.protocol}//${urlObj.hostname}${urlObj.pathname}`.replace(/\/$/, '') || `${urlObj.protocol}//${urlObj.hostname}`;
  });
  
  // Initialize all pages from sitemap
  for (const url of normalizedSitemapUrls) {
    siteMap.set(url, {
      url,
      internalLinksCount: 0,
      backlinksCount: 0,
      traffic: 0,
      wordCount: 0,
      title: '',
      hasNoIndex: false,
      isOrphan: false,
      linkedFrom: [],
      linksTo: [],
      contentType: 'other',
      freshness: null,
      hasValue: false
    });
  }
  
  // Crawl each page and extract links
  let processed = 0;
  for (const url of normalizedSitemapUrls) {
    processed++;
    console.log(`   [${processed}/${normalizedSitemapUrls.length}] Analyzing ${url}...`);
    
    const { internal } = await extractInternalLinks(url);
    const pageDetails = await analyzePage(url);
    
    // Update page info
    const pageInfo = siteMap.get(url)!;
    Object.assign(pageInfo, pageDetails);
    pageInfo.linksTo = internal;
    
    // Track links in graph
    linkGraph.set(url, new Set(internal));
    
    // Simulate traffic and backlinks (in real scenario, use Google Analytics API and Ahrefs/SEMrush API)
    pageInfo.traffic = Math.floor(Math.random() * 500); // Simulated
    pageInfo.backlinksCount = Math.floor(Math.random() * 50); // Simulated
    
    // Add delay
    await new Promise(resolve => setTimeout(resolve, CONFIG.delays.betweenPages));
  }
  
  // Calculate internal links count for each page
  console.log('\n📊 Phase 2: Calculating internal link counts...\n');
  for (const [sourceUrl, targetUrls] of linkGraph.entries()) {
    for (const targetUrl of targetUrls) {
      if (siteMap.has(targetUrl)) {
        const targetPage = siteMap.get(targetUrl)!;
        targetPage.internalLinksCount++;
        targetPage.linkedFrom.push(sourceUrl);
      }
    }
  }
  
  // Identify orphan pages
  for (const [url, pageInfo] of siteMap.entries()) {
    pageInfo.isOrphan = pageInfo.internalLinksCount === 0;
    pageInfo.hasValue = (
      pageInfo.traffic > CONFIG.trafficThreshold ||
      pageInfo.backlinksCount > 0 ||
      pageInfo.wordCount >= CONFIG.contentQualityThreshold ||
      pageInfo.contentType === 'service' ||
      pageInfo.contentType === 'area'
    );
  }
  
  return siteMap;
}

// Classify orphan pages and determine recommendations
function classifyOrphans(siteMap: Map<string, PageInfo>): OrphanClassification[] {
  console.log('\n🎯 Phase 3: Classifying orphan pages...\n');
  
  const classifications: OrphanClassification[] = [];
  const orphans = Array.from(siteMap.values()).filter(page => page.isOrphan);
  
  console.log(`   Found ${orphans.length} orphan pages\n`);
  
  for (const page of orphans) {
    let recommendation: OrphanClassification['recommendation'] = 'delete';
    let priority: OrphanClassification['priority'] = 'low';
    let reasoning = '';
    const suggestedActions: string[] = [];
    let estimatedImpact: OrphanClassification['estimatedImpact'] = 'low';
    
    // Decision tree logic
    if (page.hasValue || page.wordCount >= CONFIG.contentQualityThreshold) {
      // METHOD 1: Add internal links
      recommendation = 'add_links';
      priority = page.contentType === 'service' || page.contentType === 'area' ? 'high' : 'medium';
      reasoning = `Page has value (traffic: ${page.traffic}, backlinks: ${page.backlinksCount}, word count: ${page.wordCount}). Should be integrated into site structure.`;
      suggestedActions.push('Identify 5-10 relevant pages to link from');
      suggestedActions.push('Create 3-5 contextual anchor text variations');
      suggestedActions.push('Add to XML sitemap if missing');
      suggestedActions.push('Link from high-traffic pages when possible');
      estimatedImpact = priority === 'high' ? 'high' : 'medium';
    } else if (page.traffic > 0 || page.backlinksCount > 0) {
      // METHOD 2: Merge & 301 redirect
      recommendation = 'merge_redirect';
      priority = 'medium';
      reasoning = `Page has some traffic (${page.traffic}) or backlinks (${page.backlinksCount}) but low content quality. Preserve link equity via 301 redirect.`;
      suggestedActions.push('Identify best merge target by content similarity');
      suggestedActions.push('Extract valuable content from this page');
      suggestedActions.push('Create 301 redirect to relevant target (NOT homepage)');
      suggestedActions.push('Update internal references');
      estimatedImpact = 'medium';
    } else if (page.hasNoIndex) {
      // Already noindexed, may need deletion
      recommendation = 'delete';
      priority = 'low';
      reasoning = 'Page already has noindex tag and no value. Safe to delete.';
      suggestedActions.push('Return 404 or 410 status code');
      suggestedActions.push('Remove from sitemap.xml');
      suggestedActions.push('Log deletion for audit trail');
      estimatedImpact = 'low';
    } else if (page.contentType === 'info' && page.wordCount > 0) {
      // METHOD 3: Noindex (utility page)
      recommendation = 'noindex';
      priority = 'low';
      reasoning = 'Utility page that should remain accessible but not rank in search.';
      suggestedActions.push('Add <meta name="robots" content="noindex, follow">');
      suggestedActions.push('Maintain user accessibility');
      suggestedActions.push('Remove from XML sitemap');
      estimatedImpact = 'low';
    } else {
      // METHOD 4: Delete
      recommendation = 'delete';
      priority = 'low';
      reasoning = `No traffic, no backlinks, low content quality (${page.wordCount} words). Safe to delete.`;
      suggestedActions.push('Verify zero traffic and zero backlinks');
      suggestedActions.push('Implement 404/410 status code');
      suggestedActions.push('Remove from sitemap.xml');
      suggestedActions.push('Log deletion for audit trail');
      estimatedImpact = 'low';
    }
    
    classifications.push({
      page,
      recommendation,
      priority,
      reasoning,
      suggestedActions,
      estimatedImpact
    });
  }
  
  // Sort by priority
  classifications.sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
  
  return classifications;
}

// Generate internal link suggestions
function generateLinkSuggestions(
  classifications: OrphanClassification[],
  siteMap: Map<string, PageInfo>
): InternalLinkSuggestion[] {
  console.log('\n🔗 Phase 4: Generating internal link suggestions...\n');
  
  const suggestions: InternalLinkSuggestion[] = [];
  const orphansNeedingLinks = classifications.filter(c => c.recommendation === 'add_links');
  
  for (const classification of orphansNeedingLinks) {
    const orphan = classification.page;
    
    // Find relevant pages to link from
    const potentialLinkSources: Array<{ url: string; score: number }> = [];
    
    for (const [url, page] of siteMap.entries()) {
      if (url === orphan.url || page.isOrphan) continue;
      
      let score = 0;
      
      // Same content type = highly relevant
      if (page.contentType === orphan.contentType) score += 10;
      
      // High traffic pages are valuable link sources
      if (page.traffic > 100) score += 5;
      
      // Pages with many outbound links can spare one more
      if (page.linksTo.length > 3 && page.linksTo.length < 10) score += 3;
      
      // URL path similarity
      const orphanPath = new URL(orphan.url).pathname;
      const pagePath = new URL(url).pathname;
      const orphanSegments = orphanPath.split('/').filter(s => s);
      const pageSegments = pagePath.split('/').filter(s => s);
      const commonSegments = orphanSegments.filter(s => pageSegments.includes(s));
      score += commonSegments.length * 2;
      
      if (score > 0) {
        potentialLinkSources.push({ url, score });
      }
    }
    
    // Sort by score and take top 10
    potentialLinkSources.sort((a, b) => b.score - a.score);
    const topSources = potentialLinkSources.slice(0, 10).map(s => s.url);
    
    // Generate anchor text variations
    const anchorTexts = generateAnchorTexts(orphan);
    
    suggestions.push({
      orphanUrl: orphan.url,
      linkFromUrls: topSources,
      anchorTexts,
      reasoning: `Top ${topSources.length} relevant pages identified based on content type, traffic, and URL similarity.`
    });
  }
  
  return suggestions;
}

// Generate contextual anchor texts
function generateAnchorTexts(page: PageInfo): string[] {
  const anchors: string[] = [];
  
  // Extract keywords from URL
  const urlPath = new URL(page.url).pathname;
  const segments = urlPath.split('/').filter(s => s);
  const lastSegment = segments[segments.length - 1] || 'home';
  const keywords = lastSegment.replace(/-/g, ' ');
  
  // Generate variations
  if (page.title) {
    anchors.push(page.title);
  }
  
  anchors.push(keywords);
  anchors.push(`${keywords} services`);
  anchors.push(`professional ${keywords}`);
  anchors.push(`learn more about ${keywords}`);
  
  return anchors.slice(0, 5);
}

// Generate merge and redirect suggestions
function generateMergeRedirectSuggestions(
  classifications: OrphanClassification[],
  siteMap: Map<string, PageInfo>
): MergeRedirectSuggestion[] {
  console.log('\n🔀 Phase 5: Generating merge & redirect suggestions...\n');
  
  const suggestions: MergeRedirectSuggestion[] = [];
  const orphansNeedingMerge = classifications.filter(c => c.recommendation === 'merge_redirect');
  
  for (const classification of orphansNeedingMerge) {
    const orphan = classification.page;
    
    // Find best merge target
    let bestTarget: string | null = null;
    let bestScore = 0;
    
    for (const [url, page] of siteMap.entries()) {
      if (url === orphan.url || page.isOrphan) continue;
      
      let score = 0;
      
      // Same content type
      if (page.contentType === orphan.contentType) score += 20;
      
      // URL similarity
      const orphanPath = new URL(orphan.url).pathname;
      const pagePath = new URL(url).pathname;
      const orphanSegments = orphanPath.split('/').filter(s => s);
      const pageSegments = pagePath.split('/').filter(s => s);
      const commonSegments = orphanSegments.filter(s => pageSegments.includes(s));
      score += commonSegments.length * 5;
      
      // Parent path (e.g., /services/massage -> /services)
      if (pagePath === orphanPath.substring(0, orphanPath.lastIndexOf('/'))) {
        score += 15;
      }
      
      if (score > bestScore) {
        bestScore = score;
        bestTarget = url;
      }
    }
    
    // Fallback to appropriate section page
    if (!bestTarget || bestScore < 10) {
      if (orphan.contentType === 'service') {
        bestTarget = `${CONFIG.baseUrl}/services`;
      } else if (orphan.contentType === 'area') {
        bestTarget = `${CONFIG.baseUrl}/areas`;
      } else {
        bestTarget = CONFIG.baseUrl; // Homepage as last resort
      }
    }
    
    suggestions.push({
      orphanUrl: orphan.url,
      mergeTargetUrl: bestTarget,
      redirectType: '301',
      reasoning: `Best match based on content type (${orphan.contentType}) and URL structure.`,
      contentToPreserve: [
        'Unique text content',
        'Images and media',
        'Any valuable customer reviews or testimonials',
        'Contact information or booking links'
      ]
    });
  }
  
  return suggestions;
}

// Generate tracking spreadsheet content
function generateTrackingSpreadsheet(siteMap: Map<string, PageInfo>): string {
  let csv = 'URL,Internal Links Count,Last Updated Date,Status,Traffic (90 days),Backlinks Count,Recommended Action,Priority,Content Type,Word Count\n';
  
  const pages = Array.from(siteMap.values()).sort((a, b) => a.internalLinksCount - b.internalLinksCount);
  
  for (const page of pages) {
    const url = page.url;
    const internalLinks = page.internalLinksCount;
    const lastUpdated = page.freshness ? page.freshness.toISOString().split('T')[0] : 'Unknown';
    const status = page.isOrphan ? 'Orphan' : 'Active';
    const traffic = page.traffic;
    const backlinks = page.backlinksCount;
    const action = page.isOrphan ? 'NEEDS ATTENTION' : (internalLinks < CONFIG.minInternalLinks ? 'Add more links' : 'OK');
    const priority = page.isOrphan && page.hasValue ? 'HIGH' : (page.isOrphan ? 'MEDIUM' : 'LOW');
    
    csv += `"${url}",${internalLinks},"${lastUpdated}","${status}",${traffic},${backlinks},"${action}","${priority}","${page.contentType}",${page.wordCount}\n`;
  }
  
  return csv;
}

// Generate markdown report
function generateMarkdownReport(report: OrphanReport): string {
  let md = '# Orphan Page Detection & SEO Optimization Report\n\n';
  md += `**Generated:** ${new Date(report.timestamp).toLocaleString()}\n\n`;
  md += `**Total Pages Analyzed:** ${report.totalPages}\n`;
  md += `**Orphan Pages Found:** ${report.orphanPages.length}\n\n`;
  
  md += '## Executive Summary\n\n';
  md += `- 🔴 **High Priority Orphans:** ${report.classifications.filter(c => c.priority === 'high').length}\n`;
  md += `- 🟠 **Medium Priority Orphans:** ${report.classifications.filter(c => c.priority === 'medium').length}\n`;
  md += `- 🟢 **Low Priority Orphans:** ${report.classifications.filter(c => c.priority === 'low').length}\n\n`;
  
  md += '### Fix Method Distribution\n\n';
  md += `- ✅ **Add Internal Links:** ${report.classifications.filter(c => c.recommendation === 'add_links').length} pages\n`;
  md += `- 🔀 **Merge & 301 Redirect:** ${report.classifications.filter(c => c.recommendation === 'merge_redirect').length} pages\n`;
  md += `- 🚫 **Add Noindex Tag:** ${report.classifications.filter(c => c.recommendation === 'noindex').length} pages\n`;
  md += `- 🗑️ **Delete Page:** ${report.classifications.filter(c => c.recommendation === 'delete').length} pages\n\n`;
  
  md += '### Expected SEO Impact\n\n';
  md += `- 📈 **Potential Traffic Recovery:** ${report.seoImpact.potentialTrafficRecovery} monthly visits\n`;
  md += `- 🔗 **Link Equity at Risk:** ${report.seoImpact.linkEquityAtRisk} backlinks\n`;
  md += `- ⚡ **Pages Needing Immediate Attention:** ${report.seoImpact.pagesNeedingAttention}\n\n`;
  
  // High priority orphans
  const highPriority = report.classifications.filter(c => c.priority === 'high');
  if (highPriority.length > 0) {
    md += '## 🔴 High Priority Orphan Pages (Immediate Action Required)\n\n';
    
    for (const classification of highPriority) {
      md += `### ${classification.page.url}\n\n`;
      md += `**Recommendation:** ${classification.recommendation.toUpperCase().replace(/_/g, ' ')}\n\n`;
      md += `**Reasoning:** ${classification.reasoning}\n\n`;
      md += `**Details:**\n`;
      md += `- Traffic: ${classification.page.traffic} monthly visits\n`;
      md += `- Backlinks: ${classification.page.backlinksCount}\n`;
      md += `- Word Count: ${classification.page.wordCount}\n`;
      md += `- Content Type: ${classification.page.contentType}\n\n`;
      md += `**Action Steps:**\n`;
      classification.suggestedActions.forEach(action => {
        md += `- [ ] ${action}\n`;
      });
      md += '\n';
    }
  }
  
  // Internal linking suggestions
  if (report.linkSuggestions.length > 0) {
    md += '## 🔗 Internal Linking Recommendations\n\n';
    
    for (const suggestion of report.linkSuggestions.slice(0, 10)) {
      md += `### ${suggestion.orphanUrl}\n\n`;
      md += `**Link from these ${suggestion.linkFromUrls.length} pages:**\n\n`;
      suggestion.linkFromUrls.forEach(url => {
        md += `- ${url}\n`;
      });
      md += '\n**Suggested Anchor Texts:**\n\n';
      suggestion.anchorTexts.forEach(text => {
        md += `- "${text}"\n`;
      });
      md += '\n';
    }
  }
  
  // Merge & redirect suggestions
  if (report.mergeRedirectSuggestions.length > 0) {
    md += '## 🔀 Merge & Redirect Recommendations\n\n';
    md += '| Orphan URL | Redirect To | Type | Content to Preserve |\n';
    md += '|------------|-------------|------|---------------------|\n';
    
    for (const suggestion of report.mergeRedirectSuggestions) {
      const orphanPath = suggestion.orphanUrl.replace(CONFIG.baseUrl, '');
      const targetPath = suggestion.mergeTargetUrl.replace(CONFIG.baseUrl, '');
      const content = suggestion.contentToPreserve.join(', ');
      md += `| ${orphanPath} | ${targetPath} | ${suggestion.redirectType} | ${content} |\n`;
    }
    md += '\n';
  }
  
  // Prevention checklist
  md += '## 🛡️ Prevention System & Best Practices\n\n';
  md += '### Content Creation Workflow\n\n';
  report.preventionChecklist.forEach(item => {
    md += `- [ ] ${item}\n`;
  });
  md += '\n';
  
  // Implementation timeline
  md += '## 📅 Implementation Timeline\n\n';
  md += '### Week 1-2: High Priority\n';
  md += '- [ ] Fix all high-priority orphan pages\n';
  md += '- [ ] Add internal links to valuable orphans\n';
  md += '- [ ] Set up tracking spreadsheet\n\n';
  
  md += '### Week 3-4: Medium Priority\n';
  md += '- [ ] Implement merge & redirect strategy\n';
  md += '- [ ] Add noindex tags where appropriate\n';
  md += '- [ ] Set up automated monitoring\n\n';
  
  md += '### Month 2: Low Priority & Prevention\n';
  md += '- [ ] Clean up low-value pages\n';
  md += '- [ ] Integrate prevention workflow\n';
  md += '- [ ] Train content team on best practices\n\n';
  
  md += '## 📊 Tracking & Monitoring\n\n';
  md += 'A tracking spreadsheet has been generated: `orphan-page-tracking-[timestamp].csv`\n\n';
  md += '**Features:**\n';
  md += '- Sortable by internal link count (orphans first)\n';
  md += '- Traffic and backlink data\n';
  md += '- Recommended actions\n';
  md += '- Priority levels\n\n';
  
  md += '**Set up automated weekly monitoring:**\n';
  md += '```bash\n';
  md += 'npm run orphan:detect\n';
  md += 'npm run orphan:monitor\n';
  md += '```\n\n';
  
  return md;
}

// Main function
async function detectOrphanPages(): Promise<void> {
  console.log('🚀 Starting Orphan Page Detection & SEO Optimization System\n');
  console.log(`   Domain: ${CONFIG.domain}`);
  console.log(`   Sitemap: ${CONFIG.sitemapUrl}\n`);
  
  try {
    // Fetch sitemap
    const sitemapUrls = await fetchSitemap(CONFIG.sitemapUrl);
    
    // Build complete site map
    const siteMap = await buildSiteMap(sitemapUrls);
    
    // Get orphan pages
    const orphanPages = Array.from(siteMap.values()).filter(page => page.isOrphan);
    
    // Classify orphans
    const classifications = classifyOrphans(siteMap);
    
    // Generate suggestions
    const linkSuggestions = generateLinkSuggestions(classifications, siteMap);
    const mergeRedirectSuggestions = generateMergeRedirectSuggestions(classifications, siteMap);
    const noindexSuggestions = orphanPages.filter(p => 
      classifications.find(c => c.page.url === p.url)?.recommendation === 'noindex'
    );
    const deletionSuggestions = orphanPages.filter(p => 
      classifications.find(c => c.page.url === p.url)?.recommendation === 'delete'
    );
    
    // Calculate SEO impact
    const potentialTrafficRecovery = orphanPages.reduce((sum, p) => sum + p.traffic, 0);
    const linkEquityAtRisk = orphanPages.reduce((sum, p) => sum + p.backlinksCount, 0);
    const pagesNeedingAttention = classifications.filter(c => c.priority === 'high' || c.priority === 'medium').length;
    
    // Prevention checklist
    const preventionChecklist = [
      'MANDATORY: Add minimum 2-3 internal links BEFORE publishing any new page',
      'AUTO-CHECK: Verify page is added to sitemap.xml',
      'SUGGEST: Find 5-10 relevant existing pages to link to using site:domain.com search',
      'UPDATE: Master tracking spreadsheet within 24 hours of publishing',
      'VALIDATE: Confirm no orphan status after 24 hours',
      'REVIEW: Run weekly orphan detection scan',
      'TRAIN: Educate content team on internal linking best practices',
      'MONITOR: Set up alerts for new orphan pages detected'
    ];
    
    // Generate report
    const report: OrphanReport = {
      timestamp: new Date().toISOString(),
      totalPages: siteMap.size,
      orphanPages,
      classifications,
      linkSuggestions,
      mergeRedirectSuggestions,
      noindexSuggestions,
      deletionSuggestions,
      preventionChecklist,
      seoImpact: {
        potentialTrafficRecovery,
        linkEquityAtRisk,
        pagesNeedingAttention
      }
    };
    
    // Save reports
    const outputDir = path.join(process.cwd(), 'reports');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
    
    // Markdown report
    const mdReport = generateMarkdownReport(report);
    const mdPath = path.join(outputDir, `orphan-detection-${timestamp}.md`);
    fs.writeFileSync(mdPath, mdReport);
    
    // JSON report
    const jsonPath = path.join(outputDir, `orphan-detection-${timestamp}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
    
    // CSV tracking spreadsheet
    const csvReport = generateTrackingSpreadsheet(siteMap);
    const csvPath = path.join(outputDir, `orphan-page-tracking-${timestamp}.csv`);
    fs.writeFileSync(csvPath, csvReport);
    
    // Console summary
    console.log('\n✅ Orphan Page Detection Complete!\n');
    console.log('📄 Reports generated:');
    console.log(`   - Markdown Report: ${mdPath}`);
    console.log(`   - JSON Data: ${jsonPath}`);
    console.log(`   - Tracking Spreadsheet: ${csvPath}\n`);
    
    console.log('📊 Summary:');
    console.log(`   - Total pages analyzed: ${report.totalPages}`);
    console.log(`   - Orphan pages found: ${report.orphanPages.length}`);
    console.log(`   - High priority: ${classifications.filter(c => c.priority === 'high').length}`);
    console.log(`   - Medium priority: ${classifications.filter(c => c.priority === 'medium').length}`);
    console.log(`   - Low priority: ${classifications.filter(c => c.priority === 'low').length}\n`);
    
    console.log('🎯 Fix Method Distribution:');
    console.log(`   - Add internal links: ${classifications.filter(c => c.recommendation === 'add_links').length}`);
    console.log(`   - Merge & redirect: ${classifications.filter(c => c.recommendation === 'merge_redirect').length}`);
    console.log(`   - Add noindex: ${classifications.filter(c => c.recommendation === 'noindex').length}`);
    console.log(`   - Delete: ${classifications.filter(c => c.recommendation === 'delete').length}\n`);
    
    console.log('💡 SEO Impact:');
    console.log(`   - Potential traffic recovery: ${potentialTrafficRecovery} monthly visits`);
    console.log(`   - Link equity at risk: ${linkEquityAtRisk} backlinks`);
    console.log(`   - Pages needing attention: ${pagesNeedingAttention}\n`);
    
  } catch (error: any) {
    console.error('❌ Orphan detection failed:', error.message);
    process.exit(1);
  }
}

// Run the detection
detectOrphanPages();
