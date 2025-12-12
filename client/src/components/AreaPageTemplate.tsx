import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Star, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { generateAreaInquiryMessage, openWhatsApp, CTA_TEXT, WHATSAPP_NUMBER_FORMATTED } from '@/lib/whatsapp';
import SchemaMarkup from '@/components/SchemaMarkup';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';

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
}

export default function AreaPageTemplate({ area, additionalContent }: AreaPageProps) {
  const handleBookNow = () => {
    openWhatsApp(generateAreaInquiryMessage(area.name));
  };

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
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <Badge className="mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                Service Area
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {area.h1Title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {area.heroSubtitle}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">7am - 10pm Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">5.0 Rating (500+ Reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span className="text-gray-700">Same-day Available</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={handleBookNow}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {CTA_TEXT.PRIMARY}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Treatments
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Area Description */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                About {area.name}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {area.longDescription}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Area Highlights
                  </h3>
                  <ul className="space-y-3">
                    {area.uniqueFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Nearby Attractions
                  </h3>
                  <ul className="space-y-3">
                    {area.nearbyAttractions.map((attraction, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{attraction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Treatments */}
        <section id="treatments" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Massage Treatments Available in {area.name}
              </h2>
              <p className="text-lg text-gray-600">
                All treatments delivered directly to your villa or hotel in {area.name}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {area.treatments.map((treatment, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {treatment.name}
                  </h3>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {treatment.duration}
                    </span>
                    <span className="font-semibold text-amber-600">
                      From {treatment.priceFrom}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/ubud/${treatment.slug}`}>
                      <Button variant="outline" size="sm" className="flex-1">
                        Learn More
                      </Button>
                    </Link>
                    <Button 
                      size="sm" 
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                We Serve All Accommodations in {area.name}
              </h3>
              <p className="text-lg text-gray-600">
                Including luxury villas, boutique hotels, guesthouses, and private residences
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {area.popularVillas.map((villa, index) => (
                <div key={index} className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{villa}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us for This Area */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Service in {area.name}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Local Expertise
                </h4>
                <p className="text-gray-600">
                  We know {area.name} well and can reach any villa, hotel, or accommodation quickly
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Flexible Hours
                </h4>
                <p className="text-gray-600">
                  7am-10pm daily service in {area.name}, perfect for early morning or evening sessions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Professional Service
                </h4>
                <p className="text-gray-600">
                  Licensed therapists with 5+ years experience serving {area.name} residents and visitors
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions About {area.name}
            </h3>
            
            <div className="space-y-6">
              {area.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We Also Serve Other Areas
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Professional in-villa massage service available throughout Bali
              </p>
              <Link href="/service-areas">
                <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <MapPin className="mr-2 h-5 w-5" />
                  View All Service Areas
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Book Your Villa Massage in {area.name}?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Contact us via WhatsApp for instant booking. Available 7am-10pm daily in {area.name}.
            </p>
            <Button 
              size="lg" 
              onClick={handleBookNow}
              className="bg-white text-amber-600 hover:bg-gray-100"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {CTA_TEXT.WHATSAPP}
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
