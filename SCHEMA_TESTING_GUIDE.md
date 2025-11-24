# Schema Testing Guide - Home Massage Ubud

This guide provides instructions for testing and validating the structured data (JSON-LD schema) implementation using Google's Rich Results Test.

## Overview

The website now has comprehensive structured data markup including:
- **LocalBusiness** (HealthAndBeautyBusiness) schema site-wide
- **Service** schema on all treatment and area pages
- **Review** schema on testimonials page
- **FAQPage** schema on relevant pages

## How to Test

### Option 1: Test Live URLs (Recommended after deployment)

1. Open [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Enter the URL you want to test
3. Click "Test URL"
4. Review the results

### Option 2: Test Code Directly

1. Open [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Click "Code" tab
3. Copy and paste the entire HTML page source or just the JSON-LD block
4. Click "Test Code"
5. Review the results

## Pages to Test

### Priority Pages

| Page Type | URL | Expected Schema Types | Notes |
|-----------|-----|----------------------|-------|
| Homepage | https://homemassageubud.com/ | HealthAndBeautyBusiness, FAQPage | Global business info + homepage FAQs |
| Treatment Example | https://homemassageubud.com/ubud/traditional-balinese-massage | HealthAndBeautyBusiness, Service, FAQPage | Treatment-specific service with pricing packages |
| Area Example | https://homemassageubud.com/ubud-centre | HealthAndBeautyBusiness, Service, FAQPage | Area-specific service offerings |
| Testimonials | https://homemassageubud.com/testimonials | HealthAndBeautyBusiness, Review (12x) | All visible customer reviews |

### All Treatment Pages (13 total)

Test a few samples:
- /ubud/traditional-balinese-massage
- /ubud/deep-tissue-massage
- /ubud/aromatherapy-massage
- /ubud/hot-stone-massage
- /ubud/thai-massage
- /ubud/pregnancy-massage
- /ubud/foot-reflexology
- /ubud/lymphatic-drainage-massage
- /ubud/post-hike-recovery-massage
- /ubud/yoga-stretch-massage
- /ubud/detox-wellness-massage
- /ubud/couples-wellness-ritual
- /ubud/herbal-bamboo-massage

**Expected for each:** HealthAndBeautyBusiness, Service (with 3 pricing offers), FAQPage

### All Area Pages (5 total)

Test all:
- /ubud-centre
- /ubud-north
- /ubud-east
- /ubud-south
- /ubud-luxury-villas

**Expected for each:** HealthAndBeautyBusiness, Service (with top 3 treatments), FAQPage

## What to Check

### 1. No Errors
- Ensure there are no red errors in the Rich Results Test
- All warnings should be reviewed (some warnings are acceptable)

### 2. Valid Schema Detection
- Confirm the expected schema types are detected
- Verify the data is correctly structured

### 3. NAP Consistency
Check that Name, Address, Phone are consistent across all pages:
- **Name:** Home Massage Ubud
- **Phone:** +62-811-2656-869
- **Email:** hello@homemassageubud.com
- **Address:** Ubud, Bali, Indonesia

### 4. Proper References
- Service schemas should reference LocalBusiness via `@id`
- Review schemas should reference LocalBusiness via `@id`
- No broken or missing references

### 5. Content Accuracy
- Schema descriptions match visible page content
- Prices in schema match displayed prices
- Reviews in schema match visible testimonials
- FAQs in schema match displayed FAQs

## Sample JSON-LD Blocks

### LocalBusiness (from index.html - Global)

```json
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://homemassageubud.com/#localbusiness",
  "name": "Home Massage Ubud",
  "alternateName": ["Ubud Massage", "Massage Ubud", "In-Villa Massage Ubud"],
  "description": "Professional in-villa massage services in Ubud, Bali. Licensed therapists providing traditional Balinese, deep tissue, aromatherapy, and wellness treatments delivered to your accommodation.",
  "url": "https://homemassageubud.com",
  "image": "https://homemassageubud.com/logo.png",
  "logo": "https://homemassageubud.com/logo.png",
  "telephone": "+62-811-2656-869",
  "email": "hello@homemassageubud.com",
  "priceRange": "$$",
  "currenciesAccepted": "IDR",
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ubud",
    "addressRegion": "Bali",
    "postalCode": "80571",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -8.5069,
    "longitude": 115.2625
  },
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
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "22:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "500",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.instagram.com/homemassageubud",
    "https://www.facebook.com/homemassageubud"
  ]
}
```

### Service Schema (Treatment Page Example)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Traditional Balinese Massage",
  "description": "Authentic Balinese massage Ubud - traditional healing treatment combining palm pressure, acupressure, and aromatic oils delivered to your villa",
  "serviceType": "In-Villa Massage Therapy",
  "provider": {
    "@id": "https://homemassageubud.com/#localbusiness"
  },
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
  "url": "https://homemassageubud.com/ubud/traditional-balinese-massage",
  "offers": [
    {
      "@type": "Offer",
      "name": "60 Minutes",
      "description": "Full body traditional Balinese massage focusing on major muscle groups and stress points",
      "price": "240000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "url": "https://homemassageubud.com/ubud/traditional-balinese-massage"
    },
    {
      "@type": "Offer",
      "name": "90 Minutes",
      "description": "Extended session with extra time for problem areas, includes foot reflexology",
      "price": "360000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "url": "https://homemassageubud.com/ubud/traditional-balinese-massage"
    }
  ]
}
```

### Review Schema (Testimonials Page Example)

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@id": "https://homemassageubud.com/#localbusiness"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "Sarah & David Chen"
  },
  "reviewBody": "Absolutely incredible experience! The therapists arrived on time with everything perfectly set up. The massage was so relaxing and professional...",
  "datePublished": "August 2025"
}
```

## Common Issues and Solutions

### Issue: "Missing required property"
**Solution:** Check that all required fields are present in the schema. For LocalBusiness: name, address. For Service: name, provider. For Review: author, reviewRating.

### Issue: "Invalid @id reference"
**Solution:** Ensure the @id in LocalBusiness matches the reference used in Service and Review schemas. Should be `https://homemassageubud.com/#localbusiness`

### Issue: "Duplicate schemas"
**Solution:** Remove any duplicate LocalBusiness or Service definitions on the same page.

### Issue: "Content mismatch"
**Solution:** Ensure schema data matches what's visibly displayed on the page. Don't include services, reviews, or prices that aren't shown.

## Validation Checklist

Use this checklist when testing:

- [ ] Homepage tested - LocalBusiness and FAQPage detected
- [ ] At least 3 treatment pages tested - Service schema with offers detected
- [ ] At least 2 area pages tested - Service schema detected
- [ ] Testimonials page tested - All 12 Review schemas detected
- [ ] No critical errors on any tested page
- [ ] NAP information is consistent across all pages
- [ ] All @id references are working correctly
- [ ] Prices in schema match visible prices
- [ ] Reviews in schema match visible testimonials
- [ ] Opening hours are correct (7am-10pm, 7 days)
- [ ] Area served includes all 5 Ubud areas

## Next Steps After Testing

1. **If errors found:** Review the specific page's schema implementation
2. **If warnings found:** Evaluate if they're acceptable (some warnings are informational only)
3. **Document results:** Keep a record of which pages were tested and their results
4. **Monitor:** After deployment, re-test to ensure everything works in production
5. **Submit to Google:** Once validated, consider submitting the sitemap to Google Search Console

## Support Resources

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [LocalBusiness Schema Guidelines](https://developers.google.com/search/docs/appearance/structured-data/local-business)

## Notes

- The LocalBusiness schema is defined globally in `client/index.html` and appears on all pages
- Service schemas are dynamically generated per page in the React components
- All schemas use JSON-LD format (recommended by Google)
- Schemas are inserted into the `<head>` section via React components
- The implementation follows Google's structured data guidelines for local businesses
