/**
 * Service-Daten für die drei Pillar-Seiten unter /leistungen/[service].
 * Alle Texte sind einzigartige deutsche Erstentwürfe (Sie-Form, Mittelstand).
 * "lang" enthält Absätze, getrennt durch Leerzeilen ("\n\n").
 */

export type Service = {
  name: string;
  slug: string;
  kurz: string;
  lang: string;
  usecases: string[];
  faq: { frage: string; antwort: string }[];
};

export const services: Service[] = [
  {
    name: "Prozessautomatisierung",
    slug: "prozessautomatisierung",
    kurz: "Avanio verbindet Ihre Systeme und automatisiert wiederkehrende Abläufe: von der Belegverarbeitung bis zum Onboarding. Ihr Team gewinnt Zeit für die Arbeit, die wirklich zählt.",
    lang: [
      "In vielen mittelständischen Unternehmen, Kanzleien und Praxen fließt ein erheblicher Teil der Arbeitszeit in Routine: Daten aus E-Mails abtippen, Belege sortieren, Informationen von einem System ins nächste übertragen, Termine koordinieren. Genau hier setzt Prozessautomatisierung an. Wir analysieren Ihre Abläufe, finden die Schritte mit dem größten Entlastungspotenzial und bauen Automatisierungen, die diese Schritte zuverlässig übernehmen.",
      "Dabei arbeiten wir mit Werkzeugen, die sich in der Praxis bewährt haben: Automatisierungsplattformen wie Make oder n8n verbinden Ihre bestehenden Programme (zum Beispiel E-Mail, Kalender, CRM, Buchhaltung und Dokumentenablage) zu durchgängigen Workflows. Wo starre Regeln nicht ausreichen, ergänzen wir KI-Bausteine, die Texte verstehen, Dokumente auslesen oder Anfragen vorsortieren. Sie behalten dabei jederzeit die Kontrolle: Jeder Workflow wird dokumentiert, getestet und so gebaut, dass Ihr Team ihn nachvollziehen kann.",
      "Der Einstieg ist bewusst niedrigschwellig. Im kostenlosen Erstgespräch schauen wir gemeinsam auf Ihre Abläufe und wählen einen Prozess aus, der schnell spürbare Entlastung bringt. Diesen setzen wir um, prüfen das Ergebnis im Alltag und erweitern die Automatisierung Schritt für Schritt. So entsteht keine Insellösung, sondern ein System, das mit Ihrem Unternehmen wächst.",
    ].join("\n\n"),
    usecases: [
      "Belegverarbeitung: Eingehende Rechnungen werden automatisch ausgelesen, einheitlich benannt und in Buchhaltung oder Dokumentenablage einsortiert.",
      "Angebots- und Auftragsprozesse: Aus einer Anfrage entsteht ohne Abtippen ein Angebot, nach Bestätigung folgen Auftrag und Rechnung.",
      "E-Mail-Vorsortierung: Eingehende Nachrichten werden nach Anliegen klassifiziert, priorisiert und an die richtige Person weitergeleitet.",
      "Kunden-Onboarding: Neue Kunden oder Mandanten erhalten automatisch Unterlagen, Zugänge und Terminvorschläge.",
      "Datenabgleich zwischen Systemen: CRM, Buchhaltung und Projektverwaltung bleiben ohne Doppeleingaben auf demselben Stand.",
      "Berichte und Wiedervorlagen: Wiederkehrende Auswertungen und Erinnerungen erstellen sich von selbst.",
    ],
    faq: [
      {
        frage: "Welche Prozesse eignen sich für den Start?",
        antwort:
          "Am besten eignen sich Abläufe, die häufig vorkommen, klaren Regeln folgen und viel manuelle Tipparbeit verursachen, zum Beispiel die Belegverarbeitung oder die Bearbeitung von Standardanfragen. Im Erstgespräch finden wir gemeinsam den Prozess mit dem besten Verhältnis aus Aufwand und Entlastung.",
      },
      {
        frage: "Müssen wir dafür neue Software einführen?",
        antwort:
          "In den meisten Fällen nicht. Wir verbinden die Programme, mit denen Sie bereits arbeiten, über Schnittstellen und Automatisierungsplattformen. Neue Werkzeuge kommen nur dann ins Spiel, wenn sie einen klaren Mehrwert bringen.",
      },
      {
        frage: "Wie steht es um den Datenschutz?",
        antwort:
          "Wir gestalten jeden Workflow datenschutzkonform: Daten werden nur dort verarbeitet, wo es nötig ist, Zugriffe werden begrenzt und die Verarbeitung wird mit Auftragsverarbeitungsverträgen abgesichert. Auf Wunsch setzen wir bevorzugt Anbieter mit Serverstandort in der EU ein.",
      },
      {
        frage: "Was passiert, wenn eine Automatisierung einmal ausfällt?",
        antwort:
          "Jeder Workflow erhält eine Fehlerbehandlung und automatische Benachrichtigungen, sodass Probleme früh auffallen. Zusätzlich dokumentieren wir alle Abläufe, damit Ihr Team und wir im Fall der Fälle schnell eingreifen können.",
      },
      {
        frage: "Lohnt sich Automatisierung auch für kleine Teams?",
        antwort:
          "Gerade in kleinen Teams zählt jede Stunde. Schon einzelne automatisierte Abläufe, etwa die Vorsortierung des Posteingangs, schaffen spürbare Entlastung, ohne dass dafür jemand eingestellt werden muss.",
      },
    ],
  },
  {
    name: "KI-Telefonassistent",
    slug: "ki-telefonassistent",
    kurz: "Ihr Telefon ist immer besetzt: Ein KI-Telefonassistent nimmt Anrufe rund um die Uhr entgegen, beantwortet Standardfragen, vereinbart Termine und leitet wichtige Gespräche an Ihr Team weiter.",
    lang: [
      "Jeder verpasste Anruf kann ein verlorener Auftrag sein, ein verärgerter Mandant oder ein Patient, der beim nächsten Anbieter anruft. Gleichzeitig bindet das Telefon im Tagesgeschäft viel Aufmerksamkeit: Ihr Team wird aus konzentrierter Arbeit gerissen, oft für Fragen, die sich in einer Minute beantworten lassen. Ein KI-Telefonassistent löst beide Probleme zugleich.",
      "Der Assistent nimmt Anrufe in natürlicher Sprache entgegen, begrüßt Anrufer freundlich und versteht ihr Anliegen. Standardfragen, etwa zu Öffnungszeiten, benötigten Unterlagen oder dem Stand eines Vorgangs, beantwortet er direkt. Termine vereinbart er auf Basis Ihres Kalenders, Rückrufbitten und Gesprächsnotizen landen strukturiert in Ihrem System. Erkennt der Assistent ein komplexes oder dringendes Anliegen, leitet er das Gespräch an die richtige Ansprechperson weiter oder legt eine priorisierte Aufgabe an.",
      "Wir richten den Assistenten individuell auf Ihren Betrieb ein: mit Ihren Formulierungen, Ihren Abläufen und klaren Grenzen für das, was die KI entscheiden darf. Vor dem Start testen wir gemeinsam typische Gesprächssituationen, danach werten wir regelmäßig Protokolle aus und schärfen den Assistenten nach. So entsteht ein Empfang, der nie im Stau steht, nie krank wird und auch am Wochenende erreichbar ist.",
    ].join("\n\n"),
    usecases: [
      "Terminvereinbarung am Telefon: Anrufer erhalten freie Termine direkt aus Ihrem Kalender und eine Bestätigung per E-Mail oder SMS.",
      "Erreichbarkeit außerhalb der Öffnungszeiten: Anliegen werden auch abends und am Wochenende aufgenommen, statt auf dem Anrufbeantworter zu landen.",
      "Entlastung in Stoßzeiten: Wenn alle Leitungen belegt sind, übernimmt der Assistent und niemand hängt in der Warteschleife.",
      "Vorqualifizierung von Anfragen: Der Assistent erfasst Anliegen, Kontaktdaten und Dringlichkeit, bevor Ihr Team übernimmt.",
      "Wiederkehrende Auskünfte: Fragen zu Unterlagen, Abläufen oder Konditionen beantwortet der Assistent direkt und einheitlich.",
      "Rückrufmanagement: Aus jedem Gespräch entsteht automatisch eine strukturierte Notiz mit Rückrufbitte im richtigen Postfach.",
    ],
    faq: [
      {
        frage: "Klingt der Assistent wie ein Mensch?",
        antwort:
          "Moderne Sprachmodelle führen Gespräche in natürlicher, flüssiger Sprache. Der Assistent gibt sich auf Wunsch klar als digitaler Assistent zu erkennen. Das empfehlen wir aus Gründen der Transparenz ausdrücklich.",
      },
      {
        frage: "Was passiert bei Anliegen, die die KI nicht lösen kann?",
        antwort:
          "Dafür definieren wir klare Eskalationsregeln. Der Assistent leitet das Gespräch an eine Ansprechperson weiter, bietet einen Rückruf an oder nimmt das Anliegen strukturiert auf. Er trifft keine Entscheidungen außerhalb der Grenzen, die Sie festlegen.",
      },
      {
        frage: "Wie lange dauert die Einrichtung?",
        antwort:
          "Das hängt vom Umfang ab. Ein Assistent für Terminvereinbarung und Standardfragen ist in der Regel innerhalb weniger Wochen einsatzbereit, inklusive einer Testphase mit Ihren typischen Gesprächssituationen.",
      },
      {
        frage: "Ist ein KI-Telefonassistent mit dem Datenschutz vereinbar?",
        antwort:
          "Ja, wenn er richtig aufgesetzt wird. Anrufer werden über die Verarbeitung informiert, Daten werden nur für den vereinbarten Zweck genutzt und die Verarbeitung wird vertraglich abgesichert. Wir beraten Sie zur passenden Konfiguration für Ihre Branche.",
      },
      {
        frage: "Funktioniert der Assistent mit unserer Telefonanlage?",
        antwort:
          "In den meisten Fällen ja. Der Assistent wird über eine eigene Rufnummer oder eine Weiterleitung angebunden und lässt sich mit gängigen Kalender-, Kanzlei- und Praxissystemen verbinden.",
      },
    ],
  },
  {
    name: "KI-Chatbot",
    slug: "ki-chatbot",
    kurz: "Ein KI-Chatbot beantwortet Anfragen auf Ihrer Website sofort, qualifiziert Interessenten vor und entlastet Ihr Postfach: rund um die Uhr, in Ihrem Ton und mit Ihrem Wissen.",
    lang: [
      "Viele Website-Besucher haben eine konkrete Frage, finden die Antwort aber nicht auf Anhieb und springen ab. Andere schreiben eine E-Mail und warten dann Stunden oder Tage auf eine Antwort. Ein KI-Chatbot schließt diese Lücke: Er beantwortet Fragen in dem Moment, in dem sie entstehen, und macht aus anonymen Besuchern konkrete Anfragen.",
      "Anders als die starren Klick-Bots früherer Jahre versteht ein moderner KI-Chatbot frei formulierte Fragen. Wir trainieren ihn mit Ihrem Wissen: Leistungen, Abläufe, häufige Fragen und die Formulierungen, die zu Ihrem Haus passen. Der Bot antwortet ausschließlich auf dieser Grundlage. Anfragen, die er nicht sicher beantworten kann, reicht er mit allen Angaben an Ihr Team weiter, statt zu raten.",
      "Der Chatbot lässt sich mit Ihren Systemen verbinden: Termine bucht er direkt in den Kalender, Kontaktdaten landen im CRM, Unterlagen verschickt er selbstständig. Nach dem Start werten wir die Gespräche regelmäßig aus und erweitern die Wissensbasis dort, wo Fragen offen bleiben. So wird der Bot mit jeder Woche nützlicher.",
    ].join("\n\n"),
    usecases: [
      "Erstberatung auf der Website: Besucher klären ihre Fragen im Chat und hinterlassen eine qualifizierte Anfrage.",
      "Terminbuchung im Chat: Interessenten wählen direkt einen freien Termin, ganz ohne E-Mail-Pingpong.",
      "Entlastung des Postfachs: Häufige Fragen zu Leistungen, Abläufen oder Unterlagen beantwortet der Bot sofort.",
      "Lead-Qualifizierung: Der Bot erfragt Anliegen, Zeitrahmen und Dringlichkeit und übergibt strukturierte Daten an Ihr Team.",
      "Interner Wissens-Chat: Mitarbeitende fragen Richtlinien, Vorlagen und Abläufe in natürlicher Sprache ab.",
      "Mehrsprachige Anfragen: Der Bot antwortet auf Wunsch auch auf Englisch oder in weiteren Sprachen, ohne Zusatzaufwand für Ihr Team.",
    ],
    faq: [
      {
        frage: "Erfindet der Chatbot Antworten?",
        antwort:
          "Wir bauen den Bot so, dass er nur auf Basis Ihrer hinterlegten Inhalte antwortet. Bei Fragen außerhalb seiner Wissensbasis verweist er an Ihr Team, statt zu raten. Diese Grenzen testen wir vor dem Start ausführlich.",
      },
      {
        frage: "Woher bekommt der Bot sein Wissen?",
        antwort:
          "Aus Ihren bestehenden Quellen: Website, Broschüren, interne Dokumente und ein gemeinsam erarbeiteter Fragenkatalog. Wir strukturieren diese Inhalte zu einer Wissensbasis, die Sie jederzeit erweitern können.",
      },
      {
        frage: "Wie sieht es mit dem Datenschutz aus?",
        antwort:
          "Im Chat werden nur die Daten erhoben, die für die Bearbeitung des Anliegens nötig sind. Besucher werden transparent informiert und die Verarbeitung wird mit Auftragsverarbeitungsverträgen abgesichert. Auf Wunsch setzen wir Modelle mit Hosting in der EU ein.",
      },
      {
        frage: "Können wir die Antworten des Bots selbst anpassen?",
        antwort:
          "Ja, jederzeit. Sie erhalten Zugriff auf die Wissensbasis und können Inhalte ergänzen oder korrigieren. Größere Anpassungen übernehmen wir im Rahmen der laufenden Betreuung.",
      },
      {
        frage: "Was kostet ein KI-Chatbot?",
        antwort:
          "Das hängt von Umfang und Anbindungen ab. Nach dem Erstgespräch erhalten Sie ein Festpreisangebot für die Einrichtung und eine transparente monatliche Pauschale für Betrieb und Pflege.",
      },
    ],
  },
];

/** Liefert einen Service anhand seines Slugs oder undefined. */
export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
