# Internal Linking & Sitemap Maintenance Guide

## Overview
This document provides instructions for maintaining the internal linking structure and sitemaps for the Home Massage Ubud website.

## Current Site Structure (48 Total Pages)

### Main Pages (11)
- / (Homepage)
- /services
- /treatments (Hub page)
- /service-areas (Hub page)
- /sitemap (HTML sitemap)
- /about
- /contact
- /pricing
- /testimonials
- /blog
- /sustainability
- /villa-partnerships

### Treatment Pages (13)
All under `/ubud/*`:
- /ubud/traditional-balinese-massage
- /ubud/deep-tissue-massage
- /ubud/aromatherapy-massage
- /ubud/hot-stone-massage
- /ubud/thai-massage
- /ubud/lymphatic-drainage-massage
- /ubud/pregnancy-massage
- /ubud/foot-reflexology
- /ubud/post-hike-recovery-massage
- /ubud/yoga-stretch-massage
- /ubud/detox-wellness-massage
- /ubud/couples-wellness-ritual
- /ubud/herbal-bamboo-massage

### Area Pages (23)
- Ubud Areas: /ubud-centre, /ubud-north, /ubud-east, /ubud-south, /ubud-luxury-villas, /sidemen
- South Bali: /seminyak, /petitenget, /canggu, /berawa, /pererenan, /umalas, /kerobokan, /legian, /kuta, /sanur, /nusa-dua, /jimbaran
- Bukit: /uluwatu, /ungasan
- North/East: /lovina, /amed, /candidasa

### Excluded Pages
- Tegallalang.tsx is currently disabled due to file corruption (needs recreation from template)

---

## Internal Linking Architecture

### Navigation Components

#### Header (client/src/components/Header.tsx)
Primary navigation links:
- Home (/)
- Treatments (/treatments)
- Areas (/service-areas)
- Pricing (/pricing)
- About (/about)
- Book Now (WhatsApp CTA)

#### Footer (client/src/components/Footer.tsx)
Four sections:
1. **Our Services** - Links to /treatments hub + 4 popular treatment pages
2. **Service Areas** - Links to /service-areas hub + 4 popular area pages
3. **Company** - About, Testimonials, Blog, Sustainability
4. **Booking** - Pricing, Contact, Villa Partnerships, WhatsApp

Also includes:
- Link to /sitemap in footer bottom section

### Page-Level Linking

#### Treatment Pages (TreatmentPageTemplate.tsx)
Each treatment page includes:
- **Related Treatments section**: Links to 3 related treatment pages
- **"View All Treatments" button**: Links to /treatments hub page
- Links defined in `relatedTreatments` property of each treatment data object

#### Area Pages (AreaPageTemplate.tsx)
Each area page includes:
- **Treatments section**: Links to ALL treatment pages with "Learn More" buttons (uses treatment slug)
- **"More Service Areas" section**: Links to /service-areas hub page
- Each treatment card links to `/ubud/{treatment.slug}`

#### Hub Pages
- **/treatments**: Links to all 13 treatment pages, grouped by category
- **/service-areas**: Links to all 23 area pages, grouped by region
- Both hub pages cross-link to each other

#### HTML Sitemap (/sitemap)
Links to ALL 48 pages, organized by:
- Main Pages
- Massage Treatments
- Ubud Areas
- South Bali (Part 1 & 2)
- North & East Bali

---

## XML Sitemap (client/public/sitemap.xml)

### Current Status
- **Total URLs**: 48
- **Last Updated**: 2025-11-24
- **Location**: `/client/public/sitemap.xml`

### Priority Structure
- Homepage: 1.0
- Hub pages (treatments, service-areas): 0.9
- Main pages (services, about, contact, pricing): 0.8-0.9
- Treatment pages: 0.8
- Popular area pages (Ubud areas, Seminyak, Canggu): 0.8
- Other area pages: 0.7
- Sitemap page: 0.5

### Change Frequency
- Homepage: weekly
- Hub pages: weekly
- Treatment pages: monthly
- Area pages: monthly
- Informational pages: monthly

---

## How to Add New Pages

### Adding a New Treatment Page

1. **Create the treatment page file**
   ```
   Location: client/src/pages/treatments/NewTreatment.tsx
   ```
   - Copy an existing treatment page as template
   - Update all treatment properties (name, slug, description, etc.)
   - Define 3 related treatments in `relatedTreatments` array

2. **Add to router**
   ```typescript
   // In client/src/App.tsx
   
   // Add import
   import NewTreatment from "@/pages/treatments/NewTreatment";
   
   // Add route (in Treatment Pages section)
   <Route path="/ubud/new-treatment" component={NewTreatment} />
   ```

3. **Add to /treatments hub page**
   ```typescript
   // In client/src/pages/Treatments.tsx
   // Add to treatments array with appropriate category
   { 
     name: 'New Treatment', 
     url: '/ubud/new-treatment',
     description: 'Brief description',
     priceFrom: 'Rp X,XXX',
     duration: 'XX min',
     category: 'Category Name'
   }
   ```

4. **Add to XML sitemap**
   ```xml
   <!-- In client/public/sitemap.xml, in Treatment Pages section -->
   <url>
     <loc>https://homemassageubud.com/ubud/new-treatment</loc>
     <lastmod>YYYY-MM-DD</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.8</priority>
   </url>
   ```

5. **Add to HTML sitemap**
   ```typescript
   // In client/src/pages/Sitemap.tsx
   // Add in Massage Treatments section
   <li>
     <Link href="/ubud/new-treatment">
       <span className="text-amber-600 hover:text-amber-700 hover:underline">
         New Treatment
       </span>
     </Link>
   </li>
   ```

6. **Optional: Add to Footer**
   ```typescript
   // In client/src/components/Footer.tsx
   // Add to Our Services section if it's a popular treatment
   { name: 'New Treatment', href: '/ubud/new-treatment' }
   ```

### Adding a New Area Page

1. **Create the area page file**
   ```
   Location: client/src/pages/areas/NewArea.tsx
   ```
   - Copy an existing area page as template (e.g., Canggu.tsx)
   - Update area properties (name, slug, description, treatments, etc.)

2. **Add to router**
   ```typescript
   // In client/src/App.tsx
   
   // Add import (in appropriate section)
   import NewArea from "@/pages/areas/NewArea";
   
   // Add route
   <Route path="/new-area" component={NewArea} />
   ```

3. **Add to /service-areas hub page**
   ```typescript
   // In client/src/pages/ServiceAreas.tsx
   // Add to serviceAreas array with appropriate region
   { 
     name: 'New Area', 
     url: '/new-area', 
     description: 'Brief description',
     region: 'Region Name'
   }
   ```

4. **Add to XML sitemap**
   ```xml
   <!-- In client/public/sitemap.xml, in appropriate Area section -->
   <url>
     <loc>https://homemassageubud.com/new-area</loc>
     <lastmod>YYYY-MM-DD</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.7</priority>
   </url>
   ```

5. **Add to HTML sitemap**
   ```typescript
   // In client/src/pages/Sitemap.tsx
   // Add in appropriate area section
   <li>
     <Link href="/new-area">
       <span className="text-amber-600 hover:text-amber-700 hover:underline">
         New Area
       </span>
     </Link>
   </li>
   ```

6. **Optional: Add to Footer**
   ```typescript
   // In client/src/components/Footer.tsx
   // Add to Service Areas section if it's a popular location
   { name: 'New Area', href: '/new-area' }
   ```

---

## Verification Checklist

After adding new pages, verify:

- [ ] Page is accessible via direct URL
- [ ] Page appears in Header or Footer (if main page)
- [ ] Page appears in appropriate hub page (treatments or service-areas)
- [ ] Page appears in XML sitemap (/sitemap.xml)
- [ ] Page appears in HTML sitemap (/sitemap)
- [ ] Page has outgoing links to related pages
- [ ] TypeScript check passes: `npm run check`
- [ ] Build succeeds: `npm run build`

---

## Orphan Page Prevention

**Definition**: An orphan page is a page with NO incoming internal links (excluding sitemap only).

**Prevention Measures**:
1. Every page MUST be in the router (App.tsx)
2. Every page MUST be in XML sitemap
3. Every page MUST be in HTML sitemap
4. Every page SHOULD be linked from:
   - Appropriate hub page (treatments or service-areas), OR
   - Header/Footer navigation (for main pages), OR
   - Related page sections (for treatments/areas)

**Detection**: 
Run a manual check quarterly to ensure all routed pages have incoming links from pages other than the sitemap.

---

## Link Quality Guidelines

### Anchor Text
- Use descriptive, natural anchor text
- Examples: "Traditional Balinese Massage", "Massage in Seminyak"
- Avoid generic terms like "click here", "learn more" (except in buttons)

### Link Density
- Treatment pages: 3-8 contextual links in "Related Treatments" section
- Area pages: Links to all available treatments (10-15 links)
- Hub pages: Links to all items in category (13-23 links)
- Avoid excessive link clusters (no more than 30 links in a single section)

### Cross-Linking Strategy
- Treatments ↔ Treatments: Via "Related Treatments"
- Areas → Treatments: Via "Available Treatments" section
- Treatments → Hub: Via "View All Treatments" button
- Areas → Hub: Via "View All Service Areas" button
- All pages → Sitemap: Via Footer link

---

## Common Issues & Solutions

### Issue: Page not appearing in search results
**Solution**: 
1. Verify page is in sitemap.xml
2. Check lastmod date is recent
3. Ensure page has incoming links beyond sitemap
4. Submit sitemap to search engines if needed

### Issue: TypeScript errors after adding page
**Solution**:
1. Check all imports are correct
2. Ensure component props match interface
3. Run `npm run check` to see specific errors
4. Compare with working page template

### Issue: Page template not rendering correctly
**Solution**:
1. Verify all required props are provided in page data object
2. Check for missing properties in treatment/area data
3. Review template interface (TreatmentPageProps or AreaPageProps)

### Issue: Links not working
**Solution**:
1. Check URL matches route path in App.tsx exactly
2. Ensure Link component is imported from 'wouter'
3. Verify slug matches between page path and data object

---

## Performance Considerations

### Sitemap.xml Best Practices
- Keep under 50MB
- Maximum 50,000 URLs (current: 48 - safe)
- Update lastmod when pages change
- Submit to Google Search Console after updates

### Internal Linking Best Practices
- Keep important pages within 3 clicks from homepage
- Current structure: Homepage → Hub (1 click) → Individual page (2 clicks) ✓
- Avoid circular link patterns
- Ensure mobile navigation is functional

---

## Monthly Maintenance Tasks

1. **Review Analytics**: Identify popular pages, add to Footer if needed
2. **Check for Broken Links**: Use link checker tool on live site
3. **Update Lastmod Dates**: In sitemap.xml for changed pages
4. **Monitor Page Performance**: Ensure all pages load under 3 seconds
5. **Review New Content**: Add any new pages following this guide

---

## Contact for Issues

For technical issues with internal linking or sitemaps:
- Review this documentation first
- Check existing page implementations as examples
- Consult with development team if issues persist

---

## Version History

- **2025-11-24**: Initial documentation created
  - 48 total pages documented
  - Full internal linking structure established
  - XML and HTML sitemaps complete
  - 0 orphan pages achieved
