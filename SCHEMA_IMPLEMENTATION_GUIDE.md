# Schema.org Implementation Guide for Home Massage Ubud

## 📋 Table of Contents
1. [Overview](#overview)
2. [Schema Types Implemented](#schema-types-implemented)
3. [Where Schemas Are Located](#where-schemas-are-located)
4. [Service Schema Template](#service-schema-template)
5. [How to Customize for Different Services](#how-to-customize-for-different-services)
6. [Breadcrumb Schema](#breadcrumb-schema)
7. [Testing Your Schemas](#testing-your-schemas)
8. [Mobile Service Business Requirements](#mobile-service-business-requirements)
9. [Best Practices](#best-practices)

---

## Overview

This guide explains how schema.org structured data (JSON-LD format) is implemented on homemassageubud.com and how to customize it for different services.

**What is Schema.org?**
Schema.org provides a vocabulary that helps search engines understand your content better, enabling rich results like:
- Business information cards in search results
- Star ratings and review counts
- FAQ accordions
- Breadcrumb navigation
- Service listings with pricing

**Why JSON-LD?**
JSON-LD (JavaScript Object Notation for Linked Data) is Google's recommended format because:
- It's easy to add and maintain
- Doesn't interfere with visible HTML
- Can be dynamically generated
- Easier to validate and debug

---

## Schema Types Implemented

### 1. HealthAndBeautyBusiness (LocalBusiness)
**Location:** `client/index.html` - Loaded on EVERY page

**Purpose:** Represents your core business entity with NAP (Name, Address, Phone) information

**Key Properties:**
- `@type: "HealthAndBeautyBusiness"` - More specific than "LocalBusiness"
- `@id` - Unique identifier that other schemas reference
- `name` - Business name
- `address` - Operational location (Ubud, Bali)
- `geo` - GPS coordinates for local search
- `areaServed` - Service areas (required for mobile businesses)
- `openingHours` - Availability schedule
- `aggregateRating` - Overall ratings and review count

### 2. Service Schema
**Location:** Dynamically generated on treatment/service pages

**Purpose:** Describes specific massage services offered

**Key Properties:**
- `@type: "Service"`
- `serviceType` - Type of service (e.g., "Massage Therapy")
- `name` - Service name (e.g., "Balinese Massage")
- `description` - Detailed service description
- `provider` - References LocalBusiness via @id
- `areaServed` - Where this service is available
- `offers` - Pricing and availability

### 3. FAQPage Schema
**Location:** Pages with FAQ sections

**Purpose:** Marks up frequently asked questions for FAQ rich results

### 4. BreadcrumbList Schema
**Location:** All pages with navigation breadcrumbs

**Purpose:** Shows navigation path in search results

### 5. Review Schema
**Location:** Testimonials page

**Purpose:** Marks up customer reviews and ratings

---

## Where Schemas Are Located

### Global Schema (Every Page)
```
client/index.html
└── HealthAndBeautyBusiness schema (lines 37-125)
    - Loaded in <head> section
    - Appears on ALL pages automatically
    - Single source of truth for business info
```

### Page-Specific Schemas (Dynamic)
```
client/src/components/SchemaMarkup.tsx
├── Service schema generator
├── Review schema generator
├── FAQPage schema generator
└── BreadcrumbList schema generator
```

Used by:
- `TreatmentPageTemplate.tsx` - Service & FAQ schemas
- `AreaPageTemplate.tsx` - Service & FAQ schemas
- `Testimonials.tsx` - Review schemas
- Various pages - Breadcrumb schemas

---

## Service Schema Template

### Basic Service Schema Structure

Here's the complete structure with detailed comments:

```json
{
  "@context": "https://schema.org",
  
  // SCHEMA TYPE: Service
  // Use "Service" for general services
  // Alternative types: "MedicalProcedure", "TherapeuticProcedure" (more specific)
  "@type": "Service",
  
  // SERVICE NAME: The specific treatment name
  // Should match the page heading (H1) exactly
  // Example: "Traditional Balinese Massage", "Deep Tissue Massage"
  "name": "Balinese Massage Ubud",
  
  // SERVICE DESCRIPTION: Detailed description of what's included
  // Should be 150-250 characters for optimal display
  // Focus on benefits, techniques, and what makes it unique
  "description": "Authentic traditional Balinese massage combining gentle stretches, acupressure, and aromatherapy oils. Relieves muscle tension, improves circulation, and promotes deep relaxation in your villa.",
  
  // SERVICE TYPE: Category of service
  // Common values: "Massage Therapy", "Spa Treatment", "Wellness Service"
  "serviceType": "Massage Therapy",
  
  // PROVIDER: Link to your business entity
  // IMPORTANT: Always use @id reference, NOT full business details
  // This links to the HealthAndBeautyBusiness schema in index.html
  "provider": {
    "@id": "https://homemassageubud.com/#localbusiness"
  },
  
  // AREA SERVED: Where you provide this specific service
  // Can be a single area or array of areas
  // Must be locations where therapists actually travel
  "areaServed": [
    {
      "@type": "City",
      "name": "Ubud",
      "addressRegion": "Bali",
      "addressCountry": "Indonesia"
    },
    {
      "@type": "City",
      "name": "Tegallalang",
      "addressRegion": "Bali",
      "addressCountry": "Indonesia"
    }
  ],
  
  // OFFERS: Pricing and package options
  // Include multiple offers if you have different durations/packages
  "offers": [
    {
      "@type": "Offer",
      
      // OFFER NAME: Package duration or name
      // Examples: "60 Minutes", "90 Minutes", "2-Hour Premium Package"
      "name": "60 Minutes",
      
      // DESCRIPTION: What's included in this package
      "description": "Full body traditional Balinese massage with premium essential oils",
      
      // PRICE: Numeric value only (no currency symbols)
      // For IDR 450,000, use "450000"
      "price": "450000",
      
      // PRICE CURRENCY: ISO 4217 currency code
      // IDR = Indonesian Rupiah
      "priceCurrency": "IDR",
      
      // AVAILABILITY: Service availability status
      // Options: InStock, OutOfStock, PreOrder, Discontinued
      "availability": "https://schema.org/InStock",
      
      // URL: Direct link to this service page or booking page
      "url": "https://homemassageubud.com/ubud/balinese-massage"
    },
    {
      "@type": "Offer",
      "name": "90 Minutes",
      "description": "Extended Balinese massage with hot stone therapy",
      "price": "650000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "url": "https://homemassageubud.com/ubud/balinese-massage"
    }
  ],
  
  // SERVICE URL: Main page for this service
  // Should be the canonical URL of the service page
  "url": "https://homemassageubud.com/ubud/balinese-massage"
}
```

### Service Schema Template for React Component

The `SchemaMarkup.tsx` component automatically generates service schemas. Here's how to use it:

```tsx
import SchemaMarkup from '@/components/SchemaMarkup';

// In your component:
<SchemaMarkup
  type="service"
  data={{
    name: "Deep Tissue Massage Ubud",
    description: "Intensive therapeutic massage targeting chronic muscle tension and knots. Uses deep pressure and slow strokes to reach deeper muscle layers and fascia.",
    serviceType: "Massage Therapy",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan"],
    offers: [
      {
        name: "60 Minutes",
        description: "Focused deep tissue work on problem areas",
        price: "500000",
      },
      {
        name: "90 Minutes",
        description: "Full body deep tissue with stretching",
        price: "700000",
      }
    ],
    url: "https://homemassageubud.com/ubud/deep-tissue-massage"
  }}
/>
```

---

## How to Customize for Different Services

### Example 1: Hot Stone Massage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Hot Stone Massage Ubud",
    description: "Therapeutic massage using heated volcanic stones to melt away tension, improve circulation, and induce deep relaxation. Combines heat therapy with Swedish massage techniques.",
    serviceType: "Massage Therapy",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan"],
    offers: [
      {
        name: "90 Minutes",
        description: "Full body hot stone massage with aromatherapy",
        price: "750000",
      },
      {
        name: "2 Hours",
        description: "Extended hot stone therapy with facial massage",
        price: "950000",
      }
    ],
    url: "https://homemassageubud.com/ubud/hot-stone-massage"
  }}
/>
```

### Example 2: Couples Massage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Couples Massage Ubud",
    description: "Romantic side-by-side massage experience for two in your villa. Choose from Balinese, aromatherapy, or deep tissue. Includes flower petals and candles.",
    serviceType: "Massage Therapy",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan", "Campuhan"],
    offers: [
      {
        name: "60 Minutes for Two",
        description: "Side-by-side Balinese massage with romantic setup",
        price: "900000",
      },
      {
        name: "90 Minutes for Two",
        description: "Extended couples massage with hot stones",
        price: "1300000",
      }
    ],
    url: "https://homemassageubud.com/ubud/couples-massage"
  }}
/>
```

### Example 3: Pregnancy Massage (Specialized)

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Pregnancy Massage Ubud",
    description: "Safe prenatal massage by certified therapists. Relieves back pain, reduces swelling, and promotes relaxation during pregnancy. Available after first trimester with doctor approval.",
    serviceType: "Prenatal Massage",  // More specific type
    areaServed: ["Ubud", "Tegallalang", "Sanggingan"],
    offers: [
      {
        name: "60 Minutes",
        description: "Gentle prenatal massage in safe side-lying position",
        price: "550000",
      }
    ],
    url: "https://homemassageubud.com/ubud/pregnancy-massage"
  }}
/>
```

### Customization Checklist

When creating a new service page:

- [ ] Update `name` to match the H1 heading exactly
- [ ] Write a compelling 150-250 character `description`
- [ ] Choose appropriate `serviceType` (usually "Massage Therapy")
- [ ] Update `areaServed` with actual service locations
- [ ] Add all pricing tiers to `offers` array
- [ ] Update `url` to match the page's canonical URL
- [ ] Ensure prices match visible pricing on page
- [ ] Test with Google Rich Results Test

---

## Breadcrumb Schema

Breadcrumbs help Google understand your site structure and can appear in search results.

### Breadcrumb Structure

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://homemassageubud.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://homemassageubud.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Deep Tissue Massage",
      "item": "https://homemassageubud.com/ubud/deep-tissue-massage"
    }
  ]
}
```

### React Component Usage

```tsx
<SchemaMarkup
  type="breadcrumb"
  data={[
    { name: "Home", url: "https://homemassageubud.com/" },
    { name: "Ubud Services", url: "https://homemassageubud.com/ubud" },
    { name: "Balinese Massage", url: "https://homemassageubud.com/ubud/balinese-massage" }
  ]}
/>
```

### Breadcrumb Best Practices

1. **Always start with "Home"** as position 1
2. **Match visible breadcrumbs** - Schema should mirror what users see
3. **Use full URLs** - Include complete https:// URLs
4. **Keep it logical** - Follow actual site hierarchy
5. **Last item** - Should be the current page

---

## Testing Your Schemas

### 1. Google Rich Results Test (Recommended)

**URL:** https://search.google.com/test/rich-results

**How to test:**
1. Visit the Rich Results Test tool
2. Enter your page URL OR paste the schema code
3. Click "Test URL" or "Test Code"
4. Review results for errors and warnings

**What to check:**
- ✅ No critical errors
- ✅ All schema types detected correctly
- ✅ Provider references work (LocalBusiness @id)
- ✅ Prices and contact info display correctly

### 2. Schema.org Validator

**URL:** https://validator.schema.org/

**How to test:**
1. Copy your JSON-LD schema
2. Paste into the validator
3. Check for syntax errors and warnings

### 3. Testing Checklist

For each page with schema:

- [ ] No JSON syntax errors (missing commas, brackets)
- [ ] All required properties included
- [ ] Content matches what's visible on page
- [ ] Prices match displayed prices exactly
- [ ] Phone number in international format (+62-xxx)
- [ ] URLs are complete (include https://)
- [ ] @id references are correct
- [ ] No fake reviews or fabricated data

### 4. Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| "Missing required field" | Add the required property to your schema |
| "Invalid @id reference" | Check the @id in index.html matches provider reference |
| "Price mismatch" | Ensure schema price matches visible page price |
| "Invalid URL" | Use complete URLs with https:// protocol |
| "Duplicate schema" | Remove redundant organization schemas from pages |

---

## Mobile Service Business Requirements

### Why Mobile Service Compliance Matters

Google treats mobile service businesses (businesses that travel to customers) differently from traditional storefronts. Proper markup helps:
- Show your service area in local search
- Appear in "near me" searches across service areas
- Avoid confusion about physical location
- Improve local SEO rankings

### Required Properties for Mobile Businesses

1. **areaServed** (REQUIRED)
   - List all areas where you provide services
   - Can be cities, neighborhoods, or postal codes
   - Must be specific, verifiable locations

2. **address** (REQUIRED but minimal)
   - Include `addressLocality` (city)
   - Include `addressRegion` (state/province)
   - Include `addressCountry` (country code)
   - DON'T include `streetAddress` (you're mobile, not a physical location)

3. **geo coordinates** (HIGHLY RECOMMENDED)
   - Helps "near me" searches
   - Use coordinates of operational center (Ubud center)

### Example: Mobile Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Home Massage Ubud",
  
  // Minimal address - operational area only
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ubud",
    "addressRegion": "Bali",
    "addressCountry": "ID"
    // NO streetAddress - we're mobile!
  },
  
  // Geo coordinates of operational center
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.5069,
    "longitude": 115.2625
  },
  
  // CRITICAL: All areas served
  "areaServed": [
    {
      "@type": "City",
      "name": "Ubud",
      "addressRegion": "Bali",
      "addressCountry": "Indonesia"
    },
    {
      "@type": "City",
      "name": "Tegallalang",
      "addressRegion": "Bali",
      "addressCountry": "Indonesia"
    }
    // Add all areas you actually serve
  ]
}
```

### What NOT to Do

❌ **Don't include a fake physical address**
- Google may flag this as misleading
- Can result in penalties or removal from search results

❌ **Don't claim areas you don't serve**
- Only list areas where you actually provide services
- Verify therapists can reach these locations

❌ **Don't use vague area descriptions**
- Use specific city/neighborhood names
- Avoid "All of Bali" or "Greater Ubud area"

✅ **Do be specific and honest**
- List exact areas you serve
- Update as you expand service areas
- Match what you claim on your website

---

## Best Practices

### Content Accuracy
1. **Match Visible Content**
   - Schema description should match page content
   - Prices in schema must match displayed prices
   - Service names should match page headings

2. **Real Information Only**
   - Only include actual ratings/reviews
   - Don't fabricate review counts
   - Don't exaggerate service areas
   - Update periodically to stay current

3. **Consistency**
   - Business name consistent everywhere
   - Phone number same across all schemas
   - Address format consistent
   - URL structure consistent

### Technical Quality
1. **Valid JSON-LD**
   - Test with validators before deploying
   - Check for syntax errors (missing commas, brackets)
   - Ensure proper escaping of special characters

2. **Proper References**
   - Use @id to reference LocalBusiness
   - Don't duplicate business info on every page
   - Link schemas together logically

3. **Mobile Optimization**
   - Include areaServed for mobile business compliance
   - Use click-to-call phone format (+62-xxx)
   - Ensure fast loading (inline in <head>)

### Maintenance Schedule
1. **Monthly**
   - Check Google Search Console for schema errors
   - Update review counts if changed significantly
   - Verify all pages still validate

2. **When Adding Services**
   - Use SchemaMarkup component
   - Follow service template structure
   - Test new page with Rich Results Test

3. **When Business Info Changes**
   - Update index.html LocalBusiness schema first
   - Check all pages still reference correctly
   - Re-test priority pages

### SEO Tips
1. **Rich Results Eligibility**
   - Complete schemas increase rich result chances
   - FAQ schemas help get FAQ accordions
   - Review schemas help get star ratings

2. **Local SEO Benefits**
   - Strong local signals via areaServed
   - Geo coordinates help "near me" searches
   - Consistent NAP helps local rankings

3. **User Experience**
   - Rich results increase click-through rates
   - Business info cards build trust
   - Direct contact info reduces friction

---

## Quick Reference Card

### Where Things Are Located

| What | Where | Purpose |
|------|-------|---------|
| **LocalBusiness Schema** | `client/index.html` lines 37-220 | Global business info (all pages) |
| **SchemaMarkup Component** | `client/src/components/SchemaMarkup.tsx` | Dynamic schema generator |
| **Service Schemas** | Treatment/area pages via component | Individual service markup |
| **This Guide** | `SCHEMA_IMPLEMENTATION_GUIDE.md` | Complete reference |

### Common Tasks

| Task | What to Do |
|------|-----------|
| **Update phone number** | Edit index.html LocalBusiness schema |
| **Add new service** | Use SchemaMarkup component in new page |
| **Change business hours** | Edit openingHoursSpecification in index.html |
| **Add service area** | Add to areaServed array in index.html |
| **Update prices** | Edit offers array in service schemas |

### Testing URLs

- **Rich Results Test:** https://search.google.com/test/rich-results
- **Schema Validator:** https://validator.schema.org/
- **Google Search Console:** https://search.google.com/search-console

---

## Need Help?

### Additional Documentation
- `SCHEMA_TEMPLATES.md` - Additional schema examples
- `SCHEMA_TESTING_GUIDE.md` - Detailed testing procedures
- `SCHEMA_MAINTENANCE_GUIDE.md` - Developer maintenance guide

### External Resources
- [Schema.org Documentation](https://schema.org/)
- [Google Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [JSON-LD Playground](https://json-ld.org/playground/)

### Support
For questions about schema implementation, refer to:
1. This guide first
2. Test with Google Rich Results Test
3. Check Google Search Console for errors
4. Review Google's structured data guidelines

---

**Last Updated:** January 2026
**Implementation Status:** ✅ Complete and Production Ready
