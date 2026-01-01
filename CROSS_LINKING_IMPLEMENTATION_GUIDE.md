# Cross-Linking Implementation Guide for Bali Services Network

## Overview
This guide documents the implementation of the "Recommended Services" page on homemassageubud.com and provides instructions for replicating it across all 7 websites in the network.

## Network Sites
1. https://homemassageubud.com/ (In-villa massage in Ubud) ✅ COMPLETED
2. https://www.homemassagekuta.com/ (In-villa massage in Kuta) - TODO
3. https://privatetutoringbali.com/ (Private tutoring and homeschooling) - TODO
4. https://mychef.id/ (Private chef services) - TODO
5. https://bali-tech-education.com/ (Tech education and coding classes) - TODO
6. https://balipoolservice.com/ (Pool maintenance and cleaning) - TODO
7. https://aquapurebali.com/ (Water purification and filtration) - TODO

## Implementation Requirements

### 1. Page URL
- Path: `/recommended-services` (or `/partners` if that fits better)
- Page Title: "Recommended Services for Your Bali Villa Lifestyle"

### 2. Page Structure

Each page must include:
- **Hero Section**: Badge + H1 title + introductory paragraph
- **Services Grid**: Cards for the OTHER 6 services (not the current site)
- **Context Section**: Additional information about the villa ecosystem

### 3. Service Card Template

Each card must contain:
- Icon (matches the service type)
- Service Name (H3 heading)
- Description (2-3 sentences explaining complementary value)
- 3 highlight badges
- CTA button with keyword-rich anchor text

### 4. Link Requirements

All cross-links must be:
- Pure HTML `<a>` tags (not JavaScript navigation)
- **Dofollow** (use `rel="noopener noreferrer"` ONLY - no `nofollow`)
- Open in new tab (`target="_blank"`)
- Keyword-rich anchor text

### 5. Footer Integration

Add a single link in the footer:
- Section: "Company" or "Useful Links"
- Text: "Recommended Services"
- Destination: `/recommended-services`
- Do NOT add to main navigation, header, or homepage

## Service Descriptions by Site Context

### For Massage Sites (Ubud & Kuta)
- **Tutoring**: "While you enjoy your wellness retreat, ensure your children continue their education..."
- **Chef**: "Complement your massage experience with a private chef preparing exquisite healthy meals..."
- **Tech Ed**: "Invest in your family's future with coding classes..."
- **Pool**: "Maintain your villa's pool in pristine condition..."
- **Water**: "Ensure the highest quality drinking water in your villa..."

### For Tutoring Site
- **Massage Ubud**: "After focused learning sessions, parents deserve relaxation with professional in-villa massage..."
- **Massage Kuta**: "Beach villa families can combine education with wellness..."
- **Chef**: "Provide nutritious meals for growing minds with a private chef..."
- **Tech Ed**: "Expand learning beyond traditional subjects with coding..."
- **Pool**: "Ensure a safe play environment with professional pool maintenance..."
- **Water**: "Protect your family's health with clean, filtered water..."

### For Chef Site
- **Massage Ubud/Kuta**: "After gourmet dining, relax with professional massage services..."
- **Tutoring**: "Support your children's education while we handle meal preparation..."
- **Tech Ed**: "Families balancing work and dining can invest in future skills..."
- **Pool**: "Keep your outdoor dining space pristine with pool maintenance..."
- **Water**: "Ensure cooking and drinking water quality with purification..."

### For Tech Education Site
- **Massage Ubud/Kuta**: "Balance screen time with wellness through professional massage..."
- **Tutoring**: "Complement tech education with comprehensive academic tutoring..."
- **Chef**: "Focus on learning while a private chef handles family meals..."
- **Pool**: "Maintain your villa's facilities while building tech skills..."
- **Water**: "Ensure a healthy learning environment with water purification..."

### For Pool Service Site
- **Massage Ubud/Kuta**: "After pool maintenance, enjoy relaxation with in-villa massage..."
- **Tutoring**: "Villa owners can ensure both property and children's education..."
- **Chef**: "Complete villa lifestyle with pool care and private dining..."
- **Tech Ed**: "Modern villa living includes both maintenance and skill development..."
- **Water**: "Complement pool chemistry with home water purification..."

### For Water Purification Site
- **Massage Ubud/Kuta**: "Combine health-conscious water quality with wellness treatments..."
- **Tutoring**: "Protect your family's health with water and education services..."
- **Chef**: "Ensure quality ingredients with purified water for cooking..."
- **Tech Ed**: "Healthy water supports healthy minds and learning..."
- **Pool**: "Comprehensive water solutions for drinking and swimming..."

## Technical Implementation (React/TypeScript)

### File Structure
```
src/
├── pages/
│   └── RecommendedServices.tsx  (new file)
├── components/
│   └── Footer.tsx               (modify)
└── App.tsx                      (modify)
```

### Code Snippets

#### 1. Create RecommendedServices.tsx Page
See the implementation in `client/src/pages/RecommendedServices.tsx` for full reference.

Key imports:
```typescript
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
```

Service data structure:
```typescript
const services = [
  {
    name: 'Service Name',
    url: 'https://example.com/',
    icon: IconComponent,
    description: 'Compelling 2-3 sentence description...',
    ctaText: 'Keyword-Rich CTA Text',
    highlights: ['Feature 1', 'Feature 2', 'Feature 3']
  }
];
```

Link implementation:
```typescript
<a 
  href={service.url} 
  className="w-full"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>
    {service.ctaText}
    <ExternalLink className="ml-2 h-4 w-4" />
  </Button>
</a>
```

#### 2. Add Route in App.tsx
```typescript
import RecommendedServices from "@/pages/RecommendedServices";

// In Router component
<Route path="/recommended-services" component={RecommendedServices} />
```

#### 3. Update Footer.tsx
Add to appropriate section in `footerSections` array:
```typescript
{
  title: 'Company',
  links: [
    // ... existing links
    { name: 'Recommended Services', href: '/recommended-services' }
  ]
}
```

## SEO Best Practices

1. **Keyword-Rich Anchor Text**: Each CTA should include location and service keywords
   - ✅ "In-Villa Massage in Ubud"
   - ✅ "Private Chef Services in Bali"
   - ❌ "Click Here" or "Learn More"

2. **Natural Language**: Descriptions should read naturally and provide value
   - Focus on how services complement each other
   - Target the shared audience (villa owners, expats, families)

3. **Dofollow Links**: Never add `rel="nofollow"` to these cross-links
   - Use only `rel="noopener noreferrer"` for security

4. **Single Footer Link**: Keep implementation minimal
   - Don't add to main navigation
   - Don't create homepage banners
   - Don't add sidebar widgets

## Quality Checklist

Before deploying to each site:
- [ ] Page accessible at `/recommended-services`
- [ ] All 6 partner sites linked (not current site)
- [ ] All links use proper HTML `<a>` tags
- [ ] All links have `target="_blank"` and `rel="noopener noreferrer"`
- [ ] No `rel="nofollow"` attributes present
- [ ] Footer link added to appropriate section
- [ ] Mobile responsive (test at 375px width)
- [ ] Descriptions tailored to current site's audience
- [ ] Keywords in anchor text
- [ ] Build succeeds without errors
- [ ] No security vulnerabilities

## Maintenance

### When to Update
- Adding new service to the network (update all 7 sites)
- Changing a service URL (update all linking sites)
- Rebranding a service name (update all sites)

### What NOT to Change
- Core link structure (keep as HTML anchors)
- Link attributes (maintain dofollow status)
- Placement (keep in footer only)

## Questions or Issues

For questions about implementation, refer to:
- This repository's implementation as reference
- Problem statement in project documentation
- SEO best practices for internal linking

---

**Implementation Status**: 1 of 7 sites complete (homemassageubud.com)
**Last Updated**: 2026-01-01
