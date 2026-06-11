import Link from "next/link";

import Breadcrumbs from "@/components/Breadcrumbs";
import type { Branche } from "@/data/branchen";

/**
 * Hero-Bereich der Branchen-Seiten (Spur 2, bundesweit).
 * Der Lead ist der erste Absatz des Lösungs-Textes der Branche.
 */
export default function BrancheHero({ branche }: { branche: Branche }) {
  const lead = branche.loesung.split("\n\n")[0];

  return (
    <section className="bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Breadcrumbs
          items={[
            { name: "Branchen", path: "/branchen" },
            { name: branche.name, path: `/branchen/${branche.slug}` },
          ]}
        />
        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary">
          Branchenlösung, bundesweit
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          KI für {branche.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
          {lead}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/kontakt"
            className="rounded-full bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Kostenloses Erstgespräch
          </Link>
          <Link
            href="/branchen"
            className="rounded-full border border-line bg-white px-7 py-3 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
          >
            Alle Branchen
          </Link>
        </div>
      </div>
    </section>
  );
}
