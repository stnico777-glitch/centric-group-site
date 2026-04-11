"use client";

import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { useLocale } from "@/context/LocaleContext";

export function PortfolioSectionRow2() {
  const { copy, portfolioCardsRow2 } = useLocale();
  return (
    <section
      className="bg-background pb-[var(--section-y)] pt-10 md:pt-14"
      aria-labelledby="portfolio-heading-row-2"
    >
      <PortfolioCarousel
        cards={portfolioCardsRow2}
        title={copy.portfolio.title}
        subtitle={copy.portfolio.row2Subtitle}
        headingId="portfolio-heading-row-2"
        regionAriaLabel={copy.ui.portfolioRow2Region}
        navPrevLabel={copy.ui.portfolioRow2Prev}
        navNextLabel={copy.ui.portfolioRow2Next}
        priorityCount={0}
      />
    </section>
  );
}
