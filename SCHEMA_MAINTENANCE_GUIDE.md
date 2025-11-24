# Schema Maintenance Guide - Home Massage Ubud

This guide explains how to maintain and extend the structured data (JSON-LD schema) implementation on the Home Massage Ubud website.

## Architecture Overview

### Schema Structure

The website uses a **centralized + page-specific** approach:

1. **Global Schema (Site-wide)**
   - Defined in: `client/index.html`
   - Type: HealthAndBeautyBusiness (LocalBusiness)
   - Applies to: All pages
   - Contains: Business name, address, phone, opening hours, areas served

2. **Page-Specific Schema**
   - Defined in: React components via `SchemaMarkup` component
   - Types: Service, Review, FAQPage
   - Applies to: Individual pages
   - Contains: Page-specific services, reviews, FAQs

### File Structure

```
client/
├── index.html                          # Global LocalBusiness schema
├── src/
│   ├── components/
│   │   ├── SchemaMarkup.tsx           # Reusable schema component
│   │   ├── TreatmentPageTemplate.tsx  # Treatment pages (uses SchemaMarkup)
│   │   └── AreaPageTemplate.tsx       # Area pages (uses SchemaMarkup)
│   └── pages/
│       ├── Home.tsx                    # Homepage (uses SchemaMarkup for FAQ)
│       ├── Testimonials.tsx            # Testimonials (uses SchemaMarkup for Reviews)
│       ├── treatments/                 # 13 treatment pages (use TreatmentPageTemplate)
│       └── areas/                      # 5 area pages (use AreaPageTemplate)
```

## Making Changes

### Updating Business Information (NAP - Name, Address, Phone)

**Location:** `client/index.html` (lines 36-82 approximately)

**Steps:**
1. Open `client/index.html`
2. Find the `<script type="application/ld+json">` block
3. Update the relevant fields:
   - `name`: Business name
   - `telephone`: Phone number (international format: +62-xxx-xxx-xxx)
   - `email`: Email address
   - `address`: Full postal address
   - `geo`: Latitude and longitude
   - `openingHoursSpecification`: Opening hours
   - `areaServed`: List of cities/areas served

**Example:**
```json
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": "https://homemassageubud.com/#localbusiness",
  "name": "Home Massage Ubud",
  "telephone": "+62-811-2656-869",
  "email": "hello@homemassageubud.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ubud",
    "addressRegion": "Bali",
    "postalCode": "80571",
    "addressCountry": "ID"
  }
}
```

**Important:** After updating, ensure consistency across:
- Footer component
- Contact page
- Any other places where business info appears

### Adding a New Treatment Page

**Steps:**
1. Create a new treatment file in `client/src/pages/treatments/`
2. Use the existing pattern from other treatment files
3. The `TreatmentPageTemplate` automatically generates Service schema

**Example:**
```typescript
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';

export default function NewTreatment() {
  const treatment = {
    name: 'New Massage Treatment',
    slug: 'new-massage-treatment',
    metaTitle: 'New Massage Treatment | Ubud',
    metaDescription: 'Description...',
    description: 'Short description for schema',
    packages: [
      {
        duration: '60 Minutes',
        price: 'Rp 300,000',
        priceIDR: 'Rp 300,000',
        description: 'Package description'
      }
    ],
    faqs: [
      {
        question: 'Question?',
        answer: 'Answer...'
      }
    ]
    // ... other fields
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
```

**Schema is automatically generated** with:
- Service type
- Treatment name and description
- All pricing packages as offers
- Area coverage
- FAQs

**Don't forget to:**
1. Add the route in `client/src/App.tsx`
2. Update navigation if needed
3. Test with Google Rich Results Test

### Adding a New Area Page

Similar to treatment pages, area pages use `AreaPageTemplate`:

```typescript
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function NewArea() {
  const area = {
    name: 'New Area Name',
    slug: 'new-area-slug',
    metaTitle: 'Title...',
    metaDescription: 'Description...',
    areaDescription: 'Area-specific description',
    treatments: [
      {
        name: 'Treatment Name',
        slug: 'treatment-slug',
        priceFrom: 'Rp 240,000',
        duration: '60-120 min'
      }
    ],
    faqs: [...]
    // ... other fields
  };

  return <AreaPageTemplate area={area} />;
}
```

### Adding Reviews to Schema

**Location:** `client/src/pages/Testimonials.tsx`

**Steps:**
1. Add the review to the `testimonials` array (for display)
2. The schema is automatically generated from the array

**Example:**
```typescript
const testimonials = [
  {
    name: 'Client Name',
    location: 'Villa Location',
    service: 'Treatment Type',
    rating: 5,
    date: 'Month Year',
    review: 'The full review text...',
    highlight: 'Key highlight'
  }
];
```

**Schema is automatically generated** with:
- Review linked to LocalBusiness via @id
- Author name
- Rating (out of 5)
- Review body text
- Date published

**Important:** Only add reviews that are:
- Actually visible on the testimonials page
- From real clients (no fake reviews)
- Accurate and truthful

### Updating FAQs

FAQs are page-specific. Update them in the respective page component:

**Homepage FAQs:** `client/src/pages/Home.tsx`
```typescript
const faqData = [
  {
    question: "How do I book a massage in Ubud?",
    answer: "Booking is simple! Contact us via WhatsApp..."
  }
];
```

**Treatment FAQs:** In each treatment data object (see treatment files)

**Area FAQs:** In each area data object (see area files)

### Extending the SchemaMarkup Component

**Location:** `client/src/components/SchemaMarkup.tsx`

To add a new schema type:

1. Add the type to the interface:
```typescript
interface SchemaMarkupProps {
  type: 'organization' | 'service' | 'review' | 'faq' | 'breadcrumb' | 'newtype';
  data: any;
}
```

2. Add a case to the switch statement:
```typescript
case 'newtype':
  return {
    '@context': 'https://schema.org',
    '@type': 'NewType',
    // ... schema fields
  };
```

3. Use it in your pages:
```typescript
<SchemaMarkup 
  type="newtype" 
  data={{...}} 
/>
```

## Best Practices

### 1. Always Use @id References

When referencing the LocalBusiness from other schemas, use the @id:

```json
{
  "provider": {
    "@id": "https://homemassageubud.com/#localbusiness"
  }
}
```

Don't duplicate the full LocalBusiness object.

### 2. Keep NAP Consistent

Name, Address, Phone must be **exactly the same** across:
- index.html (LocalBusiness schema)
- Footer component
- Contact page
- Any other locations

### 3. Match Schema to Visible Content

Only include in schema what's actually visible on the page:
- Don't add services that aren't offered
- Don't add reviews that aren't displayed
- Don't add FAQs that aren't shown
- Ensure prices match what's displayed

### 4. Validate After Changes

After making schema changes:
1. Run `npm run build` to ensure no errors
2. Test with Google Rich Results Test
3. Check for errors or warnings
4. Verify content accuracy

### 5. Use Proper Price Format

Prices in schema should be numeric strings without currency symbols:
```json
{
  "price": "240000",
  "priceCurrency": "IDR"
}
```

Not:
```json
{
  "price": "Rp 240,000"  // ❌ Wrong
}
```

### 6. Date Formats

Use ISO 8601 format for dates when possible:
```json
{
  "datePublished": "2025-08-15"
}
```

If only month/year is available (like testimonials), that's acceptable:
```json
{
  "datePublished": "August 2025"
}
```

## Testing Workflow

Recommended workflow when making schema changes:

1. **Make Changes**
   - Edit the relevant file(s)
   - Follow the patterns shown in this guide

2. **Local Testing**
   ```bash
   npm run check  # TypeScript validation
   npm run build  # Build the application
   ```

3. **Visual Inspection**
   - Run the dev server: `npm run dev`
   - Open the page in browser
   - View page source to see the generated JSON-LD

4. **Rich Results Test**
   - Copy the JSON-LD block
   - Paste into Google Rich Results Test
   - Fix any errors or critical warnings

5. **Deploy and Re-test**
   - Deploy the changes
   - Test the live URL with Rich Results Test
   - Monitor Google Search Console for issues

## Common Issues

### Issue: Schema Not Appearing

**Check:**
- Is the component rendered? (Check React dev tools)
- Is the data object passed correctly?
- Is there a TypeScript error preventing compilation?

### Issue: Invalid @id Reference

**Solution:**
Ensure the @id is exactly: `https://homemassageubud.com/#localbusiness`

Check:
- LocalBusiness in index.html has this @id
- Service schemas reference this @id in provider
- Review schemas reference this @id in itemReviewed

### Issue: Price Not Showing in Rich Results

**Common causes:**
- Price includes currency symbol (should be numeric only)
- priceCurrency is missing or wrong
- Price is in wrong format

**Solution:**
```json
{
  "price": "240000",        // ✅ Numeric string
  "priceCurrency": "IDR"    // ✅ Currency code
}
```

### Issue: Duplicate Schemas

**Solution:**
- Remove old Organization schema from pages (now in index.html)
- Ensure SchemaMarkup component isn't called multiple times with same data
- Check that templates don't duplicate schema generation

## Version Control

When making schema changes:

1. **Commit Message Format:**
   ```
   feat(schema): Add Service schema to new treatment page
   fix(schema): Correct LocalBusiness telephone format
   docs(schema): Update maintenance guide
   ```

2. **Test Before Committing:**
   - Run `npm run check`
   - Build successfully
   - Validate schema with Rich Results Test

3. **Document Major Changes:**
   - Update this guide if structure changes
   - Update SCHEMA_TESTING_GUIDE.md if test procedures change
   - Add comments in code for complex schema logic

## Tools and Resources

### Development Tools
- **TypeScript:** Built-in type checking
- **React DevTools:** Inspect component structure
- **Browser DevTools:** View page source and network requests

### Validation Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [JSON-LD Playground](https://json-ld.org/playground/)

### Reference Documentation
- [Schema.org](https://schema.org/)
- [Google Search Central](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [LocalBusiness Guidelines](https://developers.google.com/search/docs/appearance/structured-data/local-business)

## Quick Reference

### Schema Locations

| What | Where | Type |
|------|-------|------|
| Global business info | client/index.html | HealthAndBeautyBusiness |
| Service (treatments) | TreatmentPageTemplate | Service |
| Service (areas) | AreaPageTemplate | Service |
| Reviews | Testimonials page | Review |
| FAQs | Various pages | FAQPage |

### Key Files

- `client/index.html` - Global LocalBusiness
- `client/src/components/SchemaMarkup.tsx` - Schema generator component
- `client/src/components/TreatmentPageTemplate.tsx` - Treatment page template
- `client/src/components/AreaPageTemplate.tsx` - Area page template

### Commands

```bash
npm run check      # TypeScript validation
npm run build      # Build for production
npm run dev        # Development server
```

## Support

If you need help with schema implementation:
1. Review this guide and the testing guide
2. Check existing examples in the codebase
3. Validate with Google Rich Results Test
4. Refer to Schema.org documentation

Remember: Schema should accurately represent what's visible on the page. Never add fake or misleading information to schema markup.
