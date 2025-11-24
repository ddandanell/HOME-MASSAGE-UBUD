import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Tegallalang() {
  const area = {
    name: 'Tegallalang',
    slug: 'tegallalang',
    h1Title: 'Home Massage in Tegallalang – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Tegallalang, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Scenic home massage in Tegallalang delivered to your rice terrace villa. UNESCO rice paddies and artisan culture. Professional mobile spa. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience tranquil wellness with professional massage therapy delivered to your accommodation surrounded by Tegallalang's stunning terraced rice paddies',
    areaDescription: 'Mobile massage service in Tegallalang - Ubud's famous UNESCO rice terrace region',
    longDescription: 'Tegallalang is internationally famous for its dramatic terraced rice paddies that cascade down hillsides in emerald-green layers, creating one of Bali's most photographed landscapes. Located just 20 minutes north of Ubud, this area showcases the traditional subak irrigation system that earned UNESCO World Heritage status. Beyond the iconic rice terraces, Tegallalang encompasses artisan villages where skilled craftspeople create intricate wood carvings, stone sculptures, and traditional handicrafts. The region offers stunning valley views, popular photo spots including terrace swings, traditional coffee plantations, and authentic Balinese village life. Visitors come for the scenery, stay for the tranquility, and discover a perfect balance of natural beauty and cultural richness. Our mobile massage service brings professional spa treatments directly to your Tegallalang accommodation, whether it's a luxury villa perched above the terraces with panoramic views, a boutique eco-resort integrated into the landscape, or a traditional guesthouse in an artisan village. Our licensed therapists navigate the scenic winding roads through rice paddies to deliver exceptional treatments. Perfect for recovering after walking through terraced landscapes, relaxing post-photography adventures, or simply unwinding while gazing at rice field vistas that define Bali's iconic beauty.',
    uniqueFeatures: [
      'World-famous terraced rice paddies',
      'UNESCO World Heritage subak system',
      'Traditional artisan villages and craftspeople',
      'Stunning hillside and valley views',
      'Popular rice terrace swing experiences',
      '20 minutes from central Ubud',
      'Authentic Balinese agricultural culture',
      'Mix of eco-resorts and traditional stays'
    ],
    nearbyAttractions: [
      'Tegallalang Rice Terraces',
      'Rice terrace swing and photo spots',
      'Traditional wood carving villages',
      'Artisan workshops and galleries',
      'Ceking Rice Terrace viewpoints',
      'Valley-view restaurants and cafes',
      'Walking paths through rice paddies',
      'Traditional coffee plantations',
      'Local markets selling handicrafts',
      'Temple ceremonies in villages',
      'Ubud center (20 min)',
      'Scenic photography locations'
    ],
    popularVillas: [
      'Villas overlooking rice terraces',
      'Eco-resorts integrated in landscape',
      'Boutique hotels with valley views',
      'Traditional guesthouses in villages',
      'Luxury hillside properties',
      'Family villas near terraces',
      'Budget accommodations',
      'Properties with terrace access',
      'All lodging in Tegallalang',
      'Romantic rice field villas',
      'Sustainable eco-stays',
      'Artisan village homestays'
    ],
    treatments: [
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
        name: 'Deep Tissue Massage',
        slug: 'deep-tissue-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-120 min'
      },
      {
        name: 'Post-Hike Recovery Massage',
        slug: 'post-hike-recovery-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-90 min'
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
      }
    ],
    faqs: [
      {
        question: 'Can you find accommodations along the rice terrace roads in Tegallalang?',
        answer: 'Absolutely! We know Tegallalang intimately, including villas and guesthouses along the scenic terrace roads and in artisan villages. Whether you\'re staying at a hillside resort overlooking the paddies, a boutique villa integrated into the terraces, or a traditional guesthouse in a carving village, we\'ll find you easily. Just provide your accommodation name or location. We navigate these beautiful roads daily and love serving guests in this stunning area.'
      },
      {
        question: 'What\'s the best time for massage after visiting the rice terraces?',
        answer: 'Most guests visit the terraces in morning (7-11am) for best light and fewer crowds, walking the paths and taking photos. We recommend booking massage for late morning or early afternoon (11am-2pm) after returning. This gives you time to shower and relax before treatment. The massage helps tired legs from terrace walking and stair climbing. Many guests then rest before evening activities. This timing is very popular, so book a day ahead.'
      },
      {
        question: 'Is Tegallalang too far from Ubud for your service?',
        answer: 'Not at all! Tegallalang is just 20 minutes from central Ubud and absolutely within our core service area. We serve this region daily and consider it part of greater Ubud. All standard pricing applies with no distance fees. Many guests stay in Tegallalang specifically for the views and tranquility while remaining close to Ubud. You receive the same professional service as Ubud center guests.'
      },
      {
        question: 'Can I have massage on my terrace overlooking the rice paddies?',
        answer: 'Yes! This is one of Tegallalang\'s most magical experiences. If you have a terrace, balcony, or outdoor bale overlooking rice terraces with shade, we can set up there (weather permitting). Imagine receiving professional massage while gazing at layered green paddies and listening to tropical sounds - it\'s unforgettable. Many Tegallalang properties specifically feature these perfect outdoor massage spots. Just mention your preference when booking.'
      },
      {
        question: 'Do you serve eco-resorts and sustainable properties in Tegallalang?',
        answer: 'Absolutely! Tegallalang has several eco-conscious resorts and sustainable accommodations, and we happily serve all of them. Our service aligns well with eco-tourism values - we minimize travel by serving locally, use natural oils, and create no waste. Many eco-resort guests appreciate our mobile service as it allows experiencing wellness without additional travel impact. We understand and respect the eco-conscious principles these properties uphold.'
      },
      {
        question: 'Can couples book romantic massage in rice field villas?',
        answer: 'Definitely! Tegallalang\'s romantic rice field settings are perfect for couples treatments. We send two therapists with two tables for synchronized massage. Many couples time this with sunset (around 5-6pm start) when the rice terraces glow golden. Outdoor setups overlooking paddies are especially romantic. The Couples Wellness Ritual is very popular here. Book 48 hours ahead for couples massage, especially for sunset timing which books quickly.'
      },
      {
        question: 'What payment methods work in Tegallalang?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. Tegallalang itself is rural and traditional without ATMs. We recommend withdrawing cash in Ubud before coming to Tegallalang, or many villa/guesthouse hosts can direct you to the nearest ATM in Ubud town (20 min). Most accommodations accept cards for room payments and can advise on cash. Arrange cash before your appointment. We provide receipts upon request.'
      },
      {
        question: 'Do you work with traditional guesthouses and budget properties?',
        answer: 'Yes! Tegallalang has many charming family-run guesthouses and budget properties in artisan villages, and we serve all accommodation types. Professional massage service isn\'t just for luxury resorts - our pricing is accessible and transparent for all travelers. We bring the same equipment, oils, and professional standards to budget guesthouses as to upscale villas. Many guesthouse families know our service and recommend us to guests.'
      },
      {
        question: 'Can I book massage after exploring artisan villages and workshops?',
        answer: 'Absolutely! Many Tegallalang guests spend mornings or afternoons visiting wood carving workshops, stone sculpture studios, and artisan galleries. Booking late afternoon or evening massage (4-7pm) after cultural exploration is popular. The walking, standing, and carrying purchases can tire you, and massage provides perfect recovery. Let us know you\'ve been workshop touring for optimal foot and leg focus.'
      },
      {
        question: 'How far in advance should I book in Tegallalang?',
        answer: 'For most times, 24 hours notice is sufficient in Tegallalang. However, for outdoor rice field terrace setups (weather dependent), couples massage, or weekend appointments, we recommend 48 hours advance booking. During peak tourism months (July-August, December-January), book 2 days ahead. Same-day bookings are often available for weekday mornings and early afternoons - contact us to check availability.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
