#!/usr/bin/env python3
"""
QA-Schnellcheck für die Avanio-Website (Meilenstein 9, wiederverwendbar).

Prüft alle statisch gerenderten Seiten in .next/server/app auf:
  - genau eine H1 pro Seite
  - vorhandene und einzigartige Title, Description, Canonical
  - OpenGraph-Title
  - valides JSON-LD (parsebar, mit @context)
  - saubere Heading-Hierarchie (keine übersprungenen Ebenen)
  - Bilder ohne alt-Attribut
  - Gedankenstriche im sichtbaren Text (CI-Regel)
  - "vor Ort"-Formulierungen auf Spur-2-Standortseiten (Doorway-Regel)

Nutzung:  npm run build && python3 scripts/qa-check.py
Exit-Code 1 bei Verstößen (geeignet für CI).
"""

import collections
import glob
import html
import json
import re
import sys

seiten = sorted(glob.glob(".next/server/app/**/*.html", recursive=True))
seiten = [s for s in seiten if "_not-found" not in s and "_global-error" not in s]
fehler: list[str] = []
titles: dict[str, str] = {}
descs: dict[str, str] = {}
canonicals: dict[str, str] = {}
schema_typen: collections.Counter = collections.Counter()

for f in seiten:
    src = open(f, encoding="utf-8").read()
    name = f.replace(".next/server/app/", "")

    h1 = len(re.findall(r"<h1[\s>]", src))
    if h1 != 1:
        fehler.append(f"{name}: {h1} H1-Elemente")

    t = re.search(r"<title>([^<]*)</title>", src)
    d = re.search(r'name="description" content="([^"]*)"', src)
    c = re.search(r'rel="canonical" href="([^"]*)"', src)
    for label, m, store in [
        ("Title", t, titles),
        ("Description", d, descs),
        ("Canonical", c, canonicals),
    ]:
        if not m:
            fehler.append(f"{name}: {label} fehlt")
        elif m.group(1) in store:
            fehler.append(f"{name}: {label} doppelt mit {store[m.group(1)]}")
        else:
            store[m.group(1)] = name

    if 'property="og:title"' not in src:
        fehler.append(f"{name}: og:title fehlt")

    for block in re.findall(r'application/ld\+json">(.*?)</script>', src, re.S):
        try:
            data = json.loads(html.unescape(block))
            schema_typen[data.get("@type", "?")] += 1
            if "@context" not in data:
                fehler.append(f"{name}: JSON-LD ohne @context")
        except json.JSONDecodeError as e:
            fehler.append(f"{name}: JSON-LD ungültig ({e})")

    levels = [int(m) for m in re.findall(r"<h([1-6])[\s>]", src)]
    for prev, cur in zip(levels, levels[1:]):
        if cur > prev + 1:
            fehler.append(f"{name}: Heading-Sprung h{prev} -> h{cur}")
            break

    for img in re.findall(r"<img[^>]*>", src):
        if "alt=" not in img:
            fehler.append(f"{name}: img ohne alt")

    sichtbar = re.sub(r"<script.*?</script>", "", src, flags=re.S)
    sichtbar = re.sub(r"<[^>]+>", " ", sichtbar)
    if "–" in sichtbar or "—" in sichtbar:
        fehler.append(f"{name}: Gedankenstrich im Text")

    if name.startswith("standorte/") and "vor Ort" in html.unescape(sichtbar):
        fehler.append(f"{name}: 'vor Ort' auf Spur-2-Seite")

print(f"Geprüfte Seiten: {len(seiten)}")
print(f"JSON-LD-Typen: {dict(schema_typen)}")
if fehler:
    print(f"\n{len(fehler)} PROBLEME:")
    for e in fehler:
        print(" -", e)
    sys.exit(1)
print("\nALLE CHECKS BESTANDEN")
