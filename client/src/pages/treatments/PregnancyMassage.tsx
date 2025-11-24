import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import pregnancyImage from '@/assets/Aromatherapy-Massage_1757317131192.jpg';

export default function PregnancyMassage() {
  const treatment = {
    name: 'Pregnancy Massage',
    slug: 'pregnancy-massage',
    h1Title: 'Pregnancy Massage in Ubud – Safe In-Villa Spa',
    metaTitle: 'Pregnancy Massage Ubud | Safe Prenatal Treatment',
    metaDescription: 'Pregnancy massage Ubud by certified maternity therapists to your villa. Safe prenatal care for expecting mothers. From 336k IDR. Book 7am-10pm daily.',
    heroSubtitle: 'Safe, comfortable prenatal massage for expecting mothers, delivered to your Ubud villa by certified maternity therapists',
    duration: '60-90 minutes',
    priceFrom: 'Rp 360,000',
    priceFromIDR: 'Rp 360,000',
    image: pregnancyImage,
    description: 'Safe pregnancy massage Ubud - specialized prenatal care delivered to your villa by certified maternity therapists',
    longDescription: 'Experience safe, nurturing pregnancy massage in the comfort of your Ubud villa. Our certified prenatal massage therapists specialize in techniques specifically designed for expecting mothers, providing relief from pregnancy discomforts while ensuring complete safety for you and your baby. Using side-lying positions and specially designed cushions, we bring this gentle, therapeutic treatment to your accommodation throughout Ubud, allowing you to relax and prepare for motherhood in paradise.',
    benefits: [
      'Relief from back pain and sciatica',
      'Reduced swelling in legs and feet',
      'Improved sleep quality',
      'Decreased anxiety and stress',
      'Relief from muscle tension and headaches',
      'Improved circulation for mother and baby',
      'Reduced joint pain and discomfort',
      'Enhanced emotional wellbeing and bonding'
    ],
    includes: [
      'Certified prenatal massage therapist',
      'Pregnancy-safe massage oils',
      'Specialized positioning cushions and pillows',
      'Side-lying massage technique',
      'Gentle, safe pressure throughout',
      'Prenatal wellness consultation',
      'Therapist travel to your Ubud villa',
      'Professional setup and cleanup'
    ],
    idealFor: [
      'Expecting mothers in their second and third trimesters',
      'Pregnant travelers visiting or staying in Ubud',
      'Those experiencing pregnancy-related discomforts',
      'Mothers-to-be seeking relaxation and stress relief',
      'Pregnant women with doctor approval for massage',
      'Babymoon couples in Ubud'
    ],
    packages: [
      {
        duration: '60 Minutes',
        price: 'Rp 360,000',
        priceIDR: 'Rp 360,000',
        description: 'Safe prenatal massage focusing on back, legs, and common pregnancy discomfort areas'
      },
      {
        duration: '90 Minutes',
        price: 'Rp 520,000',
        priceIDR: 'Rp 520,000',
        description: 'Extended session with foot reflexology and gentle stretching for expecting mothers'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 680,000',
        priceIDR: 'Rp 680,000',
        description: 'Luxury babymoon package with gentle body massage, scalp treatment, and relaxation'
      }
    ],
    faqs: [
      {
        question: 'Is pregnancy massage safe in Ubud?',
        answer: 'Yes! Our therapists are specially trained in prenatal massage and use safe techniques designed for pregnant women. We recommend massage after the first trimester and with your doctor\'s approval. We avoid certain pressure points and use gentle, nurturing techniques throughout.'
      },
      {
        question: 'What trimester can I get a pregnancy massage?',
        answer: 'We provide pregnancy massage for mothers in their second and third trimesters (after 12-13 weeks). First trimester massage requires special consideration. Always check with your healthcare provider before booking. Most doctors approve massage after the first trimester.'
      },
      {
        question: 'What position will I be in during pregnancy massage?',
        answer: 'You\'ll be comfortably positioned on your side with supportive cushions and pillows. This side-lying position is safe for you and baby while allowing the therapist to work on your back, hips, legs, and shoulders. We never have pregnant clients lie flat on their back or stomach.'
      },
      {
        question: 'Can you provide pregnancy massage in Sayan or Penestanan villas?',
        answer: 'Absolutely! We bring all specialized pregnancy massage equipment including cushions to your villa anywhere in Ubud - Penestanan, Sayan Valley, Campuhan, or any surrounding area. We create a safe, comfortable spa environment in your own space.'
      },
      {
        question: 'Will pregnancy massage help with swollen feet and ankles?',
        answer: 'Yes! Prenatal massage helps reduce swelling (edema) in feet, ankles, and legs by improving circulation and lymphatic drainage. Many pregnant travelers in Ubud book massage to relieve travel-related swelling and pregnancy discomfort.'
      },
      {
        question: 'Can my partner join for a couples massage session?',
        answer: 'Yes! We can arrange simultaneous massage where you receive prenatal massage while your partner enjoys a standard massage treatment. It\'s a wonderful way for couples to relax together during your babymoon in Ubud. Contact us to arrange this special experience.'
      }
    ],
    relatedTreatments: [
      { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
      { name: 'Lymphatic Drainage Massage', slug: 'lymphatic-drainage-massage' },
      { name: 'Couples Wellness Ritual', slug: 'couples-wellness-ritual' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
