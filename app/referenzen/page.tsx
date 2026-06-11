import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Referenzen: Woran Sie uns messen können",
  description:
    "Wie Avanio arbeitet und woran Sie den Erfolg einer Automatisierung messen: klare Ziele, dokumentierte Workflows und ehrliche Zahlen statt Hochglanz-Logos.",
  path: "/referenzen",
});

const grundsaetze = [
  {
    titel: "Messbare Ziele statt Buzzwords",
    text: "Vor jedem Projekt legen wir fest, woran sich der Erfolg ablesen lässt: gesparte Stunden, angenommene Anrufe, schnellere Antwortzeiten. Danach wird gemessen, nicht geschätzt.",
  },
  {
    titel: "Dokumentation gehört dazu",
    text: "Jeder Workflow wird so dokumentiert, dass Ihr Team und jeder spätere Dienstleister ihn versteht. Sie bleiben unabhängig von uns.",
  },
  {
    titel: "Ehrlichkeit vor Abschluss",
    text: "Wenn sich ein Prozess nicht sinnvoll automatisieren lässt, sagen wir das im Erstgespräch, nicht nach drei bezahlten Monaten.",
  },
];

export default function ReferenzenPage() {
  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs items={[{ name: "Referenzen", path: "/referenzen" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Woran Sie uns messen können
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
            Wir schmücken uns nicht mit fremden Federn: Fallstudien
            veröffentlichen wir hier erst, wenn unsere Kunden der
            Veröffentlichung ausdrücklich zugestimmt haben. Bis dahin zeigen
            wir Ihnen lieber, wie wir arbeiten und woran Sie ein gutes
            Automatisierungsprojekt erkennen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold">Unsere Arbeitsgrundsätze</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {grundsaetze.map((grundsatz) => (
            <div
              key={grundsatz.titel}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <h3 className="font-display text-lg font-bold">
                {grundsatz.titel}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-smoke">
                {grundsatz.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/*
        TODO: Sobald freigegebene Kundenstimmen oder Fallstudien vorliegen,
        diesen Platzhalter durch echte Referenzen ersetzen (Zitat, Firma,
        Branche, Kennzahlen). Bis dahin bewusst KEINE erfundenen Logos,
        Bewertungen oder Umsatzzahlen.
      */}
      <section className="bg-mist">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold">Fallstudien folgen</h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-smoke">
            An dieser Stelle entstehen ausführliche Fallstudien mit echten
            Zahlen aus echten Projekten. Sie möchten wissen, was in einem
            Betrieb wie Ihrem typischerweise möglich ist? Auf unseren
            Branchen-Seiten finden Sie durchgerechnete Beispiel-Workflows.
          </p>
          <Link
            href="/branchen"
            className="mt-8 inline-block rounded-full border border-line bg-white px-7 py-3 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
          >
            Zu den Branchenlösungen
          </Link>
        </div>
      </section>

      <CTASection
        heading="Überzeugen Sie sich selbst"
        text="Das beste Argument ist ein konkreter Vorschlag für Ihren Betrieb. Im kostenlosen Erstgespräch rechnen wir gemeinsam durch, was Automatisierung bei Ihnen bewirken kann."
      />
    </>
  );
}
