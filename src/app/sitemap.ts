import type { MetadataRoute } from "next";
import { routes, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = Object.values(routes);
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === routes.home ? "weekly" : "monthly",
    priority: path === routes.home ? 1 : 0.75,
  }));
}
