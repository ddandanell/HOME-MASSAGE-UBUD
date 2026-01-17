# Schema Placement Instructions

## Quick Reference: Where to Add Schema Markup

This guide shows you **exactly where** to place schema markup in your HTML structure.

---

## 1. Homepage LocalBusiness Schema

**Location:** `client/index.html` in the `<head>` section

**Position:** After meta tags, before closing `</head>` tag

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>Your Page Title</title>
    <meta name="description" content="Your description" />
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="..." />
    
    <!-- ✅ PLACE LOCALBUSINESS SCHEMA HERE ✅ -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://homemassageubud.com/#localbusiness",
      "name": "Home Massage Ubud",
      ...
    }
    </script>
    <!-- ✅ END SCHEMA ✅ -->
    
    <!-- Performance optimizations below -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
  </head>
  <body>
    ...
  </body>
</html>
```

**Why this location?**
- Early in `<head>` so Google sees it first
- After meta tags but before performance scripts
- Loaded on EVERY page automatically
- Single source of truth for business info

---

## 2. Service Page Schema (React/TSX)

**Location:** In your React component file (e.g., `BalineseMassage.tsx`)

**Position:** Inside the component, before the return statement

```tsx
import SchemaMarkup from '@/components/SchemaMarkup';

export default function BalineseMassagePage() {
  return (
    <>
      {/* ✅ PLACE SERVICE SCHEMA HERE ✅ */}
      <SchemaMarkup
        type="service"
        data={{
          name: "Traditional Balinese Massage Ubud",
          description: "Authentic traditional Balinese massage...",
          serviceType: "Massage Therapy",
          areaServed: ["Ubud", "Tegallalang", "Sanggingan"],
          offers: [
            {
              name: "60 Minutes",
              price: "450000",
              description: "Full body massage"
            }
          ],
          url: "https://homemassageubud.com/ubud/balinese-massage"
        }}
      />
      {/* ✅ END SERVICE SCHEMA ✅ */}
      
      {/* ✅ PLACE FAQ SCHEMA HERE (if you have FAQs) ✅ */}
      <SchemaMarkup
        type="faq"
        data={[
          {
            question: "How long is the massage?",
            answer: "We offer 60, 90, and 120 minute sessions."
          }
        ]}
      />
      {/* ✅ END FAQ SCHEMA ✅ */}
      
      {/* ✅ PLACE BREADCRUMB SCHEMA HERE ✅ */}
      <SchemaMarkup
        type="breadcrumb"
        data={[
          { name: "Home", url: "https://homemassageubud.com/" },
          { name: "Services", url: "https://homemassageubud.com/services" },
          { name: "Balinese Massage", url: "https://homemassageubud.com/ubud/balinese-massage" }
        ]}
      />
      {/* ✅ END BREADCRUMB SCHEMA ✅ */}
      
      {/* Your regular page content */}
      <div className="container">
        <h1>Traditional Balinese Massage</h1>
        <p>Description of your service...</p>
      </div>
    </>
  );
}
```

**Why this location?**
- At the top of component, before visible content
- Schemas render as `<script>` tags in the `<head>`
- Multiple schemas can be stacked
- React automatically handles placement

---

## 3. Static HTML Page Schema

**Location:** In a static HTML file (e.g., `services.html`)

**Position:** Inside `<head>` tag, after title and meta tags

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Deep Tissue Massage Ubud | Home Massage Ubud</title>
    <meta name="description" content="...">
    
    <!-- ✅ SERVICE SCHEMA ✅ -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Deep Tissue Massage Ubud",
      "description": "Intensive therapeutic massage...",
      "serviceType": "Massage Therapy",
      "provider": {
        "@id": "https://homemassageubud.com/#localbusiness"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Ubud",
          "addressRegion": "Bali",
          "addressCountry": "Indonesia"
        }
      ],
      "offers": {
        "@type": "Offer",
        "price": "500000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      "url": "https://homemassageubud.com/ubud/deep-tissue-massage"
    }
    </script>
    
    <!-- ✅ FAQ SCHEMA (Optional) ✅ -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is deep tissue massage painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deep tissue involves firm pressure but should never be painful..."
          }
        }
      ]
    }
    </script>
    
    <!-- ✅ BREADCRUMB SCHEMA ✅ -->
    <script type="application/ld+json">
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
    </script>
  </head>
  <body>
    <!-- Your page content -->
  </body>
</html>
```

---

## 4. Reviews/Testimonials Page

**Location:** On your testimonials page

**Position:** One Review schema per testimonial

```tsx
import SchemaMarkup from '@/components/SchemaMarkup';

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    review: "Amazing massage experience!",
    date: "2026-01-15"
  },
  {
    name: "Mike Chen",
    rating: 5,
    review: "Best massage in Ubud!",
    date: "2026-01-10"
  }
];

export default function TestimonialsPage() {
  return (
    <>
      {/* ✅ GENERATE REVIEW SCHEMA FOR EACH TESTIMONIAL ✅ */}
      {testimonials.map((testimonial, index) => (
        <SchemaMarkup
          key={index}
          type="review"
          data={{
            rating: testimonial.rating,
            author: testimonial.name,
            review: testimonial.review,
            date: testimonial.date
          }}
        />
      ))}
      {/* ✅ END REVIEW SCHEMAS ✅ */}
      
      {/* Display testimonials visually */}
      <div className="testimonials">
        {testimonials.map(t => (
          <div key={t.name} className="testimonial-card">
            <p>{t.review}</p>
            <p>- {t.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
```

---

## Visual Placement Hierarchy

```
HTML Document
│
├── <head>
│   ├── <meta> tags
│   ├── <title>
│   ├── Open Graph tags
│   │
│   ├── ✅ LocalBusiness Schema (index.html only)
│   ├── ✅ Service Schema (service pages)
│   ├── ✅ FAQ Schema (if page has FAQs)
│   ├── ✅ Breadcrumb Schema (all pages with breadcrumbs)
│   ├── ✅ Review Schema (testimonials page)
│   │
│   ├── <link> preconnect
│   └── CSS files
│
└── <body>
    └── Your visible page content
```

---

## Order of Multiple Schemas on Same Page

When multiple schemas appear on the same page, use this order:

1. **Breadcrumb Schema** (navigation context)
2. **Service Schema** (primary content)
3. **FAQ Schema** (supporting information)
4. **Review Schemas** (social proof)

```tsx
export default function ServicePage() {
  return (
    <>
      {/* 1. Breadcrumb */}
      <SchemaMarkup type="breadcrumb" data={breadcrumbData} />
      
      {/* 2. Service */}
      <SchemaMarkup type="service" data={serviceData} />
      
      {/* 3. FAQ */}
      <SchemaMarkup type="faq" data={faqData} />
      
      {/* Page content */}
      <div>...</div>
    </>
  );
}
```

---

## Don't Place Schemas Here ❌

**Never place schemas:**

1. ❌ In the `<body>` tag visibly
2. ❌ After closing `</html>` tag
3. ❌ Inside visible content divs
4. ❌ As HTML comments (must be `<script>` tags)
5. ❌ With JavaScript comments (`//`) inside JSON

**Wrong:**
```html
<body>
  <!-- Don't put schema here -->
  <script type="application/ld+json">{ ... }</script>
  <div>Content</div>
</body>
```

**Correct:**
```html
<head>
  <!-- Schemas go in head -->
  <script type="application/ld+json">{ ... }</script>
</head>
<body>
  <div>Content</div>
</body>
```

Or with React (auto-places in head):
```tsx
return (
  <>
    <SchemaMarkup type="service" data={...} />
    <div>Content</div>
  </>
);
```

---

## Testing Schema Placement

After adding schema to any page:

1. **View page source** (right-click → View Page Source)
2. **Search for** `application/ld+json`
3. **Verify schema appears** in `<head>` section
4. **Copy the JSON** from the `<script>` tag
5. **Test at:** https://search.google.com/test/rich-results
6. **Paste the URL** or **paste the JSON code**
7. **Check for errors**

---

## Checklist for New Pages

When creating a new service page:

- [ ] Add LocalBusiness reference (automatic from index.html)
- [ ] Add Service schema with SchemaMarkup component
- [ ] Add Breadcrumb schema for navigation
- [ ] Add FAQ schema if page has Q&A section
- [ ] Verify schema appears in `<head>` (view source)
- [ ] Test with Google Rich Results Test
- [ ] Confirm no JSON syntax errors
- [ ] Verify prices match visible page content

---

## Real-World Example: Complete Service Page

```tsx
// File: client/src/pages/treatments/HotStoneMassage.tsx

import SchemaMarkup from '@/components/SchemaMarkup';
import SEOHead from '@/components/SEOHead';

export default function HotStoneMassagePage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead
        title="Hot Stone Massage Ubud | In-Villa Therapy"
        description="Therapeutic hot stone massage in your Ubud villa..."
      />
      
      {/* ✅ ALL SCHEMAS AT THE TOP ✅ */}
      
      {/* Breadcrumb Navigation */}
      <SchemaMarkup
        type="breadcrumb"
        data={[
          { 
            name: "Home", 
            url: "https://homemassageubud.com/" 
          },
          { 
            name: "Ubud Services", 
            url: "https://homemassageubud.com/ubud" 
          },
          { 
            name: "Hot Stone Massage", 
            url: "https://homemassageubud.com/ubud/hot-stone-massage" 
          }
        ]}
      />
      
      {/* Service Information */}
      <SchemaMarkup
        type="service"
        data={{
          name: "Hot Stone Massage Ubud",
          description: "Therapeutic hot stone massage using heated volcanic stones to melt away deep muscle tension and improve circulation in your villa.",
          serviceType: "Massage Therapy",
          areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan"],
          offers: [
            {
              name: "90 Minutes",
              description: "Full body hot stone massage with aromatherapy",
              price: "750000"
            },
            {
              name: "2 Hours",
              description: "Extended hot stone therapy with facial massage",
              price: "950000"
            }
          ],
          url: "https://homemassageubud.com/ubud/hot-stone-massage"
        }}
      />
      
      {/* FAQ Section */}
      <SchemaMarkup
        type="faq"
        data={[
          {
            question: "How hot are the stones?",
            answer: "The stones are heated to 130-145°F (54-63°C), warm enough to relax muscles but never uncomfortably hot. Temperature is adjusted to your preference."
          },
          {
            question: "Do you provide the stones and heating equipment?",
            answer: "Yes, we bring professional stone warmer, volcanic basalt stones, and all necessary equipment. You don't need to prepare anything."
          },
          {
            question: "Can I combine hot stones with other techniques?",
            answer: "Absolutely! Hot stones work beautifully with deep tissue, aromatherapy, or Swedish massage. Tell your therapist your preferences."
          }
        ]}
      />
      
      {/* ✅ END SCHEMAS ✅ */}
      
      {/* VISIBLE PAGE CONTENT BELOW */}
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation (Visible) */}
        <nav className="breadcrumb">
          <a href="/">Home</a> / 
          <a href="/ubud">Ubud Services</a> / 
          <span>Hot Stone Massage</span>
        </nav>
        
        {/* Hero Section */}
        <h1>Hot Stone Massage in Your Ubud Villa</h1>
        <p>Experience the ancient healing...</p>
        
        {/* Benefits Section */}
        <section>
          <h2>Benefits of Hot Stone Therapy</h2>
          <ul>
            <li>Deep muscle relaxation</li>
            <li>Improved circulation</li>
            <li>Stress reduction</li>
          </ul>
        </section>
        
        {/* Pricing Section */}
        <section>
          <h2>Pricing</h2>
          <div className="pricing-card">
            <h3>90 Minutes - IDR 750,000</h3>
            <p>Full body hot stone massage with aromatherapy</p>
          </div>
          <div className="pricing-card">
            <h3>2 Hours - IDR 950,000</h3>
            <p>Extended hot stone therapy with facial massage</p>
          </div>
        </section>
        
        {/* FAQ Section (Visible) */}
        <section>
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>How hot are the stones?</h3>
            <p>The stones are heated to 130-145°F...</p>
          </div>
        </section>
        
        {/* CTA Section */}
        <section>
          <button>Book Now via WhatsApp</button>
        </section>
      </div>
    </>
  );
}
```

---

## Summary

**Key Takeaways:**

1. ✅ **LocalBusiness schema** goes in `client/index.html` (once, appears on all pages)
2. ✅ **Service schemas** go at the top of service page components
3. ✅ **Multiple schemas** can stack on the same page
4. ✅ **React auto-places** schemas in `<head>` via SchemaMarkup component
5. ✅ **Static HTML** schemas go in `<head>` section manually
6. ✅ **Always test** with Google Rich Results Test after adding

**Quick Check:**
- View page source
- Find `<script type="application/ld+json">`
- Verify it's in the `<head>` section
- Test URL with Rich Results Test

---

For more details, see:
- `SCHEMA_IMPLEMENTATION_GUIDE.md` - Complete documentation
- `SERVICE_SCHEMA_TEMPLATES.md` - Service-specific examples
- `SCHEMA_TESTING_GUIDE.md` - Testing procedures

**Last Updated:** January 2026
