import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import thaiImage from '@/assets/Thai-Massage_1757317131192.jpg';

export default function ThaiMassage() {
  const treatment = {
    name: 'Thai Massage',
    slug: 'thai-massage',
    h1Title: 'Thai Massage in Ubud – Villa Spa Delivered',
    metaTitle: 'Thai Massage Ubud | Traditional Stretching Therapy',
    metaDescription: 'Thai massage Ubud with ancient stretching & acupressure to your villa. Boost flexibility & energy flow. From 300k IDR. Expert therapists 7am-10pm daily.',
    heroSubtitle: 'Ancient Thai healing art combining acupressure and assisted yoga stretches, delivered to your Ubud villa by trained therapists',
    duration: '60-120 minutes',
    priceFrom: 'Rp 280,000',
    priceFromIDR: 'Rp 280,000',
    image: thaiImage,
    description: 'Traditional Thai massage Ubud - ancient healing combining acupressure and assisted yoga stretches',
    longDescription: 'Experience the transformative power of traditional Thai massage in your Ubud villa. This ancient healing art, sometimes called "lazy yoga," combines acupressure, assisted yoga postures, and deep stretching techniques to improve flexibility, release tension, and activate your body\'s energy pathways. Performed on a comfortable floor mat with you fully clothed, Thai massage is perfect for those seeking increased mobility and energy flow. Our certified Thai massage therapists bring this centuries-old practice directly to your accommodation in Ubud.',
    benefits: [
      'Dramatically increased flexibility and range of motion',
      'Release of deep-seated muscle tension',
      'Improved joint mobility and function',
      'Enhanced energy flow through Sen lines (energy pathways)',
      'Better posture and body alignment',
      'Mental clarity and stress reduction',
      'Improved circulation and lymphatic drainage',
      'Balanced body, mind, and spirit'
    ],
    includes: [
      'Certified Thai massage therapist',
      'Traditional Thai massage mat and cushions',
      'Comfortable Thai massage attire (if needed)',
      'Stretching and flexibility guidance',
      'Energy line work (Sen therapy)',
      'Post-massage Thai herbal tea',
      'Therapist travel throughout Ubud area',
      'Complete setup and cleanup'
    ],
    idealFor: [
      'Yoga practitioners seeking deeper stretches',
      'Athletes and active travelers',
      'Those with limited flexibility or stiffness',
      'People experiencing energy blockages',
      'Guests wanting a more active massage experience',
      'Anyone seeking holistic body-mind balance'
    ],
    packages: [
      {
        duration: '60 Minutes',
        price: 'Rp 280,000',
        priceIDR: 'Rp 280,000',
        description: 'Traditional Thai massage focusing on major muscle groups and flexibility work'
      },
      {
        duration: '90 Minutes',
        price: 'Rp 400,000',
        priceIDR: 'Rp 400,000',
        description: 'Extended Thai massage with deeper stretches and comprehensive energy line work'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 520,000',
        priceIDR: 'Rp 520,000',
        description: 'Complete Thai healing session with herbal compress and extended therapeutic work'
      }
    ],
    faqs: [
      {
        question: 'What should I wear for Thai massage in Ubud?',
        answer: 'Wear comfortable, loose-fitting clothing like yoga pants and a t-shirt. Thai massage is performed fully clothed on a floor mat. We can provide traditional Thai massage attire if you prefer, just let us know when booking.'
      },
      {
        question: 'Is Thai massage painful or uncomfortable?',
        answer: 'Thai massage involves deep stretching which can feel intense, especially if you\'re not very flexible. However, it should never be painful. Your therapist will work within your comfort zone and adjust the intensity based on your flexibility level and feedback.'
      },
      {
        question: 'How is Thai massage different from oil massage?',
        answer: 'Thai massage is performed on a mat on the floor without oils, and you remain clothed. It uses compression, pulling, rocking, and assisted yoga stretches rather than rubbing and kneading. It\'s more active and focuses on energy lines rather than muscles alone.'
      },
      {
        question: 'Do you need a special room for Thai massage in my villa?',
        answer: 'We just need a flat, clean space with enough room for the mat - about 6 x 4 feet. This could be your bedroom floor, living room, or covered terrace. We bring the mat and all necessary equipment to your villa in Ubud.'
      },
      {
        question: 'Can Thai massage help with back pain in Ubud?',
        answer: 'Yes! Thai massage is excellent for back pain. The stretching and compression techniques help release muscle tension, improve spinal alignment, and increase flexibility. Many guests book Thai massage after hiking Ubud\'s trails for relief and recovery.'
      },
      {
        question: 'Do you offer Thai massage in all areas of Ubud?',
        answer: 'Absolutely! We provide Thai massage throughout Ubud centre, Penestanan, Sayan Valley, Campuhan, Tegallalang, Sanggingan, Lodtunduh, and all surrounding villages. We bring all equipment to your villa, hotel, or guesthouse.'
      }
    ],
    relatedTreatments: [
      { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' },
      { name: 'Traditional Balinese Massage', slug: 'traditional-balinese-massage' },
      { name: 'Yoga Stretch & Massage', slug: 'yoga-stretch-massage' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
