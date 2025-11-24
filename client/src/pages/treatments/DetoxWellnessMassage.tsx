import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import detoxImage from '@/assets/lymphatic-drainage-massage_1757317131192.jpg';

export default function DetoxWellnessMassage() {
  const treatment = {
    name: 'Detox & Wellness Massage',
    slug: 'detox-wellness-massage',
    h1Title: 'Detox & Wellness Massage in Ubud – Villa Spa Service',
    metaTitle: 'Detox & Wellness Massage Ubud | Cleansing Treatment',
    metaDescription: 'Book Detox & Wellness Massage in Ubud. Natural cleansing and rejuvenation delivered to your villa, 7 am–10 pm. ★★★★★ Holistic wellness',
    heroSubtitle: 'Comprehensive detoxification and wellness massage therapy in Ubud\'s premier wellness destination',
    duration: '90-120 minutes',
    priceFrom: 'Rp 440,000',
    priceFromIDR: 'Rp 440,000',
    image: detoxImage,
    description: 'Detox wellness massage Ubud - comprehensive cleansing treatment for body purification and renewal',
    longDescription: 'Embrace Ubud\'s renowned wellness culture with our Detox & Wellness Massage, designed to support your body\'s natural cleansing processes. This comprehensive treatment combines lymphatic drainage, deep tissue work, and energy balancing techniques to promote detoxification, boost immunity, and restore vitality. Perfect for guests on wellness retreats or seeking deeper healing, our certified therapists bring this transformative treatment to your villa in Ubud, allowing you to experience authentic Balinese wellness traditions in complete privacy.',
    benefits: [
      'Comprehensive full-body detoxification',
      'Enhanced lymphatic system function',
      'Improved immune system response',
      'Natural elimination of toxins and waste',
      'Increased energy and vitality',
      'Clearer skin and improved complexion',
      'Better digestion and metabolism',
      'Balanced mind, body, and spirit harmony'
    ],
    includes: [
      'Certified wellness and detox massage therapist',
      'Combination of lymphatic drainage and massage techniques',
      'Detoxifying essential oil blends',
      'Body brushing for circulation enhancement',
      'Portable massage table and organic linens',
      'Detox herbal tea and wellness consultation',
      'Hydration and nutrition guidance',
      'Therapist travel throughout Ubud area'
    ],
    idealFor: [
      'Guests on wellness retreats in Ubud',
      'Those seeking comprehensive detoxification',
      'People feeling sluggish or low energy',
      'Health-conscious travelers',
      'Anyone wanting to enhance overall wellness',
      'Participants in Ubud\'s healing and wellness programs'
    ],
    packages: [
      {
        duration: '90 Minutes',
        price: 'Rp 440,000',
        priceIDR: 'Rp 440,000',
        description: 'Comprehensive detox massage with lymphatic drainage and energy balancing'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 600,000',
        priceIDR: 'Rp 600,000',
        description: 'Extended wellness ritual with body scrub, detox massage, and aromatherapy'
      },
      {
        duration: '150 Minutes',
        price: 'Rp 760,000',
        priceIDR: 'Rp 760,000',
        description: 'Complete detox experience with body treatment, massage, and guided meditation'
      }
    ],
    faqs: [
      {
        question: 'How does detox massage support body cleansing?',
        answer: 'Detox massage stimulates the lymphatic system, which is responsible for removing waste and toxins from your body. The combination of massage techniques, body brushing, and specific pressure points helps mobilize toxins, improve circulation, and support your body\'s natural cleansing mechanisms.'
      },
      {
        question: 'What makes Ubud ideal for detox and wellness treatments?',
        answer: 'Ubud is Bali\'s premier wellness destination, known for its healing energy, clean air, healthy food culture, and spiritual atmosphere. The combination of our detox massage with Ubud\'s natural healing environment creates optimal conditions for deep cleansing and renewal.'
      },
      {
        question: 'Should I prepare anything before a detox massage?',
        answer: 'Yes! Drink plenty of water before your session and avoid heavy meals 2 hours prior. After the massage, continue hydrating well and eat light, healthy meals to support the detoxification process. Your therapist will provide personalized guidance.'
      },
      {
        question: 'Can I combine detox massage with other wellness activities in Ubud?',
        answer: 'Absolutely! Detox massage pairs wonderfully with yoga, meditation, healthy eating, and other wellness activities. Many guests combine it with Ubud\'s wellness retreats, healing centers, and healthy restaurants for a comprehensive cleansing experience.'
      },
      {
        question: 'Do you serve wellness retreat centers in Ubud?',
        answer: 'Yes! We work with many wellness retreat centers, healing sanctuaries, and eco-resorts throughout Ubud including Penestanan, Sayan Valley, Sanggingan, and surrounding areas. We provide services for individual retreat participants at their accommodation.'
      },
      {
        question: 'How often should I get detox massage for best results?',
        answer: 'For deep cleansing, we recommend 2-3 sessions per week during your Ubud stay, or weekly for maintenance. Your therapist will assess your needs and create a personalized detox protocol. Many guests book a series during their wellness retreat in Ubud.'
      }
    ],
    relatedTreatments: [
      { name: 'Lymphatic Drainage Massage', slug: 'lymphatic-drainage-massage' },
      { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
      { name: 'Traditional Balinese Massage', slug: 'traditional-balinese-massage' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
