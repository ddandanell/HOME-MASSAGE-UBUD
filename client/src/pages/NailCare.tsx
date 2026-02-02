import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Sparkles, Clock, MapPin, Shield, Award, Heart, MessageCircle, Phone, Info } from 'lucide-react';
import { generateGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import SEOHead from '@/components/SEOHead';
import { Link } from 'wouter';

const basicNailCare = [
  {
    name: 'Basic Manicure',
    description: 'Professional nail shaping, cuticle care, and hand massage',
    price: 200000,
    duration: '45 min',
    popular: false
  },
  {
    name: 'Basic Pedicure',
    description: 'Foot soak, nail care, exfoliation, and relaxing foot massage',
    price: 250000,
    duration: '60 min',
    popular: false
  },
  {
    name: 'Manicure + Pedicure Package',
    description: 'Complete hand and foot care package',
    price: 420000,
    duration: '90 min',
    popular: true
  },
  {
    name: 'Manicure + Regular Polish',
    description: 'Basic manicure with your choice of regular polish',
    price: 250000,
    duration: '60 min',
    popular: false
  },
  {
    name: 'Pedicure + Regular Polish',
    description: 'Complete pedicure with regular polish application',
    price: 300000,
    duration: '75 min',
    popular: false
  },
  {
    name: 'Manicure + Gel Polish',
    description: 'Professional manicure with long-lasting gel polish',
    price: 350000,
    duration: '75 min',
    popular: false
  },
  {
    name: 'Pedicure + Gel Polish',
    description: 'Complete pedicure with durable gel polish',
    price: 400000,
    duration: '90 min',
    popular: false
  },
  {
    name: 'Manicure + Pedicure + Gel Polish',
    description: 'Ultimate package with gel polish on hands and feet',
    price: 700000,
    duration: '120 min',
    popular: true
  }
];

const nailArt = [
  {
    name: 'Simple Nail Art',
    description: 'Basic designs on 2-4 nails (dots, stripes, simple patterns)',
    priceRange: { min: 50000, max: 100000 },
    popular: false
  },
  {
    name: 'Medium Nail Art',
    description: 'More detailed designs with multiple colors and patterns',
    priceRange: { min: 150000, max: 250000 },
    popular: true
  },
  {
    name: 'Full Nail Art',
    description: 'Intricate designs on all nails with premium detail',
    priceRange: { min: 300000, max: 500000 },
    popular: false
  }
];

const nailExtensions = [
  {
    name: 'Full Set Nail Extension',
    description: 'Complete set of professional nail extensions',
    priceRange: { min: 600000, max: 900000 },
    duration: '120-180 min',
    popular: true
  },
  {
    name: 'Extension Refill',
    description: 'Maintenance and refill for existing extensions',
    priceRange: { min: 400000, max: 600000 },
    duration: '90-120 min',
    popular: false
  },
  {
    name: 'Extension Removal',
    description: 'Safe removal of nail extensions',
    price: 150000,
    duration: '30-45 min',
    popular: false
  }
];

const nailTips = [
  {
    name: 'Nail Tips (Short/Medium)',
    description: 'Natural-looking nail tips in short to medium length',
    priceRange: { min: 200000, max: 300000 },
    duration: '60-90 min'
  },
  {
    name: 'Nail Tips (Long/Extra-Long)',
    description: 'Dramatic long or extra-long nail tips',
    priceRange: { min: 300000, max: 400000 },
    duration: '90-120 min'
  },
  {
    name: 'Nail Tips + Gel Polish (Short/Medium)',
    description: 'Nail tips with durable gel polish application',
    priceRange: { min: 350000, max: 450000 },
    duration: '90-120 min'
  },
  {
    name: 'Nail Tips + Gel Polish (Long/Extra-Long)',
    description: 'Long tips with premium gel polish finish',
    priceRange: { min: 450000, max: 550000 },
    duration: '120-150 min'
  },
  {
    name: 'Nail Tips + Gel + Simple Art',
    description: 'Complete package: tips, gel polish, and simple nail art',
    priceRange: { min: 500000, max: 650000 },
    duration: '150-180 min'
  },
  {
    name: 'Nail Tip Removal',
    description: 'Safe and professional nail tip removal',
    priceRange: { min: 100000, max: 150000 },
    duration: '30 min'
  }
];

const transportFees = [
  { area: 'Gianyar area', fee: 'FREE – Rp 30,000' },
  { area: 'Ubud', fee: 'Rp 50,000 – 75,000' },
  { area: 'Seminyak', fee: 'Rp 150,000 – 180,000' },
  { area: 'Canggu', fee: 'Rp 180,000 – 220,000' },
  { area: 'Jimbaran/Uluwatu', fee: 'Rp 200,000 – 250,000' }
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
}

function formatPriceRange(min: number, max: number): string {
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}

export default function NailCare() {
  return (
    <>
      <SEOHead
        title="Home Service Nail Care Ubud | Manicure & Pedicure from 200k"
        description="Professional nail care at your villa in Ubud. Manicure, pedicure, gel polish, nail art & extensions. All services delivered to your location. Book now."
        canonical="https://homemassageubud.com/nail-care"
        keywords="nail care ubud, manicure ubud, pedicure ubud, gel nails ubud, nail art ubud, nail extensions ubud, mobile nail service, home service nails bali"
      />
      <Header />
      
      <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-pink-100 text-pink-800 text-base px-4 py-2 font-semibold">
              <Sparkles className="h-4 w-4 mr-2" />
              New Service Available
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8">
              Professional Nail Care
              <span className="text-pink-600"> at Your Villa</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Complete your wellness experience with professional manicure, pedicure, gel nails, nail art, 
              and extensions delivered to your accommodation in Ubud and across Bali.
            </p>

            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 sm:mb-12">
              <div className="flex items-center text-gray-900">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 mr-3" />
                <span className="text-base sm:text-lg font-medium">Licensed Professionals</span>
              </div>
              <div className="flex items-center text-gray-900">
                <Award className="h-6 w-6 sm:h-7 sm:w-7 mr-3" />
                <span className="text-base sm:text-lg font-medium">Premium Products</span>
              </div>
              <div className="flex items-center text-gray-900">
                <MapPin className="h-6 w-6 sm:h-7 sm:w-7 mr-3" />
                <span className="text-base sm:text-lg font-medium">We Come To You</span>
              </div>
            </div>

            {/* Cross-Promo to Massage Services */}
            <Card className="bg-gradient-to-r from-emerald-50 to-amber-50 border-emerald-200 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <p className="text-gray-900 mb-4">
                  <Heart className="h-5 w-5 inline-block mr-2 text-pink-600" />
                  <strong>Complete Your Relaxation:</strong> Combine nail care with our professional <Link href="/treatments" className="text-amber-600 hover:text-amber-700 font-semibold underline">massage treatments</Link> for the ultimate spa experience at your villa.
                </p>
                <Link href="/pricing">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    View Massage Pricing
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Basic Nail Care & Packages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Basic Nail Care & Packages
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Professional manicure and pedicure services with optional polish
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {basicNailCare.map((service, index) => (
                <Card key={index} className={`relative shadow-lg hover:shadow-2xl transition-all ${service.popular ? 'ring-2 ring-pink-500' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-sm px-3 py-1">
                      <Sparkles className="h-4 w-4 mr-1" />
                      Popular Choice
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base sm:text-lg">{service.name}</CardTitle>
                    <p className="text-xs sm:text-sm text-gray-600">{service.description}</p>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {service.duration}
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-pink-600">
                        {formatPrice(service.price)}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">+ transportation fee</p>
                    </div>
                    
                    <Button 
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white text-sm py-2"
                      onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                    >
                      Book This Service
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nail Art */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Nail Art Services
              </h2>
              <p className="text-lg text-gray-600">
                Express your style with custom nail art designs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {nailArt.map((service, index) => (
                <Card key={index} className={`${service.popular ? 'ring-2 ring-pink-500' : ''}`}>
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-600 text-white text-xs">
                      Most Requested
                    </Badge>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-xl font-bold text-pink-600">
                        {formatPriceRange(service.priceRange.min, service.priceRange.max)}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Price depends on design complexity</p>
                    </div>
                    <Button 
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                      onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                    >
                      Request Design
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nail Extensions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Nail Extension Services
              </h2>
              <p className="text-lg text-gray-600">
                Professional nail extensions for length and strength
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {nailExtensions.map((service, index) => (
                <Card key={index} className={`${service.popular ? 'ring-2 ring-pink-500' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <p className="text-sm text-gray-600">{service.description}</p>
                    {service.duration && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-xl font-bold text-pink-600">
                        {service.priceRange 
                          ? formatPriceRange(service.priceRange.min, service.priceRange.max)
                          : formatPrice(service.price)}
                      </div>
                      {service.priceRange && (
                        <p className="text-xs text-gray-500 mt-1">Varies by nail condition</p>
                      )}
                    </div>
                    <Button 
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                      onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                    >
                      Book Service
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nail Tips */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Nail Tip Services
              </h2>
              <p className="text-lg text-gray-600">
                Instant length and style with professional nail tips
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {nailTips.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">{service.name}</CardTitle>
                    <p className="text-xs sm:text-sm text-gray-600">{service.description}</p>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {service.duration}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="text-lg sm:text-xl font-bold text-pink-600">
                        {formatPriceRange(service.priceRange.min, service.priceRange.max)}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Price varies by length & design</p>
                    </div>
                    <Button 
                      className="w-full bg-pink-500 hover:bg-pink-600 text-white text-sm"
                      onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Transportation Fees */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-pink-200 bg-pink-50">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start mb-6">
                  <MapPin className="h-6 w-6 text-pink-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      Transportation Fee
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      A small travel fee applies based on your location:
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {transportFees.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg">
                      <span className="text-sm sm:text-base text-gray-900 font-medium">{item.area}</span>
                      <span className="text-sm sm:text-base text-pink-600 font-semibold">{item.fee}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">
                      <strong>Please note:</strong> All nail care services require advance booking. 
                      Final prices may vary depending on design complexity and nail condition. 
                      We'll provide an accurate quote during booking consultation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Nail Care Promise
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Premium Products</h4>
                  <p className="text-sm text-gray-600">High-quality polishes, gels, and professional tools</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Hygiene Standards</h4>
                  <p className="text-sm text-gray-600">Sterilized equipment and disposable items</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Technicians</h4>
                  <p className="text-sm text-gray-600">Trained professionals with years of experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-pink-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Convenient Service</h4>
                  <p className="text-sm text-gray-600">We bring everything to your location</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="bg-pink-500 hover:bg-pink-600 text-white w-full sm:w-auto px-8"
                onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book Your Nail Service
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Our Nail Services?
            </h3>
            <p className="text-base text-gray-600 mb-8">
              Our beauty consultants are here to help you choose the perfect nail care service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/628112656869" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white w-full sm:w-auto px-6">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Consultation
                </Button>
              </a>
              
              <a href="tel:+628112656869" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-6 border-pink-300 text-pink-600 hover:bg-pink-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Quote
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      
      <SchemaMarkup 
        type="service"
        data={{
          name: "Home Service Nail Care Ubud",
          description: "Professional nail care services delivered to your villa. Manicure, pedicure, gel nails, nail art and extensions.",
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
