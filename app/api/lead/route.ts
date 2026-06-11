import { NextResponse } from "next/server";

/**
 * Nimmt Lead-Anfragen des Kontaktformulars entgegen und leitet sie an den
 * Make.com-Webhook weiter. Die Webhook-URL kommt ausschließlich aus der
 * Umgebungsvariable MAKE_WEBHOOK_URL und erreicht nie den Browser.
 * Personenbezogene Daten werden nur im POST-Body transportiert, nie in
 * URL-Parametern.
 */
export async function POST(request: Request) {
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;
  if (!webhookUrl) {
    // Bewusst generische Meldung, Details gehören ins Server-Log.
    console.error("MAKE_WEBHOOK_URL ist nicht konfiguriert.");
    return NextResponse.json(
      { error: "Das Formular ist derzeit nicht verfügbar." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 },
    );
  }

  const { name, firma, ort, anliegen, website } = (body ?? {}) as Record<
    string,
    unknown
  >;

  // Honeypot: Das versteckte Feld "website" füllen nur Bots aus.
  if (typeof website === "string" && website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    name.trim().length === 0 ||
    typeof anliegen !== "string" ||
    anliegen.trim().length === 0
  ) {
    return NextResponse.json(
      { error: "Bitte füllen Sie Name und Anliegen aus." },
      { status: 400 },
    );
  }

  const payload = {
    name: name.trim().slice(0, 200),
    firma: typeof firma === "string" ? firma.trim().slice(0, 200) : "",
    ort: typeof ort === "string" ? ort.trim().slice(0, 200) : "",
    anliegen: anliegen.trim().slice(0, 5000),
    quelle: "avanio-website",
    eingegangen: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Make-Webhook antwortete mit Status ${response.status}.`);
      return NextResponse.json(
        { error: "Die Anfrage konnte nicht übermittelt werden." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Make-Webhook nicht erreichbar:", error);
    return NextResponse.json(
      { error: "Die Anfrage konnte nicht übermittelt werden." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
