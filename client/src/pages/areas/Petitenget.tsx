import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Petitenget() {
  const area = {
    name: 'Petitenget',
    slug: 'petitenget',
    h1Title: 'Home Massage in Petitenget – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Petitenget, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Luxury home massage in Petitenget delivered to your villa. Northern Seminyak with upscale dining and Petitenget Beach. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience sophisticated wellness with professional massage therapy delivered to your accommodation in Petitenget\'s exclusive northern Seminyak location',
    areaDescription: 'Mobile massage service in Petitenget - Seminyak\'s upscale northern neighborhood with beach and dining',
    longDescription: 'Petitenget represents the northern, more exclusive extension of Seminyak, featuring upscale villa developments, sophisticated restaurants, boutique hotels, and direct access to Petitenget Beach. This refined area offers a slightly quieter alternative to central Seminyak while maintaining the same high-end character and beach lifestyle. Petitenget is home to some of Bali\'s finest dining establishments, luxury beach clubs, and the sacred Petitenget Temple that gives the area its name. The neighborhood attracts discerning travelers, couples seeking romance, and those who appreciate Seminyak\'s sophistication without the central crowds. Our mobile massage service brings five-star spa treatments directly to your Petitenget villa or boutique hotel, matching the area\'s refined character. Whether you\'re in a luxury beachfront villa, a modern property near fine dining, or a boutique hotel, our licensed therapists deliver exceptional treatments with complete professionalism. Perfect for post-beach club relaxation, pre-dinner pampering at your villa, or romantic couples wellness in Petitenget\'s elegant setting.',
    uniqueFeatures: [
      'Northern Seminyak upscale character',
      'Direct access to Petitenget Beach',
      'High-end dining and beach clubs',
      'Sacred Petitenget Temple',
      'Luxury villa developments',
      'Slightly quieter than central Seminyak',
      'Walking distance to Seminyak center',
      'Sophisticated lifestyle atmosphere'
    ],
    nearbyAttractions: [
      'Petitenget Beach',
      'Petitenget Temple',
      'Potato Head Beach Club (nearby)',
      'Mrs Sippy Bali',
      'High-end restaurants',
      'Seminyak Square (nearby)',
      'Batu Belig Beach',
      'Boutique shopping',
      'Luxury spas',
      'Beach clubs',
      'Fine dining establishments',
      'Central Seminyak (walking distance)'
    ],
    popularVillas: [
      'Luxury beachfront villas',
      'Modern pool villas',
      'Boutique hotels',
      'Properties near Petitenget Temple',
      'Villas along beach access roads',
      'High-end villa developments',
      'Family luxury villas',
      'All premium lodging in Petitenget',
      'Designer villas',
      'Exclusive gated communities',
      'Contemporary architecture properties',
      'Upscale accommodations'
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
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 390,000',
        duration: '60-120 min'
      },
      {
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 350,000',
        duration: '60-120 min'
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
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 390,000',
        duration: '60-120 min'
      },
      {
        name: 'Pregnancy Massage',
        slug: 'pregnancy-massage',
        priceFrom: 'Rp 390,000',
        duration: '60-75 min'
      }
    ],
    faqs: [
      {
        question: 'Do you serve luxury villas and upscale properties in Petitenget?',
        answer: 'Absolutely! Petitenget is a key upscale service area for us. We regularly serve premium villas and boutique hotels there. Our therapists are professional, discreet, and experienced working in high-end accommodation settings. We understand the standards expected in Petitenget\'s luxury properties and match them in service quality. Many villa managers in Petitenget already know and recommend our service to their guests.'
      },
      {
        question: 'Can you reach properties near Petitenget Beach and Temple?',
        answer: 'Yes! We know Petitenget intimately, including beachfront properties, villas near Petitenget Temple, and accommodations along all access roads. Whether you\'re directly on the beach, a few streets inland, or near the temple area, we navigate there easily. All Petitenget locations have standard pricing with no distance surcharges. Just provide your villa name or address when booking.'
      },
      {
        question: 'What time is best for massage around Petitenget beach clubs and dining?',
        answer: 'Petitenget has a sophisticated daily rhythm. Late afternoon massage (4-5pm) before sunset cocktails is popular. Early evening sessions (5-7pm) work well before dinner at fine restaurants. Post-beach club massage (around 7-8pm) helps you relax after daytime socializing. Weekend and evening slots book quickly in Petitenget, so reserve 24-48 hours ahead for best availability at your preferred time.'
      },
      {
        question: 'Can couples book romantic massage in Petitenget villas?',
        answer: 'Definitely! Petitenget\'s elegant villa settings are perfect for romantic couples treatments. We send two therapists with two tables for synchronized massage. Many Petitenget villas have beautiful outdoor pavilions, poolside areas, or spacious suites ideal for couples wellness. The Couples Wellness Ritual is especially popular in this sophisticated setting. Book 48 hours ahead for couples treatments to ensure therapist availability, especially weekends.'
      },
      {
        question: 'Do you coordinate with villa staff and boutique hotel teams?',
        answer: 'Yes! Most Petitenget luxury villas have full-time staff, and boutique hotels have attentive teams. We regularly coordinate with property personnel for seamless service delivery. We can work with your staff on timing, preferred setup location (master bedroom, poolside pavilion, garden), and any special requests. Many Petitenget property managers proactively arrange wellness services for guests.'
      },
      {
        question: 'Is there parking for your therapists in busy Petitenget?',
        answer: 'Yes, our therapists arrive by scooter, making parking straightforward even in popular Petitenget areas. Most villas and hotels have designated scooter parking. You don\'t need to arrange anything - we handle all logistics. Our therapists know shortcuts to avoid peak traffic times and can navigate Petitenget efficiently regardless of congestion levels.'
      },
      {
        question: 'Why choose mobile massage when staying in upscale Petitenget?',
        answer: 'Many guests prefer our service for convenience of in-villa treatment without travel, transparent pricing compared to resort spa rates, flexible 7am-10pm scheduling, ability to enjoy treatment with family nearby, and access to techniques our specialists excel in. We complement villa amenities by providing professional massage service that matches your accommodation\'s quality standards.'
      },
      {
        question: 'What payment methods work in Petitenget?',
        answer: 'We accept cash payment in Indonesian Rupiah at service time. Petitenget and nearby Seminyak have numerous ATMs along main roads. Many luxury villas have cash available or villa staff can direct you to ATMs. For extended stays at luxury properties or regular bookings, we can discuss alternative payment arrangements. Contact us via WhatsApp to explore options suitable for your situation.'
      },
      {
        question: 'Can families book multiple simultaneous massages?',
        answer: 'Yes! Petitenget\'s spacious luxury villas are perfect for family wellness. We can arrange multiple therapists for simultaneous treatments - parents in one area, teenagers (16+) in another, or all together in a large villa space. This creates shared wellness time while maintaining privacy options. Book 2-3 days ahead for multiple therapists, especially during peak seasons and weekends.'
      },
      {
        question: 'How far in advance should I book in Petitenget?',
        answer: 'For Petitenget\'s popular upscale properties, we recommend 24-48 hours advance booking for single treatments, and 48-72 hours for couples or multiple massages. Weekend evenings and sunset time slots fill fastest. For special occasions where timing is critical, book as far ahead as possible. Last-minute bookings are sometimes available - contact us to check - but advance planning ensures your preferred timing.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
