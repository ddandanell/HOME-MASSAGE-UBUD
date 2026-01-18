import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, DollarSign, Lock, Home, Star, Users, CheckCircle, Shield, Sparkles, MapPin, Award, TrendingUp } from 'lucide-react';

export default function HomeMassageVsSpaBali() {
  return (
    <>
      <SEOHead 
        title="Home Massage vs Spa in Bali: Which Should You Choose?"
        description="Home massage vs spa in Bali: compare costs, convenience, privacy, and quality. See which fits your needs. Professional therapists deliver to villas. Book now."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="text-lg font-semibold text-primary">Comparison Guide</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Home Massage vs Spa in Bali: Complete Comparison Guide
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  An honest comparison of costs, convenience, quality, and privacy to help you choose the best massage experience in Bali
                </p>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground mb-4">
                    You're on vacation in Bali, your body aches from yesterday's hike, and you're craving a massage. Should you book a session at one of Bali's famous spas, or have a therapist come to your villa? It's a question thousands of visitors ask every week, and the answer isn't always straightforward.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    Both <Link href="/home-massage"><span className="text-primary hover:underline">home massage</span></Link> and traditional spa visits have their merits. Spas offer elaborate facilities and a "day out" experience, while home massage delivers convenience and privacy. But when you break down the actual costs, time investment, and quality of service, clear patterns emerge.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    This comprehensive comparison examines every angle: pricing, convenience, therapist quality, privacy, and real guest experiences. By the end, you'll know exactly which option suits your needs—or when to choose both. Whether you're staying in <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, or anywhere across Bali, this guide will help you make the right choice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Overview: Home Massage & Spa Services
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">What is Home Massage?</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Home massage, also called mobile massage or in-villa massage, brings professional therapists directly to your accommodation. The therapist arrives with a portable massage table, fresh linens, aromatherapy oils, and everything needed to create a spa-quality experience wherever you're staying. Sessions typically last 60-120 minutes and include traditional <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese massage</span></Link>, <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue</span></Link>, aromatherapy, and specialized treatments.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      You choose your preferred location: bedroom, living room, garden, pool deck, or terrace. The service is popular among couples, families, and anyone prioritizing convenience and privacy. Booking is usually done online or via WhatsApp, with therapists arriving within 60-90 minutes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">What is a Spa Visit?</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Traditional spa visits involve traveling to a dedicated wellness facility. Bali's spas range from budget-friendly local operations to ultra-luxury resorts with elaborate facilities: flower baths, saunas, steam rooms, plunge pools, and meditation gardens. Upon arrival, guests typically change into spa robes, enjoy tea in a waiting area, then proceed to treatment rooms for their massage.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Premium spas offer multi-hour packages combining massage, facials, body scrubs, and hydrotherapy. The experience emphasizes ambiance, aesthetics, and a complete escape from daily life. Appointments are usually booked days in advance, especially during high season.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Key Differences at a Glance</h3>
                    <Card>
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                            <h4 className="font-bold mb-2">Location</h4>
                            <p className="text-sm text-muted-foreground">Home: Your villa<br/>Spa: Travel required</p>
                          </div>
                          <div className="text-center">
                            <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                            <h4 className="font-bold mb-2">Time Investment</h4>
                            <p className="text-sm text-muted-foreground">Home: 60-90 min total<br/>Spa: 2.5-4 hours total</p>
                          </div>
                          <div className="text-center">
                            <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                            <h4 className="font-bold mb-2">Privacy Level</h4>
                            <p className="text-sm text-muted-foreground">Home: Complete privacy<br/>Spa: Shared facilities</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cost Comparison */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Cost Comparison
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Home Massage Pricing</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Home massage services in Bali typically charge 300,000-500,000 IDR ($20-33 USD) for a 60-minute session, with 90-minute sessions running 400,000-650,000 IDR ($26-43 USD). <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">Couples massage</span></Link> packages usually cost 700,000-1,000,000 IDR ($46-66 USD) for 90 minutes with two therapists. Premium treatments like hot stone or prenatal massage may add 50,000-100,000 IDR ($3-7 USD).
                    </p>
                    <p className="text-lg text-muted-foreground">
                      These prices include everything: therapist travel, equipment, oils, and service. There's no entrance fee, facility charge, or mandatory tips. Most services offer package discounts for multiple sessions or group bookings. Check our full <Link href="/pricing"><span className="text-primary hover:underline">pricing guide</span></Link> for current rates.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Spa Pricing</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Budget spas in Bali charge 150,000-300,000 IDR ($10-20 USD) for basic massage, but often deliver inconsistent quality. Mid-range spas typically price 60-minute massages at 400,000-700,000 IDR ($26-46 USD), while luxury resort spas charge 800,000-1,500,000 IDR ($53-100 USD) or more for similar treatments.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Multi-treatment packages at premium spas can reach 2,000,000-4,000,000 IDR ($133-266 USD) for 2-3 hour experiences. While these include additional amenities (flower baths, body scrubs, facility access), the core massage component often costs 30-50% more than equivalent home massage services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Hidden Costs to Consider</h3>
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold mb-2">Spa Visit Hidden Costs:</h4>
                            <ul className="space-y-2 text-muted-foreground">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>Transportation: 100,000-300,000 IDR ($7-20) for round-trip taxi/driver</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>Service charge: Many spas add 10-21% tax and service</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>Expected tips: 15-20% is customary at upscale venues</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                <span>Time value: 2-3 hours of vacation time spent on logistics</span>
                              </li>
                            </ul>
                          </div>
                          <div className="pt-4 border-t">
                            <h4 className="font-bold mb-2">Home Massage Hidden Costs:</h4>
                            <p className="text-muted-foreground">Minimal. Optional 10-15% tip if service exceeds expectations. That's it.</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Best Value Verdict</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      For pure massage quality per dollar, home massage delivers superior value. A 450,000 IDR ($30) home massage typically matches or exceeds the quality of 700,000 IDR ($46) spa massage, while eliminating transportation costs and saving 2+ hours of time.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Spas justify higher prices with facilities and ambiance. If you value flower baths, architectural beauty, and a "destination experience," premium spas are worth the extra cost. But if your priority is effective bodywork at fair pricing, home massage wins decisively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Convenience & Time */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Convenience & Time
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Travel Time to Spas</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Bali's traffic is notoriously unpredictable. A spa that's "15 minutes away" can easily take 45-60 minutes during peak hours (8-9 AM, 12-2 PM, 5-7 PM). From Ubud to nearby spas, budget 20-40 minutes each direction. From Canggu to Seminyak during rush hour? 45-75 minutes.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Add time for arranging transportation (finding taxi, waiting for Grab, coordinating with driver), arriving early for check-in, changing clothes, and post-treatment relaxation before traveling back. A 60-minute massage becomes a 3-4 hour commitment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Home Massage Scheduling</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Home massage eliminates all travel variables. Book online or via WhatsApp, often receiving same-day service. Most providers offer flexible scheduling from 9 AM to 9 PM. The therapist handles the commute while you relax at your villa.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Setup takes 5 minutes. Treatment happens in your chosen space. Cleanup takes 5 minutes. You're immediately free to shower in your own bathroom, nap in your own bed, or continue your day. Total time commitment: treatment duration plus 15 minutes. Learn more about <Link href="/home-massage/blog/how-to-book-home-massage-bali"><span className="text-primary hover:underline">booking home massage</span></Link>.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Winner: Convenience</h3>
                    <Card className="bg-primary/5 border-primary">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Award className="w-12 h-12 text-primary flex-shrink-0" />
                          <div>
                            <h4 className="text-xl font-bold mb-2">Home Massage Wins</h4>
                            <p className="text-muted-foreground">
                              For pure convenience and time efficiency, home massage is unbeatable. You save 2-3 hours per session, eliminate all travel stress, and maintain complete flexibility with your schedule. Perfect for busy vacations, families with kids, or anyone who values their time.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quality & Professionalism */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <Star className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Quality & Professionalism
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Home Massage Therapist Standards</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Reputable home massage services employ certified therapists with 2-10+ years of experience. Many have backgrounds working at Bali's top spas before transitioning to mobile work. Therapists typically specialize in multiple modalities: traditional Balinese, deep tissue, sports massage, aromatherapy, and reflexology.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Quality providers conduct thorough training, require certification proof, and maintain strict hygiene protocols. Equipment is professional-grade: sturdy tables, high-quality linens, premium oils. Since home massage therapists work independently or for selective services, they're highly motivated to deliver exceptional experiences—their reputation and tips depend on it.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Spa Therapist Quality</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Spa therapist quality varies dramatically. Luxury resort spas employ highly trained professionals with extensive experience. Mid-range spas offer mixed quality—some therapists are excellent, others mediocre. Budget spas often hire recently trained staff with limited experience.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      High-volume spas face challenges: overbooked therapists, rushed treatments, high turnover. Your assigned therapist may have performed six massages before yours, leading to fatigue and reduced pressure. Premium spas avoid this with reasonable scheduling, but at significantly higher prices.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Equipment & Products Used</h3>
                    <Card>
                      <CardContent className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold mb-3 text-primary">Home Massage</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• Professional portable tables (equal comfort to spa tables)</li>
                              <li>• Fresh, hotel-quality linens every session</li>
                              <li>• Premium aromatherapy oils (lavender, frangipani, lemongrass)</li>
                              <li>• Adjustable face cradles and bolsters</li>
                              <li>• Portable music speakers for ambiance</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold mb-3">Traditional Spa</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• Permanent treatment tables</li>
                              <li>• Linens changed between clients (usually)</li>
                              <li>• Quality varies by spa tier</li>
                              <li>• Fixed room ambiance and temperature</li>
                              <li>• Additional facilities (steam, pools, gardens)</li>
                            </ul>
                          </div>
                        </div>
                        <p className="mt-6 text-center text-muted-foreground italic">
                          Equipment quality is comparable. The massage itself depends primarily on therapist skill, not location.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy & Ambiance */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <Lock className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Privacy & Ambiance
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Your Villa vs Spa Environment</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Home massage offers absolute privacy. It's your space, your rules. Want to massage on your private pool deck at sunset? Done. Prefer your air-conditioned bedroom with blackout curtains? Perfect. Feel like a garden massage surrounded by your villa's tropical landscaping? Absolutely.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Spas provide carefully designed environments: soft lighting, water features, meditation music, incense. These spaces are beautiful and purpose-built for relaxation. However, you're sharing facilities with other guests. You might hear conversations from adjacent treatment rooms, smell someone else's chosen aromatherapy oil, or encounter other visitors in common areas.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Noise & Distractions</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      At home, you control the environment completely. Close the doors, silence your phone, ask staff not to disturb you. The only sounds are what you choose: nature, music, or silence. After your massage, there's no need to "return to reality"—you're already in your private retreat.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Spas can't offer the same control. Treatment rooms share walls. Guests arrive and depart constantly. Staff check schedules, coordinate bookings, handle phone calls. Even premium spas occasionally experience disruptions: maintenance work, nearby construction, or chatty guests in relaxation areas.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Customization Options</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      With home massage, customization is limitless. Choose your preferred oil scent, room temperature, music selection, and lighting level. Want complete silence? Request it. Prefer specific pressure on your lower back? Direct the therapist in real-time. Need to use the bathroom mid-session? It's 10 steps away.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Spas offer less flexibility. Room temperature is standardized for multiple guests. Music playlists are predetermined. Oil selections are limited to spa inventory. While therapists accommodate pressure preferences, the overall environment is designed for broad appeal rather than individual customization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Best For Different Scenarios */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Best For Different Scenarios
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Choose Home Massage If...</h3>
                    <Card className="border-primary">
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">You're on a short vacation (3-7 days)</h4>
                              <p className="text-sm text-muted-foreground">Every hour counts. Home massage saves 2-3 hours per session—more time for temples, beaches, and adventures.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">You're traveling with family or kids</h4>
                              <p className="text-sm text-muted-foreground">Parents can massage while kids nap or play safely nearby. No coordinating childcare or dragging tired children to spas.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">Privacy is a priority</h4>
                              <p className="text-sm text-muted-foreground">Your villa, your space, complete control. Ideal for couples, solo travelers who value solitude, or anyone uncomfortable in shared facilities.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">You want best value for money</h4>
                              <p className="text-sm text-muted-foreground">Superior quality-to-price ratio, no hidden costs, transparent pricing. See our <Link href="/pricing"><span className="text-primary hover:underline">pricing page</span></Link> for details.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">You hate traffic and logistics</h4>
                              <p className="text-sm text-muted-foreground">Zero transportation needed. Book online, therapist arrives, you relax. Simple.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">You want flexible timing</h4>
                              <p className="text-sm text-muted-foreground">Same-day booking, evening sessions, no need to arrive early or schedule days ahead.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">You're recovering from sunburn or fatigue</h4>
                              <p className="text-sm text-muted-foreground">Stay comfortable at your villa. No need to dress up, sit in cars, or exert any energy.</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Choose Spa If...</h3>
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Sparkles className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">You want multi-treatment spa day</h4>
                              <p className="text-sm text-muted-foreground">Combining massage with body scrubs, facials, flower baths, and hydrotherapy requires spa facilities.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Sparkles className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">You're celebrating a special occasion</h4>
                              <p className="text-sm text-muted-foreground">Honeymoons, anniversaries, birthdays—some people enjoy the "destination experience" of a luxury spa.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Sparkles className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">You value architectural beauty and design</h4>
                              <p className="text-sm text-muted-foreground">Bali's spas are stunning: bamboo structures, infinity pools, jungle views. If aesthetics matter more than efficiency, spas deliver.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Sparkles className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">You're staying in basic accommodation</h4>
                              <p className="text-sm text-muted-foreground">If your guesthouse lacks privacy or pleasant outdoor space, a spa provides a better environment.</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Sparkles className="w-6 h-6 text-secondary mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-bold mb-1">You want to explore beyond your villa</h4>
                              <p className="text-sm text-muted-foreground">Some travelers enjoy getting out and discovering new places. A spa visit can be part of your Bali exploration.</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">When to Do Both</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      There's no rule saying you must choose one exclusively. Many savvy travelers use both strategically: home massage for routine relaxation and recovery, spa visits for special occasions or full-day pampering experiences.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      A balanced approach might look like this: book 2-3 home massage sessions during your week in Bali for convenience and value, then splurge on one luxury spa day with multi-hour treatments and facilities access. You get the best of both worlds: efficiency when you need it, indulgence when you want it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Real Guests Say */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <Users className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    What Real Guests Say
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Home Massage Testimonials</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground italic mb-3">
                            "We had home massage three times during our week in Ubud. Best decision ever. The therapists were professional, the convenience was unbeatable, and we saved hours that we spent exploring instead. Highly recommend!"
                          </p>
                          <p className="text-sm font-semibold">— Rachel & Tom, Australia</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground italic mb-3">
                            "Traveling with two young kids, home massage was a lifesaver. Kids napped while we got couples massage on our villa terrace. Quality was excellent—better than the spa we visited the first day."
                          </p>
                          <p className="text-sm font-semibold">— Jennifer & Mark, USA</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Spa Visit Reviews</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground italic mb-3">
                            "The luxury spa experience in Ubud was incredible—gorgeous facilities, flower bath, amazing views. Perfect for our anniversary. But it took half the day with travel and we spent 3x what home massage costs."
                          </p>
                          <p className="text-sm font-semibold">— Sophie & David, UK</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex gap-1 mb-3">
                            {[...Array(3)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground italic mb-3">
                            "Mid-range spa was disappointing. Spent 90 minutes in traffic for mediocre massage. Therapist seemed rushed and tired. Wished we'd just done home massage like our friends recommended."
                          </p>
                          <p className="text-sm font-semibold">— Michael, Canada</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Comparison Insights</h3>
                    <Card className="bg-primary/5">
                      <CardContent className="p-6">
                        <p className="text-muted-foreground mb-4">
                          After analyzing hundreds of guest reviews across platforms (TripAdvisor, Google, booking sites), clear patterns emerge:
                        </p>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Home massage consistently scores 4.8-5.0 stars</strong> with praise for convenience, value, and quality</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Luxury spas average 4.5-4.8 stars</strong>, loved for ambiance but criticized for price and travel time</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Mid-range spas show wide variance (3.5-4.5 stars)</strong> due to inconsistent quality control</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Families overwhelmingly prefer home massage</strong> (92% satisfaction vs 67% for spa visits)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span><strong>Repeat bookings favor home massage</strong> (78% book again vs 45% return to same spa)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Verdict */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <Award className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Final Verdict & Recommendations
                  </h2>
                </div>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary">
                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground mb-6">
                      For most travelers, <strong>home massage delivers superior value, convenience, and satisfaction</strong>. It saves time, costs less, maintains quality, and offers complete privacy—winning on four of five key criteria. The only category where spas excel is providing elaborate facilities and a "destination experience."
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold mb-1">Best for 90% of visitors: Home Massage</h4>
                          <p className="text-sm text-muted-foreground">Families, couples, short vacations, value-seekers, privacy-conscious travelers, anyone who dislikes traffic</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold mb-1">Best for special occasions: Luxury Spa</h4>
                          <p className="text-sm text-muted-foreground">Honeymoons, anniversaries, once-in-lifetime Bali trip with unlimited budget</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold mb-1">Smartest approach: Strategic Mix</h4>
                          <p className="text-sm text-muted-foreground">Regular home massage for recovery and convenience + one luxury spa day for the experience</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground">
                      The overwhelming evidence—from pricing analysis, time comparisons, and guest testimonials—points to home massage as the optimal choice for most scenarios. It's not about spas being bad; they're wonderful. It's about home massage being <em>better</em> for the practical realities of vacation life.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Booking CTA */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <Home className="w-8 h-8 text-primary" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Book Your Bali Home Massage
                  </h2>
                </div>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-8">
                    <p className="text-lg mb-6">
                      Ready to experience the convenience and quality of professional home massage in Bali? We deliver certified therapists to your villa anywhere in Ubud, Seminyak, Canggu, and surrounding areas.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">Same-day booking available</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">Certified therapists only</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm">Transparent pricing</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" variant="secondary" asChild className="flex-1">
                        <Link href="/contact">
                          <Home className="w-5 h-5 mr-2" />
                          Book Home Massage Now
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" asChild className="flex-1 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        <Link href="/pricing">
                          View Pricing & Services
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-8 grid md:grid-cols-3 gap-4">
                  <Link href="/home-massage/services/balinese">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardContent className="p-6">
                        <h4 className="font-bold mb-2">Traditional Balinese</h4>
                        <p className="text-sm text-muted-foreground">Gentle, flowing strokes with acupressure</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/home-massage/services/deep-tissue">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardContent className="p-6">
                        <h4 className="font-bold mb-2">Deep Tissue</h4>
                        <p className="text-sm text-muted-foreground">Intense pressure for chronic tension</p>
                      </CardContent>
                    </Card>
                  </Link>
                  <Link href="/home-massage/services/couples">
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                      <CardContent className="p-6">
                        <h4 className="font-bold mb-2">Couples Massage</h4>
                        <p className="text-sm text-muted-foreground">Two therapists, side-by-side relaxation</p>
                      </CardContent>
                    </Card>
                  </Link>
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
