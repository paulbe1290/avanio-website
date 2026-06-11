"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/branchen", label: "Branchen" },
  { href: "/ki-agentur", label: "Region Magdeburg" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ratgeber", label: "Ratgeber" },
  { href: "/ueber-uns", label: "Über uns" },
];

/**
 * Globaler Header mit Wortmarke, Hauptnavigation und Kontakt-CTA.
 * Client-Komponente nur wegen des mobilen Menü-Toggles (useState,
 * keine Browser-Storage-APIs).
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-ink"
          aria-label="Avanio, zur Startseite"
        >
          Avanio<span className="text-primary">.</span>
        </Link>

        {/* Desktop-Navigation */}
        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-smoke transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark lg:inline-block"
          >
            Kontakt aufnehmen
          </Link>

          {/* Mobiler Menü-Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobiles Menü */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Hauptnavigation mobil"
          className="border-t border-line bg-white lg:hidden"
        >
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-ink hover:bg-mist"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/kontakt"
                className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-base font-semibold text-white hover:bg-primary-dark"
                onClick={() => setMenuOpen(false)}
              >
                Kontakt aufnehmen
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
