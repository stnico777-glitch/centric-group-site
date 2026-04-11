import {
  defaultDescription,
  defaultTitle,
  siteUrl,
} from "@/lib/site";

export function JsonLd() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Centric Group",
      description: defaultDescription,
      url: siteUrl,
      telephone: "+1-305-555-0142",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Florida",
      },
      knowsAbout: [
        "Architectural plans",
        "Building permits",
        "Kitchen remodeling",
        "Bathroom remodeling",
        "Tile installation",
        "Drywall",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: defaultTitle,
      description: defaultDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: "Centric Group",
      url: siteUrl,
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      serviceType: [
        "General contractor",
        "Residential remodeling",
        "Architectural planning",
      ],
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
