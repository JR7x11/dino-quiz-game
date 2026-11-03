import Phaser from 'phaser';
import { loadSave, saveGame, dinoName } from '../save.js';
import { buildDino, fitDino } from '../dino.js';
import { txt, button, panel, overlay, FONT } from '../ui.js';

export default class StartScene extends Phaser.Scene {
  constructor() { super('Start'); }

  create() {
    this.save = loadSave();
    this.drawBackground();
    txt(this, 480, 52, 'DINO QUIZ', 64, { fontStyle: 'bold', stroke: '#ffffff', strokeThickness: 8 }).setOrigin(0.5);
    txt(this, 480, 108, 'Answer questions. Earn dino parts. Build your own dinosaur!', 22).setOrigin(0.5);

    if (this.save.name) this.showWelcome();
    else this.showNameEntry();
  }

  drawBackground() {
    const g = this.add.graphics();
    g.fillStyle(0xbfe3f2, 1); g.fillRect(0, 0, 960, 600);
    g.fillStyle(0x9ccf7c, 1); g.fillEllipse(200, 640, 900, 300); g.fillEllipse(800, 650, 900, 280);
    g.fillStyle(0x7fb85d, 1); g.fillRect(0, 560, 960, 40);
  }

  showNameEntry() {
    panel(this, 230, 160, 500, 300, 0xfffaf0);
    txt(this, 480, 205, "What's your name?", 36, { fontStyle: 'bold' }).setOrigin(0.5);

    const dom = this.add.dom(480, 290).createFromHTML(
      `<input type="text" id="nameInput" maxlength="12" placeholder="Your name" autocomplete="off"
        style="font-size:32px;padding:10px 16px;border-radius:14px;border:3px solid #23331c;width:300px;
        text-align:center;font-family:${FONT.replace(/"/g, "'")};outline:none;">`
    );
    const input = dom.getChildByID('nameInput');
    input.addEventListener('input', () => { input.value = input.value.replace(/[^A-Za-z]/g, '').slice(0, 12); });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
    setTimeout(() => input.focus(), 60);

    const hint = txt(this, 480, 345, '', 20, { color: '#b3261e' }).setOrigin(0.5);
    const submit = () => {
      const name = input.value.trim();
      if (!name) { hint.setText('Type your name first!'); return; }
      this.save.name = name.charAt(0).toUpperCase() + name.slice(1);
      saveGame(this.save);
      this.scene.restart();
    };
    button(this, 480, 405, 220, 64, "Let's go!", submit, { size: 30 });
  }

  showWelcome() {
    const { name, lastDino } = this.save;
    panel(this, 230, 140, 500, 330, 0xfffaf0);
    txt(this, 480, 178, `Welcome back, ${name}!`, 34, { fontStyle: 'bold' }).setOrigin(0.5);

    if (lastDino) {
      const d = buildDino(this, lastDino);
      fitDino(d, 270, 210, 420, 200);
      txt(this, 480, 430, `Your last dino: ${dinoName(name)}`, 22).setOrigin(0.5);
    } else {
      const d = buildDino(this, null);
      fitDino(d, 270, 220, 420, 170, 0.8);
      txt(this, 480, 430, 'Your first dino is waiting to hatch!', 22).setOrigin(0.5);
    }

    button(this, 480, 515, 240, 70, 'PLAY!', () => this.scene.start('Quiz'), { size: 34, fill: 0x8ee06b });
    button(this, 170, 515, 210, 54, 'Score History', () => this.showHistory(), { size: 22, fill: 0xffffff });
    button(this, 790, 515, 210, 54, 'Change name', () => {
      this.save.name = null;
      saveGame(this.save);
      this.scene.restart();
    }, { size: 22, fill: 0xffffff });
  }

  showHistory() {
    const o = overlay(this);
    o.add(panel(this, 180, 50, 600, 500, 0xfffaf0));
    o.add(txt(this, 480, 92, 'Score History', 36, { fontStyle: 'bold' }).setOrigin(0.5));

    const { scores, best } = this.save;
    if (!scores.length) {
      o.add(txt(this, 480, 280, 'No games yet. Go play one!', 26).setOrigin(0.5));
    } else {
      o.add(txt(this, 480, 135, `Best ever: ${best.pct}%  (${best.correct} right out of ${best.answered})`, 22, { color: '#2e6b1f', fontStyle: 'bold' }).setOrigin(0.5));
      scores.slice(0, 10).forEach((s, i) => {
        const day = new Date(s.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
        const trophy = best && s.date === best.date ? '  \u{1F3C6}' : '';
        o.add(txt(this, 230, 170 + i * 30, `${day}:  ${s.correct} right out of ${s.answered}  (${s.pct}%)${trophy}`, 20, { align: 'left' }));
      });
    }
    o.add(button(this, 480, 505, 180, 54, 'Close', () => o.destroy(), { size: 24 }));
  }
}
