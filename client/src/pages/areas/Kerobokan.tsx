import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Kerobokan() {
  const area = {
    name: 'Kerobokan',
    slug: 'kerobokan',
    h1Title: 'Home Massage in Kerobokan – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Kerobokan, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Premium home massage in Kerobokan delivered to your luxury villa. Between Seminyak and Canggu, residential elegance. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience sophisticated wellness with professional massage therapy delivered to your accommodation in Kerobokan\'s exclusive residential area',
    areaDescription: 'Mobile massage service in Kerobokan - Bali\'s upscale residential enclave between beach destinations',
    longDescription: 'Kerobokan occupies a strategic position between bustling Seminyak to the south and trendy Canggu to the north, offering an upscale residential alternative to these tourist hotspots. This sophisticated area features luxury private villas, high-end restaurants, exclusive spas, and a more local, authentic feel despite its prime location. Kerobokan attracts long-term visitors, expatriates, and discerning travelers who appreciate being close to beaches and attractions while staying in a quieter, more residential setting. The area includes Petitenget Beach access, traditional Balinese neighborhoods alongside modern developments, and easy reach of both Seminyak\'s nightlife and Canggu\'s surf scene. Our mobile massage service brings professional spa treatments directly to your Kerobokan villa or accommodation, perfectly suited to the area\'s sophisticated residential character. Whether you\'re in a luxury private pool villa, a long-term rental property, or a boutique hotel, our licensed therapists deliver exceptional treatments with all equipment provided. Ideal for those seeking privacy and exclusivity, families wanting space and tranquility, or travelers who appreciate Kerobokan\'s authentic Balinese atmosphere combined with modern luxury living.',
    uniqueFeatures: [
      'Prime location between Seminyak and Canggu',
      'Upscale residential character with privacy',
      'Luxury private villa developments',
      'Mix of expatriate community and tourism',
      'Access to Petitenget Beach',
      'High-end dining and spa options',
      'Traditional Balinese neighborhoods nearby',
      'Quieter than beach resort areas'
    ],
    nearbyAttractions: [
      'Petitenget Beach (walking distance)',
      'Petitenget Temple',
      'Seminyak attractions (5-10 min)',
      'Canggu beach areas (10-15 min)',
      'Batu Belig Beach',
      'High-end restaurants',
      'Luxury spas and salons',
      'Boutique shopping',
      'Traditional markets',
      'Local temples',
      'Easy access to both Seminyak and Canggu',
      'Rice field walks in adjacent areas'
    ],
    popularVillas: [
      'Luxury private pool villas',
      'Long-term rental properties',
      'Boutique hotels',
      'Family villas with gardens',
      'Modern villa developments',
      'Properties near Petitenget',
      'Villas in residential compounds',
      'High-end accommodations',
      'All lodging in Kerobokan area',
      'Expatriate-style homes',
      'Premium villa rentals',
      'Gated community properties'
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
        name: 'Lymphatic Drainage Massage',
        slug: 'lymphatic-drainage-massage',
        priceFrom: 'Rp 450,000',
        duration: '60-90 min'
      },
      {
        name: 'Pregnancy Massage',
        slug: 'pregnancy-massage',
        priceFrom: 'Rp 390,000',
        duration: '60-75 min'
      },
      {
        name: 'Couples Wellness Ritual',
        slug: 'couples-wellness-ritual',
        priceFrom: 'Rp 620,000',
        duration: '90-150 min'
      }
    ],
    faqs: [
      {
        question: 'Can your therapists find villas in Kerobokan residential areas?',
        answer: 'Absolutely! Kerobokan has many private villas down small lanes (gangs), and our therapists know the area very well. We serve Kerobokan daily and are familiar with most villa developments and residential streets. When booking, provide your villa name or address, and we\'ll navigate there easily. If you\'re in a gated community, just inform us and we\'ll coordinate with security. We\'ve been serving Kerobokan\'s residential areas for years.'
      },
      {
        question: 'Why choose mobile massage in Kerobokan when there are local spas?',
        answer: 'While Kerobokan has excellent local spas, many guests prefer our mobile service for privacy and convenience. In your private villa, you enjoy treatment without traveling, with complete privacy, and can relax immediately afterward in your own space. This is especially valued by long-term residents, families, and those who appreciate not having to navigate traffic to spas. We bring the same professional quality directly to your accommodation.'
      },
      {
        question: 'Do you serve long-term rental villas and expatriate residents?',
        answer: 'Yes! Kerobokan has many long-term residents, and we have regular clients who book weekly or bi-weekly massage sessions. We can arrange recurring appointments at your preferred schedule. Long-term clients receive priority booking and can often request their preferred therapist. This is perfect for those living in Kerobokan who want ongoing wellness support. Contact us via WhatsApp to establish a regular massage routine with potential repeat-client benefits.'
      },
      {
        question: 'Is there parking for your therapists in Kerobokan villa areas?',
        answer: 'Yes! Our therapists arrive by scooter, making parking straightforward even in residential areas with narrow lanes. Most villas have dedicated scooter parking or space in compound areas. You don\'t need to arrange anything - we handle all logistics. We\'re experienced navigating Kerobokan\'s mix of main roads and residential gangs. Weather conditions and narrow streets don\'t pose problems for our experienced therapists.'
      },
      {
        question: 'Can couples book romantic massage at private Kerobokan villas?',
        answer: 'Definitely! Couples massage in private Kerobokan villas is very popular and romantic. We send two therapists with two tables for synchronized treatment. Many Kerobokan villas have beautiful garden pavilions, poolside areas, or spacious bedrooms perfect for couples massage. The privacy of a villa setting enhances the romantic experience. Book 48 hours ahead for couples treatments to ensure therapist availability, especially for weekend appointments.'
      },
      {
        question: 'What time is best for massage around Kerobokan\'s location?',
        answer: 'Kerobokan\'s residential character means flexible timing works well. Morning massage (8-10am) after breakfast is popular with long-term residents. Midday sessions (12-2pm) suit those taking breaks from work or activities. Late afternoon (4-6pm) is perfect before heading to nearby Seminyak or Canggu for evening plans. Evening massage (7-9pm) helps you unwind in your villa\'s peaceful setting. We\'re flexible from 7am-10pm to suit your schedule.'
      },
      {
        question: 'Do you coordinate with villa staff and property managers?',
        answer: 'Yes! Many Kerobokan villas have full-time staff, caretakers, or property managers. We regularly coordinate with villa teams for smooth service delivery. We can work with your staff on scheduling, gate access, and preferred setup locations. Many villa managers in Kerobokan know our service and facilitate bookings for guests. If you\'re renting through a villa management company, they may already have our contact information.'
      },
      {
        question: 'What payment methods work in Kerobokan\'s residential areas?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. While Kerobokan itself is residential, ATMs are easily accessible on main roads toward Seminyak or Canggu (5-10 minute scooter ride). Many villa staff can direct you to the nearest ATM or arrange currency exchange. For long-term residents and regular bookings, we can discuss alternative payment arrangements. Contact us via WhatsApp to explore options for recurring sessions.'
      },
      {
        question: 'Can families in Kerobokan villas book multiple simultaneous massages?',
        answer: 'Yes! Kerobokan attracts many families in spacious multi-room villas. We can send multiple therapists for simultaneous treatments so parents, teenagers (16+), and extended family can all receive massage at the same time. This is ideal for family wellness time in your private villa. The spacious nature of most Kerobokan properties allows for multiple setup areas. Book 2-3 days ahead for multiple therapists, especially during school holidays.'
      },
      {
        question: 'How far in advance should I book massage in Kerobokan?',
        answer: 'For single treatments, 24 hours notice is usually sufficient in Kerobokan. However, for couples massage, weekend appointments, or evening time slots (7-10pm), we recommend 48 hours advance booking. If you\'re planning regular weekly sessions as a long-term resident, book your recurring schedule in advance for guaranteed availability at your preferred day and time. Same-day bookings are often possible for weekday mornings and early afternoons - contact us to check availability.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
