import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import type { City } from "@/data/cities";

/**
 * Hero-Bereich der lokalen Stadt-Seiten (Spur 1) mit Brotkrumen,
 * H1 und dem einzigartigen lokalen Hook der Stadt.
 */
export default function CityHero({ city }: { city: City }) {
  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Breadcrumbs
          items={[
            { name: "KI-Agentur", path: "/ki-agentur" },
            { name: city.name, path: `/ki-agentur/${city.slug}` },
          ]}
        />
        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary">
          {city.landkreis}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          KI-Agentur {city.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
          {city.lokalerHook}
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
            Unsere Leistungen
          </Link>
        </div>
      </div>
    </section>
  );
}
