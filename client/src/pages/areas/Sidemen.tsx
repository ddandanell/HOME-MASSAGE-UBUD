import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Sidemen() {
  const area = {
    name: 'Sidemen',
    slug: 'sidemen',
    h1Title: 'Home Massage in Sidemen – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Sidemen, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Tranquil home massage in Sidemen delivered to your valley villa. Scenic rice terraces, traditional weaving, Mount Agung views. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience peaceful wellness with professional massage therapy delivered to your accommodation in Sidemen\'s pristine valley setting',
    areaDescription: 'Mobile massage service in Sidemen - East Bali\'s hidden valley gem with terraced rice paddies',
    longDescription: 'Sidemen Valley is one of Bali\'s most beautiful and authentic regions, a pristine valley east of Ubud offering spectacular terraced rice paddies, traditional weaving villages, and stunning views of Mount Agung. This peaceful area remains wonderfully undeveloped, attracting travelers seeking genuine Balinese culture, photographers capturing dramatic landscapes, trekkers exploring rice field trails, and those wanting tranquil retreat from tourist crowds. Sidemen showcases traditional agriculture with its intricate subak irrigation system, local families still practicing centuries-old weaving techniques, and a pace of life unchanged by mass tourism. The valley offers boutique eco-resorts, traditional homestays, and small guesthouses integrated respectfully into the landscape. Our mobile massage service brings professional spa treatments directly to your Sidemen accommodation, whether it\'s a valley-view villa, eco-resort overlooking terraces, or traditional homestay in a weaving village. Our licensed therapists navigate the scenic valley roads to deliver exceptional treatments surrounded by natural beauty. Perfect for post-trekking recovery after exploring rice paddies, relaxation while immersed in authentic Balinese culture, or simply unwinding with Mount Agung as your backdrop in this valley paradise.',
    uniqueFeatures: [
      'Pristine valley with terraced rice paddies',
      'Spectacular Mount Agung views',
      'Traditional weaving villages and workshops',
      'Authentic Balinese rural culture',
      'Excellent trekking through rice fields',
      'Peaceful retreat from tourist areas',
      'Boutique eco-resorts and homestays',
      'East Bali between Ubud and coast'
    ],
    nearbyAttractions: [
      'Sidemen Valley rice terraces',
      'Traditional weaving workshops',
      'Mount Agung views',
      'Rice paddy trekking trails',
      'Pura Bukit Agung Temple',
      'Traditional Balinese villages',
      'River rafting at Telaga Waja',
      'Chocolate factory visits',
      'Village ceremonies',
      'Local craft markets',
      'Organic farms',
      'Waterfall hikes'
    ],
    popularVillas: [
      'Valley-view eco-resorts',
      'Traditional Balinese homestays',
      'Boutique villas with rice views',
      'Properties overlooking terraces',
      'Budget guesthouses',
      'Yoga retreat centers',
      'Family-run accommodations',
      'Sustainable lodges',
      'All lodging in Sidemen',
      'Hillside villas with Agung views',
      'Trekking-friendly properties',
      'Cultural immersion homestays'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
      },
      {
        name: 'Post-Hike Recovery Massage',
        slug: 'post-hike-recovery-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-90 min'
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
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 280,000',
        duration: '60-120 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 400,000',
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
        question: 'Do you serve Sidemen Valley even though it\'s rural East Bali?',
        answer: 'Absolutely! Sidemen is within our service area. We recognize its beauty and appeal as an authentic cultural destination. Standard pricing applies with no distance fees. We serve this valley regularly for guests seeking peaceful immersion in traditional Bali. You receive the same professional quality as any other location.'
      },
      {
        question: 'Can your therapists find accommodations in Sidemen Valley?',
        answer: 'Yes! We know Sidemen Valley including properties along the main valley road and tucked into hillsides. Whether you\'re at an eco-resort, traditional homestay, or boutique villa, just provide your accommodation name or location. We navigate the scenic valley roads regularly and love serving this beautiful area. If needed, we can call when nearby for directions.'
      },
      {
        question: 'What\'s the best time for massage after trekking in Sidemen?',
        answer: 'Most Sidemen trekking happens in early morning (7-11am) for best light and cooler temperatures. We recommend booking massage for late morning or early afternoon (11am-2pm) after returning, showering, and resting. The treatment helps tired legs and feet from rice paddy trails. Post-trek recovery massage specifically targets areas used during hiking.'
      },
      {
        question: 'Can I have massage on my terrace overlooking the valley?',
        answer: 'Yes! This is one of Sidemen\'s most magical experiences. If you have a terrace or outdoor bale with valley and Mount Agung views, we can set up there (weather permitting with shade). Imagine receiving professional massage while gazing at terraced rice paddies with Agung rising in the background - it\'s unforgettable. Just mention your preference when booking.'
      },
      {
        question: 'Do you work with eco-resorts and traditional homestays?',
        answer: 'Definitely! Sidemen has wonderful eco-conscious properties and authentic family homestays. We serve all accommodation types. Our service aligns well with eco-tourism values and cultural immersion. We understand and respect the sustainable principles and traditional customs these properties uphold. Many host families and resort managers know our service.'
      },
      {
        question: 'What payment methods work in rural Sidemen?',
        answer: 'We accept cash payment in Indonesian Rupiah at service time. Sidemen is rural without ATMs. We strongly recommend withdrawing cash before arriving - either in Ubud, Candidasa, or Amlapura. Many accommodations accept cards for room charges and can advise on nearest ATMs. Arrange cash before your appointment. We provide receipts upon request.'
      },
      {
        question: 'Can couples book romantic massage in Sidemen valley views?',
        answer: 'Absolutely! Sidemen\'s romantic valley setting is perfect for couples treatments. We send two therapists with two tables for synchronized massage. Many properties have stunning outdoor pavilions perfect for couples wellness with rice terrace and mountain views. The Couples Wellness Ritual is especially romantic here. Book 48 hours ahead for couples treatments.'
      },
      {
        question: 'Can I book massage after visiting weaving workshops?',
        answer: 'Yes! Many Sidemen guests spend mornings visiting traditional weaving workshops where families demonstrate centuries-old techniques. Booking afternoon massage (2-5pm) after cultural exploration is popular. The sitting, standing, and walking involved in workshop visits can tire you, and massage provides perfect recovery. Foot and leg focus works well after village walking.'
      },
      {
        question: 'Do you serve budget homestays and simple guesthouses?',
        answer: 'Absolutely! Sidemen has many charming family-run homestays and budget guesthouses offering authentic experiences. We serve all accommodation types with equal professionalism. Our pricing is accessible for all travelers. We bring the same equipment, oils, and standards to simple homestays as to upscale resorts. Many homestay families know our service and recommend us to guests.'
      },
      {
        question: 'How far in advance should I book in Sidemen?',
        answer: 'Sidemen is quieter than tourist hotspots, so 24 hours notice is usually sufficient. However, for outdoor valley-view setups (weather dependent), couples massage, or weekend appointments, 48 hours advance booking is recommended. During peak trekking season (April-October), book slightly ahead. Same-day bookings often available - contact us to check availability.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
