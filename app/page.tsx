import { existsSync } from "fs";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { join } from "path";

import CountUp from "@/components/CountUp";
import CTASection from "@/components/CTASection";
import GrowthChart from "@/components/GrowthChart";
import Reveal from "@/components/Reveal";
import SavingsChart from "@/components/SavingsChart";
import ServiceCard from "@/components/ServiceCard";
import { artikelNachDatum } from "@/data/ratgeber";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Avanio: KI-Agentur für Prozessautomatisierung im Mittelstand",
  description:
    "Avanio automatisiert Prozesse im Mittelstand: KI-Telefonassistenten, KI-Chatbots und Prozessautomatisierung. Aus der Region Magdeburg, bundesweit im Einsatz.",
  path: "/",
});

// Wird zur Build-Zeit ausgewertet: Sobald public/paul-becker.jpg im Repo
// liegt, erscheint das Porträt automatisch statt des Monogramm-Fallbacks.
const fotoVorhanden = existsSync(
  join(process.cwd(), "public", "paul-becker.jpg"),
);

/** Durchgerechnete Beispielszenarien (siehe Stadt- und Branchen-Seiten). */
const chartDaten = [
  { label: "Belegeingang einer Steuerkanzlei", vorher: 40, nachher: 10 },
  { label: "Telefonannahme im Handwerksbetrieb", vorher: 25, nachher: 7 },
  { label: "Kundenanfragen im Handel", vorher: 84, nachher: 25 },
];

const ablauf = [
  {
    titel: "Erstgespräch",
    text: "30 Minuten, kostenlos, per Video oder vor Ort in der Region Magdeburg. Wir finden den Prozess mit dem größten Hebel.",
  },
  {
    titel: "Umsetzung zum Festpreis",
    text: "Wir bauen den Workflow, verbinden ihn mit Ihren Systemen und testen an echten Fällen, bevor er live geht.",
  },
  {
    titel: "Messbare Entlastung",
    text: "Sie sehen schwarz auf weiß, wie viele Stunden zurückkommen. Erst dann bauen wir gemeinsam weiter aus.",
  },
];

function Portrait() {
  if (fotoVorhanden) {
    return (
      <Image
        src="/paul-becker.jpg"
        alt="Paul Becker, Gründer von Avanio"
        width={1023}
        height={1537}
        priority
        className="h-full w-full rounded-3xl object-cover"
      />
    );
  }
  // Fallback, bis das Porträt im Repo liegt (public/paul-becker.jpg).
  return (
    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
      <span className="font-display text-7xl font-bold text-primary-soft">
        PB
      </span>
    </div>
  );
}

export default function HomePage() {
  const beitraege = artikelNachDatum().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mist">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-primary-soft blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-primary-dark">
                <span className="h-2 w-2 rounded-full bg-primary" />
                KI-Agentur · Region Magdeburg · bundesweit remote
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Ihr Team hat Besseres zu tun{" "}
                <span className="text-primary">als Routine.</span>
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-smoke">
                Avanio automatisiert Prozesse, Telefon und Kundenanfragen mit
                KI: für Mittelstand, Kanzleien und Praxen. Während Ihre
                Konkurrenz noch abtippt, arbeitet bei Ihnen die Maschine.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  Kostenloses Erstgespräch
                </Link>
                <Link
                  href="/leistungen"
                  className="rounded-full border border-line bg-white px-8 py-3.5 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  Leistungen ansehen
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[3/4]">
              <Portrait />
              <div className="animate-float absolute -left-6 top-10 rounded-2xl border border-line bg-white px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold text-smoke">
                  Ihr KI-Assistent
                </p>
                <p className="font-display text-lg font-bold text-ink">
                  nimmt Anrufe 24/7 an
                </p>
              </div>
              <div className="animate-float-verzoegert absolute -right-4 bottom-12 rounded-2xl border border-line bg-white px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold text-smoke">
                  Automatisch gebucht
                </p>
                <p className="font-display text-lg font-bold text-ink">
                  Termine direkt im Kalender
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Animierte Kennzahlen */}
      <section className="bg-primary-dark">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-white">
              Was drin ist, wenn Routine automatisch läuft
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 text-center sm:grid-cols-3">
            <Reveal delay={0}>
              <p className="font-display text-5xl font-bold text-accent">
                <CountUp value={30} prefix="bis zu " suffix=" Std." />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary-soft">
                pro Monat, die ein einzelner automatisierter Workflow
                zurückholt, etwa beim Belegeingang einer Kanzlei
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-display text-5xl font-bold text-accent">
                <CountUp value={60} prefix="unter " suffix=" Sek." />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary-soft">
                Reaktionszeit auf Standardanfragen per Chat und E-Mail, statt
                Stunden oder Tagen im Postfach
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="font-display text-5xl font-bold text-accent">
                <CountUp value={0} suffix=" verpasste Anrufe" />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-primary-soft">
                mit einem KI-Telefonassistenten, der jeden Anruf annimmt,
                auch wenn alle Leitungen belegt sind
              </p>
            </Reveal>
          </div>
          <Reveal delay={400}>
            <p className="mt-10 text-center text-xs text-primary-soft/80">
              Werte aus unseren durchgerechneten Beispielszenarien, keine
              Pauschalversprechen. Was bei Ihnen realistisch ist, rechnen wir
              im Erstgespräch durch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Animiertes Vorher-Nachher-Diagramm */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Vorher / Nachher
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                So viel Zeit steckt in Ihrer Routine
              </h2>
              <p className="mt-5 leading-relaxed text-smoke">
                Drei Beispielszenarien aus unserer Arbeit, durchgerechnet in
                Stunden pro Monat: links der Aufwand von Hand, rechts der
                Rest, der nach der Automatisierung übrig bleibt, vor allem
                Kontrolle und Sonderfälle.
              </p>
              <Link
                href="/branchen"
                className="mt-6 inline-block font-semibold text-primary hover:text-primary-dark"
              >
                Alle Beispiel-Workflows nach Branche ansehen
              </Link>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-3xl border border-line bg-white p-6 sm:p-10">
              <SavingsChart rows={chartDaten} />
              <p className="mt-8 text-xs text-smoke">
                Illustrative Rechenbeispiele, Details auf den Branchen- und
                Stadt-Seiten.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-12">
          <div className="rounded-3xl border border-line bg-white p-6 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Aufs Jahr gerechnet
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold">
                  Kumulierte Zeitersparnis beim schrittweisen Ausbau
                </h3>
              </div>
              <p className="font-display text-3xl font-bold text-primary">
                <CountUp value={293} suffix=" Std." duration={2000} />
              </p>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-smoke">
              Rechenbeispiel: Start mit einem Workflow (10 Std./Monat), Ausbau
              auf drei Workflows bis Monat 8. Fahren Sie mit der Maus über die
              Kurve, um die Werte je Monat zu sehen.
            </p>
            <div className="mt-8">
              <GrowthChart />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Leistungen */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Leistungen
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
              Drei Bausteine, ein Ziel: mehr Zeit für echte Arbeit
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 150}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Zusammenarbeit
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            In drei Schritten zur spürbaren Entlastung
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ablauf.map((schritt, index) => (
            <Reveal key={schritt.titel} delay={index * 150}>
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">
                  {schritt.titel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">
                  {schritt.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Persönlich */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal className="mx-auto w-full max-w-xs">
            <div className="aspect-[3/4]">
              <Portrait />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Persönlich statt anonym
              </p>
              {/* TODO: Titel/Rolle mit Paul abstimmen, sobald final. */}
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Hinter Avanio steht Paul Becker
              </h2>
              <p className="mt-5 leading-relaxed text-smoke">
                Sie sprechen bei Avanio nicht mit einem Vertrieb, der Sie
                weiterreicht, sondern direkt mit dem, der Ihre Workflows baut
                und verantwortet. Zuhause in der Region Magdeburg, im Einsatz
                für Unternehmen in ganz Deutschland.
              </p>
              <p className="mt-4 leading-relaxed text-smoke">
                Mein Versprechen: Ich sage Ihnen im Erstgespräch ehrlich, ob
                sich Automatisierung bei Ihnen lohnt. Wenn nicht, kostet Sie
                das Gespräch nichts außer 30 Minuten, und Sie wissen danach
                trotzdem mehr.
              </p>
              <div className="mt-7 flex flex-wrap gap-4">
                <Link
                  href="/ueber-uns"
                  className="rounded-full border border-line bg-white px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  Mehr über Avanio
                </Link>
                <Link
                  href="/kontakt"
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Direkt Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Region + Branchen Teaser */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Link
              href="/ki-agentur"
              className="group block h-full rounded-3xl border border-line bg-white p-8 transition-colors hover:border-primary"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Vor Ort
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold transition-colors group-hover:text-primary">
                Region Magdeburg
              </h2>
              <p className="mt-3 leading-relaxed text-smoke">
                Von Magdeburg über die Börde bis in die Altmark und den Harz:
                Erstgespräch und Prozessaufnahme gern persönlich bei Ihnen im
                Betrieb.
              </p>
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <Link
              href="/branchen"
              className="group block h-full rounded-3xl border border-line bg-white p-8 transition-colors hover:border-primary"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Bundesweit
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold transition-colors group-hover:text-primary">
                Lösungen für Ihre Branche
              </h2>
              <p className="mt-3 leading-relaxed text-smoke">
                Steuerkanzleien, Immobilienprofis, Zahnarztpraxen: konkrete
                Workflows statt Allgemeinplätze, vollständig remote
                umgesetzt.
              </p>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Ratgeber Teaser */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-3xl font-bold">Aktuelles aus dem Ratgeber</h2>
              <Link
                href="/ratgeber"
                className="text-sm font-semibold text-primary hover:text-primary-dark"
              >
                Alle Artikel
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {beitraege.map((beitrag, index) => (
              <Reveal key={beitrag.slug} delay={index * 150}>
                <Link
                  href={`/ratgeber/${beitrag.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-colors hover:border-primary"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {beitrag.kategorie}
                  </p>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink transition-colors group-hover:text-primary">
                    {beitrag.titel}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-smoke">
                    {beitrag.beschreibung}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
