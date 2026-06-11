import type { Metadata } from "next";

/**
 * Zentrale SEO-Helfer für die Avanio-Website.
 * Hier liegen Site-Konstanten, Metadata-Builder und JSON-LD-Generatoren.
 */

export const SITE_NAME = "Avanio";

// TODO: Finale Produktiv-Domain eintragen, sobald sie feststeht.
// Über NEXT_PUBLIC_SITE_URL (Vercel-Env) überschreibbar.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.avanio.de";

export const SITE_DESCRIPTION =
  "Avanio ist die KI-Agentur für den Mittelstand: Prozessautomatisierung, KI-Telefonassistenten und KI-Chatbots. Aus der Region Magdeburg, bundesweit im Einsatz.";

/** Baut eine absolute URL aus einem Pfad, z. B. "/kontakt". */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

type PageMeta = {
  title: string;
  description: string;
  /** Pfad der Seite, beginnend mit "/", für Canonical und OpenGraph. */
  path: string;
  /** Auf true setzen, solange die Seite nicht indexiert werden soll (Doorway-Schutz). */
  noindex?: boolean;
};

/**
 * Einheitlicher Metadata-Builder pro Seite: Title, Description,
 * Canonical und OpenGraph. Wird ab Meilenstein 2 von allen Seiten genutzt.
 */
export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
}: PageMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "de_DE",
      type: "website",
    },
  };
}

/** Globales Organization-Schema, wird im Root-Layout eingebunden. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    // TODO: Logo-Datei ergänzen, sobald das finale Logo vorliegt.
    areaServed: { "@type": "Country", name: "Deutschland" },
    knowsAbout: [
      "Prozessautomatisierung",
      "KI-Telefonassistent",
      "KI-Chatbot",
    ],
  };
}

/** Globales WebSite-Schema, wird im Root-Layout eingebunden. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "de-DE",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Service-Schema für Leistungs- und Branchen-Seiten. */
export function serviceSchema(args: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    url: absoluteUrl(args.path),
    serviceType: args.name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Deutschland" },
  };
}

/** ProfessionalService-Schema für lokale Stadt-Seiten (Spur 1). */
export function professionalServiceSchema(args: {
  cityName: string;
  path: string;
  description: string;
  geo: { lat: number; lng: number };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_NAME}: KI-Agentur für ${args.cityName}`,
    url: absoluteUrl(args.path),
    description: args.description,
    areaServed: { "@type": "City", name: args.cityName },
    geo: {
      "@type": "GeoCoordinates",
      latitude: args.geo.lat,
      longitude: args.geo.lng,
    },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

/** FAQPage-Schema aus einer Frage-Antwort-Liste. */
export function faqPageSchema(faq: { frage: string; antwort: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.frage,
      acceptedAnswer: { "@type": "Answer", text: item.antwort },
    })),
  };
}

/** BreadcrumbList-Schema aus einer Liste von (Name, Pfad)-Paaren. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
