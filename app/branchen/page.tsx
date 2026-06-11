import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { branchen } from "@/data/branchen";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Branchen: KI für Steuerkanzleien, Immobilien und Zahnarztpraxen",
  description:
    "Branchenlösungen von Avanio: Automatisierung und KI-Assistenten für Steuerkanzleien, Immobilienprofis und Zahnarztpraxen. Bundesweit, remote umgesetzt.",
  path: "/branchen",
});

export default function BranchenPage() {
  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs items={[{ name: "Branchen", path: "/branchen" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Branchenlösungen: KI, die Ihre Sprache spricht
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
            Jede Branche hat ihre eigenen Zeitfresser. Statt Sie mit
            Allgemeinplätzen abzuholen, zeigen wir Ihnen für Ihre Branche
            konkret, welche Abläufe sich automatisieren lassen, wie ein
            typischer Workflow aussieht und worauf es bei Datenschutz und
            Qualität ankommt. Bundesweit und remote umgesetzt.
          </p>
        </div>
      </section>

      <section
        aria-label="Branchen im Überblick"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {branchen.map((branche) => {
            const lead = branche.loesung.split("\n\n")[0];
            return (
              <Link
                key={branche.slug}
                href={`/branchen/${branche.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-primary"
              >
                <h2 className="font-display text-xl font-bold text-ink transition-colors group-hover:text-primary">
                  KI für {branche.name}
                </h2>
                <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-smoke">
                  {lead}
                </p>
                <span className="mt-5 text-sm font-semibold text-primary">
                  Zur Branchenlösung
                </span>
              </Link>
            );
          })}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-smoke">
          Ihre Branche ist nicht dabei? Die Bausteine dahinter (
          <Link
            href="/leistungen/prozessautomatisierung"
            className="font-semibold text-primary hover:text-primary-dark"
          >
            Prozessautomatisierung
          </Link>
          ,{" "}
          <Link
            href="/leistungen/ki-telefonassistent"
            className="font-semibold text-primary hover:text-primary-dark"
          >
            KI-Telefonassistent
          </Link>{" "}
          und{" "}
          <Link
            href="/leistungen/ki-chatbot"
            className="font-semibold text-primary hover:text-primary-dark"
          >
            KI-Chatbot
          </Link>
          ) funktionieren in fast jedem Betrieb mit wiederkehrender
          Kommunikation und Belegen. Sprechen Sie uns einfach an.
        </p>
      </section>

      <CTASection
        heading="Unsicher, was in Ihrer Branche geht?"
        text="Schildern Sie uns Ihren Alltag in einem kostenlosen Erstgespräch. Wir sagen Ihnen ehrlich, was sich automatisieren lässt und was (noch) nicht."
      />
    </>
  );
}
