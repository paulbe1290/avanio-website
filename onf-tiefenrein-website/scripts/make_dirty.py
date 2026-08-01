import numpy as np
from PIL import Image, ImageFilter

import os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'assets', 'case3-nachher.jpg')
OUT = os.path.join(ROOT, 'assets') + os.sep

im = Image.open(SRC).crop((300, 340, 975, 1300))
W, H = im.size
clean = np.asarray(im.convert('RGB'), dtype=np.float32) / 255.0

# ---- Pflaster-Maske (alles unterhalb der Kies-/Zaunkante) ----
edge = [(0,34),(150,26),(290,20),(360,80),(430,155),(500,235),(560,305),(620,380),(675,455)]
xs = np.array([p[0] for p in edge], dtype=np.float32)
ys = np.array([p[1] for p in edge], dtype=np.float32)
bound = np.interp(np.arange(W), xs, ys)
yy = np.arange(H)[:, None]
mask = (yy > bound[None, :]).astype(np.float32)
mask = np.asarray(Image.fromarray((mask*255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(6)), dtype=np.float32)/255.

# ---- Fraktales Rauschen ----
def valnoise(cells, seed):
    rng = np.random.default_rng(seed)
    ch = max(2, cells)
    cw = max(2, int(cells * W / H))
    g = rng.random((ch + 1, cw + 1))
    return np.asarray(Image.fromarray((g*255).astype(np.uint8)).resize((W, H), Image.BICUBIC),
                      dtype=np.float32)/255.

def fbm(seed, octaves=5, base=3):
    out = np.zeros((H, W), np.float32); amp = 1.0; tot = 0.0
    for o in range(octaves):
        out += amp * valnoise(base * 2**o, seed + o*17)
        tot += amp; amp *= 0.52
    return out / tot

def smooth(x, a, b):
    t = np.clip((x - a) / max(1e-6, b - a), 0, 1)
    return t*t*(3 - 2*t)

lum = clean.mean(axis=2)
joint = smooth(1.0 - lum, 0.52, 0.82)          # dunkle Fugen betonen

n1 = fbm(11, 6, 2)                              # große Moosflecken
n2 = fbm(303, 5, 7)                             # feinere Struktur
moss = smooth(n1, 0.47, 0.70) * (0.35 + 0.65*smooth(n2, 0.35, 0.72))
grime = smooth(n1*0.45 + n2*0.55, 0.30, 0.78)

# Moos sitzt bevorzugt in den Fugen
moss = np.clip(moss * (0.55 + 0.95*joint), 0, 1)

COL_MOSS  = np.array([0.243, 0.310, 0.157], np.float32)
COL_GRIME = np.array([0.322, 0.318, 0.274], np.float32)

out = clean.copy()
# 1) allgemeiner Schmutzschleier
a = (0.50 * grime * mask)[..., None]
out = out*(1-a) + COL_GRIME*a
# 2) Moos / Grünbelag
a = (0.72 * moss * mask)[..., None]
out = out*(1-a) + COL_MOSS*a
# 3) Fugen zusetzen
a = (0.55 * joint * mask)[..., None]
out = out*(1-a) + (COL_MOSS*0.72)*a
# 4) abdunkeln + entsättigen
m3 = mask[..., None]
out = out * (1 - 0.20*m3)
g = out.mean(axis=2, keepdims=True)
out = out*(1 - 0.42*m3) + g*(0.42*m3)
# leichter Grünstich insgesamt
out[..., 1] *= (1 + 0.045*mask)

# 5) Flechten-Sprenkel: runde, weiche Punkte statt Quadrate
def dots(n, blur_r, seed):
    r = np.random.default_rng(seed)
    acc = np.zeros((H, W), np.float32)
    np.add.at(acc, (r.integers(0, H, n), r.integers(0, W, n)), r.uniform(0.55, 1.0, n))
    acc = np.asarray(Image.fromarray(np.clip(acc, 0, 1).astype(np.float32) * 255)
                     .convert('L').filter(ImageFilter.GaussianBlur(blur_r)), np.float32)/255.
    return acc / max(1e-6, acc.max())

spk = np.clip(dots(9000, 1.0, 7)*0.95 + dots(1400, 2.4, 21)*0.75, 0, 1)
spk *= mask * smooth(n2, 0.26, 0.72)
a = (0.42*spk)[..., None]
out = out*(1-a) + np.array([0.80, 0.81, 0.74], np.float32)*a

out = np.clip(out, 0, 1)
dirty = Image.fromarray((out*255).astype(np.uint8))
dirty = dirty.filter(ImageFilter.GaussianBlur(0.35))

im.save(OUT + 'demo-clean.jpg', quality=86, optimize=True, progressive=True)
dirty.save(OUT + 'demo-dirty.jpg', quality=86, optimize=True, progressive=True)


# ---- Sprite: echter Flächenreiniger aus dem Originalfoto ----
orig = Image.open(SRC).convert('RGB')
mx0, my0, mx1, my1 = 24, 560, 268, 694
sp = orig.crop((mx0, my0, mx1, my1))
sw, sh = sp.size
ax = np.arange(sw)[None, :]; ay = np.arange(sh)[:, None]
cx, cy = 145 - mx0, 626 - my0            # Mittelpunkt des Reinigertellers
d = np.sqrt(((ax-cx)/118.0)**2 + ((ay-cy)/62.0)**2)
alpha = np.clip(1.0 - smooth(d, 0.90, 1.0), 0, 1)
spr = Image.merge('RGBA', (*sp.split(), Image.fromarray((alpha*255).astype(np.uint8))))
spr.save(OUT + 'demo-cleaner.png', optimize=True)

import os
for f in ['demo-clean.jpg', 'demo-dirty.jpg', 'demo-cleaner.png']:
    print(f, round(os.path.getsize(OUT+f)/1024, 1), 'KB')
print('size', W, H, '| sprite', sw, sh)
