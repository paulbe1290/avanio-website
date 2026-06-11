import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import BrancheHero from "@/components/BrancheHero";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import LocalScenario from "@/components/LocalScenario";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { branchen, getBranche } from "@/data/branchen";
import { buildMetadata, serviceSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ branche: string }>;
};

export function generateStaticParams() {
  return branchen.map((branche) => ({ branche: branche.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { branche: slug } = await params;
  const branche = getBranche(slug);
  if (!branche) return {};

  return buildMetadata({
    title: `KI für ${branche.name}: Automatisierung, die den Alltag entlastet`,
    description: `Typische Zeitfresser bei ${branche.name} und wie Prozessautomatisierung, KI-Telefonassistent und Chatbot sie lösen. Mit Beispiel-Workflow und FAQ, bundesweit remote.`,
    path: `/branchen/${branche.slug}`,
  });
}

export default async function BranchePage({ params }: Props) {
  const { branche: slug } = await params;
  const branche = getBranche(slug);
  if (!branche) notFound();

  // Absatz 1 ist der Hero-Lead, der Rest bildet die Lösungs-Sektion.
  const loesungsAbsaetze = branche.loesung.split("\n\n").slice(1);
  const weitereBranchen = branchen.filter((b) => b.slug !== branche.slug);

  return (
    <>
      <SchemaJsonLd
        schema={serviceSchema({
          name: `KI und Automatisierung für ${branche.name}`,
          description: branche.loesung.split("\n\n")[0],
          path: `/branchen/${branche.slug}`,
        })}
      />

      <BrancheHero branche={branche} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold">Kennen Sie das?</h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branche.probleme.map((problem) => {
            const [titel, ...rest] = problem.split(": ");
            return (
              <li
                key={titel}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <h3 className="font-display text-base font-bold">{titel}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">
                  {rest.join(": ")}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold">
            Unsere Lösung für {branche.name}
          </h2>
          <div className="mt-6 space-y-5">
            {loesungsAbsaetze.map((absatz) => (
              <p
                key={absatz.slice(0, 40)}
                className="leading-relaxed text-smoke"
              >
                {absatz}
              </p>
            ))}
          </div>
        </div>
      </section>

      <LocalScenario
        heading="Ein Beispiel-Workflow aus der Praxis"
        szenario={branche.beispielWorkflow}
      />

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold">Typische Anwendungsfälle</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {branche.anwendungsfaelle.map((fall) => {
              const [titel, ...rest] = fall.split(": ");
              return (
                <li
                  key={titel}
                  className="rounded-2xl border border-line bg-white p-6"
                >
                  <h3 className="font-display text-base font-bold">{titel}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-smoke">
                    {rest.join(": ")}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FAQ items={branche.faq} heading={`Häufige Fragen von ${branche.name}`} />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-2xl font-bold">Weitere Branchen</h2>
        <ul className="mt-6 flex flex-wrap gap-4">
          {weitereBranchen.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/branchen/${b.slug}`}
                className="inline-block rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                KI für {b.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTASection
        heading={`KI für ${branche.name}: der nächste Schritt`}
        text="Im kostenlosen Erstgespräch klären wir, welcher Workflow in Ihrem Haus den schnellsten Effekt bringt, und was er kostet."
      />
    </>
  );
}
