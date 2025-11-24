import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import aromatherapyImage from '@/assets/Aromatherapy-Massage_1757317131192.jpg';

export default function AromatherapyMassage() {
  const treatment = {
    name: 'Aromatherapy Massage',
    slug: 'aromatherapy-massage',
    h1Title: 'Aromatherapy Massage in Ubud – Villa Spa Delivered',
    metaTitle: 'Aromatherapy Massage Ubud | Essential Oil Therapy',
    metaDescription: 'Aromatherapy massage Ubud with premium essential oils to your villa. Relaxing, healing treatment for mind & body. From 280k IDR. Licensed therapists 7am-10pm.',
    heroSubtitle: 'Relaxing aromatherapy massage with premium essential oils delivered to your villa in the heart of Ubud wellness area',
    duration: '60-120 minutes',
    priceFrom: 'Rp 280,000',
    priceFromIDR: 'Rp 280,000',
    image: aromatherapyImage,
    description: 'Relaxing aromatherapy massage Ubud - full-body treatment with premium essential oils at your villa',
    longDescription: 'Immerse yourself in the healing power of aromatherapy massage in Ubud. This sensory wellness experience combines therapeutic massage techniques with carefully selected essential oils to promote physical and emotional healing. Our certified therapists bring premium essential oils including lavender, frangipani, lemongrass, and Balinese botanicals directly to your villa, creating a spa sanctuary in your own space.',
    benefits: [
      'Deep stress relief and emotional balance',
      'Improved mood and mental clarity',
      'Enhanced sleep quality and relaxation',
      'Natural detoxification through skin absorption',
      'Reduced anxiety and nervous tension',
      'Boosted immune system function',
      'Relief from headaches and migraines',
      'Harmonized body, mind, and spirit'
    ],
    includes: [
      'Certified aromatherapy massage therapist',
      'Premium essential oil selection (lavender, frangipani, eucalyptus)',
      'Portable massage table and luxury linens',
      'Essential oil consultation to match your needs',
      'Aromatherapy diffuser session',
      'Post-massage calming tea',
      'Travel throughout Ubud and surroundings',
      'Professional setup and cleanup'
    ],
    idealFor: [
      'Travelers seeking deep relaxation and stress relief',
      'Guests dealing with jet lag or travel fatigue',
      'Those experiencing anxiety or sleep difficulties',
      'Honeymooners and couples seeking romantic wellness',
      'Anyone wanting to enhance their Ubud wellness retreat',
      'People sensitive to strong pressure who prefer gentle touch'
    ],
    packages: [
      {
        duration: '60 Minutes',
        price: 'Rp 280,000',
        priceIDR: 'Rp 280,000',
        description: 'Full body aromatherapy massage with essential oil selection tailored to your needs'
      },
      {
        duration: '90 Minutes',
        price: 'Rp 400,000',
        priceIDR: 'Rp 400,000',
        description: 'Extended session with scalp massage and hot towel aromatherapy treatment'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 520,000',
        priceIDR: 'Rp 520,000',
        description: 'Luxury aromatherapy ritual with body scrub, massage, and extended relaxation time'
      }
    ],
    faqs: [
      {
        question: 'What essential oils do you use for aromatherapy massage in Ubud?',
        answer: 'We offer a curated selection of premium essential oils including lavender (relaxation), frangipani (spiritual balance), eucalyptus (respiratory relief), lemongrass (energy), ylang-ylang (stress relief), and traditional Balinese blends. Your therapist will help you choose based on your wellness goals.'
      },
      {
        question: 'Can aromatherapy massage help with jet lag?',
        answer: 'Yes! Aromatherapy massage is excellent for jet lag recovery. Essential oils like lavender and chamomile help regulate sleep patterns, while the massage improves circulation and reduces travel fatigue. Many visitors to Ubud book this treatment upon arrival.'
      },
      {
        question: 'Is aromatherapy massage suitable for sensitive skin?',
        answer: 'We use high-quality, natural essential oils diluted in carrier oils. However, if you have sensitive skin or allergies, please inform us when booking. We can adjust the oil selection or provide hypoallergenic alternatives to ensure a safe, comfortable experience.'
      },
      {
        question: 'Do you provide couples aromatherapy massage in Ubud villas?',
        answer: 'Absolutely! Couples aromatherapy massage is very popular in Ubud. We bring two therapists and all equipment to your villa, creating a romantic spa experience. Perfect for honeymooners or couples celebrating in Ubud\'s wellness paradise.'
      },
      {
        question: 'Which areas of Ubud do you serve for aromatherapy massage?',
        answer: 'We provide aromatherapy massage throughout Ubud centre, Penestanan, Sayan Valley, Campuhan Ridge, Tegallalang, Sanggingan, Lodtunduh, Monkey Forest area, and all surrounding villages. Mobile spa service delivered directly to your villa or hotel.'
      },
      {
        question: 'Can I choose different essential oils during the session?',
        answer: 'Yes! Your therapist will consult with you before the session to understand your preferences and wellness goals. You can choose a single essential oil or create a custom blend. We\'re flexible and focused on your personalized healing experience.'
      }
    ],
    relatedTreatments: [
      { name: 'Traditional Balinese Massage', slug: 'traditional-balinese-massage' },
      { name: 'Lymphatic Drainage Massage', slug: 'lymphatic-drainage-massage' },
      { name: 'Couples Wellness Ritual', slug: 'couples-wellness-ritual' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
