type LocalScenarioProps = {
  heading: string;
  szenario: string;
};

/**
 * Hervorgehobenes, durchgerechnetes Beispiel-Szenario für Stadt-,
 * Standort- und Branchen-Seiten.
 */
export default function LocalScenario({
  heading,
  szenario,
}: LocalScenarioProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-bold">{heading}</h2>
      <div className="mt-6 rounded-2xl border border-primary-soft bg-primary-soft/60 p-6 sm:p-8">
        <p className="leading-relaxed text-ink">{szenario}</p>
      </div>
      <p className="mt-4 text-sm text-smoke">
        Die Zahlen sind ein illustratives Rechenbeispiel. Was in Ihrem Betrieb
        realistisch ist, rechnen wir im Erstgespräch gemeinsam durch.
      </p>
    </section>
  );
}
