import Image from "next/image";
import { siteCopy } from "@/content/siteCopy";

const portraitSrc =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-[var(--container-pad)] py-[var(--section-y)]"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-center lg:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-neutral-100 lg:mx-0">
          <Image
            src={portraitSrc}
            alt="Carlos — founder of Carlos Media"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 320px"
            priority={false}
          />
        </div>
        <div>
          <h2
            id="about-heading"
            className="text-display text-2xl font-bold text-foreground md:text-3xl"
          >
            {siteCopy.about.title}
          </h2>
          <div className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-muted md:text-base">
            {siteCopy.about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p className="mt-6 font-sans text-xs font-medium tracking-[0.22em] text-muted-light uppercase">
            {siteCopy.about.credentials}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-foreground px-8 py-3 font-sans text-xs font-semibold tracking-[0.2em] text-background uppercase transition hover:opacity-90"
          >
            {siteCopy.about.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
