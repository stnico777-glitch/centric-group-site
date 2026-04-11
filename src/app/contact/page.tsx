import type { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";
import { PageShell } from "@/components/layout/PageShell";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/site";

export const metadata: Metadata = pageMetadata(
  "Contact Centric Group",
  "Request a bid or ask about plans, permits, and remodeling — email or call Centric Group for next steps.",
  routes.contact,
);

export default function ContactPage() {
  return (
    <PageShell>
      <ContactPageContent />
    </PageShell>
  );
}
