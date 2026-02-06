import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import LayoutsGrid from "@/components/sections/LayoutsGrid";
import Pricing from "@/components/sections/Pricing";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturesGrid />
        <LayoutsGrid />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
