import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Home Massage',
  slug: 'home-massage',
  keyword: 'home massage',
  
  metaTitle: 'Home Massage Ubud | In-Villa Massage Service Bali | Book Now END',
  metaDescription: 'Professional home massage delivered to your Ubud accommodation. Licensed therapists bring spa experience to your villa, hotel or guesthouse. Book via WhatsApp today. END',
  
  h1Title: 'Home Massage – Spa Experience at Your Door',
  heroSubtitle: 'Transform your accommodation into a private spa with our professional home massage service. Expert therapists bring everything needed for a complete massage experience directly to your villa, hotel, or guesthouse throughout Ubud and Bali.',
  heroLayout: 'testimonial-hero',
  heroBadgeText: 'In-Home Service',
  heroTestimonial: {
    text: 'Having the massage come to us made our vacation so much easier. No need to get dressed up, drive anywhere, or leave our beautiful villa. The therapist set up everything perfectly. True convenience!',
    author: 'Mark & Susan R.',
    location: 'Vancouver, Canada'
  },
  
  introduction: [
    'The concept of home massage revolutionizes how travelers experience spa services in Bali. Rather than navigating to unfamiliar spa locations, dealing with transportation, or scheduling around business hours, home massage brings the entire professional spa experience directly to your accommodation. Our home massage service in Ubud delivers this convenience without compromising quality or professionalism.',
    'Home massage eliminates the barriers that often prevent travelers from enjoying massage services. After a long day of sightseeing, the thought of dressing up and traveling to a spa can be overwhelming. With home massage, you simply message us, and within hours a licensed therapist arrives at your door with professional massage table, premium oils, fresh linens, and everything needed for your treatment.',
    'The home environment actually enhances your massage experience in many ways. You are in a familiar, comfortable space. You can shower immediately afterward, change into pajamas, and continue relaxing without any journey home. Many guests report deeper relaxation knowing they are already where they want to be. Your home massage fits your vacation exactly as you want it.',
    'Our home massage therapists serve all types of accommodation throughout Ubud and Bali: private villas, boutique hotels, resorts, guesthouses, Airbnb properties, and homestays. We communicate in English and Indonesian for clear coordination. Available daily from 8 AM to 10 PM with same-day booking through WhatsApp, home massage is always within reach.'
  ],
  
  whyChooseAngle: 'support-24-7',
  whyChoosePoints: [
    'Complete massage experience delivered to any accommodation',
    'Licensed therapists bring all professional equipment',
    'No travel required - relax before, during, and after',
    'Flexible scheduling around your vacation activities',
    'Serve all accommodation types throughout Bali',
    'Quick WhatsApp booking with same-day availability'
  ],
  whyChooseTestimonial: {
    text: 'We were staying in a remote villa and thought spa services would be impossible. Home Massage Ubud came right to us! The therapist navigated perfectly and delivered an amazing experience. So convenient and professional.',
    author: 'Andreas L., Germany',
    rating: 5
  },
  
  pricingLayout: 'minimalist-grid',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 380,000',
      priceIDR: 'Rp 380,000',
      description: 'Essential home massage with full professional setup'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 390,000',
      priceIDR: 'Rp 390,000',
      description: 'Extended home massage session with added relaxation time',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 450,000',
      priceIDR: 'Rp 450,000',
      description: 'Comprehensive home spa experience with multiple techniques'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 760,000'
  },
  addOns: [
    { name: 'Aromatherapy Enhancement', price: 'Rp 50,000' },
    { name: 'Hot Stone Addition', price: 'Rp 120,000' },
    { name: 'Scalp Treatment', price: 'Rp 50,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Mobile Massage',
      description: 'Our full mobile massage service reaching you anywhere in Bali.',
      linkText: 'Explore mobile options',
      slug: 'mobile-massage'
    },
    {
      name: 'At-Home Massage',
      description: 'Dedicated at-home massage service for your private accommodation.',
      linkText: 'View at-home service',
      slug: 'at-home-massage'
    },
    {
      name: 'Professional Massage',
      description: 'Professional-grade treatments delivered with full equipment.',
      linkText: 'Discover professional service',
      slug: 'professional-massage'
    },
    {
      name: 'Spa Massage',
      description: 'Complete spa atmosphere created in your home environment.',
      linkText: 'Try spa experience at home',
      slug: 'spa-massage'
    },
    {
      name: 'Couples Massage',
      description: 'Shared home massage experience for couples and partners.',
      linkText: 'Book couples home massage',
      slug: 'couples-massage'
    },
    {
      name: 'Relaxing Massage',
      description: 'Peaceful relaxation in the comfort of your own space.',
      linkText: 'Add relaxation focus',
      slug: 'relaxing-massage'
    }
  ],
  
  howItWorksFormat: 'four-step',
  howItWorksSteps: [
    { title: 'Send Your Address', description: 'WhatsApp us with your accommodation location and preferred time' },
    { title: 'Confirm Booking', description: 'We confirm availability and assign your therapist' },
    { title: 'We Come to You', description: 'Therapist arrives with complete professional setup' },
    { title: 'Enjoy & Relax', description: 'Receive your massage, then continue relaxing at home' }
  ],
  
  reviews: [
    {
      text: 'Traveling with elderly parents meant finding a spa that could accommodate them was challenging. Home massage solved everything. The therapist came to our villa and treated my parents in their comfortable environment. So grateful for this service.',
      author: 'The Nakamura Family',
      location: 'Osaka, Japan',
      rating: 5,
      type: 'family'
    },
    {
      text: 'As a remote worker, my schedule is unpredictable. Home massage fits perfectly into my day whenever I need it. No planning around spa hours or commuting. Just book, receive treatment, and get back to work refreshed.',
      author: 'Daniel Schulz',
      location: 'Switzerland (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'Our villa had an amazing outdoor bathroom perfect for post-massage showers. Having home massage meant we could enjoy the full experience without ever leaving our romantic hideaway. Pure convenience.',
      author: 'Chris & Amanda',
      location: 'London, UK',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Many hotel guests ask about massage services. Recommending home massage allows guests to receive treatment in their rooms without disrupting their schedules. Professional service that enhances guest satisfaction.',
      author: 'Ketut Ari',
      location: 'Hotel Guest Relations',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'I built my villa for guests seeking private retreats. Home massage completes the experience perfectly. Therapists respect the property, provide excellent service, and guests love the convenience. Essential partnership.',
      author: 'Made Wisnu',
      location: 'Villa Owner, Sayan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'horizontal',
  trustPoints: [
    'Professional equipment brought',
    'Licensed trained therapists',
    'Premium products used',
    'Accommodation-appropriate service',
    'Verified professionals',
    'Discrete, respectful visits'
  ],
  
  faqs: [
    {
      question: 'What do I need to provide for home massage?',
      answer: 'Simply provide enough floor space for our portable massage table (approximately 2m x 2.5m). We bring everything else: massage table, oils, linens, towels, and any specialty equipment. An electrical outlet nearby helps for heating products. Otherwise, you just need to be ready to relax!'
    },
    {
      question: 'Do you serve all types of accommodation?',
      answer: 'Yes! Our home massage service reaches villas, hotels, resorts, guesthouses, homestays, Airbnb properties, and any other accommodation throughout Ubud and Bali. We have experience working in all types of settings and adapt our setup accordingly.'
    },
    {
      question: 'How far in advance should I book home massage?',
      answer: 'We recommend booking 24-48 hours in advance for best availability. However, same-day home massage is often possible depending on therapist schedules. Contact us via WhatsApp anytime to check current availability for your desired time.'
    },
    {
      question: 'Is there a travel fee for home massage in remote locations?',
      answer: 'Home massage to central Ubud and nearby areas has no additional travel fee. For more remote locations, a small travel supplement may apply. We will inform you of any additional charge when you provide your address during booking.'
    },
    {
      question: 'Can I have home massage outdoors at my villa?',
      answer: 'Absolutely! Many guests prefer outdoor settings - poolside, garden pavilions, or covered verandas. We set up anywhere suitable at your accommodation. Just ensure the area has shade and is relatively private. Outdoor massage adds a special touch to the experience.'
    },
    {
      question: 'What if I am staying in a hotel room - is home massage possible?',
      answer: 'Yes, home massage works well in hotel rooms. We bring compact equipment that fits standard room sizes. Simply clear a space for the massage table. Many hotels welcome our professional service. We can coordinate with front desk if needed.'
    },
    {
      question: 'How does payment work for home massage?',
      answer: 'Payment is collected at the end of your session. We accept cash in Indonesian Rupiah. For advance bookings, credit card payment can be arranged. All prices are inclusive - no hidden fees beyond any applicable remote location surcharge discussed at booking.'
    },
    {
      question: 'Can multiple people receive home massage at the same time?',
      answer: 'Yes! We accommodate couples, families, and groups. For simultaneous treatments, we send multiple therapists with their own equipment. Its perfect for villa groups wanting shared wellness experiences. Contact us with your group size for availability.'
    }
  ],
  
  aboutAngle: 'largest-team',
  aboutContent: 'Home Massage Ubud pioneered convenient in-accommodation massage services in Bali over a decade ago. With over 100 therapists covering all areas of the island, we have perfected the art of bringing professional spa experiences directly to where our clients stay. Our home massage service represents our core mission: making quality massage accessible, convenient, and stress-free for every visitor to Bali.',
  
  relatedServices: [
    { name: 'Mobile Massage', slug: 'mobile-massage' },
    { name: 'At-Home Massage', slug: 'at-home-massage' },
    { name: 'Professional Massage', slug: 'professional-massage' },
    { name: 'Spa Massage', slug: 'spa-massage' }
  ],
  
  benefits: [
    'Ultimate convenience - no travel required',
    'Relaxation continues after massage ends',
    'Professional experience in familiar space',
    'Flexible timing around your schedule',
    'Privacy of your own accommodation',
    'Perfect for all mobility levels',
    'Ideal for families with children',
    'Complete professional equipment provided'
  ],
  
  idealFor: [
    'Travelers seeking maximum convenience',
    'Those in remote or private villas',
    'Families with children or elderly',
    'Anyone preferring privacy over public spas',
    'Guests wanting to maximize relaxation',
    'Those with limited time between activities'
  ]
};

export default function HomeMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
