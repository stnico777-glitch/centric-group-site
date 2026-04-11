type LocationMapProps = {
  /** OpenStreetMap embed URL (bbox + layer). */
  src: string;
  title: string;
  caption?: string;
  className?: string;
};

/**
 * OpenStreetMap with a navy + gold brand overlay (non-interactive).
 */
export function LocationMap({ src, title, caption, className = "" }: LocationMapProps) {
  return (
    <figure
      className={`relative overflow-hidden rounded-2xl border border-border/90 bg-[#0f172a] ring-1 ring-accent/20 ${className}`}
      aria-label={caption ?? title}
    >
      <div className="relative aspect-[16/9] w-full min-h-[220px] max-h-[min(48vh,420px)] md:aspect-[2.1/1] md:min-h-[260px]">
        {/* Base map — slightly cooled so the overlay reads as one palette */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            filter: "grayscale(0.35) saturate(0.82) brightness(0.88) contrast(1.06)",
          }}
          aria-hidden
        >
          <iframe
            title={title}
            src={src}
            className="pointer-events-none absolute inset-0 h-full w-full border-0 select-none opacity-[0.92] [touch-action:none]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
            aria-hidden
          />
        </div>

        {/* Navy wash — ties tiles to site background */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0f172a]/[0.58] via-[#111f35]/[0.42] to-[#0a1628]/[0.62]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[#0f172a]/25 mix-blend-multiply"
          aria-hidden
        />

        {/* Vignette — darker at edges, clearer in the middle (Florida) */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_72%_at_50%_48%,rgba(15,23,42,0.05)_0%,rgba(15,23,42,0.38)_55%,rgba(8,13,22,0.78)_100%)]"
          aria-hidden
        />

        {/* Gold — warmth over SE / Miami area + rim light */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_68%_58%_at_70%_58%,rgba(196,168,90,0.38),transparent_58%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_40%_at_50%_0%,rgba(196,168,90,0.14),transparent_50%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f172a]/50 via-transparent to-[rgba(196,168,90,0.12)]"
          aria-hidden
        />

        {/* Subtle highlight on landmass */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-[0.55] bg-[radial-gradient(ellipse_55%_48%_at_62%_52%,rgba(241,245,249,0.09),transparent_62%)]"
          aria-hidden
        />

        <div
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-accent/25"
          aria-hidden
        />
      </div>
      {caption ? (
        <figcaption className="border-t border-border/80 bg-[#0f172a]/95 px-4 py-2.5 text-center font-sans text-xs text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
