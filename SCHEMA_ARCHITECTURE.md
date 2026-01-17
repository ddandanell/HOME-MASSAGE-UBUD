# Schema.org Architecture Diagram

## System Overview

This document provides a visual representation of how schema.org structured data flows through the Home Massage Ubud website.

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         WEBSITE ARCHITECTURE                            │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  GLOBAL SCHEMA (Appears on EVERY page)                                 │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                          │
│  📄 client/index.html (lines 36-142)                                    │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  <script type="application/ld+json">                             │  │
│  │  {                                                                │  │
│  │    "@context": "https://schema.org",                             │  │
│  │    "@type": "HealthAndBeautyBusiness",                           │  │
│  │    "@id": "https://homemassageubud.com/#localbusiness" ◄────────┐│  │
│  │    "name": "Home Massage Ubud",                                  ││  │
│  │    "telephone": "+62-811-2656-869",                              ││  │
│  │    "address": { ... },                                           ││  │
│  │    "geo": { ... },                                               ││  │
│  │    "areaServed": [ ... ],                                        ││  │
│  │    "openingHours": [ ... ],                                      ││  │
│  │    "aggregateRating": { ... }                                    ││  │
│  │  }                                                                ││  │
│  │  </script>                                                        ││  │
│  └──────────────────────────────────────────────────────────────────┘│  │
│                                                                       │  │
│  ✅ Loaded on ALL pages automatically                                │  │
│  ✅ Single source of truth for business info                         │  │
│  ✅ @id used by other schemas to reference this business             │  │
└───────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ Referenced via @id
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  PAGE-SPECIFIC SCHEMAS (Dynamic per page)                              │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                          │
│  📦 client/src/components/SchemaMarkup.tsx                              │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  export default function SchemaMarkup({ type, data }) {          │  │
│  │    switch(type) {                                                 │  │
│  │      case 'service':    → Service Schema                         │  │
│  │      case 'faq':        → FAQPage Schema                         │  │
│  │      case 'breadcrumb': → BreadcrumbList Schema                  │  │
│  │      case 'review':     → Review Schema                          │  │
│  │    }                                                              │  │
│  │  }                                                                │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                          │
│  ✅ Generates schemas dynamically                                       │
│  ✅ Used in React components                                            │
│  ✅ Auto-renders in <head> section                                      │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ Used by
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  PAGE COMPONENTS (Use SchemaMarkup)                                    │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                          │
│  🏠 Homepage (Home.tsx)                                                 │
│     └── SchemaMarkup type="faq"                                         │
│                                                                          │
│  💆 Treatment Pages (e.g., BalineseMassage.tsx)                        │
│     ├── SchemaMarkup type="breadcrumb"                                 │
│     ├── SchemaMarkup type="service" ──┐                                │
│     │                                   │ References LocalBusiness      │
│     │   provider: { "@id": "...#localbusiness" } ◄──────────────────┘  │
│     │                                                                    │
│     └── SchemaMarkup type="faq"                                         │
│                                                                          │
│  📍 Area Pages (e.g., UbudCentre.tsx)                                  │
│     ├── SchemaMarkup type="breadcrumb"                                 │
│     ├── SchemaMarkup type="service" ──┐                                │
│     │                                   │ References LocalBusiness      │
│     │   provider: { "@id": "...#localbusiness" } ◄──────────────────┘  │
│     │                                                                    │
│     └── SchemaMarkup type="faq"                                         │
│                                                                          │
│  ⭐ Testimonials Page (Testimonials.tsx)                               │
│     └── SchemaMarkup type="review" (multiple) ──┐                      │
│                                                   │ References          │
│         itemReviewed: { "@id": "...#localbusiness" } ◄──────────────┘  │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow

```
User Request
     │
     ▼
┌──────────────────┐
│   Browser        │
└──────────────────┘
     │
     ▼
┌──────────────────────────────────────────────────────────┐
│  HTML Response                                           │
│                                                           │
│  <head>                                                   │
│    <!-- LocalBusiness from index.html -->                │
│    <script type="application/ld+json">                   │
│      { "@type": "HealthAndBeautyBusiness", ... }         │
│    </script>                                             │
│                                                           │
│    <!-- Service schema from React component -->          │
│    <script type="application/ld+json">                   │
│      { "@type": "Service",                               │
│        "provider": { "@id": "...#localbusiness" } }      │
│    </script>                                             │
│                                                           │
│    <!-- FAQ schema from React component -->              │
│    <script type="application/ld+json">                   │
│      { "@type": "FAQPage", ... }                         │
│    </script>                                             │
│  </head>                                                  │
│                                                           │
│  <body>                                                   │
│    <!-- Visible page content -->                         │
│  </body>                                                  │
└──────────────────────────────────────────────────────────┘
     │
     ▼
┌──────────────────┐
│  Google Bot      │
│  Crawls Page     │
└──────────────────┘
     │
     ▼
┌──────────────────────────────────────┐
│  Parses JSON-LD Schemas              │
│  ✅ LocalBusiness                    │
│  ✅ Service                           │
│  ✅ FAQPage                           │
│  ✅ Links via @id references         │
└──────────────────────────────────────┘
     │
     ▼
┌──────────────────────────────────────┐
│  Google Search Results               │
│  📊 Rich Results:                    │
│     • Business Info Card             │
│     • Star Ratings                   │
│     • FAQ Accordion                  │
│     • Breadcrumbs                    │
│     • Service Details                │
└──────────────────────────────────────┘
```

---

## Schema Relationship Diagram

```
┌───────────────────────────────────────────────────────────────┐
│  HealthAndBeautyBusiness                                      │
│  @id: "https://homemassageubud.com/#localbusiness"          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                │
│  • Name: Home Massage Ubud                                    │
│  • Phone: +62-811-2656-869                                    │
│  • Location: Ubud, Bali                                       │
│  • Service Areas: 5 locations                                 │
│  • Hours: 7AM-10PM daily                                      │
│  • Rating: 5.0 (500 reviews)                                  │
└───────────────────────────────────────────────────────────────┘
         ▲              ▲              ▲
         │              │              │
         │              │              │ Referenced by:
         │              │              │
┌────────┴─────┐  ┌────┴──────┐  ┌───┴────────┐
│   Service    │  │  Service  │  │   Review   │
│   Schema 1   │  │  Schema 2 │  │   Schema   │
├──────────────┤  ├───────────┤  ├────────────┤
│ Balinese     │  │ Deep      │  │ Customer   │
│ Massage      │  │ Tissue    │  │ Review     │
│              │  │           │  │            │
│ provider: {  │  │ provider: │  │ itemReview:│
│   @id: ...   │  │   @id: ...│  │   @id: ... │
│ }            │  │ }         │  │ }          │
└──────────────┘  └───────────┘  └────────────┘
```

---

## Component Architecture

```
📁 Project Structure
│
├── 📄 client/index.html
│   └── 🔷 HealthAndBeautyBusiness Schema (Global)
│       • Loads on every page
│       • Single source of truth
│       • @id: "#localbusiness"
│
├── 📦 client/src/components/
│   └── 📄 SchemaMarkup.tsx
│       ├── 🔹 generateSchema() function
│       │   ├── Service schema generator
│       │   ├── FAQ schema generator
│       │   ├── Breadcrumb schema generator
│       │   └── Review schema generator
│       └── Returns <script type="application/ld+json">
│
├── 📁 client/src/pages/
│   ├── 📄 Home.tsx
│   │   └── Uses: SchemaMarkup(type="faq")
│   │
│   ├── 📄 treatments/
│   │   ├── BalineseMassage.tsx
│   │   │   ├── SchemaMarkup(type="breadcrumb")
│   │   │   ├── SchemaMarkup(type="service")
│   │   │   └── SchemaMarkup(type="faq")
│   │   │
│   │   ├── DeepTissue.tsx
│   │   │   └── (same pattern)
│   │   │
│   │   └── ... (all treatment pages)
│   │
│   ├── 📄 areas/
│   │   ├── UbudCentre.tsx
│   │   │   ├── SchemaMarkup(type="breadcrumb")
│   │   │   ├── SchemaMarkup(type="service")
│   │   │   └── SchemaMarkup(type="faq")
│   │   │
│   │   └── ... (all area pages)
│   │
│   └── 📄 Testimonials.tsx
│       └── SchemaMarkup(type="review") × N
│
└── 📚 Documentation/
    ├── SCHEMA_README.md (Hub)
    ├── SCHEMA_QUICK_START.md
    ├── SCHEMA_IMPLEMENTATION_GUIDE.md
    ├── SERVICE_SCHEMA_TEMPLATES.md
    ├── SCHEMA_PLACEMENT_GUIDE.md
    └── SCHEMA_FINAL_SUMMARY.md
```

---

## Template Usage Pattern

```
┌───────────────────────────────────────────────────────────────┐
│  Creating a New Service Page                                  │
└───────────────────────────────────────────────────────────────┘

1. 📄 Copy template from SERVICE_SCHEMA_TEMPLATES.md
   ↓
2. 🔧 Customize:
   • name: "Your Service Name"
   • description: "Your description"
   • offers: [ your pricing ]
   • url: "your-page-url"
   ↓
3. 📝 Add to React component:
   <SchemaMarkup type="service" data={customizedData} />
   ↓
4. ✅ Test with Google Rich Results Test
   ↓
5. 🚀 Deploy
```

---

## Mobile Service Compliance

```
┌───────────────────────────────────────────────────────────────┐
│  Mobile Service Business Requirements                         │
└───────────────────────────────────────────────────────────────┘

✅ INCLUDE:
  • areaServed: [ list of service locations ]
  • address: { addressLocality, addressRegion, postalCode, addressCountry }
  • geo: { latitude, longitude }
  • openingHours: [ availability schedule ]

❌ DO NOT INCLUDE:
  • streetAddress (you're mobile, not a fixed location)
  • Fake physical address
  • Service areas you don't actually serve

📍 Result:
  • Google understands you travel TO clients
  • Shows in local search for all service areas
  • Appears in "near me" queries
  • No confusion about physical location
```

---

## Schema Validation Flow

```
┌──────────────────┐
│ Create Schema    │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ View Page Source │ (Ctrl+U / Cmd+U)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Find Schema      │ (Search: "application/ld+json")
└────────┬─────────┘
         │
         ▼
┌──────────────────────────────────┐
│ Copy JSON from <script> tag      │
└────────┬─────────────────────────┘
         │
         ▼
┌───────────────────────────────────────┐
│ Test with Google Rich Results Test   │
│ https://search.google.com/test/      │
└────────┬──────────────────────────────┘
         │
         ├─── ✅ No Errors ──────────────┐
         │                                │
         └─── ❌ Errors Found            │
                     │                    │
                     ▼                    ▼
              ┌──────────────┐    ┌─────────────┐
              │  Fix Issues  │    │   Deploy    │
              └──────┬───────┘    └─────────────┘
                     │
                     └──→ Retry Test
```

---

## Documentation Navigation Map

```
                    ┌─────────────────────┐
                    │  SCHEMA_README.md   │
                    │  (START HERE)       │
                    └──────────┬──────────┘
                               │
               ┌───────────────┼───────────────┐
               │               │               │
               ▼               ▼               ▼
    ┌─────────────────┐ ┌──────────┐ ┌──────────────┐
    │ QUICK_START.md  │ │ IMPL...  │ │ TEMPLATES.md │
    │ (5 min guide)   │ │ GUIDE.md │ │ (Copy-paste) │
    └─────────────────┘ └──────────┘ └──────────────┘
               │               │               │
               │               │               │
               └───────────────┼───────────────┘
                               ▼
                    ┌─────────────────────┐
                    │  PLACEMENT_GUIDE.md │
                    │  (Where to place)   │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │  TESTING_GUIDE.md   │
                    │  (How to validate)  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ MAINTENANCE_GUIDE.md│
                    │  (How to update)    │
                    └─────────────────────┘
```

---

## Summary

This architecture provides:

✅ **Centralized Business Info** - Single source in index.html  
✅ **Reusable Component** - SchemaMarkup.tsx for all page schemas  
✅ **Proper References** - @id linking between schemas  
✅ **No Duplication** - Business info defined once, referenced everywhere  
✅ **Easy Maintenance** - Update in one place, affects all pages  
✅ **Type Safety** - TypeScript interfaces  
✅ **Mobile Compliant** - Follows Google mobile service guidelines  
✅ **Extensible** - Easy to add new service pages  

---

**Last Updated:** January 2026  
**Version:** 1.0
