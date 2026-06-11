import Link from "next/link";

import type { Service } from "@/data/services";

type ServiceBlockProps = {
  service: Service;
};

/**
 * Ausführlicherer Leistungsblock für Stadt- und Standort-Seiten.
 * Die Reihenfolge der Blöcke variiert je Seite nach lokalem Schwerpunkt.
 */
export default function ServiceBlock({ service }: ServiceBlockProps) {
  return (
    <article className="rounded-2xl border border-line bg-white p-6 sm:p-8">
      <h3 className="font-display text-2xl font-bold">{service.name}</h3>
      <p className="mt-3 leading-relaxed text-smoke">{service.kurz}</p>
      <ul className="mt-5 space-y-2">
        {service.usecases.slice(0, 3).map((usecase) => {
          const [titel] = usecase.split(": ");
          return (
            <li
              key={titel}
              className="flex items-start gap-2 text-sm text-smoke"
            >
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8.5l3.5 3.5L13 5" />
              </svg>
              {titel}
            </li>
          );
        })}
      </ul>
      <Link
        href={`/leistungen/${service.slug}`}
        className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark"
      >
        Mehr zu {service.name}
        <svg
          className="h-4 w-4"
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
      </Link>
    </article>
  );
}
