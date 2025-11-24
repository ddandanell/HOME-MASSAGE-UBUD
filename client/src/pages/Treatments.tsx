import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import { generateGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp';

const treatments = [
  { 
    name: 'Traditional Balinese Massage', 
    url: '/ubud/traditional-balinese-massage',
    description: 'Authentic palm pressure, acupressure & aromatherapy',
    priceFrom: 'Rp 240,000',
    duration: '60-120 min',
    category: 'Traditional & Relaxation'
  },
  { 
    name: 'Deep Tissue Massage', 
    url: '/ubud/deep-tissue-massage',
    description: 'Intense pressure for muscle tension & knots',
    priceFrom: 'Rp 320,000',
    duration: '60-120 min',
    category: 'Therapeutic & Sports'
  },
  { 
    name: 'Aromatherapy Massage', 
    url: '/ubud/aromatherapy-massage',
    description: 'Essential oils for relaxation & healing',
    priceFrom: 'Rp 304,000',
    duration: '60-120 min',
    category: 'Traditional & Relaxation'
  },
  { 
    name: 'Hot Stone Massage', 
    url: '/ubud/hot-stone-massage',
    description: 'Heated volcanic stones for deep relaxation',
    priceFrom: 'Rp 400,000',
    duration: '60-120 min',
    category: 'Luxury & Special'
  },
  { 
    name: 'Thai Massage', 
    url: '/ubud/thai-massage',
    description: 'Assisted stretching & pressure point work',
    priceFrom: 'Rp 280,000',
    duration: '60-120 min',
    category: 'Traditional & Relaxation'
  },
  { 
    name: 'Lymphatic Drainage Massage', 
    url: '/ubud/lymphatic-drainage-massage',
    description: 'Gentle technique for detox & de-bloating',
    priceFrom: 'Rp 384,000',
    duration: '60-90 min',
    category: 'Therapeutic & Sports'
  },
  { 
    name: 'Pregnancy Massage', 
    url: '/ubud/pregnancy-massage',
    description: 'Safe, specialized care for expecting mothers',
    priceFrom: 'Rp 320,000',
    duration: '60-90 min',
    category: 'Specialized'
  },
  { 
    name: 'Foot Reflexology', 
    url: '/ubud/foot-reflexology',
    description: 'Pressure points on feet for whole-body benefits',
    priceFrom: 'Rp 240,000',
    duration: '45-60 min',
    category: 'Traditional & Relaxation'
  },
  { 
    name: 'Post-Hike Recovery Massage', 
    url: '/ubud/post-hike-recovery-massage',
    description: 'Relief for tired muscles after trekking',
    priceFrom: 'Rp 320,000',
    duration: '60-90 min',
    category: 'Therapeutic & Sports'
  },
  { 
    name: 'Yoga Stretch & Massage', 
    url: '/ubud/yoga-stretch-massage',
    description: 'Assisted stretching combined with massage',
    priceFrom: 'Rp 320,000',
    duration: '60-90 min',
    category: 'Therapeutic & Sports'
  },
  { 
    name: 'Detox & Wellness Massage', 
    url: '/ubud/detox-wellness-massage',
    description: 'Full-body detoxification & rejuvenation',
    priceFrom: 'Rp 384,000',
    duration: '90 min',
    category: 'Therapeutic & Sports'
  },
  { 
    name: 'Couples Wellness Ritual', 
    url: '/ubud/couples-wellness-ritual',
    description: 'Romantic synchronized massage for two',
    priceFrom: 'Rp 680,000',
    duration: '90-150 min',
    category: 'Luxury & Special'
  },
  { 
    name: 'Herbal & Bamboo Massage', 
    url: '/ubud/herbal-bamboo-massage',
    description: 'Traditional herbs & bamboo stick techniques',
    priceFrom: 'Rp 400,000',
    duration: '90 min',
    category: 'Luxury & Special'
  },
];

// Group treatments by category
const groupedTreatments = treatments.reduce((acc, treatment) => {
  if (!acc[treatment.category]) {
    acc[treatment.category] = [];
  }
  acc[treatment.category].push(treatment);
  return acc;
}, {} as Record<string, typeof treatments>);

export default function Treatments() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SEOHead
        title="All Massage Treatments | Home Massage Ubud - Complete Menu"
        description="Browse our complete massage treatment menu: Traditional Balinese, Deep Tissue, Hot Stone, Thai, Aromatherapy, Pregnancy, Couples & more. Professional in-villa service in Ubud. Book now!"
        canonical="https://homemassageubud.com/treatments"
        keywords="massage treatments ubud, balinese massage, deep tissue massage, spa menu ubud, massage types bali, in-villa treatments"
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">13 Professional Treatments</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                All Massage Treatments in Ubud
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Choose from our complete range of professional massage therapies, all delivered to your villa, 
                hotel, or guesthouse in Ubud and across Bali. Licensed therapists bring everything needed for 
                an exceptional spa experience.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700"
                  onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                >
                  Book Now on WhatsApp
                </Button>
                <Link href="/service-areas">
                  <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    View Service Areas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Treatments by Category */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {Object.entries(groupedTreatments).map(([category, categoryTreatments]) => (
              <div key={category} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-amber-600">
                  {category}
                </h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryTreatments.map((treatment) => (
                    <Link key={treatment.url} href={treatment.url}>
                      <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 hover:border-amber-300 h-full group">
                        <div className="flex items-start gap-3 mb-4">
                          <Heart className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                          <h3 className="font-bold text-gray-900 text-lg group-hover:text-amber-600 transition-colors">
                            {treatment.name}
                          </h3>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4">
                          {treatment.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div>
                            <p className="text-xs text-gray-500">From</p>
                            <p className="font-bold text-amber-600">{treatment.priceFrom}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Duration</p>
                            <p className="font-semibold text-gray-700">{treatment.duration}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not Sure Which Treatment to Choose?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our experienced therapists can help you select the perfect treatment for your needs. 
              Contact us for personalized recommendations.
            </p>
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700"
              onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
            >
              Get Treatment Advice
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
