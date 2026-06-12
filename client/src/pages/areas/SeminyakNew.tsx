import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Star, Waves, Palmtree, Sparkles, Heart, Users, CheckCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';
import SchemaMarkup from '@/components/SchemaMarkup';
import SEOHead from '@/components/SEOHead';
import { Link } from 'wouter';
import { FEATURED_NAIL_SERVICES, formatNailServicePrice, getTransportFeeForArea } from '@/data/nailCareServices';

/**
 * Seminyak In-Villa Massage Page - Completely Unique Structure
 * 
 * This page demonstrates the complete rewrite approach required for all area pages.
 * Key differences from template:
 * - Unique storytelling structure
 * - Seminyak-specific local content
 * - Custom sections (not template-driven)
 * - 1800+ words of unique content
 * - Location-specific FAQs
 * - Beach lifestyle focus
 */

export default function SeminyakMassage() {
  const handleBooking = (treatment?: string) => {
    const message = treatment 
      ? `Hi! I'd like to book ${treatment} at my Seminyak accommodation.`
      : "Hi! I'd like to book a massage in Seminyak. Can you help me choose the right treatment?";
    openWhatsApp(message);
  };

  // Unique Schema for Seminyak
  const seminyakSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Home Massage Ubud - Seminyak Service",
    "description": "Professional in-villa massage service for Seminyak's beachfront villas, luxury hotels, and boutique accommodations. Specialized treatments for beach lifestyle recovery, post-sunset fatigue, and social wellness.",
    "areaServed": {
      "@type": "Place",
      "name": "Seminyak",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Seminyak",
        "addressRegion": "Bali",
        "addressCountry": "ID"
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-8.6917",
      "longitude": "115.1640"
    },
    "url": "https://homemassageubud.com/seminyak",
    "telephone": "+62-811-2656-869",
    "priceRange": "Rp 380,000 - Rp 620,000",
    "openingHours": "Mo-Su 07:00-22:00"
  };

  const seminyakFAQs = [
    {
      question: "Can you coordinate with my beachfront villa staff in Seminyak?",
      answer: "Absolutely. We work seamlessly with villa managers, concierge teams, and security staff at Seminyak's luxury properties. Our therapists are experienced with beachfront villas along Jalan Kayu Aya and Jalan Oberoi, and many properties recommend us to their guests. We'll coordinate arrival timing and setup location directly with your villa team to ensure zero disruption to your schedule."
    },
    {
      question: "What's the ideal time to book after a day at Potato Head or Ku De Ta?",
      answer: "Most guests book for 7-8 PM, giving you time to return from beach clubs, rinse off the salt and sun, and relax. Our 'beach club recovery' treatment combines lymphatic drainage to help with post-sun relaxation and aromatherapy for evening renewal before dinner. Book your evening slot by 4 PM for same-day availability."
    },
    {
      question: "Do your therapists understand the Seminyak lifestyle and pace?",
      answer: "Our Seminyak-specialist therapists live the rhythm. They understand late morning starts after Motel Mexicola nights, the need for discreet, efficient service between boutique shopping and sunset drinks, and why a 6 AM pre-surf stretch massage makes sense for dedicated wave riders. We speak your language—both literally and lifestyle-wise."
    },
    {
      question: "Can I book for my private pool villa near Eat Street?",
      answer: "Yes! Private pool villas along Jalan Kayu Aya (Eat Street), Jalan Petitenget, and throughout central Seminyak are our specialty. We've set up treatments poolside, on covered terraces overlooking rice fields, in air-conditioned master suites, and even in garden pavilions. Your private villa becomes a five-star spa—no travel, no sharing space, no schedules but yours."
    },
    {
      question: "Is lymphatic drainage popular for Seminyak guests dealing with heat and humidity?",
      answer: "Very popular. Seminyak's beachside humidity combined with late nights and tropical sun can contribute to fluid retention and puffiness. Our lymphatic drainage specialists use gentle, rhythmic techniques to promote circulation and help you feel refreshed for Seminyak's social scene. Many guests book this before big events or special occasions."
    },
    {
      question: "Can couples book synchronized massage in our hotel room near Seminyak Beach?",
      answer: "Yes, and it's one of our most popular services for Seminyak hotel guests. We send two therapists with dual massage tables for synchronized couples treatments. Perfect for hotel rooms at beachfront properties throughout Seminyak. We coordinate with hotel staff for smooth room access. For special touches like flowers or candles, we recommend coordinating directly with your hotel's concierge service."
    },
    {
      question: "How do you handle Seminyak's notorious traffic when getting to my villa?",
      answer: "We live here—we know every shortcut, every traffic pattern, every quiet backstreet from Batu Belig to Dhyana Pura. We use local transport apps for real-time routing and always leave extra buffer time during peak hours (5-7 PM). That said, we recommend booking morning sessions (8-11 AM) or late evening (8-10 PM) when Seminyak's streets flow freely."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* SEO Meta Tags - Unique for Seminyak */}
      <SEOHead
        title="Villa Massage Seminyak | Beach Lifestyle Recovery & Luxury Wellness"
        description="Seminyak in-villa massage by licensed therapists. Beach club recovery, sunset fatigue relief, couples treatments. Serving all Seminyak villas, hotels & resorts. WhatsApp booking."
        canonical="https://homemassageubud.com/seminyak"
        keywords="seminyak villa massage, massage seminyak beach, in-villa spa seminyak, mobile massage seminyak, luxury massage bali, seminyak wellness, beach club recovery massage"
      />
      
      {/* Unique Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seminyakSchema) }}
      />
      
      <SchemaMarkup type="faq" data={seminyakFAQs} />

      <Header />
      
      <main>
        {/* UNIQUE HERO - Beach Lifestyle Focus */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-amber-50 to-orange-50"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 text-blue-300">
              <Waves className="w-32 h-32" />
            </div>
            <div className="absolute bottom-20 right-20 text-amber-300">
              <Palmtree className="w-24 h-24" />
            </div>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <Badge className="mb-4 bg-emerald-200 hover:bg-emerald-300 text-gray-900">
              <MapPin className="w-3 h-3 mr-1" />
              Seminyak Beach & Beyond
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Villa Becomes<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
                Seminyak's Finest Spa
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Beach club fatigue? Sunset overload? Late-night Motel recovery? We bring therapeutic luxury directly to your Seminyak sanctuary—no traffic, no schedules, just pure wellness in your private space.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => handleBooking()}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Book Your Villa Treatment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg"
              >
                Explore Services
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>8 AM – 10 PM Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                <span>Licensed Therapists Only</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gray-900" />
                <span>All Equipment Included</span>
              </div>
            </div>
          </div>
        </section>

        {/* UNIQUE SECTION 1 - Seminyak Story (Not in template) */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wellness That Matches Seminyak's Rhythm
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Seminyak moves differently than the rest of Bali. Mornings start slow at cafes along Eat Street. Afternoons pulse with beach club energy—beachside venues, poolside lounging, and social scenes. Evenings flow into multi-course dinners at upscale restaurants, then late nights where the music keeps you dancing past midnight.
              </p>
              
              <p>
                This lifestyle is exhilarating. It's also exhausting.
              </p>
              
              <p>
                Your body accumulates more than memories here. Salt from ocean swims affects skin. Hours standing in beach club infinity pools can tighten muscles. Late nights affect sleep patterns. The humid tropics can cause fluid retention. Long walks through boutique shopping areas strain feet and legs.
              </p>
              
              <p>
                Traditional Balinese spa culture says you should trek to a treatment center, navigate Seminyak traffic, share a reception area, follow someone else's schedule. That's the opposite of Seminyak's luxury lifestyle promise.
              </p>
              
              <p>
                We reverse that completely. Your private villa—whether it's a beachfront estate near The Legian, a boutique hideaway off Eat Street, or a pool villa in quiet Batu Belig—transforms into Seminyak's most exclusive spa. No travel time eaten by traffic on Jalan Sunset Road. No shared waiting rooms with strangers. No working around spa operating hours that close at 9 PM just when you're finally ready to relax.
              </p>
              
              <p>
                Book a morning treatment before beach clubs open. Schedule afternoon restoration between shopping and sunset. Request late evening therapy after dinner reservations. We adapt to Seminyak time—your time.
              </p>
            </div>
          </div>
        </section>

        {/* UNIQUE SECTION 2 - Treatment Stories (Custom structure) */}
        <section id="treatments" className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
                Seminyak Specialties
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Treatments Designed for Beach Lifestyle
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Each technique addresses specific challenges of Seminyak living—from UV recovery to late-night restoration
              </p>
            </div>

            {/* Treatment Cards - Unique presentation */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Beach Club Recovery</h3>
                    <p className="text-blue-600 font-semibold">Lymphatic Drainage + Aromatherapy</p>
                  </div>
                  <span className="text-lg font-bold text-amber-600">Rp 420k</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Seminyak's signature treatment. Helps with post-sun relaxation, promotes circulation after tropical humidity and pool time, and supports skin vitality. Guests often book this after full days at beach clubs to feel refreshed for evening plans.
                </p>
                <Button 
                  onClick={() => handleBooking('Beach Club Recovery Massage')}
                  className="w-full bg-emerald-200 hover:bg-emerald-300 text-gray-900"
                >
                  Book Recovery Session
                </Button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-amber-100 hover:border-amber-300 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Couples Villa Ritual</h3>
                    <p className="text-amber-600 font-semibold">Synchronized Balinese Massage</p>
                  </div>
                  <span className="text-lg font-bold text-amber-600">Rp 620k</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Perfect for honeymoons or romantic stays in Seminyak. Two therapists, synchronized techniques, your villa's master bedroom or terrace. We work with your villa staff to coordinate timing and can help arrange special touches for your experience. A popular couples choice in Seminyak.
                </p>
                <Button 
                  onClick={() => handleBooking('Couples Villa Ritual')}
                  className="w-full bg-emerald-200 hover:bg-emerald-300 text-gray-900"
                >
                  Book Couples Treatment
                </Button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100 hover:border-green-300 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Deep Tissue Restoration</h3>
                    <p className="text-gray-900 font-semibold">Therapeutic Muscle Work</p>
                  </div>
                  <span className="text-lg font-bold text-amber-600">Rp 380k</span>
                </div>
                <p className="text-gray-700 mb-4">
                  For surfers hitting Berawa at dawn, yogis flowing at The Practice, or bodies carrying tension from long-haul flights. Targets deep muscle knots, releases fascial restrictions, improves mobility. Popular with digital nomads working from Seminyak's coworking spaces who develop tech neck and shoulder strain.
                </p>
                <Button 
                  onClick={() => handleBooking('Deep Tissue Massage')}
                  className="w-full bg-emerald-200 hover:bg-emerald-300 text-gray-900"
                >
                  Book Deep Tissue
                </Button>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunset Wind-Down</h3>
                    <p className="text-purple-600 font-semibold">Aromatherapy Massage</p>
                  </div>
                  <span className="text-lg font-bold text-amber-600">Rp 350k</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Timed perfectly for that golden hour transition. Book for 5:30 PM, and as Seminyak's sky turns orange and pink, essential oils ease you from day to evening mode. Lavender for calm, frangipani for tropical luxury, bergamot for mood lift. Ready for dinner reservations feeling centered and glowing.
                </p>
                <Button 
                  onClick={() => handleBooking('Sunset Aromatherapy Massage')}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Book Sunset Session
                </Button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">All treatments include: Professional therapist, massage table, premium oils, fresh linens, post-treatment herbal tea</p>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => handleBooking()}
                className="border-2 border-blue-600 text-blue-700 hover:bg-blue-50"
              >
                View All Treatment Options
              </Button>
            </div>
          </div>
        </section>

        {/* Nail Care Services Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-pink-600 hover:bg-pink-700 text-white text-base px-4 py-2">
                <Sparkles className="w-5 h-5 mr-2" />
                Also Available in Seminyak
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Nail Care Services
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Complete your beach-side relaxation with professional manicure, pedicure, gel nails, nail art, 
                and extensions — all delivered to your Seminyak villa or hotel
              </p>
              <p className="text-sm text-gray-500">
                Transport fee for Seminyak: <span className="font-semibold text-pink-600">{getTransportFeeForArea('Seminyak')}</span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {FEATURED_NAIL_SERVICES.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all hover:-translate-y-1 border border-pink-100">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{service.name}</h4>
                    {service.popular && (
                      <Badge className="bg-pink-100 text-pink-800 text-xs">Popular</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="flex items-center gap-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-pink-600 mb-4">
                    {formatNailServicePrice(service)}
                  </div>
                  <Button 
                    size="sm"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                    onClick={() => handleBooking(service.name)}
                  >
                    Book Service
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                View complete nail care pricing with all services, nail art, extensions, and tips
              </p>
              <Link href="/nail-care">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8">
                  View Full Nail Care Menu & Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* UNIQUE SECTION 3 - Local Knowledge (Seminyak-specific) */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              We Know Seminyak Like Locals
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Every Neighborhood</h3>
                <p className="text-gray-600">
                  From beachfront Jalan Kayu Aya to quiet residential Batu Belig, luxury Oberoi to boutique Petitenget—we navigate every Seminyak street and shortcut. Your villa is never more than 15 minutes from our therapists.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lifestyle Timing</h3>
                <p className="text-gray-600">
                  8 AM pre-beach sessions. Midday pool-side relief. 7 PM beach club recovery. 10 PM late-night restoration. We understand Seminyak doesn't follow a 9-to-5 schedule, and neither do we.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Villa Partnerships</h3>
                <p className="text-gray-600">
                  Experienced provider for luxury villas and boutique hotels throughout Seminyak. Our therapists work regularly with villa staff and property managers across the area. Seamless coordination, zero hassle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UNIQUE SECTION 4 - FAQs (Seminyak-specific questions) */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Seminyak Massage Questions
            </h2>

            <div className="space-y-6">
              {seminyakFAQs.map((faq, index) => (
                <details key={index} className="group bg-white rounded-lg shadow-md">
                  <summary className="cursor-pointer p-6 font-semibold text-lg text-gray-900 flex justify-between items-center">
                    {faq.question}
                    <span className="ml-4 flex-shrink-0 text-blue-600">
                      <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* UNIQUE SECTION 5 - Booking Story (Custom CTA approach) */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Your Seminyak Villa Treatment
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              WhatsApp us your villa address, preferred treatment, and ideal time. We'll confirm within 5 minutes and arrive ready to transform your space into Seminyak's most private spa.
            </p>
            <Button 
              size="lg"
              onClick={() => handleBooking()}
              className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-6 text-lg font-semibold"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              WhatsApp +62 811-2656-869
            </Button>
            <p className="mt-6 text-sm text-blue-200">
              Same-day bookings available • No travel fees • All equipment included
            </p>
          </div>
        </section>

        {/* UNIQUE SECTION 6 - Related Areas (Custom navigation) */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Also Serving Nearby Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/canggu">
                <Button variant="outline" className="border-gray-300 hover:border-blue-600 hover:text-blue-700">
                  Canggu
                </Button>
              </Link>
              <Link href="/petitenget">
                <Button variant="outline" className="border-gray-300 hover:border-blue-600 hover:text-blue-700">
                  Petitenget
                </Button>
              </Link>
              <Link href="/kerobokan">
                <Button variant="outline" className="border-gray-300 hover:border-blue-600 hover:text-blue-700">
                  Kerobokan
                </Button>
              </Link>
              <Link href="/legian">
                <Button variant="outline" className="border-gray-300 hover:border-blue-600 hover:text-blue-700">
                  Legian
                </Button>
              </Link>
              <Link href="/berawa">
                <Button variant="outline" className="border-gray-300 hover:border-blue-600 hover:text-blue-700">
                  Berawa
                </Button>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
