import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Therapeutic Massage',
  slug: 'therapeutic-massage',
  keyword: 'therapeutic massage',
  
  metaTitle: 'Therapeutic Massage Ubud | Treatment-Focused Bodywork | Book Now END',
  metaDescription: 'Professional therapeutic massage targeting specific conditions in Ubud. Pain relief, injury recovery, chronic tension treatment. Licensed specialists. Book WhatsApp. END',
  
  h1Title: 'Therapeutic Massage – Treatment-Focused Care in Ubud',
  heroSubtitle: 'Move beyond relaxation to genuine healing with our therapeutic massage service. Licensed specialists deliver targeted treatments for pain relief, injury recovery, and chronic condition management in your Ubud accommodation.',
  heroLayout: 'image-right',
  heroBadgeText: 'Therapeutic Treatment',
  
  introduction: [
    'Therapeutic massage serves a specific purpose: treating physical conditions and producing measurable health improvements. Unlike relaxation-focused treatments, therapeutic massage applies clinical techniques to address pain, restriction, dysfunction, and recovery needs. Our therapeutic massage service in Ubud brings this treatment-oriented approach directly to your accommodation.',
    'The therapeutic massage approach begins with understanding what needs healing. Whether you experience chronic pain, recovering from injury, dealing with postural problems, or managing ongoing physical conditions, our therapists assess your situation and apply appropriate clinical techniques. Treatment is goal-oriented with expected outcomes rather than purely experiential.',
    'Our therapeutic massage specialists hold advanced certifications beyond standard massage training. They understand anatomy deeply, recognize pathology, and know which techniques address which conditions. This clinical knowledge transforms massage from pleasant experience into effective treatment with genuine health benefits.',
    'Therapeutic massage often requires multiple sessions for full benefit, but even single treatments during your Bali visit can provide significant relief and valuable insight into your condition. Available throughout Ubud and Bali from 8 AM to 10 PM, therapeutic care reaches wherever you are staying. Contact us via WhatsApp to discuss your therapeutic needs.'
  ],
  
  whyChooseAngle: 'certified-staff',
  whyChoosePoints: [
    'Therapists with advanced clinical training and certifications',
    'Treatment-focused approach with measurable goals',
    'Deep understanding of anatomy and pathology',
    'Appropriate technique selection for your condition',
    'Progress assessment and treatment modification',
    'Home exercise recommendations for continued improvement'
  ],
  whyChooseTestimonial: {
    text: 'I came with severe sciatica that had plagued me for months. The therapeutic massage therapist identified the trigger points causing the nerve irritation and worked them specifically. After two sessions, I had more relief than from months of generic treatments.',
    author: 'Robert M., Australia',
    rating: 5
  },
  
  pricingLayout: 'comparison-table',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 340,000',
      priceIDR: 'Rp 340,000',
      description: 'Focused therapeutic treatment for specific conditions'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 480,000',
      priceIDR: 'Rp 480,000',
      description: 'Comprehensive therapeutic session with full assessment',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 620,000',
      priceIDR: 'Rp 620,000',
      description: 'Extended therapeutic treatment for complex conditions'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 920,000'
  },
  addOns: [
    { name: 'Clinical Assessment', price: 'Rp 75,000' },
    { name: 'Home Exercise Program', price: 'Rp 100,000' },
    { name: 'Follow-up Consultation', price: 'Rp 50,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Deep Tissue Massage',
      description: 'Deep pressure techniques common in therapeutic treatment.',
      linkText: 'Add deep tissue work',
      slug: 'deep-tissue-massage'
    },
    {
      name: 'Sports Massage',
      description: 'Therapeutic approach for athletic conditions and recovery.',
      linkText: 'View sports therapy',
      slug: 'sports-massage'
    },
    {
      name: 'Body Therapy Massage',
      description: 'Comprehensive body therapy for multiple concerns.',
      linkText: 'Explore body therapy',
      slug: 'body-therapy-massage'
    },
    {
      name: 'Professional Massage',
      description: 'Professional-grade therapeutic care from specialists.',
      linkText: 'Discover professional options',
      slug: 'professional-massage'
    },
    {
      name: 'Prenatal Massage',
      description: 'Therapeutic care specifically for pregnancy conditions.',
      linkText: 'View prenatal therapy',
      slug: 'prenatal-massage'
    },
    {
      name: 'Reflexology',
      description: 'Therapeutic pressure point work for systemic benefits.',
      linkText: 'Add reflexology therapy',
      slug: 'reflexology'
    }
  ],
  
  howItWorksFormat: 'four-step',
  howItWorksSteps: [
    { title: 'Describe Your Condition', description: 'Share your symptoms, history, and treatment goals' },
    { title: 'Clinical Assessment', description: 'Therapist evaluates your condition professionally' },
    { title: 'Targeted Treatment', description: 'Specific techniques applied for your condition' },
    { title: 'Progress & Plan', description: 'Assess improvement and plan ongoing care' }
  ],
  
  reviews: [
    {
      text: 'My wife had persistent neck pain that regular massage never resolved. The therapeutic approach was different - actual diagnosis of the issue, specific treatment, and exercises to continue. Her pain is significantly reduced now.',
      author: 'The Bergman Family',
      location: 'Stockholm, Sweden',
      rating: 5,
      type: 'family'
    },
    {
      text: 'Repetitive strain from constant typing was affecting my work. Therapeutic massage addressed the specific muscles involved and gave me stretches to prevent recurrence. Much more effective than general massage for computer-related issues.',
      author: 'Julia Chen',
      location: 'Taiwan (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We both have different chronic issues - my partners knee, my shoulder. Therapeutic massage treated each specifically during our couples session. Not relaxation focused but genuinely helpful for our conditions.',
      author: 'Paul & Marie',
      location: 'Paris, France',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our health-focused hotel recommends therapeutic massage for guests with specific conditions. This service provides genuine clinical care rather than just pleasant massage. Guests with real issues get real help.',
      author: 'Dr. Wayan Sudirga',
      location: 'Health Hotel Medical Director',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'Guests occasionally arrive at my villa with pain issues affecting their vacation. Therapeutic massage provides genuine relief. The clinical approach differentiates this service from standard offerings.',
      author: 'Made Asta',
      location: 'Villa Owner, Penestanan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'grid',
  trustPoints: [
    'Clinical training and certifications',
    'Anatomical knowledge and assessment',
    'Treatment-oriented protocols',
    'Professional hygiene standards',
    'Appropriate referral when needed',
    'Confidential health information'
  ],
  
  faqs: [
    {
      question: 'What conditions does therapeutic massage treat?',
      answer: 'Therapeutic massage treats chronic pain conditions, soft tissue injuries, postural dysfunction, repetitive strain, tension headaches, back and neck pain, sciatica, joint restrictions, scar tissue, and many musculoskeletal issues. It focuses on treating conditions rather than providing general relaxation.'
    },
    {
      question: 'How is therapeutic massage different from regular massage?',
      answer: 'Therapeutic massage is treatment-focused rather than relaxation-focused. It begins with assessment of your condition, applies specific clinical techniques appropriate for your issue, measures progress against goals, and may include home care recommendations. The intent is healing rather than pleasant experience.'
    },
    {
      question: 'Will therapeutic massage be painful?',
      answer: 'Therapeutic work may involve temporary discomfort when addressing problem areas - this is often described as "good pain" that leads to relief. However, treatment should never be unbearable. Communicate with your therapist about comfort levels. Effective therapeutic work does not require agony.'
    },
    {
      question: 'Should I see a doctor before therapeutic massage?',
      answer: 'For acute injuries, unexplained symptoms, or serious conditions, medical evaluation is recommended before therapeutic massage. For common musculoskeletal issues, direct booking is usually appropriate. Our therapists will refer you to medical care if they identify anything beyond massage scope.'
    },
    {
      question: 'How many therapeutic massage sessions will I need?',
      answer: 'This depends on your condition. Acute issues may resolve in 1-3 sessions. Chronic conditions often benefit from 4-8 sessions. Even single treatments during vacation can provide relief and valuable information about your condition. Your therapist will recommend an appropriate treatment plan.'
    },
    {
      question: 'Can therapeutic massage replace physiotherapy?',
      answer: 'Therapeutic massage complements but does not replace physiotherapy when the latter is indicated. Some conditions benefit from both approaches. Our therapists recognize when physiotherapy referral is appropriate and can work alongside your PT program if you are already receiving care.'
    },
    {
      question: 'What should I tell the therapist about my condition?',
      answer: 'Share everything relevant: symptoms and location, when the problem started, what makes it better or worse, previous treatments tried, medical history related to the issue, and your treatment goals. Complete information helps the therapist provide the most effective therapeutic care.'
    },
    {
      question: 'Do you provide home exercises after therapeutic massage?',
      answer: 'Yes! Effective therapeutic massage often includes home care recommendations. Your therapist may teach stretches, strengthening exercises, or postural modifications to continue improvement between sessions. This extends the treatment benefit beyond the massage itself.'
    }
  ],
  
  aboutAngle: 'largest-team',
  aboutContent: 'Home Massage Ubud therapeutic massage specialists represent the clinical expertise within our team. These therapists hold advanced certifications in therapeutic modalities and approach massage as healthcare rather than spa service. We maintain high standards for our therapeutic team, ensuring clients seeking clinical care receive genuinely qualified practitioners.',
  
  relatedServices: [
    { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' },
    { name: 'Sports Massage', slug: 'sports-massage' },
    { name: 'Body Therapy Massage', slug: 'body-therapy-massage' },
    { name: 'Professional Massage', slug: 'professional-massage' }
  ],
  
  benefits: [
    'Targeted treatment for specific conditions',
    'Pain relief and management',
    'Improved function and mobility',
    'Injury recovery support',
    'Chronic condition management',
    'Clinical assessment and insight',
    'Home care education',
    'Measurable health improvements'
  ],
  
  idealFor: [
    'Those with chronic pain conditions',
    'People recovering from injuries',
    'Anyone with specific physical dysfunctions',
    'Those needing clinical rather than spa approach',
    'Travelers whose conditions affect their trip',
    'Anyone seeking genuine health improvement'
  ]
};

export default function TherapeuticMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
