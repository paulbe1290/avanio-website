import Link from "next/link";

const columns: { heading: string; links: { href: string; label: string }[] }[] =
  [
    {
      heading: "Leistungen",
      links: [
        {
          href: "/leistungen/prozessautomatisierung",
          label: "Prozessautomatisierung",
        },
        {
          href: "/leistungen/ki-telefonassistent",
          label: "KI-Telefonassistent",
        },
        { href: "/leistungen/ki-chatbot", label: "KI-Chatbot" },
        { href: "/leistungen", label: "Alle Leistungen" },
      ],
    },
    {
      heading: "Für Ihre Branche",
      links: [
        { href: "/branchen/steuerkanzleien", label: "Steuerkanzleien" },
        { href: "/branchen/immobilien", label: "Immobilien" },
        { href: "/branchen/zahnarztpraxen", label: "Zahnarztpraxen" },
        { href: "/branchen", label: "Alle Branchen" },
      ],
    },
    {
      heading: "Standorte",
      links: [
        { href: "/ki-agentur", label: "Region Magdeburg" },
        { href: "/ki-agentur/magdeburg", label: "KI-Agentur Magdeburg" },
        { href: "/standorte", label: "Bundesweit (remote)" },
      ],
    },
    {
      heading: "Unternehmen",
      links: [
        { href: "/ueber-uns", label: "Über uns" },
        { href: "/referenzen", label: "Referenzen" },
        { href: "/ratgeber", label: "Ratgeber" },
        { href: "/termin", label: "Termin buchen" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
  ];

/** Globaler Footer mit Linkspalten und Rechtlichem. */
export default function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-xl font-bold text-ink">
              Avanio<span className="text-primary">.</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-smoke">
              KI-Agentur für den Mittelstand. Zuhause in der Region Magdeburg,
              bundesweit im Einsatz.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="text-sm font-semibold text-ink">
                {column.heading}
              </h2>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-smoke transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-smoke">
            © {new Date().getFullYear()} Avanio. Alle Rechte vorbehalten.
          </p>
          <ul className="flex gap-5">
            <li>
              <Link
                href="/impressum"
                className="text-sm text-smoke transition-colors hover:text-primary"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="text-sm text-smoke transition-colors hover:text-primary"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
