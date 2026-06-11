import Link from "next/link";

type CTASectionProps = {
  heading?: string;
  text?: string;
};

/**
 * Abschluss-CTA auf dunkler Markenfläche mit Limetten-Akzent.
 */
export default function CTASection({
  heading = "Lassen Sie uns über Ihre Prozesse sprechen",
  text = "Im kostenlosen Erstgespräch finden wir heraus, wo Automatisierung und KI Ihrem Team am schnellsten Zeit verschaffen. Unverbindlich, verständlich und auf Augenhöhe.",
}: CTASectionProps) {
  return (
    <section className="bg-primary-dark">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-primary-soft">
          {text}
        </p>
        <Link
          href="/kontakt"
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-base font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Kostenloses Erstgespräch vereinbaren
        </Link>
      </div>
    </section>
  );
}
