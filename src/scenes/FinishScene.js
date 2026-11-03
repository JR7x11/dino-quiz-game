import Phaser from 'phaser';
import { loadSave, saveGame, dinoName, isAhzir } from '../save.js';
import { buildDino, fitDino } from '../dino.js';
import { txt, button, panel, overlay } from '../ui.js';

const CARD = { x: 180, y: 70, w: 600, h: 380 };

export default class FinishScene extends Phaser.Scene {
  constructor() { super('Finish'); }

  create({ choice, correct, answered }) {
    const save = loadSave();
    const pct = answered ? Math.round((correct / answered) * 100) : 0;
    const record = { date: new Date().toISOString(), correct, answered, pct };
    const isBest = !save.best || pct > save.best.pct;
    save.scores = [record, ...save.scores].slice(0, 50);
    if (isBest) save.best = record;
    save.lastDino = choice;
    saveGame(save);

    this.add.rectangle(480, 300, 960, 600, 0xbfe3f2);
    txt(this, 480, 36, 'Meet your new dinosaur!', 36, { fontStyle: 'bold', stroke: '#ffffff', strokeThickness: 6 }).setOrigin(0.5);

    // The card below is what gets turned into the saveable image.
    const g = this.add.graphics();
    g.fillStyle(0xffffff, 1); g.fillRoundedRect(CARD.x, CARD.y, CARD.w, CARD.h, 20);
    g.lineStyle(5, 0x23331c, 1); g.strokeRoundedRect(CARD.x + 2, CARD.y + 2, CARD.w - 4, CARD.h - 4, 20);
    const dino = buildDino(this, choice);
    fitDino(dino, CARD.x + 30, CARD.y + 20, CARD.w - 60, CARD.h - 100);
    txt(this, 480, CARD.y + CARD.h - 45, dinoName(save.name), 40, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5);

    let line = `You got ${correct} right out of ${answered} questions (${pct}%)`;
    if (isBest && save.scores.length > 1) line += '  New best score!';
    txt(this, 480, 480, line, 24, { fontStyle: 'bold' }).setOrigin(0.5);

    button(this, 370, 545, 200, 60, 'Play again', () => this.scene.start('Quiz'), { size: 26, fill: 0x8ee06b });
    button(this, 590, 545, 200, 60, 'Home', () => this.scene.start('Start'), { size: 26 });

    // Turn the card into a plain <img> under the game so it can be right-clicked > Save image.
    const area = document.getElementById('save-area');
    this.time.delayedCall(250, () => {
      this.game.renderer.snapshotArea(CARD.x, CARD.y, CARD.w, CARD.h, (img) => {
        const el = document.getElementById('finalDino');
        if (el && area) { el.src = img.src; area.hidden = false; }
      });
    });
    this.events.once('shutdown', () => { if (area) area.hidden = true; });

    if (isAhzir(save.name)) this.time.delayedCall(700, () => this.showHighScore());
  }

  showHighScore() {
    const o = overlay(this);
    o.add(panel(this, 130, 110, 700, 380, 0xfff3c4));
    const title = txt(this, 480, 190, '\u{1F3C6} HIGH SCORE! \u{1F3C6}', 58, { fontStyle: 'bold', color: '#b34700', stroke: '#ffffff', strokeThickness: 8 }).setOrigin(0.5);
    o.add(title);
    this.tweens.add({ targets: title, scale: 1.08, yoyo: true, repeat: -1, duration: 500, ease: 'Sine.easeInOut' });
    o.add(txt(this, 480, 310, "Tell your dad you got the high score,\nand if he doesn't believe you,\ntell him to look it up!", 30, { fontStyle: 'bold' }).setOrigin(0.5));
    o.add(button(this, 480, 435, 200, 60, 'Woo-hoo!', () => o.destroy(), { size: 28, fill: 0x8ee06b }));
  }
}
