import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased pt-10">
      <SEOHead
        title="Sustainability | Eco-Friendly Massage Practices Ubud"
        description="Sustainable & eco-friendly massage services in Ubud. Natural oils, eco products & responsible practices. Green spa committed to Bali's environment."
        canonical="https://homemassageubud.com/sustainability"
        keywords="eco massage ubud, sustainable spa ubud, green massage practices, natural oils bali, eco-friendly wellness ubud"
      />
      <TopBanner />
      <Header />
      <main className="pt-20">
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
}