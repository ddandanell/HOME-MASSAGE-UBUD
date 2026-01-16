# JSON-LD Schema Templates

This document provides ready-to-use JSON-LD schema templates for Breadcrumbs, FAQ, and Review snippets.

## Table of Contents
1. [Breadcrumb Schema](#breadcrumb-schema)
2. [FAQ Schema](#faq-schema)
3. [Review Schema](#review-schema)
4. [Implementation Guide](#implementation-guide)

---

## Breadcrumb Schema

### Basic Breadcrumb Template

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
      "item": "https://homemassageubud.com/services/deep-tissue-massage"
    }
  ]
}
```

### React Component Implementation

```tsx
interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### Usage Example

```tsx
<BreadcrumbSchema
  items={[
    { name: "Home", item: "https://homemassageubud.com/" },
    { name: "Areas", item: "https://homemassageubud.com/service-areas" },
    { name: "Seminyak", item: "https://homemassageubud.com/seminyak" }
  ]}
/>
```

---

## FAQ Schema

### Basic FAQ Template

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best massage in Ubud?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best massage in Ubud includes traditional Balinese massage, deep tissue massage, and aromatherapy massage. Our certified therapists deliver these treatments directly to your villa with professional equipment and premium oils."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a massage cost in Ubud?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Massage prices in Ubud start from IDR 300,000 ($20 USD) for a 60-minute traditional Balinese massage. Deep tissue massage is IDR 400,000. All prices include therapist transportation and premium oils."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide massage services in my area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide massage services throughout Ubud including Central Ubud, Tegallalang, Sanggingan, Penestanan, Sayan Valley, Campuhan, and all areas within 20km radius of Ubud center."
      }
    }
  ]
}
```

### React Component Implementation

```tsx
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### Usage Example

```tsx
<FAQSchema
  faqs={[
    {
      question: "How do I book a massage?",
      answer: "You can book a massage via WhatsApp at +62 811-2656-869 or through our website booking form. We recommend booking 24-48 hours in advance."
    },
    {
      question: "Are your therapists certified?",
      answer: "Yes, all our therapists are professionally certified with minimum 5 years experience in Balinese and therapeutic massage techniques."
    }
  ]}
/>
```

---

## Review Schema

### Individual Review Template

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": "Home Massage Ubud"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5",
    "worstRating": "1"
  },
  "author": {
    "@type": "Person",
    "name": "Sarah Johnson"
  },
  "reviewBody": "Absolutely wonderful massage experience! The therapist arrived on time with professional equipment. The traditional Balinese massage was incredibly relaxing and exactly what I needed after a week of traveling.",
  "datePublished": "2026-01-15"
}
```

### Aggregate Rating Template

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Home Massage Ubud",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### React Component Implementation

```tsx
interface ReviewData {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}

interface ReviewSchemaProps {
  review: ReviewData;
  serviceName?: string;
}

export function ReviewSchema({ review, serviceName = "Home Massage Ubud" }: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": serviceName
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### Aggregate Rating Component

```tsx
interface AggregateRatingSchemaProps {
  serviceName: string;
  ratingValue: number;
  reviewCount: number;
}

export function AggregateRatingSchema({ 
  serviceName, 
  ratingValue, 
  reviewCount 
}: AggregateRatingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toFixed(1),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### Usage Example

```tsx
<ReviewSchema
  review={{
    author: "John Smith",
    rating: 5,
    reviewBody: "Best massage service in Bali! Highly professional and relaxing.",
    datePublished: "2026-01-10"
  }}
  serviceName="Deep Tissue Massage Ubud"
/>

<AggregateRatingSchema
  serviceName="Home Massage Ubud"
  ratingValue={5.0}
  reviewCount={500}
/>
```

---

## Implementation Guide

### 1. Where to Add Schemas

**In React Components:**
- Add schema components at the bottom of your page component, just before closing tag
- Each page should have only ONE instance of each schema type

**Example:**
```tsx
export default function ServicePage() {
  return (
    <div>
      {/* Page content */}
      <h1>Deep Tissue Massage</h1>
      <p>Service description...</p>
      
      {/* Schema markup at bottom */}
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={pageFaqs} />
      <ReviewSchema review={featuredReview} />
    </div>
  );
}
```

### 2. Best Practices

#### Breadcrumbs
✅ **DO:**
- Match visible breadcrumbs on page
- Use actual page hierarchy
- Include all levels from home to current page
- Use canonical URLs only

❌ **DON'T:**
- Create artificial hierarchy
- Skip levels
- Use different URLs than actual navigation

#### FAQ
✅ **DO:**
- Only include FAQs that are visible on the page
- Write clear, concise questions
- Provide complete answers (minimum 2-3 sentences)
- Focus on real user questions

❌ **DON'T:**
- Hide FAQs from users
- Use promotional spam
- Create fake questions
- Add multiple FAQ schemas per page

#### Reviews
✅ **DO:**
- Only show real reviews
- Match review content to page
- Include author name and date
- Use accurate ratings

❌ **DON'T:**
- Fabricate reviews
- Use fake names
- Manipulate ratings
- Show different reviews in schema vs page

### 3. Google Search Console Monitoring

After implementing schemas, monitor in GSC:

1. **Enhancements → Breadcrumbs**
   - Check for "Valid" items
   - Fix any errors or warnings
   - Typical issues: Missing position, invalid URL

2. **Enhancements → FAQ**
   - Ensure FAQs are visible on page
   - Fix duplicate questions
   - Remove promotional content

3. **Enhancements → Review snippets**
   - Verify reviews match page content
   - Check rating values are within range
   - Ensure review count is accurate

### 4. Testing Tools

**Before deploying:**
1. [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Paste your page URL
   - Check for schema errors
   - Preview how it appears in search

2. [Schema.org Validator](https://validator.schema.org/)
   - Paste JSON-LD code
   - Validate structure
   - Fix any schema errors

3. **Manual Check:**
   - View page source
   - Find `<script type="application/ld+json">`
   - Verify JSON is valid
   - Check all properties are present

### 5. Common Errors and Fixes

**Error: "Missing field 'item'"**
- Fix: Add complete URL to breadcrumb items
- Example: Use `"item": "https://homemassageubud.com/services"` not just `"/services"`

**Error: "Invalid value for 'position'"**
- Fix: Ensure positions start at 1 and increment by 1
- Check for duplicate positions

**Error: "FAQ content not visible on page"**
- Fix: Ensure FAQ section is rendered on page
- Don't hide FAQs with CSS

**Error: "Rating value out of range"**
- Fix: Ratings must be between worstRating and bestRating
- Use 1-5 scale: worstRating: 1, bestRating: 5

### 6. Performance Tips

- Use dynamic schema generation based on page data
- Cache schema objects when possible
- Minimize redundant schema code
- Combine related schemas in single script tag when appropriate

### 7. Maintenance Checklist

**Weekly:**
- [ ] Check GSC Enhancements for new errors
- [ ] Verify schema still validates
- [ ] Update review counts if needed

**Monthly:**
- [ ] Audit FAQ relevance
- [ ] Update outdated information
- [ ] Add new FAQs based on user questions
- [ ] Check for schema best practices updates

**When Adding New Pages:**
- [ ] Add breadcrumb schema
- [ ] Add FAQ schema if relevant
- [ ] Add review schema if showing reviews
- [ ] Test with Rich Results tool
- [ ] Submit URL for indexing

---

## Quick Reference

### All Schemas in One File

```tsx
// schemas.tsx - Reusable schema components

import React from 'react';

// Breadcrumb Schema
export function BreadcrumbSchema({ items }: { items: Array<{ name: string; item: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// FAQ Schema
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// Review Schema
export function ReviewSchema({ review }: { review: { author: string; rating: number; reviewBody: string; datePublished: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": { "@type": "Service", "name": "Home Massage Ubud" },
    "reviewRating": { "@type": "Rating", "ratingValue": review.rating.toString(), "bestRating": "5", "worstRating": "1" },
    "author": { "@type": "Person", "name": review.author },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// Aggregate Rating Schema
export function AggregateRatingSchema({ serviceName, ratingValue, reviewCount }: { serviceName: string; ratingValue: number; reviewCount: number }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toFixed(1),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
```

---

## Support

- **Google Documentation**: [Structured Data Guidelines](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)
- **Schema.org**: [Schema.org Documentation](https://schema.org/)
- **Testing**: [Rich Results Test](https://search.google.com/test/rich-results)

---

**Last Updated:** January 16, 2026  
**Version:** 1.0
