import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import CityHero from "@/components/CityHero";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import LocalScenario from "@/components/LocalScenario";
import RegionList from "@/components/RegionList";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import ServiceBlock from "@/components/ServiceBlock";
import { cities, getCity, serviceReihenfolge } from "@/data/cities";
import { getService } from "@/data/services";
import { buildMetadata, professionalServiceSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ stadt: string }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({ stadt: city.slug }));
}

/**
 * Doorway-Schutz: Eine Stadt-Seite wird nur indexiert, wenn alle
 * Unique-Pflichtfelder gefüllt sind und das "indexierbar"-Flag gesetzt ist.
 */
function istIndexierbar(city: (typeof cities)[number]): boolean {
  return (
    city.indexierbar &&
    city.lokalerHook.trim().length > 0 &&
    city.beispielSzenario.trim().length > 0 &&
    city.faqLokal.length >= 2
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stadt } = await params;
  const city = getCity(stadt);
  if (!city) return {};

  return buildMetadata({
    title: `KI-Agentur ${city.name}: Automatisierung für Unternehmen vor Ort`,
    description: `Avanio unterstützt Unternehmen in ${city.name} (${city.landkreis}) mit Prozessautomatisierung, KI-Telefonassistenten und KI-Chatbots. Jetzt kostenloses Erstgespräch vereinbaren.`,
    path: `/ki-agentur/${city.slug}`,
    noindex: !istIndexierbar(city),
  });
}

export default async function StadtPage({ params }: Props) {
  const { stadt } = await params;
  const city = getCity(stadt);
  if (!city) notFound();

  // Leistungsblöcke nach lokalem Branchenschwerpunkt sortiert.
  const leistungen = serviceReihenfolge(city)
    .map((slug) => getService(slug))
    .filter((service) => service !== undefined);

  // Interne Verlinkung: Nachbarstädte aus den hinterlegten Slugs auflösen.
  const nachbarn = city.nachbarstaedte
    .map((slug) => getCity(slug))
    .filter((nachbar) => nachbar !== undefined);

  return (
    <>
      <SchemaJsonLd
        schema={professionalServiceSchema({
          cityName: city.name,
          path: `/ki-agentur/${city.slug}`,
          description: city.lokalerHook,
          geo: city.geo,
        })}
      />

      <CityHero city={city} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold">
          Typische Branchen in {city.name}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-smoke">
          Diese Branchen prägen die Wirtschaft vor Ort, und für jede davon
          gibt es Abläufe, die sich heute zuverlässig automatisieren lassen.
        </p>
        <ul className="mt-6 flex flex-wrap gap-3">
          {city.branchen.map((branche) => (
            <li
              key={branche}
              className="rounded-full bg-primary-soft px-4 py-2 text-sm font-medium text-primary-dark"
            >
              {branche}
            </li>
          ))}
        </ul>
      </section>

      <div className="bg-mist">
        <LocalScenario
          cityName={city.name}
          szenario={city.beispielSzenario}
        />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold">
          Unsere Leistungen für {city.name}
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {leistungen.map((service) => (
            <ServiceBlock key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <div className="bg-mist">
        <FAQ
          items={city.faqLokal}
          heading={`Häufige Fragen aus ${city.name}`}
        />
      </div>

      {nachbarn.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2 className="text-2xl font-bold">
            Auch in der Nähe von {city.name}
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-smoke">
            Wir betreuen Unternehmen in der gesamten Region. Diese Standorte
            liegen in Ihrer Nachbarschaft:
          </p>
          <div className="mt-6">
            <RegionList cities={nachbarn} />
          </div>
          <p className="mt-6 text-sm text-smoke">
            Alle Städte und das gesamte Einzugsgebiet finden Sie auf der{" "}
            <Link
              href="/ki-agentur"
              className="font-semibold text-primary hover:text-primary-dark"
            >
              Übersicht der Region Magdeburg
            </Link>
            .
          </p>
        </section>
      )}

      <CTASection
        heading={`Bereit für den nächsten Schritt in ${city.name}?`}
        text="Schildern Sie uns kurz, wo es bei Ihnen hakt. Im kostenlosen Erstgespräch zeigen wir Ihnen, welche Abläufe sich in Ihrem Betrieb zuerst lohnen."
      />
    </>
  );
}
