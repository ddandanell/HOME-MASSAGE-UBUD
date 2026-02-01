import React from 'react';
import { Link } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Smartphone, Building, ArrowRight } from 'lucide-react';

interface CrossSiloLinksProps {
  currentSilo?: 'home-massage' | 'mobile-massage' | 'villa-massage';
}

export default function CrossSiloLinks({ currentSilo }: CrossSiloLinksProps) {
  const silos = [
    {
      id: 'home-massage',
      name: 'Home Massage',
      href: '/home-massage',
      icon: Home,
      description: 'Professional massage delivered to your accommodation',
      priceFrom: 'From Rp 280,000',
      color: 'bg-blue-50 border-blue-200 hover:border-blue-400'
    },
    {
      id: 'mobile-massage',
      name: 'Mobile Massage',
      href: '/mobile-massage',
      icon: Smartphone,
      description: 'On-demand massage service throughout Bali',
      priceFrom: 'From Rp 280,000',
      color: 'bg-green-50 border-green-200 hover:border-green-400'
    },
    {
      id: 'villa-massage',
      name: 'Villa Massage',
      href: '/villa-massage',
      icon: Building,
      description: 'Luxury spa experience at your private villa',
      priceFrom: 'From Rp 280,000',
      color: 'bg-purple-50 border-purple-200 hover:border-purple-400'
    }
  ];

  const filteredSilos = silos.filter(silo => silo.id !== currentSilo);

  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Explore Our Massage Services
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            We offer multiple ways to experience professional massage in Bali – choose what works best for you
          </p>
          
          <div className={`grid gap-6 ${
            filteredSilos.length === 1 ? 'md:grid-cols-1 max-w-md mx-auto' : 
            filteredSilos.length === 2 ? 'md:grid-cols-2' : 
            'md:grid-cols-3'
          }`}>
            {filteredSilos.map((silo) => (
              <Link key={silo.id} href={silo.href}>
                <Card className={`${silo.color} border-2 transition-all cursor-pointer hover:shadow-lg h-full`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <silo.icon className="w-6 h-6 text-primary" />
                      <h3 className="text-lg font-semibold">{silo.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3 flex-grow">
                      {silo.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-primary">{silo.priceFrom}</span>
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              All services include licensed therapists, professional equipment, and premium oils
            </p>
            <Button variant="outline" asChild>
              <Link href="/pricing">
                View Full Pricing Details →
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
