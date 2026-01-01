import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import hotStoneImage from '@/assets/Balinese-Massage_1757317131191.jpg';

export default function HotStoneMassage() {
  const treatment = {
    name: 'Hot Stone Massage',
    slug: 'hot-stone-massage',
    h1Title: 'Hot Stone Massage in Ubud – Villa Spa Delivered',
    metaTitle: 'Hot Stone Massage Ubud | Volcanic Stone Therapy',
    metaDescription: 'Hot stone massage Ubud with heated volcanic stones to your villa. Deep muscle relaxation & therapeutic heat. From 360k IDR. Licensed therapists 7am-10pm.',
    heroSubtitle: 'Therapeutic hot stone massage using smooth volcanic stones, delivered to your villa in Ubud for deep muscle relaxation',
    duration: '60-120 minutes',
    priceFrom: 'Rp 360,000',
    priceFromIDR: 'Rp 360,000',
    image: hotStoneImage,
    description: 'Hot stone massage Ubud - therapeutic treatment using heated volcanic stones for deep muscle relaxation',
    longDescription: 'Experience the ancient healing power of hot stone massage in your Ubud villa. This luxurious treatment combines smooth, heated volcanic stones with therapeutic massage techniques to melt away tension, improve circulation, and promote profound relaxation. The warmth of the stones penetrates deep into muscles, making this ideal for chronic tension and stress relief. Our certified therapists bring this premium spa experience directly to your accommodation throughout Ubud.',
    benefits: [
      'Deep muscle relaxation and tension relief',
      'Improved blood circulation and oxygen flow',
      'Enhanced detoxification through heat',
      'Relief from chronic pain and muscle stiffness',
      'Reduced stress and anxiety',
      'Improved sleep quality',
      'Balanced energy and emotional wellbeing',
      'Enhanced flexibility and mobility'
    ],
    includes: [
      'Certified hot stone massage therapist',
      'Set of volcanic massage stones heated to optimal temperature',
      'Premium massage oils and aromatherapy',
      'Portable massage table and luxury linens',
      'Stone warmer equipment',
      'Post-massage herbal tea',
      'Therapist travel throughout Ubud',
      'Complete setup and cleanup service'
    ],
    idealFor: [
      'Those seeking deep muscle relaxation',
      'People with chronic muscle tension or pain',
      'Guests wanting a luxury spa experience',
      'Travelers recovering from hiking or physical activities',
      'Anyone seeking profound stress relief',
      'Couples looking for a special wellness treatment'
    ],
    packages: [
      {
        duration: '60 Minutes',
        price: 'Rp 360,000',
        priceIDR: 'Rp 360,000',
        description: 'Hot stone massage focusing on back, shoulders, and legs with heated stone placement'
      },
      {
        duration: '90 Minutes',
        price: 'Rp 520,000',
        priceIDR: 'Rp 520,000',
        description: 'Full body hot stone massage with extended relaxation and aromatherapy enhancement'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 680,000',
        priceIDR: 'Rp 680,000',
        description: 'Complete luxury ritual with body scrub, hot stone massage, and scalp treatment'
      }
    ],
    faqs: [
      {
        question: 'How hot are the stones used in hot stone massage?',
        answer: 'The volcanic stones are heated to approximately 130-145°F (54-63°C) - warm enough to provide therapeutic benefits but never uncomfortably hot. Your therapist constantly monitors the temperature and will adjust based on your comfort level.'
      },
      {
        question: 'Is hot stone massage better than regular massage?',
        answer: 'Hot stone massage offers unique benefits through the combination of heat and massage. The warmth helps muscles relax more deeply and quickly, making it excellent for chronic tension. It\'s particularly beneficial if you have muscle stiffness, poor circulation, or want deep relaxation.'
      },
      {
        question: 'Can you provide hot stone massage in Penestanan or Sayan villas?',
        answer: 'Yes! We bring all equipment including stone heater to your villa anywhere in Ubud - Penestanan, Sayan Valley, Campuhan, Tegallalang, or any surrounding area. We only need access to electricity to heat the stones and a quiet space for your treatment.'
      },
      {
        question: 'Is hot stone massage safe during pregnancy?',
        answer: 'We do not recommend hot stone massage during pregnancy due to the heat intensity. However, we offer specialized pregnancy massage that\'s safe and comfortable for expectant mothers. Contact us to discuss the best treatment options for you.'
      },
      {
        question: 'Can I request couples hot stone massage in Ubud?',
        answer: 'Absolutely! Couples hot stone massage is a popular choice for romantic getaways in Ubud. We bring two therapists and two complete sets of equipment to create a synchronized luxury spa experience in your villa. Perfect for honeymooners!'
      },
      {
        question: 'What should I do after a hot stone massage?',
        answer: 'Drink plenty of water to help flush toxins released during the massage. Avoid strenuous activities for a few hours and continue to relax. Many guests enjoy taking a gentle walk through Ubud\'s rice fields or simply resting in their villa to extend the benefits.'
      }
    ],
    relatedTreatments: [
      { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' },
      { name: 'Traditional Balinese Massage', slug: 'traditional-balinese-massage' },
      { name: 'Couples Wellness Ritual', slug: 'couples-wellness-ritual' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
