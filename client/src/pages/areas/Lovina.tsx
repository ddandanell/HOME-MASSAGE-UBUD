import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Lovina() {
  const area = {
    name: 'Lovina',
    slug: 'lovina',
    h1Title: 'Home Massage in Lovina – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Lovina, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Relaxing home massage in Lovina delivered to your beachfront hotel or villa. North Bali\'s peaceful dolphin beach with calm waters. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience tranquil wellness with professional massage therapy delivered to your accommodation in Lovina\'s peaceful north Bali setting',
    areaDescription: 'Mobile massage service in Lovina - North Bali\'s serene dolphin beach with authentic charm',
    longDescription: 'Lovina is North Bali\'s main beach resort area, famous for calm black sand beaches, dolphin watching tours at sunrise, and a laid-back atmosphere far removed from southern Bali\'s crowds. This charming coastal stretch encompasses several villages along a 5-kilometer beachfront, offering peaceful surroundings, traditional Balinese culture, and stunning mountain backdrops including views of distant volcanoes. Lovina\'s calm waters make it perfect for swimming, snorkeling on nearby reefs, and relaxing beach days. The area attracts travelers seeking authentic Balinese experiences, families wanting safe swimming conditions, couples seeking romance away from tourist masses, and those exploring North Bali\'s waterfalls, temples, and natural attractions. Our mobile massage service brings professional spa treatments directly to your Lovina hotel, villa, or guesthouse, complementing the area\'s naturally relaxing atmosphere. Whether you\'re staying at a beachfront resort, a family guesthouse, or a hillside villa with ocean views, our licensed therapists navigate North Bali\'s roads to deliver exceptional treatments. Perfect for post-dolphin watching relaxation, recovering from waterfall hikes, or simply unwinding in Lovina\'s authentic, peaceful environment where Balinese life moves at its natural, unhurried pace.',
    uniqueFeatures: [
      'Famous for sunrise dolphin watching tours',
      'Calm black sand beaches safe for swimming',
      'Peaceful North Bali setting away from crowds',
      'Authentic Balinese village atmosphere',
      'Mountain and volcano views from beach',
      'Gateway to North Bali attractions',
      'Traditional fishing village culture',
      'Affordable accommodation and dining options'
    ],
    nearbyAttractions: [
      'Dolphin watching tours (sunrise)',
      'Lovina Beach (5km stretch)',
      'Banjar Hot Springs',
      'Brahma Vihara Arama Buddhist Temple',
      'Git Git Waterfall',
      'Sekumpul Waterfall (famous)',
      'Aling-Aling Waterfall',
      'Pura Beji Temple Sangsit',
      'Lovina Harbor and boats',
      'Snorkeling at coral reefs',
      'Traditional markets',
      'Local seafood restaurants'
    ],
    popularVillas: [
      'Beachfront hotels along Lovina',
      'Budget guesthouses near harbor',
      'Family-run accommodations',
      'Mid-range resorts with pools',
      'Villas with ocean views',
      'Traditional Balinese homestays',
      'Properties near dolphin tour departures',
      'Hotels in Kalibukbuk village',
      'Hillside villas overlooking bay',
      'All lodging in Lovina area',
      'Eco-friendly guesthouses',
      'Budget to mid-range properties'
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
        name: 'Post-Hike Recovery Massage',
        slug: 'post-hike-recovery-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-90 min'
      },
      {
        name: 'Foot Reflexology',
        slug: 'foot-reflexology',
        priceFrom: 'Rp 240,000',
        duration: '45-60 min'
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
        question: 'Can you reach accommodations along the entire Lovina beachfront?',
        answer: 'Absolutely! Lovina stretches about 5 kilometers along the coast, and we serve the entire area including Kalibukbuk (the main center), Anturan, Tukad Mungga, and all villages in between. Whether you\'re at a beachfront hotel, guesthouse near the dolphin harbor, or villa inland, we know the area well. Just provide your accommodation name or location, and we\'ll find you easily. Lovina is our core North Bali service area.'
      },
      {
        question: 'What time is best for massage after dolphin watching tours?',
        answer: 'Perfect question! Dolphin tours depart around 6am and return by 8-9am. Many guests book massage for 10am-12pm after returning, having breakfast, and showering. This timing is ideal - the treatment helps you relax and perhaps even nap after the early wake-up call. Mid-morning massage after dolphin watching is one of our most popular Lovina bookings. Reserve the night before for guaranteed availability at this timing.'
      },
      {
        question: 'Do you serve Lovina even though it\'s in North Bali?',
        answer: 'Yes! While our main base is in central Bali, Lovina is absolutely within our service area. We have therapists who live in or near Lovina specifically to serve North Bali guests. All our standard pricing applies to Lovina with no distance surcharges or travel fees. We recognize Lovina\'s importance as North Bali\'s main tourist hub and maintain regular service there. You receive the same professional quality as southern Bali locations.'
      },
      {
        question: 'Can I book massage after visiting North Bali waterfalls?',
        answer: 'Absolutely! Many Lovina guests spend days visiting nearby waterfalls like Git Git, Sekumpul, or Aling-Aling. Booking evening massage (5-8pm) after returning from these adventures is very popular. Waterfall hikes involve stairs, wet conditions, and physical exertion - massage helps tired legs, shoulders, and backs recover beautifully. Let us know you\'ve been hiking for optimal treatment planning. Post-hike recovery massage targets the exact muscle groups you\'ve used.'
      },
      {
        question: 'Is Lovina massage service family-friendly?',
        answer: 'Definitely! Lovina attracts many families due to its calm swimming conditions and safe environment. We cater to family wellness needs. Parents can receive massage while children play nearby, rest, or enjoy the pool. Teenagers (16+) can also receive appropriate treatments. Many families book late afternoon massage for parents while children watch movies or relax after beach days. Lovina\'s peaceful setting is perfect for family wellness time.'
      },
      {
        question: 'What payment methods work in Lovina?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. Lovina has ATMs in the main Kalibukbuk area near restaurants and shops. Several money changers also operate along the main road. Most hotels and guesthouses can direct you to the nearest ATM. We recommend arranging cash during the day before your evening massage appointment. We provide receipts upon request for your records.'
      },
      {
        question: 'Can couples book romantic massage in Lovina\'s peaceful setting?',
        answer: 'Yes! Lovina\'s tranquil atmosphere is perfect for romantic couples treatments. We send two therapists with two tables for synchronized massage. Many Lovina properties have beautiful garden areas, verandas, or beachfront locations where we can set up for a magical experience. The Couples Wellness Ritual is especially romantic with Lovina\'s peaceful ambiance and nature sounds. Book 48 hours ahead for couples treatments to ensure therapist availability.'
      },
      {
        question: 'Do you work with budget guesthouses and family-run properties?',
        answer: 'Absolutely! Lovina has many charming family-run guesthouses and budget properties, and we happily serve guests staying at all accommodation types. Professional massage service isn\'t just for luxury resorts - our pricing is accessible and transparent for all travelers. Many guesthouse owners in Lovina already know our service and recommend us to guests. We treat every booking with the same professional standards regardless of accommodation type.'
      },
      {
        question: 'Can I book massage at my hillside villa overlooking Lovina?',
        answer: 'Yes! Some accommodations sit on hillsides above Lovina with spectacular views over the bay. We serve these locations and actually enjoy the scenic drives. Whether you\'re beachfront or hillside, it\'s all standard Lovina service area with no additional fees. Just provide clear directions or villa name. If you have panoramic views from your terrace, we can set up there (weather permitting) for an unforgettable massage experience with Lovina bay as your backdrop.'
      },
      {
        question: 'How far in advance should I book massage in Lovina?',
        answer: 'Lovina is generally less busy than southern Bali, so booking flexibility is better. For most times, 24 hours notice is sufficient. However, for morning slots after dolphin watching (9am-12pm) which are very popular, or for weekend couples massage, we recommend 1-2 days advance booking. Same-day bookings are often available, especially for afternoon and evening sessions. During Indonesian holiday periods, book a bit further ahead.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
