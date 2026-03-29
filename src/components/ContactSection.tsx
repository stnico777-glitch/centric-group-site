import { siteCopy } from "@/content/siteCopy";

export function ContactSection() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-border bg-foreground px-[var(--container-pad)] py-[var(--section-y)] text-background"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-display text-2xl font-bold md:text-3xl">
              {siteCopy.contact.title}
            </h2>
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/75">
              {siteCopy.contact.body}
            </p>
            <p
              id="location"
              className="mt-6 scroll-mt-24 font-sans text-sm text-white/60"
            >
              <span className="font-semibold text-white">
                {siteCopy.footer.location}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end md:text-right">
            <a
              href={`mailto:${siteCopy.contact.email}`}
              className="font-sans text-lg font-medium tracking-tight text-white transition hover:opacity-80"
            >
              {siteCopy.contact.email}
            </a>
            <a
              href={`tel:${siteCopy.phoneTel}`}
              className="font-sans text-sm tracking-wide text-white/80 transition hover:text-white"
            >
              {siteCopy.phoneDisplay}
            </a>
            <div className="mt-4 flex gap-6 font-sans text-xs tracking-[0.2em] text-white/50">
              <a
                href="#portfolio"
                className="transition hover:text-white"
              >
                Portfolio
              </a>
              <a href="#offers" className="transition hover:text-white">
                Offers
              </a>
              <a href="#about" className="transition hover:text-white">
                About
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-2 border-t border-white/15 pt-8 font-sans text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {siteCopy.footer.rights}</span>
          <span className="tracking-wide">{siteCopy.footer.location}</span>
        </div>
      </div>
    </footer>
  );
}
