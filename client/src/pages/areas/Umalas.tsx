import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Umalas() {
  const area = {
    name: 'Umalas',
    slug: 'umalas',
    h1Title: 'Home Massage in Umalas – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Umalas, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Tranquil home massage in Umalas delivered to your residential villa. Quiet area between Seminyak and Canggu with rice fields. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience peaceful wellness with professional massage therapy delivered to your accommodation in Umalas\' tranquil residential setting',
    areaDescription: 'Mobile massage service in Umalas - quiet residential area blending rice fields with modern living',
    longDescription: 'Umalas occupies a peaceful residential position between Seminyak and Canggu, offering a quieter alternative to these busy beach towns while remaining easily accessible to both. This area features a mix of rice paddies, traditional Balinese neighborhoods, and modern villa developments, creating a unique blend of rural tranquility and contemporary comfort. Umalas attracts long-term visitors, families seeking spacious villas away from crowds, digital nomads wanting productive environments, and those who appreciate being central to everything while living in peaceful surroundings. The area offers easy scooter access to Seminyak\'s sophistication (10 minutes) and Canggu\'s surf scene (10 minutes) without the noise and congestion. Our mobile massage service brings professional spa treatments directly to your Umalas villa or accommodation, perfectly suited to the area\'s residential wellness-oriented character. Whether you\'re in a modern family villa with rice field views, a long-term rental property, or a boutique guesthouse, our licensed therapists navigate the quiet lanes to deliver exceptional treatments. Ideal for those seeking privacy and peace, families wanting spacious living, or travelers appreciating authentic Balinese village life alongside modern amenities.',
    uniqueFeatures: [
      'Quiet residential area between Seminyak and Canggu',
      'Mix of rice paddies and modern developments',
      'Easy 10-minute access to both beach areas',
      'Spacious family villas and long-term rentals',
      'Authentic Balinese village atmosphere',
      'Less traffic and tourist congestion',
      'Growing expatriate and digital nomad community',
      'Peaceful setting with full convenience'
    ],
    nearbyAttractions: [
      'Rice field walking paths',
      'Local Balinese temples',
      'Traditional village markets',
      'Seminyak (10 min)',
      'Canggu beaches (10 min)',
      'Echo Beach area (15 min)',
      'Batu Belig Beach',
      'Neighborhood cafes and warungs',
      'Yoga studios',
      'Family-friendly spaces',
      'Easy access to everywhere',
      'Quiet village life'
    ],
    popularVillas: [
      'Modern family villas',
      'Long-term rental properties',
      'Villas with rice field views',
      'Spacious multi-bedroom homes',
      'Boutique guesthouses',
      'Digital nomad-friendly villas',
      'Properties in residential compounds',
      'Traditional Balinese homestays',
      'All lodging in Umalas',
      'Budget to luxury villas',
      'Quiet neighborhood properties',
      'Family-sized accommodations'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 320,000',
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
        priceFrom: 'Rp 350,000',
        duration: '60-120 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 420,000',
        duration: '60-120 min'
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 390,000',
        duration: '60-120 min'
      },
      {
        name: 'Yoga Stretch & Massage',
        slug: 'yoga-stretch-massage',
        priceFrom: 'Rp 380,000',
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
        question: 'Can your therapists find villas in Umalas residential areas?',
        answer: 'Absolutely! Umalas has many villas down quiet lanes and in residential developments. We know the area very well and serve it daily. When booking, provide your villa name or address, and we\'ll navigate there easily. If you\'re in a compound or gated area, just inform us. We\'re familiar with most Umalas villa developments and residential streets. We\'ve been serving Umalas for years.'
      },
      {
        question: 'Do you serve long-term rental villas and digital nomad properties?',
        answer: 'Yes! Umalas has many long-term residents and digital nomads, and we have regular clients who book weekly or bi-weekly sessions. We can arrange recurring appointments at your preferred schedule. Long-term clients receive priority booking and can often request their preferred therapist. This is perfect for those living in Umalas who want ongoing wellness support. Contact us via WhatsApp to set up a regular schedule.'
      },
      {
        question: 'Is Umalas too residential or remote for your service?',
        answer: 'Not at all! Umalas is absolutely within our core service area. We serve this neighborhood daily and consider it part of the greater Seminyak-Canggu region. All standard pricing applies with no distance fees. Many guests choose Umalas specifically for its peaceful character while staying close to everything. You receive the same professional service as Seminyak or Canggu guests.'
      },
      {
        question: 'Can families in Umalas villas book multiple massages?',
        answer: 'Definitely! Umalas attracts many families in spacious multi-bedroom villas. We can send multiple therapists for simultaneous treatments so parents, teenagers (16+), and extended family can all receive massage at the same time in different villa areas. The spacious nature of most Umalas properties allows for multiple setups. Book 2-3 days ahead for multiple therapists, especially during school holidays.'
      },
      {
        question: 'What time works best for massage in Umalas\' residential setting?',
        answer: 'Umalas\' peaceful character means flexible timing works well. Morning massage (8-10am) after breakfast is popular with long-term residents. Midday sessions (12-2pm) suit those taking breaks from work at home. Late afternoon (4-6pm) is perfect before heading to nearby Seminyak or Canggu for evening plans. Evening massage (7-9pm) helps you unwind in Umalas\' quiet nights. We\'re flexible from 7am-10pm.'
      },
      {
        question: 'Can I have massage on my villa terrace with rice field views?',
        answer: 'Yes! Many Umalas villas have terraces or outdoor bales overlooking rice paddies. If you have a covered outdoor area with views, we can set up there (weather permitting). Imagine receiving professional massage while gazing at green rice fields with tropical sounds - it\'s a lovely Umalas experience. Just ensure there\'s shade and mention your preference when booking. We\'ll assess conditions when we arrive.'
      },
      {
        question: 'Do you coordinate with villa staff and property managers?',
        answer: 'Yes! Many Umalas villas have caretakers or property managers, especially for long-term rentals. We regularly coordinate with villa teams for smooth service delivery. We can work with your staff on scheduling, gate access, and preferred setup locations. Many Umalas property managers know our service and facilitate bookings for tenants. We integrate smoothly with your villa\'s operations.'
      },
      {
        question: 'What payment methods work in residential Umalas?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. While Umalas itself is residential without ATMs, nearby Seminyak and Canggu (10 min scooter) have ATMs everywhere. Many villa staff can direct you to the nearest ATM. For long-term residents booking regular sessions, we can discuss alternative payment arrangements. Contact us via WhatsApp to explore options for recurring bookings.'
      },
      {
        question: 'Can couples book romantic massage in Umalas villas?',
        answer: 'Absolutely! Umalas\' private villa settings are perfect for romantic couples treatments. We send two therapists with two tables for synchronized massage. Many Umalas villas have beautiful garden pavilions, poolside areas, or spacious bedrooms ideal for couples massage. The privacy and tranquility of Umalas enhances the romantic experience. Book 48 hours ahead for couples treatments to ensure therapist availability.'
      },
      {
        question: 'How far in advance should I book in Umalas?',
        answer: 'For single treatments in Umalas, 24 hours notice is usually sufficient. For couples massage, weekend appointments, or evening slots (7-10pm), we recommend 48 hours advance booking. If you\'re planning regular weekly sessions as a long-term resident, book your recurring schedule in advance for guaranteed availability. Same-day bookings are often possible for weekday mornings and afternoons - contact us to check.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
