import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, CheckCircle, MessageCircle, MapPin, Heart, Shield, Award, Phone, Sparkles, Leaf } from 'lucide-react';
import { generateWhatsAppURL, WHATSAPP_NUMBER_FORMATTED, CTA_TEXT } from '@/lib/whatsapp';
import SchemaMarkup from '@/components/SchemaMarkup';
import SEOHead from '@/components/SEOHead';
import { Link } from 'wouter';

// Service pages data for internal linking
const servicePages = [
  { name: 'Massage', slug: 'massage' },
  { name: 'Massage Bali', slug: 'massage-bali' },
  { name: 'Spa Massage', slug: 'spa-massage' },
  { name: 'Deep Tissue Massage', slug: 'deep-tissue-massage' },
  { name: 'Full Body Massage', slug: 'full-body-massage' },
  { name: 'Couples Massage', slug: 'couples-massage' },
  { name: 'Traditional Massage', slug: 'traditional-massage' },
  { name: 'Aromatherapy Massage', slug: 'aromatherapy-massage' },
  { name: 'Hot Stone Massage', slug: 'hot-stone-massage' },
  { name: 'Relaxing Massage', slug: 'relaxing-massage' },
  { name: 'Body Massage', slug: 'body-massage' },
  { name: 'Foot Massage', slug: 'foot-massage' },
  { name: 'Reflexology', slug: 'reflexology' },
  { name: 'Sports Massage', slug: 'sports-massage' },
  { name: 'Prenatal Massage', slug: 'prenatal-massage' },
  { name: 'Pregnancy Massage', slug: 'pregnancy-massage' },
  { name: 'Postnatal Massage', slug: 'postnatal-massage' },
  { name: 'Home Massage', slug: 'home-massage' },
  { name: 'Mobile Massage', slug: 'mobile-massage' },
  { name: 'At-Home Massage', slug: 'at-home-massage' },
  { name: 'Professional Massage', slug: 'professional-massage' },
  { name: 'Body Therapy Massage', slug: 'body-therapy-massage' },
  { name: 'Wellness Massage', slug: 'wellness-massage' },
  { name: 'Therapeutic Massage', slug: 'therapeutic-massage' },
  { name: 'Luxury Massage', slug: 'luxury-massage' },
  { name: 'Best Massage Services', slug: 'best-massage-services' },
];

// City pages data for internal linking
const cityPages = [
  { name: 'Ubud Centre', slug: 'ubud-centre' },
  { name: 'Ubud North', slug: 'ubud-north' },
  { name: 'Ubud East', slug: 'ubud-east' },
  { name: 'Ubud South', slug: 'ubud-south' },
  { name: 'Ubud Luxury Villas', slug: 'ubud-luxury-villas' },
  { name: 'Sidemen', slug: 'sidemen' },
  { name: 'Seminyak', slug: 'seminyak' },
  { name: 'Petitenget', slug: 'petitenget' },
  { name: 'Canggu', slug: 'canggu' },
  { name: 'Berawa', slug: 'berawa' },
  { name: 'Pererenan', slug: 'pererenan' },
  { name: 'Umalas', slug: 'umalas' },
  { name: 'Kerobokan', slug: 'kerobokan' },
  { name: 'Legian', slug: 'legian' },
  { name: 'Kuta', slug: 'kuta' },
  { name: 'Sanur', slug: 'sanur' },
  { name: 'Nusa Dua', slug: 'nusa-dua' },
  { name: 'Jimbaran', slug: 'jimbaran' },
  { name: 'Uluwatu', slug: 'uluwatu' },
  { name: 'Ungasan', slug: 'ungasan' },
  { name: 'Lovina', slug: 'lovina' },
  { name: 'Amed', slug: 'amed' },
  { name: 'Candidasa', slug: 'candidasa' },
];

// Hero layout variants
type HeroLayout = 'image-left' | 'image-right' | 'full-width' | 'testimonial-hero' | 'price-badge' | 'instant-booking';

// Pricing layout variants  
type PricingLayout = 'cards' | 'horizontal' | 'badges' | 'minimalist-grid' | 'comparison-table';

// Why choose us angle variants
type WhyChooseAngle = 'trained-therapists' | 'certified-staff' | 'premium-oils' | 'trusted-partners' | 'support-24-7' | 'years-experience' | 'largest-team';

// How it works format variants
type HowItWorksFormat = 'three-step' | 'four-step' | 'timeline' | 'icon-row';

// Trust block layout variants
type TrustLayout = 'grid' | 'horizontal' | 'badges' | 'icons';

export interface ServiceLandingPageData {
  // Basic info
  name: string;
  slug: string;
  keyword: string;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  
  // Hero section
  h1Title: string;
  heroSubtitle: string;
  heroLayout: HeroLayout;
  heroImage?: string;
  heroBadgeText?: string;
  heroTestimonial?: { text: string; author: string; location: string };
  
  // Introduction (400-500 words)
  introduction: string[];
  
  // Why choose us
  whyChooseAngle: WhyChooseAngle;
  whyChoosePoints: string[];
  whyChooseTestimonial?: { text: string; author: string; rating: number };
  
  // Pricing
  pricingLayout: PricingLayout;
  packages: {
    duration: string;
    price: string;
    priceIDR: string;
    description: string;
    popular?: boolean;
  }[];
  addOns?: { name: string; price: string }[];
  couplesPricing?: { duration: string; price: string };
  
  // Services overview (rewritten for each page)
  servicesOverview: {
    name: string;
    description: string;
    linkText: string;
    slug: string;
  }[];
  
  // How it works
  howItWorksFormat: HowItWorksFormat;
  howItWorksSteps?: { title: string; description: string }[];
  
  // Reviews
  reviews: {
    text: string;
    author: string;
    location: string;
    rating: number;
    type: 'family' | 'couple' | 'nomad' | 'hotel-guest' | 'villa-owner';
  }[];
  
  // Trust & Safety
  trustLayout: TrustLayout;
  trustPoints: string[];
  
  // FAQs
  faqs: {
    question: string;
    answer: string;
  }[];
  
  // About company angle
  aboutAngle: 'largest-team' | 'clients-per-year' | 'trusted-partners' | 'years-experience';
  aboutContent: string;
  
  // Related services for linking
  relatedServices: { name: string; slug: string }[];
  
  // Benefits list
  benefits: string[];
  
  // Ideal for
  idealFor: string[];
}

interface ServiceLandingPageProps {
  service: ServiceLandingPageData;
}

export default function ServiceLandingPageTemplate({ service }: ServiceLandingPageProps) {
  const whatsappUrl = generateWhatsAppURL(`Hi! I'm interested in ${service.name} in Ubud. Can you help me book?`);
  
  const handleBookNow = () => {
    window.open(whatsappUrl, '_blank');
  };

  // Get other services for linking (excluding current)
  const otherServices = servicePages.filter(s => s.slug !== service.slug);
  
  // Render hero based on layout
  const renderHero = () => {
    switch (service.heroLayout) {
      case 'image-left':
        return (
          <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="/attached_assets/massage-therapy-hero.jpg" 
                    alt={service.name}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  {renderHeroContent()}
                </div>
              </div>
            </div>
          </section>
        );
      case 'image-right':
        return (
          <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  {renderHeroContent()}
                </div>
                <div className="relative">
                  <img 
                    src="/attached_assets/massage-therapy-hero.jpg" 
                    alt={service.name}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      case 'full-width':
        return (
          <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                {renderHeroContent(true)}
              </div>
            </div>
          </section>
        );
      case 'testimonial-hero':
        return (
          <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  {renderHeroContent()}
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 italic mb-4">
                    "{service.heroTestimonial?.text || 'Amazing massage experience in our villa. The therapist was professional and skilled.'}"
                  </p>
                  <p className="font-semibold text-gray-900">
                    — {service.heroTestimonial?.author || 'Sarah M.'}, {service.heroTestimonial?.location || 'Australia'}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      case 'price-badge':
        return (
          <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  {renderHeroContent()}
                </div>
                <div className="relative">
                  <img 
                    src="/attached_assets/massage-therapy-hero.jpg" 
                    alt={service.name}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-lg">
                    <p className="text-sm">Starting from</p>
                    <p className="text-3xl font-bold">{service.packages[0]?.priceIDR}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'instant-booking':
        return (
          <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  {renderHeroContent()}
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant WhatsApp Booking</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-900" />
                      <span>Reply within 5 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-900" />
                      <span>Same-day appointments available</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-900" />
                      <span>English & Indonesian speaking</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    onClick={handleBookNow}
                    className="w-full"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {CTA_TEXT.WHATSAPP}
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4">Available 8 AM – 10 PM daily</p>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return (
          <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  {renderHeroContent()}
                </div>
                <div className="relative">
                  <img 
                    src="/attached_assets/massage-therapy-hero.jpg" 
                    alt={service.name}
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
    }
  };

  const renderHeroContent = (centered = false) => (
    <div className={centered ? 'text-center' : ''}>
      <div className={`flex ${centered ? 'justify-center' : ''} gap-2 mb-4`}>
        <Badge>
          {service.heroBadgeText || 'Premium Villa Service'}
        </Badge>
        <Badge variant="outline" className="border-amber-600 text-amber-600">
          100+ Therapists
        </Badge>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        {service.h1Title}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        {service.heroSubtitle}
      </p>
      
      <div className={`flex flex-wrap ${centered ? 'justify-center' : ''} gap-6 mb-8`}>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-amber-600" />
          <span className="text-gray-700">60-120 min</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-amber-600" />
          <span className="text-gray-700">5.0 Rating</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-600" />
          <span className="text-gray-700">10+ Years</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-amber-600" />
          <span className="text-gray-700">English Speaking</span>
        </div>
      </div>

      <div className={`flex flex-wrap ${centered ? 'justify-center' : ''} gap-4`}>
        <Button 
          size="lg" 
          onClick={handleBookNow}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          {CTA_TEXT.WHATSAPP}
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
  );

  // Render pricing based on layout
  const renderPricing = () => {
    switch (service.pricingLayout) {
      case 'cards':
        return (
          <div className="grid md:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow ${pkg.popular ? 'ring-2 ring-amber-600' : ''}`}>
                {pkg.popular && <Badge className="mb-4 bg-amber-600">Most Popular</Badge>}
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.duration}
                </h4>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-amber-600">{pkg.priceIDR}</span>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <Button 
                  onClick={handleBookNow}
                  className="w-full"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {CTA_TEXT.PRIMARY}
                </Button>
              </div>
            ))}
          </div>
        );
      case 'horizontal':
        return (
          <div className="space-y-4">
            {service.packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${pkg.popular ? 'ring-2 ring-amber-600' : ''}`}>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-xl font-bold text-gray-900">{pkg.duration}</h4>
                    {pkg.popular && <Badge className="bg-amber-600">Best Value</Badge>}
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-bold text-amber-600">{pkg.priceIDR}</span>
                  <Button onClick={handleBookNow}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {CTA_TEXT.PRIMARY}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        );
      case 'badges':
        return (
          <div className="grid md:grid-cols-3 gap-8">
            {service.packages.map((pkg, index) => (
              <div key={index} className="text-center">
                <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-4 ${pkg.popular ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-600'}`}>
                  <div>
                    <p className="text-sm">{pkg.duration}</p>
                    <p className="text-2xl font-bold">{pkg.priceIDR}</p>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{pkg.duration} Session</h4>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <Button onClick={handleBookNow} size="sm">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {CTA_TEXT.PRIMARY}
                </Button>
              </div>
            ))}
          </div>
        );
      case 'minimalist-grid':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.packages.map((pkg, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:border-amber-600 transition-colors">
                <p className="text-lg font-semibold text-gray-900">{pkg.duration}</p>
                <p className="text-3xl font-bold text-amber-600 my-2">{pkg.priceIDR}</p>
                <Button onClick={handleBookNow} size="sm" variant="outline" className="mt-4 border-amber-600 text-amber-600 hover:bg-amber-50">
                  Book
                </Button>
              </div>
            ))}
            {service.couplesPricing && (
              <div className="bg-amber-50 border-2 border-amber-600 rounded-lg p-6 text-center">
                <p className="text-lg font-semibold text-gray-900">Couples</p>
                <p className="text-3xl font-bold text-amber-600 my-2">{service.couplesPricing.price}</p>
                <Button onClick={handleBookNow} size="sm" className="mt-4 bg-emerald-200 hover:bg-emerald-300 text-gray-900">
                  Book
                </Button>
              </div>
            )}
          </div>
        );
      case 'comparison-table':
        return (
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-amber-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Duration</th>
                  <th className="px-6 py-4 text-left">Price</th>
                  <th className="px-6 py-4 text-left">Description</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {service.packages.map((pkg, index) => (
                  <tr key={index} className={`border-b ${pkg.popular ? 'bg-amber-50' : ''}`}>
                    <td className="px-6 py-4 font-semibold">{pkg.duration}</td>
                    <td className="px-6 py-4 text-amber-600 font-bold">{pkg.priceIDR}</td>
                    <td className="px-6 py-4 text-gray-600">{pkg.description}</td>
                    <td className="px-6 py-4 text-center">
                      <Button onClick={handleBookNow} size="sm" className="bg-emerald-200 hover:bg-emerald-300 text-gray-900">
                        <MessageCircle className="mr-1 h-4 w-4" />
                        Book
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  // Render how it works based on format
  const renderHowItWorks = () => {
    const defaultSteps = [
      { title: 'Choose Your Massage', description: 'Select from our range of professional treatments' },
      { title: 'WhatsApp Us', description: 'Send us a message with your preferred time and location' },
      { title: 'Therapist Arrives', description: 'Our certified therapist comes to your villa with all equipment' },
      { title: 'Pay Safely', description: 'Cash or card payment after your relaxing session' },
    ];
    const steps = service.howItWorksSteps || defaultSteps;

    switch (service.howItWorksFormat) {
      case 'three-step':
        return (
          <div className="grid md:grid-cols-3 gap-8">
            {steps.slice(0, 3).map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        );
      case 'four-step':
        return (
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600 text-xl font-bold">
                  {index + 1}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        );
      case 'timeline':
        return (
          <div className="max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && <div className="w-0.5 h-full bg-amber-200 mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'icon-row':
        const icons = [Sparkles, MessageCircle, Users, CheckCircle];
        return (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {steps.map((step, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={index} className="flex-1 text-center">
                  <Icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-amber-300 text-2xl">→</div>
                  )}
                </div>
              );
            })}
          </div>
        );
      default:
        return null;
    }
  };

  // Render trust section based on layout
  const renderTrust = () => {
    switch (service.trustLayout) {
      case 'grid':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.trustPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
                <Shield className="w-6 h-6 text-gray-900 flex-shrink-0" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        );
      case 'horizontal':
        return (
          <div className="flex flex-wrap justify-center gap-4">
            {service.trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow">
                <CheckCircle className="w-5 h-5 text-gray-900" />
                <span className="text-gray-700 text-sm">{point}</span>
              </div>
            ))}
          </div>
        );
      case 'badges':
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {service.trustPoints.map((point, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="w-6 h-6 text-gray-900" />
                </div>
                <p className="text-sm text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        );
      case 'icons':
        const trustIcons = [Shield, Leaf, Award, Users, Star, Heart];
        return (
          <div className="grid md:grid-cols-3 gap-8">
            {service.trustPoints.slice(0, 6).map((point, index) => {
              const Icon = trustIcons[index % trustIcons.length];
              return (
                <div key={index} className="text-center">
                  <Icon className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                  <p className="text-gray-700">{point}</p>
                </div>
              );
            })}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* SEO Meta Tags */}
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`https://homemassageubud.com/services/${service.slug}`}
        keywords={`${service.keyword}, massage ubud, spa bali, villa massage, in-home treatment ubud, professional massage bali`}
      />
      
      {/* SEO Schema Markup */}
      <SchemaMarkup 
        type="service" 
        data={{
          name: service.name,
          description: service.introduction[0] || '',
          serviceType: "In-Villa Massage Therapy",
          areaServed: ["Ubud", "Seminyak", "Canggu", "Sanur", "Nusa Dua", "Uluwatu"],
          url: `https://homemassageubud.com/services/${service.slug}`,
          offers: service.packages.map(pkg => ({
            name: pkg.duration,
            description: pkg.description,
            price: pkg.priceIDR?.replace(/[^0-9]/g, '') || '0',
          }))
        }} 
      />
      
      <SchemaMarkup 
        type="faq" 
        data={service.faqs} 
      />

      <Header />
      
      <main>
        {/* Hero Section */}
        {renderHero()}

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                About {service.name} in Ubud
              </h2>
              {service.introduction.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              
              {/* WhatsApp CTA after first paragraph */}
              <div className="my-8 p-6 bg-amber-50 rounded-xl text-center">
                <p className="text-gray-700 mb-4">Ready to experience {service.name.toLowerCase()}?</p>
                <Button onClick={handleBookNow} className="bg-amber-600 hover:bg-amber-700">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book Your Session Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our {service.name}
              </h2>
              <p className="text-lg text-gray-600">
                {service.whyChooseAngle === 'trained-therapists' && 'We send trained therapists to villas and hotels across Bali'}
                {service.whyChooseAngle === 'certified-staff' && 'Over 100 certified professional staff ready to serve you'}
                {service.whyChooseAngle === 'premium-oils' && 'Premium oils and complete hygiene guarantee with every session'}
                {service.whyChooseAngle === 'trusted-partners' && 'Trusted by luxury villas, hotels, and Airbnb hosts across Bali'}
                {service.whyChooseAngle === 'support-24-7' && '24/7 WhatsApp support for all your booking needs'}
                {service.whyChooseAngle === 'years-experience' && '10+ years serving tourists and residents in Bali'}
                {service.whyChooseAngle === 'largest-team' && 'Over 100 certified therapists - the largest massage team in Bali'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-4">
                  {service.whyChoosePoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {service.whyChooseTestimonial && (
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(service.whyChooseTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-700 italic mb-4">
                    "{service.whyChooseTestimonial.text}"
                  </p>
                  <p className="font-semibold text-gray-900">
                    — {service.whyChooseTestimonial.author}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {service.name} Pricing
              </h2>
              <p className="text-lg text-gray-600">
                All prices include therapist travel, professional equipment, and setup at your villa
              </p>
            </div>
            
            {renderPricing()}
            
            {service.addOns && service.addOns.length > 0 && (
              <div className="mt-8 text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Add-Ons</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {service.addOns.map((addon, index) => (
                    <Badge key={index} variant="outline" className="px-4 py-2">
                      {addon.name}: {addon.price}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Complete Massage Services
              </h2>
              <p className="text-lg text-gray-600">
                Explore our full range of professional {service.keyword} treatments
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.servicesOverview.map((svc, index) => {
                // Determine if this is a treatment page or a service page
                const isUbudTreatment = ['traditional-balinese-massage', 'deep-tissue-massage', 'aromatherapy-massage', 
                  'hot-stone-massage', 'thai-massage', 'lymphatic-drainage-massage', 'pregnancy-massage', 
                  'foot-reflexology', 'post-hike-recovery-massage', 'yoga-stretch-massage', 
                  'detox-wellness-massage', 'couples-wellness-ritual', 'herbal-bamboo-massage'].includes(svc.slug);
                const href = isUbudTreatment ? `/ubud/${svc.slug}` : `/services/${svc.slug}`;
                
                return (
                  <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{svc.name}</h3>
                    <p className="text-gray-600 mb-4">{svc.description}</p>
                    <Link href={href}>
                      <span className="text-amber-600 hover:text-amber-700 font-semibold cursor-pointer">
                        {svc.linkText} →
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Book Your {service.name}
              </h2>
              <p className="text-lg text-gray-600">
                Simple booking process via WhatsApp
              </p>
            </div>
            
            {renderHowItWorks()}
            
            <div className="text-center mt-12">
              <Button size="lg" onClick={handleBookNow} className="bg-emerald-200 hover:bg-emerald-300 text-gray-900">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Booking Now
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Benefits of {service.name}
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
                  <Heart className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Clients Say About {service.name}
              </h2>
              <p className="text-lg text-gray-600">
                Real reviews from real customers
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.reviews.map((review, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{review.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Safety Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trust & Safety Guarantee
              </h2>
              <p className="text-lg text-gray-600">
                Your safety and comfort are our top priorities
              </p>
            </div>
            
            {renderTrust()}
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Who Is {service.name} Ideal For?
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {service.idealFor.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-amber-50 rounded-lg">
                  <Users className="w-6 h-6 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions About {service.name}
            </h2>
            
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow">
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

        {/* About Company Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About Home Massage Ubud
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {service.aboutContent}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-3xl font-bold text-amber-600">100+</p>
                    <p className="text-gray-600">Trained Therapists</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-3xl font-bold text-amber-600">10+</p>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-3xl font-bold text-amber-600">10,000+</p>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <p className="text-3xl font-bold text-amber-600">5.0</p>
                    <p className="text-gray-600">Star Rating</p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="/attached_assets/massage-therapy-hero.jpg" 
                  alt="Home Massage Ubud Team"
                  className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Internal Linking */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {service.name} Available in All Bali Locations
              </h2>
              <p className="text-lg text-gray-600">
                We deliver professional {service.keyword} services to villas and hotels across Bali
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {cityPages.map((city, index) => (
                <Link key={index} href={`/${city.slug}`}>
                  <div className="p-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer text-center">
                    <MapPin className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                    <span className="text-sm text-gray-700 hover:text-amber-600">{city.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services Internal Linking */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore More Massage Services
              </h2>
              <p className="text-lg text-gray-600">
                Discover our complete range of professional treatments
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {otherServices.slice(0, 10).map((svc, index) => (
                <Link key={index} href={`/services/${svc.slug}`}>
                  <div className="p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors cursor-pointer text-center">
                    <Heart className="w-5 h-5 text-amber-600 mx-auto mb-2" />
                    <span className="text-sm font-medium text-gray-700">{svc.name}</span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/treatments">
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  View All Treatments
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final WhatsApp CTA */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience {service.name}?
            </h2>
            <p className="text-xl text-white/90 mb-4">
              Book your in-villa {service.keyword} session today. Professional therapists available 8 AM – 10 PM daily.
            </p>
            <p className="text-white/80 mb-8">
              Instant replies • English & Indonesian speaking • Same-day availability
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
      </main>

      <Footer />
    </div>
  );
}
