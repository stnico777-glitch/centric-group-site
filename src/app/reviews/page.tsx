import type { Metadata } from "next";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Reviews — what clients say",
  "Read verified-style testimonials from Centric Group clients — plans, permits, kitchens, baths, tile, and drywall.",
  routes.reviews,
);

export default function ReviewsPage() {
  return (
    <PageShell>
      <GoogleReviewsSection />
    </PageShell>
  );
}
