import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Sun, Droplets, Wind, Sparkles, Heart, type LucideIcon } from "lucide-react";
import { openWhatsApp, generateGeneralInquiryMessage, CTA_TEXT } from "@/lib/whatsapp";

interface SeasonalPackage {
  id: string;
  name: string;
  season: string;
  icon: LucideIcon;
  description: string;
  includes: string[];
  benefits: string[];
  duration: string;
  price: string;
  bestFor: string;
  color: string;
}

const packages: SeasonalPackage[] = [
  {
    id: "monsoon-detox",
    name: "Monsoon Detox Package",
    season: "Rainy Season Special (Oct-Mar)",
    icon: Cloud,
    description: "Combat humidity and boost immunity during Ubud's wet season with deep cleansing therapies",
    includes: [
      "90-min Lymphatic Drainage Massage",
      "Detoxifying aromatherapy blend",
      "Warm herbal compress therapy",
      "Ginger & lemongrass body oil"
    ],
    benefits: [
      "Eliminate water retention from humidity",
      "Boost immune system for rainy season",
      "Improve circulation in cooler weather",
      "Reduce monsoon-related fatigue"
    ],
    duration: "90 minutes",
    price: "IDR 450,000",
    bestFor: "Travelers dealing with rainy season blues and humidity effects",
    color: "from-blue-50 to-cyan-50"
  },
  {
    id: "dry-season-recovery",
    name: "Dry Season Recovery",
    season: "Sunny Season Special (Apr-Sep)",
    icon: Sun,
    description: "Rehydrate and restore after sun exposure with cooling, nourishing treatments",
    includes: [
      "120-min Traditional Balinese Massage",
      "Cooling cucumber & aloe vera blend",
      "After-sun repair oil treatment",
      "Hydrating foot reflexology"
    ],
    benefits: [
      "Soothe sun-exposed skin",
      "Rehydrate from tropical heat",
      "Restore energy after outdoor activities",
      "Cool down overheated muscles"
    ],
    duration: "120 minutes",
    price: "IDR 550,000",
    bestFor: "Active travelers hiking, cycling, or exploring during dry season",
    color: "from-amber-50 to-orange-50"
  },
  {
    id: "rice-harvest-ritual",
    name: "Rice Harvest Ritual",
    season: "April-May & Oct-Nov",
    icon: Sparkles,
    description: "Celebrate Ubud's rice harvest seasons with traditional Balinese blessing massage",
    includes: [
      "90-min Traditional Temple Massage",
      "Rice bran & jasmine oil blend",
      "Balinese flower blessing ritual",
      "Hot stone therapy with volcanic stones"
    ],
    benefits: [
      "Experience authentic cultural healing",
      "Balance energy with harvest blessings",
      "Deep muscle release with hot stones",
      "Connect with Balinese traditions"
    ],
    duration: "90 minutes",
    price: "IDR 480,000",
    bestFor: "Cultural travelers seeking authentic Balinese wellness experiences",
    color: "from-green-50 to-emerald-50"
  },
  {
    id: "romantic-retreat",
    name: "Couples Wellness Retreat",
    season: "Year-Round Special",
    icon: Heart,
    description: "Romantic side-by-side massage experience for couples in your private villa",
    includes: [
      "90-min Couples Massage (2 therapists)",
      "Champagne or tropical juice",
      "Rose petal decoration",
      "Romantic aromatherapy blend",
      "Complimentary flower crown"
    ],
    benefits: [
      "Strengthen connection through shared relaxation",
      "Private romantic atmosphere",
      "Synchronized massage techniques",
      "Create lasting vacation memories"
    ],
    duration: "90 minutes (per person)",
    price: "IDR 850,000 (for 2 people)",
    bestFor: "Honeymooners and couples celebrating special occasions",
    color: "from-pink-50 to-rose-50"
  },
  {
    id: "post-ceremony-relief",
    name: "Post-Ceremony Relief",
    season: "Nyepi & Ceremony Days",
    icon: Wind,
    description: "Gentle restoration after experiencing Bali's powerful spiritual ceremonies",
    includes: [
      "60-min Gentle Aromatherapy Massage",
      "Frankincense & sandalwood oils",
      "Meditation guidance",
      "Energy balancing techniques"
    ],
    benefits: [
      "Process spiritual experiences",
      "Release ceremony intensity",
      "Gentle muscle relaxation",
      "Restore energy balance"
    ],
    duration: "60 minutes",
    price: "IDR 320,000",
    bestFor: "Spiritual travelers attending Balinese ceremonies and temple visits",
    color: "from-purple-50 to-indigo-50"
  },
  {
    id: "yoga-retreat-recovery",
    name: "Yoga Retreat Recovery",
    season: "Year-Round Special",
    icon: Droplets,
    description: "Perfect complement to Ubud's renowned yoga retreats and workshops",
    includes: [
      "90-min Thai Yoga Massage",
      "Deep stretching techniques",
      "Assisted yoga poses",
      "Cooling peppermint oil blend"
    ],
    benefits: [
      "Deepen yoga practice benefits",
      "Release tight muscles from asanas",
      "Improve flexibility and range",
      "Complement daily yoga routine"
    ],
    duration: "90 minutes",
    price: "IDR 420,000",
    bestFor: "Yoga practitioners and retreat participants needing muscle recovery",
    color: "from-teal-50 to-cyan-50"
  }
];

export default function SeasonalPackages() {
  const handleBooking = (packageName: string) => {
    const message = `I'd like to book the ${packageName}`;
    openWhatsApp(message);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Seasonal Ubud Massage Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specially curated massage experiences aligned with Ubud's seasons, ceremonies, and natural rhythms
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`bg-gradient-to-br ${pkg.color} border-amber-200 hover:shadow-xl transition-all transform hover:-translate-y-1`}>
              <CardContent className="p-6">
                {/* Package Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <pkg.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-emerald-700">{pkg.price}</div>
                    <div className="text-xs text-gray-600">{pkg.duration}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-sm text-amber-700 font-medium mb-3">{pkg.season}</p>
                <p className="text-gray-700 text-sm mb-4">{pkg.description}</p>

                {/* Includes */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Package Includes:</h4>
                  <ul className="space-y-1">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="text-xs text-gray-700 flex items-start">
                        <span className="text-emerald-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {pkg.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index} className="text-xs text-gray-700 flex items-start">
                        <span className="text-amber-600 mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div className="mb-4 p-3 bg-white/50 rounded-lg">
                  <p className="text-xs text-gray-700">
                    <span className="font-semibold">Best for:</span> {pkg.bestFor}
                  </p>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full"
                  onClick={() => handleBooking(pkg.name)}
                >
                  {CTA_TEXT.PRIMARY}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Our Seasonal Packages</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold text-amber-600 mb-2">Why Seasonal Packages?</h4>
              <p className="text-sm leading-relaxed">
                Ubud's unique tropical climate and cultural calendar create distinct wellness needs throughout the year. 
                Our seasonal packages are specifically designed to address the physical and energetic shifts that come 
                with Bali's monsoon, dry season, rice harvest cycles, and ceremonial periods.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-amber-600 mb-2">Customization Available</h4>
              <p className="text-sm leading-relaxed">
                All packages can be customized to your preferences. Add extra time, swap treatments, or combine 
                elements from different packages. Contact us via WhatsApp to create your perfect seasonal wellness 
                experience in Ubud.
              </p>
            </div>
          </div>
        </div>

        {/* Weather Guide */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <Cloud className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="font-bold text-gray-900">Rainy Season (Oct-Mar)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Higher humidity, cooler temperatures, lush green landscapes. Perfect for detoxifying treatments and warm therapies.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Best Packages:</strong> Monsoon Detox, Post-Ceremony Relief
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center mb-3">
                <Sun className="h-6 w-6 text-orange-600 mr-3" />
                <h4 className="font-bold text-gray-900">Dry Season (Apr-Sep)</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Sunny days, higher temperatures, ideal for outdoor activities. Perfect for cooling, rehydrating treatments.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Best Packages:</strong> Dry Season Recovery, Yoga Retreat Recovery
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Book your seasonal massage package today and experience wellness aligned with Ubud's natural rhythms
          </p>
          <Button 
            size="lg"
            className="px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
          >
            {CTA_TEXT.PRIMARY}
          </Button>
        </div>
      </div>
    </section>
  );
}
