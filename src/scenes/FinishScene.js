import Phaser from 'phaser';
import { loadSave, saveGame, dinoName, isAhzir } from '../save.js';
import { buildDino, fitDino } from '../dino.js';
import { txt, button, panel, overlay } from '../ui.js';
import { W, H, CX, PORTRAIT, EXTRA } from '../layout.js';

const E = EXTRA;

// The card is what gets turned into the saveable picture.
const L = PORTRAIT ? {
  title: 50 + E / 8, card: { x: 20, y: 100 + E / 8, w: 560, h: 570 + (3 * E) / 4 }, stats: 730 + (7 * E) / 8,
  again: [165, 840 + (7 * E) / 8, 250, 80], home: [435, 840 + (7 * E) / 8, 250, 80], popup: [30, 250 + E / 2, 540, 480]
} : {
  title: 36, card: { x: 180, y: 70, w: 600, h: 380 }, stats: 480,
  again: [370, 545, 200, 60], home: [590, 545, 200, 60], popup: [130, 110, 700, 380]
};

export default class FinishScene extends Phaser.Scene {
  constructor() { super('Finish'); }

  create({ choice, correct, answered, dinoNick }) {
    const save = loadSave();
    const pct = answered ? Math.round((correct / answered) * 100) : 0;
    const record = { date: new Date().toISOString(), correct, answered, pct };
    const isBest = !save.best || pct > save.best.pct;
    save.scores = [record, ...save.scores].slice(0, 50);
    if (isBest) save.best = record;
    const name = dinoNick || dinoName(save.name);
    save.lastDino = choice;
    save.lastDinoName = name;
    saveGame(save);

    const C = L.card;
    this.add.rectangle(W / 2, H / 2, W, H, 0xbfe3f2);
    txt(this, CX, L.title, 'Meet your new dinosaur!', 36, { fontStyle: 'bold', stroke: '#ffffff', strokeThickness: 6 }).setOrigin(0.5);

    const g = this.add.graphics();
    g.fillStyle(0xffffff, 1); g.fillRoundedRect(C.x, C.y, C.w, C.h, 20);
    g.lineStyle(5, 0x23331c, 1); g.strokeRoundedRect(C.x + 2, C.y + 2, C.w - 4, C.h - 4, 20);
    const dino = buildDino(this, choice);
    fitDino(dino, C.x + 30, C.y + 20, C.w - 60, C.h - 100);
    txt(this, CX, C.y + C.h - 45, name, 40, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5);

    let line = `You got ${correct} right out of ${answered} questions (${pct}%)`;
    if (isBest && save.scores.length > 1) line += '\nNew best score!';
    txt(this, CX, L.stats, line, 24, { fontStyle: 'bold', wordWrap: { width: W - 60 } }).setOrigin(0.5);

    button(this, ...L.again, 'Play again', () => this.scene.start('Quiz'), { size: 28, fill: 0x8ee06b });
    button(this, ...L.home, 'Home', () => this.scene.start('Start'), { size: 28 });

    // Turn the card into a plain <img> under the game so it can be right-clicked > Save image.
    const area = document.getElementById('save-area');
    this.time.delayedCall(250, () => {
      this.game.renderer.snapshotArea(C.x, C.y, C.w, C.h, (img) => {
        const el = document.getElementById('finalDino');
        if (el && area) { el.src = img.src; area.hidden = false; }
      });
    });
    this.events.once('shutdown', () => { if (area) area.hidden = true; });

    if (isAhzir(save.name)) this.time.delayedCall(700, () => this.showHighScore());
  }

  showHighScore() {
    const o = overlay(this);
    const [x, y, w, h] = L.popup;
    o.add(panel(this, x, y, w, h, 0xfff3c4));
    const title = txt(this, CX, y + 80, '\u{1F3C6} HIGH SCORE! \u{1F3C6}', PORTRAIT ? 46 : 58, { fontStyle: 'bold', color: '#b34700', stroke: '#ffffff', strokeThickness: 8 }).setOrigin(0.5);
    o.add(title);
    this.tweens.add({ targets: title, scale: 1.08, yoyo: true, repeat: -1, duration: 500, ease: 'Sine.easeInOut' });
    o.add(txt(this, CX, y + h / 2 + 10, "Tell your dad you got the high score,\nand if he doesn't believe you,\ntell him to look it up!", 30, { fontStyle: 'bold', wordWrap: { width: w - 40 } }).setOrigin(0.5));
    o.add(button(this, CX, y + h - 60, 200, 60, 'Woo-hoo!', () => o.destroy(), { size: 28, fill: 0x8ee06b }));
  }
}
