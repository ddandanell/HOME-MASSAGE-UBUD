# Service-Specific Schema Templates

This file contains ready-to-use schema templates for all massage service types offered by Home Massage Ubud. Copy and customize these templates when creating new service pages.

## Table of Contents

1. [Balinese Massage](#balinese-massage)
2. [Deep Tissue Massage](#deep-tissue-massage)
3. [Hot Stone Massage](#hot-stone-massage)
4. [Aromatherapy Massage](#aromatherapy-massage)
5. [Couples Massage](#couples-massage)
6. [Thai Massage](#thai-massage)
7. [Pregnancy/Prenatal Massage](#pregnancyprenatal-massage)
8. [Sports Recovery Massage](#sports-recovery-massage)
9. [Lymphatic Drainage Massage](#lymphatic-drainage-massage)
10. [Foot Reflexology](#foot-reflexology)

---

## Balinese Massage

Traditional Balinese massage with gentle stretches, acupressure, and aromatherapy oils.

### React Component Usage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Traditional Balinese Massage Ubud",
    description: "Authentic traditional Balinese massage combining gentle stretches, acupressure, reflexology, and aromatherapy oils. Relieves muscle tension, improves circulation, and promotes deep relaxation delivered to your villa.",
    serviceType: "Massage Therapy",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan", "Campuhan"],
    offers: [
      {
        name: "60 Minutes",
        description: "Traditional full-body Balinese massage with premium oils",
        price: "450000"
      },
      {
        name: "90 Minutes",
        description: "Extended Balinese massage with reflexology",
        price: "650000"
      },
      {
        name: "2 Hours",
        description: "Ultimate relaxation package with head massage",
        price: "850000"
      }
    ],
    url: "https://homemassageubud.com/ubud/traditional-balinese-massage"
  }}
/>
```

### JSON-LD Format (for manual implementation)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Traditional Balinese Massage Ubud",
  "description": "Authentic traditional Balinese massage combining gentle stretches, acupressure, reflexology, and aromatherapy oils. Relieves muscle tension, improves circulation, and promotes deep relaxation delivered to your villa.",
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
    },
    {
      "@type": "City",
      "name": "Tegallalang",
      "addressRegion": "Bali",
      "addressCountry": "Indonesia"
    }
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "60 Minutes",
      "description": "Traditional full-body Balinese massage with premium oils",
      "price": "450000",
      "priceCurrency": "IDR",
      "availability": "https://schema.org/InStock",
      "url": "https://homemassageubud.com/ubud/traditional-balinese-massage"
    }
  ],
  "url": "https://homemassageubud.com/ubud/traditional-balinese-massage"
}
```

---

## Deep Tissue Massage

Intensive therapeutic massage targeting chronic muscle tension and knots.

### React Component Usage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Deep Tissue Massage Ubud",
    description: "Intensive therapeutic deep tissue massage targeting chronic muscle tension, knots, and adhesions. Uses deep pressure and slow strokes to reach deeper muscle layers and fascia, perfect for athletes and chronic pain relief.",
    serviceType: "Therapeutic Massage",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan"],
    offers: [
      {
        name: "60 Minutes",
        description: "Focused deep tissue work on problem areas",
        price: "500000"
      },
      {
        name: "90 Minutes",
        description: "Full body deep tissue with myofascial release",
        price: "700000"
      },
      {
        name: "2 Hours",
        description: "Complete deep tissue therapy with stretching",
        price: "900000"
      }
    ],
    url: "https://homemassageubud.com/ubud/deep-tissue-massage"
  }}
/>
```

---

## Hot Stone Massage

Therapeutic massage using heated volcanic stones to melt away tension.

### React Component Usage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Hot Stone Massage Ubud",
    description: "Therapeutic hot stone massage using heated volcanic stones to melt away deep muscle tension, improve circulation, and induce profound relaxation. Combines heat therapy with Swedish massage techniques in your villa.",
    serviceType: "Massage Therapy",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan", "Campuhan"],
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
```

---

## Aromatherapy Massage

Relaxing massage combined with essential oils for holistic wellness.

### React Component Usage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Aromatherapy Massage Ubud",
    description: "Soothing aromatherapy massage combining gentle Swedish techniques with therapeutic essential oils. Choose from lavender for relaxation, eucalyptus for energy, or frangipani for romance. Perfect stress relief in your villa.",
    serviceType: "Massage Therapy",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan", "Campuhan"],
    offers: [
      {
        name: "60 Minutes",
        description: "Full body aromatherapy massage with essential oil selection",
        price: "450000"
      },
      {
        name: "90 Minutes",
        description: "Extended aromatherapy with scalp massage",
        price: "650000"
      },
      {
        name: "2 Hours",
        description: "Ultimate relaxation with body scrub and massage",
        price: "950000"
      }
    ],
    url: "https://homemassageubud.com/ubud/aromatherapy-massage"
  }}
/>
```

---

## Couples Massage

Romantic side-by-side massage experience for two.

### React Component Usage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Couples Massage Ubud",
    description: "Romantic side-by-side couples massage in your villa with two therapists. Choose from Balinese, aromatherapy, or deep tissue. Includes flower petals, candles, and romantic setup. Perfect for honeymooners and anniversaries.",
    serviceType: "Massage Therapy",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan", "Campuhan"],
    offers: [
      {
        name: "60 Minutes for Two",
        description: "Side-by-side massage with romantic ambiance setup",
        price: "900000"
      },
      {
        name: "90 Minutes for Two",
        description: "Extended couples massage with hot stones",
        price: "1300000"
      },
      {
        name: "2 Hours for Two",
        description: "Premium couples spa package with scrub and massage",
        price: "1800000"
      }
    ],
    url: "https://homemassageubud.com/ubud/couples-massage"
  }}
/>
```

---

## Thai Massage

Traditional Thai massage with stretching and acupressure techniques.

### React Component Usage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Thai Massage Ubud",
    description: "Authentic Thai massage combining deep stretching, acupressure, and yoga-like movements. Performed clothed on a mat, this ancient therapy improves flexibility, relieves tension, and energizes the body in your villa.",
    serviceType: "Massage Therapy",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan"],
    offers: [
      {
        name: "60 Minutes",
        description: "Traditional Thai massage with stretching",
        price: "450000"
      },
      {
        name: "90 Minutes",
        description: "Extended Thai massage with deep stretches",
        price: "650000"
      },
      {
        name: "2 Hours",
        description: "Complete Thai therapy with herbal compress",
        price: "850000"
      }
    ],
    url: "https://homemassageubud.com/ubud/thai-massage"
  }}
/>
```

---

## Pregnancy/Prenatal Massage

Safe prenatal massage by certified therapists for expectant mothers.

### React Component Usage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Pregnancy Massage Ubud",
    description: "Safe prenatal massage by certified pregnancy massage therapists. Relieves back pain, reduces swelling, and promotes relaxation during pregnancy using side-lying techniques. Available after first trimester with doctor approval.",
    serviceType: "Prenatal Massage",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan", "Campuhan"],
    offers: [
      {
        name: "60 Minutes",
        description: "Gentle prenatal massage in safe side-lying position",
        price: "550000"
      },
      {
        name: "90 Minutes",
        description: "Extended pregnancy massage with reflexology",
        price: "750000"
      }
    ],
    url: "https://homemassageubud.com/ubud/pregnancy-massage"
  }}
/>
```

### Additional Schema Property for Pregnancy Massage

For pregnancy massage, you can add an audience property to indicate who the service is for:

**React Component (recommended):**
```tsx
// In the data object, add:
audience: {
  "@type": "MedicalAudience",
  "name": "Pregnant Women (12+ weeks)"
}
```

**Note:** The `//` comments above are for explanation only. In actual JSON-LD, don't include comments - only include the properties themselves.

---

## Sports Recovery Massage

Intensive recovery massage for athletes and active individuals.

### React Component Usage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Sports Recovery Massage Ubud",
    description: "Sports recovery massage for athletes and active travelers. Targets muscle fatigue, reduces soreness, and speeds recovery after hiking, surfing, yoga, or gym workouts. Perfect after Mount Batur treks and yoga intensives.",
    serviceType: "Sports Massage",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan"],
    offers: [
      {
        name: "60 Minutes",
        description: "Post-activity sports recovery massage",
        price: "500000"
      },
      {
        name: "90 Minutes",
        description: "Deep sports massage with stretching",
        price: "700000"
      },
      {
        name: "2 Hours",
        description: "Complete recovery with compression therapy",
        price: "900000"
      }
    ],
    url: "https://homemassageubud.com/ubud/sports-recovery-massage"
  }}
/>
```

---

## Lymphatic Drainage Massage

Gentle massage to support detoxification and reduce bloating.

### React Component Usage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Lymphatic Drainage Massage Ubud",
    description: "Gentle lymphatic drainage massage using light rhythmic strokes to support detoxification, reduce bloating, boost immunity, and improve skin health. Popular with wellness retreat participants and post-flight recovery.",
    serviceType: "Massage Therapy",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan"],
    offers: [
      {
        name: "60 Minutes",
        description: "Full body lymphatic drainage session",
        price: "600000"
      },
      {
        name: "90 Minutes",
        description: "Extended lymphatic massage with facial drainage",
        price: "850000"
      }
    ],
    url: "https://homemassageubud.com/ubud/lymphatic-drainage-massage"
  }}
/>
```

---

## Foot Reflexology

Therapeutic foot massage targeting pressure points for whole-body wellness.

### React Component Usage

```tsx
<SchemaMarkup
  type="service"
  data={{
    name: "Foot Reflexology Ubud",
    description: "Traditional foot reflexology massage targeting pressure points corresponding to organs and systems throughout the body. Relieves tired feet, improves circulation, and promotes overall wellness in your villa.",
    serviceType: "Reflexology",
    areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan", "Campuhan"],
    offers: [
      {
        name: "45 Minutes",
        description: "Foot reflexology with leg massage",
        price: "350000"
      },
      {
        name: "60 Minutes",
        description: "Extended foot reflexology with hot stone therapy",
        price: "450000"
      },
      {
        name: "90 Minutes",
        description: "Full reflexology including hands and feet",
        price: "600000"
      }
    ],
    url: "https://homemassageubud.com/ubud/foot-reflexology"
  }}
/>
```

---

## Customization Guide

### How to Create a New Service Schema

1. **Choose the closest template** from above
2. **Update the name** to match your service exactly
3. **Rewrite the description** (150-250 characters recommended)
4. **Adjust serviceType** if needed:
   - "Massage Therapy" (general)
   - "Therapeutic Massage" (medical focus)
   - "Sports Massage" (athletic recovery)
   - "Prenatal Massage" (pregnancy)
   - "Reflexology" (pressure point therapy)
5. **Update areaServed** with actual service locations
6. **Modify offers** to match your pricing:
   - Update duration names
   - Update descriptions
   - Update prices (numeric only, no symbols)
7. **Change the URL** to match the page path
8. **Test with Google Rich Results Test**

### Required vs Optional Properties

**Required (must include):**
- `name` - Service name
- `description` - Service description
- `provider` - Reference to LocalBusiness (automatically added)

**Highly Recommended:**
- `serviceType` - Type of service
- `areaServed` - Service locations
- `offers` - Pricing information
- `url` - Service page URL

**Optional (add if relevant):**
- `audience` - For specialized services (e.g., pregnancy)
- `additionalType` - Alternative classification
- `hasOfferCatalog` - For multiple service categories

### Price Formatting Rules

✅ **Correct:**
- "450000" (numeric string)
- "650000"
- "1300000"

❌ **Incorrect:**
- "IDR 450,000" (includes currency and commas)
- "450k" (uses abbreviation)
- 450000 (number instead of string)

### Area Served Best Practices

**Option 1: Single Area**
```tsx
areaServed: "Ubud"
```

**Option 2: Multiple Areas (Recommended)**
```tsx
areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan", "Campuhan"]
```

**Option 3: With Details (Advanced)**
```tsx
areaServed: [
  {
    "@type": "City",
    "name": "Ubud",
    "addressRegion": "Bali",
    "addressCountry": "Indonesia"
  }
]
```

---

## FAQ Schema Templates

Add FAQ schemas to service pages to enable FAQ rich results.

### General Service FAQs

```tsx
<SchemaMarkup
  type="faq"
  data={[
    {
      question: "Do you bring massage equipment and oils?",
      answer: "Yes, we bring everything needed including a professional massage table, premium essential oils, fresh linens, and towels. You don't need to prepare anything."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 24 hours in advance, especially during peak season. Same-day bookings are often available - check via WhatsApp."
    },
    {
      question: "Can I request a male or female therapist?",
      answer: "Absolutely! Just specify your preference when booking and we'll do our best to accommodate. For couples massage, you can request male/male, female/female, or mixed pairs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash (IDR or USD), bank transfer, and credit cards. Payment is made directly to the therapist after your session."
    }
  ]}
/>
```

### Treatment-Specific FAQs (Deep Tissue Example)

```tsx
<SchemaMarkup
  type="faq"
  data={[
    {
      question: "Is deep tissue massage painful?",
      answer: "Deep tissue involves firmer pressure but should never be painful. We work within your comfort level and communicate throughout. Some soreness the next day is normal as toxins release."
    },
    {
      question: "Who should avoid deep tissue massage?",
      answer: "Avoid if you have recent injuries, blood clots, osteoporosis, or are pregnant without doctor approval. Consult your therapist about any health conditions."
    },
    {
      question: "How is deep tissue different from regular massage?",
      answer: "Deep tissue uses slower, more focused pressure to reach deeper muscle layers and fascia. It's more therapeutic for chronic tension, while Swedish massage is gentler and more relaxing."
    }
  ]}
/>
```

---

## Breadcrumb Schema for Service Pages

Standard breadcrumb pattern for treatment pages:

```tsx
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
      name: "Balinese Massage", 
      url: "https://homemassageubud.com/ubud/balinese-massage" 
    }
  ]}
/>
```

---

## Testing Checklist

Before publishing a new service page:

- [ ] Service name matches page H1 exactly
- [ ] Description is 150-250 characters
- [ ] All prices match displayed prices on page
- [ ] Area served matches actual service locations
- [ ] URL is the canonical page URL
- [ ] Provider reference points to `#localbusiness`
- [ ] Tested with Google Rich Results Test
- [ ] No JSON syntax errors
- [ ] FAQ schema added (if FAQs exist on page)
- [ ] Breadcrumb schema added

---

## Additional Resources

- **Main Documentation:** `SCHEMA_IMPLEMENTATION_GUIDE.md`
- **Testing Guide:** `SCHEMA_TESTING_GUIDE.md`
- **Maintenance Guide:** `SCHEMA_MAINTENANCE_GUIDE.md`
- **Google Rich Results Test:** https://search.google.com/test/rich-results
- **Schema.org Service Spec:** https://schema.org/Service

---

**Last Updated:** January 2026
**Status:** ✅ Production Ready
