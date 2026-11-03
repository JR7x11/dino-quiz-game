// Small UI helpers: text, buttons, panels, pop-up overlays.
import { W, H } from './layout.js';

export const FONT = '"Trebuchet MS", "Arial Rounded MT Bold", Verdana, sans-serif';
export const INK = '#23331c';

export function txt(scene, x, y, str, size = 28, style = {}) {
  return scene.add.text(x, y, str, {
    fontFamily: FONT, fontSize: `${size}px`, color: INK, align: 'center', ...style
  });
}

export function panel(scene, x, y, w, h, fill = 0xffffff, radius = 22) {
  const g = scene.add.graphics();
  g.fillStyle(0x23331c, 0.18); g.fillRoundedRect(x + 4, y + 6, w, h, radius);
  g.fillStyle(fill, 1); g.fillRoundedRect(x, y, w, h, radius);
  g.lineStyle(4, 0x23331c, 1); g.strokeRoundedRect(x, y, w, h, radius);
  return g;
}

// A rounded button centered at (x, y).
export function button(scene, x, y, w, h, label, onClick, opts = {}) {
  const { fill = 0xffc93c, size = 26, textColor = INK } = opts;
  const c = scene.add.container(x, y);
  const g = scene.add.graphics();
  const t = scene.add.text(0, 0, label, {
    fontFamily: FONT, fontSize: `${size}px`, color: textColor, align: 'center', fontStyle: 'bold',
    wordWrap: { width: w - 28 }
  }).setOrigin(0.5);
  c.add([g, t]);
  c.label = t;

  c.setFill = (color) => {
    g.clear();
    g.fillStyle(0x23331c, 0.25); g.fillRoundedRect(-w / 2 + 3, -h / 2 + 5, w, h, 16);
    g.fillStyle(color, 1); g.fillRoundedRect(-w / 2, -h / 2, w, h, 16);
    g.lineStyle(3, 0x23331c, 1); g.strokeRoundedRect(-w / 2, -h / 2, w, h, 16);
    return c;
  };
  c.setFill(fill);

  c.setSize(w, h).setInteractive({ useHandCursor: true });
  c.on('pointerover', () => c.enabled && scene.tweens.add({ targets: c, scale: 1.04, duration: 90 }));
  c.on('pointerout', () => scene.tweens.add({ targets: c, scale: 1, duration: 90 }));
  c.on('pointerup', () => { if (c.enabled) onClick(c); });
  c.enabled = true;
  c.setEnabled = (on) => { c.enabled = on; c.setAlpha(on ? 1 : 0.85); return c; };
  return c;
}

// Dimmed full-screen layer that blocks clicks underneath. Destroy it to close.
export function overlay(scene, depth = 100) {
  const c = scene.add.container(0, 0).setDepth(depth);
  const dim = scene.add.rectangle(W / 2, H / 2, W, H, 0x10200a, 0.6).setInteractive();
  c.add(dim);
  return c;
}

export function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
