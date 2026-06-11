import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import RegionList from "@/components/RegionList";
import ServiceCard from "@/components/ServiceCard";
import { cities, getCity } from "@/data/cities";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "KI-Agentur Region Magdeburg: Standorte und Einzugsgebiet",
  description:
    "Avanio ist die KI-Agentur für Magdeburg, die Börde, die Altmark und den Harz. Prozessautomatisierung, KI-Telefonassistenten und KI-Chatbots, vor Ort betreut.",
  path: "/ki-agentur",
});

export default function KiAgenturPage() {
  const magdeburg = getCity("magdeburg");
  const weitereStaedte = cities.filter((city) => city.slug !== "magdeburg");

  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs items={[{ name: "KI-Agentur", path: "/ki-agentur" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Ihre KI-Agentur für Magdeburg und die Region
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
            Avanio ist in der Region Magdeburg zuhause. Wir kennen die
            Betriebe zwischen Börde, Altmark und Harz, ihre Branchen und ihre
            Engpässe, und wir sind für Erstgespräch und Prozessaufnahme
            persönlich bei Ihnen vor Ort. Die Umsetzung läuft danach so
            remote wie möglich, damit Ihre Zeit und Ihr Budget in Ergebnisse
            fließen statt in Anfahrten.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="rounded-full bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Kostenloses Erstgespräch
            </Link>
            <Link
              href="/standorte"
              className="rounded-full border border-line bg-white px-7 py-3 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              Außerhalb der Region? Bundesweit remote
            </Link>
          </div>
        </div>
      </section>

      {magdeburg && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold">Unser Heimatstandort</h2>
          <Link
            href="/ki-agentur/magdeburg"
            className="group mt-6 block rounded-2xl border border-line bg-white p-6 transition-colors hover:border-primary sm:p-8"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              {magdeburg.landkreis}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold transition-colors group-hover:text-primary">
              KI-Agentur Magdeburg
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed text-smoke">
              {magdeburg.lokalerHook}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-primary">
              Zur Magdeburg-Seite
            </span>
          </Link>
        </section>
      )}

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold">
            Weitere Städte in unserem Einzugsgebiet
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-smoke">
            Von der Altmark bis zum Harz: In diesen Städten und ihrem Umland
            unterstützen wir Unternehmen, Kanzleien und Praxen mit
            Automatisierung und KI.
          </p>
          <div className="mt-8">
            <RegionList cities={weitereStaedte} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold">
          Das setzen wir in der Region um
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <CTASection
        heading="Lieber direkt sprechen?"
        text="Erzählen Sie uns, wo in Ihrem Betrieb Zeit verloren geht. Wir kommen für das Erstgespräch gern zu Ihnen, egal ob nach Magdeburg, in die Börde, die Altmark oder den Harz."
      />
    </>
  );
}
