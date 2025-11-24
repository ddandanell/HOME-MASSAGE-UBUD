import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import herbalImage from '@/assets/Balinese-Massage_1757317131191.jpg';

export default function HerbalBambooMassage() {
  const treatment = {
    name: 'Herbal & Bamboo Massage',
    slug: 'herbal-bamboo-massage',
    h1Title: 'Herbal & Bamboo Massage in Ubud – Traditional Villa Spa',
    metaTitle: 'Herbal & Bamboo Massage Ubud | Traditional Healing',
    metaDescription: 'Book Herbal & Bamboo Massage in Ubud. Traditional Balinese healing with bamboo and herbs delivered to your villa, 7 am–10 pm. ★★★★★',
    heroSubtitle: 'Ancient Balinese healing using warm herbal compresses and bamboo sticks, delivered to your Ubud villa',
    duration: '90-120 minutes',
    priceFrom: 'Rp 400,000',
    priceFromIDR: 'Rp 400,000',
    image: herbalImage,
    description: 'Herbal bamboo massage Ubud - traditional Balinese healing with warm herbal compresses and bamboo therapy',
    longDescription: 'Experience an authentic traditional Balinese healing ritual with our Herbal & Bamboo Massage. This unique treatment combines heated herbal compresses (boreh) filled with traditional Balinese healing herbs, and smooth bamboo sticks used for deep tissue work. The warmth of the herbal bundles penetrates muscles while releasing medicinal properties, and bamboo provides firm, even pressure that releases deep tension. This is authentic Balinese wellness tradition brought directly to your villa in Ubud.',
    benefits: [
      'Deep muscle tension release with bamboo therapy',
      'Medicinal benefits from traditional Balinese herbs',
      'Improved circulation through heat therapy',
      'Natural anti-inflammatory effects',
      'Relief from chronic pain and stiffness',
      'Enhanced skin health from herbal properties',
      'Authentic traditional Balinese healing experience',
      'Balanced energy and spiritual wellbeing'
    ],
    includes: [
      'Certified traditional Balinese healing therapist',
      'Warm herbal compresses (boreh) with traditional herbs',
      'Bamboo sticks for massage therapy',
      'Traditional Balinese massage techniques',
      'Premium massage oils with herbal infusions',
      'Portable massage table and traditional linens',
      'Post-treatment traditional herbal tea',
      'Therapist travel throughout Ubud'
    ],
    idealFor: [
      'Those seeking authentic Balinese healing traditions',
      'Guests interested in traditional medicine',
      'People with chronic muscle tension or pain',
      'Travelers wanting unique cultural wellness experience',
      'Anyone seeking deep tissue work with natural healing',
      'Wellness enthusiasts exploring Ubud\'s healing culture'
    ],
    packages: [
      {
        duration: '90 Minutes',
        price: 'Rp 400,000',
        priceIDR: 'Rp 400,000',
        description: 'Traditional herbal compress and bamboo massage focusing on tension areas'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 560,000',
        priceIDR: 'Rp 560,000',
        description: 'Extended ritual with body scrub, herbal compress, and bamboo deep tissue work'
      },
      {
        duration: '150 Minutes',
        price: 'Rp 720,000',
        priceIDR: 'Rp 720,000',
        description: 'Complete traditional healing ceremony with all elements and extended relaxation'
      }
    ],
    faqs: [
      {
        question: 'What herbs are used in the herbal compresses?',
        answer: 'Traditional Balinese herbal compresses contain a blend of healing herbs including ginger, turmeric, lemongrass, galangal, and frangipani. These herbs have anti-inflammatory, warming, and medicinal properties. They\'re heated and applied to release their healing benefits into your muscles.'
      },
      {
        question: 'How is bamboo used in the massage?',
        answer: 'Smooth bamboo sticks of various sizes are used like massage tools to apply firm, even pressure for deep tissue work. The bamboo can access areas that hands might miss and provides consistent pressure that releases deep muscle tension. It\'s both therapeutic and uniquely relaxing.'
      },
      {
        question: 'Is this treatment traditional to Bali and Ubud?',
        answer: 'Yes! Herbal compress therapy (boreh) is an ancient Balinese healing tradition passed down through generations. Ubud, as Bali\'s cultural and healing center, is the perfect place to experience authentic traditional treatments. Our therapists are trained in these time-honored techniques.'
      },
      {
        question: 'Can the herbal compress help with inflammation?',
        answer: 'Absolutely! Traditional Balinese herbs like turmeric and ginger have natural anti-inflammatory properties. Combined with heat therapy, the herbal compresses help reduce inflammation, ease joint pain, and promote healing. Many guests report significant relief from chronic inflammation.'
      },
      {
        question: 'Do you provide this treatment in all Ubud areas?',
        answer: 'Yes! We bring all traditional equipment including herbal compresses and bamboo sticks to your villa anywhere in Ubud - centre, Penestanan, Sayan, Campuhan, Tegallalang, and all surrounding villages. We need electricity to warm the herbal compresses.'
      },
      {
        question: 'Can I learn about the herbs and traditions during treatment?',
        answer: 'Absolutely! Our therapists are knowledgeable about Balinese healing traditions and happy to explain the herbs, their properties, and the cultural significance of these treatments. It\'s both a healing and educational experience about Ubud\'s wellness heritage.'
      }
    ],
    relatedTreatments: [
      { name: 'Traditional Balinese Massage', slug: 'traditional-balinese-massage' },
      { name: 'Hot Stone Massage', slug: 'hot-stone-massage' },
      { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
