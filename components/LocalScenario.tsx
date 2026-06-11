type LocalScenarioProps = {
  cityName: string;
  szenario: string;
};

/**
 * Hervorgehobenes, durchgerechnetes Beispiel-Szenario einer Stadt-
 * oder Standort-Seite.
 */
export default function LocalScenario({
  cityName,
  szenario,
}: LocalScenarioProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h2 className="text-3xl font-bold">So rechnet sich KI in {cityName}</h2>
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
