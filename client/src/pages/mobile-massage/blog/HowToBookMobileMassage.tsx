import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Phone, CreditCard, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import MobileMassageFAQ from '@/components/mobile-massage/MobileMassageFAQ';

export default function HowToBookHomeMassage() {
  return (
    <>
      <SEOHead 
        title="How to Book Mobile Massage | Complete Booking Guide & Tips"
        description="Step-by-step guide to booking mobile massage. Learn timing, preparation, payment, communication, and troubleshooting for stress-free mobile massage booking."
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
              How to Book Mobile Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Complete guide to booking professional mobile massage easily and confidently
            </p>
          </div>
        </div>
      </section>

      {/* Block 1: Why Proper Mobile Massage Booking Matters */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Proper Mobile Massage Booking Matters
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Home massage booking is straightforward, but understanding the process ensures a perfect experience. Whether you're booking <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link>, <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue mobile massage</span></Link>, <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">couples mobile massage</span></Link>, or <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link>, knowing what to expect eliminates uncertainty.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Proper mobile massage booking ensures your therapist has correct details, you're prepared for their arrival, and everything runs smoothly. This guide walks through mobile massage booking step-by-step, from initial contact through final confirmation. No surprises. Just professional, reliable mobile massage service.
              </p>
              <p className="text-lg text-muted-foreground">
                Home massage booking works the same way across <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, and <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>. Professional mobile massage services maintain identical processes regardless of location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Step-by-Step Mobile Massage Booking Process */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Mobile Massage Booking Process: Step by Step
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <h3 className="text-2xl font-semibold">Choose Your Mobile Massage Type</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  First, decide which mobile massage suits your needs. Are you looking for <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link> for cultural relaxation? <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep tissue mobile massage</span></Link> for muscle tension? <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">Couples mobile massage</span></Link> for shared relaxation? Or <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link> for pure vacation restoration?
                </p>
                <p className="text-muted-foreground">
                  Our service pages explain each mobile massage type, helping you choose. Unsure? Contact us—professional mobile massage consultants help narrow down your perfect match.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <h3 className="text-2xl font-semibold">Select Your Location for Mobile Massage</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Professional mobile massage is available across major Bali locations. Where are you staying? <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Home massage in Ubud</span></Link>, <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, or <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>? Home massage serves all these areas with identical professional standards.
                </p>
                <p className="text-muted-foreground">
                  Your mobile massage therapist comes to your villa, hotel, or accommodation. Just provide your location when booking mobile massage—they'll find you.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <h3 className="text-2xl font-semibold">Contact via WhatsApp for Mobile Massage Booking</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  WhatsApp is the preferred mobile massage contact method. Send a message with:
                </p>
                <div className="bg-primary/5 p-4 rounded mb-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Type of mobile massage (Balinese, deep tissue, couples, relaxation)</li>
                    <li>• Your location (Ubud, Canggu, Seminyak, Sanur)</li>
                    <li>• Preferred date and time for mobile massage</li>
                    <li>• Duration (typically 60 or 90 minutes)</li>
                    <li>• Any special requests or pressure preferences</li>
                    <li>• Your phone number for mobile massage confirmation</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  Professional mobile massage coordinators respond within minutes, confirming availability and mobile massage pricing.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <h3 className="text-2xl font-semibold">Confirm Mobile Massage Details</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  The mobile massage coordinator will confirm:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3">Session Details for Mobile Massage</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Your mobile massage type</li>
                        <li>✓ Date and time confirmed</li>
                        <li>✓ Duration (60/90 minutes)</li>
                        <li>✓ Therapist name</li>
                        <li>✓ Your accommodation location</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3">Mobile Massage Pricing</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>✓ Total mobile massage cost</li>
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
                  <h3 className="text-2xl font-semibold">Prepare Your Space for Mobile Massage</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Your mobile massage experience improves with proper preparation. Review our <Link href="/mobile-massage/knowledge/what-to-expect"><span className="text-primary hover:underline">complete what to expect guide</span></Link> for detailed preparation steps. Basics include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Clear your massage area (bedroom, living room, etc.)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ensure firm, clean surface for your mobile massage bed</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Have clean towels and sheets ready for mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Set comfortable room temperature before mobile massage starts</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Notify hotel reception about incoming mobile massage therapist</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">6</div>
                  <h3 className="text-2xl font-semibold">Therapist Arrives for Mobile Massage</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Your mobile massage therapist arrives at the scheduled time. Professional mobile massage therapists:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Arrive with ID and professional credentials</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Bring all equipment and oils needed for mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Conduct brief check-in and discuss mobile massage preferences</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Set up massage area professionally for mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Begin your professional mobile massage on schedule</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">7</div>
                  <h3 className="text-2xl font-semibold">Complete Mobile Massage Payment</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  After your mobile massage, complete payment. Most professional mobile massage services accept:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-primary/5 p-4 rounded">
                    <h4 className="font-semibold mb-2">Preferred Mobile Massage Payment</h4>
                    <p className="text-sm text-muted-foreground">Cash (Indonesian Rupiah) - Most convenient for mobile massage therapists</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded">
                    <h4 className="font-semibold mb-2">Alternative Mobile Massage Payment</h4>
                    <p className="text-sm text-muted-foreground">Bank transfer pre-arranged - Discussed during mobile massage booking</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Agreed mobile massage price remains fixed—no surprises or additional charges. Tips are entirely optional and based on satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Timing Tips for Mobile Massage Booking */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Timing Tips: Best Times to Book Mobile Massage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">When to Book Your Mobile Massage</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-primary">Morning (7am-11am)</p>
                      <p className="text-sm">Perfect for energizing before your day. <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link> refreshes you for exploring.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Afternoon (1pm-4pm)</p>
                      <p className="text-sm">Midday mobile massage break revitalizes tired travelers. <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep tissue mobile massage</span></Link> works flight stiffness.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Evening (5pm-9pm)</p>
                      <p className="text-sm">Popular mobile massage time. <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">Relaxation mobile massage</span></Link> before dinner transition.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Late Evening (9pm-11pm)</p>
                      <p className="text-sm">Sleep-promoting mobile massage. Perfect end-of-vacation treatment before flights.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Mobile Massage Booking Timeline</h3>
                  </div>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-primary">Same-Day Mobile Massage</p>
                      <p className="text-sm">Book 2-4 hours in advance. Most mobile massage requests accommodate same-day appointments.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Next-Day Mobile Massage</p>
                      <p className="text-sm">Book by evening for next-day mobile massage. Guaranteed availability for popular times.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Multiple Visits</p>
                      <p className="text-sm">For <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">couples mobile massage</span></Link> or repeat visits, book 1-2 days ahead during peak season.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">Advance Planning</p>
                      <p className="text-sm">Planning vacation? Email or message mobile massage details weeks ahead—luxury confirmation included.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: What to Communicate When Booking Mobile Massage */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Communication Guide: What to Tell Mobile Massage Providers
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Essential Information for Mobile Massage Booking</h3>
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
                          <span>Preferred date and time for mobile massage</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Home massage duration (60 or 90 minutes)</span>
                        </li>
                        <li className="flex gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Contact phone number for mobile massage confirmation</span>
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
                          <span>Injuries or medical concerns for mobile massage</span>
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
                  <h3 className="text-xl font-semibold mb-4">Service-Specific Information for Mobile Massage</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-primary mb-2"><Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese Mobile Massage</span></Link> Booking</p>
                      <p className="text-sm text-muted-foreground">Mention if you prefer traditional pace and energy focus. Note any aromatherapy preferences.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-primary mb-2"><Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep Tissue Mobile Massage</span></Link> Booking</p>
                      <p className="text-sm text-muted-foreground">Clearly specify problem areas and pressure tolerance. Mention any pain levels that need attention.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-primary mb-2"><Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">Couples Mobile Massage</span></Link> Booking</p>
                      <p className="text-sm text-muted-foreground">Note if you want adjacent rooms or same-space setup. Communicate if partners have different pressure preferences.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-primary mb-2"><Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">Relaxation Mobile Massage</span></Link> Booking</p>
                      <p className="text-sm text-muted-foreground">Mention if you want meditation-like atmosphere. Note music or silence preferences for mobile massage.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: Payment Information and Methods */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Mobile Massage Payment Information
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Understanding mobile massage pricing and payment prevents confusion and ensures smooth transactions. Professional mobile massage services maintain transparent, straightforward payment processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-semibold">Typical Mobile Massage Pricing</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">60-minute mobile massage</span>
                      <span className="font-semibold">Rp 320,000-450,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">90-minute mobile massage</span>
                      <span className="font-semibold">Rp 450,000-600,000</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Couples mobile massage (60 min)</span>
                      <span className="font-semibold">Rp 700,000-900,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Early morning mobile massage (7am)</span>
                      <span className="font-semibold">+Rp 50,000</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    * Pricing varies by service type and location. Always confirm during mobile massage booking.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Mobile Massage Payment Methods</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-primary mb-2">💵 Cash Payment (Preferred)</p>
                      <p className="text-sm text-muted-foreground">Indonesian Rupiah cash is most convenient for mobile massage therapists. Pay at end of session. No transaction fees. Therapist brings mobile massage oils, not card readers.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">🏦 Bank Transfer</p>
                      <p className="text-sm text-muted-foreground">Can be arranged pre-booking for mobile massage. Discuss during WhatsApp coordination. Transfer details provided for secure mobile massage payment.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">💳 E-wallets</p>
                      <p className="text-sm text-muted-foreground">GCash, OVO, Dana availability varies. Confirm during mobile massage booking if specific payment method needed.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What's Included in Mobile Massage Price</h3>
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

      {/* Block 6: Special Preparation for Mobile Massage Booking */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What to Prepare: Complete Mobile Massage Preparation Guide
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Proper preparation maximizes your mobile massage experience. Our <Link href="/mobile-massage/knowledge/what-to-expect"><span className="text-primary hover:underline">what to expect guide</span></Link> details comprehensive preparation, but here's the mobile massage booking preparation essentials.
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Space Preparation for Mobile Massage</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Clear mobile massage area of clutter</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Provide firm surface for mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Have clean towels for mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Ensure bathroom access for mobile massage setup</span>
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
                      <span className="text-muted-foreground">Shower/bathe before mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Drink plenty of water before mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Avoid heavy meals 1-2 hours before mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Wear comfortable, easy-remove clothing for mobile massage</span>
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
                      <span className="text-muted-foreground">Set phone to silent during mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Alert hotel reception about mobile massage arrival</span>
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

      {/* Block 7: Troubleshooting Common Mobile Massage Booking Issues */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Troubleshooting: Common Mobile Massage Booking Issues
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "I want mobile massage but therapist isn't available at my preferred time"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Home massage therapists often have flexibility. Try alternative times. Morning instead of evening? Or shift your booking forward/back a day. Professional mobile massage coordinators work around your schedule when possible. Also ask about waitlist options—cancellations happen frequently.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "I'm not sure which mobile massage type to book"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Contact coordinators during booking! Describe your needs. <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link> for relaxation? <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep tissue</span></Link> for tension? <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">Couples</span></Link> together? <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">Relaxation</span></Link> pure escape? Professional consultants recommend the perfect mobile massage match.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "Home massage is booked but I need to reschedule"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Contact mobile massage provider immediately via WhatsApp. Most professional services offer flexible rescheduling. Provide plenty of notice (24+ hours recommended). Cancellation policies exist but are typically forgiving for legitimate changes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "Therapist hasn't arrived by appointment time for mobile massage"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Wait 10-15 minutes (Bali traffic happens). Contact mobile massage provider via WhatsApp/phone immediately. Professional services track therapists and provide ETA updates. Confirm the correct location and any gate/access codes you may have omitted. Delays are rare with reputable mobile massage companies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "I'm uncomfortable with something during my mobile massage"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Stop the mobile massage immediately and communicate clearly. Professional therapists welcome feedback. Adjust pressure? Take a break? Skip an area? Change position? All mobile massage adjustments are welcome. If you're truly uncomfortable, end the session—most services refund or reschedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "I have a medical condition affecting mobile massage"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Inform the mobile massage provider during booking! Pregnancy? Injury? Heart condition? Allergies? Professional therapists adapt mobile massage accordingly. Some conditions prevent certain mobile massage types, but most adapt treatments. Full transparency ensures your safety and best mobile massage experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">❓ Issue: "Can I book mobile massage in my city location?"</h3>
                  <p className="text-muted-foreground">
                    <strong>Solution:</strong> Professional mobile massage serves <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, and <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link> and surrounding areas. Ask during booking if your specific location is covered. Most areas within major tourist zones are served by professional mobile massage networks.
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
              Your Mobile Massage Booking Checklist
            </h2>
            <Card className="border-2 border-primary">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-primary">Before Booking Mobile Massage</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Choose your mobile massage type (Balinese, deep tissue, couples, relaxation)</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Confirm your accommodation location</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Identify preferred mobile massage dates/times</span>
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
                    <h3 className="font-semibold text-lg mb-4 text-primary">During Mobile Massage Booking</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Confirm all mobile massage details verbally</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Ask about exact mobile massage pricing</span>
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
                    <h3 className="font-semibold text-lg mb-4 text-primary">Day Before Mobile Massage</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Confirm appointment via text message</span>
                      </li>
                      <li className="flex gap-3">
                        <input type="checkbox" className="w-5 h-5 accent-primary flex-shrink-0" />
                        <span className="text-muted-foreground">Start hydrating for mobile massage</span>
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
                    <h3 className="font-semibold text-lg mb-4 text-primary">Day of Mobile Massage</h3>
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
                        <span className="text-muted-foreground">Relax and enjoy your mobile massage!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <MobileMassageFAQ items={[
        {
          question: "What's the easiest way to book mobile massage in Bali?",
          answer: "The easiest mobile massage booking method is WhatsApp—simply message with your location, preferred time, and massage type. Mobile massage coordinators respond within minutes confirming availability and pricing. This mobile massage booking approach works seamlessly across Ubud, Canggu, Seminyak, and Sanur locations."
        },
        {
          question: "How far in advance should I book mobile massage?",
          answer: "Same-day mobile massage bookings are often possible with 2-4 hours notice, though next-day mobile massage booking guarantees better availability. For couples mobile massage or peak vacation times, booking mobile massage 1-2 days ahead ensures your preferred time slot. The mobile massage booking flexibility accommodates both spontaneous and planned sessions."
        },
        {
          question: "What payment methods do mobile massage services accept?",
          answer: "Most mobile massage services prefer cash payment in Indonesian Rupiah at session end, though bank transfers can be arranged during booking. Mobile massage pricing is transparent and fixed—no hidden fees or mandatory tips. The mobile massage payment happens after treatment, with optional gratuities based entirely on your satisfaction."
        },
        {
          question: "What information do I need when booking mobile massage?",
          answer: "For mobile massage booking, provide your accommodation location, preferred date and time, massage type (Balinese, deep tissue, couples, or relaxation), session duration (60 or 90 minutes), and contact phone number. Mentioning any health concerns or pressure preferences helps the mobile massage therapist prepare appropriately for your session."
        },
        {
          question: "Can I reschedule my mobile massage appointment?",
          answer: "Yes, mobile massage bookings are typically flexible with rescheduling when you provide adequate notice (24+ hours recommended). Contact your mobile massage provider immediately via WhatsApp to change times. Professional mobile massage services accommodate legitimate schedule changes without penalties, making mobile massage ideal for dynamic vacation plans."
        },
        {
          question: "How do I prepare my space for mobile massage arrival?",
          answer: "Mobile massage preparation requires minimal effort—clear a comfortable space (your bed or a floor mat works well), have clean towels ready, and adjust room temperature comfortably. The mobile massage therapist brings all supplies. Simply notify hotel reception about the incoming mobile massage appointment, and your space is ready."
        }
      ]} />

      {/* Soft CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Book Your Professional Mobile Massage?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Now that you know exactly how to book mobile massage, it's time to experience the difference
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Your Mobile Massage Now via WhatsApp
                </a>
              </Button>
            </div>

            <div className="border-t pt-12">
              <h3 className="text-2xl font-semibold mb-8">Explore Mobile Massage Options</h3>
              
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
                <h4 className="font-semibold mb-4 text-lg">Mobile Massage Learning Center:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/what-is-mobile-massage">What is Mobile Massage?</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/why-tourists-prefer-mobile-massage">Why Choose Mobile Massage</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/knowledge/what-to-expect">What to Expect</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/knowledge/safety">Safety Standards</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage">Mobile Massage Hub</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/">Home</Link>
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
