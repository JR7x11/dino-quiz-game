// Drawing helpers for collectible badges, trophy cups and statue stands.
// Uses Sutton's art when it's loaded (keys col_<id>, trophy_cup, statue_stand, shelf_plank),
// otherwise a simple stand-in so everything works before the art arrives.
import { RARITY } from './data/collectibles.js';
import { txt } from './ui.js';

const GRAY = 0x8f9488;

// A round badge with the collectible inside. owned=false shows a gray silhouette.
export function collectibleBadge(scene, x, y, size, item, owned) {
  const c = scene.add.container(x, y);
  const g = scene.add.graphics();
  g.fillStyle(owned ? 0xfff3c4 : 0xe4e6df, 1); g.fillCircle(0, 0, size / 2);
  g.lineStyle(4, owned ? 0xb37a00 : 0xa4a89d, 1); g.strokeCircle(0, 0, size / 2);
  c.add(g);
  const key = `col_${item.id}`;
  if (scene.textures.exists(key)) {
    const img = scene.add.image(0, 0, key);
    img.setScale((size * 0.78) / Math.max(img.width, img.height));
    c.add(img);
    if (!owned) {   // locked: a dim gray shape with a question mark
      img.setTint(GRAY); img.setAlpha(0.3);
      c.add(txt(scene, 0, 0, '?', Math.round(size * 0.42), { fontStyle: 'bold', color: '#6b7064' }).setOrigin(0.5));
    }
  } else {
    const t = scene.add.text(0, 2, item.emoji, { fontSize: `${Math.round(size * 0.5)}px` }).setOrigin(0.5);
    if (!owned) t.setAlpha(0.22);
    c.add(t);
    if (!owned) c.add(txt(scene, 0, 0, '?', Math.round(size * 0.42), { fontStyle: 'bold', color: '#6b7064' }).setOrigin(0.5));
  }
  return c;
}

// A trophy cup in its rarity color.
export function trophyCup(scene, x, y, size, trophy, owned = true) {
  const c = scene.add.container(x, y);
  const col = owned ? RARITY[trophy.rarity].color : 0xb7bab0;
  if (scene.textures.exists('trophy_cup')) {
    const img = scene.add.image(0, 0, 'trophy_cup');
    img.setScale(size / Math.max(img.width, img.height)).setTint(col);
    if (!owned) img.setAlpha(0.5);
    c.add(img);
  } else {
    const g = scene.add.graphics();
    const s = size / 100;
    g.fillStyle(col, 1);
    g.fillRoundedRect(-30 * s, -42 * s, 60 * s, 46 * s, { tl: 4 * s, tr: 4 * s, bl: 26 * s, br: 26 * s }); // bowl
    g.lineStyle(7 * s, col, 1);
    g.strokeCircle(-32 * s, -24 * s, 13 * s); g.strokeCircle(32 * s, -24 * s, 13 * s);                     // handles
    g.fillRect(-6 * s, 2 * s, 12 * s, 20 * s);                                                            // stem
    g.fillRoundedRect(-24 * s, 20 * s, 48 * s, 12 * s, 3 * s);                                           // base
    g.fillStyle(0x5a3a1a, 1); g.fillRoundedRect(-30 * s, 32 * s, 60 * s, 14 * s, 3 * s);                  // plinth
    if (owned) { g.fillStyle(0xffffff, 0.45); g.fillEllipse(-12 * s, -28 * s, 10 * s, 22 * s); }       // shine
    g.lineStyle(2, 0x23331c, 0.6); g.strokeRoundedRect(-30 * s, -42 * s, 60 * s, 46 * s, { tl: 4 * s, tr: 4 * s, bl: 26 * s, br: 26 * s });
    c.add(g);
  }
  return c;
}

// The pedestal a dino statue stands on, with its name on the plaque.
// (x, bottomY) = where the pedestal sits on the shelf. Returns the height where the dino's feet go.
export function statueStand(scene, x, bottomY, w, name, empty = false) {
  const c = scene.add.container(x, bottomY);
  let h, feet, plaqueY, plaqueW;
  if (scene.textures.exists('statue_stand')) {
    const img = scene.add.image(0, 0, 'statue_stand').setOrigin(0.5, 1);
    img.setScale(w / img.width);
    h = img.displayHeight; feet = -h * 0.88; plaqueY = -h * 0.5; plaqueW = w * 0.6;
    if (empty) img.setAlpha(0.45);
    c.add(img);
  } else {
    h = 48; feet = -h; plaqueY = -22; plaqueW = w * 0.7;
    const g = scene.add.graphics();
    g.fillStyle(0x6e4a2a, 1); g.fillRoundedRect(-w / 2, -h, w, h, 6);
    g.fillStyle(0xd9b45a, 1); g.fillRoundedRect(-plaqueW / 2, plaqueY - 12, plaqueW, 24, 5);
    c.add(g);
  }
  const size = Math.max(11, Math.min(16, Math.round(w * 0.1)));
  c.add(txt(scene, 0, plaqueY, empty ? 'Empty' : name, size, { fontStyle: 'bold', color: empty ? '#8a7350' : '#3b2410', wordWrap: { width: plaqueW } }).setOrigin(0.5));
  return { container: c, feetY: bottomY + feet, height: h };
}

// A wooden shelf board.
export function shelfPlank(scene, x, y, w) {
  if (scene.textures.exists('shelf_plank')) {
    const img = scene.add.image(x, y, 'shelf_plank').setOrigin(0.5, 0);
    img.setDisplaySize(w, 34);
    return img;
  }
  const g = scene.add.graphics();
  g.fillStyle(0x23331c, 0.2); g.fillRect(x - w / 2 + 4, y + 8, w, 26);
  g.fillStyle(0x8a5e36, 1); g.fillRect(x - w / 2, y, w, 26);
  g.fillStyle(0xa87447, 1); g.fillRect(x - w / 2, y, w, 8);
  g.lineStyle(2, 0x4a3018, 1); g.strokeRect(x - w / 2, y, w, 26);
  return g;
}

// A stone sign with carved-looking text (Sutton's stone_sign art, or a plain stand-in).
export function stoneSign(scene, x, y, w, label, size) {
  const c = scene.add.container(x, y);
  let h = Math.round(w * 0.234);
  if (scene.textures.exists('stone_sign')) {
    const img = scene.add.image(0, 0, 'stone_sign');
    h = Math.round(w * img.height / img.width);
    img.setDisplaySize(w, h);
    c.add(img);
  } else {
    const g = scene.add.graphics();
    g.fillStyle(0xc9a06a, 1); g.fillRoundedRect(-w / 2, -h / 2, w, h, 14);
    g.lineStyle(3, 0x7a5a30, 1); g.strokeRoundedRect(-w / 2, -h / 2, w, h, 14);
    c.add(g);
  }
  // light edge under dark letters = carved into the stone
  c.add(txt(scene, 0, 2, label, size, { fontStyle: 'bold', color: '#3e2610', stroke: '#e8c896', strokeThickness: 3 }).setOrigin(0.5));
  c.signH = h;
  return c;
}
