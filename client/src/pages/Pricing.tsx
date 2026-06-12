import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Users, Clock, MapPin, Shield, Award, Heart, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { generateGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import SEOHead from '@/components/SEOHead';

const massageTypes = [
  {
    name: 'Traditional Balinese Massage',
    description: 'Ancient healing technique using acupressure, gentle stretching, and aromatherapy oils',
    duration: '60-90 minutes',
    price: {
      single: 280000,
      couple: 520000
    },
    benefits: ['Stress relief', 'Improved circulation', 'Muscle tension release', 'Deep relaxation'],
    popular: true
  },
  {
    name: 'Deep Tissue Massage',
    description: 'Intensive therapeutic massage targeting chronic muscle tension and knots',
    duration: '60-90 minutes',
    price: {
      single: 320000,
      couple: 600000
    },
    benefits: ['Pain relief', 'Injury recovery', 'Improved mobility', 'Chronic tension release'],
    popular: false
  },
  {
    name: 'Aromatherapy Massage',
    description: 'Gentle relaxation massage with premium essential oils for mind-body wellness',
    duration: '60-90 minutes',
    price: {
      single: 304000,
      couple: 560000
    },
    benefits: ['Emotional balance', 'Stress reduction', 'Better sleep', 'Mental clarity'],
    popular: false
  },
  {
    name: 'Hot Stone Massage',
    description: 'Volcanic stones and therapeutic massage for ultimate muscle relaxation',
    duration: '75-90 minutes',
    price: {
      single: 360000,
      couple: 680000
    },
    benefits: ['Deep muscle relaxation', 'Improved circulation', 'Pain relief', 'Stress reduction'],
    popular: false
  },
  {
    name: 'Prenatal Massage',
    description: 'Safe, specialized massage for expecting mothers (after 12 weeks)',
    duration: '60-75 minutes',
    price: {
      single: 336000,
      couple: null
    },
    benefits: ['Pregnancy comfort', 'Reduced swelling', 'Better sleep', 'Stress relief'],
    popular: false
  },
  {
    name: 'Lymphatic Drainage',
    description: 'Gentle therapeutic technique to boost immune system and reduce swelling',
    duration: '60-75 minutes',
    price: {
      single: 480000,
      couple: 900000
    },
    benefits: ['Detoxification', 'Reduced swelling', 'Immune boost', 'Improved circulation'],
    popular: false
  }
];

const packages = [
  {
    name: 'Wellness Couple Retreat',
    description: '2-hour romantic spa experience for couples',
    duration: '120 minutes',
    price: 960000,
    includes: ['60min couples massage', 'Flower bath preparation', 'Herbal tea ceremony', 'Romantic setup'],
    popular: true
  },
  {
    name: 'Ultimate Relaxation Package',
    description: 'Complete wellness experience with multiple treatments',
    duration: '150 minutes',
    price: 680000,
    includes: ['90min signature massage', 'Aromatherapy session', 'Reflexology treatment', 'Healthy refreshments'],
    popular: false
  },
  {
    name: 'Monthly Wellness Subscription',
    description: '4 massages per month with exclusive benefits',
    duration: 'Monthly',
    price: 960000,
    includes: ['4x 60min massages', 'Priority booking', '10% additional discount', 'Free consultation'],
    popular: false
  }
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
}

export default function Pricing() {
  return (
    <>
      <SEOHead
        title="Ubud Massage Pricing | Transparent Rates from 320k"
        description="Ubud massage pricing from 320k IDR per session. In-villa service with licensed therapists, all equipment included. Traditional Balinese, deep tissue & more. Book now."
        canonical="https://homemassageubud.com/pricing"
        keywords="ubud massage price, massage ubud cost, ubud massage rates, villa massage pricing, spa prices ubud, massage therapy cost ubud bali"
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50">
        {/* Hero Section - Mobile Optimized */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-amber-100 text-amber-800 text-base px-4 py-2 font-semibold">
            Transparent Pricing
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
            Ubud Massage Pricing
            <span className="text-amber-600"> – Transparent Rates</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Ubud massage pricing from 320k IDR. Premium therapeutic treatments delivered to your villa. 
            All prices include transportation, setup, and professional equipment.
          </p>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="flex items-center text-gray-900">
              <Shield className="h-6 w-6 sm:h-7 sm:w-7 mr-3" />
              <span className="text-base sm:text-lg font-medium">Licensed Therapists</span>
            </div>
            <div className="flex items-center text-gray-900">
              <Award className="h-6 w-6 sm:h-7 sm:w-7 mr-3" />
              <span className="text-base sm:text-lg font-medium">Premium Equipment</span>
            </div>
            <div className="flex items-center text-gray-900">
              <MapPin className="h-6 w-6 sm:h-7 sm:w-7 mr-3" />
              <span className="text-base sm:text-lg font-medium">Service Area Coverage</span>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Massage Services - Mobile Optimized */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Individual Massage Treatments
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Choose from our range of therapeutic massage services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {massageTypes.map((massage, index) => (
              <Card key={index} className={`relative shadow-lg hover:shadow-2xl transition-all ${massage.popular ? 'ring-2 ring-amber-500' : ''}`}>
                {massage.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-sm px-3 py-1">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-base sm:text-lg">{massage.name}</CardTitle>
                  <p className="text-xs sm:text-sm text-gray-600">{massage.description}</p>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    {massage.duration}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4 sm:mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs sm:text-sm text-gray-600">Single Person</span>
                      <span className="text-base sm:text-lg font-bold text-amber-600">
                        {formatPrice(massage.price.single)}
                      </span>
                    </div>
                    
                    {massage.price.couple && (
                      <div className="flex justify-between items-center">
                        <span className="text-xs sm:text-sm text-gray-600 flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          Couple
                        </span>
                        <span className="text-base sm:text-lg font-bold text-amber-600">
                          {formatPrice(massage.price.couple)}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {massage.benefits.map((benefit, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-600 flex items-center">
                          <Check className="h-3 w-3 mr-2 text-gray-900" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-emerald-200 hover:bg-emerald-300 text-gray-900 text-sm py-2"
                    onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                  >
                    Book This Treatment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Packages - Mobile Optimized */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Special Wellness Packages
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Complete experiences for ultimate relaxation and wellness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-amber-500' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs">
                    <Heart className="h-3 w-3 mr-1" />
                    Couples Favorite
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-base sm:text-lg">{pkg.name}</CardTitle>
                  <p className="text-xs sm:text-sm text-gray-600">{pkg.description}</p>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-amber-600">
                    {formatPrice(pkg.price)}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Package Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-gray-600 flex items-center">
                          <Check className="h-3 w-3 mr-2 text-gray-900" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-emerald-200 hover:bg-emerald-300 text-gray-900 text-sm py-2"
                    onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                  >
                    Book This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Guarantees - Mobile Optimized */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-emerald-200 bg-emerald-50">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                Our Pricing Promise
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-start space-x-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Transparent Pricing</h4>
                    <p className="text-xs sm:text-sm text-gray-600">No hidden fees. What you see is what you pay.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Free Consultation</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Complimentary health assessment with every booking.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Equipment Included</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Massage table, oils, towels - all provided.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-gray-900 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Satisfaction Guaranteed</h4>
                    <p className="text-xs sm:text-sm text-gray-600">100% satisfaction or we'll make it right.</p>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6 sm:mt-8">
                <Button 
                  size="lg" 
                  className="bg-emerald-200 hover:bg-emerald-300 text-gray-900 w-full sm:w-auto px-6 py-3 text-sm sm:text-base"
                  onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                >
                  Book Your Treatment Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section - Mobile Optimized */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Questions About Pricing?
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            Our wellness consultants are here to help you choose the perfect treatment for your needs and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="https://wa.me/628112656869" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button size="lg" className="bg-emerald-200 hover:bg-emerald-300 text-gray-900 w-full sm:w-auto px-4 sm:px-6 py-3 text-sm sm:text-base">
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp Consultation
              </Button>
            </a>
            
            <a href="tel:+628112656869" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-4 sm:px-6 py-3 text-sm sm:text-base">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call for Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Internal Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Book Your Ubud Massage Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our Ubud massage pricing is transparent with no hidden fees. All prices include licensed therapists, 
            premium equipment, and setup at your villa. Browse our complete <a href="/services" className="text-amber-600 hover:text-amber-700 font-semibold underline">massage services</a> or 
            explore all <a href="/treatments" className="text-amber-600 hover:text-amber-700 font-semibold underline">massage treatments Ubud</a>. 
            We deliver to <a href="/service-areas" className="text-amber-600 hover:text-amber-700 font-semibold underline">your location in Bali</a> – book your session now.
          </p>
          <Button 
            size="lg" 
            className="bg-emerald-200 hover:bg-emerald-300 text-gray-900"
            onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Booking
          </Button>
        </div>
      </section>

      {/* NEW: Nail Care Services Promo Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto">
          <Card className="border-pink-200 shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Badge className="mb-4 bg-pink-100 text-pink-800 text-sm px-4 py-2">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Also Available
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Complete Your Relaxation with
                  <span className="text-pink-600"> Nail Care Services</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Enhance your wellness experience with professional manicure, pedicure, gel nails, nail art, 
                  and extensions – all delivered to your villa.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-lg border border-pink-100">
                  <Sparkles className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Manicure & Pedicure</h3>
                  <p className="text-sm text-gray-600 mb-2">From Rp 200,000</p>
                  <p className="text-xs text-gray-500">Professional nail care at your location</p>
                </div>

                <div className="text-center p-4 bg-white rounded-lg border border-pink-100">
                  <Heart className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Gel Polish & Nail Art</h3>
                  <p className="text-sm text-gray-600 mb-2">From Rp 50,000</p>
                  <p className="text-xs text-gray-500">Custom designs and long-lasting color</p>
                </div>

                <div className="text-center p-4 bg-white rounded-lg border border-pink-100">
                  <Award className="h-8 w-8 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Nail Extensions & Tips</h3>
                  <p className="text-sm text-gray-600 mb-2">From Rp 200,000</p>
                  <p className="text-xs text-gray-500">Professional extensions and nail tips</p>
                </div>
              </div>

              <div className="text-center">
                <a href="/nail-care">
                  <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8">
                    View Full Nail Care Pricing
                  </Button>
                </a>
                <p className="text-sm text-gray-600 mt-4">
                  💅 Perfect add-on to any massage booking
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
    
    <Footer />
    
    <SchemaMarkup 
      type="service"
      data={{
        name: "Home Massage Ubud - Professional Pricing",
        description: "Transparent pricing for professional mobile massage services in Ubud, Bali. Quality treatments at fair prices.",
        provider: {
          name: "Home Massage Ubud",
          telephone: "+62 811-2656-869"
        },
        areaServed: "Ubud, Bali"
      }}
    />
  </>
  );
}
