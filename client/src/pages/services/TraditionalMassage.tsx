import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Traditional Massage',
  slug: 'traditional-massage',
  keyword: 'traditional massage',
  
  metaTitle: 'Traditional Massage Ubud | Authentic Balinese Healing | Villa Service END',
  metaDescription: 'Experience authentic traditional massage in Ubud. Ancient Balinese healing techniques delivered to your villa by certified local therapists. Book via WhatsApp today. END',
  
  h1Title: 'Traditional Massage – Authentic Balinese Healing',
  heroSubtitle: 'Immerse yourself in centuries-old healing traditions with our authentic traditional massage service. Local Balinese therapists bring ancient techniques perfected over generations directly to your Ubud accommodation.',
  heroLayout: 'full-width',
  heroBadgeText: 'Authentic Balinese',
  
  introduction: [
    'Experience the profound healing power of traditional massage in Ubud, where ancient Balinese wellness practices have been preserved and perfected over centuries. Our traditional massage service brings this rich therapeutic heritage directly to your villa, delivered by local therapists who learned these sacred techniques from their elders. This is not merely a massage - it is a journey into authentic Balinese healing culture.',
    'Traditional massage in Bali combines multiple elements that distinguish it from Western massage modalities. The treatment incorporates long, flowing strokes, gentle stretching, acupressure on energy meridians, and aromatic oils infused with local botanicals. Each movement is intentional, designed to restore balance to body, mind, and spirit according to Balinese healing philosophy.',
    'Our traditional massage therapists understand the deeper significance of their practice. Many come from families where healing knowledge has passed through multiple generations. They approach each session with respect for the traditions they represent, creating an experience that honors Balinese cultural heritage while providing genuine therapeutic benefits. Communication is seamless as all therapists speak English and Indonesian.',
    'Traditional massage is available throughout Ubud and Bali daily from 8 AM to 10 PM. Whether you seek this treatment for its cultural authenticity, therapeutic benefits, or both, our service delivers the genuine experience. Contact us via WhatsApp to book your traditional massage - we typically respond within minutes and can often accommodate same-day requests.'
  ],
  
  whyChooseAngle: 'years-experience',
  whyChoosePoints: [
    'Local Balinese therapists trained in generational healing traditions',
    'Authentic techniques unchanged for centuries',
    'Traditional botanical oils prepared using local recipes',
    'Cultural experience combined with genuine therapeutic benefits',
    'Respectful practice honoring Balinese wellness heritage',
    'Available throughout Ubud with flexible scheduling'
  ],
  whyChooseTestimonial: {
    text: 'I have had massages in many countries, but this traditional Balinese massage was truly special. You can feel the authenticity and cultural depth in every movement. The therapist explained the traditional significance which added so much to the experience.',
    author: 'Margaret S., United States',
    rating: 5
  },
  
  pricingLayout: 'minimalist-grid',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 380,000',
      priceIDR: 'Rp 380,000',
      description: 'Traditional Balinese massage covering major energy pathways'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 450,000',
      priceIDR: 'Rp 450,000',
      description: 'Extended traditional treatment with full body energy work',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 550,000',
      priceIDR: 'Rp 550,000',
      description: 'Complete traditional ritual including prayer and herbal applications'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 620,000'
  },
  addOns: [
    { name: 'Traditional Herbal Compress', price: 'Rp 120,000' },
    { name: 'Boreh Body Mask', price: 'Rp 180,000' },
    { name: 'Traditional Lulur Scrub', price: 'Rp 180,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Traditional Balinese Massage',
      description: 'Our signature authentic treatment incorporating all elements of traditional Balinese healing.',
      linkText: 'Explore our Balinese signature',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Herbal Bamboo Massage',
      description: 'Traditional treatment using warm herbal compresses and bamboo sticks from local recipes.',
      linkText: 'Discover herbal bamboo therapy',
      slug: 'herbal-bamboo-massage'
    },
    {
      name: 'Foot Reflexology',
      description: 'Traditional pressure point work based on ancient energy meridian knowledge.',
      linkText: 'Learn about reflexology',
      slug: 'foot-reflexology'
    },
    {
      name: 'Thai Massage',
      description: 'Another Asian traditional modality with stretching and pressure work.',
      linkText: 'Compare Thai techniques',
      slug: 'thai-massage'
    },
    {
      name: 'Aromatherapy Massage',
      description: 'Traditional oils can be combined with aromatherapy for enhanced benefits.',
      linkText: 'Add aromatherapy elements',
      slug: 'aromatherapy-massage'
    },
    {
      name: 'Detox Wellness Massage',
      description: 'Traditional detoxification techniques for internal cleansing and renewal.',
      linkText: 'Try traditional detox',
      slug: 'detox-wellness-massage'
    }
  ],
  
  howItWorksFormat: 'timeline',
  
  reviews: [
    {
      text: 'We brought our teenage children to experience traditional Balinese culture through massage. The therapist explained the meaning behind each technique. Educational and incredibly relaxing - the kids loved it!',
      author: 'The Anderson Family',
      location: 'Auckland, New Zealand',
      rating: 5,
      type: 'family'
    },
    {
      text: 'As someone interested in traditional healing practices, this massage exceeded my expectations. The therapist shared knowledge about Balinese energy concepts and the botanical oils used. Authentically traditional.',
      author: 'Hans Mueller',
      location: 'Berlin, Germany (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We chose traditional massage to connect with local culture during our honeymoon. The experience was beautiful - the therapist performed a brief blessing before starting. Such a meaningful addition to our trip.',
      author: 'Daniel & Priya',
      location: 'London, UK',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our boutique hotel emphasizes authentic Balinese experiences. This traditional massage service aligns perfectly with our values. Guests appreciate the genuine cultural elements and skilled traditional techniques.',
      author: 'Komang Ayu',
      location: 'Boutique Hotel Owner, Ubud',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'I specifically sought traditional rather than westernized massage for my Ubud villa guests. This service delivers the real thing. The local therapists bring authenticity that guests remember long after leaving.',
      author: 'Gede Suryawan',
      location: 'Villa Owner, Campuhan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'grid',
  trustPoints: [
    'Authentic traditional techniques preserved',
    'Local Balinese certified therapists',
    'Traditional botanical oil formulations',
    'Cultural knowledge and training',
    'Respectful practice standards',
    'Genuine heritage experience'
  ],
  
  faqs: [
    {
      question: 'What makes traditional massage different from regular massage?',
      answer: 'Traditional Balinese massage incorporates elements not found in Western modalities: energy meridian work based on ancient knowledge, specific prayer or intention setting, traditional botanical oil blends, particular stroke sequences passed through generations, and gentle stretching combined with acupressure. It addresses body, mind, and spirit holistically.'
    },
    {
      question: 'Are your traditional massage therapists actually Balinese?',
      answer: 'Yes, our traditional massage therapists are local Balinese who learned these techniques within their communities, often from family members who were traditional healers. This ensures authenticity in every session. While we employ therapists from various backgrounds for other treatments, traditional massage is exclusively delivered by local practitioners.'
    },
    {
      question: 'What traditional oils do you use?',
      answer: 'We use traditional Balinese oil formulations including virgin coconut oil infused with local flowers (frangipani, cananga), lemongrass, ginger, and other botanicals. These recipes have been used in Balinese healing for generations. The oils are prepared locally using traditional methods.'
    },
    {
      question: 'Is traditional massage suitable for someone unfamiliar with Balinese culture?',
      answer: 'Absolutely! Traditional massage requires no prior cultural knowledge. Our therapists happily explain techniques and their significance if you are interested, but you can also simply relax and enjoy the treatment. The therapeutic benefits are universal regardless of cultural background.'
    },
    {
      question: 'Does traditional massage include any spiritual elements?',
      answer: 'Traditional Balinese massage may include brief blessing intentions before treatment, reflecting the Balinese belief in holistic healing. This is done respectfully and can be omitted upon request. The spiritual elements are subtle and never impose on guests of any belief system.'
    },
    {
      question: 'How does pressure compare to Western massage styles?',
      answer: 'Traditional Balinese massage typically uses medium pressure with flowing, rhythmic movements. It is generally gentler than deep tissue but more therapeutic than Swedish massage. The focus is on energy flow and balance rather than intense muscle manipulation. Pressure can be adjusted to preference.'
    },
    {
      question: 'Can I combine traditional massage with other treatments?',
      answer: 'Yes! Traditional massage combines beautifully with other Balinese treatments like boreh body mask, lulur scrub, and herbal compresses. We can create custom traditional treatment packages. Many guests enjoy a 120-minute session that incorporates multiple traditional elements.'
    },
    {
      question: 'Where does traditional massage fit in Balinese healing practices?',
      answer: 'Massage is one component of Balinese traditional medicine (Usada), which also includes herbal remedies, energy healing, and ceremonial practices. Our traditional massage focuses on the hands-on therapeutic element, offering an accessible entry point to this rich healing tradition.'
    }
  ],
  
  aboutAngle: 'years-experience',
  aboutContent: 'Home Massage Ubud has spent over a decade preserving and sharing authentic traditional Balinese massage with visitors to the island. We work closely with local communities to ensure our traditional massage service honors the cultural heritage it represents. Our traditional massage therapists are ambassadors of Balinese healing culture, sharing their knowledge with respect and genuine skill.',
  
  relatedServices: [
    { name: 'Massage', slug: 'massage' },
    { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
    { name: 'Wellness Massage', slug: 'wellness-massage' },
    { name: 'Therapeutic Massage', slug: 'therapeutic-massage' }
  ],
  
  benefits: [
    'Experience authentic Balinese healing culture',
    'Balanced energy flow throughout the body',
    'Deep relaxation of muscles and mind',
    'Traditional botanical oil skin benefits',
    'Connection to centuries-old healing wisdom',
    'Gentle stretching improves flexibility',
    'Stress relief through holistic approach',
    'Cultural enrichment during your Bali visit'
  ],
  
  idealFor: [
    'Cultural travelers seeking authentic experiences',
    'Those interested in traditional healing arts',
    'First-time visitors wanting Balinese immersion',
    'Wellness enthusiasts exploring diverse modalities',
    'Anyone preferring gentler massage approaches',
    'Guests seeking meaningful cultural connections'
  ]
};

export default function TraditionalMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
