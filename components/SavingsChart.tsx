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

/**
 * Animiertes Vorher-Nachher-Balkendiagramm: Stunden pro Monat, die ein
 * Prozess ohne und mit Automatisierung bindet. Die Balken wachsen beim
 * Scrollen in den Viewport; prefers-reduced-motion wird respektiert.
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
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-display text-base font-bold text-ink">
                {row.label}
              </p>
              <p className="text-sm font-semibold text-primary">
                {ersparnis} Std./Monat zurückgewonnen
              </p>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-16 shrink-0 text-xs font-medium text-smoke">
                  vorher
                </span>
                <div className="h-7 flex-1 overflow-hidden rounded-full bg-mist">
                  <div
                    className="flex h-full items-center justify-end rounded-full bg-smoke/70 pr-3 transition-all duration-1000 ease-out"
                    style={{
                      width: aktiv ? `${(row.vorher / maximum) * 100}%` : "0%",
                      transitionDelay: `${index * 200}ms`,
                    }}
                  >
                    <span className="text-xs font-bold text-white">
                      {row.vorher} Std.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-16 shrink-0 text-xs font-medium text-smoke">
                  nachher
                </span>
                <div className="h-7 flex-1 overflow-hidden rounded-full bg-mist">
                  <div
                    className="flex h-full items-center justify-end rounded-full bg-primary pr-3 transition-all duration-1000 ease-out"
                    style={{
                      width: aktiv ? `${(row.nachher / maximum) * 100}%` : "0%",
                      transitionDelay: `${index * 200 + 250}ms`,
                    }}
                  >
                    <span className="text-xs font-bold text-white">
                      {row.nachher} Std.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
