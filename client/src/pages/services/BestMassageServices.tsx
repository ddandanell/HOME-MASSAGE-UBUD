import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Best Massage Services',
  slug: 'best-massage-services',
  keyword: 'best massage services',
  
  metaTitle: 'Best Massage Services Ubud | Top-Rated Villa Spa Bali | Book Now END',
  metaDescription: 'Discover the best massage services in Ubud with our top-rated villa spa delivery. Over 100 therapists, 10+ years experience, 5-star reviews. Book via WhatsApp today. END',
  
  h1Title: 'Best Massage Services in Ubud – Top-Rated Villa Spa',
  heroSubtitle: 'Experience why thousands choose us as the best massage services in Ubud. Our combination of over 100 certified therapists, 10+ years of experience, and consistent 5-star reviews has established us as the premier choice for villa massage delivery throughout Bali.',
  heroLayout: 'instant-booking',
  heroBadgeText: 'Top-Rated Service',
  
  introduction: [
    'When searching for the best massage services in Ubud, discerning travelers look beyond marketing claims to real indicators of quality: verified reviews, professional credentials, consistent experiences, and genuine expertise. Our massage service has earned its reputation as the best through years of delivering exactly what we promise to thousands of satisfied clients across Bali.',
    'What makes a massage service genuinely the best? We believe it starts with the therapists - ours are certified, experienced professionals who continue developing their skills. It continues with reliability - showing up on time, every time, prepared and professional. It extends to range - offering diverse treatments to meet diverse needs. And it culminates in results - clients who feel genuinely better after every session.',
    'Our position as the best massage services in Ubud is built on infrastructure that supports excellence. Over 100 therapists allow us to accommodate demand without rushing or substituting. 10+ years of operation means refined systems and accumulated expertise. Coverage across all of Bali ensures consistent quality wherever guests stay. These foundations make best-in-class service sustainable.',
    'We invite you to experience what best really means. Whether you seek traditional Balinese massage, therapeutic treatment, couples experience, or any of our diverse offerings, you receive the quality that has earned us our reputation. Book via WhatsApp and join the thousands who consider us the best massage services in Ubud and Bali.'
  ],
  
  whyChooseAngle: 'largest-team',
  whyChoosePoints: [
    'Over 100 certified professional therapists',
    'More than 10 years serving Bali visitors',
    'Consistent 5-star ratings across platforms',
    'Complete range of massage services',
    'Island-wide coverage throughout Bali',
    'Trusted by villas, hotels, and resorts'
  ],
  whyChooseTestimonial: {
    text: 'We tried several massage services before finding this one - the difference is clear. Reliable, professional, consistent quality. After three visits to Bali using them every time, I can confirm they deserve their reputation as the best.',
    author: 'Jonathan P., Hong Kong',
    rating: 5
  },
  
  pricingLayout: 'minimalist-grid',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 280,000',
      priceIDR: 'Rp 280,000',
      description: 'Best-quality massage service with certified therapist'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 400,000',
      priceIDR: 'Rp 400,000',
      description: 'Extended treatment with our top-rated service',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 520,000',
      priceIDR: 'Rp 520,000',
      description: 'Comprehensive best-in-class massage experience'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 760,000'
  },
  addOns: [
    { name: 'Premium Therapist Request', price: 'Rp 50,000' },
    { name: 'Special Treatment Request', price: 'Rp 75,000' },
    { name: 'Extended Area Coverage', price: 'Rp 50,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Traditional Balinese Massage',
      description: 'Our best-rated traditional massage with authentic techniques.',
      linkText: 'Try our best Balinese',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Deep Tissue Massage',
      description: 'Top-rated deep tissue by skilled therapeutic specialists.',
      linkText: 'Book best deep tissue',
      slug: 'deep-tissue-massage'
    },
    {
      name: 'Couples Massage',
      description: 'Our most popular romantic service with exceptional reviews.',
      linkText: 'Reserve best couples massage',
      slug: 'couples-massage'
    },
    {
      name: 'Spa Massage',
      description: 'Premium spa experience delivered to your villa.',
      linkText: 'Experience best spa service',
      slug: 'spa-massage'
    },
    {
      name: 'Luxury Massage',
      description: 'Our highest tier service for those wanting the absolute best.',
      linkText: 'Indulge in luxury',
      slug: 'luxury-massage'
    },
    {
      name: 'Professional Massage',
      description: 'Professional-grade service that defines our quality standard.',
      linkText: 'Book professional quality',
      slug: 'professional-massage'
    }
  ],
  
  howItWorksFormat: 'three-step',
  howItWorksSteps: [
    { title: 'Easy Booking', description: 'WhatsApp us with your preferences - we respond quickly' },
    { title: 'Best Therapist Match', description: 'We assign the ideal therapist for your needs' },
    { title: 'Quality Guaranteed', description: 'Receive the service that earned our reputation' }
  ],
  
  reviews: [
    {
      text: 'After extensive research on the best massage services in Ubud, we chose this company. They exceeded every expectation - professional therapists, quality products, reliable service. The reviews are accurate - genuinely the best.',
      author: 'The Anderson Family',
      location: 'Melbourne, Australia',
      rating: 5,
      type: 'family'
    },
    {
      text: 'Ive been a digital nomad in Bali for two years and tried many massage services. This is objectively the best - consistent quality every time, professional communication, reliable scheduling. My go-to without question.',
      author: 'Caroline Schmidt',
      location: 'Germany (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We wanted the best for our honeymoon massage experience. Reading reviews, this service stood out. The reality matched the reputation - beautiful setup, skilled therapists, perfect execution. The best choice we made.',
      author: 'Nathan & Amy',
      location: 'Auckland, New Zealand',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'As a hotel that only partners with the best services, we chose this massage company years ago. They consistently deliver the quality our guests expect. Repeatedly voted best by our guests for good reason.',
      author: 'Putu Ayu',
      location: 'Boutique Hotel Owner, Ubud',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'I refer only the best services to my villa guests. This massage company has earned that referral through years of excellence. Guests consistently report outstanding experiences. The best partner I have.',
      author: 'Wayan Sudira',
      location: 'Luxury Villa Owner, Sayan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'grid',
  trustPoints: [
    '100+ certified therapists',
    '10+ years of excellence',
    '5-star consistent ratings',
    'All-Bali coverage',
    'Hotel-trusted partner',
    'Quality guaranteed'
  ],
  
  faqs: [
    {
      question: 'What makes you the best massage services in Ubud?',
      answer: 'Our position as the best is earned through measurable factors: over 100 certified therapists ensuring availability and expertise, 10+ years of refined operations, consistent 5-star reviews across platforms, partnerships with respected hotels and villas, and the ability to deliver quality across diverse massage types throughout Bali.'
    },
    {
      question: 'How do your ratings and reviews compare?',
      answer: 'We maintain consistent 5-star average ratings across Google, travel platforms, and direct feedback. Our repeat booking rate exceeds 70% for returning Bali visitors, and we receive daily referrals from satisfied clients. These metrics reflect genuine quality rather than marketing claims.'
    },
    {
      question: 'Why do hotels and villas recommend you as the best?',
      answer: 'Accommodation providers trust us because we make them look good. We arrive professionally, deliver consistently excellent experiences, respect their properties, and handle all logistics smoothly. Their guests satisfaction reflects on them, so they recommend only services they trust as genuinely best.'
    },
    {
      question: 'What range of services do you offer?',
      answer: 'We provide the complete range: Traditional Balinese, Deep Tissue, Aromatherapy, Hot Stone, Thai, Couples, Pregnancy, Sports, Reflexology, and more. Being the best means meeting diverse needs excellently rather than specializing narrowly. Whatever massage type you seek, we deliver quality.'
    },
    {
      question: 'How do you maintain quality across so many therapists?',
      answer: 'Quality maintenance involves rigorous hiring standards, ongoing training, regular quality assessments, client feedback monitoring, and a culture of excellence. Our senior team mentors newer therapists. Consistent quality across 100+ therapists requires intentional systems, not luck.'
    },
    {
      question: 'Can you accommodate same-day bookings?',
      answer: 'Usually yes. Our large team allows flexibility that smaller services cannot match. While advance booking is recommended for guaranteed scheduling, same-day availability is often possible. Contact us via WhatsApp to check current availability for your desired time.'
    },
    {
      question: 'Do you serve all areas of Bali or just Ubud?',
      answer: 'We serve all major areas of Bali: Ubud, Seminyak, Canggu, Sanur, Nusa Dua, Jimbaran, Uluwatu, and beyond. Being the best massage services in Ubud extends to being best across the island. Consistent quality wherever you stay.'
    },
    {
      question: 'How do I know I will get a good therapist?',
      answer: 'All our therapists meet strict certification and experience requirements. We match therapists to clients based on requested treatment type and any specific needs. Our reputation depends on every session being excellent, so we assign carefully. Share preferences when booking for optimal matching.'
    }
  ],
  
  aboutAngle: 'largest-team',
  aboutContent: 'Home Massage Ubud has established itself as the best massage services in Ubud through over a decade of unwavering commitment to excellence. Our team of 100+ certified therapists, comprehensive service range, island-wide coverage, and consistent quality have earned trust from thousands of individual clients and partnership with Bali finest accommodations. We continue earning our reputation every day.',
  
  relatedServices: [
    { name: 'Luxury Massage', slug: 'luxury-massage' },
    { name: 'Professional Massage', slug: 'professional-massage' },
    { name: 'Spa Massage', slug: 'spa-massage' },
    { name: 'Couples Massage', slug: 'couples-massage' }
  ],
  
  benefits: [
    'Proven track record of excellence',
    'Consistent quality every session',
    'Widest service selection available',
    'Most reliable scheduling',
    'Best-trained therapist team',
    'Island-wide consistent coverage',
    'Trusted by top accommodations',
    'Quality that justifies reputation'
  ],
  
  idealFor: [
    'Anyone seeking proven quality',
    'First-time Bali visitors wanting reliability',
    'Returning guests who expect consistency',
    'Those who research before booking',
    'Travelers who value verified reviews',
    'Anyone wanting the best available'
  ]
};

export default function BestMassageServicesPage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
