import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Spa Massage',
  slug: 'spa-massage',
  keyword: 'spa massage',
  
  metaTitle: 'Spa Massage Ubud | Luxury In-Villa Spa Experience Bali | Book Now END',
  metaDescription: 'Indulge in luxury spa massage delivered to your Ubud villa. Professional therapists bring the complete spa experience to you. Premium oils, serene ambiance. Book today. END',
  
  h1Title: 'Spa Massage – Luxury Villa Experience in Ubud',
  heroSubtitle: 'Transform your villa into a private sanctuary with our premium spa massage service. Experience authentic Balinese spa treatments delivered by expert therapists, complete with aromatherapy, premium oils, and tranquil ambiance.',
  heroLayout: 'testimonial-hero',
  heroBadgeText: 'Luxury Spa Service',
  heroTestimonial: {
    text: 'The spa massage was absolutely divine. They transformed our villa into a peaceful retreat with candles, music, and incredible aromatherapy. Better than any spa we have visited!',
    author: 'Amanda K.',
    location: 'London, UK'
  },
  
  introduction: [
    'Elevate your Bali vacation with our exclusive spa massage service, bringing the full luxury spa experience directly to your Ubud accommodation. Our spa massage combines traditional healing wisdom with modern wellness practices, creating a transformative experience that rejuvenates both body and spirit. Every session is designed to transport you to a state of complete relaxation without stepping outside your villa.',
    'What distinguishes our spa massage from standard treatments is the comprehensive sensory experience we create. Our therapists arrive with aromatherapy diffusers, soothing background music, ambient lighting options, and premium Balinese massage oils. The result is a immersive spa atmosphere that rivals the finest wellness resorts in Bali, all within the privacy and comfort of your chosen space.',
    'Our spa massage therapists undergo extensive training in multiple massage modalities, ensuring they can customize each session to your specific needs. Whether you prefer the flowing movements of Swedish massage, the targeted pressure of deep tissue work, or the traditional techniques of Balinese healing, our team delivers spa-quality results every time. Communication is seamless with all therapists fluent in English and Indonesian.',
    'The spa massage experience extends beyond the treatment itself. We guide you through pre-treatment preparation, create the optimal environment in your space, and provide post-massage recommendations for maintaining the benefits. Available daily from 8 AM to 10 PM, our spa massage service operates on your schedule. Contact us via WhatsApp for instant booking and same-day availability.'
  ],
  
  whyChooseAngle: 'premium-oils',
  whyChoosePoints: [
    'Complete spa atmosphere with aromatherapy diffusers and ambient music',
    'Premium organic Balinese massage oils and essential oil blends',
    'Therapists trained in multiple spa modalities for customized treatments',
    'Luxury fresh linens and towels provided for every session',
    'Pre and post treatment guidance for optimal benefits',
    'Same-day booking available through responsive WhatsApp service'
  ],
  whyChooseTestimonial: {
    text: 'Having tried many spas in Bali, this mobile spa massage exceeded all expectations. The therapist was highly skilled and the aromatherapy selection was impressive. Truly a five-star experience.',
    author: 'Sarah M., New York',
    rating: 5
  },
  
  pricingLayout: 'horizontal',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 320,000',
      priceIDR: 'Rp 320,000',
      description: 'Complete spa massage experience with aromatherapy and premium oils'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 480,000',
      priceIDR: 'Rp 480,000',
      description: 'Extended spa session with scalp treatment and enhanced relaxation',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 640,000',
      priceIDR: 'Rp 640,000',
      description: 'Luxury spa ritual including body scrub, massage, and refreshments'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 850,000'
  },
  addOns: [
    { name: 'Balinese Body Scrub', price: 'Rp 150,000' },
    { name: 'Facial Treatment', price: 'Rp 200,000' },
    { name: 'Hair Cream Bath', price: 'Rp 100,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Aromatherapy Massage',
      description: 'Healing essential oils combined with expert massage techniques for deep relaxation and emotional balance.',
      linkText: 'Discover our aromatherapy service',
      slug: 'aromatherapy-massage'
    },
    {
      name: 'Hot Stone Massage',
      description: 'Warm volcanic stones enhance circulation and melt away deep muscle tension for profound relaxation.',
      linkText: 'Experience hot stone therapy',
      slug: 'hot-stone-massage'
    },
    {
      name: 'Couples Wellness Ritual',
      description: 'Synchronized spa treatments for two, perfect for creating romantic memories in your private villa.',
      linkText: 'Plan your couples spa day',
      slug: 'couples-wellness-ritual'
    },
    {
      name: 'Detox Wellness Massage',
      description: 'Lymphatic techniques combined with detoxifying oils to cleanse and rejuvenate your entire system.',
      linkText: 'Learn about detox treatments',
      slug: 'detox-wellness-massage'
    },
    {
      name: 'Traditional Balinese Massage',
      description: 'Time-honored techniques passed down through generations of Balinese healing practitioners.',
      linkText: 'Explore Balinese traditions',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Herbal Bamboo Massage',
      description: 'Unique treatment using warm herbal compresses and bamboo sticks for deep muscle relief.',
      linkText: 'Try herbal bamboo therapy',
      slug: 'herbal-bamboo-massage'
    }
  ],
  
  howItWorksFormat: 'timeline',
  
  reviews: [
    {
      text: 'Our whole family enjoyed spa massages at our villa. The therapists set up in our living room and garden, accommodating everyone simultaneously. The children had gentle treatments while adults enjoyed deeper work. Incredible organization!',
      author: 'The Morrison Family',
      location: 'Brisbane, Australia',
      rating: 5,
      type: 'family'
    },
    {
      text: 'As someone who works remotely from Bali, regular spa massages are essential for my wellbeing. This service offers consistent quality, convenient booking, and the therapists remember my preferences. Highly professional.',
      author: 'Lisa Chen',
      location: 'Taiwan (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We booked the couples spa package for our honeymoon. The candlelit atmosphere, rose petals, and synchronized massage made it incredibly romantic. The champagne toast at the end was a lovely touch!',
      author: 'Tom & Rachel',
      location: 'United Kingdom',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'My boutique hotel partners with Home Massage Ubud for guest spa services. Their professionalism, punctuality, and quality match our standards. Guests consistently rate the spa massage as a highlight of their stay.',
      author: 'Made Dharma',
      location: 'Hotel Manager, Ubud',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'I recommend this spa massage service to all guests at my luxury villas. The therapists are respectful of the property, professional with guests, and deliver excellent treatments. Reliable partner for five years now.',
      author: 'Putu Artawan',
      location: 'Villa Owner, Tegallalang',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'badges',
  trustPoints: [
    'Hygiene Certified',
    'Licensed Therapists',
    'Organic Products',
    '100+ Team Members',
    'Background Checked',
    'Privacy Protected'
  ],
  
  faqs: [
    {
      question: 'What makes your spa massage different from regular massage?',
      answer: 'Our spa massage creates a complete sensory experience beyond standard massage. We bring aromatherapy diffusers, ambient music, premium oils, and create a tranquil atmosphere in your space. The treatment incorporates multiple techniques and may include elements like hot towels, scalp treatment, and breathing exercises for holistic relaxation.'
    },
    {
      question: 'Can you set up a spa atmosphere at my villa for the massage?',
      answer: 'Absolutely! Our therapists arrive early to transform your chosen space into a spa sanctuary. We bring aromatherapy diffusers with essential oils, battery-operated candles for ambiance, portable speakers for soothing music, and all necessary spa equipment. Just provide the space and we create the experience.'
    },
    {
      question: 'How long does it take to set up before my spa massage?',
      answer: 'Therapists typically arrive 15-20 minutes before your scheduled appointment time to set up. This includes arranging the massage table, setting up aromatherapy, preparing oils, and creating the ambient atmosphere. You can relax while we prepare everything.'
    },
    {
      question: 'What spa massage package is best for first-timers?',
      answer: 'We recommend the 90-minute spa massage for first-time clients. This duration allows enough time for a complete full-body treatment plus scalp massage and relaxation, without feeling rushed. You can experience the full range of our spa techniques and identify your preferences for future sessions.'
    },
    {
      question: 'Do you offer spa packages for groups or events?',
      answer: 'Yes! We specialize in group spa experiences for bachelorette parties, corporate retreats, birthday celebrations, and wellness events. We can accommodate multiple guests simultaneously with different therapists. Contact us via WhatsApp to discuss your group requirements and receive a customized package quote.'
    },
    {
      question: 'What oils and products do you use for spa massage?',
      answer: 'We use premium organic massage oils sourced from Bali including virgin coconut oil, frangipani-infused oils, and therapeutic essential oil blends. All products are natural, skin-safe, and chosen for their healing properties. We can accommodate allergies or sensitivities with advance notice.'
    },
    {
      question: 'Can I customize my spa massage treatment?',
      answer: 'Absolutely! Every spa massage is customizable. You can specify pressure preferences, focus areas, oil scent choices, and any areas to avoid. Communicate your preferences when booking or directly with your therapist before the session begins. We want your experience to be perfect.'
    },
    {
      question: 'Is your spa massage available for hotel guests in Ubud?',
      answer: 'Yes, we serve guests at hotels, resorts, guesthouses, and homestays throughout Ubud and Bali. Simply provide your accommodation name and room number when booking. We coordinate with hotel staff as needed and ensure a discrete, professional service.'
    }
  ],
  
  aboutAngle: 'trusted-partners',
  aboutContent: 'Home Massage Ubud has earned the trust of the finest accommodations in Bali through consistent excellence in spa massage delivery. Our partnerships include luxury villa complexes, boutique hotels, and premium Airbnb properties across the island. This trusted reputation stems from our commitment to professional standards, reliable service, and therapists who understand the meaning of true hospitality.',
  
  relatedServices: [
    { name: 'Luxury Massage', slug: 'luxury-massage' },
    { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
    { name: 'Wellness Massage', slug: 'wellness-massage' },
    { name: 'Relaxing Massage', slug: 'relaxing-massage' }
  ],
  
  benefits: [
    'Complete spa atmosphere in your private space',
    'Deep relaxation of body and mind',
    'Aromatherapy benefits for emotional wellness',
    'Improved skin health from premium oils',
    'Enhanced sleep quality after treatment',
    'Stress and tension release',
    'Luxury experience without travel hassle',
    'Personalized treatment to your preferences'
  ],
  
  idealFor: [
    'Luxury travelers seeking premium experiences',
    'Couples wanting romantic spa moments',
    'Those celebrating special occasions',
    'Wellness enthusiasts on retreat',
    'Guests who prefer privacy to public spas',
    'Anyone deserving a truly indulgent experience'
  ]
};

export default function SpaMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
