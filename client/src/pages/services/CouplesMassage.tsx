import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Couples Massage',
  slug: 'couples-massage',
  keyword: 'couples massage',
  
  metaTitle: 'Couples Massage Ubud | Romantic Villa Spa Experience | Book Now END',
  metaDescription: 'Share a romantic couples massage experience in your Ubud villa. Two synchronized therapists, candlelit ambiance, premium service. Perfect for honeymoons. Book WhatsApp. END',
  
  h1Title: 'Couples Massage – Romantic Villa Experience in Ubud',
  heroSubtitle: 'Create unforgettable memories with our romantic couples massage service. Two expert therapists deliver synchronized treatments in your private villa, complete with aromatherapy, candles, and premium Balinese oils.',
  heroLayout: 'instant-booking',
  heroBadgeText: 'Romantic Experience',
  
  introduction: [
    'Experience the ultimate romantic wellness moment with our couples massage service in Ubud. Designed specifically for partners, our couples massage brings two skilled therapists to your villa who work in perfect synchronization, creating a shared experience of relaxation and connection. Whether celebrating a honeymoon, anniversary, or simply quality time together, our couples massage creates lasting memories.',
    'Our couples massage transforms your villa into a romantic spa sanctuary. We arrive with everything needed to create the perfect atmosphere - aromatherapy diffusers with romantic essential oils, battery-operated candles for soft ambient lighting, soothing music, rose petals upon request, and two complete massage setups. The experience feels like a private spa designed just for you.',
    'Both partners receive customized treatments during the couples massage. While therapists work in synchronization, each can adjust techniques and pressure to individual preferences. Whether you prefer different massage styles or intensities, we accommodate both needs seamlessly. Communication before and during the session ensures complete satisfaction for both participants.',
    'Our couples massage is available throughout Ubud and across Bali, from 8 AM to 10 PM daily. Same-day romantic bookings are often available for spontaneous couples wanting to add something special to their day. Contact us via WhatsApp to arrange your couples massage experience - we respond within minutes to help you plan the perfect shared treatment.'
  ],
  
  whyChooseAngle: 'trusted-partners',
  whyChoosePoints: [
    'Two experienced therapists working in perfect synchronization',
    'Romantic atmosphere with aromatherapy, candles, and music',
    'Customizable treatments for each partner preferences',
    'Optional romantic additions like rose petals and champagne service',
    'Perfect for honeymoons, anniversaries, and special celebrations',
    'Private villa setting for intimate couples experience'
  ],
  whyChooseTestimonial: {
    text: 'Our honeymoon couples massage was absolutely magical. The therapists created such a romantic setting with flowers and candles. We felt so connected and relaxed. The highlight of our trip!',
    author: 'Emily & Michael',
    rating: 5
  },
  
  pricingLayout: 'comparison-table',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 560,000',
      priceIDR: 'Rp 560,000',
      description: 'Essential couples massage for two with synchronized treatments'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 800,000',
      priceIDR: 'Rp 800,000',
      description: 'Extended couples experience with scalp massage and aromatherapy',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 1,040,000',
      priceIDR: 'Rp 1,040,000',
      description: 'Luxury couples ritual with body scrub, massage, and foot treatment'
    }
  ],
  addOns: [
    { name: 'Rose Petal Setup', price: 'Rp 150,000' },
    { name: 'Champagne Service', price: 'Rp 350,000' },
    { name: 'Photo Package', price: 'Rp 200,000' },
    { name: 'Couples Body Scrub', price: 'Rp 300,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Couples Wellness Ritual',
      description: 'Our signature extended couples experience with multiple treatments and romantic enhancements.',
      linkText: 'Discover the full ritual',
      slug: 'couples-wellness-ritual'
    },
    {
      name: 'Aromatherapy Massage',
      description: 'Romantic essential oils enhance the couples experience with calming or energizing blends.',
      linkText: 'Add aromatherapy to your session',
      slug: 'aromatherapy-massage'
    },
    {
      name: 'Hot Stone Massage',
      description: 'Heated stones add a luxurious dimension to your couples massage experience.',
      linkText: 'Upgrade to hot stone',
      slug: 'hot-stone-massage'
    },
    {
      name: 'Traditional Balinese Massage',
      description: 'Authentic Balinese techniques perfect for couples experiencing local healing traditions.',
      linkText: 'Try Balinese together',
      slug: 'traditional-balinese-massage'
    },
    {
      name: 'Spa Massage',
      description: 'Full spa atmosphere for couples seeking the ultimate pampering experience.',
      linkText: 'Explore spa packages',
      slug: 'spa-massage'
    },
    {
      name: 'Luxury Massage',
      description: 'Premium couples treatments with the finest oils, extended time, and special touches.',
      linkText: 'View luxury options',
      slug: 'luxury-massage'
    }
  ],
  
  howItWorksFormat: 'icon-row',
  howItWorksSteps: [
    { title: 'Choose Your Package', description: 'Select duration and any romantic add-ons for your couples massage' },
    { title: 'Book via WhatsApp', description: 'Message us with your preferred date, time, and any special requests' },
    { title: 'We Create the Magic', description: 'Two therapists arrive to transform your space into a romantic spa' },
    { title: 'Enjoy Together', description: 'Relax side by side with synchronized treatments and intimate atmosphere' }
  ],
  
  reviews: [
    {
      text: 'We surprised my parents with a couples massage for their anniversary. They were so touched by the romantic setup and professional service. The therapists even sang a traditional Balinese blessing. Simply beautiful!',
      author: 'Jessica Thompson',
      location: 'Perth, Australia',
      rating: 5,
      type: 'family'
    },
    {
      text: 'As a remote working couple in Bali, we treat ourselves to couples massages monthly. Its our way of disconnecting from screens and reconnecting with each other. The service is consistently excellent.',
      author: 'Alex & Sofia',
      location: 'Netherlands (Digital Nomads)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'Our honeymoon wouldnt have been complete without this couples massage. They decorated with rose petals, played our wedding song, and the massage itself was incredibly relaxing. Worth every penny!',
      author: 'Chris & Amy',
      location: 'New Zealand',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'I manage a romantic resort and exclusively recommend this service for couples massages. Their attention to romantic details and professional execution matches our brands standards perfectly.',
      author: 'Ni Luh Dewi',
      location: 'Resort Manager, Ubud',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'Many guests at my villa book couples massages for special occasions. The therapists always exceed expectations with their romantic setups and skilled treatments. A trusted partner for years.',
      author: 'Made Wirawan',
      location: 'Villa Owner, Sayan',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'icons',
  trustPoints: [
    'Hygienic equipment for each couple',
    'Certified romantic therapists',
    'Premium organic massage oils',
    'Experienced coordination team',
    'Verified professional staff',
    'Complete privacy guaranteed'
  ],
  
  faqs: [
    {
      question: 'What makes your couples massage special?',
      answer: 'Our couples massage goes beyond two separate massages in one room. We create a complete romantic experience with synchronized therapist movements, aromatherapy specifically chosen for couples, ambient lighting, music, and optional romantic additions like rose petals and champagne. The focus is on creating a shared intimate experience.'
    },
    {
      question: 'Can we have different massage styles or pressures?',
      answer: 'Absolutely! While our therapists work in synchronization, each can customize techniques, pressure, and focus areas to individual preferences. Simply communicate your individual needs when booking or to your therapist before the session. Both partners will receive their ideal treatment.'
    },
    {
      question: 'Is couples massage only for romantic partners?',
      answer: 'Not at all! While popular for romantic couples, our couples massage is perfect for any two people wanting to share a relaxing experience - friends traveling together, mother-daughter trips, siblings, or any duo. We adjust the atmosphere based on your relationship.'
    },
    {
      question: 'What romantic additions can you provide?',
      answer: 'We offer several romantic enhancements: rose petal decoration, battery-operated candles throughout the space, romantic essential oil blends, champagne or sparkling wine service, fruit and chocolate arrangements, and photo packages to capture the moment. All can be arranged when booking.'
    },
    {
      question: 'How much space do you need for couples massage?',
      answer: 'We need enough room for two massage tables set side by side, approximately 4m x 3m minimum. Most villa living rooms, spacious bedrooms, or covered garden areas work well. We can assess your space via photos sent through WhatsApp before arrival.'
    },
    {
      question: 'Do you offer couples massage packages for honeymoons?',
      answer: 'Yes! We have special honeymoon packages including extended treatments, romantic setup with flowers and candles, champagne toast, and ceremonial elements. Many honeymoon couples book our 120-minute couples ritual with all romantic additions for a truly memorable experience.'
    },
    {
      question: 'Can you coordinate couples massage as a surprise?',
      answer: 'We love helping plan surprise couples massages! You can book discreetly, and we can coordinate arrival time and setup while one partner is away. We have experience creating memorable surprise moments for anniversaries, proposals, and special celebrations.'
    },
    {
      question: 'What time is best for a romantic couples massage?',
      answer: 'Late afternoon (4-6 PM) is popular as it transitions into evening relaxation. Sunset time with open doors to a view is magical. Evening sessions (7-9 PM) with candlelight are intensely romantic. Morning sessions suit those preferring to start their day relaxed together.'
    }
  ],
  
  aboutAngle: 'years-experience',
  aboutContent: 'With over 10 years of experience creating romantic couples experiences in Bali, Home Massage Ubud has perfected the art of the couples massage. Our therapists are specially trained in synchronized techniques and romantic atmosphere creation. We have served thousands of couples celebrating honeymoons, anniversaries, engagements, and simple romantic getaways, consistently earning praise for our attention to romantic details.',
  
  relatedServices: [
    { name: 'Spa Massage', slug: 'spa-massage' },
    { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
    { name: 'Luxury Massage', slug: 'luxury-massage' },
    { name: 'Relaxing Massage', slug: 'relaxing-massage' }
  ],
  
  benefits: [
    'Shared relaxation experience deepens connection',
    'Romantic atmosphere enhances intimacy',
    'Synchronized treatments create bonding moments',
    'Private villa setting ensures privacy',
    'Customizable for both partners preferences',
    'Perfect for special occasion memories',
    'Complete stress relief for both partners',
    'Creates lasting romantic memories'
  ],
  
  idealFor: [
    'Honeymooners celebrating their union',
    'Couples marking anniversaries',
    'Partners seeking quality time together',
    'Those proposing or celebrating engagements',
    'Friends wanting shared spa experiences',
    'Anyone creating romantic vacation moments'
  ]
};

export default function CouplesMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
