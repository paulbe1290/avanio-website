import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { artikelNachDatum } from "@/data/ratgeber";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Ratgeber: Automatisierung und KI verständlich erklärt",
  description:
    "Praxisnahe Artikel zu Prozessautomatisierung, KI-Assistenten und Datenschutz: mit Rechenbeispielen und Checklisten für den Mittelstand.",
  path: "/ratgeber",
});

function formatiereDatum(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function RatgeberPage() {
  const beitraege = artikelNachDatum();

  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs items={[{ name: "Ratgeber", path: "/ratgeber" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Ratgeber: Automatisierung ohne Fachchinesisch
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
            Was kostet das, was bringt das, und worauf muss ich achten? Hier
            beantworten wir die Fragen aus unseren Erstgesprächen ausführlich:
            mit Rechenbeispielen, Checklisten und ehrlichen Grenzen.
          </p>
        </div>
      </section>

      <section
        aria-label="Alle Ratgeber-Artikel"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      >
        <ul className="grid gap-6 md:grid-cols-3">
          {beitraege.map((beitrag) => (
            <li key={beitrag.slug}>
              <Link
                href={`/ratgeber/${beitrag.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-primary"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {beitrag.kategorie}
                </p>
                <h2 className="mt-3 font-display text-xl font-bold text-ink transition-colors group-hover:text-primary">
                  {beitrag.titel}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-smoke">
                  {beitrag.beschreibung}
                </p>
                <p className="mt-5 text-xs text-smoke">
                  <time dateTime={beitrag.datum}>
                    {formatiereDatum(beitrag.datum)}
                  </time>
                  {" · Lesezeit: "}
                  {beitrag.lesedauer}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTASection
        heading="Lieber direkt fragen statt lesen?"
        text="Im kostenlosen Erstgespräch beantworten wir Ihre Fragen für Ihren konkreten Betrieb, inklusive einer ehrlichen Einschätzung, ob sich Automatisierung bei Ihnen lohnt."
      />
    </>
  );
}
