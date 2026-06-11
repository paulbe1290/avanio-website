import type { Metadata } from "next";
import Link from "next/link";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Avanio: KI-Agentur für Prozessautomatisierung im Mittelstand",
  description:
    "Avanio automatisiert Prozesse im Mittelstand: KI-Telefonassistenten, KI-Chatbots und Prozessautomatisierung. Aus der Region Magdeburg, bundesweit im Einsatz.",
  path: "/",
});

/**
 * Startseite. In Meilenstein 1 bewusst schlank gehalten: Die vollständige
 * Startseite (Hero, ServiceCards, CTA-Sektionen) entsteht mit den
 * Komponenten der folgenden Meilensteine.
 */
export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        KI-Agentur für den Mittelstand
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
        Weniger Routine, mehr Zeit für das Wesentliche: Avanio automatisiert
        Ihre Prozesse mit KI.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-smoke">
        Wir entwickeln Prozessautomatisierungen, KI-Telefonassistenten und
        KI-Chatbots für Kanzleien, Praxen und mittelständische Unternehmen.
        Zuhause in der Region Magdeburg, bundesweit im Einsatz.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/kontakt"
          className="rounded-full bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Kostenloses Erstgespräch
        </Link>
        <Link
          href="/leistungen"
          className="rounded-full border border-line px-7 py-3 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
        >
          Leistungen ansehen
        </Link>
      </div>
    </section>
  );
}
