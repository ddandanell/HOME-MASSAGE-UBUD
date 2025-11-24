import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function UbudSouth() {
  const area = {
    name: 'Ubud South (Lodtunduh & Nyuh Kuning)',
    slug: 'ubud-south',
    h1Title: 'Villa Massage in Ubud South – Lodtunduh & Nyuh Kuning Spa',
    metaTitle: 'Massage Ubud South | Lodtunduh & Nyuh Kuning',
    metaDescription: 'Villa massage Ubud South - Lodtunduh & Nyuh Kuning. Peaceful village spa service to your accommodation. From 240k IDR. Book 7am-10pm daily.',
    heroSubtitle: 'Professional massage therapy delivered to your villa in Ubud South, serving Lodtunduh, Nyuh Kuning, and Monkey Forest areas',
    areaDescription: 'Mobile massage service in Ubud South - peaceful villages and Monkey Forest surroundings',
    longDescription: 'Ubud South encompasses charming villages including Lodtunduh and Nyuh Kuning, the artistic village at the edge of the Sacred Monkey Forest. This area offers authentic Balinese village life combined with easy access to Ubud\'s attractions. Nyuh Kuning is known for its wood carving artists and peaceful atmosphere, while Lodtunduh offers rice field views and traditional homestays. Our mobile massage service brings professional spa treatments to your accommodation in these southern areas, letting you experience wellness while staying in authentic Balinese village settings.',
    uniqueFeatures: [
      'Authentic Balinese village atmosphere',
      'Adjacent to Sacred Monkey Forest',
      'Wood carving artist community in Nyuh Kuning',
      'Peaceful rice field settings',
      'Easy walk to Monkey Forest and central Ubud',
      'Mix of traditional and modern accommodations'
    ],
    nearbyAttractions: [
      'Sacred Monkey Forest Sanctuary',
      'Nyuh Kuning Village (wood carving)',
      'Monkey Forest Road',
      'Traditional Balinese compounds',
      'Rice field walks in Lodtunduh',
      'Local temples and shrines',
      'Traditional markets nearby'
    ],
    popularVillas: [
      'Villas near Monkey Forest',
      'Traditional Balinese homestays',
      'Guesthouses in Nyuh Kuning',
      'Accommodations in Lodtunduh',
      'Budget to mid-range hotels',
      'Family-run guesthouses',
      'Private villas with rice views',
      'All lodging in south Ubud'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 240,000',
        duration: '60-120 min'
      },
      {
        name: 'Deep Tissue Massage',
        slug: 'deep-tissue-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-120 min'
      },
      {
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
      },
      {
        name: 'Herbal & Bamboo Massage',
        slug: 'herbal-bamboo-massage',
        priceFrom: 'Rp 400,000',
        duration: '90-120 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 400,000',
        duration: '60-120 min'
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
      }
    ],
    faqs: [
      {
        question: 'Can you find accommodations in Nyuh Kuning village?',
        answer: 'Yes! We know Nyuh Kuning well and regularly serve guesthouses and homestays in the village. Provide your accommodation name and we\'ll navigate there easily. The village is small and we\'re familiar with all the paths and locations.'
      },
      {
        question: 'Is it the same price for Lodtunduh and south Ubud areas?',
        answer: 'Yes! Our prices are uniform throughout all Ubud areas including Lodtunduh, Nyuh Kuning, and southern villages. No extra charges for any Ubud location. All prices include therapist travel and equipment setup at your accommodation.'
      },
      {
        question: 'Can I book massage after visiting Monkey Forest?',
        answer: 'Absolutely! Many guests visit Monkey Forest in the morning, then book afternoon massage sessions at their accommodation in the area. It\'s a perfect way to relax after exploring. We recommend booking a day or two in advance for best availability.'
      },
      {
        question: 'Do you have traditional Balinese therapists for village stays?',
        answer: 'Yes! All our therapists are local Balinese professionals, which makes them perfect for guests staying in traditional village settings like Nyuh Kuning and Lodtunduh. They understand and respect Balinese customs and village life.'
      },
      {
        question: 'Can you set up massage in traditional Balinese compounds?',
        answer: 'Yes! We regularly provide service to guests staying in traditional Balinese family compounds and homestays. We bring all equipment and can set up in your room, on terraces, or in garden areas. We\'re respectful of traditional settings and customs.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
