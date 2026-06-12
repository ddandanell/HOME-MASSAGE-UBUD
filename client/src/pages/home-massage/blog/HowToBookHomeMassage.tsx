import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Phone, CreditCard, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import TableOfContents from '@/components/home-massage/TableOfContents';
import SpiderLinksBlock from '@/components/home-massage/SpiderLinksBlock';
import HomeMassageFAQ from '@/components/home-massage/HomeMassageFAQ';
import SafetyStandards from '@/components/home-massage/SafetyStandards';
import BookingCTA from '@/components/home-massage/BookingCTA';

export default function HowToBookHomeMassage() {
  return (
    <>
      <SEOHead 
        title="How to Book Home Massage | Home Massage"
        description="Step-by-step guide to booking home massage. Call or WhatsApp to book professional home massage in Bali today."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">Booking Made Simple</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How to Book Home Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Complete guide to booking professional home massage easily and confidently
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <TableOfContents items={[
        { id: 'why-matters', label: 'Why Proper Booking Matters' },
        { id: 'step-by-step', label: 'Booking Process Step by Step' },
        { id: 'timing', label: 'Best Times to Book' },
        { id: 'communication', label: 'What to Communicate' },
        { id: 'payment', label: 'Payment Methods' },
        { id: 'preparation', label: 'Pre-Booking Preparation' },
        { id: 'troubleshooting', label: 'Common Issues' }
      ]} />

      {/* Block 1: Why Proper Home Massage Booking Matters */}
      <section id="why-matters" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Proper Home Massage Booking Matters
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Home massage booking is straightforward, but understanding the process ensures a perfect experience. Whether you're booking <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link>, <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue home massage</span></Link>, <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link>, or <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">relaxation home massage</span></Link>, knowing what to expect eliminates uncertainty.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Proper home massage booking ensures your therapist has correct details, you're prepared for their arrival, and everything runs smoothly. This guide walks through home massage booking step-by-step, from initial contact through final confirmation. No surprises. Just professional, reliable home massage service.
              </p>
              <p className="text-lg text-muted-foreground">
                Home massage booking works the same way across <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, and <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>. Professional home massage services maintain identical processes regardless of location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Step-by-Step Home Massage Booking Process */}
      <section id="step-by-step" className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Home Massage Booking Process: Step by Step
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <h3 className="text-2xl font-semibold">Choose Your Home Massage Type</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  First, decide which home massage suits your needs. Are you looking for <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese home massage</span></Link> for cultural relaxation? <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep tissue home massage</span></Link> for muscle tension? <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">Couples home massage</span></Link> for shared relaxation? Or <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">relaxation home massage</span></Link> for pure vacation restoration?
                </p>
                <p className="text-muted-foreground">
                  Our service pages explain each home massage type, helping you choose. Unsure? Contact us—professional home massage consultants help narrow down your perfect match.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <h3 className="text-2xl font-semibold">Select Your Location for Home Massage</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Professional home massage is available across major Bali locations. Where are you staying? <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Home massage in Ubud</span></Link>, <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, or <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>? Home massage serves all these areas with identical professional standards.
                </p>
                <p className="text-muted-foreground">
                  Your home massage therapist comes to your villa, hotel, or accommodation. Just provide your location when booking home massage—they'll find you.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <h3 className="text-2xl font-semibold">Contact via WhatsApp for Home Massage Booking</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  WhatsApp is the preferred home massage contact method. Send a message with:
                </p>
                <div className="bg-primary/5 p-4 rounded mb-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Type of home massage (Balinese, deep tissue, couples, relaxation)</li>
                    <li>• Your location (Ubud, Canggu, Seminyak, Sanur)</li>
                    <li>• Preferred date and time for home massage</li>
                    <li>• Duration (typically 60 or 90 minutes)</li>
                    <li>• Any special requests or pressure preferences</li>
                    <li>• Your phone number for home massage confirmation</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  Professional home massage coordinators respond within minutes, confirming availability and home massage pricing.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <h3 className="text-2xl font-semibold">Confirm Home Massage Details</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  The home massage coordinator will confirm:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3">Session Details for Home Massage</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Your home massage type</li>
                        <li>✓ Date and time confirmed</li>
                        <li>✓ Duration (60/90 minutes)</li>
                        <li>✓ Therapist name</li>
                        <li>✓ Your accommodation location</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3">Home Massage Pricing</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Total home massage cost</li>
                        <li>✓ Payment method (cash/transfer)</li>
                        <li>✓ Cancellation policy</li>
                        <li>✓ Special requests noted</li>
                        <li>✓ Therapist contact details</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <h3 className="text-2xl font-semibold">Prepare Your Space for Home Massage</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Your home massage experience improves with proper preparation. Review our <Link href="/home-massage/knowledge/what-to-expect"><span className="text-primary hover:underline">complete what to expect guide</span></Link> for detailed preparation steps. Basics include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Clear your massage area (bedroom, living room, etc.)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ensure firm, clean surface for your home massage bed</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Have clean towels and sheets ready for home massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Set comfortable room temperature before home massage starts</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Notify hotel reception about incoming home massage therapist</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">6</div>
                  <h3 className="text-2xl font-semibold">Therapist Arrives for Home Massage</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Your home massage therapist arrives at the scheduled time. Professional home massage therapists:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Arrive with ID and professional credentials</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Bring all equipment and oils needed for home massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Conduct brief check-in and discuss home massage preferences</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Set up massage area professionally for home massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Begin your professional home massage on schedule</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">7</div>
                  <h3 className="text-2xl font-semibold">Complete Home Massage Payment</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  After your home massage, complete payment. Most professional home massage services accept:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-primary/5 p-4 rounded">
                    <h4 className="font-semibold mb-2">Preferred Home Massage Payment</h4>
                    <p className="text-sm text-muted-foreground">Cash (Indonesian Rupiah) - Most convenient for home massage therapists</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded">
                    <h4 className="font-semibold mb-2">Alternative Home Massage Payment</h4>
                    <p className="text-sm text-muted-foreground">Bank transfer pre-arranged - Discussed during home massage booking</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Agreed home massage price remains fixed—no surprises or additional charges. Tips are entirely optional and based on satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Timing Tips for Home Massage Booking */}
      <section id="timing" className="py-16 md:py-20 bg-background">
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
      <SpiderLinksBlock currentPage="/home-massage/blog/how-to-book-home-massage" />

      {/* Booking CTA */}
      <BookingCTA />

      {/* FAQ Section */}
      <HomeMassageFAQ items={[
        {
          question: "How do I book home massage?",
          answer: "Book home massage via WhatsApp or phone. Message with your preferred service type (Balinese, deep tissue, couples, or relaxation), location, date, time, and duration. Professional home massage coordinators confirm availability, pricing, and therapist details within minutes. The entire booking process takes less than 5 minutes."
        },
        {
          question: "How far in advance should I book home massage?",
          answer: "Same-day home massage is often available if you book 2-4 hours ahead. Next-day booking guarantees availability for popular times. For couples home massage or specific therapist requests during peak season, book 1-2 days in advance. Professional home massage services accommodate flexible scheduling."
        },
        {
          question: "What information do I need to provide when booking home massage?",
          answer: "Provide: massage type, your accommodation location, preferred date/time, duration (60 or 90 minutes), and contact number. Helpful but optional: pressure preference, problem areas, medical concerns, and therapist gender preference. Professional home massage coordinators guide you through the entire process."
        },
        {
          question: "How much does home massage cost?",
          answer: "Home massage typically costs Rp 320,000-450,000 for 60 minutes, Rp 450,000-700,000 for 90 minutes. Couples home massage costs Rp 550,000-760,000 for 60 minutes. Pricing includes all equipment, oils, and therapist travel. No hidden costs. Payment usually via cash after service, or bank transfer beforehand."
        },
        {
          question: "Can I reschedule my home massage booking?",
          answer: "Yes. Contact your home massage provider via WhatsApp as soon as possible. Most professional services offer flexible rescheduling with 24+ hours notice. Cancellation policies vary but are typically forgiving for legitimate changes. Same-day cancellations may incur fees."
        },
        {
          question: "What if the therapist is late for my home massage?",
          answer: "Wait 10-15 minutes (Bali traffic happens), then contact the home massage provider immediately. Professional services track therapists and provide ETA updates. Delays are rare with reputable home massage companies. If therapist doesn't arrive, full refund or immediate rescheduling offered."
        }
      ]} />
        </main>
        <Footer />
      </div>
    </>
  );
}
