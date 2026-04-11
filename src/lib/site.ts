/** Canonical site URL — set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://centricgroup.com) */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const routes = {
  home: "/",
  projects: "/projects",
  services: "/services",
  about: "/about",
  reviews: "/reviews",
  contact: "/contact",
  /** Service areas directory — primary URL (replaces legacy `/location`) */
  location: "/service-areas",
} as const;

export const defaultTitle =
  "Centric Group — Plans, Permits & Interior Remodeling in South Florida";

export const defaultDescription =
  "Architectural plans, permits, kitchen and bath remodels, tile, and drywall. Centric Group delivers clear communication from drawings to finished space.";
