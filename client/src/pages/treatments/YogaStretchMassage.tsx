import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import yogaImage from '@/assets/Thai-Massage_1757317131192.jpg';

export default function YogaStretchMassage() {
  const treatment = {
    name: 'Yoga Stretch & Massage',
    slug: 'yoga-stretch-massage',
    h1Title: 'Yoga Stretch & Massage in Ubud – Villa Wellness Service',
    metaTitle: 'Yoga Massage Ubud | Stretch & Flexibility Therapy',
    metaDescription: 'Yoga massage Ubud combining assisted stretching & bodywork to your villa. Perfect for practitioners. Boost flexibility from 300k IDR. Book today 7am-10pm.',
    heroSubtitle: 'Specialized massage combining yoga stretching and therapeutic bodywork, perfect for Ubud\'s yoga community',
    duration: '60-90 minutes',
    priceFrom: 'Rp 320,000',
    priceFromIDR: 'Rp 320,000',
    image: yogaImage,
    description: 'Yoga stretch massage Ubud - combining therapeutic massage with assisted yoga stretches',
    longDescription: 'Designed specifically for Ubud\'s thriving yoga community, our Yoga Stretch & Massage service combines therapeutic massage techniques with assisted yoga stretches to enhance flexibility, release deep tension, and support your yoga practice. Whether you\'re attending yoga retreats, daily classes, or simply maintaining your personal practice in Ubud, this treatment helps deepen your flexibility, prevent injuries, and accelerate recovery. Our therapists, trained in both massage therapy and yoga principles, bring this specialized wellness service directly to your villa.',
    benefits: [
      'Enhanced flexibility and range of motion',
      'Deeper stretches than achieved alone',
      'Release of fascial restrictions and tension',
      'Improved yoga practice and posture alignment',
      'Prevention of yoga-related injuries',
      'Accelerated muscle recovery after intense practice',
      'Better mind-body connection and awareness',
      'Balanced energy flow through the body'
    ],
    includes: [
      'Therapist trained in yoga and massage therapy',
      'Therapeutic massage techniques',
      'Assisted yoga stretches and poses',
      'Fascial release work',
      'Flexibility assessment and guidance',
      'Yoga mat and comfortable positioning',
      'Post-session stretching recommendations',
      'Therapist travel throughout Ubud'
    ],
    idealFor: [
      'Yoga practitioners and instructors in Ubud',
      'Guests attending yoga retreats or workshops',
      'Those seeking enhanced flexibility',
      'People recovering from intense yoga sessions',
      'Practitioners wanting to deepen their practice',
      'Anyone combining wellness activities in Ubud'
    ],
    packages: [
      {
        duration: '60 Minutes',
        price: 'Rp 320,000',
        priceIDR: 'Rp 320,000',
        description: 'Yoga-focused massage with assisted stretches targeting key muscle groups'
      },
      {
        duration: '90 Minutes',
        price: 'Rp 480,000',
        priceIDR: 'Rp 480,000',
        description: 'Extended session with deep stretching, massage, and fascial release work'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 600,000',
        priceIDR: 'Rp 600,000',
        description: 'Complete yoga wellness package with bodywork, stretching, and meditation guidance'
      }
    ],
    faqs: [
      {
        question: 'How is Yoga Stretch & Massage different from Thai massage?',
        answer: 'While both involve stretching, Yoga Stretch & Massage is specifically designed for yoga practitioners and incorporates yoga-specific poses and principles. It\'s tailored to complement and enhance your yoga practice, whereas Thai massage follows traditional Thai healing lineages. Both are excellent!'
      },
      {
        question: 'Should I book before or after my yoga class in Ubud?',
        answer: 'Either works! Before yoga, it helps warm up muscles and increase flexibility for your practice. After yoga, it helps release any tension, deepen stretches, and accelerate recovery. Many guests book evening sessions after morning yoga classes at Ubud\'s studios.'
      },
      {
        question: 'Do I need to be flexible or experienced in yoga?',
        answer: 'Not at all! This treatment is suitable for all levels from beginners to advanced practitioners. Your therapist adjusts stretches to your current flexibility level and works within your comfort zone. It\'s actually great for beginners wanting to improve flexibility safely.'
      },
      {
        question: 'Can you help with yoga-related injuries or discomfort?',
        answer: 'Yes! Our therapists understand common yoga-related issues like tight hamstrings, hip flexors, shoulders, or lower back tension. We provide therapeutic work to address these areas, but for serious injuries, please consult a healthcare professional first.'
      },
      {
        question: 'Do you serve yoga retreat centers and studios in Ubud?',
        answer: 'Yes! We work with many yoga retreats, studios, and wellness centers throughout Ubud including Penestanan, Sayan, and Campuhan areas. We can provide services for groups, workshops, or individual retreat participants at their accommodation.'
      },
      {
        question: 'What should I wear for this treatment?',
        answer: 'Wear comfortable, stretchy clothing like yoga pants and a t-shirt - similar to what you\'d wear for yoga class. The treatment is performed on a mat, and you\'ll need to move through assisted stretches, so flexible clothing is important.'
      }
    ],
    relatedTreatments: [
      { name: 'Thai Massage', slug: 'thai-massage' },
      { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' },
      { name: 'Post-Hike Recovery Massage', slug: 'post-hike-recovery-massage' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
