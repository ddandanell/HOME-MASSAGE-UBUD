import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Reflexology',
  slug: 'reflexology',
  keyword: 'reflexology',
  
  metaTitle: 'Reflexology Ubud | Pressure Point Therapy | Villa Service Bali END',
  metaDescription: 'Professional reflexology in your Ubud villa. Expert pressure point therapy connecting feet to whole-body wellness. Certified therapists, proven techniques. Book now. END',
  
  h1Title: 'Reflexology – Pressure Point Wellness in Ubud',
  heroSubtitle: 'Unlock whole-body wellness through the ancient art of reflexology. Our certified practitioners apply precise pressure to foot zones that connect to organs and systems throughout your body, delivered in the comfort of your villa.',
  heroLayout: 'testimonial-hero',
  heroBadgeText: 'Holistic Healing',
  heroTestimonial: {
    text: 'I have tried reflexology worldwide, and this service in Ubud was exceptional. The therapist clearly understood the meridian system and addressed my specific health concerns through foot pressure points.',
    author: 'Dr. Patricia M.',
    location: 'California, USA'
  },
  
  introduction: [
    'Reflexology is an ancient healing practice that has gained modern recognition for its therapeutic benefits. Based on the principle that specific zones on the feet correspond to organs, glands, and systems throughout the body, reflexology uses targeted pressure to promote healing and balance. Our Ubud reflexology service brings this powerful therapy directly to your accommodation.',
    'Unlike standard foot massage, reflexology follows a precise map of the feet where each zone connects to a specific body part. Our certified reflexologists are trained in these connections and apply calculated pressure to stimulate healing responses. Whether you seek relief from headaches, digestive issues, or general malaise, reflexology addresses concerns through the feet.',
    'The reflexology experience begins with a consultation where your practitioner learns about your health goals and any specific concerns. Treatment then proceeds systematically through all foot zones, with particular attention to areas corresponding to your needs. Many clients report immediate sensations in related body parts as pressure is applied to reflexology points.',
    'Our reflexology practitioners have undergone specialized training beyond standard massage certification. They understand the subtle techniques required for effective pressure point work. Sessions are available from 8 AM to 10 PM daily throughout Ubud and Bali. Contact us via WhatsApp to discuss your wellness goals and book your reflexology appointment.'
  ],
  
  whyChooseAngle: 'certified-staff',
  whyChoosePoints: [
    'Certified reflexology practitioners with specialized training',
    'Understanding of foot zone connections to body systems',
    'Personalized treatment based on your health goals',
    'Systematic approach covering all reflexology zones',
    'Gentle to firm pressure based on sensitivity',
    'Holistic wellness approach addressing root causes'
  ],
  whyChooseTestimonial: {
    text: 'Ive suffered from sinus issues for years. The reflexologist worked on the corresponding points and I felt immediate relief. I was skeptical but am now a believer. Remarkable results.',
    author: 'James W., United Kingdom',
    rating: 5
  },
  
  pricingLayout: 'comparison-table',
  packages: [
    {
      duration: '45 Minutes',
      price: 'Rp 250,000',
      priceIDR: 'Rp 250,000',
      description: 'Focused reflexology session targeting specific zones'
    },
    {
      duration: '60 Minutes',
      price: 'Rp 380,000',
      priceIDR: 'Rp 380,000',
      description: 'Complete reflexology treatment covering all foot zones',
      popular: true
    },
    {
      duration: '90 Minutes',
      price: 'Rp 450,000',
      priceIDR: 'Rp 450,000',
      description: 'Extended session with hand reflexology and detailed zone work'
    }
  ],
  couplesPricing: {
    duration: '60 Minutes',
    price: 'Rp 550,000'
  },
  addOns: [
    { name: 'Hand Reflexology', price: 'Rp 75,000' },
    { name: 'Ear Reflexology', price: 'Rp 50,000' },
    { name: 'Facial Reflexology', price: 'Rp 120,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Foot Reflexology',
      description: 'Our comprehensive foot reflexology focusing on traditional pressure point mapping.',
      linkText: 'View foot reflexology details',
      slug: 'foot-reflexology'
    },
    {
      name: 'Foot Massage',
      description: 'Combine reflexology principles with relaxing foot massage techniques.',
      linkText: 'Explore foot massage options',
      slug: 'foot-massage'
    },
    {
      name: 'Thai Massage',
      description: 'Thai traditions also incorporate pressure point work throughout the body.',
      linkText: 'Learn about Thai techniques',
      slug: 'thai-massage'
    },
    {
      name: 'Wellness Massage',
      description: 'Holistic wellness approach including reflexology concepts.',
      linkText: 'Discover wellness treatments',
      slug: 'wellness-massage'
    },
    {
      name: 'Traditional Balinese Massage',
      description: 'Balinese healing also recognizes energy pathways throughout the body.',
      linkText: 'Explore Balinese traditions',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Therapeutic Massage',
      description: 'Therapeutic approaches can incorporate reflexology targeting.',
      linkText: 'View therapeutic options',
      slug: 'therapeutic-massage'
    }
  ],
  
  howItWorksFormat: 'timeline',
  howItWorksSteps: [
    { title: 'Health Consultation', description: 'Discuss your wellness goals and any specific concerns' },
    { title: 'Foot Assessment', description: 'Practitioner examines feet for reflexology indicators' },
    { title: 'Systematic Treatment', description: 'Precise pressure applied to all zones in sequence' },
    { title: 'Wellness Guidance', description: 'Receive recommendations for ongoing health support' }
  ],
  
  reviews: [
    {
      text: 'We booked reflexology for my mother who has circulation issues. The practitioner was knowledgeable and gentle. Mom said she felt warmth spreading through her body as different points were pressed. Very effective.',
      author: 'The Chen Family',
      location: 'Shanghai, China',
      rating: 5,
      type: 'family'
    },
    {
      text: 'As a health-conscious nomad, I incorporate reflexology into my wellness routine. This service in Ubud employs genuinely trained practitioners who understand the meridian system. Real reflexology, not just foot massage.',
      author: 'Claudia Fernandez',
      location: 'Spain (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We both had reflexology after struggling with travel digestive issues. The practitioner focused on intestinal zones and we both felt improvement by the next day. We have become reflexology converts!',
      author: 'Oliver & Hannah',
      location: 'Stockholm, Sweden',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our wellness hotel offers reflexology through this service. The practitioners professional approach aligns with our holistic health philosophy. Guests seeking genuine healing treatments are very satisfied.',
      author: 'Dr. Luh Putu Ayu',
      location: 'Wellness Resort Director',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'Reflexology is requested by many wellness-focused guests at my retreat villa. This service provides authentic practitioners who can discuss the therapy knowledgeably. Excellent addition to guest experiences.',
      author: 'Made Kartika',
      location: 'Retreat Villa Owner',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'grid',
  trustPoints: [
    'Certified reflexology practitioners',
    'Understanding of zone connections',
    'Professional hygiene standards',
    'Extensive training requirements',
    'Respectful, gentle approach',
    'Privacy and confidentiality'
  ],
  
  faqs: [
    {
      question: 'How does reflexology work?',
      answer: 'Reflexology is based on the principle that zones on the feet correspond to organs and body systems. Applying pressure to these zones is believed to promote healing and balance in the corresponding areas. The practice stimulates nerve pathways, improves circulation, and may release blocked energy, supporting the bodys natural healing processes.'
    },
    {
      question: 'What conditions can reflexology help with?',
      answer: 'Reflexology is used supportively for many conditions including stress, headaches, migraines, digestive issues, sinus problems, menstrual discomfort, sleep difficulties, and general tension. While not a medical treatment, many people report symptom relief and improved wellbeing. It complements rather than replaces conventional medical care.'
    },
    {
      question: 'Is reflexology painful?',
      answer: 'Reflexology should not be painful, though some areas may feel tender - this often indicates imbalance in the corresponding body part. Our practitioners adjust pressure to your comfort level. Tender points are worked gently, and any discomfort typically decreases as the area is treated.'
    },
    {
      question: 'How is reflexology different from acupressure?',
      answer: 'Both work with pressure points but differ in approach. Reflexology focuses primarily on feet (and sometimes hands/ears) with zones mapped to body systems. Acupressure works on meridian points throughout the body based on Traditional Chinese Medicine. Both aim to restore energy balance but use different systems.'
    },
    {
      question: 'Can I have reflexology if I am pregnant?',
      answer: 'Reflexology can be received during pregnancy with modifications. Certain points believed to stimulate labor are avoided during early pregnancy. Please inform us of pregnancy when booking. Our practitioners are trained in safe prenatal reflexology techniques.'
    },
    {
      question: 'How many reflexology sessions do I need?',
      answer: 'For general wellness and relaxation, a single session provides benefits. For specific health concerns, a series of 4-6 weekly sessions is often recommended to address underlying imbalances. After initial treatment, monthly maintenance sessions help sustain benefits.'
    },
    {
      question: 'Will I feel immediate effects from reflexology?',
      answer: 'Many people feel immediate relaxation and may notice sensations in areas corresponding to zones being worked. Some effects are subtle and develop over hours or days. Increased urination, improved sleep, or emotional release are common responses as the body rebalances.'
    },
    {
      question: 'Do you offer hand reflexology as well?',
      answer: 'Yes! Hand reflexology is available as an add-on to foot reflexology or as a standalone treatment for those who prefer not to have feet worked on. The hands contain similar reflex zones to the feet. Our 90-minute session includes both hand and foot reflexology.'
    }
  ],
  
  aboutAngle: 'years-experience',
  aboutContent: 'Home Massage Ubud reflexology practitioners represent over a decade of combined experience in this specialized healing art. We have carefully selected practitioners with genuine reflexology certification and deep understanding of zone therapy principles. Our commitment to authentic reflexology means clients receive genuine therapeutic treatment rather than simple foot massage marketed as reflexology.',
  
  relatedServices: [
    { name: 'Foot Massage', slug: 'foot-massage' },
    { name: 'Wellness Massage', slug: 'wellness-massage' },
    { name: 'Therapeutic Massage', slug: 'therapeutic-massage' },
    { name: 'Traditional Massage', slug: 'traditional-massage' }
  ],
  
  benefits: [
    'Promotes whole-body balance through feet',
    'Supports natural healing processes',
    'Improves circulation and nerve function',
    'Reduces stress and tension systemically',
    'May relieve headaches and migraines',
    'Supports digestive system function',
    'Promotes better sleep quality',
    'Enhances overall energy and vitality'
  ],
  
  idealFor: [
    'Those interested in holistic healing',
    'People seeking alternative wellness approaches',
    'Anyone curious about pressure point therapy',
    'Those with specific health concerns',
    'Wellness enthusiasts exploring modalities',
    'Visitors wanting authentic healing experiences'
  ]
};

export default function ReflexologyPage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
