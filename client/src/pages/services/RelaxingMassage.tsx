import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Relaxing Massage',
  slug: 'relaxing-massage',
  keyword: 'relaxing massage',
  
  metaTitle: 'Relaxing Massage Ubud | Stress Relief Villa Service | Book Now END',
  metaDescription: 'Unwind with a deeply relaxing massage in your Ubud villa. Gentle techniques, calming aromatherapy, peaceful atmosphere. Professional stress relief. WhatsApp booking. END',
  
  h1Title: 'Relaxing Massage – Ultimate Stress Relief in Ubud',
  heroSubtitle: 'Let go of all tension and stress with our signature relaxing massage service. Gentle, flowing techniques combined with calming aromatherapy create the perfect environment for complete mental and physical unwinding in your private villa.',
  heroLayout: 'image-left',
  heroBadgeText: 'Pure Relaxation',
  
  introduction: [
    'In the midst of Ubud lush green landscapes, there is no better way to embrace tranquility than with a deeply relaxing massage delivered to your accommodation. Our relaxing massage service focuses exclusively on stress relief and mental calm, using gentle techniques that soothe rather than stimulate. This is the ideal choice when your primary goal is complete, peaceful unwinding.',
    'Unlike therapeutic massages that target specific issues, our relaxing massage prioritizes overall calm and serenity. The therapist uses long, flowing strokes with light to medium pressure, creating a rhythmic experience that naturally reduces cortisol levels and activates your relaxation response. Many clients find themselves drifting into a meditative state during the treatment.',
    'The relaxing massage experience is enhanced by our careful attention to sensory details. We select calming essential oils like lavender, chamomile, and ylang-ylang that promote relaxation. Soft, ambient music creates a peaceful soundscape. The overall experience is designed to quiet your mind while your body releases accumulated tension.',
    'Our certified therapists are specifically trained in relaxation techniques and understand the difference between therapeutic work and pure relaxation. They communicate in English and Indonesian to ensure your complete comfort. Available from 8 AM to 10 PM daily, with same-day booking through WhatsApp, achieving peace has never been more accessible.'
  ],
  
  whyChooseAngle: 'support-24-7',
  whyChoosePoints: [
    'Techniques specifically designed for deep relaxation',
    'Calming lavender and chamomile aromatherapy included',
    'Gentle pressure perfect for stress relief',
    'Peaceful atmosphere created in your private space',
    'Therapists trained in relaxation modalities',
    'Quick WhatsApp response for easy booking'
  ],
  whyChooseTestimonial: {
    text: 'After a stressful work period, I needed pure relaxation. This massage was exactly that - no deep pressure or pain, just blissful, flowing movements that melted my stress away. I fell asleep halfway through and woke up feeling renewed.',
    author: 'Catherine L., Singapore',
    rating: 5
  },
  
  pricingLayout: 'cards',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 240,000',
      priceIDR: 'Rp 240,000',
      description: 'Essential relaxation session to melt away daily stress'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 360,000',
      priceIDR: 'Rp 360,000',
      description: 'Extended relaxation with scalp and facial massage',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 480,000',
      priceIDR: 'Rp 480,000',
      description: 'Ultimate relaxation journey with hot towels and extended aromatherapy'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 720,000'
  },
  addOns: [
    { name: 'Sleep Enhancement Oils', price: 'Rp 50,000' },
    { name: 'Guided Meditation', price: 'Rp 75,000' },
    { name: 'Warm Eye Pillow', price: 'Rp 25,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Aromatherapy Massage',
      description: 'Essential oils enhance the relaxation experience with therapeutic scents.',
      linkText: 'Enhance with aromatherapy',
      slug: 'aromatherapy-massage'
    },
    {
      name: 'Traditional Balinese Massage',
      description: 'Gentle traditional techniques perfect for those seeking cultural relaxation.',
      linkText: 'Try Balinese relaxation',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Spa Massage',
      description: 'Full spa atmosphere elevates relaxation to a luxurious experience.',
      linkText: 'Upgrade to spa experience',
      slug: 'spa-massage'
    },
    {
      name: 'Hot Stone Massage',
      description: 'Warm stones add deep relaxation through gentle heat therapy.',
      linkText: 'Add hot stone warmth',
      slug: 'hot-stone-massage'
    },
    {
      name: 'Full Body Massage',
      description: 'Complete coverage ensures no area holds remaining tension.',
      linkText: 'Choose full body treatment',
      slug: 'full-body-massage'
    },
    {
      name: 'Wellness Massage',
      description: 'Holistic relaxation approach addressing overall wellbeing.',
      linkText: 'Explore wellness options',
      slug: 'wellness-massage'
    }
  ],
  
  howItWorksFormat: 'four-step',
  
  reviews: [
    {
      text: 'Traveling with young children is exhausting. This relaxing massage was exactly what I needed - no intense pressure, just pure relaxation. The therapist created such a calm atmosphere. I felt like a new person afterward.',
      author: 'Michelle Cooper',
      location: 'Sydney, Australia',
      rating: 5,
      type: 'family'
    },
    {
      text: 'Working online can be mentally draining. I book relaxing massages weekly to decompress. The gentle techniques and lavender aromatherapy help me sleep better and stay balanced. Essential for digital nomad life.',
      author: 'Emma Johnson',
      location: 'Canada (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We booked couples relaxing massage after a busy day of sightseeing. It was the perfect way to wind down together. Neither of us wanted deep pressure - just peaceful relaxation. Exactly what was delivered.',
      author: 'Yuki & Ken',
      location: 'Tokyo, Japan',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Many hotel guests specifically request gentle, relaxing massage rather than therapeutic work. This service perfectly meets that need. Professional, punctual, and consistently relaxing results every time.',
      author: 'Sarah Chen',
      location: 'Hotel Concierge, Ubud',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'I offer relaxing massage as a complimentary welcome amenity for villa guests. The feedback is always positive - guests love the gentle approach and calming oils. Sets the perfect tone for their stay.',
      author: 'Ketut Wardana',
      location: 'Villa Owner, Penestanan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'horizontal',
  trustPoints: [
    'Calming hygiene standards',
    'Relaxation-trained therapists',
    'Premium calming oils',
    'Peaceful atmosphere experts',
    'Verified gentle professionals',
    'Quiet, discrete service'
  ],
  
  faqs: [
    {
      question: 'How is relaxing massage different from deep tissue?',
      answer: 'Relaxing massage uses light to medium pressure with slow, flowing strokes designed to calm the nervous system. Deep tissue uses firm pressure to reach deeper muscle layers and address specific tension. If you want to melt stress away without intense work, relaxing massage is ideal. If you have chronic muscle pain, consider deep tissue.'
    },
    {
      question: 'Is it okay to fall asleep during a relaxing massage?',
      answer: 'Absolutely! Falling asleep is a sign that your body has entered deep relaxation mode - it is a compliment to the therapist. Many clients drift off during relaxing massage, and some fall fully asleep. The therapist continues working gently and will wake you softly at the end.'
    },
    {
      question: 'What aromatherapy oils are best for relaxation?',
      answer: 'We primarily use lavender (calming, sleep-promoting), chamomile (soothing, anxiety-reducing), and ylang-ylang (stress-relieving, mood-enhancing) for relaxing massage. You can also request bergamot, sandalwood, or vanilla if you prefer different calming scents.'
    },
    {
      question: 'Can relaxing massage help with anxiety?',
      answer: 'Yes, relaxing massage is excellent for anxiety relief. The gentle touch, rhythmic strokes, and calming aromatherapy activate your parasympathetic nervous system, reducing cortisol and promoting calm. Many clients report significant anxiety reduction during and after sessions.'
    },
    {
      question: 'What time of day is best for relaxing massage?',
      answer: 'Late afternoon or evening sessions are popular for relaxing massage as they prepare you for restful sleep. However, morning sessions can set a calm tone for your entire day. The best time is whenever you feel you need relaxation most - we accommodate 8 AM to 10 PM.'
    },
    {
      question: 'Should I book relaxing massage after a long flight?',
      answer: 'Relaxing massage is excellent post-flight. The gentle approach helps combat jet lag without overstimulating tired muscles. The calming aromatherapy and peaceful experience help reset your system. We recommend booking 2-3 hours after arrival for optimal benefits.'
    },
    {
      question: 'Is relaxing massage suitable for people who do not like deep pressure?',
      answer: 'Perfect for pressure-sensitive individuals! Relaxing massage is specifically designed for those who prefer gentle touch. If you have found other massages too intense, this is your ideal choice. You remain comfortable throughout while still receiving genuine therapeutic benefits.'
    },
    {
      question: 'Can couples both get relaxing massage together?',
      answer: 'Yes! Couples relaxing massage is wonderful for shared peaceful experiences. Two therapists work simultaneously, both using gentle, flowing techniques. Its perfect for couples who want to unwind together without the intensity of therapeutic work.'
    }
  ],
  
  aboutAngle: 'clients-per-year',
  aboutContent: 'Home Massage Ubud serves thousands of clients annually who specifically seek relaxation over therapeutic intensity. We understand that not every massage client wants deep pressure - many simply need peaceful unwinding. Our relaxation specialists are trained to create the perfect calm atmosphere and deliver genuinely soothing treatments that guests remember as highlights of their Bali experience.',
  
  relatedServices: [
    { name: 'Spa Massage', slug: 'spa-massage' },
    { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
    { name: 'Full Body Massage', slug: 'full-body-massage' },
    { name: 'Wellness Massage', slug: 'wellness-massage' }
  ],
  
  benefits: [
    'Significant stress and anxiety reduction',
    'Improved sleep quality and duration',
    'Lowered blood pressure and heart rate',
    'Reduced muscle tension gently',
    'Mental clarity and calmness',
    'Emotional balance and peace',
    'Nervous system regulation',
    'Overall sense of wellbeing'
  ],
  
  idealFor: [
    'Stress-relief seekers',
    'Those sensitive to deep pressure',
    'Anxiety and tension sufferers',
    'People who want to sleep better',
    'Anyone needing mental quiet',
    'First-time massage clients preferring gentle touch'
  ]
};

export default function RelaxingMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
