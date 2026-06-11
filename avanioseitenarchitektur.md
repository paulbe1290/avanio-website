# Avanio Seitenarchitektur

Spezifikation für die Marketing-Website der KI-Agentur Avanio. Next.js (App Router) auf Vercel. Schnell, statisch gerendert, suchmaschinenoptimiert. Zwei Spuren: lokale Stadt-Seiten für die Region Magdeburg (Spur 1) und bundesweite Branchen- plus Conversion-Seiten (Spur 2).

## Tech-Stack und Konventionen

- Next.js (aktuelle Version, App Router), TypeScript, Tailwind CSS.
- Statisches Rendering (SSG) über `generateStaticParams`, `generateMetadata` pro Seite.
- Schriften lokal via `next/font`, Bilder via `next/image`.
- Datengetrieben: Inhalte kommen aus Dateien in `/data`, nicht hartcodiert in den Seiten.
- Kein `localStorage` oder `sessionStorage`. Keine externen UI-Embeds, wo es ohne geht.
- Sauberer, kommentierter Code. Komponenten in `/components`, SEO-Helfer in `/lib/seo.ts`.

## Routen (vollständig)

```
/                                   Startseite
/leistungen
/leistungen/[service]               prozessautomatisierung | ki-telefonassistent | ki-chatbot
/ki-agentur                         Spur 1: lokale Standort-Übersicht
/ki-agentur/[stadt]                 Spur 1: lokale Stadt-Seiten
/branchen                           Spur 2: Branchen-Übersicht
/branchen/[branche]                 Spur 2: bundesweite Branchen-Seiten
/standorte                          Spur 2: überregionale Standort-Übersicht
/standorte/[stadt]                  Spur 2: Conversion-/Ads-Seiten (remote)
/referenzen
/ratgeber
/ratgeber/[slug]                    MDX-Artikel
/ueber-uns
/kontakt
/impressum
/datenschutz
```

## Datenmodell (`/data`)

Typisierte Datendateien:

```ts
// cities.ts  (Spur 1, lokal)
export type City = {
  name: string; slug: string; landkreis: string;
  geo: { lat: number; lng: number };
  branchen: string[];
  lokalerHook: string;        // unique, 1-2 Sätze
  beispielSzenario: string;   // unique, durchgerechnetes Beispiel
  faqLokal: { frage: string; antwort: string }[]; // >= 2 unique
  nachbarstaedte: string[];
  indexierbar: boolean;       // false solange Unique-Felder leer
};

// standorte.ts  (Spur 2, remote)
export type Standort = {
  name: string; slug: string; bundesland: string;
  hook: string; beispielSzenario: string;
  faq: { frage: string; antwort: string }[];
  indexierbar: boolean;
};

// branchen.ts  (Spur 2)
export type Branche = {
  name: string; slug: string;
  probleme: string[]; loesung: string;
  anwendungsfaelle: string[]; beispielWorkflow: string;
  faq: { frage: string; antwort: string }[];
};

// services.ts
export type Service = {
  name: string; slug: string; kurz: string; lang: string;
  usecases: string[]; faq: { frage: string; antwort: string }[];
};
```

Datensätze:

- **cities (Spur 1):** Magdeburg (Flagship), Stendal, Wolmirstedt, Schoenebeck, Burg, Haldensleben, Halberstadt, Wernigerode, Tangermuende.
- **standorte (Spur 2):** Muenchen, Stuttgart, Frankfurt, Duesseldorf, Hamburg, Potsdam.
- **branchen (Spur 2):** Steuerkanzleien, Immobilien, Zahnarztpraxen.
- **services:** Prozessautomatisierung, KI-Telefonassistent, KI-Chatbot.

## Inhalte und Texte

Für jede Stadt, jeden Standort und jede Branche ein einzigartiger deutscher Erstentwurf der Unique-Felder (Hook, Szenario, FAQ). Pro Stadt dient die jeweilige lokale Branchenstruktur als Aufhänger. Kein Platzhalter-Text, kein bloßer Name-Tausch.

Tonalität:

- Deutsch, professionell, Sie-Form (Zielgruppe Mittelstand, Kanzleien, Praxen).
- Keine Gedankenstriche und keine Bindestriche als Satzzeichen. Stattdessen Komma, Doppelpunkt, Punkt oder Klammern. Bindestriche in Komposita (z. B. "Premium-Auftritt") sind erlaubt.
- Keine erfundenen Referenzen, Logos oder Zahlen. Wo Social Proof fehlt, neutrale Platzhalter mit `TODO`-Kommentar setzen.

## SEO-Anforderungen

- `generateMetadata` pro Seite: einzigartiger Title und Description nach Templates, plus Canonical und OpenGraph.
- JSON-LD über eine `SchemaJsonLd`-Komponente: global `Organization` + `WebSite`; Stadt-Seiten `ProfessionalService` mit `areaServed` und `geo`; Branchen- und Service-Seiten `Service`; FAQ-Bereiche `FAQPage`; Breadcrumbs `BreadcrumbList`.
- `app/sitemap.ts`: dynamisch, nimmt nur Einträge mit `indexierbar === true` auf.
- `app/robots.ts` sauber konfiguriert.
- Genau eine H1 pro Seite, semantische Heading-Hierarchie, Alt-Texte.

## Doorway-Schutz (harte Regeln)

- Eine Seite ist nur dann `index` und in der Sitemap, wenn alle Unique-Pflichtfelder gefüllt sind und mindestens rund 250 Wörter einzigartiger Text vorhanden sind. Sonst `noindex`.
- Spur-2-Stadt-Seiten dürfen keine "vor Ort"-Behauptungen oder erfundene Adressen enthalten. Formulierung immer remote/bundesweit.
- Reihenfolge der Leistungsblöcke je Stadt nach lokalem Schwerpunkt variieren.

## Komponenten (mindestens)

Header, Footer, Hero, ServiceCard, ServiceBlock, CityHero, LocalScenario, BrancheHero, FAQ, CTASection, RegionList, Breadcrumbs, LeadForm, SchemaJsonLd.

## Lead-Formular

`LeadForm` (Name, Firma, Ort, Anliegen) sendet per POST an einen Make.com-Webhook. Webhook-URL aus `process.env.MAKE_WEBHOOK_URL`, nicht hartcodieren. Erfolgs- und Fehlerzustand sauber behandeln. Keine personenbezogenen Daten in URL-Parametern.

## Design / CI

Eigene Avanio-CI, bewusst anders als Becker Websolutions (kein Becker-Blau). Moderne, klare, vertrauenswürdige Optik für eine KI-Agentur. Eigene Farbpalette und ein Schriftpaar (z. B. eine markante Grotesk für Headlines, eine ruhige Grotesk für Fließtext) als Tailwind-Theme und CSS-Variablen. Hell, hoher Kontrast, barrierearm.

## Build-Reihenfolge (nach jedem Schritt stoppen)

1. Projekt-Setup, Tailwind-Theme/CI, Root-Layout, Header, Footer, globales Schema.
2. Die drei Service-Pillar-Seiten inkl. `services.ts`.
3. Stadt-Template `/ki-agentur/[stadt]` + `cities.ts`, Magdeburg vollständig befüllt, restliche Tier-2-Städte mit Erstentwurf.
4. Standort-Übersicht `/ki-agentur` + interne Verlinkung (Pillars, Nachbarstädte).
5. Spur 2: `/branchen/[branche]` + `branchen.ts`, dann `/standorte/[stadt]` + `standorte.ts` (remote-Framing).
6. Referenzen, Ueber-uns, Kontakt (mit LeadForm), Impressum, Datenschutz.
7. `sitemap.ts` (mit noindex-Filter), `robots.ts`, OpenGraph, Canonicals.
8. Ratgeber-Setup `/ratgeber` + `[slug]` (MDX) und drei Beispiel-Artikel.
9. Schnellcheck: eine H1 je Seite, Metadaten einzigartig, valides JSON-LD, Lighthouse.

## Nicht tun

- Keine Fake-Lokalität für Spur-2-Städte.
- Keine erfundenen Kundenlogos, Bewertungen oder Umsatzzahlen.
- Keine Gedankenstriche oder Bindestriche als Satzzeichen im sichtbaren Text.
- Keine Browser-Storage-APIs.
