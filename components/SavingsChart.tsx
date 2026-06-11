"use client";

import { useEffect, useRef, useState } from "react";

type ChartRow = {
  label: string;
  /** Stunden pro Monat ohne Automatisierung. */
  vorher: number;
  /** Stunden pro Monat mit Automatisierung. */
  nachher: number;
};

type SavingsChartProps = {
  rows: ChartRow[];
};

function Balken({
  wert,
  maximum,
  aktiv,
  verzoegerung,
  beschriftung,
  variante,
}: {
  wert: number;
  maximum: number;
  aktiv: boolean;
  verzoegerung: number;
  beschriftung: string;
  variante: "vorher" | "nachher";
}) {
  return (
    <div className="group flex items-center gap-3">
      <span className="w-14 shrink-0 text-xs font-medium text-smoke">
        {beschriftung}
      </span>
      <div className="h-6 flex-1 overflow-hidden rounded-full bg-mist">
        <div
          className={`relative h-full overflow-hidden rounded-full transition-all duration-1000 ease-out group-hover:brightness-110 ${
            variante === "nachher" ? "bg-primary" : "bg-smoke/70"
          }`}
          style={{
            width: aktiv ? `${(wert / maximum) * 100}%` : "0%",
            transitionDelay: `${verzoegerung}ms`,
          }}
        >
          {/* Dauerhafter Schimmer-Lauf über den Balken */}
          <span aria-hidden="true" className="chart-schimmer" />
        </div>
      </div>
      {/* Wert bewusst außerhalb des Balkens, damit nichts abgeschnitten wird */}
      <span className="w-16 shrink-0 text-right text-sm font-bold text-ink">
        {wert} Std.
      </span>
    </div>
  );
}

/**
 * Animiertes Vorher-Nachher-Balkendiagramm: Stunden pro Monat, die ein
 * Prozess ohne und mit Automatisierung bindet. Die Balken wachsen beim
 * Scrollen in den Viewport, schimmern dauerhaft dezent und reagieren auf
 * Hover; prefers-reduced-motion wird respektiert.
 */
export default function SavingsChart({ rows }: SavingsChartProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [aktiv, setAktiv] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAktiv(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([eintrag]) => {
        if (eintrag.isIntersecting) {
          setAktiv(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const maximum = Math.max(...rows.map((row) => row.vorher));

  return (
    <div ref={ref} className="space-y-8">
      {rows.map((row, index) => {
        const ersparnis = row.vorher - row.nachher;
        return (
          <div key={row.label}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="font-display text-base font-bold text-ink">
                {row.label}
              </p>
              <p className="text-sm font-semibold text-primary">
                {ersparnis} Std./Monat zurückgewonnen
              </p>
            </div>
            <div className="mt-3 space-y-2">
              <Balken
                wert={row.vorher}
                maximum={maximum}
                aktiv={aktiv}
                verzoegerung={index * 200}
                beschriftung="vorher"
                variante="vorher"
              />
              <Balken
                wert={row.nachher}
                maximum={maximum}
                aktiv={aktiv}
                verzoegerung={index * 200 + 250}
                beschriftung="nachher"
                variante="nachher"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
