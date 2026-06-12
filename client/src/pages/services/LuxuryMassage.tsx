import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Luxury Massage',
  slug: 'luxury-massage',
  keyword: 'luxury massage',
  
  metaTitle: 'Luxury Massage Ubud | Premium Villa Spa Experience Bali | Book Now END',
  metaDescription: 'Indulge in luxury massage in your Ubud villa. Premium oils, senior therapists, extended treatments, exquisite details. Five-star service. Book via WhatsApp. END',
  
  h1Title: 'Luxury Massage – Five-Star Villa Experience in Ubud',
  heroSubtitle: 'Elevate your massage experience to the extraordinary with our luxury massage service. Premium products, senior therapists, extended treatments, and exquisite attention to detail create an unparalleled spa experience in your private villa.',
  heroLayout: 'price-badge',
  heroBadgeText: 'Premium Experience',
  
  introduction: [
    'For those who appreciate the finest things in life, luxury massage delivers an experience that transcends standard spa services. Every element is elevated: premium organic oils imported from finest sources, senior therapists with decades of expertise, extended treatment times, and meticulous attention to details that transform massage into art. Our luxury massage service brings this exceptional experience to your Ubud villa.',
    'Luxury massage is defined not just by what is included, but by the caliber of every component. The oils are not merely organic but sourced from specific regions known for exceptional quality. The linens are softer, fresher, more luxurious. The therapists are our most experienced practitioners. The pace is unhurried. Every element signals that this experience is extraordinary.',
    'The luxury massage experience begins before treatment starts. We create an atmosphere of refined elegance in your space with ambient elements, aromatherapy enhancement, and thoughtful touches. During treatment, techniques flow seamlessly with sophisticated skill. After your massage, refreshments and graceful closure extend the indulgent experience.',
    'Our luxury massage appeals to discerning travelers who recognize and value genuine quality. Whether celebrating special occasions, treating yourself to the best, or simply expecting excellence as standard, luxury massage delivers an experience worthy of your expectations. Available throughout Ubud and Bali - contact us via WhatsApp to arrange your premium treatment.'
  ],
  
  whyChooseAngle: 'premium-oils',
  whyChoosePoints: [
    'Premium imported organic oils from finest sources',
    'Senior therapists with 10+ years experience',
    'Extended treatment times for unhurried luxury',
    'Ambient environment creation with premium elements',
    'Luxurious linens and superior equipment',
    'Graceful service from arrival to departure'
  ],
  whyChooseTestimonial: {
    text: 'I have experienced five-star spas worldwide, and this luxury massage exceeded many of them. The quality of the oils, the skill of the therapist, the attention to every detail - genuinely exceptional. Worth every premium.',
    author: 'Elizabeth T., Singapore',
    rating: 5
  },
  
  pricingLayout: 'cards',
  packages: [
    {
      duration: '90 Minutes',
      price: 'Rp 700,000',
      priceIDR: 'Rp 700,000',
      description: 'Premium luxury massage with senior therapist and finest products'
    },
    {
      duration: '120 Minutes',
      price: 'Rp 780,000',
      priceIDR: 'Rp 780,000',
      description: 'Extended luxury experience with hot stone and aromatherapy enhancement',
      popular: true
    },
    {
      duration: '180 Minutes',
      price: 'Rp 1,100,000',
      priceIDR: 'Rp 1,100,000',
      description: 'Ultimate luxury ritual including body treatment, massage, and refreshments'
    }
  ],
  couplesPricing: {
    duration: '120 Minutes',
    price: 'Rp 1,450,000'
  },
  addOns: [
    { name: 'Champagne Service', price: 'Rp 450,000' },
    { name: 'Rose Gold Body Treatment', price: 'Rp 380,000' },
    { name: 'Caviar Facial', price: 'Rp 320,000' },
    { name: 'Floral Bath Preparation', price: 'Rp 250,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Spa Massage',
      description: 'Complete spa experience complementing luxury treatment.',
      linkText: 'View spa experiences',
      slug: 'spa-massage'
    },
    {
      name: 'Couples Massage',
      description: 'Luxury couples experience for romantic celebrations.',
      linkText: 'Plan luxury couples massage',
      slug: 'couples-massage'
    },
    {
      name: 'Aromatherapy Massage',
      description: 'Premium essential oils elevate the luxury experience.',
      linkText: 'Add premium aromatherapy',
      slug: 'aromatherapy-massage'
    },
    {
      name: 'Hot Stone Massage',
      description: 'Heated volcanic stones add luxury dimension.',
      linkText: 'Include hot stone luxury',
      slug: 'hot-stone-massage'
    },
    {
      name: 'Best Massage Services',
      description: 'Explore our highest-rated premium services.',
      linkText: 'View best services',
      slug: 'best-massage-services'
    },
    {
      name: 'Professional Massage',
      description: 'Professional excellence underpins luxury delivery.',
      linkText: 'Discover professional quality',
      slug: 'professional-massage'
    }
  ],
  
  howItWorksFormat: 'timeline',
  howItWorksSteps: [
    { title: 'Concierge Booking', description: 'Personal attention to your preferences and requirements' },
    { title: 'Premium Preparation', description: 'We transform your space with luxury elements' },
    { title: 'Exquisite Treatment', description: 'Senior therapist delivers exceptional massage' },
    { title: 'Graceful Completion', description: 'Refreshments and seamless closure of experience' }
  ],
  
  reviews: [
    {
      text: 'For my parents 50th anniversary, we wanted something special. The luxury massage experience exceeded our hopes - the therapists treated them like royalty, the setup was beautiful, and the quality was undeniably premium. Perfect celebration gift.',
      author: 'The Peterson Family',
      location: 'Beverly Hills, USA',
      rating: 5,
      type: 'family'
    },
    {
      text: 'As someone who works hard for the finest things, I recognize genuine luxury. This service delivers it authentically - not just fancy presentation but actual quality difference in oils, skill, and attention. Real luxury, not theater.',
      author: 'Thomas Richter',
      location: 'Munich, Germany (Entrepreneur)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'Our engagement celebration included luxury couples massage. Rose petals, champagne, synchronized massage by expert therapists - every detail was perfect. Worth investing in for truly special moments.',
      author: 'Isabella & Marco',
      location: 'Milan, Italy',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our luxury resort maintains the highest standards. This luxury massage service matches our level - we confidently recommend it to guests expecting five-star quality. Premium experience that reflects well on us.',
      author: 'Made Wijaya',
      location: 'Luxury Resort General Manager',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'My ultra-luxury villa hosts discerning guests who expect the best. This luxury massage service delivers appropriately - premium in every dimension. The quality matches the villa experience perfectly.',
      author: 'Ketut Darma',
      location: 'Luxury Villa Owner, Sayan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'icons',
  trustPoints: [
    'Premium imported products',
    'Senior expert therapists',
    'Luxury equipment standards',
    'Meticulous attention to detail',
    'Confidential VIP service',
    'Exceptional quality guaranteed'
  ],
  
  faqs: [
    {
      question: 'What makes luxury massage different from standard massage?',
      answer: 'Every element is elevated: premium imported organic oils, senior therapists with 10+ years experience, extended treatment times, luxurious linens, ambient atmosphere creation, and meticulous attention to details throughout. The difference is in genuine quality, not just presentation.'
    },
    {
      question: 'What premium products are used in luxury massage?',
      answer: 'We use imported organic oils from recognized sources - not generic coconut oil but specific premium varieties. Essential oils are therapeutic grade. Linens are luxury cotton changed fresh for each client. Hot stones are genuine volcanic. Every product is chosen for exceptional quality.'
    },
    {
      question: 'How experienced are luxury massage therapists?',
      answer: 'Our luxury massage therapists have minimum 10 years professional experience and demonstrated exceptional skill. They are our senior practitioners who have earned the ability to deliver premium services. Many have trained at renowned spas and bring sophisticated technique.'
    },
    {
      question: 'Is luxury massage worth the premium price?',
      answer: 'For those who appreciate genuine quality, absolutely. The difference is tangible - superior products, more skilled touch, unhurried pace, and attention to nuance. If you value excellence and can discern quality differences, luxury massage delivers real value beyond standard services.'
    },
    {
      question: 'What special occasions suit luxury massage?',
      answer: 'Luxury massage perfectly marks anniversaries, engagements, birthdays, honeymoons, celebrations, and any moment deserving exceptional treatment. It is also appropriate simply when you want the best available, without requiring special justification.'
    },
    {
      question: 'Can you accommodate specific luxury preferences?',
      answer: 'Absolutely. Share your preferences when booking - specific oil scents, music, temperature, pressure, focus areas, dietary requirements for refreshments, and any other details. Luxury service means accommodating individual preferences with excellence.'
    },
    {
      question: 'What is included in the luxury ambient setup?',
      answer: 'Luxury setup includes premium aromatherapy diffusion, ambient lighting, carefully selected music, superior quality linens, and refined presentation throughout. For longer packages, floral arrangements and refreshments may be included. We transform your space into a five-star environment.'
    },
    {
      question: 'Is luxury massage available for couples?',
      answer: 'Yes! Luxury couples massage is among our most popular premium services. Two senior therapists work simultaneously with synchronized skill. Additional romantic elements like champagne, rose petals, and photography can be arranged. Perfect for celebrating together in style.'
    }
  ],
  
  aboutAngle: 'years-experience',
  aboutContent: 'Home Massage Ubud luxury service represents our highest tier of excellence, developed over a decade of serving discerning clients who expect the best. Our luxury therapists are hand-selected for exceptional skill and refined service delivery. We source premium products specifically for luxury treatments and maintain standards that justify the premium positioning.',
  
  relatedServices: [
    { name: 'Spa Massage', slug: 'spa-massage' },
    { name: 'Couples Massage', slug: 'couples-massage' },
    { name: 'Best Massage Services', slug: 'best-massage-services' },
    { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' }
  ],
  
  benefits: [
    'Genuinely premium experience throughout',
    'Superior oils and products on skin',
    'Expert touch from senior therapists',
    'Unhurried pace for deep relaxation',
    'Atmosphere matching luxury expectations',
    'Special occasion worthy experience',
    'Memorable indulgent treatment',
    'Excellence in every detail'
  ],
  
  idealFor: [
    'Those who appreciate genuine quality',
    'Special occasion celebrations',
    'Luxury villa and resort guests',
    'Discerning travelers expecting excellence',
    'Anniversary, birthday, honeymoon celebrations',
    'Anyone wanting the best available'
  ]
};

export default function LuxuryMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
