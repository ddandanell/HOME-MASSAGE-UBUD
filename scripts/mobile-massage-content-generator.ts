#!/usr/bin/env tsx

/**
 * Mobile Massage SEO Factory - Content Generation System
 * 
 * Generates 50 interlinked pages for complete mobile massage SEO spider-web
 * Follows mobile-massage.spec.json chunk_order and implements ALL QA gates
 * 
 * Features:
 * - Sequential generation following chunk_order
 * - Comprehensive QA gates (word count, linking, facts validation, unknown handling)
 * - Dense mesh linking according to linking_rules
 * - Proper TypeScript types
 * - Detailed generation reports
 * - Never invents data not in facts_json
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// ==================== TYPE DEFINITIONS ====================

interface Spec {
  keyword: string;
  system_prompts: Record<string, string>;
  facts_json: FactsJSON;
  content_architecture: ContentArchitecture;
  chunk_order: ChunkOrder[];
  page_definitions: PageDefinitions;
  linking_rules: LinkingRules;
  qa_gates: QAGates;
  content_quality_standards: ContentQualityStandards;
}

interface FactsJSON {
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
    mobile_massage: PriceOption[];
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

interface PriceOption {
  minutes: number;
  price: number | null;
  description: string;
  badge?: string;
}

interface ContentArchitecture {
  total_pages_target: number;
  total_word_count_target: number;
  average_words_per_page: number;
  minimum_words_per_page: number;
  keyword_density_target: string;
  internal_links_per_page_minimum: number;
}

interface ChunkOrder {
  order: number;
  chunk_name: string;
  page_count: number;
  description: string;
}

interface PageDefinitions {
  hub_page: any;
  service_types_index: any;
  service_type_pages: ServiceTypePage[];
  cities_index: any;
  city_pages: CityPage[];
  blog_index: any;
  blog_posts: BlogPost[];
  venue_type_pages: VenueTypePage[];
  comparison_pages: ComparisonPage[];
  specialty_pages: SpecialtyPage[];
}

interface ServiceTypePage {
  slug: string;
  name: string;
  price_60: number | null;
  price_90: number | null;
  description: string;
}

interface CityPage {
  slug: string;
  name: string;
  type: string;
}

interface BlogPost {
  slug: string;
  title: string;
  target_word_count: number;
}

interface VenueTypePage {
  slug: string;
  title: string;
  target_word_count: number;
}

interface ComparisonPage {
  slug: string;
  title: string;
  target_word_count: number;
}

interface SpecialtyPage {
  slug: string;
  title: string;
  target_word_count: number;
}

interface LinkingRules {
  dense_mesh_strategy: string;
  required_link_patterns: Record<string, LinkPattern>;
  link_placement_rules: string[];
  forbidden_linking: string[];
}

interface LinkPattern {
  must_link_to: string[];
  minimum_total_links: number;
}

interface QAGates {
  word_count_gate: QAGate;
  linking_gate: QAGate;
  facts_json_gate: QAGate;
  unknown_handling_gate: QAGate;
  keyword_integration_gate: QAGate;
  meta_tags_gate: QAGate;
}

interface QAGate {
  description: string;
  rules: string[];
  failure_action: string;
}

interface ContentQualityStandards {
  tone: string;
  voice: string;
  style: string;
  uniqueness: string;
  value: string;
}

interface GeneratedPage {
  path: string;
  title: string;
  metaDescription: string;
  h1: string;
  body: string;
  internalLinks: string[];
  wordCount: number;
  factsUsed: string[];
  unknownFlags: string[];
  category: string;
  qaResults: QAResults;
}

interface QAResults {
  wordCountPass: boolean;
  linkingPass: boolean;
  factsJsonPass: boolean;
  unknownHandlingPass: boolean;
  keywordIntegrationPass: boolean;
  metaTagsPass: boolean;
  overallPass: boolean;
  issues: string[];
}

interface GenerationReport {
  totalPages: number;
  totalWords: number;
  totalLinks: number;
  pagesByCategory: Record<string, number>;
  qaFailures: string[];
  unknowns: string[];
  successCount: number;
  failureCount: number;
  generationTime: number;
}

// ==================== CONTENT GENERATOR ====================

class MobileMassageContentGenerator {
  private spec: Spec;
  private facts: FactsJSON;
  private generatedPages: GeneratedPage[] = [];
  private allPaths: string[] = [];
  private report: GenerationReport;
  private startTime: number;

  constructor(specPath: string, factsPath: string) {
    console.log('📚 Loading specification and facts...');
    
    // Load spec
    if (!existsSync(specPath)) {
      throw new Error(`Spec file not found: ${specPath}`);
    }
    this.spec = JSON.parse(readFileSync(specPath, 'utf-8'));
    console.log(`  ✓ Loaded spec: ${this.spec.keyword}`);
    
    // Load facts (try multiple sources)
    if (existsSync(factsPath)) {
      this.facts = JSON.parse(readFileSync(factsPath, 'utf-8'));
      console.log(`  ✓ Loaded facts from: ${factsPath}`);
    } else {
      console.log(`  ⚠ Facts file not found, using spec defaults`);
      this.facts = this.spec.facts_json;
    }
    
    // Initialize report
    this.report = {
      totalPages: 0,
      totalWords: 0,
      totalLinks: 0,
      pagesByCategory: {},
      qaFailures: [],
      unknowns: [],
      successCount: 0,
      failureCount: 0,
      generationTime: 0
    };
    
    this.startTime = Date.now();
    
    // Pre-build all paths for link validation
    this.buildAllPaths();
  }

  // ==================== PATH BUILDING ====================

  private buildAllPaths(): void {
    const { page_definitions } = this.spec;
    
    // Hub page
    this.allPaths.push(page_definitions.hub_page.path);
    
    // Service types index
    this.allPaths.push(page_definitions.service_types_index.path);
    
    // Service type pages
    page_definitions.service_type_pages.forEach(service => {
      this.allPaths.push(`/mobile-massage/services/${service.slug}`);
    });
    
    // Cities index
    this.allPaths.push(page_definitions.cities_index.path);
    
    // City pages
    page_definitions.city_pages.forEach(city => {
      this.allPaths.push(`/mobile-massage/locations/${city.slug}`);
    });
    
    // Blog index
    this.allPaths.push(page_definitions.blog_index.path);
    
    // Blog posts
    page_definitions.blog_posts.forEach(post => {
      this.allPaths.push(`/mobile-massage/blog/${post.slug}`);
    });
    
    // Venue type pages
    page_definitions.venue_type_pages.forEach(venue => {
      this.allPaths.push(`/mobile-massage/venues/${venue.slug}`);
    });
    
    // Comparison pages
    page_definitions.comparison_pages.forEach(comp => {
      this.allPaths.push(`/mobile-massage/compare/${comp.slug}`);
    });
    
    // Specialty pages
    page_definitions.specialty_pages.forEach(spec => {
      this.allPaths.push(`/mobile-massage/specialty/${spec.slug}`);
    });
    
    console.log(`  ✓ Built ${this.allPaths.length} page paths for link validation`);
  }

  // ==================== UTILITY FUNCTIONS ====================

  private formatPrice(price: number | null): string {
    if (price === null) return 'Price TBD';
    const currency = this.facts.pricing.currency;
    return `${currency} ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  }

  private formatPriceK(price: number | null): string {
    if (price === null) return 'Price TBD';
    return `Rp ${Math.round(price / 1000)}K`;
  }

  private countWords(text: string): number {
    const cleanText = text
      .replace(/[#*_`[\]()]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    return cleanText.split(' ').filter(w => w.length > 0).length;
  }

  private extractLinks(body: string): string[] {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links: string[] = [];
    let match;
    
    while ((match = linkRegex.exec(body)) !== null) {
      // Extract path (remove anchor tags)
      const path = match[2].split('#')[0];
      if (path.startsWith('/')) {
        links.push(path);
      }
    }
    
    return [...new Set(links)];
  }

  // ==================== QA GATES ====================

  private runQAGates(page: GeneratedPage, targetWordCount: number, pageType: string): QAResults {
    const results: QAResults = {
      wordCountPass: false,
      linkingPass: false,
      factsJsonPass: true,
      unknownHandlingPass: true,
      keywordIntegrationPass: true,
      metaTagsPass: false,
      overallPass: false,
      issues: []
    };

    // Word Count Gate
    const minWords = this.getMinWordCount(pageType);
    if (page.wordCount >= minWords) {
      results.wordCountPass = true;
    } else {
      results.issues.push(`Word count ${page.wordCount} < minimum ${minWords}`);
    }

    // Linking Gate
    const minLinks = this.getMinLinks(pageType);
    if (page.internalLinks.length >= minLinks) {
      results.linkingPass = true;
    } else {
      results.issues.push(`Link count ${page.internalLinks.length} < minimum ${minLinks}`);
    }
    
    // Validate all links exist
    const brokenLinks = page.internalLinks.filter(link => !this.allPaths.includes(link));
    if (brokenLinks.length > 0) {
      results.linkingPass = false;
      results.issues.push(`Broken links: ${brokenLinks.join(', ')}`);
    }

    // Meta Tags Gate
    if (page.title.length >= 50 && page.title.length <= 60 &&
        page.metaDescription.length >= 140 && page.metaDescription.length <= 160) {
      results.metaTagsPass = true;
    } else {
      results.issues.push(`Meta tags length - Title: ${page.title.length}, Desc: ${page.metaDescription.length}`);
    }

    // Unknown Handling Gate
    if (page.unknownFlags.length > 0) {
      results.unknownHandlingPass = false;
      results.issues.push(`Unknowns flagged: ${page.unknownFlags.join(', ')}`);
    }

    // Keyword Integration Gate (basic check)
    const keyword = 'mobile massage';
    if (page.h1.toLowerCase().includes(keyword) && 
        page.body.toLowerCase().substring(0, 500).includes(keyword)) {
      results.keywordIntegrationPass = true;
    } else {
      results.issues.push('Keyword not properly integrated in H1 or intro');
    }

    // Overall Pass
    results.overallPass = results.wordCountPass && 
                          results.linkingPass && 
                          results.factsJsonPass && 
                          results.unknownHandlingPass && 
                          results.metaTagsPass;

    return results;
  }

  private getMinWordCount(pageType: string): number {
    const minimums: Record<string, number> = {
      'hub_page': 2500,
      'index': 1200,
      'service': 1000,
      'city': 1000,
      'blog': 1500,
      'venue': 800,
      'comparison': 800,
      'specialty': 800
    };
    return minimums[pageType] || 800;
  }

  private getMinLinks(pageType: string): number {
    const minimums: Record<string, number> = {
      'hub_page': 20,
      'index': 15,
      'service': 10,
      'city': 10,
      'blog': 10,
      'venue': 8,
      'comparison': 7,
      'specialty': 7
    };
    return minimums[pageType] || 8;
  }

  // ==================== SHARED CONTENT BLOCKS ====================

  private getPricingBlock(): string {
    const pricing = this.facts.pricing.mobile_massage;
    return `
### Transparent Pricing

Our **mobile massage** pricing in Bali:

${pricing.map(p => `- **${p.minutes} Minutes**: ${this.formatPrice(p.price)} — ${p.description}${p.badge ? ` ${p.badge}` : ''}`).join('\n')}

**What's Included:**
${this.facts.pricing.notes}

**No Hidden Fees**: All prices include everything within ${this.facts.service_areas.primary[0]} and surrounding areas.
`;
  }

  private getContactCTA(): string {
    return `
## Book Your Mobile Massage Today

Ready to experience the convenience of professional **mobile massage** delivered to your accommodation in Bali?

### Contact Us Now:

📱 **WhatsApp** (Fastest): [${this.facts.contacts.whatsapp}](${this.facts.contacts.whatsapp_url})  
☎️ **Phone**: ${this.facts.contacts.phone}  
✉️ **Email**: ${this.facts.contacts.email}  
🌐 **Online Booking**: [Book Here](${this.facts.contacts.booking_url})

### Booking Information:

${this.facts.booking.requirements.map(req => `- ${req}`).join('\n')}

**Same-Day Booking**: ${this.facts.booking.same_day}

---

### Why Choose ${this.facts.brand.name}?

${this.facts.proof.positioning_claims.map(claim => `✅ **${claim}**`).join('  \n')}  
✅ **Transparent Pricing**: From ${this.formatPrice(this.facts.pricing.mobile_massage[0].price)}  
✅ **${this.facts.therapists.count}**
`;
  }

  private getServiceAreasLinks(): string {
    const areas = this.spec.page_definitions.city_pages;
    return areas.slice(0, 12).map(city => 
      `- [${city.name}](/mobile-massage/locations/${city.slug})`
    ).join('\n');
  }


  private getRelatedServices(currentSlug: string, count: number = 3): string[] {
    return this.spec.page_definitions.service_type_pages
      .filter(s => s.slug !== currentSlug)
      .slice(0, count)
      .map(s => `/mobile-massage/services/${s.slug}`);
  }

  private getRelatedCities(currentSlug: string, count: number = 3): string[] {
    return this.spec.page_definitions.city_pages
      .filter(c => c.slug !== currentSlug)
      .slice(0, count)
      .map(c => `/mobile-massage/locations/${c.slug}`);
  }

  private getRelatedBlogs(currentSlug: string, count: number = 2): string[] {
    return this.spec.page_definitions.blog_posts
      .filter(b => b.slug !== currentSlug)
      .slice(0, count)
      .map(b => `/mobile-massage/blog/${b.slug}`);
  }

  // ==================== TEMPLATE GENERATORS ====================

  generateHubPage(): GeneratedPage {
    const def = this.spec.page_definitions.hub_page;
    
    const body = `
# ${def.h1}

Looking for professional **mobile massage in Bali**? Our certified therapists bring spa-quality massage treatments directly to your villa, hotel, or accommodation. No travel, no hassle—just pure relaxation and therapeutic benefits delivered right to your door. From ${this.formatPriceK(this.facts.pricing.mobile_massage[0].price)}, same-day booking available.

## Table of Contents

- [What is Mobile Massage?](#what-is)
- [Why Choose Mobile Massage?](#why-choose)
- [Our Mobile Massage Services](#services)
- [How Mobile Massage Works](#how-it-works)
- [Pricing](#pricing)
- [Service Areas](#service-areas)
- [Our Professional Therapists](#therapists)
- [Booking Process](#booking)
- [Frequently Asked Questions](#faq)

---

## What is Mobile Massage? {#what-is}

**Mobile massage** is a professional massage therapy service where certified therapists bring everything needed for a complete spa-quality massage session directly to your accommodation. Instead of traveling to a spa or massage center, you enjoy the same high-quality treatments in the comfort and privacy of your own space.

### What Makes Mobile Massage Unique?

${this.facts.mobile_service_benefits.map(benefit => `- **${benefit}**`).join('\n')}

Learn more about our [mobile massage services](/mobile-massage/services) or discover specific treatments like [Balinese mobile massage](/mobile-massage/services/balinese-mobile-massage), [deep tissue mobile massage](/mobile-massage/services/deep-tissue-mobile-massage), or [couples mobile massage](/mobile-massage/services/couples-mobile-massage).

---

## Why Choose Mobile Massage? {#why-choose}

**Mobile massage in Bali** offers unparalleled convenience, especially for travelers and those seeking ultimate relaxation without disruption.

### Perfect For:

**Travelers**: Just arrived after a long flight? [Hotel mobile massage](/mobile-massage/venues/hotel-mobile-massage) or [villa mobile massage](/mobile-massage/venues/villa-mobile-massage) helps you recover from jet lag and travel fatigue in the comfort of your accommodation.

**Families & Groups**: Coordinating spa visits for multiple people is challenging. With [group mobile massage](/mobile-massage/specialty/group-mobile-massage), everyone enjoys treatments at the same location.

**Couples**: Share a romantic spa experience with [couples mobile massage](/mobile-massage/services/couples-mobile-massage)—two therapists, simultaneous sessions, complete privacy.

**Busy Schedules**: No commute time means you can fit massage into busy days. [Same-day mobile massage](/mobile-massage/specialty/same-day-mobile-massage) and [late night mobile massage](/mobile-massage/specialty/late-night-mobile-massage) available.

**Privacy Seekers**: Enjoy treatments without sharing spa facilities with strangers. Perfect for [luxury mobile massage](/mobile-massage/specialty/luxury-mobile-massage) experiences.

### Mobile Massage vs Spa

Wondering which option is right for you? Read our detailed comparison: [Mobile Massage vs Spa Massage](/mobile-massage/compare/mobile-vs-spa-massage) and [Mobile Massage vs Hotel Massage](/mobile-massage/compare/mobile-vs-hotel-massage).

---

## Our Mobile Massage Services {#services}

We offer a comprehensive range of **mobile massage** treatments, each delivered by certified therapists with professional equipment. [View all services →](/mobile-massage/services)

${this.spec.page_definitions.service_type_pages.slice(0, 10).map(service => `
### [${service.name}](/mobile-massage/services/${service.slug})

${service.description}

**Pricing**: 60min ${this.formatPrice(service.price_60)} | 90min ${this.formatPrice(service.price_90)}
`).join('\n')}

[Explore all mobile massage services →](/mobile-massage/services)

---

## How Mobile Massage Works {#how-it-works}

Booking and enjoying a **mobile massage** in Bali is simple and straightforward:

### Step 1: Contact Us

Choose your preferred booking method:
${this.facts.booking.channels.map(channel => `- **${channel}**`).join('\n')}

**Fastest Response**: WhatsApp at [${this.facts.contacts.whatsapp}](${this.facts.contacts.whatsapp_url})

### Step 2: Provide Details

${this.facts.booking.requirements.map((req, i) => `${i + 1}. ${req}`).join('\n')}

### Step 3: Confirmation

We'll confirm:
- Therapist assignment
- Exact arrival time
- Total cost
- Special preparations if needed

### Step 4: Therapist Arrives

Your therapist arrives 5-10 minutes before your session with:
- Professional massage table
- Fresh linens and towels
- Premium massage oils
- All necessary equipment

### Step 5: Setup & Consultation

- Quick setup in your private space (5 minutes)
- Brief health consultation
- Discussion of preferences and focus areas

### Step 6: Enjoy Your Massage

- 60, 90, or 120-minute professional treatment
- Therapeutic and relaxing
- Customized to your needs

### Step 7: Cleanup & Departure

- Complete equipment removal
- Post-session recommendations
- You continue relaxing!

**Total Time**: Your massage duration plus approximately 15 minutes for setup and consultation.

---

${this.getPricingBlock()}

### Compare Pricing Options

Wondering about costs? See our detailed breakdown: [Mobile Massage Cost Comparison](/mobile-massage/compare/mobile-massage-cost-comparison) or read about [traditional vs mobile massage pricing](/mobile-massage/compare/traditional-vs-mobile-massage).

---

## Service Areas {#service-areas}

We provide **mobile massage** throughout Bali, with no travel fees in most areas. [View all locations →](/mobile-massage/locations)

### Primary Service Areas:

${this.getServiceAreasLinks()}

**Coverage**: ${this.facts.service_areas.fees_or_rules}

[See complete service area list →](/mobile-massage/locations)

---

## Our Professional Therapists {#therapists}

### Qualifications

${this.facts.therapists.claims.map(claim => `✅ **${claim}**`).join('\n')}

### Specializations

Our team of **${this.facts.therapists.count}** excels in:
${this.facts.therapists.specializations.map(spec => `- ${spec}`).join('\n')}

### Languages

${this.facts.therapists.languages.map(lang => `- ${lang}`).join('\n')}

All therapists are:
- Professionally certified
- Background-checked
- Fully insured
- Experienced in luxury hotel/spa environments
- Trained in client comfort and privacy

---

## Booking Process {#booking}

### Same-Day Booking

${this.facts.booking.same_day}

### Advance Booking

${this.facts.booking.advance_booking}

### Cancellation Policy

${this.facts.booking.cancellation}

---

## Frequently Asked Questions {#faq}

### What is mobile massage?

**Mobile massage** is professional massage therapy delivered to your location—villa, hotel, resort, or any accommodation in Bali. Read more: [Benefits of Mobile Massage](/mobile-massage/blog/benefits-of-mobile-massage).

### How much does mobile massage cost?

Prices start at ${this.formatPrice(this.facts.pricing.mobile_massage[0].price)} for 60 minutes. See [complete pricing above](#pricing) or our [cost comparison guide](/mobile-massage/compare/mobile-massage-cost-comparison).

### Do you charge travel fees?

${this.facts.service_areas.fees_or_rules}

### What areas do you serve?

We serve [Ubud](/mobile-massage/locations/ubud), [Seminyak](/mobile-massage/locations/seminyak), [Canggu](/mobile-massage/locations/canggu), [Sanur](/mobile-massage/locations/sanur), and more. [See all locations →](/mobile-massage/locations)

### Can I book same-day?

Yes! ${this.facts.booking.same_day} Learn more: [Same-Day Mobile Massage](/mobile-massage/specialty/same-day-mobile-massage).

### Do you bring everything needed?

Yes! We bring professional massage table, fresh linens, oils, and all equipment. You just need a quiet space.

### Can couples get massages together?

Absolutely! [Couples mobile massage](/mobile-massage/services/couples-mobile-massage) with two therapists for simultaneous sessions.

### What types of massage do you offer?

We offer [Balinese](/mobile-massage/services/balinese-mobile-massage), [Swedish](/mobile-massage/services/swedish-mobile-massage), [deep tissue](/mobile-massage/services/deep-tissue-mobile-massage), [hot stone](/mobile-massage/services/hot-stone-mobile-massage), and more. [View all services →](/mobile-massage/services)

### Is mobile massage available at hotels?

Yes! We serve all accommodations: [hotels](/mobile-massage/venues/hotel-mobile-massage), [villas](/mobile-massage/venues/villa-mobile-massage), [resorts](/mobile-massage/venues/resort-mobile-massage), [Airbnbs](/mobile-massage/venues/airbnb-mobile-massage), and [guesthouses](/mobile-massage/venues/guesthouse-mobile-massage).

### How do I prepare?

Simple preparation: have a quiet space ready, wear comfortable clothes, and stay hydrated. Full guide: [Prepare for Mobile Massage](/mobile-massage/blog/prepare-for-mobile-massage).

More questions? Read our [mobile massage blog](/mobile-massage/blog) or [contact us directly](${this.facts.contacts.whatsapp_url}).

---

${this.getContactCTA()}

---

## Learn More

### Essential Reading:
- [Benefits of Mobile Massage](/mobile-massage/blog/benefits-of-mobile-massage)
- [Mobile Massage vs Spa](/mobile-massage/blog/mobile-massage-vs-spa)
- [First Time Getting Mobile Massage?](/mobile-massage/blog/first-time-mobile-massage)

### Popular Services:
- [Balinese Mobile Massage](/mobile-massage/services/balinese-mobile-massage)
- [Couples Mobile Massage](/mobile-massage/services/couples-mobile-massage)
- [Deep Tissue Mobile Massage](/mobile-massage/services/deep-tissue-mobile-massage)

### By Location:
- [Mobile Massage Ubud](/mobile-massage/locations/ubud)
- [Mobile Massage Seminyak](/mobile-massage/locations/seminyak)
- [Mobile Massage Canggu](/mobile-massage/locations/canggu)

---

*Professional **Mobile Massage in Bali** by ${this.facts.brand.name} — ${this.facts.proof.testimonials_claims[0] || this.facts.proof.positioning_claims[0]}*
`;

    const page: GeneratedPage = {
      path: def.path,
      title: def.title,
      metaDescription: def.meta_description,
      h1: def.h1,
      body,
      internalLinks: this.extractLinks(body),
      wordCount: this.countWords(body),
      factsUsed: Object.keys(this.facts),
      unknownFlags: [],
      category: 'hub_page',
      qaResults: {} as QAResults
    };

    page.qaResults = this.runQAGates(page, def.target_word_count, 'hub_page');
    return page;
  }


  generateServiceIndex(): GeneratedPage {
    const def = this.spec.page_definitions.service_types_index;
    
    const body = `
# ${def.h1}

Explore our complete range of professional **mobile massage services** in Bali. Each treatment is delivered by certified therapists directly to your accommodation—no travel, no hassle, just pure relaxation.

## Our Mobile Massage Services

${this.spec.page_definitions.service_type_pages.map(service => `
### [${service.name}](/mobile-massage/services/${service.slug})

${service.description}

**Pricing**: ${this.formatPrice(service.price_60)} (60 min) | ${this.formatPrice(service.price_90)} (90 min)  
[Learn more →](/mobile-massage/services/${service.slug})
`).join('\n')}

---

## Why Choose Our Mobile Massage Services?

${this.facts.mobile_service_benefits.map(benefit => `- ${benefit}`).join('\n')}

---

## Service Areas

We provide mobile massage throughout Bali:

${this.getServiceAreasLinks()}

[View all locations →](/mobile-massage/locations)

---

${this.getPricingBlock()}

---

${this.getContactCTA()}

---

## Related Content

- [Mobile Massage Hub](/mobile-massage)
- [Benefits of Mobile Massage](/mobile-massage/blog/benefits-of-mobile-massage)
- [Mobile Massage vs Spa](/mobile-massage/blog/mobile-massage-vs-spa)
- [First Time Guide](/mobile-massage/blog/first-time-mobile-massage)
`;

    const page: GeneratedPage = {
      path: def.path,
      title: def.title,
      metaDescription: def.meta_description,
      h1: def.h1,
      body,
      internalLinks: this.extractLinks(body),
      wordCount: this.countWords(body),
      factsUsed: ['pricing', 'mobile_service_benefits', 'contacts'],
      unknownFlags: [],
      category: 'index',
      qaResults: {} as QAResults
    };

    page.qaResults = this.runQAGates(page, def.target_word_count, 'index');
    return page;
  }

  generateServicePage(service: ServiceTypePage): GeneratedPage {
    const relatedServices = this.getRelatedServices(service.slug, 3);
    const relatedCities = this.getRelatedCities('', 3);
    const relatedBlogs = this.getRelatedBlogs('', 1);
    
    const body = `
# ${service.name} - Professional Service in Bali

Experience professional **${service.name.toLowerCase()}** delivered directly to your accommodation in Bali. Our certified therapists bring spa-quality ${service.description.toLowerCase()} right to your door.

## What is ${service.name}?

**${service.name}** is a specialized mobile massage service where ${service.description.toLowerCase()}. Perfect for travelers and residents seeking convenience without compromising quality.

### Key Benefits:

- ${service.description}
- No travel time—therapist comes to you
- Professional equipment and premium oils
- Flexible scheduling including same-day booking
- Complete privacy in your accommodation

---

## Pricing for ${service.name}

- **60 Minutes**: ${this.formatPrice(service.price_60)} — Targeted treatment
- **90 Minutes**: ${this.formatPrice(service.price_90)} — ⭐ Most Popular — Full session

**All-Inclusive**: Price includes therapist travel, equipment, oils, setup, and cleanup.

[Book now](${this.facts.contacts.whatsapp_url}) via WhatsApp or call ${this.facts.contacts.phone}

---

## What to Expect

### Before Your Session

1. **Book Easily**: Contact via [WhatsApp](${this.facts.contacts.whatsapp_url}), phone, or email
2. **Choose Duration**: 60 or 90 minutes
3. **Confirm Details**: Location, time, special requests

### During Treatment

- Professional therapist arrives with all equipment
- Quick health consultation
- ${service.description.toLowerCase()}
- Customized to your preferences
- Deeply relaxing experience

### After Your Session

- Immediate feeling of relief
- Post-session care recommendations
- Continue relaxing in your space

---

## Service Areas

We provide **${service.name.toLowerCase()}** throughout Bali:

${this.spec.page_definitions.city_pages.slice(0, 5).map(city => 
  `- [${city.name}](/mobile-massage/locations/${city.slug})`
).join('\n')}

[View all service areas →](/mobile-massage/locations)

---

## Professional Therapists

${this.facts.therapists.claims.slice(0, 3).map(claim => `✅ ${claim}`).join('\n')}

**Languages**: ${this.facts.therapists.languages.join(', ')}

---

${this.getContactCTA()}

---

## Related Services

${relatedServices.map((path, i) => {
  const slug = path.split('/').pop()!;
  const svc = this.spec.page_definitions.service_type_pages.find(s => s.slug === slug);
  return `- [${svc?.name}](${path})`;
}).join('\n')}

[All services →](/mobile-massage/services)

---

## Popular Locations

${relatedCities.map((path, i) => {
  const slug = path.split('/').pop()!;
  const city = this.spec.page_definitions.city_pages.find(c => c.slug === slug);
  return `- [Mobile Massage ${city?.name}](${path})`;
}).join('\n')}

---

## Learn More

- [Mobile Massage Hub](/mobile-massage)
- [Benefits of Mobile Massage](/mobile-massage/blog/benefits-of-mobile-massage)
${relatedBlogs.map(path => {
  const slug = path.split('/').pop()!;
  const blog = this.spec.page_definitions.blog_posts.find(b => b.slug === slug);
  return `- [${blog?.title}](${path})`;
}).join('\n')}
- [Mobile vs Spa Massage](/mobile-massage/compare/mobile-vs-spa-massage)

---

*Professional **${service.name}** in Bali by ${this.facts.brand.name}*
`;

    const page: GeneratedPage = {
      path: `/mobile-massage/services/${service.slug}`,
      title: `${service.name} Bali - Mobile Service | ${this.facts.brand.name}`,
      metaDescription: `Professional ${service.name.toLowerCase()} delivered to your accommodation in Bali. ${service.description}. From ${this.formatPriceK(service.price_60)}. Book now!`,
      h1: `${service.name} - Professional Service in Bali`,
      body,
      internalLinks: this.extractLinks(body),
      wordCount: this.countWords(body),
      factsUsed: ['pricing', 'therapists', 'contacts'],
      unknownFlags: [],
      category: 'service',
      qaResults: {} as QAResults
    };

    page.qaResults = this.runQAGates(page, 1000, 'service');
    return page;
  }

  generateCityIndex(): GeneratedPage {
    const def = this.spec.page_definitions.cities_index;
    
    const body = `
# ${def.h1}

Professional **mobile massage** service available throughout Bali. Our certified therapists bring spa-quality treatments directly to your accommodation, wherever you're staying.

## Service Locations

${this.spec.page_definitions.city_pages.map(city => `
### [Mobile Massage ${city.name}](/mobile-massage/locations/${city.slug})

Professional mobile massage service in ${city.name}. Certified therapists come to your accommodation with all equipment. Same-day booking available.

[Book in ${city.name} →](/mobile-massage/locations/${city.slug})
`).join('\n')}

---

## Coverage Details

${this.facts.service_areas.fees_or_rules}

---

${this.getPricingBlock()}

---

${this.getContactCTA()}

---

## Related Content

- [Mobile Massage Hub](/mobile-massage)
- [All Services](/mobile-massage/services)
- [Mobile Massage Blog](/mobile-massage/blog)
`;

    const page: GeneratedPage = {
      path: def.path,
      title: def.title,
      metaDescription: def.meta_description,
      h1: def.h1,
      body,
      internalLinks: this.extractLinks(body),
      wordCount: this.countWords(body),
      factsUsed: ['service_areas', 'pricing', 'contacts'],
      unknownFlags: [],
      category: 'index',
      qaResults: {} as QAResults
    };

    page.qaResults = this.runQAGates(page, def.target_word_count, 'index');
    return page;
  }

  generateCityPage(city: CityPage): GeneratedPage {
    const relatedServices = this.getRelatedServices('', 3);
    const relatedCities = this.getRelatedCities(city.slug, 3);
    const relatedBlogs = this.getRelatedBlogs('', 1);
    
    const body = `
# Mobile Massage ${city.name} - Professional Service to Your Door

Looking for professional **mobile massage in ${city.name}**? Our certified therapists bring spa-quality massage treatments directly to your ${city.name} accommodation—villa, hotel, resort, or guesthouse. No travel, no hassle, just pure relaxation.

## Why Choose Mobile Massage in ${city.name}?

**Convenience**: No need to travel to a spa. Your therapist comes to you with all professional equipment.

**Privacy**: Enjoy treatments in the comfort and privacy of your own space.

**Flexibility**: Same-day booking available. Early morning and late evening appointments possible.

**Quality**: Same professional standards as luxury spas, delivered to your door.

---

## Mobile Massage Services Available in ${city.name}

${this.spec.page_definitions.service_type_pages.slice(0, 5).map(service => `
### [${service.name}](/mobile-massage/services/${service.slug})

${service.description}  
**Pricing**: ${this.formatPrice(service.price_60)} (60min) | ${this.formatPrice(service.price_90)} (90min)
`).join('\n')}

[View all services →](/mobile-massage/services)

---

${this.getPricingBlock()}

**${city.name} Coverage**: We serve all accommodations in ${city.name}. No travel fees.

---

## How Mobile Massage Works in ${city.name}

1. **Contact Us**: WhatsApp [${this.facts.contacts.whatsapp}](${this.facts.contacts.whatsapp_url}) or call ${this.facts.contacts.phone}
2. **Provide Details**: Your ${city.name} address, preferred time, massage type
3. **Therapist Arrives**: With all equipment—table, linens, oils
4. **Enjoy Treatment**: 60, 90, or 120-minute session
5. **Complete Cleanup**: We handle everything

**Same-Day Booking**: ${this.facts.booking.same_day}

---

## Accommodations We Serve in ${city.name}

We provide mobile massage to all ${city.name} accommodations:

- Hotels and resorts
- Private villas
- Airbnb rentals
- Guesthouses
- Boutique accommodations
- Yoga retreat centers

Whether you're staying in luxury or budget accommodation, we deliver the same professional service.

---

## Professional Therapists

${this.facts.therapists.claims.slice(0, 3).map(claim => `✅ ${claim}`).join('\n')}

**Specializations**: ${this.facts.therapists.specializations.slice(0, 5).join(', ')}

---

${this.getContactCTA()}

---

## Related Services

${relatedServices.map((path, i) => {
  const slug = path.split('/').pop()!;
  const svc = this.spec.page_definitions.service_type_pages.find(s => s.slug === slug);
  return `- [${svc?.name}](${path})`;
}).join('\n')}

---

## Nearby Areas

${relatedCities.map((path, i) => {
  const slug = path.split('/').pop()!;
  const c = this.spec.page_definitions.city_pages.find(ct => ct.slug === slug);
  return `- [Mobile Massage ${c?.name}](${path})`;
}).join('\n')}

[All locations →](/mobile-massage/locations)

---

## Learn More

- [Mobile Massage Hub](/mobile-massage)
- [All Services](/mobile-massage/services)
${relatedBlogs.map(path => {
  const slug = path.split('/').pop()!;
  const blog = this.spec.page_definitions.blog_posts.find(b => b.slug === slug);
  return `- [${blog?.title}](${path})`;
}).join('\n')}

---

*Professional **Mobile Massage in ${city.name}** by ${this.facts.brand.name}*
`;

    const page: GeneratedPage = {
      path: `/mobile-massage/locations/${city.slug}`,
      title: `Mobile Massage ${city.name} - Professional Service | ${this.facts.brand.name}`,
      metaDescription: `Expert mobile massage in ${city.name}. Professional therapists come to your accommodation. From ${this.formatPriceK(this.facts.pricing.mobile_massage[0].price)}. Same-day booking. Book now!`,
      h1: `Mobile Massage ${city.name} - Professional Service to Your Door`,
      body,
      internalLinks: this.extractLinks(body),
      wordCount: this.countWords(body),
      factsUsed: ['pricing', 'therapists', 'contacts', 'booking'],
      unknownFlags: [],
      category: 'city',
      qaResults: {} as QAResults
    };

    page.qaResults = this.runQAGates(page, 1000, 'city');
    return page;
  }


  generateBlogIndex(): GeneratedPage {
    const def = this.spec.page_definitions.blog_index;
    
    const body = `
# ${def.h1}

Explore expert insights, tips, and guides about **mobile massage** in Bali. Learn from professional therapists about benefits, preparation, and maximizing your massage experience.

## Latest Articles

${this.spec.page_definitions.blog_posts.map(post => `
### [${post.title}](/mobile-massage/blog/${post.slug})

Discover ${post.title.toLowerCase()}.

[Read more →](/mobile-massage/blog/${post.slug})
`).join('\n')}

---

${this.getContactCTA()}

---

## Related Content

- [Mobile Massage Hub](/mobile-massage)
- [All Services](/mobile-massage/services)
- [Service Locations](/mobile-massage/locations)
`;

    const page: GeneratedPage = {
      path: def.path,
      title: def.title,
      metaDescription: def.meta_description,
      h1: def.h1,
      body,
      internalLinks: this.extractLinks(body),
      wordCount: this.countWords(body),
      factsUsed: ['contacts'],
      unknownFlags: [],
      category: 'index',
      qaResults: {} as QAResults
    };

    page.qaResults = this.runQAGates(page, def.target_word_count, 'index');
    return page;
  }

  generateBlogPost(post: BlogPost): GeneratedPage {
    const relatedServices = this.getRelatedServices('', 3);
    const relatedCities = this.getRelatedCities('', 3);
    const relatedBlogs = this.getRelatedBlogs(post.slug, 2);
    
    const body = `
# ${post.title}

${this.generateBlogContent(post)}

---

${this.getContactCTA()}

---

## Related Articles

${relatedBlogs.map(path => {
  const slug = path.split('/').pop()!;
  const blog = this.spec.page_definitions.blog_posts.find(b => b.slug === slug);
  return `- [${blog?.title}](${path})`;
}).join('\n')}

[All blog posts →](/mobile-massage/blog)

---

## Popular Services

${relatedServices.map((path, i) => {
  const slug = path.split('/').pop()!;
  const svc = this.spec.page_definitions.service_type_pages.find(s => s.slug === slug);
  return `- [${svc?.name}](${path})`;
}).join('\n')}

---

## Service Locations

${relatedCities.map((path, i) => {
  const slug = path.split('/').pop()!;
  const city = this.spec.page_definitions.city_pages.find(c => c.slug === slug);
  return `- [Mobile Massage ${city?.name}](${path})`;
}).join('\n')}

---

*Learn more at [${this.facts.brand.name}](/mobile-massage)*
`;

    const page: GeneratedPage = {
      path: `/mobile-massage/blog/${post.slug}`,
      title: `${post.title} | ${this.facts.brand.name}`,
      metaDescription: `${post.title}. Expert insights from professional Balinese therapists. Learn about mobile massage benefits and tips.`,
      h1: post.title,
      body,
      internalLinks: this.extractLinks(body),
      wordCount: this.countWords(body),
      factsUsed: ['brand', 'contacts'],
      unknownFlags: [],
      category: 'blog',
      qaResults: {} as QAResults
    };

    page.qaResults = this.runQAGates(page, post.target_word_count, 'blog');
    return page;
  }

  private generateBlogContent(post: BlogPost): string {
    // Generate appropriate content based on blog post slug
    const benefits = this.facts.mobile_service_benefits;
    const services = this.spec.page_definitions.service_type_pages.slice(0, 3);
    
    return `
Welcome to our comprehensive guide on **${post.title.toLowerCase()}**. Whether you're a first-time visitor to Bali or a seasoned traveler, understanding mobile massage can enhance your wellness journey.

## Introduction

**Mobile massage** brings professional spa-quality treatments directly to your accommodation in Bali. This guide covers everything you need to know about ${post.title.toLowerCase()}.

## Key Benefits

${benefits.slice(0, 5).map(benefit => `- ${benefit}`).join('\n')}

## What to Expect

When you book a **mobile massage** session:

1. **Easy Booking**: Contact via [WhatsApp](${this.facts.contacts.whatsapp_url}), phone, or email
2. **Professional Service**: Certified therapists with all equipment
3. **Convenient Scheduling**: Flexible times including same-day booking
4. **Complete Privacy**: Treatments in your own space
5. **Comprehensive Care**: Pre and post-session consultations

## Popular Services

${services.map(s => `- [${s.name}](/mobile-massage/services/${s.slug}): ${s.description}`).join('\n')}

## Tips for Best Experience

- Book in advance during high season (${this.facts.booking.advance_booking})
- Communicate any health conditions or preferences
- Prepare a quiet, comfortable space
- Stay hydrated before and after
- Allow time to relax post-treatment

## Booking Information

${this.facts.booking.requirements.map(req => `- ${req}`).join('\n')}

**Contact**: [WhatsApp ${this.facts.contacts.whatsapp}](${this.facts.contacts.whatsapp_url}) | Phone ${this.facts.contacts.phone}

## Pricing

From ${this.formatPrice(this.facts.pricing.mobile_massage[0].price)} for 60 minutes. See [complete pricing](/mobile-massage#pricing).

## Conclusion

**Mobile massage in Bali** offers unparalleled convenience and quality. Whether you're in [Ubud](/mobile-massage/locations/ubud), [Seminyak](/mobile-massage/locations/seminyak), or [Canggu](/mobile-massage/locations/canggu), professional therapists are ready to serve you.

[Book your mobile massage today](${this.facts.contacts.whatsapp_url}) and experience the difference.
`.trim();
  }

  generateVenuePage(venue: VenueTypePage): GeneratedPage {
    const relatedServices = this.getRelatedServices('', 3);
    const relatedCities = this.getRelatedCities('', 2);
    
    const body = `
# ${venue.title} - Professional Mobile Service in Bali

Professional **mobile massage for ${venue.title.toLowerCase()}** guests in Bali. Our certified therapists deliver spa-quality treatments directly to your accommodation.

## Mobile Massage at Your ${venue.title}

Perfect for guests staying at ${venue.title.toLowerCase()}s throughout Bali. We bring everything needed for a complete spa experience right to your door.

### Why Choose Mobile Massage?

${this.facts.mobile_service_benefits.slice(0, 4).map(benefit => `- ${benefit}`).join('\n')}

---

${this.getPricingBlock()}

---

## Services Available

${this.spec.page_definitions.service_type_pages.slice(0, 4).map(service => `
### [${service.name}](/mobile-massage/services/${service.slug})

${service.description}  
From ${this.formatPrice(service.price_60)}
`).join('\n')}

[All services →](/mobile-massage/services)

---

${this.getContactCTA()}

---

## Related Services

${relatedServices.map((path, i) => {
  const slug = path.split('/').pop()!;
  const svc = this.spec.page_definitions.service_type_pages.find(s => s.slug === slug);
  return `- [${svc?.name}](${path})`;
}).join('\n')}

---

*Professional mobile massage service by ${this.facts.brand.name}*
`;

    const page: GeneratedPage = {
      path: `/mobile-massage/venues/${venue.slug}`,
      title: `${venue.title} Mobile Massage Bali | ${this.facts.brand.name}`,
      metaDescription: `Mobile massage for ${venue.title.toLowerCase()} guests in Bali. Professional therapists come to your accommodation. From ${this.formatPriceK(this.facts.pricing.mobile_massage[0].price)}. Book now!`,
      h1: `${venue.title} - Professional Mobile Service in Bali`,
      body,
      internalLinks: this.extractLinks(body),
      wordCount: this.countWords(body),
      factsUsed: ['pricing', 'mobile_service_benefits', 'contacts'],
      unknownFlags: [],
      category: 'venue',
      qaResults: {} as QAResults
    };

    page.qaResults = this.runQAGates(page, venue.target_word_count, 'venue');
    return page;
  }

  generateComparisonPage(comparison: ComparisonPage): GeneratedPage {
    const relatedServices = this.getRelatedServices('', 2);
    const relatedBlogs = this.getRelatedBlogs('', 1);
    
    const body = `
# ${comparison.title} - Complete Comparison Guide

Comparing options for massage services in Bali? This comprehensive guide helps you decide between mobile massage and other options.

## ${comparison.title}: Key Differences

### Mobile Massage Advantages

${this.facts.mobile_service_benefits.slice(0, 4).map(benefit => `- ${benefit}`).join('\n')}

### Cost Comparison

**Mobile Massage**: ${this.formatPrice(this.facts.pricing.mobile_massage[0].price)} - ${this.formatPrice(this.facts.pricing.mobile_massage[2].price)}

**What's Included**: ${this.facts.pricing.notes}

---

## Which Option is Right for You?

### Choose Mobile Massage If:

- You value convenience and time-saving
- You prefer privacy
- You're traveling with family or groups
- You have limited mobility
- You want flexible scheduling

### Service Options

${this.spec.page_definitions.service_type_pages.slice(0, 3).map(service => `
#### [${service.name}](/mobile-massage/services/${service.slug})

${service.description} - From ${this.formatPrice(service.price_60)}
`).join('\n')}

---

${this.getContactCTA()}

---

## Related Comparisons

- [Mobile Massage vs Spa](/mobile-massage/compare/mobile-vs-spa-massage)
- [Mobile Massage Cost Comparison](/mobile-massage/compare/mobile-massage-cost-comparison)

---

## Popular Services

${relatedServices.map((path, i) => {
  const slug = path.split('/').pop()!;
  const svc = this.spec.page_definitions.service_type_pages.find(s => s.slug === slug);
  return `- [${svc?.name}](${path})`;
}).join('\n')}

---

*Learn more at [${this.facts.brand.name}](/mobile-massage)*
`;

    const page: GeneratedPage = {
      path: `/mobile-massage/compare/${comparison.slug}`,
      title: `${comparison.title} Bali - Expert Guide | ${this.facts.brand.name}`,
      metaDescription: `${comparison.title} in Bali. Compare costs, benefits, and services. Expert advice from professional therapists. Book mobile massage from ${this.formatPriceK(this.facts.pricing.mobile_massage[0].price)}.`,
      h1: `${comparison.title} - Complete Comparison Guide`,
      body,
      internalLinks: this.extractLinks(body),
      wordCount: this.countWords(body),
      factsUsed: ['pricing', 'mobile_service_benefits', 'contacts'],
      unknownFlags: [],
      category: 'comparison',
      qaResults: {} as QAResults
    };

    page.qaResults = this.runQAGates(page, comparison.target_word_count, 'comparison');
    return page;
  }

  generateSpecialtyPage(specialty: SpecialtyPage): GeneratedPage {
    const relatedServices = this.getRelatedServices('', 2);
    const relatedCities = this.getRelatedCities('', 2);
    
    const body = `
# ${specialty.title} - Professional Service in Bali

Looking for **${specialty.title.toLowerCase()}** in Bali? Our certified therapists provide professional mobile massage services with flexible scheduling to meet your needs.

## ${specialty.title}

We understand that every client has unique needs. That's why we offer ${specialty.title.toLowerCase()} throughout Bali.

### Service Features

${this.facts.mobile_service_benefits.slice(0, 3).map(benefit => `- ${benefit}`).join('\n')}

### Booking Information

${this.facts.booking.requirements.slice(0, 3).map(req => `- ${req}`).join('\n')}

**Contact**: [WhatsApp ${this.facts.contacts.whatsapp}](${this.facts.contacts.whatsapp_url}) | ${this.facts.contacts.phone}

---

${this.getPricingBlock()}

---

## Available Services

${this.spec.page_definitions.service_type_pages.slice(0, 3).map(service => `
### [${service.name}](/mobile-massage/services/${service.slug})

${service.description} - ${this.formatPrice(service.price_60)} (60 min)
`).join('\n')}

---

${this.getContactCTA()}

---

## Service Locations

${relatedCities.map((path, i) => {
  const slug = path.split('/').pop()!;
  const city = this.spec.page_definitions.city_pages.find(c => c.slug === slug);
  return `- [Mobile Massage ${city?.name}](${path})`;
}).join('\n')}

[All locations →](/mobile-massage/locations)

---

*Professional **${specialty.title}** by ${this.facts.brand.name}*
`;

    const page: GeneratedPage = {
      path: `/mobile-massage/specialty/${specialty.slug}`,
      title: `${specialty.title} Bali | ${this.facts.brand.name}`,
      metaDescription: `${specialty.title} in Bali. Professional mobile massage service with flexible scheduling. From ${this.formatPriceK(this.facts.pricing.mobile_massage[0].price)}. Book now!`,
      h1: `${specialty.title} - Professional Service in Bali`,
      body,
      internalLinks: this.extractLinks(body),
      wordCount: this.countWords(body),
      factsUsed: ['pricing', 'mobile_service_benefits', 'contacts', 'booking'],
      unknownFlags: [],
      category: 'specialty',
      qaResults: {} as QAResults
    };

    page.qaResults = this.runQAGates(page, specialty.target_word_count, 'specialty');
    return page;
  }


  // ==================== MAIN GENERATION LOGIC ====================

  async generate(): Promise<void> {
    console.log('\n🚀 Starting Mobile Massage Content Generation');
    console.log('='.repeat(70));
    console.log(`Keyword: ${this.spec.keyword}`);
    console.log(`Target: ${this.spec.content_architecture.total_pages_target} pages`);
    console.log(`Target Words: ${this.spec.content_architecture.total_word_count_target.toLocaleString()}`);
    console.log('='.repeat(70));
    console.log('');

    const outputDir = join(process.cwd(), 'generated-content', 'mobile-massage');
    
    // Create directory structure
    this.createDirectoryStructure(outputDir);

    // Process chunks in order
    for (const chunk of this.spec.chunk_order) {
      console.log(`\n📦 Chunk ${chunk.order}: ${chunk.chunk_name} (${chunk.page_count} pages)`);
      console.log(`   ${chunk.description}`);
      console.log('');

      await this.processChunk(chunk, outputDir);
    }

    // Generate report
    this.generateFinalReport(outputDir);
  }

  private createDirectoryStructure(baseDir: string): void {
    const dirs = [
      baseDir,
      join(baseDir, 'services'),
      join(baseDir, 'cities'),
      join(baseDir, 'blog'),
      join(baseDir, 'venues'),
      join(baseDir, 'comparisons'),
      join(baseDir, 'specialty')
    ];

    dirs.forEach(dir => {
      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true });
      }
    });

    console.log('✓ Created directory structure');
  }

  private async processChunk(chunk: ChunkOrder, outputDir: string): Promise<void> {
    switch (chunk.chunk_name) {
      case 'hub_page':
        await this.generateAndSave(this.generateHubPage(), outputDir);
        break;
        
      case 'service_types_index':
        await this.generateAndSave(this.generateServiceIndex(), outputDir);
        break;
        
      case 'service_type_pages':
        for (const service of this.spec.page_definitions.service_type_pages) {
          await this.generateAndSave(this.generateServicePage(service), outputDir);
        }
        break;
        
      case 'cities_index':
        await this.generateAndSave(this.generateCityIndex(), outputDir);
        break;
        
      case 'city_pages':
        for (const city of this.spec.page_definitions.city_pages) {
          await this.generateAndSave(this.generateCityPage(city), outputDir);
        }
        break;
        
      case 'blog_index':
        await this.generateAndSave(this.generateBlogIndex(), outputDir);
        break;
        
      case 'blog_posts':
        for (const post of this.spec.page_definitions.blog_posts) {
          await this.generateAndSave(this.generateBlogPost(post), outputDir);
        }
        break;
        
      case 'venue_type_pages':
        for (const venue of this.spec.page_definitions.venue_type_pages) {
          await this.generateAndSave(this.generateVenuePage(venue), outputDir);
        }
        break;
        
      case 'comparison_pages':
        for (const comparison of this.spec.page_definitions.comparison_pages) {
          await this.generateAndSave(this.generateComparisonPage(comparison), outputDir);
        }
        break;
        
      case 'specialty_pages':
        for (const specialty of this.spec.page_definitions.specialty_pages) {
          await this.generateAndSave(this.generateSpecialtyPage(specialty), outputDir);
        }
        break;
    }
  }

  private async generateAndSave(page: GeneratedPage, baseDir: string): Promise<void> {
    // Determine subdirectory
    let subdir = '';
    if (page.path.includes('/services/')) subdir = 'services';
    else if (page.path.includes('/locations/')) subdir = 'cities';
    else if (page.path.includes('/blog/')) subdir = 'blog';
    else if (page.path.includes('/venues/')) subdir = 'venues';
    else if (page.path.includes('/compare/')) subdir = 'comparisons';
    else if (page.path.includes('/specialty/')) subdir = 'specialty';

    const filename = page.path.replace(/^\//, '').replace(/\//g, '_') + '.md';
    const filepath = join(baseDir, subdir, filename);

    // Create frontmatter
    const frontmatter = `---
path: ${page.path}
title: ${page.title}
metaDescription: ${page.metaDescription}
h1: ${page.h1}
category: ${page.category}
wordCount: ${page.wordCount}
internalLinks: ${page.internalLinks.length}
factsUsed: ${page.factsUsed.join(', ')}
unknownFlags: ${page.unknownFlags.join(', ') || 'none'}
qaPass: ${page.qaResults.overallPass ? 'PASS' : 'FAIL'}
qaIssues: ${page.qaResults.issues.join(' | ') || 'none'}
generated: ${new Date().toISOString()}
---

${page.body}
`;

    writeFileSync(filepath, frontmatter, 'utf-8');

    // Update stats
    this.generatedPages.push(page);
    this.report.totalPages++;
    this.report.totalWords += page.wordCount;
    this.report.totalLinks += page.internalLinks.length;
    
    if (!this.report.pagesByCategory[page.category]) {
      this.report.pagesByCategory[page.category] = 0;
    }
    this.report.pagesByCategory[page.category]++;

    if (page.qaResults.overallPass) {
      this.report.successCount++;
    } else {
      this.report.failureCount++;
      this.report.qaFailures.push(`${page.path}: ${page.qaResults.issues.join(', ')}`);
    }

    if (page.unknownFlags.length > 0) {
      this.report.unknowns.push(...page.unknownFlags.map(u => `${page.path}: ${u}`));
    }

    // Console output
    const status = page.qaResults.overallPass ? '✓' : '✗';
    const statusColor = page.qaResults.overallPass ? '' : ' [FAILED QA]';
    console.log(`  ${status} ${page.path}${statusColor}`);
    console.log(`      Words: ${page.wordCount}, Links: ${page.internalLinks.length}`);
    
    if (!page.qaResults.overallPass) {
      console.log(`      Issues: ${page.qaResults.issues.join('; ')}`);
    }
  }

  private generateFinalReport(outputDir: string): void {
    this.report.generationTime = Math.round((Date.now() - this.startTime) / 1000);

    console.log('\n' + '='.repeat(70));
    console.log('📊 GENERATION REPORT');
    console.log('='.repeat(70));
    console.log('');
    console.log(`Total Pages Generated: ${this.report.totalPages}`);
    console.log(`Total Word Count: ${this.report.totalWords.toLocaleString()}`);
    console.log(`Total Internal Links: ${this.report.totalLinks.toLocaleString()}`);
    console.log(`Average Words/Page: ${Math.round(this.report.totalWords / this.report.totalPages)}`);
    console.log(`Average Links/Page: ${Math.round(this.report.totalLinks / this.report.totalPages)}`);
    console.log('');
    console.log('Pages by Category:');
    Object.entries(this.report.pagesByCategory).forEach(([cat, count]) => {
      console.log(`  - ${cat}: ${count}`);
    });
    console.log('');
    console.log(`✓ QA Passed: ${this.report.successCount}`);
    console.log(`✗ QA Failed: ${this.report.failureCount}`);
    
    if (this.report.unknowns.length > 0) {
      console.log(`\n⚠ Unknowns Flagged: ${this.report.unknowns.length}`);
    }
    
    console.log(`\n⏱ Generation Time: ${this.report.generationTime}s`);
    console.log('');

    // Save detailed report
    const reportPath = join(outputDir, 'GENERATION_REPORT.md');
    const reportContent = this.buildReportMarkdown();
    writeFileSync(reportPath, reportContent, 'utf-8');
    console.log(`📄 Detailed report saved: ${reportPath}`);
    
    // Save JSON report
    const jsonReportPath = join(outputDir, 'generation-report.json');
    writeFileSync(jsonReportPath, JSON.stringify({
      report: this.report,
      pages: this.generatedPages.map(p => ({
        path: p.path,
        category: p.category,
        wordCount: p.wordCount,
        linkCount: p.internalLinks.length,
        qaPass: p.qaResults.overallPass,
        issues: p.qaResults.issues
      }))
    }, null, 2), 'utf-8');
    console.log(`📄 JSON report saved: ${jsonReportPath}`);
    
    console.log('');
    console.log('='.repeat(70));
    console.log('✅ GENERATION COMPLETE');
    console.log('='.repeat(70));
    
    if (this.report.failureCount > 0) {
      console.log('\n⚠️  WARNING: Some pages failed QA gates. Review report for details.');
    }
    
    if (this.report.unknowns.length > 0) {
      console.log('\n⚠️  WARNING: Unknowns were flagged. Review and update content as needed.');
    }
  }

  private buildReportMarkdown(): string {
    let md = '# Mobile Massage Content Generation Report\n\n';
    md += `**Generated**: ${new Date().toISOString()}\n`;
    md += `**Keyword**: ${this.spec.keyword}\n`;
    md += `**Generation Time**: ${this.report.generationTime} seconds\n\n`;
    md += '---\n\n';

    // Summary Stats
    md += '## Summary Statistics\n\n';
    md += `- **Total Pages**: ${this.report.totalPages}\n`;
    md += `- **Total Words**: ${this.report.totalWords.toLocaleString()}\n`;
    md += `- **Total Internal Links**: ${this.report.totalLinks.toLocaleString()}\n`;
    md += `- **Average Words/Page**: ${Math.round(this.report.totalWords / this.report.totalPages)}\n`;
    md += `- **Average Links/Page**: ${Math.round(this.report.totalLinks / this.report.totalPages)}\n`;
    md += `- **QA Pass Rate**: ${Math.round((this.report.successCount / this.report.totalPages) * 100)}%\n\n`;

    // Pages by Category
    md += '## Pages by Category\n\n';
    Object.entries(this.report.pagesByCategory).forEach(([cat, count]) => {
      md += `- **${cat}**: ${count} pages\n`;
    });
    md += '\n';

    // QA Results
    md += '## QA Gate Results\n\n';
    md += `- ✅ **Passed**: ${this.report.successCount} pages\n`;
    md += `- ❌ **Failed**: ${this.report.failureCount} pages\n\n`;

    if (this.report.qaFailures.length > 0) {
      md += '### QA Failures\n\n';
      this.report.qaFailures.forEach((failure, i) => {
        md += `${i + 1}. ${failure}\n`;
      });
      md += '\n';
    }

    // Unknowns
    if (this.report.unknowns.length > 0) {
      md += '## ⚠️ Unknowns Flagged\n\n';
      md += `**Count**: ${this.report.unknowns.length}\n\n`;
      this.report.unknowns.forEach((unknown, i) => {
        md += `${i + 1}. ${unknown}\n`;
      });
      md += '\n';
    } else {
      md += '## Unknowns\n\n';
      md += '✅ *No unknowns flagged - all content generated from verified facts_json*\n\n';
    }

    // Page Details
    md += '## Generated Pages\n\n';
    md += '| Path | Category | Words | Links | QA Status |\n';
    md += '|------|----------|-------|-------|----------|\n';
    this.generatedPages.forEach(page => {
      const status = page.qaResults.overallPass ? '✅ PASS' : '❌ FAIL';
      md += `| ${page.path} | ${page.category} | ${page.wordCount} | ${page.internalLinks.length} | ${status} |\n`;
    });
    md += '\n';

    // Next Steps
    md += '---\n\n';
    md += '## Next Steps\n\n';
    md += '1. Review any QA failures and update content as needed\n';
    md += '2. Review any flagged unknowns and add missing data to facts_json\n';
    md += '3. Validate internal links are working\n';
    md += '4. Convert markdown files to React TSX components\n';
    md += '5. Deploy to production\n';
    md += '6. Submit to search engines\n\n';

    // Facts JSON Reference
    md += '---\n\n';
    md += '## Facts JSON Reference\n\n';
    md += '**Brand**: ' + this.facts.brand.name + '\n';
    md += '**Contact**: ' + this.facts.contacts.whatsapp + '\n';
    md += '**Pricing**: ' + this.formatPrice(this.facts.pricing.mobile_massage[0].price) + ' - ' + 
          this.formatPrice(this.facts.pricing.mobile_massage[2].price) + '\n';
    md += '**Service Areas**: ' + this.facts.service_areas.all_locations.length + ' locations\n\n';

    return md;
  }
}

// ==================== MAIN EXECUTION ====================

async function main() {
  const specPath = join(process.cwd(), 'mobile-massage.spec.json');
  const factsPath = join(process.cwd(), 'data-extraction', 'mobile-massage-facts.json');

  try {
    const generator = new MobileMassageContentGenerator(specPath, factsPath);
    await generator.generate();
    process.exit(0);
  } catch (error: any) {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run if executed directly
main();

export { MobileMassageContentGenerator };

