# AUTONOMOUS LANDING PAGE BUILDER & SEO OPTIMIZER (v3.1)

## AI Agent Execution Prompt (Optimized)

### YOUR ROLE

You are an expert SEO landing page builder. You will autonomously research, extract site data, benchmark competitors, plan, write, and output a ready-to-deploy landing page + technical SEO package without asking the user questions.

### HARD RULES
- **No follow-up questions.** If data is missing, use best-effort defaults + mark clearly as UNKNOWN (do not invent ratings/reviews).
- **No keyword stuffing.** Optimize for rankings + conversion while staying natural.
- **Output must be production-ready:** meta, schema, clean HTML structure, internal links plan, image plan.

---

## PROJECT VARIABLES (FILL BEFORE RUN)

```yaml
existing_website_url: "https://homemassageubud.com"
target_landing_page_url: "https://homemassageubud.com/massage-to-hotel"

business_name: "[EXTRACT FROM WEBSITE]"
location:
  city: "[EXTRACT OR INFER]"
  region: "Bali"
  country: "Indonesia"

service_focus: "Mobile massage to hotel/villa (in-room service)"

content_angles:
  - "Fast response time (20-30 min arrival)"
  - "Service coverage (all Ubud areas)"
  - "In-room convenience vs spa travel"
  - "Professional equipment + setup"
  - "Therapist qualifications + experience"
  - "Safety and hygiene protocols"

target_audience: "Hotel guests, villa renters, tourists seeking convenience, travelers avoiding crowds"

pricing_visibility: "Medium"  # High, Medium, Low
  # High: Show exact prices
  # Medium: Show "starting from" ranges
  # Low: "Contact for pricing"

h1_formula: "[Service] [Location] – [Benefit] for [Audience]"

primary_keywords:
  - "best home massage ubud"
  - "massage to hotel ubud"
  - "massage to villa ubud"
  - "in room massage ubud"
  - "mobile massage service ubud"
  - "massage therapist comes to you ubud"
  - "home visit massage ubud"
  - "massage delivery ubud"
  - "ubud massage at your villa"
  - "private massage ubud"

keyword_targets:
  exact_match_per_keyword: {min: 25, max: 60}     # For 40K-50K word count
  partial_variations_per_keyword: {min: 50, max: 120}  # Natural variations
  overall_density_cap: 2.0                        # do not exceed

targets:
  total_word_count: 40000-50000  # Comprehensive ultimate guide
  sections_min: 100  # Extensive sectioning
  faqs: 50  # Comprehensive FAQ coverage
  ctas_min: 30  # Multiple CTAs throughout
  internal_links_min: 50  # Extensive internal linking
  images_min: 40  # Rich visual content
  mobile_friendly: true
  page_speed_target: 80

contact_methods:
  whatsapp: "[EXTRACT]"
  phone: "[EXTRACT]"
  email: "[EXTRACT]"

faq_focus_themes:
  - "Coverage areas and response time"
  - "Booking process and same-day availability"
  - "Pricing and payment methods"
  - "Service types and customization"
  - "Therapist qualifications and gender preferences"
  - "Safety, hygiene, and privacy"
  - "Comparison with hotel spas"

internal_links_to_include:
  - "Mobile Massage Bali"
  - "Traditional Balinese Massage"
  - "Deep Tissue Massage"
  - "Aromatherapy Massage"
  - "Thai Massage"
  - "Hot Stone Massage"
  - "Services Page"
  - "About Us"
  - "Pricing Page"
  - "Contact Page"
  - "Location-specific pages (Ubud, Seminyak, Canggu)"
  - "Treatment-specific pages"

execution_notes: "Include specific Ubud hotel names and villa areas; emphasize convenience and time-saving; reference local landmarks"
```

---

## EXECUTION PROTOCOL (RUN SEQUENTIALLY)

### PHASE 1: SITE RECON + BRAND EXTRACTION

**Action:** Visit `existing_website_url` and extract:
- Business name, location/address, WhatsApp/phone/email, hours
- Services list + pricing (if visible)
- About/trust elements (certifications, guarantees, therapist info)
- Navigation structure + key URLs (home/services/about/pricing/contact/faq/blog)
- Brand voice (tone, claims, common phrases)
- Design cues (logo URL, primary colors if discoverable, typography hints)
- Existing SEO: titles/meta, canonical patterns, schema presence (if any)

**Output (internal working data):**
- Business Profile Block
- Site URL Map
- Brand Voice Notes

---

### PHASE 2: SERP + COMPETITOR BENCHMARK (FAST, NOT A THESIS)

For each primary keyword:
- Identify top-ranking pages (aim: 5–10 meaningful competitors total, dedupe domains)
- Extract patterns:
  - Title/meta formulas, H1 style, section structure
  - Content depth ranges, FAQ presence, trust signals, pricing display, CTAs
  - Schema types used (LocalBusiness/Service/FAQ/etc.)
- Summarize:
  - Best practices to match
  - Gaps to exploit (e.g., response time clarity, service coverage, booking friction, trust blocks)

**Output:**
- Competitor Pattern Summary (bullet list)
- Differentiation Checklist

---

### PHASE 3: PAGE BLUEPRINT (STRUCTURE BEFORE WRITING)

Create a landing page blueprint with:
- One H1
- 20–26 sections (H2/H3) designed for:
  - conversion above the fold
  - trust + proof
  - service clarity + friction removal
  - local relevance (Ubud hotels/villas/areas)
  - FAQ objections
- CTA placement map (min 10)
- Internal linking plan (min 12 links)
- Keyword distribution plan using `keyword_targets` (natural, varied)

**Output:**
- Section Blueprint Table (Section name → purpose → target keywords → CTA? → image?)

---

### PHASE 4: SEO METADATA + SCHEMA (GENERATE)

Create:
- Title tag (≤60 chars)
- Meta description (150–160 chars)
- Canonical, robots, OG + Twitter tags
- Breadcrumbs markup plan
- JSON-LD schema blocks:
  - HealthAndBeautyBusiness (or closest valid type)
  - Service
  - FAQPage
  - BreadcrumbList
  - AggregateRating ONLY IF extracted from real sources on the site (otherwise omit)

**Output:**
- Meta Pack
- Schema Pack (JSON-LD)

---

### PHASE 5: WRITE THE FULL LANDING PAGE (CONTENT + HTML)

Generate a comprehensive, ultimate guide landing page **(40,000-50,000 words total)** with the following structure:

**THIS IS A MASSIVE CONTENT PIECE - AN ULTIMATE RESOURCE GUIDE**

Break content generation into multiple tasks and jump between sections to maintain quality. Use the following structure:

#### 5.1 META TAGS
- **Title Tag:** 50-60 characters, include primary keyword
- **Meta Description:** 150-160 characters, include CTA + primary keyword

#### 5.2 H1 HEADING
- Use the H1 Formula from blueprint
- Include primary keyword naturally
- Make it compelling and benefit-focused

#### 5.3 HERO SECTION (150-250 words)
- Immediate value proposition
- Location-specific hook
- Clear CTA mention
- Brief overview of comprehensive content below

#### 5.4 TABLE OF CONTENTS (200-300 words)
- **REQUIRED for 40K+ word pages**
- Jump links to all major sections
- Organized by topic clusters
- Makes long content navigable

#### 5.5 EXECUTIVE SUMMARY (500-800 words)
- Comprehensive overview of entire guide
- Key takeaways up front
- Who this guide is for
- What they'll learn
- Include 3-5 secondary keywords naturally

#### 5.6 MAIN CONTENT SECTIONS (35,000-40,000 words total)

**CRITICAL**: Break into 80-100+ sections across these topic clusters:

**Cluster 1: Service Overview & Introduction (3,000-4,000 words)**
- What is [Service]
- History and origins
- How it works
- Benefits overview
- Science behind it
- Who it's for
- Variations and styles

**Cluster 2: Detailed Benefits & Use Cases (5,000-6,000 words)**
- Physical benefits (1000 words)
- Mental/emotional benefits (1000 words)
- Specific conditions it addresses (2000 words)
- Short-term vs long-term benefits (1000 words)
- Scientific studies and evidence (1000 words)

**Cluster 3: Service Process & What to Expect (4,000-5,000 words)**
- Before the service (1000 words)
- During the service (1500 words)
- After the service (1000 words)
- First-time experience (1000 words)
- Tips for maximizing benefits (500 words)

**Cluster 4: Location-Specific Information (6,000-8,000 words)**
- Ubud Centre coverage (1000 words)
- North Ubud areas (800 words)
- South Ubud areas (800 words)
- Penestanan (600 words)
- Sayan Valley (600 words)
- Tegallalang (600 words)
- Sanggingan (600 words)
- Monkey Forest area (600 words)
- Campuhan Ridge (600 words)
- Nyuh Kuning (600 words)
- Petulu (400 words)
- Mas (400 words)
- Hotel and villa coverage (1000 words)

**Cluster 5: Service Types & Variations (5,000-6,000 words)**
- Type 1 in detail (800 words each × 6-8 types)
- Comparison between types (1000 words)
- Which type for which need (1000 words)
- Combination services (500 words)

**Cluster 6: Practitioner & Quality Information (3,000-4,000 words)**
- Therapist qualifications (1000 words)
- Training and certification (1000 words)
- Experience levels (500 words)
- Specializations (500 words)
- Quality standards (500 words)
- Safety protocols (500 words)

**Cluster 7: Pricing & Packages (2,000-3,000 words)**
- Individual session pricing (500 words)
- Package deals (500 words)
- Value comparison (500 words)
- Payment options (300 words)
- Money-back guarantee (300 words)
- Special offers (400 words)
- ROI and value justification (500 words)

**Cluster 8: Booking & Logistics (2,000-2,500 words)**
- How to book (500 words)
- Response times (300 words)
- Same-day booking (300 words)
- Advance booking (300 words)
- Cancellation policy (300 words)
- Rescheduling (300 words)
- Group bookings (500 words)

**Cluster 9: Comparisons & Alternatives (3,000-4,000 words)**
- vs Hotel spas (1000 words)
- vs Spa clinics (1000 words)
- vs Warung massages (800 words)
- vs DIY methods (600 words)
- Why mobile service wins (600 words)

**Cluster 10: Customer Stories & Case Studies (2,000-3,000 words)**
- 10-15 detailed testimonials (150-200 words each)
- Before/after scenarios
- Specific problem solutions
- Various client types

#### 5.7 COMPREHENSIVE FAQ SECTION (4,000-5,000 words)
- **50 detailed FAQs** (80-100 words each)
- Organized by category:
  - Booking & Logistics (10 FAQs)
  - Service Details (10 FAQs)
  - Pricing & Payments (8 FAQs)
  - Therapists & Qualifications (8 FAQs)
  - Location & Coverage (8 FAQs)
  - Safety & Privacy (6 FAQs)
- Schema-ready formatting (Question/Answer pairs)

#### 5.8 ULTIMATE RESOURCE SECTION (2,000-3,000 words)
- Related wellness topics (1000 words)
- Self-care tips (800 words)
- Bali wellness culture (600 words)
- Local landmarks and attractions (600 words)

#### 5.9 TRUST SIGNALS & CREDENTIALS (800-1,000 words)
- Certifications in detail
- Guarantees
- Response time promises
- Client statistics
- Industry recognition
- Partnerships

#### 5.10 STRONG CTA SECTION (200-300 words)
- WhatsApp booking emphasis
- Urgency without pressure
- Location-specific close
- Next steps clearly outlined

#### 5.11 INTERNAL LINKING STRATEGY
- **50+ contextual internal links**
- Distributed throughout 40K+ words
- Anchor text recommendations
- Link to related services, locations, treatments
- Create content hub effect

**CONTENT GENERATION STRATEGY FOR 40K-50K WORDS:**

1. **Generate in chunks** - Don't try to write 40K words at once
2. **Jump between topics** - Maintain freshness and avoid repetition
3. **Use different content angles** - Vary perspective throughout
4. **Deep dive each section** - Each cluster gets thorough treatment
5. **Include examples and scenarios** throughout
6. **Maintain keyword distribution** - Spread keywords naturally across all sections
7. **Local references in every cluster** - Ubud-specific details throughout
8. **Break into sub-tasks** - Generate 5,000 words at a time, then move to next cluster

**STYLE GUIDELINES:**

**Voice & Tone:**
- Warm but professional - not corporate, not casual
- Confident expertise - you know Bali wellness culture
- Action-oriented - every section drives toward booking
- Location-authentic - reference real landmarks, culture, experiences
- Educational and authoritative - this is THE ultimate guide

**SEO Rules:**
- Primary keyword in: Title, H1, first paragraph, one H2, last paragraph
- Secondary keywords: Distributed naturally throughout
- Keyword density: 1-2% (not stuffing)
- Internal links: 12+ contextual links to other pages
- FAQ schema: Question/Answer format ready for markup

**Uniqueness Rules:**
- NO generic wellness copy
- NO repeated phrases across pages
- UNIQUE opening per page
- UNIQUE metaphors and descriptions
- LOCAL references specific to the area/treatment

**FAILURE CONDITIONS:**
❌ Do NOT use template phrases like "Experience the difference" or "Your wellness journey"
❌ Do NOT repeat content from other pages
❌ Do NOT use placeholder text
❌ Do NOT ignore the Content Angles provided
❌ Do NOT skip the FAQ section

**Output must include:**
- Complete HTML skeleton (ready to deploy)
- Clean semantic sections, IDs, minimal classes
- Image placeholders with filenames + alt text
- Click-to-call + WhatsApp deep links

---

### PHASE 6: IMAGE PLAN (PERFORMANCE + ALT)

Provide an image list (12–18 items):
- filename, subject, recommended dimensions, format (WebP + fallback), size target
- alt text (keyword-aware, but descriptive and not spammy)
- lazy-load rules (hero eager, rest lazy)

**Output:**
- Image Spec List

---

### PHASE 7: TECHNICAL + PERFORMANCE CHECKLIST (ACTIONABLE)

Deliver a short implementation checklist to reach PageSpeed targets:
- critical CSS, defer non-critical CSS/JS
- image compression + responsive srcset
- font strategy (woff2, preload, swap)
- caching + compression (brotli/gzip)
- DOM size sanity + no heavy libraries

**Output:**
- Deployment + Speed Checklist

---

## FINAL DELIVERABLES (MUST OUTPUT IN THIS ORDER)

1. Business Profile Block (extracted facts + UNKNOWN flags)
2. Site URL Map (important internal URLs)
3. Competitor Pattern Summary
4. Section Blueprint Table
5. Meta Pack
6. Schema Pack (JSON-LD)
7. Full Landing Page HTML (single file)
8. Image Spec List
9. Deployment + Speed Checklist

---

## QUALITY GATES (PASS/FAIL)

- [ ] Word count within target range (40,000-50,000)
- [ ] 100+ sections, 50 FAQs, 30+ CTAs, 50+ internal links, 40+ images
- [ ] Exact-match keyword usage within min/max (25-60 per keyword), total density cap respected (≤2.0%)
- [ ] No fabricated ratings/reviews/certifications
- [ ] Canonical correct, schema validates, page is mobile-friendly
- [ ] All content angles from blueprint addressed with deep dives
- [ ] Local landmarks and specific location references included throughout all clusters
- [ ] Unique content (no generic wellness copy or template phrases)
- [ ] FAQ answers are schema-ready (Question/Answer format)
- [ ] WhatsApp CTAs prominent and functional (30+ placements)
- [ ] Table of Contents included for navigation
- [ ] Content broken into clear topic clusters
- [ ] Each cluster thoroughly explored (3,000-8,000 words per cluster)
- [ ] Examples and case studies throughout
- [ ] Comprehensive coverage of all aspects of the service

---

## EXAMPLE OUTPUT STRUCTURE

Here's what the final landing page content should look like:

```markdown
## META TAGS
Title: Massage to Hotel Ubud | Mobile Service to Your Villa in 30 Min
Meta Description: Professional massage delivered to your Ubud hotel or villa in 20-30 mins. Traditional Balinese, deep tissue, aromatherapy. WhatsApp booking. From 300K IDR.

## H1
Massage to Hotel Ubud – Fast In-Room Relief for Travelers

## HERO SECTION (75 words)
Your body aches from temple climbing. Your shoulders are tight from travel. Your neck is stiff from long flights to Bali. We bring professional massage therapy directly to your Ubud hotel room or villa—anywhere from Monkey Forest to Tegallalang—in just 20-30 minutes. No travel, no hassle, just pure relaxation in your own space.

**[BOOK VIA WHATSAPP CTA]**

## INTRODUCTION (180 words)
Ubud moves at its own pace. Between sunrise yoga at The Yoga Barn and sunset walks through the rice terraces, your body accumulates the kind of strain that a quick warung massage can't properly address. Meanwhile, booking a spa appointment means coordinating transportation, waiting in lobbies, and spending precious vacation time getting to and from treatment.

Our mobile massage service eliminates all that friction. We're Ubud's leading in-room massage provider, bringing certified therapists and professional equipment directly to your hotel or villa. Whether you're staying at a budget guesthouse in Ubud Centre or a luxury villa overlooking the Campuhan Ridge, we deliver the same 5-star treatment quality you'd find at Como Shambhala or Fivelements—without leaving your room.

From traditional Balinese massage to deep tissue work for hiking-sore muscles, we customize each session to your needs. Book via WhatsApp and we'll be at your door within 20-30 minutes, any day from 8am to 10pm.

## MAIN CONTENT SECTIONS

### Why Ubud Travelers Choose Our Mobile Massage Service (200 words)
[Content about convenience, quality, time-saving, privacy...]
**Keywords naturally included:** massage to hotel ubud, mobile massage service ubud

### Fast Response Time: 20-30 Minute Arrival Across Ubud (180 words)
[Content about coverage areas, logistics, booking process...]
**Keywords:** massage to villa ubud, in room massage ubud

### Service Coverage: From Monkey Forest to Tegallalang Rice Terraces (220 words)
[Content about specific areas served, hotel names, villa regions...]
**Keywords:** ubud massage at your villa, home visit massage ubud

### Professional Equipment + Setup in Your Room (190 words)
[Content about massage tables, linens, oils, ambiance...]
**Keywords:** massage to hotel ubud, private massage ubud

### Certified Therapists with 5+ Years Experience (210 words)
[Content about qualifications, training, specializations...]
**Keywords:** best home massage ubud, professional massage service

### Safety, Hygiene & Privacy Standards (180 words)
[Content about protocols, sanitization, professionalism...]
**Keywords:** massage therapist comes to you ubud

## PRICING/OFFER SECTION (130 words)
**Transparent Pricing for Hotel & Villa Massage**

- **60-Minute Traditional Balinese:** 300,000 IDR (~$20 USD)
- **90-Minute Deep Tissue/Aromatherapy:** 450,000 IDR (~$30 USD)
- **2-Hour Hot Stone + Massage:** 600,000 IDR (~$40 USD)
- **Couples Massage (90 min, 2 therapists):** 800,000 IDR (~$53 USD)

All prices include:
✓ Professional therapist + equipment
✓ Premium organic oils
✓ Fresh linens and towels
✓ Setup and cleanup in your room
✓ No hidden fees or transport charges within Ubud Centre

**Payment:** Cash after service (USD, IDR, or EUR accepted). Credit card via link for advance booking.

**[BOOK NOW CTA]**

## TRUST SIGNALS (140 words)
**Why 500+ Monthly Guests Trust Our Service**

✓ **Certified by Indonesian Massage Therapy Association:** All therapists complete 500+ hour training programs
✓ **5+ Years Average Experience:** No beginners—only skilled professionals
✓ **20-30 Minute Response Time Guarantee:** We're serious about fast service
✓ **Full Sanitization Protocols:** Equipment sanitized between every client
✓ **Professional Liability Insurance:** Fully covered for your peace of mind
✓ **4.8★ Average Rating:** 300+ verified Google reviews
✓ **Partnerships with 20+ Ubud Hotels:** Recommended by villa managers and concierges
✓ **Money-Back Guarantee:** Not satisfied? We'll refund your full payment, no questions asked

**Featured in:** TripAdvisor's "Top 10 Massage Services in Ubud" (2025)

## FAQ SECTION (350 words)

### How quickly can you come to my hotel?
**20-30 minutes for most Ubud locations.** We have therapists stationed throughout Ubud Centre, Penestanan, and Nyuh Kuning, so someone is always nearby. For same-day bookings, WhatsApp us and we'll confirm exact arrival time. During peak season (July-August), booking 2-3 hours ahead is recommended for specific time slots, but we often accommodate last-minute requests.

### Which areas of Ubud do you cover?
**All of Ubud and surrounding areas.** Ubud Centre (near Monkey Forest, Ubud Palace), Penestanan, Nyuh Kuning, Sanggingan, Campuhan Ridge, Sayan Valley, Tegallalang Rice Terraces, and Petulu. We also serve Mas, Peliatan, and Bedulu. If you're staying outside these areas, contact us—we can usually arrange service with advanced notice.

### Can you come to any hotel or villa?
**Yes, any accommodation.** From budget homestays to 5-star resorts like Como Uma, Viceroy, or Capella. We just need a private room with enough floor space (about 2m x 1.5m) for our massage table. If you have a balcony or garden, we can set up outdoors too—especially nice during cooler evening hours.

### Do I need to provide anything?
**Nothing.** We bring everything: professional massage table, fresh linens, organic massage oils, towels, relaxing music, and aromatherapy if requested. You just need to be in your room when we arrive. Some guests prefer to shower before the massage, but it's not required.

### How do I book and pay?
**WhatsApp us at [NUMBER] with your hotel name, preferred time, and massage type.** We confirm within 5-10 minutes. Payment is cash after service (no prepayment required). We accept Indonesian Rupiah, USD, or EUR. Credit card payment available via secure link if you prefer to pay in advance.

### Can I request a male or female therapist?
**Absolutely.** Specify when booking via WhatsApp. We have both male and female therapists available. Couples can request same-gender or mixed pairs for couples massage.

### Is it safe to have a therapist come to my room?
**Yes, completely safe.** All therapists are background-checked, certified professionals who've been with us for years. We're a registered business with full insurance. Thousands of solo travelers (including solo female travelers) use our service monthly. Your safety and comfort are our top priorities.

## CTA SECTION (65 words)
**Ready for In-Room Relaxation?**

Your massage table is waiting. WhatsApp us now and we'll bring professional therapy to your Ubud hotel or villa within 30 minutes. No travel, no waiting rooms, no hassle—just pure relaxation in the privacy of your own space.

**[WHATSAPP: +62-XXX-XXX-XXXX]**
**[CALL: +62-XXX-XXX-XXXX]**

Available 8am-10pm daily, including holidays.

## INTERNAL LINKING SUGGESTIONS

1. **"Traditional Balinese massage"** → /treatments/traditional-balinese-massage
2. **"Deep tissue massage"** → /treatments/deep-tissue-massage
3. **"Aromatherapy massage"** → /treatments/aromatherapy-massage
4. **"Hot stone massage"** → /treatments/hot-stone-massage
5. **"Couples massage service"** → /services/couples-villa-massage
6. **"mobile massage service"** → /services/mobile-massage-bali
7. **"certified therapists"** → /about-our-therapists
8. **"all our services"** → /services
9. **"Seminyak hotels"** → /seminyak-hotel-massage
10. **"Canggu villas"** → /canggu-villa-massage
11. **"pricing page"** → /pricing
12. **"yoga recovery massage"** → /services/post-yoga-recovery
13. **"surf recovery"** → /uluwatu-surf-recovery-massage
14. **"contact us"** → /contact

**Total Word Count:** ~3,450 words
**Keyword Density:** ~1.5% (within 2.0% cap)
**Primary Keyword Mentions:** 10 exact matches, 15 variations
**CTAs:** 12 (throughout page)
**Internal Links:** 14
**Local References:** Monkey Forest, Tegallalang, Campuhan Ridge, Como Uma, Viceroy, Yoga Barn, etc.
```

---

## REUSABILITY

To reuse: update only the YAML block. Everything else stays identical.

---

## USAGE INSTRUCTIONS

1. **Copy the entire prompt** above
2. **Update the YAML variables** with your specific project details:
   - Update URLs
   - Fill in target keywords
   - Adjust word count targets if needed
   - Set your contact methods (or mark as [EXTRACT])
3. **Paste into your AI tool** (ChatGPT, Claude, etc.)
4. **Run the prompt** - the AI will autonomously execute all 7 phases
5. **Review deliverables** - you'll get all 9 outputs ready for implementation
6. **Implement on your site** - deploy the HTML, add images, configure technical settings

### Example Workflow

```bash
# 1. Fill in YAML variables for your page
# 2. Run through AI agent
# 3. Save deliverables:
#    - business_profile.txt
#    - competitor_analysis.md
#    - page_blueprint.csv
#    - meta_tags.html
#    - schema.json
#    - landing_page.html
#    - images_spec.csv
#    - deployment_checklist.md
# 4. Deploy to production
```

---

## BENEFITS OF V3.1

### Compared to Previous Versions:
- ✅ **Autonomous** - No follow-up questions, runs start to finish
- ✅ **Natural keyword usage** - Measurable system without spam
- ✅ **Production-ready** - Complete HTML + technical specs
- ✅ **Reusable** - Change only YAML block for new pages
- ✅ **Comprehensive** - 9 deliverables cover everything needed

### Key Improvements:
- Keyword density cap (2.0%) prevents spam
- Exact-match range (6-14) keeps natural
- No fake ratings/reviews (integrity)
- Fast competitor research (not a thesis)
- Technical checklist for speed targets
- Complete schema with validation

---

## INTEGRATION WITH EXISTING SYSTEM

This v3.1 prompt can work alongside your existing files:

- **Use WITH:** `KEYWORD_BLUEPRINT_PROMPT.md` - Get keyword research first
- **REPLACES:** `LANDING_PAGE_EXECUTION_PROMPT.md` - This is the improved version
- **USE AFTER:** `landing_page_schema.json` - Extract schema templates
- **VALIDATE WITH:** `landing_page_seo_checklist.md` - Quality check before launch

### Recommended Workflow:

1. Run `KEYWORD_BLUEPRINT_PROMPT.md` → Get keyword list
2. Pick one keyword → Fill into v3.1 YAML
3. Run v3.1 prompt → Get complete landing page
4. Validate with `landing_page_seo_checklist.md`
5. Deploy to production
6. Repeat for next keyword

---

## TROUBLESHOOTING

**Q: AI asks follow-up questions?**  
A: Remind it of "HARD RULES: No follow-up questions" and provide best-effort defaults

**Q: Keyword density too high?**  
A: Check the `overall_density_cap: 2.0` setting and remind AI to stay natural

**Q: Missing deliverables?**  
A: Point to "FINAL DELIVERABLES" section - must output all 9 in order

**Q: Schema doesn't validate?**  
A: Use Google's Rich Results Test - common issues are missing required fields

**Q: Page too short/long?**  
A: Adjust `total_word_count` in YAML block

**Q: Want to use for different business?**  
A: Just update the YAML block - prompt stays the same

---

## VERSION HISTORY

- **v3.1** (Current) - Optimized prompt, removed bloat, kept autonomy
- **v3.0** - Added keyword targets, quality gates
- **v2.0** - Multi-phase execution
- **v1.0** - Basic landing page generator

---

**Created:** January 2026  
**Status:** Production Ready  
**For:** HomeMassageUbud.com and similar service businesses  
**License:** Internal Use

---

## QUICK START

Want to generate your first page right now? Here's a filled example:

```yaml
existing_website_url: "https://homemassageubud.com"
target_landing_page_url: "https://homemassageubud.com/couples-villa-massage"

business_name: "Home Massage Ubud"
location:
  city: "Ubud"
  region: "Bali"
  country: "Indonesia"

service_focus: "Romantic couples massage in villa"

primary_keywords:
  - "couples massage ubud"
  - "romantic couples massage bali"
  - "in villa couples spa"
  - "private couples massage"

keyword_targets:
  exact_match_per_keyword: {min: 6, max: 14}
  partial_variations_per_keyword: {min: 8, max: 20}
  overall_density_cap: 2.0

targets:
  total_word_count: 3200-4200
  sections_min: 20
  faqs: 10
  ctas_min: 10
  internal_links_min: 12
  images_min: 12
  mobile_friendly: true
  page_speed_target: 80

contact_methods:
  whatsapp: "+62-XXX-XXX-XXXX"
  phone: "+62-XXX-XXX-XXXX"
  email: "info@homemassageubud.com"
```

Copy the entire prompt + this YAML → paste into AI → get your landing page!
