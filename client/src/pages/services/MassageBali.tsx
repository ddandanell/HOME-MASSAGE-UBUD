import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Massage Bali',
  slug: 'massage-bali',
  keyword: 'massage bali',

  metaTitle: 'Massage Bali | Spa Near Me | Home Massage Bali in Ubud, Seminyak & Kuta',
  metaDescription: 'Book massage Bali now – the highest-rated spa near me and massage near me choice for tourists in Ubud, Seminyak, Kuta. Mobile home massage Bali, authentic Balinese massage, spa Bali rituals, and deep tissue massage Bali delivered to your villa.',

  h1Title: 'Massage Bali – Mobile Balinese Massage Near Me in Ubud, Seminyak & Kuta',
  heroSubtitle: 'Your search for “spa near me” and “massage near me” ends with our island-wide mobile team. We deliver massage Bali experiences, Balinese massage rituals, and deep tissue massage Bali sessions to villas and hotels across Ubud, Seminyak, Kuta, Canggu, and beyond.',
  heroLayout: 'instant-booking',
  heroBadgeText: 'Massage Bali Near You',

  introduction: [
    'Massage Bali is more than a buzzword—it is the promise of an island-wide, on-demand wellness experience crafted for travelers who want spa-quality treatments without leaving their villa. We built the largest home massage Bali team so your “massage near me” search instantly connects you to certified therapists in every major tourism corridor. Whether you just landed in Denpasar or are unwinding after a jungle trek, we bring a serene spa Bali atmosphere directly to your space with premium oils, plush linens, and meticulous hygiene.',
    'Tourists typing “spa near me” or “massage near me” expect fast response and reliable quality. Our dedicated WhatsApp concierge replies in minutes, dispatching English-speaking therapists who arrive with professional tables and everything needed for a five-star session. From aromatherapy to sports recovery, the full spectrum of massage Bali offerings is available on your schedule, 8 AM to 10 PM daily. No traffic, no queues—just frictionless relaxation.',
    'Location matters for conversion, so we engineered true local coverage. Looking for massage Ubud after a rice terrace hike? Need massage Seminyak before dinner? Want massage Kuta right after surfing? Our team is already nearby, ready to set up in villas, resorts, beach clubs, and co-working lofts. Each therapist is trained to adapt pressure and technique to your needs while maintaining consistent service standards across every Bali district.',
    'Authenticity powers trust, which is why our Balinese massage specialists preserve traditional long strokes, acupressure points, and herbal oil blends while layering in modern wellness protocols. Guests who crave a refined spa Bali feeling choose our signature aromatherapy ritual; travelers needing recovery book deep tissue massage Bali with targeted work on shoulders, calves, and lower back. Couples, families, digital nomads, and retreat groups all benefit from the privacy and personalization of home massage Bali service.',
    'We also understand high-intent keyword journeys include price clarity and booking speed. Transparent packages, upfront travel inclusion, and quick WhatsApp links make it simple to confirm your massage Bali session. Every visit includes punctual arrival, disinfected equipment, and flexible add-ons so you can stack treatments—whether you want a classic Balinese massage, an intensive deep tissue massage Bali sequence, or a rejuvenating reflexology finisher.'
  ],

  whyChooseAngle: 'largest-team' as const,
  whyChoosePoints: [
    'Largest mobile massage Bali team with 100+ certified therapists across Ubud, Seminyak, Kuta, Canggu, and Sanur',
    'Instant WhatsApp replies for any “spa near me” or “massage near me” request with same-day confirmation',
    'Authentic Balinese massage protocols combined with premium spa Bali standards and hotel-level hygiene',
    'Transparent pricing with travel included—no surprise fees for villa, resort, or homestay appointments',
    'Specialists for deep tissue massage Bali, sports recovery, prenatal care, and Balinese relaxation rituals',
    'Consistently 5-star rated by couples, families, and digital nomads who prefer private home massage Bali experiences'
  ],
  whyChooseTestimonial: {
    text: 'I searched “massage near me” in Ubud and Home Massage Ubud replied in two minutes. The deep tissue massage Bali session was hotel-quality and the therapist arrived with a full setup.',
    author: 'Alexandra P., Singapore',
    rating: 5
  },

  pricingLayout: 'comparison-table',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 260,000',
      priceIDR: 'Rp 260,000',
      description: 'Efficient massage Bali session with Balinese techniques tailored for quick recovery'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 390,000',
      priceIDR: 'Rp 390,000',
      description: 'Most-booked “spa near me” option combining Balinese massage flow with targeted deep tissue work',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 520,000',
      priceIDR: 'Rp 520,000',
      description: 'Full reset: Balinese massage warm-up, deep tissue massage Bali focus, and calming aromatherapy finish'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 780,000'
  },
  addOns: [
    { name: 'Herbal Compress Upgrade', price: 'Rp 120,000' },
    { name: 'Volcanic Hot Stones', price: 'Rp 110,000' },
    { name: 'Foot Reflexology Finisher', price: 'Rp 90,000' }
  ],

  servicesOverview: [
    {
      name: 'Home Massage Bali',
      description: 'Island-wide mobile therapists bringing massage near me convenience to villas and resorts.',
      linkText: 'Book home massage Bali',
      slug: 'home-massage'
    },
    {
      name: 'Balinese Massage',
      description: 'Signature Balinese massage flow with long strokes, acupressure, and aromatic spa Bali oils.',
      linkText: 'Experience Balinese massage',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Deep Tissue Massage Bali',
      description: 'Therapists trained to relieve knots from surfing, hiking, and long flights with focused pressure.',
      linkText: 'See deep tissue options',
      slug: 'deep-tissue-massage'
    },
    {
      name: 'Spa Massage',
      description: 'Spa near me luxury delivered to your villa with warm towels, curated music, and premium oils.',
      linkText: 'Upgrade to spa massage',
      slug: 'spa-massage'
    },
    {
      name: 'Couples Massage',
      description: 'Synchronized Balinese massage for honeymoons and anniversaries in Ubud, Seminyak, and Kuta.',
      linkText: 'Plan a couples ritual',
      slug: 'couples-massage'
    },
    {
      name: 'Full Body Massage',
      description: 'Head-to-toe relaxation for travelers searching for the best massage Bali experience.',
      linkText: 'View full body flow',
      slug: 'full-body-massage'
    }
  ],

  howItWorksFormat: 'icon-row',
  howItWorksSteps: [
    { title: 'Search Massage Bali', description: 'Tell us if you need massage Ubud, massage Seminyak, or massage Kuta coverage.' },
    { title: 'Message on WhatsApp', description: 'Send “spa near me” or “massage near me” with your address and time.' },
    { title: 'Therapist En Route', description: 'We dispatch the closest certified professional with a sanitized table and oils.' },
    { title: 'Relax & Pay After', description: 'Enjoy Balinese massage or deep tissue massage Bali, then settle securely post-session.' }
  ],

  reviews: [
    {
      text: 'Booked a same-day massage Bali session in Seminyak. The therapist arrived in 20 minutes and delivered a flawless Balinese massage with hotel-level service.',
      author: 'Rina & David',
      location: 'Seminyak Villa Guests',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'I searched “spa near me” from my Ubud coworking space. The mobile team set up in my villa and the deep tissue massage Bali focus fixed my desk tension.',
      author: 'Markus L.',
      location: 'Digital Nomad, Ubud',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'After surfing Kuta I needed sports recovery. Their massage near me response was instant and the therapist added reflexology to complete the session.',
      author: 'Tom B.',
      location: 'Kuta Beach',
      rating: 5,
      type: 'hotel-guest'
    }
  ],

  trustLayout: 'grid',
  trustPoints: [
    'Background-checked therapists covering all Bali tourism zones',
    'Medical-grade sanitation for tables, linens, and oils every visit',
    'Transparent pricing with no hidden travel surcharges',
    'English and Indonesian speaking support team on WhatsApp',
    'Preferred partner for luxury villas and boutique resorts',
    '5-star average rating across massage Bali, Ubud, Seminyak, and Kuta bookings'
  ],

  faqs: [
    {
      question: 'Where can I book massage Bali near me?',
      answer: 'We dispatch therapists to any villa, hotel, or apartment across Ubud, Seminyak, Kuta, Canggu, Sanur, Nusa Dua, Jimbaran, and Uluwatu. Send us your exact address on WhatsApp with “massage near me” and we confirm the closest available therapist.'
    },
    {
      question: 'Do you offer authentic Balinese massage and spa Bali rituals?',
      answer: 'Yes. Our Balinese massage flow preserves traditional long strokes and pressure points, enhanced with spa Bali touches like aromatic oils, warm towels, and calming music. You can add herbal compresses or hot stones for a richer ritual.'
    },
    {
      question: 'Can I request deep tissue massage Bali for sports recovery?',
      answer: 'Absolutely. We have specialists trained in deep tissue massage Bali techniques for surfers, cyclists, and hikers. Tell us your pain points and preferred pressure so we can assign the right therapist.'
    },
    {
      question: 'How fast is booking for “spa near me” or “massage near me”?',
      answer: 'We reply on WhatsApp within minutes from 8 AM to 10 PM. Same-day appointments are common in Ubud, Seminyak, and Kuta because our therapists are already positioned nearby.'
    },
    {
      question: 'Is pricing different for massage Ubud, massage Seminyak, or massage Kuta?',
      answer: 'Our listed prices include travel for central areas. If your location is far from the main zones, we will tell you upfront before confirming so there are no surprises.'
    },
    {
      question: 'Do you bring equipment for home massage Bali?',
      answer: 'Yes. Every therapist arrives with a sanitized massage table, premium oils, fresh linens, and optional add-ons like hot stones or herbal compresses.'
    }
  ],

  aboutAngle: 'largest-team',
  aboutContent: 'Home Massage Ubud operates Bali’s largest mobile therapist network, purpose-built for travelers searching “massage Bali,” “spa near me,” and “massage near me.” Over 100 certified professionals rotate between Ubud, Seminyak, Kuta, Canggu, and Sanur to ensure rapid arrivals, consistent quality, and true Balinese hospitality. After serving 10,000+ guests, we remain the go-to brand for private villa wellness with no compromise on standards.',

  relatedServices: [
    { name: 'Spa Massage', slug: 'spa-massage' },
    { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' },
    { name: 'Home Massage', slug: 'home-massage' },
    { name: 'Luxury Massage', slug: 'luxury-massage' }
  ],

  benefits: [
    'On-demand relaxation without leaving your villa or hotel',
    'Relief from jet lag, surf fatigue, and long-haul travel aches',
    'Authentic Balinese massage ritual blended with modern hygiene standards',
    'Localized teams for faster “massage near me” response times',
    'Customizable pressure from soothing spa Bali flow to intense deep tissue massage Bali work',
    'Private, quiet setup ideal for couples, families, and remote workers'
  ],

  idealFor: [
    'Travelers searching “massage Bali” the moment they land',
    'Couples wanting private spa near me experiences in villas',
    'Surf and yoga guests needing deep tissue massage Bali recovery',
    'Families and groups who prefer discreet home massage Bali service',
    'Digital nomads booking massage Ubud between work sessions',
    'Luxury villa concierges needing a reliable massage near me partner'
  ]
};

export default function MassageBaliPage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}

