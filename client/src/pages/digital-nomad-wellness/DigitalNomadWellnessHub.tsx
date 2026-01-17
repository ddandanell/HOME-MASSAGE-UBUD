import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, Shield, MapPin, Heart, Star, Users, Sparkles, Laptop, Coffee, Wifi, Zap } from 'lucide-react';

export default function DigitalNomadWellnessHub() {
  return (
    <>
      <SEOHead 
        title="Digital Nomad Wellness Bali | Desk Pain Relief & Tech Neck Massage"
        description="Expert massage therapy for digital nomads in Bali. Relieve desk pain, tech neck, and work-related tension. Mobile service to coworking spaces and villas across Canggu, Ubud & Seminyak."
        keywords="digital nomad wellness, desk pain massage Bali, tech neck treatment, coworking massage, laptop posture relief, remote worker massage, Canggu wellness, Ubud digital nomad"
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Laptop className="w-12 h-12 text-primary" />
              <Coffee className="w-12 h-12 text-primary" />
              <Wifi className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Digital Nomad Wellness Bali
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Work remotely without the pain. Professional massage therapy designed specifically for digital nomads, remote workers, and laptop professionals in Bali. We come to your coworking space, villa, or hotel.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book Nomad Wellness Session
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link href="/pricing">
                  View Packages
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Why Digital Nomads Need Regular Massage */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Digital Nomads in Bali Need Regular Massage Therapy
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Bali has become the world's premier destination for digital nomads, with thousands of remote workers choosing Canggu, Ubud, and Seminyak as their temporary home. While the island offers incredible lifestyle benefits, the reality of working remotely often means long hours hunched over laptops in coworking spaces, cafés, or villa desks—leading to serious physical strain.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The digital nomad lifestyle creates unique wellness challenges: constant laptop use causes forward head posture and tech neck; inadequate ergonomic setups in tropical coworking spaces lead to chronic back pain; irregular work hours disrupt sleep patterns; and the pressure to balance work with Bali's tempting lifestyle creates stress that manifests physically.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our Digital Nomad Wellness service addresses these specific pain points. We understand that you can't afford to let physical discomfort derail your productivity or prevent you from enjoying Bali's incredible experiences. Whether you're working from Dojo Bali, Tropical Nomad, or your private villa, we bring professional therapeutic massage directly to you—eliminating the need to waste precious work time commuting to a spa.
              </p>
              <p className="text-lg text-muted-foreground">
                Regular massage therapy isn't a luxury for remote workers—it's essential preventative care. By addressing muscle tension, poor posture, and stress before they become chronic issues, you can maintain peak productivity while fully enjoying the nomadic lifestyle that brought you to Bali.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Common Digital Nomad Pain Points We Treat */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Common Remote Worker Pain Points We Address
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <Laptop className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Tech Neck & Forward Head Posture</h3>
                  <p className="text-muted-foreground">
                    Hours staring at screens create chronic neck strain and headaches. Our targeted therapy releases cervical spine tension, addresses forward head posture, and relieves the crushing weight that builds in your neck and shoulders from constant laptop use.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Zap className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Desk Pain & Lower Back Tension</h3>
                  <p className="text-muted-foreground">
                    Sitting for 8-12 hours daily without proper ergonomic support causes deep lumbar strain. We target hip flexors, lower back muscles, and spinal alignment issues common in remote workers, restoring mobility and eliminating chronic desk pain.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Wrist & Forearm Strain (RSI)</h3>
                  <p className="text-muted-foreground">
                    Repetitive typing and mouse use creates carpal tunnel symptoms and forearm tightness. Our therapists use specialized techniques to address median nerve compression, release forearm tension, and improve circulation to hands and wrists.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Sparkles className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Shoulder & Upper Trap Tension</h3>
                  <p className="text-muted-foreground">
                    Mouse work and typing create rock-hard shoulder muscles and upper trap knots. We use deep tissue techniques to release trigger points, restore shoulder mobility, and eliminate the chronic tension that makes simple movements painful.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Mental Fatigue & Stress</h3>
                  <p className="text-muted-foreground">
                    Constant connectivity, deadline pressure, and time zone juggling create mental exhaustion that manifests physically. Our relaxation techniques calm your nervous system, improve sleep quality, and restore the mental clarity you need to excel at remote work.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Coffee className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Poor Circulation & Sedentary Issues</h3>
                  <p className="text-muted-foreground">
                    Prolonged sitting reduces blood flow to extremities and creates whole-body stiffness. Massage therapy improves circulation, reduces fluid retention in legs, and counteracts the negative health effects of desk-bound work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Digital Nomad Massage Techniques */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Specialized Techniques for Remote Workers
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">Deep Tissue Therapy for Chronic Desk Pain</h3>
                <p className="text-muted-foreground">
                  We use sustained pressure and slow strokes to target deep layers of muscle tissue affected by prolonged sitting. This addresses chronic pain in the lower back, hips, and shoulders that develops from months or years of desk work. Unlike surface-level relaxation massage, deep tissue therapy breaks up scar tissue adhesions and physically lengthens shortened muscle fibers.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">Myofascial Release for Tech Neck</h3>
                <p className="text-muted-foreground">
                  Tech neck creates fascial restrictions in the cervical spine and upper shoulders. We use sustained gentle pressure to release these fascial restrictions, allowing your head to return to proper alignment over your spine. This technique is particularly effective for the forward head posture that affects nearly every laptop user.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">Trigger Point Therapy for Shoulder Knots</h3>
                <p className="text-muted-foreground">
                  Remote work creates specific trigger points in shoulder and upper trap muscles. We locate these hyperirritable spots and use focused pressure to deactivate them, providing immediate relief from referral pain patterns that often cause headaches and arm pain. Most digital nomads have 5-8 active trigger points that benefit from targeted treatment.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">Stretching & Mobility Work</h3>
                <p className="text-muted-foreground">
                  We incorporate assisted stretching to address shortened hip flexors, tight hamstrings, and limited spinal rotation common in sedentary workers. These stretches complement the massage work and provide tools you can use independently to maintain mobility between sessions.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-3">Stress Relief & Nervous System Calming</h3>
                <p className="text-muted-foreground">
                  We integrate relaxation techniques that activate your parasympathetic nervous system, countering the fight-or-flight response that becomes chronic in high-pressure remote work environments. This improves sleep quality, reduces anxiety, and helps you mentally disconnect from work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Digital Nomad Wellness Packages & Pricing */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Wellness Packages for Digital Nomads
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
              Flexible packages designed for the nomadic lifestyle. All prices in Indonesian Rupiah (IDR). Mobile service to your villa, hotel, or select coworking spaces in Canggu, Ubud, and Seminyak.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">Quick Relief</h3>
                    <div className="text-3xl font-bold text-primary mb-2">Rp 280.000</div>
                    <p className="text-sm text-muted-foreground">60 minutes</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Focused neck & shoulder work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Tech neck relief</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Upper back tension release</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Perfect for lunch breaks</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <a href="https://wa.me/628112656869?text=I'd like to book a 60-minute Quick Relief session" target="_blank" rel="noopener noreferrer">
                      Book Quick Relief
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      Most Popular
                    </div>
                    <h3 className="text-xl font-bold mb-2">Full Body Reset</h3>
                    <div className="text-3xl font-bold text-primary mb-2">Rp 360.000</div>
                    <p className="text-sm text-muted-foreground">90 minutes</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Complete upper & lower body</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Deep tissue for chronic pain</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Hip flexor & back relief</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Stress reduction techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Posture assessment included</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <a href="https://wa.me/628112656869?text=I'd like to book a 90-minute Full Body Reset session" target="_blank" rel="noopener noreferrer">
                      Book Full Body Reset
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">Deep Repair</h3>
                    <div className="text-3xl font-bold text-primary mb-2">Rp 480.000</div>
                    <p className="text-sm text-muted-foreground">120 minutes</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Extended deep tissue work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Multiple problem areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Stretching & mobility work</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Perfect for chronic issues</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline" asChild>
                    <a href="https://wa.me/628112656869?text=I'd like to book a 120-minute Deep Repair session" target="_blank" rel="noopener noreferrer">
                      Book Deep Repair
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Multi-Session Packages */}
            <div className="bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Long-Term Nomad Packages (Save Up To 20%)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">Monthly Maintenance</h4>
                      <p className="text-sm text-muted-foreground">4 sessions x 90 minutes</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">Rp 1.296.000</div>
                      <div className="text-sm text-muted-foreground line-through">Rp 1.440.000</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Weekly sessions to prevent chronic pain from developing. Ideal for nomads staying 1-3 months. Save 10% compared to individual bookings.
                  </p>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="https://wa.me/628112656869?text=I'm interested in the Monthly Maintenance package" target="_blank" rel="noopener noreferrer">
                      Inquire About Monthly Package
                    </a>
                  </Button>
                </div>

                <div className="bg-background p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">Quarterly Wellness</h4>
                      <p className="text-sm text-muted-foreground">12 sessions x 90 minutes</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">Rp 3.456.000</div>
                      <div className="text-sm text-muted-foreground line-through">Rp 4.320.000</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Best value for long-term stays. Regular treatment to maintain optimal physical condition throughout your Bali residency. Save 20%.
                  </p>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="https://wa.me/628112656869?text=I'm interested in the Quarterly Wellness package" target="_blank" rel="noopener noreferrer">
                      Inquire About Quarterly Package
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Where We Serve Digital Nomads */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              We Come to Your Workspace or Accommodation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Mobile massage service to all major digital nomad hubs in Bali. We bring professional equipment, massage table, oils, and towels directly to you—no need to interrupt your productive day to commute to a spa.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Canggu & Berawa</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Bali's #1 digital nomad destination. Service to Dojo Bali, Tropical Nomad, Biliq, Outpost, private villas, and hotels throughout Canggu, Berawa, Pererenan, and Umalas.
                  </p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/canggu">
                      Canggu Services →
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Ubud</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Cultural heart and spiritual wellness capital. Service to Hubud, Outpost Ubud, Tribal, private villas in Penestanan, Campuhan, Nyuh Kuning, and Ubud Center.
                  </p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/ubud-centre">
                      Ubud Services →
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-8 h-8 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">Seminyak & Sanur</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upscale work-life balance destinations. Service to hotels, serviced apartments, private accommodations, and select coworking spaces in both areas.
                  </p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/seminyak">
                      Seminyak Services →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-secondary/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Coworking Space Service</h3>
              <p className="text-muted-foreground mb-4">
                We partner with select coworking spaces to provide on-site massage services. If your coworking space has a quiet room or wellness area, we can arrange regular sessions. Contact us to discuss bringing wellness services to your coworking community.
              </p>
              <Button variant="outline" asChild>
                <a href="https://wa.me/628112656869?text=I'd like to discuss coworking space massage services" target="_blank" rel="noopener noreferrer">
                  Discuss Coworking Partnership
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: What to Expect During Your Session */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What to Expect: Digital Nomad Wellness Session
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Initial Consultation (5-10 minutes)</h3>
                  <p className="text-muted-foreground">
                    We start with a brief assessment of your work setup, main pain points, and problem areas. You'll describe your typical work routine, existing injuries or chronic issues, and specific goals for the session. This ensures treatment is targeted to your unique needs as a remote worker.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Setup & Preparation (5 minutes)</h3>
                  <p className="text-muted-foreground">
                    We set up our professional massage table in your space (bedroom, living room, or quiet area). You'll undress to your comfort level and lie on the table with towel draping for modesty. We use high-quality massage oils suitable for tropical climate.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Targeted Treatment (50-110 minutes)</h3>
                  <p className="text-muted-foreground">
                    The therapist uses a combination of techniques based on your specific issues—deep tissue for chronic desk pain, myofascial release for tech neck, trigger point therapy for shoulder knots, and stretching for tight hip flexors. Communication is encouraged throughout to ensure pressure is appropriate.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Self-Care Recommendations (5 minutes)</h3>
                  <p className="text-muted-foreground">
                    After treatment, the therapist provides specific self-care advice—stretches you can do at your desk, ergonomic improvements for your workspace, and guidance on preventing future issues. For regular clients, we track progress and adjust treatment plans over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <h3 className="font-bold mb-3">Important Notes for Remote Workers:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Schedule sessions during your least productive hours (typically mid-afternoon) to maximize benefit without disrupting flow state</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Allow 10-15 minutes after your session before returning to focused work—your body and mind need integration time</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Drink plenty of water before and after treatment to support muscle recovery and toxin elimination</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>For best results with chronic desk pain, commit to weekly sessions for 4-6 weeks before spacing out to bi-weekly maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Ergonomic Tips for Digital Nomads */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Complementary Wellness: Ergonomic Tips Between Sessions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              While regular massage therapy addresses existing tension and pain, preventing future issues requires attention to your daily work setup and habits. Here's what we recommend to our digital nomad clients:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-3">Screen Position</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Top of screen at or just below eye level</li>
                  <li>• Screen 20-28 inches from your eyes</li>
                  <li>• Use laptop stand + external keyboard/mouse</li>
                  <li>• Position screen perpendicular to windows to reduce glare</li>
                </ul>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-3">Sitting Posture</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Feet flat on floor (or footrest)</li>
                  <li>• Knees at 90-degree angle, slightly lower than hips</li>
                  <li>• Lower back supported (use cushion if needed)</li>
                  <li>• Shoulders relaxed, not hunched forward</li>
                </ul>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-3">Movement Breaks</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Stand and move every 30-45 minutes</li>
                  <li>• Neck rolls and shoulder shrugs hourly</li>
                  <li>• Walk to cafe for coffee instead of delivery</li>
                  <li>• Consider standing desk for part of day</li>
                </ul>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-3">Daily Habits</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Morning stretching or yoga (even 10 minutes)</li>
                  <li>• Swimming or gym 2-3x weekly</li>
                  <li>• Walk or bike instead of scooter when possible</li>
                  <li>• Limit caffeine—it tightens muscles</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-secondary/20 rounded-lg">
              <h3 className="font-bold text-lg mb-3">⚠️ Warning Signs You Need Immediate Treatment</h3>
              <p className="text-muted-foreground mb-4">
                Don't wait until pain becomes unbearable. If you experience any of these symptoms, book a session within 48 hours:
              </p>
              <ul className="grid md:grid-cols-2 gap-3 text-muted-foreground text-sm">
                <li>• Persistent headaches, especially occipital (base of skull)</li>
                <li>• Numbness or tingling in fingers/hands</li>
                <li>• Sharp pain when turning head</li>
                <li>• Unable to find comfortable sleeping position</li>
                <li>• Pain radiating down arm from shoulder</li>
                <li>• Reduced range of motion in neck or shoulders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials from Digital Nomads */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Remote Workers Say
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "I've been working remotely from Canggu for 6 months and the tech neck was getting unbearable. After just three weekly sessions, I can actually turn my head without pain. The therapist came to my villa which was perfect—I could roll straight into bed afterward. Now I do monthly maintenance sessions."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Sarah M.</div>
                      <div className="text-sm text-muted-foreground">Software Developer, USA</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "As a designer spending 10+ hours daily on my laptop, the shoulder pain was affecting my productivity. The deep tissue work was exactly what I needed—they really understood the specific issues remote workers face. Mobile service meant no lost work time. Highly recommend to fellow nomads."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">James K.</div>
                      <div className="text-sm text-muted-foreground">UI/UX Designer, Australia</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "I work from Outpost Ubud and was getting chronic lower back pain from sitting all day. The quarterly package has been a game-changer—it's actually cheaper than a good ergonomic chair and way more effective. The therapist gave me simple stretches to do between sessions too."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Michael R.</div>
                      <div className="text-sm text-muted-foreground">Marketing Consultant, Canada</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Working across time zones means long hours and weird schedules. The stress was showing up as massive shoulder knots. Having weekly massage at my Berawa villa keeps me functional and productive. Worth every rupiah—wish I'd started this sooner in my nomad journey."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Emma L.</div>
                      <div className="text-sm text-muted-foreground">Product Manager, UK</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ for Digital Nomads */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-3">Do you really come to coworking spaces?</h3>
                <p className="text-muted-foreground">
                  We can provide massage services at select coworking spaces that have private quiet rooms or wellness areas. Most nomads prefer sessions at their villa or hotel accommodation where privacy and comfort are guaranteed. If your coworking space is interested in hosting regular wellness sessions for members, contact us to discuss partnership arrangements.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-3">How often should digital nomads get massage therapy?</h3>
                <p className="text-muted-foreground">
                  For preventative care, we recommend bi-weekly or monthly sessions. If you're dealing with chronic desk pain, tech neck, or other work-related issues, weekly sessions for 4-6 weeks provides the best results for breaking up tension patterns. Many long-term nomads transition to monthly maintenance after initial intensive treatment.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-3">Can I claim massage therapy as a business expense?</h3>
                <p className="text-muted-foreground">
                  This depends on your country's tax laws and your business structure. In many jurisdictions, therapeutic massage for work-related pain can be claimed as a health expense if you have supporting medical documentation. We provide receipts with treatment details. Consult your accountant or tax advisor for specific guidance.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-3">What if I have a deadline and need to work immediately after?</h3>
                <p className="text-muted-foreground">
                  We recommend scheduling sessions during natural breaks in your workday—typically mid-afternoon when energy dips. However, many clients report improved focus and productivity immediately following treatment, especially with the 60-minute Quick Relief option. Allow at least 10-15 minutes for transition time before jumping back into focused work.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-3">Do you provide equipment or do I need a massage table?</h3>
                <p className="text-muted-foreground">
                  We bring everything: professional massage table, linens, towels, premium massage oils, and any additional equipment needed. You don't need to provide anything except a quiet space (bedroom, living room, or enclosed balcony works well) with enough room for our table setup (about 2m x 3m).
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-3">What areas of Bali do you serve?</h3>
                <p className="text-muted-foreground">
                  We provide mobile service throughout Canggu, Berawa, Pererenan, Umalas, Seminyak, Ubud Center, Penestanan, Nyuh Kuning, Sanur, and select other areas. If you're outside these zones, contact us—we can often accommodate special requests with advance notice, particularly for multi-session packages.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-3">Can you help with specific issues like carpal tunnel or RSI?</h3>
                <p className="text-muted-foreground">
                  Yes. Repetitive strain injuries from constant typing and mouse use respond well to therapeutic massage. We use techniques specifically designed to address median nerve compression, forearm tightness, and wrist inflammation. However, massage is complementary treatment—if you have severe symptoms, consult a medical professional for comprehensive care.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="font-bold text-lg mb-3">What's your cancellation policy?</h3>
                <p className="text-muted-foreground">
                  We understand the unpredictable nature of remote work deadlines. Cancel or reschedule up to 4 hours before your appointment without penalty. Late cancellations (less than 4 hours) or no-shows forfeit 50% of the session fee. For package holders, missed sessions can be rescheduled within the package validity period.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="font-bold text-lg mb-3">Do you offer couples sessions for nomad couples?</h3>
                <p className="text-muted-foreground">
                  Absolutely. Many nomad couples book simultaneous sessions (requires two therapists). This is particularly popular for end-of-week relaxation or when you both need treatment. Contact us to arrange couples appointments—pricing is slightly discounted compared to two individual sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work Pain-Free in Bali?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop letting desk pain, tech neck, and work-related tension limit your productivity and enjoyment of the digital nomad lifestyle. Book your first wellness session today and experience the difference professional therapeutic massage makes for remote workers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869?text=I'd like to book a Digital Nomad Wellness session" target="_blank" rel="noopener noreferrer">
                  Book via WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <a href="tel:+628112656869">
                  Call +62 811-2656-869
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Available daily 9 AM - 9 PM • Mobile service throughout Canggu, Ubud & Seminyak • Same-day bookings often available
            </p>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Digital Nomad Wellness Bali",
          "description": "Professional massage therapy services designed specifically for digital nomads and remote workers in Bali. Treatment for desk pain, tech neck, and work-related physical strain.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Luxu Massae",
            "telephone": "+62-811-2656-869",
            "priceRange": "Rp 280.000 - Rp 480.000",
            "areaServed": ["Canggu", "Ubud", "Seminyak", "Berawa", "Sanur"]
          },
          "serviceType": "Therapeutic Massage for Remote Workers",
          "offers": [
            {
              "@type": "Offer",
              "name": "Quick Relief (60 minutes)",
              "price": "280000",
              "priceCurrency": "IDR"
            },
            {
              "@type": "Offer",
              "name": "Full Body Reset (90 minutes)",
              "price": "360000",
              "priceCurrency": "IDR"
            },
            {
              "@type": "Offer",
              "name": "Deep Repair (120 minutes)",
              "price": "480000",
              "priceCurrency": "IDR"
            }
          ]
        })}
      </script>

        </main>
        <Footer />
      </div>
    </>
  );
}
