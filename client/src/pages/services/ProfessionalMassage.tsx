import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Professional Massage',
  slug: 'professional-massage',
  keyword: 'professional massage',
  
  metaTitle: 'Professional Massage Ubud | Licensed Therapists Bali | Book Now',
  metaDescription: 'Experience professional massage from licensed, certified therapists in Ubud. High standards, proper techniques, premium equipment. Villa delivery. Book WhatsApp.',
  
  h1Title: 'Professional Massage – Licensed Therapists in Ubud',
  heroSubtitle: 'Trust your body to genuine professionals. Our licensed massage therapists deliver treatments meeting the highest standards of training, technique, and safety. Experience the difference that true professionalism makes in every session.',
  heroLayout: 'price-badge',
  heroBadgeText: 'Licensed & Certified',
  
  introduction: [
    'In a destination saturated with massage services of varying quality, professional massage stands apart through genuine credentials, proper training, and consistent excellence. Our professional massage service in Ubud employs only licensed therapists who have completed recognized training programs and maintain current certifications. When you book with us, you receive care from verified professionals.',
    'Professional massage means more than technical skill - it encompasses ethical conduct, hygiene standards, client communication, and continuous education. Our therapists understand anatomy, recognize contraindications, adapt techniques appropriately, and maintain the highest standards of professional conduct. This professionalism creates both safety and superior results.',
    'The equipment and products used in professional massage also matter significantly. Our therapists arrive with premium organic oils meeting professional standards, sanitized linens for each client, and specialty items appropriate for chosen treatments. You provide a comfortable surface — your bed or a floor mat. Professional massage requires professional care.',
    'We verify therapist credentials thoroughly before they join our team. References are checked, certifications confirmed, and skills assessed through supervised sessions. This rigorous selection ensures that every professional massage delivered through our service meets the standards discerning clients expect. Book via WhatsApp for genuine professional care.'
  ],
  
  whyChooseAngle: 'certified-staff',
  whyChoosePoints: [
    'All therapists hold recognized massage therapy certifications',
    'Verified credentials and checked references',
    'Commercial-grade professional equipment',
    'Proper hygiene protocols and sanitization',
    'Clear communication and ethical conduct',
    'Continuous education and skill development'
  ],
  whyChooseTestimonial: {
    text: 'As a physical therapist myself, I can recognize professional technique. This service employs genuinely trained therapists. Proper anatomy knowledge, correct pressure application, appropriate draping - all the hallmarks of professional massage training.',
    author: 'Dr. Michelle Lee',
    rating: 5
  },
  
  pricingLayout: 'cards',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 380,000',
      priceIDR: 'Rp 380,000',
      description: 'Professional massage treatment from licensed therapist'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 390,000',
      priceIDR: 'Rp 390,000',
      description: 'Extended professional session with comprehensive treatment',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 450,000',
      priceIDR: 'Rp 450,000',
      description: 'Full professional massage experience with multiple modalities'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 820,000'
  },
  addOns: [
    { name: 'Senior Therapist Request', price: 'Rp 50,000' },
    { name: 'Specialty Technique Request', price: 'Rp 75,000' },
    { name: 'Extended Consultation', price: 'Rp 50,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Therapeutic Massage',
      description: 'Professional therapeutic approach addressing specific physical issues.',
      linkText: 'Explore therapeutic options',
      slug: 'therapeutic-massage'
    },
    {
      name: 'Deep Tissue Massage',
      description: 'Professional deep tissue technique from trained specialists.',
      linkText: 'View deep tissue service',
      slug: 'deep-tissue-massage'
    },
    {
      name: 'Sports Massage',
      description: 'Professional sports therapy for athletic needs.',
      linkText: 'Learn about sports massage',
      slug: 'sports-massage'
    },
    {
      name: 'Body Therapy Massage',
      description: 'Professional body therapy addressing comprehensive needs.',
      linkText: 'Discover body therapy',
      slug: 'body-therapy-massage'
    },
    {
      name: 'Traditional Balinese Massage',
      description: 'Professional execution of traditional Balinese techniques.',
      linkText: 'Experience professional Balinese',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Best Massage Services',
      description: 'Our highest-rated professional massage offerings.',
      linkText: 'View top-rated services',
      slug: 'best-massage-services'
    }
  ],
  
  howItWorksFormat: 'four-step',
  howItWorksSteps: [
    { title: 'Book Professional', description: 'Request professional massage via WhatsApp' },
    { title: 'Certified Assigned', description: 'A licensed, verified therapist is matched to you' },
    { title: 'Professional Setup', description: 'Therapist arrives with commercial-grade equipment' },
    { title: 'Expert Treatment', description: 'Receive massage from genuine trained professional' }
  ],
  
  reviews: [
    {
      text: 'After several disappointing massage experiences in Bali, this professional service restored my faith. The therapist was clearly properly trained - excellent technique, appropriate pressure, professional conduct throughout. This is how it should be.',
      author: 'The Thompson Family',
      location: 'Sydney, Australia',
      rating: 5,
      type: 'family'
    },
    {
      text: 'As someone who has massage regularly worldwide, I recognize professional quality. These therapists demonstrate proper training - correct body mechanics, appropriate technique selection, and genuine skill. Worth seeking out.',
      author: 'Hans Muller',
      location: 'Germany (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We wanted professional couples massage, not tourist fluff. This service delivered exactly that. Both therapists were clearly certified professionals. Proper consultation, appropriate technique, genuine expertise. Impressed.',
      author: 'Alex & Morgan',
      location: 'New York, USA',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our luxury hotel requires professional standards from all service partners. This massage service meets our requirements - verified credentials, proper insurance, consistent professionalism. Guests receive quality they expect.',
      author: 'Agung Putra',
      location: 'Luxury Hotel Director',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'I only refer professional services to my villa guests. This massage company employs genuine professionals - I have verified their credentials. Guests appreciate knowing they receive properly trained therapists.',
      author: 'Wayan Sudarma',
      location: 'Villa Owner, Sayan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'grid',
  trustPoints: [
    'Verified professional certifications',
    'Licensed massage therapists only',
    'Commercial-grade equipment',
    'Proper hygiene protocols',
    'Insurance coverage maintained',
    'Professional ethical standards'
  ],
  
  faqs: [
    {
      question: 'What makes a massage "professional" versus casual?',
      answer: 'Professional massage means therapists hold recognized certifications from accredited training programs, understand anatomy and contraindications, use proper technique and body mechanics, maintain hygiene standards, communicate professionally, and follow ethical guidelines. We verify all these elements.'
    },
    {
      question: 'Are your therapists actually licensed?',
      answer: 'Yes, all our therapists hold valid massage therapy certifications from recognized training institutions. We verify credentials before hiring and maintain records. Many therapists have additional specialization certifications in areas like sports massage, prenatal care, or specific modalities.'
    },
    {
      question: 'How do you verify professional credentials?',
      answer: 'We confirm certification directly with issuing institutions, check references from previous employers, conduct in-person skill assessments, and maintain ongoing quality monitoring. This thorough process ensures genuine professionals on our team.'
    },
    {
      question: 'What professional equipment do therapists bring?',
      answer: 'Therapists arrive with premium professional massage oils, sanitized linens changed between clients, proper draping materials, and any specialty items for chosen treatments. You provide a comfortable surface — your bed or a floor mat. All supplies meet professional-use standards.'
    },
    {
      question: 'How does professional massage differ from spa treatments?',
      answer: 'Professional massage focuses on therapeutic technique delivered by trained practitioners. While some spas employ professionals, many prioritize ambiance over therapist qualification. Our focus is the skill and training of the person treating you, regardless of location.'
    },
    {
      question: 'Can I request a therapist with specific professional training?',
      answer: 'Yes! If you need particular expertise - prenatal certification, sports massage specialization, deep tissue training - request this when booking. We will match you with an appropriately qualified professional. Many therapists have multiple certifications.'
    },
    {
      question: 'What professional standards apply to hygiene?',
      answer: 'Our hygiene protocols follow professional massage therapy standards: fresh linens for every client, sanitized equipment between sessions, hand hygiene before and during treatment, proper oil handling, and clean professional attire. These standards protect both client and therapist.'
    },
    {
      question: 'Is professional massage worth the quality investment?',
      answer: 'Professional massage delivers superior results and safety. Proper technique prevents injury, correct pressure achieves therapeutic goals, trained hands identify and address issues effectively. For your body health and safety, professional care is always worth the investment.'
    }
  ],
  
  aboutAngle: 'largest-team',
  aboutContent: 'Home Massage Ubud maintains the highest professional standards in Bali mobile massage. Our team of over 100 therapists includes only verified professionals with recognized certifications. We have built our reputation on genuine professionalism - proper training, ethical conduct, and consistent excellence. When clients choose professional massage, they receive what that term truly means.',
  
  relatedServices: [
    { name: 'Therapeutic Massage', slug: 'therapeutic-massage' },
    { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' },
    { name: 'Sports Massage', slug: 'sports-massage' },
    { name: 'Best Massage Services', slug: 'best-massage-services' }
  ],
  
  benefits: [
    'Treatment from certified professionals',
    'Proper technique and safety',
    'Commercial-grade equipment',
    'Hygiene standards maintained',
    'Effective therapeutic results',
    'Professional communication',
    'Ethical service conduct',
    'Verified credentials and training'
  ],
  
  idealFor: [
    'Those valuing genuine professional credentials',
    'Clients seeking therapeutic rather than casual massage',
    'Anyone with specific physical concerns',
    'Those requiring certain professional standards',
    'Discerning clients recognizing quality difference',
    'Anyone prioritizing safety and expertise'
  ]
};

export default function ProfessionalMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
