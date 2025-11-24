import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Uluwatu() {
  const area = {
    name: 'Uluwatu',
    slug: 'uluwatu',
    h1Title: 'Home Massage in Uluwatu – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Uluwatu, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Luxury home massage in Uluwatu delivered to your cliffside villa or resort. Professional mobile spa with ocean-view treatments. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience ultimate luxury wellness with professional massage therapy delivered to your spectacular cliffside accommodation in Uluwatu',
    areaDescription: 'Premium mobile massage service in Uluwatu - Bali\'s most dramatic cliffside destination',
    longDescription: 'Uluwatu occupies some of Bali\'s most spectacular coastal territory, perched on dramatic limestone cliffs overlooking the Indian Ocean. This area on the southern Bukit Peninsula is famous for world-class surf breaks, the iconic Uluwatu Temple, stunning beaches accessible by cliff stairways, and luxury cliffside resorts with infinity pools suspended above the sea. From Padang Padang Beach made famous by "Eat Pray Love" to the rugged beauty of Suluban Beach, Uluwatu attracts surfers, honeymoon couples, and those seeking dramatic natural beauty combined with sophisticated luxury. Our mobile massage service brings five-star spa treatments directly to your Uluwatu villa or resort, allowing you to enjoy therapeutic wellness while surrounded by ocean views and cliff scenery. Whether you\'re staying at a luxury resort like Alila Villas Uluwatu, a private cliffside villa, or accommodation near the beaches, our licensed therapists navigate the winding cliff roads to deliver exceptional massage experiences. Perfect for post-surf recovery, romantic couples treatments with ocean sounds as your soundtrack, or simply indulging in wellness while enjoying one of Bali\'s most beautiful locations.',
    uniqueFeatures: [
      'Dramatic limestone cliffs overlooking the Indian Ocean',
      'World-famous surf breaks including Uluwatu and Padang Padang',
      'Luxury cliffside resorts with infinity pools',
      'Iconic Uluwatu Temple with Kecak fire dance',
      'Hidden beaches accessible by cliff stairways',
      'Stunning sunset viewing locations',
      'High-end dining venues like Single Fin and Ulu Cliffhouse',
      'Perfect for romantic getaways and honeymoons'
    ],
    nearbyAttractions: [
      'Uluwatu Temple (Pura Luhur Uluwatu)',
      'Padang Padang Beach',
      'Uluwatu Beach (Suluban)',
      'Blue Point Beach',
      'Dreamland Beach',
      'Bingin Beach',
      'Single Fin Beach Club',
      'Ulu Cliffhouse',
      'Rock Bar at AYANA',
      'Melasti Beach',
      'Nyang Nyang Beach',
      'Kecak Fire Dance performances'
    ],
    popularVillas: [
      'Luxury cliffside villas with ocean views',
      'Resorts like Alila Villas Uluwatu',
      'Private villas near Padang Padang',
      'Accommodations near Single Fin',
      'Hotels in Pecatu area',
      'Villas with infinity pools',
      'Boutique cliffside hotels',
      'Surf camp accommodations',
      'Honeymoon villas',
      'Ultra-luxury resorts',
      'All lodging in Uluwatu area',
      'Cliffside properties throughout Bukit'
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
        name: 'Couples Wellness Ritual',
        slug: 'couples-wellness-ritual',
        priceFrom: 'Rp 680,000',
        duration: '90-150 min'
      },
      {
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 304,000',
        duration: '60-120 min'
      },
      {
        name: 'Post-Surf Recovery Massage',
        slug: 'post-hike-recovery-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-90 min'
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
      }
    ],
    faqs: [
      {
        question: 'Can your therapists reach clifftop villas and resorts in Uluwatu?',
        answer: 'Absolutely! Our therapists are very familiar with Uluwatu\'s winding cliff roads and regularly serve properties throughout the area. Whether you\'re at a luxury resort like Alila Villas Uluwatu, a private villa perched on the cliffs, or accommodation near the beaches, we navigate the routes daily. We\'ll coordinate with your villa manager or resort staff if needed to ensure smooth access to your property.'
      },
      {
        question: 'Can I have massage on my villa terrace with ocean views?',
        answer: 'Yes! This is one of the most requested setups in Uluwatu. If you have a private terrace, balcony, or outdoor area with ocean views, we can set up there (weather permitting). Imagine receiving a professional massage while listening to ocean waves and feeling the sea breeze - it\'s a truly magical Uluwatu experience. Just mention your preference when booking, and ensure the area has some shade available.'
      },
      {
        question: 'Do you offer couples massage for honeymoon villas in Uluwatu?',
        answer: 'Yes! Couples massage is extremely popular in Uluwatu, especially for honeymooners and romantic getaways. We send two therapists to your villa with two tables for a synchronized massage experience. The Couples Wellness Ritual (90-150 minutes) is our most romantic package. Book 48 hours in advance for couples treatments to ensure therapist availability, especially during peak honeymoon season.'
      },
      {
        question: 'What\'s the best time for massage after surfing Uluwatu breaks?',
        answer: 'Most surfers in Uluwatu surf in the early morning or late afternoon. We recommend booking massage 2-4 hours after your surf session - typically late morning (10am-12pm) or early evening (5-7pm). This gives your body time to cool down and allows maximum benefit from the massage. Our Post-Surf Recovery Massage specifically targets shoulders, back, and leg muscles tired from paddling and wave riding.'
      },
      {
        question: 'Is there a premium charge for reaching Uluwatu cliff properties?',
        answer: 'No! Our standard pricing applies throughout Uluwatu with no premium or distance charges. Whether you\'re on the cliffs near Uluwatu Temple, down near Padang Padang Beach, or anywhere in the Pecatu area, all pricing remains the same. The price you see for your chosen treatment is the complete price including therapist travel, equipment, and setup. We believe in transparent, fair pricing.'
      },
      {
        question: 'Can I book massage for sunset time at my Uluwatu villa?',
        answer: 'Yes! Sunset massage bookings (around 5-6pm) are very popular in Uluwatu, especially for outdoor terrace setups. However, these time slots book quickly as many guests want to experience massage during Uluwatu\'s spectacular sunsets. We recommend booking 2-3 days in advance for sunset appointments. Alternatively, booking just after sunset (6:30-7:30pm) often has better availability while still capturing the evening ambiance.'
      },
      {
        question: 'Do you work with luxury resorts in Uluwatu?',
        answer: 'Yes! We regularly serve guests at Uluwatu\'s high-end resorts and understand the standards expected in luxury properties. Our therapists are professional, discreet, carry proper identification, and coordinate smoothly with resort staff and security. Many luxury resorts in Uluwatu have their own spas, but guests often choose our service for the convenience of in-villa treatment or because they want specific techniques we specialize in.'
      },
      {
        question: 'What should I arrange before therapist arrival at my cliff villa?',
        answer: 'Very little! We bring all equipment including massage tables, premium oils, fresh towels, and anything needed for treatment. You just need a suitable space (bedroom, terrace, or covered outdoor area) of about 2x3 meters and nearby bathroom access. If you\'re at a gated villa or resort, inform security that you\'re expecting a massage therapist. For outdoor setups, ensure there\'s shade. If you have any health conditions or preferences, mention when booking.'
      },
      {
        question: 'How far in advance should I book during peak season in Uluwatu?',
        answer: 'Uluwatu is popular year-round, especially June-August and December-January. During these periods, book 2-3 days ahead for single treatments and 3-4 days for couples massage. Evening appointments and weekend slots fill fastest. If you\'re staying for several days, consider booking all your desired massage sessions shortly after arrival. For same-day bookings during peak times, contact us early morning for best availability.'
      },
      {
        question: 'What payment methods work for cliff villa locations in Uluwatu?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. While Uluwatu is less urban than areas like Seminyak, there are ATMs at Uluwatu Temple area and near major beaches. Many luxury villas and resorts have cash available or can direct you to the nearest ATM. We recommend arranging cash before your massage appointment. For regular clients or extended stays, we can discuss alternative arrangements - inquire via WhatsApp.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
