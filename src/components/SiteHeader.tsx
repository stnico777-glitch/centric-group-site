"use client";

import { useState } from "react";
import { siteCopy } from "@/content/siteCopy";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
        fill="currentColor"
      />
    </svg>
  );
}

type SiteHeaderProps = {
  /** Stronger text shadows for white type over bright video */
  forHero?: boolean;
};

export function SiteHeader({ forHero = false }: SiteHeaderProps) {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const fg = forHero ? "text-hero-fg" : "";

  return (
    <>
      <header className="pointer-events-none absolute inset-x-0 top-0 z-30 px-[var(--container-pad)] pt-6 md:pt-8">
        <div className="pointer-events-auto flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start justify-between gap-4 md:block">
            <a
              href="/"
              className={`text-display whitespace-nowrap text-lg font-semibold text-white transition-opacity hover:opacity-80 md:text-xl ${fg}`}
              aria-label={`${siteCopy.brand} ${siteCopy.tagline} home`}
            >
              {siteCopy.brand} {siteCopy.tagline}
            </a>
            <button
              type="button"
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xl font-light text-white transition hover:border-white/60 hover:opacity-90 md:hidden ${fg}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? "×" : "+"}
            </button>
          </div>

          <nav
            className="hidden flex-wrap items-center gap-x-8 gap-y-2 md:flex"
            aria-label="Primary"
          >
            {siteCopy.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`nav-caps font-sans font-medium text-white transition hover:text-white/95 ${forHero ? "text-white/95" : "text-white/90"} ${fg}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden flex-col items-end gap-3 md:flex">
            <div className="flex items-center gap-4">
              <div
                className={`flex items-center gap-1 font-sans text-[11px] font-medium tracking-[0.2em] ${forHero ? "text-white/95" : "text-white/80"} ${fg}`}
              >
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`transition hover:text-white ${lang === "en" ? "text-white" : "text-white/50"}`}
                >
                  EN
                </button>
                <span className="text-white/40">/</span>
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`transition hover:text-white ${lang === "es" ? "text-white" : "text-white/50"}`}
                >
                  ES
                </button>
              </div>
              <a
                href={`tel:${siteCopy.phoneTel}`}
                className={`inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-sans text-xs font-semibold tracking-wide text-black transition hover:opacity-90 ${forHero ? "shadow-[0_2px_20px_rgba(0,0,0,0.35)]" : ""}`}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  <PhoneIcon className="h-3.5 w-3.5" />
                </span>
                <span className="pr-1">{siteCopy.phoneDisplay}</span>
              </a>
            </div>
            <p
              className={`max-w-[14rem] text-right font-sans text-[10px] font-medium leading-relaxed tracking-[0.22em] ${forHero ? "text-white/90" : "text-white/70"} ${fg}`}
            >
              {siteCopy.headerTagline}
            </p>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`fixed inset-0 z-40 flex flex-col bg-black/95 px-[var(--container-pad)] pt-24 transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-6" aria-label="Mobile primary">
          {siteCopy.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-display text-2xl font-semibold text-white transition hover:opacity-80"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-8">
          <div className="flex gap-4 font-sans text-sm tracking-[0.2em] text-white/80">
            <button
              type="button"
              className={lang === "en" ? "text-white" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span className="text-white/40">/</span>
            <button
              type="button"
              className={lang === "es" ? "text-white" : ""}
              onClick={() => setLang("es")}
            >
              ES
            </button>
          </div>
          <a
            href={`tel:${siteCopy.phoneTel}`}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 font-sans text-sm font-semibold text-black"
            onClick={() => setMenuOpen(false)}
          >
            <PhoneIcon className="h-4 w-4 text-black" />
            {siteCopy.phoneDisplay}
          </a>
        </div>
      </div>
    </>
  );
}
