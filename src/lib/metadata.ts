import type { Metadata } from "next";
import { defaultDescription, defaultTitle, siteUrl } from "@/lib/site";

export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: "%s | Centric Group",
    },
    description: defaultDescription,
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      locale: "en_US",
      type: "website",
      siteName: "Centric Group",
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
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
    openGraph: { title, description, url },
    twitter: { title, description },
    alternates: { canonical: url },
  };
}
