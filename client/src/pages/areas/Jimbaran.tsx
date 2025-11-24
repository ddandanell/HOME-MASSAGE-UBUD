import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Jimbaran() {
  const area = {
    name: 'Jimbaran',
    slug: 'jimbaran',
    h1Title: 'Home Massage in Jimbaran – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Jimbaran, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Luxury home massage in Jimbaran delivered to your beachfront resort or villa. Famous for sunset spa sessions near seafood restaurants. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience tranquil wellness with professional massage therapy delivered to your Jimbaran beachfront accommodation with stunning sunset views',
    areaDescription: 'Mobile massage service in Jimbaran - Bali\'s peaceful bay famous for sunsets and seafood',
    longDescription: 'Jimbaran is a sophisticated beach destination on Bali\'s southern peninsula, famous for its crescent-shaped bay, calm waters perfect for swimming, spectacular sunsets, and seafood restaurants lining the beach. This upscale area offers a more relaxed alternative to bustling Kuta while maintaining proximity to the airport (just 15 minutes away). Jimbaran attracts families, couples, and travelers seeking a refined beach experience. The area features luxury resorts including the iconic AYANA Resort with its famous Rock Bar, traditional fishing village charm, and Jimbaran Fish Market where locals sell the morning catch. Four Seasons Resort Bali at Jimbaran Bay, InterContinental Bali Resort, and numerous other premium properties dot the coastline. Our mobile massage service brings professional spa treatments directly to your Jimbaran resort, villa, or hotel room, allowing you to experience therapeutic wellness with the sound of gentle waves in the background. Whether you\'re staying at a beachfront mega-resort, a boutique villa with private pool, or family-friendly accommodations, our licensed therapists deliver exceptional treatments tailored to your needs. Perfect for post-beach relaxation, romantic couples massage sessions before sunset dinner, or family wellness during your Jimbaran stay.',
    uniqueFeatures: [
      'Crescent-shaped bay with calm, swimmable waters',
      'World-famous seafood restaurants on the beach',
      'Spectacular sunset viewing locations',
      'Upscale resorts including AYANA and Four Seasons',
      'Traditional fishing village atmosphere',
      'Only 15 minutes from Ngurah Rai Airport',
      'Family-friendly beaches with gentle waves',
      'Mix of luxury resorts and boutique accommodations'
    ],
    nearbyAttractions: [
      'Jimbaran Beach',
      'Rock Bar at AYANA Resort',
      'Jimbaran Fish Market',
      'Seafood beach restaurants (Jimbaran Bay)',
      'Jenggala Keramik Bali (ceramics)',
      'Garuda Wisnu Kencana Cultural Park',
      'Balangan Beach (15 min)',
      'Uluwatu Temple (20 min)',
      'Morning Glory traditional market',
      'Samasta Lifestyle Village',
      'Jimbaran Hills for panoramic views',
      'Peninsula Island waterblow'
    ],
    popularVillas: [
      'AYANA Resort and Spa',
      'Four Seasons Resort Jimbaran Bay',
      'InterContinental Bali Resort',
      'Belmond Jimbaran Puri',
      'Keraton Jimbaran Beach Resort',
      'Le Meridien Bali Jimbaran',
      'Jimbaran Bay Beach Resort',
      'Private beachfront villas',
      'Family villas near Jimbaran Market',
      'Boutique hotels in Jimbaran village',
      'All lodging in Jimbaran area',
      'Budget to ultra-luxury properties'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 280,000',
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
        name: 'Deep Tissue Massage',
        slug: 'deep-tissue-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-120 min'
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
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
      },
      {
        name: 'Lymphatic Drainage Massage',
        slug: 'lymphatic-drainage-massage',
        priceFrom: 'Rp 384,000',
        duration: '60-90 min'
      }
    ],
    faqs: [
      {
        question: 'Can you reach my resort at Jimbaran Bay?',
        answer: 'Absolutely! We serve the entire Jimbaran area including all beachfront resorts along Jimbaran Bay, properties in the hills with ocean views, and accommodations near the traditional village. Whether you\'re at AYANA, Four Seasons, InterContinental, or a smaller boutique property, our therapists know the area well and can reach you easily within 15-20 minutes of booking confirmation.'
      },
      {
        question: 'Can I schedule massage before going to sunset dinner at the beach restaurants?',
        answer: 'Yes! This is one of our most popular booking times in Jimbaran. Many guests book late afternoon massage (4-5pm) to relax before heading to the famous beachfront seafood restaurants for sunset dinner (typically 6-7pm). The massage helps you feel refreshed and relaxed for your evening. We recommend booking this timing 1-2 days in advance as late afternoon slots fill quickly.'
      },
      {
        question: 'Do you serve both the beachfront hotels and villas in Jimbaran hills?',
        answer: 'Yes! We serve all of Jimbaran including beachfront properties along the bay and villas situated in the hills with panoramic ocean views. Both locations are part of our standard Jimbaran service area with no additional travel fees. Just provide your specific address or property name when booking, and we\'ll find you easily.'
      },
      {
        question: 'Is Jimbaran massage service family-friendly?',
        answer: 'Absolutely! Jimbaran attracts many families, and we cater to family wellness needs. We can provide massage for parents while children are engaged in resort kids\' club activities or resting. For families staying in villas with multiple rooms, we can arrange multiple therapists for parents and older teenagers (16+) to receive treatment simultaneously. Many Jimbaran families book massage mid-afternoon while children nap or play.'
      },
      {
        question: 'What time do you recommend booking on arrival day from the airport?',
        answer: 'Since Jimbaran is only 15 minutes from Ngurah Rai Airport, many travelers arrive and settle in quickly. We recommend booking massage 2-3 hours after your estimated arrival time to allow for check-in and unpacking. For example, if you land at 2pm, book massage for 5-6pm. This gives you time to arrive, settle in, and then enjoy a rejuvenating treatment to overcome travel fatigue. Message us when you land to confirm timing.'
      },
      {
        question: 'Can couples book sunset massage on our villa terrace?',
        answer: 'Yes! Sunset massage sessions on private terraces are very popular in Jimbaran. We send two therapists with two tables for couples treatment while you enjoy Jimbaran\'s famous sunset views. Weather permitting, this is a magical experience. Book 48 hours ahead for couples sunset sessions as these slots fill quickly. We typically schedule these for 5-6pm start time to capture the sunset hour (around 6-6:30pm).'
      },
      {
        question: 'Do you work with luxury resorts like AYANA and Four Seasons?',
        answer: 'Yes! We regularly serve guests at Jimbaran\'s premium resorts including AYANA, Four Seasons, InterContinental, and Belmond. Our therapists are professional, carry proper identification, and understand the standards expected at luxury properties. We coordinate with resort security and front desk smoothly. While these resorts have excellent spa facilities, many guests choose our service for in-room convenience, better pricing, and flexible scheduling.'
      },
      {
        question: 'What payment methods do you accept in Jimbaran?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. Jimbaran has ATMs at major resorts, near the fish market, and at Samasta Lifestyle Village shopping complex. Many resort concierges can provide currency exchange or direct you to ATMs. We recommend having cash ready before your appointment. We provide receipts upon request for your records.'
      },
      {
        question: 'Can I book massage for post-beach relaxation in late afternoon?',
        answer: 'Absolutely! This is ideal timing. Many Jimbaran guests spend mornings and early afternoons on the beach, then book massage for 3-5pm to recover from sun exposure, swimming, and beach activities. The treatment helps soothe sun-warmed skin, relax tired muscles, and refresh you for the evening. These afternoon time slots are popular, so booking 24 hours ahead is recommended, especially on weekends.'
      },
      {
        question: 'Is there parking available at Jimbaran properties for your therapists?',
        answer: 'Yes, our therapists travel by scooter which makes parking straightforward at virtually all Jimbaran properties. Whether you\'re at a large beachfront resort with designated parking areas or a smaller villa, parking arrangements are not an issue. You don\'t need to worry about this - we handle all logistics. Most properties in Jimbaran are accustomed to outside service providers and have standard procedures.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
