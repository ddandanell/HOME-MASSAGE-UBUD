import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Body Therapy Massage',
  slug: 'body-therapy-massage',
  keyword: 'body therapy massage',
  
  metaTitle: 'Body Therapy Massage Ubud | Therapeutic Bodywork Bali | Book Now END',
  metaDescription: 'Specialized body therapy massage addressing physical issues in Ubud. Expert bodywork treating muscle tension, alignment, recovery. Villa delivery. Book WhatsApp. END',
  
  h1Title: 'Body Therapy Massage – Therapeutic Bodywork in Ubud',
  heroSubtitle: 'Address your bodys specific needs with our specialized body therapy massage. Expert therapists combine multiple techniques to treat muscle issues, improve alignment, and support physical recovery in the comfort of your accommodation.',
  heroLayout: 'full-width',
  heroBadgeText: 'Therapeutic Bodywork',
  
  introduction: [
    'Body therapy massage goes beyond relaxation to address specific physical issues affecting your wellbeing. This therapeutic approach combines assessment, targeted techniques, and rehabilitative elements to treat problems rather than simply providing pleasant sensations. Our body therapy massage service in Ubud delivers specialized bodywork that makes a genuine difference in how your body functions and feels.',
    'Unlike standard massage that follows a general routine, body therapy begins with understanding your specific concerns. Do you have chronic back pain? Postural issues from desk work? Recovery needs from physical activities? Our therapists assess your situation and create a targeted treatment plan addressing your unique physical challenges.',
    'Body therapy massage incorporates multiple modalities as needed for your treatment goals. This might include deep tissue work, myofascial release, trigger point therapy, stretching, joint mobilization, and corrective techniques. Your therapist selects and combines approaches based on what will most effectively address your specific body issues.',
    'Our body therapy specialists have additional training beyond standard massage certification, equipping them to work therapeutically with complex physical conditions. They understand how body systems interconnect and can trace symptoms to root causes. Available throughout Ubud and Bali, body therapy massage brings therapeutic expertise directly to your accommodation. Contact us via WhatsApp to discuss your needs.'
  ],
  
  whyChooseAngle: 'trained-therapists',
  whyChoosePoints: [
    'Therapists with advanced body therapy training',
    'Individual assessment before treatment begins',
    'Multiple modalities combined for your needs',
    'Focus on treating causes, not just symptoms',
    'Rehabilitative and corrective approaches included',
    'Follow-up recommendations for ongoing improvement'
  ],
  whyChooseTestimonial: {
    text: 'After years of chronic shoulder pain, one body therapy session revealed the issue was actually in my posture. The therapist addressed the root cause and gave me exercises. My shoulder has been significantly better since. Truly therapeutic work.',
    author: 'Richard H., United Kingdom',
    rating: 5
  },
  
  pricingLayout: 'horizontal',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 380,000',
      priceIDR: 'Rp 380,000',
      description: 'Focused body therapy addressing primary concerns'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 450,000',
      priceIDR: 'Rp 450,000',
      description: 'Comprehensive body therapy with assessment and treatment',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 700,000',
      priceIDR: 'Rp 700,000',
      description: 'Full body therapy session with multiple techniques and guidance'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 1,100,000'
  },
  addOns: [
    { name: 'Postural Assessment', price: 'Rp 75,000' },
    { name: 'Corrective Exercise Guidance', price: 'Rp 120,000' },
    { name: 'Follow-up Consultation', price: 'Rp 50,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Therapeutic Massage',
      description: 'Therapeutic approaches addressing specific physical needs.',
      linkText: 'Explore therapeutic options',
      slug: 'therapeutic-massage'
    },
    {
      name: 'Deep Tissue Massage',
      description: 'Deep work on muscle layers often incorporated in body therapy.',
      linkText: 'Learn about deep tissue',
      slug: 'deep-tissue-massage'
    },
    {
      name: 'Sports Massage',
      description: 'Athletic body therapy for performance and recovery.',
      linkText: 'View sports massage',
      slug: 'sports-massage'
    },
    {
      name: 'Professional Massage',
      description: 'Professional-grade therapeutic bodywork.',
      linkText: 'Discover professional service',
      slug: 'professional-massage'
    },
    {
      name: 'Full Body Massage',
      description: 'Complete body coverage when overall treatment is needed.',
      linkText: 'View full body options',
      slug: 'full-body-massage'
    },
    {
      name: 'Body Massage',
      description: 'Comprehensive body treatment with therapeutic elements.',
      linkText: 'Explore body massage',
      slug: 'body-massage'
    }
  ],
  
  howItWorksFormat: 'timeline',
  howItWorksSteps: [
    { title: 'Share Your Concerns', description: 'Tell us about your physical issues and goals' },
    { title: 'Therapist Assessment', description: 'Body therapy specialist evaluates your condition' },
    { title: 'Targeted Treatment', description: 'Multiple techniques applied to address your needs' },
    { title: 'Ongoing Guidance', description: 'Receive recommendations for continued improvement' }
  ],
  
  reviews: [
    {
      text: 'My husband has had back issues for years. The body therapy approach was different - actual assessment of what was causing the problem, then targeted treatment. He felt significant improvement after the first session. This is real therapeutic work.',
      author: 'The Garcia Family',
      location: 'Madrid, Spain',
      rating: 5,
      type: 'family'
    },
    {
      text: 'Working on laptops creates body problems. Body therapy massage addresses these issues properly - not just rubbing muscles but correcting imbalances. The therapist understood desk-worker physiology perfectly.',
      author: 'Christina Mills',
      location: 'United States (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We both have different body issues - my partners knee, my neck. Body therapy addressed both individually during our couples session. Each treatment was customized. Impressive therapeutic approach.',
      author: 'Jun & Mei',
      location: 'Shanghai, China',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Guests at our wellness retreat seek genuine therapeutic work. Body therapy massage delivers real results for physical issues. The assessment-based approach distinguishes it from generic massage.',
      author: 'Dr. Putu Dharma',
      location: 'Wellness Retreat Director',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'Several guests have specific body issues they want addressed during their stay. Body therapy specialists from this service deliver genuine therapeutic results. Professional approach to physical problems.',
      author: 'Ketut Raka',
      location: 'Villa Owner, Tegallalang',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'badges',
  trustPoints: [
    'Advanced Training',
    'Assessment Skills',
    'Multiple Techniques',
    'Therapeutic Focus',
    'Professional Standards',
    'Results-Oriented'
  ],
  
  faqs: [
    {
      question: 'What conditions does body therapy massage help?',
      answer: 'Body therapy massage addresses chronic pain, postural issues, muscle imbalances, repetitive strain injuries, recovery from physical activity, tension patterns, reduced range of motion, and various musculoskeletal problems. Its designed to treat underlying issues, not just provide temporary relief.'
    },
    {
      question: 'How is body therapy different from regular massage?',
      answer: 'Body therapy begins with assessment of your specific issues and creates a targeted treatment plan. It combines multiple techniques based on what your body needs rather than following a standard routine. The focus is therapeutic outcomes - lasting improvement rather than temporary relaxation.'
    },
    {
      question: 'Will body therapy massage help my chronic pain?',
      answer: 'Body therapy is specifically designed to address chronic pain by identifying and treating root causes. Many clients with persistent pain find significant relief through body therapy that addresses underlying patterns and imbalances rather than just treating symptoms.'
    },
    {
      question: 'How many body therapy sessions do I need?',
      answer: 'For acute issues, 1-3 sessions often provide significant improvement. Chronic conditions may benefit from a series of 4-6 sessions. During vacation stays, even a single body therapy session can provide valuable insight and relief. Your therapist will recommend an appropriate frequency.'
    },
    {
      question: 'Do I need to describe my issues before the session?',
      answer: 'Yes, please! Sharing your physical concerns before booking helps us match you with an appropriately skilled body therapy specialist. During the session, a thorough discussion precedes treatment. The more your therapist understands, the more effectively they can treat you.'
    },
    {
      question: 'What techniques are used in body therapy massage?',
      answer: 'Body therapy may include deep tissue work, myofascial release, trigger point therapy, passive stretching, joint mobilization, and corrective techniques. Your therapist selects and combines methods based on your assessment results and treatment goals.'
    },
    {
      question: 'Can body therapy help with posture problems?',
      answer: 'Absolutely! Postural issues are a primary focus of body therapy. Therapists identify muscle imbalances and tension patterns affecting alignment, then work to correct these through targeted treatment and guidance on maintaining improvements.'
    },
    {
      question: 'Is body therapy massage painful?',
      answer: 'Some therapeutic techniques involve working with discomfort as tight tissues release. However, treatment should never be unbearably painful. Your therapist constantly communicates and adjusts based on your feedback. Therapeutic discomfort differs from harmful pain.'
    }
  ],
  
  aboutAngle: 'years-experience',
  aboutContent: 'Home Massage Ubud body therapy specialists bring over a decade of combined experience in therapeutic bodywork. Our body therapy team has advanced training in musculoskeletal assessment, postural analysis, and corrective techniques. We differentiate between relaxation massage and genuine body therapy, ensuring clients seeking therapeutic outcomes receive appropriate specialized care.',
  
  relatedServices: [
    { name: 'Therapeutic Massage', slug: 'therapeutic-massage' },
    { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' },
    { name: 'Sports Massage', slug: 'sports-massage' },
    { name: 'Professional Massage', slug: 'professional-massage' }
  ],
  
  benefits: [
    'Addresses root causes of physical issues',
    'Customized treatment for your specific needs',
    'Multiple techniques combined effectively',
    'Long-lasting therapeutic results',
    'Improved posture and alignment',
    'Enhanced physical function',
    'Pain reduction and management',
    'Guidance for ongoing improvement'
  ],
  
  idealFor: [
    'Those with chronic pain or tension',
    'People with postural issues',
    'Anyone recovering from injury',
    'Desk workers with body strain',
    'Those seeking therapeutic rather than relaxation massage',
    'Anyone wanting to address specific physical concerns'
  ]
};

export default function BodyTherapyMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
