import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';
import SanurMassageGuide from '@/components/SanurMassageGuide';

export default function Sanur() {
  const area = {
    name: 'Sanur',
    slug: 'sanur',
    h1Title: 'Home Massage in Sanur – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Sanur, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Relaxing home massage in Sanur delivered to your beachfront hotel or villa. Perfect for families and couples. Professional mobile spa service. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience peaceful wellness with professional massage therapy delivered to your accommodation in Sanur\'s tranquil beachside village',
    areaDescription: 'Mobile massage service in Sanur - Bali\'s original beach resort with laid-back charm',
    longDescription: 'Sanur is Bali\'s original beach resort town, offering a more relaxed and traditional atmosphere compared to the bustling scenes of Kuta or Seminyak. This east-coast destination features a beautiful 5-kilometer beach promenade perfect for morning walks and cycling, calm waters protected by offshore reefs ideal for families with children, and stunning sunrise views over the ocean. Sanur attracts mature travelers, families, and those seeking authentic Balinese village life alongside modern resort amenities. The area offers a mix of long-established beachfront hotels, boutique resorts, family villas, and charming guesthouses. Tree-lined streets, local warungs serving traditional food, art galleries, and a slower pace of life define Sanur\'s character. Our mobile massage service brings professional spa treatments directly to your Sanur accommodation, whether you\'re staying at a beachfront resort, a family villa near the beach promenade, or a boutique hotel in the village center. The convenience of in-room massage perfectly suits Sanur\'s relaxed vibe - enjoy therapeutic wellness without leaving your peaceful retreat. Perfect for sunrise yoga followed by massage, family spa days where parents relax while children play nearby, or couples seeking gentle wellness in a traditional Balinese setting.',
    uniqueFeatures: [
      'Calm, family-friendly beach protected by reef',
      '5km beach promenade for walking and cycling',
      'Spectacular sunrise views over the ocean',
      'Traditional Balinese village atmosphere',
      'Mix of established hotels and boutique properties',
      'Quieter, more mature traveler demographic',
      'Gateway to Nusa Lembongan and Nusa Penida islands',
      'Easy access to Denpasar city attractions'
    ],
    nearbyAttractions: [
      'Sanur Beach and Promenade',
      'Le Mayeur Museum (art)',
      'Sindhu Beach',
      'Mertasari Beach',
      'Bali Orchid Garden',
      'Pura Blanjong Temple (ancient stone pillar)',
      'Sanur Night Market',
      'Beach Market (handicrafts)',
      'Fast boat departure to Nusa Islands',
      'Serangan Island (Turtle Island)',
      'Traditional kite flying fields',
      'Local art galleries'
    ],
    popularVillas: [
      'Maya Sanur Resort',
      'Hyatt Regency Bali',
      'Prama Sanur Beach Bali',
      'Mercure Resort Sanur',
      'Segara Village Hotel',
      'The Patra Bali Resort',
      'Tandjung Sari (boutique classic)',
      'Family villas near promenade',
      'Beachfront hotels along main road',
      'Boutique guesthouses in village',
      'All lodging in Sanur area',
      'Budget to luxury properties'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
      },
      {
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 304,000',
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
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
      },
      {
        name: 'Foot Reflexology',
        slug: 'foot-reflexology',
        priceFrom: 'Rp 240,000',
        duration: '45-60 min'
      },
      {
        name: 'Pregnancy Massage',
        slug: 'pregnancy-massage',
        priceFrom: 'Rp 336,000',
        duration: '60-75 min'
      },
      {
        name: 'Couples Wellness Ritual',
        slug: 'couples-wellness-ritual',
        priceFrom: 'Rp 680,000',
        duration: '90-150 min'
      }
    ],
    faqs: [
      {
        question: 'Is Sanur a good area for family massage services?',
        answer: 'Absolutely! Sanur is one of Bali\'s most family-friendly areas, and we cater specifically to family wellness needs. Parents can receive massage in their villa or hotel room while children are supervised nearby, playing in the pool, or resting. We offer flexible scheduling to work around family activities. Many families book late afternoon massage for parents while children watch movies or play, creating relaxing evenings for everyone.'
      },
      {
        question: 'Can you find accommodations along the Sanur beach promenade?',
        answer: 'Yes! We know Sanur intimately and regularly serve properties all along the 5-kilometer beach promenade from Mertasari Beach in the south to Sindhu Beach in the north. Whether you\'re staying at a beachfront hotel, a villa on the main Danau Tamblingan road, or a guesthouse in the village streets behind, we find you easily. Our therapists have been serving Sanur for years.'
      },
      {
        question: 'What time is best for massage in Sanur?',
        answer: 'Sanur\'s rhythm differs from western Bali. Many guests walk or cycle the beach promenade at sunrise (6-7am), then enjoy breakfast. Mid-morning massage (9-11am) is popular after these activities. Afternoon sessions (2-4pm) work well after beach time. Evening massage (7-9pm) helps you wind down in Sanur\'s peaceful atmosphere. We\'re flexible with scheduling from 7am-10pm to suit your Sanur routine. Morning slots are often easier to book same-day than evenings.'
      },
      {
        question: 'Do you serve the older, established hotels in Sanur?',
        answer: 'Definitely! Sanur has some of Bali\'s most charming established properties like Tandjung Sari, Prama Sanur, and Segara Village. We\'re very familiar with these hotels and regularly serve their guests. The staff at many long-established Sanur properties already know our service and facilitate smooth coordination. Whether you\'re at a classic hotel or a newly renovated resort, we provide the same professional service.'
      },
      {
        question: 'Can I book massage after returning from day trips to Nusa Islands?',
        answer: 'Yes! Many Sanur guests take fast boats to Nusa Lembongan or Nusa Penida for day trips (boats depart from Sanur Beach). Booking evening massage for when you return is very popular - it helps recover from boat travel, sun exposure, and active island exploration. Let us know your estimated return time (typically 4-5pm), and we\'ll schedule accordingly. Late afternoon and evening slots fill up, so book 1-2 days ahead.'
      },
      {
        question: 'Is there a travel fee for northern or southern Sanur locations?',
        answer: 'No! All of Sanur from Mertasari in the south to the northern areas near Bali Orchid Garden is one service area with standard pricing. There are no distance surcharges or travel fees regardless of where you\'re staying in Sanur. The price you see for your chosen treatment is complete - including therapist travel, equipment, oils, towels, and setup.'
      },
      {
        question: 'What payment methods work in Sanur?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. Sanur has numerous ATMs along the main beach road (Jalan Danau Tamblingan), near Sindhu Night Market, and at hotels. Money changers are also available throughout the area. Most accommodations can direct you to the nearest ATM. We recommend arranging cash before your appointment. We provide receipts upon request.'
      },
      {
        question: 'Can older travelers or those with mobility issues receive your massage service?',
        answer: 'Absolutely! Sanur attracts many mature travelers, and our therapists are experienced working with older clients and those with specific health considerations. When booking, mention any mobility issues, health conditions, or preferences. Our therapists will adjust techniques, pressure, and positioning accordingly. In-room massage is especially convenient for those who find traveling to spas challenging. We can set up in whatever location in your accommodation is most comfortable for you.'
      },
      {
        question: 'Do you offer prenatal massage for expecting mothers in Sanur?',
        answer: 'Yes! Prenatal massage is available for pregnant guests (after 12 weeks). This treatment uses safe positioning, appropriate pressure, and techniques specifically designed for pregnancy. Many expectant mothers staying in Sanur for babymoons or family trips book this service. Our therapists are trained in prenatal massage and will ask about your pregnancy stage and any specific concerns when they arrive. The treatment focuses on reducing pregnancy discomfort while ensuring complete safety.'
      },
      {
        question: 'Can we book regular weekly massage during a long-term Sanur stay?',
        answer: 'Definitely! Sanur attracts many long-term visitors, and we have numerous regular clients who book weekly or bi-weekly sessions. We can schedule recurring appointments at your preferred day and time. Regular clients receive priority booking and can often request their preferred therapist. This is perfect for those spending weeks or months in Sanur who want to maintain wellness routines. Contact us via WhatsApp to arrange a regular schedule with potential repeat-client benefits.'
      }
    ]
  };

  return <AreaPageTemplate area={area} additionalContent={<SanurMassageGuide />} />;
}
