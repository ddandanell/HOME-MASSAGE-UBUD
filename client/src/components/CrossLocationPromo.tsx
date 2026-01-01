import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Palmtree } from 'lucide-react';

export default function CrossLocationPromo() {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full mr-3">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                In-Villa Massage Across Bali
              </h2>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Love our service? We also serve <strong>Kuta, Seminyak, Legian, and surrounding areas</strong> in South Bali! 
                Experience the same luxurious <strong>in-villa massage</strong> with our professional therapists who bring 
                relaxation directly to your villa, hotel, or resort.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Whether you're staying in vibrant Kuta or peaceful Ubud, enjoy authentic Balinese massage therapy, 
                deep tissue treatments, and aromatherapy sessions delivered with the same premium quality and service.
              </p>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 md:p-8 border border-blue-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start space-x-4 text-left">
                  <div className="p-2 bg-blue-600 rounded-lg flex-shrink-0">
                    <Palmtree className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Massage in Kuta & South Bali
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Premium home massage service in Kuta, Seminyak, Legian, Sanur, and Nusa Dua. 
                      Professional therapists • Premium oils • Equipment included
                    </p>
                  </div>
                </div>
                
                <a 
                  href="https://www.homemassagekuta.com/" 
                  target="_self"
                  rel="noopener"
                  className="flex-shrink-0"
                >
                  <Button 
                    size="lg" 
                    className="px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                  >
                    Book Massage in Kuta
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Same professional service • Same quality standards • Available daily 7AM-10PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
