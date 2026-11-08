import Hero from "@/components/Hero";
import TaglineReveal from "@/components/TaglineReveal";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import ComponentCatalog from "@/components/ComponentCatalog";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TaglineReveal />
      <Benefits />
      <HowItWorks />
      <ComponentCatalog />
      <FAQ />
      <FinalCTA />
    </>
  );
}