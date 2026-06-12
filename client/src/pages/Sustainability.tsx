import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased pt-10">
      <SEOHead
        title="Sustainability | Eco-Friendly Massage Practices Ubud"
        description="Sustainable & eco-friendly massage in Ubud. Natural oils, eco products & responsible practices. Green spa service committed to protecting Bali's environment."
        canonical="https://homemassageubud.com/sustainability"
        keywords="eco massage ubud, sustainable spa ubud, green massage practices, natural oils bali, eco-friendly wellness ubud"
      />
      <SchemaMarkup
        type="service"
        data={{
          name: "Sustainable & Eco-Friendly Massage",
          description: "Sustainable & eco-friendly massage in Ubud. Natural oils, eco products & responsible practices. Green spa service committed to protecting Bali's environment.",
          url: "https://homemassageubud.com/sustainability",
          areaServed: ["Ubud", "Seminyak", "Canggu", "Sanur", "Nusa Dua"],
          offers: [
            {
              name: "Eco-Friendly Home Massage",
              price: "350000",
              description: "Sustainable massage using natural oils and eco products in the comfort of your home."
            }
          ]
        }}
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