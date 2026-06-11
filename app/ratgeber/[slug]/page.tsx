import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";

import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import { artikel, artikelNachDatum, getArtikel } from "@/data/ratgeber";
import { blogPostingSchema, buildMetadata } from "@/lib/seo";

import DsgvoUndKi from "@/content/ratgeber/dsgvo-und-ki-im-mittelstand.mdx";
import KiTelefonassistent from "@/content/ratgeber/ki-telefonassistent-lohnt-sich-das.mdx";
import WasKostet from "@/content/ratgeber/was-kostet-prozessautomatisierung.mdx";

/**
 * Statische Zuordnung Slug -> MDX-Komponente. Neue Artikel werden in
 * data/ratgeber.ts registriert und hier importiert.
 */
const inhalte: Record<string, ComponentType> = {
  "was-kostet-prozessautomatisierung": WasKostet,
  "ki-telefonassistent-lohnt-sich-das": KiTelefonassistent,
  "dsgvo-und-ki-im-mittelstand": DsgvoUndKi,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return artikel.map((eintrag) => ({ slug: eintrag.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const beitrag = getArtikel(slug);
  if (!beitrag) return {};

  return buildMetadata({
    title: beitrag.titel,
    description: beitrag.beschreibung,
    path: `/ratgeber/${beitrag.slug}`,
  });
}

function formatiereDatum(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArtikelPage({ params }: Props) {
  const { slug } = await params;
  const beitrag = getArtikel(slug);
  const Inhalt = inhalte[slug];
  if (!beitrag || !Inhalt) notFound();

  const weitereBeitraege = artikelNachDatum()
    .filter((eintrag) => eintrag.slug !== beitrag.slug)
    .slice(0, 2);

  return (
    <>
      <SchemaJsonLd
        schema={blogPostingSchema({
          titel: beitrag.titel,
          beschreibung: beitrag.beschreibung,
          path: `/ratgeber/${beitrag.slug}`,
          datum: beitrag.datum,
        })}
      />

      <section className="bg-mist">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <Breadcrumbs
            items={[
              { name: "Ratgeber", path: "/ratgeber" },
              { name: beitrag.titel, path: `/ratgeber/${beitrag.slug}` },
            ]}
          />
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary">
            {beitrag.kategorie}
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
            {beitrag.titel}
          </h1>
          <p className="mt-4 text-sm text-smoke">
            <time dateTime={beitrag.datum}>
              {formatiereDatum(beitrag.datum)}
            </time>
            {" · Lesezeit: "}
            {beitrag.lesedauer}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Inhalt />
      </article>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <h2 className="text-2xl font-bold">Weiterlesen</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {weitereBeitraege.map((eintrag) => (
            <li key={eintrag.slug}>
              <Link
                href={`/ratgeber/${eintrag.slug}`}
                className="group block h-full rounded-2xl border border-line bg-white p-5 transition-colors hover:border-primary"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {eintrag.kategorie}
                </p>
                <h3 className="mt-2 font-display text-base font-bold text-ink transition-colors group-hover:text-primary">
                  {eintrag.titel}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CTASection />
    </>
  );
}
