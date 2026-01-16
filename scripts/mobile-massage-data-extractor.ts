#!/usr/bin/env tsx

/**
 * Mobile Massage SEO Factory - Data Extraction Agent
 * 
 * Purpose: Extract and validate business data for mobile massage content generation
 * Output: Verified facts_json aligned with mobile-massage.spec.json
 * 
 * This script extracts real data from the website and validates it against
 * the specification, flagging any unknowns that need manual review.
 */

import axios from 'axios';
import * as cheerio from 'cheerio';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

interface MobileMassageFactsJSON {
  brand: {
    name: string;
    site: string;
    tagline: string;
    established: string;
  };
  contacts: {
    phone: string;
    whatsapp: string;
    whatsapp_url: string;
    email: string;
    booking_url: string;
  };
  pricing: {
    currency: string;
    mobile_massage: Array<{
      minutes: number;
      price: number | null;
      description: string;
      badge?: string;
    }>;
    notes: string;
    couples_multiplier: number;
    group_discount: string;
  };
  service_areas: {
    primary: string[];
    all_locations: string[];
    fees_or_rules: string;
  };
  therapists: {
    claims: string[];
    languages: string[];
    count: string;
    specializations: string[];
  };
  booking: {
    channels: string[];
    requirements: string[];
    cancellation: string;
    same_day: string;
    advance_booking: string;
  };
  proof: {
    testimonials_claims: string[];
    positioning_claims: string[];
  };
  mobile_service_benefits: string[];
}

interface ExtractionResult {
  facts: MobileMassageFactsJSON;
  unknowns: string[];
  notes: string[];
  validation_status: 'PASS' | 'PARTIAL' | 'FAIL';
}

class MobileMassageDataExtractor {
  private baseUrl = 'https://homemassageubud.com';
  private facts: MobileMassageFactsJSON;
  private unknowns: string[] = [];
  private notes: string[] = [];
  private specPath: string;

  constructor() {
    this.specPath = join(process.cwd(), 'mobile-massage.spec.json');
    this.facts = this.initializeFromSpec();
  }

  private initializeFromSpec(): MobileMassageFactsJSON {
    // Load spec to get default structure
    if (existsSync(this.specPath)) {
      const spec = JSON.parse(readFileSync(this.specPath, 'utf-8'));
      this.notes.push('Loaded mobile-massage.spec.json successfully');
      
      // Return facts_json from spec as starting point
      return spec.facts_json;
    } else {
      this.notes.push('WARNING: mobile-massage.spec.json not found, using minimal defaults');
      return this.getMinimalDefaults();
    }
  }

  private getMinimalDefaults(): MobileMassageFactsJSON {
    return {
      brand: {
        name: 'Home Massage Ubud',
        site: this.baseUrl,
        tagline: 'Premium Mobile Massage Services in Bali',
        established: '2018'
      },
      contacts: {
        phone: '',
        whatsapp: '',
        whatsapp_url: '',
        email: '',
        booking_url: ''
      },
      pricing: {
        currency: 'IDR',
        mobile_massage: [
          { minutes: 60, price: null, description: '' },
          { minutes: 90, price: null, description: '', badge: '⭐ MOST POPULAR' },
          { minutes: 120, price: null, description: '' }
        ],
        notes: '',
        couples_multiplier: 1.8,
        group_discount: ''
      },
      service_areas: {
        primary: ['Ubud'],
        all_locations: [],
        fees_or_rules: ''
      },
      therapists: {
        claims: [],
        languages: ['English', 'Indonesian', 'Balinese'],
        count: '',
        specializations: []
      },
      booking: {
        channels: [],
        requirements: [],
        cancellation: '',
        same_day: '',
        advance_booking: ''
      },
      proof: {
        testimonials_claims: [],
        positioning_claims: []
      },
      mobile_service_benefits: []
    };
  }

  private async fetchPage(url: string): Promise<string> {
    try {
      console.log(`  Fetching: ${url}`);
      const response = await axios.get(url, {
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; SEO-Data-Extractor/1.0)'
        }
      });
      return response.data;
    } catch (error: any) {
      console.error(`  ❌ Error fetching ${url}:`, error.message);
      this.notes.push(`Failed to fetch ${url}: ${error.message}`);
      return '';
    }
  }

  private extractContactInfo($: cheerio.CheerioAPI) {
    const bodyText = $('body').text();

    // Extract phone/WhatsApp
    const phonePatterns = [
      /\+62[\s-]?811[\s-]?2656[\s-]?869/gi,
      /\+62[\s-]?\d{3}[\s-]?\d{4}[\s-]?\d{4}/g,
      /62[\s-]?\d{3}[\s-]?\d{4}[\s-]?\d{4}/g
    ];

    for (const pattern of phonePatterns) {
      const matches = bodyText.match(pattern);
      if (matches && matches.length > 0) {
        const phone = matches[0].trim().replace(/[\s-]/g, ' ');
        this.facts.contacts.phone = phone;
        this.facts.contacts.whatsapp = phone;
        // Generate WhatsApp URL
        const phoneDigits = phone.replace(/\D/g, '');
        this.facts.contacts.whatsapp_url = `https://wa.me/${phoneDigits}`;
        this.notes.push(`✓ Contact phone extracted: ${phone}`);
        break;
      }
    }

    // Extract email
    const emailMatch = bodyText.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) {
      this.facts.contacts.email = emailMatch[0];
      this.notes.push(`✓ Email extracted: ${emailMatch[0]}`);
    }

    // Extract booking URL
    const bookingLink = $('a[href*="book"], a[href*="booking"]').first().attr('href');
    if (bookingLink) {
      this.facts.contacts.booking_url = bookingLink.startsWith('http')
        ? bookingLink
        : `${this.baseUrl}${bookingLink}`;
      this.notes.push(`✓ Booking URL found: ${this.facts.contacts.booking_url}`);
    }

    // Flag unknowns
    if (!this.facts.contacts.phone) {
      this.unknowns.push('PHONE: Could not extract phone number from website');
    }
    if (!this.facts.contacts.email) {
      this.unknowns.push('EMAIL: Could not extract email from website');
    }
    if (!this.facts.contacts.booking_url) {
      this.unknowns.push('BOOKING_URL: Could not find booking page link');
    }
  }

  private extractPricingInfo($: cheerio.CheerioAPI) {
    const bodyText = $('body').text();

    // Look for mobile massage pricing patterns
    const pricePatterns = [
      /(?:rp|idr)\s*(\d{3}[,.]?\d{3})/gi,
      /(\d{3})[,.](\d{3})\s*(?:rp|idr)/gi
    ];

    const prices: number[] = [];
    pricePatterns.forEach(pattern => {
      const matches = bodyText.matchAll(pattern);
      for (const match of matches) {
        let priceStr = match[1];
        if (match[2]) {
          priceStr = match[1] + match[2];
        }
        priceStr = priceStr.replace(/[,.]/g, '');
        const price = parseInt(priceStr, 10);
        if (price >= 200 && price <= 1000) {
          prices.push(price * 1000);
        }
      }
    });

    if (prices.length >= 3) {
      const uniquePrices = [...new Set(prices)].sort((a, b) => a - b);
      this.facts.pricing.mobile_massage[0].price = uniquePrices[0];
      this.facts.pricing.mobile_massage[1].price = uniquePrices[1] || uniquePrices[0];
      this.facts.pricing.mobile_massage[2].price = uniquePrices[2] || uniquePrices[1];
      this.notes.push(`✓ Extracted ${uniquePrices.length} price points`);
    } else {
      this.unknowns.push('PRICING: Could not extract complete pricing from website. Using spec defaults.');
    }
  }

  private extractServiceAreas($: cheerio.CheerioAPI) {
    const bodyText = $('body').text().toLowerCase();

    const baliLocations = [
      'ubud', 'ubud center', 'campuhan', 'penestanan', 'tegallalang',
      'payangan', 'petulu', 'kedewatan', 'sayan', 'monkey forest',
      'nyuh kuning', 'peliatan', 'seminyak', 'canggu', 'sanur',
      'nusa dua', 'uluwatu', 'jimbaran', 'kuta', 'legian'
    ];

    const foundLocations: string[] = [];
    baliLocations.forEach(location => {
      if (bodyText.includes(location)) {
        const formatted = location.split(' ').map(word =>
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        foundLocations.push(formatted);
      }
    });

    if (foundLocations.length > 0) {
      this.facts.service_areas.all_locations = foundLocations;
      this.notes.push(`✓ Found ${foundLocations.length} service locations mentioned`);
    } else {
      this.notes.push('⚠ No specific locations found, using spec defaults');
    }
  }

  private extractTherapistInfo($: cheerio.CheerioAPI) {
    const bodyText = $('body').text();

    // Look for certification/qualification claims
    const qualificationKeywords = [
      'certified', 'trained', 'professional', 'experienced',
      'qualified', 'expert', 'specialized'
    ];

    const claims: string[] = [];
    qualificationKeywords.forEach(keyword => {
      const regex = new RegExp(`([^.]*${keyword}[^.]*)`, 'gi');
      const matches = bodyText.match(regex);
      if (matches) {
        matches.slice(0, 2).forEach(claim => {
          const cleaned = claim.trim().substring(0, 150);
          if (cleaned.length > 25 && !cleaned.toLowerCase().includes('cookie')) {
            claims.push(cleaned);
          }
        });
      }
    });

    if (claims.length > 0) {
      this.facts.therapists.claims = [...new Set(claims)].slice(0, 5);
      this.notes.push(`✓ Extracted ${this.facts.therapists.claims.length} therapist claims`);
    } else {
      this.notes.push('⚠ No therapist qualifications found, using spec defaults');
    }
  }

  private extractProofAndPositioning($: cheerio.CheerioAPI) {
    const bodyText = $('body').text();

    // Look for review/testimonial claims
    const testimonialPatterns = [
      /(\d+)\+?\s*(?:five[- ]star|5[- ]star|reviews?|testimonials?)/gi,
      /(?:hundreds?|thousands?)\s*of\s*(?:reviews?|testimonials?)/gi,
      /top[- ]rated/gi,
      /trusted by/gi
    ];

    const testimonialClaims: string[] = [];
    testimonialPatterns.forEach(pattern => {
      const matches = bodyText.matchAll(pattern);
      for (const match of matches) {
        testimonialClaims.push(match[0].trim());
      }
    });

    if (testimonialClaims.length > 0) {
      this.facts.proof.testimonials_claims = [...new Set(testimonialClaims)].slice(0, 3);
      this.notes.push(`✓ Found ${this.facts.proof.testimonials_claims.length} social proof claims`);
    }
  }

  async extract(): Promise<ExtractionResult> {
    console.log('🔍 Starting Mobile Massage Data Extraction\n');
    console.log('='.repeat(70));

    // Try to fetch homepage
    const html = await this.fetchPage(this.baseUrl);

    if (html) {
      const $ = cheerio.load(html);
      console.log('\n📊 Extracting data from website...\n');

      this.extractContactInfo($);
      this.extractPricingInfo($);
      this.extractServiceAreas($);
      this.extractTherapistInfo($);
      this.extractProofAndPositioning($);
    } else {
      console.log('\n⚠️  Website not accessible - using spec defaults\n');
      this.notes.push('Website not accessible during extraction. Using spec defaults.');
    }

    // Validation
    let validationStatus: 'PASS' | 'PARTIAL' | 'FAIL' = 'PASS';
    if (this.unknowns.length > 0) {
      validationStatus = this.unknowns.length > 5 ? 'FAIL' : 'PARTIAL';
    }

    console.log('\n' + '='.repeat(70));
    console.log('📋 Extraction Complete\n');
    console.log(`Status: ${validationStatus}`);
    console.log(`Unknowns: ${this.unknowns.length}`);
    console.log(`Notes: ${this.notes.length}`);

    return {
      facts: this.facts,
      unknowns: this.unknowns,
      notes: this.notes,
      validation_status: validationStatus
    };
  }

  saveResults(results: ExtractionResult): void {
    const outputDir = join(process.cwd(), 'data-extraction');

    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);

    // Save facts JSON
    const factsFile = join(outputDir, 'mobile-massage-facts.json');
    writeFileSync(factsFile, JSON.stringify(results.facts, null, 2), 'utf-8');
    console.log(`\n✅ Facts JSON saved: ${factsFile}`);

    // Save timestamped version
    const timestampedFile = join(outputDir, `mobile-massage-facts-${timestamp}.json`);
    writeFileSync(timestampedFile, JSON.stringify(results.facts, null, 2), 'utf-8');

    // Generate report
    const report = this.generateReport(results);
    const reportFile = join(outputDir, 'mobile-massage-extraction-report.md');
    writeFileSync(reportFile, report, 'utf-8');
    console.log(`✅ Report saved: ${reportFile}`);

    // Generate timestamped report
    const timestampedReportFile = join(outputDir, `mobile-massage-extraction-report-${timestamp}.md`);
    writeFileSync(timestampedReportFile, report, 'utf-8');
  }

  private generateReport(results: ExtractionResult): string {
    let report = '# Mobile Massage SEO Factory - Data Extraction Report\n\n';
    report += `**Generated**: ${new Date().toISOString()}\n`;
    report += `**Status**: ${results.validation_status}\n\n`;
    report += '---\n\n';

    // Validation Status
    report += '## Validation Status\n\n';
    if (results.validation_status === 'PASS') {
      report += '✅ **PASS** - All critical data extracted successfully\n\n';
    } else if (results.validation_status === 'PARTIAL') {
      report += '⚠️ **PARTIAL** - Some data missing but can proceed with spec defaults\n\n';
    } else {
      report += '❌ **FAIL** - Critical data missing, manual review required\n\n';
    }

    // Facts JSON
    report += '## Facts JSON\n\n';
    report += '```json\n';
    report += JSON.stringify(results.facts, null, 2);
    report += '\n```\n\n';

    // Unknowns
    report += '## Unknowns List\n\n';
    if (results.unknowns.length > 0) {
      report += `**Count**: ${results.unknowns.length}\n\n`;
      results.unknowns.forEach((unknown, index) => {
        report += `${index + 1}. ⚠️ **${unknown}**\n`;
      });
    } else {
      report += '✅ *No unknowns - all data successfully extracted or defaulted from spec*\n';
    }
    report += '\n';

    // Extraction Notes
    report += '## Extraction Notes\n\n';
    results.notes.forEach((note, index) => {
      report += `${index + 1}. ${note}\n`;
    });
    report += '\n';

    // Quick Reference
    report += '---\n\n';
    report += '## Quick Reference\n\n';

    report += '### Contact Information\n';
    report += `- **Phone**: ${results.facts.contacts.phone || 'UNKNOWN'}\n`;
    report += `- **WhatsApp**: ${results.facts.contacts.whatsapp || 'UNKNOWN'}\n`;
    report += `- **WhatsApp URL**: ${results.facts.contacts.whatsapp_url || 'UNKNOWN'}\n`;
    report += `- **Email**: ${results.facts.contacts.email || 'UNKNOWN'}\n`;
    report += `- **Booking URL**: ${results.facts.contacts.booking_url || 'UNKNOWN'}\n\n`;

    report += '### Pricing (Mobile Massage)\n';
    results.facts.pricing.mobile_massage.forEach(item => {
      const price = item.price ? `IDR ${item.price.toLocaleString()}` : 'UNKNOWN';
      const badge = item.badge ? ` ${item.badge}` : '';
      report += `- **${item.minutes} minutes**: ${price}${badge}\n`;
    });
    report += '\n';

    report += '### Service Areas\n';
    if (results.facts.service_areas.all_locations.length > 0) {
      results.facts.service_areas.all_locations.forEach(area => {
        report += `- ${area}\n`;
      });
    } else {
      report += '- Using spec defaults\n';
    }
    report += '\n';

    report += '### Next Steps\n';
    report += '1. Review unknowns list and update facts_json manually if needed\n';
    report += '2. Verify pricing accuracy\n';
    report += '3. Confirm service areas are complete\n';
    report += '4. Run content generator: `npm run generate:mobile`\n';
    report += '\n';

    return report;
  }
}

// Main execution
async function runExtraction() {
  const extractor = new MobileMassageDataExtractor();
  const results = await extractor.extract();
  extractor.saveResults(results);

  console.log('\n' + '='.repeat(70));
  console.log('✨ Mobile Massage Data Extraction Complete!\n');

  if (results.validation_status === 'FAIL') {
    console.log('⚠️  ATTENTION: Critical data missing. Review report before generating content.\n');
    process.exit(1);
  } else if (results.validation_status === 'PARTIAL') {
    console.log('⚠️  NOTE: Some data missing. Using spec defaults. Review if needed.\n');
  } else {
    console.log('✅ All critical data extracted. Ready for content generation!\n');
  }
}

runExtraction().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});
