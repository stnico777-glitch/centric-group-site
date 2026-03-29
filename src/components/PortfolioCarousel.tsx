"use client";

import Image from "next/image";
import { useCallback, useRef } from "react";

export type PortfolioCardItem = {
  src: string;
  alt: string;
  category: string;
  title: string;
  cta: string;
  href: string;
};

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type PortfolioCarouselProps = {
  cards: readonly PortfolioCardItem[];
  title: string;
  subtitle: string;
  headingId: string;
  regionAriaLabel: string;
  navPrevLabel: string;
  navNextLabel: string;
  /** First N images use priority loading */
  priorityCount?: number;
};

export function PortfolioCarousel({
  cards,
  title,
  subtitle,
  headingId,
  regionAriaLabel,
  navPrevLabel,
  navNextLabel,
  priorityCount = 2,
}: PortfolioCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByDir = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-carousel-card]");
    const gap = 16;
    const step = first ? first.offsetWidth + gap : Math.min(400, el.clientWidth * 0.78);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="px-[var(--container-pad)]">
        <header className="mb-8 flex items-end justify-between gap-6 md:mb-10">
          <div className="min-w-0">
            <h2
              id={headingId}
              className="text-display text-2xl font-bold text-foreground md:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-2 max-w-xl font-sans text-sm text-muted md:text-base">
              {subtitle}
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-800 transition hover:bg-neutral-300 active:scale-95 md:h-11 md:w-11"
              aria-label={navPrevLabel}
              onClick={() => scrollByDir(-1)}
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-800 transition hover:bg-neutral-300 active:scale-95 md:h-11 md:w-11"
              aria-label={navNextLabel}
              onClick={() => scrollByDir(1)}
            >
              <ChevronRight />
            </button>
          </div>
        </header>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto overscroll-x-contain scroll-smooth px-[var(--container-pad)] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
        tabIndex={0}
        role="region"
        aria-label={regionAriaLabel}
      >
        {cards.map((item, i) => (
          <article
            key={item.src + i}
            data-carousel-card
            className="relative w-[min(78vw,420px)] shrink-0 snap-start overflow-hidden bg-neutral-200"
            style={{ aspectRatio: "4 / 5" }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width:768px) 78vw, 420px"
              className="object-cover"
              priority={i < priorityCount}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 md:p-8">
              <p className="font-sans text-xs font-semibold tracking-[0.22em] text-white/90 uppercase">
                {item.category}
              </p>
              <h3 className="text-display mt-1 text-xl font-bold leading-tight text-white md:text-2xl">
                {item.title}
              </h3>
              <a
                href={item.href}
                className="pointer-events-auto mt-4 inline-flex items-center justify-center rounded-full border border-white/40 bg-white/15 px-6 py-2.5 font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-md backdrop-saturate-150 transition hover:border-white/55 hover:bg-white/25 hover:backdrop-blur-lg"
              >
                {item.cta}
              </a>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
