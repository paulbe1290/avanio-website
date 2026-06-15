"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_NAME = "avanio-cookie-consent";
// Gültigkeit des Einwilligungs-Cookies in Sekunden (rund sechs Monate).
const MAX_AGE = 60 * 60 * 24 * 182;

function consentVorhanden(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie
    .split("; ")
    .some((eintrag) => eintrag.startsWith(`${COOKIE_NAME}=`));
}

function setzeConsent(wert: "akzeptiert" | "abgelehnt") {
  // Bewusst ein Cookie statt localStorage/sessionStorage (Architektur-Vorgabe).
  document.cookie = `${COOKIE_NAME}=${wert}; path=/; max-age=${MAX_AGE}; SameSite=Lax`;
}

/**
 * Cookie-Hinweis am unteren Rand. Diese Website setzt nur technisch
 * notwendige Cookies (inklusive des Einwilligungs-Cookies selbst), daher
 * ist der Banner informativ: Beide Auswahlmöglichkeiten merken sich die
 * Entscheidung, damit der Hinweis nicht erneut erscheint. Es wird in
 * keinem Fall Tracking geladen.
 */
export default function CookieBanner() {
  // Erst nach dem Mounten entscheiden, ob angezeigt wird (kein SSR-Mismatch).
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    if (!consentVorhanden()) setSichtbar(true);
  }, []);

  function entscheide(wert: "akzeptiert" | "abgelehnt") {
    setzeConsent(wert);
    setSichtbar(false);
  }

  if (!sichtbar) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Hinweis zu Cookies"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-line bg-white p-5 shadow-2xl sm:p-6">
        <div className="sm:flex sm:items-start sm:gap-6">
          <div className="flex-1">
            <h2 className="font-display text-lg font-bold text-ink">
              Cookies auf dieser Seite
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-smoke">
              Wir setzen nur technisch notwendige Cookies und verzichten auf
              Tracking, Analyse und Werbung. Gespeichert wird lediglich Ihre
              Auswahl hier, damit dieser Hinweis nicht erneut erscheint. Mehr
              dazu in unserer{" "}
              <Link
                href="/datenschutz"
                className="font-semibold text-primary hover:text-primary-dark"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <div className="mt-4 flex shrink-0 gap-3 sm:mt-1 sm:flex-col">
            <button
              type="button"
              onClick={() => entscheide("akzeptiert")}
              className="flex-1 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:flex-none"
            >
              Akzeptieren
            </button>
            <button
              type="button"
              onClick={() => entscheide("abgelehnt")}
              className="flex-1 rounded-full border border-line bg-white px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary sm:flex-none"
            >
              Nur notwendige
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
