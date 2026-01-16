#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';

interface PageRequirements {
  wordCount: boolean;
  titleContainsHomeMassage: boolean;
  h1ContainsHomeMassage: boolean;
  metaDescriptionValid: boolean;
  hasCTA: boolean;
  hasTOC: boolean;
  hasSpiderLinks: boolean;
  hasFAQ: boolean;
  homeMassageLinksCount: number;
}

interface QAResult {
  page: string;
  passed: boolean;
  requirements: PageRequirements;
  errors: string[];
}

const homeMassagePages = [
  // Hub
  'client/src/pages/home-massage/HomeMassageHub.tsx',
  
  // Services
  'client/src/pages/home-massage/services/BalineseHomeMassage.tsx',
  'client/src/pages/home-massage/services/DeepTissueHomeMassage.tsx',
  'client/src/pages/home-massage/services/RelaxationHomeMassage.tsx',
  'client/src/pages/home-massage/services/CouplesHomeMassage.tsx',
  'client/src/pages/home-massage/services/HomeMassageServicesIndex.tsx',
  
  // Cities
  'client/src/pages/home-massage/cities/HomeMassageUbud.tsx',
  'client/src/pages/home-massage/cities/HomeMassageCanggu.tsx',
  'client/src/pages/home-massage/cities/HomeMassageSeminyak.tsx',
  'client/src/pages/home-massage/cities/HomeMassageSanur.tsx',
  'client/src/pages/home-massage/cities/HomeMassageNusaDua.tsx',
  'client/src/pages/home-massage/cities/HomeMassageCitiesIndex.tsx',
  
  // Knowledge
  'client/src/pages/home-massage/knowledge/HomeMassageSafety.tsx',
  'client/src/pages/home-massage/knowledge/HomeMassageBenefits.tsx',
  'client/src/pages/home-massage/knowledge/HomeMassageAftercare.tsx',
  'client/src/pages/home-massage/knowledge/HomeMassageWhatToExpect.tsx',
  'client/src/pages/home-massage/knowledge/HomeMassageKnowledgeIndex.tsx',
  
  // Blog
  'client/src/pages/home-massage/blog/WhatIsHomeMassage.tsx',
  'client/src/pages/home-massage/blog/HomeMassageVsSpa.tsx',
  'client/src/pages/home-massage/blog/IsHomeMassageSafe.tsx',
  'client/src/pages/home-massage/blog/HowToBookHomeMassage.tsx',
  'client/src/pages/home-massage/blog/WhyTouristsPreferHomeMassage.tsx',
  'client/src/pages/home-massage/blog/HomeMassageBlog.tsx',
];

function countWords(text: string): number {
  // Remove JSX tags and count words
  const cleanText = text
    .replace(/<[^>]*>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return cleanText.split(' ').length;
}

function analyzeHomeMassageLinks(content: string): number {
  // Count links that contain "home massage" in their text
  const linkRegex = /<Link[^>]*>(.*?)<\/Link>/gs;
  const aRegex = /<a[^>]*>(.*?)<\/a>/gs;
  let count = 0;
  
  // Check Link components
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    if (match[1].toLowerCase().includes('home massage')) {
      count++;
    }
  }
  
  // Check anchor tags
  while ((match = aRegex.exec(content)) !== null) {
    if (match[1].toLowerCase().includes('home massage')) {
      count++;
    }
  }
  
  return count;
}

function validatePage(filePath: string): QAResult {
  const fullPath = path.join(process.cwd(), filePath);
  const content = fs.readFileSync(fullPath, 'utf-8');
  const errors: string[] = [];
  
  // Extract SEOHead title
  const titleMatch = content.match(/title="([^"]*)"/);
  const title = titleMatch ? titleMatch[1] : '';
  
  // Extract meta description
  const descMatch = content.match(/description="([^"]*)"/);
  const description = descMatch ? descMatch[1] : '';
  
  // Extract H1
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
  const h1 = h1Match ? h1Match[1] : '';
  
  // Word count
  const wordCount = countWords(content);
  const wordCountValid = wordCount >= 500;
  if (!wordCountValid) {
    errors.push(`Word count is ${wordCount}, needs ≥ 500`);
  }
  
  // Title check
  const titleValid = title.toLowerCase().includes('home massage');
  if (!titleValid) {
    errors.push(`Title "${title}" does not contain "Home Massage"`);
  }
  
  // H1 check
  const h1Valid = h1.toLowerCase().includes('home massage');
  if (!h1Valid) {
    errors.push(`H1 does not contain "Home Massage"`);
  }
  
  // Meta description check
  const descValid = description.toLowerCase().includes('home massage') && 
                   (description.toLowerCase().includes('call') || 
                    description.toLowerCase().includes('whatsapp'));
  if (!descValid) {
    errors.push('Meta description must include "home massage" and "call/WhatsApp"');
  }
  
  // Component checks
  const hasTOC = content.includes('TableOfContents');
  const hasSpiderLinks = content.includes('SpiderLinksBlock');
  const hasFAQ = content.includes('HomeMassageFAQ');
  const hasCTA = content.includes('BookingCTA') || content.includes('wa.me/628112656869');
  
  if (!hasTOC) errors.push('Missing TableOfContents component');
  if (!hasSpiderLinks) errors.push('Missing SpiderLinksBlock component');
  if (!hasFAQ) errors.push('Missing HomeMassageFAQ component');
  if (!hasCTA) errors.push('Missing BookingCTA or WhatsApp CTA');
  
  // Home massage links count
  const homeMassageLinksCount = analyzeHomeMassageLinks(content);
  if (homeMassageLinksCount < 5) {
    errors.push(`Only ${homeMassageLinksCount} links with "home massage" anchor text, needs ≥ 5`);
  }
  
  const requirements: PageRequirements = {
    wordCount: wordCountValid,
    titleContainsHomeMassage: titleValid,
    h1ContainsHomeMassage: h1Valid,
    metaDescriptionValid: descValid,
    hasCTA,
    hasTOC,
    hasSpiderLinks,
    hasFAQ,
    homeMassageLinksCount,
  };
  
  return {
    page: path.basename(filePath),
    passed: errors.length === 0,
    requirements,
    errors,
  };
}

function main() {
  console.log('🔍 TOTAL MESH LINKING QA VALIDATION\n');
  console.log('=' .repeat(80));
  
  const results: QAResult[] = [];
  
  for (const pagePath of homeMassagePages) {
    const result = validatePage(pagePath);
    results.push(result);
  }
  
  // Print results
  console.log('\n📊 VALIDATION RESULTS:\n');
  
  let passedCount = 0;
  let failedCount = 0;
  
  for (const result of results) {
    if (result.passed) {
      console.log(`✅ ${result.page}`);
      passedCount++;
    } else {
      console.log(`❌ ${result.page}`);
      failedCount++;
      for (const error of result.errors) {
        console.log(`   - ${error}`);
      }
    }
  }
  
  console.log('\n' + '='.repeat(80));
  console.log(`\n📈 SUMMARY:`);
  console.log(`   Total Pages: ${results.length}`);
  console.log(`   ✅ Passed: ${passedCount}`);
  console.log(`   ❌ Failed: ${failedCount}`);
  console.log(`   Success Rate: ${((passedCount / results.length) * 100).toFixed(1)}%`);
  
  // Detailed requirements breakdown
  console.log(`\n📋 REQUIREMENTS BREAKDOWN:`);
  const reqBreakdown = {
    wordCount: 0,
    title: 0,
    h1: 0,
    meta: 0,
    toc: 0,
    spider: 0,
    faq: 0,
    cta: 0,
    links: 0,
  };
  
  for (const result of results) {
    if (result.requirements.wordCount) reqBreakdown.wordCount++;
    if (result.requirements.titleContainsHomeMassage) reqBreakdown.title++;
    if (result.requirements.h1ContainsHomeMassage) reqBreakdown.h1++;
    if (result.requirements.metaDescriptionValid) reqBreakdown.meta++;
    if (result.requirements.hasTOC) reqBreakdown.toc++;
    if (result.requirements.hasSpiderLinks) reqBreakdown.spider++;
    if (result.requirements.hasFAQ) reqBreakdown.faq++;
    if (result.requirements.hasCTA) reqBreakdown.cta++;
    if (result.requirements.homeMassageLinksCount >= 5) reqBreakdown.links++;
  }
  
  console.log(`   Word count ≥ 500: ${reqBreakdown.wordCount}/${results.length}`);
  console.log(`   Title contains "Home Massage": ${reqBreakdown.title}/${results.length}`);
  console.log(`   H1 contains "Home Massage": ${reqBreakdown.h1}/${results.length}`);
  console.log(`   Meta description valid: ${reqBreakdown.meta}/${results.length}`);
  console.log(`   Table of Contents: ${reqBreakdown.toc}/${results.length}`);
  console.log(`   Spider Links Block: ${reqBreakdown.spider}/${results.length}`);
  console.log(`   FAQ Section: ${reqBreakdown.faq}/${results.length}`);
  console.log(`   Booking CTA: ${reqBreakdown.cta}/${results.length}`);
  console.log(`   5+ "home massage" links: ${reqBreakdown.links}/${results.length}`);
  
  console.log('\n' + '='.repeat(80));
  
  if (failedCount === 0) {
    console.log('\n🎉 ALL PAGES PASS TOTAL MESH LINKING REQUIREMENTS!\n');
    process.exit(0);
  } else {
    console.log('\n⚠️  Some pages need attention. See errors above.\n');
    process.exit(1);
  }
}

main();
