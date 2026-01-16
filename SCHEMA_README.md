# Schema.org Documentation Index

## 📚 Complete Schema Implementation for Home Massage Ubud

This directory contains comprehensive documentation for implementing schema.org structured data markup on the homemassageubud.com website following Google's guidelines for local businesses and health services.

---

## 🗂️ Documentation Files

### 1. **SCHEMA_QUICK_START.md** ⭐ START HERE
**Get started in 5 minutes**

Perfect for developers who want to quickly add schema markup to pages. Includes:
- Quick implementation examples
- Common service templates
- Testing checklist
- Step-by-step instructions

👉 **Start here if you're new to schema or just want to add markup fast.**

---

### 2. **SCHEMA_IMPLEMENTATION_GUIDE.md** 📖 COMPLETE REFERENCE
**Comprehensive implementation guide**

The complete reference covering everything about schema implementation:
- Schema types explained (LocalBusiness, Service, FAQ, Breadcrumb, Review)
- Mobile service business requirements
- JSON-LD format examples
- Best practices and compliance
- Testing procedures
- Maintenance schedule

👉 **Read this for a complete understanding of the entire schema system.**

---

### 3. **SERVICE_SCHEMA_TEMPLATES.md** 📋 COPY-PASTE TEMPLATES
**Ready-to-use service templates**

Copy-paste templates for all massage services:
- Traditional Balinese Massage
- Deep Tissue Massage
- Hot Stone Massage
- Aromatherapy Massage
- Couples Massage
- Thai Massage
- Pregnancy Massage
- Sports Recovery Massage
- Lymphatic Drainage
- Foot Reflexology

Each template includes:
- Complete React component code
- JSON-LD format version
- FAQ examples
- Customization instructions

👉 **Use this when creating new service pages - just copy, customize, and paste.**

---

### 4. **SCHEMA_PLACEMENT_GUIDE.md** 📍 EXACT LOCATIONS
**Where to put your schema code**

Visual guide showing exactly where schema markup goes:
- HTML head section placement
- React component structure
- Multiple schemas on one page
- Static HTML examples
- Complete page examples

👉 **Reference this when you're unsure where to place schema code.**

---

### 5. **SCHEMA_TESTING_GUIDE.md** ✅ VALIDATION
**How to test your schemas**

Detailed testing procedures:
- Google Rich Results Test walkthrough
- Schema.org validator usage
- Common errors and fixes
- Testing checklist
- Troubleshooting guide

👉 **Use this after implementing schema to ensure everything works correctly.**

---

### 6. **SCHEMA_MAINTENANCE_GUIDE.md** 🔧 ONGOING UPDATES
**How to maintain and update schemas**

Developer maintenance guide:
- How to update business information
- Adding new service pages
- Updating reviews and ratings
- Architecture overview
- When to make changes

👉 **Reference this when business information changes or you need to update existing schemas.**

---

## 🚀 Quick Navigation

| I Want To... | Go To... |
|--------------|----------|
| Add schema to a new service page | [SERVICE_SCHEMA_TEMPLATES.md](SERVICE_SCHEMA_TEMPLATES.md) |
| Understand how everything works | [SCHEMA_IMPLEMENTATION_GUIDE.md](SCHEMA_IMPLEMENTATION_GUIDE.md) |
| Get started quickly | [SCHEMA_QUICK_START.md](SCHEMA_QUICK_START.md) |
| Know where to place code | [SCHEMA_PLACEMENT_GUIDE.md](SCHEMA_PLACEMENT_GUIDE.md) |
| Test my implementation | [SCHEMA_TESTING_GUIDE.md](SCHEMA_TESTING_GUIDE.md) |
| Update existing schemas | [SCHEMA_MAINTENANCE_GUIDE.md](SCHEMA_MAINTENANCE_GUIDE.md) |

---

## 📁 Code Files

### Schema Component
**Location:** `client/src/components/SchemaMarkup.tsx`

This React component generates all schema types:
- Service schema
- FAQ schema
- Breadcrumb schema
- Review schema

Extensively documented with inline comments explaining every property.

### Homepage Business Schema
**Location:** `client/index.html` (lines 36-142)

The global LocalBusiness/HealthAndBeautyBusiness schema that appears on every page. Includes:
- Business name, address, phone, email
- GPS coordinates and service areas
- Opening hours
- Aggregate ratings
- Social media profiles

---

## ✅ What's Implemented

### Already Complete
- ✅ LocalBusiness schema in index.html (loads on all pages)
- ✅ SchemaMarkup component (ready to use on any page)
- ✅ Mobile service business compliance
- ✅ Valid JSON-LD format throughout
- ✅ Comprehensive documentation (6 guides)
- ✅ Service templates for 10+ massage types
- ✅ Testing procedures
- ✅ Maintenance guidelines

### What You Need to Do
- [ ] Add Service schemas to individual treatment pages
- [ ] Add FAQ schemas to pages with Q&A sections
- [ ] Add Breadcrumb schemas for navigation
- [ ] Test each page with Google Rich Results Test
- [ ] Monitor Google Search Console for schema errors

---

## 🎯 Key Features

### 1. Mobile Service Business Compliant
✅ No fake physical address  
✅ areaServed property lists all service locations  
✅ Geo coordinates for local search  
✅ Properly indicates you travel to clients  

### 2. Google Guidelines Compliant
✅ Only real, verifiable information  
✅ No fake reviews or fabricated data  
✅ JSON-LD format (Google's recommendation)  
✅ Content matches visible page elements  
✅ Proper @id referencing between schemas  

### 3. SEO Benefits
✅ Eligible for rich search results  
✅ Business info cards  
✅ Star ratings display  
✅ FAQ accordions  
✅ Breadcrumb navigation  
✅ Local search optimization  

---

## 📊 Business Information

Current schema includes:

```
Business Name: Home Massage Ubud
Phone: +62-811-2656-869
Email: hello@homemassageubud.com
Location: Ubud, Bali, Indonesia
Coordinates: -8.5069, 115.2625
Service Areas: Ubud, Tegallalang, Sanggingan, Penestanan, Campuhan
Hours: 7:00 AM - 10:00 PM, 7 days/week
Rating: 5.0 stars (500 reviews)
```

To update any of this information, see [SCHEMA_MAINTENANCE_GUIDE.md](SCHEMA_MAINTENANCE_GUIDE.md).

---

## 🔗 External Resources

### Testing Tools
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema.org Validator:** https://validator.schema.org/
- **JSON-LD Playground:** https://json-ld.org/playground/

### Official Documentation
- **Schema.org:** https://schema.org/
- **Google Structured Data Guidelines:** https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- **LocalBusiness Spec:** https://schema.org/LocalBusiness
- **Service Spec:** https://schema.org/Service

### Additional Schema Docs (Already Existing)
- `SCHEMA_IMPLEMENTATION_SUMMARY.md` - Previous implementation summary
- `SCHEMA_TEMPLATES.md` - Additional templates (legacy)
- `SCHEMA_TESTING_GUIDE.md` - Testing procedures (legacy)
- `SCHEMA_MAINTENANCE_GUIDE.md` - Maintenance guide (legacy)

---

## 🎓 Schema Types Used

### 1. HealthAndBeautyBusiness (LocalBusiness)
- **File:** `client/index.html`
- **Purpose:** Core business entity with NAP info
- **Scope:** Appears on every page
- **@id:** `https://homemassageubud.com/#localbusiness`

### 2. Service
- **Component:** `SchemaMarkup.tsx`
- **Purpose:** Individual treatment/service markup
- **Used on:** Treatment pages, area pages
- **Links to:** LocalBusiness via @id

### 3. FAQPage
- **Component:** `SchemaMarkup.tsx`
- **Purpose:** Question/answer markup for FAQ rich results
- **Used on:** Pages with FAQ sections
- **Benefit:** Expandable FAQ in search results

### 4. BreadcrumbList
- **Component:** `SchemaMarkup.tsx`
- **Purpose:** Navigation breadcrumb markup
- **Used on:** All pages with breadcrumbs
- **Benefit:** Shows navigation path in search

### 5. Review
- **Component:** `SchemaMarkup.tsx`
- **Purpose:** Customer testimonial markup
- **Used on:** Testimonials page
- **Links to:** LocalBusiness via @id
- **Benefit:** Star ratings in search results

---

## 🛠️ Technical Details

### JSON-LD Format
All schemas use JSON-LD format (JavaScript Object Notation for Linked Data):
- Recommended by Google
- Easy to implement and maintain
- Doesn't interfere with HTML
- Can be dynamically generated
- Easy to validate and test

### Component-Based Architecture
- **Global schema:** `client/index.html` (LocalBusiness)
- **Dynamic schemas:** `SchemaMarkup.tsx` component
- **Single source of truth:** @id referencing
- **No duplication:** Provider links via @id
- **Maintainable:** Change once, updates everywhere

### React Integration
The SchemaMarkup component:
- Automatically renders in `<head>` section
- Accepts typed props (TypeScript)
- Validates data structure
- Escapes special characters
- Returns null for deprecated types

---

## 📝 Example Implementation

### Adding Schema to a New Service Page

```tsx
// File: client/src/pages/treatments/NewMassage.tsx

import SchemaMarkup from '@/components/SchemaMarkup';

export default function NewMassagePage() {
  return (
    <>
      {/* 1. Breadcrumb Navigation */}
      <SchemaMarkup
        type="breadcrumb"
        data={[
          { name: "Home", url: "https://homemassageubud.com/" },
          { name: "Services", url: "https://homemassageubud.com/services" },
          { name: "New Massage", url: "https://homemassageubud.com/services/new-massage" }
        ]}
      />
      
      {/* 2. Service Information */}
      <SchemaMarkup
        type="service"
        data={{
          name: "New Massage Type Ubud",
          description: "Description of your new massage service...",
          serviceType: "Massage Therapy",
          areaServed: ["Ubud", "Tegallalang", "Sanggingan"],
          offers: [
            { name: "60 Minutes", price: "450000", description: "Standard session" },
            { name: "90 Minutes", price: "650000", description: "Extended session" }
          ],
          url: "https://homemassageubud.com/services/new-massage"
        }}
      />
      
      {/* 3. FAQ (if applicable) */}
      <SchemaMarkup
        type="faq"
        data={[
          { question: "Question 1?", answer: "Answer 1..." },
          { question: "Question 2?", answer: "Answer 2..." }
        ]}
      />
      
      {/* Your page content */}
      <div className="container">
        <h1>New Massage Type</h1>
        <p>Page content...</p>
      </div>
    </>
  );
}
```

---

## ✨ Benefits of This Implementation

### For Search Engines
- Clear business information
- Structured service catalog
- Geographic targeting
- Verified contact details
- Customer ratings and reviews

### For Users
- Rich search results with more information
- Star ratings visible in search
- Direct answers to questions (FAQs)
- Easy navigation (breadcrumbs)
- Click-to-call phone numbers

### For Your Business
- Improved local SEO rankings
- Higher click-through rates
- Better qualified traffic
- Enhanced Google Business Profile
- Knowledge graph eligibility
- "Near me" search visibility

---

## 🔄 Maintenance Schedule

### Monthly
- Check Google Search Console for schema errors
- Review and fix any reported issues
- Update review counts if significantly changed

### Quarterly
- Re-validate key pages with Rich Results Test
- Update aggregate ratings if changed
- Review service areas (add/remove as needed)

### When Changes Occur
- **Business info changes:** Update `client/index.html`
- **New service:** Copy template from `SERVICE_SCHEMA_TEMPLATES.md`
- **New reviews:** Add to testimonials array
- **Price changes:** Update offers in service schemas

See [SCHEMA_MAINTENANCE_GUIDE.md](SCHEMA_MAINTENANCE_GUIDE.md) for detailed procedures.

---

## 🆘 Getting Help

### Common Issues

**Problem:** Schema not showing in Rich Results Test  
**Solution:** Check that JSON-LD is valid, in `<head>` section, and no syntax errors

**Problem:** "Missing required field" error  
**Solution:** Check schema type requirements and add missing properties

**Problem:** Price mismatch warning  
**Solution:** Ensure schema prices match visible page prices exactly

**Problem:** Invalid @id reference  
**Solution:** Verify @id in index.html matches provider reference

### Where to Look

1. **Quick answers:** Check SCHEMA_QUICK_START.md
2. **Detailed explanation:** See SCHEMA_IMPLEMENTATION_GUIDE.md
3. **Copy template:** Use SERVICE_SCHEMA_TEMPLATES.md
4. **Testing help:** Read SCHEMA_TESTING_GUIDE.md
5. **Maintenance:** Check SCHEMA_MAINTENANCE_GUIDE.md

---

## 📈 Next Steps

1. **Review** this README to understand the documentation structure
2. **Read** SCHEMA_QUICK_START.md for quick implementation guide
3. **Choose** a service page to start with
4. **Copy** template from SERVICE_SCHEMA_TEMPLATES.md
5. **Customize** with your service details
6. **Test** with Google Rich Results Test
7. **Deploy** and monitor in Search Console
8. **Repeat** for remaining service pages

---

## ✅ Implementation Status

**Current Status:** ✅ Complete and Production Ready

- ✅ LocalBusiness schema implemented
- ✅ SchemaMarkup component ready
- ✅ Mobile service compliant
- ✅ Documentation complete
- ✅ Templates created
- ✅ Testing procedures defined
- ✅ Maintenance guide provided

**What remains:** Adding schema to individual service pages (templates provided)

---

**Last Updated:** January 2026  
**Maintained by:** Development Team  
**Schema Version:** 1.0  

For questions or updates, refer to the individual guide files listed above.
