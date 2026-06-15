import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import LeadForm from "@/components/LeadForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt: kostenloses Erstgespräch vereinbaren",
  description:
    "Schildern Sie uns Ihr Anliegen: Wir melden uns innerhalb eines Werktags und vereinbaren ein kostenloses Erstgespräch zu Automatisierung und KI.",
  path: "/kontakt",
});

const ablauf = [
  {
    titel: "Sie schreiben uns",
    text: "Zwei, drei Sätze zu Ihrem Betrieb und dem, was Zeit frisst, reichen völlig.",
  },
  {
    titel: "Wir melden uns",
    text: "In der Regel innerhalb eines Werktags, mit einem Terminvorschlag für ein Gespräch von rund 30 Minuten, per Video oder Telefon.",
  },
  {
    titel: "Sie erhalten eine Einschätzung",
    text: "Nach dem Gespräch wissen Sie, welcher Workflow sich bei Ihnen zuerst lohnt, was er kostet und wie schnell er einsatzbereit ist.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs items={[{ name: "Kontakt", path: "/kontakt" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Lassen Sie uns über Ihre Zeitfresser sprechen
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
            Das Erstgespräch ist kostenlos und unverbindlich. Sie müssen
            nichts vorbereiten: Erzählen Sie einfach, wie Ihr Alltag aussieht,
            den Rest fragen wir.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Ihre Anfrage</h2>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-primary-soft bg-primary-soft/50 p-6">
              <h2 className="font-display text-xl font-bold text-primary-dark">
                Lieber direkt einen Termin?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                Suchen Sie sich ohne Umweg einen freien Termin für Ihr
                kostenloses Erstgespräch aus.
              </p>
              <Link
                href="/termin"
                className="mt-4 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Termin buchen
              </Link>
            </div>

            <h2 className="mt-10 text-2xl font-bold">So geht es weiter</h2>
            <ol className="mt-6 space-y-6">
              {ablauf.map((schritt, index) => (
                <li key={schritt.titel} className="flex gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft font-display font-bold text-primary-dark">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">
                      {schritt.titel}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-smoke">
                      {schritt.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-line bg-mist p-6">
              <h3 className="font-display text-lg font-bold">
                Lieber direkt schreiben oder anrufen?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-smoke">
                E-Mail:{" "}
                <a
                  href="mailto:hallo@beckerwebsolutions.de"
                  className="font-semibold text-primary hover:text-primary-dark"
                >
                  hallo@beckerwebsolutions.de
                </a>
                <br />
                Telefon:{" "}
                <a
                  href="tel:+4915511526216"
                  className="font-semibold text-primary hover:text-primary-dark"
                >
                  +49 15511526216
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
