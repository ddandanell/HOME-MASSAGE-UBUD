#!/usr/bin/env tsx

/**
 * Autonomous Website Intelligence + SEO Data Extraction Agent
 * 
 * Purpose: Scan https://homemassageubud.com/ and extract real facts needed
 * to build a Lymphatic Drainage Massage SEO ecosystem.
 * 
 * Output: FACTS_JSON + UNKNOWN_LIST + EXTRACTION_NOTES
 */

import axios from 'axios';
import * as cheerio from 'cheerio';
import { writeFileSync } from 'fs';
import { join } from 'path';

interface FactsJSON {
  brand: {
    name: string;
    site: string;
  };
  contacts: {
    phone: string;
    whatsapp: string;
    email: string;
    booking_url: string;
  };
  pricing: {
    currency: string;
    lymphatic_drainage: Array<{
      minutes: number;
      price: number | null;
    }>;
    notes: string;
  };
  service_areas: {
    primary: string[];
    all_mentioned: string[];
    fees_or_rules: string;
  };
  therapists: {
    claims: string[];
    languages: string[];
    count: number | null;
    notes: string;
  };
  booking: {
    channels: string[];
    requirements: string[];
    cancellation: string;
    same_day: string;
  };
  proof: {
    testimonials_claims: string[];
    positioning_claims: string[];
  };
  existing_structure: {
    urls: string[];
    services: string[];
    blog: string[];
    policies: string[];
  };
}

interface ExtractionResult {
  facts: FactsJSON;
  unknown: string[];
  notes: string[];
}

class WebsiteDataExtractor {
  private baseUrl = 'https://homemassageubud.com';
  private facts: FactsJSON;
  private unknown: string[] = [];
  private notes: string[] = [];
  private scannedUrls: Set<string> = new Set();

  constructor() {
    this.facts = this.initializeFactsStructure();
  }

  private initializeFactsStructure(): FactsJSON {
    return {
      brand: { name: '', site: this.baseUrl },
      contacts: { phone: '', whatsapp: '', email: '', booking_url: '' },
      pricing: {
        currency: 'IDR',
        lymphatic_drainage: [
          { minutes: 60, price: null },
          { minutes: 90, price: null },
          { minutes: 120, price: null }
        ],
        notes: ''
      },
      service_areas: {
        primary: [],
        all_mentioned: [],
        fees_or_rules: ''
      },
      therapists: {
        claims: [],
        languages: [],
        count: null,
        notes: ''
      },
      booking: {
        channels: [],
        requirements: [],
        cancellation: '',
        same_day: ''
      },
      proof: {
        testimonials_claims: [],
        positioning_claims: []
      },
      existing_structure: {
        urls: [],
        services: [],
        blog: [],
        policies: []
      }
    };
  }

  private async fetchPage(url: string): Promise<string> {
    try {
      console.log(`Fetching: ${url}`);
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; SEO-Data-Extractor/1.0)'
        }
      });
      this.scannedUrls.add(url);
      return response.data;
    } catch (error) {
      console.error(`Error fetching ${url}:`, error.message);
      this.notes.push(`Failed to fetch ${url}: ${error.message}`);
      return '';
    }
  }

  private extractBrandInfo($: cheerio.CheerioAPI) {
    // Extract brand name from header, title, or meta tags
    const brandName = 
      $('header .brand-name').text().trim() ||
      $('h1').first().text().trim() ||
      $('title').text().split('-')[0].trim() ||
      'Home Massage Ubud';
    
    this.facts.brand.name = brandName;
    this.notes.push(`Brand name extracted: ${brandName}`);
  }

  private extractContactInfo($: cheerio.CheerioAPI) {
    // Extract phone numbers
    const phonePatterns = [
      /\+62[\s-]?\d{3}[\s-]?\d{4}[\s-]?\d{4}/g,
      /62[\s-]?\d{3}[\s-]?\d{4}[\s-]?\d{4}/g,
      /0\d{3}[\s-]?\d{4}[\s-]?\d{4}/g
    ];

    const bodyText = $('body').text();
    
    for (const pattern of phonePatterns) {
      const matches = bodyText.match(pattern);
      if (matches && matches.length > 0) {
        this.facts.contacts.phone = matches[0].trim();
        this.facts.contacts.whatsapp = matches[0].trim();
        break;
      }
    }

    // Extract email
    const emailMatch = bodyText.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) {
      this.facts.contacts.email = emailMatch[0];
    }

    // Extract WhatsApp links
    $('a[href*="wa.me"], a[href*="whatsapp"], a[href*="api.whatsapp"]').each((_, el) => {
      const href = $(el).attr('href');
      if (href) {
        const phoneMatch = href.match(/\d{10,}/);
        if (phoneMatch && !this.facts.contacts.whatsapp) {
          this.facts.contacts.whatsapp = `+${phoneMatch[0]}`;
        }
      }
    });

    // Check for booking URL
    const bookingLink = $('a[href*="book"], a[href*="booking"]').first().attr('href');
    if (bookingLink) {
      this.facts.contacts.booking_url = bookingLink.startsWith('http') 
        ? bookingLink 
        : `${this.baseUrl}${bookingLink}`;
    }

    if (!this.facts.contacts.phone) {
      this.unknown.push('PHONE: Not found on homepage. Check Contact page.');
    }
    if (!this.facts.contacts.email) {
      this.unknown.push('EMAIL: Not found on homepage. Check Contact page.');
    }
    if (!this.facts.contacts.whatsapp) {
      this.unknown.push('WHATSAPP: Not found. Check Contact page or booking flow.');
    }
  }

  private extractPricingInfo($: cheerio.CheerioAPI) {
    const bodyText = $('body').text();
    
    // Look for "Lymphatic Drainage" with associated pricing
    const lymphaticSections = bodyText.split(/lymphatic\s+drainage/gi);
    
    // Search for pricing patterns near "Lymphatic Drainage"
    const pricePatterns = [
      /IDR\s*(\d{3}[,.]?\d{3})/gi,
      /Rp\s*(\d{3}[,.]?\d{3})/gi,
      /(\d{3})[,.](\d{3})\s*IDR/gi
    ];

    // Extract all prices mentioned
    const prices: number[] = [];
    pricePatterns.forEach(pattern => {
      const matches = bodyText.matchAll(pattern);
      for (const match of matches) {
        const priceStr = match[1].replace(/[,.]/g, '');
        const price = parseInt(priceStr, 10);
        if (price >= 300 && price <= 1000) { // Reasonable range for massage (in thousands)
          prices.push(price * 1000);
        }
      }
    });

    // Look for duration mentions (60 min, 90 min, 120 min)
    const durationPattern = /(\d+)\s*min/gi;
    const durations: number[] = [];
    const durationMatches = bodyText.matchAll(durationPattern);
    for (const match of durationMatches) {
      const duration = parseInt(match[1], 10);
      if ([60, 90, 120].includes(duration)) {
        durations.push(duration);
      }
    }

    // Try to match durations with prices if found in proximity
    if (prices.length >= 3) {
      prices.sort((a, b) => a - b);
      this.facts.pricing.lymphatic_drainage[0].price = prices[0];
      this.facts.pricing.lymphatic_drainage[1].price = prices[1];
      this.facts.pricing.lymphatic_drainage[2].price = prices[2];
      this.notes.push(`Found ${prices.length} prices for massage services`);
    } else {
      this.unknown.push('LYMPHATIC_DRAINAGE_PRICING: Could not extract specific pricing. Check /pricing or /services page.');
    }

    // Extract pricing notes
    const pricingNotes: string[] = [];
    if (bodyText.toLowerCase().includes('deposit')) {
      pricingNotes.push('Deposit may be required');
    }
    if (bodyText.toLowerCase().includes('package')) {
      pricingNotes.push('Packages available');
    }
    this.facts.pricing.notes = pricingNotes.join('; ');
  }

  private extractServiceAreas($: cheerio.CheerioAPI) {
    const bodyText = $('body').text().toLowerCase();
    
    // Common Ubud areas
    const ubudAreas = [
      'ubud', 'campuhan', 'penestanan', 'tegallalang', 'payangan',
      'petulu', 'kedewatan', 'sayan', 'monkey forest', 'nyuh kuning',
      'peliatan', 'ubud center', 'ubud centre'
    ];

    const foundAreas: string[] = [];
    ubudAreas.forEach(area => {
      if (bodyText.includes(area)) {
        foundAreas.push(area.charAt(0).toUpperCase() + area.slice(1));
      }
    });

    this.facts.service_areas.primary = ['Ubud'];
    this.facts.service_areas.all_mentioned = foundAreas.length > 0 
      ? foundAreas 
      : ['Ubud'];

    // Extract fees or rules
    if (bodyText.includes('travel fee') || bodyText.includes('additional charge')) {
      this.facts.service_areas.fees_or_rules = 'May have travel fees for distant areas';
    } else {
      this.facts.service_areas.fees_or_rules = 'No additional fees mentioned';
    }

    if (foundAreas.length === 0) {
      this.unknown.push('SERVICE_AREAS_DETAILED: Only Ubud confirmed. Check Service Areas page for complete coverage.');
    }
  }

  private extractTherapistInfo($: cheerio.CheerioAPI) {
    const bodyText = $('body').text();
    
    // Look for certification claims
    const certificationKeywords = [
      'certified', 'certification', 'trained', 'training', 'qualified',
      'professional', 'licensed', 'diploma', 'advanced', 'expert'
    ];

    const claims: string[] = [];
    certificationKeywords.forEach(keyword => {
      const regex = new RegExp(`([^.]*${keyword}[^.]*)`, 'gi');
      const matches = bodyText.match(regex);
      if (matches) {
        matches.slice(0, 3).forEach(claim => {
          const cleaned = claim.trim().substring(0, 150);
          if (cleaned.length > 20) {
            claims.push(cleaned);
          }
        });
      }
    });

    this.facts.therapists.claims = [...new Set(claims)].slice(0, 5);

    // Look for language mentions
    const languages = ['English', 'Indonesian', 'Balinese'];
    const foundLanguages: string[] = [];
    languages.forEach(lang => {
      if (bodyText.toLowerCase().includes(lang.toLowerCase())) {
        foundLanguages.push(lang);
      }
    });
    this.facts.therapists.languages = foundLanguages;

    // Try to find number of therapists
    const therapistCountMatch = bodyText.match(/(\d+)\s*therapists?/i);
    if (therapistCountMatch) {
      this.facts.therapists.count = parseInt(therapistCountMatch[1], 10);
    } else {
      this.unknown.push('THERAPIST_COUNT: Not explicitly stated. Check About or Team page.');
    }

    if (claims.length === 0) {
      this.unknown.push('THERAPIST_CERTIFICATIONS: No specific certification claims found on homepage.');
    }
  }

  private extractBookingProcess($: cheerio.CheerioAPI) {
    const bodyText = $('body').text().toLowerCase();
    
    // Identify booking channels
    const channels: string[] = [];
    if (bodyText.includes('whatsapp')) channels.push('WhatsApp');
    if (bodyText.includes('phone') || bodyText.includes('call')) channels.push('Phone');
    if (bodyText.includes('email')) channels.push('Email');
    if (bodyText.includes('form') || $('form').length > 0) channels.push('Online Form');
    
    this.facts.booking.channels = channels;

    // Extract booking requirements
    const requirements: string[] = [];
    if (bodyText.includes('advance booking') || bodyText.includes('book ahead')) {
      requirements.push('Advance booking recommended');
    }
    if (bodyText.includes('location') || bodyText.includes('address')) {
      requirements.push('Location/address required');
    }
    if (bodyText.includes('duration') || bodyText.includes('choose time')) {
      requirements.push('Duration selection');
    }
    this.facts.booking.requirements = requirements;

    // Extract cancellation policy
    const cancellationMatch = bodyText.match(/cancel[^.]{0,100}(policy|hour|free|charge|notice)[^.]*/i);
    if (cancellationMatch) {
      this.facts.booking.cancellation = cancellationMatch[0].trim().substring(0, 150);
    } else {
      this.unknown.push('CANCELLATION_POLICY: Not found on homepage. Check Terms/Policy page.');
    }

    // Check for same-day availability
    if (bodyText.includes('same day') || bodyText.includes('same-day')) {
      const sameDayMatch = bodyText.match(/same[- ]day[^.]*/i);
      if (sameDayMatch) {
        this.facts.booking.same_day = sameDayMatch[0].trim();
      } else {
        this.facts.booking.same_day = 'Same-day booking mentioned';
      }
    } else {
      this.unknown.push('SAME_DAY_AVAILABILITY: Not mentioned. Check booking page for availability rules.');
    }

    if (channels.length === 0) {
      this.unknown.push('BOOKING_CHANNELS: No clear booking methods found on homepage.');
    }
  }

  private extractProofAndPositioning($: cheerio.CheerioAPI) {
    const bodyText = $('body').text();
    
    // Look for testimonial claims
    const testimonialPatterns = [
      /(\d+)\+?\s*(five[- ]star|5[- ]star|reviews?|testimonials?)/gi,
      /(hundreds?|thousands?)\s*of\s*(reviews?|testimonials?)/gi
    ];

    const testimonialClaims: string[] = [];
    testimonialPatterns.forEach(pattern => {
      const matches = bodyText.matchAll(pattern);
      for (const match of matches) {
        testimonialClaims.push(match[0].trim());
      }
    });

    this.facts.proof.testimonials_claims = [...new Set(testimonialClaims)];

    // Extract positioning claims/differentiators
    const positioningKeywords = [
      'professional', 'certified', 'experienced', 'best', 'top',
      'premium', 'luxury', 'mobile', 'in-villa', 'at your',
      'convenient', 'trusted', 'recommended'
    ];

    const positioningClaims: string[] = [];
    positioningKeywords.forEach(keyword => {
      const regex = new RegExp(`([^.]*${keyword}[^.]*)`, 'gi');
      const matches = bodyText.match(regex);
      if (matches) {
        matches.slice(0, 2).forEach(claim => {
          const cleaned = claim.trim().substring(0, 100);
          if (cleaned.length > 20 && !claim.toLowerCase().includes('cookie')) {
            positioningClaims.push(cleaned);
          }
        });
      }
    });

    this.facts.proof.positioning_claims = [...new Set(positioningClaims)].slice(0, 10);

    if (testimonialClaims.length === 0) {
      this.unknown.push('TESTIMONIAL_COUNT: No specific testimonial count found. Check Testimonials page.');
    }
  }

  private extractExistingStructure($: cheerio.CheerioAPI) {
    // Extract all internal links
    const urls = new Set<string>();
    const services = new Set<string>();
    const blog = new Set<string>();
    const policies = new Set<string>();

    $('a[href]').each((_, el) => {
      const href = $(el).attr('href');
      if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto:')) {
        const fullUrl = href.startsWith('/') ? href : `/${href}`;
        urls.add(fullUrl);

        // Categorize URLs
        if (fullUrl.includes('/service') || fullUrl.includes('/massage') || fullUrl.includes('/treatment')) {
          services.add(fullUrl);
        } else if (fullUrl.includes('/blog') || fullUrl.includes('/article')) {
          blog.add(fullUrl);
        } else if (fullUrl.includes('/policy') || fullUrl.includes('/terms') || fullUrl.includes('/privacy')) {
          policies.add(fullUrl);
        }
      }
    });

    this.facts.existing_structure.urls = Array.from(urls).sort();
    this.facts.existing_structure.services = Array.from(services).sort();
    this.facts.existing_structure.blog = Array.from(blog).sort();
    this.facts.existing_structure.policies = Array.from(policies).sort();

    this.notes.push(`Extracted ${urls.size} internal URLs`);
    this.notes.push(`Found ${services.size} service pages, ${blog.size} blog pages`);
  }

  async scanHomepage(): Promise<void> {
    console.log('🔍 Scanning homepage...');
    const html = await this.fetchPage(this.baseUrl);
    if (!html) return;

    const $ = cheerio.load(html);
    
    this.extractBrandInfo($);
    this.extractContactInfo($);
    this.extractPricingInfo($);
    this.extractServiceAreas($);
    this.extractTherapistInfo($);
    this.extractBookingProcess($);
    this.extractProofAndPositioning($);
    this.extractExistingStructure($);
  }

  async scanServicesPage(): Promise<void> {
    console.log('🔍 Scanning services page...');
    const html = await this.fetchPage(`${this.baseUrl}/services`);
    if (!html) return;

    const $ = cheerio.load(html);
    this.extractPricingInfo($);
    this.extractExistingStructure($);
  }

  async scanPricingPage(): Promise<void> {
    console.log('🔍 Scanning pricing page...');
    const html = await this.fetchPage(`${this.baseUrl}/pricing`);
    if (!html) return;

    const $ = cheerio.load(html);
    this.extractPricingInfo($);
  }

  async scanContactPage(): Promise<void> {
    console.log('🔍 Scanning contact page...');
    const html = await this.fetchPage(`${this.baseUrl}/contact`);
    if (!html) return;

    const $ = cheerio.load(html);
    this.extractContactInfo($);
    this.extractBookingProcess($);
  }

  async scanTestimonialsPage(): Promise<void> {
    console.log('🔍 Scanning testimonials page...');
    const html = await this.fetchPage(`${this.baseUrl}/testimonials`);
    if (!html) return;

    const $ = cheerio.load(html);
    this.extractProofAndPositioning($);
  }

  async scanAboutPage(): Promise<void> {
    console.log('🔍 Scanning about page...');
    const html = await this.fetchPage(`${this.baseUrl}/about`);
    if (!html) return;

    const $ = cheerio.load(html);
    this.extractTherapistInfo($);
    this.extractProofAndPositioning($);
  }

  async scanSitemap(): Promise<void> {
    console.log('🔍 Scanning sitemap...');
    const html = await this.fetchPage(`${this.baseUrl}/sitemap.xml`);
    if (!html) return;

    // Extract all URLs from sitemap
    const urlMatches = html.matchAll(/<loc>(.*?)<\/loc>/g);
    const urls: string[] = [];
    for (const match of urlMatches) {
      urls.push(match[1]);
    }

    // Update existing structure with sitemap URLs
    const sitemapUrls = urls.map(url => url.replace(this.baseUrl, ''));
    this.facts.existing_structure.urls = [
      ...new Set([...this.facts.existing_structure.urls, ...sitemapUrls])
    ].sort();

    this.notes.push(`Found ${urls.length} URLs in sitemap`);
  }

  getResults(): ExtractionResult {
    return {
      facts: this.facts,
      unknown: this.unknown,
      notes: this.notes
    };
  }
}

async function runExtraction() {
  console.log('🚀 Starting Website Intelligence & SEO Data Extraction');
  console.log('=' .repeat(70));

  const extractor = new WebsiteDataExtractor();

  // Scan all relevant pages
  await extractor.scanHomepage();
  await new Promise(resolve => setTimeout(resolve, 1000)); // Rate limiting
  
  await extractor.scanServicesPage();
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await extractor.scanPricingPage();
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await extractor.scanContactPage();
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await extractor.scanTestimonialsPage();
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await extractor.scanAboutPage();
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await extractor.scanSitemap();

  const results = extractor.getResults();

  // Output results
  console.log('\n' + '='.repeat(70));
  console.log('📊 EXTRACTION COMPLETE');
  console.log('='.repeat(70));

  // Generate output
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const outputDir = join(process.cwd(), 'data-extraction');
  
  // Ensure directory exists
  try {
    const fs = await import('fs');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
  } catch (error) {
    console.error('Error creating directory:', error);
  }

  // Save FACTS_JSON
  const factsFile = join(outputDir, `lymphatic-drainage-facts-${timestamp}.json`);
  writeFileSync(factsFile, JSON.stringify(results.facts, null, 2), 'utf-8');
  console.log(`\n✅ FACTS_JSON saved to: ${factsFile}`);

  // Generate markdown report
  const report = generateMarkdownReport(results);
  const reportFile = join(outputDir, `extraction-report-${timestamp}.md`);
  writeFileSync(reportFile, report, 'utf-8');
  console.log(`✅ Report saved to: ${reportFile}`);

  // Display summary
  console.log('\n📋 SUMMARY:');
  console.log(`- Brand: ${results.facts.brand.name}`);
  console.log(`- Contact channels: ${results.facts.booking.channels.length}`);
  console.log(`- Service areas found: ${results.facts.service_areas.all_mentioned.length}`);
  console.log(`- Therapist claims: ${results.facts.therapists.claims.length}`);
  console.log(`- Testimonial claims: ${results.facts.proof.testimonials_claims.length}`);
  console.log(`- URLs discovered: ${results.facts.existing_structure.urls.length}`);
  console.log(`- Unknown items: ${results.unknown.length}`);
  console.log(`- Extraction notes: ${results.notes.length}`);
}

function generateMarkdownReport(results: ExtractionResult): string {
  let report = '# Lymphatic Drainage Massage - SEO Data Extraction Report\n\n';
  report += `Generated: ${new Date().toISOString()}\n\n`;
  report += '---\n\n';

  // FACTS_JSON
  report += '## 1. FACTS_JSON\n\n';
  report += '```json\n';
  report += JSON.stringify(results.facts, null, 2);
  report += '\n```\n\n';

  // UNKNOWN_LIST
  report += '## 2. UNKNOWN_LIST\n\n';
  if (results.unknown.length > 0) {
    results.unknown.forEach((item, index) => {
      report += `${index + 1}. **${item}**\n`;
    });
  } else {
    report += '*No unknown items - all data successfully extracted.*\n';
  }
  report += '\n';

  // EXTRACTION_NOTES
  report += '## 3. EXTRACTION_NOTES\n\n';
  results.notes.forEach((note, index) => {
    report += `${index + 1}. ${note}\n`;
  });
  report += '\n';

  // Quick Reference
  report += '---\n\n';
  report += '## Quick Reference\n\n';
  report += '### Pricing (for content generation)\n';
  results.facts.pricing.lymphatic_drainage.forEach(item => {
    const price = item.price ? `IDR ${item.price.toLocaleString()}` : 'UNKNOWN';
    report += `- **${item.minutes} minutes**: ${price}\n`;
  });
  report += '\n';

  report += '### Contact Information\n';
  report += `- **Phone**: ${results.facts.contacts.phone || 'UNKNOWN'}\n`;
  report += `- **WhatsApp**: ${results.facts.contacts.whatsapp || 'UNKNOWN'}\n`;
  report += `- **Email**: ${results.facts.contacts.email || 'UNKNOWN'}\n`;
  report += `- **Booking URL**: ${results.facts.contacts.booking_url || 'UNKNOWN'}\n`;
  report += '\n';

  report += '### Service Areas\n';
  results.facts.service_areas.all_mentioned.forEach(area => {
    report += `- ${area}\n`;
  });
  report += '\n';

  report += '### Booking Channels\n';
  results.facts.booking.channels.forEach(channel => {
    report += `- ${channel}\n`;
  });
  report += '\n';

  return report;
}

// Run extraction
runExtraction().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
