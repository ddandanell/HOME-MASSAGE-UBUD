import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Home, Building, Clock, MapPin, DollarSign, Users } from "lucide-react";

interface ComparisonFeature {
  feature: string;
  inVilla: boolean | string;
  traditionalSpa: boolean | string;
  icon: any;
}

const comparisonData: ComparisonFeature[] = [
  {
    feature: "No Travel Required",
    inVilla: "Stay in your villa",
    traditionalSpa: "Must travel to location",
    icon: MapPin
  },
  {
    feature: "Privacy Level",
    inVilla: "100% private environment",
    traditionalSpa: "Shared spa facilities",
    icon: Home
  },
  {
    feature: "Flexibility",
    inVilla: "Schedule anytime 8AM-9PM",
    traditionalSpa: "Limited spa hours",
    icon: Clock
  },
  {
    feature: "Equipment Setup",
    inVilla: "All equipment provided",
    traditionalSpa: "Use existing facilities",
    icon: Building
  },
  {
    feature: "Cost per Session",
    inVilla: "From IDR 300K",
    traditionalSpa: "From IDR 400K+",
    icon: DollarSign
  },
  {
    feature: "Group Bookings",
    inVilla: "Easy couples/family sessions",
    traditionalSpa: "Limited availability",
    icon: Users
  }
];

export default function UbudMassageVsSpa() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Ubud Massage vs Traditional Spa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why mobile in-villa massage wins for busy travelers and wellness seekers in Ubud
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* In-Villa Benefits Card */}
          <Card className="bg-gradient-to-br from-emerald-50 to-white border-emerald-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-600 text-white rounded-full p-3 mr-4">
                  <Home className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">In-Villa Massage</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Ultimate Convenience:</strong>
                    <p className="text-gray-700 text-sm mt-1">No need to travel - therapist comes to you with all equipment</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Total Privacy:</strong>
                    <p className="text-gray-700 text-sm mt-1">Enjoy massage in your private space without shared facilities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Flexible Scheduling:</strong>
                    <p className="text-gray-700 text-sm mt-1">Book anytime between 8AM-9PM, including same-day availability</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Better Value:</strong>
                    <p className="text-gray-700 text-sm mt-1">Competitive pricing without hotel spa markups</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Perfect for Groups:</strong>
                    <p className="text-gray-700 text-sm mt-1">Easy to arrange couples or family massage sessions</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Traditional Spa Card */}
          <Card className="bg-gradient-to-br from-gray-50 to-white border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gray-600 text-white rounded-full p-3 mr-4">
                  <Building className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Traditional Spa</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Travel Required:</strong>
                    <p className="text-gray-700 text-sm mt-1">Must commute to spa location through Ubud traffic</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Shared Facilities:</strong>
                    <p className="text-gray-700 text-sm mt-1">Common waiting areas, locker rooms, and treatment spaces</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Limited Hours:</strong>
                    <p className="text-gray-700 text-sm mt-1">Fixed spa operating hours may not suit your schedule</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Higher Pricing:</strong>
                    <p className="text-gray-700 text-sm mt-1">Premium spa markup and additional facility fees</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <X className="h-5 w-5 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-gray-900">Booking Complexity:</strong>
                    <p className="text-gray-700 text-sm mt-1">Difficult to coordinate multiple treatments for groups</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-emerald-600 to-emerald-700">
                <tr>
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">In-Villa Massage</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Traditional Spa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparisonData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <item.icon className="h-5 w-5 text-emerald-600 mr-3" />
                        <span className="font-medium text-gray-900">{item.feature}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        {typeof item.inVilla === 'boolean' ? (
                          item.inVilla ? (
                            <Check className="h-6 w-6 text-emerald-600" />
                          ) : (
                            <X className="h-6 w-6 text-gray-400" />
                          )
                        ) : (
                          <span className="text-emerald-700 font-medium">{item.inVilla}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center">
                        {typeof item.traditionalSpa === 'boolean' ? (
                          item.traditionalSpa ? (
                            <Check className="h-6 w-6 text-emerald-600" />
                          ) : (
                            <X className="h-6 w-6 text-gray-400" />
                          )
                        ) : (
                          <span className="text-gray-600">{item.traditionalSpa}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Scenarios */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-amber-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-amber-100 text-amber-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Post-Hike Recovery</h4>
              <p className="text-gray-700 text-sm">
                After exploring Campuhan Ridge or Tegallalang rice terraces, enjoy immediate relief without traveling to a spa. Perfect for tired legs and sore muscles.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-amber-100 text-amber-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Romantic Couples</h4>
              <p className="text-gray-700 text-sm">
                Enjoy side-by-side couples massage in your private villa without the hassle of crowded spa lobbies. Create unforgettable intimate wellness experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-amber-100 text-amber-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Home className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Families with Kids</h4>
              <p className="text-gray-700 text-sm">
                Parents can enjoy massage while kids play safely in your villa. No need for babysitters or worrying about children in spa environments.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Experience the convenience and luxury of in-villa massage in Ubud
          </p>
          <a 
            href="https://wa.me/628112656869?text=Book%20Ubud%20massage%20at%20my%20villa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg transition-all transform hover:scale-105"
          >
            Book Your In-Villa Massage Now
          </a>
        </div>
      </div>
    </section>
  );
}
