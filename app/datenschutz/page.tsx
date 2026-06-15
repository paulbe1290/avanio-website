import type { Metadata } from "next";

import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Avanio-Website: welche Daten wir verarbeiten, zu welchem Zweck und welche Rechte Sie haben.",
  path: "/datenschutz",
});

/*
 * Hinweis: Die Angaben sind vollständig befüllt. Eine abschließende
 * juristische Prüfung vor dem Livegang bleibt empfehlenswert.
 */
export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <Breadcrumbs items={[{ name: "Datenschutz", path: "/datenschutz" }]} />
      <h1 className="mt-6 text-4xl font-bold">Datenschutzerklärung</h1>

      <div className="mt-8 space-y-8 leading-relaxed text-smoke">
        <div>
          <h2 className="text-xl font-bold text-ink">1. Verantwortlicher</h2>
          <p className="mt-3">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            Paul Becker (Avanio)
            <br />
            Klein Möringer Dorfstraße 49
            <br />
            39576 Stendal
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
            2. Grundsätze unserer Datenverarbeitung
          </h2>
          <p className="mt-3">
            Diese Website kommt bewusst sparsam aus: Wir setzen keine
            Tracking- oder Marketing-Cookies ein, binden keine externen
            Analysedienste ein und laden Schriften von unserem eigenen Server
            statt von Drittanbietern. Personenbezogene Daten verarbeiten wir
            nur, wenn Sie sie uns aktiv mitteilen, etwa über das
            Kontaktformular.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink">
            3. Hosting und Server-Logdateien
          </h2>
          <p className="mt-3">
            Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133,
            Covina, CA 91723, USA gehostet. Beim Aufruf der Website
            verarbeitet der Hoster technisch notwendige Daten wie IP-Adresse,
            Datum und Uhrzeit des Zugriffs, aufgerufene Seite und
            Browser-Informationen in Server-Logdateien. Diese Verarbeitung
            ist für den sicheren Betrieb der Website erforderlich
            (Art. 6 Abs. 1 lit. f DSGVO). Mit Vercel besteht ein
            Auftragsverarbeitungsvertrag; die Übermittlung in die USA wird
            über die EU-Standardvertragsklauseln und das EU-US Data Privacy
            Framework abgesichert.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink">4. Kontaktformular</h2>
          <p className="mt-3">
            Wenn Sie unser Kontaktformular nutzen, verarbeiten wir die von
            Ihnen eingegebenen Angaben (Name, Firma, Ort, Anliegen) zur
            Bearbeitung Ihrer Anfrage und für Anschlussfragen. Die
            Übermittlung erfolgt verschlüsselt. Zur Entgegennahme und
            Weiterleitung der Anfragen setzen wir die
            Automatisierungsplattform Make (betrieben von der Celonis SE,
            Theresienstraße 6, 80333 München) als Auftragsverarbeiter ein.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
            Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (effiziente
            Bearbeitung von Anfragen). Ihre Daten werden gelöscht, sobald sie
            für die Bearbeitung nicht mehr erforderlich sind und keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink">5. Cookies</h2>
          <p className="mt-3">
            Wir verzichten auf Tracking-, Analyse- und Marketing-Cookies.
            Gesetzt wird ausschließlich ein technisch notwendiges Cookie, das
            Ihre Entscheidung im Cookie-Hinweis speichert (Name:
            {" "}
            <code className="rounded bg-mist px-1 py-0.5 text-sm">
              avanio-cookie-consent
            </code>
            ), damit der Hinweis bei weiteren Besuchen nicht erneut erscheint.
            Dieses Cookie enthält nur den Wert Ihrer Auswahl, keine
            personenbezogenen Daten, und ist rund sechs Monate gültig.
            Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG, da das Cookie für den
            von Ihnen gewünschten Betrieb unbedingt erforderlich ist. Sie
            können gesetzte Cookies jederzeit in Ihren Browser-Einstellungen
            löschen.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink">
            6. Ihre Rechte als betroffene Person
          </h2>
          <p className="mt-3">
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
            betreffenden personenbezogenen Daten: das Recht auf Auskunft
            (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung
            (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO),
            Datenübertragbarkeit (Art. 20 DSGVO) sowie Widerspruch gegen die
            Verarbeitung (Art. 21 DSGVO). Soweit eine Verarbeitung auf Ihrer
            Einwilligung beruht, können Sie diese jederzeit mit Wirkung für
            die Zukunft widerrufen. Zudem haben Sie das Recht, sich bei einer
            Datenschutz-Aufsichtsbehörde zu beschweren; für Sachsen-Anhalt
            ist dies der Landesbeauftragte für den Datenschutz
            Sachsen-Anhalt.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink">
            7. Aktualität dieser Erklärung
          </h2>
          <p className="mt-3">
            Diese Datenschutzerklärung passen wir an, wenn sich die Website
            oder die Rechtslage ändert. Stand: Juni 2026.
          </p>
        </div>
      </div>
    </section>
  );
}
