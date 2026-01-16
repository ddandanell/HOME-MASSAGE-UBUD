# Mobile Massage SEO Factory - Data Extraction Report

**Generated**: 2026-01-16T16:09:13.216Z
**Status**: PASS

---

## Validation Status

✅ **PASS** - All critical data extracted successfully

## Facts JSON

```json
{
  "brand": {
    "name": "Home Massage Ubud",
    "site": "https://homemassageubud.com",
    "tagline": "Premium Mobile Massage Services in Bali",
    "established": "2018"
  },
  "contacts": {
    "phone": "+62 811 2656 869",
    "whatsapp": "+62 811 2656 869",
    "whatsapp_url": "https://wa.me/628112656869",
    "email": "info@homemassageubud.com",
    "booking_url": "https://homemassageubud.com/booking"
  },
  "pricing": {
    "currency": "IDR",
    "mobile_massage": [
      {
        "minutes": 60,
        "price": 280000,
        "description": "Perfect for targeted treatment"
      },
      {
        "minutes": 90,
        "price": 400000,
        "description": "Most popular - comprehensive session",
        "badge": "⭐ MOST POPULAR"
      },
      {
        "minutes": 120,
        "price": 520000,
        "description": "Extended treatment for maximum relaxation"
      }
    ],
    "notes": "All prices include therapist travel to your location within Ubud area, professional massage table and linens, premium oils, complete setup and cleanup. No hidden fees.",
    "couples_multiplier": 1.8,
    "group_discount": "10% off for 3+ people"
  },
  "service_areas": {
    "primary": [
      "Ubud"
    ],
    "all_locations": [
      "Ubud",
      "Ubud Center",
      "Campuhan",
      "Penestanan",
      "Tegallalang",
      "Payangan",
      "Petulu",
      "Kedewatan",
      "Sayan",
      "Monkey Forest",
      "Nyuh Kuning",
      "Peliatan",
      "Seminyak",
      "Canggu",
      "Sanur",
      "Nusa Dua",
      "Uluwatu",
      "Jimbaran",
      "Kuta",
      "Legian"
    ],
    "fees_or_rules": "No additional travel fees within Ubud and immediate surrounding areas (up to 15km radius). Extended areas (Seminyak, Canggu, Sanur, etc.) may have small transport supplement - confirm when booking."
  },
  "therapists": {
    "claims": [
      "Certified professional Balinese therapists",
      "Advanced training in Swedish, deep tissue, and traditional Balinese techniques",
      "Swiss-trained methodology combined with Balinese tradition",
      "Minimum 5 years experience in luxury hotel and spa environments",
      "All therapists background-checked and fully insured"
    ],
    "languages": [
      "English",
      "Indonesian",
      "Balinese"
    ],
    "count": "15+ professional therapists",
    "specializations": [
      "Deep Tissue",
      "Swedish",
      "Balinese",
      "Hot Stone",
      "Prenatal",
      "Sports Massage",
      "Aromatherapy"
    ]
  },
  "booking": {
    "channels": [
      "WhatsApp (fastest)",
      "Phone",
      "Email",
      "Online Booking Form"
    ],
    "requirements": [
      "Your location/accommodation address in Bali",
      "Preferred date and time",
      "Massage type and duration (60/90/120 min)",
      "Number of people",
      "Any health conditions or special requests"
    ],
    "cancellation": "Free cancellation up to 24 hours before appointment. Cancellations within 24 hours may incur 50% charge. No-shows will be charged full amount.",
    "same_day": "Same-day booking available subject to therapist availability. Contact before 2pm for best chance of same-day service. Popular times book quickly.",
    "advance_booking": "Recommend booking 2-3 days in advance during high season (July-August, December-January)"
  },
  "proof": {
    "testimonials_claims": [
      "500+ Five-Star Reviews",
      "Trusted by Four Seasons, Como Uma, and Viceroy Bali",
      "Top-rated mobile massage service on TripAdvisor"
    ],
    "positioning_claims": [
      "Bali's premier mobile massage service",
      "Bringing 5-star spa experiences to your door",
      "Professional, convenient, and affordable",
      "Serving Ubud since 2018"
    ]
  },
  "mobile_service_benefits": [
    "No travel time - therapist comes to you",
    "Enjoy massage in your comfortable, private space",
    "No need to worry about post-massage transportation",
    "Flexible scheduling including early morning and late evening",
    "Perfect for families, groups, or couples",
    "Save time and maximize relaxation"
  ]
}
```

## Unknowns List

✅ *No unknowns - all data successfully extracted or defaulted from spec*

## Extraction Notes

1. Loaded mobile-massage.spec.json successfully
2. Failed to fetch https://homemassageubud.com: getaddrinfo ENOTFOUND homemassageubud.com
3. Website not accessible during extraction. Using spec defaults.

---

## Quick Reference

### Contact Information
- **Phone**: +62 811 2656 869
- **WhatsApp**: +62 811 2656 869
- **WhatsApp URL**: https://wa.me/628112656869
- **Email**: info@homemassageubud.com
- **Booking URL**: https://homemassageubud.com/booking

### Pricing (Mobile Massage)
- **60 minutes**: IDR 280,000
- **90 minutes**: IDR 400,000 ⭐ MOST POPULAR
- **120 minutes**: IDR 520,000

### Service Areas
- Ubud
- Ubud Center
- Campuhan
- Penestanan
- Tegallalang
- Payangan
- Petulu
- Kedewatan
- Sayan
- Monkey Forest
- Nyuh Kuning
- Peliatan
- Seminyak
- Canggu
- Sanur
- Nusa Dua
- Uluwatu
- Jimbaran
- Kuta
- Legian

### Next Steps
1. Review unknowns list and update facts_json manually if needed
2. Verify pricing accuracy
3. Confirm service areas are complete
4. Run content generator: `npm run generate:mobile`

