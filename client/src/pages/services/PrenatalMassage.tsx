import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Prenatal Massage',
  slug: 'prenatal-massage',
  keyword: 'prenatal massage',
  
  metaTitle: 'Prenatal Massage Ubud | Safe Pregnancy Massage | Certified Therapists END',
  metaDescription: 'Safe, gentle prenatal massage for expecting mothers in Ubud. Certified pregnancy massage therapists deliver comfort to your villa. Specialized positioning. Book now. END',
  
  h1Title: 'Prenatal Massage – Safe Care for Expecting Mothers',
  heroSubtitle: 'Nurture yourself and your baby with our specialized prenatal massage service. Certified pregnancy massage therapists deliver safe, gentle treatments using specialized positioning and techniques designed for the unique needs of expectant mothers.',
  heroLayout: 'image-left',
  heroBadgeText: 'Pregnancy Specialist',
  
  introduction: [
    'Pregnancy brings beautiful changes and unique challenges to your body. Our prenatal massage service in Ubud offers safe, nurturing care specifically designed for expecting mothers. Certified pregnancy massage therapists understand the physical transformations you experience and apply specialized techniques that provide relief while ensuring complete safety for you and your baby.',
    'Prenatal massage addresses the specific discomforts that accompany pregnancy: lower back pain, swollen ankles, hip tension, and general fatigue. Our therapists use side-lying positioning and supportive cushioning that keeps you comfortable throughout the treatment. Pressure is carefully modulated, and certain areas are avoided according to pregnancy massage safety protocols.',
    'The benefits of prenatal massage extend beyond physical relief. Studies show that pregnancy massage reduces stress hormones, improves mood, and can even contribute to better sleep. Many mothers report feeling more connected to their pregnancy and their baby after nurturing massage experiences. This is precious self-care during your special time.',
    'Our prenatal massage therapists hold specific certifications in pregnancy massage and understand the differences between trimesters. They speak English and Indonesian fluently to ensure clear communication about your needs and comfort. Available from 8 AM to 10 PM daily with villa delivery throughout Ubud and Bali, safe prenatal care is accessible whenever you need it.'
  ],
  
  whyChooseAngle: 'certified-staff',
  whyChoosePoints: [
    'Therapists certified specifically in prenatal massage techniques',
    'Safe positioning protocols for all pregnancy stages',
    'Understanding of pregnancy contraindications and precautions',
    'Gentle pressure appropriate for expecting mothers',
    'Specialty cushioning for complete comfort',
    'Calming, nurturing approach throughout treatment'
  ],
  whyChooseTestimonial: {
    text: 'At 7 months pregnant, I was desperate for back pain relief. The prenatal massage therapist was so knowledgeable and gentle. The side-lying position was comfortable and I felt completely safe. My back pain improved dramatically.',
    author: 'Rebecca T., London',
    rating: 5
  },
  
  pricingLayout: 'horizontal',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 320,000',
      priceIDR: 'Rp 320,000',
      description: 'Essential prenatal massage focusing on common pregnancy discomforts'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 480,000',
      priceIDR: 'Rp 480,000',
      description: 'Extended prenatal session with additional focus on legs and lower back',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 640,000',
      priceIDR: 'Rp 640,000',
      description: 'Comprehensive prenatal treatment including scalp massage and gentle facial'
    }
  ],
  addOns: [
    { name: 'Leg & Foot Focus', price: 'Rp 75,000' },
    { name: 'Organic Belly Oil Application', price: 'Rp 50,000' },
    { name: 'Relaxation Scalp Massage', price: 'Rp 50,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Pregnancy Massage',
      description: 'Our comprehensive pregnancy massage service for all stages of expecting.',
      linkText: 'View pregnancy massage details',
      slug: 'pregnancy-massage'
    },
    {
      name: 'Postnatal Massage',
      description: 'Continue your care journey with massage after your baby arrives.',
      linkText: 'Learn about postnatal care',
      slug: 'postnatal-massage'
    },
    {
      name: 'Relaxing Massage',
      description: 'Gentle relaxation techniques perfect for pregnancy comfort.',
      linkText: 'Explore relaxation options',
      slug: 'relaxing-massage'
    },
    {
      name: 'Aromatherapy Massage',
      description: 'Pregnancy-safe essential oils can enhance your prenatal experience.',
      linkText: 'Add safe aromatherapy',
      slug: 'aromatherapy-massage'
    },
    {
      name: 'Foot Massage',
      description: 'Targeted relief for swollen, tired pregnancy feet.',
      linkText: 'Book foot-focused relief',
      slug: 'foot-massage'
    },
    {
      name: 'Wellness Massage',
      description: 'Holistic wellness support during your pregnancy journey.',
      linkText: 'Discover wellness approach',
      slug: 'wellness-massage'
    }
  ],
  
  howItWorksFormat: 'timeline',
  howItWorksSteps: [
    { title: 'Share Your Details', description: 'Tell us your pregnancy stage and any concerns' },
    { title: 'We Assign a Specialist', description: 'A certified prenatal therapist is matched to you' },
    { title: 'Comfortable Setup', description: 'Positioning cushions ensure your complete comfort' },
    { title: 'Nurturing Treatment', description: 'Safe, gentle massage brings relief and relaxation' }
  ],
  
  reviews: [
    {
      text: 'My daughter was visiting Bali at 6 months pregnant and badly needed relief. The prenatal therapist was wonderful - so knowledgeable about pregnancy massage. My daughter felt safely cared for and much more comfortable.',
      author: 'The Sanders Family',
      location: 'Seattle, USA',
      rating: 5,
      type: 'family'
    },
    {
      text: 'Working remotely in Bali while pregnant was challenging. Regular prenatal massages became my essential self-care. The therapists understood each trimester needs differently. Professional and nurturing throughout.',
      author: 'Anna Kowalski',
      location: 'Poland (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'My husband arranged a surprise prenatal massage for me during our babymoon in Ubud. The therapist was so gentle and attentive. The side-lying position was comfortable and I fell asleep. Perfect pregnancy gift.',
      author: 'Lisa & Ben',
      location: 'Toronto, Canada',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our wellness hotel recommends this service for pregnant guests. The therapists prenatal expertise gives us confidence referring expecting mothers. Safe, professional, and guests report excellent experiences.',
      author: 'Dr. Ayu Kusuma',
      location: 'Wellness Hotel Manager',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'Pregnant guests at my villa ask about safe massage options. This service has certified prenatal specialists who understand pregnancy needs. I confidently recommend them knowing my guests are safe.',
      author: 'Komang Rai',
      location: 'Villa Owner, Penestanan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'icons',
  trustPoints: [
    'Pregnancy-certified therapists',
    'Safe positioning protocols',
    'Gentle, appropriate pressure',
    'Trimester-specific knowledge',
    'Premium safe products',
    'Complete care and privacy'
  ],
  
  faqs: [
    {
      question: 'Is prenatal massage safe during all pregnancy stages?',
      answer: 'Prenatal massage is generally safe during all trimesters when performed by certified practitioners. We typically recommend starting after the first trimester (12 weeks). In the second and third trimesters, prenatal massage is highly beneficial. Always inform us of your exact pregnancy stage and any complications.'
    },
    {
      question: 'How is prenatal massage positioning different?',
      answer: 'Prenatal massage uses side-lying position supported by specialized cushions, rather than face-down positioning unsafe during pregnancy. Some therapists use specially designed pregnancy tables with belly cutouts, but side-lying is generally preferred for comfort and safety. We bring all necessary supportive cushioning.'
    },
    {
      question: 'What areas are avoided during prenatal massage?',
      answer: 'Prenatal massage avoids deep pressure on the abdomen, certain reflexology points believed to stimulate contractions, and deep work on the inner thighs and calves. Our certified therapists know all pregnancy contraindications and precautions. Treatment focuses on safe areas like back, shoulders, legs, and feet.'
    },
    {
      question: 'What pregnancy discomforts can prenatal massage help?',
      answer: 'Prenatal massage effectively addresses lower back pain, hip tension, leg cramps, swollen ankles, headaches, neck and shoulder tension, and general fatigue. Many expecting mothers report improved sleep, reduced anxiety, and better mood after prenatal massage sessions.'
    },
    {
      question: 'Are your massage oils safe for pregnancy?',
      answer: 'Yes, we use pregnancy-safe organic oils free from harmful chemicals. Certain essential oils are avoided during pregnancy, but we offer safe, gentle options. If you have sensitivities or preferences, we can use unscented oil or products you provide.'
    },
    {
      question: 'How often can I receive prenatal massage?',
      answer: 'Healthy pregnancies can generally enjoy weekly prenatal massage. Many mothers prefer bi-weekly sessions during the second trimester and weekly sessions in the third trimester when discomfort often increases. Listen to your body and consult your healthcare provider if uncertain.'
    },
    {
      question: 'Should I get doctor approval before prenatal massage?',
      answer: 'If you have a high-risk pregnancy, complications, or concerns, please consult your healthcare provider before booking. For normal, healthy pregnancies, prenatal massage by certified practitioners is generally considered safe. Always inform us of any pregnancy complications.'
    },
    {
      question: 'Can I receive prenatal massage in my hotel room?',
      answer: 'Absolutely! We deliver prenatal massage to villas, hotels, resorts, and guesthouses throughout Ubud and Bali. We bring all necessary equipment including comfortable positioning cushions. Simply provide your accommodation address and room details when booking.'
    }
  ],
  
  aboutAngle: 'years-experience',
  aboutContent: 'Home Massage Ubud has supported expecting mothers throughout Bali for over a decade with safe, nurturing prenatal massage. Our certified pregnancy massage therapists understand the unique needs of each trimester and the special care required during this precious time. We take pride in being a trusted resource for pregnant travelers seeking safe, professional massage during their Bali visits.',
  
  relatedServices: [
    { name: 'Pregnancy Massage', slug: 'pregnancy-massage' },
    { name: 'Postnatal Massage', slug: 'postnatal-massage' },
    { name: 'Relaxing Massage', slug: 'relaxing-massage' },
    { name: 'Wellness Massage', slug: 'wellness-massage' }
  ],
  
  benefits: [
    'Relief from pregnancy back pain',
    'Reduced swelling in legs and ankles',
    'Decreased muscle tension and cramps',
    'Improved sleep quality',
    'Reduced stress and anxiety',
    'Enhanced mood and emotional wellbeing',
    'Better body awareness during pregnancy',
    'Nurturing self-care experience'
  ],
  
  idealFor: [
    'Expecting mothers in second trimester',
    'Third trimester women seeking relief',
    'Pregnant travelers experiencing discomfort',
    'Mothers-to-be wanting safe self-care',
    'Babymoon couples seeking prenatal options',
    'Anyone pregnant seeking professional care'
  ]
};

export default function PrenatalMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
