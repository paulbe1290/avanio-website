import type { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Über uns: die KI-Agentur aus der Region Magdeburg",
  description:
    "Avanio ist die KI-Agentur aus der Region Magdeburg: Wir automatisieren Prozesse für Mittelstand, Kanzleien und Praxen, verständlich, messbar und ohne Abhängigkeiten.",
  path: "/ueber-uns",
});

const werte = [
  {
    titel: "Verständlich",
    text: "Wir erklären jede Lösung so, dass Sie sie Ihrem Team in fünf Minuten weitergeben können. Wer Fachchinesisch braucht, um zu überzeugen, hat meist kein gutes Angebot.",
  },
  {
    titel: "Messbar",
    text: "Automatisierung ist kein Selbstzweck. Jeder Workflow bekommt ein Ziel in Stunden, Anrufen oder Antwortzeiten, und wir prüfen gemeinsam, ob er es erreicht.",
  },
  {
    titel: "Ohne Lock-in",
    text: "Dokumentierte Workflows, Zugänge in Ihrer Hand, gängige Plattformen statt Eigenbau-Blackbox. Sie können jederzeit ohne uns weitermachen, bleiben aber gern.",
  },
  {
    titel: "Datenschutzbewusst",
    text: "Minimale Zugriffe, Auftragsverarbeitungsverträge, auf Wunsch EU-Hosting. Gerade bei Kanzleien und Praxen ist das keine Kür, sondern Voraussetzung.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs items={[{ name: "Über uns", path: "/ueber-uns" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Über Avanio
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
            Avanio ist eine KI-Agentur aus der Region Magdeburg. Wir bauen
            Prozessautomatisierungen, KI-Telefonassistenten und KI-Chatbots
            für Unternehmen, die spüren, dass ihre Tage zu kurz für die
            eigentliche Arbeit geworden sind: Mittelständler, Kanzleien,
            Praxen, Handwerks- und Handelsbetriebe.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold">Warum es uns gibt</h2>
        <div className="mt-6 space-y-5 leading-relaxed text-smoke">
          <p>
            KI ist in aller Munde, aber zwischen Schlagzeile und Arbeitsalltag
            klafft eine Lücke: Die meisten Betriebe wissen, dass sie etwas tun
            sollten, und niemand hat Zeit, sich einzuarbeiten. Genau diese
            Lücke schließen wir. Wir übersetzen das, was technisch möglich
            ist, in Workflows, die in Ihrem Betrieb wirklich laufen, mit
            Ihren Programmen und Ihren Leuten.
          </p>
          <p>
            Dabei bleiben wir bewusst bodenständig: Wir starten mit einem
            einzelnen Prozess statt mit einem Großprojekt, rechnen vorher
            durch, was er bringen muss, und bauen erst weiter aus, wenn die
            Zahlen stimmen. So bleibt das Risiko klein und der Nutzen
            sichtbar.
          </p>
          <p>
            Zuhause sind wir in der Region Magdeburg, zwischen Börde, Altmark
            und Harz. Hier kommen wir für Erstgespräch und Prozessaufnahme
            persönlich vorbei. Für alle anderen gilt: Automatisierung braucht
            keine Anfahrt, wir betreuen Unternehmen in ganz Deutschland
            vollständig remote.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold">Wofür wir stehen</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {werte.map((wert) => (
              <div
                key={wert.titel}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <h3 className="font-display text-lg font-bold">
                  {wert.titel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">
                  {wert.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
        TODO: Team-Sektion ergänzen, sobald Fotos und Kurzprofile freigegeben
        sind (Name, Rolle, Schwerpunkt). Keine Platzhalter-Personen erfinden.
      */}

      <CTASection
        heading="Lernen wir uns kennen"
        text="Ein Gespräch von 30 Minuten reicht, um herauszufinden, ob und wo sich Automatisierung in Ihrem Betrieb lohnt. Kostenlos, ehrlich, ohne Verkaufsdruck."
      />
    </>
  );
}
