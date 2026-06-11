import Link from "next/link";

import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  /** Überschriften-Ebene je nach Einbettungskontext (Standard: h3). */
  headingLevel?: "h2" | "h3";
};

/**
 * Verlinkte Karte für eine Leistung. Wird auf der Leistungs-Übersicht,
 * der Startseite und für Querverweise auf den Pillar-Seiten genutzt.
 */
export default function ServiceCard({
  service,
  headingLevel = "h3",
}: ServiceCardProps) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/leistungen/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-primary"
    >
      <Heading className="font-display text-xl font-bold text-ink transition-colors group-hover:text-primary">
        {service.name}
      </Heading>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-smoke">
        {service.kurz}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Mehr erfahren
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </span>
    </Link>
  );
}
