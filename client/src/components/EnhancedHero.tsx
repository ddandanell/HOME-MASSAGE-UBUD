import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, MessageCircle, Phone, CheckCircle, MapPin } from 'lucide-react';
import { generateGeneralInquiryMessage, openWhatsApp, CTA_TEXT, WHATSAPP_NUMBER_FORMATTED } from '@/lib/whatsapp';
import TrustBadges from './TrustBadges';
import massageHeroImage from '../assets/massage-therapy-hero.jpg';

export default function EnhancedHero() {

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Star, number: '4.9', label: 'Rating' },
    { icon: Clock, number: '24/7', label: 'Booking' },
    { icon: MapPin, number: '15km', label: 'Service Area' }
  ];

  const benefits = [
    'Licensed Professional Therapists',
    'Complete Equipment & Setup Included',
    'All-Natural Premium Oils & Products',
    'Flexible Scheduling 8AM-9PM',
    '100% Satisfaction Guarantee',
    'COVID-19 Safety Protocols'
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Elements - hidden on mobile, visible on sm+ */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">

          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <Badge className="mb-4 sm:mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors text-xs sm:text-sm">
              <Star className="h-3 w-3 mr-1" />
              #1 Rated In-Villa Massage Service
            </Badge>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              <span className="text-amber-600 relative">
                Ubud Massage
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-200 hidden sm:block" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,2 100,8" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </span>
              {" "}– Professional <span className="text-gray-900">In-Villa Service</span>
              <br />
              <span className="text-gray-700 text-xl sm:text-3xl md:text-4xl lg:text-5xl">Traditional Balinese Healing at Your Villa</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience authentic Ubud massage services with traditional Balinese healing arts delivered to your private accommodation. Best massage in Ubud by licensed therapists with premium equipment, complete setup included at your villa.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 sm:mb-8 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-gray-900 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-4 text-lg shadow-lg hover:shadow-xl"
                onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                style={{ touchAction: 'manipulation', minHeight: '48px' }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {CTA_TEXT.PRIMARY}
              </Button>

              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 sm:flex-none px-6 py-4"
                  onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                  style={{ touchAction: 'manipulation', minHeight: '48px' }}
                >
                  <MessageCircle className="mr-2 h-5 w-5 text-gray-900" />
                  WhatsApp
                </Button>

                <a href={`tel:${WHATSAPP_NUMBER_FORMATTED.replace(/[^0-9+]/g, '')}`} className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full px-6 py-4"
                    style={{ touchAction: 'manipulation', minHeight: '48px' }}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    {CTA_TEXT.CALL}
                  </Button>
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <TrustBadges variant="minimal" className="mb-6 sm:mb-8" />

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="p-2 bg-amber-100 rounded-full mr-2">
                      <stat.icon className="h-4 w-4 text-amber-600" />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-gray-900">{stat.number}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative w-full">
            <div className="relative bg-gradient-to-br from-amber-100 to-emerald-100 rounded-3xl p-4 sm:p-8 shadow-2xl">
              {/* Main Massage Therapy Image */}
              <div className="aspect-[4/5] bg-white rounded-2xl shadow-lg overflow-hidden relative">
                <img
                  src={massageHeroImage}
                  alt="Professional Balinese massage therapy session in a peaceful setting"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Subtle overlay for visual enhancement */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Floating Elements - smaller on mobile */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white p-2 sm:p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold">4.9/5</span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-600 mt-1">500+ Reviews</p>
              </div>

              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-gray-900 text-white p-2 sm:p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  <div>
                    <p className="font-semibold text-xs sm:text-sm">Available Today</p>
                    <p className="text-[10px] sm:text-xs opacity-90">8:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
