import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Pererenan() {
  const area = {
    name: 'Pererenan',
    slug: 'pererenan',
    h1Title: 'Home Massage in Pererenan – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Pererenan, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Relaxing home massage in Pererenan delivered to your rice field villa or hotel. Tranquil Canggu neighbor with surf and nature. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience peaceful wellness with professional massage therapy delivered to your accommodation in Pererenan\'s tranquil rice field setting',
    areaDescription: 'Mobile massage service in Pererenan - Canggu\'s quieter northern neighbor with rice paddies and surf',
    longDescription: 'Pererenan is a tranquil village on the northern edge of the Canggu area, offering a peaceful alternative to busier Canggu while maintaining easy access to its amenities. This area beautifully blends traditional Balinese rice field landscapes with modern villa developments and surf beach access. Pererenan Beach provides a more local, less crowded surf experience compared to Echo Beach or Old Man\'s. The area attracts longer-term travelers, families seeking quiet environments, yogis, and those who appreciate authentic village life alongside contemporary comforts. Stunning rice paddy views, traditional ceremonies in local temples, and a slower pace define Pererenan\'s character. Our mobile massage service brings professional spa treatments directly to your Pererenan villa or accommodation, perfectly complementing the area\'s wellness-oriented atmosphere. Whether you\'re staying in a modern rice field villa, a family guesthouse, or a boutique hotel, our licensed therapists navigate the village paths to deliver exceptional treatments. Ideal for those seeking genuine relaxation, yoga retreat participants, families wanting peaceful surroundings, or digital nomads appreciating Pererenan\'s emerging creative community without Canggu\'s intensity.',
    uniqueFeatures: [
      'Tranquil rice field landscapes and village atmosphere',
      'Less crowded surf breaks at Pererenan Beach',
      'Quieter alternative to central Canggu',
      'Mix of traditional Balinese life and modern villas',
      'Easy access to Canggu amenities (5-10 minutes)',
      'Growing yoga and wellness community',
      'Authentic local culture and ceremonies',
      'Perfect for families and long-term stays'
    ],
    nearbyAttractions: [
      'Pererenan Beach',
      'Rice field walking paths',
      'Local temples and ceremonies',
      'Echo Beach (10 min)',
      'Old Man\'s surf spot (10 min)',
      'Canggu Shortcut rice fields',
      'Finns Recreation Club (nearby)',
      'Tanah Lot Temple (15 min)',
      'Canggu restaurants and cafes',
      'Yoga studios in area',
      'Traditional village markets',
      'Surf schools and lessons'
    ],
    popularVillas: [
      'Private rice field villas',
      'Family guesthouses',
      'Modern villa developments',
      'Boutique hotels',
      'Long-term rental properties',
      'Yoga retreat centers',
      'Villas near Pererenan Beach',
      'Traditional homestays',
      'Eco-friendly accommodations',
      'All lodging in Pererenan',
      'Budget to luxury villas',
      'Digital nomad-friendly properties'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-120 min'
      },
      {
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 350,000',
        duration: '60-120 min'
      },
      {
        name: 'Deep Tissue Massage',
        slug: 'deep-tissue-massage',
        priceFrom: 'Rp 380,000',
        duration: '60-120 min'
      },
      {
        name: 'Yoga Stretch & Massage',
        slug: 'yoga-stretch-massage',
        priceFrom: 'Rp 380,000',
        duration: '60-90 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 420,000',
        duration: '60-120 min'
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 390,000',
        duration: '60-120 min'
      },
      {
        name: 'Post-Surf Recovery Massage',
        slug: 'post-hike-recovery-massage',
        priceFrom: 'Rp 380,000',
        duration: '60-90 min'
      },
      {
        name: 'Couples Wellness Ritual',
        slug: 'couples-wellness-ritual',
        priceFrom: 'Rp 620,000',
        duration: '90-150 min'
      }
    ],
    faqs: [
      {
        question: 'Can your therapists find villas in Pererenan rice fields?',
        answer: 'Absolutely! Our therapists know Pererenan intimately, including villas nestled in rice fields and down small village paths (gangs). We serve this area regularly and are familiar with most accommodations. When booking, provide your villa name or drop a pin location, and we\'ll find you easily. If needed, we can call when nearby to coordinate final directions. Don\'t worry about remote locations - we know the area well.'
      },
      {
        question: 'Is Pererenan considered too far from your main service area?',
        answer: 'Not at all! Pererenan is very much within our core service area. We\'re there daily serving the growing community of villas, guesthouses, and retreats. All pricing is standard for Pererenan with no distance surcharges or travel fees. We treat Pererenan as part of the greater Canggu area - just the quieter, more peaceful northern section perfect for wellness-focused stays.'
      },
      {
        question: 'Can I book massage after yoga sessions in Pererenan?',
        answer: 'Yes! This is an ideal combination. Many yoga practitioners in Pererenan book massage 1-2 hours after their practice. Yoga Stretch & Massage is especially popular, complementing your yoga routine by targeting areas opened during practice. Our therapists understand the yoga community\'s needs. If you\'re on a yoga retreat in Pererenan, we can coordinate group bookings for multiple participants. Mention your yoga practice when booking for optimal treatment planning.'
      },
      {
        question: 'Do you serve long-term rental villas in Pererenan?',
        answer: 'Definitely! Pererenan has become popular for month-long stays, and we have many regular clients renting villas there. We can arrange weekly or bi-weekly massage appointments at your preferred schedule. Long-term guests receive priority booking and can often request their preferred therapist. This is perfect for those appreciating Pererenan\'s peaceful atmosphere and wanting ongoing wellness support. Contact us via WhatsApp to set up a recurring schedule.'
      },
      {
        question: 'Can families with young children receive massage service?',
        answer: 'Yes! Pererenan is very family-friendly, and we cater to family wellness needs. Massage is available for adults and teenagers (16+). Many families book massage for parents while young children are supervised, napping, or playing nearby. If you\'re in a multi-room villa, we can set up in a separate area. The peaceful Pererenan environment is perfect for family wellness where everyone can relax. Just coordinate supervision for young children during your treatment.'
      },
      {
        question: 'Is there parking for your therapists in Pererenan village areas?',
        answer: 'Yes! Our therapists arrive by scooter, making parking easy even in village areas with narrow paths. Most villas and guesthouses in Pererenan have scooter parking space. You don\'t need to arrange anything - we handle all logistics. Our therapists are experienced navigating Pererenan\'s mix of paved roads and village paths, including during rainy season conditions. We come prepared for all situations.'
      },
      {
        question: 'What\'s the best time for massage in Pererenan\'s daily rhythm?',
        answer: 'Pererenan has a peaceful daily flow. Morning massage (8-10am) after sunrise yoga is popular. Mid-day sessions (12-2pm) work well during the hot afternoon when indoor activities are preferred. Late afternoon (4-6pm) after surf or beach time is ideal. Evening massage (7-9pm) suits those wanting deep relaxation in Pererenan\'s quiet nights. We\'re flexible from 7am-10pm. Morning and early afternoon slots are often easier to book same-day than evenings.'
      },
      {
        question: 'Can I book massage at my rice field villa terrace?',
        answer: 'Absolutely! Outdoor massage with rice field views is one of Pererenan\'s special experiences. If you have a covered terrace, pavilion, or gazebo overlooking rice paddies, we can set up there (weather permitting). Imagine receiving professional massage while listening to tropical birds and viewing emerald rice fields - it\'s magical. Just ensure there\'s shade available and mention your preference when booking. We\'ll assess conditions when we arrive.'
      },
      {
        question: 'What payment methods work in Pererenan?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. While Pererenan itself is quiet and traditional, ATMs are available in central Canggu (5-10 minutes away) near Echo Beach and Old Man\'s. Many villa hosts can direct you to the nearest ATM or even provide currency exchange. We recommend arranging cash before your appointment. For long-term residents booking regular sessions, alternative payment arrangements can be discussed via WhatsApp.'
      },
      {
        question: 'Do you coordinate with villa managers and owners in Pererenan?',
        answer: 'Yes! Many Pererenan villas are managed remotely with villa managers or caretakers on-site. We\'re experienced coordinating with villa management to ensure smooth access. If your villa has security gates or special access procedures, just mention this when booking. We can coordinate arrival times with your villa manager. Many Pererenan villa managers already know our service and facilitate our visits for their guests.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
