import Link from "next/link";

import SchemaJsonLd from "@/components/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/seo";

type Crumb = { name: string; path: string };

type BreadcrumbsProps = {
  /** Pfad ab der Startseite; "Startseite" wird automatisch vorangestellt. */
  items: Crumb[];
};

/**
 * Sichtbare Brotkrumen-Navigation inklusive BreadcrumbList-JSON-LD.
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const all: Crumb[] = [{ name: "Startseite", path: "/" }, ...items];

  return (
    <>
      <SchemaJsonLd schema={breadcrumbSchema(all)} />
      <nav aria-label="Brotkrumen">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-smoke">
          {all.map((crumb, index) => {
            const isLast = index === all.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-x-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-line">
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-ink">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.path}
                    className="transition-colors hover:text-primary"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
