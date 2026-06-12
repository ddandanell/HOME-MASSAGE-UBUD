import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Wellness Massage',
  slug: 'wellness-massage',
  keyword: 'wellness massage',
  
  metaTitle: 'Wellness Massage Ubud | Holistic Mind-Body Treatment | Book Now END',
  metaDescription: 'Experience holistic wellness massage in Ubud supporting mind, body and spirit. Integrative approach combining multiple modalities. Villa delivery available. Book WhatsApp. END',
  
  h1Title: 'Wellness Massage – Holistic Mind-Body Care in Ubud',
  heroSubtitle: 'Nurture your complete wellbeing with our holistic wellness massage service. This integrative approach addresses not just muscle tension but your overall state of being - physical, mental, and emotional - creating balance and harmony throughout your system.',
  heroLayout: 'testimonial-hero',
  heroBadgeText: 'Holistic Wellness',
  heroTestimonial: {
    text: 'This was not just a massage - it was a complete wellness experience. The therapist addressed my physical tension while creating space for mental relaxation. I felt balanced in a way I had not experienced before.',
    author: 'Dr. Sarah L.',
    location: 'Boston, USA'
  },
  
  introduction: [
    'Wellness massage embraces the understanding that true health encompasses more than physical condition. While addressing muscle tension and body issues, wellness massage simultaneously supports mental relaxation, emotional release, and energetic balance. Our wellness massage service in Ubud brings this holistic approach directly to your accommodation.',
    'In the wellness-focused environment of Ubud, massage takes on deeper significance. This region attracts seekers of holistic health, and our wellness massage meets those expectations. The treatment integrates physical bodywork with mindfulness elements, breathwork guidance, and attention to energetic flow - creating a complete mind-body experience.',
    'Our wellness massage therapists understand the interconnection of physical, mental, and emotional states. They create treatment environments that support all levels of wellbeing: calming atmosphere, appropriate aromatherapy, conscious communication, and techniques that release both physical and emotional tension. The result is renewal that extends beyond muscle relief.',
    'Wellness massage especially benefits those feeling depleted, stressed, or disconnected from their bodies. The holistic approach helps restore balance and sense of self. Available throughout Ubud and Bali from 8 AM to 10 PM, wellness massage brings integrative care to your personal space. Contact us via WhatsApp to begin your wellness journey.'
  ],
  
  whyChooseAngle: 'years-experience',
  whyChoosePoints: [
    'Holistic approach addressing body, mind, and spirit',
    'Integration of multiple wellness modalities',
    'Mindfulness and breathwork elements included',
    'Attention to energetic and emotional release',
    'Restorative environment creation',
    'Therapists trained in integrative wellness'
  ],
  whyChooseTestimonial: {
    text: 'Coming from a high-stress job, I needed more than physical massage. Wellness massage provided exactly that - the therapist guided my breathing, released emotional tension I did not know I was holding, and I left feeling restored at every level.',
    author: 'Michael K., Singapore',
    rating: 5
  },
  
  pricingLayout: 'badges',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 380,000',
      priceIDR: 'Rp 380,000',
      description: 'Essential wellness massage balancing body and mind'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 450,000',
      priceIDR: 'Rp 450,000',
      description: 'Extended wellness session with comprehensive integrative approach',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 550,000',
      priceIDR: 'Rp 550,000',
      description: 'Complete wellness ritual including meditation and energy work'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 820,000'
  },
  addOns: [
    { name: 'Guided Meditation', price: 'Rp 75,000' },
    { name: 'Energy Balancing', price: 'Rp 120,000' },
    { name: 'Sound Healing Element', price: 'Rp 75,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Relaxing Massage',
      description: 'Peaceful relaxation supporting mental and physical calm.',
      linkText: 'Add pure relaxation',
      slug: 'relaxing-massage'
    },
    {
      name: 'Aromatherapy Massage',
      description: 'Essential oils enhance wellness through sensory healing.',
      linkText: 'Explore aromatherapy wellness',
      slug: 'aromatherapy-massage'
    },
    {
      name: 'Traditional Massage',
      description: 'Traditional Balinese wellness wisdom in every treatment.',
      linkText: 'Experience traditional wellness',
      slug: 'traditional-massage'
    },
    {
      name: 'Spa Massage',
      description: 'Complete spa wellness experience in your space.',
      linkText: 'Try spa wellness',
      slug: 'spa-massage'
    },
    {
      name: 'Detox Wellness Massage',
      description: 'Wellness-focused detoxification and renewal.',
      linkText: 'View detox wellness',
      slug: 'detox-wellness-massage'
    },
    {
      name: 'Therapeutic Massage',
      description: 'Therapeutic wellness addressing specific needs.',
      linkText: 'Add therapeutic focus',
      slug: 'therapeutic-massage'
    }
  ],
  
  howItWorksFormat: 'icon-row',
  howItWorksSteps: [
    { title: 'Set Intentions', description: 'Share your wellness goals and current state' },
    { title: 'Create Space', description: 'We prepare a calming, holistic environment' },
    { title: 'Integrative Treatment', description: 'Body, mind, and spirit addressed together' },
    { title: 'Balanced Closure', description: 'Gentle return to awareness with lasting calm' }
  ],
  
  reviews: [
    {
      text: 'Our whole family needed wellness support after a difficult year. The wellness massage approach addressed each of our needs differently - my stress, my husbands tension, even gentle treatment for our teenager. Holistic care for the whole family.',
      author: 'The Patterson Family',
      location: 'Vancouver, Canada',
      rating: 5,
      type: 'family'
    },
    {
      text: 'As a wellness blogger, I experience many treatments. This wellness massage in Ubud was authentically integrative - not just massage with candles, but genuine attention to energetic and emotional dimensions. The real thing.',
      author: 'Lucia Fernandez',
      location: 'Spain (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We came to Ubud for wellness and this massage embodied that perfectly. The therapist created a sacred space, guided our breathing, and helped us release more than physical tension. A couples wellness experience we will never forget.',
      author: 'Mark & Lisa',
      location: 'London, UK',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our wellness retreat partners with this service for guest treatments. Their wellness massage approach aligns with our holistic philosophy. Therapists understand integrative wellness principles and deliver authentic experiences.',
      author: 'Dr. Made Surya',
      location: 'Wellness Retreat Owner',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'Guests seeking genuine wellness experiences appreciate this service. The holistic approach differentiates it from standard massage. Therapists create meaningful wellness experiences that guests value.',
      author: 'Nyoman Kartika',
      location: 'Wellness Villa Owner',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'horizontal',
  trustPoints: [
    'Holistic training',
    'Integrative approach',
    'Mindful presence',
    'Quality products',
    'Professional care',
    'Complete privacy'
  ],
  
  faqs: [
    {
      question: 'What makes wellness massage different from regular massage?',
      answer: 'Wellness massage addresses your complete state of being - physical, mental, emotional, and energetic. Beyond muscle work, it incorporates mindfulness elements, breath awareness, intentional environment creation, and attention to emotional release. The goal is holistic balance, not just physical relaxation.'
    },
    {
      question: 'Is wellness massage appropriate for someone new to holistic health?',
      answer: 'Absolutely! Wellness massage is gentle introduction to integrative approaches. You dont need prior experience with holistic practices. The therapist guides the experience accessibly, incorporating elements at your comfort level. Many discover deeper wellness approaches through this entry point.'
    },
    {
      question: 'What are the mindfulness elements in wellness massage?',
      answer: 'Wellness massage may include guided breathing at the beginning, body awareness prompts during treatment, intentional silence allowing mental quiet, gentle transitions between areas, and grounded closure with return to awareness. These elements distinguish it from purely physical massage.'
    },
    {
      question: 'Can wellness massage help with stress and anxiety?',
      answer: 'Wellness massage is particularly effective for stress and anxiety. The holistic approach addresses both physical manifestations (muscle tension, shallow breathing) and mental-emotional dimensions (racing thoughts, emotional holding). Many clients report profound stress relief and lasting calm.'
    },
    {
      question: 'What happens during energy work in wellness massage?',
      answer: 'Energy work may include attention to chakra points, light touch or hands-off holding at energy centers, sensing and releasing blocked energy, and grounding techniques. This element is optional and can be emphasized or minimized based on your comfort and interest.'
    },
    {
      question: 'How should I prepare for wellness massage?',
      answer: 'Arrive mentally ready to receive holistic care. Consider what you hope to release or achieve. Avoid heavy meals 2 hours before. The therapist creates the environment, so simply be open to the experience. Communicate any preferences or boundaries beforehand.'
    },
    {
      question: 'Is wellness massage suitable during pregnancy?',
      answer: 'We offer specialized prenatal wellness massage for expecting mothers. The holistic elements are actually particularly beneficial during pregnancy when emotional support matters. Please inform us of pregnancy when booking for appropriate modifications.'
    },
    {
      question: 'How often should I receive wellness massage?',
      answer: 'For ongoing wellness maintenance, monthly sessions support balance. During stressful periods or wellness retreats, weekly sessions provide deeper benefits. Even a single session during your Bali visit can provide meaningful restoration and introduce you to holistic approaches.'
    }
  ],
  
  aboutAngle: 'trusted-partners',
  aboutContent: 'Home Massage Ubud wellness therapists embody the integrative health philosophy that makes Ubud a global wellness destination. Our team includes practitioners trained in multiple wellness modalities beyond massage, bringing authentic holistic perspectives to every session. We partner with wellness retreats, yoga centers, and healing practitioners throughout Ubud to deliver comprehensive wellness experiences.',
  
  relatedServices: [
    { name: 'Relaxing Massage', slug: 'relaxing-massage' },
    { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
    { name: 'Traditional Massage', slug: 'traditional-massage' },
    { name: 'Spa Massage', slug: 'spa-massage' }
  ],
  
  benefits: [
    'Holistic balance of body, mind, and spirit',
    'Deeper relaxation than physical massage alone',
    'Emotional release and mental clarity',
    'Reduced stress and anxiety',
    'Enhanced body awareness',
    'Energetic balance and flow',
    'Restored sense of wellbeing',
    'Introduction to integrative wellness'
  ],
  
  idealFor: [
    'Those seeking holistic health approaches',
    'Wellness retreat visitors',
    'Anyone experiencing stress or burnout',
    'Those feeling disconnected from their bodies',
    'Mindfulness and yoga practitioners',
    'Anyone wanting more than physical massage'
  ]
};

export default function WellnessMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
