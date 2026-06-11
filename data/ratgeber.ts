/**
 * Metadaten der Ratgeber-Artikel. Die Inhalte liegen als MDX-Dateien in
 * /content/ratgeber/[slug].mdx und werden im Template statisch importiert.
 */

export type Artikel = {
  titel: string;
  slug: string;
  beschreibung: string;
  datum: string; // ISO-Datum
  lesedauer: string;
  kategorie: string;
};

export const artikel: Artikel[] = [
  {
    titel: "Was kostet Prozessautomatisierung im Mittelstand?",
    slug: "was-kostet-prozessautomatisierung",
    beschreibung:
      "Einrichtung, Betrieb, versteckte Posten: Womit Sie bei einem Automatisierungsprojekt realistisch rechnen sollten, und wann sich der Aufwand nicht lohnt.",
    datum: "2026-05-12",
    lesedauer: "7 Minuten",
    kategorie: "Prozessautomatisierung",
  },
  {
    titel: "KI-Telefonassistent: Lohnt sich das für kleine Betriebe?",
    slug: "ki-telefonassistent-lohnt-sich-das",
    beschreibung:
      "Was ein KI-Telefonassistent heute wirklich kann, wo seine Grenzen liegen und wie Sie für Ihren Betrieb durchrechnen, ob er sich trägt.",
    datum: "2026-05-26",
    lesedauer: "6 Minuten",
    kategorie: "KI-Telefonassistent",
  },
  {
    titel: "DSGVO und KI im Büroalltag: worauf der Mittelstand achten muss",
    slug: "dsgvo-und-ki-im-mittelstand",
    beschreibung:
      "Datenschutz ist kein Grund, auf KI zu verzichten, aber ein Grund, sauber zu starten: die wichtigsten Grundsätze, Stolperfallen und eine Checkliste.",
    datum: "2026-06-09",
    lesedauer: "8 Minuten",
    kategorie: "Recht und Datenschutz",
  },
];

/** Liefert einen Artikel anhand seines Slugs oder undefined. */
export function getArtikel(slug: string): Artikel | undefined {
  return artikel.find((eintrag) => eintrag.slug === slug);
}

/** Artikel absteigend nach Datum sortiert (neueste zuerst). */
export function artikelNachDatum(): Artikel[] {
  return [...artikel].sort((a, b) => b.datum.localeCompare(a.datum));
}
