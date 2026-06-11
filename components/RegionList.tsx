import Link from "next/link";

import type { City } from "@/data/cities";

type RegionListProps = {
  cities: City[];
  /** Überschriften-Ebene der Stadtnamen je nach Kontext (Standard: h3). */
  headingLevel?: "h2" | "h3";
};

/**
 * Verlinkte Liste von Stadt-Seiten der Spur 1. Wird auf der
 * Standort-Übersicht und als Nachbarstädte-Block eingesetzt.
 */
export default function RegionList({
  cities,
  headingLevel = "h3",
}: RegionListProps) {
  const Heading = headingLevel;

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cities.map((city) => (
        <li key={city.slug}>
          <Link
            href={`/ki-agentur/${city.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-colors hover:border-primary"
          >
            <Heading className="font-display text-lg font-bold text-ink transition-colors group-hover:text-primary">
              KI-Agentur {city.name}
            </Heading>
            <p className="mt-1 text-sm text-smoke">{city.landkreis}</p>
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-smoke">
              {city.branchen.slice(0, 3).join(", ")}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
