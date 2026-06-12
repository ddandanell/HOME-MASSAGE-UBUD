import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, DollarSign, Lock, Home, Star, Users, CheckCircle, Shield } from 'lucide-react';

export default function BenefitsHomeMassageBali() {
  return (
    <>
      <SEOHead 
        title="5 Benefits of Home Massage vs Spa Visits Bali"
        description="Why home massage beats spa visits: privacy, convenience, value, and comfort. Professional therapists to your Bali villa. Save time & money. Book today."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-primary" />
                  <span className="text-lg font-semibold text-primary">Benefits Guide</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  5 Reasons Home Massage Beats Going to a Spa in Bali
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Discover why thousands of travelers choose home massage over traditional spa visits
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
                    Sarah and Mike had been looking forward to their Bali honeymoon for months. On their second day in <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, they decided to visit a luxury spa for couples massage. The experience? A 45-minute drive through traffic, 20 minutes waiting in reception, rushed service from overbooked therapists, and another 45 minutes stuck in their taxi heading back to the villa.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    The next day, they tried something different: <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples home massage</span></Link>. Two therapists arrived at their villa, set up on their private terrace overlooking the ocean, and delivered 90 minutes of blissful massage. Afterward, Sarah and Mike showered in their own bathroom, napped in their bed, and woke up refreshed for sunset dinner. Total time away from relaxation? Zero minutes.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    This isn't just one couple's story—it's why <Link href="/home-massage"><span className="text-primary hover:underline">home massage</span></Link> has become the smart choice for travelers throughout Bali. Here are five compelling reasons home massage outperforms traditional spa visits.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefit #1 - Time Savings */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Benefit #1 - Skip Bali Traffic & Save Time
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Time Wasted Getting to Spas</h3>
                  <p className="text-lg text-muted-foreground">
                    Bali's traffic is legendary—and not in a good way. What looks like a 15-minute drive on Google Maps often takes 45 minutes during peak hours. From <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud center</span></Link> to a nearby spa? Count on 20-30 minutes each way. From <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link> to Seminyak during dinner rush? Budget an hour or more.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Then there's parking, finding the right building, checking in, changing clothes, and waiting for your appointment. Before your massage even begins, you've spent 60-90 minutes on logistics. That's vacation time you'll never get back.
                  </p>

                  <h3 className="text-2xl font-bold mt-8">Home Massage Eliminates Travel</h3>
                  <p className="text-lg text-muted-foreground">
                    Home massage flips the equation entirely. The therapist travels to you, while you relax at your villa. No fighting traffic. No parking struggles. No rushing to make your appointment time. You can literally roll out of bed 5 minutes before your session starts.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    After your massage, there's no commute home fighting for taxis or navigating unfamiliar roads. You're already home. You can shower, nap, or simply continue relaxing. The time savings is particularly valuable during short vacations where every hour counts.
                  </p>

                  <h3 className="text-2xl font-bold mt-8">Real Time Comparison Example</h3>
                  <Card className="mt-6">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold mb-4 text-muted-foreground">Traditional Spa Visit</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Getting ready & transport:</span>
                              <span className="font-bold">45 min</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Waiting & changing:</span>
                              <span className="font-bold">20 min</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Actual massage:</span>
                              <span className="font-bold">60 min</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Changing & leaving:</span>
                              <span className="font-bold">15 min</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Transport back:</span>
                              <span className="font-bold">45 min</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t text-base font-bold">
                              <span>Total time:</span>
                              <span className="text-destructive">185 min (3+ hours)</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-4 text-primary">Home Massage</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Getting ready:</span>
                              <span className="font-bold">5 min</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Therapist setup:</span>
                              <span className="font-bold">5 min</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Actual massage:</span>
                              <span className="font-bold">60 min</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Therapist cleanup:</span>
                              <span className="font-bold">5 min</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Continue relaxing:</span>
                              <span className="font-bold">0 min</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t text-base font-bold">
                              <span>Total time:</span>
                              <span className="text-primary">75 min (1.25 hours)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-center mt-6 text-lg font-bold text-primary">
                        Save 110 minutes (nearly 2 hours) with home massage!
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Benefit #2 - Privacy */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Lock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Benefit #2 - Complete Privacy & Comfort
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Your Own Space, Your Rules</h3>
                  <p className="text-lg text-muted-foreground">
                    Spas are communal spaces where you share facilities with strangers. Locker rooms. Waiting areas. Treatment hallways. Even private treatment rooms often have thin walls where you hear conversations from adjacent sessions. For many travelers, this shared environment creates subtle stress rather than pure relaxation.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Home massage offers complete privacy in your own space. No strangers in robes. No small talk with reception staff. No wondering who's in the room next door. Your villa or hotel room becomes your private spa where you control everything: temperature, lighting, music volume, even whether windows are open or closed.
                  </p>

                  <h3 className="text-2xl font-bold mt-8">Perfect for Couples & Families</h3>
                  <p className="text-lg text-muted-foreground">
                    <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">Couples home massage</span></Link> creates intimate, shared experiences impossible in spa settings. You and your partner receive synchronized massage in your private villa space—perhaps on your balcony overlooking rice paddies or in your bedroom with ocean breezes flowing through. The experience strengthens your connection without the awkwardness of shared spa facilities.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    For families with children, home massage offers practical privacy. Parents can book <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese massage</span></Link> while kids nap in the next room. No worrying about leaving children with unfamiliar babysitters or managing spa facility rules that don't accommodate families.
                  </p>

                  <h3 className="text-2xl font-bold mt-8">No Spa Crowds or Noise</h3>
                  <p className="text-lg text-muted-foreground">
                    Ever tried to relax in a spa reception area with ten other tourists chatting about their day? Or had your massage interrupted by hallway noise from staff or other guests? Spa facilities serve many clients simultaneously, which inevitably creates disruption.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Home massage eliminates all external distractions. Your environment stays exactly as you prefer it. Want complete silence? No problem. Prefer your own playlist? Play it freely. Like the sound of tropical rain on your villa roof? That's your soundtrack. The privacy extends beyond physical space to auditory and sensory control.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefit #3 - Value */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Benefit #3 - Better Value for Money
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Home Massage vs Spa Pricing</h3>
                  <p className="text-lg text-muted-foreground">
                    High-end Bali spas charge premium prices for their facilities, location, and brand reputation. A 60-minute Balinese massage at a luxury spa often costs $80-120. That same massage as a home service typically runs $50-70—delivering identical therapeutic benefits at 40-50% less cost.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    The therapists are equally qualified. The techniques are the same. The oils and equipment match spa quality. But home massage doesn't carry overhead costs for fancy facilities, reception staff, gift shops, and prime real estate. Those savings pass directly to you.
                  </p>

                  <Card className="my-6">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-4">Price Comparison: 90-Minute Couples Massage</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-destructive/10 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold">Luxury Spa Resort</span>
                            <span className="text-2xl font-bold text-destructive">$280</span>
                          </div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>• Base couples massage: $240</p>
                            <p>• Facility fee: $20</p>
                            <p>• Service charge: $20</p>
                            <p>• Plus: Transport costs & time</p>
                          </div>
                        </div>
                        <div className="p-4 bg-primary/10 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-bold">Home Massage Service</span>
                            <span className="text-2xl font-bold text-primary">$150</span>
                          </div>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>• Couples massage: $150</p>
                            <p>• All equipment included</p>
                            <p>• No additional fees</p>
                            <p>• Zero transport costs or time</p>
                          </div>
                        </div>
                        <p className="text-center text-lg font-bold text-primary">
                          Save $130 (46%) with home massage!
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <h3 className="text-2xl font-bold mt-8">Hidden Costs of Spa Visits</h3>
                  <p className="text-lg text-muted-foreground">
                    Beyond the massage price, spa visits accumulate hidden costs. Transport to and from the spa—whether taxi, Grab, or scooter rental—adds $10-20 each way. Many spas add "service charges" or facility fees (10-20% extra). Premium spas pressure you toward expensive add-ons or retail products.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Then there's the opportunity cost: those 2-3 hours spent traveling and waiting could have been spent at the beach, exploring temples, or simply relaxing at your villa. Home massage eliminates all these hidden costs while preserving your precious vacation time.
                  </p>

                  <h3 className="text-2xl font-bold mt-8">Package Deals for Multiple Treatments</h3>
                  <p className="text-lg text-muted-foreground">
                    Home massage services frequently offer package discounts that beat any spa deal. Book three sessions, save 10-15%. Book five sessions, save 20% or more. For longer Bali stays, these packages deliver exceptional value while ensuring consistent therapist quality.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Group bookings (4+ people) unlock additional savings. Planning a girls' trip or family reunion? Book simultaneous home massage sessions for everyone at your villa—often receiving bulk discounts that spas can't match. Check <Link href="/pricing"><span className="text-primary hover:underline">current pricing and packages</span></Link> for the best deals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefit #4 - Customization */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Benefit #4 - Customized to Your Needs
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Choose Your Timing</h3>
                  <p className="text-lg text-muted-foreground">
                    Spas operate on fixed schedules with limited flexibility. Popular time slots book weeks ahead. Need to reschedule because your plans changed? Expect cancellation fees or lost deposits. Want a massage at 8am before your day trip? Most spas don't open until 10am.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Home massage adapts to your schedule seamlessly. Early morning session before sunrise yoga? Available. Late evening massage after dinner? No problem. Same-day booking because you're exhausted from temple exploring? Often possible. The service revolves around your vacation timeline, not institutional spa hours.
                  </p>

                  <h3 className="text-2xl font-bold mt-8">Pressure & Style Preferences</h3>
                  <p className="text-lg text-muted-foreground">
                    In busy spas, therapists rush between clients on tight schedules. Requesting pressure adjustments or technique changes can feel awkward—you don't want to complain or take extra time. Many guests simply endure discomfort rather than speaking up.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Home massage creates relaxed environments where communication flows naturally. You can freely adjust pressure, request focus on specific areas, or switch between <Link href="/home-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue</span></Link> and <Link href="/home-massage/services/relaxation"><span className="text-primary hover:underline">relaxation techniques</span></Link> mid-session. Therapists aren't rushed to the next appointment, so they accommodate your needs without time pressure.
                  </p>

                  <h3 className="text-2xl font-bold mt-8">Add-Ons & Enhancements</h3>
                  <p className="text-lg text-muted-foreground">
                    Want to extend your 60-minute massage to 90 minutes halfway through? With home massage, you can usually add time on the spot if the therapist's schedule allows. Interested in combining <Link href="/home-massage/services/balinese"><span className="text-primary hover:underline">Balinese techniques</span></Link> with foot reflexology? Home massage therapists commonly customize hybrid treatments.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Location customization is unique to home massage. Want your massage on your private balcony overlooking the jungle? In your garden pavilion? By your infinity pool at sunset? Home massage accommodates these special requests that spas can never offer—transforming your session into a truly memorable experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefit #5 - Occasion */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Benefit #5 - Perfect for Any Occasion
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Daily Relaxation</h3>
                  <p className="text-lg text-muted-foreground">
                    For digital nomads and long-term visitors, home massage becomes a sustainable wellness routine. Regular spa visits aren't practical when you're staying in Bali for weeks or months. The commute, expense, and disruption to your work schedule make consistent self-care difficult.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Home massage fits seamlessly into extended stays. Book weekly or bi-weekly sessions that arrive at your accommodation without interrupting your routine. Many long-term guests develop relationships with preferred therapists, ensuring consistent quality and personalized treatment. This regularity supports better health outcomes and sustainable relaxation practices.
                  </p>

                  <h3 className="text-2xl font-bold mt-8">Special Celebrations</h3>
                  <p className="text-lg text-muted-foreground">
                    Home massage elevates special occasions beyond what spas can offer. Celebrating an anniversary? Book <Link href="/home-massage/services/couples"><span className="text-primary hover:underline">couples massage</span></Link> under the stars on your villa terrace, followed by champagne and private dinner. Birthday celebration? Gather friends for simultaneous massage sessions at your rental, then continue the party immediately after.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Bachelorette parties and girls' getaways particularly benefit from home massage. The entire group receives treatments together at the villa, creating bonding experiences impossible in separate spa treatment rooms. You control the music, champagne, conversations, and atmosphere—making memories that spa visits can't match.
                  </p>

                  <h3 className="text-2xl font-bold mt-8">Recovery & Wellness</h3>
                  <p className="text-lg text-muted-foreground">
                    Recovering from injury, managing chronic pain, or dealing with jet lag? Home massage provides therapeutic support without the stress of leaving your accommodation. Post-surgery patients, elderly travelers, and those with mobility challenges find home massage especially valuable—receiving professional care without navigating spa stairs, changing rooms, or unfamiliar facilities.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Wellness retreats and yoga practitioners integrate home massage into holistic health programs. Schedule massage immediately after morning yoga practice. Book deep tissue work following surfing sessions. The flexibility and convenience of home service supports comprehensive wellness routines that spa visits simply can't accommodate.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who Should Choose */}
          <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Who Should Choose Home Massage?
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <Users className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Busy Travelers & Digital Nomads</h3>
                      <p className="text-muted-foreground text-sm">
                        If your time is valuable and you want maximum relaxation with minimum logistics, home massage is ideal. Perfect for those balancing work and vacation or managing tight schedules.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Home className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Families with Kids</h3>
                      <p className="text-muted-foreground text-sm">
                        Parents who can't easily leave children for spa visits benefit enormously from home massage. Kids can nap or play nearby while parents receive professional treatment.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <Shield className="w-10 h-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">Villa Guests & Long-Term Stays</h3>
                      <p className="text-muted-foreground text-sm">
                        Those renting villas or staying weeks/months find home massage transforms their space into a personal spa. Regular sessions become affordable and convenient wellness routine.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Common Concerns */}
          <section className="py-16 md:py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Common Concerns About Home Massage (Addressed)
                </h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">"Is it as good as a spa?"</h3>
                      <p className="text-muted-foreground">
                        Yes. Home massage therapists have identical training and certification as spa therapists—many work at both. The massage techniques, oil quality, and professional standards match high-end spas. The only difference is location, which actually enhances the experience by eliminating spa stress and maximizing convenience.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">"What if I don't have space?"</h3>
                      <p className="text-muted-foreground">
                        You need surprisingly little room—just a 2m x 3m flat area with a comfortable surface (your bed works perfectly). Most hotel rooms and all villas work great. Bedrooms, balconies, living rooms, or covered outdoor spaces all work perfectly. The therapist adapts to whatever space you have available.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">"Is it safe?"</h3>
                      <p className="text-muted-foreground">
                        Reputable home massage services thoroughly vet their therapists—background checks, certification verification, and ongoing training. You receive therapist names and photos before arrival. Many services operate through villa concierges or hotel recommendations, adding another layer of trust. Safety standards typically exceed those of street-level spas.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Experience Home Massage?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Discover why thousands of travelers choose home massage over spa visits. Book your session in <Link href="/home-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/home-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, <Link href="/home-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, or <Link href="/home-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button size="lg" asChild>
                    <Link href="/contact">Book Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/home-massage">Learn More About Home Massage</Link>
                  </Button>
                </div>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Save Time & Money</h4>
                      <p className="text-sm text-muted-foreground">Up to 50% less than spa visits with zero travel time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Complete Privacy</h4>
                      <p className="text-sm text-muted-foreground">Your space, your rules, your perfect relaxation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Same Quality</h4>
                      <p className="text-sm text-muted-foreground">Certified therapists with spa-level expertise</p>
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
