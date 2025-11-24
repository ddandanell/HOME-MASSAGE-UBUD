import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function UbudLuxuryVillas() {
  const area = {
    name: 'Ubud Luxury Villas Area',
    slug: 'ubud-luxury-villas',
    h1Title: 'Luxury Villa Massage in Ubud – Premium In-Villa Spa',
    metaTitle: 'Luxury Villa Massage Ubud | Premium Spa Service',
    metaDescription: 'Luxury villa massage Ubud for premium resorts & high-end villas. Exclusive spa service with professional therapists. From 300k IDR. Book 7am-10pm.',
    heroSubtitle: 'Premium massage therapy for luxury villas and high-end resorts throughout Ubud, delivered with excellence and discretion',
    areaDescription: 'Premium mobile massage service for luxury villas in Ubud - exclusive spa experiences',
    longDescription: 'Ubud is home to some of Bali\'s most exclusive luxury villas and resorts, offering unparalleled privacy, stunning views, and world-class amenities. From infinity pools overlooking rice terraces to jungle sanctuaries with private spas, these properties attract discerning travelers seeking the ultimate in comfort and wellness. Our premium massage service is specifically designed for luxury villa guests, bringing professional spa therapists with 5-star hotel experience directly to your private villa. We understand the high standards expected in luxury accommodations and deliver accordingly.',
    uniqueFeatures: [
      'Service tailored for luxury villa guests',
      'Therapists with 5-star hotel and resort experience',
      'Discreet, professional service for privacy',
      'Premium oils and equipment',
      'Flexible scheduling including couples and groups',
      'Understanding of luxury villa protocols and standards'
    ],
    nearbyAttractions: [
      'Private infinity pools with rice views',
      'Exclusive villa compounds',
      'High-end restaurants and cafes',
      'Private yoga and meditation spaces',
      'Luxury spa facilities',
      'Secluded natural settings',
      'Premium wellness centers'
    ],
    popularVillas: [
      'Private infinity pool villas',
      'Multi-bedroom luxury compounds',
      'Jungle luxury resorts',
      'Rice terrace view villas',
      'Exclusive boutique resorts',
      'High-end wellness retreats',
      'Celebrity and VIP villas',
      'All luxury properties in Ubud'
    ],
    treatments: [
      {
        name: 'Couples Wellness Ritual',
        slug: 'couples-wellness-ritual',
        priceFrom: 'Rp 680,000',
        duration: '90-150 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 400,000',
        duration: '60-120 min'
      },
      {
        name: 'Herbal & Bamboo Massage',
        slug: 'herbal-bamboo-massage',
        priceFrom: 'Rp 400,000',
        duration: '90-120 min'
      },
      {
        name: 'Detox & Wellness Massage',
        slug: 'detox-wellness-massage',
        priceFrom: 'Rp 440,000',
        duration: '90-120 min'
      },
      {
        name: 'Deep Tissue Massage',
        slug: 'deep-tissue-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-120 min'
      },
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 240,000',
        duration: '60-120 min'
      }
    ],
    faqs: [
      {
        question: 'Do your therapists have luxury hotel experience?',
        answer: 'Yes! Our therapists are carefully selected and many have worked at 5-star hotels and luxury resorts in Ubud and Bali. They understand the high service standards expected in luxury villas and deliver professional, discreet service that meets those expectations.'
      },
      {
        question: 'Can you coordinate with villa staff and concierge?',
        answer: 'Absolutely! We work seamlessly with villa managers, butlers, and concierge teams. We can coordinate timing, setup location, and any special requests through your villa staff. Many luxury villas in Ubud already know and recommend our services.'
      },
      {
        question: 'Do you offer services for villa parties and groups?',
        answer: 'Yes! We coordinate spa services for villa gatherings, wellness retreats, and group celebrations. We can provide multiple therapists for simultaneous treatments, creating spa experiences for your entire group. Contact us to discuss your luxury villa event needs.'
      },
      {
        question: 'Can you set up massage at poolside or garden pavilions?',
        answer: 'Absolutely! Luxury villas often have stunning outdoor spaces - infinity pool edges, garden pavilions, rice field terraces. We bring premium portable equipment and can create spa setups wherever you prefer. The natural setting enhances the luxury experience.'
      },
      {
        question: 'What makes your service suitable for luxury villas?',
        answer: 'We provide premium oils, luxury linens, professional equipment, experienced therapists, punctual service, discretion, and flexibility. We understand luxury villa standards and deliver accordingly. Our service matches the quality expected in high-end Ubud properties.'
      },
      {
        question: 'Do you serve all luxury villa areas in Ubud?',
        answer: 'Yes! We serve luxury villas throughout all Ubud areas - Sayan Valley, Tegallalang, Penestanan, Campuhan, and all surrounding locations. No matter how remote or exclusive your villa, we can reach you. Distance is never an issue for premium service.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
