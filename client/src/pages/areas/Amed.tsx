import React from 'react';
import AreaPageTemplate from '@/components/AreaPageTemplate';

export default function Amed() {
  const area = {
    name: 'Amed',
    slug: 'amed',
    h1Title: 'Home Massage in Amed – Professional In-Villa Spa Service',
    metaTitle: 'Home Massage in Amed, Bali | In-Villa Mobile Spa • 7 AM–10 PM',
    metaDescription: 'Tranquil home massage in Amed delivered to your beachfront villa or hotel. East Bali diving paradise with volcanic beaches. Book via WhatsApp. 7am-10pm daily.',
    heroSubtitle: 'Experience peaceful wellness with professional massage therapy delivered to your accommodation in Amed\'s pristine East Bali coastal setting',
    areaDescription: 'Mobile massage service in Amed - East Bali\'s serene diving and snorkeling paradise',
    longDescription: 'Amed is a stunning coastal area in East Bali, stretching along 10 kilometers of black volcanic sand beaches with traditional fishing villages, world-class diving and snorkeling sites, and spectacular views of Mount Agung. This tranquil region attracts divers exploring the famous USS Liberty shipwreck at nearby Tulamben, snorkelers enjoying pristine coral reefs, photographers capturing sunrise over Agung volcano, and travelers seeking authentic Balinese coastal life away from southern Bali\'s crowds. Amed encompasses several small fishing villages including Jemeluk, Bunutan, and Lipah, each offering unique charm while maintaining the area\'s peaceful atmosphere. The region features traditional salt-making practices, colorful jukung fishing boats, yoga retreats, and accommodations ranging from budget beachfront bungalows to boutique dive resorts. Our mobile massage service brings professional spa treatments directly to your Amed accommodation, perfectly complementing the area\'s naturally relaxing environment. Whether you\'re staying at a dive resort, a beachfront bungalow, or a hillside villa with ocean views, our licensed therapists navigate East Bali\'s scenic coastal roads to deliver exceptional treatments. Ideal for post-dive recovery, treating sore muscles after snorkeling, or simply unwinding while gazing at Agung volcano and the sea.',
    uniqueFeatures: [
      'World-class diving at USS Liberty shipwreck',
      'Pristine snorkeling reefs right from beach',
      'Spectacular Mount Agung volcano views',
      'Traditional fishing villages and culture',
      'Black volcanic sand beaches',
      'Peaceful East Bali atmosphere',
      'Affordable accommodation and diving',
      'Gateway to East Bali exploration'
    ],
    nearbyAttractions: [
      'USS Liberty Shipwreck (Tulamben)',
      'Jemeluk Bay snorkeling',
      'Japanese Shipwreck diving',
      'Traditional salt making',
      'Lipah Beach',
      'Amed Beach villages',
      'Mount Agung views',
      'Tirta Gangga Water Palace',
      'Taman Ujung Water Palace',
      'Lempuyang Temple (Gates of Heaven)',
      'Traditional fishing culture',
      'Sunrise photography locations'
    ],
    popularVillas: [
      'Dive resorts along Amed coast',
      'Beachfront bungalows',
      'Budget guesthouses',
      'Hillside villas with views',
      'Yoga retreat centers',
      'Eco-friendly accommodations',
      'Properties in Jemeluk village',
      'Hotels in Bunutan area',
      'Lipah Beach accommodations',
      'All lodging along Amed coast',
      'Traditional Balinese homestays',
      'Boutique diving hotels'
    ],
    treatments: [
      {
        name: 'Post-Dive Recovery Massage',
        slug: 'post-hike-recovery-massage',
        priceFrom: 'Rp 320,000',
        duration: '60-90 min'
      },
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
        question: 'Can you reach accommodations all along the 10km Amed coastline?',
        answer: 'Absolutely! Amed stretches from Amed village in the south through Jemeluk, Bunutan, Lipah, Selang, and beyond. We serve the entire coastal area and know all the villages well. Whether you\'re staying in central Jemeluk, peaceful Lipah, or anywhere along the scenic coast, just provide your accommodation name or location. We navigate the coastal road regularly and will find you easily. All pricing is standard throughout the Amed area.'
      },
      {
        question: 'What\'s the best time for massage after diving or snorkeling?',
        answer: 'Perfect timing question! Most divers do morning dives (typically 7-11am), and snorkelers are out in the mid-morning. We recommend booking massage 2-4 hours after water activities - usually early to mid-afternoon (2-5pm). This allows your body to decompress properly and get maximum benefit from the massage. Post-dive recovery massage specifically targets shoulders, back, and leg muscles used during diving. Let us know you\'ve been diving for optimal treatment planning.'
      },
      {
        question: 'Do you serve Amed even though it\'s in remote East Bali?',
        answer: 'Yes! Amed is absolutely within our service area. We recognize its importance as East Bali\'s main diving destination and tourism hub. We have therapists who serve the East Bali region specifically. All our standard pricing applies to Amed with no distance surcharges or travel fees. Amed guests receive the same professional quality and service standards as central Bali locations. We\'re there regularly serving divers, yoga retreats, and travelers.'
      },
      {
        question: 'Can I book massage at my beachfront bungalow or budget guesthouse?',
        answer: 'Definitely! Amed has many charming beachfront bungalows and budget-friendly guesthouses, and we happily serve all accommodation types. Professional in-villa massage isn\'t just for luxury resorts - our pricing is transparent and accessible for all travelers. We bring the same equipment, oils, and professional standards to budget properties as to upscale resorts. Many guesthouse owners in Amed know our service and recommend us to guests.'
      },
      {
        question: 'What payment methods work in Amed\'s small village setting?',
        answer: 'We accept cash payment in Indonesian Rupiah at the time of service. Amed has a few ATMs in the main Jemeluk area near dive shops and restaurants. However, ATMs can sometimes run out of cash, so we strongly recommend withdrawing cash in larger towns like Candidasa or Amlapura before arriving, or bringing sufficient cash from southern Bali. Most accommodations accept card payments for rooms and can advise on cash availability. We provide receipts upon request.'
      },
      {
        question: 'Can couples book massage at our beachfront accommodation?',
        answer: 'Yes! Couples massage is popular in Amed\'s romantic coastal setting. We send two therapists with two tables for synchronized treatment. Many Amed properties have beautiful outdoor areas, beachfront terraces, or garden spaces where we can set up for a magical experience with ocean views and sound of waves. The Couples Wellness Ritual is especially romantic in Amed\'s peaceful environment. Book 48 hours ahead for couples treatments to ensure therapist availability.'
      },
      {
        question: 'Do you work with dive resorts and yoga retreat centers?',
        answer: 'Absolutely! Many Amed dive resorts and yoga retreat centers know our service and coordinate bookings for their guests. We understand divers\' needs (post-dive timing, muscle recovery focus) and yogis\' preferences (complementary stretching, gentle techniques). For yoga retreats or diving groups wanting multiple massages, we can arrange several therapists. Contact us in advance for group bookings. Many retreats include our massage as part of their wellness programs.'
      },
      {
        question: 'Can I have massage on my bungalow terrace overlooking the ocean?',
        answer: 'Yes! This is one of Amed\'s most magical massage experiences. If you have a beachfront terrace, garden area, or balcony with ocean views (and shade), we can set up there weather permitting. Imagine receiving professional massage while listening to waves and viewing Mount Agung across the water - it\'s unforgettable. Just mention your preference when booking, and ensure there\'s shade available. Many Amed properties have perfect outdoor massage spots.'
      },
      {
        question: 'How far in advance should I book massage in Amed?',
        answer: 'Amed is generally quieter than southern Bali, so booking flexibility is good. For most times, 24-48 hours notice is sufficient. However, during peak diving season (April-November) and around yoga retreat schedules, advance booking is wiser. Post-dive afternoon slots (2-5pm) are popular and can fill up. For couples massage or group bookings for yoga retreats or dive groups, book 2-3 days ahead. Same-day bookings are often available - contact us to check.'
      },
      {
        question: 'Can I book massage after visiting nearby temples like Lempuyang?',
        answer: 'Absolutely! Many Amed guests make day trips to Lempuyang Temple (Gates of Heaven), Tirta Gangga, or Taman Ujung. These involve lots of stairs and walking in heat. Booking evening massage (6-8pm) after returning to Amed is very popular and helps tired legs and back recover beautifully. Let us know you\'ve been temple visiting and climbing stairs for optimal treatment focus. Post-temple massage specifically targets the muscle groups you\'ve used during exploration.'
      }
    ]
  };

  return <AreaPageTemplate area={area} />;
}
