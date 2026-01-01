import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function NusaDua() {
  const area = {
    name: 'Nusa Dua',
    slug: 'nusa-dua',
    h1Title: 'Home Massage in Nusa Dua – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Nusa Dua, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Premium home massage in Nusa Dua delivered to your resort or villa. Professional mobile spa service in Bali\'s luxury resort enclave. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience world-class wellness with professional massage therapy delivered to your luxury resort or villa in Nusa Dua\'s pristine enclave',
    areaDescription: 'Mobile massage service in Nusa Dua - Bali\'s premier luxury resort destination',
    longDescription: 'Nusa Dua is Bali\'s most exclusive resort enclave, a meticulously planned gated area featuring international five-star hotels, championship golf courses, pristine white-sand beaches, and impeccable infrastructure. Located on the southeastern peninsula, Nusa Dua was designed specifically for upscale tourism, offering families, couples, and business travelers a secure, refined environment. The area features renowned resorts from major hotel chains including St. Regis, Ritz-Carlton, Sofitel, Westin, and many others, all positioned along beautiful beaches perfect for swimming and water sports. Nusa Dua Beach Promenade connects the resorts with walking and cycling paths. Our mobile massage service brings professional spa treatments directly to your Nusa Dua resort room or villa, complementing the luxury hospitality you\'re already experiencing. Whether you\'re staying at one of the beachfront mega-resorts, a family-friendly hotel with kids\' clubs, or a private villa within the enclave, our licensed therapists provide exceptional treatments with the convenience of in-room service. Perfect for families wanting flexible spa scheduling, couples seeking romantic wellness experiences, or business travelers needing stress relief without leaving their accommodation.',
    uniqueFeatures: [
      'Gated luxury resort enclave with security',
      'International five-star hotel chains',
      'Pristine white-sand beaches safe for swimming',
      'Family-friendly with kids\' clubs and activities',
      'Bali Collection shopping and dining complex',
      'Championship golf course (Bali National Golf Club)',
      'Museum Pasifika showcasing Pacific art',
      'Well-maintained beach promenade for walking'
    ],
    nearbyAttractions: [
      'Nusa Dua Beach',
      'Geger Beach',
      'Museum Pasifika',
      'Bali Collection (shopping & dining)',
      'Water Blow (natural water spout)',
      'Bali National Golf Club',
      'Puja Mandala (five temples complex)',
      'Peninsula Island',
      'Beach promenade',
      'Water sports centers',
      'Multiple resort spas',
      'Cultural performances at resorts'
    ],
    popularVillas: [
      'St. Regis Bali Resort',
      'The Ritz-Carlton Bali',
      'Sofitel Bali Nusa Dua Beach Resort',
      'Grand Hyatt Bali',
      'The Westin Resort Nusa Dua',
      'Mulia Resort',
      'Conrad Bali',
      'Courtyard by Marriott Bali',
      'Novotel Bali Nusa Dua',
      'Private villas in enclave',
      'All luxury resorts in Nusa Dua',
      'Family-friendly hotel properties'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 280,000',
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
        priceFrom: 'Rp 304,000',
        duration: '60-120 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 360,000',
        duration: '60-120 min'
      },
      {
        name: 'Couples Wellness Ritual',
        slug: 'couples-wellness-ritual',
        priceFrom: 'Rp 680,000',
        duration: '90-150 min'
      },
      {
        name: 'Pregnancy Massage',
        slug: 'pregnancy-massage',
        priceFrom: 'Rp 336,000',
        duration: '60-75 min'
      },
      {
        name: 'Lymphatic Drainage Massage',
        slug: 'lymphatic-drainage-massage',
        priceFrom: 'Rp 384,000',
        duration: '60-90 min'
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 360,000',
        duration: '60-120 min'
      }
    ],
    faqs: [
      {
        question: 'Can you access major resort properties in the Nusa Dua enclave?',
        answer: 'Yes! We regularly serve guests at all major Nusa Dua resorts including St. Regis, Ritz-Carlton, Sofitel, Grand Hyatt, Westin, Mulia, and many others. Our therapists are professional, carry proper identification, and know how to coordinate with resort security and front desk staff. Most resorts allow outside massage service for guests who request it. We\'ll check in at security and reception just like any other guest service.'
      },
      {
        question: 'Why choose mobile massage when my Nusa Dua resort has its own spa?',
        answer: 'Many guests prefer our service for several reasons: convenience of in-room treatment without leaving your villa or suite, better value pricing compared to resort spa rates, flexibility in scheduling (we offer 7am-10pm service), ability to enjoy treatment with family nearby, and access to techniques our therapists specialize in. Some guests use both - resort spa facilities for pools and saunas, and our service for the actual massage treatments.'
      },
      {
        question: 'Do you offer family massage packages for parents and teenagers?',
        answer: 'Yes! Family wellness is popular in Nusa Dua. We can send multiple therapists to provide simultaneous massage for family members (age 16+). This is perfect for families staying in suites or villas where everyone can receive treatment at the same time. Parents can enjoy full massage while teenagers experience appropriate treatments. Book 2-3 days ahead for multiple therapists, especially during school holidays when Nusa Dua is busy with families.'
      },
      {
        question: 'What are your prices compared to Nusa Dua resort spas?',
        answer: 'Our pricing is significantly more affordable than most Nusa Dua resort spas while maintaining professional quality. Resort spas typically charge premium prices due to facility overhead. We offer the same (or higher) quality of licensed therapists, premium oils, and professional equipment, but with more transparent, accessible pricing. For example, where a resort might charge 800,000-1,200,000 IDR for treatments, ours range from 280,000-400,000 IDR for similar services.'
      },
      {
        question: 'Can I book massage for early morning or late evening at my resort?',
        answer: 'Absolutely! We offer service from 7am-10pm daily throughout Nusa Dua. Early morning massage (7-9am) is popular for guests wanting wellness before resort activities or golf. Late evening massage (8-10pm) is perfect after dinner or resort entertainment. These time slots do book up, so we recommend reserving 24-48 hours ahead, especially for evening appointments which fill faster.'
      },
      {
        question: 'Do you serve villas outside the main gated enclave but still in Nusa Dua area?',
        answer: 'Yes! We serve the entire Nusa Dua area including properties within the gated enclave and villas/hotels in surrounding areas like Sawangan, Benoa, and near Geger Beach. All locations are considered part of our standard Nusa Dua service area with no additional travel fees. Just provide your exact address or resort name when booking.'
      },
      {
        question: 'What payment methods work in Nusa Dua?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. Nusa Dua has ATMs at Bali Collection shopping complex and at most major resorts. Many resort concierges can also provide currency exchange or direct you to ATMs. We recommend arranging cash before your appointment. We provide receipts upon request. For corporate bookings or extended stays, alternative payment arrangements can be discussed via WhatsApp.'
      },
      {
        question: 'Can couples book romantic massage at our Nusa Dua resort?',
        answer: 'Definitely! Couples massage is very popular in Nusa Dua, especially for honeymoons, anniversaries, and romantic getaways. We send two therapists to your room or suite with two tables for synchronized treatment. The Couples Wellness Ritual (90-150 min) includes romantic elements. Many couples book this for private villa terraces overlooking the ocean. Reserve 48 hours in advance for couples treatments, especially during peak romantic travel periods.'
      },
      {
        question: 'How do you coordinate with Nusa Dua resort security?',
        answer: 'Our therapists are experienced working with Nusa Dua\'s security protocols. They carry professional identification and know the check-in procedures for all major resorts. We typically arrive at the main security gate, check in with your name and room number, then proceed to your accommodation. It helps if you inform your resort front desk or concierge that you\'re expecting a massage service. Most resorts are familiar with outside massage services and have standard procedures.'
      },
      {
        question: 'Can I book a massage on the beach or at the beach club?',
        answer: 'While we primarily serve private accommodations (resort rooms, suites, villas), some Nusa Dua resorts have private beach areas or cabanas where massage is possible. This depends on the specific resort\'s policies. Most commonly, we set up in your room, suite balcony, or villa terrace. For beach massage, check with your resort first about their policies, then contact us via WhatsApp to discuss the possibility. Garden pavilions and covered terraces are usually ideal alternatives.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
