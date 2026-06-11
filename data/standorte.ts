/**
 * Standort-Daten für Spur 2 (Conversion-/Ads-Seiten unter /standorte/[stadt]).
 *
 * Harte Regel (Doorway-Schutz): Diese Seiten machen KEINE "vor Ort"-
 * Behauptungen und nennen keine Adressen in den Zielstädten. Das Framing
 * ist immer remote/bundesweit, Avanio sitzt in der Region Magdeburg.
 */

export type Standort = {
  name: string;
  slug: string;
  bundesland: string;
  hook: string;
  beispielSzenario: string;
  faq: { frage: string; antwort: string }[];
  indexierbar: boolean;
};

export const standorte: Standort[] = [
  {
    name: "München",
    slug: "muenchen",
    bundesland: "Bayern",
    hook: "München hat Tempo, hohe Löhne und einen leergefegten Arbeitsmarkt: Wer hier wächst, kann offene Stellen oft monatelang nicht besetzen. Automatisierung schafft die Kapazität, die Sie in München gerade nicht einstellen können, und wir liefern sie vollständig remote.",
    beispielSzenario:
      "Ein Rechenbeispiel: Eine Münchner Steuerkanzlei mit 15 Mitarbeitenden sucht seit Monaten zwei zusätzliche Fachkräfte. Statt weiter zu suchen, automatisiert sie Belegeingang und Posteingang: Unterlagen werden automatisch zugeordnet, Standardrückfragen vorbeantwortet, Fristen überwacht. Das spart dem Team im Monat einen mittleren zweistelligen Stundenbetrag, ein erheblicher Teil der gesuchten Kapazität, ohne Münchner Gehalt und ohne Schreibtisch in bester Lage. Die Einführung lief komplett über Videotermine und eine Testphase, nach sechs Wochen waren die ersten Workflows im Alltag.",
    faq: [
      {
        frage: "Arbeiten Sie mit Unternehmen in München zusammen?",
        antwort:
          "Ja, vollständig remote. Analyse, Umsetzung und Betreuung laufen über Video, Telefon und gemeinsame Dokumente. Die Werkzeuge, mit denen wir arbeiten, sind ohnehin cloudbasiert, ein Termin in Ihren Räumen ist dafür nicht nötig.",
      },
      {
        frage: "Sind Sie in München ansässig?",
        antwort:
          "Nein, und das ist Absicht: Avanio sitzt in der Region Magdeburg und betreut bundesweit remote. Sie profitieren von sachsen-anhaltischen Kostenstrukturen statt Münchner Agentursätzen, bei gleicher Erreichbarkeit.",
      },
      {
        frage: "Wie läuft die Zusammenarbeit konkret ab?",
        antwort:
          "Erstgespräch per Video, danach eine kompakte Prozessaufnahme mit Bildschirmübertragung. Wir bauen die Workflows, testen sie gemeinsam remote und übergeben mit Dokumentation und Einweisung. Für Rückfragen gibt es feste Ansprechpartner und kurze Reaktionswege.",
      },
      {
        frage: "Welche Münchner Branchen betreuen Sie remote?",
        antwort:
          "Vor allem Kanzleien, Beratungen, Praxen und wachsende Dienstleister, also Teams, bei denen Personalkosten und Anfragevolumen besonders hoch sind. Die Werkzeuge sind dieselben wie überall, nur der Hebel ist in München größer, weil jede gesparte Stunde hier mehr kostet.",
      },
    ],
    indexierbar: true,
  },
  {
    name: "Stuttgart",
    slug: "stuttgart",
    bundesland: "Baden-Württemberg",
    hook: "Stuttgart und seine Region leben vom produzierenden Mittelstand: Maschinenbauer, Zulieferer und starke Handwerksbetriebe. Genau dort stapeln sich Lieferscheine, Auftragsbestätigungen und Rückfragen, lauter Routine, die wir bundesweit remote automatisieren.",
    beispielSzenario:
      "Ein Rechenbeispiel: Ein Zulieferbetrieb bei Stuttgart erhält wöchentlich rund 120 Bestellungen und Abrufe per E-Mail und PDF. Jede wird bisher von Hand ins ERP übertragen, etwa vier Minuten pro Vorgang, also acht Stunden pro Woche. Ein Workflow liest die Bestelldaten aus, legt Vorgänge im System an und meldet nur Abweichungen, etwa unklare Mengen oder neue Artikelnummern. Die Sachbearbeitung prüft, statt zu tippen, und gewinnt rund 30 Stunden im Monat. Eingeführt in wenigen Wochen, komplett über Videotermine und eine Testumgebung.",
    faq: [
      {
        frage: "Funktioniert die Zusammenarbeit auch ohne Termin im Betrieb?",
        antwort:
          "Ja. Für Analyse und Umsetzung müssen wir nicht in Ihrer Halle stehen: Die relevanten Abläufe laufen in E-Mail, ERP und Office, und genau dort setzen wir per Bildschirmübertragung an.",
      },
      {
        frage: "Können Sie mit unserem ERP-System arbeiten?",
        antwort:
          "Mit den meisten, über Schnittstellen, Exporte oder strukturierte E-Mails. Wir prüfen die Anbindung vor dem Angebot, damit Sie Planungssicherheit haben.",
      },
      {
        frage: "Warum eine Agentur aus Magdeburg statt aus der Region Stuttgart?",
        antwort:
          "Weil Entfernung bei Automatisierung keine Rolle spielt, Kosten aber schon. Sie bekommen dieselbe Qualität zu ostdeutschen Konditionen, mit festen Ansprechpartnern und Reaktionszeiten, die sich an Ihrem Betrieb orientieren.",
      },
      {
        frage: "Wie sicher sind unsere Konstruktions- und Fertigungsdaten?",
        antwort:
          "Wir greifen nur auf die Systeme zu, die für den jeweiligen Workflow nötig sind, in der Regel E-Mail, ERP und Ablage. Zeichnungen und Konstruktionsdaten bleiben unangetastet in Ihren Umgebungen. Zugriffe werden dokumentiert und nach Projektende wieder entzogen.",
      },
    ],
    indexierbar: true,
  },
  {
    name: "Frankfurt",
    slug: "frankfurt",
    bundesland: "Hessen",
    hook: "Frankfurt ist Dienstleistungsstadt: Kanzleien, Berater, Finanz- und Immobilienprofis verbringen hier teure Stunden mit E-Mail-Sortierung, Terminabstimmung und Dokumentenablage. Diese Stunden holen wir zurück, vollständig remote und ohne Frankfurter Agenturpreise.",
    beispielSzenario:
      "Ein Rechenbeispiel: Eine Frankfurter Beratungsboutique mit zehn Köpfen koordiniert pro Woche etwa 40 Mandanten- und Interessententermine per E-Mail, im Schnitt vier Nachrichten je Termin. Ein Buchungs-Workflow mit Kalenderanbindung und automatischen Bestätigungen reduziert das auf eine Einladung mit Klick-Auswahl. Zusammen mit der automatischen Ablage der Korrespondenz spart das Team wöchentlich mehrere Stunden Koordinationsarbeit, die vorher auf Beraterstunden mit Frankfurter Stundensätzen lag. Die Einführung dauerte zwei Videotermine und eine Woche Testbetrieb. Seitdem bucht ein Großteil der Mandanten den Termin selbst, und die Berater sehen nur noch den fertigen Kalender.",
    faq: [
      {
        frage: "Wie vertraulich läuft die Zusammenarbeit ab?",
        antwort:
          "Diskretion ist Standard: Verschwiegenheitsvereinbarung auf Wunsch vor dem ersten Gespräch, Zugriffe nur auf abgestimmte Systeme, alles protokolliert. Mandanten- und Kundendaten verbleiben in Ihren Umgebungen. Auf Wunsch unterschreiben wir, bevor Sie uns überhaupt Systemnamen nennen.",
      },
      {
        frage: "Betreuen Sie Unternehmen in Frankfurt remote?",
        antwort:
          "Ja, ausschließlich remote, und das funktioniert gerade in Frankfurt gut: Videotermine lassen sich zwischen zwei Mandate schieben, ohne dass jemand durch die Stadt fährt.",
      },
      {
        frage: "Was kostet das im Vergleich zu einer Frankfurter Agentur?",
        antwort:
          "Wir kalkulieren mit Magdeburger Kostenbasis und Festpreisen je Workflow. Sie sehen vor der Beauftragung, was die Umsetzung kostet und welche Stunden sie spart.",
      },
      {
        frage: "Für wen lohnt sich das in Frankfurt besonders?",
        antwort:
          "Für alle, deren Stundensätze hoch und deren Routine zäh ist: Kanzleien, Steuer- und Unternehmensberatungen, Immobilien- und Finanzdienstleister. Je teurer die Stunde, desto schneller amortisiert sich ein Workflow, der Koordination und Ablage übernimmt.",
      },
    ],
    indexierbar: true,
  },
  {
    name: "Düsseldorf",
    slug: "duesseldorf",
    bundesland: "Nordrhein-Westfalen",
    hook: "Düsseldorf verbindet Handel, Agenturen und Immobilienwirtschaft, Branchen mit hohem Kommunikationsaufkommen und engen Margen. Wer Anfragen, Angebote und Statusmeldungen automatisiert, gewinnt hier doppelt: Zeit und Reaktionsgeschwindigkeit. Wir setzen das bundesweit remote für Sie um.",
    beispielSzenario:
      "Ein Rechenbeispiel: Ein Düsseldorfer Großhändler beantwortet täglich rund 70 Kundenanfragen zu Preisen, Verfügbarkeiten und Lieferstatus. Zwei Innendienstkräfte sind damit gut die Hälfte ihrer Zeit beschäftigt. Ein KI-Assistent mit Anbindung an Warenwirtschaft und Versanddaten beantwortet Standardfälle sofort und übergibt Sonderfälle mit allen Daten an den Innendienst. Übernimmt er nur 60 Prozent, werden täglich mehrere Stunden frei, die in aktive Kundenbetreuung und Zusatzverkäufe fließen. Aufgesetzt remote, getestet im laufenden Betrieb, ohne einen einzigen Termin in Düsseldorf. Eine Auswertung der häufigsten Anfragen liefert der Assistent monatlich gleich mit.",
    faq: [
      {
        frage: "Wie funktioniert die Betreuung aus der Ferne?",
        antwort:
          "Über feste Ansprechpartner, Video, Telefon und ein gemeinsames Aufgabenboard. Workflows überwachen wir aktiv und melden uns, bevor Sie ein Problem bemerken. Reaktionszeiten vereinbaren wir vertraglich, und quartalsweise schauen wir gemeinsam auf Kennzahlen und neue Automatisierungsideen.",
      },
      {
        frage: "Lässt sich unsere Warenwirtschaft anbinden?",
        antwort:
          "Meist ja, über Schnittstellen, Exporte oder strukturierte E-Mail-Übergaben. Wir prüfen das vor dem Angebot konkret an Ihrem System, nicht erst im Projekt.",
      },
      {
        frage: "Arbeiten Sie auch mit Agenturen und Dienstleistern?",
        antwort:
          "Ja. Typische Themen sind die strukturierte Aufnahme von Briefings, Angebots- und Reporting-Workflows sowie Chatbots für wiederkehrende Kundenfragen. Gerade bei Agenturen zählt jede nicht abrechenbare Stunde.",
      },
      {
        frage: "Wie schnell können wir starten?",
        antwort:
          "In der Regel innerhalb weniger Wochen. Nach dem Video-Erstgespräch erhalten Sie ein Festpreisangebot für den ersten Workflow. Sobald die Zugänge stehen, bauen wir, testen mit Ihrem Innendienst an echten Fällen und schalten erst dann live.",
      },
    ],
    indexierbar: true,
  },
  {
    name: "Hamburg",
    slug: "hamburg",
    bundesland: "Hamburg",
    hook: "Hamburg lebt von Logistik, Handel und Medien: Branchen, in denen täglich hunderte Statusfragen, Buchungen und Belege bewegt werden. Genau diese Massenroutine ist ideales Terrain für Automatisierung, und die liefern wir bundesweit remote.",
    beispielSzenario:
      "Ein Rechenbeispiel: Ein Hamburger Logistikdienstleister beantwortet täglich rund 90 Sendungsstatus-Anfragen über Telefon und E-Mail, je etwa drei Minuten. Das sind viereinhalb Stunden am Tag, fast eine volle Stelle. Ein automatischer E-Mail-Workflow und ein Chatbot, die den Status direkt aus dem Transportmanagementsystem ziehen, beantworten den Großteil sofort, rund um die Uhr und auf Wunsch mehrsprachig. Die Disposition bearbeitet nur noch Sonderfälle. Eingeführt remote in wenigen Wochen, ohne einen Besuch im Kontor.",
    faq: [
      {
        frage: "Unsere Kunden fragen rund um die Uhr an. Deckt das die KI ab?",
        antwort:
          "Ja, das ist eine ihrer größten Stärken. Chatbot und E-Mail-Workflows arbeiten ohne Schichtplan, auch nachts, am Wochenende und an Feiertagen. Ihr Team übernimmt morgens nur die offenen Sonderfälle.",
      },
      {
        frage: "Viele unserer Kunden kommunizieren auf Englisch. Geht das?",
        antwort:
          "Ja. Die Assistenten antworten mehrsprachig, zum Beispiel auf Deutsch und Englisch, und fassen die Vorgänge für Ihr Team einheitlich zusammen. So bleibt die interne Dokumentation einheitlich, egal in welcher Sprache der Kunde schreibt.",
      },
      {
        frage: "Wie binden Sie unsere Systeme aus der Ferne an?",
        antwort:
          "Über die Schnittstellen Ihrer Software, abgestimmte Zugänge mit minimalen Rechten und eine Testumgebung. Alles wird dokumentiert und gemeinsam per Video abgenommen, bevor es in den Echtbetrieb geht.",
      },
      {
        frage: "Was passiert bei Störungen außerhalb unserer Bürozeiten?",
        antwort:
          "Die Workflows laufen auf überwachten Plattformen und melden Fehler automatisch. Kritische Abläufe sichern wir mit Ausweichwegen ab, etwa einer sauberen Übergabe ins Postfach, damit keine Anfrage verloren geht, bis jemand übernimmt.",
      },
    ],
    indexierbar: true,
  },
  {
    name: "Potsdam",
    slug: "potsdam",
    bundesland: "Brandenburg",
    hook: "Potsdam wächst zwischen Wissenschaft, Medienstandort und Berliner Umland: viele kleine Teams mit vollen Auftragsbüchern und wenig Zeit für Verwaltung. Wir nehmen Ihnen die Routine ab, remote und ohne Berliner Agenturpreise.",
    beispielSzenario:
      "Ein Rechenbeispiel: Ein Potsdamer Ingenieurbüro mit sieben Mitarbeitenden verliert pro Woche etwa sechs Stunden an Angebotsschreiben, Rechnungsstellung und Nachfassen. Ein Workflow erstellt Angebote aus Vorlagen und Projektdaten, versendet Rechnungen termingerecht und erinnert automatisch an offene Posten. Übrig bleibt rund eine Stunde Kontrolle pro Woche. Die gewonnene Zeit fließt in abrechenbare Projektarbeit, bei üblichen Ingenieurstundensätzen ein deutlicher Monatswert. Die Zusammenarbeit lief komplett remote, per Video und geteiltem Bildschirm, Rückfragen klärt seitdem ein kurzer monatlicher Videotermin.",
    faq: [
      {
        frage: "Lohnt sich das für ein kleines Büro wie unseres?",
        antwort:
          "Ja, gerade dann. Kleine Teams haben keine Assistenz, auf die sie Routine abwälzen können. Schon ein einzelner Workflow für Angebote oder Rechnungen schafft jede Woche planbare freie Stunden. Und wächst das Büro, wachsen die Workflows einfach mit, ohne neue Software.",
      },
      {
        frage: "Warum nicht einfach eine Agentur aus Berlin nehmen?",
        antwort:
          "Können Sie, nur zahlen Sie dort Hauptstadtaufschlag für dieselbe Remote-Arbeit. Wir arbeiten von Magdeburg aus mit Festpreisen je Workflow und kurzen Reaktionswegen, der Standort spielt für das Ergebnis keine Rolle.",
      },
      {
        frage: "Wir arbeiten für öffentliche Auftraggeber. Passt das zusammen?",
        antwort:
          "Ja. Wir dokumentieren Abläufe, Zugriffe und Datenwege so, dass sie auch externen Prüfungen standhalten, und setzen auf Wunsch ausschließlich Anbieter mit EU-Hosting ein.",
      },
      {
        frage: "Welche Potsdamer Branchen profitieren am meisten?",
        antwort:
          "Ingenieur- und Planungsbüros, Agenturen, Wissenschafts-Dienstleister und Praxen: überall dort, wo kleine Teams viel koordinieren müssen. Auch Anmelde- und Bestätigungsstrecken für Kurse und Veranstaltungen lassen sich mit denselben Bausteinen abbilden.",
      },
    ],
    indexierbar: true,
  },
];

/** Liefert einen Standort anhand seines Slugs oder undefined. */
export function getStandort(slug: string): Standort | undefined {
  return standorte.find((standort) => standort.slug === slug);
}

/**
 * Doorway-Schutz: Eine Standort-Seite darf nur dann auf index stehen und
 * in die Sitemap, wenn das Flag gesetzt ist und alle Unique-Pflichtfelder
 * gefüllt sind. Wird vom Standort-Template (noindex) und von
 * app/sitemap.ts gemeinsam genutzt.
 */
export function standortIstIndexierbar(standort: Standort): boolean {
  return (
    standort.indexierbar &&
    standort.hook.trim().length > 0 &&
    standort.beispielSzenario.trim().length > 0 &&
    standort.faq.length >= 2
  );
}
