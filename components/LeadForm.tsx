"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Lead-Formular (Name, Firma, Ort, Anliegen). Sendet per POST an die
 * interne API-Route /api/lead, die an den Make.com-Webhook weiterleitet.
 * Erfolgs- und Fehlerzustand werden sichtbar und per aria-live angesagt.
 * Keine Browser-Storage-APIs, keine Daten in URL-Parametern.
 */
export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          firma: data.get("firma"),
          ort: data.get("ort"),
          anliegen: data.get("anliegen"),
          website: data.get("website"), // Honeypot
        }),
      });
      if (!response.ok) throw new Error(`Status ${response.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-primary-soft bg-primary-soft/60 p-6 sm:p-8"
      >
        <h3 className="font-display text-xl font-bold text-primary-dark">
          Vielen Dank für Ihre Anfrage!
        </h3>
        <p className="mt-3 leading-relaxed text-ink">
          Ihre Nachricht ist bei uns eingegangen. Wir melden uns in der Regel
          innerhalb eines Werktags bei Ihnen, um ein kostenloses Erstgespräch
          zu vereinbaren.
        </p>
      </div>
    );
  }

  const inputClasses =
    "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-2.5 text-ink placeholder:text-smoke/60 focus:border-primary focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      {/* Honeypot gegen Spam: für Menschen unsichtbar, nicht fokussierbar */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-semibold text-ink">
          Ihr Name <span aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          className={inputClasses}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firma" className="text-sm font-semibold text-ink">
            Firma
          </label>
          <input
            type="text"
            id="firma"
            name="firma"
            autoComplete="organization"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="ort" className="text-sm font-semibold text-ink">
            Ort
          </label>
          <input
            type="text"
            id="ort"
            name="ort"
            autoComplete="address-level2"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="anliegen" className="text-sm font-semibold text-ink">
          Ihr Anliegen <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="anliegen"
          name="anliegen"
          required
          rows={5}
          placeholder="Was kostet Sie und Ihr Team gerade am meisten Zeit?"
          className={inputClasses}
        />
      </div>

      <p className="text-xs leading-relaxed text-smoke">
        Mit dem Absenden erklären Sie sich einverstanden, dass wir Ihre
        Angaben zur Bearbeitung der Anfrage verarbeiten. Details finden Sie
        in der{" "}
        <a
          href="/datenschutz"
          className="font-semibold text-primary hover:text-primary-dark"
        >
          Datenschutzerklärung
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-primary px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Wird gesendet …" : "Anfrage senden"}
      </button>

      <p aria-live="polite" className="text-sm">
        {status === "error" && (
          <span className="font-medium text-red-700">
            Das hat leider nicht geklappt. Bitte versuchen Sie es in ein paar
            Minuten erneut oder schreiben Sie uns direkt per E-Mail.
          </span>
        )}
      </p>
    </form>
  );
}
