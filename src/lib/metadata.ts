import type { Metadata } from "next";
import { defaultDescription, defaultTitle, siteUrl } from "@/lib/site";

/** Tab / home-screen icon */
const tabIcon = "/brand-nav-compass.png";

/** Default link previews (Open Graph / Twitter). */
export const defaultBrandImage = "/logo-centric-group.png";

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: "%s | Centric Group",
    },
    description: defaultDescription,
    icons: {
      icon: [{ url: tabIcon, type: "image/png" }],
      apple: [{ url: tabIcon, type: "image/png" }],
    },
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      locale: "en_US",
      type: "website",
      siteName: "Centric Group",
      images: [{ url: defaultBrandImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [defaultBrandImage],
    },
    robots: { index: true, follow: true },
  };
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: defaultBrandImage }],
    },
    twitter: { title, description, images: [defaultBrandImage] },
    alternates: { canonical: url },
  };
}
