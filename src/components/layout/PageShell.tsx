/** Offset for fixed `SiteHeader` — use for all non-hero pages */
export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-24 md:pt-28">
      {children}
    </div>
  );
}
