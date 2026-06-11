import type { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title:
    "Leistungen: Prozessautomatisierung, KI-Telefonassistent und KI-Chatbot",
  description:
    "Drei Wege, wie KI Ihren Arbeitsalltag entlastet: Prozessautomatisierung, KI-Telefonassistenten und KI-Chatbots. Beratung und Umsetzung aus einer Hand.",
  path: "/leistungen",
});

const arbeitsweise = [
  {
    titel: "Analyse",
    text: "Wir schauen uns Ihre Abläufe im Detail an und finden die Stellen, an denen Automatisierung und KI am schnellsten Wirkung zeigen. Ohne Fachchinesisch, dafür mit klaren Empfehlungen.",
  },
  {
    titel: "Umsetzung",
    text: "Wir bauen die Lösung, verbinden sie mit Ihren bestehenden Systemen und testen sie gemeinsam mit Ihrem Team an echten Fällen, bevor sie live geht.",
  },
  {
    titel: "Betreuung",
    text: "Nach dem Start bleiben wir dran: Wir überwachen die Workflows, werten Ergebnisse aus und entwickeln Ihre Automatisierung Schritt für Schritt weiter.",
  },
];

export default function LeistungenPage() {
  return (
    <>
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs items={[{ name: "Leistungen", path: "/leistungen" }]} />
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Leistungen: KI, die im Alltag arbeitet
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-smoke">
            Ob volle Postfächer, klingelnde Telefone oder Daten, die von Hand
            übertragen werden: Wir nehmen Ihrem Team die Routine ab. Drei
            Leistungen, ein Ziel: mehr Zeit für die Arbeit, die Umsatz und
            Qualität bringt.
          </p>
        </div>
      </section>

      <section
        aria-label="Unsere Leistungen im Überblick"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              headingLevel="h2"
            />
          ))}
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-bold">So arbeiten wir</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {arbeitsweise.map((schritt, index) => (
              <div
                key={schritt.titel}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft font-display font-bold text-primary-dark">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">
                  {schritt.titel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">
                  {schritt.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
