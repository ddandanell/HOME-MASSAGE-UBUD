import React from 'react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Check, Award, Users } from 'lucide-react';

export default function SafetyStandards() {
  return (
    <section className="py-16 md:py-20 bg-background" id="safety">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Safety + Professional Standards
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our home massage service maintains the highest safety and professional standards. Every therapist undergoes thorough vetting and training.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Licensed Therapists</h3>
                <p className="text-muted-foreground">
                  All home massage therapists hold valid certifications and licenses. We verify credentials before hiring.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Check className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Background Checked</h3>
                <p className="text-muted-foreground">
                  Every home massage professional completes comprehensive background screening for your security and peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Professional Training</h3>
                <p className="text-muted-foreground">
                  Our home massage therapists receive ongoing training in techniques, hygiene protocols, and customer service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Respectful Service</h3>
                <p className="text-muted-foreground">
                  Professional boundaries maintained at all times. Our home massage code of conduct ensures respectful interactions.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Link href="/home-massage/knowledge/safety" className="text-primary hover:underline font-medium">
              Learn more about home massage safety standards →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
