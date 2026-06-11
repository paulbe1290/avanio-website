import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="font-display text-6xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-3xl font-bold">Diese Seite gibt es nicht</h1>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-smoke">
        Die angeforderte Seite wurde verschoben oder existiert nicht mehr.
        Vielleicht finden Sie auf diesen Wegen, was Sie suchen:
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Zur Startseite
        </Link>
        <Link
          href="/leistungen"
          className="rounded-full border border-line bg-white px-7 py-3 text-base font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
        >
          Zu den Leistungen
        </Link>
      </div>
    </section>
  );
}
