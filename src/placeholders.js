// Simple stand-in art, drawn with code, so the game is playable before the final art exists.
// Any part listed in data/art.js replaces its placeholder automatically.
import { BODY_ANCHORS } from './data/parts.js';

const FILL = 0xe8e8e8;
const LINE = 0x3d3d3d;

// Attachment point (in texture pixels) for every head, arm, leg and tail texture.
export const ATTACH = {};

const P = (arr) => arr.map(([x, y]) => ({ x, y }));

// Draws shapes as one blob with a single outline around the outside.
function blob(g, shapes, fill = FILL) {
  g.lineStyle(8, LINE, 1);
  g.fillStyle(LINE, 1);
  for (const s of shapes) {
    if (s.e) { g.fillEllipse(...s.e); g.strokeEllipse(...s.e); }
    else { const p = P(s); g.fillPoints(p, true); g.strokePoints(p, true, true); }
  }
  g.fillStyle(fill, 1);
  for (const s of shapes) {
    if (s.e) g.fillEllipse(...s.e);
    else g.fillPoints(P(s), true);
  }
}

function eye(g, x, y, r = 9) {
  g.fillStyle(0xffffff, 1); g.fillCircle(x, y, r);
  g.lineStyle(2, LINE, 1); g.strokeCircle(x, y, r);
  g.fillStyle(0x1e1e1e, 1); g.fillCircle(x + r * 0.3, y, r * 0.5);
}

function line(g, pts, w = 3, color = 0x8a8a8a) {
  g.lineStyle(w, color, 1);
  g.strokePoints(P(pts), false, false);
}

function teeth(g, x1, y1, x2, y2, n, down = true) {
  g.fillStyle(0xffffff, 1);
  g.lineStyle(1.5, LINE, 1);
  for (let i = 0; i < n; i++) {
    const t = (i + 0.5) / n;
    const x = x1 + (x2 - x1) * t, y = y1 + (y2 - y1) * t;
    const tri = down ? [[x - 5, y], [x + 5, y], [x, y + 11]] : [[x - 5, y], [x + 5, y], [x, y - 11]];
    g.fillTriangle(...tri.flat());
    g.strokeTriangle(...tri.flat());
  }
}

function toes(g, xs, y) {
  g.fillStyle(0xffffff, 1);
  g.lineStyle(2, LINE, 1);
  for (const x of xs) { g.fillEllipse(x, y, 16, 10); g.strokeEllipse(x, y, 16, 10); }
}

function make(scene, key, w, h, attach, draw) {
  if (scene.textures.exists(key)) return;
  const g = scene.make.graphics({ x: 0, y: 0 }, false);
  draw(g);
  g.generateTexture(key, w, h);
  g.destroy();
  if (attach) ATTACH[key] = attach;
}

// ---------- BODIES (960x600, built around Sutton's anchor points) ----------
const BODY_H = { trex: 230, triceratops: 250, stegosaurus: 240, spinosaurus: 215, brachiosaurus: 225, ankylosaurus: 205 };

function drawBody(g, id) {
  const A = BODY_ANCHORS[id];
  const [hx, hy] = A.hip, [sx, sy] = A.shoulder, [tx, ty] = A.tail_base, [nx, ny] = A.neck;
  const cx = (hx + sx) / 2, cy = (hy + sy) / 2 - 15;
  const w = (sx - hx) + 260, h = BODY_H[id];
  const topY = (x) => cy - (h / 2) * Math.sqrt(Math.max(0, 1 - ((x - cx) / (w / 2)) ** 2));

  if (id === 'stegosaurus') {
    const plates = [];
    for (let i = 0; i < 7; i++) {
      const t = -0.75 + i * 0.25;
      const x = cx + t * (w / 2) * 0.9, y = topY(x) + 30;
      const big = 1 - Math.abs(t) * 0.8, ph = 70 + 90 * big, pw = 50 + 35 * big;
      plates.push([[x - pw / 2, y], [x - pw / 2 + 4, y - ph * 0.55], [x, y - ph], [x + pw / 2 - 4, y - ph * 0.55], [x + pw / 2, y]]);
    }
    blob(g, plates, 0xd4d4d4);
  }
  if (id === 'spinosaurus') {
    const sail = [];
    const x0 = cx - w * 0.36, x1 = cx + w * 0.3;
    for (let i = 0; i <= 20; i++) {
      const u = i / 20, x = x0 + (x1 - x0) * u;
      sail.push([x, topY(x) - 155 * Math.sin(Math.PI * u) ** 0.8]);
    }
    for (let i = 20; i >= 0; i--) { const x = x0 + (x1 - x0) * i / 20; sail.push([x, topY(x) + 30]); }
    blob(g, [sail], 0xd6d6d6);
    for (let i = 1; i < 12; i++) {
      const x = x0 + (x1 - x0) * i / 12;
      line(g, [[x, topY(x) + 10], [x + 6, topY(x) - 150 * Math.sin(Math.PI * i / 12) ** 0.8 + 8]], 3, 0xa8a8a8);
    }
  }

  const neck = [[sx + 30, cy - 70], [nx - 10, ny - 40], [nx + 10, ny - 20], [nx + 10, ny + 22], [nx - 5, ny + 42], [sx + 80, cy + 45]];
  const tail = [[hx - 30, cy - 60], [tx + 10, ty - 32], [tx - 10, ty - 14], [tx - 10, ty + 14], [tx + 10, ty + 32], [hx - 40, cy + 55]];
  blob(g, [neck, tail, { e: [cx, cy, w, h] }]);

  // soft belly highlight and hip/shoulder bulges
  g.fillStyle(0xf6f6f6, 1);
  g.fillEllipse(cx, cy + h * 0.22, w * 0.7, h * 0.35);
  line(g, [[hx - 50, hy - 40], [hx - 30, hy + 10], [hx + 20, hy + 35]], 3, 0xb0b0b0);
  line(g, [[sx + 40, sy - 40], [sx + 25, sy + 5], [sx - 15, sy + 30]], 3, 0xb0b0b0);

  if (id === 'ankylosaurus') {
    const bumps = [];
    for (let row = 0; row < 3; row++) {
      for (let i = 0; i < 7 - row; i++) {
        const x = cx - w * 0.36 + row * 25 + i * (w * 0.72 - row * 50) / (6 - row);
        const y = topY(x) + 18 + row * 38;
        bumps.push({ e: [x, y, 46 - row * 6, 26 - row * 3] });
      }
    }
    blob(g, bumps, 0xf2f2f2);
  }
}

// ---------- HEADS (attach = neck end) ----------
const HEADS = {
  trex: { w: 370, h: 260, attach: [40, 170], draw(g) {
    blob(g, [
      [[0, 128], [70, 110], [120, 150], [110, 215], [0, 212]],
      [[60, 120], [110, 70], [200, 48], [290, 52], [340, 78], [352, 112], [330, 130], [215, 140], [150, 168], [95, 190]],
      [[140, 150], [330, 132], [325, 160], [290, 182], [190, 196], [130, 190]]
    ]);
    g.fillStyle(0x5a3434, 1); g.fillPoints(P([[150, 150], [330, 130], [322, 146], [165, 163]]), true);
    teeth(g, 175, 147, 320, 132, 8, true);
    teeth(g, 185, 163, 315, 147, 7, false);
    eye(g, 250, 86, 10);
    line(g, [[226, 70], [274, 66]], 6, LINE);
    g.fillStyle(LINE, 1); g.fillCircle(332, 88, 4);
  } },
  triceratops: { w: 400, h: 330, attach: [45, 240], draw(g) {
    const frill = [{ e: [130, 150, 210, 250] }];
    for (let a = 150; a <= 330; a += 22) {
      const r = a * Math.PI / 180;
      frill.push({ e: [130 + 105 * Math.cos(r), 150 + 125 * Math.sin(r), 22, 22] });
    }
    blob(g, frill, 0xd2d2d2);
    line(g, [[90, 80], [140, 150], [110, 230]], 3, 0xa0a0a0);
    blob(g, [[[175, 188], [205, 184], [290, 60]]], 0xcfcfcf);
    blob(g, [
      [[0, 215], [90, 200], [110, 275], [0, 280]],
      [[100, 180], [230, 170], [310, 190], [345, 215], [350, 245], [300, 270], [170, 282], [105, 268]],
      [[335, 210], [392, 238], [340, 262]]
    ]);
    blob(g, [[[195, 185], [232, 180], [335, 45]], [[298, 200], [326, 198], [324, 152]]], 0xf7f7f7);
    eye(g, 245, 214, 9);
    line(g, [[300, 255], [348, 248]], 3, LINE);
  } },
  stegosaurus: { w: 280, h: 170, attach: [20, 95], draw(g) {
    blob(g, [
      [[0, 62], [110, 80], [130, 118], [0, 128]],
      [[100, 78], [170, 70], [230, 88], [262, 110], [240, 124], [150, 128], [105, 120]]
    ]);
    eye(g, 196, 92, 7);
    line(g, [[192, 116], [258, 111]], 3, LINE);
  } },
  spinosaurus: { w: 440, h: 230, attach: [30, 155], draw(g) {
    blob(g, [
      { e: [165, 76, 70, 30] },
      [[0, 118], [80, 92], [125, 150], [110, 200], [0, 192]],
      [[75, 100], [140, 72], [200, 74], [420, 112], [434, 124], [420, 134], [200, 148], [120, 170]],
      [[150, 148], [420, 132], [410, 150], [210, 170], [140, 172]]
    ]);
    line(g, [[160, 149], [424, 132]], 3, LINE);
    teeth(g, 200, 146, 405, 134, 10, true);
    eye(g, 172, 96, 9);
    g.fillStyle(LINE, 1); g.fillCircle(232, 96, 4);
  } },
  brachiosaurus: { w: 330, h: 520, attach: [45, 470], draw(g) {
    blob(g, [
      [[0, 440], [60, 400], [150, 250], [210, 110], [255, 105], [245, 165], [170, 310], [105, 470], [60, 510], [0, 500]],
      { e: [238, 60, 60, 50] },
      { e: [262, 92, 120, 56] },
      { e: [300, 104, 70, 40] }
    ]);
    line(g, [[60, 470], [140, 300], [200, 150]], 3, 0xb5b5b5);
    eye(g, 252, 84, 8);
    g.fillStyle(LINE, 1); g.fillCircle(240, 45, 4);
    line(g, [[280, 116], [330, 110]], 3, LINE);
  } }
};

// ---------- LIMBS ----------
function columnLimb(g, w, h, top, thighH) {
  blob(g, [
    { e: [w / 2, top + thighH / 2, w - 16, thighH] },
    [[w * 0.2, top + thighH * 0.5], [w * 0.8, top + thighH * 0.5], [w * 0.74, h - 36], [w * 0.88, h - 6], [w * 0.12, h - 6], [w * 0.26, h - 36]]
  ]);
  toes(g, [w * 0.28, w * 0.5, w * 0.72], h - 8);
  line(g, [[w * 0.3, top + thighH * 0.7], [w * 0.34, h - 50]], 3, 0xb5b5b5);
}

// Front limbs ("arms"); attach = shoulder. Heights are tuned so a dino's own legs reach the ground together.
const ARMS = {
  trex: { w: 120, h: 100, attach: [25, 22], draw(g) {
    blob(g, [
      [[10, 10], [40, 8], [62, 42], [46, 56], [22, 36]],
      [[44, 40], [62, 38], [96, 60], [88, 72], [50, 58]]
    ]);
    blob(g, [[[88, 60], [112, 70], [94, 72]], [[84, 68], [100, 90], [88, 78]]], 0xffffff);
  } },
  triceratops: { w: 130, h: 289, attach: [65, 28], draw(g) { columnLimb(g, 130, 289, 6, 90); } },
  stegosaurus: { w: 120, h: 254, attach: [60, 25], draw(g) { columnLimb(g, 120, 254, 6, 80); } },
  spinosaurus: { w: 170, h: 160, attach: [30, 25], draw(g) {
    blob(g, [
      [[8, 10], [55, 8], [76, 70], [52, 84], [24, 40]],
      [[54, 60], [76, 58], [132, 94], [120, 112], [60, 86]],
      { e: [124, 104, 30, 26] }
    ]);
    blob(g, [[[128, 90], [166, 92], [136, 104]], [[126, 110], [152, 140], [130, 120]], [[114, 112], [128, 150], [114, 124]]], 0xffffff);
  } },
  brachiosaurus: { w: 140, h: 317, attach: [70, 28], draw(g) { columnLimb(g, 140, 317, 6, 100); } }
};

// Back legs; attach = hip.
const LEGS = {
  trex: { w: 190, h: 250, attach: [85, 32], draw(g) {
    blob(g, [
      { e: [85, 75, 140, 150] },
      [[66, 120], [122, 120], [126, 196], [110, 222], [80, 222], [86, 186]],
      [[68, 210], [160, 212], [180, 238], [58, 242]]
    ]);
    blob(g, [[[176, 226], [190, 244], [172, 240]], [[150, 230], [162, 246], [146, 242]]], 0xffffff);
    line(g, [[60, 70], [80, 120]], 3, 0xb5b5b5);
  } },
  triceratops: { w: 150, h: 220, attach: [75, 30], draw(g) { columnLimb(g, 150, 220, 6, 120); } },
  stegosaurus: { w: 150, h: 213, attach: [75, 30], draw(g) { columnLimb(g, 150, 213, 6, 120); } },
  spinosaurus: { w: 180, h: 186, attach: [75, 30], draw(g) {
    blob(g, [
      { e: [75, 65, 130, 120] },
      [[55, 100], [108, 100], [112, 150], [80, 166]],
      [[48, 150], [152, 152], [172, 180], [38, 184]]
    ]);
    toes(g, [70, 110, 150], 180);
  } },
  brachiosaurus: { w: 150, h: 257, attach: [75, 30], draw(g) { columnLimb(g, 150, 257, 6, 120); } }
};

// ---------- TAILS (attach = tail base, at the right end) ----------
const TAILS = {
  trex: { w: 420, h: 130, attach: [404, 55], draw(g) {
    blob(g, [[[420, 22], [420, 92], [250, 96], [6, 72], [6, 62], [220, 30]]]);
    line(g, [[400, 80], [240, 82], [60, 68]], 3, 0xb5b5b5);
  } },
  triceratops: { w: 280, h: 110, attach: [264, 45], draw(g) {
    blob(g, [[[280, 15], [280, 80], [150, 82], [6, 62], [140, 26]]]);
  } },
  stegosaurus: { w: 380, h: 200, attach: [362, 120], draw(g) {
    blob(g, [[[100, 118], [118, 116], [40, 40]], [[70, 122], [88, 120], [6, 70]]], 0xcfcfcf);
    blob(g, [[[380, 90], [380, 150], [200, 146], [20, 124], [24, 112], [190, 96]]]);
    blob(g, [[[110, 112], [130, 110], [70, 20]], [[78, 116], [98, 114], [20, 50]]], 0xf7f7f7);
  } },
  spinosaurus: { w: 420, h: 220, attach: [404, 110], draw(g) {
    blob(g, [[[420, 80], [420, 140], [300, 152], [150, 176], [10, 128], [4, 110], [10, 92], [150, 40], [300, 70]]]);
    for (let x = 60; x < 360; x += 30) line(g, [[x, 70 + (360 - x) * 0.02], [x, 150 - (360 - x) * 0.02]], 2, 0xb8b8b8);
  } },
  brachiosaurus: { w: 440, h: 120, attach: [424, 50], draw(g) {
    blob(g, [[[440, 15], [440, 85], [260, 86], [6, 70], [6, 62], [240, 26]]]);
  } }
};

// ---------- SKIN TEXTURE TILES (64x64, seamless) ----------
function wrap(fn, x, y) {
  for (const dx of [-64, 0, 64]) for (const dy of [-64, 0, 64]) fn(x + dx, y + dy);
}
const TEX = {
  smooth(g) {
    g.fillStyle(0x777777, 0.25);
    [[10, 12], [40, 30], [22, 50], [54, 8], [50, 52]].forEach(([x, y]) => wrap((a, b) => g.fillCircle(a, b, 2), x, y));
  },
  scaly(g) {
    g.lineStyle(2.5, 0x444444, 0.8);
    for (let row = 0; row < 4; row++) for (let i = 0; i < 4; i++) {
      wrap((x, y) => { g.beginPath(); g.arc(x, y, 8, 0, Math.PI, false); g.strokePath(); }, i * 16 + (row % 2) * 8, row * 16);
    }
  },
  bumpy(g) {
    [[12, 12, 7], [44, 20, 9], [24, 44, 8], [56, 50, 6], [4, 34, 5], [36, 4, 5]].forEach(([x, y, r]) => wrap((a, b) => {
      g.fillStyle(0xffffff, 0.75); g.fillCircle(a, b, r);
      g.lineStyle(2, 0x444444, 0.8); g.strokeCircle(a, b, r);
    }, x, y));
  },
  armorplates(g) {
    const hex = (cx, cy, r) => { const p = []; for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i + Math.PI / 6; p.push({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) }); } return p; };
    for (const [x, y] of [[16, 16], [48, 16], [0, 44], [32, 44], [64, 44]]) wrap((a, b) => {
      g.fillStyle(0xffffff, 0.45); g.fillPoints(hex(a, b, 13), true);
      g.lineStyle(3, 0x3a3a3a, 0.85); g.strokePoints(hex(a, b, 13), true, true);
    }, x, y);
  },
  spikes(g) {
    for (const [x, y] of [[16, 20], [48, 52], [48, 20], [16, 52]]) wrap((a, b) => {
      g.fillStyle(0xffffff, 0.8); g.fillTriangle(a - 6, b + 6, a + 6, b + 6, a, b - 10);
      g.lineStyle(2, 0x333333, 0.9); g.strokeTriangle(a - 6, b + 6, a + 6, b + 6, a, b - 10);
    }, x, y);
  },
  feathers(g) {
    g.lineStyle(2.5, 0x444444, 0.8);
    for (let row = 0; row < 4; row++) for (let i = 0; i < 4; i++) wrap((x, y) => {
      g.fillStyle(0xffffff, 0.35);
      const pts = P([[x - 8, y - 6], [x, y + 6], [x + 8, y - 6], [x, y - 1]]);
      g.fillPoints(pts, true); g.strokePoints(pts, true, true);
    }, i * 16 + (row % 2) * 8, row * 16 + 8);
  }
};

export function makePlaceholders(scene) {
  for (const id of Object.keys(BODY_ANCHORS)) make(scene, `${id}_body`, 960, 600, null, (g) => drawBody(g, id));
  for (const [set, part] of [[HEADS, 'head'], [ARMS, 'arms'], [LEGS, 'legs'], [TAILS, 'tail']]) {
    for (const [id, d] of Object.entries(set)) make(scene, `${id}_${part}`, d.w, d.h, d.attach, d.draw);
  }
  for (const [name, draw] of Object.entries(TEX)) make(scene, `tex_${name}`, 64, 64, null, draw);
}
