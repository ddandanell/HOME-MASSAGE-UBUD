import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Star, CheckCircle, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { generateAreaInquiryMessage, openWhatsApp, CTA_TEXT, WHATSAPP_NUMBER_FORMATTED } from '@/lib/whatsapp';
import SchemaMarkup from '@/components/SchemaMarkup';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import { FEATURED_NAIL_SERVICES, formatNailServicePrice, getTransportFeeForArea } from '@/data/nailCareServices';

interface AreaPageProps {
  area: {
    name: string;
    slug: string;
    h1Title: string;
    metaTitle: string;
    metaDescription: string;
    heroSubtitle: string;
    areaDescription: string;
    longDescription: string;
    uniqueFeatures: string[];
    popularVillas: string[];
    nearbyAttractions: string[];
    treatments: {
      name: string;
      slug: string;
      priceFrom: string;
      duration: string;
    }[];
    faqs: {
      question: string;
      answer: string;
    }[];
  };
  additionalContent?: React.ReactNode;
  showNailCare?: boolean; // Option to show nail care section
}

export default function AreaPageTemplate({ area, additionalContent, showNailCare = true }: AreaPageProps) {
  const handleBookNow = () => {
    openWhatsApp(generateAreaInquiryMessage(area.name));
  };

  const transportFee = getTransportFeeForArea(area.name);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* SEO Meta Tags */}
      <SEOHead
        title={area.metaTitle}
        description={area.metaDescription}
        canonical={`https://homemassageubud.com/${area.slug}`}
        keywords={`villa massage ${area.name.toLowerCase()}, massage ${area.name.toLowerCase()}, spa service ${area.name.toLowerCase()}, in-villa treatment ubud`}
      />
      
      {/* SEO Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: `In-Villa Massage Service - ${area.name}`,
          description: area.areaDescription,
          serviceType: "Mobile In-Villa Massage Service",
          areaServed: area.name,
          url: `https://homemassageubud.com/${area.slug}`,
          offers: area.treatments.slice(0, 3).map(treatment => ({
            name: treatment.name,
            description: `${treatment.duration} session`,
            price: treatment.priceFrom?.replace(/[^0-9]/g, '') || '0',
          }))
        }} 
      />
      
      <SchemaMarkup 
        type="faq" 
        data={area.faqs} 
      />

      <Header />
      
      <Breadcrumbs 
        items={[
          { label: 'Service Areas', href: '/service-areas' },
          { label: area.name, current: true }
        ]}
      />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-24 md:py-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Badge className="mb-6 bg-amber-600 hover:bg-amber-700 text-base px-4 py-2">
                <MapPin className="w-5 h-5 mr-2" />
                Service Area
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                {area.h1Title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                {area.heroSubtitle}
              </p>
              
              <div className="flex flex-wrap gap-8 mb-12">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700 font-medium">7am - 10pm Daily</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700 font-medium">5.0 Rating (500+ Reviews)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-amber-600" />
                  <span className="text-gray-700 font-medium">Same-day Available</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                <Button 
                  size="lg" 
                  onClick={handleBookNow}
                  className="bg-emerald-200 hover:bg-emerald-300 text-gray-900 min-w-[200px]"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {CTA_TEXT.PRIMARY}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-50 min-w-[200px]"
                  onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Treatments
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Area Description */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                About {area.name}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                {area.longDescription}
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-amber-600" />
                    Area Highlights
                  </h3>
                  <ul className="space-y-4">
                    {area.uniqueFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    Nearby Attractions
                  </h3>
                  <ul className="space-y-4">
                    {area.nearbyAttractions.map((attraction, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 leading-relaxed">{attraction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Treatments */}
        <section id="treatments" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Massage Treatments Available in {area.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All treatments delivered directly to your villa or hotel in {area.name}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {area.treatments.map((treatment, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {treatment.name}
                  </h3>
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-amber-600" />
                      {treatment.duration}
                    </span>
                    <span className="font-bold text-lg text-amber-600">
                      {treatment.priceFrom}
                    </span>
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Link href={`/ubud/${treatment.slug}`} className="flex-1">
                      <Button variant="outline" size="default" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                        Learn More
                      </Button>
                    </Link>
                    <Button 
                      size="default" 
                      onClick={handleBookNow}
                      className="flex-1"
                    >
                      {CTA_TEXT.PRIMARY}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Villas / Accommodation Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Serve All Accommodations in {area.name}
              </h3>
              <p className="text-xl text-gray-600">
                Including luxury villas, boutique hotels, guesthouses, and private residences
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {area.popularVillas.map((villa, index) => (
                <div key={index} className="flex items-center gap-3 p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{villa}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us for This Area */}
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Service in {area.name}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Local Expertise
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We know {area.name} well and can reach any villa, hotel, or accommodation quickly
                </p>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Flexible Hours
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  7am-10pm daily service in {area.name}, perfect for early morning or evening sessions
                </p>
              </div>
              
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Professional Service
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Licensed therapists with 5+ years experience serving {area.name} residents and visitors
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nail Care Services Section */}
        {showNailCare && (
          <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-pink-600 hover:bg-pink-700 text-white text-base px-4 py-2">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Also Available in {area.name}
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Professional Nail Care Services
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Complete your relaxation with professional manicure, pedicure, gel nails, nail art, 
                  and extensions — all delivered to your accommodation in {area.name}
                </p>
                <p className="text-sm text-gray-500">
                  Transport fee for {area.name}: <span className="font-semibold text-pink-600">{transportFee}</span>
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
                      onClick={handleBookNow}
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
        )}

        {/* Related Services - Internal Linking */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Explore Our Services
              </h3>
              <p className="text-xl text-gray-600">
                Discover our complete range of professional massage treatments
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/services/home-massage">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border border-amber-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Home Massage Service</h4>
                  <p className="text-gray-600 mb-4">Professional massage delivered to your accommodation</p>
                  <span className="text-amber-600 font-semibold">Learn More →</span>
                </div>
              </Link>
              
              <Link href="/services/couples-massage">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border border-pink-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Couples Massage</h4>
                  <p className="text-gray-600 mb-4">Romantic synchronized treatments for two</p>
                  <span className="text-rose-600 font-semibold">Learn More →</span>
                </div>
              </Link>
              
              <Link href="/treatments">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border border-blue-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">All Treatments</h4>
                  <p className="text-gray-600 mb-4">View our complete massage treatment menu</p>
                  <span className="text-blue-600 font-semibold">Learn More →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
              Frequently Asked Questions About {area.name}
            </h3>
            
            <div className="space-y-6">
              {area.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                    <span className="text-amber-600 text-2xl">Q:</span>
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Service Areas */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Also Serve Other Areas
              </h2>
              <p className="text-xl text-gray-600 mb-10">
                Professional in-villa massage service available throughout Bali
              </p>
              <Link href="/service-areas">
                <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 min-w-[250px]">
                  <MapPin className="mr-2 h-5 w-5" />
                  View All Service Areas
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Ready to Book Your Villa Massage in {area.name}?
            </h3>
            <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed">
              Contact us via WhatsApp for instant booking. Available 7am-10pm daily in {area.name}.
            </p>
            <Button 
              size="lg" 
              onClick={handleBookNow}
              className="bg-white text-amber-600 hover:bg-gray-100 min-w-[300px] text-lg"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Book via WhatsApp: {WHATSAPP_NUMBER_FORMATTED}
            </Button>
          </div>
        </section>

        {/* Additional Content Section - For special area-specific guides */}
        {additionalContent}
      </main>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppButton message={generateAreaInquiryMessage(area.name)} />
    </div>
  );
}
