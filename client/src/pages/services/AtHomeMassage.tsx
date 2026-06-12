import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'At-Home Massage',
  slug: 'at-home-massage',
  keyword: 'at-home massage',
  
  metaTitle: 'At-Home Massage Ubud | Private Villa Treatment Bali | Book Today END',
  metaDescription: 'Professional at-home massage in the privacy of your Ubud accommodation. Licensed therapists bring complete spa setup to your villa or hotel. Book via WhatsApp. END',
  
  h1Title: 'At-Home Massage – Private Treatment in Your Space',
  heroSubtitle: 'Enjoy professional massage in the complete privacy of your own accommodation. Our at-home massage service brings licensed therapists and full spa equipment directly to your villa, hotel, or guesthouse for an intimate, personalized treatment experience.',
  heroLayout: 'image-left',
  heroBadgeText: 'Private In-Home',
  
  introduction: [
    'At-home massage offers a uniquely intimate wellness experience that public spas simply cannot match. In the privacy of your own accommodation, you control the environment completely - the temperature, lighting, music, and atmosphere. Our at-home massage service in Ubud brings professional therapists and equipment to your space, allowing you to create your ideal treatment environment.',
    'Privacy matters for many massage clients. Whether you prefer not undressing in unfamiliar locations, feel more relaxed in known environments, or simply value the convenience of at-home service, our therapists deliver spa-quality treatments within the sanctuary of your accommodation. Everything feels more comfortable when you are on your own turf.',
    'The at-home massage experience begins when you open your door. Our therapists arrive professionally dressed, with all equipment packed efficiently. They set up quietly and efficiently, transforming a corner of your space into a treatment area. After your massage, you remain in your comfortable environment - no journey required, no transition back to "regular life."',
    'We serve all types of private accommodations throughout Ubud and Bali with our at-home massage service. From intimate studios to expansive villas, we adapt our setup to your space. Therapists communicate in English and Indonesian for clear coordination. Book via WhatsApp any day from 8 AM to 10 PM - your at-home massage awaits.'
  ],
  
  whyChooseAngle: 'trusted-partners',
  whyChoosePoints: [
    'Complete privacy in your own accommodation',
    'Control over your environment and atmosphere',
    'Professional setup that adapts to any space',
    'No awkward public changing rooms or showers',
    'Continue relaxing in your space after treatment',
    'Discrete, professional service from arrival to departure'
  ],
  whyChooseTestimonial: {
    text: 'I value privacy and the spa environment has always felt uncomfortable to me. At-home massage changed everything. The therapist set up in my villa, I controlled the music and temperature, and I felt completely at ease throughout. Game changer!',
    author: 'Jennifer T., Chicago',
    rating: 5
  },
  
  pricingLayout: 'horizontal',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 380,000',
      priceIDR: 'Rp 380,000',
      description: 'Private at-home treatment in your personal space'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 390,000',
      priceIDR: 'Rp 390,000',
      description: 'Extended at-home session with enhanced privacy and comfort',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 450,000',
      priceIDR: 'Rp 450,000',
      description: 'Comprehensive at-home spa experience in complete privacy'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 760,000'
  },
  addOns: [
    { name: 'Privacy Screens', price: 'Rp 25,000' },
    { name: 'Aromatherapy Setup', price: 'Rp 50,000' },
    { name: 'Post-Massage Tea Service', price: 'Rp 35,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Home Massage',
      description: 'Our comprehensive home massage service delivering to all accommodations.',
      linkText: 'Explore home massage',
      slug: 'home-massage'
    },
    {
      name: 'Mobile Massage',
      description: 'On-demand massage reaching any location across Bali.',
      linkText: 'View mobile options',
      slug: 'mobile-massage'
    },
    {
      name: 'Professional Massage',
      description: 'Professional-grade treatments in the privacy of your space.',
      linkText: 'Discover professional quality',
      slug: 'professional-massage'
    },
    {
      name: 'Relaxing Massage',
      description: 'Peaceful relaxation enhanced by home environment comfort.',
      linkText: 'Add relaxation focus',
      slug: 'relaxing-massage'
    },
    {
      name: 'Couples Massage',
      description: 'Private couples experience in your accommodation.',
      linkText: 'Book private couples massage',
      slug: 'couples-massage'
    },
    {
      name: 'Spa Massage',
      description: 'Full spa experience created within your private space.',
      linkText: 'Try at-home spa',
      slug: 'spa-massage'
    }
  ],
  
  howItWorksFormat: 'timeline',
  howItWorksSteps: [
    { title: 'Book Your Time', description: 'Message us with your private accommodation details' },
    { title: 'Prepare Your Space', description: 'Choose where you would like treatment - we bring everything else' },
    { title: 'Private Setup', description: 'Therapist arrives and transforms your space quietly' },
    { title: 'Your Treatment', description: 'Enjoy massage in complete privacy on your own terms' }
  ],
  
  reviews: [
    {
      text: 'My elderly mother is uncomfortable in public spaces but needed massage therapy. At-home service was perfect - the therapist was patient and professional in our villa. Mom felt safe and cared for. Such a thoughtful service option.',
      author: 'The Williams Family',
      location: 'San Francisco, USA',
      rating: 5,
      type: 'family'
    },
    {
      text: 'Working from Bali, I need massage but dislike spa environments. At-home massage fits my introverted personality perfectly. The therapist comes, I receive treatment, and remain in my comfortable workspace. Perfect for people like me.',
      author: 'Michael Andersson',
      location: 'Sweden (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'For our honeymoon, we wanted complete privacy. At-home couples massage in our villa was incredibly intimate. No public spa awkwardness, just us and skilled therapists creating a romantic experience. Exactly what we wanted.',
      author: 'Tina & Robert',
      location: 'Cape Town, South Africa',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Some guests specifically request private massage services rather than using hotel spa. This at-home option gives them the privacy they want with professional quality. Important service for privacy-conscious travelers.',
      author: 'Putu Wirya',
      location: 'Boutique Hotel Manager',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'Guests choose my villa for its privacy. At-home massage complements this perfectly - they never need to leave for spa services. The therapists are respectful of the private atmosphere. Excellent addition to guest experience.',
      author: 'Komang Adi',
      location: 'Private Villa Owner',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'icons',
  trustPoints: [
    'Complete privacy guaranteed',
    'Licensed discrete therapists',
    'Safe professional products',
    'Respectful of your space',
    'Verified backgrounds',
    'Confidential service'
  ],
  
  faqs: [
    {
      question: 'How private is at-home massage compared to spas?',
      answer: 'At-home massage offers complete privacy. You are in your own accommodation with only your chosen therapist present. There are no other clients, shared changing areas, or unfamiliar environments. You control who is in your space and all aspects of the experience.'
    },
    {
      question: 'Can I control the music and lighting during at-home massage?',
      answer: 'Absolutely! Since treatment is in your space, you control the environment completely. Play your own music, adjust lighting to your preference, set the air conditioning as you like. The experience is fully customizable to your comfort.'
    },
    {
      question: 'What if my accommodation is small?',
      answer: 'We adapt to spaces of all sizes. Even compact studio apartments can accommodate our portable massage setup. We need approximately 2m x 2.5m of clear floor space. During booking consultation, share your space details and we will advise on optimal setup.'
    },
    {
      question: 'Is at-home massage safe for someone living alone?',
      answer: 'Safety is paramount. All our therapists are verified, background-checked professionals. You can also request a same-gender therapist if that increases your comfort. Trust your instincts - if anything feels uncomfortable, you have full control in your own space.'
    },
    {
      question: 'Do I need to wear anything specific for at-home massage?',
      answer: 'You can wear whatever makes you comfortable. Most clients prefer to undress as for a regular massage with appropriate draping, but underwear or comfortable clothing is perfectly fine. In your private space, you set the boundaries you prefer.'
    },
    {
      question: 'What happens after my at-home massage?',
      answer: 'The therapist quietly packs up equipment, accepts payment, and departs. You remain in your relaxed state in your own space - no driving, no transition. Many clients shower immediately in their own bathroom, change into pajamas, and continue relaxing. The experience is seamless.'
    },
    {
      question: 'Can my partner/family be home during at-home massage?',
      answer: 'Certainly! Your accommodation, your rules. Many clients have partners or family members present in other rooms. For complete privacy during treatment, simply ask others to remain elsewhere while your massage takes place.'
    },
    {
      question: 'Is at-home massage suitable for people who are shy about their body?',
      answer: 'At-home massage is ideal for body-conscious clients. In your own space with no strangers around, many people feel much more comfortable. Communicate your comfort level with your therapist - we accommodate all preferences and boundaries.'
    }
  ],
  
  aboutAngle: 'clients-per-year',
  aboutContent: 'Home Massage Ubud serves thousands of privacy-conscious clients annually who prefer at-home massage over public spa environments. We understand that comfort and privacy enhance the massage experience significantly. Our at-home service has been refined over years to deliver spa-quality treatment while respecting the intimate nature of clients personal spaces.',
  
  relatedServices: [
    { name: 'Home Massage', slug: 'home-massage' },
    { name: 'Mobile Massage', slug: 'mobile-massage' },
    { name: 'Professional Massage', slug: 'professional-massage' },
    { name: 'Relaxing Massage', slug: 'relaxing-massage' }
  ],
  
  benefits: [
    'Complete privacy in your own space',
    'Control over environment and atmosphere',
    'No public changing room discomfort',
    'Personalized comfort level',
    'Immediate post-massage privacy',
    'Familiar surroundings reduce stress',
    'No travel before or after',
    'Full customization of experience'
  ],
  
  idealFor: [
    'Privacy-conscious individuals',
    'Those uncomfortable in public spa settings',
    'Introverts preferring familiar spaces',
    'Anyone valuing intimate environments',
    'Body-conscious clients seeking comfort',
    'Those wanting complete control over their experience'
  ]
};

export default function AtHomeMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
