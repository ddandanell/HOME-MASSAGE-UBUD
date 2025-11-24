import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Canggu() {
  const area = {
    name: 'Canggu',
    slug: 'canggu',
    h1Title: 'Home Massage in Canggu – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Canggu, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Professional home massage in Canggu delivered to your villa, guesthouse, or hotel. Licensed therapists serve surfers, digital nomads & families. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience rejuvenating wellness with professional massage therapy delivered to your accommodation in Canggu\'s vibrant surf and digital nomad community',
    areaDescription: 'Mobile massage service in Canggu - Bali\'s hippest coastal village for surfers and creative travelers',
    longDescription: 'Canggu has evolved from a quiet surf village into Bali\'s coolest coastal destination, attracting surfers, digital nomads, yogis, and young families. Stretching from Echo Beach to Berawa Beach, this laid-back area offers world-class surf breaks, trendy cafes serving healthy food, coworking spaces, beach clubs, and a bohemian-chic vibe. The rice paddies still weave between modern villas, creating a unique blend of traditional Bali and contemporary lifestyle. Our mobile massage service caters specifically to Canggu\'s active community - whether you need post-surf recovery, relief from desk work at coworking spaces, or simply relaxation after exploring Canggu\'s bustling scene. We deliver professional spa treatments to guesthouses in Batu Bolong, luxury villas near Berawa Beach, budget stays near Echo Beach, and everywhere in between. Perfect for treating surf-tired muscles, desk-related tension, or simply unwinding in true Canggu style.',
    uniqueFeatures: [
      'World-famous surf breaks at Echo Beach and Old Man\'s',
      'Hub for digital nomads with multiple coworking spaces',
      'Vibrant cafe culture with healthy food options',
      'Mix of budget guesthouses and luxury villas',
      'Beach clubs like The Lawn and Finns Recreation Club',
      'Rice field views combined with beach access',
      'Strong yoga and wellness community',
      'Laid-back, creative, international atmosphere'
    ],
    nearbyAttractions: [
      'Echo Beach (Pantai Batu Mejan)',
      'Old Man\'s Surf Break',
      'Berawa Beach',
      'Batu Bolong Beach',
      'The Lawn Beach Club',
      'Finns Recreation Club',
      'Love Anchor Market',
      'Canggu Shortcut (scenic rice fields)',
      'Tanah Lot Temple (15 min drive)',
      'Atlas Beach Fest venue',
      'Pretty Poison Beach Club',
      'Multiple surf schools and shops'
    ],
    popularVillas: [
      'Villas near Berawa Beach',
      'Guesthouses in Batu Bolong',
      'Budget stays near Echo Beach',
      'Luxury pool villas with rice views',
      'Hotels along main Canggu road',
      'Surf camp accommodations',
      'Long-term rental villas',
      'Boutique hotels in Pererenan',
      'Beachfront properties',
      'All lodging in Canggu area',
      'Coworking-friendly accommodations',
      'Family villas with multiple rooms'
    ],
    treatments: [
      {
        name: 'Post-Surf Recovery Massage',
        slug: 'post-hike-recovery-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-90 min'
      },
      {
        name: 'Deep Tissue Massage',
        slug: 'deep-tissue-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-120 min'
      },
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
      },
      {
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 304,000',
        duration: '60-120 min'
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
      },
      {
        name: 'Yoga Stretch & Massage',
        slug: 'yoga-stretch-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-90 min'
      },
      {
        name: 'Lymphatic Drainage Massage',
        slug: 'lymphatic-drainage-massage',
        priceFrom: 'Rp 384,000',
        duration: '60-90 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 400,000',
        duration: '60-120 min'
      }
    ],
    faqs: [
      {
        question: 'Can you find my guesthouse or villa in Canggu\'s maze of small streets?',
        answer: 'Yes! Our therapists know Canggu extremely well, including all the small gangs (alleys) and shortcuts through the rice fields. We\'ve been serving Canggu for years and are familiar with virtually every area from Echo Beach to Berawa. Just provide your accommodation name or drop a pin location when booking, and we\'ll find you easily. If needed, we can call you when nearby.'
      },
      {
        question: 'I\'m a digital nomad working from Canggu - can I book regular weekly massages?',
        answer: 'Absolutely! Many of our Canggu clients are digital nomads who book weekly or bi-weekly massage sessions to manage desk-related tension and maintain wellness. We can schedule regular appointments at your preferred day and time. For regular clients, we offer priority booking and can often accommodate your preferred therapist. Contact us via WhatsApp to set up a recurring schedule.'
      },
      {
        question: 'Do you offer post-surf massage specifically for tired surf muscles?',
        answer: 'Yes! Post-surf recovery massage is one of our most popular treatments in Canggu. We understand surfer\'s needs - targeting shoulders, back, arms, and legs with deep tissue and sports massage techniques. Many surfers book late morning or afternoon sessions after their dawn surf session. The treatment helps with muscle recovery, reduces soreness, and improves flexibility for your next surf.'
      },
      {
        question: 'What\'s the best time to book massage in Canggu?',
        answer: 'Canggu has a unique daily rhythm. Early morning (7-9am) is popular with surfers returning from dawn patrol. Mid-morning to afternoon (10am-4pm) works well for digital nomads taking breaks from work. Early evening (5-7pm) is perfect before heading out to beach clubs or restaurants. Late evening (8-10pm) suits those who want to wind down after a full day. Weekend slots book quickly, so reserve 2-3 days ahead for best availability.'
      },
      {
        question: 'Can I book massage at a coworking space in Canggu?',
        answer: 'While we primarily serve private accommodations (villas, hotels, guesthouses), some coworking spaces in Canggu have private rooms or wellness areas where we can provide massage. However, most of our Canggu digital nomad clients prefer the convenience and privacy of receiving massage at their villa or apartment after work. We\'re happy to discuss your specific needs via WhatsApp.'
      },
      {
        question: 'Do you serve the northern parts of Canggu like Padonan and Pererenan?',
        answer: 'Yes! We serve all of Canggu including the northern extending areas of Padonan, Pererenan, and even Cemagi. These quieter neighborhoods are becoming increasingly popular, and we regularly serve villas and guesthouses there. Standard pricing applies to the entire Canggu area with no additional travel fees regardless of which beach or neighborhood you\'re staying in.'
      },
      {
        question: 'What payment methods work in Canggu?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. Canggu has numerous ATMs and money changers throughout the area - particularly along the main Canggu road, near Echo Beach, and in Batu Bolong. Many accommodations can also arrange currency exchange. We provide receipts upon request. For long-term clients or regular bookings, we can discuss alternative payment arrangements.'
      },
      {
        question: 'Can couples or friends book simultaneous massages?',
        answer: 'Definitely! This is very popular in Canggu, especially with couples and friends traveling together. We send multiple therapists to your villa, each with their own table and equipment. It\'s a great social wellness activity and perfect for those sharing accommodation. Our Couples Wellness Ritual is especially popular. Just book 24-48 hours in advance to ensure we can arrange multiple therapists.'
      },
      {
        question: 'Is there parking available for your therapists in busy Canggu traffic?',
        answer: 'Yes, our therapists navigate Canggu\'s busy streets daily and arrive by scooter, making parking easy even in congested areas like Batu Bolong during peak hours. You don\'t need to worry about arranging parking - we handle all logistics. Most villas and guesthouses have scooter parking anyway. We know all the shortcuts to avoid the worst traffic congestion.'
      },
      {
        question: 'How far in advance should I book during Canggu high season?',
        answer: 'Canggu is busy year-round but especially packed July-August and December-January. During these peak times, we recommend booking 2-3 days in advance, especially for evening appointments or couples treatments. Morning and early afternoon slots on weekdays are easier to book last-minute. For same-day bookings during high season, contact us early in the morning for best availability. Off-season, 24 hours notice is usually sufficient.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
