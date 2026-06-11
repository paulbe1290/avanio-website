import SchemaJsonLd from "@/components/SchemaJsonLd";
import { faqPageSchema } from "@/lib/seo";

type FAQItem = { frage: string; antwort: string };

type FAQProps = {
  items: FAQItem[];
  heading?: string;
};

/**
 * Barrierearmer FAQ-Bereich auf Basis von details/summary (ohne JS)
 * inklusive FAQPage-JSON-LD.
 */
export default function FAQ({ items, heading = "Häufige Fragen" }: FAQProps) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SchemaJsonLd schema={faqPageSchema(items)} />
      <h2 className="text-3xl font-bold">{heading}</h2>
      <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white">
        {items.map((item) => (
          <details key={item.frage} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {item.frage}
              <svg
                className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 8l5 5 5-5" />
              </svg>
            </summary>
            <p className="mt-3 leading-relaxed text-smoke">{item.antwort}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
