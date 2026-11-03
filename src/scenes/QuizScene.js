import Phaser from 'phaser';
import { loadSave, saveGame, dinoName, isAhzir } from '../save.js';
import { QUESTIONS } from '../data/questions.js';
import { FACTS } from '../data/facts.js';
import { PART_ORDER, PART_TITLES, PART_OPTIONS, COLORS, TEXTURES, partLabel } from '../data/parts.js';
import { buildDino, fitDino, partImage } from '../dino.js';
import { txt, button, panel, overlay, shuffle, FONT } from '../ui.js';

const CORRECT_PER_PART = 3;
const CHEERS = ['Correct!', 'You got it!', 'Dino-mite!', 'Roar-some!', 'Nailed it!', 'Yes! Expert move!', 'Jurassic genius!'];

export default class QuizScene extends Phaser.Scene {
  constructor() { super('Quiz'); }

  create() {
    this.save = loadSave();
    this.choice = {};
    this.partIndex = 0;
    this.toward = 0;       // correct answers toward the next part
    this.correct = 0;
    this.answered = 0;
    this.usedFacts = new Set();
    this.factDeck = shuffle(FACTS.slice());

    this.add.rectangle(480, 300, 960, 600, 0xe9f3dc);
    this.buildLeftPanel();
    this.buildQuestionArea();

    if (isAhzir(this.save.name)) this.showAhzirWelcome(() => this.askNext());
    else this.askNext();
  }

  // ---------- layout ----------
  buildLeftPanel() {
    panel(this, 20, 20, 320, 560, 0xfffaf0);
    txt(this, 180, 50, `Your ${dinoName(this.save.name)}`, 24, { fontStyle: 'bold', wordWrap: { width: 290 } }).setOrigin(0.5);
    this.partText = txt(this, 180, 420, '', 22, { fontStyle: 'bold' }).setOrigin(0.5);
    this.eggs = [0, 1, 2].map((i) => this.add.graphics({ x: 120 + i * 60, y: 470 }));
    txt(this, 180, 515, '3 right answers = a new part!', 17).setOrigin(0.5);
    this.scoreText = txt(this, 180, 550, '', 18).setOrigin(0.5);
    this.refreshLeftPanel();
  }

  refreshLeftPanel() {
    if (this.preview) this.preview.destroy();
    this.preview = buildDino(this, this.choice);
    fitDino(this.preview, 40, 80, 280, 300, this.choice.body ? 1 : 0.8);
    const part = PART_ORDER[this.partIndex];
    this.partText.setText(part ? `Next part: ${PART_TITLES[part].replace(/^(a|some) /, '')}` : 'All done!');
    this.eggs.forEach((g, i) => {
      g.clear();
      const filled = i < this.toward;
      g.fillStyle(filled ? 0xffc93c : 0xffffff, 1); g.fillEllipse(0, 0, 40, 52);
      g.lineStyle(4, 0x23331c, 1); g.strokeEllipse(0, 0, 40, 52);
      if (filled) { g.fillStyle(0xffffff, 0.7); g.fillEllipse(-7, -10, 10, 14); }
    });
    this.scoreText.setText(`Right answers: ${this.correct}`);
  }

  buildQuestionArea() {
    panel(this, 360, 20, 580, 175, 0xffffff);
    this.qText = txt(this, 650, 107, '', 28, { fontStyle: 'bold', wordWrap: { width: 530 } }).setOrigin(0.5);
    this.answerButtons = [235, 312, 389, 466].map((y) =>
      button(this, 650, y, 560, 66, '', (b) => this.onAnswer(b), { size: 23, fill: 0xffffff })
    );
    this.feedback = txt(this, 370, 515, '', 21, { align: 'left', fontStyle: 'bold', wordWrap: { width: 380 } });
    this.nextBtn = button(this, 850, 550, 170, 56, 'Next ➡', () => this.afterAnswer(), { size: 26, fill: 0x8ee06b }).setVisible(false);
  }

  // ---------- questions ----------
  pickQuestion() {
    const seen = new Set(this.save.seenQuestions);
    let pool = QUESTIONS.filter((q) => !seen.has(q.id) && !this.usedFacts.has(q.fact));
    if (!pool.length) {                       // seen them all: start the cycle over
      this.save.seenQuestions = [];
      pool = QUESTIONS.filter((q) => !this.usedFacts.has(q.fact));
    }
    if (!pool.length) {                       // tiny question bank: allow repeats rather than get stuck
      this.usedFacts.clear();
      pool = QUESTIONS.slice();
    }
    const q = Phaser.Utils.Array.GetRandom(pool);
    this.usedFacts.add(q.fact);
    this.save.seenQuestions.push(q.id);
    saveGame(this.save);
    return q;
  }

  askNext() {
    this.current = this.pickQuestion();
    this.qText.setText(this.current.q);
    const answers = shuffle(this.current.answers.slice());
    this.answerButtons.forEach((b, i) => {
      b.answer = answers[i];
      b.label.setText(answers[i].text);
      b.setFill(0xffffff).setEnabled(true).setVisible(true);
    });
    this.feedback.setText('');
    this.nextBtn.setVisible(false);
  }

  onAnswer(btn) {
    if (this.locked) return;
    this.locked = true;
    this.answered++;
    this.answerButtons.forEach((b) => b.setEnabled(false));
    const right = this.answerButtons.find((b) => b.answer.correct);

    if (btn.answer.correct) {
      this.correct++;
      this.toward++;
      btn.setFill(0x8ee06b);
      this.feedback.setText(Phaser.Utils.Array.GetRandom(CHEERS)).setColor('#2e6b1f');
      this.tweens.add({ targets: btn, scale: 1.06, yoyo: true, duration: 140 });
      this.refreshLeftPanel();
      this.time.delayedCall(1100, () => this.afterAnswer());
    } else {
      btn.setFill(0xff8a7a);
      right.setFill(0x8ee06b);
      const msg = btn.answer.type === 'silly'
        ? `Ha! That's the silly one! The real answer is: ${right.answer.text}`
        : `Not quite! The answer is: ${right.answer.text}`;
      this.feedback.setText(msg).setColor('#a3261b');
      if (btn.answer.type === 'silly') this.tweens.add({ targets: this.preview, angle: { from: -6, to: 6 }, yoyo: true, repeat: 3, duration: 90, onComplete: () => this.preview.setAngle(0) });
      this.nextBtn.setVisible(true);
    }
  }

  afterAnswer() {
    this.nextBtn.setVisible(false);
    this.locked = false;
    if (this.toward < CORRECT_PER_PART) { this.askNext(); return; }

    this.toward = 0;
    const part = PART_ORDER[this.partIndex];
    this.showFact(() => this.showPicker(part, () => {
      this.partIndex++;
      this.refreshLeftPanel();
      if (this.partIndex >= PART_ORDER.length) {
        this.scene.start('Finish', { choice: this.choice, correct: this.correct, answered: this.answered });
      } else {
        this.askNext();
      }
    }));
  }

  // ---------- pop-ups ----------
  showAhzirWelcome(done) {
    const o = overlay(this);
    o.add(panel(this, 150, 130, 660, 340, 0xfff3c4));
    o.add(txt(this, 480, 200, '\u{1F996}  AHZIR!  \u{1F996}', 46, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5));
    o.add(txt(this, 480, 290, "Your dad says you're a dinosaur expert.\nProve it!", 32, { fontStyle: 'bold' }).setOrigin(0.5));
    o.add(button(this, 480, 405, 240, 64, "Let's go!", () => { o.destroy(); done(); }, { size: 30, fill: 0x8ee06b }));
  }

  showFact(done) {
    if (!this.factDeck.length) this.factDeck = shuffle(FACTS.slice());
    const fact = this.factDeck.pop();
    const o = overlay(this);
    o.add(panel(this, 150, 110, 660, 380, 0xfff3c4));
    o.add(txt(this, 480, 165, 'FUN FACT TIME!', 40, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5));
    o.add(txt(this, 480, 290, fact, 28, { wordWrap: { width: 580 } }).setOrigin(0.5));
    o.add(button(this, 480, 430, 220, 60, 'Ha! Next', () => { o.destroy(); done(); }, { size: 28, fill: 0x8ee06b }));
  }

  showPicker(part, done) {
    if (part === 'skin') { this.showSkinPicker(done); return; }
    const o = overlay(this);
    o.add(panel(this, 40, 25, 880, 550, 0xfffaf0));
    o.add(txt(this, 480, 68, `You earned a new part! Pick ${PART_TITLES[part]}:`, 32, { fontStyle: 'bold' }).setOrigin(0.5));

    const options = PART_OPTIONS[part];
    const cols = 3, cw = 260, ch = 205;
    const rows = Math.ceil(options.length / cols);
    options.forEach((dino, i) => {
      const row = Math.floor(i / cols);
      const inRow = Math.min(cols, options.length - row * cols);
      const x = 480 + (i % cols - (inRow - 1) / 2) * (cw + 20);
      const y = (rows === 1 ? 300 : 215 + row * (ch + 20));
      const card = this.add.container(x, y);
      const g = this.add.graphics();
      const draw = (hover) => {
        g.clear();
        g.fillStyle(hover ? 0xfff3c4 : 0xffffff, 1); g.fillRoundedRect(-cw / 2, -ch / 2, cw, ch, 16);
        g.lineStyle(hover ? 5 : 3, 0x23331c, 1); g.strokeRoundedRect(-cw / 2, -ch / 2, cw, ch, 16);
      };
      draw(false);
      const img = partImage(this, `${dino}_${part}`, 0, -18, cw - 40, ch - 70, this.choice.color ?? 0xffffff);
      const label = txt(this, 0, ch / 2 - 26, partLabel(dino, part), 20, { fontStyle: 'bold' }).setOrigin(0.5);
      card.add([g, img, label]);
      card.setSize(cw, ch).setInteractive({ useHandCursor: true });
      card.on('pointerover', () => draw(true));
      card.on('pointerout', () => draw(false));
      card.on('pointerup', () => { this.choice[part] = dino; o.destroy(); done(); });
      o.add(card);
    });
  }

  showSkinPicker(done) {
    if (this.choice.color == null) this.choice.color = COLORS[0].hex;
    if (!this.choice.texture) this.choice.texture = 'smooth';
    const o = overlay(this);
    o.add(panel(this, 30, 25, 900, 550, 0xfffaf0));
    o.add(txt(this, 480, 65, 'Last part! Pick your SKIN and COLOR:', 32, { fontStyle: 'bold' }).setOrigin(0.5));

    let preview;
    const redraw = () => {
      if (preview) preview.destroy();
      preview = buildDino(this, this.choice);
      fitDino(preview, 55, 110, 370, 340);
      o.add(preview);
      swatches.forEach((s) => s.mark.setVisible(s.hex === this.choice.color));
      skins.forEach((s) => s.mark.setVisible(s.name === this.choice.texture));
    };

    o.add(txt(this, 690, 110, 'Color', 26, { fontStyle: 'bold' }).setOrigin(0.5));
    const swatches = COLORS.map((col, i) => {
      const x = 530 + (i % 5) * 80, y = 160 + Math.floor(i / 5) * 70;
      const mark = this.add.circle(x, y, 33).setStrokeStyle(6, 0xff7a00).setVisible(false);
      const dot = this.add.circle(x, y, 26, col.hex).setStrokeStyle(3, 0x23331c).setInteractive({ useHandCursor: true });
      dot.on('pointerup', () => { this.choice.color = col.hex; redraw(); });
      o.add([mark, dot]);
      return { hex: col.hex, mark };
    });

    o.add(txt(this, 690, 290, 'Skin', 26, { fontStyle: 'bold' }).setOrigin(0.5));
    const skins = Object.entries(TEXTURES).map(([name, label], i) => {
      const x = 560 + (i % 3) * 130, y = 345 + Math.floor(i / 3) * 95;
      const mark = this.add.rectangle(x, y - 6, 116, 88).setStrokeStyle(6, 0xff7a00).setVisible(false);
      const base = this.add.rectangle(x, y - 14, 100, 52, 0xd8d8d8).setStrokeStyle(3, 0x23331c);
      const tile = this.add.tileSprite(x, y - 14, 98, 50, `tex_${name}`);
      const t = txt(this, x, y + 24, label, 17, { fontStyle: 'bold' }).setOrigin(0.5);
      base.setInteractive({ useHandCursor: true }).on('pointerup', () => { this.choice.texture = name; redraw(); });
      o.add([mark, base, tile, t]);
      return { name, mark };
    });

    o.add(button(this, 240, 520, 220, 60, 'Done!', () => { o.destroy(); done(); }, { size: 30, fill: 0x8ee06b }));
    redraw();
  }
}
