import Phaser from 'phaser';
import { loadLazyArtInBackground } from '../lazyArt.js';
import { loadSave, saveGame, dinoName } from '../save.js';
import { buildDino, fitDino } from '../dino.js';
import { txt, button, panel, overlay, FONT } from '../ui.js';
import { isCleanName } from '../wordFilter.js';
import { W, H, CX, PORTRAIT, EXTRA } from '../layout.js';

const D = EXTRA / 2; // shift down to center on tall phones

// Positions for the two screen shapes.
const L = PORTRAIT ? {
  title: [CX, 80 + D, 74], sub: [CX, 158 + D, 24],
  panel: [30, 210 + D, 540, 600],
  nameQ: 270 + D, nameInput: 380 + D, nameHint: 450 + D, nameBtn: 540 + D,
  welcome: 260 + D, dinoBox: [60, 300 + D, 480, 340], dinoLabel: 680 + D,
  play: [CX, 735 + D, 300, 80, 40], trophy: [CX, 858 + D, 300, 64],
  hist: [165, 942 + D, 250, 54], change: [435, 942 + D, 250, 54],
  histPanel: [30, 60 + D, 540, 880], histRowY: 200 + D, histRowGap: 52, histSize: 20, histClose: 870 + D
} : {
  title: [CX, 52, 64], sub: [CX, 108, 22],
  panel: [230, 140, 500, 330],
  nameQ: 205, nameInput: 290, nameHint: 345, nameBtn: 405,
  welcome: 178, dinoBox: [270, 210, 420, 200], dinoLabel: 430,
  play: [CX, 510, 240, 70, 34], trophy: [175, 510, 240, 62],
  hist: [785, 510, 240, 62], change: [CX, 572, 200, 40],
  histPanel: [180, 50, 600, 500], histRowY: 170, histRowGap: 30, histSize: 20, histClose: 505
};

export default class StartScene extends Phaser.Scene {
  constructor() { super('Start'); }

  create() {
    this.time.delayedCall(800, () => loadLazyArtInBackground(this));   // Trophy Room art, quietly in the background
    this.save = loadSave();
    this.drawBackground();
    txt(this, L.title[0], L.title[1], 'DINO MASH', L.title[2], { fontStyle: 'bold', stroke: '#ffffff', strokeThickness: 8 }).setOrigin(0.5);
    txt(this, L.sub[0], L.sub[1], 'Answer questions. Earn dino parts.\nMash up your own dinosaur!', L.sub[2]).setOrigin(0.5);

    if (this.save.name) this.showWelcome();
    else this.showNameEntry();
  }

  drawBackground() {
    const g = this.add.graphics();
    g.fillStyle(0xbfe3f2, 1); g.fillRect(0, 0, W, H);
    g.fillStyle(0x9ccf7c, 1); g.fillEllipse(W * 0.2, H + 40, W * 0.95, 300); g.fillEllipse(W * 0.83, H + 50, W * 0.95, 280);
    g.fillStyle(0x7fb85d, 1); g.fillRect(0, H - 40, W, 40);
  }

  showNameEntry() {
    panel(this, ...L.panel, 0xfffaf0);
    txt(this, CX, L.nameQ, "What's your name?", 36, { fontStyle: 'bold' }).setOrigin(0.5);

    const dom = this.add.dom(CX, L.nameInput).createFromHTML(
      `<input type="text" id="nameInput" maxlength="12" placeholder="Your name" autocomplete="off"
        style="font-size:32px;padding:10px 16px;border-radius:14px;border:3px solid #23331c;width:300px;
        text-align:center;font-family:${FONT.replace(/"/g, "'")};outline:none;">`
    );
    const input = dom.getChildByID('nameInput');
    input.addEventListener('input', () => { input.value = input.value.replace(/[^A-Za-z]/g, '').slice(0, 12); });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
    if (!PORTRAIT) setTimeout(() => input.focus(), 60); // on phones, don't pop the keyboard up uninvited

    const hint = txt(this, CX, L.nameHint, '', 22, { color: '#b3261e' }).setOrigin(0.5);
    const submit = () => {
      const name = input.value.trim();
      if (!name) { hint.setText('Type your name first!'); return; }
      if (!isCleanName(name)) { hint.setText("Hmm, let's try a different name!"); return; }
      this.save.name = name.charAt(0).toUpperCase() + name.slice(1);
      saveGame(this.save);
      this.scene.restart();
    };
    button(this, CX, L.nameBtn, 240, 70, "Let's go!", submit, { size: 32 });
  }

  showWelcome() {
    const { name, lastDino } = this.save;
    panel(this, ...L.panel, 0xfffaf0);
    txt(this, CX, L.welcome, `Welcome back, ${name}!`, 34, { fontStyle: 'bold' }).setOrigin(0.5);

    const d = buildDino(this, lastDino || null);
    fitDino(d, ...L.dinoBox, lastDino ? 1 : 0.8);
    txt(this, CX, L.dinoLabel, lastDino ? `Your last dino: ${this.save.lastDinoName || dinoName(name)}` : 'Your first dino is waiting to hatch!', 22).setOrigin(0.5);

    const [px, py, pw, ph, ps] = L.play;
    button(this, px, py, pw, ph, 'PLAY!', () => this.scene.start('Quiz'), { size: ps, fill: 0x8ee06b });
    button(this, ...L.trophy, '\u{1F3C6} Trophy Room', () => this.scene.start('Trophy', { back: 'Start' }), { size: PORTRAIT ? 26 : 24, fill: 0xffc93c });
    button(this, ...L.hist, 'Score History', () => this.showHistory(), { size: 22, fill: 0xffffff });
    button(this, ...L.change, 'Change name', () => {
      this.save.name = null;
      saveGame(this.save);
      this.scene.restart();
    }, { size: PORTRAIT ? 22 : 18, fill: 0xffffff });
  }

  showHistory() {
    const o = overlay(this);
    const [x, y, w] = L.histPanel;
    o.add(panel(this, ...L.histPanel, 0xfffaf0));
    o.add(txt(this, CX, y + 42, 'Score History', 36, { fontStyle: 'bold' }).setOrigin(0.5));

    const { scores, best } = this.save;
    if (!scores.length) {
      o.add(txt(this, CX, y + 220, 'No games yet. Go play one!', 26).setOrigin(0.5));
    } else {
      o.add(txt(this, CX, y + 88, `Best ever: ${best.pct}%  (${best.correct} right out of ${best.answered})`, 22, { color: '#2e6b1f', fontStyle: 'bold', wordWrap: { width: w - 40 } }).setOrigin(0.5));
      scores.slice(0, PORTRAIT ? 12 : 10).forEach((s, i) => {
        const day = new Date(s.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
        const trophy = best && s.date === best.date ? '  \u{1F3C6}' : '';
        const line = PORTRAIT ? `${day}\n${s.correct} of ${s.answered} right (${s.pct}%)${trophy}` : `${day}:  ${s.correct} right out of ${s.answered}  (${s.pct}%)${trophy}`;
        o.add(txt(this, x + 40, L.histRowY + i * L.histRowGap, line, L.histSize, { align: 'left' }));
      });
    }
    o.add(button(this, CX, L.histClose, 200, 60, 'Close', () => o.destroy(), { size: 26 }));
  }
}
