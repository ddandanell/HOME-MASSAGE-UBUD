import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "@/components/CookieConsent";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import VillaPartnerships from "@/pages/VillaPartnerships";
import Sustainability from "@/pages/Sustainability";
import BlogNew from "@/pages/BlogNew";
import Pricing from "@/pages/Pricing";
import Testimonials from "@/pages/Testimonials";
import NotFound from "@/pages/NotFound";
import ServiceAreas from "@/pages/ServiceAreas";
import Treatments from "@/pages/Treatments";

// Treatment Pages
import TraditionalBalineseMassage from "@/pages/treatments/TraditionalBalineseMassage";
import DeepTissueMassage from "@/pages/treatments/DeepTissueMassage";
import AromatherapyMassage from "@/pages/treatments/AromatherapyMassage";
import LymphaticDrainageMassage from "@/pages/treatments/LymphaticDrainageMassage";
import HotStoneMassage from "@/pages/treatments/HotStoneMassage";
import ThaiMassage from "@/pages/treatments/ThaiMassage";
import PregnancyMassage from "@/pages/treatments/PregnancyMassage";
import FootReflexology from "@/pages/treatments/FootReflexology";
import PostHikeRecoveryMassage from "@/pages/treatments/PostHikeRecoveryMassage";
import YogaStretchMassage from "@/pages/treatments/YogaStretchMassage";
import DetoxWellnessMassage from "@/pages/treatments/DetoxWellnessMassage";
import CouplesWellnessRitual from "@/pages/treatments/CouplesWellnessRitual";
import HerbalBambooMassage from "@/pages/treatments/HerbalBambooMassage";

// Area Pages - Ubud
import UbudCentre from "@/pages/areas/UbudCentre";
import UbudNorth from "@/pages/areas/UbudNorth";
import UbudEast from "@/pages/areas/UbudEast";
import UbudSouth from "@/pages/areas/UbudSouth";
import UbudLuxuryVillas from "@/pages/areas/UbudLuxuryVillas";
// import Tegallalang from "@/pages/areas/Tegallalang"; // Temporarily disabled due to syntax error
import Sidemen from "@/pages/areas/Sidemen";

// Area Pages - South Bali
import Seminyak from "@/pages/areas/Seminyak";
import Canggu from "@/pages/areas/Canggu";
import Berawa from "@/pages/areas/Berawa";
import Pererenan from "@/pages/areas/Pererenan";
import Petitenget from "@/pages/areas/Petitenget";
import Umalas from "@/pages/areas/Umalas";
import Kerobokan from "@/pages/areas/Kerobokan";
import Legian from "@/pages/areas/Legian";
import Kuta from "@/pages/areas/Kuta";
import Sanur from "@/pages/areas/Sanur";
import NusaDua from "@/pages/areas/NusaDua";
import Jimbaran from "@/pages/areas/Jimbaran";
import Uluwatu from "@/pages/areas/Uluwatu";
import Ungasan from "@/pages/areas/Ungasan";

// Area Pages - North & East Bali
import Lovina from "@/pages/areas/Lovina";
import Amed from "@/pages/areas/Amed";
import Candidasa from "@/pages/areas/Candidasa";

function Router() {
  return (
    <Switch>
      {/* Main Pages */}
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/treatments" component={Treatments} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/villa-partnerships" component={VillaPartnerships} />
      <Route path="/sustainability" component={Sustainability} />
      <Route path="/blog" component={BlogNew} />
      
      {/* Treatment Pages */}
      <Route path="/ubud/traditional-balinese-massage" component={TraditionalBalineseMassage} />
      <Route path="/ubud/deep-tissue-massage" component={DeepTissueMassage} />
      <Route path="/ubud/aromatherapy-massage" component={AromatherapyMassage} />
      <Route path="/ubud/lymphatic-drainage-massage" component={LymphaticDrainageMassage} />
      <Route path="/ubud/hot-stone-massage" component={HotStoneMassage} />
      <Route path="/ubud/thai-massage" component={ThaiMassage} />
      <Route path="/ubud/pregnancy-massage" component={PregnancyMassage} />
      <Route path="/ubud/foot-reflexology" component={FootReflexology} />
      <Route path="/ubud/post-hike-recovery-massage" component={PostHikeRecoveryMassage} />
      <Route path="/ubud/yoga-stretch-massage" component={YogaStretchMassage} />
      <Route path="/ubud/detox-wellness-massage" component={DetoxWellnessMassage} />
      <Route path="/ubud/couples-wellness-ritual" component={CouplesWellnessRitual} />
      <Route path="/ubud/herbal-bamboo-massage" component={HerbalBambooMassage} />
      
      {/* Area Pages - Ubud */}
      <Route path="/ubud-centre" component={UbudCentre} />
      <Route path="/ubud-north" component={UbudNorth} />
      <Route path="/ubud-east" component={UbudEast} />
      <Route path="/ubud-south" component={UbudSouth} />
      <Route path="/ubud-luxury-villas" component={UbudLuxuryVillas} />
      {/* <Route path="/tegallalang" component={Tegallalang} /> */}
      <Route path="/sidemen" component={Sidemen} />
      
      {/* Area Pages - South Bali */}
      <Route path="/seminyak" component={Seminyak} />
      <Route path="/canggu" component={Canggu} />
      <Route path="/berawa" component={Berawa} />
      <Route path="/pererenan" component={Pererenan} />
      <Route path="/petitenget" component={Petitenget} />
      <Route path="/umalas" component={Umalas} />
      <Route path="/kerobokan" component={Kerobokan} />
      <Route path="/legian" component={Legian} />
      <Route path="/kuta" component={Kuta} />
      <Route path="/sanur" component={Sanur} />
      <Route path="/nusa-dua" component={NusaDua} />
      <Route path="/jimbaran" component={Jimbaran} />
      <Route path="/uluwatu" component={Uluwatu} />
      <Route path="/ungasan" component={Ungasan} />
      
      {/* Area Pages - North & East Bali */}
      <Route path="/lovina" component={Lovina} />
      <Route path="/amed" component={Amed} />
      <Route path="/candidasa" component={Candidasa} />
      
      {/* 404 */}
      <Route path="/:rest*" component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <CookieConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
