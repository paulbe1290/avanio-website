/**
 * Stadt-Daten für Spur 1 (lokale Seiten unter /ki-agentur/[stadt]).
 * Magdeburg ist die Flagship-Seite, die übrigen Städte tragen einzigartige
 * deutsche Erstentwürfe (Hook, Rechenbeispiel, lokale FAQ).
 *
 * Doorway-Schutz: "indexierbar" bleibt false, solange die Unique-Felder
 * leer sind oder zu wenig einzigartiger Text vorhanden ist. Die Sitemap
 * (Meilenstein 7) nimmt nur indexierbare Städte auf.
 */

export type City = {
  name: string;
  slug: string;
  landkreis: string;
  geo: { lat: number; lng: number };
  branchen: string[];
  lokalerHook: string; // unique, 1-2 Sätze
  beispielSzenario: string; // unique, durchgerechnetes Beispiel
  faqLokal: { frage: string; antwort: string }[]; // >= 2 unique
  nachbarstaedte: string[]; // Slugs
  indexierbar: boolean;
};

export const cities: City[] = [
  {
    name: "Magdeburg",
    slug: "magdeburg",
    landkreis: "kreisfreie Stadt Magdeburg",
    geo: { lat: 52.1316, lng: 11.6398 },
    branchen: [
      "Maschinenbau und Industrie",
      "Gesundheitswirtschaft",
      "Steuerkanzleien und Dienstleister",
      "Handwerk",
      "Logistik",
    ],
    lokalerHook:
      "Magdeburg wächst: Zwischen Wissenschaftshafen, Universitätsmedizin und den Gewerbegebieten im Norden entstehen laufend neue Projekte, während Fachkräfte knapp bleiben. Genau hier zahlt sich Automatisierung doppelt aus, denn sie verschafft Ihrem vorhandenen Team Luft, ohne dass Sie neue Stellen besetzen müssen.",
    beispielSzenario:
      "Ein Rechenbeispiel aus dem Kanzleialltag: Eine Magdeburger Steuerkanzlei mit acht Mitarbeitenden erhält täglich rund 60 E-Mails mit Belegen, Rückfragen und Terminwünschen. Kostet die Vorsortierung und Ablage je Nachricht nur zwei Minuten, sind das zwei Stunden pro Tag, also etwa 40 Stunden im Monat. Ein automatisierter Posteingang, der Belege erkennt, im Dokumentensystem ablegt und Terminwünsche direkt in den Kalender legt, übernimmt den Großteil davon. Selbst wenn nur drei Viertel der Nachrichten automatisch laufen, gewinnt die Kanzlei rund 30 Stunden im Monat zurück, fast eine ganze Arbeitswoche, für Beratung statt Ablage.",
    faqLokal: [
      {
        frage: "Arbeiten Sie mit Unternehmen in Magdeburg vor Ort zusammen?",
        antwort:
          "Ja. Avanio ist in der Region Magdeburg zuhause. Erstgespräch und Workshops können bei Ihnen im Betrieb stattfinden, die laufende Betreuung übernehmen wir je nach Wunsch vor Ort oder remote.",
      },
      {
        frage: "Welche Magdeburger Branchen profitieren am meisten?",
        antwort:
          "Besonders häufig automatisieren wir bei Kanzleien, Praxen, Handwerks- und Industriebetrieben: überall dort, wo viele Anfragen, Belege und Termine zusammenkommen. Das Umfeld der Universitätsmedizin und die wachsenden Gewerbegebiete sorgen zusätzlich für Dienstleister mit vollen Postfächern.",
      },
      {
        frage: "Was kostet der Einstieg?",
        antwort:
          "Das Erstgespräch ist kostenlos. Danach erhalten Sie ein Festpreisangebot für einen klar umrissenen ersten Workflow, sodass Sie das Ergebnis bewerten können, bevor Sie weiter investieren.",
      },
      {
        frage: "Wie schnell sehen wir erste Ergebnisse?",
        antwort:
          "Einen ersten, sauber getesteten Workflow setzen wir in der Regel innerhalb weniger Wochen um. Sie merken die Entlastung also nicht irgendwann, sondern noch im laufenden Quartal.",
      },
    ],
    nachbarstaedte: ["wolmirstedt", "schoenebeck", "burg", "haldensleben"],
    indexierbar: true,
  },
  {
    name: "Stendal",
    slug: "stendal",
    landkreis: "Landkreis Stendal",
    geo: { lat: 52.6041, lng: 11.8593 },
    branchen: [
      "Handwerk",
      "Gesundheit und Pflege",
      "Handel",
      "Landwirtschaft und Agrarservice",
    ],
    lokalerHook:
      "Stendal ist das Versorgungszentrum der Altmark: Wer hier einen Handwerksbetrieb, eine Praxis oder ein Handelsgeschäft führt, bedient Kundschaft aus einem riesigen Einzugsgebiet mit vergleichsweise kleinem Team. Automatisierung hilft, diese Fläche zu bedienen, ohne zusätzliches Personal suchen zu müssen.",
    beispielSzenario:
      "Ein Rechenbeispiel: Ein Stendaler Elektrobetrieb mit zwölf Monteuren bekommt täglich etwa 25 Anrufe, viele davon Terminanfragen und Statusfragen zu laufenden Aufträgen. Übernimmt ein KI-Telefonassistent die Hälfte dieser Gespräche mit durchschnittlich vier Minuten, spart das Büro rund 50 Minuten am Tag, also etwa 18 Stunden im Monat. Wichtiger noch: Kein Anruf landet mehr im Leeren, auch dann nicht, wenn das Büro unterwegs ist oder längst Feierabend hat. Der Assistent dokumentiert jedes Gespräch, sodass das Büro morgens eine fertige Liste mit Rückrufen, Terminen und Materialfragen vorfindet, statt den Anrufbeantworter abzuhören.",
    faqLokal: [
      {
        frage: "Betreuen Sie Betriebe in Stendal und der Altmark auch vor Ort?",
        antwort:
          "Ja. Von Magdeburg aus sind wir gut in Stendal erreichbar. Das Erstgespräch führen wir gern bei Ihnen im Betrieb, die Umsetzung läuft anschließend größtenteils remote, damit keine unnötigen Fahrtkosten entstehen.",
      },
      {
        frage: "Unser Betrieb ist klein. Lohnt sich Automatisierung trotzdem?",
        antwort:
          "Gerade dann. In kleinen Teams schlägt jede gesparte Stunde direkt durch. Wir starten bewusst mit einem einzelnen Ablauf, etwa der Telefonannahme oder der Angebotserstellung, und erweitern nur, wenn es sich rechnet. Viele Altmärker Betriebe beginnen mit der Telefonannahme, weil dort der Engpass am deutlichsten spürbar ist.",
      },
      {
        frage: "Funktioniert das mit unserer Branchensoftware?",
        antwort:
          "Meist ja. Gängige Handwerker-, Praxis- und Warenwirtschaftsprogramme lassen sich über Schnittstellen oder Exporte anbinden. Das prüfen wir im Erstgespräch konkret für Ihre Software. Falls eine direkte Anbindung nicht möglich ist, finden wir meist einen pragmatischen Weg über strukturierte E-Mails oder Tabellen.",
      },
    ],
    nachbarstaedte: ["tangermuende", "wolmirstedt", "magdeburg"],
    indexierbar: true,
  },
  {
    name: "Wolmirstedt",
    slug: "wolmirstedt",
    landkreis: "Landkreis Börde",
    geo: { lat: 52.2492, lng: 11.6321 },
    branchen: ["Handwerk", "Logistik und Gewerbe", "Energie", "Dienstleister"],
    lokalerHook:
      "Wolmirstedt liegt zwischen Magdeburg und der Börde, dort, wo Gewerbegebiete, Energiewirtschaft und Pendlerströme zusammentreffen. Viele Betriebe hier wachsen schneller als ihre Büroprozesse, und genau diese Lücke schließen wir mit Automatisierung.",
    beispielSzenario:
      "Ein Rechenbeispiel: Ein Gewerbebetrieb in Wolmirstedt verarbeitet wöchentlich rund 80 Lieferscheine und Eingangsrechnungen von Hand. Bei drei Minuten je Beleg sind das vier Stunden pro Woche reine Tipparbeit. Eine Automatisierung, die Belege ausliest, mit Bestellungen abgleicht und zur Freigabe vorlegt, reduziert den Aufwand auf Stichproben und Sonderfälle. Aus vier Stunden wird so typischerweise weniger als eine, und die Buchhaltung ist trotzdem aktueller als vorher. Belege, die abends oder am Wochenende eingehen, sind am nächsten Morgen bereits zugeordnet und zur Freigabe vorbereitet. So bleibt der Monatsabschluss planbar, auch wenn das Büro nur halbtags besetzt ist.",
    faqLokal: [
      {
        frage: "Sind Sie auch kurzfristig in Wolmirstedt verfügbar?",
        antwort:
          "Ja, Wolmirstedt liegt quasi vor unserer Haustür. Termine vor Ort sind meist innerhalb weniger Tage möglich, Abstimmungen dazwischen laufen unkompliziert per Telefon oder Video. Bei dringenden Problemen mit laufenden Workflows reagieren wir noch am selben Tag.",
      },
      {
        frage: "Wir haben keine IT-Abteilung. Ist das ein Problem?",
        antwort:
          "Nein. Wir übernehmen Einrichtung, Tests und Betrieb der Workflows und erklären Ihrem Team alles Wichtige in normaler Sprache. Für den Alltag brauchen Sie keine eigenen IT-Fachleute. Auf Wunsch erhält Ihr Team zusätzlich eine kurze Schritt-für-Schritt-Dokumentation.",
      },
      {
        frage: "Welche Abläufe automatisieren Betriebe in Wolmirstedt zuerst?",
        antwort:
          "Meist den Belegfluss und die Auftragsanlage, weil dort die meiste Tipparbeit steckt. Danach folgen automatische Auftragsbestätigungen, Statusmeldungen an Kunden und die Übergabe der Daten an die Buchhaltung. Wir priorisieren gemeinsam nach Aufwand und Wirkung, damit sich der erste Schritt schnell bezahlt macht.",
      },
    ],
    nachbarstaedte: ["magdeburg", "haldensleben", "burg"],
    indexierbar: true,
  },
  {
    name: "Schönebeck",
    slug: "schoenebeck",
    landkreis: "Salzlandkreis",
    geo: { lat: 52.0167, lng: 11.7333 },
    branchen: [
      "Industrie und Metallverarbeitung",
      "Gesundheit und Reha",
      "Handwerk",
      "Handel",
    ],
    lokalerHook:
      "Schönebeck verbindet Industriegeschichte an der Elbe mit einem starken Gesundheitsstandort rund um Bad Salzelmen. Ob Fertigungsbetrieb oder Praxis: Die Anforderungen an Erreichbarkeit und saubere Abläufe steigen, das Personal dafür wächst aber nicht mit.",
    beispielSzenario:
      "Ein Rechenbeispiel aus dem Praxisalltag: Eine Schönebecker Physiotherapiepraxis erhält täglich rund 40 Anrufe, überwiegend Terminwünsche und Verschiebungen. Während der Behandlungen bleibt das Telefon oft unbesetzt, schätzungsweise jeder vierte Anruf geht verloren. Ein KI-Telefonassistent, der Termine direkt im Kalender bucht und verschiebt, fängt diese zehn Anrufe pro Tag auf. Schon wenn daraus nur fünf gehaltene Termine pro Woche werden, hat sich der Assistent über den Monat gerechnet mehr als bezahlt. Zusätzlich erinnert er Patientinnen und Patienten am Vortag automatisch an ihren Termin, was kurzfristige Ausfälle weiter senkt. Das Praxisteam sieht jede Buchung sofort im gewohnten Kalender und behält die volle Kontrolle.",
    faqLokal: [
      {
        frage: "Kommen Sie für ein Erstgespräch nach Schönebeck?",
        antwort:
          "Ja, gern. Schönebeck gehört zu unserem Kerngebiet rund um Magdeburg. Wir schauen uns Ihre Abläufe am liebsten direkt vor Ort an, die spätere Abstimmung läuft dann flexibel per Telefon oder Video.",
      },
      {
        frage: "Wie gehen Sie mit Patientendaten um?",
        antwort:
          "Besonders sorgfältig. Für Praxen konzipieren wir Abläufe so, dass Gesundheitsdaten ausschließlich in den dafür vorgesehenen Systemen landen, und klären Einwilligungen sowie Auftragsverarbeitung vor dem Start.",
      },
      {
        frage: "Arbeiten Sie auch mit Industrie- und Handwerksbetrieben in Schönebeck?",
        antwort:
          "Ja. Neben Praxen unterstützen wir Fertigungs- und Handwerksbetriebe, etwa bei der Belegverarbeitung, bei Wartungsplänen oder der automatischen Erstellung von Angeboten. Das Vorgehen ist dasselbe: Wir starten mit einem klar umrissenen Ablauf, messen die Entlastung im Alltag und bauen erst dann aus, wenn sich der erste Schritt bewährt hat.",
      },
    ],
    nachbarstaedte: ["magdeburg", "burg", "wolmirstedt"],
    indexierbar: true,
  },
  {
    name: "Burg",
    slug: "burg",
    landkreis: "Landkreis Jerichower Land",
    geo: { lat: 52.2724, lng: 11.8551 },
    branchen: [
      "Logistik an der A2",
      "Produktion und Lebensmittel",
      "Handwerk",
      "Dienstleister",
    ],
    lokalerHook:
      "Burg profitiert von der Lage direkt an der A2 zwischen Magdeburg und Brandenburg: Logistiker, Produktionsbetriebe und Handwerker haben volle Auftragsbücher, aber selten genug Leute im Büro. Automatisierung macht aus diesem Engpass einen Vorsprung.",
    beispielSzenario:
      "Ein Rechenbeispiel: Eine Spedition in Burg beantwortet pro Tag rund 30 Statusanfragen zu Sendungen, per Telefon und per E-Mail. Bei durchschnittlich drei Minuten je Anfrage bindet das täglich anderthalb Stunden im Dispo-Büro. Ein Chatbot und ein automatisierter E-Mail-Workflow, die den Sendungsstatus direkt aus dem System ziehen, beantworten den Großteil sofort. Bleiben nur die Sonderfälle übrig, gewinnt die Disposition gut 25 Stunden im Monat für die eigentliche Planung. Auch nachts eingehende Anfragen sind morgens bereits beantwortet oder liegen sortiert im Postfach. Über Sonderfälle entscheidet die Disposition weiterhin selbst, nur eben ohne Dauerklingeln im Hintergrund.",
    faqLokal: [
      {
        frage: "Betreuen Sie auch Betriebe im Jerichower Land vor Ort?",
        antwort:
          "Ja. Burg und das Jerichower Land erreichen wir von Magdeburg aus in kurzer Zeit. Erstgespräch und Prozessaufnahme machen wir gern bei Ihnen, danach arbeiten wir effizient remote weiter. Für die laufende Betreuung vereinbaren wir feste Ansprechpartner und kurze Reaktionszeiten.",
      },
      {
        frage: "Unsere Software ist schon älter. Geht Automatisierung trotzdem?",
        antwort:
          "Oft ja. Auch ältere Systeme lassen sich über Exporte, E-Mail-Schnittstellen oder Datenbankzugriffe anbinden. Was konkret möglich ist, prüfen wir vor dem Angebot, damit Sie keine Überraschungen erleben.",
      },
      {
        frage: "Was bringt Automatisierung einem Handwerksbetrieb in Burg?",
        antwort:
          "Vor allem Erreichbarkeit und schnellere Angebote. Anfragen werden automatisch erfasst und vorqualifiziert, Angebote entstehen aus Vorlagen statt aus dem Kopf, und Kunden erhalten Statusmeldungen, ohne dass jemand anrufen muss. So gewinnen Meister und Büro jede Woche planbare Stunden zurück.",
      },
    ],
    nachbarstaedte: ["magdeburg", "wolmirstedt", "tangermuende"],
    indexierbar: true,
  },
  {
    name: "Haldensleben",
    slug: "haldensleben",
    landkreis: "Landkreis Börde",
    geo: { lat: 52.2898, lng: 11.4098 },
    branchen: [
      "Logistik und Versandhandel",
      "Industrie",
      "Handwerk",
      "Landwirtschaft der Börde",
    ],
    lokalerHook:
      "Haldensleben ist einer der großen Logistik- und Versandstandorte Sachsen-Anhalts, und das prägt die ganze Börde: Um jede Arbeitskraft herrscht Wettbewerb. Wer Routineaufgaben automatisiert, hält mit den Großen mit, ohne deren Personalbudget zu haben.",
    beispielSzenario:
      "Ein Rechenbeispiel: Ein Handelsbetrieb in Haldensleben bearbeitet täglich etwa 50 Kundenanfragen zu Lieferzeiten, Retouren und Rechnungen. Zwei Mitarbeiterinnen sind damit jeweils einen halben Tag beschäftigt. Ein KI-Chatbot mit Anbindung an Warenwirtschaft und Versanddaten beantwortet einen großen Teil solcher Standardfragen sofort. Übernimmt er nur die Hälfte, werden pro Tag rund vier Arbeitsstunden frei, im Monat über 80, die in Einkauf und Kundenpflege deutlich mehr bewirken. Die Mitarbeiterinnen beantworten nur noch Fälle, in denen Fingerspitzengefühl gefragt ist. Auswertungen zu den häufigsten Anfragen liefert der Bot gleich mit, als Grundlage für Sortiment und Service.",
    faqLokal: [
      {
        frage: "Lohnt sich KI auch neben den großen Logistikzentren?",
        antwort:
          "Unbedingt. Gerade kleinere Betriebe in Haldensleben konkurrieren mit Großstandorten um Personal. Automatisierung verschafft Ihnen Kapazität, ohne dass Sie im Gehaltswettbewerb mitbieten müssen. Viele Abläufe aus der Logistikwelt lassen sich im Kleinen genauso sauber abbilden.",
      },
      {
        frage: "Wie läuft die Zusammenarbeit ab, wenn wir wenig Zeit haben?",
        antwort:
          "Sehr kompakt. Wir brauchen zum Start ein Gespräch von etwa einer Stunde und danach punktuelle Rückfragen. Aufnahme, Bau und Tests der Workflows übernehmen wir, Ihr Team prüft nur die Ergebnisse. Nach dem Start reichen kurze monatliche Abstimmungen, um alles aktuell zu halten.",
      },
      {
        frage: "Welche Rolle spielt die Landwirtschaft in der Börde dabei?",
        antwort:
          "Eine größere, als viele denken. Agrarbetriebe und ihre Dienstleister jonglieren mit Lieferscheinen, Wiegescheinen und Saisonkräften. Automatische Belegerfassung und einfache digitale Formulare sparen gerade in der Erntezeit viel Zeit, wenn jede Stunde zählt.",
      },
    ],
    nachbarstaedte: ["magdeburg", "wolmirstedt", "halberstadt"],
    indexierbar: true,
  },
  {
    name: "Halberstadt",
    slug: "halberstadt",
    landkreis: "Landkreis Harz",
    geo: { lat: 51.8958, lng: 11.0467 },
    branchen: [
      "Gesundheitswesen",
      "Verwaltung und Bildung",
      "Handel",
      "Handwerk",
    ],
    lokalerHook:
      "Halberstadt ist das Tor zum Harz und Versorgungszentrum für den ganzen Landkreis: Kliniken, Praxen, Ämter und Händler bedienen hier weit mehr Menschen, als in der Stadt selbst wohnen. Entsprechend voll sind Telefonleitungen und Postfächer, und genau dort setzen wir an.",
    beispielSzenario:
      "Ein Rechenbeispiel: Eine Halberstädter Hausarztpraxis verzeichnet montags vormittags regelmäßig über 60 Anrufversuche, von denen das Team neben der Sprechstunde nur einen Teil annehmen kann. Ein KI-Telefonassistent nimmt jeden Anruf an, bucht Routinetermine selbst, gibt Auskunft zu Rezepten und Überweisungen und setzt dringende Fälle sofort auf die Rückrufliste. Aus einem chaotischen Montag werden planbare Listen, ohne dass eine zusätzliche Kraft am Empfang sitzt. Das Team startet mit einer sortierten Übersicht in die Woche statt mit einem überlaufenden Anrufbeantworter, und Patientinnen und Patienten erreichen die Praxis beim ersten Versuch.",
    faqLokal: [
      {
        frage: "Arbeiten Sie mit Praxen und Einrichtungen in Halberstadt zusammen?",
        antwort:
          "Ja, der Landkreis Harz gehört zu unserem Einzugsgebiet. Für Praxen und Einrichtungen mit sensiblen Daten planen wir die Abläufe besonders konservativ und stimmen sie mit Ihren Datenschutzvorgaben ab. Auf Wunsch beziehen wir Ihren Datenschutzbeauftragten von Anfang an mit ein.",
      },
      {
        frage: "Unterstützen Sie auch Händler in der Innenstadt?",
        antwort:
          "Gern. Für Handel und Gastronomie sind vor allem automatische Antworten auf Standardfragen, Reservierungen und Click-und-Collect-Anfragen interessant. Das lässt sich auch für kleine Geschäfte wirtschaftlich umsetzen.",
      },
      {
        frage: "Wie schnell lässt sich ein Telefonassistent in Halberstadt einführen?",
        antwort:
          "Für Standardfälle wie Terminbuchung und Rezeptanfragen meist innerhalb weniger Wochen. Wir testen vorab gemeinsam typische Gespräche, schalten den Assistenten zunächst zu Stoßzeiten dazu und erweitern den Einsatz erst, wenn Team und Patienten zufrieden sind.",
      },
    ],
    nachbarstaedte: ["wernigerode", "magdeburg", "haldensleben"],
    indexierbar: true,
  },
  {
    name: "Wernigerode",
    slug: "wernigerode",
    landkreis: "Landkreis Harz",
    geo: { lat: 51.8345, lng: 10.7858 },
    branchen: [
      "Tourismus und Hotellerie",
      "Gastronomie",
      "Freizeitwirtschaft",
      "Handwerk",
    ],
    lokalerHook:
      "Wernigerode lebt vom Tourismus: Hotels, Pensionen und Gastronomie beantworten dieselben Fragen hundertfach, zu Zimmern, Zeiten, Parkplätzen und Ausflugszielen, oft abends und am Wochenende. Genau diese Daueranfragen sind ideales Terrain für KI.",
    beispielSzenario:
      "Ein Rechenbeispiel: Ein Hotel in der Wernigeröder Altstadt erhält in der Saison täglich rund 35 Anfragen per Telefon und E-Mail, viele davon außerhalb der Rezeptionszeiten. Beantwortet ein KI-Assistent Verfügbarkeits- und Standardfragen automatisch und rund um die Uhr, gehen Buchungsanfragen aus den Abendstunden nicht mehr an Portale oder Mitbewerber verloren. Schon zwei zusätzliche Direktbuchungen pro Woche machen je nach Zimmerpreis mehrere hundert Euro Mehrumsatz im Monat aus, ohne zusätzliche Nachtschicht. Die Rezeption erhält jeden Morgen eine Übersicht aller nächtlichen Anfragen und Buchungen und muss nichts manuell nachtragen. Stammgäste merken davon nur eines: Sie bekommen schneller eine verbindliche Antwort.",
    faqLokal: [
      {
        frage: "Funktioniert das auch im Saisonbetrieb?",
        antwort:
          "Ja, sogar besonders gut. Ein KI-Assistent skaliert mit dem Anfrageaufkommen: In der Hochsaison fängt er die Spitzen ab, in ruhigen Monaten verursacht er kaum Kosten. Personal müssen Sie dafür nicht saisonal auf- und abbauen. Die Einrichtung planen wir bewusst vor Saisonstart, damit der Assistent im Trubel schon eingespielt ist.",
      },
      {
        frage: "Können die Assistenten auch Gäste auf Englisch bedienen?",
        antwort:
          "Ja. Telefonassistent und Chatbot antworten auf Wunsch mehrsprachig, zum Beispiel auf Englisch oder Niederländisch. Ihr Team bekommt die Anfrage trotzdem auf Deutsch zusammengefasst.",
      },
      {
        frage: "Hilft das auch Gastronomie und Freizeitanbietern in Wernigerode?",
        antwort:
          "Ja. Restaurants nehmen Reservierungen automatisch an, Freizeitanbieter beantworten Fragen zu Zeiten, Preisen und Wetterregelungen direkt im Chat. Gerade an Wochenenden mit vollem Haus entlastet das spürbar, weil das Team am Gast bleiben kann, statt ans Telefon zu laufen.",
      },
    ],
    nachbarstaedte: ["halberstadt", "magdeburg"],
    indexierbar: true,
  },
  {
    name: "Tangermünde",
    slug: "tangermuende",
    landkreis: "Landkreis Stendal",
    geo: { lat: 52.5403, lng: 11.9694 },
    branchen: [
      "Tourismus",
      "Gastronomie und Hotellerie",
      "Handwerk",
      "kleine Manufakturen",
    ],
    lokalerHook:
      "Tangermünde zieht mit seiner Altstadt an der Elbe Gäste aus dem ganzen Land an, bedient wird das alles aber von kleinen Teams in Hotels, Gastronomie und Handwerk. Wenn im Hochbetrieb niemand ans Telefon gehen kann, übernimmt künftig die KI.",
    beispielSzenario:
      "Ein Rechenbeispiel: Ein Restaurant mit Pension in Tangermünde verpasst an Wochenenden schätzungsweise zehn Anrufe pro Tag, weil im Service niemand ans Telefon kann. Ein KI-Telefonassistent nimmt Reservierungen und Zimmeranfragen automatisch entgegen und trägt sie ins Buchungssystem ein. Werden dadurch nur vier Tische und eine Übernachtung pro Wochenende zusätzlich gebucht, summiert sich das über die Saison zu einem spürbaren Umsatzplus, ohne eine zusätzliche Kraft am Empfang. Das Team sieht alle neuen Einträge gebündelt vor Schichtbeginn, und Anfragen, die der Assistent nicht sicher zuordnen kann, landen als Rückrufbitte ganz oben auf der Liste.",
    faqLokal: [
      {
        frage: "Lohnt sich KI für einen kleinen Betrieb in Tangermünde?",
        antwort:
          "Ja, gerade hier. Kleine Häuser verlieren prozentual am meisten, wenn Anfragen unbeantwortet bleiben. Ein Assistent für Telefon oder Website kostet deutlich weniger als eine zusätzliche Teilzeitkraft und ist nie im Urlaub.",
      },
      {
        frage: "Wir sind kein Technikbetrieb. Wie aufwendig ist die Einführung?",
        antwort:
          "Überschaubar. Wir richten alles ein, testen mit Ihnen typische Anfragen und übergeben erst, wenn es rund läuft. Im Alltag bedienen Sie nur Ihren gewohnten Kalender und Ihr Buchungssystem weiter. Nach der Übergabe bleiben wir erreichbar und passen den Assistenten an, wenn sich Karte, Zeiten oder Zimmer ändern.",
      },
      {
        frage: "Funktioniert das auch für Handwerk und Manufakturen am Ort?",
        antwort:
          "Ja. Werkstätten und Manufakturen nutzen dieselben Bausteine für Bestellanfragen, Terminabsprachen und Versandbenachrichtigungen. Gerade wer nebenbei einen kleinen Online-Verkauf betreibt, spart mit automatischen Bestätigungen und Statusmeldungen jede Woche mehrere Stunden.",
      },
    ],
    nachbarstaedte: ["stendal", "burg", "magdeburg"],
    indexierbar: true,
  },
];

/** Liefert eine Stadt anhand ihres Slugs oder undefined. */
export function getCity(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

/**
 * Leitet aus der lokalen Branchenstruktur die Reihenfolge der
 * Leistungsblöcke ab (Doorway-Schutz: Reihenfolge variiert je Stadt
 * nach lokalem Schwerpunkt). Liefert Service-Slugs, stärkster zuerst.
 */
export function serviceReihenfolge(city: City): string[] {
  const text = city.branchen.join(" ").toLowerCase();

  const scores: { slug: string; score: number }[] = [
    {
      slug: "prozessautomatisierung",
      score: countMatches(text, [
        "logistik",
        "industrie",
        "maschinenbau",
        "produktion",
        "kanzlei",
        "verwaltung",
        "handwerk",
        "landwirtschaft",
        "energie",
      ]),
    },
    {
      slug: "ki-telefonassistent",
      score: countMatches(text, [
        "tourismus",
        "hotellerie",
        "gastronomie",
        "gesundheit",
        "pflege",
        "praxis",
        "reha",
        "freizeit",
      ]),
    },
    {
      slug: "ki-chatbot",
      score: countMatches(text, [
        "handel",
        "versand",
        "tourismus",
        "dienstleister",
        "manufaktur",
      ]),
    },
  ];

  // Stabile Sortierung: bei Gleichstand bleibt die Grundreihenfolge erhalten.
  return scores
    .map((entry, index) => ({ ...entry, index }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map((entry) => entry.slug);
}

function countMatches(text: string, keywords: string[]): number {
  return keywords.filter((keyword) => text.includes(keyword)).length;
}
