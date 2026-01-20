#!/usr/bin/env tsx

/**
 * Keyword Density Validator
 * 
 * Validates keyword usage across the full assembled page:
 * - Calculates exact match density for each keyword
 * - Identifies variation patterns
 * - Checks against density caps
 * - Provides recommendations
 * - Generates detailed reports
 */

import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';

// ============================================================================
// TYPES
// ============================================================================

interface KeywordAnalysis {
  keyword: string;
  exactMatches: number;
  variations: string[];
  variationCount: number;
  density: number;
  locations: string[];
  recommendation: 'GOOD' | 'WARNING' | 'DANGER';
  message: string;
}

interface DensityReport {
  totalWords: number;
  totalKeywords: number;
  overallDensity: number;
  densityCap: number;
  status: 'PASS' | 'FAIL';
  keywords: KeywordAnalysis[];
  recommendations: string[];
}

interface PageConfig {
  primary_keywords: string[];
  keyword_targets: {
    exact_match_per_keyword: { min: number; max: number };
    partial_variations_per_keyword: { min: number; max: number };
    overall_density_cap: number;
  };
}

// ============================================================================
// TEXT EXTRACTION
// ============================================================================

function extractTextFromHTML(html: string): string {
  const $ = cheerio.load(html);
  
  // Remove script and style tags
  $('script, style, nav, header, footer').remove();
  
  // Get main content text
  const text = $('body').text();
  
  // Clean up whitespace
  return text.replace(/\s+/g, ' ').trim();
}

// ============================================================================
// KEYWORD ANALYSIS
// ============================================================================

function analyzeKeyword(
  keyword: string,
  text: string,
  html: string,
  config: PageConfig
): KeywordAnalysis {
  const keywordLower = keyword.toLowerCase();
  const textLower = text.toLowerCase();
  
  // Count exact matches
  const exactRegex = new RegExp(`\\b${escapeRegex(keywordLower)}\\b`, 'gi');
  const exactMatches = (textLower.match(exactRegex) || []).length;
  
  // Find variations
  const variations = findKeywordVariations(keyword, textLower);
  const variationCount = variations.reduce((sum, v) => sum + v.count, 0);
  
  // Calculate density
  const wordCount = text.split(/\s+/).length;
  const totalMentions = exactMatches + variationCount;
  const density = (totalMentions / wordCount) * 100;
  
  // Find locations
  const locations = findKeywordLocations(keyword, html);
  
  // Determine recommendation
  const targets = config.keyword_targets;
  let recommendation: 'GOOD' | 'WARNING' | 'DANGER' = 'GOOD';
  let message = '';
  
  if (exactMatches < targets.exact_match_per_keyword.min) {
    recommendation = 'WARNING';
    message = `Only ${exactMatches} exact matches (target: ${targets.exact_match_per_keyword.min}-${targets.exact_match_per_keyword.max})`;
  } else if (exactMatches > targets.exact_match_per_keyword.max) {
    recommendation = 'DANGER';
    message = `Too many exact matches: ${exactMatches} (max: ${targets.exact_match_per_keyword.max})`;
  } else if (density > targets.overall_density_cap) {
    recommendation = 'DANGER';
    message = `Density ${density.toFixed(2)}% exceeds cap ${targets.overall_density_cap}%`;
  } else {
    message = `Perfect: ${exactMatches} exact matches, ${variationCount} variations`;
  }
  
  return {
    keyword,
    exactMatches,
    variations: variations.map(v => `${v.text} (${v.count}x)`),
    variationCount,
    density,
    locations,
    recommendation,
    message
  };
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function findKeywordVariations(keyword: string, text: string): Array<{ text: string; count: number }> {
  const words = keyword.toLowerCase().split(' ');
  const variations: Map<string, number> = new Map();
  
  // Look for variations with different word order or additional words
  const patterns = [
    // "massage to hotel" -> "massage to hotel in", "massage to your hotel"
    `${keyword} (in|at|for|to)`,
    `(best|top|professional) ${keyword}`,
    // Split and recombine
    ...generateWordCombinations(words)
  ];
  
  patterns.forEach(pattern => {
    const regex = new RegExp(pattern, 'gi');
    const matches = text.match(regex) || [];
    matches.forEach(match => {
      const normalized = match.toLowerCase().trim();
      if (normalized !== keyword.toLowerCase()) {
        variations.set(normalized, (variations.get(normalized) || 0) + 1);
      }
    });
  });
  
  return Array.from(variations.entries())
    .map(([text, count]) => ({ text, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10); // Top 10 variations
}

function generateWordCombinations(words: string[]): string[] {
  if (words.length < 2) return [];
  
  const combinations: string[] = [];
  
  // Add patterns with words in different order
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j) {
        combinations.push(`${words[i]}.*${words[j]}`);
      }
    }
  }
  
  return combinations;
}

function findKeywordLocations(keyword: string, html: string): string[] {
  const $ = cheerio.load(html);
  const locations: string[] = [];
  const keywordLower = keyword.toLowerCase();
  
  // Check H1
  $('h1').each((_, el) => {
    if ($(el).text().toLowerCase().includes(keywordLower)) {
      locations.push('H1');
    }
  });
  
  // Check H2s
  $('h2').each((_, el) => {
    if ($(el).text().toLowerCase().includes(keywordLower)) {
      locations.push('H2');
    }
  });
  
  // Check title
  if ($('title').text().toLowerCase().includes(keywordLower)) {
    locations.push('Title');
  }
  
  // Check meta description
  if ($('meta[name="description"]').attr('content')?.toLowerCase().includes(keywordLower)) {
    locations.push('Meta Description');
  }
  
  // Check first paragraph
  const firstP = $('p').first().text().toLowerCase();
  if (firstP.includes(keywordLower)) {
    locations.push('First Paragraph');
  }
  
  return locations;
}

// ============================================================================
// REPORT GENERATION
// ============================================================================

function generateDensityReport(
  html: string,
  config: PageConfig
): DensityReport {
  const text = extractTextFromHTML(html);
  const wordCount = text.split(/\s+/).length;
  
  console.log(`\n📊 Analyzing ${wordCount.toLocaleString()} words...`);
  
  // Analyze each keyword
  const keywordAnalyses: KeywordAnalysis[] = [];
  let totalKeywordMentions = 0;
  
  config.primary_keywords.forEach(keyword => {
    console.log(`   Analyzing: "${keyword}"`);
    const analysis = analyzeKeyword(keyword, text, html, config);
    keywordAnalyses.push(analysis);
    totalKeywordMentions += analysis.exactMatches + analysis.variationCount;
  });
  
  // Calculate overall density
  const overallDensity = (totalKeywordMentions / wordCount) * 100;
  const densityCap = config.keyword_targets.overall_density_cap;
  
  // Determine status
  const hasErrors = keywordAnalyses.some(k => k.recommendation === 'DANGER');
  const status = !hasErrors && overallDensity <= densityCap ? 'PASS' : 'FAIL';
  
  // Generate recommendations
  const recommendations: string[] = [];
  
  if (overallDensity > densityCap) {
    recommendations.push(`Overall density ${overallDensity.toFixed(2)}% exceeds cap ${densityCap}%`);
    recommendations.push(`Reduce keyword usage or increase content length`);
  }
  
  keywordAnalyses.forEach(analysis => {
    if (analysis.recommendation === 'DANGER') {
      recommendations.push(`"${analysis.keyword}": ${analysis.message}`);
    } else if (analysis.recommendation === 'WARNING') {
      recommendations.push(`"${analysis.keyword}": ${analysis.message}`);
    }
  });
  
  if (recommendations.length === 0) {
    recommendations.push('All keyword densities are within acceptable ranges');
    recommendations.push('Page is optimized for natural search engine ranking');
  }
  
  return {
    totalWords: wordCount,
    totalKeywords: totalKeywordMentions,
    overallDensity,
    densityCap,
    status,
    keywords: keywordAnalyses,
    recommendations
  };
}

function printReport(report: DensityReport): void {
  console.log('\n' + '='.repeat(70));
  console.log('KEYWORD DENSITY VALIDATION REPORT');
  console.log('='.repeat(70));
  
  console.log(`\n📄 Page Statistics:`);
  console.log(`   Total words: ${report.totalWords.toLocaleString()}`);
  console.log(`   Total keyword mentions: ${report.totalKeywords}`);
  console.log(`   Overall density: ${report.overallDensity.toFixed(2)}%`);
  console.log(`   Density cap: ${report.densityCap}%`);
  console.log(`   Status: ${report.status === 'PASS' ? '✅ PASS' : '❌ FAIL'}`);
  
  console.log(`\n🔍 Keyword Analysis:`);
  report.keywords.forEach(keyword => {
    const icon = keyword.recommendation === 'GOOD' ? '✅' : 
                 keyword.recommendation === 'WARNING' ? '⚠️' : '❌';
    console.log(`\n   ${icon} "${keyword.keyword}"`);
    console.log(`      Exact matches: ${keyword.exactMatches}`);
    console.log(`      Variations: ${keyword.variationCount}`);
    console.log(`      Density: ${keyword.density.toFixed(2)}%`);
    console.log(`      Locations: ${keyword.locations.join(', ') || 'None'}`);
    console.log(`      Status: ${keyword.message}`);
    if (keyword.variations.length > 0) {
      console.log(`      Top variations: ${keyword.variations.slice(0, 3).join(', ')}`);
    }
  });
  
  console.log(`\n💡 Recommendations:`);
  report.recommendations.forEach(rec => {
    console.log(`   • ${rec}`);
  });
  
  console.log('\n' + '='.repeat(70));
}

// ============================================================================
// MAIN VALIDATION FUNCTION
// ============================================================================

async function validateKeywordDensity(contentDir: string): Promise<void> {
  console.log('🔍 Keyword Density Validator');
  console.log('='.repeat(60));
  
  // Load config
  const planPath = path.join(contentDir, 'generation_plan.json');
  if (!fs.existsSync(planPath)) {
    throw new Error(`Generation plan not found: ${planPath}`);
  }
  
  const plan = JSON.parse(fs.readFileSync(planPath, 'utf8'));
  const config: PageConfig = plan.config;
  
  // Load assembled HTML
  const htmlPath = path.join(contentDir, '7_landing_page.html');
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Assembled HTML not found: ${htmlPath}\nRun content-assembler.ts first.`);
  }
  
  const html = fs.readFileSync(htmlPath, 'utf8');
  
  // Generate report
  const report = generateDensityReport(html, config);
  
  // Print report
  printReport(report);
  
  // Save report
  const reportPath = path.join(contentDir, 'keyword_density_report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  const csvPath = path.join(contentDir, 'keyword_density_report.csv');
  const csv = generateCSVReport(report);
  fs.writeFileSync(csvPath, csv);
  
  console.log(`\n📁 Reports saved:`);
  console.log(`   JSON: ${reportPath}`);
  console.log(`   CSV: ${csvPath}`);
  
  // Exit with error if validation failed
  if (report.status === 'FAIL') {
    console.log(`\n❌ Validation FAILED. Fix issues and run again.`);
    process.exit(1);
  } else {
    console.log(`\n✅ Validation PASSED. Page is ready for deployment.`);
  }
}

function generateCSVReport(report: DensityReport): string {
  let csv = 'Keyword,Exact Matches,Variations,Total,Density,Status,Message,Locations\n';
  
  report.keywords.forEach(k => {
    const total = k.exactMatches + k.variationCount;
    csv += `"${k.keyword}",${k.exactMatches},${k.variationCount},${total},${k.density.toFixed(2)}%,${k.recommendation},"${k.message}","${k.locations.join('; ')}"\n`;
  });
  
  return csv;
}

// ============================================================================
// CLI
// ============================================================================

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('Usage: tsx keyword-density-validator.ts <content-directory>');
    console.log('');
    console.log('Example:');
    console.log('  tsx scripts/keyword-density-validator.ts generated-content/massage-to-hotel');
    process.exit(1);
  }
  
  const contentDir = args[0];
  
  if (!fs.existsSync(contentDir)) {
    console.error(`Error: Content directory not found: ${contentDir}`);
    process.exit(1);
  }
  
  await validateKeywordDensity(contentDir);
}

if (require.main === module) {
  main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

export { validateKeywordDensity, generateDensityReport };
