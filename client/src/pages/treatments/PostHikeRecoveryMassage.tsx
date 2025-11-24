import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import postHikeImage from '@/assets/Deep-Tissue-Massage_1757317131192.jpg';

export default function PostHikeRecoveryMassage() {
  const treatment = {
    name: 'Post-Hike Recovery Massage',
    slug: 'post-hike-recovery-massage',
    h1Title: 'Post-Hike Recovery Massage in Ubud – Villa Service',
    metaTitle: 'Post-Hike Recovery Massage Ubud | After Trekking Treatment',
    metaDescription: 'Book Post-Hike Recovery Massage in Ubud. Perfect after Campuhan Ridge or Tegallalang trek. Delivered to your villa, 7 am–10 pm. ★★★★★',
    heroSubtitle: 'Specialized recovery massage for hikers and trekkers, delivered to your Ubud villa after your adventures',
    duration: '60-90 minutes',
    priceFrom: '$45',
    priceFromIDR: '400,000',
    image: postHikeImage,
    description: 'Post-hike recovery massage Ubud - specialized treatment for muscle recovery after trekking',
    longDescription: 'After exploring Ubud\'s stunning rice terraces, ridge walks, and jungle trails, your body deserves expert care. Our post-hike recovery massage combines deep tissue techniques, stretching, and targeted muscle work to help your body recover from trekking adventures. Whether you\'ve hiked Campuhan Ridge, climbed through Tegallalang rice terraces, or trekked to waterfalls, our certified therapists bring specialized recovery treatment directly to your villa, helping you feel refreshed and ready for your next Ubud adventure.',
    benefits: [
      'Accelerated muscle recovery and repair',
      'Reduced post-hike soreness and stiffness',
      'Relief from leg, back, and shoulder tension',
      'Improved circulation to tired muscles',
      'Reduced inflammation and swelling',
      'Enhanced flexibility and mobility',
      'Faster recovery for multi-day hiking',
      'Prevention of delayed onset muscle soreness (DOMS)'
    ],
    includes: [
      'Certified sports/recovery massage therapist',
      'Deep tissue and compression techniques',
      'Targeted stretching for hikers',
      'Hot towel treatment for tired muscles',
      'Anti-inflammatory massage oil blend',
      'Recovery and hydration guidance',
      'Therapist travel to your Ubud villa',
      'Professional equipment setup and cleanup'
    ],
    idealFor: [
      'Hikers who explored Campuhan Ridge Walk',
      'Trekkers returning from Tegallalang rice terraces',
      'Mount Batur sunrise trek participants',
      'Waterfall adventurers and jungle hikers',
      'Multi-day trekking groups in Ubud',
      'Anyone experiencing post-activity muscle soreness'
    ],
    packages: [
      {
        duration: '60 Minutes',
        price: '$45',
        priceIDR: 'IDR 400,000',
        description: 'Focused recovery massage on legs, feet, back, and shoulders after hiking'
      },
      {
        duration: '90 Minutes',
        price: '$65',
        priceIDR: 'IDR 600,000',
        description: 'Full body recovery session with deep tissue, stretching, and hot stone therapy'
      },
      {
        duration: '120 Minutes',
        price: '$85',
        priceIDR: 'IDR 750,000',
        description: 'Complete recovery package with body treatment, massage, and ice therapy for inflammation'
      }
    ],
    faqs: [
      {
        question: 'When should I book a post-hike massage after trekking in Ubud?',
        answer: 'Ideally within 2-4 hours after your hike while muscles are still warm. However, recovery massage is beneficial even the next day. Many guests book evening sessions after morning hikes of Campuhan Ridge or Tegallalang rice terraces.'
      },
      {
        question: 'Is post-hike massage different from regular massage?',
        answer: 'Yes! Post-hike massage focuses on sports recovery techniques including deeper pressure, compression, and targeted work on hiking-stressed areas like calves, thighs, lower back, and shoulders. It\'s more therapeutic and recovery-focused than relaxation massage.'
      },
      {
        question: 'Can you help with sore calves after Campuhan Ridge Walk?',
        answer: 'Absolutely! Campuhan Ridge and Tegallalang rice terrace walks create specific calf, quad, and foot soreness. Our therapists are familiar with these trails and know exactly which muscles need attention. We provide targeted relief for Ubud hiking-related tension.'
      },
      {
        question: 'Do you serve villas near popular Ubud hiking trails?',
        answer: 'Yes! We provide post-hike massage throughout Ubud including areas near Campuhan Ridge (Penestanan, Sanggingan), Tegallalang, Sayan Valley, and all surrounding areas. We come to your villa wherever you\'re staying after your trek.'
      },
      {
        question: 'Can I book for a group after a guided hiking tour?',
        answer: 'Absolutely! We coordinate group bookings for hiking parties and tour groups. We can send multiple therapists to provide simultaneous treatments at your villa or accommodation. Contact us in advance to arrange group post-hike recovery sessions.'
      },
      {
        question: 'Should I book recovery massage or regular deep tissue?',
        answer: 'If you\'ve been hiking in Ubud, choose post-hike recovery massage. It\'s specifically designed for activity recovery. If you have general chronic tension without recent hiking, deep tissue massage might be more suitable. We can help you choose the right treatment.'
      }
    ],
    relatedTreatments: [
      { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' },
      { name: 'Thai Massage', slug: 'thai-massage' },
      { name: 'Hot Stone Massage', slug: 'hot-stone-massage' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
