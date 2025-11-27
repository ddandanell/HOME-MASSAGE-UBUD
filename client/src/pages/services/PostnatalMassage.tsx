import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Postnatal Massage',
  slug: 'postnatal-massage',
  keyword: 'postnatal massage',
  
  metaTitle: 'Postnatal Massage Ubud | Post-Birth Recovery Treatment | Safe Care END',
  metaDescription: 'Specialized postnatal massage supporting new mothers in Ubud. Safe post-birth recovery, gentle techniques, certified practitioners. Villa delivery available. Book now. END',
  
  h1Title: 'Postnatal Massage – Recovery for New Mothers',
  heroSubtitle: 'Support your post-birth recovery with specialized postnatal massage designed for new mothers. Gentle techniques promote healing, ease tension from nursing and carrying, and provide nurturing self-care during this precious but demanding time.',
  heroLayout: 'image-right',
  heroBadgeText: 'New Mother Care',
  
  introduction: [
    'The postpartum period brings profound changes as your body recovers from birth while you care for your newborn. Postnatal massage provides essential support during this transition, addressing the unique physical demands new mothers face. Our specialized postnatal massage service in Ubud delivers gentle, therapeutic care directly to your accommodation, offering much-needed relief without leaving your baby.',
    'Postnatal massage addresses the specific challenges of new motherhood: back strain from nursing and carrying, shoulder tension from repetitive feeding positions, abdominal recovery, and overall fatigue from disrupted sleep. Our certified postnatal therapists understand these demands and apply techniques that promote physical recovery while providing emotional nurturing during this intense period.',
    'The benefits of postnatal massage extend beyond physical relief. Research suggests that massage can help reduce postpartum depression symptoms, improve mood, and support the emotional adjustment to motherhood. Taking time for self-care through massage also models healthy wellness habits and provides necessary rest in a demanding season of life.',
    'Our postnatal massage service accommodates the realities of new motherhood. Sessions can be scheduled around feeding times, babies can remain nearby, and we work quietly to avoid disturbing sleeping infants. Available from 8 AM to 10 PM throughout Ubud and Bali, postnatal care comes to you when you need it. Contact us via WhatsApp to arrange your recovery treatment.'
  ],
  
  whyChooseAngle: 'certified-staff',
  whyChoosePoints: [
    'Certified postnatal massage therapists understanding post-birth needs',
    'Techniques supporting abdominal and pelvic recovery',
    'Attention to nursing-related tension in shoulders and back',
    'Flexible scheduling around feeding and baby care',
    'Quiet, respectful approach that does not disturb baby',
    'Nurturing care supporting emotional adjustment'
  ],
  whyChooseTestimonial: {
    text: 'Three weeks postpartum and exhausted, I desperately needed relief. The postnatal therapist was so understanding and gentle. She worked around my nursing schedule and even my baby napped peacefully during the massage. I felt human again afterward.',
    author: 'Michelle K., New Zealand',
    rating: 5
  },
  
  pricingLayout: 'badges',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 320,000',
      priceIDR: 'Rp 320,000',
      description: 'Essential postnatal massage addressing primary recovery areas'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 450,000',
      priceIDR: 'Rp 450,000',
      description: 'Comprehensive postnatal treatment with extended focus on problem zones',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 580,000',
      priceIDR: 'Rp 580,000',
      description: 'Full postnatal recovery session including abdominal work and gentle stretching'
    }
  ],
  addOns: [
    { name: 'Abdominal Binding', price: 'Rp 50,000' },
    { name: 'Hot Stone Back Relief', price: 'Rp 100,000' },
    { name: 'Soothing Scalp Treatment', price: 'Rp 50,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Pregnancy Massage',
      description: 'Support throughout pregnancy leading up to your postnatal care journey.',
      linkText: 'View pregnancy massage options',
      slug: 'pregnancy-massage'
    },
    {
      name: 'Prenatal Massage',
      description: 'Pre-birth massage care complementing your postnatal recovery.',
      linkText: 'Learn about prenatal care',
      slug: 'prenatal-massage'
    },
    {
      name: 'Relaxing Massage',
      description: 'Gentle relaxation to support new mother rest and recovery.',
      linkText: 'Add relaxation focus',
      slug: 'relaxing-massage'
    },
    {
      name: 'Therapeutic Massage',
      description: 'Therapeutic approaches for addressing specific post-birth issues.',
      linkText: 'Explore therapeutic options',
      slug: 'therapeutic-massage'
    },
    {
      name: 'Full Body Massage',
      description: 'Complete body treatment when overall care is needed.',
      linkText: 'View full body options',
      slug: 'full-body-massage'
    },
    {
      name: 'Wellness Massage',
      description: 'Holistic wellness supporting your postpartum journey.',
      linkText: 'Discover wellness approach',
      slug: 'wellness-massage'
    }
  ],
  
  howItWorksFormat: 'icon-row',
  howItWorksSteps: [
    { title: 'Share Your Needs', description: 'Tell us about birth, recovery stage, and specific concerns' },
    { title: 'Work Around Baby', description: 'We schedule flexibly and work quietly near your infant' },
    { title: 'Gentle Recovery', description: 'Specialized techniques support your healing journey' },
    { title: 'Rest & Restore', description: 'Take needed time for yourself while baby is cared for' }
  ],
  
  reviews: [
    {
      text: 'My daughter had a difficult birth and needed recovery support. The postnatal massage therapist was incredibly gentle and understanding. She addressed my daughters c-section recovery carefully. Such compassionate care for new mothers.',
      author: 'The Yamamoto Family',
      location: 'Tokyo, Japan',
      rating: 5,
      type: 'family'
    },
    {
      text: 'Working remotely in Bali postpartum was challenging. Regular postnatal massages helped my body recover while managing work and a newborn. The therapists flexibility around feeding schedules was essential.',
      author: 'Lauren Mitchell',
      location: 'United States (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'My husband arranged postnatal massage for me as a push present. Four weeks after birth, I was desperate for relief. The therapist was so gentle with my still-recovering body. Best gift he could have given me.',
      author: 'Sophie & James',
      location: 'Melbourne, Australia',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our family resort frequently hosts new parents. This postnatal service provides professional care that supports mothers during their stay. Therapists understand newborn-parent needs. Excellent specialized service.',
      author: 'Kadek Yuni',
      location: 'Family Resort Manager',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'New mothers staying at my villa often need recovery support. This postnatal service provides gentle, appropriate care. Therapists work quietly, respect the family dynamic, and deliver real relief.',
      author: 'Made Surya',
      location: 'Villa Owner, Tegallalang',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'grid',
  trustPoints: [
    'Postnatal certified therapists',
    'Understanding of post-birth recovery',
    'Gentle, appropriate techniques',
    'Baby-aware quiet service',
    'Safe post-surgery protocols',
    'Nurturing, supportive care'
  ],
  
  faqs: [
    {
      question: 'When can I start postnatal massage after giving birth?',
      answer: 'For uncomplicated vaginal births, postnatal massage can begin as soon as you feel ready, often within the first week. After cesarean delivery, wait until your healthcare provider clears you for massage, typically 4-6 weeks. Always inform us of your birth details and any complications.'
    },
    {
      question: 'Can I receive postnatal massage if I had a c-section?',
      answer: 'Yes, with modifications. Once cleared by your doctor (usually 4-6 weeks post-surgery), postnatal massage can support c-section recovery. We avoid the incision area but address the significant back, shoulder, and neck tension that often develops. Gentle abdominal work may begin once fully healed.'
    },
    {
      question: 'What if my baby needs me during the massage?',
      answer: 'We completely understand! Massage can be paused for feeding or comforting your baby. Many mothers keep baby in a nearby bassinet or have their partner present. We work around your newborns needs - your comfort and babys care come first.'
    },
    {
      question: 'What areas does postnatal massage focus on?',
      answer: 'Postnatal massage typically addresses upper back and shoulder tension from nursing and carrying, lower back strain from weakened core muscles, neck tension from looking down at baby, and gentle abdominal work to support recovery. We customize based on your specific needs and recovery stage.'
    },
    {
      question: 'Can postnatal massage help with breastfeeding issues?',
      answer: 'Postnatal massage can help relieve the upper body tension that makes nursing uncomfortable. While we cannot treat blocked ducts directly, massage improves circulation and relaxation which may support milk production and flow. Consult a lactation specialist for specific breastfeeding concerns.'
    },
    {
      question: 'How often should I get postnatal massage?',
      answer: 'During the intense early postpartum weeks, weekly massage provides significant support. As your body recovers and you adjust to motherhood, bi-weekly or monthly sessions maintain benefits. Listen to your body and book when you need relief and self-care.'
    },
    {
      question: 'Is postnatal massage safe if I am breastfeeding?',
      answer: 'Absolutely! Postnatal massage is safe during breastfeeding. We use breast-friendly positioning and can work around nursing schedules. Some mothers even nurse during massage if needed. Our therapists are experienced with breastfeeding mothers needs.'
    },
    {
      question: 'What should I wear for postnatal massage?',
      answer: 'Wear whatever is comfortable and allows access to treatment areas. Many new mothers prefer nursing-friendly clothing or comfortable loungewear. You can remain partially clothed based on your comfort level. We use proper draping throughout the massage.'
    }
  ],
  
  aboutAngle: 'trusted-partners',
  aboutContent: 'Home Massage Ubud has supported new mothers throughout Bali with specialized postnatal massage for many years. Our postnatal therapists understand the unique challenges of the postpartum period - the physical recovery, emotional adjustment, and constant demands of newborn care. We partner with family-friendly resorts and villas to provide new parents with professional, nurturing recovery support during their Bali stays.',
  
  relatedServices: [
    { name: 'Pregnancy Massage', slug: 'pregnancy-massage' },
    { name: 'Prenatal Massage', slug: 'prenatal-massage' },
    { name: 'Relaxing Massage', slug: 'relaxing-massage' },
    { name: 'Therapeutic Massage', slug: 'therapeutic-massage' }
  ],
  
  benefits: [
    'Support post-birth physical recovery',
    'Relief from nursing-related tension',
    'Reduced back and shoulder pain',
    'Improved sleep quality',
    'Decreased postpartum anxiety',
    'Essential self-care during demanding time',
    'Enhanced mood and emotional wellbeing',
    'Gentle abdominal recovery support'
  ],
  
  idealFor: [
    'New mothers recovering from birth',
    'C-section recovery (when cleared)',
    'Breastfeeding mothers with body tension',
    'Parents traveling with newborns',
    'Those needing postpartum self-care',
    'Mothers experiencing body strain from baby care'
  ]
};

export default function PostnatalMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
