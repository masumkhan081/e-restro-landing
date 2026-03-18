import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import LayoutsGrid from "@/components/sections/LayoutsGrid";
import WhyChoose from "@/components/sections/WhyChoose";
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
        <WhyChoose />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
