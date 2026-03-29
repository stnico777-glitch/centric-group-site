import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { portfolioCardsRow2, siteCopy } from "@/content/siteCopy";

export function PortfolioSectionRow2() {
  return (
    <section
      className="bg-background pb-[var(--section-y)] pt-10 md:pt-14"
      aria-labelledby="portfolio-heading-row-2"
    >
      <PortfolioCarousel
        cards={portfolioCardsRow2}
        title={siteCopy.portfolio.title}
        subtitle={siteCopy.portfolio.row2Subtitle}
        headingId="portfolio-heading-row-2"
        regionAriaLabel="More selected work carousel"
        navPrevLabel="Scroll selected work row left"
        navNextLabel="Scroll selected work row right"
        priorityCount={0}
      />
    </section>
  );
}
