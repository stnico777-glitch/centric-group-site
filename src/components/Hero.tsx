"use client";

import { SiteHeader } from "@/components/SiteHeader";
import { ReviewCard } from "@/components/ReviewCard";
import { siteCopy } from "@/content/siteCopy";

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
  return (
    <section
      className="hero-viewport-h relative overflow-hidden bg-neutral-900"
      aria-label="Introduction"
    >
      <SiteHeader forHero />

      {/* Video — slight scale + overflow clip so no gap; object-cover fills viewport */}
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

      {/* Static hero fallback */}
      <div
        className="absolute inset-0 hidden bg-gradient-to-br from-slate-800 via-slate-900 to-black motion-reduce:block"
        aria-hidden
      />

      <div
        className="absolute inset-0 z-[1] bg-[var(--hero-overlay)] motion-reduce:bg-black/25"
        aria-hidden
      />

      {/* Bottom fade into page white — kept soft/shallow so it does not read as a bar */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[var(--hero-fade-height)] bg-gradient-to-b from-transparent via-white/[0.12] to-white"
        aria-hidden
      />

      <div className="relative z-10 flex h-full min-h-0 flex-col justify-between px-[var(--container-pad)] pb-36 pt-24 md:pb-12 md:pt-20">
        <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-center gap-10 md:gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-16 xl:gap-20">
          <div className="w-full max-w-[min(100%,42rem)] text-left lg:shrink-0">
            <div className="text-display pointer-events-none select-none font-extrabold text-white">
              <div className="relative z-0 flex flex-wrap items-baseline gap-2 text-hero-title">
                <span className="relative z-10 text-[0.45em] font-bold opacity-90">
                  ©
                </span>
                <span className="relative z-10">{siteCopy.brand}</span>
              </div>
              <h1 className="text-hero-title-line2 relative -mt-1 block font-extrabold text-white mix-blend-normal lg:-mt-2">
                <span className="block">{siteCopy.tagline}</span>
              </h1>
            </div>
          </div>

          <div className="max-w-md space-y-6 lg:max-w-sm xl:max-w-md">
            <p className="text-hero-sub font-sans font-semibold text-white">
              {siteCopy.hero.subhead}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-black/25 px-6 py-3 font-sans text-xs font-semibold tracking-[0.2em] text-white shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-md backdrop-saturate-150 transition hover:translate-x-0.5 hover:border-white/70 hover:bg-black/35 hover:backdrop-blur-lg"
              >
                {siteCopy.hero.ctaPrimary}
                <ArrowIcon />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/55 bg-black/20 px-5 py-3 font-sans text-xs font-semibold tracking-[0.18em] text-white shadow-[0_1px_3px_rgba(0,0,0,0.45)] backdrop-blur-sm transition hover:border-white/75 hover:bg-black/30"
              >
                {siteCopy.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xs font-sans text-[10px] font-medium leading-relaxed tracking-[0.22em] text-white [text-shadow:0_0_1px_rgba(0,0,0,0.65),0_1px_3px_rgba(0,0,0,0.65),0_2px_12px_rgba(0,0,0,0.45)]">
            {siteCopy.hero.footnote}
          </p>
        </div>
      </div>

      <ReviewCard />
    </section>
  );
}
