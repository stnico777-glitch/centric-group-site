import { siteCopy } from "@/content/siteCopy";

export function OffersSection() {
  return (
    <section
      id="offers"
      className="scroll-mt-24 border-t border-border bg-neutral-50 px-[var(--container-pad)] py-[var(--section-y)]"
      aria-labelledby="offers-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center md:mb-14">
          <h2
            id="offers-heading"
            className="text-display text-2xl font-bold text-foreground md:text-3xl"
          >
            {siteCopy.offers.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-sans text-sm text-muted md:text-base">
            {siteCopy.offers.subtitle}
          </p>
        </header>

        <ul className="grid gap-6 md:grid-cols-3">
          {siteCopy.offers.items.map((offer) => (
            <li
              key={offer.title}
              className="flex flex-col rounded-2xl border border-border bg-background p-8 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-display text-lg font-semibold text-foreground">
                {offer.title}
              </h3>
              <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted">
                {offer.description}
              </p>
              <a
                href="#contact"
                className="mt-6 inline-flex w-fit font-sans text-xs font-semibold tracking-[0.18em] text-foreground underline-offset-4 transition hover:underline"
              >
                {offer.cta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
