import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Candidasa() {
  const area = {
    name: 'Candidasa',
    slug: 'candidasa',
    h1Title: 'Home Massage in Candidasa – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Candidasa, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Peaceful home massage in Candidasa delivered to your beachfront hotel or villa. East Bali coastal tranquility with diving and culture. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience serene wellness with professional massage therapy delivered to your accommodation in Candidasa\'s peaceful East Bali coastal setting',
    areaDescription: 'Mobile massage service in Candidasa - East Bali\'s tranquil beachside escape with authentic charm',
    longDescription: 'Candidasa is a laid-back coastal town on East Bali\'s shoreline, offering peaceful seaside living far removed from southern Bali\'s tourist intensity. This charming area stretches along a scenic promenade lined with restaurants, dive shops, and small hotels, backed by lush hillsides. Candidasa features calm lagoons ideal for snorkeling, proximity to the ancient Tenganan village, and access to beautiful water palaces. The town attracts travelers seeking authenticity, divers exploring East Bali\'s underwater treasures, couples wanting romance without crowds, and those using it as a base for eastern temple and nature exploration. Accommodations range from budget beachfront bungalows to comfortable mid-range resorts with ocean views. Our mobile massage service brings professional spa treatments directly to your Candidasa accommodation, complementing the area\'s naturally relaxed coastal rhythm. Whether you\'re at a beachfront property along the main promenade, a hillside hotel overlooking the bay, or a family-run guesthouse, our licensed therapists navigate East Bali\'s scenic roads to deliver exceptional treatments. Ideal for post-dive recovery with specialized techniques, relaxation after cultural exploration, or simply unwinding to Candidasa\'s gentle pace where authentic Balinese coastal life continues undisturbed by mass tourism.',
    uniqueFeatures: [
      'Peaceful East Bali coastal town atmosphere',
      'Scenic beachfront promenade',
      'Excellent diving and snorkeling sites',
      'Gateway to eastern Bali cultural attractions',
      'Traditional fishing village authenticity',
      'Proximity to Tirta Gangga and Taman Ujung',
      'Less crowded than southern beaches',
      'Affordable accommodations and dining'
    ],
    nearbyAttractions: [
      'Candidasa Beach and lagoons',
      'Blue Lagoon snorkeling spot',
      'Tenganan ancient Bali Aga village',
      'Tirta Gangga Water Palace',
      'Taman Ujung Water Palace',
      'Goa Lawah Bat Cave Temple',
      'White Sand Beach (Virgin Beach)',
      'Multiple diving sites',
      'Beachfront promenade',
      'Traditional village markets',
      'Temple festivals',
      'Ferry to Nusa Penida (Padang Bai nearby)'
    ],
    popularVillas: [
      'Beachfront hotels along promenade',
      'Budget guesthouses near beach',
      'Mid-range resorts with pools',
      'Hillside properties with views',
      'Dive resort accommodations',
      'Family-run guesthouses',
      'Properties near lagoons',
      'Traditional Balinese homestays',
      'Boutique hotels',
      'All lodging in Candidasa',
      'Budget-friendly options',
      'Quiet beachside bungalows'
    ],
    treatments: [
      {
        name: 'Traditional Balinese Massage',
        slug: 'traditional-balinese-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-120 min'
      },
      {
        name: 'Post-Dive Recovery Massage',
        slug: 'post-hike-recovery-massage',
        priceFrom: 'Rp 380,000',
        duration: '60-90 min'
      },
      {
        name: 'Deep Tissue Massage',
        slug: 'deep-tissue-massage',
        priceFrom: 'Rp 380,000',
        duration: '60-120 min'
      },
      {
        name: 'Aromatherapy Massage',
        slug: 'aromatherapy-massage',
        priceFrom: 'Rp 350,000',
        duration: '60-120 min'
      },
      {
        name: 'Thai Massage',
        slug: 'thai-massage',
        priceFrom: 'Rp 390,000',
        duration: '60-120 min'
      },
      {
        name: 'Hot Stone Massage',
        slug: 'hot-stone-massage',
        priceFrom: 'Rp 420,000',
        duration: '60-120 min'
      },
      {
        name: 'Foot Reflexology',
        slug: 'foot-reflexology',
        priceFrom: 'Rp 380,000',
        duration: '45-60 min'
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
        question: 'Do you serve Candidasa even though it\'s in East Bali?',
        answer: 'Absolutely! Candidasa is within our service area. We recognize its importance as an East Bali coastal destination. Standard pricing applies with no distance surcharges. We serve divers, cultural tourists, and travelers staying in this peaceful area regularly with the same professional quality as central Bali locations.'
      },
      {
        question: 'What\'s the best time for massage after diving in Candidasa?',
        answer: 'Most Candidasa divers do morning dives (7-11am). We recommend booking massage 2-4 hours after diving - typically early to mid-afternoon (1-4pm). This allows proper decompression and maximizes massage benefits. Our Post-Dive Recovery Massage targets shoulders, back, and legs tired from diving. Let us know you\'ve been diving for optimal treatment.'
      },
      {
        question: 'Can you find accommodations along the Candidasa promenade?',
        answer: 'Yes! We know Candidasa well, including all properties along the beachfront promenade and hillside hotels. Whether you\'re staying at a dive resort, budget guesthouse, or beachfront hotel, just provide your accommodation name. We navigate the area regularly and will find you easily within 15-20 minutes of booking confirmation.'
      },
      {
        question: 'Do you work with dive resorts and budget guesthouses?',
        answer: 'Definitely! Candidasa has many dive resorts and charming budget properties. We serve all accommodation types with equal professionalism. Our pricing is transparent and accessible. We understand divers\' needs for specific post-dive timing and muscle recovery focus. Many dive resort managers and guesthouse owners know our service and recommend us to guests.'
      },
      {
        question: 'Can I book massage after visiting Tenganan or water palaces?',
        answer: 'Absolutely! Many Candidasa guests make day trips to Tenganan village, Tirta Gangga, or Taman Ujung palaces. These involve walking, stairs, and heat. Booking evening massage (5-8pm) after returning is popular and helps tired legs and back recover. Mention your day trip activities when booking for optimal treatment focus on areas you\'ve used most.'
      },
      {
        question: 'What payment methods work in Candidasa?',
        answer: 'We accept cash payment in Indonesian Rupiah at service time. Candidasa has a few ATMs along the main road near restaurants and shops. However, they can run low on cash. We recommend withdrawing in larger towns before arriving or bringing sufficient cash from southern Bali. Most accommodations can advise on ATM locations. We provide receipts upon request.'
      },
      {
        question: 'Can couples book romantic massage in Candidasa?',
        answer: 'Yes! Candidasa\'s peaceful coastal setting is perfect for couples treatments. We send two therapists with two tables for synchronized massage. Many properties have ocean-view terraces or garden areas where we can set up for romantic sessions with sound of waves. The Couples Wellness Ritual is popular here. Book 48 hours ahead for couples treatments to ensure therapist availability.'
      },
      {
        question: 'Do you serve hillside hotels with bay views?',
        answer: 'Absolutely! Some Candidasa properties sit on hillsides above town with beautiful bay views. We serve these locations regularly. Just provide clear directions or hotel name. If you have a terrace overlooking the bay, we can set up there (weather permitting) for massage with panoramic coastal views. All Candidasa locations have standard pricing with no additional fees.'
      },
      {
        question: 'Is Candidasa massage service family-friendly?',
        answer: 'Yes! Candidasa attracts many families due to its calm lagoons and safe atmosphere. We cater to family wellness needs. Parents can receive massage while children are supervised, rest, or play. Teenagers (16+) can also receive appropriate treatments. The peaceful Candidasa environment is perfect for family relaxation time where everyone can unwind at their own pace.'
      },
      {
        question: 'How far in advance should I book in Candidasa?',
        answer: 'Candidasa is generally quieter than southern Bali, so booking flexibility is good. For most times, 24 hours notice is sufficient. However, during peak diving season (April-November) when dive resorts are full, advance booking is wiser. Post-dive afternoon slots (2-5pm) are most popular. For couples massage or weekend appointments, book 1-2 days ahead. Same-day bookings often available - contact us to check.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
