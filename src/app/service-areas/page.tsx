import type { Metadata } from "next";
import { ServiceAreasView } from "@/components/ServiceAreasView";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Service areas — South Florida cities & counties",
  "Centric Group serves 30+ South Florida cities and counties with architectural plans, building permits, kitchen and bath remodeling, tile, drywall, and interior construction. Miami-Dade, Broward, Palm Beach, and the Keys.",
  routes.location,
);

export default function ServiceAreasPage() {
  return (
    <PageShell>
      <ServiceAreasView />
    </PageShell>
  );
}
