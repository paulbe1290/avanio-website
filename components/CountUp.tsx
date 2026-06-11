"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Zielwert der Animation. */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Dauer in ms. */
  duration?: number;
  className?: string;
};

/**
 * Zählt eine Zahl hoch, sobald sie in den Viewport scrollt.
 * Respektiert prefers-reduced-motion (zeigt dann sofort den Endwert).
 */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [aktuell, setAktuell] = useState(0);
  const gestartet = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAktuell(value);
      return;
    }
    const observer = new IntersectionObserver(
      ([eintrag]) => {
        if (!eintrag.isIntersecting || gestartet.current) return;
        gestartet.current = true;
        observer.disconnect();

        const start = performance.now();
        const tick = (jetzt: number) => {
          const fortschritt = Math.min((jetzt - start) / duration, 1);
          // easeOutCubic für ein natürliches Auslaufen
          const eased = 1 - Math.pow(1 - fortschritt, 3);
          setAktuell(Math.round(eased * value));
          if (fortschritt < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {aktuell.toLocaleString("de-DE")}
      {suffix}
    </span>
  );
}
