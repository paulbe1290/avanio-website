import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import LocalScenario from "@/components/LocalScenario";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import ServiceBlock from "@/components/ServiceBlock";
import { services } from "@/data/services";
import { getStandort, standorte } from "@/data/standorte";
import { buildMetadata, serviceSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ stadt: string }>;
};

export function generateStaticParams() {
  return standorte.map((standort) => ({ stadt: standort.slug }));
}

/**
 * Doorway-Schutz: nur indexieren, wenn die Unique-Felder gefüllt sind
 * und das Flag gesetzt ist.
 */
function istIndexierbar(standort: (typeof standorte)[number]): boolean {
  return (
    standort.indexierbar &&
    standort.hook.trim().length > 0 &&
    standort.beispielSzenario.trim().length > 0 &&
    standort.faq.length >= 2
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stadt } = await params;
  const standort = getStandort(stadt);
  if (!standort) return {};

  return buildMetadata({
    title: `KI für Unternehmen in ${standort.name}: remote umgesetzt`,
    description: `Prozessautomatisierung, KI-Telefonassistent und KI-Chatbot für Unternehmen in ${standort.name} (${standort.bundesland}). Avanio betreut Sie vollständig remote, bundesweit aus Magdeburg.`,
    path: `/standorte/${standort.slug}`,
    noindex: !istIndexierbar(standort),
  });
}

export default async function StandortPage({ params }: Props) {
  const { stadt } = await params;
  const standort = getStandort(stadt);
  if (!standort) notFound();

  // Reihenfolge der Leistungsblöcke variiert deterministisch je Standort.
  const offset = standort.slug.length % services.length;
  const leistungen = [...services.slice(offset), ...services.slice(0, offset)];

  const andereStandorte = standorte.filter((s) => s.slug !== standort.slug);

  return (
    <>
      <SchemaJsonLd
        schema={serviceSchema({
          name: `KI und Automatisierung für Unternehmen in ${standort.name}`,
          description: standort.hook,
          path: `/standorte/${standort.slug}`,
          areaServedCity: standort.name,
        })}
      />

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs
            items={[
              { name: "Standorte", path: "/standorte" },
              { name: standort.name, path: `/standorte/${standort.slug}` },
            ]}
          />
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary">
            {standort.bundesland}, bundesweit remote betreut
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            KI für Unternehmen in {standort.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
            {standort.hook}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="rounded-full bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Kostenloses Video-Erstgespräch
            </Link>
            <Link
              href="/leistungen"
              className="rounded-full border border-line bg-white px-7 py-3 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold">
          Zusammenarbeit: vollständig remote
        </h2>
        <p className="mt-5 leading-relaxed text-smoke">
          Avanio sitzt in der Region Magdeburg und betreut Unternehmen in{" "}
          {standort.name} ohne Niederlassung in der Stadt, dafür mit klaren
          Vorteilen: Erstgespräch und Prozessaufnahme laufen per Video und
          Bildschirmübertragung, die Umsetzung erfolgt in Ihren Systemen, und
          Sie zahlen Festpreise je Workflow statt Großstadt-Agentursätze.
          Feste Ansprechpartner und vereinbarte Reaktionszeiten gehören dazu.
        </p>
      </section>

      <div className="bg-mist">
        <LocalScenario
          heading={`So rechnet sich KI in ${standort.name}`}
          szenario={standort.beispielSzenario}
        />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold">
          Das setzen wir für {standort.name} um
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {leistungen.map((service) => (
            <ServiceBlock key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <div className="bg-mist">
        <FAQ
          items={standort.faq}
          heading={`Häufige Fragen aus ${standort.name}`}
        />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold">Weitere Standorte</h2>
        <ul className="mt-6 flex flex-wrap gap-4">
          {andereStandorte.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/standorte/${s.slug}`}
                className="inline-block rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
              >
                {s.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/ki-agentur"
              className="inline-block rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Region Magdeburg
            </Link>
          </li>
        </ul>
      </section>

      <CTASection
        heading={`Bereit, in ${standort.name} Zeit zurückzugewinnen?`}
        text="Buchen Sie ein kostenloses Video-Erstgespräch. Danach wissen Sie, welcher Workflow sich bei Ihnen zuerst rechnet und was er kostet."
      />
    </>
  );
}
