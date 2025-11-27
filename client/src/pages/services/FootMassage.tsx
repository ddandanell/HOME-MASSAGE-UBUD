import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Foot Massage',
  slug: 'foot-massage',
  keyword: 'foot massage',
  
  metaTitle: 'Foot Massage Ubud | Professional Reflexology Service | Villa Delivery END',
  metaDescription: 'Revive tired feet with expert foot massage in your Ubud villa. Reflexology techniques, pressure point therapy. Perfect after hiking. Book via WhatsApp now. END',
  
  h1Title: 'Foot Massage – Revitalize Your Feet in Ubud',
  heroSubtitle: 'Give your hardworking feet the attention they deserve with our professional foot massage service. Expert reflexology techniques combined with soothing massage relieve tired feet and promote whole-body wellness in your villa.',
  heroLayout: 'price-badge',
  heroBadgeText: 'Foot Specialist',
  
  introduction: [
    'After exploring Ubud rice terraces, climbing temple steps, and wandering through markets, your feet deserve expert attention. Our foot massage service brings professional relief directly to your accommodation, combining traditional reflexology with relaxing massage techniques. This specialized treatment addresses not just tired feet but promotes wellness throughout your entire body.',
    'Foot massage is more than simple relaxation - it is based on reflexology principles that connect pressure points on your feet to organs and systems throughout your body. Our trained therapists understand these connections and apply targeted pressure to promote balance and healing. The result is benefits that extend far beyond your feet.',
    'Our foot massage begins with a warm soak in aromatic water to cleanse and soften your feet. The therapist then works through each foot methodically, addressing all reflexology zones while releasing muscle tension. The treatment includes attention to ankles, calves, and lower legs, providing comprehensive lower extremity care.',
    'Whether you need recovery from a day of hiking, relief from travel fatigue, or simply want to treat your feet, our foot massage delivers. Sessions are available daily from 8 AM to 10 PM with easy WhatsApp booking. Our therapists bring all equipment including comfortable recliners, foot basins, and premium products to your location.'
  ],
  
  whyChooseAngle: 'certified-staff',
  whyChoosePoints: [
    'Therapists certified in reflexology and foot massage techniques',
    'Warm aromatic foot soak included with every session',
    'Pressure point work for whole-body benefits',
    'Treatment extends to ankles and lower legs',
    'Premium foot creams and moisturizing products',
    'Perfect after hiking, sightseeing, or travel'
  ],
  whyChooseTestimonial: {
    text: 'After hiking Campuhan Ridge and Tegallalang, my feet were exhausted. This foot massage was exactly what I needed. The therapist found every tired spot and worked magic. My feet felt brand new afterward!',
    author: 'Barbara K., Germany',
    rating: 5
  },
  
  pricingLayout: 'badges',
  packages: [
    {
      duration: '45 Minutes',
      price: 'Rp 180,000',
      priceIDR: 'Rp 180,000',
      description: 'Essential foot massage with reflexology points'
    },
    {
      duration: '60 Minutes',
      price: 'Rp 240,000',
      priceIDR: 'Rp 240,000',
      description: 'Full foot treatment including lower legs and warm soak',
      popular: true
    },
    {
      duration: '90 Minutes',
      price: 'Rp 360,000',
      priceIDR: 'Rp 360,000',
      description: 'Comprehensive foot care with extended leg massage and moisturizing treatment'
    }
  ],
  couplesPricing: {
    duration: '60 Minutes',
    price: 'Rp 440,000'
  },
  addOns: [
    { name: 'Herbal Foot Soak', price: 'Rp 50,000' },
    { name: 'Foot Scrub Treatment', price: 'Rp 75,000' },
    { name: 'Paraffin Wax Treatment', price: 'Rp 100,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Foot Reflexology',
      description: 'Dedicated reflexology treatment focusing on pressure point work for whole-body wellness.',
      linkText: 'Explore full reflexology',
      slug: 'foot-reflexology'
    },
    {
      name: 'Reflexology',
      description: 'Complete pressure point therapy addressing body systems through foot work.',
      linkText: 'Learn about reflexology',
      slug: 'reflexology'
    },
    {
      name: 'Full Body Massage',
      description: 'Combine foot massage with full body treatment for complete care.',
      linkText: 'Add full body massage',
      slug: 'full-body-massage'
    },
    {
      name: 'Post-Hike Recovery Massage',
      description: 'Perfect complement to foot massage after Ubud hiking adventures.',
      linkText: 'View recovery options',
      slug: 'post-hike-recovery-massage'
    },
    {
      name: 'Traditional Balinese Massage',
      description: 'Traditional techniques include significant foot work as part of treatment.',
      linkText: 'Try Balinese traditions',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Relaxing Massage',
      description: 'Foot massage pairs well with relaxing full body treatment.',
      linkText: 'Combine with relaxation',
      slug: 'relaxing-massage'
    }
  ],
  
  howItWorksFormat: 'icon-row',
  howItWorksSteps: [
    { title: 'Book Your Session', description: 'Choose duration and message us via WhatsApp' },
    { title: 'Prepare Your Space', description: 'We bring everything - just provide a comfortable seat' },
    { title: 'Warm Foot Soak', description: 'Begin with aromatic water to cleanse and relax' },
    { title: 'Expert Foot Care', description: 'Reflexology and massage revive your tired feet' }
  ],
  
  reviews: [
    {
      text: 'Our whole family got foot massages after a day at the zoo. Even the kids enjoyed it! The therapists were great with the children, using gentle pressure. Such a nice way to end an active family day.',
      author: 'The Wilson Family',
      location: 'Brisbane, Australia',
      rating: 5,
      type: 'family'
    },
    {
      text: 'I walk a lot while exploring Bali and my feet suffer. I get foot massage twice a week from this service. The reflexology actually helps with my energy levels. Great value for the results.',
      author: 'Nina Petrova',
      location: 'Russia (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We got side-by-side foot massages after temple hopping all day. So relaxing! The therapists worked out every bit of tiredness. Perfect couples activity when you are too tired for full massage.',
      author: 'Sophie & Marc',
      location: 'Brussels, Belgium',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'As a hotel concierge, I recommend foot massage to guests who have been sightseeing. This service is reliable and guests always thank me for the recommendation. Great for tired tourists.',
      author: 'Agung Permana',
      location: 'Hotel Concierge, Ubud',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'Foot massage is popular with my villa guests after their activities. The therapists bring everything needed and guests can relax on their veranda. Professional service every time.',
      author: 'Wayan Sari',
      location: 'Villa Owner, Sanggingan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'icons',
  trustPoints: [
    'Hygienic foot equipment',
    'Certified reflexologists',
    'Premium foot products',
    'Experienced foot specialists',
    'Verified professionals',
    'Discrete, clean service'
  ],
  
  faqs: [
    {
      question: 'Is foot massage the same as reflexology?',
      answer: 'Foot massage and reflexology overlap but differ in approach. Foot massage focuses on relaxing foot muscles and relieving tension. Reflexology specifically targets pressure points believed to connect to body organs and systems. Our foot massage incorporates reflexology principles for both relaxation and therapeutic benefit.'
    },
    {
      question: 'Do I need to have clean feet before the massage?',
      answer: 'We include a warm aromatic foot soak at the beginning of every session, so you do not need to worry about pre-cleaning. However, if you prefer to wash your feet beforehand, that is perfectly fine too. The foot soak prepares your feet for treatment while providing relaxation.'
    },
    {
      question: 'Is foot massage good after hiking in Ubud?',
      answer: 'Absolutely! Foot massage is perfect after hiking Campuhan Ridge, Tegallalang rice terraces, or any Ubud trails. The treatment relieves tired, achy feet, reduces swelling, and addresses the specific muscle fatigue from walking on uneven terrain. Many guests book immediately after hiking.'
    },
    {
      question: 'Does foot massage include leg massage?',
      answer: 'Yes, our foot massage includes attention to ankles and lower legs (calves). The 60-minute and 90-minute sessions include more extensive leg work. This comprehensive approach ensures that the entire lower extremity is addressed, not just the feet.'
    },
    {
      question: 'Can foot massage help with jet lag?',
      answer: 'Many travelers find foot massage helpful for jet lag. Reflexology stimulation is believed to promote better circulation and energy flow, which can help your body adjust to new time zones. The relaxation benefits also support better sleep, aiding jet lag recovery.'
    },
    {
      question: 'What should I wear for foot massage?',
      answer: 'Wear comfortable, loose-fitting pants that can be rolled up to the knee, or shorts. You will be seated comfortably during treatment. There is no need to change clothes - simply expose your feet and lower legs for the therapist to work.'
    },
    {
      question: 'Can pregnant women receive foot massage?',
      answer: 'Foot massage is generally safe during pregnancy, but we use modified techniques that avoid certain reflexology pressure points. Please inform us of your pregnancy when booking so we can ensure appropriate, safe treatment. For dedicated prenatal care, consider our pregnancy massage service.'
    },
    {
      question: 'Do you offer couples foot massage side by side?',
      answer: 'Yes! Couples foot massage is a popular option. Two therapists work simultaneously while you relax together. Its perfect for ending a day of shared sightseeing. We bring two complete setups including foot basins and recliners.'
    }
  ],
  
  aboutAngle: 'trusted-partners',
  aboutContent: 'Home Massage Ubud has built a reputation for excellent foot massage through years of serving travelers who need relief for tired feet. Our foot massage specialists understand the unique demands placed on feet during Bali exploration - from hiking trails to temple stairs. We have refined our foot massage approach to deliver maximum relief and relaxation for travel-weary feet.',
  
  relatedServices: [
    { name: 'Reflexology', slug: 'reflexology' },
    { name: 'Full Body Massage', slug: 'full-body-massage' },
    { name: 'Relaxing Massage', slug: 'relaxing-massage' },
    { name: 'Post-Hike Recovery Massage', slug: 'sports-massage' }
  ],
  
  benefits: [
    'Relief for tired, aching feet',
    'Reduced swelling in feet and ankles',
    'Improved circulation in lower extremities',
    'Reflexology benefits for whole body',
    'Better sleep through relaxation',
    'Stress relief concentrated on feet',
    'Soft, moisturized foot skin',
    'Enhanced energy through pressure points'
  ],
  
  idealFor: [
    'Hikers and trekkers in Ubud',
    'Tourists after sightseeing days',
    'Travelers recovering from long flights',
    'Anyone who spends much time on feet',
    'Those preferring targeted treatment',
    'People wanting shorter massage sessions'
  ]
};

export default function FootMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
