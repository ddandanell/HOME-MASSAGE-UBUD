import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle } from 'lucide-react';

export default function BookingCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-secondary/30 to-background" id="booking">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Book Your Home Massage?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us now to schedule your professional home massage service. Same-day appointments available throughout Bali.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Booking
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="tel:+628112656869">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Available 7 days a week • Same-day appointments • Professional licensed therapists
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
