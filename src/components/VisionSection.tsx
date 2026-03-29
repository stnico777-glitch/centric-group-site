"use client";

import Image from "next/image";
import { useState } from "react";
import { siteCopy } from "@/content/siteCopy";

const pillSrc =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80";

export function VisionSection() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Notes from Carlos Media");
    const body = encodeURIComponent(`Please add: ${email}`);
    window.location.href = `mailto:${siteCopy.contact.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      className="relative isolate z-10 overflow-hidden bg-background px-[var(--container-pad)] pt-[calc(var(--section-y)+2rem)]"
      aria-labelledby="vision-heading"
    >
      {/* Bottom feather into next section — same bg token, no visible color blocks */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[min(28vh,220px)] bg-gradient-to-b from-transparent via-background to-background"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl pb-[var(--section-y)] text-center">
        <p className="vision-enter mb-5 font-sans text-[0.8125rem] font-medium tracking-[0.32em] text-muted uppercase">
          {siteCopy.vision.eyebrow}
        </p>

        <h2
          id="vision-heading"
          className="vision-enter vision-enter-delay-1 text-display text-4xl font-semibold leading-[1.12] text-foreground md:text-5xl lg:text-[3.15rem]"
        >
          {siteCopy.vision.headlineBefore}{" "}
          <span className="relative mx-1.5 inline-block align-middle">
            <span className="relative inline-block rounded-full p-[2px] shadow-[0_8px_28px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] transition duration-500 ease-out hover:scale-105 hover:shadow-[0_12px_36px_rgba(0,0,0,0.1)]">
              <Image
                src={pillSrc}
                alt={siteCopy.vision.pillAlt}
                width={72}
                height={40}
                className="inline-block h-9 w-[4.25rem] rounded-full object-cover align-middle md:h-10 md:w-[4.75rem]"
              />
            </span>
          </span>{" "}
          {siteCopy.vision.headlineAfter}
        </h2>

        <p className="vision-enter vision-enter-delay-2 mx-auto mt-7 max-w-xl font-sans text-base leading-[1.65] text-muted md:text-lg">
          {siteCopy.vision.body}
        </p>

        <form
          onSubmit={handleSubmit}
          className="vision-enter vision-enter-delay-3 group/form mx-auto mt-9 flex max-w-md flex-col gap-1 rounded-full border border-border bg-background/92 p-1 pl-3.5 shadow-sm backdrop-blur-md transition-[box-shadow,border-color] duration-300 focus-within:border-neutral-300 focus-within:shadow-md sm:flex-row sm:items-center sm:gap-0 sm:pl-4"
        >
          <label htmlFor="vision-email" className="sr-only">
            Email
          </label>
          <input
            id="vision-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={siteCopy.vision.emailPlaceholder}
            className="min-w-0 flex-1 bg-transparent py-2 font-sans text-base text-foreground outline-none transition placeholder:text-muted-light placeholder:transition focus:placeholder:text-muted/60 sm:py-2.5"
          />
          <button
            type="submit"
            className="rounded-full bg-foreground px-5 py-2 font-sans text-[0.6875rem] font-semibold tracking-[0.22em] text-background uppercase shadow-[0_3px_16px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_22px_rgba(0,0,0,0.22)] active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-y-0 sm:px-6 sm:py-2.5"
          >
            {siteCopy.vision.emailCta}
          </button>
        </form>
      </div>
    </section>
  );
}
