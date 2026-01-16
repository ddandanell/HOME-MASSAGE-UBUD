import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageLayout from '@/components/PageLayout';
import { Clock, DollarSign } from 'lucide-react';

export default function DeepTissueHomeMassage() {
  return (
    <PageLayout
      title="Deep Tissue Home Massage | Therapeutic Massage at Your Villa"
      description="Professional deep tissue home massage delivered to your accommodation. Target chronic pain and muscle tension with therapeutic home massage. Book today."
    >
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Deep Tissue Home Massage
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Therapeutic deep pressure delivered as professional home massage
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                Book This Home Massage
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What Is Deep Tissue Home Massage?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                Deep tissue home massage uses firm, focused pressure to reach deeper muscle layers and fascia. This therapeutic 
                home massage targets chronic tension, muscle knots, and injury recovery while you remain in the comfort of your 
                villa or hotel. Our specialized therapists bring clinical expertise directly to your accommodation.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Unlike lighter relaxation techniques, deep tissue home massage applies sustained pressure across muscle grain 
                to break down adhesions and restore mobility. This home massage approach combines trigger point therapy, 
                myofascial release, and deep stripping strokes to address underlying muscle dysfunction.
              </p>
              <p className="text-lg text-muted-foreground">
                Your deep tissue home massage session begins with assessment of problem areas, followed by progressive pressure 
                application. The therapist adjusts intensity throughout to maintain therapeutic benefit without excessive discomfort. 
                This targeted home massage delivers measurable relief for chronic pain and restricted movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Who Benefits from Deep Tissue Home Massage?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Athletes & Active Travelers</h3>
                  <p className="text-muted-foreground">
                    Recovery-focused home massage for hiking, surfing, or yoga intensive activities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Chronic Pain Sufferers</h3>
                  <p className="text-muted-foreground">
                    Therapeutic home massage addressing long-term muscle tension and restriction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Desk Workers</h3>
                  <p className="text-muted-foreground">
                    Target shoulder, neck, and back tension from prolonged sitting with home massage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Injury Recovery</h3>
                  <p className="text-muted-foreground">
                    Rehabilitative home massage supporting healing from strains and overuse injuries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Deep Tissue Home Massage Pricing
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">60 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold">Rp 270,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Focused deep tissue home massage for specific problem areas
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary border-2">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">90 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold">Rp 390,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Full body deep tissue home massage with comprehensive treatment
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-semibold">120 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold">Rp 510,000</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Extended therapeutic home massage for complex muscle patterns
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Deep Tissue Home Massage Beats Spa Visits
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Rest Immediately After</h3>
                  <p className="text-muted-foreground">
                    Deep tissue home massage can cause temporary soreness. Rest in your own bed instead of traveling post-treatment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Privacy for Therapy</h3>
                  <p className="text-muted-foreground">
                    Discuss pain openly and adjust pressure freely during home massage without spa environment concerns.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Consistent Follow-Up</h3>
                  <p className="text-muted-foreground">
                    Schedule regular deep tissue home massage sessions without travel barrier affecting commitment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ice & Heat Access</h3>
                  <p className="text-muted-foreground">
                    Apply ice or heat from your own facilities before or after deep tissue home massage as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Your Deep Tissue Home Massage
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Professional therapeutic home massage delivered to your accommodation
              </p>
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                  Book This Home Massage
                </a>
              </Button>
            </div>

            <div className="border-t pt-12">
              <h3 className="text-xl font-semibold mb-6">Related Home Massage Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" asChild>
                  <Link href="/home-massage">
                    ← All Home Massage Services
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/services/balinese">
                    Balinese Home Massage →
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/cities/canggu">
                    Home Massage in Canggu
                  </Link>
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <Button variant="outline" asChild>
                  <Link href="/home-massage/knowledge/what-to-expect">
                    What to Expect
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/home-massage/blog/what-is-home-massage">
                    Learn About Home Massage
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
