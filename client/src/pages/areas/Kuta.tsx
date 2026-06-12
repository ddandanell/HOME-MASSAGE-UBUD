import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Kuta() {
  const area = {
    name: 'Kuta',
    slug: 'kuta',
    h1Title: 'Home Massage in Kuta – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Kuta, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Affordable home massage in Kuta, Bali delivered to your hotel or resort. Professional mobile spa near airport, beach, and shopping. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Convenient professional massage therapy delivered to your Kuta accommodation - perfect for airport recovery, beach relaxation, and family-friendly wellness',
    areaDescription: 'Mobile massage service in Kuta - Bali\'s most accessible beach destination near the airport',
    longDescription: 'Kuta is Bali\'s most famous beach destination and often the first stop for visitors arriving at Ngurah Rai International Airport, located just 10 minutes away. This vibrant beach town stretches along a golden sand coastline perfect for swimming, surfing, and spectacular sunsets. Kuta offers an incredible range of accommodations from budget hostels to international resort chains, making it accessible for all travelers. The area is packed with shopping at Beachwalk Mall and Discovery Shopping Mall, countless restaurants serving every cuisine, and entertainment options from surf lessons to traditional dance performances. Our mobile massage service brings professional spa treatments directly to your Kuta hotel, resort, or villa, perfect for recovering from long flights, relaxing after beach days, or treating the family to wellness experiences. Whether you\'re staying along Kuta Beach Road, near the airport, or in the Tuban area, our licensed therapists deliver exceptional massage therapy at fair, transparent prices. Ideal for families, first-time visitors to Bali, and travelers seeking convenient, professional massage service.',
    uniqueFeatures: [
      'Closest major beach destination to Ngurah Rai Airport',
      'Famous Kuta Beach with golden sand and surf breaks',
      'Wide range of budget to mid-range accommodations',
      'Major shopping malls including Beachwalk and Discovery',
      'Family-friendly with water parks and attractions',
      'Vibrant nightlife and dining scene',
      'Easy access to Waterbom Bali water park',
      'Perfect for first-time Bali visitors'
    ],
    nearbyAttractions: [
      'Kuta Beach',
      'Waterbom Bali (water park)',
      'Beachwalk Shopping Center',
      'Discovery Shopping Mall',
      'Kuta Art Market',
      'Ground Zero Monument',
      'Tuban Beach',
      'Circus Waterpark',
      'Lippo Mall Kuta',
      'Kuta Square',
      'Hard Rock Cafe Bali',
      'Ngurah Rai International Airport (10 min)'
    ],
    popularVillas: [
      'Hotels along Kuta Beach Road',
      'Resorts near Beachwalk Mall',
      'Budget accommodations in Poppies Lane',
      'Family hotels with pools',
      'Beachfront resorts',
      'Hotels near airport (Tuban)',
      'Midrange hotels on Sunset Road',
      'Hostels for backpackers',
      'Villas in Kuta area',
      'International chain hotels',
      'All lodging types in Kuta',
      'Airport transfer-friendly hotels'
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
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 360,000',
        duration: '60-120 min'
      },
      {
        name: 'Foot Reflexology',
        slug: 'foot-reflexology',
        priceFrom: 'Rp 240,000',
        duration: '45-60 min'
      },
      {
        name: 'Couples Wellness Ritual',
        slug: 'couples-wellness-ritual',
        priceFrom: 'Rp 680,000',
        duration: '90-150 min'
      },
      {
        name: 'Lymphatic Drainage Massage',
        slug: 'lymphatic-drainage-massage',
        priceFrom: 'Rp 480,000',
        duration: '60-90 min'
      }
    ],
    faqs: [
      {
        question: 'Can you come to my hotel right after I land at the airport?',
        answer: 'Yes! This is one of our most popular services in Kuta. Many travelers book massage for their arrival day to recover from long flights. Simply message us via WhatsApp when you land, and we can typically have a therapist at your Kuta hotel within 1-2 hours. For guaranteed service upon arrival, book 24 hours in advance with your estimated check-in time, and we\'ll coordinate accordingly.'
      },
      {
        question: 'Do you serve all hotels in the Kuta area including near the airport?',
        answer: 'Absolutely! We serve the entire Kuta area including Tuban (the area closest to the airport), along Kuta Beach Road, Poppies Lane, Sunset Road, and everywhere in between. Whether you\'re at a budget hostel or an international resort chain, we deliver professional massage service. No area of Kuta has additional travel fees - all pricing is standard throughout.'
      },
      {
        question: 'Is massage in Kuta suitable for families with children?',
        answer: 'Yes! Many families staying in Kuta book massage services for parents while children are entertained or resting. We can provide massage for teenagers and adults (must be 16+ for full massage treatments). Some families book couples massage for parents in one room while children watch TV or play in another room. Foot reflexology is gentle enough for younger teens and makes a good introduction to wellness treatments.'
      },
      {
        question: 'What\'s your pricing compared to Kuta street spas?',
        answer: 'Our pricing is very competitive and transparent. While Kuta has many street spas, we offer superior quality with licensed therapists, professional equipment, premium oils, and the convenience of in-room service. You avoid touts, pressure selling, and questionable hygiene standards. Our all-inclusive pricing means no hidden fees or surprise costs. For the quality and convenience we provide, many guests find our service better value than budget street spas.'
      },
      {
        question: 'Can I book massage at my hotel in Kuta during the day while my family is at Waterbom?',
        answer: 'Absolutely! This is a popular request. Many families spend days at Waterbom Bali or other attractions, and one or both parents book massage at the hotel during this time. Just let us know your preferred time, and we\'ll schedule accordingly. Morning and early afternoon appointments are generally easier to book same-day than evening slots.'
      },
      {
        question: 'How do I book if I\'m at the beach or shopping when I want massage?',
        answer: 'Simply message us via WhatsApp: +62 811 3702 343. Tell us your hotel name, room number if possible, and preferred time. We recommend giving us 2-3 hours notice for same-day bookings to ensure therapist availability. If you\'re out shopping at Beachwalk or Discovery Mall, we can schedule massage for when you return to your hotel. Just let us know your estimated return time.'
      },
      {
        question: 'Do you work with large hotel properties and resorts in Kuta?',
        answer: 'Yes! We regularly serve guests at Kuta\'s major hotels and resorts. Our therapists are professional, carry proper identification, and know how to coordinate with hotel security and front desk staff. In most cases, hotels allow our service as long as guests request it. We\'ve worked with properties throughout Kuta and understand hotel protocols. Your hotel concierge may even already know our service.'
      },
      {
        question: 'What payment methods do you accept in Kuta?',
        answer: 'We accept cash payment in Indonesian Rupiah (IDR) at the time of service. Kuta has ATMs everywhere - in shopping malls, along main streets, and in most hotels. Money changers are also abundant for currency exchange. We recommend having cash ready before the therapist arrives. We provide receipts upon request for your records.'
      },
      {
        question: 'Can I book massage for my last day before flying out from Bali?',
        answer: 'Yes! Departure-day massage is popular among Kuta guests given the proximity to the airport. Many travelers book morning massage after hotel checkout and before their afternoon/evening flight. We can come to your hotel as long as you have room access, or some hotels allow use of common areas. Give us your flight time when booking, and we\'ll help schedule appropriately. Remember to keep cash for payment if you\'ve already settled your hotel bill.'
      },
      {
        question: 'Are evening massage appointments available in Kuta?',
        answer: 'Yes! We offer massage service from 7am to 10pm daily throughout Kuta. Evening appointments (6pm-9pm) are very popular as guests return from beach activities and shopping. These time slots book up quickly, especially on weekends and during peak season (July-August, December-January). For evening massage, we recommend booking at least 24-48 hours in advance. Last-minute evening bookings are sometimes available - contact us via WhatsApp to check.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
