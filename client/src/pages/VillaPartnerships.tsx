import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import VillaPartnerships from "@/components/VillaPartnerships";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function VillaPartnershipsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased pt-10">
      <SEOHead
        title="Villa Partnerships | Partner with Home Massage Ubud"
        description="Partner your villa/hotel with Home Massage Ubud. Premium in-villa spa services for guests. Enhance guest experience with professional massage. Join 50+ partners."
        canonical="https://homemassageubud.com/villa-partnerships"
        keywords="villa partnerships ubud, hotel massage service, resort spa collaboration, guest wellness ubud, villa amenities bali"
      />
      <TopBanner />
      <Header />
      <main className="pt-20">
        <VillaPartnerships />
      </main>
      <Footer />
    </div>
  );
}