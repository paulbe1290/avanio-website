import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { standorte } from "@/data/standorte";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Standorte: KI-Agentur für ganz Deutschland, remote aus Magdeburg",
  description:
    "Avanio automatisiert Prozesse für Unternehmen in München, Stuttgart, Frankfurt, Düsseldorf, Hamburg und Potsdam: vollständig remote, mit Festpreisen je Workflow.",
  path: "/standorte",
});

const remoteSchritte = [
  {
    titel: "Video-Erstgespräch",
    text: "Wir lernen Ihren Betrieb per Video kennen und schauen uns die Abläufe gemeinsam am Bildschirm an. Dauer: rund 30 Minuten, kostenlos.",
  },
  {
    titel: "Remote-Umsetzung",
    text: "Workflows bauen, anbinden und testen wir aus der Ferne, mit abgestimmten Zugängen und einer Testphase an echten Fällen.",
  },
  {
    titel: "Laufende Betreuung",
    text: "Feste Ansprechpartner, vereinbarte Reaktionszeiten und aktives Monitoring. Sie merken nur, dass es läuft.",
  },
];

export default function StandortePage() {
  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs items={[{ name: "Standorte", path: "/standorte" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Bundesweit im Einsatz, remote aus Magdeburg
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
            Automatisierung braucht keine Anfahrt: Analyse, Umsetzung und
            Betreuung funktionieren vollständig remote, per Video, Telefon und
            Bildschirmübertragung. Avanio sitzt in der Region Magdeburg und
            unterstützt Unternehmen in ganz Deutschland, mit Festpreisen je
            Workflow statt Großstadt-Agentursätzen.
          </p>
        </div>
      </section>

      <section
        aria-label="Standorte im Überblick"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      >
        <h2 className="text-3xl font-bold">
          Für diese Städte sind wir besonders oft im Einsatz
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standorte.map((standort) => (
            <li key={standort.slug}>
              <Link
                href={`/standorte/${standort.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-colors hover:border-primary"
              >
                <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-primary">
                  KI für Unternehmen in {standort.name}
                </h3>
                <p className="mt-1 text-sm text-smoke">
                  {standort.bundesland}, remote betreut
                </p>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-smoke">
                  {standort.hook}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-smoke">
          Sie sitzen in der Region Magdeburg? Dann sind wir sogar persönlich
          für Sie da:{" "}
          <Link
            href="/ki-agentur"
            className="font-semibold text-primary hover:text-primary-dark"
          >
            zur Übersicht der Region Magdeburg
          </Link>
          .
        </p>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold">So funktioniert remote</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {remoteSchritte.map((schritt, index) => (
              <div
                key={schritt.titel}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft font-display font-bold text-primary-dark">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">
                  {schritt.titel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">
                  {schritt.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Egal wo Sie sitzen: Lassen Sie uns sprechen"
        text="Das Erstgespräch läuft per Video und kostet nichts. Danach wissen Sie, welcher Workflow sich bei Ihnen zuerst rechnet."
      />
    </>
  );
}
