/**
 * Branchen-Daten für Spur 2 (bundesweite Seiten unter /branchen/[branche]).
 * Alle Texte sind einzigartige deutsche Erstentwürfe (Sie-Form).
 * "loesung" enthält Absätze, getrennt durch Leerzeilen ("\n\n");
 * der erste Absatz dient zugleich als Lead im Hero.
 */

export type Branche = {
  name: string;
  slug: string;
  probleme: string[];
  loesung: string;
  anwendungsfaelle: string[];
  beispielWorkflow: string;
  faq: { frage: string; antwort: string }[];
};

export const branchen: Branche[] = [
  {
    name: "Steuerkanzleien",
    slug: "steuerkanzleien",
    probleme: [
      "Belegchaos zum Monatsende: Mandanten liefern Unterlagen spät, unvollständig und über alle Kanäle gleichzeitig.",
      "Volle Postfächer: Ein großer Teil der E-Mails sind Rückfragen, die immer wieder gleich beantwortet werden.",
      "Fristendruck: Wiedervorlagen und Fristen werden von Hand gepflegt, und Fehler sind teuer.",
      "Fachkräftemangel: Offene Stellen bleiben monatelang unbesetzt, die Arbeit verteilt sich auf weniger Schultern.",
      "Telefonunterbrechungen: Konzentrierte Sachbearbeitung wird ständig durch Standardanrufe unterbrochen.",
    ],
    loesung: [
      "Steuerkanzleien sind ideale Kandidaten für Automatisierung: Viele Abläufe folgen klaren Regeln, wiederholen sich monatlich und hängen an Dokumenten. Genau solche Prozesse übernehmen Workflows und KI-Assistenten zuverlässig, während sich Ihr Team auf Beratung und Gestaltung konzentriert.",
      "Wir starten dort, wo es am meisten drückt: beim Belegeingang. Eingehende Unterlagen werden automatisch erkannt, benannt, dem richtigen Mandanten zugeordnet und strukturiert in Ihrer Kanzleisoftware oder Ihrem Dokumentensystem abgelegt. Fehlende Belege mahnt der Workflow selbstständig und freundlich an. Parallel sortiert eine KI den Posteingang vor: Standardrückfragen erhalten Antwortvorschläge, Fristsachen werden markiert und eskaliert.",
      "Auch am Telefon entlasten wir: Ein KI-Telefonassistent nimmt Anrufe an, beantwortet Fragen zu Unterlagen und Terminen und legt strukturierte Rückrufnotizen an. Jede Automatisierung wird mit Ihren Prozessen und Ihrem Qualitätsanspruch abgestimmt, dokumentiert und zuerst an unkritischen Fällen getestet. Berufsrechtliche Anforderungen und Datenschutz denken wir von Anfang an mit.",
    ].join("\n\n"),
    anwendungsfaelle: [
      "Digitaler Belegeingang: Belege aus E-Mail, Upload und Scan werden erkannt, zugeordnet und abgelegt.",
      "Mandanten-Onboarding: Stammdaten, Vollmachten und Zugänge entstehen aus einer einzigen Erfassung.",
      "Fehlende Unterlagen anmahnen: Der Workflow erinnert Mandanten automatisch und gestaffelt.",
      "Posteingang vorsortieren: Rückfragen, Fristsachen und Werbung werden getrennt und priorisiert.",
      "Fristen und Wiedervorlagen: Termine entstehen automatisch aus Bescheiden und Schriftverkehr.",
      "Telefonassistent für die Kanzlei: Standardanrufe werden beantwortet, Rückrufe strukturiert erfasst.",
    ],
    beispielWorkflow:
      "Ein Mandant sendet eine E-Mail mit drei PDF-Belegen. Der Workflow erkennt den Absender, liest Rechnungsdatum, Betrag und Lieferant aus, benennt die Dateien nach Ihrem Schema und legt sie im Mandantenordner ab. Die Buchhaltungskraft sieht morgens eine Liste neuer Belege mit Auffälligkeiten, etwa einem fehlenden Rechnungsdatum, und gibt mit einem Klick frei. Fehlt zum Stichtag ein Beleg laut Checkliste, erhält der Mandant automatisch eine freundliche Erinnerung. Aus geschätzt zehn Minuten Handarbeit je Mandant und Monat wird so rund eine Minute Kontrolle.",
    faq: [
      {
        frage: "Verträgt sich Automatisierung mit unserer Kanzleisoftware?",
        antwort:
          "In der Regel ja. Gängige Kanzlei- und Dokumentensysteme bieten Schnittstellen oder strukturierte Import- und Exportwege. Was bei Ihnen konkret möglich ist, klären wir vor dem Angebot.",
      },
      {
        frage: "Wie stellen wir Vertraulichkeit und Datenschutz sicher?",
        antwort:
          "Mandantendaten bleiben in Ihren Systemen, Automatisierungen greifen nur auf das Nötigste zu. Wir arbeiten mit Auftragsverarbeitungsverträgen, dokumentierten Zugriffen und auf Wunsch ausschließlich mit Anbietern mit EU-Hosting.",
      },
      {
        frage: "Ersetzt die KI unsere Fachangestellten?",
        antwort:
          "Nein, sie entlastet sie. Die KI übernimmt Zuordnen, Sortieren und Erinnern. Prüfung, Buchung und Beratung bleiben bei Ihren Fachkräften, die dafür endlich wieder Zeit haben.",
      },
      {
        frage: "Was passiert bei Fehlern der KI?",
        antwort:
          "Wir bauen Kontrollpunkte ein: Unsichere Fälle landen in einer Prüfliste statt im System, und jede automatische Aktion wird nachvollziehbar protokolliert. Sie entscheiden, was vollautomatisch laufen darf und was nicht.",
      },
    ],
  },
  {
    name: "Immobilien",
    slug: "immobilien",
    probleme: [
      "Anfragenflut bei neuen Objekten: Auf ein Inserat kommen Dutzende Anfragen, die alle dieselben Fragen stellen.",
      "Besichtigungslogistik: Termine koordinieren, bestätigen, verschieben und nachfassen kostet Stunden.",
      "Unterlagen einsammeln: Selbstauskunft, Nachweise und Dokumente tröpfeln unvollständig ein.",
      "Eigentümerkommunikation: Verwalter beantworten dieselben Statusfragen immer wieder.",
      "Abend- und Wochenendanfragen: Interessenten schreiben, wenn das Büro zu ist, und sind am Montag schon weiter.",
    ],
    loesung: [
      "Im Immobiliengeschäft entscheidet Reaktionszeit: Wer zuerst antwortet, bekommt den Termin, den Mieter oder das Mandat. Gleichzeitig sind viele Anfragen reine Routine. Diese Kombination macht Makler und Verwaltungen zu den größten Profiteuren von KI-Assistenten und Automatisierung.",
      "Ein KI-Chatbot oder E-Mail-Workflow beantwortet Objektfragen sofort, fragt Eckdaten wie Einzugstermin und Budget ab und schlägt qualifizierten Interessenten direkt Besichtigungstermine vor. Selbstauskünfte und Unterlagen werden automatisch angefordert, auf Vollständigkeit geprüft und nachgehalten. Ihr Team sieht statt 80 ungelesener Mails eine sortierte Liste: terminiert, wartet auf Unterlagen, nachfassen.",
      "Für Hausverwaltungen automatisieren wir die Dauerläufer: Schadensmeldungen werden strukturiert aufgenommen und an die passenden Handwerker weitergegeben, Eigentümer erhalten Statusmeldungen ohne Nachfrage, und ein Telefonassistent nimmt Meldungen auch nachts auf. Alles dokumentiert, alles in Ihren bestehenden Systemen.",
    ].join("\n\n"),
    anwendungsfaelle: [
      "Interessenten-Vorqualifizierung: Eckdaten werden im Chat abgefragt, passende Interessenten erhalten Terminvorschläge.",
      "Besichtigungsmanagement: Einladungen, Bestätigungen, Erinnerungen und Absagen laufen automatisch.",
      "Unterlagen-Einzug: Selbstauskunft und Nachweise werden angefordert, geprüft und nachgehalten.",
      "Schadensmeldungen: Mieter melden Schäden strukturiert, Handwerker erhalten automatisch die Anfrage.",
      "Exposé-Anfragen rund um die Uhr: Interessenten bekommen Unterlagen und Antworten sofort, auch am Wochenende.",
      "Eigentümer-Reporting: Statusberichte entstehen automatisch aus Ihren Verwaltungsdaten.",
    ],
    beispielWorkflow:
      "Ein neues Mietobjekt geht freitags um 18 Uhr online. Bis Montagmorgen beantwortet der Assistent 47 Anfragen, fragt Einzugstermin, Haushaltsgröße und Einkommensrahmen ab und lädt die zwölf passenden Interessenten zu zwei Besichtigungsterminen ein, inklusive Bestätigung und Erinnerung. Das Maklerteam beginnt die Woche nicht mit Postfach-Aufräumen, sondern mit zwei vollen, vorqualifizierten Besichtigungsrunden. Sobald vermietet ist, gehen höfliche Absagen an alle übrigen automatisch raus.",
    faq: [
      {
        frage: "Funktioniert das mit den großen Immobilienportalen?",
        antwort:
          "Ja. Anfragen aus den gängigen Portalen kommen per E-Mail und lassen sich automatisch auslesen und beantworten. Ihr Auftritt nach außen bleibt unverändert.",
      },
      {
        frage: "Wirken automatische Antworten nicht unpersönlich?",
        antwort:
          "Gut gemachte Assistenten antworten in Ihrem Ton und mit echten Informationen zum Objekt. Interessenten bekommen schneller eine hilfreiche Antwort als bei jedem Wettbewerber. Das wirkt professioneller, nicht unpersönlicher.",
      },
      {
        frage: "Wie gehen Sie mit Selbstauskünften und sensiblen Daten um?",
        antwort:
          "Bonitäts- und Einkommensdaten werden nur über gesicherte Formulare erhoben, nicht im offenen Chat, und landen direkt in Ihrem System. Die Verarbeitung sichern wir vertraglich ab.",
      },
      {
        frage: "Lohnt sich das auch für eine kleine Hausverwaltung?",
        antwort:
          "Ja. Gerade kleine Teams ersticken in Routinekommunikation. Schon die automatische Aufnahme von Schadensmeldungen plus Statusmeldungen an Eigentümer spart spürbar Zeit.",
      },
    ],
  },
  {
    name: "Zahnarztpraxen",
    slug: "zahnarztpraxen",
    probleme: [
      "Dauerklingeln an der Rezeption: Das Team ist im Patientengespräch und das Telefon klingelt trotzdem.",
      "Terminausfälle: Vergessene Termine kosten Behandlungszeit und Umsatz.",
      "Recall bleibt liegen: Erinnerungen an Prophylaxe und Kontrolle gehen im Alltag unter.",
      "Formularstapel: Anamnese und Aufklärung werden auf Papier erfasst und doppelt eingegeben.",
      "Personalmangel: ZFA-Stellen sind schwer zu besetzen, die Rezeption ist chronisch unterbesetzt.",
    ],
    loesung: [
      "In Zahnarztpraxen hängt fast alles am Empfang: Termine, Telefon, Formulare, Recall. Genau deshalb wirkt Automatisierung hier so stark. Ein digitaler Assistent fängt die Routine ab, und Ihr Team ist wieder für die Patienten da, die vor dem Tresen stehen.",
      "Der KI-Telefonassistent nimmt jeden Anruf an, vereinbart und verschiebt Termine direkt im Kalender, beantwortet Standardfragen nach Ihren Vorgaben und setzt Dringendes sofort auf die Rückrufliste. Niemand hängt mehr in der Warteschleife, und kein Anruf geht verloren, auch nicht während der Behandlung.",
      "Drumherum automatisieren wir die stillen Zeitfresser: Terminerinnerungen senken Ausfälle, der Recall läuft automatisch nach Ihren Intervallen, Anamnesebögen werden vor dem Besuch digital ausgefüllt und landen ohne Abtippen in der Verwaltung. Patientendaten behandeln wir dabei mit der Sorgfalt, die eine Praxis verlangt: klare Zwecke, minimale Zugriffe, vertraglich abgesicherte Verarbeitung.",
    ].join("\n\n"),
    anwendungsfaelle: [
      "Telefonassistent am Empfang: Anrufe werden angenommen, Termine gebucht, Rückrufe strukturiert erfasst.",
      "Terminerinnerungen: Patienten erhalten automatisch Erinnerungen per SMS oder E-Mail.",
      "Recall-Automatisierung: Prophylaxe- und Kontrollerinnerungen laufen nach Ihren Intervallen.",
      "Digitale Anamnese: Bögen werden vor dem Termin ausgefüllt und automatisch übernommen.",
      "Neupatienten-Anfragen: Der Chatbot klärt Versicherung, Anliegen und Wunschtermin vor.",
      "Abrechnungs-Zuarbeit: Unterlagen und Nachweise werden automatisch zusammengestellt.",
    ],
    beispielWorkflow:
      "Eine Patientin ruft dienstags um 12.30 Uhr an, während beide ZFA am Stuhl assistieren. Der Telefonassistent nimmt ab, erkennt den Wunsch nach einer Prophylaxe, bietet drei freie Termine aus dem Praxiskalender an und bucht den gewünschten. Die Patientin erhält sofort eine Bestätigung und zwei Tage vorher eine Erinnerung. Am Abend sieht das Team im Protokoll: acht Anrufe angenommen, fünf Termine gebucht, eine Schmerzpatientin nach Vorgabe priorisiert und zurückgerufen. Kein Anruf verloren, keine Unterbrechung am Stuhl.",
    faq: [
      {
        frage: "Dürfen wir Gesundheitsdaten überhaupt mit KI verarbeiten?",
        antwort:
          "Ja, unter Auflagen. Wir gestalten die Abläufe so, dass Gesundheitsdaten nur in Ihren Praxissystemen liegen, holen nötige Einwilligungen ein und sichern die Verarbeitung mit Auftragsverarbeitungsverträgen ab. Den Rahmen stimmen wir auf Wunsch mit Ihrem Datenschutzbeauftragten ab.",
      },
      {
        frage: "Was passiert mit Schmerzpatienten am Telefon?",
        antwort:
          "Dafür definieren wir feste Regeln: Der Assistent erkennt Schmerz- und Notfallstichworte, priorisiert den Fall und folgt Ihrer Anweisung, etwa sofortige Durchstellung, fester Notfallslot oder Rückruf innerhalb einer definierten Zeit.",
      },
      {
        frage: "Arbeitet das mit unserer Praxissoftware zusammen?",
        antwort:
          "Häufig ja, über Kalender-Schnittstellen oder strukturierte Übergaben. Wo eine direkte Anbindung nicht möglich ist, arbeiten wir mit sauberen Zwischenlisten, die Ihr Team mit einem Blick übernimmt.",
      },
      {
        frage: "Wie reagieren Patienten auf einen digitalen Assistenten?",
        antwort:
          "Überwiegend positiv, denn die Alternative ist Warteschleife oder Anrufbeantworter. Wichtig ist Transparenz: Der Assistent stellt sich als digitaler Helfer vor und bietet immer einen Weg zum Menschen an.",
      },
    ],
  },
];

/** Liefert eine Branche anhand ihres Slugs oder undefined. */
export function getBranche(slug: string): Branche | undefined {
  return branchen.find((branche) => branche.slug === slug);
}
