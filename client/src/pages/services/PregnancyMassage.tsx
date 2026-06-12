import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Pregnancy Massage',
  slug: 'pregnancy-massage',
  keyword: 'pregnancy massage',
  
  metaTitle: 'Pregnancy Massage Ubud | Safe Treatment for Moms-to-Be | Book Now END',
  metaDescription: 'Professional pregnancy massage delivered safely to your Ubud villa. Certified therapists specializing in maternal care. Comfortable positioning, gentle techniques. END',
  
  h1Title: 'Pregnancy Massage – Maternal Care in Ubud',
  heroSubtitle: 'Embrace the nurturing care your body deserves during pregnancy with our specialized massage service. Expert maternal massage therapists bring safe, comforting treatments to your accommodation, supporting you through every stage of your beautiful journey.',
  heroLayout: 'full-width',
  heroBadgeText: 'Maternal Wellness',
  
  introduction: [
    'Pregnancy massage provides essential support for the remarkable journey of carrying new life. Your body undergoes extraordinary changes during pregnancy, and professional massage offers safe relief from the accompanying physical challenges. Our pregnancy massage service in Ubud delivers specialized maternal care directly to your villa, ensuring you receive nurturing attention in complete comfort.',
    'What distinguishes pregnancy massage from standard treatments is the comprehensive understanding of maternal physiology that our therapists bring. They recognize how pregnancy affects posture, circulation, and muscle function differently in each trimester. Treatment approaches are modified accordingly, with appropriate positioning, pressure, and focus areas for your specific stage.',
    'Our pregnancy massage therapists create a nurturing environment that honors the significance of your experience. Beyond physical relief, many mothers report feeling emotionally supported and more connected to their pregnancy after sessions. The calming atmosphere, gentle touch, and focused attention provide a restorative sanctuary amid the many demands placed on expecting mothers.',
    'Pregnancy massage services are available daily from 8 AM to 10 PM throughout Ubud and Bali. We bring specialized pregnancy cushions and positioning aids to ensure your complete comfort during treatment. Contact us via WhatsApp with your pregnancy details, and we will match you with an appropriately certified maternal massage specialist. Your safety and comfort are our absolute priorities.'
  ],
  
  whyChooseAngle: 'trusted-partners',
  whyChoosePoints: [
    'Maternal massage specialists with pregnancy certification',
    'Trimester-appropriate techniques and positioning',
    'Understanding of pregnancy physiology and precautions',
    'Specialty cushions for maximum comfort',
    'Pregnancy-safe organic oils and products',
    'Nurturing, supportive therapeutic approach'
  ],
  whyChooseTestimonial: {
    text: 'Being pregnant in Bali was challenging with the heat and activity. This pregnancy massage service was my lifeline. The therapists understood exactly what I needed at 8 months pregnant. Professional, gentle, and so caring.',
    author: 'Claire M., Australia',
    rating: 5
  },
  
  pricingLayout: 'cards',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 380,000',
      priceIDR: 'Rp 380,000',
      description: 'Focused pregnancy massage addressing primary comfort needs'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 450,000',
      priceIDR: 'Rp 450,000',
      description: 'Extended maternal treatment with comprehensive body care',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 700,000',
      priceIDR: 'Rp 700,000',
      description: 'Complete pregnancy wellness session including gentle facial and scalp'
    }
  ],
  addOns: [
    { name: 'Pregnancy Belly Moisturizing', price: 'Rp 50,000' },
    { name: 'Swollen Leg Treatment', price: 'Rp 75,000' },
    { name: 'Gentle Scalp Massage', price: 'Rp 50,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Prenatal Massage',
      description: 'Specialized pre-birth massage focusing on pregnancy-specific needs.',
      linkText: 'View prenatal options',
      slug: 'prenatal-massage'
    },
    {
      name: 'Postnatal Massage',
      description: 'Continue your care journey with specialized post-birth recovery massage.',
      linkText: 'Plan postnatal recovery',
      slug: 'postnatal-massage'
    },
    {
      name: 'Relaxing Massage',
      description: 'Gentle relaxation techniques safe and beneficial during pregnancy.',
      linkText: 'Add relaxation focus',
      slug: 'relaxing-massage'
    },
    {
      name: 'Aromatherapy Massage',
      description: 'Selected pregnancy-safe essential oils enhance the maternal experience.',
      linkText: 'Explore safe aromatherapy',
      slug: 'aromatherapy-massage'
    },
    {
      name: 'Foot Massage',
      description: 'Targeted relief for pregnancy swelling and foot discomfort.',
      linkText: 'Focus on tired feet',
      slug: 'foot-massage'
    },
    {
      name: 'Wellness Massage',
      description: 'Holistic wellness support throughout your pregnancy journey.',
      linkText: 'Embrace wellness care',
      slug: 'wellness-massage'
    }
  ],
  
  howItWorksFormat: 'three-step',
  howItWorksSteps: [
    { title: 'Tell Us About You', description: 'Share pregnancy stage, concerns, and any special needs' },
    { title: 'Comfortable Setup', description: 'We bring positioning aids for your complete comfort' },
    { title: 'Nurturing Care', description: 'Experience safe, gentle treatment supporting you and baby' }
  ],
  
  reviews: [
    {
      text: 'Our daughter surprised us with her pregnancy announcement during our Bali family trip. She wanted a pregnancy massage and this service was perfect - safe, professional, and so nurturing. Beautiful memory for her.',
      author: 'The Johansen Family',
      location: 'Denmark',
      rating: 5,
      type: 'family'
    },
    {
      text: 'I continued working remotely through my pregnancy in Bali. Weekly pregnancy massages kept me comfortable and functional. The therapists understood my changing needs each week. Invaluable support.',
      author: 'Maria Santos',
      location: 'Brazil (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'My husband booked pregnancy massage for our babymoon celebration. It was so thoughtful, and the treatment was wonderful. The therapist was gentle and made me feel so cared for. Perfect babymoon experience.',
      author: 'Jennifer & David',
      location: 'California, USA',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our boutique hotel frequently hosts babymoon couples. This pregnancy massage service meets our standards for safety and professionalism. Expecting mothers appreciate the specialized care. Trusted recommendation.',
      author: 'Putu Anom',
      location: 'Boutique Hotel Owner, Ubud',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'Several pregnant guests have stayed at my villa and requested safe massage. This service provides certified pregnancy specialists who I trust completely. Professional, gentle, and appropriate for expecting mothers.',
      author: 'Wayan Suardana',
      location: 'Villa Owner, Sayan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'badges',
  trustPoints: [
    'Pregnancy Certified',
    'Maternal Specialists',
    'Safe Products',
    'Proper Positioning',
    'Verified Training',
    'Complete Privacy'
  ],
  
  faqs: [
    {
      question: 'When is it safe to start pregnancy massage?',
      answer: 'Most practitioners recommend beginning pregnancy massage after the first trimester (after 12-14 weeks). By this stage, the pregnancy is more established and the risk of complications has decreased. If you are in your first trimester, please consult with your healthcare provider before booking.'
    },
    {
      question: 'How is pregnancy massage different from regular massage?',
      answer: 'Pregnancy massage uses side-lying or semi-reclined positioning instead of face-down. Pressure is lighter overall. Certain areas and pressure points are avoided. Trimester-specific techniques address the changing needs throughout pregnancy. Specialized cushions support your comfort throughout treatment.'
    },
    {
      question: 'Is pregnancy massage safe for my baby?',
      answer: 'Yes, when performed by certified practitioners using proper techniques. Pregnancy massage actually benefits both mother and baby by reducing maternal stress hormones, improving circulation, and promoting relaxation. Our therapists are specifically trained in safe pregnancy protocols.'
    },
    {
      question: 'What should I tell the therapist before pregnancy massage?',
      answer: 'Share your exact week of pregnancy, any complications or concerns, areas of particular discomfort, areas to avoid, and any instructions from your healthcare provider. The more information you provide, the better we can customize your safe, comfortable treatment.'
    },
    {
      question: 'Can pregnancy massage help with my specific pregnancy symptoms?',
      answer: 'Pregnancy massage effectively addresses lower back pain, sciatica, hip pain, leg cramps, swollen ankles, shoulder tension, headaches, and general fatigue. However, massage is supportive care, not medical treatment. Consult your healthcare provider for medical concerns.'
    },
    {
      question: 'What position will I be in during pregnancy massage?',
      answer: 'You will primarily be positioned on your side with supportive cushions under your belly, between your knees, and behind your back. This is the safest and most comfortable position during pregnancy. Some time may be spent semi-reclined or seated depending on your comfort.'
    },
    {
      question: 'Are the oils used safe during pregnancy?',
      answer: 'Yes, we use pregnancy-safe organic carrier oils. Certain essential oils are avoided during pregnancy. We can use unscented oil if you prefer, or you can provide your preferred product. Please inform us of any sensitivities or allergies.'
    },
    {
      question: 'Can my partner join for couples pregnancy massage?',
      answer: 'Absolutely! Many couples book pregnancy massage for the expecting mother alongside regular massage for the partner. Its a beautiful shared experience, especially during babymoon stays. We bring two therapists and create a relaxing atmosphere for both of you.'
    }
  ],
  
  aboutAngle: 'clients-per-year',
  aboutContent: 'Home Massage Ubud has provided safe pregnancy massage to hundreds of expecting mothers visiting Bali each year. Our maternal massage specialists understand the unique considerations of pregnancy care and approach each treatment with the gentle expertise required. We are honored to support mothers through this transformative time with nurturing, professional care.',
  
  relatedServices: [
    { name: 'Prenatal Massage', slug: 'prenatal-massage' },
    { name: 'Postnatal Massage', slug: 'postnatal-massage' },
    { name: 'Relaxing Massage', slug: 'relaxing-massage' },
    { name: 'Foot Massage', slug: 'foot-massage' }
  ],
  
  benefits: [
    'Relief from pregnancy back and hip pain',
    'Reduced swelling in legs and feet',
    'Improved circulation for mother and baby',
    'Better sleep and rest quality',
    'Decreased stress and anxiety',
    'Enhanced emotional wellbeing',
    'Connection with pregnancy journey',
    'Safe, nurturing self-care'
  ],
  
  idealFor: [
    'Mothers in second and third trimesters',
    'Babymoon travelers wanting safe massage',
    'Pregnant women experiencing discomfort',
    'Expecting mothers seeking self-care',
    'Those wanting specialized maternal care',
    'Pregnant travelers during Bali visits'
  ]
};

export default function PregnancyMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
