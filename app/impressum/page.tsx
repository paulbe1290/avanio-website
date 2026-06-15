import type { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der Avanio-Website.",
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <Breadcrumbs items={[{ name: "Impressum", path: "/impressum" }]} />
      <h1 className="mt-6 text-4xl font-bold">Impressum</h1>

      <div className="mt-8 space-y-8 leading-relaxed text-smoke">
        <div>
          <h2 className="text-xl font-bold text-ink">Angaben gemäß § 5 DDG</h2>
          <p className="mt-3">
            Paul Becker
            <br />
            Avanio
            <br />
            Klein Möringer Dorfstraße 49
            <br />
            39576 Stendal
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink">Kontakt</h2>
          <p className="mt-3">
            Telefon:{" "}
            <a
              href="tel:+4915511526216"
              className="font-semibold text-primary hover:text-primary-dark"
            >
              +49 15511526216
            </a>
            <br />
            E-Mail:{" "}
            <a
              href="mailto:hallo@beckerwebsolutions.de"
              className="font-semibold text-primary hover:text-primary-dark"
            >
              hallo@beckerwebsolutions.de
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink">
            Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
          </h2>
          <p className="mt-3">
            Paul Becker
            <br />
            Klein Möringer Dorfstraße 49
            <br />
            39576 Stendal
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink">EU-Streitschlichtung</h2>
          <p className="mt-3">
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              rel="noopener noreferrer"
              target="_blank"
              className="font-semibold text-primary hover:text-primary-dark"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink">
            Verbraucherstreitbeilegung
          </h2>
          <p className="mt-3">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </div>
    </section>
  );
}
