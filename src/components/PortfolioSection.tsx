import { PortfolioCarousel } from "@/components/PortfolioCarousel";
import { portfolioCards, siteCopy } from "@/content/siteCopy";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-24 bg-background pb-3 pt-6 md:pb-4 md:pt-8"
      aria-labelledby="portfolio-heading"
    >
      <PortfolioCarousel
        cards={portfolioCards}
        title={siteCopy.portfolio.title}
        subtitle={siteCopy.portfolio.subtitle}
        headingId="portfolio-heading"
        regionAriaLabel="Portfolio projects carousel"
        navPrevLabel="Scroll portfolio left"
        navNextLabel="Scroll portfolio right"
        priorityCount={2}
      />
    </section>
  );
}
