"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Cal.com-Inline-Embed (EU-Instanz app.cal.eu, Event "15min" von
 * beckerwebsolutions). Aus Datenschutzgründen wird das Cal-Skript nicht
 * automatisch beim Seitenaufruf geladen, sondern erst, wenn die Besucherin
 * oder der Besucher den Kalender aktiv öffnet (Zwei-Klick-Lösung). So wird
 * ohne Einwilligung kein Drittanbieter-Inhalt nachgeladen.
 */

const CAL_NAMESPACE = "15min";
const CAL_LINK = "beckerwebsolutions/15min";
const CAL_ORIGIN = "https://app.cal.eu";
const CAL_EMBED_JS = "https://app.cal.eu/embed/embed.js";
const ELEMENT_ID = "avanio-cal-inline";

export default function CalEmbed() {
  const [geladen, setGeladen] = useState(false);
  const initialisiert = useRef(false);

  useEffect(() => {
    if (!geladen || initialisiert.current) return;
    initialisiert.current = true;

    // Offizieller Cal-Loader, in ein script-Element gepackt, damit der
    // genaue, von Cal bereitgestellte Init-Code unverändert ausgeführt wird.
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.textContent = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "${CAL_EMBED_JS}", "init");
      Cal("init", "${CAL_NAMESPACE}", { origin: "${CAL_ORIGIN}" });
      Cal.config = Cal.config || {};
      Cal.config.forwardQueryParams = true;
      Cal.ns["${CAL_NAMESPACE}"]("inline", {
        elementOrSelector: "#${ELEMENT_ID}",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "${CAL_LINK}",
      });
      Cal.ns["${CAL_NAMESPACE}"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
    `;
    document.body.appendChild(script);
  }, [geladen]);

  if (!geladen) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-mist px-6 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft">
          <svg
            className="h-7 w-7 text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M3 9h18M8 2v4M16 2v4" />
          </svg>
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-ink">
          Freie Termine anzeigen
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-smoke">
          Wählen Sie direkt einen Termin für Ihr kostenloses Erstgespräch. Mit
          dem Öffnen des Kalenders wird der Buchungsdienst Cal.com geladen.
          Details dazu in unserer{" "}
          <a
            href="/datenschutz"
            className="font-semibold text-primary hover:text-primary-dark"
          >
            Datenschutzerklärung
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setGeladen(true)}
          className="mt-6 rounded-full bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Kalender öffnen
        </button>
      </div>
    );
  }

  return (
    <div
      id={ELEMENT_ID}
      className="min-h-[640px] w-full overflow-auto rounded-2xl border border-line bg-white"
    />
  );
}
