import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles,
  GraduationCap,
  ChefHat,
  Code,
  Droplets,
  Waves,
  ExternalLink,
  Home
} from 'lucide-react';
import SEOHead from '@/components/SEOHead';

export default function RecommendedServices() {
  const services = [
    {
      name: 'Home Massage Kuta',
      url: 'https://www.homemassagekuta.com/',
      icon: Sparkles,
      description: 'Experience the same professional in-villa massage services in South Bali\'s vibrant Kuta area. Perfect for beach villa stays, post-surf relaxation, or unwinding after exploring Bali\'s bustling southern coast.',
      ctaText: 'In-Villa Massage in Kuta',
      highlights: ['Traditional Balinese', 'Deep Tissue', 'Same Day Booking']
    },
    {
      name: 'Private Tutoring Bali',
      url: 'https://privatetutoringbali.com/',
      icon: GraduationCap,
      description: 'While you enjoy your wellness retreat, ensure your children continue their education with expert private tutoring and homeschooling services. Comprehensive curriculum support for expat families and villa residents throughout Bali.',
      ctaText: 'Private Tutoring & Homeschooling in Bali',
      highlights: ['All Grade Levels', 'International Curriculum', 'Flexible Schedule']
    },
    {
      name: 'MyChef Bali',
      url: 'https://mychef.id/',
      icon: ChefHat,
      description: 'Complement your massage experience with a private chef preparing exquisite healthy meals in your villa. From post-treatment wellness cuisine to family gatherings, enjoy restaurant-quality dining in the comfort of your home.',
      ctaText: 'Private Chef Services in Bali',
      highlights: ['Custom Menus', 'Dietary Options', 'Event Catering']
    },
    {
      name: 'Bali Tech Education',
      url: 'https://bali-tech-education.com/',
      icon: Code,
      description: 'Invest in your family\'s future with coding classes and tech education for children and adults. Perfect for remote working families seeking to enhance skills while enjoying the Bali lifestyle.',
      ctaText: 'Tech Education & Coding Classes in Bali',
      highlights: ['Kids & Adults', 'Web Development', 'Python & JavaScript']
    },
    {
      name: 'Bali Pool Service',
      url: 'https://balipoolservice.com/',
      icon: Waves,
      description: 'Maintain your villa\'s pool in pristine condition with professional cleaning and maintenance services. Essential for villa owners seeking hassle-free property upkeep while you focus on relaxation and wellness.',
      ctaText: 'Professional Pool Maintenance in Bali',
      highlights: ['Weekly Service', 'Chemical Balance', 'Equipment Repair']
    },
    {
      name: 'Aqua Pure Bali',
      url: 'https://aquapurebali.com/',
      icon: Droplets,
      description: 'Ensure the highest quality drinking water in your villa with advanced purification and filtration systems. Protect your family\'s health with clean, safe water—an essential complement to your wellness lifestyle.',
      ctaText: 'Water Purification Services in Bali',
      highlights: ['Installation', 'Maintenance', 'Filter Replacement']
    }
  ];

  return (
    <>
      <SEOHead
        title="Recommended Services for Your Bali Villa Lifestyle | Home Massage Ubud"
        description="Discover trusted complementary services for villa living in Bali: massage, private chefs, tutoring, tech education, pool maintenance, and water purification."
        canonical="https://homemassageubud.com/recommended-services"
        keywords="bali villa services, expat services bali, villa lifestyle bali, home services bali, wellness services bali"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pb-16 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-xs sm:text-sm">
              <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
              Recommended Services
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Recommended Services for Your
              <br />
              <span className="text-emerald-600">Bali Villa Lifestyle</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
              To help you create the perfect Bali living experience, we recommend these trusted 
              complementary services for wellness, education, dining, and villa maintenance. Each 
              provider shares our commitment to quality, professionalism, and exceptional service 
              for villa residents and expat families throughout Bali.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-2">{service.name}</CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter>
                  <a 
                    href={service.url} 
                    className="w-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      size="lg"
                    >
                      {service.ctaText}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Context Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Your Complete Bali Villa Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
            We understand that living or vacationing in a Bali villa comes with unique needs. 
            These carefully selected services complement our in-villa massage offerings to create 
            a seamless, stress-free lifestyle experience. Each provider has been chosen for their 
            reliability, professionalism, and shared commitment to excellence.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Whether you need daily wellness support, educational services for your children, 
            gourmet meals prepared in your villa, or essential property maintenance, this network 
            of trusted partners ensures every aspect of your Bali life is taken care of.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
