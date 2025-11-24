import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import reflexologyImage from '@/assets/Balinese-Massage_1757317131191.jpg';

export default function FootReflexology() {
  const treatment = {
    name: 'Foot Reflexology',
    slug: 'foot-reflexology',
    h1Title: 'Foot Reflexology in Ubud – Jet-lag Recovery Villa Service',
    metaTitle: 'Foot Reflexology in Ubud | Jet-lag Recovery Massage',
    metaDescription: 'Book Foot Reflexology in Ubud. Perfect for jet-lag recovery, delivered to your villa or hotel, 7 am–10 pm. ★★★★★ Therapeutic pressure points',
    heroSubtitle: 'Therapeutic foot reflexology for jet-lag recovery and overall wellness, delivered to your Ubud villa',
    duration: '45-90 minutes',
    priceFrom: '$30',
    priceFromIDR: '250,000',
    image: reflexologyImage,
    description: 'Foot reflexology Ubud - therapeutic pressure point massage for jet-lag recovery and wellness',
    longDescription: 'Experience the healing power of foot reflexology in your Ubud villa. This ancient therapeutic practice applies targeted pressure to specific points on your feet that correspond to different organs and systems in your body. Perfect for jet-lag recovery, stress relief, and overall wellness, foot reflexology promotes healing, improves circulation, and restores balance. Our certified reflexology therapists bring this powerful treatment directly to your accommodation throughout Ubud, making it easy to recover from travel and enhance your wellbeing.',
    benefits: [
      'Effective jet-lag recovery and time zone adjustment',
      'Improved sleep quality and relaxation',
      'Enhanced circulation throughout the body',
      'Relief from headaches and migraines',
      'Reduced stress and anxiety',
      'Boosted immune system function',
      'Pain relief and tension release',
      'Improved energy levels and vitality'
    ],
    includes: [
      'Certified foot reflexology therapist',
      'Warm foot bath with essential oils',
      'Therapeutic foot and lower leg massage',
      'Pressure point activation',
      'Moisturizing foot treatment',
      'Relaxing herbal tea',
      'Therapist travel throughout Ubud',
      'Complete setup and cleanup'
    ],
    idealFor: [
      'Travelers recovering from long-haul flights',
      'Those experiencing jet-lag symptoms',
      'Guests seeking quick, effective stress relief',
      'People who spend long hours walking or standing',
      'Anyone wanting to boost overall wellness',
      'First-time massage recipients preferring gentle treatment'
    ],
    packages: [
      {
        duration: '45 Minutes',
        price: '$30',
        priceIDR: 'IDR 250,000',
        description: 'Focused foot reflexology session targeting key pressure points for wellness'
      },
      {
        duration: '60 Minutes',
        price: '$40',
        priceIDR: 'IDR 350,000',
        description: 'Extended reflexology with lower leg massage and hot towel treatment'
      },
      {
        duration: '90 Minutes',
        price: '$55',
        priceIDR: 'IDR 500,000',
        description: 'Complete wellness package with foot reflexology, head massage, and aromatherapy'
      }
    ],
    faqs: [
      {
        question: 'How does foot reflexology help with jet-lag?',
        answer: 'Foot reflexology stimulates specific points that correspond to organs and glands that regulate sleep, energy, and circadian rhythms. This helps your body adjust to new time zones faster, improves sleep quality, and restores natural energy patterns. Many travelers book reflexology upon arrival in Ubud.'
      },
      {
        question: 'Is foot reflexology painful?',
        answer: 'Reflexology uses firm pressure that can feel intense on sensitive points, but it should never be painful. Some areas may feel tender, which often indicates energy blockages or health imbalances. Your therapist will adjust pressure to your comfort level while maintaining therapeutic effectiveness.'
      },
      {
        question: 'How soon can I get foot reflexology after arriving in Ubud?',
        answer: 'You can book reflexology immediately upon arrival! Many guests schedule sessions for their first day in Ubud to help with jet-lag recovery. We recommend booking 24-48 hours in advance, but we often accommodate same-day requests based on therapist availability.'
      },
      {
        question: 'Can foot reflexology help with my specific health concerns?',
        answer: 'Reflexology may help with various conditions including headaches, digestive issues, sleep problems, stress, and circulation. However, it\'s not a substitute for medical treatment. Your therapist will focus on relevant reflex points while providing a relaxing, therapeutic experience.'
      },
      {
        question: 'Do you provide foot reflexology in all Ubud areas?',
        answer: 'Yes! We offer foot reflexology throughout Ubud centre, Penestanan, Sayan, Campuhan Ridge, Tegallalang, Lodtunduh, and all surrounding areas. We bring a portable foot bath and all necessary equipment to your villa, hotel, or guesthouse.'
      },
      {
        question: 'Can I combine foot reflexology with another massage treatment?',
        answer: 'Absolutely! Foot reflexology pairs wonderfully with full body massages, aromatherapy, or traditional Balinese massage. Many guests choose combination packages for a complete wellness experience. Contact us to create your custom treatment in Ubud.'
      }
    ],
    relatedTreatments: [
      { name: 'Traditional Balinese Massage', slug: 'traditional-balinese-massage' },
      { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
      { name: 'Thai Massage', slug: 'thai-massage' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
