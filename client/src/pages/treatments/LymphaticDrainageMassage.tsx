import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import lymphaticImage from '@/assets/lymphatic-drainage-massage_1757317131192.jpg';

export default function LymphaticDrainageMassage() {
  const treatment = {
    name: 'Lymphatic Drainage Massage',
    slug: 'lymphatic-drainage-massage',
    h1Title: 'Lymphatic Drainage Massage in Ubud – Villa Spa Delivered',
    metaTitle: 'Lymphatic Drainage Ubud | Detox Massage Therapy',
    metaDescription: 'Lymphatic drainage massage Ubud for detox & wellness to your villa. Reduce swelling, boost immunity & improve circulation. From 450k IDR. Certified therapists.',
    heroSubtitle: 'Gentle lymphatic drainage massage for detoxification and wellness, delivered to your Ubud villa by certified therapists',
    duration: '60-90 minutes',
    priceFrom: 'Rp 450,000',
    priceFromIDR: 'Rp 450,000',
    image: lymphaticImage,
    description: 'Gentle lymphatic drainage massage Ubud - therapeutic detoxification treatment promoting natural cleansing',
    longDescription: 'Experience the therapeutic benefits of lymphatic drainage massage in Ubud. This specialized, gentle massage technique stimulates your lymphatic system to remove toxins, reduce swelling, and boost your immune function. Ideal for detoxification, post-travel recovery, and wellness enhancement, our certified therapists bring this healing treatment directly to your villa in Ubud and surrounding areas.',
    benefits: [
      'Reduces swelling, bloating, and water retention',
      'Promotes natural detoxification and cleansing',
      'Boosts immune system function',
      'Improves skin tone and reduces cellulite appearance',
      'Relieves sinus congestion and allergies',
      'Accelerates post-surgery or injury recovery',
      'Reduces inflammation throughout the body',
      'Enhances overall energy and vitality'
    ],
    includes: [
      'Certified lymphatic drainage therapist',
      'Specialized lymphatic massage techniques',
      'Fresh professional linens',
      'Herbal tea for continued detoxification',
      'Post-treatment wellness consultation',
      'Hydration guidance for optimal results',
      'Therapist travel to your Ubud location',
      'Professional equipment setup and cleanup'
    ],
    idealFor: [
      'Travelers seeking detoxification and wellness',
      'Those experiencing bloating or water retention',
      'Post-surgery or injury recovery patients',
      'People with sluggish lymphatic systems',
      'Guests on wellness retreats in Ubud',
      'Anyone wanting to boost immune function naturally'
    ],
    packages: [
      {
        duration: '60 Minutes',
        price: 'Rp 450,000',
        priceIDR: 'Rp 450,000',
        description: 'Full body lymphatic drainage focusing on major lymph node areas and circulation'
      },
      {
        duration: '90 Minutes',
        price: 'Rp 630,000',
        priceIDR: 'Rp 630,000',
        description: 'Extended detox session with facial lymphatic drainage and body work'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 820,000',
        priceIDR: 'Rp 820,000',
        description: 'Complete wellness ritual with body brushing, lymphatic massage, and aromatherapy'
      }
    ],
    faqs: [
      {
        question: 'What is lymphatic drainage massage and how does it work?',
        answer: 'Lymphatic drainage is a gentle massage technique that stimulates your lymphatic system to move lymph fluid throughout the body. This helps eliminate toxins, reduce swelling, and boost immune function. The gentle, rhythmic movements encourage natural drainage and detoxification.'
      },
      {
        question: 'Is lymphatic drainage massage painful?',
        answer: 'No! Lymphatic drainage uses very gentle, light pressure - much lighter than traditional massage. The technique is soothing and relaxing. Many clients find it incredibly calming and even fall asleep during the session.'
      },
      {
        question: 'Can lymphatic drainage help with post-flight swelling in Ubud?',
        answer: 'Absolutely! Lymphatic drainage is excellent for reducing swelling and fluid retention after long flights. Many travelers to Ubud book this treatment shortly after arrival to help their body recover from travel and adjust to the new environment.'
      },
      {
        question: 'Do you offer lymphatic drainage in all Ubud areas?',
        answer: 'Yes, we provide lymphatic drainage massage throughout Ubud centre, Penestanan, Sayan, Campuhan, Tegallalang, and all surrounding areas. We bring our specialized equipment to your villa, hotel, or guesthouse anywhere in the Ubud region.'
      },
      {
        question: 'How often should I get lymphatic drainage massage?',
        answer: 'For general wellness and detoxification, once per week or bi-weekly is beneficial. For specific conditions like post-surgery recovery or chronic swelling, more frequent sessions may be recommended. Your therapist can provide personalized guidance.'
      },
      {
        question: 'Can I combine lymphatic drainage with other treatments?',
        answer: 'Yes! Lymphatic drainage pairs wonderfully with aromatherapy massage, body scrubs, and detox treatments. We can create a custom wellness package for your stay in Ubud. Contact us via WhatsApp to design your personalized healing experience.'
      }
    ],
    relatedTreatments: [
      { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
      { name: 'Detox & Wellness Massage', slug: 'detox-wellness-massage' },
      { name: 'Traditional Balinese Massage', slug: 'traditional-balinese-massage' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
