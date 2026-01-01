import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Ungasan() {
  const area = {
    name: 'Ungasan',
    slug: 'ungasan',
    h1Title: 'Home Massage in Ungasan – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Ungasan, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Luxury home massage in Ungasan delivered to your cliffside villa or resort. Premium Bukit Peninsula location with ocean views. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience ultimate luxury wellness with professional massage therapy delivered to your spectacular cliffside accommodation in Ungasan',
    areaDescription: 'Mobile massage service in Ungasan - Bukit Peninsula\'s most exclusive clifftop destination',
    longDescription: 'Ungasan occupies some of Bali\'s most exclusive real estate on the southern Bukit Peninsula, featuring ultra-luxury resorts perched dramatically on limestone cliffs overlooking the Indian Ocean. This sophisticated area is home to world-renowned properties including Banyan Tree Ungasan, The Edge Bali, and numerous multi-million dollar private villas with infinity pools suspended above the sea. Ungasan offers breathtaking ocean panoramas, secluded beaches accessible via cliff staircases, proximity to Uluwatu Temple, and an atmosphere of refined exclusivity. The area attracts high-end travelers, honeymooners, celebrities seeking privacy, and those who appreciate Bali\'s most spectacular natural setting combined with world-class luxury. Our mobile massage service brings five-star spa treatments directly to your Ungasan villa or resort, matching the exceptional quality of your accommodation. Whether you\'re staying at an iconic luxury resort, a private cliffside villa with staff, or an ultra-exclusive rental property, our licensed therapists deliver exceptional treatments with complete professionalism and discretion. Perfect for honeymoon couples seeking romantic spa experiences, families in luxury villas wanting flexible wellness scheduling, or discerning travelers who expect nothing but the finest service in paradise.',
    uniqueFeatures: [
      'Ultra-luxury cliffside resorts and villas',
      'Spectacular Indian Ocean panoramic views',
      'Proximity to iconic Uluwatu Temple',
      'Secluded beaches accessible via cliff paths',
      'World-class infinity pools above the sea',
      'Exclusive atmosphere with celebrity appeal',
      'Some of Bali\'s most expensive properties',
      'Perfect for honeymoons and special occasions'
    ],
    nearbyAttractions: [
      'Uluwatu Temple (Pura Luhur Uluwatu)',
      'Karma Beach (private beach club)',
      'Green Bowl Beach (hidden beach)',
      'Melasti Beach',
      'Nyang Nyang Beach',
      'Rock Bar at AYANA (nearby)',
      'Single Fin Uluwatu (nearby)',
      'Kecak Fire Dance performances',
      'Garuda Wisnu Kencana Cultural Park',
      'Cliff-edge ocean viewpoints',
      'Luxury spa resorts',
      'Fine dining restaurants with views'
    ],
    popularVillas: [
      'Banyan Tree Ungasan',
      'The Edge Bali',
      'Private cliffside luxury villas',
      'Ultra-exclusive villa rentals',
      'Properties with ocean-view infinity pools',
      'Multi-bedroom family villas',
      'Honeymoon villas with private pools',
      'Villas with full-time staff',
      'Gated luxury developments',
      'All premium lodging in Ungasan',
      'Celebrity-level properties',
      'Ultra-modern architectural villas'
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
        priceFrom: 'Rp 360,000',
        duration: '60-120 min'
      },
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
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 304,000',
        duration: '60-120 min'
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
        priceFrom: 'Rp 360,000',
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
        question: 'Do you serve ultra-luxury resorts and high-end villas in Ungasan?',
        answer: 'Absolutely! Ungasan is one of our premium service areas. We regularly serve guests at exclusive properties including Banyan Tree, The Edge, and private multi-million dollar villas. Our therapists are exceptionally professional, discreet, and experienced working in ultra-luxury settings. We understand the standards expected at Ungasan\'s exclusive properties and match them in our service quality, presentation, and discretion. Many luxury villa managers already know and recommend our service.'
      },
      {
        question: 'Can your therapists access gated luxury developments and cliff villas?',
        answer: 'Yes! We\'re very familiar with Ungasan\'s security protocols and exclusive developments. Our therapists carry professional identification and coordinate smoothly with security teams and villa staff. We typically check in with security, then proceed to your villa. For properties with heightened privacy requirements, we can coordinate timing and access with your villa manager in advance. We handle all coordination with complete professionalism and discretion befitting Ungasan\'s exclusive character.'
      },
      {
        question: 'Why choose mobile massage when luxury resorts have world-class spas?',
        answer: 'Many guests at Ungasan\'s luxury properties prefer our service for specific reasons: complete privacy in your own villa, avoiding the need to travel even within large resort grounds, ability to enjoy treatment while family relaxes nearby, more flexible scheduling (7am-10pm), access to techniques our specialists excel in, and often better value pricing while maintaining exceptional quality. We complement resort facilities by providing in-villa convenience with professional standards.'
      },
      {
        question: 'Can couples book romantic massage on our cliff villa terrace?',
        answer: 'Absolutely! This is one of Ungasan\'s most spectacular experiences. If you have a private terrace, pavilion, or poolside area with ocean and cliff views, we can set up there (weather permitting). Imagine synchronized couples massage while gazing at the Indian Ocean from your cliffside villa - it\'s unforgettable. The Couples Wellness Ritual (90-150 min) is perfect for this. Book 48-72 hours ahead for couples treatments at premium properties to ensure availability of our best therapists.'
      },
      {
        question: 'Do you coordinate with villa staff and property managers?',
        answer: 'Definitely! Most Ungasan luxury villas have full-time staff including managers, butlers, and security teams. We regularly coordinate with villa personnel for seamless service delivery. We can work with your team on timing, preferred setup location (master bedroom, spa room, poolside pavilion, cliff-edge bale), and any special requests. Many Ungasan property managers proactively arrange wellness services for guests and have our contact information. We integrate smoothly with your villa\'s service standards.'
      },
      {
        question: 'What time is best for massage around Ungasan sunset experiences?',
        answer: 'Ungasan\'s clifftop sunsets are legendary. Many guests book late afternoon massage (4-5pm) to relax before sunset viewing (6-6:30pm). Alternatively, sunset massage (5-6:30pm start) with ocean views is magical. Post-sunset evening massage (7-9pm) is also popular after returning from Uluwatu Temple or dinner. Weekend and sunset time slots book quickly at luxury properties, so reserve 2-3 days ahead. For honeymoons and special occasions, plan your massage timing when booking accommodation.'
      },
      {
        question: 'Can we book massage for our honeymoon at an Ungasan villa?',
        answer: 'Absolutely! Ungasan is Bali\'s premier honeymoon destination, and romantic couples massage is one of our most requested services there. We can coordinate with your villa team to create special romantic setups - flower petals, aromatherapy ambiance, sunset timing, ocean-view locations. Many honeymooners book couples massage for their first evening or as part of sunset rituals. Mention it\'s your honeymoon when booking for special attention. The Couples Wellness Ritual in Ungasan\'s romantic setting is unforgettable.'
      },
      {
        question: 'What payment methods work for Ungasan luxury properties?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. While Ungasan itself is residential and exclusive, most luxury villas have cash available or villa managers can arrange currency exchange. Nearby Uluwatu and Jimbaran areas have ATMs (10-15 min drive). For extended luxury villa stays or corporate bookings, we can discuss alternative payment arrangements including invoicing. Contact us via WhatsApp to explore options suitable for high-end, long-term bookings.'
      },
      {
        question: 'Can families in Ungasan villas book multiple simultaneous treatments?',
        answer: 'Yes! Ungasan\'s spacious multi-bedroom luxury villas are perfect for family wellness. We can arrange multiple therapists for simultaneous treatments in different villa areas - parents in master bedroom, teenagers (16+) in another space, extended family by the pool. This creates shared wellness time while maintaining privacy. For large families or groups, we can send 3-4 therapists. Book 3-4 days ahead for multiple therapists at luxury properties, especially during peak season and holidays.'
      },
      {
        question: 'How far in advance should I book for Ungasan luxury properties?',
        answer: 'For Ungasan\'s exclusive properties, we recommend 2-3 days advance booking for single treatments, and 3-5 days for couples or multiple simultaneous massages. This ensures availability of our most experienced therapists suitable for luxury settings. For honeymoons, anniversaries, or special occasions where timing is critical (sunset massages, specific dates), book as far ahead as possible. Last-minute bookings are sometimes possible - contact us to check - but advance planning ensures your preferred timing at these exclusive locations.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
