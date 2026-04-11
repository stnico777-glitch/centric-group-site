import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { Hero } from "@/components/Hero";
import { OffersSection } from "@/components/OffersSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioReel } from "@/components/PortfolioReel";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PortfolioSectionRow2 } from "@/components/PortfolioSectionRow2";
import { VisionSection } from "@/components/VisionSection";
import { defaultTitle, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: defaultTitle,
  description:
    "Architectural plans, permits, kitchen and bath remodels, tile, and drywall — Centric Group, South Florida.",
  alternates: { canonical: siteUrl },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <VisionSection />
      <ProcessSection />
      <PortfolioSection />
      <PortfolioReel />
      <PortfolioSectionRow2 />
      <OffersSection />
      <AboutSection />
      <GoogleReviewsSection />
    </>
  );
}
