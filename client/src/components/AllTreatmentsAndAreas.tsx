import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { MapPin, Heart } from 'lucide-react';

const treatments = [
  { name: 'Traditional Balinese Massage', url: '/ubud/traditional-balinese-massage' },
  { name: 'Deep Tissue Massage', url: '/ubud/deep-tissue-massage' },
  { name: 'Aromatherapy Massage', url: '/ubud/aromatherapy-massage' },
  { name: 'Hot Stone Massage', url: '/ubud/hot-stone-massage' },
  { name: 'Thai Massage', url: '/ubud/thai-massage' },
  { name: 'Lymphatic Drainage', url: '/ubud/lymphatic-drainage-massage' },
  { name: 'Pregnancy Massage', url: '/ubud/pregnancy-massage' },
  { name: 'Foot Reflexology', url: '/ubud/foot-reflexology' },
  { name: 'Post-Hike Recovery', url: '/ubud/post-hike-recovery-massage' },
  { name: 'Yoga Stretch & Massage', url: '/ubud/yoga-stretch-massage' },
  { name: 'Detox & Wellness', url: '/ubud/detox-wellness-massage' },
  { name: 'Couples Wellness Ritual', url: '/ubud/couples-wellness-ritual' },
  { name: 'Herbal & Bamboo Massage', url: '/ubud/herbal-bamboo-massage' }
];

const serviceAreas = [
  { name: 'Ubud Centre', url: '/ubud-centre', description: 'Central Ubud, near Palace & Market' },
  { name: 'Penestanan & Sayan', url: '/ubud-north', description: 'Jungle villas & rice terraces' },
  { name: 'Campuhan Ridge', url: '/ubud-east', description: 'East Ubud & hiking trails' },
  { name: 'Lodtunduh & Nyuh Kuning', url: '/ubud-south', description: 'South Ubud villages' },
  { name: 'Luxury Villas', url: '/ubud-luxury-villas', description: 'Premium villa service' }
];

export default function AllTreatmentsAndAreas() {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* All Treatments */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Massage Treatments in Ubud
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our complete range of professional massage therapies, all delivered to your villa in Ubud
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {treatments.map((treatment, index) => (
              <Link key={index} href={treatment.url}>
                <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100 hover:border-amber-300">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                      {treatment.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                View All Service Details
              </Button>
            </Link>
          </div>
        </div>

        {/* Service Areas */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Areas Throughout Ubud
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver professional massage therapy to all areas of Ubud and surrounding villages
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Link key={index} href={area.url}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100 hover:border-amber-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
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
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Can't find your area? We serve all of Ubud and surrounding villages within 20km.
            </p>
            <Link href="/contact">
            <Button size="lg">
                Contact Us for Your Location
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
