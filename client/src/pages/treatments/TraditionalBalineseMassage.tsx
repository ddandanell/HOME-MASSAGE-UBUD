import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import balineseImage from '@/assets/Balinese-Massage_1757317131191.jpg';

export default function TraditionalBalineseMassage() {
  const treatment = {
    name: 'Traditional Balinese Massage',
    slug: 'traditional-balinese-massage',
    h1Title: 'Traditional Balinese Massage in Ubud – Villa Spa Delivered',
    metaTitle: 'Balinese Massage Ubud | Traditional Villa Service',
    metaDescription: 'Traditional Balinese massage Ubud to your villa. Authentic healing with acupressure & oils. Deep relaxation & stress relief. From 280k IDR. Book now 7am-10pm.',
    heroSubtitle: 'Licensed Balinese therapists bring authentic traditional massage to your villa or hotel in Ubud area, 7am-10pm daily',
    duration: '60-120 minutes',
    priceFrom: 'Rp 280,000',
    priceFromIDR: 'Rp 280,000',
    image: balineseImage,
    description: 'Authentic Balinese massage Ubud - traditional healing treatment combining palm pressure, acupressure, and aromatic oils delivered to your villa',
    longDescription: 'Experience the authentic healing art of traditional Balinese massage in the comfort of your villa in Ubud. This ancient therapeutic practice combines gentle palm pressure, acupressure techniques, and aromatic oils to stimulate blood flow, ease muscle tension, and restore energy balance. Our certified therapists bring centuries-old Balinese healing traditions directly to your accommodation in Ubud centre, Penestanan, Sayan, and surrounding villages.',
    benefits: [
      'Improves blood circulation and oxygen flow throughout the body',
      'Reduces muscle tension and releases knots',
      'Promotes deep relaxation and stress relief',
      'Balances energy flow (Prana) in the body',
      'Enhances flexibility and joint mobility',
      'Natural detoxification through lymphatic stimulation',
      'Improves sleep quality and reduces jet lag',
      'Calms the nervous system and reduces anxiety'
    ],
    includes: [
      'Professional certified Balinese massage therapist',
      'Premium massage oils and lotions',
      'Portable massage table and fresh linens',
      'Aromatherapy enhancement',
      'Post-massage herbal tea',
      'Complimentary consultation',
      'Therapist travel to your villa in Ubud',
      'Equipment setup and cleanup'
    ],
    idealFor: [
      'First-time visitors to Ubud seeking authentic Balinese healing',
      'Travelers recovering from long-haul flights and jet lag',
      'Those seeking stress relief and deep relaxation',
      'Guests staying in villas, hotels, or guesthouses in Ubud',
      'Couples looking for a shared wellness experience',
      'Anyone experiencing muscle tension from hiking or yoga'
    ],
    packages: [
      {
        duration: '60 Minutes',
        price: 'Rp 280,000',
        priceIDR: 'Rp 280,000',
        description: 'Full body traditional Balinese massage focusing on major muscle groups and stress points'
      },
      {
        duration: '90 Minutes',
        price: 'Rp 400,000',
        priceIDR: 'Rp 400,000',
        description: 'Extended session with extra time for problem areas, includes foot reflexology'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 520,000',
        priceIDR: 'Rp 520,000',
        description: 'Complete therapeutic experience with head massage, body scrub, and extended relaxation'
      }
    ],
    faqs: [
      {
        question: 'What makes Traditional Balinese Massage unique?',
        answer: 'Traditional Balinese massage combines techniques including acupressure, skin rolling, palm pressure, and aromatherapy. It\'s designed to stimulate blood flow, ease muscle tension, and promote overall wellness. Our therapists are trained in authentic Balinese healing traditions passed down through generations.'
      },
      {
        question: 'Do you serve all areas of Ubud for villa massage?',
        answer: 'Yes! We provide traditional Balinese massage services throughout Ubud centre, Penestanan, Sayan Valley, Campuhan Ridge, Tegallalang, Lodtunduh, Sanggingan, and all surrounding villages within 20km of central Ubud.'
      },
      {
        question: 'Can I book a morning session at 7am?',
        answer: 'Absolutely! We offer flexible scheduling from 7am to 10pm daily. Early morning massage sessions are popular with guests who want to start their day refreshed before exploring Ubud\'s rice terraces and temples.'
      },
      {
        question: 'Can I request a male or female therapist?',
        answer: 'Yes, we accommodate requests for male or female therapists. Please mention your preference when booking via WhatsApp, and we\'ll do our best to arrange your preferred therapist based on availability.'
      },
      {
        question: 'What should I prepare for the in-villa massage?',
        answer: 'We bring everything needed including massage table, linens, oils, and aromatherapy. You just need to provide a quiet space (bedroom, terrace, or garden) with enough room for the massage table. We handle all setup and cleanup.'
      },
      {
        question: 'Is traditional Balinese massage suitable for beginners?',
        answer: 'Yes! Traditional Balinese massage uses medium pressure and is suitable for most people. Our therapists can adjust the pressure to your comfort level. It\'s an excellent introduction to massage therapy and Balinese wellness traditions.'
      }
    ],
    relatedTreatments: [
      { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' },
      { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
      { name: 'Hot Stone Massage', slug: 'hot-stone-massage' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
