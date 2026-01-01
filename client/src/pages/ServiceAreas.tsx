import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Heart } from 'lucide-react';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import { generateGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp';

const serviceAreas = [
  // Ubud Areas
  { 
    name: 'Ubud Centre', 
    url: '/ubud-centre', 
    description: 'Central Ubud near Palace & Market',
    region: 'Ubud'
  },
  { 
    name: 'Ubud North (Penestanan & Sayan)', 
    url: '/ubud-north', 
    description: 'Jungle villas & rice terraces',
    region: 'Ubud'
  },
  { 
    name: 'Ubud East (Campuhan Ridge)', 
    url: '/ubud-east', 
    description: 'East Ubud & hiking trails',
    region: 'Ubud'
  },
  { 
    name: 'Ubud South (Lodtunduh & Nyuh Kuning)', 
    url: '/ubud-south', 
    description: 'South Ubud villages',
    region: 'Ubud'
  },
  { 
    name: 'Ubud Luxury Villas', 
    url: '/ubud-luxury-villas', 
    description: 'Premium villa service',
    region: 'Ubud'
  },
  { 
    name: 'Sidemen', 
    url: '/sidemen', 
    description: 'Scenic east Bali rice terraces',
    region: 'East Bali'
  },
  
  // South Bali - Seminyak Area
  { 
    name: 'Seminyak', 
    url: '/seminyak', 
    description: 'Premium beach destination with luxury resorts',
    region: 'South Bali'
  },
  { 
    name: 'Petitenget', 
    url: '/petitenget', 
    description: 'Upscale Seminyak neighborhood',
    region: 'South Bali'
  },
  
  // South Bali - Canggu Area  
  { 
    name: 'Canggu', 
    url: '/canggu', 
    description: 'Surf & digital nomad hub',
    region: 'South Bali'
  },
  { 
    name: 'Berawa', 
    url: '/berawa', 
    description: 'Trendy Canggu beach area',
    region: 'South Bali'
  },
  { 
    name: 'Pererenan', 
    url: '/pererenan', 
    description: 'Quiet Canggu neighborhood',
    region: 'South Bali'
  },
  { 
    name: 'Umalas', 
    url: '/umalas', 
    description: 'Rice field villas near Canggu',
    region: 'South Bali'
  },
  
  // South Bali - Other Areas
  { 
    name: 'Kerobokan', 
    url: '/kerobokan', 
    description: 'Between Seminyak & Canggu',
    region: 'South Bali'
  },
  { 
    name: 'Legian', 
    url: '/legian', 
    description: 'Central beach area near Kuta',
    region: 'South Bali'
  },
  { 
    name: 'Kuta', 
    url: '/kuta', 
    description: 'Bustling beach town & surf',
    region: 'South Bali'
  },
  { 
    name: 'Sanur', 
    url: '/sanur', 
    description: 'Family-friendly east coast beach',
    region: 'South Bali'
  },
  { 
    name: 'Nusa Dua', 
    url: '/nusa-dua', 
    description: 'Premium resort enclave',
    region: 'South Bali'
  },
  { 
    name: 'Jimbaran', 
    url: '/jimbaran', 
    description: 'Bay-side seafood & resorts',
    region: 'South Bali'
  },
  { 
    name: 'Uluwatu', 
    url: '/uluwatu', 
    description: 'Clifftop villas & surf breaks',
    region: 'Bukit Peninsula'
  },
  { 
    name: 'Ungasan', 
    url: '/ungasan', 
    description: 'Peaceful Bukit area',
    region: 'Bukit Peninsula'
  },
  
  // North & East Bali
  { 
    name: 'Lovina', 
    url: '/lovina', 
    description: 'North coast black sand beaches',
    region: 'North Bali'
  },
  { 
    name: 'Amed', 
    url: '/amed', 
    description: 'East coast diving & snorkeling',
    region: 'East Bali'
  },
  { 
    name: 'Candidasa', 
    url: '/candidasa', 
    description: 'Quiet east coast beach town',
    region: 'East Bali'
  },
];

// Group areas by region
const groupedAreas = serviceAreas.reduce((acc, area) => {
  if (!acc[area.region]) {
    acc[area.region] = [];
  }
  acc[area.region].push(area);
  return acc;
}, {} as Record<string, typeof serviceAreas>);

export default function ServiceAreas() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SEOHead
        title="Service Areas | Home Massage Ubud - All Locations in Bali"
        description="Home Massage Ubud serves 23+ locations across Bali including Ubud, Seminyak, Canggu, Sanur, Nusa Dua, Uluwatu, and more. Mobile spa service delivered to your villa or hotel. Book now!"
        canonical="https://homemassageubud.com/service-areas"
        keywords="massage service areas bali, ubud massage locations, seminyak massage, canggu massage, mobile spa bali, in-villa massage areas"
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Serving 23+ Locations</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Service Areas Across Bali
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                Professional in-villa massage therapy delivered to your accommodation throughout Bali. 
                From Ubud rice terraces to beachside Seminyak, from surf spots in Canggu to clifftop villas in Uluwatu.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-emerald-200 hover:bg-emerald-300 text-gray-900"
                  onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                >
                  Book Your Location
                </Button>
                <Link href="/treatments">
                  <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    Browse All Massage Treatments
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Areas by Region */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {Object.entries(groupedAreas).map(([region, areas]) => (
              <div key={region} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-amber-600">
                  {region}
                </h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {areas.map((area) => (
                    <Link key={area.url} href={area.url}>
                      <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer border border-gray-100 hover:border-amber-300 h-full group">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                            <MapPin className="w-6 h-6 text-amber-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-amber-600 transition-colors">
                              {area.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {area.description}
                            </p>
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
              Can't Find Your Location?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We serve many more areas across Bali! Contact us to check if we serve your villa, hotel, or guesthouse.
            </p>
            <Button 
              size="lg" 
              className="bg-emerald-200 hover:bg-emerald-300 text-gray-900"
              onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
            >
              Contact Us on WhatsApp
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
