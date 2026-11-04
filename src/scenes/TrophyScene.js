// The Trophy Room: the dino shelf (statues of finished dinos), collectible sets,
// the player's 5 rarest trophies, and the save code. Scrolls up and down.
import Phaser from 'phaser';
import { loadSave, saveGame } from '../save.js';
import { buildDino, fitDino } from '../dino.js';
import { txt, button, panel, FONT } from '../ui.js';
import { W, H, CX, PORTRAIT } from '../layout.js';
import { SETS, COLLECTIBLES, TROPHIES, RARITY, SHELF_SIZE } from '../data/collectibles.js';
import { setProgress, topTrophies, earnedTrophies, makeSaveCode, applySaveCode, formatCode } from '../progress.js';
import { collectibleBadge, trophyCup, statueStand, shelfPlank, stoneSign } from '../trophyArt.js';

// The rebuilt shelf cabinet (see art/cabinet_*.webp): image size, the 3 shelf surfaces, and the inside walls.
const CABINET = PORTRAIT ? { w: 1120, h: 1546, floors: [461, 955, 1453], inner: [121, 999] }
                         : { w: 1800, h: 1683, floors: [474, 1001, 1533], inner: [195, 1605] };

const HEADER = PORTRAIT ? 96 : 72;
const POP = PORTRAIT ? [30, 150, 540, 640] : [170, 50, 620, 500];

export default class TrophyScene extends Phaser.Scene {
  constructor() { super('Trophy'); }

  create(data = {}) {
    this.save = loadSave();
    this.back = data.back || 'Start';
    this.dragged = false;
    this.popupOpen = false;
    const cam = this.cameras.main;
    cam.setBackgroundColor('#4a3424');
    if (this.textures.exists('trophy_bg')) {   // the cave room stays put while the shelves scroll
      const bg = this.add.image(W / 2, H / 2, 'trophy_bg').setScrollFactor(0).setDepth(-10);
      bg.setScale(Math.max(W / bg.width, H / bg.height));
      this.add.rectangle(W / 2, H / 2, W, H, 0x1a0f05, 0.25).setScrollFactor(0).setDepth(-9);
    }

    let y = HEADER + 20;
    y = this.drawShelves(y);
    y = this.drawCollectibles(y + 30);
    y = this.drawTrophies(y + 30);
    y = this.drawSaveCode(y + 30);
    this.contentH = Math.max(H, y + 40);
    cam.setBounds(0, 0, W, this.contentH);
    if (data.scrollTo === 'top') cam.scrollY = 0;

    this.drawHeader();
    this.setupScrolling();
  }

  // ---------- layout pieces ----------
  drawHeader() {
    const g = this.add.graphics().setScrollFactor(0).setDepth(50);
    g.fillStyle(0x6e4a2a, 1); g.fillRect(0, 0, W, HEADER);
    g.fillStyle(0x8a5e36, 1); g.fillRect(0, HEADER - 10, W, 10);
    txt(this, CX, HEADER / 2 - 4, '\u{1F3C6} Trophy Room', PORTRAIT ? 38 : 34, { fontStyle: 'bold', color: '#fff3c4' })
      .setOrigin(0.5).setScrollFactor(0).setDepth(51);
    button(this, PORTRAIT ? 70 : 80, HEADER / 2 - 4, PORTRAIT ? 110 : 130, 50, '⬅ Back', () => this.scene.start(this.back), { size: 22, fill: 0xfff3c4 })
      .setScrollFactor(0).setDepth(52);
  }

  section(y, title, sub) {
    const w = PORTRAIT ? 420 : 460;
    const sign = stoneSign(this, CX, y + w * 0.117, w, title, PORTRAIT ? 30 : 32);
    let yy = y + sign.signH + 8;
    if (sub) { txt(this, CX, yy, sub, 19, { color: '#fff3c4', fontStyle: 'bold', stroke: '#2a1a0a', strokeThickness: 4, wordWrap: { width: W - 60 } }).setOrigin(0.5, 0); yy += 46; }
    return yy + 6;
  }

  // Wrap click handlers so a scroll-drag doesn't count as a tap.
  tap(fn) { return () => { if (!this.dragged && !this.popupOpen) fn(); }; }

  drawShelves(y) {
    const shelf = this.save.shelf;
    y = this.section(y, 'My Dino Shelf', `${shelf.length} of ${SHELF_SIZE} spots filled`);
    const pending = this.save.pendingDino;
    if (pending) {
      panel(this, 30, y, W - 60, 120, 0xfff3c4, 16);
      txt(this, CX, y + 34, `Your shelf is full! Tap a statue to swap in\n"${pending.name}", or skip it.`, 21, { fontStyle: 'bold', wordWrap: { width: W - 100 } }).setOrigin(0.5);
      button(this, CX, y + 90, 160, 40, 'Skip it', this.tap(() => { this.save.pendingDino = null; saveGame(this.save); this.scene.restart(); }), { size: 19, fill: 0xffffff });
      y += 140;
    }
    const cols = 3;
    const cw = PORTRAIT ? W - 40 : 900, k = cw / CABINET.w, cx0 = CX - cw / 2;
    let floors, innerL, innerR;
    if (this.textures.exists('dino_cabinet')) {
      this.add.image(CX, y, 'dino_cabinet').setOrigin(0.5, 0).setDisplaySize(cw, CABINET.h * k);
      floors = CABINET.floors.map((f) => y + f * k);
      innerL = cx0 + CABINET.inner[0] * k; innerR = cx0 + CABINET.inner[1] * k;
    } else {
      floors = [0, 1, 2].map((r) => y + 210 + r * 230);
      floors.forEach((f) => shelfPlank(this, CX, f, W - 24));
      innerL = 20; innerR = W - 20;
    }
    const slotW = (innerR - innerL) / cols;
    const pedW = Math.min(170, slotW * 0.8);
    for (let i = 0; i < SHELF_SIZE; i++) {
      const col = i % cols, row = Math.floor(i / cols);
      const x = innerL + slotW * (col + 0.5), floor = floors[row];
      const rowTop = row === 0 ? y + 40 * k : floors[row - 1] + 70 * k;
      const entry = shelf[i];
      const stand = statueStand(this, x, floor, pedW, entry ? entry.name : '', !entry);
      if (entry) {
        const d = buildDino(this, entry.choice);
        fitDino(d, x - slotW / 2 + 4, rowTop, slotW - 8, stand.feetY - rowTop);
        const b = d.getBounds(); d.y += stand.feetY - b.bottom + 4;   // stand it on the pedestal
        const hit = this.add.zone(x, (rowTop + floor) / 2, slotW, floor - rowTop).setInteractive({ useHandCursor: true });
        hit.on('pointerup', this.tap(() => (pending ? this.swapStatue(i) : this.showStatue(i))));
      }
    }
    return floors[floors.length - 1] + 90 * k + 10;
  }

  drawCollectibles(y) {
    const total = COLLECTIBLES.length, have = COLLECTIBLES.filter((c) => this.save.collected[c.id]).length;
    y = this.section(y, 'Collectibles', `${have} of ${total} found. Finish a set to unlock a new dino color!`);
    const cols = PORTRAIT ? 3 : 6, size = PORTRAIT ? 104 : 96, cellW = (W - 60) / cols, cellH = size + 62;
    for (const set of SETS) {
      const items = COLLECTIBLES.filter((c) => c.set === set.id);
      const prog = setProgress(this.save, set.id);
      const rows = Math.ceil(items.length / cols);
      const h = 96 + rows * cellH;
      y += 34;   // room for the sign above the panel
      panel(this, 30, y, W - 60, h, 0xfffaf0, 18);
      stoneSign(this, CX, y, PORTRAIT ? 330 : 360, `${set.name}  ${prog.have}/${prog.total}`, PORTRAIT ? 23 : 25);
      const done = prog.have === prog.total;
      const reward = done ? `⭐ Unlocked: ${set.reward.name} dino color!` : `${set.how}. Finish it for: ${set.reward.name} color`;
      txt(this, CX, y + 46, reward, 16, { color: done ? '#2e6b1f' : '#5a3a1a', fontStyle: done ? 'bold' : 'normal', wordWrap: { width: W - 100 } }).setOrigin(0.5, 0);
      if (done) this.add.circle(30 + (W - 60) - 24, y + 24, 13, set.reward.hex).setStrokeStyle(3, 0x23331c);
      items.forEach((item, i) => {
        const cx = 30 + cellW * (i % cols) + cellW / 2, cy = y + 96 + Math.floor(i / cols) * cellH + size / 2;
        const count = this.save.collected[item.id] || 0;
        const badge = collectibleBadge(this, cx, cy, size, item, count > 0);
        txt(this, cx, cy + size / 2 + 6, count ? item.name : '???', 15, { fontStyle: 'bold', wordWrap: { width: cellW - 8 } }).setOrigin(0.5, 0);
        if (count > 1) {
          this.add.circle(cx + size / 2 - 10, cy - size / 2 + 12, 17, 0xff7a00).setStrokeStyle(2, 0xffffff);
          txt(this, cx + size / 2 - 10, cy - size / 2 + 12, `×${count}`, 15, { fontStyle: 'bold', color: '#ffffff' }).setOrigin(0.5);
        }
        badge.setSize(size, size).setInteractive({ useHandCursor: true });
        badge.on('pointerup', this.tap(() => this.showCollectible(item)));
      });
      y += h + 18;
    }
    return y;
  }

  drawTrophies(y) {
    const earned = earnedTrophies(this.save);
    y = this.section(y, 'My Rarest Trophies', `${earned.length} of ${TROPHIES.length} trophies earned`);
    const top = topTrophies(this.save, 5);
    const n = 5, cell = (W - 60) / n, size = PORTRAIT ? 78 : 96;
    panel(this, 30, y, W - 60, size + 110, 0xfffaf0, 18);
    for (let i = 0; i < n; i++) {
      const cx = 30 + cell * i + cell / 2, cy = y + 22 + size / 2;
      const t = top[i];
      if (t) {
        const cup = trophyCup(this, cx, cy, size, t, true);
        txt(this, cx, cy + size / 2 + 8, t.name, 14, { fontStyle: 'bold', wordWrap: { width: cell - 6 } }).setOrigin(0.5, 0);
        cup.setSize(size, size).setInteractive({ useHandCursor: true }).on('pointerup', this.tap(() => this.showTrophy(t, true)));
      } else {
        const g = this.add.graphics(); g.lineStyle(3, 0xd2c3a3, 1); g.strokeCircle(cx, cy, size / 2 - 6);
        txt(this, cx, cy, '?', 30, { color: '#c4b48e', fontStyle: 'bold' }).setOrigin(0.5);
      }
    }
    button(this, CX, y + size + 140, 280, 54, `See all trophies`, this.tap(() => this.showAllTrophies()), { size: 22, fill: 0xffc93c });
    return y + size + 170;
  }

  drawSaveCode(y) {
    y = this.section(y, 'Save Code', 'Get a Save Code to bring your collectibles, trophies and stats to another device. (Your dino shelf stays on this one.)');
    button(this, PORTRAIT ? 165 : CX - 150, y + 40, PORTRAIT ? 250 : 270, 64, 'Get my Save Code', this.tap(() => this.showCode()), { size: 22, fill: 0x8ee06b });
    button(this, PORTRAIT ? 435 : CX + 150, y + 40, PORTRAIT ? 250 : 270, 64, 'Enter a Code', this.tap(() => this.enterCode()), { size: 22, fill: 0xffffff });
    return y + 90;
  }

  // ---------- scrolling ----------
  setupScrolling() {
    const cam = this.cameras.main;
    let lastY = 0, startY = 0, down = false;
    this.input.on('pointerdown', (p) => { down = true; lastY = startY = p.y; this.dragged = false; });
    this.input.on('pointermove', (p) => {
      if (!down || this.popupOpen) return;
      if (Math.abs(p.y - startY) > 10) this.dragged = true;
      if (this.dragged) cam.scrollY = Phaser.Math.Clamp(cam.scrollY - (p.y - lastY), 0, this.contentH - H);
      lastY = p.y;
    });
    this.input.on('pointerup', () => { down = false; this.time.delayedCall(0, () => { this.dragged = false; }); });
    this.input.on('wheel', (p, objs, dx, dy) => {
      if (!this.popupOpen) cam.scrollY = Phaser.Math.Clamp(cam.scrollY + dy, 0, this.contentH - H);
    });
  }

  // Pop-ups open at the top of the camera view: remember where we were and come back after.
  openPopup(build) {
    const cam = this.cameras.main;
    const keep = cam.scrollY;
    this.popupOpen = true;
    cam.scrollY = 0;
    const o = this.add.container(0, 0).setDepth(100);
    const dim = this.add.rectangle(W / 2, H / 2, W, Math.max(H, this.contentH), 0x10200a, 0.6).setInteractive();
    o.add(dim);
    const [x, y, w, h] = POP;
    o.add(panel(this, x, y, w, h, 0xfffaf0));
    const close = () => { o.destroy(); this.popupOpen = false; cam.scrollY = keep; };
    build(o, { x, y, w, h, close });
    return o;
  }

  showStatue(i) {
    const entry = this.save.shelf[i];
    this.openPopup((o, { x, y, w, h, close }) => {
      o.add(txt(this, CX, y + 40, entry.name, 36, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5));
      const d = buildDino(this, entry.choice); fitDino(d, x + 30, y + 80, w - 60, h - 240); o.add(d);
      o.add(button(this, CX - 130, y + h - 60, 220, 60, 'Take it off', () => {
        this.save.shelf.splice(i, 1); saveGame(this.save); close(); this.scene.restart();
      }, { size: 22, fill: 0xffffff }));
      o.add(button(this, CX + 130, y + h - 60, 220, 60, 'Close', close, { size: 24, fill: 0x8ee06b }));
    });
  }

  swapStatue(i) {
    const old = this.save.shelf[i];
    this.openPopup((o, { y, h, close }) => {
      o.add(txt(this, CX, y + 120, `Swap "${old.name}" for\n"${this.save.pendingDino.name}"?`, 30, { fontStyle: 'bold', wordWrap: { width: POP[2] - 60 } }).setOrigin(0.5));
      o.add(txt(this, CX, y + 230, `"${old.name}" will leave the shelf.`, 22).setOrigin(0.5));
      o.add(button(this, CX - 130, y + h - 60, 220, 60, 'Yes, swap', () => {
        this.save.shelf[i] = this.save.pendingDino; this.save.pendingDino = null; saveGame(this.save); close(); this.scene.restart();
      }, { size: 24, fill: 0x8ee06b }));
      o.add(button(this, CX + 130, y + h - 60, 220, 60, 'No', close, { size: 24, fill: 0xffffff }));
    });
  }

  showCollectible(item) {
    const count = this.save.collected[item.id] || 0;
    const set = SETS.find((s) => s.id === item.set);
    this.openPopup((o, { x, y, w, h, close }) => {
      o.add(collectibleBadge(this, CX, y + 130, 180, item, count > 0));
      o.add(txt(this, CX, y + 245, count ? item.name : 'Not found yet', 32, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5));
      o.add(txt(this, CX, y + 285, set.name + (count > 1 ? `  •  You have ${count}` : ''), 20, { color: '#5a3a1a' }).setOrigin(0.5));
      o.add(txt(this, CX, y + 330, count ? item.about : `How to get it: ${item.hint}`, 24, { wordWrap: { width: w - 60 } }).setOrigin(0.5, 0));
      o.add(button(this, CX, y + h - 55, 200, 60, 'Close', close, { size: 26, fill: 0x8ee06b }));
    });
  }

  showTrophy(t, owned) {
    this.openPopup((o, { y, w, h, close }) => {
      o.add(trophyCup(this, CX, y + 130, 170, t, owned));
      o.add(txt(this, CX, y + 245, t.name, 34, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5));
      o.add(txt(this, CX, y + 290, `${RARITY[t.rarity].name} trophy`, 22, { fontStyle: 'bold', color: '#' + RARITY[t.rarity].color.toString(16).padStart(6, '0') }).setOrigin(0.5));
      o.add(txt(this, CX, y + 340, owned ? `You earned it: ${t.hint.toLowerCase()}!` : `How to get it: ${t.hint}`, 24, { wordWrap: { width: w - 60 } }).setOrigin(0.5, 0));
      o.add(button(this, CX, y + h - 55, 200, 60, 'Close', close, { size: 26, fill: 0x8ee06b }));
    });
  }

  showAllTrophies() {
    const earned = new Set(earnedTrophies(this.save).map((t) => t.id));
    this.openPopup((o, { x, y, w, h, close }) => {
      o.add(txt(this, CX, y + 34, 'All Trophies', 32, { fontStyle: 'bold' }).setOrigin(0.5));
      const list = [...TROPHIES].sort((a, b) => RARITY[b.rarity].rank - RARITY[a.rarity].rank);
      const rowH = (h - 150) / list.length;
      list.forEach((t, i) => {
        const ry = y + 75 + i * rowH + rowH / 2, own = earned.has(t.id);
        o.add(trophyCup(this, x + 45, ry, Math.min(rowH - 4, 40), t, own));
        o.add(txt(this, x + 80, ry, `${t.name}${own ? ' ✔' : ''}`, 18, { fontStyle: 'bold', color: own ? '#23331c' : '#8a8a80' }).setOrigin(0, 0.5));
        o.add(txt(this, x + w - 20, ry, own ? RARITY[t.rarity].name : t.hint, 14, { color: own ? '#5a3a1a' : '#8a8a80', align: 'right', wordWrap: { width: w * 0.45 } }).setOrigin(1, 0.5));
      });
      o.add(button(this, CX, y + h - 45, 200, 56, 'Close', close, { size: 24, fill: 0x8ee06b }));
    });
  }

  showCode() {
    const code = makeSaveCode(this.save);
    this.openPopup((o, { y, w, h, close }) => {
      o.add(txt(this, CX, y + 45, 'Your Save Code', 34, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5));
      o.add(txt(this, CX, y + 105, '\u{1F4F8} Take a screenshot of this!', 24, { fontStyle: 'bold' }).setOrigin(0.5));
      const groups = code.split('-');
      const lines = [groups.slice(0, 4).join('-'), groups.slice(4).join('-')];
      o.add(txt(this, CX, y + (PORTRAIT ? 215 : 210), lines.join('\n'), 34,
        { fontFamily: 'Courier New, monospace', fontStyle: 'bold', backgroundColor: '#ffffff', padding: { x: 16, y: 12 }, lineSpacing: 10 }).setOrigin(0.5));
      o.add(txt(this, CX, y + (PORTRAIT ? 330 : 320), 'On another device, open the Trophy Room and tap "Enter a Code" to get your collectibles, trophies and stats back.', 20, { wordWrap: { width: w - 60 } }).setOrigin(0.5, 0));
      o.add(button(this, CX, y + h - 55, 200, 60, 'Done', close, { size: 26, fill: 0x8ee06b }));
    });
  }

  enterCode() {
    this.openPopup((o, { y, w, h, close }) => {
      o.add(txt(this, CX, y + 45, 'Enter a Save Code', 34, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5));
      o.add(txt(this, CX, y + 100, "Type it in. Dashes are added for you, and capitals don't matter.", 20, { wordWrap: { width: w - 60 } }).setOrigin(0.5));
      const dom = this.add.dom(CX, y + 200).createFromHTML(
        `<input type="text" id="codeInput" maxlength="39" autocomplete="off" autocapitalize="characters" spellcheck="false"
          style="font-size:${PORTRAIT ? 22 : 24}px;padding:10px 12px;border-radius:12px;border:3px solid #23331c;width:${PORTRAIT ? 440 : 500}px;
          text-align:center;font-family:'Courier New',monospace;outline:none;">`);
      const input = dom.getChildByID('codeInput');
      input.addEventListener('input', () => { input.value = formatCode(input.value).slice(0, 39); });
      const msg = txt(this, CX, y + 275, '', 22, { fontStyle: 'bold', wordWrap: { width: w - 60 } }).setOrigin(0.5);
      o.add(msg);
      const finish = () => { dom.destroy(); close(); };
      o.add(button(this, CX - 120, y + h - 60, 210, 60, 'Restore', () => {
        if (applySaveCode(this.save, input.value)) {
          saveGame(this.save);
          dom.destroy(); this.popupOpen = false; this.scene.restart();
        } else msg.setText("Hmm, that code didn't work. Check it and try again!").setColor('#b3261e');
      }, { size: 24, fill: 0x8ee06b }));
      o.add(button(this, CX + 120, y + h - 60, 210, 60, 'Cancel', finish, { size: 24, fill: 0xffffff }));
    });
  }
}
