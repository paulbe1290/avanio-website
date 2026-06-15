import type { MetadataRoute } from "next";

import { branchen } from "@/data/branchen";
import { cities, cityIstIndexierbar } from "@/data/cities";
import { artikel } from "@/data/ratgeber";
import { services } from "@/data/services";
import { standorte, standortIstIndexierbar } from "@/data/standorte";
import { absoluteUrl } from "@/lib/seo";

/**
 * Dynamische Sitemap. Doorway-Schutz: Stadt- und Standort-Seiten werden
 * nur aufgenommen, wenn sie indexierbar sind (gleiche Regel wie das
 * noindex-Flag der Templates). Nicht indexierbare Seiten fehlen hier
 * und tragen zugleich noindex.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const statischeRouten = [
    "/",
    "/leistungen",
    "/ki-agentur",
    "/branchen",
    "/standorte",
    "/ratgeber",
    "/referenzen",
    "/ueber-uns",
    "/kontakt",
    "/termin",
    "/impressum",
    "/datenschutz",
  ];

  const eintraege: MetadataRoute.Sitemap = statischeRouten.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
  }));

  for (const service of services) {
    eintraege.push({
      url: absoluteUrl(`/leistungen/${service.slug}`),
      lastModified,
    });
  }

  for (const branche of branchen) {
    eintraege.push({
      url: absoluteUrl(`/branchen/${branche.slug}`),
      lastModified,
    });
  }

  for (const city of cities.filter(cityIstIndexierbar)) {
    eintraege.push({
      url: absoluteUrl(`/ki-agentur/${city.slug}`),
      lastModified,
    });
  }

  for (const standort of standorte.filter(standortIstIndexierbar)) {
    eintraege.push({
      url: absoluteUrl(`/standorte/${standort.slug}`),
      lastModified,
    });
  }

  for (const beitrag of artikel) {
    eintraege.push({
      url: absoluteUrl(`/ratgeber/${beitrag.slug}`),
      lastModified: new Date(beitrag.datum),
    });
  }

  return eintraege;
}
