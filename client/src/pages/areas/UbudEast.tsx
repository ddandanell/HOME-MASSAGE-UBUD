import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function UbudEast() {
  const area = {
    name: 'Ubud East (Campuhan Ridge)',
    slug: 'ubud-east',
    h1Title: 'Villa Massage in Ubud East – Campuhan Ridge Area Spa',
    metaTitle: 'Massage Ubud East | Campuhan Ridge Area Service',
    metaDescription: 'Villa massage Ubud East & Campuhan Ridge area. Perfect post-hike spa service for wellness seekers. From 240k IDR. Professional therapists 7am-10pm.',
    heroSubtitle: 'Professional massage therapy delivered to your accommodation in Ubud East, near Campuhan Ridge Walk and wellness centers',
    areaDescription: 'Mobile massage service in Ubud East - gateway to Campuhan Ridge and wellness retreats',
    longDescription: 'Ubud East, including the Campuhan Ridge area, is known for its iconic ridge walk, wellness centers, and peaceful atmosphere. This area offers easy access to one of Bali\'s most beautiful hiking trails while maintaining proximity to central Ubud. Home to yoga studios, healing centers, and boutique accommodations, Ubud East attracts wellness-focused travelers. Our mobile massage service brings professional treatments directly to your hotel or villa, perfect for post-hike recovery or enhancing your wellness journey in this special part of Ubud.',
    uniqueFeatures: [
      'Gateway to famous Campuhan Ridge Walk',
      'Concentration of yoga studios and wellness centers',
      'Peaceful location with easy Ubud centre access',
      'Mix of budget and boutique accommodations',
      'Close to Blanco Renaissance Museum',
      'Perfect base for hiking and wellness activities'
    ],
    nearbyAttractions: [
      'Campuhan Ridge Walk (Bukit Campuhan)',
      'Antonio Blanco Museum',
      'Pura Gunung Lebah Temple',
      'Tjampuhan Hot Springs',
      'Yoga Barn',
      'Various wellness and healing centers',
      'Ubud Aura Retreat Centre'
    ],
    popularVillas: [
      'Hotels along Campuhan Ridge',
      'Wellness retreat centers',
      'Budget guesthouses with valley views',
      'Boutique hotels near ridge walk',
      'Yoga retreat accommodations',
      'Mid-range hotels on main road',
      'Private villas in quiet areas',
      'All lodging in Ubud East'
    ],
    treatments: [
      {
        name: 'Post-Hike Recovery Massage',
        slug: 'post-hike-recovery-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-90 min'
      },
      {
        name: 'Deep Tissue Massage',
        slug: 'deep-tissue-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-120 min'
      },
      {
        name: 'Yoga Stretch & Massage',
        slug: 'yoga-stretch-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-90 min'
      },
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 240,000',
        duration: '60-120 min'
      },
      {
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
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
        question: 'Can you come right after I finish Campuhan Ridge Walk?',
        answer: 'Absolutely! Many guests book post-hike massage for when they return from the ridge walk. Let us know your estimated return time and we\'ll schedule accordingly. Post-hike recovery massage is ideal within 2-4 hours after hiking.'
      },
      {
        question: 'Do you serve wellness retreat centers in this area?',
        answer: 'Yes! We work with many wellness retreat centers and yoga studios in Ubud East. Whether you\'re attending a retreat or staying independently, we provide mobile massage service. We\'re familiar with most centers in the area.'
      },
      {
        question: 'Is Ubud East far from your main service area?',
        answer: 'Not at all! Ubud East is very much within our core service area. We\'re there regularly and know the area well. Travel time from central Ubud is just 5-10 minutes, and we include all travel in our standard pricing.'
      },
      {
        question: 'Can you recommend massage timing around ridge walk and yoga?',
        answer: 'Great question! Most guests do the ridge walk early morning (6-8am), then book massage for mid-morning or afternoon. If you have yoga classes, evening massage works well. We\'re flexible with scheduling from 7am-10pm to fit your wellness activities.'
      },
      {
        question: 'Do you offer group bookings for yoga retreat participants?',
        answer: 'Yes! We coordinate group massage sessions for yoga retreats and wellness groups. We can send multiple therapists for simultaneous treatments. Contact us in advance to arrange group services for your retreat in Ubud East.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
