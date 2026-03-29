import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { OffersSection } from "@/components/OffersSection";
import { PortfolioReel } from "@/components/PortfolioReel";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PortfolioSectionRow2 } from "@/components/PortfolioSectionRow2";
import { VisionSection } from "@/components/VisionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <VisionSection />
      <PortfolioSection />
      <PortfolioReel />
      <PortfolioSectionRow2 />
      <OffersSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
