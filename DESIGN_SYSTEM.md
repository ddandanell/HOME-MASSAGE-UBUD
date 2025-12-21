# Design System Documentation
## Home Massage Ubud - UI/UX Standards

**Last Updated**: December 2024  
**Purpose**: Ensure consistency across all user interfaces, interactions, and brand touchpoints

---

## 🎨 Design Principles

### Core Principles
1. **Consistency over creativity** - Reuse patterns, avoid one-offs
2. **Clarity over cleverness** - Users should never be confused
3. **Actions before aesthetics** - Make CTAs obvious and easy
4. **Fewer patterns, reused everywhere** - Maintain a small, focused pattern library
5. **Intentional, calm, and professional** - The system should feel cohesive

---

## 🎯 Call-to-Action (CTA) Standards

### CTA Text Constants
Located in `/client/src/lib/whatsapp.ts`:

```typescript
export const CTA_TEXT = {
  PRIMARY: "Book Now",           // Use for main booking actions
  WHATSAPP: "Book via WhatsApp", // Use when explicitly mentioning WhatsApp
  QUICK_BOOK: "Quick Book",      // Use for floating buttons
  CALL: "Call Now",              // Use for phone call actions
} as const;
```

### Button Variants
- **Primary (default)**: Emerald-200 background - Use for all primary booking actions
- **Outline**: White background with border - Use for secondary actions
- **Ghost**: Transparent - Use for tertiary actions
- **Link**: Text-only - Use for inline navigation

### Button Usage Guidelines
```tsx
// ✅ CORRECT - Using default variant
<Button onClick={handleBooking}>
  {CTA_TEXT.PRIMARY}
</Button>

// ❌ INCORRECT - Inline color classes
<Button className="bg-emerald-200 hover:bg-emerald-300 text-gray-900">
  Book Now
</Button>
```

---

## 📱 WhatsApp Integration

### Centralized Utilities
Located in `/client/src/lib/whatsapp.ts`:

```typescript
// Constants
export const WHATSAPP_NUMBER_FORMATTED = "+62 811-2656-869"
export const WHATSAPP_NUMBER_CLEAN = "628112656869"

// Message Generation Functions
generateGeneralInquiryMessage()        // General booking inquiry
generateAreaInquiryMessage(areaName)   // Area-specific inquiry
generateTreatmentInquiryMessage(name)  // Treatment-specific inquiry
generateBookingMessage(details)        // Detailed booking with form data

// Action Function
openWhatsApp(message) // Opens WhatsApp with pre-filled message
```

### Floating WhatsApp Button
Single unified component: `/client/src/components/WhatsAppButton.tsx`

**Replaces**: FloatingWhatsApp.tsx, WhatsAppFloat.tsx (deprecated)

**Usage**:
```tsx
import WhatsAppButton from '@/components/WhatsAppButton';

// Standard usage
<WhatsAppButton />

// With custom message
<WhatsAppButton message={generateAreaInquiryMessage("Seminyak")} />
```

**Behavior**:
- Appears after user scrolls 100px
- Mobile: Bottom-left, simple circular button
- Desktop: Bottom-right, expandable with label on hover

---

## 🎨 Color System

### Brand Colors (from CSS variables)
```css
--primary: hsl(152, 76%, 80%)           /* Light Emerald Green - Primary CTAs */
--secondary: hsl(35, 60%, 92%)          /* Soft Amber/Beige - Sections */
--accent: hsl(35, 80%, 50%)             /* Gold - Highlights */
--background: hsl(40, 30%, 98%)         /* Creamy White */
--foreground: hsl(32, 20%, 20%)         /* Dark Brown Text */
```

### Usage Guidelines
- **Emerald-200** (via button default): All primary CTAs
- **Amber/Gold**: Accents, highlights, decorative elements
- **White/Cream**: Backgrounds, cards
- **Dark Brown**: Primary text

---

## 📐 Spacing Scale

### Consistent Spacing Pattern
```css
py-8   /* 2rem - Small section padding */
py-12  /* 3rem - Medium section padding */
py-16  /* 4rem - Large section padding */
py-20  /* 5rem - Extra large section padding */
```

### Guidelines
- Hero sections: `py-20 md:py-32`
- Content sections: `py-12 sm:py-16 md:py-20`
- Card padding: `p-4 md:p-6 lg:p-8`
- Gaps between items: `gap-4 sm:gap-6 md:gap-8`

---

## 🧩 Component Patterns

### Template Components
**TreatmentPageTemplate**: `/client/src/components/TreatmentPageTemplate.tsx`
- Use for all treatment detail pages
- Standardized hero, benefits, pricing, FAQ sections
- Auto-includes WhatsAppButton with treatment-specific message

**AreaPageTemplate**: `/client/src/components/AreaPageTemplate.tsx`
- Use for all service area pages
- Standardized hero, features, treatments, attractions sections
- Auto-includes WhatsAppButton with area-specific message

### Header Component
Located: `/client/src/components/Header.tsx`
- Fixed position, transparent to solid on scroll
- Responsive mobile menu
- Standardized navigation links
- Uses CTA_TEXT constants

---

## 🔄 Transitions & Animations

### Standard Durations
```css
transition-all duration-300  /* Default for all interactive elements */
hover:scale-105              /* Subtle hover scale for cards/buttons */
animate-pulse                /* Use sparingly for urgent CTAs */
```

### Guidelines
- All buttons: 300ms transition
- Hover states: Scale or shadow changes, never both
- Page transitions: Use Framer Motion for complex animations
- Scroll animations: Trigger after 100px scroll threshold

---

## 📝 Typography

### Font Families
```css
--font-serif: 'Playfair Display'  /* Use for headings */
--font-sans: 'Inter'              /* Use for body text */
```

### Heading Scale
```tsx
h1: "text-4xl md:text-5xl lg:text-6xl font-bold"
h2: "text-3xl md:text-4xl lg:text-5xl font-bold"
h3: "text-2xl md:text-3xl lg:text-4xl font-semibold"
```

### Text Colors
```tsx
Primary text: "text-gray-900"
Secondary text: "text-gray-600" or "text-muted-foreground"
Accent text: "text-amber-600"
```

---

## ✅ Component Checklist

When creating or updating components:

- [ ] Use `CTA_TEXT` constants for all button labels
- [ ] Remove inline color classes (use button variants)
- [ ] Use centralized WhatsApp utilities
- [ ] Apply consistent spacing from scale
- [ ] Include WhatsAppButton on user-facing pages
- [ ] Use template components when applicable
- [ ] Test mobile and desktop responsiveness
- [ ] Verify 300ms transition timing
- [ ] Check contrast for accessibility

---

## 🚫 Anti-Patterns (Avoid These)

### ❌ Inconsistent CTA Text
```tsx
// Wrong
<Button>Book Massage Now</Button>
<Button>Reserve Treatment</Button>
<Button>Book Now via WhatsApp</Button>

// Right
<Button>{CTA_TEXT.PRIMARY}</Button>
<Button>{CTA_TEXT.WHATSAPP}</Button>
```

### ❌ Inline Button Styling
```tsx
// Wrong
<Button className="bg-emerald-200 hover:bg-emerald-300 text-gray-900">

// Right
<Button> {/* Uses default variant automatically */}
```

### ❌ Hardcoded Phone Numbers
```tsx
// Wrong
<a href="tel:+628112656869">

// Right
<a href={`tel:${WHATSAPP_NUMBER_FORMATTED.replace(/[^0-9+]/g, '')}`}>
```

### ❌ Multiple WhatsApp Button Implementations
```tsx
// Wrong - Creating custom floating buttons
<div className="fixed bottom-4 right-4">...</div>

// Right - Use unified component
<WhatsAppButton />
```

---

## 🔍 Code Review Checklist

Before merging:

1. **Consistency**
   - [ ] All buttons use standardized variants
   - [ ] CTA text uses constants
   - [ ] Spacing follows established scale
   - [ ] Colors use design system variables

2. **Performance**
   - [ ] Images are optimized (WebP, lazy loading)
   - [ ] No unnecessary re-renders
   - [ ] Bundle size is reasonable

3. **Accessibility**
   - [ ] Proper semantic HTML
   - [ ] ARIA labels where needed
   - [ ] Keyboard navigation works
   - [ ] Color contrast meets WCAG AA

4. **User Experience**
   - [ ] Mobile-first responsive
   - [ ] Fast page loads
   - [ ] Clear visual hierarchy
   - [ ] Obvious CTAs

---

## 📚 Reference Files

### Core System Files
- `/client/src/lib/whatsapp.ts` - WhatsApp utilities & CTA constants
- `/client/src/components/ui/button.tsx` - Button component variants
- `/client/src/components/WhatsAppButton.tsx` - Unified floating button
- `/client/src/index.css` - Design tokens & CSS variables

### Template Files
- `/client/src/components/TreatmentPageTemplate.tsx`
- `/client/src/components/AreaPageTemplate.tsx`
- `/client/src/components/Header.tsx`
- `/client/src/components/Footer.tsx`

---

## 🎯 Goals Achieved

✅ **Design Consistency**: Unified button styles and CTA text  
✅ **Reduced Complexity**: Single WhatsApp integration pattern  
✅ **Better UX**: Clear, predictable user interactions  
✅ **Easier Maintenance**: Centralized constants and utilities  
✅ **Scalability**: Template-based approach for new pages  

---

**For questions or suggestions, contact the development team.**
