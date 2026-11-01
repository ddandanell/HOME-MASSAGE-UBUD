import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import lymphaticImage from '@/assets/lymphatic-drainage-massage_1757317131192.jpg';

/**
 * Copy rule (2026-11-01): no medical or efficacy claims. Independent QA found
 * "removes toxins", "boosts immune function", "accelerates post-surgery recovery"
 * in the body, the FAQ and the hydrated Service schema. Those are replaced with
 * what the treatment physically is — light pressure, slow strokes, in your villa —
 * and a medical disclaimer. Nothing about price, duration or availability changed.
 */
export default function LymphaticDrainageMassage() {
  const treatment = {
    name: 'Lymphatic Drainage Massage',
    slug: 'lymphatic-drainage-massage',
    h1Title: 'Lymphatic Drainage Massage in Ubud – Villa Spa Delivered',
    metaTitle: 'Lymphatic Drainage Massage Ubud | Light Pressure, Villa Visit',
    metaDescription: 'Gentle lymphatic drainage massage in Ubud, delivered to your villa. Slow, light-pressure technique, 60-120 minutes. From Rp 450,000. Book on WhatsApp.',
    heroSubtitle: 'Slow, light-pressure lymphatic drainage massage delivered to your villa in Ubud by trained therapists',
    duration: '60-90 minutes',
    priceFrom: 'Rp 450,000',
    priceFromIDR: 'Rp 450,000',
    image: lymphaticImage,
    description: 'Gentle lymphatic drainage massage in Ubud, delivered to your villa using slow, light-pressure strokes',
    longDescription: 'Lymphatic drainage is a light-pressure massage technique. The therapist works slowly in the direction lymph travels, using flat hands and gentle rhythmic strokes instead of the deep pressure of a deep tissue or Balinese massage. Guests usually book it after a long flight, after a week of hiking or yoga, or when they want something calmer than a deep tissue session. Sessions run 60 to 120 minutes at your villa, hotel or guesthouse anywhere in Ubud and the surrounding villages. This is a relaxation treatment, not a medical one: if you have a medical condition, are pregnant, or have had recent surgery, please speak to your doctor first and tell your therapist before the session.',
    benefits: [
      'Very light pressure — suits guests who find deep massage too much',
      'Slow, rhythmic strokes rather than deep tissue work',
      'A quiet session in your own villa, with no travel afterwards',
      'Often booked after a long-haul flight into Denpasar',
      'Pairs well with aromatherapy massage in the same visit',
      'Therapist brings the table, linens and oils',
      'Available 7am–10pm daily, including same-day booking'
    ],
    includes: [
      'Trained lymphatic drainage therapist',
      'Light-pressure lymphatic drainage techniques',
      'Fresh professional linens',
      'Herbal tea after your session',
      'Post-treatment guidance from your therapist',
      'Hydration guidance for after the session',
      'Therapist travel to your Ubud location',
      'Professional equipment setup and cleanup'
    ],
    idealFor: [
      'Guests who prefer a very light touch',
      'Travellers arriving after a long flight',
      'Anyone who finds deep tissue work too intense',
      'Guests on wellness or yoga retreats in Ubud',
      'Couples wanting a quiet evening session',
      'Guests staying in Ubud villas, hotels and guesthouses'
    ],
    packages: [
      {
        duration: '60 Minutes',
        price: 'Rp 450,000',
        priceIDR: 'Rp 450,000',
        description: 'Full body lymphatic drainage with slow, light-pressure strokes'
      },
      {
        duration: '90 Minutes',
        price: 'Rp 630,000',
        priceIDR: 'Rp 630,000',
        description: 'Longer session including facial lymphatic work and body work'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 820,000',
        priceIDR: 'Rp 820,000',
        description: 'Complete session with body brushing, lymphatic massage and aromatherapy'
      }
    ],
    faqs: [
      {
        question: 'What is lymphatic drainage massage and how does it work?',
        answer: 'It is a light-pressure massage technique. The therapist uses flat hands and slow, rhythmic strokes, working in the direction lymph travels through the body. Pressure is much lighter than deep tissue or Balinese massage — you feel a gentle, continuous movement rather than a deep stretch. It is a relaxation treatment, not a medical one.'
      },
      {
        question: 'Is lymphatic drainage massage painful?',
        answer: 'No. Lymphatic drainage uses very gentle, light pressure — much lighter than a traditional massage. The technique is slow and soothing, and many guests find it calming enough to fall asleep during the session.'
      },
      {
        question: 'Can I book it after a long flight to Bali?',
        answer: 'Yes, and many guests do. The session is slow and light, it happens in your villa, and there is no travel afterwards. If you are dealing with a medical condition rather than travel fatigue, please speak to your doctor before booking.'
      },
      {
        question: 'Do you offer lymphatic drainage in all Ubud areas?',
        answer: 'Yes. We provide lymphatic drainage massage across Ubud centre, Penestanan, Sayan, Campuhan, Tegallalang and the surrounding villages. We bring the table, linens and oils to your villa, hotel or guesthouse anywhere in the Ubud region.'
      },
      {
        question: 'How often should I book a lymphatic drainage massage?',
        answer: 'There is no fixed rule. Some guests book a single session during their stay, others book weekly while they are in Ubud. Your therapist will suggest an interval that feels comfortable. If you have a medical condition or recent surgery, ask your doctor first.'
      },
      {
        question: 'Can I combine lymphatic drainage with other treatments?',
        answer: 'Yes. It pairs well with aromatherapy massage and a body scrub in the same visit. Tell us what you have in mind on WhatsApp and we will build the session around your schedule.'
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
