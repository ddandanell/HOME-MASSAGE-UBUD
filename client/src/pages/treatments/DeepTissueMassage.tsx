import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import deepTissueImage from '@/assets/Deep-Tissue-Massage_1757317131192.jpg';

export default function DeepTissueMassage() {
  const treatment = {
    name: 'Deep Tissue Massage',
    slug: 'deep-tissue-massage',
    h1Title: 'Deep Tissue Massage in Ubud – Villa Spa Delivered',
    metaTitle: 'Deep Tissue Massage Ubud | Villa Spa Treatment',
    metaDescription: 'Deep tissue massage Ubud delivered to your villa. Expert therapists target chronic tension & muscle knots. From 380k IDR. Book professional treatment 7am-10pm.',
    heroSubtitle: 'Professional therapeutic deep tissue massage targeting chronic tension and muscle knots, delivered to your Ubud villa',
    duration: '60-120 minutes',
    priceFrom: 'Rp 380,000',
    priceFromIDR: 'Rp 380,000',
    image: deepTissueImage,
    description: 'Professional deep tissue massage Ubud - intensive therapeutic bodywork targeting chronic tension and muscle knots in your accommodation',
    longDescription: 'Our deep tissue massage in Ubud focuses on the deeper layers of muscle tissue to release chronic tension, break down adhesions, and restore mobility. Ideal for active travelers, hikers, and those with persistent muscle pain, this intensive therapeutic treatment uses slow, deliberate strokes and deep finger pressure to reach problem areas. Our certified therapists bring professional deep tissue techniques directly to your villa anywhere in Ubud.',
    benefits: [
      'Relieves chronic muscle pain and tension',
      'Breaks down scar tissue and adhesions',
      'Improves mobility and flexibility',
      'Reduces inflammation and muscle stiffness',
      'Releases deeply held tension patterns',
      'Helps recover from sports injuries',
      'Improves posture and body alignment',
      'Provides lasting pain relief for chronic conditions'
    ],
    includes: [
      'Certified deep tissue massage therapist',
      'Professional-grade massage oils',
      'Portable massage table and premium linens',
      'Hot towel treatment for muscle preparation',
      'Post-massage stretching guidance',
      'Personalized pressure adjustment',
      'Therapist travel throughout Ubud area',
      'Complete setup and cleanup service'
    ],
    idealFor: [
      'Athletes and active travelers needing muscle recovery',
      'Hikers recovering from Campuhan Ridge or Tegallalang treks',
      'Those with chronic back, neck, or shoulder pain',
      'Yoga practitioners seeking deeper muscle release',
      'Surfers and sports enthusiasts visiting Ubud',
      'Anyone with persistent muscle tension or knots'
    ],
    packages: [
      {
        duration: '60 Minutes',
        price: 'Rp 380,000',
        priceIDR: 'Rp 380,000',
        description: 'Targeted deep tissue work on major problem areas - back, shoulders, or legs'
      },
      {
        duration: '90 Minutes',
        price: 'Rp 540,000',
        priceIDR: 'Rp 540,000',
        description: 'Full body deep tissue massage with extended focus on multiple tension areas'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 700,000',
        priceIDR: 'Rp 700,000',
        description: 'Comprehensive therapeutic session with hot stone enhancement and stretching'
      }
    ],
    faqs: [
      {
        question: 'How is deep tissue massage different from traditional Balinese massage?',
        answer: 'Deep tissue massage uses slower, more forceful strokes to target deeper muscle layers and connective tissue. While traditional Balinese massage is relaxing and uses lighter to medium pressure, deep tissue is more intensive and therapeutic, ideal for chronic pain and muscle tension.'
      },
      {
        question: 'Will deep tissue massage hurt?',
        answer: 'You may experience some discomfort when the therapist works on areas with chronic tension or adhesions. However, it should never be unbearable. Our therapists constantly communicate with you to ensure the pressure is therapeutic but tolerable. You\'ll feel better afterward!'
      },
      {
        question: 'Is deep tissue massage good for post-hike recovery in Ubud?',
        answer: 'Absolutely! Deep tissue massage is excellent for recovery after hiking Campuhan Ridge, Tegallalang rice terraces, or Mount Batur. It helps release muscle tension, reduces soreness, and speeds up recovery. Many of our Ubud guests book sessions after trekking activities.'
      },
      {
        question: 'Do you offer deep tissue massage in Penestanan or Sayan?',
        answer: 'Yes! We provide deep tissue massage services to all areas of Ubud including Penestanan, Sayan Valley, Campuhan, Tegallalang, and all surrounding villages. We bring our portable equipment directly to your villa or hotel.'
      },
      {
        question: 'Can I get a deep tissue massage on the same day?',
        answer: 'While we recommend booking 24-48 hours in advance, we often accommodate same-day requests based on therapist availability. Contact us via WhatsApp at +62 811-2656-869 to check availability for your preferred time.'
      },
      {
        question: 'Should I book deep tissue or traditional Balinese massage?',
        answer: 'Choose deep tissue if you have chronic muscle pain, tension, or are recovering from physical activity. Choose traditional Balinese if you want relaxation, stress relief, and gentle therapeutic work. Not sure? Contact us for a personalized recommendation.'
      }
    ],
    relatedTreatments: [
      { name: 'Traditional Balinese Massage', slug: 'traditional-balinese-massage' },
      { name: 'Hot Stone Massage', slug: 'hot-stone-massage' },
      { name: 'Post-Hike Recovery Massage', slug: 'post-hike-recovery-massage' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
