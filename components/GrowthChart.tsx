"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Rechenbeispiel: monatliche Ersparnis beim schrittweisen Ausbau von einem
 * auf drei Workflows. Daraus wird die kumulierte Stundenzahl berechnet.
 */
const monatlicheErsparnis = [10, 12, 15, 18, 21, 24, 27, 30, 32, 34, 35, 35];

const kumuliert = monatlicheErsparnis.reduce<number[]>((summe, wert) => {
  summe.push((summe[summe.length - 1] ?? 0) + wert);
  return summe;
}, []);

const W = 560;
const H = 250;
const PAD = { links: 52, rechts: 20, oben: 18, unten: 34 };
const MAX = 300;

function xPos(index: number): number {
  return PAD.links + (index * (W - PAD.links - PAD.rechts)) / 11;
}

function yPos(wert: number): number {
  return H - PAD.unten - (wert / MAX) * (H - PAD.oben - PAD.unten);
}

const punkte = kumuliert.map((wert, index) => ({
  x: xPos(index),
  y: yPos(wert),
  wert,
  monat: index + 1,
}));

const linienPfad = punkte
  .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
  .join(" ");

const flaechenPfad = `${linienPfad} L${punkte[punkte.length - 1].x},${
  H - PAD.unten
} L${punkte[0].x},${H - PAD.unten} Z`;

/**
 * Animiertes Linien-Diagramm: kumulierte Zeitersparnis über zwölf Monate.
 * Die Linie zeichnet sich beim Scrollen in den Viewport, der Endpunkt
 * pulsiert dauerhaft, und beim Überfahren mit der Maus erscheint ein
 * Tooltip mit dem Wert des jeweiligen Monats.
 */
export default function GrowthChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [aktiv, setAktiv] = useState(false);
  const [hover, setHover] = useState<number | null>(null);

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

  function handleMove(event: React.MouseEvent<SVGSVGElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const xRelativ = ((event.clientX - rect.left) / rect.width) * W;
    const index = Math.round(
      ((xRelativ - PAD.links) / (W - PAD.links - PAD.rechts)) * 11,
    );
    setHover(Math.max(0, Math.min(11, index)));
  }

  const hoverPunkt = hover !== null ? punkte[hover] : null;
  const endPunkt = punkte[punkte.length - 1];

  return (
    <div ref={ref} className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full cursor-crosshair"
        role="img"
        aria-label="Kumulierte Zeitersparnis über zwölf Monate, von 10 Stunden im ersten Monat auf insgesamt 293 Stunden im Jahr"
        onMouseMove={handleMove}
        onMouseLeave={() => setHover(null)}
      >
        {/* Gitterlinien und Y-Achse */}
        {[0, 100, 200, 300].map((wert) => (
          <g key={wert}>
            <line
              x1={PAD.links}
              x2={W - PAD.rechts}
              y1={yPos(wert)}
              y2={yPos(wert)}
              stroke="var(--color-line)"
              strokeWidth="1"
              strokeDasharray={wert === 0 ? "0" : "4 4"}
            />
            <text
              x={PAD.links - 8}
              y={yPos(wert) + 4}
              textAnchor="end"
              className="fill-smoke text-[11px]"
            >
              {wert}
            </text>
          </g>
        ))}

        {/* X-Achse: Monate */}
        {[1, 4, 8, 12].map((monat) => (
          <text
            key={monat}
            x={xPos(monat - 1)}
            y={H - 10}
            textAnchor="middle"
            className="fill-smoke text-[11px]"
          >
            Monat {monat}
          </text>
        ))}

        {/* Fläche unter der Kurve */}
        <path
          d={flaechenPfad}
          fill="var(--color-primary)"
          className="transition-opacity duration-1000"
          style={{ opacity: aktiv ? 0.1 : 0, transitionDelay: "900ms" }}
        />

        {/* Die Kurve selbst, zeichnet sich beim Einscrollen */}
        <path
          d={linienPfad}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={aktiv ? 0 : 1}
          style={{ transition: "stroke-dashoffset 1.8s ease-out" }}
        />

        {/* Dauerhaft pulsierender Endpunkt */}
        <circle
          cx={endPunkt.x}
          cy={endPunkt.y}
          r="6"
          fill="var(--color-primary)"
          className="chart-puls"
          style={{ opacity: aktiv ? 1 : 0 }}
        />
        <circle
          cx={endPunkt.x}
          cy={endPunkt.y}
          r="5.5"
          fill="var(--color-primary)"
          stroke="white"
          strokeWidth="2"
          className="transition-opacity duration-500"
          style={{ opacity: aktiv ? 1 : 0, transitionDelay: "1600ms" }}
        />

        {/* Hover: Hilfslinie und Markierung */}
        {hoverPunkt && (
          <g>
            <line
              x1={hoverPunkt.x}
              x2={hoverPunkt.x}
              y1={PAD.oben}
              y2={H - PAD.unten}
              stroke="var(--color-primary)"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.5"
            />
            <circle
              cx={hoverPunkt.x}
              cy={hoverPunkt.y}
              r="5"
              fill="white"
              stroke="var(--color-primary)"
              strokeWidth="2.5"
            />
          </g>
        )}
      </svg>

      {/* Tooltip */}
      {hoverPunkt && (
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-xl border border-line bg-white px-3 py-2 text-center shadow-lg"
          style={{
            left: `${(hoverPunkt.x / W) * 100}%`,
            top: `${(hoverPunkt.y / H) * 100 - 4}%`,
          }}
        >
          <p className="whitespace-nowrap text-xs font-semibold text-smoke">
            Monat {hoverPunkt.monat}
          </p>
          <p className="whitespace-nowrap font-display text-sm font-bold text-primary">
            insgesamt {hoverPunkt.wert} Std. gespart
          </p>
        </div>
      )}
    </div>
  );
}
