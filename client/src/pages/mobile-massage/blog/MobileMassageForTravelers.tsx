import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, MapPin, Clock, Heart, Shield, TrendingUp } from 'lucide-react';
import MobileMassageFAQ from '@/components/mobile-massage/MobileMassageFAQ';

export default function WhyTouristsPreferHomeMassage() {
  return (
    <>
      <SEOHead 
        title="Why Tourists Prefer Mobile Massage | Convenience, Safety & Privacy"
        description="Discover why tourists choose mobile massage over spas. Learn about convenience, safety, privacy benefits, and cost savings. Real traveler testimonials explain the mobile massage preference."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">Traveler Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Tourists Prefer Mobile Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              The real reasons why more travelers choose mobile massage over traditional spa experiences
            </p>
          </div>
        </div>
      </section>

      {/* Block 1: Tourist Pain Points with Spas */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Spa Problem: Tourist Pain Points
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Millions of tourists visit Bali annually seeking relaxation. Yet many leave disappointed by traditional spa experiences. The problems are consistent, predictable, and entirely avoidable through professional mobile massage services.
              </p>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">❌ Spa Pain Point: Getting There</h3>
                  <p className="text-muted-foreground mb-3">
                    After hours of travel, you're exhausted. The last thing you need is negotiating transportation, dodging traffic, or searching for an unfamiliar spa location. Yet traditional spa experiences require precisely this effort. Home massage eliminates transportation entirely—therapy arrives at your villa or hotel. Whether seeking <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link> or <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link>, no mobile massage transportation means you save energy for actual relaxation.
                  </p>
                  <p className="text-muted-foreground">
                    This applies across all Bali cities—from <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud's rural locations</span></Link> to <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu's bustling beaches</span></Link>, <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak's resort areas</span></Link>, and <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur's quieter zones</span></Link>. Home massage solves the transportation problem everywhere.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">❌ Spa Pain Point: Waiting and Delays</h3>
                  <p className="text-muted-foreground mb-3">
                    You arrive at a spa, only to discover your appointment is running 30 minutes behind. Or the therapist they assign isn't what you expected. Or you're forced to wait uncomfortably while your appointment time slips away. Home massage eliminates these delays. Your therapist arrives at your scheduled time, ready to begin immediately. No waiting rooms. No scheduling conflicts. No uncertainty.
                  </p>
                  <p className="text-muted-foreground">
                    Professional <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue mobile massage</span></Link> and <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">couples mobile massage</span></Link> can be reliably scheduled exactly when you need them through mobile massage booking. Vacation time is precious—why waste it waiting?
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">❌ Spa Pain Point: Unknown Therapists and Quality</h3>
                  <p className="text-muted-foreground mb-3">
                    You walk into a random spa with zero information about the therapist. Have they been trained properly? Are they actually licensed? How do you know you're getting quality service? Traditional spas offer minimal transparency. Home massage changes everything—you know your therapist in advance. Read profiles, experience, qualifications. Book with confidence.
                  </p>
                  <p className="text-muted-foreground">
                    Our <Link href="/mobile-massage/knowledge/safety"><span className="text-primary hover:underline">safety standards</span></Link> explain how professional mobile massage companies verify therapists thoroughly. This transparency is impossible with random spas, making professional mobile massage the smart choice for quality-conscious travelers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">❌ Spa Pain Point: Pressure for Expensive Upgrades</h3>
                  <p className="text-muted-foreground mb-3">
                    You book a basic massage, but during the appointment they aggressively suggest expensive add-ons. Tired and vulnerable during treatment, many tourists agree to expensive upgrades they didn't want. Home massage eliminates this pressure completely. You agree on price, duration, and service beforehand. No surprise costs. No mid-massage sales pitches. Home massage pricing is transparent and fixed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">❌ Spa Pain Point: Uncomfortable Environments</h3>
                  <p className="text-muted-foreground mb-3">
                    Spas sometimes feel institutional, cold, or unprofessional. Uncomfortable furniture, questionable hygiene, or unfamiliar energy make it hard to relax. Your mobile massage environment is your villa or hotel room—already comfortable and familiar. You control temperature, lighting, and atmosphere. Professional mobile massage therapy happens in spaces that feel welcoming from the start.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">❌ Spa Pain Point: Safety and Boundary Concerns</h3>
                  <p className="text-muted-foreground mb-3">
                    Particularly for solo travelers and women, spas can feel sketchy. Unclear safety standards. Vague professional boundaries. Isolated locations. Home massage services operate with verifiable safety protocols. Professional therapists understand boundaries. You're in control. Discover why <Link href="/mobile-massage/knowledge/safety"><span className="text-primary hover:underline">professional mobile massage exceeds random spa safety</span></Link> standards dramatically.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Convenience Factors */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Convenience Factor: Why Mobile Massage Wins
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">Zero Travel Time</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Your mobile massage therapist comes to you. No traffic. No navigation. No time wasted. Book <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link> at your villa, and the therapist arrives ready to work. This sounds simple but transforms your vacation experience dramatically.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Estimated time saved: 45-60 minutes per appointment vs traditional spa experiences
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">Location Flexibility</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Your mobile massage happens wherever you're staying. <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud villa</span></Link>? <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu hotel room</span></Link>? <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak resort</span></Link>? <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur beach accommodation</span></Link>? Professional mobile massage adapts to your location. Want <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">couples mobile massage</span></Link> right where you're staying? Done.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Home massage available anywhere in major Bali destinations
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">Flexible Scheduling</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Spas operate on rigid schedules. Home massage accommodates your schedule. Early morning? Late evening? Home massage times work around your plans. <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep tissue mobile massage</span></Link> before a big day out? <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">Relaxation mobile massage</span></Link> before bed? Professional mobile massage therapists work around your vacation needs.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Home massage appointments available 7am-11pm in most areas
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <Heart className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">Post-Massage Recovery</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    After a great massage, you want to relax, not travel. Home massage means you recover right in your comfortable space. No need to travel while drowsy. No rush to leave the massage environment. <Link href="/mobile-massage/knowledge/what-to-expect"><span className="text-primary hover:underline">Our what to expect guide</span></Link> details proper post-massage recovery—it's much better when you're already home.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Maximize mobile massage benefits through immediate relaxation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <Users className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">Partner Integration</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    If traveling with someone, mobile massage keeps you together. <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">Couples mobile massage</span></Link> is perfect for synced relaxation, but even individual <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link> or <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link> can happen simultaneously in the same villa. No split schedule—mobile massage together.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">No Plan Changes</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Home massage fits naturally into your plans. Decide to visit a temple? Change your timing—mobile massage still works. Last-minute dinner reservations? Home massage reschedules easily. Traditional spas demand commitment to their schedule. Professional mobile massage adapts to your vacation reality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Privacy Benefits */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Privacy Benefits: Why Mobile Massage Feels Better
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Privacy isn't just nice—it's fundamental to relaxation. Professional mobile massage delivers complete privacy that spas simply cannot match. Here's why this matters for your massage experience.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">No Shared Spaces</h3>
                  <p className="text-muted-foreground">
                    Spas mean other clients, staff passing by, shared waiting areas. Home massage happens only with you and your therapist. No strangers. No noise from adjacent massage rooms. No shared energy. Whether receiving <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue mobile massage</span></Link> or <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link>, this solitude deepens relaxation scientifically.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Body Comfort and Security</h3>
                  <p className="text-muted-foreground">
                    Undressing around strangers, changing in public areas, draping concerns—mobile massage eliminates all this. You're in your personal space. Familiar and secure. This psychological ease accelerates relaxation. Many first-time mobile massage clients report they're more relaxed immediately, knowing they're in their own space receiving professional treatment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Solo Traveler Safety and Comfort</h3>
                  <p className="text-muted-foreground">
                    Solo travelers, especially women, often feel uncomfortable in unfamiliar spas. Home massage reverses this. You're in control. You're in familiar space. A trusted friend can be nearby if desired. Professional <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">couples mobile massage</span></Link> or individual <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link> both benefit from this privacy advantage. Learn more about <Link href="/mobile-massage/knowledge/safety"><span className="text-primary hover:underline">safety standards</span></Link> that protect mobile massage clients.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Emotional Processing Space</h3>
                  <p className="text-muted-foreground">
                    Sometimes massage releases emotions—tears, laughter, or just vulnerability. Public spa environments make this awkward. Home massage provides safe space for emotional response. You're not performing relaxation for others. You're genuinely relaxing. Home massage creates space for authentic healing responses that benefit your entire vacation experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Customized Environment</h3>
                  <p className="text-muted-foreground">
                    Your mobile massage happens in an environment you've designed. Want soft music? Set it. Prefer silence? Home massage accommodates. Temperature, lighting, aromatics—all under your control. No spa tries to customize for individual clients. Home massage naturally adapts to your specific comfort needs across <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, and <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: Cost Comparison and Value */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Cost Comparison: Mobile Massage Value Proposition
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Tourist budgets are limited. Every rupiah matters. Yet many tourists overpay for spas offering mediocre service. Professional mobile massage delivers superior value through transparent pricing and eliminated overhead.
              </p>
            </div>

            <Card className="bg-primary/5 border-2 border-primary mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Typical Pricing Comparison (60-minute massage)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <div>
                      <p className="font-semibold">Random Tourist Spa</p>
                      <p className="text-sm text-muted-foreground">Plus transportation, wait time, pressure for upgrades</p>
                    </div>
                    <p className="text-lg font-bold">Rp 600,000-800,000+</p>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b">
                    <div>
                      <p className="font-semibold">Professional Mobile Massage</p>
                      <p className="text-sm text-muted-foreground">Complete, no hidden costs, verified therapist</p>
                    </div>
                    <p className="text-lg font-bold text-primary">Rp 300,000-450,000</p>
                  </div>
                  <div className="flex justify-between items-center pt-3 bg-primary/10 px-4 py-3 rounded">
                    <p className="font-semibold">Average Savings with Mobile Massage</p>
                    <p className="text-lg font-bold text-primary">50-60% Less</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Hidden Spa Costs</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Transportation to spa (taxi, grab, etc.)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Upgrade pressure (facial, aromatherapy, etc.)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Time cost (travel + wait = 45+ minutes lost)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Facility fees built into massage cost</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Expected gratuity on inflated prices</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-red-600">✗</span>
                      <span>Quality uncertainty and regret</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Mobile Massage Transparent Value</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Fixed, all-inclusive pricing disclosed upfront</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>No pressure for add-ons or upgrades</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Zero travel time means more vacation time</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Therapist costs directly to you (no middleman)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Tips optional and based on real appreciation</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Quality guaranteed through verified profiles</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-3">
                  Many tourists spend 3-5 vacation days receiving spa treatments. At typical spa rates (Rp 700,000 × 4 visits), that's Rp 2,800,000+. Professional <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link>, <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue mobile massage</span></Link>, and <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link> at mobile massage prices totals closer to Rp 1,400,000—literally half price for better experience.
                </p>
                <p className="text-primary font-semibold">
                  This is why smart travelers choose professional mobile massage. Better value, better privacy, better control.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Block 5: Testimonial Stories */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Travelers Say About Mobile Massage
            </h2>
            <div className="space-y-6">
              <Card className="border-l-4 border-primary">
                <CardContent className="p-6">
                  <p className="text-lg mb-3">
                    "I was nervous booking a mobile massage from a random website, but it was the best decision. The therapist arrived on time, super professional, and I got a better treatment than my first spa visit for literally half the price. I booked her again three times."
                  </p>
                  <div>
                    <p className="font-semibold">— Sarah, Australia</p>
                    <p className="text-sm text-muted-foreground"><Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak mobile massage</span></Link> × 4 visits</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary">
                <CardContent className="p-6">
                  <p className="text-lg mb-3">
                    "As a solo female traveler, I was honestly scared going to spas alone. Home massage felt so much safer. The therapist was female, I knew her name before she came, and I could relax completely. Worth every rupiah for the peace of mind."
                  </p>
                  <div>
                    <p className="font-semibold">— Jessica, USA</p>
                    <p className="text-sm text-muted-foreground"><Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud mobile massage</span></Link> - Deep tissue</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary">
                <CardContent className="p-6">
                  <p className="text-lg mb-3">
                    "My wife and I did couples massage at our villa. It was romantic, relaxing, and we didn't have to drag ourselves to a spa. The therapists were amazing. Honestly, this should be standard for every couple's vacation."
                  </p>
                  <div>
                    <p className="font-semibold">— Michael, Canada</p>
                    <p className="text-sm text-muted-foreground"><Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu mobile massage</span></Link> - <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">Couples</span></Link></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary">
                <CardContent className="p-6">
                  <p className="text-lg mb-3">
                    "I had severe shoulder tension from my flight. Deep tissue at a spa was painful but ineffective. Home massage therapist was so much better—she adjusted pressure based on my feedback and actually fixed the problem. I left Bali pain-free."
                  </p>
                  <div>
                    <p className="font-semibold">— David, UK</p>
                    <p className="text-sm text-muted-foreground"><Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur mobile massage</span></Link> - <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep tissue</span></Link></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary">
                <CardContent className="p-6">
                  <p className="text-lg mb-3">
                    "The therapist came to my villa at 7am before my flight. This would be impossible at a spa. Home massage saved my entire last day—I was completely relaxed at the airport instead of stressed. Genius service."
                  </p>
                  <div>
                    <p className="font-semibold">— Emma, Germany</p>
                    <p className="text-sm text-muted-foreground"><Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud mobile massage</span></Link> - <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">Relaxation</span></Link></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-primary">
                <CardContent className="p-6">
                  <p className="text-lg mb-3">
                    "I have mobility issues from my knees. I couldn't walk to a spa, but mobile massage came to me. Professional, kind, and she understood my limitations perfectly. First time getting a proper massage in years."
                  </p>
                  <div>
                    <p className="font-semibold">— Robert, Netherlands</p>
                    <p className="text-sm text-muted-foreground"><Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak mobile massage</span></Link> - <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese</span></Link></p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 6: Why Specific Tourist Types Choose Mobile Massage */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Which Tourists Benefit Most from Mobile Massage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">✓ Solo Female Travelers</h3>
                  <p className="text-muted-foreground mb-3">
                    Safety concerns + desire for relaxation = mobile massage preference. Known therapist identity, verified credentials, controlled environment, backup support nearby if needed. Professional mobile massage services cater specifically to solo traveler needs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">✓ Luxury Resort Guests</h3>
                  <p className="text-muted-foreground mb-3">
                    Why leave your high-end villa? Professional mobile massage brings spa quality to your resort. <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">Couples mobile massage</span></Link> in your private villa beats any spa outing. Matches your resort investment level.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">✓ Budget-Conscious Travelers</h3>
                  <p className="text-muted-foreground mb-3">
                    Better quality at half price. Professional mobile massage delivers high-quality <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese</span></Link>, <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue</span></Link>, and <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link> with zero markup. Every rupiah goes to actual therapist quality.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">✓ Couples on Romantic Getaway</h3>
                  <p className="text-muted-foreground mb-3">
                    <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">Couples mobile massage</span></Link> at your villa = shared relaxation + romantic environment + no schedule stress. Perfect for honeymoons and anniversaries across <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">✓ Travelers with Mobility Issues</h3>
                  <p className="text-muted-foreground mb-3">
                    Professional mobile massage eliminates travel barriers. Wheelchair users, anyone with pain during transit, or mobility concerns—mobile massage removes entire transportation obstacle. Therapy comes to you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">✓ Anxiety-Prone Travelers</h3>
                  <p className="text-muted-foreground mb-3">
                    Unknown spas trigger anxiety for many. Home massage provides comfort: known therapist, familiar environment, complete privacy. Detailed <Link href="/mobile-massage/knowledge/what-to-expect"><span className="text-primary hover:underline">what to expect guide</span></Link> removes uncertainty. Perfect for anxious travelers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">✓ Parents Traveling with Kids</h3>
                  <p className="text-muted-foreground mb-3">
                    Home massage happens with kids nearby—no childcare coordination needed. <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">Relaxation mobile massage</span></Link> while partner watches kids. Equal relaxation for both parents.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">✓ Business Travelers Stressed</h3>
                  <p className="text-muted-foreground mb-3">
                    Work trips are exhausting. <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep tissue mobile massage</span></Link> at your hotel means zero effort to relax. Book before breakfast, be refreshed by meetings. Home massage solves business traveler stress.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <MobileMassageFAQ items={[
        {
          question: "Why do solo travelers prefer mobile massage over spa visits?",
          answer: "Solo travelers choose mobile massage for safety, privacy, and therapist verification advantages unavailable at random spas. Mobile massage provides complete control over environment and timing, with verified professional credentials eliminating safety concerns. The mobile massage experience offers comfort and security that solo travelers value highly, especially women traveling alone in Bali."
        },
        {
          question: "How does mobile massage benefit couples on vacation?",
          answer: "Couples mobile massage creates shared relaxation experiences in private villa spaces, strengthening vacation bonding while both partners receive synchronized professional treatment. Mobile massage for couples eliminates separate spa bookings and provides intimate, personalized sessions impossible in public facilities. The mobile massage convenience means more quality time together without transportation logistics."
        },
        {
          question: "What makes mobile massage ideal for families traveling with children?",
          answer: "Families prefer mobile massage because parents can relax while children remain safely in the villa under supervision. Mobile massage eliminates childcare coordination challenges that make spa visits difficult for parents. The mobile massage flexibility allows treatment during nap times or quiet moments, maximizing family vacation enjoyment without complicated arrangements."
        },
        {
          question: "Why do luxury travelers choose mobile massage?",
          answer: "Luxury travelers select mobile massage to maximize their high-end villa investment—professional spa services arrive at their accommodation rather than requiring them to leave. Mobile massage aligns with luxury travel expectations for convenience, privacy, and personalized service. The mobile massage experience complements premium accommodations across Ubud, Seminyak, Canggu, and Sanur resort areas."
        },
        {
          question: "How does mobile massage solve budget travelers' needs?",
          answer: "Budget travelers choose mobile massage because it delivers professional-quality treatments at 40-60% lower cost than equivalent spa services. Mobile massage eliminates facility overhead while maintaining therapist expertise and treatment quality. The mobile massage value proposition means travelers can afford more frequent sessions, enhancing their Bali wellness experience without overspending."
        },
        {
          question: "What traveler problems does mobile massage uniquely solve?",
          answer: "Mobile massage solves transportation stress, scheduling conflicts, safety concerns, privacy issues, cost inflation, and recovery environment challenges that plague traditional spa experiences. Tourists booking mobile massage avoid commute time, enjoy flexible scheduling, verify therapist credentials, control their environment, pay transparent prices, and recover immediately in comfortable spaces. The mobile massage model addresses every major tourist complaint about traditional spa services."
        }
      ]} />

      {/* Block 7: Soft CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Thousands of Tourists Choosing Mobile Massage
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the convenience, privacy, and value that make professional mobile massage the traveler's choice
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Your Mobile Massage Today
                </a>
              </Button>
            </div>

            <div className="border-t pt-12">
              <h3 className="text-2xl font-semibold mb-8">Explore Mobile Massage Services</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold mb-4 text-lg">Mobile Massage Services:</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/mobile-massage/services/balinese">Balinese Mobile Massage</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/mobile-massage/services/deep-tissue">Deep Tissue Mobile Massage</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/mobile-massage/services/couples">Couples Mobile Massage</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/mobile-massage/services/relaxation">Relaxation Mobile Massage</Link>
                    </Button>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-lg">Mobile Massage by Location:</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/mobile-massage/cities/ubud">Mobile Massage in Ubud</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/mobile-massage/cities/canggu">Mobile Massage in Canggu</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/mobile-massage/cities/seminyak">Mobile Massage in Seminyak</Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link href="/mobile-massage/cities/sanur">Mobile Massage in Sanur</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-lg">Learn More About Mobile Massage:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/what-is-mobile-massage">What is Mobile Massage?</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/knowledge/what-to-expect">What to Expect</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/knowledge/safety">Safety Standards</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/how-to-book-mobile-massage">How to Book</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage">Mobile Massage Hub</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage">Back to Mobile Massage</Link>
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
