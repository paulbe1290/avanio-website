# ONF Tiefenrein – Website

Statische Website für **ONF Tiefenrein** (Pflasterreinigung & Gartenpflege, Stendal).
Kein Build-Schritt, kein Framework – reines HTML, CSS und JavaScript.

## Struktur

```
index.html        komplette Seite (Startseite + "Über uns" als eingebettete Ansicht)
assets/           Bilder, Logo, Favicon
vercel.json       Caching- und Security-Header
```

Die Seite kommt ohne externe Abhängigkeiten aus – einzige Fremdressource sind die
Google Fonts (Anton, Archivo).

## Lokal ansehen

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Deployment auf Vercel

1. [vercel.com/new](https://vercel.com/new) öffnen und dieses Repository importieren.
2. Framework Preset: **Other**. Build Command und Output Directory bleiben leer –
   Vercel liefert `index.html` direkt aus.
3. Deploy. Jeder weitere Push auf `main` deployt automatisch.

Eigene Domain danach unter *Settings → Domains* verbinden.

## Reinigungs-Animation

Der Abschnitt „So sauber wird Ihr Pflaster" (`#reinigung`) zeigt eine
scrollgesteuerte Tiefenreinigung auf einer echten Kundenfläche.

Der Ablauf ist bewusst ohne externe API gebaut und läuft vollständig im Browser:

- `assets/demo-clean.jpg` – das reale Foto der fertig gereinigten Fläche.
- `assets/demo-dirty.jpg` – daraus erzeugter Verschmutzungszustand
  (Grünbelag, Fugenschmutz, Flechten). Weil beide Bilder aus **demselben Foto**
  stammen, sitzt jeder Pixel exakt übereinander – der Übergang wirkt dadurch echt
  und nicht wie eine Überblendung zweier Aufnahmen.
- `assets/demo-cleaner.png` – der echte Flächenreiniger, freigestellt aus dem
  Originalfoto. Er fährt Bahn für Bahn über die Fläche und legt das saubere
  Pflaster frei; Sprühnebel, Tropfen und Kontaktschatten liegen als Canvas-Ebene darüber.

Der Fortschritt hängt direkt an der Scrollposition: vor- und zurückscrollen
spult die Reinigung entsprechend. Bei aktiviertem `prefers-reduced-motion`
erscheint stattdessen eine statische Vorher/Nachher-Gegenüberstellung.

Die Bilder werden von `scripts/make_dirty.py` erzeugt (benötigt `numpy` und
`pillow`). Das Skript ist nur nötig, wenn die Demo-Bilder neu gebaut werden sollen:

```bash
python3 scripts/make_dirty.py
```

## Videos in „Wir in Aktion"

Der Bereich erwartet drei Videodateien im Projektstamm:

```
onf-video.mp4
onf-video-2.mp4
onf-video-3.mp4
```

Diese Dateien liegen dem Repository **nicht** bei. Solange sie fehlen, zeigt jede
Kachel automatisch ihr Standbild statt eines nicht abspielbaren Players. Sobald
die MP4s ergänzt und deployt sind, erscheinen die Videos ohne weitere Änderung.

## Kontakt

ONF Tiefenrein · Oskar Wennrich · 01520 5845274 · onf.tiefenrein@gmail.com

---

**Hinweis zur Ablage:** Dieser Ordner liegt vorerst im Repository `avanio-website`,
weil in der Arbeitssitzung keine Rechte zum Anlegen eines neuen GitHub-Repos
vorhanden waren. Inhaltlich ist der Ordner ein eigenständiges Projekt und kann
unverändert in ein eigenes Repository verschoben werden.
