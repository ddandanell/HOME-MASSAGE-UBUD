import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function UbudCentre() {
  const area = {
    name: 'Ubud Centre',
    slug: 'ubud-centre',
    h1Title: 'Villa Massage in Ubud Centre – In-Villa Spa Service',
    metaTitle: 'Villa Massage Ubud Centre | In-Villa Spa Service',
    metaDescription: 'Book villa massage in Ubud Centre. Professional spa service delivered to your hotel or villa near Ubud Palace, Monkey Forest. 7am-10pm. ★★★★★',
    heroSubtitle: 'Professional massage therapy delivered to your villa or hotel in central Ubud, near Ubud Palace and main attractions',
    areaDescription: 'Mobile massage service in Ubud Centre - heart of Bali\'s cultural and wellness hub',
    longDescription: 'Ubud Centre is the vibrant heart of Bali\'s cultural and wellness scene. Home to Ubud Palace, traditional markets, art galleries, and countless restaurants, the centre is where culture meets wellness. Our mobile massage service brings professional spa treatments directly to your villa, hotel, or guesthouse in central Ubud. Whether you\'re staying near Ubud Palace, along Jalan Raya Ubud, or close to Monkey Forest, we provide premium in-villa massage services that let you enjoy Ubud\'s healing energy without leaving your accommodation.',
    uniqueFeatures: [
      'Heart of Ubud\'s cultural and wellness scene',
      'Walking distance to Ubud Palace and traditional markets',
      'Close proximity to restaurants, cafes, and shops',
      'Central location for exploring all of Ubud',
      'Mix of luxury hotels and boutique accommodations',
      'Vibrant atmosphere with easy access to everything'
    ],
    nearbyAttractions: [
      'Ubud Palace (Puri Saren Agung)',
      'Ubud Traditional Art Market',
      'Sacred Monkey Forest Sanctuary',
      'Ubud Royal Palace',
      'Saraswati Temple',
      'Museum Puri Lukisan',
      'Ubud Water Palace'
    ],
    popularVillas: [
      'Hotels along Jalan Raya Ubud',
      'Monkey Forest Road accommodations',
      'Boutique hotels near Ubud Palace',
      'Guesthouses in central area',
      'Luxury resorts in heart of Ubud',
      'Private villas near market',
      'All hotels and villas in Ubud Centre',
      'Budget to luxury accommodations'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: '$35',
        duration: '60-120 min'
      },
      {
        name: 'Deep Tissue Massage',
        slug: 'deep-tissue-massage',
        priceFrom: '$45',
        duration: '60-120 min'
      },
      {
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: '$40',
        duration: '60-120 min'
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: '$40',
        duration: '60-120 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: '$55',
        duration: '60-120 min'
      },
      {
        name: 'Couples Wellness Ritual',
        slug: 'couples-wellness-ritual',
        priceFrom: '$90',
        duration: '90-150 min'
      }
    ],
    faqs: [
      {
        question: 'How quickly can you reach my hotel in Ubud Centre?',
        answer: 'Because Ubud Centre is very centrally located, we can typically reach your accommodation within 10-15 minutes. We know the area well and can navigate the busy streets efficiently. For best availability, we recommend booking 24-48 hours in advance.'
      },
      {
        question: 'Do you serve hotels on Monkey Forest Road?',
        answer: 'Yes! We serve all hotels, guesthouses, and villas on Monkey Forest Road and throughout Ubud Centre. This is one of our most popular service areas. Just provide your accommodation name and room number when booking.'
      },
      {
        question: 'Is parking difficult for therapists in central Ubud?',
        answer: 'We\'re experienced with central Ubud and know where to park. Our therapists arrive by scooter which makes parking easy even in busy areas. You don\'t need to worry about arranging parking - we handle all logistics.'
      },
      {
        question: 'Can I book a massage after visiting Ubud Market?',
        answer: 'Absolutely! Many guests book afternoon or evening massage sessions after spending the morning exploring Ubud Market, Palace, and temples. It\'s the perfect way to relax after a day of sightseeing in central Ubud.'
      },
      {
        question: 'Do you have experience with the hotels near Ubud Palace?',
        answer: 'Yes! We regularly serve hotels and accommodations near Ubud Palace including along Jalan Raya Ubud. We\'re familiar with all properties in the area and can navigate easily to your location. Many hotel staff know and recommend our service.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
