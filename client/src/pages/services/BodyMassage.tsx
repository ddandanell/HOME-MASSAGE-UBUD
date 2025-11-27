import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Body Massage',
  slug: 'body-massage',
  keyword: 'body massage',
  
  metaTitle: 'Body Massage Ubud | Professional Full Treatment | Villa Delivery END',
  metaDescription: 'Complete body massage delivered to your Ubud villa. Professional therapists, premium oils, full coverage treatment. All areas covered expertly. Book WhatsApp today. END',
  
  h1Title: 'Body Massage – Professional Treatment in Ubud',
  heroSubtitle: 'Treat your entire body to expert care with our professional body massage service. Comprehensive treatment covering all major muscle groups, delivered by certified therapists in the comfort of your Ubud accommodation.',
  heroLayout: 'image-right',
  heroBadgeText: 'Full Body Care',
  
  introduction: [
    'Your body deserves complete attention, and our professional body massage service in Ubud delivers exactly that. Body massage focuses on providing thorough treatment to all major muscle groups, ensuring comprehensive care from shoulders to feet. Whether you carry tension in specific areas or need overall muscle maintenance, our body massage addresses your complete physical needs.',
    'Our body massage approach recognizes that the body functions as an interconnected system. Tension in one area often affects other regions, and true relief comes from comprehensive treatment. Our therapists work methodically through your entire body, identifying and addressing tension patterns while maintaining flowing transitions between areas.',
    'Each body massage session is customized to your individual needs. Before treatment begins, your therapist discusses any specific concerns, pressure preferences, and areas requiring extra attention. Throughout the session, they check in to ensure your complete comfort and satisfaction. This personalized approach ensures your body massage delivers exactly what you need.',
    'Our certified body massage therapists bring professional equipment to your villa including massage tables, premium organic oils, and fresh linens. They speak English and Indonesian fluently for clear communication. Available daily from 8 AM to 10 PM with convenient WhatsApp booking, professional body massage is accessible whenever you need it.'
  ],
  
  whyChooseAngle: 'trained-therapists',
  whyChoosePoints: [
    'Professional therapists with comprehensive body massage training',
    'Systematic approach ensuring all areas receive attention',
    'Premium organic massage oils for skin health',
    'Customizable pressure throughout the treatment',
    'Mobile service bringing everything to your location',
    'Flexible scheduling with same-day availability'
  ],
  whyChooseTestimonial: {
    text: 'The body massage was incredibly thorough. The therapist worked through every muscle group systematically. After two hours on a surfboard, it was exactly what my body needed. Professional and skilled service.',
    author: 'Jake M., California',
    rating: 5
  },
  
  pricingLayout: 'horizontal',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 280,000',
      priceIDR: 'Rp 280,000',
      description: 'Complete body massage covering all major muscle groups'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 400,000',
      priceIDR: 'Rp 400,000',
      description: 'Extended body treatment with additional focus on problem areas',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 520,000',
      priceIDR: 'Rp 520,000',
      description: 'Comprehensive body massage with hot stone or aromatherapy enhancement'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 760,000'
  },
  addOns: [
    { name: 'Extra Back Focus', price: 'Rp 75,000' },
    { name: 'Extended Leg Work', price: 'Rp 75,000' },
    { name: 'Scalp Treatment', price: 'Rp 50,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Full Body Massage',
      description: 'Complete head-to-toe treatment for ultimate body care coverage.',
      linkText: 'View full body option',
      slug: 'full-body-massage'
    },
    {
      name: 'Deep Tissue Massage',
      description: 'Intensive body work targeting deeper muscle layers and chronic tension.',
      linkText: 'Explore deep tissue',
      slug: 'deep-tissue-massage'
    },
    {
      name: 'Sports Massage',
      description: 'Athletic-focused body treatment for active individuals and recovery.',
      linkText: 'Try sports massage',
      slug: 'sports-massage'
    },
    {
      name: 'Traditional Balinese Massage',
      description: 'Complete body treatment using ancient Balinese healing techniques.',
      linkText: 'Experience Balinese tradition',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Body Therapy Massage',
      description: 'Therapeutic body work addressing specific physical concerns.',
      linkText: 'Learn about body therapy',
      slug: 'body-therapy-massage'
    },
    {
      name: 'Therapeutic Massage',
      description: 'Professional body treatment with therapeutic focus.',
      linkText: 'Discover therapeutic options',
      slug: 'therapeutic-massage'
    }
  ],
  
  howItWorksFormat: 'three-step',
  
  reviews: [
    {
      text: 'After a week of family activities, we all needed body massages. The therapists accommodated our whole group, each tailoring pressure to our preferences. Even the kids got gentle treatments. Great family experience.',
      author: 'The Martinez Family',
      location: 'Texas, USA',
      rating: 5,
      type: 'family'
    },
    {
      text: 'Working at a desk all day wrecks my body. Weekly body massages here keep me functioning. The therapists know exactly how to address desk-worker tension. Essential part of my remote work routine.',
      author: 'Thomas Berg',
      location: 'Sweden (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We got body massages after a long day exploring rice terraces. The comprehensive treatment addressed all our tired muscles. Side-by-side in our villa, it was the perfect end to a perfect day.',
      author: 'Raj & Meera',
      location: 'Mumbai, India',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our hotel guests frequently request body massage services. This provider delivers consistent quality with professional therapists who understand hospitality standards. Reliable partner for guest satisfaction.',
      author: 'I Nyoman Sudiana',
      location: 'Hotel Operations Manager',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'Body massage is the most requested service at my villas. This team delivers excellent treatments every time. The therapists are respectful of the property and professional with guests. Highly recommended.',
      author: 'Putu Eka',
      location: 'Villa Owner, Lodtunduh',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'badges',
  trustPoints: [
    'Hygiene Standards',
    'Certified Team',
    'Premium Products',
    '100+ Therapists',
    'Verified Staff',
    'Confidential Service'
  ],
  
  faqs: [
    {
      question: 'What areas does body massage cover?',
      answer: 'Our body massage covers all major muscle groups including back, shoulders, neck, arms, hands, legs, feet, and glutes. Depending on session length, we may also include scalp, face, and abdominal massage. You can request focus on specific areas or ask to skip certain regions.'
    },
    {
      question: 'How is body massage different from full body massage?',
      answer: 'The terms are often used interchangeably. Our body massage provides comprehensive coverage of all major muscle groups, which is essentially full body treatment. The focus is on muscle work throughout your body rather than specific targeted therapy or relaxation-focused approach.'
    },
    {
      question: 'What pressure is used during body massage?',
      answer: 'Body massage typically uses medium pressure as the baseline, but we customize to your preference. Whether you prefer light, relaxing touch or firmer, deeper work, communicate with your therapist. They can vary pressure across different body areas based on your needs.'
    },
    {
      question: 'Is body massage good for muscle recovery after activities?',
      answer: 'Absolutely! Body massage is excellent for recovery after hiking, surfing, cycling, or any physical activity. The comprehensive approach addresses all muscles involved in your activities. For intensive athletic recovery, consider our sports massage specialty.'
    },
    {
      question: 'How often should I get body massage?',
      answer: 'For general maintenance, monthly body massage is beneficial. If you are physically active or experiencing ongoing tension, bi-weekly sessions provide better results. During your Bali vacation, treating yourself to multiple sessions accelerates relaxation and recovery.'
    },
    {
      question: 'Can body massage help with posture-related issues?',
      answer: 'Yes, body massage can address muscle imbalances and tension patterns that affect posture. Our therapists identify tight areas that may be pulling your body out of alignment and work to release them. For chronic posture issues, consider adding therapeutic massage focus.'
    },
    {
      question: 'Do you offer body massage for groups traveling together?',
      answer: 'Yes! We accommodate groups with multiple therapists working simultaneously. Whether traveling with friends, family, or corporate teams, we can provide body massage for everyone in your party. Contact us via WhatsApp to discuss group arrangements and timing.'
    },
    {
      question: 'What should I do after body massage?',
      answer: 'After body massage, drink plenty of water to help flush released toxins. Avoid strenuous activity for a few hours to let your muscles fully relax. A warm bath can extend the benefits. Listen to your body and rest if you feel tired - this is normal after comprehensive treatment.'
    }
  ],
  
  aboutAngle: 'largest-team',
  aboutContent: 'Home Massage Ubud operates the largest professional body massage team in Bali with over 100 certified therapists. Our body massage expertise comes from years of serving diverse clients with varying physical needs. From athletes requiring recovery support to office workers with postural tension, our team has the experience to deliver effective body massage for any situation.',
  
  relatedServices: [
    { name: 'Full Body Massage', slug: 'full-body-massage' },
    { name: 'Professional Massage', slug: 'professional-massage' },
    { name: 'Therapeutic Massage', slug: 'therapeutic-massage' },
    { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' }
  ],
  
  benefits: [
    'Complete muscle tension relief',
    'Improved circulation throughout body',
    'Enhanced flexibility and mobility',
    'Faster recovery from physical activity',
    'Reduced physical stress and fatigue',
    'Better body awareness',
    'Overall physical rejuvenation',
    'Improved sleep quality'
  ],
  
  idealFor: [
    'Active travelers needing recovery',
    'Desk workers with full-body tension',
    'Anyone wanting comprehensive treatment',
    'Physical activity enthusiasts',
    'Those maintaining regular wellness routines',
    'Visitors seeking quality body care'
  ]
};

export default function BodyMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
