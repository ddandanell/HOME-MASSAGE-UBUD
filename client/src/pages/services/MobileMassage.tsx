import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Mobile Massage',
  slug: 'mobile-massage',
  keyword: 'mobile massage',
  
  metaTitle: 'Mobile Massage Ubud | On-Demand Spa Service Bali | Book WhatsApp END',
  metaDescription: 'Professional mobile massage coming to your location in Ubud and Bali. On-demand spa service with licensed therapists. We travel to you. Book via WhatsApp anytime. END',
  
  h1Title: 'Mobile Massage – We Come to Your Location',
  heroSubtitle: 'Experience the freedom of on-demand wellness with our professional mobile massage service. Our licensed therapists travel throughout Ubud and Bali, bringing complete spa setups directly to wherever you are staying or wherever you need treatment.',
  heroLayout: 'instant-booking',
  heroBadgeText: 'On-Demand Service',
  
  introduction: [
    'Mobile massage represents the future of spa services in Bali. Rather than being tied to fixed spa locations with limited hours, our mobile massage service brings professional treatments to you on your schedule, at your location. Whether you are staying in a secluded rice terrace villa, a beachside hotel, or anywhere across the island, our therapists mobilize to serve you.',
    'The mobile massage concept answers the practical challenges tourists face. After a day exploring temples or rice terraces, the last thing you want is to travel somewhere for relaxation. Our mobile massage therapists navigate Bali roads so you do not have to. They arrive equipped with everything needed for a professional spa experience - massage table, premium oils, fresh linens, and any specialty items.',
    'Our mobile massage coverage extends across all of Bali, not just Ubud. From the cultural heart of Ubud to the beaches of Seminyak and Canggu, from the cliffs of Uluwatu to the quiet bays of Sanur and Nusa Dua, our team reaches you. This island-wide mobility means consistent quality service no matter where your Bali journey takes you.',
    'Mobile massage bookings work through our responsive WhatsApp service. Simply send your location, preferred treatment, and desired time. We confirm availability and dispatch an appropriate therapist. Operating from 8 AM to 10 PM daily with same-day booking often available, mobile massage adapts to your needs rather than forcing you to adapt to ours.'
  ],
  
  whyChooseAngle: 'support-24-7',
  whyChoosePoints: [
    'Island-wide mobile coverage throughout all of Bali',
    'Licensed therapists equipped with complete portable setups',
    'Same-day booking available with quick WhatsApp response',
    'Navigation expertise to reach any accommodation',
    'Flexible scheduling from 8 AM to 10 PM daily',
    'Consistent quality regardless of your location'
  ],
  whyChooseTestimonial: {
    text: 'We were island hopping between Ubud, Canggu, and Uluwatu. Mobile Massage followed us everywhere! Same great quality at each location. So convenient for travelers moving around Bali.',
    author: 'Emma & Ryan',
    rating: 5
  },
  
  pricingLayout: 'comparison-table',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 380,000',
      priceIDR: 'Rp 380,000',
      description: 'Essential mobile massage with full professional setup'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 390,000',
      priceIDR: 'Rp 390,000',
      description: 'Extended mobile session with enhanced treatment time',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 450,000',
      priceIDR: 'Rp 450,000',
      description: 'Complete mobile spa experience with additional techniques'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 760,000'
  },
  addOns: [
    { name: 'Hot Stone Addition', price: 'Rp 120,000' },
    { name: 'Aromatherapy Enhancement', price: 'Rp 50,000' },
    { name: 'Extended Foot Focus', price: 'Rp 75,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Home Massage',
      description: 'Dedicated home massage service for your accommodation.',
      linkText: 'View home massage details',
      slug: 'home-massage'
    },
    {
      name: 'At-Home Massage',
      description: 'At-home treatments delivered with professional care.',
      linkText: 'Explore at-home options',
      slug: 'at-home-massage'
    },
    {
      name: 'Professional Massage',
      description: 'Professional-grade mobile treatments throughout Bali.',
      linkText: 'Discover professional service',
      slug: 'professional-massage'
    },
    {
      name: 'Spa Massage',
      description: 'Mobile spa atmosphere created wherever you are.',
      linkText: 'Try mobile spa experience',
      slug: 'spa-massage'
    },
    {
      name: 'Couples Massage',
      description: 'Mobile couples massage for partners traveling together.',
      linkText: 'Book mobile couples massage',
      slug: 'couples-massage'
    },
    {
      name: 'Luxury Massage',
      description: 'Premium mobile massage with luxury touches.',
      linkText: 'Upgrade to luxury mobile',
      slug: 'luxury-massage'
    }
  ],
  
  howItWorksFormat: 'three-step',
  howItWorksSteps: [
    { title: 'Share Location', description: 'Send us your address via WhatsApp wherever you are in Bali' },
    { title: 'We Mobilize', description: 'A licensed therapist travels to you with complete equipment' },
    { title: 'Relax Anywhere', description: 'Enjoy professional massage at your location' }
  ],
  
  reviews: [
    {
      text: 'We were staying in a very remote villa near Sidemen. I was sure no massage service would come that far. Mobile Massage proved me wrong - the therapist arrived with everything needed. Impressive reach and service.',
      author: 'The Henderson Family',
      location: 'Auckland, New Zealand',
      rating: 5,
      type: 'family'
    },
    {
      text: 'I move around Bali frequently for work. Having a reliable mobile massage service that follows me is essential. Same quality whether Im in Ubud, Canggu, or Sanur. Consistently excellent.',
      author: 'Sophie Chen',
      location: 'Hong Kong (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'On our honeymoon we changed locations three times. Mobile massage came to each hotel - Seminyak, Ubud, and Nusa Dua. Same great therapists, seamless service across all locations. Perfect for travelers.',
      author: 'Jamie & Patrick',
      location: 'Dublin, Ireland',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our resort is off the beaten path. Mobile Massage is one of the few services willing to come this far. The therapists are professional and guests appreciate that quality service reaches even remote locations.',
      author: 'Made Subawa',
      location: 'Eco Resort Manager, East Bali',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'I manage villas across multiple Bali locations. Mobile Massage serves all of them reliably. Whether guests are in Ubud or Uluwatu, they receive the same quality. Valuable service partner.',
      author: 'Nyoman Ardika',
      location: 'Multi-Property Villa Manager',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'badges',
  trustPoints: [
    'Island-Wide Coverage',
    'Licensed Therapists',
    'Portable Equipment',
    'Same-Day Available',
    'Verified Professionals',
    'Reliable Navigation'
  ],
  
  faqs: [
    {
      question: 'How far does your mobile massage service reach?',
      answer: 'We provide mobile massage throughout all of Bali including Ubud, Seminyak, Canggu, Sanur, Nusa Dua, Jimbaran, Uluwatu, Kuta, Legian, and more remote areas like Sidemen, Amed, and Lovina. If you are in Bali, we can most likely reach you.'
    },
    {
      question: 'Is there an extra charge for mobile massage travel?',
      answer: 'Mobile massage to most popular areas has no additional travel fee. For locations more than 30 minutes from central Ubud, a small transport surcharge may apply. We always inform you of any extra costs when confirming your booking.'
    },
    {
      question: 'How quickly can you reach my location?',
      answer: 'For central areas like Ubud, Seminyak, and Canggu, therapists typically arrive within 1-2 hours of booking confirmation. More remote locations may require more planning time. Same-day mobile massage is often possible with advance notice.'
    },
    {
      question: 'Can I book mobile massage while traveling between locations?',
      answer: 'Yes! Many clients book mobile massage at multiple locations during their Bali trip. Simply provide each address when booking. We can set up recurring appointments at different locations throughout your stay.'
    },
    {
      question: 'What equipment do your mobile therapists bring?',
      answer: 'Our mobile therapists arrive with professional portable massage tables, premium organic oils, fresh linens and towels, aromatherapy supplies if requested, and any specialty items for your chosen treatment. Everything needed for a complete spa experience travels with them.'
    },
    {
      question: 'Do you offer mobile massage for events or groups?',
      answer: 'Absolutely! We provide mobile massage for corporate events, villa parties, yoga retreats, and group gatherings across Bali. Multiple therapists can be dispatched simultaneously. Contact us via WhatsApp to discuss your event requirements.'
    },
    {
      question: 'How do therapists find my location?',
      answer: 'Our therapists are experienced navigating Bali. Share your exact address or Google Maps pin via WhatsApp. For difficult-to-find locations, we may call for directions closer to arrival time. Villa staff can also help coordinate access.'
    },
    {
      question: 'What if I need to change my mobile massage location?',
      answer: 'Location changes are no problem with reasonable notice. Contact us via WhatsApp if your plans change. We adapt to your travel schedule - thats the beauty of mobile massage flexibility.'
    }
  ],
  
  aboutAngle: 'years-experience',
  aboutContent: 'Home Massage Ubud has operated mobile massage services across Bali for over a decade. Our therapists collectively navigate thousands of kilometers monthly, reaching clients in the most remote villas and busiest tourist areas alike. This mobile expertise means reliable, consistent service wherever your Bali adventures take you.',
  
  relatedServices: [
    { name: 'Home Massage', slug: 'home-massage' },
    { name: 'At-Home Massage', slug: 'at-home-massage' },
    { name: 'Professional Massage', slug: 'professional-massage' },
    { name: 'Best Massage Services', slug: 'best-massage-services' }
  ],
  
  benefits: [
    'Freedom from spa location constraints',
    'Service at any Bali accommodation',
    'Same quality across all locations',
    'Flexible scheduling around your travels',
    'Professional equipment brought to you',
    'No navigation stress for clients',
    'Ideal for multi-location trips',
    'On-demand wellness accessibility'
  ],
  
  idealFor: [
    'Travelers moving between Bali locations',
    'Guests in remote or unique accommodations',
    'Event and group organizers',
    'Those preferring on-demand service',
    'Anyone wanting location flexibility',
    'Visitors throughout all of Bali'
  ]
};

export default function MobileMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
