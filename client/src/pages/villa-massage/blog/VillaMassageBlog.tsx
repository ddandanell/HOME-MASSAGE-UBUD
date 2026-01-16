import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Home, Sparkles } from 'lucide-react';

export default function VillaMassageBlog() {
  const blogPosts = [
    {
      title: "Benefits of Villa Massage in Bali",
      excerpt: "Discover the unique advantages of enjoying professional massage therapy in the privacy and comfort of your Bali villa. From personalized treatments to complete relaxation, learn why villa massage is the ultimate wellness choice.",
      link: "/villa-massage/blog/villa-massage-benefits-bali",
      icon: Sparkles,
      readTime: "8 min read"
    },
    {
      title: "Villa Massage vs Spa: Why Privacy Matters",
      excerpt: "Compare the villa massage experience with traditional spa visits. Explore how privacy, convenience, and personalization make villa massage the preferred choice for discerning travelers in Bali.",
      link: "/villa-massage/blog/villa-massage-vs-spa",
      icon: Home,
      readTime: "7 min read"
    },
    {
      title: "How to Prepare Your Villa for a Massage",
      excerpt: "Essential tips for creating the perfect environment for your villa massage session. Learn what to prepare, how to set up your space, and ensure maximum comfort during your treatment.",
      link: "/villa-massage/blog/prepare-villa-for-massage",
      icon: Calendar,
      readTime: "6 min read"
    },
    {
      title: "Best Villa Massage Services for Couples",
      excerpt: "Planning a romantic getaway? Discover the best villa massage options for couples in Bali. From synchronized treatments to romantic settings, create unforgettable moments together.",
      link: "/villa-massage/blog/best-villa-massage-couples",
      icon: Users,
      readTime: "7 min read"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Villa Massage Blog | Expert Guides & Wellness Tips - Bali"
        description="Expert articles about villa massage in Bali. Learn about benefits, booking tips, privacy advantages, and preparing your villa for professional massage treatments. Read our comprehensive wellness guides."
      />
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Villa Massage Blog
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Expert Guides, Wellness Tips & Everything You Need to Know About Villa Massage in Bali
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/villa-massage">
                    <Button size="lg" variant="default">
                      Explore Villa Massage Services
                    </Button>
                  </Link>
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline">
                      Book Now via WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Introduction */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Welcome to our comprehensive villa massage blog, your ultimate resource for everything related to private massage treatments in Bali. Whether you're staying in a luxury villa in Ubud, a beachfront property in Seminyak, or anywhere else across the island, our expert guides will help you make the most of your villa massage experience.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Villa massage has become increasingly popular among travelers who value privacy, personalization, and the ultimate convenience of professional wellness treatments delivered right to their accommodation. Our blog articles cover essential topics from choosing the right massage type to preparing your space for optimal relaxation.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Explore our carefully curated articles below to discover how villa massage can transform your Bali vacation into a truly rejuvenating wellness retreat. Each guide is written by experienced therapists and wellness professionals who understand the unique benefits of in-villa treatments.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => {
                    const Icon = post.icon;
                    return (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <span className="text-sm text-muted-foreground">{post.readTime}</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-semibold mb-3">
                            <Link href={post.link} className="hover:text-primary transition-colors">
                              {post.title}
                            </Link>
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>
                          <Link href={post.link}>
                            <Button variant="outline" className="w-full">
                              Read Full Article
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Popular Services Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Popular Villa Massage Services</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover our most requested villa massage treatments available throughout Bali
                </p>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="/villa-massage/services/balinese-massage">
                    <Button variant="outline" className="w-full">
                      Balinese Massage
                    </Button>
                  </Link>
                  <Link href="/villa-massage/services/aromatherapy-massage">
                    <Button variant="outline" className="w-full">
                      Aromatherapy Massage
                    </Button>
                  </Link>
                  <Link href="/villa-massage/services/deep-tissue-massage">
                    <Button variant="outline" className="w-full">
                      Deep Tissue Massage
                    </Button>
                  </Link>
                  <Link href="/villa-massage/services/couples-massage">
                    <Button variant="outline" className="w-full">
                      Couples Massage
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Locations Section */}
          <section className="py-16 bg-secondary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Villa Massage by Location</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We provide professional villa massage services across Bali's most popular destinations
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/villa-massage/cities/ubud">
                    <Button variant="secondary">
                      Ubud Villa Massage
                    </Button>
                  </Link>
                  <Link href="/villa-massage/cities/seminyak">
                    <Button variant="secondary">
                      Seminyak Villa Massage
                    </Button>
                  </Link>
                  <Link href="/villa-massage/cities/canggu">
                    <Button variant="secondary">
                      Canggu Villa Massage
                    </Button>
                  </Link>
                  <Link href="/villa-massage/cities/sanur">
                    <Button variant="secondary">
                      Sanur Villa Massage
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Book Your Villa Massage?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Experience the ultimate relaxation with our professional villa massage services. Available daily from 9 AM to 10 PM across Bali.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="https://wa.me/628112656869" target="_blank" rel="noopener noreferrer">
                    <Button size="lg">
                      Book via WhatsApp
                    </Button>
                  </a>
                  <Link href="/villa-massage">
                    <Button size="lg" variant="outline">
                      View All Services
                    </Button>
                  </Link>
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
