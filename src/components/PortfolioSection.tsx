"use client";

import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { useLocale } from "@/context/LocaleContext";

export function PortfolioSection() {
  const { copy, portfolioCards } = useLocale();
  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-background pb-3 pt-6 md:pb-4 md:pt-8"
      aria-labelledby="portfolio-heading"
    >
      <PortfolioCarousel
        cards={portfolioCards}
        title={copy.portfolio.title}
        subtitle={copy.portfolio.subtitle}
        headingId="portfolio-heading"
        regionAriaLabel={copy.ui.portfolioCarouselRegion}
        navPrevLabel={copy.ui.portfolioCarouselPrev}
        navNextLabel={copy.ui.portfolioCarouselNext}
        priorityCount={2}
      />
    </section>
  );
}
