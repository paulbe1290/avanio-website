import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import CalEmbed from "@/components/CalEmbed";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Termin buchen: kostenloses Erstgespräch",
  description:
    "Buchen Sie direkt einen Termin für Ihr kostenloses Erstgespräch mit Avanio. Rund 15 Minuten, per Video, unverbindlich.",
  path: "/termin",
});

const punkte = [
  "Rund 15 Minuten, per Video und unverbindlich.",
  "Wir klären, welcher Prozess sich bei Ihnen zuerst lohnt.",
  "Sie erhalten eine ehrliche Einschätzung, auch wenn sich etwas nicht lohnt.",
];

export default function TerminPage() {
  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <Breadcrumbs items={[{ name: "Termin buchen", path: "/termin" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Erstgespräch direkt buchen
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
            Suchen Sie sich einen Termin aus, der Ihnen passt. Lieber schreiben?
            Dann nutzen Sie unser{" "}
            <Link
              href="/kontakt"
              className="font-semibold text-primary hover:text-primary-dark"
            >
              Kontaktformular
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold">Das erwartet Sie</h2>
            <ul className="mt-6 space-y-4">
              {punkte.map((punkt) => (
                <li key={punkt} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-primary"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 10.5l4 4 8-9" />
                  </svg>
                  <span className="leading-relaxed text-smoke">{punkt}</span>
                </li>
              ))}
            </ul>
          </div>
          <CalEmbed />
        </div>
      </section>
    </>
  );
}
