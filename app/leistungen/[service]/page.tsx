import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import ServiceCard from "@/components/ServiceCard";
import { getService, services } from "@/data/services";
import { buildMetadata, serviceSchema } from "@/lib/seo";

type Props = {
  params: Promise<{ service: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: `${service.name} für den Mittelstand: Beratung und Umsetzung`,
    description: service.kurz,
    path: `/leistungen/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const absaetze = service.lang.split("\n\n");
  const weitereLeistungen = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <SchemaJsonLd
        schema={serviceSchema({
          name: service.name,
          description: service.kurz,
          path: `/leistungen/${service.slug}`,
        })}
      />

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs
            items={[
              { name: "Leistungen", path: "/leistungen" },
              { name: service.name, path: `/leistungen/${service.slug}` },
            ]}
          />
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary">
            Leistung
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
            {service.kurz}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="rounded-full bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Kostenloses Erstgespräch
            </Link>
            <Link
              href="/leistungen"
              className="rounded-full border border-line bg-white px-7 py-3 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Alle Leistungen
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold">
          So unterstützt Sie {service.name}
        </h2>
        <div className="mt-6 space-y-5">
          {absaetze.map((absatz) => (
            <p key={absatz.slice(0, 40)} className="leading-relaxed text-smoke">
              {absatz}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold">Typische Einsatzbereiche</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.usecases.map((usecase) => {
              // Usecase-Strings haben das Format "Titel: Beschreibung".
              const [titel, ...rest] = usecase.split(": ");
              const beschreibung = rest.join(": ");
              return (
                <li
                  key={titel}
                  className="rounded-2xl border border-line bg-white p-6"
                >
                  <h3 className="font-display text-base font-bold">{titel}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-smoke">
                    {beschreibung}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FAQ
        items={service.faq}
        heading={`Häufige Fragen zu ${service.name}`}
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <h2 className="text-2xl font-bold">Weitere Leistungen</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {weitereLeistungen.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CTASection
        heading={`${service.name} für Ihr Unternehmen?`}
        text="Schildern Sie uns kurz Ihre Situation. Im kostenlosen Erstgespräch zeigen wir Ihnen konkret, wie eine Umsetzung in Ihrem Betrieb aussehen kann."
      />
    </>
  );
}
