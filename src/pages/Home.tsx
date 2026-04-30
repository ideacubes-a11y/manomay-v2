import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import EfficiencyGrid from "../components/EfficiencyGrid";
import Industries from "../components/Industries";
import OdooModules from "../components/OdooModules";
import Advantage from "../components/Advantage";
import AboutUs from "../components/AboutUs";
import SavingsCalculator from "../components/SavingsCalculator";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <AboutUs />
      <EfficiencyGrid />
      <Industries />
      <OdooModules />
      <Advantage />
      <Testimonials />
      <SavingsCalculator />
    </main>
  );
}
