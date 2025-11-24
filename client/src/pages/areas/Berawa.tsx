import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Berawa() {
  const area = {
    name: 'Berawa',
    slug: 'berawa',
    h1Title: 'Home Massage in Berawa – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Berawa, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Luxury home massage in Berawa delivered to your villa or hotel. Canggu\'s upscale neighborhood with beach clubs and fine dining. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience sophisticated wellness with professional massage therapy delivered to your accommodation in Berawa\'s exclusive enclave',
    areaDescription: 'Mobile massage service in Berawa - Canggu\'s most refined neighborhood with luxury living',
    longDescription: 'Berawa represents Canggu\'s most sophisticated face, featuring luxury villa developments, upscale beach clubs, and refined dining options. Located between the hustle of central Canggu and the tranquility of Pererenan, Berawa strikes a perfect balance for discerning travelers. This neighborhood attracts successful professionals, couples seeking elegance, and families wanting premium accommodations near the beach. Berawa Beach offers black sand surfing opportunities with a more exclusive feel than busier Batu Bolong. The Lawn and other high-end beach clubs define the area\'s sophisticated atmosphere, while modern villas with private pools dot the landscape between rice fields and coast. Our mobile massage service caters specifically to Berawa\'s luxury accommodation market, bringing five-star spa treatments directly to your premium villa or boutique hotel. Whether you\'re staying in a modern multi-bedroom family villa, an infinity-pool property overlooking rice fields, or a boutique hotel near The Lawn, our licensed therapists deliver exceptional treatments matching your accommodation\'s quality. Perfect for those who appreciate high-end wellness without the resort spa price tags, families wanting flexible in-villa service, or couples seeking romance and rejuvenation in Berawa\'s refined setting.',
    uniqueFeatures: [
      'Canggu\'s most upscale residential area',
      'Luxury private villas with modern amenities',
      'High-end beach clubs including The Lawn',
      'Berawa Beach with exclusive surf atmosphere',
      'Sophisticated restaurants and brunch spots',
      'Close to central Canggu yet peaceful',
      'Rice field views combined with luxury living',
      'Premium accommodation standards throughout'
    ],
    nearbyAttractions: [
      'Berawa Beach',
      'The Lawn Beach Club',
      'Finns Beach Club',
      'Finns Recreation Club',
      'Boutique shopping areas',
      'High-end restaurants and cafes',
      'Yoga and wellness studios',
      'Rice field walking paths',
      'Central Canggu (5 min scooter)',
      'Echo Beach area (10 min)',
      'Seminyak (15 min)',
      'Tanah Lot Temple (15 min)'
    ],
    popularVillas: [
      'Luxury private pool villas',
      'Modern family villas',
      'Boutique hotels near The Lawn',
      'Villas with rice field views',
      'High-end villa developments',
      'Properties near Berawa Beach',
      'Infinity pool villas',
      'Contemporary design villas',
      'Multi-bedroom family properties',
      'All premium lodging in Berawa',
      'Exclusive gated communities',
      'Ultra-modern accommodations'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
      },
      {
        name: 'Deep Tissue Massage',
        slug: 'deep-tissue-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-120 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 400,000',
        duration: '60-120 min'
      },
      {
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 304,000',
        duration: '60-120 min'
      },
      {
        name: 'Couples Wellness Ritual',
        slug: 'couples-wellness-ritual',
        priceFrom: 'Rp 680,000',
        duration: '90-150 min'
      },
      {
        name: 'Lymphatic Drainage Massage',
        slug: 'lymphatic-drainage-massage',
        priceFrom: 'Rp 384,000',
        duration: '60-90 min'
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
      },
      {
        name: 'Pregnancy Massage',
        slug: 'pregnancy-massage',
        priceFrom: 'Rp 336,000',
        duration: '60-75 min'
      }
    ],
    faqs: [
      {
        question: 'Do you serve luxury villas and high-end properties in Berawa?',
        answer: 'Absolutely! Berawa is one of our key service areas, and we regularly serve premium villas and boutique hotels there. Our therapists are professional, discreet, and experienced working in luxury accommodation settings. We understand the standards expected in high-end properties and match them in our service quality. Many luxury villa managers in Berawa already know and recommend our service to their guests.'
      },
      {
        question: 'Can your therapists access gated villa communities in Berawa?',
        answer: 'Yes! We\'re familiar with Berawa\'s various villa developments and their security protocols. Our therapists carry professional identification and coordinate smoothly with security personnel. Just provide your villa name and inform security you\'re expecting a massage service. Most gated communities in Berawa are accustomed to outside wellness providers and have standard check-in procedures. We handle all coordination professionally.'
      },
      {
        question: 'Why choose mobile massage when luxury villas often have spa recommendations?',
        answer: 'Many guests prefer our service for several reasons: we bring treatment directly to your villa (no travel needed), our pricing is more transparent and accessible than resort spas, we offer flexible 7am-10pm scheduling, you can enjoy treatment while family relaxes nearby, and our therapists specialize in techniques you may specifically want. We complement villa amenities by providing the actual massage service with all equipment included.'
      },
      {
        question: 'Can I book massage after beach club sessions at The Lawn or Finns?',
        answer: 'Absolutely! This is very popular in Berawa. Many guests spend afternoons at The Lawn or Finns Beach Club, then book evening massage (6-8pm) at their villa to recover and relax. It\'s the perfect way to transition from daytime socializing to peaceful evening. These late afternoon and early evening slots fill quickly, so we recommend booking 24-48 hours ahead, especially on weekends when beach clubs are busiest.'
      },
      {
        question: 'Do you offer couples massage for romantic Berawa getaways?',
        answer: 'Definitely! Couples massage is extremely popular in Berawa\'s romantic villa settings. We send two therapists with two tables for synchronized treatment. Many Berawa villas have beautiful outdoor spaces, covered pavilions, or pool-side areas where we can set up for a magical couples experience. The Couples Wellness Ritual (90-150 min) is our most romantic package. Book 48 hours ahead for couples treatments to ensure therapist availability.'
      },
      {
        question: 'What\'s the best time to schedule massage around Berawa\'s social scene?',
        answer: 'Berawa has a sophisticated daily rhythm. Morning massage (8-10am) after yoga or exercise is popular. Mid-afternoon (2-4pm) works well before beach club sessions. Early evening (5-7pm) is perfect between beach time and dinner. Late evening (8-10pm) suits those wanting deep relaxation after a full social day. Weekend evenings book fastest. We recommend scheduling around your plans - mention your Berawa itinerary when booking for timing advice.'
      },
      {
        question: 'Can families book multiple massages simultaneously in Berawa villas?',
        answer: 'Yes! Berawa attracts many families in multi-bedroom villas, and we can arrange multiple therapists for simultaneous treatments. Parents, teenagers (16+), and adult family members can all receive massage at the same time in different villa areas or together in spacious rooms. This is ideal for family wellness time. Book 2-3 days ahead for multiple therapists, especially during school holidays when Berawa\'s family villas are full.'
      },
      {
        question: 'What payment methods work in Berawa\'s villa areas?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. While Berawa itself is primarily residential, ATMs are easily accessible in central Canggu (5-minute scooter ride) and along the main roads. Many luxury villa managers can arrange currency exchange or direct you to ATMs. Some villas keep cash for guests. We recommend arranging cash before your appointment. For extended stays, alternative payment arrangements can be discussed via WhatsApp.'
      },
      {
        question: 'Do you coordinate with villa management and staff?',
        answer: 'Yes! Most Berawa luxury villas have full-time staff or villa managers. We\'re experienced coordinating with villa teams to ensure smooth service delivery. We can work with your villa manager on scheduling, access, and setup location (indoor, poolside pavilion, garden area). Many villa managers in Berawa proactively arrange massage services for guests and already have our contact information. Just mention us to your villa staff.'
      },
      {
        question: 'How far in advance should I book during Berawa peak times?',
        answer: 'Berawa is popular year-round, especially July-August and December-January when luxury villas book solid. During these periods, reserve massage 2-3 days ahead for single treatments and 3-4 days for couples or group bookings. Weekend evenings fill fastest. If you\'re staying multiple days, consider booking all desired massage sessions shortly after arrival. For same-day bookings, contact us early morning for best availability, though we often accommodate last-minute requests during weekday afternoons.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
