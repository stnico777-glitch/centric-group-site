"use client";

import { siteCopy } from "@/content/siteCopy";
import { useEffect, useRef } from "react";

export function PortfolioReel() {
  const secondRef = useRef<HTMLVideoElement>(null);
  const src1 = siteCopy.portfolio.reelVideoSrc;
  const src2 = siteCopy.portfolio.reelVideoSrc2;

  useEffect(() => {
    const el = secondRef.current;
    if (!el || src1 !== src2) return;

    function offset() {
      const v = secondRef.current;
      if (!v) return;
      const d = v.duration;
      if (d && Number.isFinite(d)) {
        v.currentTime = d * 0.45;
      }
    }

    el.addEventListener("loadedmetadata", offset);
    if (el.readyState >= 1) offset();
    return () => el.removeEventListener("loadedmetadata", offset);
  }, [src1, src2]);

  return (
    <section
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden"
      aria-labelledby="portfolio-reel-heading"
    >
      <div className="bg-background px-[var(--container-pad)] pb-1 pt-0 text-center md:pb-1.5">
        <h3
          id="portfolio-reel-heading"
          className="text-display text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-3xl lg:text-[2.125rem]"
        >
          {siteCopy.portfolio.reelBridgeTitle}
        </h3>
      </div>
      <div className="bg-neutral-950">
        <div className="relative flex aspect-video w-full flex-col">
          <div className="relative min-h-0 flex-1 overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={src1} type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 hidden bg-gradient-to-br from-neutral-800 via-neutral-900 to-black motion-reduce:block"
              aria-hidden
            />
          </div>
          <div className="relative min-h-0 flex-1 overflow-hidden border-t border-white/[0.07]">
            <video
              ref={secondRef}
              className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={src2} type="video/mp4" />
            </video>
            <div
              className="absolute inset-0 hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black motion-reduce:block"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
