"use client";

import Image from "next/image";
import Link from "next/link";
import { LocationMap } from "@/components/LocationMap";
import { getServiceAreasForLocale } from "@/content/serviceAreasLocale";
import { useLocale } from "@/context/LocaleContext";
import { routes, siteUrl } from "@/lib/site";

export function ServiceAreasView() {
  const { locale, copy } = useLocale();
  const lp = copy.locationPage;
  const serviceAreas = getServiceAreasForLocale(locale);
  const listUrl = `${siteUrl}${routes.location}`;

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: lp.schemaItemListName,
    description: lp.schemaItemListDescription,
    numberOfItems: serviceAreas.length,
    itemListElement: serviceAreas.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: area.name,
      description: area.description.slice(0, 220),
      url: `${listUrl}#${area.id}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-[var(--container-pad)] pb-[var(--section-y)] pt-4">
        <article>
          <h1 className="text-display text-3xl font-bold text-foreground md:text-4xl">
            {lp.title}
          </h1>
          <p className="mt-6 font-sans text-base leading-relaxed text-muted md:text-lg">
            {lp.lead}
          </p>
          <div className="mt-8 space-y-4 font-sans text-sm leading-relaxed text-muted md:text-base">
            {lp.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-8 font-sans text-sm leading-relaxed text-muted md:text-base">
            {copy.ui.locationDetailParagraph}
          </p>
        </article>

        <section
          className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16"
          aria-labelledby="service-areas-heading"
        >
          <h2
            id="service-areas-heading"
            className="text-display text-2xl font-bold text-foreground md:text-3xl"
          >
            {lp.serviceAreasHeading}
          </h2>
          <p className="mt-3 max-w-3xl font-sans text-sm text-muted md:text-base">
            {copy.ui.locationDirectoryIntro.replace(
              "{count}",
              String(serviceAreas.length),
            )}
          </p>

          <ul className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {serviceAreas.map((area) => (
              <li
                key={area.id}
                id={area.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-pill-bg/40 shadow-sm transition hover:border-accent/30"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-muted">
                  <Image
                    src={area.imageSrc}
                    alt={area.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.2em] text-accent">
                    {area.region}
                  </p>
                  <h3 className="text-display mt-1 text-lg font-semibold text-foreground md:text-xl">
                    {area.name}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted md:text-[0.9375rem]">
                    {area.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-2xl font-sans text-sm text-muted">
            {lp.serviceAreasFootnote}
          </p>

          <p className="mt-6 text-center font-sans text-xs text-muted/80">
            {copy.ui.locationPhotoCredit}{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-2 hover:underline"
            >
              Pexels
            </a>
            {copy.ui.locationPhotoCreditSuffix}
          </p>

          <p className="mt-10 font-sans text-sm text-muted">
            <span className="font-medium text-foreground/90">
              {copy.footer.location}
            </span>{" "}
            —{" "}
            <Link
              href={routes.contact}
              className="text-accent underline-offset-2 hover:underline"
            >
              {copy.ui.locationContactLine}
            </Link>{" "}
            {copy.ui.locationContactSuffix}
          </p>
        </section>

        <div className="mt-16 border-t border-border pt-12 md:mt-20 md:pt-16">
          <h2 className="text-display text-xl font-semibold text-foreground md:text-2xl">
            {copy.ui.locationCoverageMapHeading}
          </h2>
          <div className="mt-4">
            <LocationMap
              src={lp.mapEmbedSrc}
              title={copy.ui.mapIframeTitle}
              caption={lp.mapCaption}
            />
          </div>
        </div>
      </div>
    </>
  );
}
