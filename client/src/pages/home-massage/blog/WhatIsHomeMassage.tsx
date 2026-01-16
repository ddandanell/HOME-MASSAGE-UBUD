import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Heart, DollarSign, CheckCircle } from 'lucide-react';

export default function WhatIsHomeMassage() {
  return (
    <>
      <SEOHead 
        title="What is Home Massage? Complete Guide to In-Villa Therapy"
        description="Discover what home massage really is. Learn the definition, benefits, and how home massage compares to spa massage. Professional massage therapy at your villa or hotel."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">Understanding Home Massage</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What is Home Massage?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A complete introduction to professional home massage therapy and how it works
            </p>
          </div>
        </div>
      </section>

      {/* Block 1: Tourist Story Opening */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Tourist Massage Dilemma
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Picture this: You're on vacation in Bali, exhausted from travel, and desperate for a massage. You walk into a random spa near your hotel, and the experience is... confusing. Where's the hygiene? Who is the therapist? Why do they keep suggesting extra services? This home massage dilemma faces thousands of tourists every year.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                That's where home massage changes everything. Instead of walking into an unfamiliar spa and hoping for the best, professional home massage brings verified therapy directly to your villa or hotel room. When you book <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link>, <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue home massage</span></Link>, <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link>, or <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">relaxation home massage</span></Link>, you know exactly who's coming, what they'll do, and what home massage will cost.
              </p>
              <p className="text-lg text-muted-foreground">
                This fundamental difference defines why home massage has become the smart choice for travelers across Bali—from <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud's rice terraces</span></Link> to <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu's beaches</span></Link>, from <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak resorts</span></Link> to <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur's coastal villas</span></Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Simple Definition */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Simple Definition: What is Home Massage?
            </h2>
            <Card className="border-2 border-primary mb-8">
              <CardContent className="p-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  <strong>Home massage is professional massage therapy delivered by a licensed therapist at your villa, hotel room, or accommodation.</strong> Instead of traveling to a spa facility, the therapist brings equipment and expertise to you. Home massage offers the same professional techniques and therapeutic benefits as spa massage—but with the convenience and privacy of in-villa treatment. Whether you choose home massage for relaxation or therapeutic purposes, the therapist remains the same professional standard you'd expect from any quality spa.
                </p>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                That simple concept—massage at your location instead of the therapist's location—creates massive practical differences. Home massage eliminates transportation time, waiting in spas, and uncomfortable socializing. Home massage gives you privacy, control, and transparency about what you're receiving.
              </p>
              <p className="text-lg text-muted-foreground">
                Professional home massage services operate with the same qualifications, techniques, and ethical standards as traditional spa massage. The difference is convenience and control. When you book <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link> or any home massage service in <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link> or <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, you're getting the same therapeutic expertise—just delivered to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Types of Home Massage */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Types of Home Massage Available
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese Home Massage</span></Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Traditional Indonesian home massage using flowing strokes, acupressure, and gentle stretching. Balinese home massage emphasizes energy balance and deep relaxation. Perfect for those seeking authentic cultural home massage experience.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Best for: Relaxation and cultural experience</p>
                    <p>• Pressure: Light to moderate</p>
                    <p>• Duration: 60-90 minutes typical</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep Tissue Home Massage</span></Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Intensive home massage targeting deep muscle layers using firmer pressure and focused techniques. Deep tissue home massage addresses chronic tension and muscle soreness. Best when you have specific problem areas in need of therapeutic home massage work.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Best for: Tension relief and muscle therapy</p>
                    <p>• Pressure: Firm and targeted</p>
                    <p>• Duration: 60-90 minutes recommended</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">Couples Home Massage</span></Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Two therapists deliver synchronized home massage to two people simultaneously. Couples home massage creates shared relaxation experience—perfect for honeymoons or romantic vacations. Home massage together strengthens connection while both partners receive professional treatment.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Best for: Couples on vacation</p>
                    <p>• Pressure: Customizable per person</p>
                    <p>• Duration: 60-90 minutes together</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">Relaxation Home Massage</span></Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Gentle, soothing home massage focused purely on relaxation and stress relief. Relaxation home massage uses lighter pressure and calming techniques. Ideal when you want vacation pampering without therapeutic intensity. Home massage for pure restoration.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Best for: Vacation relaxation and stress relief</p>
                    <p>• Pressure: Light and soothing</p>
                    <p>• Duration: 60-90 minutes</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: Common Home Massage Myths */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Common Myths About Home Massage
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-red-600">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Myth: "Home massage is cheaper because it's less professional"</h3>
                      <p className="text-muted-foreground">
                        <strong>Reality:</strong> Home massage pricing reflects overhead elimination, not reduced quality. Licensed therapists deliver identical professional standards whether providing home massage in <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link> or any other city. Home massage often costs less because there's no spa facility, reception, or facility markup—but the therapist expertise remains top-tier.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-red-600">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Myth: "Home massage is only for people who are lazy or busy"</h3>
                      <p className="text-muted-foreground">
                        <strong>Reality:</strong> Home massage serves many needs beyond convenience. Travelers with mobility issues, parents with young children, and people with anxiety appreciate home massage privacy. Busy professionals love home massage efficiency. Luxury travelers prefer home massage integration into their villa experience. Home massage isn't laziness—it's smart travel choice. Whether in <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, or <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>, home massage works for all travel styles.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-red-600">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Myth: "Home massage therapists aren't properly trained"</h3>
                      <p className="text-muted-foreground">
                        <strong>Reality:</strong> Professional home massage services require identical qualifications as spa therapists. Licensed practitioners deliver <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link>, <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue home massage</span></Link>, and other home massage styles with certified expertise. Read our <Link href="/home-massage/knowledge/safety"><span className="text-primary hover:underline">safety standards</span></Link> to see our home massage therapist verification processes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-red-600">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Myth: "Home massage is only for relaxation, not serious therapy"</h3>
                      <p className="text-muted-foreground">
                        <strong>Reality:</strong> Professional home massage delivers the same therapeutic benefits as spa massage. <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep tissue home massage</span></Link> specifically targets muscle tension and injury recovery. Home massage therapists use identical techniques as spa professionals. The location changes, but therapeutic capability remains identical.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-red-600">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Myth: "Home massage means I have to clean my room before the therapist arrives"</h3>
                      <p className="text-muted-foreground">
                        <strong>Reality:</strong> Your home massage therapist only needs a clean massage surface (bed or mat) and adequate space to work. You don't need to deep-clean your entire room for home massage. A clear floor space and clean linens are sufficient. Professional home massage therapists expect lived-in spaces.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <span className="text-2xl font-bold text-red-600">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Myth: "Home massage has hidden costs or pressure for tips"</h3>
                      <p className="text-muted-foreground">
                        <strong>Reality:</strong> Reputable home massage services provide transparent, all-inclusive pricing. No hidden costs. While tips are appreciated for excellent service, professional home massage companies don't apply pressure or include tips in quoted rates. Check our <Link href="/home-massage/blog/how-to-book-home-massage"><span className="text-primary hover:underline">booking guide</span></Link> for pricing clarity.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: Home Massage vs Spa Massage Comparison */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Home Massage vs Spa Massage: Key Differences
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="pb-3 font-semibold">Factor</th>
                    <th className="pb-3 font-semibold">Home Massage</th>
                    <th className="pb-3 font-semibold">Spa Massage</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3">Location</td>
                    <td className="py-3">Your villa/hotel room</td>
                    <td className="py-3">Spa facility</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Time Commitment</td>
                    <td className="py-3">No travel time for home massage</td>
                    <td className="py-3">15-30 min travel + wait time</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Privacy</td>
                    <td className="py-3">Complete privacy for home massage</td>
                    <td className="py-3">Shared spa environment</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Therapist Quality</td>
                    <td className="py-3">Verified, licensed home massage pros</td>
                    <td className="py-3">Variable quality standards</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Pressure Options</td>
                    <td className="py-3">All types available (deep tissue, relaxation, etc.)</td>
                    <td className="py-3">Limited options sometimes</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Cost</td>
                    <td className="py-3">Often lower for equivalent quality home massage</td>
                    <td className="py-3">Facility markup included</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Equipment</td>
                    <td className="py-3">Therapist brings everything for home massage</td>
                    <td className="py-3">Provided by facility</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Scheduling</td>
                    <td className="py-3">Flexible home massage appointments</td>
                    <td className="py-3">Limited available time slots</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">Post-Massage</td>
                    <td className="py-3">Relax immediately in own space after home massage</td>
                    <td className="py-3">Travel before fully relaxed</td>
                  </tr>
                  <tr>
                    <td className="py-3">Safety Verification</td>
                    <td className="py-3">Higher transparency for home massage booking</td>
                    <td className="py-3">Anonymous spa assignment</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Block 6: When Home Massage is Best Choice */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              When Home Massage is Your Best Choice
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Solo Travelers</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Safety-conscious solo travelers (especially women) prefer home massage's privacy and therapist verification. Home massage eliminates uncomfortable situations in unfamiliar spas. Available in <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, and <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Couples Seeking Quality Time</h3>
                  </div>
                  <p className="text-muted-foreground">
                    <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">Couples home massage</span></Link> delivers synchronized relaxation in your private space. Home massage together strengthens vacations by eliminating travel between separate spa locations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Luxury Villa Guests</h3>
                  </div>
                  <p className="text-muted-foreground">
                    High-end villa rentals deserve matching home massage experiences. Professional home massage keeps you villa-bound, maximizing your luxury accommodation investment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Families with Kids</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Parents need home massage flexibility—no childcare coordination required. Home massage comes to you, keeping kids in villa while you relax nearby.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">People with Mobility Issues</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Travelers with physical limitations benefit from home massage convenience. No difficult travel to distant spas—therapy comes to your accommodation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Travelers Seeking Specific Therapies</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Want <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue home massage</span></Link> or <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link>? Professional home massage guarantees your chosen style—not random spa availability.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Budget-Conscious Travelers</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Home massage delivers high quality at competitive pricing—no facility overhead inflates costs. Get professional therapy at better value through home massage booking.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Nervous First-Time Clients</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Home massage transparency reduces anxiety. Know your therapist in advance. Our detailed <Link href="/home-massage/knowledge/what-to-expect"><span className="text-primary hover:underline">what to expect guide</span></Link> prepares nervous clients perfectly for home massage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 7: Why Home Massage Has Exploded in Popularity */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Home Massage is Growing Among Travelers
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Home massage has transformed from a niche service to mainstream choice among Bali travelers. Several factors explain this explosive growth in home massage popularity.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Convenience Revolution</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Home massage eliminates all friction from traditional spa experience. No transportation. No waiting. No scheduling games. Just book, relax, recover—all in your villa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Privacy and Control</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Home massage happens in your private space under your rules. No spa-induced anxiety. No pressure for upgrades. No uncomfortable environments. Complete control over your home massage experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-3">
                    <DollarSign className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="font-semibold text-lg">Better Value</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Professional home massage costs less than equivalent spa quality. Overhead passes to you as savings. Get premium therapy at better prices through home massage booking.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 8: Soft Conversion - Next Steps */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Ready to Experience Home Massage?
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground text-center mb-6">
                Now that you understand home massage fundamentals, explore which type fits your needs. Our <Link href="/home-massage/knowledge/what-to-expect"><span className="text-primary hover:underline">what to expect guide</span></Link> walks through the entire home massage process, and our <Link href="/home-massage/blog/how-to-book-home-massage"><span className="text-primary hover:underline">booking guide</span></Link> explains home massage booking simply.
              </p>
            </div>
            <div className="text-center mb-12">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Your First Home Massage
                </a>
              </Button>
            </div>

            <div className="border-t pt-12">
              <h3 className="text-2xl font-semibold mb-8">Explore Home Massage Further</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Home Massage Services:</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/home-massage/services/balinese">Balinese Home Massage</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/home-massage/services/deep-tissue">Deep Tissue Home Massage</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/home-massage/services/couples">Couples Home Massage</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/home-massage/services/relaxation">Relaxation Home Massage</Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Home Massage by City:</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/home-massage/cities/ubud">Home Massage in Ubud</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/home-massage/cities/canggu">Home Massage in Canggu</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/home-massage/cities/seminyak">Home Massage in Seminyak</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/home-massage/cities/sanur">Home Massage in Sanur</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-lg">Home Massage Knowledge Center:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/knowledge/what-to-expect">What to Expect</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/knowledge/safety">Safety Standards</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage">Home Massage Hub</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/blog/how-to-book-home-massage">How to Book</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage/blog/why-tourists-prefer-home-massage">Why Choose Home Massage</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/home-massage">Explore More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
