"use client";

import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { Reveal } from "@/components/motion/Reveal";
import { ReviewCard } from "@/components/ReviewCard";
import { useLocale } from "@/context/LocaleContext";
import { routes } from "@/lib/site";

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14m-4-6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hero() {
  const { copy } = useLocale();
  return (
    <section
      className="hero-viewport-h relative overflow-hidden bg-reel-chrome"
      aria-label={copy.ui.introAria}
    >
      <div className="absolute inset-0 overflow-hidden motion-reduce:hidden">
        <video
          className="absolute inset-0 h-full w-full origin-center scale-[1.06] object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute inset-0 hidden bg-gradient-to-br from-reel-chrome via-[#121c2e] to-footer motion-reduce:block"
        aria-hidden
      />

      <div
        className="absolute inset-0 z-[1] bg-[var(--hero-overlay)] motion-reduce:bg-black/15"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[var(--hero-fade-height)] bg-gradient-to-b from-transparent via-background/25 to-background"
        aria-hidden
      />

      <div className="relative z-10 flex h-full min-h-0 flex-col px-[var(--container-pad)] pb-36 pt-24 md:pb-12 md:pt-20">
        <Reveal
          className="absolute left-[var(--container-pad)] top-[5.75rem] z-20 sm:top-28 md:top-[7.25rem]"
          from="left"
          trigger="mount"
        >
          <BrandLockup size="hero" />
        </Reveal>

        <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-center gap-10 pt-[min(46vw,15rem)] sm:pt-[min(40vw,13rem)] md:pt-[min(34vh,12rem)] lg:flex-row lg:items-center lg:justify-end lg:gap-16 lg:pt-4 xl:gap-20">
          <Reveal
            className="max-w-md space-y-6 lg:max-w-sm xl:max-w-md"
            from="right"
            trigger="mount"
            delay={0.12}
          >
            <p className="text-hero-sub font-sans font-semibold text-muted-light">
              {copy.hero.subhead}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={routes.projects}
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/30 px-6 py-3 font-sans text-xs font-semibold tracking-[0.2em] text-muted-light shadow-[0_1px_2px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md backdrop-saturate-150 transition hover:translate-x-0.5 hover:border-accent/60 hover:bg-black/40 hover:backdrop-blur-lg"
              >
                {copy.hero.ctaPrimary}
                <ArrowIcon />
              </Link>
              <Link
                href={routes.contact}
                className="inline-flex items-center rounded-full border border-muted-light/40 bg-black/15 px-5 py-3 font-sans text-xs font-semibold tracking-[0.18em] text-muted-light shadow-[0_1px_3px_rgba(0,0,0,0.4)] backdrop-blur-sm transition hover:border-accent/45 hover:bg-black/28"
              >
                {copy.hero.ctaSecondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal
        from="right"
        trigger="mount"
        delay={0.24}
        className="absolute bottom-6 right-[var(--container-pad)] z-20 w-[min(100%,18rem)] md:bottom-10 md:w-[20rem]"
      >
        <ReviewCard />
      </Reveal>
    </section>
  );
}
