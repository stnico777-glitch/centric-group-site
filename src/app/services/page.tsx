import type { Metadata } from "next";
import { OffersSection } from "@/components/OffersSection";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Services — plans, permits, kitchen, bath, tile, drywall",
  "Architectural plans, permits, kitchen and bath remodels, tile installation, and drywall — Centric Group’s full service offering.",
  routes.services,
);

export default function ServicesPage() {
  return (
    <PageShell>
      <OffersSection />
    </PageShell>
  );
}
