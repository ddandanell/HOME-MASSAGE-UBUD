import React from 'react';
import TreatmentPageTemplate from '@/components/TreatmentPageTemplate';
import couplesImage from '@/assets/Four-Hands-Massage_1757317131192.jpg';

export default function CouplesWellnessRitual() {
  const treatment = {
    name: 'Couples Wellness Ritual',
    slug: 'couples-wellness-ritual',
    h1Title: 'Couples Wellness Ritual in Ubud – Romantic Villa Spa',
    metaTitle: 'Couples Massage Ubud | Romantic Wellness Ritual',
    metaDescription: 'Couples massage Ubud with romantic spa ritual to your villa. Perfect for honeymooners. Synchronized treatment from 860k IDR. Book romantic experience 7am-10pm.',
    heroSubtitle: 'Romantic synchronized massage experience for couples, delivered to your private villa in Ubud paradise',
    duration: '90-150 minutes',
    priceFrom: 'Rp 620,000',
    priceFromIDR: 'Rp 620,000',
    image: couplesImage,
    description: 'Couples wellness ritual Ubud - romantic synchronized massage for two in your private villa',
    longDescription: 'Create unforgettable memories with our Couples Wellness Ritual in your Ubud villa. This romantic spa experience brings two certified therapists to provide synchronized massage treatments for you and your partner, creating harmony and deep connection. Perfect for honeymooners, anniversaries, or romantic getaways in Ubud, this luxurious treatment includes aromatherapy, essential oils, flower petals, and a serene ambiance. Experience authentic Balinese healing together in the privacy of your own villa, surrounded by Ubud\'s natural beauty.',
    benefits: [
      'Shared relaxation and bonding experience',
      'Enhanced connection and intimacy',
      'Simultaneous stress relief for both partners',
      'Romantic and memorable wellness moment',
      'Improved communication through shared healing',
      'Deep relaxation in private villa setting',
      'Celebration of your relationship',
      'Authentic Balinese spa experience together'
    ],
    includes: [
      'Two certified massage therapists',
      'Synchronized couples massage treatment',
      'Premium aromatherapy and essential oils',
      'Fresh flower petal decoration',
      'Romantic ambiance setup with candles',
      'Fresh luxury linens for two',
      'Herbal tea and light refreshments for two',
      'Therapist travel and complete setup in your villa'
    ],
    idealFor: [
      'Honeymooners in Ubud',
      'Couples celebrating anniversaries',
      'Romantic getaway travelers',
      'Partners seeking shared wellness experience',
      'Babymoon couples (with pregnancy-safe options)',
      'Anyone wanting to deepen connection through healing'
    ],
    packages: [
      {
        duration: '90 Minutes',
        price: 'Rp 620,000',
        priceIDR: 'Rp 620,000',
        description: 'Synchronized couples massage with aromatherapy and romantic villa setup'
      },
      {
        duration: '120 Minutes',
        price: 'Rp 860,000',
        priceIDR: 'Rp 860,000',
        description: 'Extended romantic ritual with foot bath, body scrub, and couples massage'
      },
      {
        duration: '150 Minutes',
        price: 'Rp 1,100,000',
        priceIDR: 'Rp 1,100,000',
        description: 'Ultimate couples experience with full spa ritual, massage, and private relaxation time'
      }
    ],
    faqs: [
      {
        question: 'What\'s included in the Couples Wellness Ritual?',
        answer: 'We bring two therapists and complete spa setup to your villa including linens, aromatherapy oils, fresh flowers, candles, and all necessary supplies. You\'ll receive synchronized massage treatments in the same room, creating a romantic shared experience.'
      },
      {
        question: 'Is couples massage good for honeymooners in Ubud?',
        answer: 'Absolutely! Ubud is one of Bali\'s most romantic destinations, and couples massage is perfect for honeymooners. It creates intimate memories, promotes relaxation after travel, and celebrates your union in a beautiful, private villa setting. Highly recommended!'
      },
      {
        question: 'Can we customize our couples massage treatments?',
        answer: 'Yes! Each partner can choose their preferred massage style - one might want deep tissue while the other prefers traditional Balinese or aromatherapy. We accommodate individual preferences while maintaining the synchronized, romantic atmosphere of the couples experience.'
      },
      {
        question: 'Do you serve romantic villas in Sayan and Penestanan?',
        answer: 'Yes! We provide couples wellness rituals to luxury villas throughout Ubud including Sayan Valley (known for romantic jungle views), Penestanan, Campuhan Ridge, and all surrounding areas. We create spa experiences in your private villa paradise.'
      },
      {
        question: 'Can we add pregnancy massage for expecting couples?',
        answer: 'Absolutely! For babymoon couples, one partner can receive pregnancy-safe prenatal massage while the other enjoys a standard treatment. Our therapists are trained in safe pregnancy massage techniques. This is a popular choice for couples in Ubud.'
      },
      {
        question: 'What\'s the best time to book couples massage in Ubud?',
        answer: 'Sunset time (4-6pm) is incredibly romantic, especially if your villa has rice field or jungle views. Evening sessions (7-9pm) after dinner are also popular. We\'re flexible with timing from 7am-10pm to match your schedule and create the perfect romantic moment.'
      }
    ],
    relatedTreatments: [
      { name: 'Traditional Balinese Massage', slug: 'traditional-balinese-massage' },
      { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
      { name: 'Hot Stone Massage', slug: 'hot-stone-massage' }
    ]
  };

  return <TreatmentPageTemplate treatment={treatment} />;
}
