import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Legian() {
  const area = {
    name: 'Legian',
    slug: 'legian',
    h1Title: 'Home Massage in Legian – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Legian, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Professional home massage in Legian delivered to your beachfront hotel or villa. Between Kuta and Seminyak, perfect location. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience beachside wellness with professional massage therapy delivered to your Legian accommodation - the perfect balance of energy and relaxation',
    areaDescription: 'Mobile massage service in Legian - the sweet spot between Kuta\'s energy and Seminyak\'s sophistication',
    longDescription: 'Legian strikes the perfect balance between Kuta\'s lively beach scene and Seminyak\'s upscale sophistication. This central beach destination stretches along golden sand coastline, offering excellent surf breaks, beach bars, international restaurants, and a more mature vibe than neighboring Kuta while remaining more accessible than Seminyak. Legian Beach and Double Six Beach provide beautiful sunset watching, swimming, and surfing opportunities. The area features a good mix of accommodations from budget-friendly hotels to mid-range resorts and boutique properties. Jalan Legian (the main road) is lined with shops, restaurants, massage parlors, and nightlife venues, while the beach road offers a more relaxed atmosphere. Our mobile massage service brings professional spa treatments directly to your Legian hotel, resort, or villa, perfect for recovering from beach activities, relaxing after shopping and exploration, or simply enjoying wellness without navigating busy streets. Whether you\'re staying near Double Six Beach, along the main Legian road, or in the Padma area, our licensed therapists deliver exceptional massage experiences with all equipment provided. Ideal for couples seeking beachside romance, friends on holiday together, or solo travelers wanting convenient spa services.',
    uniqueFeatures: [
      'Prime location between Kuta and Seminyak',
      'Beautiful Legian Beach and Double Six Beach',
      'Excellent surf breaks for all skill levels',
      'Mix of budget, mid-range, and boutique hotels',
      'Vibrant nightlife along Jalan Legian',
      'Walking distance to both Kuta and Seminyak',
      'Beach bars and sunset viewing locations',
      'More mature atmosphere than Kuta'
    ],
    nearbyAttractions: [
      'Legian Beach',
      'Double Six Beach',
      'La Plancha Beach Bar',
      'Sky Garden nightclub',
      'Padma Beach',
      'Legian Art Market',
      'Beach walk to Seminyak',
      'Multiple surf schools',
      'Beachwalk Shopping Center (nearby)',
      'Kuta Beach (walking distance)',
      'Sunset viewing spots',
      'International restaurants'
    ],
    popularVillas: [
      'Padma Resort Legian',
      'The Stones Hotel Legian',
      'Jayakarta Bali',
      'All Seasons Legian',
      'The Anvaya Beach Resort',
      'Hotels along Jalan Legian',
      'Beachfront properties',
      'Budget hotels near beach',
      'Boutique accommodations',
      'Family-friendly resorts',
      'All lodging in Legian area',
      'Mid-range hotel options'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 380,000',
        duration: '60-120 min'
      },
      {
        name: 'Deep Tissue Massage',
        slug: 'deep-tissue-massage',
        priceFrom: 'Rp 380,000',
        duration: '60-120 min'
      },
      {
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-120 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 390,000',
        duration: '60-120 min'
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 390,000',
        duration: '60-120 min'
      },
      {
        name: 'Post-Surf Recovery Massage',
        slug: 'post-hike-recovery-massage',
        priceFrom: 'Rp 380,000',
        duration: '60-90 min'
      },
      {
        name: 'Couples Wellness Ritual',
        slug: 'couples-wellness-ritual',
        priceFrom: 'Rp 620,000',
        duration: '90-150 min'
      },
      {
        name: 'Lymphatic Drainage Massage',
        slug: 'lymphatic-drainage-massage',
        priceFrom: 'Rp 450,000',
        duration: '60-90 min'
      }
    ],
    faqs: [
      {
        question: 'Can you reach hotels along Jalan Legian main road?',
        answer: 'Absolutely! We serve the entire Legian area including properties along the busy Jalan Legian main road, beachfront hotels, and accommodations on the smaller side streets. Our therapists know Legian very well and navigate the area daily. Whether you\'re at a large resort like Padma or a smaller hotel, we find you easily within 15-20 minutes of booking confirmation.'
      },
      {
        question: 'Is Legian massage service good for groups of friends traveling together?',
        answer: 'Yes! Legian attracts many friend groups and we regularly provide multiple simultaneous massages. If your group is staying in the same hotel or villa, we can send several therapists at once so everyone receives treatment together. This is popular for friend trips, bachelorette parties, or groups celebrating together. Book 2-3 days ahead for group bookings to ensure we can arrange multiple therapists at your preferred time.'
      },
      {
        question: 'What\'s the best time to book massage after beach and surf activities?',
        answer: 'Most Legian guests surf or swim in the morning, then spend midday on the beach. We recommend booking massage for late afternoon (4-6pm) after beach activities. This helps recover from sun exposure, swimming, and surfing while leaving your evening free for dinner and nightlife. These afternoon slots are popular, so booking 24 hours ahead is recommended, especially on weekends and during peak season.'
      },
      {
        question: 'Can I book massage before going out to Legian nightlife?',
        answer: 'Absolutely! Many guests book early evening massage (5-7pm) to relax and refresh before heading to Legian\'s bars and clubs. The massage helps you feel rejuvenated and ready for a night out. This is especially popular on Friday and Saturday evenings. For this timing, we recommend booking at least 1-2 days in advance as these evening pre-nightlife slots fill quickly.'
      },
      {
        question: 'Do you serve both beachfront hotels and properties on the main road?',
        answer: 'Yes! We serve all of Legian from beachfront properties along the sand to hotels on Jalan Legian main road and everything in between. All locations within Legian have standard pricing with no distance surcharges. Whether you\'re right on the beach or a few blocks inland, our pricing remains the same. The price you see is the complete price including travel, equipment, and setup.'
      },
      {
        question: 'Is there parking available for your therapists in busy Legian?',
        answer: 'Yes, our therapists travel by scooter which makes parking manageable even in busy Legian traffic. Most hotels and properties have designated scooter parking areas. You don\'t need to worry about arranging parking - we handle all logistics and our therapists are experienced navigating Legian\'s bustling streets. We know all the shortcuts to avoid peak traffic times.'
      },
      {
        question: 'Can couples book romantic massage at beachside hotels?',
        answer: 'Definitely! Couples massage is very popular in Legian, especially at beachfront properties. We send two therapists with two tables for synchronized treatment. If you have a balcony or terrace overlooking the beach, we can set up there (weather permitting) for a truly romantic experience with ocean sounds. Book 48 hours ahead for couples treatments, especially for weekend sessions. Many couples time this with Legian\'s beautiful sunsets.'
      },
      {
        question: 'What payment methods do you accept in Legian?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. Legian has ATMs everywhere along Jalan Legian main road, near hotels, and at shopping areas. Money changers are also abundant throughout the area. We recommend having cash ready before your appointment. Most hotels can direct you to the nearest ATM. We provide receipts upon request for your records.'
      },
      {
        question: 'Can I book post-surf massage specifically for tired surf muscles?',
        answer: 'Yes! Post-surf recovery massage is popular in Legian with its excellent surf breaks. We understand surfers\' needs - targeting shoulders, back, arms, and legs with deep tissue and sports massage techniques. Many surfers book late morning or early afternoon sessions after dawn surf. The treatment helps with muscle recovery, reduces soreness, and improves flexibility for your next surf session. Let us know you surfed when booking for optimal technique selection.'
      },
      {
        question: 'How far in advance should I book during Legian high season?',
        answer: 'Legian is busy year-round but especially packed July-August and December-January. During these peak times, book 2-3 days ahead for single treatments and 3-4 days for couples or group bookings. Evening appointments fill fastest. Weekend slots also book quickly. For same-day bookings during high season, contact us early morning (before 10am) for best availability. Off-season, 24 hours notice is usually sufficient for most time slots.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
