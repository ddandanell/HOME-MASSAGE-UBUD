import React from 'react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, DollarSign, Sparkles, Heart, Clock, CheckCircle } from 'lucide-react';
import { openWhatsApp } from '@/lib/whatsapp';

/**
 * Comprehensive Sanur Massage Guide Component
 * An insider's guide to 20+ top spas and wellness retreats in Sanur
 */
export default function SanurMassageGuide() {
  const handleBooking = () => {
    const message = "Hi! I'd like to book a massage in Sanur. Can you help me choose the right treatment?";
    openWhatsApp(message);
  };

  const luxurySpas = [
    {
      name: 'The Maya Sanur Spa',
      subtitle: 'Oceanfront Elegance',
      description: 'Located within the prestigious Maya Sanur Resort & Spa, this sanctuary masterfully blends traditional Balinese healing with contemporary luxury. Ocean-view treatment rooms provide immediate tranquility, while expertly trained therapists deliver transformative experiences through their signature "Maya Awakening" rituals, hydrotherapy sessions, and private couples suites.',
      vibe: 'High-end luxury, beachfront serenity'
    },
    {
      name: 'Puri Santrian Spa',
      subtitle: 'Traditional Balinese Hospitality',
      description: 'Experience authentic Balinese elegance where traditional architecture meets modern comfort. Their open-air pavilions let you savor gentle ocean breezes during your treatment, while an extensive menu of wraps and scrubs complements their exceptional massage offerings.',
      vibe: 'Mid-to-high luxury, culturally authentic'
    },
    {
      name: 'Kanda Spa at Hyatt Regency Bali',
      subtitle: 'Contemporary Sanctuary',
      description: 'This beautifully designed space seamlessly combines modern aesthetics with Balinese traditions. Expansive facilities include vitality pools, sauna and steam rooms, and custom massage oil blends focused on natural ingredients and time-honored techniques.',
      vibe: 'High-end, sleek contemporary design'
    }
  ];

  const midRangeGems = [
    {
      name: 'Nest at The Corner',
      subtitle: 'Boutique Personalization',
      description: 'This intimate boutique spa has built its reputation on personalized attention and tranquil garden settings. Highly skilled therapists deliver a curated treatment menu, creating an ideal atmosphere for those seeking a more personal connection during their Sanur massage.',
      vibe: 'Mid-range, boutique, deeply personalized'
    },
    {
      name: 'Smart Salon & Spa',
      subtitle: 'Comprehensive Wellness Hub',
      description: 'Far beyond basic massage services, Smart Salon & Spa offers complete beauty and wellness treatments in impeccably clean, air-conditioned facilities. Popular with tourists and expatriates alike, their deep tissue massage is particularly noteworthy, alongside professional hair, nail, and waxing services.',
      vibe: 'Mid-range, practical, one-stop wellness'
    },
    {
      name: 'Leha Leha Spa',
      subtitle: 'Authentic Balinese Charm',
      description: '"Leha Leha" translates to "relax" in Indonesian—a promise this cozy spa absolutely delivers. Offering wonderful value alongside traditional Balinese ambiance and genuinely friendly staff, this spot provides excellent massage packages without straining your budget.',
      vibe: 'Mid-range, charming atmosphere, great value'
    },
    {
      name: 'Koa Boutique Spa',
      subtitle: 'Hidden Garden Sanctuary',
      description: 'Discreetly located away from main thoroughfares, Koa enchants visitors with its lush garden setting and attentive service. Specializing in both relaxation and remedial therapies, this tranquil haven emphasizes natural products and peaceful surroundings.',
      vibe: 'Mid-range, serene, off-the-beaten-path'
    },
    {
      name: 'Jamu Traditional Spa',
      subtitle: 'Therapeutic Heritage',
      description: 'A respected institution throughout Bali, Jamu Traditional Spa honors authentic Indonesian healing traditions through herbal remedies, time-honored body scrubs, and treatments focused on genuine wellness. Their natural ingredient emphasis provides truly therapeutic massage experiences.',
      vibe: 'Mid-range, culturally authentic, healing-focused'
    }
  ];

  const budgetFriendly = [
    {
      name: 'Jelita Massage Sanur',
      subtitle: 'Local Favorite',
      description: 'This straightforward, spotlessly clean massage parlor has earned its reputation among locals and savvy travelers. Strong, skilled therapists deliver excellent value through effective treatments—perfect for quick yet deeply satisfying relief.',
      vibe: 'Budget-friendly, no-frills effective'
    },
    {
      name: 'Glo Day Spa & Salon',
      subtitle: 'Quality Deals',
      description: 'While Glo\'s standard pricing sits mid-range, frequent promotions and package deals make high-quality treatments surprisingly affordable. Their consistent quality and modern facilities, combined with regular special offers, provide exceptional value.',
      vibe: 'Mid-to-budget (watch for promotions), contemporary'
    },
    {
      name: 'Carla Spa',
      subtitle: 'Convenient Reliability',
      description: 'With multiple Sanur locations, Carla Spa offers dependable, budget-conscious treatments whenever spontaneity strikes. Clean, professional, and welcoming to walk-ins, they\'re an excellent choice for last-minute wellness needs.',
      vibe: 'Budget-friendly, multiple locations, reliable'
    },
    {
      name: 'Reborn Refresh & Relax',
      subtitle: 'Reflexology Specialists',
      description: 'While offering full-body massages, Reborn truly shines with their outstanding reflexology treatments—providing targeted relief for tired feet after exploring Sanur\'s scenic boardwalk. Clean, comfortable recliners and attractive pricing make this a standout choice.',
      vibe: 'Budget-friendly, reflexology-focused'
    },
    {
      name: 'Bali Orchid Spa',
      subtitle: 'Package Value',
      description: 'Located slightly inland, Bali Orchid Spa frequently offers combination packages bundling massages with complementary treatments at highly competitive rates. Their pleasant garden setting and comprehensive approach deliver substantial value.',
      vibe: 'Budget-friendly, package-oriented'
    }
  ];

  const treatmentTypes = [
    {
      name: 'Traditional Balinese Massage',
      description: 'The quintessential Balinese wellness experience combines gentle stretches, flowing strokes, skin rolling, and palm-and-thumb pressure techniques. This treatment stimulates energy flow, relieves muscle tension, and induces profound relaxation—often enhanced with aromatherapy oils.',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: 'Deep Tissue Massage',
      description: 'For persistent muscle aches or stubborn knots, deep tissue massage targets deeper muscle layers and connective tissue. Therapists employ slower strokes and focused pressure to break down adhesions and relieve chronic tension.',
      icon: <Star className="w-6 h-6" />
    },
    {
      name: 'Hot Stone Massage',
      description: 'Experience heated volcanic stones placed strategically across your body. Their penetrating warmth relaxes muscles deeply, allowing therapists to work more effectively into tissue layers—creating incredibly comforting, therapeutic experiences.',
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: 'Aromatherapy Massage',
      description: 'This gentle approach uses therapeutic essential oils selected for specific properties—lavender for relaxation, peppermint for invigoration. Oils absorbed through skin and inhaled provide simultaneous physical and emotional benefits.',
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      name: 'Reflexology',
      description: 'Based on principles connecting specific foot and hand points to body organs and systems, reflexology applies targeted pressure to promote healing and overall well-being. It\'s remarkably invigorating and relieving, especially after extensive walking.',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const insiderTips = [
    {
      title: 'Timing Your Visit',
      content: 'High season (July-August, December-January) requires booking popular spas several days ahead. Low season allows walk-ins, but 24-hour advance booking provides peace of mind. Morning sessions typically stay quieter, while evenings fill quickly.'
    },
    {
      title: 'Communication & Selection',
      content: 'Don\'t hesitate expressing preferences—desired pressure levels, focus areas, specific concerns. Request particular therapists when you hear positive recommendations. Trust your instincts; trying different therapists is perfectly acceptable.'
    },
    {
      title: 'Spa Etiquette',
      content: 'Arrive 10-15 minutes early for check-in. Disposable underwear typically provided. Shower facilities often available. Tipping isn\'t mandatory but appreciated—IDR 20,000-50,000 for good service. Hydrate thoroughly before and after.'
    },
    {
      title: 'Package Deals',
      content: 'Spas frequently bundle treatments (massage + scrub + facial) at discounted rates versus individual bookings. Watch for happy hour specials, seasonal discounts, and social media offers.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-emerald-200 text-gray-900 hover:bg-emerald-300">
            <MapPin className="w-3 h-3 mr-1" />
            Ultimate Sanur Guide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Ultimate Sanur Massage Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover 20+ top spas & wellness retreats across Sanur—from luxurious oceanfront escapes to authentic local healing sanctuaries. Your insider's guide to finding the perfect massage in Bali's most serene coastal sanctuary.
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-4xl mx-auto mb-16">
          <p className="text-gray-700 leading-relaxed">
            Tired of generic travel lists that all recommend the same tired spots? As long-time Sanur residents and wellness devotees, we've personally explored and vetted over 20 exceptional spas across this tranquil beach town. This comprehensive guide reveals not just where to book your massage in Sanur, but why each spa truly stands out, what makes their treatments unique, and exactly how to maximize your Balinese wellness journey.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Sanur's serene beaches and laid-back atmosphere have long made it Bali's premier destination for relaxation seekers. Far from the tourist-packed streets of <Link href="/seminyak" className="text-blue-600 hover:text-blue-700 underline">Seminyak</Link> or <Link href="/canggu" className="text-blue-600 hover:text-blue-700 underline">Canggu</Link>, this peaceful coastal enclave offers an exceptional array of massage and spa experiences catering to every preference and budget.
          </p>
        </div>

        {/* Luxury Escapes */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-amber-500" />
            <h3 className="text-3xl font-bold text-gray-900">Luxury Escapes: Premium Wellness Experiences</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxurySpas.map((spa, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-100 hover:border-amber-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{spa.name}</h4>
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">
                    Luxury
                  </Badge>
                </div>
                <p className="text-blue-600 font-semibold mb-3">{spa.subtitle}</p>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{spa.description}</p>
                <p className="text-xs text-gray-600 italic">{spa.vibe}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mid-Range Gems */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-blue-500" />
            <h3 className="text-3xl font-bold text-gray-900">Mid-Range Gems: Outstanding Quality & Value</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {midRangeGems.map((spa, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100 hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{spa.name}</h4>
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    Mid-Range
                  </Badge>
                </div>
                <p className="text-gray-900 font-semibold mb-3">{spa.subtitle}</p>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{spa.description}</p>
                <p className="text-xs text-gray-600 italic">{spa.vibe}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Budget-Friendly */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-8 h-8 text-gray-800" />
            <h3 className="text-3xl font-bold text-gray-900">Budget-Friendly Discoveries: Accessible Excellence</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetFriendly.map((spa, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-100 hover:border-green-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-xl font-bold text-gray-900">{spa.name}</h4>
                  <Badge className="bg-green-100 text-gray-900 hover:bg-green-200">
                    Budget
                  </Badge>
                </div>
                <p className="text-purple-600 font-semibold mb-3">{spa.subtitle}</p>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{spa.description}</p>
                <p className="text-xs text-gray-600 italic">{spa.vibe}</p>
              </div>
            ))}
          </div>

          {/* Additional Budget Options */}
          <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-2 border-green-200">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Beachfront Massage Stalls: Ultra-Affordable Authenticity</h4>
            <p className="text-gray-700 text-sm">
              Along Sanur's beach and main streets, numerous small open-air massage stalls offer incredibly affordable traditional Balinese massages. While lacking privacy, they provide surprisingly skillful treatments—perfect for spontaneous, authentic local experiences.
            </p>
            <p className="text-xs text-gray-600 italic mt-2">Vibe & Budget: Ultra-budget, open-air, genuinely local</p>
          </div>
        </div>

        {/* Treatment Types */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Understanding Sanur's Massage & Treatment Options</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {treatmentTypes.map((treatment, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 flex-shrink-0 mt-1">
                    {treatment.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{treatment.name}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{treatment.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Body Scrubs & Wraps</h4>
            <p className="text-gray-700 text-sm">
              Beyond massage, many Sanur spas offer exfoliating scrubs (including traditional Lulur with turmeric and rice powder) and nourishing wraps (aloe vera for sun exposure, detoxifying mud treatments). These leave skin incredibly soft and revitalized.
            </p>
          </div>
        </div>

        {/* Pricing Guide */}
        <div className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Sanur Massage Pricing Guide</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-gray-900 font-bold text-xl mb-2">Budget Spas</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$4-$7</div>
              <div className="text-sm text-gray-600">IDR 60k-100k / 60 min</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-blue-600 font-bold text-xl mb-2">Mid-Range</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$8-$17</div>
              <div className="text-sm text-gray-600">IDR 150k-320k / 60 min</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-amber-600 font-bold text-xl mb-2">Luxury Spas</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">$20-$50+</div>
              <div className="text-sm text-gray-600">IDR 320k-760k+ / 60 min</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {insiderTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-5">
                <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  {tip.title}
                </h4>
                <p className="text-gray-700 text-sm">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Sanur */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Sanur Excels for Wellness</h3>
          
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Living here for years, we've witnessed how Sanur embodies gentle living—a philosophy permeating its wellness offerings. While other Bali destinations like <Link href="/ubud" className="text-blue-600 hover:text-blue-700 underline">Ubud</Link> or <Link href="/seminyak" className="text-blue-600 hover:text-blue-700 underline">Seminyak</Link> pulse with vibrant energy, Sanur hums with soothing rhythm, creating ideal conditions for truly restorative experiences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sanur's reef-protected beaches create naturally tranquil waters perfect for quiet reflection. This inherent serenity extends through tree-lined streets leading to charming cafes and authentic local establishments. The noticeably slower pace encourages genuine unwinding—directly translating into spa quality and therapeutic intention.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Sanur's appeal lies in balance. Modern amenities and world-class resorts coexist with authentic Balinese charm. Luxurious spas neighbor humble yet highly skilled local practitioners, reflecting diverse offerings respecting all budgets and preferences. This unique blend—peaceful environment, cultural authenticity, quality wellness diversity—makes Sanur unparalleled for rejuvenation.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Prefer In-Villa Massage in Sanur?</h3>
          <p className="text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
            While Sanur offers incredible spa experiences, our professional mobile massage service brings the same quality directly to your accommodation. No travel, no schedules—just pure wellness in your private space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              onClick={handleBooking}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg font-semibold"
            >
              <Clock className="mr-2 h-5 w-5" />
              Book In-Villa Massage
            </Button>
            <Link href="/treatments">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                View All Treatments
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            Available 7 AM – 10 PM daily • All Sanur locations • No travel fees
          </p>
        </div>

        {/* Related Areas */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Explore massage services in nearby areas:</h4>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/nusa-dua">
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                Nusa Dua
              </Button>
            </Link>
            <Link href="/canggu">
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                Canggu
              </Button>
            </Link>
            <Link href="/ubud-centre">
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                Ubud Centre
              </Button>
            </Link>
            <Link href="/seminyak">
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                Seminyak
              </Button>
            </Link>
            <Link href="/service-areas">
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                All Locations
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
