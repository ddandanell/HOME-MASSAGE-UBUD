import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Full Body Massage',
  slug: 'full-body-massage',
  keyword: 'full body massage',
  
  metaTitle: 'Full Body Massage Ubud | Complete Head-to-Toe Treatment | Villa Service END',
  metaDescription: 'Enjoy comprehensive full body massage in your Ubud villa. Expert therapists deliver complete head-to-toe relaxation. Premium oils, certified staff. Book WhatsApp now. END',
  
  h1Title: 'Full Body Massage – Complete Relaxation in Ubud',
  heroSubtitle: 'Experience complete head-to-toe relaxation with our professional full body massage service. Our skilled therapists address every muscle group, delivering comprehensive treatment that leaves you feeling renewed and rejuvenated.',
  heroLayout: 'price-badge',
  heroBadgeText: 'Complete Body Treatment',
  
  introduction: [
    'Discover the ultimate in relaxation with our full body massage service, delivered directly to your Ubud accommodation. A full body massage addresses all major muscle groups from head to toe, providing comprehensive relief from tension, stress, and fatigue. Unlike targeted treatments, this complete approach ensures no area is neglected, resulting in total body wellness.',
    'Our full body massage combines various techniques tailored to your needs. The session typically begins with your back and shoulders, progressing systematically to cover arms, hands, legs, feet, neck, scalp, and face. Throughout the treatment, your therapist maintains a rhythmic flow that promotes deep relaxation while addressing specific areas of tension.',
    'The benefits of full body massage extend far beyond the treatment room. Regular sessions improve circulation, boost immune function, enhance flexibility, and promote better sleep patterns. Many of our clients in Ubud report feeling the positive effects for days after their treatment, making it an essential part of their wellness routine during their Bali stay.',
    'Our certified therapists bring extensive experience in delivering full body massage treatments. They arrive at your villa with professional massage tables, premium organic oils, fresh linens, and all necessary equipment. Sessions are available from 8 AM to 10 PM daily, with same-day booking often available through our responsive WhatsApp service.'
  ],
  
  whyChooseAngle: 'certified-staff',
  whyChoosePoints: [
    'Certified therapists trained in comprehensive full body techniques',
    'Systematic approach covering all major muscle groups',
    'Customizable pressure from gentle to firm throughout treatment',
    'Premium organic massage oils suitable for all skin types',
    'Flexible duration options to fit your schedule',
    'Available daily with same-day booking through WhatsApp'
  ],
  whyChooseTestimonial: {
    text: 'After hiking Mount Batur, the full body massage was exactly what I needed. The therapist worked through every sore muscle from head to toe. I felt like a new person afterward!',
    author: 'David R., Canada',
    rating: 5
  },
  
  pricingLayout: 'badges',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 240,000',
      priceIDR: 'Rp 240,000',
      description: 'Essential full body treatment covering all major areas efficiently'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 360,000',
      priceIDR: 'Rp 360,000',
      description: 'Thorough full body massage with extra attention to problem zones',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 480,000',
      priceIDR: 'Rp 480,000',
      description: 'Luxurious extended session for ultimate full body relaxation'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 760,000'
  },
  addOns: [
    { name: 'Extended Foot Focus', price: 'Rp 75,000' },
    { name: 'Back Intensive Add-on', price: 'Rp 100,000' },
    { name: 'Facial Massage', price: 'Rp 80,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Traditional Balinese Massage',
      description: 'Ancient techniques providing full body wellness through pressure points and flowing strokes.',
      linkText: 'Explore Balinese massage',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Deep Tissue Massage',
      description: 'Intensive full body work targeting chronic tension in deeper muscle layers.',
      linkText: 'Learn about deep tissue',
      slug: 'deep-tissue-massage'
    },
    {
      name: 'Aromatherapy Massage',
      description: 'Full body treatment enhanced with therapeutic essential oils for complete sensory experience.',
      linkText: 'Discover aromatherapy',
      slug: 'aromatherapy-massage'
    },
    {
      name: 'Thai Massage',
      description: 'Active full body therapy combining stretching, pressure work, and yoga-like positions.',
      linkText: 'Try Thai massage',
      slug: 'thai-massage'
    },
    {
      name: 'Post-Hike Recovery Massage',
      description: 'Specialized full body treatment designed for tired muscles after Bali adventures.',
      linkText: 'Book recovery massage',
      slug: 'post-hike-recovery-massage'
    },
    {
      name: 'Yoga Stretch Massage',
      description: 'Full body stretching combined with massage for enhanced flexibility and relaxation.',
      linkText: 'Experience stretch massage',
      slug: 'yoga-stretch-massage'
    }
  ],
  
  howItWorksFormat: 'three-step',
  
  reviews: [
    {
      text: 'The full body massage was absolutely wonderful. My therapist took time with every area - even my feet and scalp which are often neglected. Two hours of pure bliss that left me feeling completely renewed.',
      author: 'Sandra Williams',
      location: 'Melbourne, Australia',
      rating: 5,
      type: 'family'
    },
    {
      text: 'After weeks of intensive work on my laptop, my entire body was tense. The full body massage systematically worked through every knot and tight spot. The therapist was thorough and skilled. Booking weekly now.',
      author: 'Kevin Ng',
      location: 'Singapore (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We both got 90-minute full body massages at our honeymoon villa. The therapists were perfectly synchronized, and we both emerged feeling incredibly relaxed. Such a wonderful shared experience.',
      author: 'Marie & François',
      location: 'Paris, France',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'As a frequent business traveler, I always book a full body massage when arriving in Bali. This service provides consistent quality every time. The comprehensive treatment resets my body after long flights.',
      author: 'Jonathan Park',
      location: 'Seoul, South Korea',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'My guests consistently rate the full body massage as exceptional value. The therapists are professional, punctual, and skilled. Ive had no complaints in three years of referring this service.',
      author: 'Wayan Sukerta',
      location: 'Villa Owner, Penestanan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'horizontal',
  trustPoints: [
    'Complete hygiene protocols',
    'Certified massage therapists',
    'Organic premium oils',
    '100+ professional team',
    'Background-verified staff',
    'Confidential service'
  ],
  
  faqs: [
    {
      question: 'What does a full body massage include?',
      answer: 'Our full body massage covers all major muscle groups including back, shoulders, neck, arms, hands, legs, feet, scalp, and face. The therapist works systematically through each area, ensuring comprehensive coverage. You can request more focus on specific areas or request any area be skipped based on your preferences.'
    },
    {
      question: 'How long should I book for a full body massage?',
      answer: 'For a thorough full body massage, we recommend 90 minutes minimum. This allows adequate time for each area without rushing. The 60-minute option covers all areas but moves more quickly, while the 120-minute session provides luxurious, unhurried attention to every muscle group.'
    },
    {
      question: 'Is a full body massage appropriate after a long flight to Bali?',
      answer: 'Absolutely! A full body massage is ideal for post-flight recovery. It helps combat jet lag, reduces swelling from sitting, and relieves the tension accumulated during travel. We recommend booking 2-3 hours after arrival to allow time to settle in first.'
    },
    {
      question: 'Can I choose which areas receive more attention during full body massage?',
      answer: 'Yes, while we cover your entire body, you can absolutely request extra focus on specific areas. Just communicate your preferences when booking or tell your therapist before the session. Many clients ask for additional time on back, shoulders, or feet.'
    },
    {
      question: 'What should I wear during a full body massage?',
      answer: 'Most clients prefer to be undressed with proper draping for privacy - only the area being worked on is exposed. However, you can wear whatever makes you comfortable. Sports wear or underwear is perfectly fine. Your comfort and relaxation are our priorities.'
    },
    {
      question: 'Do you offer full body massage for couples side by side?',
      answer: 'Yes! Couples full body massage is one of our most popular services. Two therapists work simultaneously, delivering synchronized treatments. Its perfect for sharing a relaxing experience together. We bring two massage tables and all equipment needed.'
    },
    {
      question: 'How is full body massage different from targeted treatments?',
      answer: 'Full body massage provides comprehensive care to all muscle groups in one session, promoting overall wellness and relaxation. Targeted treatments like deep tissue focus intensively on specific problem areas. Full body massage is ideal for general maintenance and complete relaxation.'
    },
    {
      question: 'Can full body massage help with my back pain?',
      answer: 'Full body massage can certainly help with back pain as part of the overall treatment. However, if back pain is your primary concern, consider our deep tissue massage or request your therapist dedicate extra time to your back within the full body session.'
    }
  ],
  
  aboutAngle: 'clients-per-year',
  aboutContent: 'Home Massage Ubud delivers over 10,000 professional massage sessions annually, with full body massage being among our most requested treatments. Our experience serving travelers from around the world has refined our approach to comprehensive bodywork. We understand the specific needs of visitors to Bali - from post-flight recovery to adventure activity relief - and tailor every full body massage accordingly.',
  
  relatedServices: [
    { name: 'Body Massage', slug: 'body-massage' },
    { name: 'Relaxing Massage', slug: 'relaxing-massage' },
    { name: 'Therapeutic Massage', slug: 'therapeutic-massage' },
    { name: 'Professional Massage', slug: 'professional-massage' }
  ],
  
  benefits: [
    'Complete muscle relaxation head to toe',
    'Improved blood and lymphatic circulation',
    'Release of full-body tension patterns',
    'Enhanced flexibility and mobility',
    'Deep stress and anxiety relief',
    'Better quality sleep',
    'Boosted immune system response',
    'Overall sense of wellbeing and balance'
  ],
  
  idealFor: [
    'Travelers recovering from long flights',
    'Anyone seeking complete body relaxation',
    'Those with overall tension and stress',
    'Visitors wanting comprehensive wellness',
    'People who cannot decide on one focus area',
    'Regular wellness maintenance seekers'
  ]
};

export default function FullBodyMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
