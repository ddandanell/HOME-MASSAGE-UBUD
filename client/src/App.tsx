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
import Sitemap from "@/pages/Sitemap";
import RecommendedServices from "@/pages/RecommendedServices";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsAndConditions from "@/pages/TermsAndConditions";

// Blog Articles
import PremiumHomeMassageKuta from "@/pages/blog/PremiumHomeMassageKuta";

// Digital Nomad Wellness - Hub
import DigitalNomadWellnessHub from "@/pages/digital-nomad-wellness/DigitalNomadWellnessHub";

// Home Massage Silo - Hub
import HomeMassageHub from "@/pages/home-massage/HomeMassageHub";

// Home Massage Silo - Services
import HomeMassageServicesIndex from "@/pages/home-massage/services/HomeMassageServicesIndex";
import BalineseHomeMassage from "@/pages/home-massage/services/BalineseHomeMassage";
import DeepTissueHomeMassage from "@/pages/home-massage/services/DeepTissueHomeMassage";
import CouplesHomeMassage from "@/pages/home-massage/services/CouplesHomeMassage";
import RelaxationHomeMassage from "@/pages/home-massage/services/RelaxationHomeMassage";

// Home Massage Silo - Cities
import HomeMassageCitiesIndex from "@/pages/home-massage/cities/HomeMassageCitiesIndex";
import HomeMassageUbud from "@/pages/home-massage/cities/HomeMassageUbud";
import HomeMassageCanggu from "@/pages/home-massage/cities/HomeMassageCanggu";
import HomeMassageSeminyak from "@/pages/home-massage/cities/HomeMassageSeminyak";
import HomeMassageSanur from "@/pages/home-massage/cities/HomeMassageSanur";
import HomeMassageNusaDua from "@/pages/home-massage/cities/HomeMassageNusaDua";

// Home Massage Silo - Knowledge
import HomeMassageKnowledgeIndex from "@/pages/home-massage/knowledge/HomeMassageKnowledgeIndex";
import HomeMassageSafety from "@/pages/home-massage/knowledge/HomeMassageSafety";
import HomeMassageBenefits from "@/pages/home-massage/knowledge/HomeMassageBenefits";
import HomeMassageAftercare from "@/pages/home-massage/knowledge/HomeMassageAftercare";
import HomeMassageWhatToExpect from "@/pages/home-massage/knowledge/HomeMassageWhatToExpect";

// Home Massage Silo - Blog
import HomeMassageBlog from "@/pages/home-massage/blog/HomeMassageBlog";
import WhatIsHomeMassage from "@/pages/home-massage/blog/WhatIsHomeMassage";
import HomeMassageVsSpa from "@/pages/home-massage/blog/HomeMassageVsSpa";
import IsHomeMassageSafe from "@/pages/home-massage/blog/IsHomeMassageSafe";
import WhyTouristsPreferHomeMassage from "@/pages/home-massage/blog/WhyTouristsPreferHomeMassage";
import HowToBookHomeMassage from "@/pages/home-massage/blog/HowToBookHomeMassage";

// Mobile Massage Silo - Hub
import MobileMassageHub from "@/pages/mobile-massage/MobileMassageHub";

// Mobile Massage Silo - Services
import MobileMassageServicesIndex from "@/pages/mobile-massage/services/MobileMassageServicesIndex";
import BalineseMobileMassage from "@/pages/mobile-massage/services/BalineseMobileMassage";
import DeepTissueMobileMassage from "@/pages/mobile-massage/services/DeepTissueMobileMassage";
import CouplesMobileMassage from "@/pages/mobile-massage/services/CouplesMobileMassage";
import RelaxationMobileMassage from "@/pages/mobile-massage/services/RelaxationMobileMassage";

// Mobile Massage Silo - Cities
import MobileMassageCitiesIndex from "@/pages/mobile-massage/cities/MobileMassageCitiesIndex";
import MobileMassageUbud from "@/pages/mobile-massage/cities/MobileMassageUbud";
import MobileMassageCanggu from "@/pages/mobile-massage/cities/MobileMassageCanggu";
import MobileMassageSeminyak from "@/pages/mobile-massage/cities/MobileMassageSeminyak";
import MobileMassageSanur from "@/pages/mobile-massage/cities/MobileMassageSanur";
import MobileMassageNusaDua from "@/pages/mobile-massage/cities/MobileMassageNusaDua";

// Mobile Massage Silo - Knowledge
import MobileMassageKnowledgeIndex from "@/pages/mobile-massage/knowledge/MobileMassageKnowledgeIndex";
import IsMobileMassageSafe from "@/pages/mobile-massage/knowledge/IsMobileMassageSafe";
import HowToPrepareMobileMassage from "@/pages/mobile-massage/knowledge/HowToPrepareMobileMassage";
import AftercareAfterMobileMassage from "@/pages/mobile-massage/knowledge/AftercareAfterMobileMassage";
import WhatToExpectMobileMassage from "@/pages/mobile-massage/knowledge/WhatToExpectMobileMassage";

// Mobile Massage Silo - Blog
import MobileMassageBlog from "@/pages/mobile-massage/blog/MobileMassageBlog";
import WhatIsMobileMassage from "@/pages/mobile-massage/blog/WhatIsMobileMassage";
import MobileMassageVsSpa from "@/pages/mobile-massage/blog/MobileMassageVsSpa";
import MobileMassageForTravelers from "@/pages/mobile-massage/blog/MobileMassageForTravelers";
import HowToBookMobileMassage from "@/pages/mobile-massage/blog/HowToBookMobileMassage";

// Villa Massage Silo - Hub
import VillaMassageHub from "@/pages/villa-massage/VillaMassageHub";

// Villa Massage Silo - Services
import VillaMassageServicesIndex from "@/pages/villa-massage/services/VillaMassageServicesIndex";
import BalineseVillaMassage from "@/pages/villa-massage/services/BalineseVillaMassage";
import DeepTissueVillaMassage from "@/pages/villa-massage/services/DeepTissueVillaMassage";
import CouplesVillaMassage from "@/pages/villa-massage/services/CouplesVillaMassage";
import RelaxationVillaMassage from "@/pages/villa-massage/services/RelaxationVillaMassage";
import AromatherapyVillaMassage from "@/pages/villa-massage/services/AromatherapyVillaMassage";
import HotStoneVillaMassage from "@/pages/villa-massage/services/HotStoneVillaMassage";
import PrenatalVillaMassage from "@/pages/villa-massage/services/PrenatalVillaMassage";
import ThaiVillaMassage from "@/pages/villa-massage/services/ThaiVillaMassage";
import SportsVillaMassage from "@/pages/villa-massage/services/SportsVillaMassage";
import ReflexologyVillaMassage from "@/pages/villa-massage/services/ReflexologyVillaMassage";

// Villa Massage Silo - Cities
import VillaMassageCitiesIndex from "@/pages/villa-massage/cities/VillaMassageCitiesIndex";
import VillaMassageUbud from "@/pages/villa-massage/cities/VillaMassageUbud";
import VillaMassageSeminyak from "@/pages/villa-massage/cities/VillaMassageSeminyak";
import VillaMassageCanggu from "@/pages/villa-massage/cities/VillaMassageCanggu";
import VillaMassageSanur from "@/pages/villa-massage/cities/VillaMassageSanur";
import VillaMassageNusaDua from "@/pages/villa-massage/cities/VillaMassageNusaDua";
import VillaMassageUluwatu from "@/pages/villa-massage/cities/VillaMassageUluwatu";
import VillaMassageJimbaran from "@/pages/villa-massage/cities/VillaMassageJimbaran";
import VillaMassageKuta from "@/pages/villa-massage/cities/VillaMassageKuta";
import VillaMassageLegian from "@/pages/villa-massage/cities/VillaMassageLegian";
import VillaMassagePererenan from "@/pages/villa-massage/cities/VillaMassagePererenan";

// Villa Massage Silo - Blog
import VillaMassageBlog from "@/pages/villa-massage/blog/VillaMassageBlog";
import VillaMassageBenefitsBali from "@/pages/villa-massage/blog/VillaMassageBenefitsBali";
import VillaMassageVsSpaPost from "@/pages/villa-massage/blog/VillaMassageVsSpa";
import PrepareVillaForMassage from "@/pages/villa-massage/blog/PrepareVillaForMassage";
import BestVillaMassageCouples from "@/pages/villa-massage/blog/BestVillaMassageCouples";

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
// NOTE: Tegallalang.tsx excluded - file has syntax errors and needs recreation from template
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

// Service Landing Pages (25 keyword-based pages)
import Massage from "@/pages/services/Massage";
import SpaMassage from "@/pages/services/SpaMassage";
import FullBodyMassage from "@/pages/services/FullBodyMassage";
import CouplesMassage from "@/pages/services/CouplesMassage";
import TraditionalMassage from "@/pages/services/TraditionalMassage";
import RelaxingMassage from "@/pages/services/RelaxingMassage";
import BodyMassage from "@/pages/services/BodyMassage";
import FootMassage from "@/pages/services/FootMassage";
import Reflexology from "@/pages/services/Reflexology";
import SportsMassage from "@/pages/services/SportsMassage";
import PrenatalMassage from "@/pages/services/PrenatalMassage";
import PregnancyMassagePage from "@/pages/services/PregnancyMassage";
import PostnatalMassage from "@/pages/services/PostnatalMassage";
import HomeMassage from "@/pages/services/HomeMassage";
import MobileMassage from "@/pages/services/MobileMassage";
import AtHomeMassage from "@/pages/services/AtHomeMassage";
import ProfessionalMassage from "@/pages/services/ProfessionalMassage";
import BodyTherapyMassage from "@/pages/services/BodyTherapyMassage";
import WellnessMassage from "@/pages/services/WellnessMassage";
import TherapeuticMassage from "@/pages/services/TherapeuticMassage";
import LuxuryMassage from "@/pages/services/LuxuryMassage";
import BestMassageServices from "@/pages/services/BestMassageServices";
import MassageBali from "@/pages/services/MassageBali";

function Router() {
  return (
    <Switch>
      {/* Main Pages */}
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/treatments" component={Treatments} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/sitemap" component={Sitemap} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/villa-partnerships" component={VillaPartnerships} />
      <Route path="/sustainability" component={Sustainability} />
      <Route path="/recommended-services" component={RecommendedServices} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/blog" component={BlogNew} />
      
      {/* Blog Articles */}
      <Route path="/blog/premium-home-massage-kuta" component={PremiumHomeMassageKuta} />
      
      {/* Digital Nomad Wellness - Complete structure */}
      <Route path="/digital-nomad-wellness" component={DigitalNomadWellnessHub} />
      
      {/* Home Massage Silo - Complete structure */}
      <Route path="/home-massage" component={HomeMassageHub} />
      
      {/* Home Massage Services */}
      <Route path="/home-massage/services" component={HomeMassageServicesIndex} />
      <Route path="/home-massage/services/balinese" component={BalineseHomeMassage} />
      <Route path="/home-massage/services/deep-tissue" component={DeepTissueHomeMassage} />
      <Route path="/home-massage/services/couples" component={CouplesHomeMassage} />
      <Route path="/home-massage/services/relaxation" component={RelaxationHomeMassage} />
      
      {/* Home Massage Cities */}
      <Route path="/home-massage/cities" component={HomeMassageCitiesIndex} />
      <Route path="/home-massage/cities/ubud" component={HomeMassageUbud} />
      <Route path="/home-massage/cities/canggu" component={HomeMassageCanggu} />
      <Route path="/home-massage/cities/seminyak" component={HomeMassageSeminyak} />
      <Route path="/home-massage/cities/sanur" component={HomeMassageSanur} />
      <Route path="/home-massage/cities/nusa-dua" component={HomeMassageNusaDua} />
      
      {/* Home Massage Knowledge */}
      <Route path="/home-massage/knowledge" component={HomeMassageKnowledgeIndex} />
      <Route path="/home-massage/knowledge/safety" component={HomeMassageSafety} />
      <Route path="/home-massage/knowledge/benefits" component={HomeMassageBenefits} />
      <Route path="/home-massage/knowledge/aftercare" component={HomeMassageAftercare} />
      <Route path="/home-massage/knowledge/what-to-expect" component={HomeMassageWhatToExpect} />
      
      {/* Home Massage Blog */}
      <Route path="/home-massage/blog" component={HomeMassageBlog} />
      <Route path="/home-massage/blog/what-is-home-massage" component={WhatIsHomeMassage} />
      <Route path="/home-massage/blog/home-massage-vs-spa" component={HomeMassageVsSpa} />
      <Route path="/home-massage/blog/is-home-massage-safe" component={IsHomeMassageSafe} />
      <Route path="/home-massage/blog/why-tourists-prefer-home-massage" component={WhyTouristsPreferHomeMassage} />
      <Route path="/home-massage/blog/how-to-book-home-massage" component={HowToBookHomeMassage} />
      
      {/* Mobile Massage Silo - Complete structure */}
      <Route path="/mobile-massage" component={MobileMassageHub} />
      
      {/* Mobile Massage Services */}
      <Route path="/mobile-massage/services" component={MobileMassageServicesIndex} />
      <Route path="/mobile-massage/services/balinese-mobile-massage" component={BalineseMobileMassage} />
      <Route path="/mobile-massage/services/deep-tissue-mobile-massage" component={DeepTissueMobileMassage} />
      <Route path="/mobile-massage/services/couples-mobile-massage" component={CouplesMobileMassage} />
      <Route path="/mobile-massage/services/relaxation-mobile-massage" component={RelaxationMobileMassage} />
      
      {/* Mobile Massage Cities */}
      <Route path="/mobile-massage/cities" component={MobileMassageCitiesIndex} />
      <Route path="/mobile-massage/cities/ubud" component={MobileMassageUbud} />
      <Route path="/mobile-massage/cities/canggu" component={MobileMassageCanggu} />
      <Route path="/mobile-massage/cities/seminyak" component={MobileMassageSeminyak} />
      <Route path="/mobile-massage/cities/sanur" component={MobileMassageSanur} />
      <Route path="/mobile-massage/cities/nusa-dua" component={MobileMassageNusaDua} />
      
      {/* Mobile Massage Knowledge */}
      <Route path="/mobile-massage/knowledge" component={MobileMassageKnowledgeIndex} />
      <Route path="/mobile-massage/knowledge/is-mobile-massage-safe" component={IsMobileMassageSafe} />
      <Route path="/mobile-massage/knowledge/how-to-prepare-mobile-massage" component={HowToPrepareMobileMassage} />
      <Route path="/mobile-massage/knowledge/aftercare-after-mobile-massage" component={AftercareAfterMobileMassage} />
      <Route path="/mobile-massage/knowledge/what-to-expect-mobile-massage" component={WhatToExpectMobileMassage} />
      
      {/* Mobile Massage Blog */}
      <Route path="/mobile-massage/blog" component={MobileMassageBlog} />
      <Route path="/mobile-massage/blog/what-is-mobile-massage" component={WhatIsMobileMassage} />
      <Route path="/mobile-massage/blog/mobile-massage-vs-spa" component={MobileMassageVsSpa} />
      <Route path="/mobile-massage/blog/mobile-massage-for-travelers" component={MobileMassageForTravelers} />
      <Route path="/mobile-massage/blog/how-to-book-mobile-massage" component={HowToBookMobileMassage} />
      
      {/* Villa Massage Silo - Complete structure */}
      <Route path="/villa-massage" component={VillaMassageHub} />
      
      {/* Villa Massage Services */}
      <Route path="/villa-massage/services" component={VillaMassageServicesIndex} />
      <Route path="/villa-massage/services/balinese" component={BalineseVillaMassage} />
      <Route path="/villa-massage/services/deep-tissue" component={DeepTissueVillaMassage} />
      <Route path="/villa-massage/services/couples" component={CouplesVillaMassage} />
      <Route path="/villa-massage/services/relaxation" component={RelaxationVillaMassage} />
      <Route path="/villa-massage/services/aromatherapy" component={AromatherapyVillaMassage} />
      <Route path="/villa-massage/services/hot-stone" component={HotStoneVillaMassage} />
      <Route path="/villa-massage/services/prenatal" component={PrenatalVillaMassage} />
      <Route path="/villa-massage/services/thai" component={ThaiVillaMassage} />
      <Route path="/villa-massage/services/sports" component={SportsVillaMassage} />
      <Route path="/villa-massage/services/reflexology" component={ReflexologyVillaMassage} />
      
      {/* Villa Massage Cities */}
      <Route path="/villa-massage/cities" component={VillaMassageCitiesIndex} />
      <Route path="/villa-massage/cities/ubud" component={VillaMassageUbud} />
      <Route path="/villa-massage/cities/seminyak" component={VillaMassageSeminyak} />
      <Route path="/villa-massage/cities/canggu" component={VillaMassageCanggu} />
      <Route path="/villa-massage/cities/sanur" component={VillaMassageSanur} />
      <Route path="/villa-massage/cities/nusa-dua" component={VillaMassageNusaDua} />
      <Route path="/villa-massage/cities/uluwatu" component={VillaMassageUluwatu} />
      <Route path="/villa-massage/cities/jimbaran" component={VillaMassageJimbaran} />
      <Route path="/villa-massage/cities/kuta" component={VillaMassageKuta} />
      <Route path="/villa-massage/cities/legian" component={VillaMassageLegian} />
      <Route path="/villa-massage/cities/pererenan" component={VillaMassagePererenan} />
      
      {/* Villa Massage Blog */}
      <Route path="/villa-massage/blog" component={VillaMassageBlog} />
      <Route path="/villa-massage/blog/benefits-bali" component={VillaMassageBenefitsBali} />
      <Route path="/villa-massage/blog/vs-spa" component={VillaMassageVsSpaPost} />
      <Route path="/villa-massage/blog/prepare-villa" component={PrepareVillaForMassage} />
      <Route path="/villa-massage/blog/best-couples" component={BestVillaMassageCouples} />
      
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
      {/* NOTE: Tegallalang route excluded - page file needs to be recreated */}
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
      
      {/* Service Landing Pages (keyword-based) */}
      <Route path="/services/massage" component={Massage} />
      <Route path="/services/spa-massage" component={SpaMassage} />
      <Route path="/services/deep-tissue-massage" component={DeepTissueMassage} />
      <Route path="/services/full-body-massage" component={FullBodyMassage} />
      <Route path="/services/couples-massage" component={CouplesMassage} />
      <Route path="/services/traditional-massage" component={TraditionalMassage} />
      <Route path="/services/aromatherapy-massage" component={AromatherapyMassage} />
      <Route path="/services/hot-stone-massage" component={HotStoneMassage} />
      <Route path="/services/relaxing-massage" component={RelaxingMassage} />
      <Route path="/services/body-massage" component={BodyMassage} />
      <Route path="/services/foot-massage" component={FootMassage} />
      <Route path="/services/reflexology" component={Reflexology} />
      <Route path="/services/sports-massage" component={SportsMassage} />
      <Route path="/services/prenatal-massage" component={PrenatalMassage} />
      <Route path="/services/pregnancy-massage" component={PregnancyMassagePage} />
      <Route path="/services/postnatal-massage" component={PostnatalMassage} />
       <Route path="/services/home-massage" component={HomeMassage} />
       <Route path="/services/mobile-massage" component={MobileMassage} />
       <Route path="/services/at-home-massage" component={AtHomeMassage} />
       <Route path="/services/professional-massage" component={ProfessionalMassage} />
       <Route path="/services/body-therapy-massage" component={BodyTherapyMassage} />
       <Route path="/services/wellness-massage" component={WellnessMassage} />
       <Route path="/services/therapeutic-massage" component={TherapeuticMassage} />
       <Route path="/services/luxury-massage" component={LuxuryMassage} />
       <Route path="/services/best-massage-services" component={BestMassageServices} />
       <Route path="/services/massage-bali" component={MassageBali} />
      
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
