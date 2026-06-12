/**
 * InternalLinkNetwork — Master internal linking component
 *
 * This component creates a dense web of internal links across the site.
 * Place it at the bottom of every page (before the footer) to ensure:
 * 1. Every page links to its parent hub
 * 2. Every page links to sibling pages
 * 3. Every page links to the 3 main silos
 * 4. Every page links to popular treatments and areas
 * 5. Contextual cross-linking based on page type
 *
 * Usage:
 *   <InternalLinkNetwork
 *     pageType="treatment"
 *     currentPage="/ubud/traditional-balinese-massage"
 *     hubPath="/treatments"
 *     hubName="All Treatments"
 *   />
 */

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  MapPin, Heart, Home, Smartphone, Building, ArrowRight,
  Star, Clock, Users, Sparkles
} from 'lucide-react';

// ─── DATA: Central source of truth for all linkable pages ───

const SILOS = [
  { id: 'home-massage', name: 'Home Massage', href: '/home-massage', icon: Home, desc: 'Massage delivered to your accommodation', color: 'bg-blue-50 border-blue-200 hover:border-blue-400' },
  { id: 'mobile-massage', name: 'Mobile Massage', href: '/mobile-massage', icon: Smartphone, desc: 'On-demand massage throughout Bali', color: 'bg-green-50 border-green-200 hover:border-green-400' },
  { id: 'villa-massage', name: 'Villa Massage', href: '/villa-massage', icon: Building, desc: 'Luxury spa at your private villa', color: 'bg-purple-50 border-purple-200 hover:border-purple-400' }
] as const;

const ALL_TREATMENTS = [
  { name: 'Traditional Balinese', href: '/ubud/traditional-balinese-massage', tag: 'Most Popular' },
  { name: 'Deep Tissue', href: '/ubud/deep-tissue-massage', tag: 'Therapeutic' },
  { name: 'Aromatherapy', href: '/ubud/aromatherapy-massage', tag: 'Relaxing' },
  { name: 'Hot Stone', href: '/ubud/hot-stone-massage', tag: 'Luxury' },
  { name: 'Thai Massage', href: '/ubud/thai-massage', tag: 'Stretching' },
  { name: 'Lymphatic Drainage', href: '/ubud/lymphatic-drainage-massage', tag: 'Detox' },
  { name: 'Pregnancy Massage', href: '/ubud/pregnancy-massage', tag: 'Safe' },
  { name: 'Foot Reflexology', href: '/ubud/foot-reflexology', tag: 'Recovery' },
  { name: 'Couples Ritual', href: '/ubud/couples-wellness-ritual', tag: 'Romantic' },
  { name: 'Post-Hike Recovery', href: '/ubud/post-hike-recovery-massage', tag: 'Active' },
  { name: 'Yoga Stretch', href: '/ubud/yoga-stretch-massage', tag: 'Flexibility' },
  { name: 'Detox & Wellness', href: '/ubud/detox-wellness-massage', tag: 'Cleanse' },
  { name: 'Herbal Bamboo', href: '/ubud/herbal-bamboo-massage', tag: 'Traditional' }
];

const UBUD_AREAS = [
  { name: 'Ubud Centre', href: '/ubud-centre' },
  { name: 'Ubud North', href: '/ubud-north' },
  { name: 'Ubud East', href: '/ubud-east' },
  { name: 'Ubud South', href: '/ubud-south' },
  { name: 'Luxury Villas', href: '/ubud-luxury-villas' }
];

const SOUTH_BALI_AREAS = [
  { name: 'Seminyak', href: '/seminyak' },
  { name: 'Canggu', href: '/canggu' },
  { name: 'Berawa', href: '/berawa' },
  { name: 'Pererenan', href: '/pererenan' },
  { name: 'Petitenget', href: '/petitenget' },
  { name: 'Umalas', href: '/umalas' },
  { name: 'Kerobokan', href: '/kerobokan' },
  { name: 'Legian', href: '/legian' }
];

const ALL_BALI_AREAS = [
  { name: 'Kuta', href: '/kuta' },
  { name: 'Sanur', href: '/sanur' },
  { name: 'Nusa Dua', href: '/nusa-dua' },
  { name: 'Jimbaran', href: '/jimbaran' },
  { name: 'Uluwatu', href: '/uluwatu' },
  { name: 'Ungasan', href: '/ungasan' },
  { name: 'Lovina', href: '/lovina' },
  { name: 'Amed', href: '/amed' },
  { name: 'Candidasa', href: '/candidasa' },
  { name: 'Sidemen', href: '/sidemen' }
];

const SERVICE_LANDING_PAGES = [
  { name: 'Massage', href: '/services/massage' },
  { name: 'Spa Massage', href: '/services/spa-massage' },
  { name: 'Full Body', href: '/services/full-body-massage' },
  { name: 'Couples', href: '/services/couples-massage' },
  { name: 'Traditional', href: '/services/traditional-massage' },
  { name: 'Relaxing', href: '/services/relaxing-massage' },
  { name: 'Sports', href: '/services/sports-massage' },
  { name: 'Prenatal', href: '/services/prenatal-massage' }
];

// ─── TYPES ───

interface InternalLinkNetworkProps {
  /** What kind of page this is */
  pageType?: 'home' | 'treatment' | 'area' | 'service' | 'hub' | 'blog' | 'generic';
  /** Current page path (to exclude from links) */
  currentPage?: string;
  /** Parent hub path (e.g. /treatments) */
  hubPath?: string;
  /** Parent hub display name */
  hubName?: string;
  /** Sibling pages — pages at the same level */
  siblings?: { name: string; href: string }[];
  /** Whether to show the full mega-network or compact version */
  variant?: 'full' | 'compact';
}

// ─── COMPONENT ───

export default function InternalLinkNetwork({
  pageType = 'generic',
  currentPage = '',
  hubPath,
  hubName,
  siblings,
  variant = 'full'
}: InternalLinkNetworkProps) {

  // Filter out current page from all lists
  const filterCurrent = (items: { name: string; href: string }[]) =>
    items.filter(item => item.href !== currentPage);

  const otherSilos = SILOS.filter(s => !currentPage.includes(s.id));
  const otherTreatments = filterCurrent(ALL_TREATMENTS).slice(0, variant === 'compact' ? 6 : 12);
  const otherAreas = filterCurrent([...UBUD_AREAS, ...SOUTH_BALI_AREAS]).slice(0, 8);
  const otherServices = filterCurrent(SERVICE_LANDING_PAGES).slice(0, 6);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── HUB & SIBLINGS ─── */}
        {(hubPath || (siblings && siblings.length > 0)) && (
          <div className="mb-10">
            {hubPath && hubName && (
              <div className="flex items-center gap-2 mb-4">
                <ArrowRight className="w-4 h-4 text-amber-600" />
                <Link href={hubPath}>
                  <span className="text-amber-600 hover:text-amber-700 font-semibold text-sm uppercase tracking-wide">
                    ← Back to {hubName}
                  </span>
                </Link>
              </div>
            )}

            {siblings && siblings.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  More in this section
                </h3>
                <div className="flex flex-wrap gap-2">
                  {filterCurrent(siblings).map((sib) => (
                    <Link key={sib.href} href={sib.href}>
                      <span className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-amber-300 hover:text-amber-700 transition-colors">
                        {sib.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ─── CROSS-SILO LINKS ─── */}
        {pageType !== 'home' && otherSilos.length > 0 && (
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              Explore Our Massage Services
            </h3>
            <div className={`grid gap-4 ${otherSilos.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
              {otherSilos.map((silo) => (
                <Link key={silo.id} href={silo.href}>
                  <div className={`${silo.color} border-2 rounded-xl p-5 hover:shadow-md transition-all cursor-pointer`}>
                    <div className="flex items-center gap-3 mb-2">
                      <silo.icon className="w-5 h-5 text-gray-700" />
                      <h4 className="font-semibold text-gray-900">{silo.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{silo.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ─── RELATED TREATMENTS ─── */}
        {pageType !== 'treatment' && otherTreatments.length > 0 && (
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber-600" />
              Massage Treatments
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherTreatments.map((t) => (
                <Link key={t.href} href={t.href}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-amber-300 hover:text-amber-700 transition-colors">
                    {t.name}
                    {t.tag && (
                      <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">
                        {t.tag}
                      </span>
                    )}
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-3">
              <Link href="/treatments">
                <span className="text-sm text-amber-600 hover:text-amber-700 font-medium">
                  View all 13 treatments →
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* ─── SERVICE AREAS ─── */}
        {pageType !== 'area' && (
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-amber-600" />
              Where We Serve in Bali
            </h3>

            {/* Ubud areas */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Ubud</h4>
              <div className="flex flex-wrap gap-2">
                {filterCurrent(UBUD_AREAS).map((a) => (
                  <Link key={a.href} href={a.href}>
                    <span className="inline-block px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-amber-300 hover:text-amber-700 transition-colors">
                      {a.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* South Bali */}
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">South Bali</h4>
              <div className="flex flex-wrap gap-2">
                {filterCurrent(SOUTH_BALI_AREAS).map((a) => (
                  <Link key={a.href} href={a.href}>
                    <span className="inline-block px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-amber-300 hover:text-amber-700 transition-colors">
                      {a.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* All Bali */}
            <div>
              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">All Bali</h4>
              <div className="flex flex-wrap gap-2">
                {filterCurrent(ALL_BALI_AREAS).map((a) => (
                  <Link key={a.href} href={a.href}>
                    <span className="inline-block px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-amber-300 hover:text-amber-700 transition-colors">
                      {a.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <Link href="/service-areas">
                <span className="text-sm text-amber-600 hover:text-amber-700 font-medium">
                  View all 23 service areas →
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* ─── SERVICE LANDING PAGES ─── */}
        {pageType !== 'service' && otherServices.length > 0 && (
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-600" />
              Popular Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {otherServices.map((s) => (
                <Link key={s.href} href={s.href}>
                  <span className="inline-block px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 hover:border-amber-300 hover:text-amber-700 transition-colors">
                    {s.name} Massage
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ─── TRUST SIGNALS ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-gray-200">
          {[
            { icon: Users, label: '500+ Happy Clients', sub: 'Trusted across Bali' },
            { icon: Star, label: '4.9/5 Rating', sub: 'Verified reviews' },
            { icon: Clock, label: '7AM — 10PM Daily', sub: 'Same-day booking' },
            { icon: MapPin, label: '23+ Locations', sub: 'All Bali covered' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <stat.icon className="w-5 h-5 text-amber-600 mx-auto mb-1" />
              <p className="font-semibold text-sm text-gray-900">{stat.label}</p>
              <p className="text-xs text-gray-500">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* ─── FINAL CTA ─── */}
        <div className="text-center pt-6 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Ready to book? Message us on WhatsApp for instant confirmation.
          </p>
          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
            <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
              Book via WhatsApp
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
}
