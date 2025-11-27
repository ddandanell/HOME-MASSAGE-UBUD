import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, CheckCircle, MessageCircle, MapPin, Heart } from 'lucide-react';
import { generateGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp';
import SchemaMarkup from '@/components/SchemaMarkup';
import SEOHead from '@/components/SEOHead';
import { Link } from 'wouter';

interface TreatmentPageProps {
  treatment: {
    name: string;
    slug: string;
    h1Title: string;
    metaTitle: string;
    metaDescription: string;
    heroSubtitle: string;
    duration: string;
    priceFrom: string;
    priceFromIDR: string;
    image: string;
    description: string;
    longDescription: string;
    benefits: string[];
    includes: string[];
    idealFor: string[];
    packages: {
      duration: string;
      price: string;
      priceIDR: string;
      description: string;
    }[];
    faqs: {
      question: string;
      answer: string;
    }[];
    relatedTreatments?: {
      name: string;
      slug: string;
    }[];
  };
}

export default function TreatmentPageTemplate({ treatment }: TreatmentPageProps) {
  const handleBookNow = () => {
    const message = `Hi! I'd like to book a ${treatment.name} in Ubud. Can you provide more information?`;
    openWhatsApp(message);
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* SEO Meta Tags */}
      <SEOHead
        title={treatment.metaTitle}
        description={treatment.metaDescription}
        canonical={`https://homemassageubud.com/ubud/${treatment.slug}`}
        keywords={`${treatment.name.toLowerCase()}, ${treatment.slug}, massage ubud, spa service ubud, villa massage, in-home treatment ubud bali`}
      />
      
      {/* SEO Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: treatment.name,
          description: treatment.description,
          serviceType: "In-Villa Massage Therapy",
          areaServed: ["Ubud", "Tegallalang", "Sanggingan", "Penestanan", "Campuhan"],
          url: `https://homemassageubud.com/ubud/${treatment.slug}`,
          offers: treatment.packages.map(pkg => ({
            name: pkg.duration,
            description: pkg.description,
            price: pkg.priceIDR?.replace(/[^0-9]/g, '') || '0',
          }))
        }} 
      />
      
      <SchemaMarkup 
        type="faq" 
        data={treatment.faqs} 
      />

      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-amber-600 hover:bg-amber-700">
                  Premium Villa Service
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  {treatment.h1Title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {treatment.heroSubtitle}
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">{treatment.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">5.0 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700">All Ubud Areas</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    onClick={handleBookNow}
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Book via WhatsApp
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Pricing
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={treatment.image} 
                  alt={treatment.name}
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About {treatment.name} in Ubud
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {treatment.longDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Benefits & What's Included */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Benefits & Results
                </h3>
                <ul className="space-y-4">
                  {treatment.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included
                </h3>
                <ul className="space-y-4">
                  {treatment.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Service Areas in Ubud
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We bring {treatment.name.toLowerCase()} to your villa or hotel throughout Ubud and surrounding areas.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Ubud Centre', 
                'Penestanan', 
                'Sayan Valley', 
                'Campuhan Ridge',
                'Tegallalang', 
                'Lodtunduh', 
                'Sanggingan', 
                'Monkey Forest Area'
              ].map((area, index) => (
                <div key={index} className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages & Pricing */}
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Packages & Pricing
              </h3>
              <p className="text-lg text-gray-600">
                All prices include therapist travel, equipment, and setup at your villa
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {treatment.packages.map((pkg, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.duration}
                  </h4>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-amber-600">{pkg.priceIDR}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <Button 
                    onClick={handleBookNow}
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    Book Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ideal For
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {treatment.idealFor.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                  <Users className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our {treatment.name}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Licensed Therapists
                </h4>
                <p className="text-gray-600">
                  All therapists trained in traditional Balinese healing techniques with 5+ years experience
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Ubud Wellness Hub
                </h4>
                <p className="text-gray-600">
                  Located in the heart of Ubud's wellness community, we bring spa experience to your villa
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Flexible Scheduling
                </h4>
                <p className="text-gray-600">
                  Available 7am-10pm daily, we accommodate your schedule including early morning sessions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-6">
              {treatment.faqs.map((faq, index) => (
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

        {/* Related Treatments */}
        {treatment.relatedTreatments && treatment.relatedTreatments.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Related Treatments
                </h2>
                <p className="text-lg text-gray-600">
                  Explore other massage therapies you might enjoy
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {treatment.relatedTreatments.map((related, index) => (
                  <Link key={index} href={`/ubud/${related.slug}`}>
                    <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 hover:border-amber-300 h-full group">
                      <div className="flex items-start gap-3">
                        <Heart className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-amber-600 transition-colors">
                          {related.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link href="/treatments">
                  <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    View All Treatments
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience {treatment.name}?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Book your in-villa massage in Ubud today. Available 7am-10pm daily.
            </p>
            <Button 
              size="lg" 
              onClick={handleBookNow}
              className="bg-white text-amber-600 hover:bg-gray-100"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book via WhatsApp
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
