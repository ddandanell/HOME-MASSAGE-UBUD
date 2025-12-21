import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import SEOHead from '@/components/SEOHead';
import { Heart, MapPin, FileText } from 'lucide-react';

export default function Sitemap() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SEOHead
        title="Sitemap | Home Massage Ubud - All Pages"
        description="Complete sitemap of Home Massage Ubud website. Browse all pages including treatments, service areas, and information pages."
        canonical="https://homemassageubud.com/sitemap"
        keywords="sitemap, home massage ubud, site navigation, all pages"
      />
      
      <Header />
      
      <main className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-amber-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sitemap
            </h1>
            <p className="text-xl text-gray-600">
              Complete directory of all pages on Home Massage Ubud
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-amber-600">
                Main Pages
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Services</span>
                  </Link>
                </li>
                <li>
                  <Link href="/treatments">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">All Treatments</span>
                  </Link>
                </li>
                <li>
                  <Link href="/service-areas">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Service Areas</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Contact</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Testimonials</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Blog</span>
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Sustainability</span>
                  </Link>
                </li>
                <li>
                  <Link href="/villa-partnerships">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Villa Partnerships</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Treatment Pages */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-amber-600">
                <Heart className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Massage Treatments
                </h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/ubud/traditional-balinese-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Traditional Balinese Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/deep-tissue-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Deep Tissue Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/aromatherapy-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Aromatherapy Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/hot-stone-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Hot Stone Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/thai-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Thai Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/lymphatic-drainage-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Lymphatic Drainage Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/pregnancy-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Pregnancy Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/foot-reflexology">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Foot Reflexology</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/post-hike-recovery-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Post-Hike Recovery Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/yoga-stretch-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Yoga Stretch & Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/detox-wellness-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Detox & Wellness Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/couples-wellness-ritual">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Couples Wellness Ritual</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud/herbal-bamboo-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Herbal & Bamboo Massage</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Ubud Area Pages */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-amber-600">
                <MapPin className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Ubud Areas
                </h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/ubud-centre">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Ubud Centre</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud-north">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Ubud North (Penestanan & Sayan)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud-east">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Ubud East (Campuhan Ridge)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud-south">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Ubud South (Lodtunduh)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ubud-luxury-villas">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Ubud Luxury Villas</span>
                  </Link>
                </li>
                <li>
                  <Link href="/sidemen">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Sidemen</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* South Bali Areas - Column 1 */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-amber-600">
                <MapPin className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  South Bali (Part 1)
                </h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/seminyak">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Seminyak</span>
                  </Link>
                </li>
                <li>
                  <Link href="/petitenget">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Petitenget</span>
                  </Link>
                </li>
                <li>
                  <Link href="/canggu">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Canggu</span>
                  </Link>
                </li>
                <li>
                  <Link href="/berawa">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Berawa</span>
                  </Link>
                </li>
                <li>
                  <Link href="/pererenan">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Pererenan</span>
                  </Link>
                </li>
                <li>
                  <Link href="/umalas">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Umalas</span>
                  </Link>
                </li>
                <li>
                  <Link href="/kerobokan">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Kerobokan</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* South Bali Areas - Column 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-amber-600">
                <MapPin className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  South Bali (Part 2)
                </h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/legian">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Legian</span>
                  </Link>
                </li>
                <li>
                  <Link href="/kuta">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Kuta</span>
                  </Link>
                </li>
                <li>
                  <Link href="/sanur">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Sanur</span>
                  </Link>
                </li>
                <li>
                  <Link href="/nusa-dua">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Nusa Dua</span>
                  </Link>
                </li>
                <li>
                  <Link href="/jimbaran">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Jimbaran</span>
                  </Link>
                </li>
                <li>
                  <Link href="/uluwatu">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Uluwatu</span>
                  </Link>
                </li>
                <li>
                  <Link href="/ungasan">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Ungasan</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* North & East Bali Areas */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-amber-600">
                <MapPin className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  North & East Bali
                </h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/lovina">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Lovina</span>
                  </Link>
                </li>
                <li>
                  <Link href="/amed">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Amed</span>
                  </Link>
                </li>
                <li>
                  <Link href="/candidasa">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Candidasa</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Service Pages - Part 1 */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-amber-600">
                <Heart className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Services (Part 1)
                </h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/massage-bali">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Massage Bali</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/spa-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Spa Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/deep-tissue-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Deep Tissue Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/full-body-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Full Body Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/couples-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Couples Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/traditional-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Traditional Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/aromatherapy-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Aromatherapy Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/hot-stone-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Hot Stone Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/relaxing-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Relaxing Massage</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Service Pages - Part 2 */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-amber-600">
                <Heart className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Services (Part 2)
                </h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/body-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Body Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/foot-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Foot Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/reflexology">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Reflexology</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/sports-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Sports Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/prenatal-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Prenatal Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/pregnancy-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Pregnancy Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/postnatal-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Postnatal Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/home-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Home Massage</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Service Pages - Part 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-amber-600">
                <Heart className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Services (Part 3)
                </h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/mobile-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Mobile Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/at-home-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">At-Home Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/professional-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Professional Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/body-therapy-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Body Therapy Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/wellness-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Wellness Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/therapeutic-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Therapeutic Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/luxury-massage">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Luxury Massage</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/best-massage-services">
                    <span className="text-amber-600 hover:text-amber-700 hover:underline">Best Massage Services</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
