# Autonomous Landing Page Builder v3.1 - Quick Start Example

## Ready-to-Use Example: Massage to Hotel/Villa Page

This is a **complete, filled-in example** you can copy and paste directly into your AI tool to generate your first landing page using the v3.1 builder.

---

## COPY EVERYTHING BELOW THIS LINE

---

# AUTONOMOUS LANDING PAGE BUILDER & SEO OPTIMIZER (v3.1)

## AI Agent Execution Prompt (Optimized)

### YOUR ROLE

You are an expert SEO landing page builder. You will autonomously research, extract site data, benchmark competitors, plan, write, and output a ready-to-deploy landing page + technical SEO package without asking the user questions.

### HARD RULES
- **No follow-up questions.** If data is missing, use best-effort defaults + mark clearly as UNKNOWN (do not invent ratings/reviews).
- **No keyword stuffing.** Optimize for rankings + conversion while staying natural.
- **Output must be production-ready:** meta, schema, clean HTML structure, internal links plan, image plan.

---

## PROJECT VARIABLES (FILLED EXAMPLE)

```yaml
existing_website_url: "https://homemassageubud.com"
target_landing_page_url: "https://homemassageubud.com/massage-to-hotel"

business_name: "Home Massage Ubud"
location:
  city: "Ubud"
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

pricing_visibility: "Medium"

h1_formula: "Massage to Hotel Ubud – Fast In-Room Relief for Travelers"

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
  whatsapp: "[EXTRACT FROM WEBSITE]"
  phone: "[EXTRACT FROM WEBSITE]"
  email: "[EXTRACT FROM WEBSITE]"

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
  - "Location-specific pages"
  - "Treatment-specific pages"

execution_notes: "Include specific Ubud hotel names (Como Uma, Viceroy, Capella) and villa areas (Penestanan, Sayan, Tegallalang); emphasize convenience and time-saving; reference local landmarks (Monkey Forest, Campuhan Ridge, Yoga Barn)"
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

Write the full page content in the extracted brand voice:
- Second-person ("you"), short paragraphs, skimmable
- Clear pricing section if prices exist; otherwise show "From …" only if visible
- Include:
  - booking process (WhatsApp-first)
  - service types (6 core types max, not endless)
  - coverage/service areas
  - safety/hygiene
  - comparison vs spa/hotel spa
  - testimonials only if real quotes exist on site; otherwise use a "guest feedback highlights" block without fake names
  - FAQs (10), 120–200 words each, direct answer first

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

- [ ] Word count within target range (3200-4200)
- [ ] 20+ sections, 10 FAQs, 10+ CTAs, 12+ internal links, 12+ images
- [ ] Exact-match keyword usage within min/max, total density cap respected
- [ ] No fabricated ratings/reviews/certifications
- [ ] Canonical correct, schema validates, page is mobile-friendly

---

**BEGIN AUTONOMOUS EXECUTION NOW. DO NOT ASK FOLLOW-UP QUESTIONS. PROCEED THROUGH ALL 7 PHASES AND OUTPUT ALL 9 DELIVERABLES.**

---

## STOP COPYING HERE

---

## What Happens Next?

After you paste the above into your AI tool:

1. **Phase 1** - AI visits homemassageubud.com and extracts business data
2. **Phase 2** - AI searches Google for the 10 keywords and analyzes top competitors
3. **Phase 3** - AI creates a detailed page structure blueprint
4. **Phase 4** - AI generates SEO meta tags and schema markup
5. **Phase 5** - AI writes the full 3200-4200 word landing page in HTML
6. **Phase 6** - AI specifies all images needed with optimization details
7. **Phase 7** - AI provides technical implementation checklist

**Total Output:** 9 complete deliverables ready for implementation

## Expected Results

You should receive something like this:

```
====================
DELIVERABLE 1: BUSINESS PROFILE BLOCK
====================

Business Name: Home Massage Ubud
Location: Ubud, Bali, Indonesia
WhatsApp: [EXTRACTED: +62-XXX-XXX-XXXX]
Phone: [EXTRACTED: +62-XXX-XXX-XXXX]
Email: [EXTRACTED: info@homemassageubud.com]
Hours: 8am-10pm daily
Services: Traditional Balinese, Deep Tissue, Aromatherapy, Hot Stone, etc.
Pricing: From 300,000 IDR (visible on site)
Certifications: [EXTRACTED or UNKNOWN]
Trust Elements: [EXTRACTED]

====================
DELIVERABLE 2: SITE URL MAP
====================

Homepage: https://homemassageubud.com
Services: https://homemassageubud.com/services
About: https://homemassageubud.com/about
Pricing: https://homemassageubud.com/pricing
Contact: https://homemassageubud.com/contact
...

====================
DELIVERABLE 3: COMPETITOR PATTERN SUMMARY
====================

Top Competitors Analyzed:
1. [competitor1.com] - Ranks #1 for "massage to hotel ubud"
2. [competitor2.com] - Ranks #2 for "mobile massage ubud"
...

Patterns Found:
- Title formula: [Service] + [Location] + [Benefit/USP]
- H1 style: Direct, benefit-focused, includes primary keyword
- Content depth: 2500-3500 words average
- FAQ presence: 8-12 questions typical
...

Differentiation Opportunities:
- Faster response time (mention specific minutes)
- Clearer service area coverage
- Better price transparency
...

====================
DELIVERABLE 4: SECTION BLUEPRINT TABLE
====================

| Section | Purpose | Keywords | CTA | Image |
|---------|---------|----------|-----|-------|
| 1. Hero | Hook + quick value prop | massage to hotel ubud | Yes | hero-massage-villa.webp |
| 2. Introduction | Establish relevance | mobile massage service | No | - |
| 3. What's Included | Service clarity | in room massage ubud | No | massage-setup.webp |
...

====================
DELIVERABLE 5: META PACK
====================

<title>Massage to Hotel Ubud | Mobile Service to Your Villa</title>
<meta name="description" content="Professional massage delivered to your Ubud hotel or villa in 30 mins. WhatsApp booking. Traditional Balinese, deep tissue, aromatherapy. From 300K IDR.">
<link rel="canonical" href="https://homemassageubud.com/massage-to-hotel">
...

====================
DELIVERABLE 6: SCHEMA PACK (JSON-LD)
====================

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Home Massage Ubud",
  ...
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mobile Massage",
  ...
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
</script>

====================
DELIVERABLE 7: FULL LANDING PAGE HTML
====================

<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags from Deliverable 5 -->
  <!-- Schema from Deliverable 6 -->
</head>
<body>
  <header>
    <nav><!-- Breadcrumbs --></nav>
  </header>
  
  <main>
    <section id="hero">
      <h1>Massage to Hotel Ubud | Professional Service to Your Villa</h1>
      <p>Your shoulders are tight from travel. Your neck is stiff from long flights...</p>
      <a href="https://wa.me/62XXX" class="cta">Book via WhatsApp</a>
    </section>
    
    <section id="introduction">
      <h2>Mobile Massage Service Brings Spa Quality to Your Ubud Accommodation</h2>
      <p>...</p>
    </section>
    
    <!-- 20+ more sections -->
    
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <!-- 10 FAQs -->
    </section>
    
    <section id="final-cta">
      <h2>Ready to Book Your In-Room Massage?</h2>
      <a href="https://wa.me/62XXX" class="cta">WhatsApp Us Now</a>
    </section>
  </main>
  
  <footer><!-- Footer content --></footer>
</body>
</html>

====================
DELIVERABLE 8: IMAGE SPEC LIST
====================

| Filename | Subject | Dimensions | Format | Size | Alt Text | Lazy Load |
|----------|---------|------------|--------|------|----------|-----------|
| hero-massage-villa.webp | Therapist massaging client in luxury villa | 1920x1080 | WebP + JPG | <100KB | Professional massage therapist providing in-room massage service at Ubud villa | No (hero) |
| massage-setup.webp | Massage table setup in hotel room | 1200x800 | WebP + JPG | <80KB | Mobile massage setup with professional equipment in Ubud hotel room | Yes |
...

====================
DELIVERABLE 9: DEPLOYMENT + SPEED CHECKLIST
====================

Pre-Launch Technical Checklist:

□ Critical CSS
  - Inline above-the-fold CSS (<14KB)
  - Defer non-critical stylesheets
  
□ Image Optimization
  - Convert all images to WebP with JPG fallback
  - Implement responsive srcset for different screen sizes
  - Compress hero to <100KB, others to <80KB
  - Add lazy loading to all images except hero
  
□ Font Strategy
  - Use woff2 format
  - Preload critical fonts
  - font-display: swap
  
□ JavaScript
  - Defer non-critical scripts
  - Minify all JS
  
□ Caching & Compression
  - Enable Brotli/Gzip compression
  - Set cache headers (1 year for static assets)
  
□ Performance Checks
  - DOM size < 1500 elements
  - No heavy libraries (jQuery, etc.)
  - Minimize third-party scripts
  
Expected PageSpeed Score: 85-92 (mobile), 90-95 (desktop)
```

## Next Steps After Receiving Output

1. **Save all 9 deliverables** to separate files
2. **Review the HTML** (Deliverable 7) for accuracy
3. **Validate the schema** at validator.schema.org
4. **Implement on your site** following the deployment checklist
5. **Add the images** specified in Deliverable 8
6. **Test mobile responsiveness**
7. **Run through SEO checklist** (landing_page_seo_checklist.md)
8. **Launch to production**
9. **Submit to Google Search Console**
10. **Monitor rankings and conversions**

## Customizing This Example

To use for a different page, just change the YAML:

```yaml
# Example: Couples Massage Page
target_landing_page_url: "https://homemassageubud.com/couples-villa-massage"
service_focus: "Romantic couples massage in villa"
primary_keywords:
  - "couples massage ubud"
  - "romantic couples massage bali"
  - "in villa couples spa"
  - "private couples massage"
  # ... etc
```

Or:

```yaml
# Example: Post-Yoga Recovery Page
target_landing_page_url: "https://homemassageubud.com/post-yoga-recovery"
service_focus: "Post-yoga recovery massage for practitioners"
primary_keywords:
  - "post yoga massage ubud"
  - "yoga recovery massage bali"
  - "massage for yogis ubud"
  - "flexibility massage after yoga"
  # ... etc
```

---

**Time to generate:** 5-15 minutes  
**Time to implement:** 2-3 hours  
**Total time to live landing page:** ~3-4 hours

**Ready? Copy the prompt above and paste into your AI tool!**
