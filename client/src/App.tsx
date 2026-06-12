import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "@/components/CookieConsent";

// Eagerly load critical pages (above-the-fold, high traffic)
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

// Lazy load all other pages for code splitting
const Services = lazy(() => import("@/pages/Services"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const VillaPartnerships = lazy(() => import("@/pages/VillaPartnerships"));
const Sustainability = lazy(() => import("@/pages/Sustainability"));
const BlogNew = lazy(() => import("@/pages/BlogNew"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const NailCare = lazy(() => import("@/pages/NailCare"));
const Testimonials = lazy(() => import("@/pages/Testimonials"));
const ServiceAreas = lazy(() => import("@/pages/ServiceAreas"));
const Treatments = lazy(() => import("@/pages/Treatments"));
const Sitemap = lazy(() => import("@/pages/Sitemap"));
const RecommendedServices = lazy(() => import("@/pages/RecommendedServices"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));

// Blog Articles
const PremiumHomeMassageKuta = lazy(() => import("@/pages/blog/PremiumHomeMassageKuta"));

// Digital Nomad Wellness
const DigitalNomadWellnessHub = lazy(() => import("@/pages/digital-nomad-wellness/DigitalNomadWellnessHub"));

// Home Massage Silo
const HomeMassageHub = lazy(() => import("@/pages/home-massage/HomeMassageHub"));
const HomeMassageServicesIndex = lazy(() => import("@/pages/home-massage/services/HomeMassageServicesIndex"));
const BalineseHomeMassage = lazy(() => import("@/pages/home-massage/services/BalineseHomeMassage"));
const DeepTissueHomeMassage = lazy(() => import("@/pages/home-massage/services/DeepTissueHomeMassage"));
const CouplesHomeMassage = lazy(() => import("@/pages/home-massage/services/CouplesHomeMassage"));
const RelaxationHomeMassage = lazy(() => import("@/pages/home-massage/services/RelaxationHomeMassage"));
const HomeMassageCitiesIndex = lazy(() => import("@/pages/home-massage/cities/HomeMassageCitiesIndex"));
const HomeMassageUbud = lazy(() => import("@/pages/home-massage/cities/HomeMassageUbud"));
const HomeMassageCanggu = lazy(() => import("@/pages/home-massage/cities/HomeMassageCanggu"));
const HomeMassageSeminyak = lazy(() => import("@/pages/home-massage/cities/HomeMassageSeminyak"));
const HomeMassageSanur = lazy(() => import("@/pages/home-massage/cities/HomeMassageSanur"));
const HomeMassageNusaDua = lazy(() => import("@/pages/home-massage/cities/HomeMassageNusaDua"));
const HomeMassageKnowledgeIndex = lazy(() => import("@/pages/home-massage/knowledge/HomeMassageKnowledgeIndex"));
const HomeMassageSafety = lazy(() => import("@/pages/home-massage/knowledge/HomeMassageSafety"));
const HomeMassageBenefits = lazy(() => import("@/pages/home-massage/knowledge/HomeMassageBenefits"));
const HomeMassageAftercare = lazy(() => import("@/pages/home-massage/knowledge/HomeMassageAftercare"));
const HomeMassageWhatToExpect = lazy(() => import("@/pages/home-massage/knowledge/HomeMassageWhatToExpect"));
const HomeMassageBlog = lazy(() => import("@/pages/home-massage/blog/HomeMassageBlog"));
const WhatIsHomeMassage = lazy(() => import("@/pages/home-massage/blog/WhatIsHomeMassage"));
const HomeMassageVsSpa = lazy(() => import("@/pages/home-massage/blog/HomeMassageVsSpa"));
const IsHomeMassageSafe = lazy(() => import("@/pages/home-massage/blog/IsHomeMassageSafe"));
const WhyTouristsPreferHomeMassage = lazy(() => import("@/pages/home-massage/blog/WhyTouristsPreferHomeMassage"));
const HowToBookHomeMassage = lazy(() => import("@/pages/home-massage/blog/HowToBookHomeMassage"));
const HomeMassageGuideBali = lazy(() => import("@/pages/home-massage/blog/HomeMassageGuideBali"));
const BenefitsHomeMassageBali = lazy(() => import("@/pages/home-massage/blog/BenefitsHomeMassageBali"));
const HomeMassageVsSpaBali = lazy(() => import("@/pages/home-massage/blog/HomeMassageVsSpaBali"));
const HomeMassageSeminyakCanggu = lazy(() => import("@/pages/home-massage/blog/HomeMassageSeminyakCanggu"));

// Mobile Massage Silo
const MobileMassageHub = lazy(() => import("@/pages/mobile-massage/MobileMassageHub"));
const MobileMassageServicesIndex = lazy(() => import("@/pages/mobile-massage/services/MobileMassageServicesIndex"));
const BalineseMobileMassage = lazy(() => import("@/pages/mobile-massage/services/BalineseMobileMassage"));
const DeepTissueMobileMassage = lazy(() => import("@/pages/mobile-massage/services/DeepTissueMobileMassage"));
const CouplesMobileMassage = lazy(() => import("@/pages/mobile-massage/services/CouplesMobileMassage"));
const RelaxationMobileMassage = lazy(() => import("@/pages/mobile-massage/services/RelaxationMobileMassage"));
const MobileMassageCitiesIndex = lazy(() => import("@/pages/mobile-massage/cities/MobileMassageCitiesIndex"));
const MobileMassageUbud = lazy(() => import("@/pages/mobile-massage/cities/MobileMassageUbud"));
const MobileMassageCanggu = lazy(() => import("@/pages/mobile-massage/cities/MobileMassageCanggu"));
const MobileMassageSeminyak = lazy(() => import("@/pages/mobile-massage/cities/MobileMassageSeminyak"));
const MobileMassageSanur = lazy(() => import("@/pages/mobile-massage/cities/MobileMassageSanur"));
const MobileMassageNusaDua = lazy(() => import("@/pages/mobile-massage/cities/MobileMassageNusaDua"));
const MobileMassageKnowledgeIndex = lazy(() => import("@/pages/mobile-massage/knowledge/MobileMassageKnowledgeIndex"));
const IsMobileMassageSafe = lazy(() => import("@/pages/mobile-massage/knowledge/IsMobileMassageSafe"));
const HowToPrepareMobileMassage = lazy(() => import("@/pages/mobile-massage/knowledge/HowToPrepareMobileMassage"));
const AftercareAfterMobileMassage = lazy(() => import("@/pages/mobile-massage/knowledge/AftercareAfterMobileMassage"));
const WhatToExpectMobileMassage = lazy(() => import("@/pages/mobile-massage/knowledge/WhatToExpectMobileMassage"));
const MobileMassageBlog = lazy(() => import("@/pages/mobile-massage/blog/MobileMassageBlog"));
const WhatIsMobileMassage = lazy(() => import("@/pages/mobile-massage/blog/WhatIsMobileMassage"));
const MobileMassageVsSpa = lazy(() => import("@/pages/mobile-massage/blog/MobileMassageVsSpa"));
const MobileMassageForTravelers = lazy(() => import("@/pages/mobile-massage/blog/MobileMassageForTravelers"));
const HowToBookMobileMassage = lazy(() => import("@/pages/mobile-massage/blog/HowToBookMobileMassage"));

// Villa Massage Silo
const VillaMassageHub = lazy(() => import("@/pages/villa-massage/VillaMassageHub"));
const VillaMassageServicesIndex = lazy(() => import("@/pages/villa-massage/services/VillaMassageServicesIndex"));
const BalineseVillaMassage = lazy(() => import("@/pages/villa-massage/services/BalineseVillaMassage"));
const DeepTissueVillaMassage = lazy(() => import("@/pages/villa-massage/services/DeepTissueVillaMassage"));
const CouplesVillaMassage = lazy(() => import("@/pages/villa-massage/services/CouplesVillaMassage"));
const RelaxationVillaMassage = lazy(() => import("@/pages/villa-massage/services/RelaxationVillaMassage"));
const AromatherapyVillaMassage = lazy(() => import("@/pages/villa-massage/services/AromatherapyVillaMassage"));
const HotStoneVillaMassage = lazy(() => import("@/pages/villa-massage/services/HotStoneVillaMassage"));
const PrenatalVillaMassage = lazy(() => import("@/pages/villa-massage/services/PrenatalVillaMassage"));
const ThaiVillaMassage = lazy(() => import("@/pages/villa-massage/services/ThaiVillaMassage"));
const SportsVillaMassage = lazy(() => import("@/pages/villa-massage/services/SportsVillaMassage"));
const ReflexologyVillaMassage = lazy(() => import("@/pages/villa-massage/services/ReflexologyVillaMassage"));
const VillaMassageCitiesIndex = lazy(() => import("@/pages/villa-massage/cities/VillaMassageCitiesIndex"));
const VillaMassageUbud = lazy(() => import("@/pages/villa-massage/cities/VillaMassageUbud"));
const VillaMassageSeminyak = lazy(() => import("@/pages/villa-massage/cities/VillaMassageSeminyak"));
const VillaMassageCanggu = lazy(() => import("@/pages/villa-massage/cities/VillaMassageCanggu"));
const VillaMassageSanur = lazy(() => import("@/pages/villa-massage/cities/VillaMassageSanur"));
const VillaMassageNusaDua = lazy(() => import("@/pages/villa-massage/cities/VillaMassageNusaDua"));
const VillaMassageUluwatu = lazy(() => import("@/pages/villa-massage/cities/VillaMassageUluwatu"));
const VillaMassageJimbaran = lazy(() => import("@/pages/villa-massage/cities/VillaMassageJimbaran"));
const VillaMassageKuta = lazy(() => import("@/pages/villa-massage/cities/VillaMassageKuta"));
const VillaMassageLegian = lazy(() => import("@/pages/villa-massage/cities/VillaMassageLegian"));
const VillaMassagePererenan = lazy(() => import("@/pages/villa-massage/cities/VillaMassagePererenan"));
const VillaMassageBlog = lazy(() => import("@/pages/villa-massage/blog/VillaMassageBlog"));
const VillaMassageBenefitsBali = lazy(() => import("@/pages/villa-massage/blog/VillaMassageBenefitsBali"));
const VillaMassageVsSpaPost = lazy(() => import("@/pages/villa-massage/blog/VillaMassageVsSpa"));
const PrepareVillaForMassage = lazy(() => import("@/pages/villa-massage/blog/PrepareVillaForMassage"));
const BestVillaMassageCouples = lazy(() => import("@/pages/villa-massage/blog/BestVillaMassageCouples"));

// Treatment Pages
const TraditionalBalineseMassage = lazy(() => import("@/pages/treatments/TraditionalBalineseMassage"));
const DeepTissueMassage = lazy(() => import("@/pages/treatments/DeepTissueMassage"));
const AromatherapyMassage = lazy(() => import("@/pages/treatments/AromatherapyMassage"));
const LymphaticDrainageMassage = lazy(() => import("@/pages/treatments/LymphaticDrainageMassage"));
const HotStoneMassage = lazy(() => import("@/pages/treatments/HotStoneMassage"));
const ThaiMassage = lazy(() => import("@/pages/treatments/ThaiMassage"));
const PregnancyMassage = lazy(() => import("@/pages/treatments/PregnancyMassage"));
const FootReflexology = lazy(() => import("@/pages/treatments/FootReflexology"));
const PostHikeRecoveryMassage = lazy(() => import("@/pages/treatments/PostHikeRecoveryMassage"));
const YogaStretchMassage = lazy(() => import("@/pages/treatments/YogaStretchMassage"));
const DetoxWellnessMassage = lazy(() => import("@/pages/treatments/DetoxWellnessMassage"));
const CouplesWellnessRitual = lazy(() => import("@/pages/treatments/CouplesWellnessRitual"));
const HerbalBambooMassage = lazy(() => import("@/pages/treatments/HerbalBambooMassage"));

// Area Pages
const UbudCentre = lazy(() => import("@/pages/areas/UbudCentre"));
const UbudNorth = lazy(() => import("@/pages/areas/UbudNorth"));
const UbudEast = lazy(() => import("@/pages/areas/UbudEast"));
const UbudSouth = lazy(() => import("@/pages/areas/UbudSouth"));
const UbudLuxuryVillas = lazy(() => import("@/pages/areas/UbudLuxuryVillas"));
const Sidemen = lazy(() => import("@/pages/areas/Sidemen"));
const Seminyak = lazy(() => import("@/pages/areas/Seminyak"));
const Canggu = lazy(() => import("@/pages/areas/Canggu"));
const Berawa = lazy(() => import("@/pages/areas/Berawa"));
const Pererenan = lazy(() => import("@/pages/areas/Pererenan"));
const Petitenget = lazy(() => import("@/pages/areas/Petitenget"));
const Umalas = lazy(() => import("@/pages/areas/Umalas"));
const Kerobokan = lazy(() => import("@/pages/areas/Kerobokan"));
const Legian = lazy(() => import("@/pages/areas/Legian"));
const Kuta = lazy(() => import("@/pages/areas/Kuta"));
const Sanur = lazy(() => import("@/pages/areas/Sanur"));
const NusaDua = lazy(() => import("@/pages/areas/NusaDua"));
const Jimbaran = lazy(() => import("@/pages/areas/Jimbaran"));
const Uluwatu = lazy(() => import("@/pages/areas/Uluwatu"));
const Ungasan = lazy(() => import("@/pages/areas/Ungasan"));
const Lovina = lazy(() => import("@/pages/areas/Lovina"));
const Amed = lazy(() => import("@/pages/areas/Amed"));
const Candidasa = lazy(() => import("@/pages/areas/Candidasa"));

// Service Landing Pages
const Massage = lazy(() => import("@/pages/services/Massage"));
const SpaMassage = lazy(() => import("@/pages/services/SpaMassage"));
const FullBodyMassage = lazy(() => import("@/pages/services/FullBodyMassage"));
const CouplesMassage = lazy(() => import("@/pages/services/CouplesMassage"));
const TraditionalMassage = lazy(() => import("@/pages/services/TraditionalMassage"));
const RelaxingMassage = lazy(() => import("@/pages/services/RelaxingMassage"));
const BodyMassage = lazy(() => import("@/pages/services/BodyMassage"));
const FootMassage = lazy(() => import("@/pages/services/FootMassage"));
const Reflexology = lazy(() => import("@/pages/services/Reflexology"));
const SportsMassage = lazy(() => import("@/pages/services/SportsMassage"));
const PrenatalMassage = lazy(() => import("@/pages/services/PrenatalMassage"));
const PregnancyMassagePage = lazy(() => import("@/pages/services/PregnancyMassage"));
const PostnatalMassage = lazy(() => import("@/pages/services/PostnatalMassage"));
const HomeMassage = lazy(() => import("@/pages/services/HomeMassage"));
const MobileMassage = lazy(() => import("@/pages/services/MobileMassage"));
const AtHomeMassage = lazy(() => import("@/pages/services/AtHomeMassage"));
const ProfessionalMassage = lazy(() => import("@/pages/services/ProfessionalMassage"));
const BodyTherapyMassage = lazy(() => import("@/pages/services/BodyTherapyMassage"));
const WellnessMassage = lazy(() => import("@/pages/services/WellnessMassage"));
const TherapeuticMassage = lazy(() => import("@/pages/services/TherapeuticMassage"));
const LuxuryMassage = lazy(() => import("@/pages/services/LuxuryMassage"));
const BestMassageServices = lazy(() => import("@/pages/services/BestMassageServices"));
const MassageBali = lazy(() => import("@/pages/services/MassageBali"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-muted-foreground text-sm">Loading...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
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
        <Route path="/nail-care" component={NailCare} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/villa-partnerships" component={VillaPartnerships} />
        <Route path="/sustainability" component={Sustainability} />
        <Route path="/recommended-services" component={RecommendedServices} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
        <Route path="/blog" component={BlogNew} />
        
        {/* Blog Articles */}
        <Route path="/blog/premium-home-massage-kuta" component={PremiumHomeMassageKuta} />
        
        {/* Digital Nomad Wellness */}
        <Route path="/digital-nomad-wellness" component={DigitalNomadWellnessHub} />
        
        {/* Home Massage Silo */}
        <Route path="/home-massage" component={HomeMassageHub} />
        <Route path="/home-massage/services" component={HomeMassageServicesIndex} />
        <Route path="/home-massage/services/balinese" component={BalineseHomeMassage} />
        <Route path="/home-massage/services/deep-tissue" component={DeepTissueHomeMassage} />
        <Route path="/home-massage/services/couples" component={CouplesHomeMassage} />
        <Route path="/home-massage/services/relaxation" component={RelaxationHomeMassage} />
        <Route path="/home-massage/cities" component={HomeMassageCitiesIndex} />
        <Route path="/home-massage/cities/ubud" component={HomeMassageUbud} />
        <Route path="/home-massage/cities/canggu" component={HomeMassageCanggu} />
        <Route path="/home-massage/cities/seminyak" component={HomeMassageSeminyak} />
        <Route path="/home-massage/cities/sanur" component={HomeMassageSanur} />
        <Route path="/home-massage/cities/nusa-dua" component={HomeMassageNusaDua} />
        <Route path="/home-massage/knowledge" component={HomeMassageKnowledgeIndex} />
        <Route path="/home-massage/knowledge/safety" component={HomeMassageSafety} />
        <Route path="/home-massage/knowledge/benefits" component={HomeMassageBenefits} />
        <Route path="/home-massage/knowledge/aftercare" component={HomeMassageAftercare} />
        <Route path="/home-massage/knowledge/what-to-expect" component={HomeMassageWhatToExpect} />
        <Route path="/home-massage/blog" component={HomeMassageBlog} />
        <Route path="/home-massage/blog/what-is-home-massage" component={WhatIsHomeMassage} />
        <Route path="/home-massage/blog/home-massage-vs-spa" component={HomeMassageVsSpa} />
        <Route path="/home-massage/blog/is-home-massage-safe" component={IsHomeMassageSafe} />
        <Route path="/home-massage/blog/why-tourists-prefer-home-massage" component={WhyTouristsPreferHomeMassage} />
        <Route path="/home-massage/blog/how-to-book-home-massage" component={HowToBookHomeMassage} />
        <Route path="/home-massage/blog/home-massage-guide-bali" component={HomeMassageGuideBali} />
        <Route path="/home-massage/blog/benefits-home-massage-bali" component={BenefitsHomeMassageBali} />
        <Route path="/home-massage/blog/home-massage-vs-spa-bali" component={HomeMassageVsSpaBali} />
        <Route path="/home-massage/blog/home-massage-seminyak-canggu" component={HomeMassageSeminyakCanggu} />
        
        {/* Mobile Massage Silo */}
        <Route path="/mobile-massage" component={MobileMassageHub} />
        <Route path="/mobile-massage/services" component={MobileMassageServicesIndex} />
        <Route path="/mobile-massage/services/balinese-mobile-massage" component={BalineseMobileMassage} />
        <Route path="/mobile-massage/services/deep-tissue-mobile-massage" component={DeepTissueMobileMassage} />
        <Route path="/mobile-massage/services/couples-mobile-massage" component={CouplesMobileMassage} />
        <Route path="/mobile-massage/services/relaxation-mobile-massage" component={RelaxationMobileMassage} />
        <Route path="/mobile-massage/cities" component={MobileMassageCitiesIndex} />
        <Route path="/mobile-massage/cities/ubud" component={MobileMassageUbud} />
        <Route path="/mobile-massage/cities/canggu" component={MobileMassageCanggu} />
        <Route path="/mobile-massage/cities/seminyak" component={MobileMassageSeminyak} />
        <Route path="/mobile-massage/cities/sanur" component={MobileMassageSanur} />
        <Route path="/mobile-massage/cities/nusa-dua" component={MobileMassageNusaDua} />
        <Route path="/mobile-massage/knowledge" component={MobileMassageKnowledgeIndex} />
        <Route path="/mobile-massage/knowledge/is-mobile-massage-safe" component={IsMobileMassageSafe} />
        <Route path="/mobile-massage/knowledge/how-to-prepare-mobile-massage" component={HowToPrepareMobileMassage} />
        <Route path="/mobile-massage/knowledge/aftercare-after-mobile-massage" component={AftercareAfterMobileMassage} />
        <Route path="/mobile-massage/knowledge/what-to-expect-mobile-massage" component={WhatToExpectMobileMassage} />
        <Route path="/mobile-massage/blog" component={MobileMassageBlog} />
        <Route path="/mobile-massage/blog/what-is-mobile-massage" component={WhatIsMobileMassage} />
        <Route path="/mobile-massage/blog/mobile-massage-vs-spa" component={MobileMassageVsSpa} />
        <Route path="/mobile-massage/blog/mobile-massage-for-travelers" component={MobileMassageForTravelers} />
        <Route path="/mobile-massage/blog/how-to-book-mobile-massage" component={HowToBookMobileMassage} />
        
        {/* Villa Massage Silo */}
        <Route path="/villa-massage" component={VillaMassageHub} />
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
        
        {/* Service Landing Pages */}
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
    </Suspense>
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
