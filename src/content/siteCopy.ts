export const siteCopy = {
  brand: "Carlos",
  tagline: "Media",
  headerTagline: "WE CRAFT LUXURY LISTING MEDIA IN MIAMI",
  nav: [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Offers", href: "#offers" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    { label: "Location", href: "#location" },
  ],
  phoneDisplay: "+1 (305) 555-0142",
  phoneTel: "+13055550142",
  hero: {
    subhead: "WHERE COASTAL LIGHT MEETS CINEMATIC STORYTELLING.",
    ctaPrimary: "VIEW PORTFOLIO",
    ctaSecondary: "DISCUSS A LISTING",
    footnote:
      "EXCLUSIVE MIAMI PROPERTIES & ARCHITECTURE — MINUTES FROM THE COAST.",
  },
  review: {
    stat: "+300",
    body: "clients have trusted our team with their most important launches.",
    initials: ["MR", "SK", "JL", "AP", "TC"],
  },
  vision: {
    eyebrow: "Correspondence",
    headlineBefore: "Where your vision",
    headlineAfter: "finds its rightful home.",
    pillAlt: "Coastal landscape — Miami",
    body:
      "Beyond mere footage, we shape media that mirrors your brand: composed with quiet precision, and made to carry discerning buyers from a first, lingering look to the door of the showing.",
    emailPlaceholder: "Email address",
    emailCta: "Receive notes",
  },
  portfolio: {
    title: "Selected work",
    subtitle:
      "Residences, developments, and spaces we have brought to screen.",
    row2Subtitle:
      "Additional campaigns, interiors, and twilight exteriors from recent productions.",
    /** Full-bleed reel below the carousel — swap files in /public when you have dedicated cuts */
    reelVideoSrc: "/hero.mp4",
    /** Second strip; can match reelVideoSrc or point to another mp4 */
    reelVideoSrc2: "/hero.mp4",
    reelBridgeTitle: "In motion",
  },
  offers: {
    title: "Offers",
    subtitle: "Modular packages tuned for luxury listings and brokerages in South Florida.",
    items: [
      {
        title: "Listing media day",
        description:
          "Cinematic walkthroughs, architectural stills, twilight exteriors, and floor-plan aware coverage — delivered on a tight timeline.",
        cta: "Request availability",
      },
      {
        title: "Brand & campaign films",
        description:
          "Long-form storytelling for developments and principal agents — mood, pacing, and sound design aligned with your positioning.",
        cta: "Plan a production",
      },
      {
        title: "Social cutdowns",
        description:
          "Vertical and square edits optimized for paid and organic channels, with hooks that preserve the integrity of the property.",
        cta: "See formats",
      },
    ],
  },
  about: {
    title: "About",
    body: [
      "Carlos Media is a Miami-based real estate media studio partnering with agents, developers, and architects who expect restraint, clarity, and craft.",
      "Every project is led with the same standard: light that feels natural, movement that feels intentional, and a final cut that respects the architecture.",
    ],
    credentials: "Licensed drone operations · Color-managed delivery · Rush tiers available",
    cta: "Work with Carlos",
  },
  contact: {
    title: "Contact",
    body: "Miami-Dade, Broward, and the Keys — on location or remote produce.",
    email: "hello@carlosmedia.studio",
  },
  footer: {
    rights: "Carlos Media",
    location: "Miami, Florida",
  },
} as const;

export const portfolioCards = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    alt: "Modern white residence at dusk",
    category: "Miami Beach",
    title: "Oceanfront estate",
    cta: "View",
    href: "#contact",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    alt: "Pool and architecture",
    category: "Coral Gables",
    title: "Palm Court villa",
    cta: "View",
    href: "#contact",
  },
  {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    alt: "Interior living space",
    category: "Interior films",
    title: "Double-height living",
    cta: "View",
    href: "#contact",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
    alt: "Contemporary home facade",
    category: "Brickell",
    title: "Sky residence",
    cta: "View",
    href: "#contact",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    alt: "Minimalist architecture",
    category: "Coconut Grove",
    title: "Courtyard modern",
    cta: "View",
    href: "#contact",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    alt: "Luxury interior corridor",
    category: "Campaign",
    title: "Developer showcase",
    cta: "View",
    href: "#contact",
  },
] as const;

export const portfolioCardsRow2 = [
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    alt: "Luxury penthouse living room",
    category: "Edgewater",
    title: "Glass-line penthouse",
    cta: "View",
    href: "#contact",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    alt: "Modern kitchen and dining",
    category: "Aventura",
    title: "Waterway estate",
    cta: "View",
    href: "#contact",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
    alt: "Minimal bedroom suite",
    category: "Sunny Isles",
    title: "Skyline suite",
    cta: "View",
    href: "#contact",
  },
  {
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80",
    alt: "Outdoor terrace at dusk",
    category: "Twilight",
    title: "Golden hour terrace",
    cta: "View",
    href: "#contact",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509364-3142e8a2ebc2?w=1200&q=80",
    alt: "Architectural staircase",
    category: "Design detail",
    title: "Sculpted stair film",
    cta: "View",
    href: "#contact",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
    alt: "Open plan living with ocean view",
    category: "Surfside",
    title: "Coastal great room",
    cta: "View",
    href: "#contact",
  },
] as const;
