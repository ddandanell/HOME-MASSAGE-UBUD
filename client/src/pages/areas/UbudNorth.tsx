import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function UbudNorth() {
  const area = {
    name: 'Ubud North (Penestanan & Sayan)',
    slug: 'ubud-north',
    h1Title: 'Villa Massage in Penestanan & Sayan – Ubud North Spa',
    metaTitle: 'Massage Penestanan & Sayan | Ubud North Villas',
    metaDescription: 'Villa massage Penestanan & Sayan Valley, Ubud North. Jungle spa service with rice field views. From 240k IDR. Expert therapists 7am-10pm daily.',
    heroSubtitle: 'Professional massage therapy delivered to your jungle villa in Penestanan, Sayan Valley, and north Ubud areas',
    areaDescription: 'Mobile massage service in Penestanan and Sayan - Ubud\'s peaceful jungle and rice field areas',
    longDescription: 'Penestanan and Sayan Valley represent the peaceful, artistic side of Ubud. These northern areas are known for stunning rice terraces, jungle villas, and tranquil atmosphere. Penestanan is an artist village with boutique accommodations overlooking rice fields, while Sayan Valley offers luxury resorts with dramatic gorge views. Our mobile massage service brings professional spa treatments to your jungle retreat, villa terrace, or poolside, allowing you to enjoy therapeutic healing while surrounded by Ubud\'s natural beauty.',
    uniqueFeatures: [
      'Peaceful jungle setting away from central Ubud crowds',
      'Stunning rice terrace and valley views',
      'Artist community and creative atmosphere',
      'Luxury villas and boutique eco-resorts',
      'Close to Campuhan Ridge Walk trailhead',
      'Perfect for wellness retreats and relaxation'
    ],
    nearbyAttractions: [
      'Campuhan Ridge Walk',
      'Sayan Rice Terraces',
      'Penestanan Rice Fields',
      'Tjampuhan Bridge',
      'Neka Art Museum',
      'Pura Gunung Lebah Temple',
      'Artist studios and galleries'
    ],
    popularVillas: [
      'Jungle villas with infinity pools',
      'Luxury resorts in Sayan Valley',
      'Boutique hotels with rice field views',
      'Eco-lodges and wellness retreats',
      'Private villas overlooking valleys',
      'Artist guesthouses in Penestanan',
      'Romantic honeymoon villas',
      'All accommodations in north Ubud'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 240,000',
        duration: '60-120 min'
      },
      {
        name: 'Post-Hike Recovery Massage',
        slug: 'post-hike-recovery-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-90 min'
      },
      {
        name: 'Yoga Stretch & Massage',
        slug: 'yoga-stretch-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-90 min'
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
        name: 'Detox & Wellness Massage',
        slug: 'detox-wellness-massage',
        priceFrom: 'Rp 440,000',
        duration: '90-120 min'
      }
    ],
    faqs: [
      {
        question: 'Can you find jungle villas in Penestanan easily?',
        answer: 'Yes! We\'re very familiar with Penestanan and Sayan areas. We regularly serve villas tucked into the jungle and rice fields. Just provide your villa name and we\'ll navigate there. Many villas have stunning terraces perfect for massage with rice field views.'
      },
      {
        question: 'Is there a price difference for Penestanan or Sayan service?',
        answer: 'No! Our prices are the same throughout all Ubud areas including Penestanan and Sayan Valley. There are no extra charges for northern Ubud locations. All prices include therapist travel and equipment delivery to your villa.'
      },
      {
        question: 'Can I have massage on my villa terrace overlooking rice fields?',
        answer: 'Absolutely! Many guests in Penestanan and Sayan choose to have massage on their terrace or balcony with rice field views. We bring portable equipment and can set up anywhere you prefer. The natural setting enhances the healing experience beautifully.'
      },
      {
        question: 'Do you offer post-hike massage after Campuhan Ridge Walk?',
        answer: 'Yes! Campuhan Ridge Walk starts right in this area. Post-hike recovery massage is very popular for guests staying in Penestanan and Sayan. We can come to your villa shortly after your morning hike for optimal muscle recovery and relaxation.'
      },
      {
        question: 'Are therapists comfortable with steep villa access roads?',
        answer: 'Yes! Our therapists are local and experienced with Ubud\'s terrain including steep access roads in Penestanan and Sayan. We come by scooter which easily handles jungle paths and village roads. Access is never a problem for us.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
