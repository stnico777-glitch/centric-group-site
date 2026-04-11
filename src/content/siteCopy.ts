import { routes } from "@/lib/site";

export const siteCopy = {
  brand: "Centric",
  headerBrand: "Centric Group",
  /** Primary navigation — each item is a real route for SEO */
  nav: [
    { label: "Projects", href: routes.projects },
    { label: "Services", href: routes.services },
    { label: "About", href: routes.about },
    { label: "Service areas", href: routes.location },
    { label: "Contact", href: routes.contact },
  ],
  googleReviews: {
    title: "What our clients say about us",
    writeReviewCta: "Write a review",
    businessProfileUrl: "https://share.google/Ku5vR3nY224CqZ3PF",
    aggregateRating: 5,
    reviews: [
      {
        id: "1",
        rating: 5,
        text: "They handled our plans and permits, then knocked out the kitchen and bath tile. Crew was tidy, timeline was honest, and the finishes look sharp.",
        publishTime: "2025-02-14T12:00:00.000Z",
        authorName: "Guillermo Vega",
      },
      {
        id: "2",
        rating: 5,
        text: "We’ve used several contractors — Centric’s communication was the best. Drywall and paint prep were flawless; punch list was short.",
        publishTime: "2025-01-08T10:00:00.000Z",
        authorName: "Sarah Chen",
      },
      {
        id: "3",
        rating: 5,
        text: "Full bath gut: waterproofing, tile, fixtures — everything passed inspection the first time. Would call them again for the next room.",
        publishTime: "2024-11-28T15:30:00.000Z",
        authorName: "Marcus Williams",
      },
      {
        id: "4",
        rating: 5,
        text: "Honest estimating up front. When we changed the scope on the kitchen, they gave options and costs the same day — no surprises on the invoice.",
        publishTime: "2024-10-03T09:00:00.000Z",
        authorName: "Elena Ruiz",
      },
      {
        id: "5",
        rating: 5,
        text: "Living through a remodel isn’t fun, but they kept dust down and the drywall finish is perfect. Paint went on smooth.",
        publishTime: "2024-08-19T14:00:00.000Z",
        authorName: "David Park",
      },
    ],
  },
  phoneDisplay: "+1 (305) 555-0142",
  phoneTel: "+13055550142",
  heroLeadingMark: "",
  hero: {
    subhead:
      "FROM ARCHITECTURAL PLANS AND PERMITS TO FINISHED KITCHENS, BATHS, TILE, AND DRYWALL.",
    ctaPrimary: "VIEW PROJECTS",
    ctaSecondary: "REQUEST A BID",
  },
  review: {
    stat: "+150",
    body: "renovations and interiors completed with owners who come back for the next room.",
    initials: ["CG", "JM", "RK", "AL", "TP"],
  },
  vision: {
    eyebrow: "Partnership",
    headlineBefore: "Where your plans",
    headlineAfter: "become a finished space.",
    body:
      "We help you move from drawings and permits to a completed kitchen, bath, tile, and drywall — with schedules you can plan around and finishes you’ll be proud to show off.",
    quoteFormTitle: "Get your quote",
    quoteFields: {
      name: "Your name",
      email: "Your email",
      phone: "Your phone",
      zip: "Your ZIP code",
    },
    quoteProjectTypeLabel: "Project type",
    quoteProjectTypes: [
      { value: "", label: "Select project type" },
      { value: "plans-permits", label: "Plans & permits" },
      { value: "kitchen", label: "Kitchen remodel" },
      { value: "bath", label: "Bath remodel" },
      { value: "tile", label: "Tile & flooring" },
      { value: "drywall", label: "Drywall & interiors" },
      { value: "full-remodel", label: "Full remodel / multiple rooms" },
      { value: "other", label: "Other — describe in email" },
    ],
    quoteCta: "Get quote",
  },
  /** Industry-standard “how we work” — sets expectations before portfolio (trust + clarity). */
  process: {
    eyebrow: "How we work",
    title: "From first conversation to final walkthrough",
    subtitle:
      "Premium remodeling sites win when homeowners see a repeatable process: scope, documentation, build quality, and communication. Here’s ours.",
    steps: [
      {
        title: "Discovery & scope",
        description:
          "We walk the space, align on goals, budget, and timeline, and document what success looks like before anything is ordered or cut.",
      },
      {
        title: "Plans & engineering",
        description:
          "Architectural drawings and details stay coordinated with structure, MEP, and finishes so the field crew isn’t guessing.",
      },
      {
        title: "Permits & compliance",
        description:
          "Permit packages, submissions, and follow-up with the municipality — so work that starts is work that’s approved.",
      },
      {
        title: "Build & protection",
        description:
          "Protected pathways, dust containment, and daily coordination on site — kitchen, bath, tile, drywall, and finishes built to spec.",
      },
      {
        title: "Inspections & handoff",
        description:
          "Inspection-ready work, a tight punch list, and a final walkthrough so you’re confident before we close the job.",
      },
    ],
    trustLine:
      "Licensed & insured · Written updates you can plan around · Clean, respectful job sites",
  },
  portfolio: {
    title: "Selected projects",
    subtitle:
      "Kitchens, baths, tile, drywall, and interiors we’ve planned, permitted, and built.",
    row2Subtitle:
      "More remodels, tile work, and finish details from recent jobs.",
    reelVideoSrc: "/hero.mp4",
    reelVideoSrc2: "/hero-reversed.mp4",
    reelBridgeTitle: "On site",
  },
  offers: {
    title: "Services",
    subtitle:
      "Architectural plans, permits, and interior craft — kitchen, bath, tile, and drywall.",
    items: [
      {
        title: "Architectural plans",
        description:
          "Drawings and coordination so your remodel is clear, code-aware, and ready to build — layout, details, and revisions that keep the job moving.",
        cta: "Discuss your plans",
      },
      {
        title: "Permits",
        description:
          "Permit packages, submissions, and follow-up with the municipality so approved work can start on time and inspections stay straightforward.",
        cta: "Ask about permits",
      },
      {
        title: "Kitchen",
        description:
          "Full kitchen remodels: layout, cabinets, counters, lighting, and finishes — built for daily use and a clean, lasting look.",
        cta: "Plan a kitchen",
      },
      {
        title: "Bath",
        description:
          "Bathroom remodels from updates to full gut jobs — waterproofing, fixtures, ventilation, and finishes done right.",
        cta: "Plan a bath",
      },
      {
        title: "Tile work",
        description:
          "Floors, walls, showers, backsplashes, and custom layouts with straight lines, solid prep, and grout that holds up.",
        cta: "See tile options",
      },
      {
        title: "Drywall",
        description:
          "Hang, tape, finish, and texture matching — plus repairs — so walls and ceilings are smooth and ready for paint.",
        cta: "Request drywall",
      },
    ],
  },
  about: {
    title: "About",
    body: [
      "Plans, permits, and interior work — kitchens, baths, tile, and drywall — with clear communication from walkthrough to punch list.",
    ],
    credentials: "Licensed & insured · South Florida",
    cta: "Work with Centric",
    portraitSrc: "/partnership-blueprint.png",
    portraitAlt: "Blueprint scroll — architectural plans and project partnership",
    quote: "Honest schedules. Finish work you notice every day.",
  },
  contact: {
    title: "Contact",
    body:
      "Tell us about your plans, permits, or next kitchen, bath, tile, or drywall project — we’ll follow up with next steps.",
    quoteLead:
      "Plans, permits, or remodel — we reply with next steps.",
    email: "hello@centricgroup.com",
  },
  locationPage: {
    title: "Location & service area",
    lead:
      "Centric Group works with homeowners and property owners across South Florida — from plans and permits through kitchen, bath, tile, and drywall.",
    body: [
      "We coordinate site visits, municipal submissions, and production schedules so your project stays moving.",
      "Reach out through the contact page to discuss your address, timeline, and scope.",
    ],
    /** Whole-state view so Florida is unmistakable on the map (OpenStreetMap embed). */
    mapEmbedSrc:
      "https://www.openstreetmap.org/export/embed.html?bbox=-87.65%2C24.45%2C-79.95%2C31.05&layer=mapnik&marker=25.7617%2C-80.1918",
    mapCaption: "South Florida — Miami metro and surrounding counties",
    serviceAreasHeading: "Areas we serve",
    serviceAreasFootnote:
      "Don’t see your area listed? Contact us — we often coordinate projects across county lines for the right scope.",
    /** JSON-LD ItemList for /location */
    schemaItemListName: "Centric Group — South Florida service areas",
    schemaItemListDescription:
      "Cities and counties where Centric Group provides plans, permits, kitchen and bath remodeling, tile, and drywall.",
  },
  footer: {
    rights: "Centric Group",
    location: "Miami · South Florida",
    mapHeading: "Service area",
    mapLinkLabel: "Location page",
  },
  /** Misc UI strings not tied to a single section (nav aria, hardcoded labels, etc.) */
  ui: {
    navAriaPrimary: "Primary",
    navAriaMobile: "Mobile primary",
    footerNavAria: "Footer",
    introAria: "Introduction",
    headerBrandHomeAria: "Centric Group home",
    mapIframeTitle: "Map of Florida — Centric Group service area",
    offersEyebrow: "What we do",
    aboutEyebrow: "Who we are",
    processCta: "Start a conversation",
    reviewExpandLess: "Less",
    reviewExpandMore: "More",
    reviewPagesNav: "Review pages",
    reviewPagesPrev: "Previous page",
    reviewPagesNext: "Next page",
    googleBusinessAria: "Google Business Profile",
    portfolioCarouselRegion: "Project gallery carousel",
    portfolioCarouselPrev: "Scroll portfolio left",
    portfolioCarouselNext: "Scroll portfolio right",
    portfolioRow2Region: "More projects carousel",
    portfolioRow2Prev: "Scroll projects row left",
    portfolioRow2Next: "Scroll projects row right",
    /** `{count}` is replaced with the number of service areas */
    serviceAreasPreviewBlurb:
      "Miami and all of South Florida — {count} cities and counties. A sample below; see the full directory for every area we cover.",
    /** After location + link: “for the coverage map and more detail.” */
    serviceAreasCoverageSuffix: "for the coverage map and more detail.",
    reviewsEmptyHint: "Add reviews in",
    reviewsEmptyCode: "siteCopy.googleReviews.reviews",
    locationDetailParagraph:
      "Centric Group provides architectural plans, permit coordination, and interior remodeling—including kitchen and bath renovations, tile installation, and drywall—across Miami-Dade, Broward, Palm Beach, and select Monroe County communities. Use the directory below to find your city or county.",
    /** `{count}` replaced */
    locationDirectoryIntro:
      "{count} cities and counties across South Florida—each with local context for homeowners searching remodeling contractors, permit help, and interior construction near you.",
    locationPhotoCredit:
      "Area photos are South Florida location stock (e.g. Miami Beach, Hollywood FL, Boynton Beach, Keys) from",
    locationPhotoCreditSuffix:
      ", saved on-site; ask us for photos of completed Centric projects in your city.",
    locationCoverageMapHeading: "Coverage map",
    locationContactLine: "Contact us",
    locationContactSuffix: "with your project address.",
    notFoundTitle: "404",
    notFoundBody:
      "This page doesn’t exist. Return home or explore services and projects.",
    notFoundHome: "Home",
    notFoundContact: "Contact",
    quoteEmailSubject: "Quote request — Centric Group",
    quoteEmailName: "Name",
    quoteEmailEmail: "Email",
    quoteEmailPhone: "Phone",
    quoteEmailZip: "ZIP",
    quoteEmailProjectType: "Project type",
    quoteEmailNotSelected: "(not selected)",
  },
};

export type SiteCopy = typeof siteCopy;

const contactHref = routes.contact;

export const portfolioCards = [
  {
    src: "/portfolio/01.jpg",
    alt: "Interior remodel in Sunny Isles Beach",
    category: "Sunny Isles Beach",
    title: "Residential interior",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/02.jpg",
    alt: "Finish and millwork detail",
    category: "Sunny Isles Beach",
    title: "Cabinetry & finishes",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/03.jpg",
    alt: "Aventura project — living space",
    category: "Aventura",
    title: "Turnberry residence",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/04.jpg",
    alt: "Aventura project — interior view",
    category: "Aventura",
    title: "Open layout & lighting",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/05.jpg",
    alt: "Aventura remodel in progress",
    category: "Aventura",
    title: "Kitchen & living flow",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/06.jpg",
    alt: "On-site interior work",
    category: "Residential",
    title: "Tile & detail work",
    cta: "View",
    href: contactHref,
  },
];

export const portfolioCardsRow2 = [
  {
    src: "/portfolio/07.jpg",
    alt: "Kitchen and interior renovation",
    category: "Kitchen",
    title: "Cabinet & counter update",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/08.jpg",
    alt: "Bathroom and tile installation",
    category: "Bath",
    title: "Vanity & tile surround",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/09.jpg",
    alt: "Interior drywall and trim",
    category: "Drywall",
    title: "Walls & openings",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/10.jpg",
    alt: "Tile layout and flooring",
    category: "Tile",
    title: "Floor & wall layout",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/11.jpg",
    alt: "Residential interior detail",
    category: "Residential",
    title: "Finish carpentry",
    cta: "View",
    href: contactHref,
  },
  {
    src: "/portfolio/12.jpg",
    alt: "Living space remodel",
    category: "Interiors",
    title: "Lighting & millwork",
    cta: "View",
    href: contactHref,
  },
];
