import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Seminyak() {
  const area = {
    name: 'Seminyak',
    slug: 'seminyak',
    h1Title: 'Home Massage in Seminyak – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Seminyak, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Premium home massage in Seminyak delivered to your villa or hotel. Professional mobile spa service with licensed therapists. Book via WhatsApp for same-day service. 7am-10pm daily.',
    heroSubtitle: 'Experience luxury wellness with professional massage therapy delivered directly to your villa, hotel, or resort in Seminyak',
    areaDescription: 'Premium mobile massage service in Seminyak - Bali\'s most stylish beach destination',
    longDescription: 'Seminyak is Bali\'s premier beachside destination, renowned for its sophisticated atmosphere, world-class dining, designer boutiques, and upscale resorts. Located on the southwest coast, this trendy area attracts discerning travelers seeking luxury and style. From the golden beaches of Double Six to the chic cafes along Jalan Kayu Aya (Eat Street), Seminyak embodies modern Balinese elegance. Our professional mobile massage service brings five-star spa treatments directly to your Seminyak accommodation, allowing you to enjoy therapeutic wellness without leaving your villa or hotel. Whether you\'re staying in a beachfront villa, a boutique hotel in the heart of Seminyak, or a luxury resort near Petitenget, our licensed therapists arrive with everything needed for an exceptional spa experience. Perfect for post-beach relaxation, pre-dinner pampering, or recovering from late nights at Seminyak\'s famous beach clubs.',
    uniqueFeatures: [
      'Beachside luxury setting with world-class resorts',
      'Central location near designer boutiques and restaurants',
      'Walking distance to famous beach clubs like Potato Head',
      'Sophisticated atmosphere perfect for couples and wellness seekers',
      'Easy access to Seminyak Beach and Double Six Beach',
      'Mix of ultra-luxury villas and boutique accommodations',
      'Vibrant dining scene along Eat Street (Jalan Kayu Aya)',
      'Perfect base for experiencing Bali\'s upscale lifestyle'
    ],
    nearbyAttractions: [
      'Seminyak Beach',
      'Double Six Beach (Pantai Double Six)',
      'Potato Head Beach Club',
      'Ku De Ta',
      'La Plancha Beach Bar',
      'Seminyak Square Shopping',
      'Eat Street (Jalan Kayu Aya)',
      'Petitenget Temple',
      'Seminyak Village',
      'Mrs Sippy Bali',
      'Finns Beach Club',
      'Batu Belig Beach'
    ],
    popularVillas: [
      'Beachfront villas in Seminyak',
      'Luxury resorts near Potato Head',
      'Boutique hotels on Jalan Kayu Aya',
      'Private pool villas in Petitenget',
      'Hotels near Double Six Beach',
      'Villas along Jalan Oberoi',
      'Accommodations near Eat Street',
      'Beach clubs with villa services',
      'Seminyak Square area hotels',
      'Batu Belig luxury villas',
      'All lodging in Seminyak area',
      'Budget to ultra-luxury accommodations'
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
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 304,000',
        duration: '60-120 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 360,000',
        duration: '60-120 min'
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 360,000',
        duration: '60-120 min'
      },
      {
        name: 'Lymphatic Drainage Massage',
        slug: 'lymphatic-drainage-massage',
        priceFrom: 'Rp 480,000',
        duration: '60-90 min'
      },
      {
        name: 'Couples Wellness Ritual',
        slug: 'couples-wellness-ritual',
        priceFrom: 'Rp 680,000',
        duration: '90-150 min'
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
        question: 'How quickly can you reach my villa in Seminyak?',
        answer: 'We typically reach Seminyak accommodations within 15-20 minutes from booking confirmation. Seminyak is a core service area for us, and we know the streets well. For best availability, especially during peak season or evening slots, we recommend booking 24-48 hours in advance. Same-day bookings are often possible during morning and early afternoon hours.'
      },
      {
        question: 'Do you serve all areas of Seminyak including Petitenget and Batu Belig?',
        answer: 'Yes! We serve the entire Seminyak area including Petitenget, Batu Belig, Oberoi, and everywhere in between. Whether you\'re staying near the beach, along Eat Street, or in the quieter northern neighborhoods, our therapists will find you easily. All areas are included in our standard pricing with no additional travel fees.'
      },
      {
        question: 'Can I book a massage after spending the day at beach clubs?',
        answer: 'Absolutely! This is one of our most popular booking times. Many guests enjoy beach clubs like Potato Head, Ku De Ta, or Mrs Sippy during the day, then book evening massage sessions (6pm-9pm) at their villa. It\'s the perfect way to recover from sun exposure and relax before dinner in Seminyak\'s renowned restaurants.'
      },
      {
        question: 'What payment methods do you accept in Seminyak?',
        answer: 'We accept cash payment in Indonesian Rupiah (IDR) at the time of service. Many hotels and villas in Seminyak have ATMs nearby, or you can exchange currency at money changers along the main streets. We provide a receipt upon request. For corporate bookings or regular clients, we can arrange alternative payment methods - please inquire via WhatsApp.'
      },
      {
        question: 'Do you work with luxury villas and hotels in Seminyak?',
        answer: 'Yes! We regularly serve guests at Seminyak\'s top luxury properties. Our therapists are professional, discreet, and experienced working in high-end villa and hotel environments. We coordinate with villa managers and hotel concierge services to ensure smooth access and setup. Many luxury properties in Seminyak already know and recommend our service to their guests.'
      },
      {
        question: 'Can couples book simultaneous massages in our Seminyak villa?',
        answer: 'Yes! Couples massage is very popular in Seminyak. We send two therapists to your villa, each bringing their own massage table and equipment. This is perfect for romantic stays, honeymoons, or simply enjoying spa time together. The Couples Wellness Ritual includes 90-150 minutes of synchronized treatment. Book at least 24-48 hours ahead for couples sessions to ensure therapist availability.'
      },
      {
        question: 'Is there a travel fee for Seminyak bookings?',
        answer: 'No! All our prices include therapist travel to anywhere in Seminyak. There are no hidden fees or surcharges. The price you see for your chosen treatment is the complete price - including therapist travel, all equipment, oils, towels, and setup. This applies to all Seminyak neighborhoods from the beach to Batu Belig.'
      },
      {
        question: 'What should I prepare before the therapist arrives at my Seminyak accommodation?',
        answer: 'Very little! We bring everything needed: massage table, premium oils, fresh towels, and equipment. You just need a space of about 2x3 meters (bedroom, terrace, or garden area works well) and access to a bathroom nearby. Some guests like to set ambiance with their own music, but we can also create a peaceful environment. If you have specific oil preferences or any health conditions, mention these when booking via WhatsApp.'
      },
      {
        question: 'Can I book same-day massage service in Seminyak?',
        answer: 'Yes, same-day bookings are often available, especially for morning and early afternoon appointments. However, Seminyak is extremely popular and our therapists book up quickly, particularly during high season (July-August, December-January) and on weekends. For guaranteed availability at your preferred time, we strongly recommend booking 1-2 days in advance. Evening slots (7pm-10pm) fill up fastest.'
      },
      {
        question: 'Are your therapists experienced with international guests in Seminyak?',
        answer: 'Absolutely! Our therapists regularly serve international guests at Seminyak\'s hotels, villas, and resorts. They are professionally trained, licensed, speak English well, and understand the expectations of international travelers. They\'re experienced with different pressure preferences, various massage styles, and maintaining professional service standards expected in Seminyak\'s luxury accommodation sector.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
