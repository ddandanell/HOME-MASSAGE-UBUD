import React from 'react';
import ServiceLandingPageTemplate, { ServiceLandingPageData } from '@/components/ServiceLandingPageTemplate';

const serviceData: ServiceLandingPageData = {
  name: 'Sports Massage',
  slug: 'sports-massage',
  keyword: 'sports massage',
  
  metaTitle: 'Sports Massage Ubud | Athletic Recovery Treatment | Villa Service END',
  metaDescription: 'Professional sports massage for athletic recovery in Ubud. Expert therapists treat muscle strain, improve performance. Perfect after surfing, hiking. Book WhatsApp. END',
  
  h1Title: 'Sports Massage – Athletic Recovery in Ubud',
  heroSubtitle: 'Optimize your athletic performance and accelerate recovery with our professional sports massage service. Expert therapists trained in sports therapy techniques address muscle strain, improve flexibility, and help you perform at your best.',
  heroLayout: 'instant-booking',
  heroBadgeText: 'Athletic Performance',
  
  introduction: [
    'Bali attracts active travelers who surf legendary waves, hike volcano trails, cycle through rice terraces, and practice yoga daily. These activities demand much from your body, and sports massage is the professional answer to athletic recovery. Our sports massage service brings specialized therapy directly to your Ubud accommodation, helping you maintain peak performance throughout your stay.',
    'Sports massage differs significantly from relaxation-focused treatments. Our therapists use specific techniques including deep pressure, friction, stretching, and trigger point release to address the unique needs of active bodies. Whether you are preparing for activity (pre-event massage), recovering afterward (post-event), or maintaining condition between activities, our sports massage delivers targeted results.',
    'Our sports massage therapists understand athletic physiology and common injury patterns. They can identify muscle imbalances, address overuse issues, and work on sport-specific problem areas. Surfers receive attention to shoulders, back, and hip flexors. Hikers get focus on legs, feet, and lower back. Your treatment is customized to your activities and needs.',
    'Sports massage is available throughout Ubud and Bali from 8 AM to 10 PM daily. We can accommodate early morning sessions before your activity or evening recovery treatments. Contact us via WhatsApp with your sport and goals, and we will match you with an appropriately skilled therapist. Same-day booking is often available for post-activity recovery needs.'
  ],
  
  whyChooseAngle: 'trained-therapists',
  whyChoosePoints: [
    'Therapists specifically trained in sports massage techniques',
    'Understanding of athletic physiology and common injuries',
    'Sport-specific treatment approaches for different activities',
    'Pre-event, post-event, and maintenance protocols',
    'Deep tissue and trigger point expertise',
    'Flexibility work and assisted stretching included'
  ],
  whyChooseTestimonial: {
    text: 'I surf daily in Bali and my shoulders were screaming. This sports massage therapist knew exactly what surfers need. Deep work on rotator cuffs, lats, and hip flexors. I was back in the water feeling great the next day.',
    author: 'Tyler J., Hawaii',
    rating: 5
  },
  
  pricingLayout: 'cards',
  packages: [
    {
      duration: '60 Minutes',
      price: 'Rp 380,000',
      priceIDR: 'Rp 380,000',
      description: 'Focused sports treatment targeting primary problem areas'
    },
    {
      duration: '90 Minutes',
      price: 'Rp 450,000',
      priceIDR: 'Rp 450,000',
      description: 'Comprehensive sports massage addressing full-body athletic needs',
      popular: true
    },
    {
      duration: '120 Minutes',
      price: 'Rp 700,000',
      priceIDR: 'Rp 700,000',
      description: 'Full sports recovery session with stretching and trigger point release'
    }
  ],
  couplesPricing: {
    duration: '90 Minutes',
    price: 'Rp 1,100,000'
  },
  addOns: [
    { name: 'Kinesiology Taping', price: 'Rp 120,000' },
    { name: 'Ice/Heat Therapy', price: 'Rp 50,000' },
    { name: 'Extended Stretching', price: 'Rp 75,000' }
  ],
  
  servicesOverview: [
    {
      name: 'Deep Tissue Massage',
      description: 'Intensive work on deeper muscle layers commonly needed for athletic recovery.',
      linkText: 'Explore deep tissue options',
      slug: 'deep-tissue-massage'
    },
    {
      name: 'Post-Hike Recovery Massage',
      description: 'Specialized recovery treatment for hiking and trekking activities.',
      linkText: 'View post-hike recovery',
      slug: 'post-hike-recovery-massage'
    },
    {
      name: 'Yoga Stretch Massage',
      description: 'Combines massage with assisted stretching for flexibility enhancement.',
      linkText: 'Try yoga stretch combination',
      slug: 'yoga-stretch-massage'
    },
    {
      name: 'Therapeutic Massage',
      description: 'Therapeutic approaches for addressing specific injury or strain.',
      linkText: 'Learn about therapeutic options',
      slug: 'therapeutic-massage'
    },
    {
      name: 'Body Therapy Massage',
      description: 'Body-focused therapy treating muscular issues comprehensively.',
      linkText: 'Discover body therapy',
      slug: 'body-therapy-massage'
    },
    {
      name: 'Full Body Massage',
      description: 'Complete body coverage when overall muscle attention is needed.',
      linkText: 'View full body options',
      slug: 'full-body-massage'
    }
  ],
  
  howItWorksFormat: 'four-step',
  howItWorksSteps: [
    { title: 'Tell Us Your Sport', description: 'Share your activity and any specific issues via WhatsApp' },
    { title: 'Get Matched', description: 'We assign a therapist skilled in your sports needs' },
    { title: 'Treatment Plan', description: 'Therapist assesses and creates targeted approach' },
    { title: 'Perform Better', description: 'Recover faster and return to activities refreshed' }
  ],
  
  reviews: [
    {
      text: 'After cycling from Ubud to Lake Batur and back, my legs were destroyed. The sports massage therapist worked wonders on my quads and hamstrings. The recovery was noticeably faster than usual. Excellent knowledge of cycling-specific needs.',
      author: 'The Robinson Family',
      location: 'Colorado, USA',
      rating: 5,
      type: 'family'
    },
    {
      text: 'I practice yoga intensively and occasionally overstretch. This sports massage service understands yoga injuries and how to treat them. The therapist helped me recover from hip flexor strain quickly. Now part of my regular wellness routine.',
      author: 'Simone Bauer',
      location: 'Austria (Digital Nomad)',
      rating: 5,
      type: 'nomad'
    },
    {
      text: 'We both surf and got sports massages after a week of intense sessions. The therapists knew exactly where surfers hurt - shoulders, lower back, hips. Couples sports massage in our villa was the perfect recovery.',
      author: 'Jake & Emma',
      location: 'Sydney, Australia',
      rating: 5,
      type: 'couple'
    },
    {
      text: 'Our surf camp partners with this sports massage service. After-surf massages are crucial for guest satisfaction and injury prevention. Professional therapists who understand athletic needs. Highly recommended.',
      author: 'Kadek Mahendra',
      location: 'Surf Camp Owner, Canggu',
      rating: 5,
      type: 'hotel-guest'
    },
    {
      text: 'Many guests at my yoga retreat villa request sports massage for intensive practice recovery. The therapists understand yoga physiology and treat accordingly. Professional service that enhances guest experience.',
      author: 'Nyoman Wijaya',
      location: 'Yoga Retreat Owner, Ubud',
      rating: 5,
      type: 'villa-owner'
    }
  ],
  
  trustLayout: 'horizontal',
  trustPoints: [
    'Sports-trained therapists',
    'Athletic physiology knowledge',
    'Safe treatment protocols',
    'Professional-grade techniques',
    'Verified credentials',
    'Confidential service'
  ],
  
  faqs: [
    {
      question: 'What activities does sports massage help with?',
      answer: 'Our sports massage addresses needs from virtually any physical activity: surfing, hiking, cycling, yoga, swimming, running, gym workouts, diving, rock climbing, and more. Therapists adjust techniques based on your specific sport and the muscle groups most affected by that activity.'
    },
    {
      question: 'Should I get sports massage before or after my activity?',
      answer: 'Both have benefits. Pre-event sports massage (lighter, invigorating) warms muscles and improves flexibility. Post-event sports massage (deeper, recovery-focused) reduces soreness and speeds healing. For most vacation activities, post-event recovery massage is most popular and beneficial.'
    },
    {
      question: 'Is sports massage painful?',
      answer: 'Sports massage can be intense, especially on tight or injured areas. Some discomfort is normal when working on problem spots, but it should not be unbearable. Communicate with your therapist about pressure - they can adjust while still being effective. The "good pain" of release is different from harmful pain.'
    },
    {
      question: 'How soon after activity should I get sports massage?',
      answer: 'For best results, schedule sports massage within 2-4 hours after activity while muscles are still warm. If that is not possible, same-day or next-day treatment is still very beneficial. For intense activities like volcano hiking or long surf sessions, earlier is better.'
    },
    {
      question: 'Can sports massage help prevent injury?',
      answer: 'Regular sports massage helps identify and address muscle imbalances, tightness, and overuse patterns before they become injuries. Maintaining muscle flexibility and addressing minor issues prevents them from developing into significant problems. Many athletes use sports massage as preventive care.'
    },
    {
      question: 'Do I need to be an athlete for sports massage?',
      answer: 'Not at all! Sports massage benefits anyone who is physically active, even occasionally. If you are hiking, surfing, swimming, or doing any activity during your Bali trip that leaves muscles tired or sore, sports massage helps with recovery regardless of your fitness level.'
    },
    {
      question: 'What should I tell the therapist about my activity?',
      answer: 'Share what activities you have done, when (today, yesterday, etc.), any specific areas that hurt or feel tight, any previous injuries, and your goals (pain relief, faster recovery, improved flexibility). The more information you provide, the more targeted your treatment can be.'
    },
    {
      question: 'How is sports massage different from deep tissue massage?',
      answer: 'Sports massage incorporates deep tissue work but also includes sport-specific techniques like friction, stretching, and trigger point release. Its designed around athletic needs and recovery goals. Deep tissue focuses primarily on releasing chronic tension in deep muscle layers without the sports-specific protocol.'
    }
  ],
  
  aboutAngle: 'trusted-partners',
  aboutContent: 'Home Massage Ubud has developed strong partnerships with surf camps, yoga retreats, adventure tour operators, and athletic facilities across Bali. This collaboration has refined our sports massage expertise to meet the specific needs of active travelers. Our therapists understand the physical demands of Bali adventures and deliver recovery treatments that get you back to your activities faster.',
  
  relatedServices: [
    { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' },
    { name: 'Therapeutic Massage', slug: 'therapeutic-massage' },
    { name: 'Body Therapy Massage', slug: 'body-therapy-massage' },
    { name: 'Professional Massage', slug: 'professional-massage' }
  ],
  
  benefits: [
    'Accelerated recovery from physical activity',
    'Reduced muscle soreness and stiffness',
    'Improved flexibility and range of motion',
    'Prevention of overuse injuries',
    'Enhanced athletic performance',
    'Released trigger points and tension',
    'Better muscle balance and alignment',
    'Faster return to peak activity'
  ],
  
  idealFor: [
    'Surfers riding Bali waves',
    'Hikers and trekkers exploring trails',
    'Cyclists touring Bali roads',
    'Yoga practitioners in intensive practice',
    'Swimmers and divers',
    'Any active traveler needing recovery'
  ]
};

export default function SportsMassagePage() {
  return <ServiceLandingPageTemplate service={serviceData} />;
}
