# Schema.org Quick Start Guide

## 🚀 Get Started in 5 Minutes

This quick start guide helps you implement schema.org structured data on your massage therapy website.

---

## What You Get

✅ **LocalBusiness schema** - Business info on all pages  
✅ **Service schemas** - Treatment-specific markup  
✅ **Breadcrumb schemas** - Navigation in search results  
✅ **FAQ schemas** - Expandable Q&A in Google  
✅ **Review schemas** - Star ratings in search  
✅ **Mobile service compliant** - Proper for businesses that travel to clients  

---

## Step 1: Your Business Schema (Already Done! ✅)

Located in: `client/index.html` (lines 36-142)

This schema appears on EVERY page automatically. It includes:
- Business name: Home Massage Ubud
- Phone: +62-811-2656-869
- Location: Ubud, Bali (-8.5069, 115.2625)
- Service areas: Ubud, Tegallalang, Sanggingan, Penestanan, Campuhan
- Hours: 7 AM - 10 PM, 7 days/week
- Rating: 5.0 stars (500 reviews)

**No action needed** - This is already implemented and working!

---

## Step 2: Add Service Schema to Your Pages

### For Existing Service Pages

The `SchemaMarkup` component is already available. Use it like this:

```tsx
import SchemaMarkup from '@/components/SchemaMarkup';

export default function YourServicePage() {
  return (
    <>
      {/* Add this at the top of your component */}
      <SchemaMarkup
        type="service"
        data={{
          name: "Balinese Massage Ubud",
          description: "Traditional Balinese massage with gentle stretches and aromatherapy oils for deep relaxation",
          areaServed: ["Ubud", "Tegallalang", "Sanggingan"],
          offers: [
            { name: "60 Minutes", price: "450000", description: "Full body massage" },
            { name: "90 Minutes", price: "650000", description: "Extended massage with reflexology" }
          ],
          url: "https://homemassageubud.com/ubud/balinese-massage"
        }}
      />
      
      {/* Your page content below */}
      <div>
        <h1>Balinese Massage</h1>
        <p>Content...</p>
      </div>
    </>
  );
}
```

### For New Service Pages

Copy a template from `SERVICE_SCHEMA_TEMPLATES.md` and customize:
- Change the `name` to match your service
- Update the `description`
- Adjust `offers` array with your pricing
- Update the `url` to match the page

---

## Step 3: Add FAQ Schema (Optional but Recommended)

If your page has FAQs, add this schema:

```tsx
<SchemaMarkup
  type="faq"
  data={[
    {
      question: "Do you bring massage equipment?",
      answer: "Yes, we bring everything including table, oils, and linens."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend 24 hours, but same-day is often available."
    }
  ]}
/>
```

---

## Step 4: Add Breadcrumb Schema (Recommended)

Add navigation breadcrumbs for better SEO:

```tsx
<SchemaMarkup
  type="breadcrumb"
  data={[
    { name: "Home", url: "https://homemassageubud.com/" },
    { name: "Services", url: "https://homemassageubud.com/services" },
    { name: "Your Service Name", url: "https://homemassageubud.com/path/to/page" }
  ]}
/>
```

---

## Step 5: Test Your Schema

After adding schema to any page:

1. **Visit:** https://search.google.com/test/rich-results
2. **Enter your page URL** (e.g., homemassageubud.com/ubud/balinese-massage)
3. **Click "Test URL"**
4. **Check for errors** - should show "Page is eligible for rich results"
5. **Fix any issues** reported by the tool

---

## Common Service Types

### Balinese Massage
```tsx
name: "Traditional Balinese Massage Ubud"
description: "Authentic Balinese massage with gentle stretches, acupressure, and aromatherapy oils"
offers: [
  { name: "60 Minutes", price: "450000" },
  { name: "90 Minutes", price: "650000" }
]
```

### Deep Tissue
```tsx
name: "Deep Tissue Massage Ubud"
description: "Intensive therapeutic massage targeting chronic muscle tension and knots"
serviceType: "Therapeutic Massage"
offers: [
  { name: "60 Minutes", price: "500000" },
  { name: "90 Minutes", price: "700000" }
]
```

### Couples Massage
```tsx
name: "Couples Massage Ubud"
description: "Romantic side-by-side massage for two with flower petals and candles"
offers: [
  { name: "60 Minutes for Two", price: "900000" },
  { name: "90 Minutes for Two", price: "1300000" }
]
```

### Hot Stone
```tsx
name: "Hot Stone Massage Ubud"
description: "Therapeutic massage using heated volcanic stones to melt away tension"
offers: [
  { name: "90 Minutes", price: "750000" },
  { name: "2 Hours", price: "950000" }
]
```

See `SERVICE_SCHEMA_TEMPLATES.md` for 10+ complete examples.

---

## Checklist for Each New Service Page

When creating a new service page, add these schemas in order:

1. ✅ **Breadcrumb** - Navigation path
2. ✅ **Service** - Treatment details and pricing
3. ✅ **FAQ** - Common questions (if page has FAQs)

```tsx
return (
  <>
    {/* 1. Breadcrumb */}
    <SchemaMarkup type="breadcrumb" data={[...]} />
    
    {/* 2. Service */}
    <SchemaMarkup type="service" data={{...}} />
    
    {/* 3. FAQ (optional) */}
    <SchemaMarkup type="faq" data={[...]} />
    
    {/* Your page content */}
    <div>...</div>
  </>
);
```

---

## Mobile Service Business Compliance ✅

Your schema is already compliant for mobile businesses because:

✅ **No fake physical address** - Uses Ubud area only  
✅ **areaServed property** - Lists all service locations  
✅ **Geo coordinates** - Center of Ubud for local search  
✅ **Opening hours** - Availability times specified  

This tells Google you travel TO clients (not clients to you).

---

## Pricing Format Rules

✅ **Correct:**
```tsx
price: "450000"  // String, no currency, no commas
price: "1300000"
```

❌ **Incorrect:**
```tsx
price: "IDR 450,000"  // Has currency and commas
price: 450000         // Number instead of string
price: "450k"         // Uses abbreviation
```

---

## What NOT to Include

❌ **Fake reviews or ratings**  
❌ **Unverifiable information**  
❌ **Service areas you don't actually serve**  
❌ **Prices that don't match the page**  
❌ **JavaScript comments (//) inside JSON-LD**  

Only include real, honest information that matches what's visible on the page.

---

## Need More Details?

### Complete Documentation

| Guide | What It Covers |
|-------|----------------|
| **SCHEMA_IMPLEMENTATION_GUIDE.md** | Complete reference with all schema types and properties |
| **SERVICE_SCHEMA_TEMPLATES.md** | Ready-to-use templates for 10+ massage types |
| **SCHEMA_PLACEMENT_GUIDE.md** | Exact placement instructions with visual examples |
| **SCHEMA_TESTING_GUIDE.md** | How to test and validate your schemas |
| **SCHEMA_MAINTENANCE_GUIDE.md** | How to maintain and update schemas |

### Component Documentation

The `SchemaMarkup.tsx` component has detailed inline comments explaining:
- How each schema type works
- What properties are required vs optional
- Examples of usage
- Best practices

---

## Support and Resources

### Testing Tools
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema.org Validator:** https://validator.schema.org/
- **JSON-LD Playground:** https://json-ld.org/playground/

### External Documentation
- **Schema.org Service:** https://schema.org/Service
- **Schema.org LocalBusiness:** https://schema.org/LocalBusiness
- **Google Guidelines:** https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

---

## Benefits You'll See

🎯 **Rich Search Results**
- Business info cards
- Star ratings
- FAQ accordions
- Breadcrumb navigation

📈 **Better SEO**
- Improved local search rankings
- "Near me" query visibility
- Knowledge graph eligibility
- Higher click-through rates

✅ **Google Compliance**
- Follows all Google guidelines
- Mobile service business compliant
- No fake or misleading data
- Valid JSON-LD format

---

## Quick Wins

Start with these high-impact pages:

1. **Homepage** ✅ Already has LocalBusiness schema
2. **Top 3 Services** - Add Service + FAQ schemas
3. **Testimonials Page** - Add Review schemas
4. **All Service Pages** - Add breadcrumbs at minimum

Then expand to remaining pages as time allows.

---

## Example: Complete Service Page

Here's a complete example combining all schemas:

```tsx
import SchemaMarkup from '@/components/SchemaMarkup';

export default function DeepTissueMassagePage() {
  return (
    <>
      {/* All schemas at the top */}
      <SchemaMarkup
        type="breadcrumb"
        data={[
          { name: "Home", url: "https://homemassageubud.com/" },
          { name: "Ubud", url: "https://homemassageubud.com/ubud" },
          { name: "Deep Tissue", url: "https://homemassageubud.com/ubud/deep-tissue-massage" }
        ]}
      />
      
      <SchemaMarkup
        type="service"
        data={{
          name: "Deep Tissue Massage Ubud",
          description: "Intensive therapeutic massage targeting chronic tension with deep pressure and slow strokes",
          serviceType: "Therapeutic Massage",
          areaServed: ["Ubud", "Tegallalang", "Sanggingan"],
          offers: [
            { name: "60 Minutes", price: "500000", description: "Focused deep tissue" },
            { name: "90 Minutes", price: "700000", description: "Full body treatment" }
          ],
          url: "https://homemassageubud.com/ubud/deep-tissue-massage"
        }}
      />
      
      <SchemaMarkup
        type="faq"
        data={[
          {
            question: "Is deep tissue massage painful?",
            answer: "It uses firm pressure but should never be painful. We work within your comfort level."
          },
          {
            question: "Who should avoid deep tissue?",
            answer: "Avoid if you have recent injuries, blood clots, or are pregnant without doctor approval."
          }
        ]}
      />
      
      {/* Your visible page content */}
      <div className="container">
        <h1>Deep Tissue Massage Ubud</h1>
        <p>Intensive therapeutic massage...</p>
        
        <div className="pricing">
          <h2>Pricing</h2>
          <p>60 Minutes - IDR 500,000</p>
          <p>90 Minutes - IDR 700,000</p>
        </div>
        
        <div className="faq">
          <h2>FAQ</h2>
          <div>
            <h3>Is deep tissue massage painful?</h3>
            <p>It uses firm pressure...</p>
          </div>
        </div>
      </div>
    </>
  );
}
```

---

## Summary

**What's Done:**
- ✅ LocalBusiness schema in index.html (appears on all pages)
- ✅ SchemaMarkup component ready to use
- ✅ Complete documentation and templates
- ✅ Mobile service business compliant
- ✅ Google guidelines compliant

**What You Need to Do:**
1. Add Service schemas to service pages
2. Add FAQ schemas where relevant
3. Add Breadcrumb schemas for navigation
4. Test each page with Rich Results Test
5. Monitor Google Search Console for schema errors

**Time Required:**
- Per page: 5-10 minutes
- Complete site: 2-3 hours

**Expected Results:**
- Rich snippets in search results
- Improved local SEO rankings
- Higher click-through rates
- Better Google Business Profile integration

---

**Ready to start? Open `SERVICE_SCHEMA_TEMPLATES.md` and copy your first template!**

**Last Updated:** January 2026  
**Status:** ✅ Production Ready
