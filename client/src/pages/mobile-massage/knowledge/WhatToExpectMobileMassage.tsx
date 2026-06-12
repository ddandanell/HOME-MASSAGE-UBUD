import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MapPin, CheckCircle, AlertCircle, Home } from 'lucide-react';
import MobileMassageFAQ from '@/components/mobile-massage/MobileMassageFAQ';

export default function MobileMassageWhatToExpect() {
  return (
    <>
      <SEOHead 
        title="What to Expect: Mobile Massage Service Guide | Before During After"
        description="Complete guide to mobile massage experience. Learn what happens before, during, and after your mobile massage appointment. Professional mobile massage preparation and process explained."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Home className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-primary">Complete Process Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              What to Expect: Mobile Massage Guide
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Complete walkthrough of your mobile massage experience from booking through recovery
            </p>
          </div>
        </div>
      </section>

      {/* Block 1: Why knowing what to expect matters */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Understanding Mobile Massage Expectations Matters
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Home massage represents a unique spa experience because the therapist arrives at your accommodation rather than you traveling to a spa facility. Knowing what to expect from mobile massage eliminates uncertainty and ensures you're fully prepared. Whether booking <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link>, <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue mobile massage</span></Link>, <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">couples mobile massage</span></Link>, or <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link>, understanding the mobile massage process transforms your experience.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                This comprehensive guide covers everything about mobile massage preparation, the actual treatment process, and post-massage care. Whether you're receiving mobile massage in <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, or <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>, these mobile massage fundamentals remain consistent.
              </p>
              <p className="text-lg text-muted-foreground">
                Many first-time mobile massage clients feel more confident when they know exactly what happens during each phase. This guide ensures every mobile massage appointment meets your expectations and delivers the full benefits of professional therapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Block 2: Before - Preparation Phase */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Before Mobile Massage: Preparation Phase
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">48-24 Hours Before Mobile Massage</h3>
                <p className="text-muted-foreground mb-3">
                  Proper mobile massage preparation begins well before the therapist arrives. If you've booked <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue mobile massage</span></Link> or similar intensive mobile massage treatment, hydrate well in the days preceding your session.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Increase water intake to prepare tissues for mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Avoid alcohol for 24 hours before mobile massage if possible</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Get adequate sleep to maximize mobile massage benefits</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Light meals only - avoid heavy food before mobile massage</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">2 Hours Before Mobile Massage Arrival</h3>
                <p className="text-muted-foreground mb-3">
                  Your mobile massage space preparation ensures the therapist can deliver quality service. Whether receiving <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link> or <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">couples mobile massage</span></Link>, these mobile massage setup steps matter.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Bathe or shower before your mobile massage appointment</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Clear your massage area (bedroom, living room) of clutter for mobile massage setup</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ensure adequate space for the mobile massage therapist to move around</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Adjust room temperature to comfortable level for mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ensure a firm, clean surface — your bed or a floor mat works well</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">30 Minutes Before Mobile Massage</h3>
                <p className="text-muted-foreground mb-3">
                  Final mobile massage preparation ensures everything runs smoothly when the therapist arrives. This applies whether you're in <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, or <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link> accommodations.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Let reception or staff know about your mobile massage appointment</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Have payment ready for mobile massage (cash or agreed method)</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Set phone to silent before mobile massage begins</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Prepare clean towels and sheets for mobile massage use</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Note any pressure preferences or areas of concern before mobile massage starts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 3: Therapist Arrival and Welcome */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Mobile Massage Therapist Arrival
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Your mobile massage therapist typically arrives 5-10 minutes before the scheduled appointment. This advance arrival allows setup time, ensuring everything is ready before your mobile massage treatment begins. The therapist will arrive with all necessary equipment—no need for you to provide anything beyond clean space and basic amenities for mobile massage.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">What the Mobile Massage Therapist Brings</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Professional oils for mobile massage application</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Clean linens specific to mobile massage service</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">All tools needed for <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese</span></Link>, <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue</span></Link>, or other mobile massage types</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Professional ID and credentials for mobile massage verification</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">What Happens During Mobile Massage Check-In</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Brief introduction and ID verification for mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Discussion of mobile massage preferences and pressure</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Questions about injuries or areas to focus during mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Setup of massage area and arranging linens for mobile massage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 4: During Mobile Massage - Treatment Flow */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              During Mobile Massage: Treatment Flow
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Standard Mobile Massage Progression</h3>
                <p className="text-muted-foreground mb-6">
                  Most mobile massage sessions follow a similar structure, whether you're receiving <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link>, <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">couples mobile massage</span></Link>, or therapeutic mobile massage. Understanding this mobile massage flow helps you relax fully.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-background rounded-lg p-5 border">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                    <h4 className="font-semibold">Opening (5 min)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Therapist begins mobile massage with light, warming strokes. Oil is applied and you're positioned comfortably under draping.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-5 border">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                    <h4 className="font-semibold">Warm-Up (10 min)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Home massage progresses through longer, flowing strokes. Therapist warms tissues and assesses your response to pressure.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-5 border">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                    <h4 className="font-semibold">Main Treatment (20-35 min)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Core mobile massage work targets specific areas. For <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue mobile massage</span></Link>, pressure increases here.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-5 border">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                    <h4 className="font-semibold">Focused Work (10-15 min)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Home massage concentrates on problem areas. <Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese mobile massage</span></Link> emphasizes energy lines during this phase.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-5 border">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">5</div>
                    <h4 className="font-semibold">Transition (5 min)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Home massage pressure gradually decreases. Therapist moves toward lighter touch, preparing you to transition back.
                  </p>
                </div>

                <div className="bg-background rounded-lg p-5 border">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">6</div>
                    <h4 className="font-semibold">Closing (3-5 min)</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Home massage ends with light, grounding touches. Therapist often focuses on face, head, feet to bring awareness back.
                  </p>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">Communication During Mobile Massage</h4>
                  <p className="text-muted-foreground mb-3">
                    Your mobile massage therapist wants to adjust pressure and focus based on your feedback. Many clients initially feel shy speaking up during mobile massage, but communication is encouraged.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Tell your mobile massage therapist if pressure is too firm or too light</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Mention any discomfort during mobile massage immediately</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Point out if specific areas need more or less attention during mobile massage</span>
                    </li>
                    <li className="flex gap-2 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>It's normal to drift in and out of sleep during mobile massage—that's healthy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 5: After Mobile Massage - Post-Session Care */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              After Mobile Massage: Post-Session Care
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Immediate Post-Mobile Massage (First 15 Minutes)</h3>
                <p className="text-muted-foreground mb-3">
                  What you do immediately after mobile massage significantly impacts the benefits you receive. This is true whether you've had <Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">relaxation mobile massage</span></Link> or intensive <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue mobile massage</span></Link>.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sit quietly for 2-3 minutes before standing after mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Move slowly and mindfully when getting up from mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Drink water immediately after mobile massage to aid toxin release</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Allow your mobile massage therapist to depart with minimal chatter</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Avoid strenuous activity immediately after your mobile massage</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Short-Term Recovery (First 2-4 Hours Post Mobile Massage)</h3>
                <p className="text-muted-foreground mb-3">
                  The hours immediately following your mobile massage are crucial for maximizing benefits. Whether in <Link href="/mobile-massage/cities/ubud"><span className="text-primary hover:underline">Ubud</span></Link>, <Link href="/mobile-massage/cities/canggu"><span className="text-primary hover:underline">Canggu</span></Link>, <Link href="/mobile-massage/cities/seminyak"><span className="text-primary hover:underline">Seminyak</span></Link>, or <Link href="/mobile-massage/cities/sanur"><span className="text-primary hover:underline">Sanur</span></Link>, these mobile massage aftercare steps apply.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Keep hydrating throughout the hours following your mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Avoid heavy meals during this mobile massage recovery window</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Skip intense exercise after mobile massage—gentle walks are fine</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Use a warm shower/bath if muscles feel stiff after deep mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Rest and let your body process the mobile massage work</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3">Extended Recovery (24-48 Hours After Mobile Massage)</h3>
                <p className="text-muted-foreground mb-3">
                  Your body continues processing mobile massage benefits for days. This extended recovery period is especially important after <Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">couples mobile massage</span></Link> or intensive therapeutic mobile massage sessions.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Continue drinking water through the next 24-48 hours after mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Expect some muscle soreness as normal post-mobile-massage response</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Use gentle heat (not ice) if experiencing tenderness after mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Get adequate sleep—your body does healing work during rest after mobile massage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Light stretching is beneficial in days following your mobile massage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 6: Special Considerations by Mobile Massage Type */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Mobile Massage Type-Specific Expectations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4"><Link href="/mobile-massage/services/balinese"><span className="text-primary hover:underline">Balinese Mobile Massage</span></Link> Specifics</h3>
                  <p className="text-muted-foreground mb-4">
                    Expect flowing, rhythmic strokes with focus on energy balance during your Balinese mobile massage. This mobile massage style feels meditative and relaxing.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Gentler pressure than deep tissue mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Aromatic oils enhance your Balinese mobile massage experience</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Full-body coverage is typical in Balinese mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>May fall asleep—very common during Balinese mobile massage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4"><Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">Deep Tissue Mobile Massage</span></Link> Specifics</h3>
                  <p className="text-muted-foreground mb-4">
                    Deep tissue mobile massage uses firmer pressure targeting muscle tension. This mobile massage style can feel intense but therapeutic.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Communicate pressure levels during deep tissue mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Some tenderness after mobile massage is normal</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Extra hydration important after deep tissue mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>May involve elbows and forearms during this mobile massage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4"><Link href="/mobile-massage/services/couples"><span className="text-primary hover:underline">Couples Mobile Massage</span></Link> Specifics</h3>
                  <p className="text-muted-foreground mb-4">
                    Couples mobile massage involves two therapists treating two people simultaneously. This mobile massage style creates bonding and relaxation together.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Partners are in adjacent rooms or same space during couples mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Synchronization enhances the couples mobile massage experience</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Room setup is crucial for successful couples mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Plan quiet time together post couples mobile massage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4"><Link href="/mobile-massage/services/relaxation"><span className="text-primary hover:underline">Relaxation Mobile Massage</span></Link> Specifics</h3>
                  <p className="text-muted-foreground mb-4">
                    Relaxation mobile massage prioritizes comfort over therapeutic pressure. This mobile massage style is pure restoration.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Expect light to moderate pressure during relaxation mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Soothing environment enhances your relaxation mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Perfect for vacation relaxation mobile massage</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Minimal soreness expected after relaxation mobile massage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Block 7: Safety and Comfort During Mobile Massage */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Safety and Comfort During Mobile Massage
            </h2>
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                Professional mobile massage prioritizes your safety and comfort throughout the entire experience. Our <Link href="/mobile-massage/knowledge/safety"><span className="text-primary hover:underline">comprehensive safety guide</span></Link> explains our standards, but here's what you should know about expectations.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Your Rights During Mobile Massage</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• You can stop mobile massage at any time</li>
                    <li>• You can adjust any draping during mobile massage</li>
                    <li>• You can request pressure changes during mobile massage</li>
                    <li>• You can end the session early if uncomfortable</li>
                    <li>• Privacy is absolute during your mobile massage</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Professional Standards During Mobile Massage</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Therapist maintains professional boundaries</li>
                    <li>• Proper draping protects modesty in mobile massage</li>
                    <li>• Therapist uses clean, sanitized equipment</li>
                    <li>• Communication remains respectful</li>
                    <li>• No inappropriate contact during mobile massage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Block 8: Common Questions About Mobile Massage */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Common Mobile Massage Questions
            </h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Q: How much should I drink after mobile massage?</h3>
                  <p className="text-muted-foreground">
                    A: Drink water regularly throughout the day following your mobile massage, but not excessively. Home massage mobilizes toxins—steady hydration helps your body process them naturally.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Q: Is it normal to feel sore after mobile massage?</h3>
                  <p className="text-muted-foreground">
                    A: After <Link href="/mobile-massage/services/deep-tissue"><span className="text-primary hover:underline">deep tissue mobile massage</span></Link>, mild soreness is normal and fades within 24-48 hours. This indicates your therapist worked effectively. However, intense pain signals a problem.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Q: Can I eat immediately after mobile massage?</h3>
                  <p className="text-muted-foreground">
                    A: Light snacks are fine, but avoid large meals for 1-2 hours after your mobile massage. Your digestive system needs time to rebalance following treatment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Q: Is it okay to talk during mobile massage?</h3>
                  <p className="text-muted-foreground">
                    A: Brief, necessary communication during mobile massage is expected. But many clients prefer quiet, meditative sessions. Share your preference when your mobile massage therapist arrives.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Q: What if I fall asleep during mobile massage?</h3>
                  <p className="text-muted-foreground">
                    A: Falling asleep during mobile massage is completely normal and shows you're deeply relaxed. Your therapist continues providing excellent mobile massage treatment while you rest.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Q: How long does mobile massage setup take?</h3>
                  <p className="text-muted-foreground">
                    A: Your mobile massage therapist typically needs 5-10 minutes for setup. This is included in the appointment time, so if you book a 60-minute mobile massage, about 50 minutes is actual treatment.
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
          question: "What should I expect when the mobile massage therapist first arrives?",
          answer: "When your mobile massage therapist arrives, expect a brief professional introduction, ID verification, and discussion of your massage preferences and any health concerns. The mobile massage setup takes 5-10 minutes as the therapist arranges equipment and prepares oils. This mobile massage check-in ensures everything aligns with your expectations before treatment begins."
        },
        {
          question: "How should I prepare my space before mobile massage arrival?",
          answer: "Mobile massage preparation requires clearing a clean, comfortable space, ensuring adequate room temperature, having clean towels available, and notifying reception about the appointment. The mobile massage therapist brings all professional supplies and oils. Minimal preparation on your part creates an optimal treatment environment."
        },
        {
          question: "What happens during a typical mobile massage session?",
          answer: "A mobile massage session progresses through warming strokes, main therapeutic work, focused problem area treatment, and gentle closing touches. Professional mobile massage follows this structure whether you receive Balinese, deep tissue, couples, or relaxation treatments. The mobile massage flow ensures comprehensive treatment with proper warm-up and cool-down phases."
        },
        {
          question: "What should I do immediately after my mobile massage ends?",
          answer: "After mobile massage, sit quietly for 2-3 minutes before standing, move slowly when getting up, and drink water immediately to aid toxin release. The mobile massage advantage is immediate recovery in your private space without needing to travel. Avoid strenuous activity for 2-4 hours post mobile massage to maximize therapeutic benefits."
        },
        {
          question: "Is it normal to feel different sensations after mobile massage?",
          answer: "Yes, post-mobile-massage sensations like mild soreness (especially after deep tissue mobile massage), increased relaxation, improved circulation warmth, or light-headedness are completely normal. These mobile massage effects indicate successful treatment and typically resolve within 24-48 hours. Continued hydration supports your mobile massage recovery process."
        },
        {
          question: "Can I communicate preferences during my mobile massage?",
          answer: "Absolutely—mobile massage therapists welcome communication about pressure adjustments, problem area focus, or comfort needs throughout your session. Professional mobile massage prioritizes your comfort and therapeutic goals. Speaking up during mobile massage ensures the treatment matches your expectations and delivers optimal benefits."
        }
      ]} />

      {/* Soft CTA and extensive linking */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready for Your Professional Mobile Massage?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Now that you know what to expect, book your mobile massage and experience the difference professional service makes
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Your Mobile Massage Now
                </a>
              </Button>
            </div>

            <div className="border-t pt-12">
              <h3 className="text-2xl font-semibold mb-8">Explore All Mobile Massage Options</h3>
              
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
                  <h4 className="font-semibold mb-4 text-lg">Mobile Massage Cities:</h4>
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
                    <Link href="/mobile-massage">← Back to Mobile Massage Hub</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/knowledge/safety">Safety Standards</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/how-to-book-mobile-massage">How to Book Mobile Massage</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/what-is-mobile-massage">What is Mobile Massage?</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage/blog/why-tourists-prefer-mobile-massage">Why Tourists Prefer Mobile Massage</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/mobile-massage">Mobile Massage Hub</Link>
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
