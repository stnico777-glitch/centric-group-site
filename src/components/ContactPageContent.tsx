"use client";

import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { useLocale } from "@/context/LocaleContext";

export function ContactPageContent() {
  const { copy } = useLocale();

  return (
    <article className="relative isolate mx-auto max-w-6xl px-[var(--container-pad)] pb-[var(--section-y)] pt-4">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-16">
        <div>
          <h1 className="text-display text-3xl font-bold text-foreground md:text-4xl">
            {copy.contact.title}
          </h1>
          <p className="mt-6 font-sans text-base leading-relaxed text-muted md:text-lg">
            {copy.contact.body}
          </p>
          <div className="mt-10 flex flex-col gap-4 font-sans text-lg md:flex-row md:flex-wrap md:items-center md:gap-8">
            <a
              href={`mailto:${copy.contact.email}`}
              className="font-medium text-accent underline-offset-4 transition hover:underline"
            >
              {copy.contact.email}
            </a>
            <a
              href={`tel:${copy.phoneTel}`}
              className="text-foreground/90 transition hover:text-accent"
            >
              {copy.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <QuoteRequestForm variant="vision" idPrefix="contact-quote" />
        </div>
      </div>
    </article>
  );
}
