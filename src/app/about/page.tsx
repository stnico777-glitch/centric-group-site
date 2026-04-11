import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "About Centric Group",
  "Learn how Centric Group delivers plans, permits, and interior remodeling with clear communication from walkthrough to punch list.",
  routes.about,
);

export default function AboutPage() {
  return (
    <PageShell>
      <AboutSection />
    </PageShell>
  );
}
