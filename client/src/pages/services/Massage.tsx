import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Massage',
  slug: 'massage',
  keyword: 'massage',
  
  metaTitle: 'Massage in Ubud Bali | Professional Villa Massage Service | Home Massage Ubud END',
  metaDescription: 'Experience the finest massage in Ubud Bali delivered to your villa. Over 100 certified therapists, premium oils, 10+ years experience. Book via WhatsApp today. END',
  
  h1Title: 'Massage in Ubud – Premium Villa Service',
  heroSubtitle: 'Discover authentic Balinese massage therapy brought directly to your accommodation. Our certified therapists deliver spa-quality treatments to villas, hotels, and guesthouses throughout Ubud and Bali.',
  heroLayout: 'image-right',
  heroBadgeText: 'Premium Villa Massage',
  
  introduction: [
    'Welcome to Home Massage Ubud, your premier destination for professional massage in Ubud, Bali. We specialize in delivering exceptional massage therapy directly to your villa, hotel, or guesthouse, eliminating the need to travel to a spa. Our massage services combine traditional Balinese healing techniques with modern therapeutic approaches, creating an unforgettable wellness experience in the comfort of your own space.',
    'Our team of over 100 certified massage therapists brings years of training and expertise to every session. Each therapist is fluent in both English and Indonesian, ensuring clear communication throughout your treatment. Whether you are seeking relief from muscle tension, stress reduction, or simply wish to indulge in relaxation, our massage services cater to all needs and preferences.',
    'The massage experience in Ubud holds special significance, as this region is renowned worldwide as a center for wellness and healing arts. By choosing our mobile massage service, you gain access to this rich therapeutic tradition without leaving your accommodation. We bring professional massage tables, premium organic oils, fresh linens, and all necessary equipment directly to you.',
    'Our massage services operate from 8 AM to 10 PM daily, accommodating early morning sessions before your day begins or evening treatments to help you unwind. With same-day booking available through WhatsApp, arranging your massage in Ubud has never been more convenient. Trust the largest massage team in Bali to deliver an exceptional experience every time.'
  ],
  
  whyChooseAngle: 'largest-team' as const,
  whyChoosePoints: [
    'Over 100 professionally trained and certified massage therapists',
    'Premium organic massage oils and aromatherapy blends included',
    'Complete hygiene guarantee with sanitized equipment for every session',
    'Flexible scheduling from 8 AM to 10 PM, seven days a week',
    'English and Indonesian speaking therapists for clear communication',
    'Trusted by luxury villas, boutique hotels, and Airbnb hosts across Bali'
  ],
  whyChooseTestimonial: {
    text: 'The massage therapist arrived right on time with everything needed. The quality was exceptional - better than many spas I have visited. Highly recommend for anyone staying in Ubud!',
    author: 'Jennifer T., Melbourne',
    rating: 5
  },
  
  pricingLayout: 'cards',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 240,000',
      priceIDR: 'Rp 240,000',
      description: 'Perfect introduction to massage therapy with full body relaxation treatment'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 360,000',
      priceIDR: 'Rp 360,000',
      description: 'Extended session allowing deeper work on problem areas and enhanced relaxation',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 480,000',
      priceIDR: 'Rp 480,000',
      description: 'Comprehensive treatment with additional focus areas and ultimate relaxation time'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 760,000'
  },
  addOns: [
    { name: 'Hot Stone Enhancement', price: 'Rp 100,000' },
    { name: 'Aromatherapy Upgrade', price: 'Rp 50,000' },
    { name: 'Scalp Massage', price: 'Rp 75,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Traditional Balinese Massage',
      description: 'Ancient healing techniques combining gentle stretches, acupressure, and aromatherapy for complete body rejuvenation.',
      linkText: 'Learn more about Balinese massage',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Deep Tissue Massage',
      description: 'Intensive therapy targeting deep muscle layers to release chronic tension and restore mobility.',
      linkText: 'Explore deep tissue therapy',
      slug: 'deep-tissue-massage'
    },
    {
      name: 'Aromatherapy Massage',
      description: 'Luxurious treatment using premium essential oils to promote healing and emotional balance.',
      linkText: 'Discover aromatherapy benefits',
      slug: 'aromatherapy-massage'
    },
    {
      name: 'Hot Stone Massage',
      description: 'Heated volcanic stones combined with massage techniques for ultimate muscle relaxation.',
      linkText: 'View hot stone details',
      slug: 'hot-stone-massage'
    },
    {
      name: 'Foot Reflexology',
      description: 'Targeted pressure point work on feet to promote whole-body wellness and relaxation.',
      linkText: 'Learn about reflexology',
      slug: 'foot-reflexology'
    },
    {
      name: 'Couples Wellness Ritual',
      description: 'Romantic synchronized massage experience for two, perfect for honeymoons and celebrations.',
      linkText: 'Book couples massage',
      slug: 'couples-wellness-ritual'
    }
  ],
  
  howItWorksFormat: 'four-step',
  
  reviews: [
    {
      text: 'We booked massages for our whole family during our Ubud vacation. The therapists were incredibly professional and accommodating. The children loved their gentle treatments while my husband and I enjoyed deep tissue work. Outstanding service!',
      author: 'The Henderson Family',
      location: 'Sydney, Australia',
      rating: 5,
      type: 'family'
    },
    {
      text: 'As digital nomads working in Bali, we rely on regular massages to combat desk strain. Home Massage Ubud has become our go-to service. Convenient booking, excellent therapists, and great value.',
      author: 'Marcus & Elena',
      location: 'Germany (Digital Nomads)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'Celebrated our anniversary with a couples massage at our villa. The therapists created such a romantic atmosphere with candles and aromatherapy. It was the highlight of our trip!',
      author: 'Wei Lin & James',
      location: 'Singapore',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'I manage several villas in Ubud and exclusively recommend Home Massage Ubud to my guests. They are reliable, professional, and consistently deliver excellent service. My guests always leave positive reviews.',
      author: 'Ketut Wijaya',
      location: 'Villa Owner, Ubud',
      rating: 5,
      type: 'villa-owner'
    },
    {
      text: 'Staying at a hotel nearby, I wanted an in-room massage after a long flight. The therapist arrived promptly and the jet lag recovery massage was exactly what I needed. Will definitely book again!',
      author: 'Robert Chen',
      location: 'Hotel Guest, Hong Kong',
      rating: 5,
      type: 'hotel-guest'
    }
  ],
  
  trustLayout: 'grid',
  trustPoints: [
    'Complete hygiene guarantee with sanitized equipment',
    'All therapists are certified professionals',
    'Premium organic massage oils used',
    'Team of 100+ trained massage specialists',
    'Background-checked staff for your safety',
    'Your personal data is kept private and secure'
  ],
  
  faqs: [
    {
      question: 'What types of massage do you offer in Ubud?',
      answer: 'We offer a comprehensive range of massage services including Traditional Balinese Massage, Deep Tissue Massage, Aromatherapy Massage, Hot Stone Massage, Thai Massage, Foot Reflexology, Pregnancy Massage, Couples Massage, Sports Massage, and specialized treatments. Each massage can be customized to your preferences and needs.'
    },
    {
      question: 'How do I book a massage in Ubud?',
      answer: 'Booking is simple via WhatsApp. Send us a message with your preferred treatment, date, time, and accommodation address. We typically respond within 5 minutes during operating hours (8 AM - 10 PM). Same-day bookings are often available depending on therapist availability.'
    },
    {
      question: 'Do you bring all massage equipment to my villa?',
      answer: 'Yes, our therapists arrive with everything needed for a professional massage experience. This includes a portable massage table, premium organic oils, fresh linens, towels, and any additional items specific to your chosen treatment. You simply need to provide a suitable space.'
    },
    {
      question: 'Are your massage therapists certified and experienced?',
      answer: 'Absolutely. All our therapists hold professional certifications in massage therapy and have a minimum of 3 years experience. Many specialize in specific techniques like Balinese, deep tissue, or prenatal massage. We conduct thorough background checks on all staff.'
    },
    {
      question: 'What areas in Bali do you serve for massage?',
      answer: 'We provide mobile massage services throughout Bali including Ubud (central, north, south, east), Seminyak, Canggu, Sanur, Nusa Dua, Jimbaran, Uluwatu, Kuta, Legian, and surrounding areas. Travel fees may apply for locations outside central Ubud.'
    },
    {
      question: 'Can I request a male or female massage therapist?',
      answer: 'Yes, you can specify your preference for a male or female therapist when booking. We strive to accommodate all requests based on availability. Simply mention your preference in your WhatsApp booking message.'
    },
    {
      question: 'What should I prepare before my massage appointment?',
      answer: 'Simply ensure you have a quiet, comfortable space for the massage table. The area should be at least 2m x 2.5m with access to electricity for any heating equipment. Taking a shower beforehand is recommended but not required. Avoid heavy meals 1-2 hours before your massage.'
    },
    {
      question: 'What payment methods do you accept for massage services?',
      answer: 'We accept cash payment in Indonesian Rupiah at the end of your session. Credit card payments can be arranged in advance. For large bookings or corporate clients, bank transfers are also available. Tipping is appreciated but not required.'
    }
  ],
  
  aboutAngle: 'largest-team',
  aboutContent: 'Home Massage Ubud operates the largest professional massage team in Bali with over 100 certified therapists. Founded over 10 years ago, we have served more than 10,000 satisfied clients including individual travelers, families, couples, corporate groups, and local residents. Our partnerships with luxury villas, boutique hotels, and Airbnb hosts across Bali ensure consistent, high-quality service delivery wherever you stay.',
  
  relatedServices: [
    { name: 'Spa Massage', slug: 'spa-massage' },
    { name: 'Relaxing Massage', slug: 'relaxing-massage' },
    { name: 'Full Body Massage', slug: 'full-body-massage' },
    { name: 'Home Massage', slug: 'home-massage' }
  ],
  
  benefits: [
    'Complete stress relief and relaxation',
    'Improved blood circulation throughout the body',
    'Relief from muscle tension and chronic pain',
    'Enhanced flexibility and range of motion',
    'Better sleep quality and duration',
    'Reduced anxiety and mental tension',
    'Boosted immune system function',
    'Improved overall sense of wellbeing'
  ],
  
  idealFor: [
    'Tourists seeking authentic Balinese wellness',
    'Couples celebrating special occasions',
    'Families wanting convenient spa experiences',
    'Digital nomads needing regular muscle relief',
    'Business travelers recovering from jet lag',
    'Anyone preferring privacy over public spas'
  ]
};

export default function MassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
