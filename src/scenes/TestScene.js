// HIDDEN TEST PAGE: open the game with ?test at the end of the address
// (for example http://localhost:5173/?test). Players never see this.
// Checks that every combination of parts fits together.
import Phaser from 'phaser';
import { PART_OPTIONS, BODY_ANCHORS, COLORS, TEXTURES, DINOS, FRONT_LEGS } from '../data/parts.js';
import { buildDino, fitDino, frontLegStretch, legScale } from '../dino.js';
import { ATTACH } from '../placeholders.js';
import { ART } from '../data/art.js';
import { txt, button, overlay } from '../ui.js';

const LIMBS = ['arms', 'head', 'legs', 'tail'];
const pick = (a) => Phaser.Utils.Array.GetRandom(a);

export default class TestScene extends Phaser.Scene {
  constructor() { super('Test'); }

  create() {
    this.add.rectangle(480, 300, 960, 600, 0xe9f3dc);
    txt(this, 8, 20, 'TEST\nPAGE', 16, { fontStyle: 'bold', color: '#b3261e', align: 'left' });
    const modes = [
      ['Random 9', () => this.showRandom()],
      ['Heads', () => this.showByPart('head')],
      ['Arms', () => this.showByPart('arms')],
      ['Legs', () => this.showByPart('legs')],
      ['Tails', () => this.showByPart('tail')],
      ['Fit report', () => this.showReport()]
    ];
    modes.forEach(([label, fn], i) => button(this, 150 + i * 132, 30, 118, 40, label, fn, { size: 17, fill: 0xffffff }));
    this.input.keyboard.on('keydown-SPACE', () => this.mode === 'random' && this.showRandom());
    this.view = this.add.container(0, 0);
    this.showRandom();
  }

  clear(mode) {
    this.mode = mode;
    this.view.removeAll(true);
  }

  randomChoice() {
    const c = { body: pick(PART_OPTIONS.body), color: pick(COLORS).hex, texture: pick(Object.keys(TEXTURES)) };
    for (const p of LIMBS) c[p] = pick(PART_OPTIONS[p]);
    return c;
  }

  short(choice) {
    const s = (d) => (DINOS[d] || '').replace('T. rex', 'Rex').slice(0, 5);
    return `B:${s(choice.body)} H:${s(choice.head)} A:${s(choice.arms)} L:${s(choice.legs)} T:${s(choice.tail)}`;
  }

  // Click any test dino to see it big.
  cell(choice, x, y, w, h, label) {
    const bg = this.add.rectangle(x + w / 2, y + h / 2, w - 4, h - 4, 0xffffff).setStrokeStyle(2, 0x9bb58a);
    bg.setInteractive({ useHandCursor: true }).on('pointerup', () => this.enlarge(choice));
    const d = buildDino(this, choice);
    fitDino(d, x + 6, y + 4, w - 12, h - (label ? 22 : 8));
    this.view.add([bg, d]);
    if (label) this.view.add(txt(this, x + w / 2, y + h - 12, label, 11).setOrigin(0.5));
  }

  enlarge(choice) {
    const o = overlay(this, 200);
    o.add(this.add.rectangle(480, 300, 900, 540, 0xffffff).setStrokeStyle(4, 0x23331c));
    const d = buildDino(this, choice);
    fitDino(d, 50, 50, 860, 470);
    o.add(d);
    o.add(txt(this, 480, 548, this.short(choice) + '   (click to close)', 16).setOrigin(0.5));
    o.list[0].on('pointerup', () => o.destroy());
  }

  showRandom() {
    this.clear('random');
    for (let i = 0; i < 9; i++) {
      const c = this.randomChoice();
      this.cell(c, 15 + (i % 3) * 312, 58 + Math.floor(i / 3) * 174, 306, 170, this.short(c));
    }
    this.view.add(txt(this, 480, 598, 'Press Random 9 (or Space) to reshuffle. Click a dino to see it big.', 13).setOrigin(0.5, 1));
  }

  // Every body (rows) against every option of one part (columns).
  showByPart(part) {
    this.clear(part);
    const bodies = PART_OPTIONS.body, opts = PART_OPTIONS[part];
    const x0 = 110, y0 = 80, cw = (950 - x0) / opts.length, ch = (585 - y0) / bodies.length;
    opts.forEach((o, j) => this.view.add(txt(this, x0 + j * cw + cw / 2, y0 - 12, DINOS[o], 14, { fontStyle: 'bold' }).setOrigin(0.5)));
    bodies.forEach((b, i) => {
      this.view.add(txt(this, 8, y0 + i * ch + ch / 2, `${DINOS[b]}\nbody`, 13, { align: 'left', fontStyle: 'bold' }).setOrigin(0, 0.5));
      opts.forEach((o, j) => {
        // body + this part; legs/arms also get the body's own other limb so ground level shows
        const c = { body: b, [part]: o };
        if (part === 'legs' && PART_OPTIONS.arms.includes(b)) c.arms = b;
        if (part === 'arms' && PART_OPTIONS.legs.includes(b)) c.legs = b;
        this.cell(c, x0 + j * cw, y0 + i * ch, cw, ch);
      });
    });
  }

  // ----- automatic checks -----
  bodyBottom(body, x) {
    this.bottoms = this.bottoms || {};
    const key = `${body}_body`;
    if (!this.bottoms[key]) {
      const src = this.textures.get(key).getSourceImage();
      const cv = document.createElement('canvas');
      cv.width = src.width; cv.height = src.height;
      const ctx = cv.getContext('2d');
      ctx.drawImage(src, 0, 0);
      this.bottoms[key] = { ctx, h: src.height };
    }
    const { ctx, h } = this.bottoms[key];
    const col = ctx.getImageData(Math.round(x), 0, 1, h).data;
    for (let y = h - 1; y >= 0; y--) if (col[y * 4 + 3] > 128) return y;
    return 0;
  }

  limbBottom(key, anchorY, stretch = 1) {
    const img = this.textures.get(key).getSourceImage();
    const [, ay] = ATTACH[key] || [0, 0];
    return anchorY + (img.height - ay) * stretch;
  }

  showReport() {
    this.clear('report');
    const problems = [];
    for (const b of PART_OPTIONS.body) {
      const A = BODY_ANCHORS[b];
      for (const l of PART_OPTIONS.legs) {
        const foot = this.limbBottom(`${l}_legs`, A.hip[1], legScale(this, b, l));
        const belly = this.bodyBottom(b, A.hip[0]);
        if (foot < belly + 25) problems.push({ choice: { body: b, legs: l }, msg: `${DINOS[l]} legs on ${DINOS[b]} body: legs barely show below the belly` });
        for (const a of PART_OPTIONS.arms) {
          const hand = this.limbBottom(`${a}_arms`, A.shoulder[1], frontLegStretch(this, { body: b, legs: l, arms: a }));
          if (FRONT_LEGS.includes(a)) {
            const diff = Math.round(hand - foot);
            if (Math.abs(diff) > 45) problems.push({ choice: { body: b, legs: l, arms: a }, msg: `${DINOS[b]} body, ${DINOS[l]} legs, ${DINOS[a]} front legs: feet ${Math.abs(diff)}px out of level (${diff > 0 ? 'front' : 'back'} is lower)` });
          } else if (hand > foot - 10) {
            problems.push({ choice: { body: b, legs: l, arms: a }, msg: `${DINOS[b]} body, ${DINOS[l]} legs, ${DINOS[a]} arms: arms reach the ground` });
          }
        }
      }
    }
    const real = Object.keys(ART).filter((k) => !k.startsWith('tex_')).length;
    this.view.add(txt(this, 480, 70, `Checked ${PART_OPTIONS.body.length * PART_OPTIONS.legs.length * PART_OPTIONS.arms.length} body + legs + arms combos.  ${problems.length} problem(s).  (${real} real-art parts loaded; the rest are placeholders)`, 15, { fontStyle: 'bold' }).setOrigin(0.5));
    if (!problems.length) {
      this.view.add(txt(this, 480, 300, 'Everything fits! ✅', 32, { fontStyle: 'bold', color: '#2e6b1f' }).setOrigin(0.5));
      return;
    }
    problems.slice(0, 22).forEach((p, i) => {
      const t = txt(this, 30, 92 + i * 22, `• ${p.msg}`, 14, { align: 'left', color: '#7a1d14' });
      t.setInteractive({ useHandCursor: true }).on('pointerup', () => this.enlarge(p.choice));
      this.view.add(t);
    });
    if (problems.length > 22) this.view.add(txt(this, 30, 92 + 22 * 22, `...and ${problems.length - 22} more`, 14, { align: 'left' }));
    this.view.add(txt(this, 480, 592, 'Click a problem to see it.', 14).setOrigin(0.5, 1));
  }
}
