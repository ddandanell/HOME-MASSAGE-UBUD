import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, CheckCircle, AlertTriangle, Award, FileCheck, Users, Lock, AlertCircle, Clock, CreditCard } from 'lucide-react';
import TableOfContents from '@/components/home-massage/TableOfContents';
import SpiderLinksBlock from '@/components/home-massage/SpiderLinksBlock';
import HomeMassageFAQ from '@/components/home-massage/HomeMassageFAQ';
import SafetyStandards from '@/components/home-massage/SafetyStandards';
import BookingCTA from '@/components/home-massage/BookingCTA';

export default function IsHomeMassageSafe() {
  return (
    <>
      <SEOHead 
        title="Is Home Massage Safe | Home Massage"
        description="Learn about home massage safety standards and verification. Call or WhatsApp to book verified home massage therapists in Bali today."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">Safety & Trust</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Is Home Massage Safe?
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              The complete truth about home massage safety, verification, and how to protect yourself
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <TableOfContents items={[
        { id: 'direct-answer', label: 'The Direct Answer' },
        { id: 'what-makes-safe', label: 'What Makes Home Massage Safe' },
        { id: 'timing-tips', label: 'Best Times to Book' },
        { id: 'communication', label: 'What to Tell Providers' },
        { id: 'payment', label: 'Payment Information' },
        { id: 'preparation', label: 'Preparation Guide' },
        { id: 'troubleshooting', label: 'Troubleshooting Issues' }
      ]} />

      {/* Block 1: Direct Answer */}
      <section id="direct-answer" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              The Direct Answer: Is Home Massage Safe?
            </h2>
            <Card className="border-2 border-primary mb-8">
              <CardContent className="p-8">
                <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                  <strong>Yes, professional home massage is safe when you book through verified providers.</strong> Home massage safety depends entirely on choosing legitimate, professional home massage services that verify therapists, maintain standards, and operate transparently. Professional home massage can actually be safer than random spa visits because you know exactly who's coming, can verify credentials in advance, and control your environment completely.
                </p>
                <p className="text-lg text-muted-foreground">
                  However, not all home massage services are equal. Some operate professionally with full verification and safety protocols. Others cut corners. This guide teaches you how to identify safe home massage providers and protect yourself whether booking <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link>, <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue home massage</span></Link>, <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link>, or <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">relaxation home massage</span></Link> across <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, or <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>.
                </p>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                The safety question isn't "Is home massage safe?" but rather "How do I ensure my home massage is safe?" Understanding what makes home massage safe—and what red flags indicate unsafe providers—empowers you to book confidently. Professional home massage services operating with proper verification exceed typical spa safety standards dramatically.
              </p>
              <p className="text-lg text-muted-foreground">
                This matters particularly for solo travelers, women traveling alone, and anyone concerned about vulnerability during massage. Home massage done right provides transparency that traditional spas cannot match. Let's explore exactly what makes home massage safe and how to verify your provider meets professional standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: What Makes Home Massage Safe */}
      <section id="what-makes-safe" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Makes Professional Home Massage Safe
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <FileCheck className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">Verified Therapist Credentials</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Professional home massage services verify every therapist's training, licensing, and background. You know your therapist's name, experience, and qualifications before they arrive. This transparency is impossible with random spa walk-ins. Safe home massage companies maintain therapist databases with ID verification and certification documentation.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ask to see: ID, training certificates, massage license documentation. Professional home massage therapists carry these routinely.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">Clear Safety Protocols</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Safe home massage services establish clear boundaries, professional conduct rules, and client protection policies. Therapists understand informed consent, proper draping, and professional boundaries. Home massage companies provide emergency contacts and support systems. If anything feels wrong, you have immediate recourse.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Professional home massage includes: Clear pricing, transparent booking, emergency contacts, and complaint procedures.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <Users className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">Trackable Booking Systems</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Professional home massage services maintain digital records of every booking. They know which therapist is where, when, and with whom. This tracking protects both clients and therapists. If issues arise, complete documentation exists. Home massage companies operating safely use WhatsApp, booking platforms, or apps that create verifiable records.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Safe home massage booking creates: Written confirmation, therapist details, timing records, and contact trails.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <Lock className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">Your Environmental Control</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Home massage happens in your space—your villa, hotel room, or accommodation. You control locks, you're in familiar territory, and you can have friends nearby if desired. This environmental control makes home massage safer than isolated spa rooms where you don't know emergency exits, facility layout, or who's around. Professional home massage respects your space completely.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Home massage safety advantage: Familiar environment, controlled access, nearby support, and complete privacy control.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">Professional Reputation Systems</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Safe home massage services build reputations over time through reviews, repeat clients, and professional standing. They cannot operate with bad practices—word spreads instantly. Check reviews, ask for references, and verify longevity. Professional home massage companies in <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, and <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link> maintain visible, verifiable reputations.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Research home massage providers: Check Google reviews, social media presence, how long they've operated, and client testimonials.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <h3 className="text-xl font-semibold">Insurance and Legal Operations</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Professional home massage services operate legally with proper business registration, insurance coverage, and regulatory compliance. They pay taxes, follow local laws, and maintain professional standards. This legal operation protects you—if something goes wrong, you have recourse. Legitimate home massage companies want you protected as much as you do.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ask about: Business registration, liability insurance, therapist certification requirements, and legal compliance standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Timing Tips for Home Massage Booking */}
      <section id="timing-tips" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Timing Tips: Best Times to Book Home Massage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">When to Book Your Home Massage</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-primary">Morning (7am-11am)</p>
                      <p className="text-sm">Perfect for energizing before your day. <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link> refreshes you for exploring.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Afternoon (1pm-4pm)</p>
                      <p className="text-sm">Midday home massage break revitalizes tired travelers. <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep tissue home massage</span></Link> works flight stiffness.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Evening (5pm-9pm)</p>
                      <p className="text-sm">Popular home massage time. <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">Relaxation home massage</span></Link> before dinner transition.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Late Evening (9pm-11pm)</p>
                      <p className="text-sm">Sleep-promoting home massage. Perfect end-of-vacation treatment before flights.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Home Massage Booking Timeline</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-primary">Same-Day Home Massage</p>
                      <p className="text-sm">Book 2-4 hours in advance. Most home massage requests accommodate same-day appointments.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Next-Day Home Massage</p>
                      <p className="text-sm">Book by evening for next-day home massage. Guaranteed availability for popular times.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Multiple Visits</p>
                      <p className="text-sm">For <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link> or repeat visits, book 1-2 days ahead during peak season.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Advance Planning</p>
                      <p className="text-sm">Planning vacation? Email or message home massage details weeks ahead—luxury confirmation included.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: What to Communicate When Booking Home Massage */}
      <section id="communication" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Communication Guide: What to Tell Home Massage Providers
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Essential Information for Home Massage Booking</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Required Details</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Your accurate booking location</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Preferred date and time for home massage</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Home massage duration (60 or 90 minutes)</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Contact phone number for home massage confirmation</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Helpful Details</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Pressure preference (light, moderate, firm)</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Problem areas (neck, back, legs, etc.)</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Injuries or medical concerns for home massage</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Therapist gender preference (if any)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Service-Specific Information for Home Massage</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-primary mb-2"><Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese Home Massage</span></Link> Booking</p>
                      <p className="text-sm text-muted-foreground">Mention if you prefer traditional pace and energy focus. Note any aromatherapy preferences.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-primary mb-2"><Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep Tissue Home Massage</span></Link> Booking</p>
                      <p className="text-sm text-muted-foreground">Clearly specify problem areas and pressure tolerance. Mention any pain levels that need attention.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-primary mb-2"><Link href="/home-massage/services/couples"><span className="text-primary hover:underline">Couples Home Massage</span></Link> Booking</p>
                      <p className="text-sm text-muted-foreground">Note if you want adjacent rooms or same-space setup. Communicate if partners have different pressure preferences.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-primary mb-2"><Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">Relaxation Home Massage</span></Link> Booking</p>
                      <p className="text-sm text-muted-foreground">Mention if you want meditation-like atmosphere. Note music or silence preferences for home massage.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: Payment Information and Methods */}
      <section id="payment" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Home Massage Payment Information
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Understanding home massage pricing and payment prevents confusion and ensures smooth transactions. Professional home massage services maintain transparent, straightforward payment processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Typical Home Massage Pricing</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">60-minute home massage</span>
                      <span className="font-semibold">Rp 320,000-450,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">90-minute home massage</span>
                      <span className="font-semibold">Rp 450,000-700,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Couples home massage (60 min)</span>
                      <span className="font-semibold">Rp 550,000-760,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Early morning home massage (7am)</span>
                      <span className="font-semibold">+Rp 50,000</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    * Pricing varies by service type and location. Always confirm during home massage booking.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Home Massage Payment Methods</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-primary mb-2">💵 Cash Payment (Preferred)</p>
                      <p className="text-sm text-muted-foreground">Indonesian Rupiah cash is most convenient for home massage therapists. Pay at end of session. No transaction fees. Therapist brings home massage oils, not card readers.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">🏦 Bank Transfer</p>
                      <p className="text-sm text-muted-foreground">Can be arranged pre-booking for home massage. Discuss during WhatsApp coordination. Transfer details provided for secure home massage payment.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">💳 E-wallets</p>
                      <p className="text-sm text-muted-foreground">GCash, OVO, Dana availability varies. Confirm during home massage booking if specific payment method needed.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What's Included in Home Massage Price</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-primary mb-3">✓ Always Included</p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>✓ Professional therapist time</li>
                      <li>✓ All oils and equipment</li>
                      <li>✓ Transportation (therapist brings everything)</li>
                      <li>✓ Full agreed duration</li>
                      <li>✓ Professional-grade service</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-3">✗ Never Included (Not Required)</p>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>✗ Tips (entirely optional)</li>
                      <li>✗ Extra services not discussed</li>
                      <li>✗ Upsells or add-ons</li>
                      <li>✗ Cancellation fees (discuss policy)</li>
                      <li>✗ Travel surcharges (already included)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Block 6: Special Preparation for Home Massage Booking */}
      <section id="preparation" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What to Prepare: Complete Home Massage Preparation Guide
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Proper preparation maximizes your home massage experience. Our <Link href="/home-massage/knowledge/what-to-expect"><span className="text-primary hover:underline">what to expect guide</span></Link> details comprehensive preparation, but here's the home massage booking preparation essentials.
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Space Preparation for Home Massage</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Clear home massage area of clutter</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Provide firm surface for home massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Have clean towels for home massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Ensure bathroom access for home massage setup</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Physical Preparation (Pre-Booking)</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Shower/bathe before home massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Drink plenty of water before home massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Avoid heavy meals 1-2 hours before home massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Wear comfortable, easy-remove clothing for home massage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Administrative Preparation</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Have payment ready (cash or transfer confirmed)</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Set phone to silent during home massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Alert hotel reception about home massage arrival</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Note any health concerns for therapist discussion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 7: Troubleshooting Common Home Massage Booking Issues */}
      <section id="troubleshooting" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Troubleshooting: Common Home Massage Booking Issues
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "I want home massage but therapist isn't available at my preferred time"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Home massage therapists often have flexibility. Try alternative times. Morning instead of evening? Or shift your booking forward/back a day. Professional home massage coordinators work around your schedule when possible. Also ask about waitlist options—cancellations happen frequently.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "I'm not sure which home massage type to book"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Contact coordinators during booking! Describe your needs. <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link> for relaxation? <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep tissue</span></Link> for tension? <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">Couples</span></Link> together? <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">Relaxation</span></Link> pure escape? Professional consultants recommend the perfect home massage match.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "Home massage is booked but I need to reschedule"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Contact home massage provider immediately via WhatsApp. Most professional services offer flexible rescheduling. Provide plenty of notice (24+ hours recommended). Cancellation policies exist but are typically forgiving for legitimate changes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "Therapist hasn't arrived by appointment time for home massage"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Wait 10-15 minutes (Bali traffic happens). Contact home massage provider via WhatsApp/phone immediately. Professional services track therapists and provide ETA updates. Confirm the correct location and any gate/access codes you may have omitted. Delays are rare with reputable home massage companies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "I'm uncomfortable with something during my home massage"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Stop the home massage immediately and communicate clearly. Professional therapists welcome feedback. Adjust pressure? Take a break? Skip an area? Change position? All home massage adjustments are welcome. If you're truly uncomfortable, end the session—most services refund or reschedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "I have a medical condition affecting home massage"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Inform the home massage provider during booking! Pregnancy? Injury? Heart condition? Allergies? Professional therapists adapt home massage accordingly. Some conditions prevent certain home massage types, but most adapt treatments. Full transparency ensures your safety and best home massage experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "Can I book home massage in my city location?"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Professional home massage serves <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, and <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link> and surrounding areas. Ask during booking if your specific location is covered. Most areas within major tourist zones are served by professional home massage networks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 8: Final Pre-Booking Checklist */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Your Home Massage Booking Checklist
            </h2>
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-primary">Before Booking Home Massage</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Choose your home massage type (Balinese, deep tissue, couples, relaxation)</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Confirm your accommodation location</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Identify preferred home massage dates/times</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Note any health concerns or special requests</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Have WhatsApp ready for booking contact</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-primary">During Home Massage Booking</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Confirm all home massage details verbally</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Ask about exact home massage pricing</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Clarify payment method and timing</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Get therapist name and contact details</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Understand cancellation policy</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-primary">Day Before Home Massage</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Confirm appointment via text message</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Start hydrating for home massage</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Read what to expect guide details</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Prepare massage area location</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Alert hotel reception about arrival</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-primary">Day of Home Massage</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Have payment ready (cash/confirmation)</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Shower and prepare physically</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Set phone to silent mode</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Clear massage area and set temperature</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Relax and enjoy your home massage!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <SafetyStandards />

      {/* Spider Links Block */}
      <SpiderLinksBlock currentPage="/home-massage/blog/is-home-massage-safe" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <HomeMassageFAQ items={[
        {
          question: "Is home massage safe?",
          answer: "Yes, professional home massage is safe when you book through verified providers. Home massage safety depends on choosing legitimate services that verify therapists, maintain standards, and operate transparently. Professional home massage can actually be safer than random spa visits because you know exactly who's coming and can verify credentials in advance."
        },
        {
          question: "How do I verify my home massage therapist is legitimate?",
          answer: "Professional home massage services provide therapist names, credentials, and profiles before arrival. Ask to see ID, training certificates, and massage license documentation. Reputable home massage companies maintain therapist databases with background verification. Check reviews, ask for references, and verify the company's longevity in the market."
        },
        {
          question: "What safety precautions should I take when booking home massage?",
          answer: "Book through established home massage companies with verifiable reputations. Get written confirmation with therapist details. Ensure your accommodation knows about the appointment. Keep your phone accessible. Trust your instincts—if anything feels wrong, end the session immediately. Professional home massage therapists expect and respect these precautions."
        },
        {
          question: "Can I request a specific gender therapist for home massage?",
          answer: "Yes. Professional home massage services accommodate gender preferences. Simply specify your preference when booking. This is standard practice and ensures your complete comfort during treatment. Both male and female home massage therapists maintain identical professional standards and qualifications."
        },
        {
          question: "What if I'm uncomfortable during my home massage?",
          answer: "Speak up immediately. Professional home massage therapists welcome feedback and adjust treatment accordingly. You can request pressure changes, skip areas, take breaks, or end the session entirely. Reputable home massage companies support client comfort completely and typically offer refunds or rescheduling if you're genuinely uncomfortable."
        },
        {
          question: "Are home massage therapists properly trained and licensed?",
          answer: "Professional home massage services require identical qualifications as spa therapists—certified training, licensing, and proven experience. Licensed practitioners deliver Balinese home massage, deep tissue home massage, and other modalities with verified expertise. Reputable home massage companies maintain rigorous therapist verification that often exceeds typical spa standards."
        }
      ]} />
        </main>
        <Footer />
      </div>
    </>
  );
}
