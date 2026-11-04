import Phaser from 'phaser';
import { loadSave, saveGame, dinoName, isAhzir } from '../save.js';
import { QUESTIONS } from '../data/questions.js';
import { FACTS } from '../data/facts.js';
import { PART_ORDER, PART_TITLES, PART_OPTIONS, COLORS, TEXTURES, partLabel } from '../data/parts.js';
import { buildDino, fitDino, partImage } from '../dino.js';
import { txt, button, panel, overlay, shuffle, FONT } from '../ui.js';
import { isCleanName } from '../wordFilter.js';
import { randomDinoName, MAX_DINO_NAME } from '../dinoNames.js';
import { W, H, CX, PORTRAIT, EXTRA } from '../layout.js';
import { topicsOf, bonusColors } from '../progress.js';

const E = EXTRA, D = EXTRA / 2;

const CORRECT_PER_PART = 3;
const CHEERS = ['Correct!', 'You got it!', 'Dino-mite!', 'Roar-some!', 'Nailed it!', 'Yes! Expert move!', 'Jurassic genius!'];

// Positions for the two screen shapes.
// Wide: dino panel on the left, question on the right.
// Tall (phones): question and answers on top, dino panel underneath.
const L = PORTRAIT ? {
  dinoPanel: [20, 640, 560, 340 + E], dinoTitle: [CX, 668], dinoBox: [40, 690, 330, 270 + E],
  partText: [470, 720 + D], eggs: [410, 470, 530], eggY: 790 + D, rule: [470, 855 + D], score: [470, 915 + D], sideWrap: 190, sideSize: 21,
  qPanel: [20, 20, 560, 190], qText: [CX + 22, 115], qWrap: 470, qSize: 30,
  ansX: CX, ansW: 560, ansH: 80, ansY: [262, 352, 442, 532], ansSize: 25,
  feedback: [30, 584], fbWrap: 360, next: [480, 606, 170, 56],
  card: { cols: 2, cw: 255, ch: 240 + E / 4, gap: 18, top: 245 + E / 8 },
  pickPanel: [20, 20, 560, 960 + E], pickTitle: 75,
  skin: { panel: [20, 20, 560, 960 + E], title: 65, preview: [40, 110, 520, 300 + E], colorLabel: 445 + E, swX: (i) => 110 + (i % 5) * 95, swY: (i) => 495 + E + Math.floor(i / 5) * 75,
    skinLabel: 620 + E, skX: (i) => 130 + (i % 3) * 170, skY: (i) => 685 + E + Math.floor(i / 3) * 105, done: [CX, 915 + E] },
  popup: [40, 290 + D, 520, 420],
  namePanel: [30, 140 + D, 540, 720]
} : {
  dinoPanel: [20, 20, 320, 560], dinoTitle: [205, 50], dinoBox: [40, 80, 280, 300],
  partText: [180, 420], eggs: [120, 180, 240], eggY: 470, rule: [180, 515], score: [180, 550], sideWrap: 290, sideSize: 17,
  qPanel: [360, 20, 580, 175], qText: [650, 107], qWrap: 530, qSize: 28,
  ansX: 650, ansW: 560, ansH: 66, ansY: [235, 312, 389, 466], ansSize: 23,
  feedback: [370, 515], fbWrap: 380, next: [850, 550, 170, 56],
  card: { cols: 3, cw: 260, ch: 205, gap: 20, top: 215 },
  pickPanel: [40, 25, 880, 550], pickTitle: 68,
  skin: { panel: [30, 25, 900, 550], title: 65, preview: [55, 110, 370, 340], colorLabel: 110, swX: (i) => 530 + (i % 5) * 80, swY: (i) => 160 + Math.floor(i / 5) * 70,
    skinLabel: 290, skX: (i) => 560 + (i % 3) * 130, skY: (i) => 345 + Math.floor(i / 3) * 95, done: [240, 520] },
  popup: [150, 110, 660, 380],
  namePanel: [130, 30, 700, 540]
};

export default class QuizScene extends Phaser.Scene {
  constructor() { super('Quiz'); }

  create() {
    this.save = loadSave();
    this.choice = {};
    this.partIndex = 0;
    this.toward = 0;       // correct answers toward the next part
    this.correct = 0;
    this.answered = 0;
    this.locked = false;
    this.usedFacts = new Set();
    this.factsThisGame = new Set();
    this.factCardsShown = 0;
    // Trophy Room tracking for this game
    this.streak = 0; this.bestStreak = 0;
    this.hadWrong = false; this.comebackRun = 0; this.comeback = false;
    this.sillyPicks = 0; this.topicRight = {};
    // One of this game's fact cards is the personal one: "Did you know that <name> really enjoys..."
    this.personalFactSlot = Phaser.Math.Between(0, PART_ORDER.length - 1);

    this.add.rectangle(W / 2, H / 2, W, H, 0xe9f3dc);
    this.buildDinoPanel();
    this.buildQuestionArea();
    this.addMenuButton();

    if (isAhzir(this.save.name)) this.showAhzirWelcome(() => this.askNext());
    else this.askNext();
  }

  // ---------- layout ----------
  buildDinoPanel() {
    panel(this, ...L.dinoPanel, 0xfffaf0);
    txt(this, ...L.dinoTitle, `Your ${dinoName(this.save.name)}`, 24, { fontStyle: 'bold', wordWrap: { width: PORTRAIT ? 520 : 240 } }).setOrigin(0.5);
    this.partText = txt(this, ...L.partText, '', PORTRAIT ? 25 : 22, { fontStyle: 'bold', wordWrap: { width: L.sideWrap } }).setOrigin(0.5);
    this.eggs = L.eggs.map((x) => this.add.graphics({ x, y: L.eggY }));
    txt(this, ...L.rule, '3 right answers = a new part!', L.sideSize, { wordWrap: { width: L.sideWrap } }).setOrigin(0.5);
    this.scoreText = txt(this, ...L.score, '', L.sideSize + 1).setOrigin(0.5);
    this.refreshDinoPanel();
  }

  // ☰ in the top-left corner: leave for the main menu or Trophy Room (asks first, since this game won't be saved).
  addMenuButton() {
    const b = button(this, 46, 46, 50, 50, '\u2630', () => this.showMenu(), { size: 28, fill: 0xffffff });
    b.setDepth(90);
  }

  showMenu() {
    if (this.leaving) return;
    const o = overlay(this, 110);
    const p = this.popupPanel(o);
    o.add(txt(this, CX, p.top + 55, 'Menu', 38, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5));
    o.add(txt(this, CX, p.top + 105, "Leaving now means this game won't count.", 21, { wordWrap: { width: p.wrap } }).setOrigin(0.5));
    const go = (key) => { this.leaving = true; this.scene.start(key, key === 'Trophy' ? { back: 'Start' } : undefined); };
    const by = p.top + 175, gap = PORTRAIT ? 80 : 72;
    o.add(button(this, CX, by, 300, 62, '\u{1F3E0} Main Menu', () => go('Start'), { size: 26, fill: 0xffc93c }));
    o.add(button(this, CX, by + gap, 300, 62, '\u{1F3C6} Trophy Room', () => go('Trophy'), { size: 26, fill: 0xffc93c }));
    o.add(button(this, CX, by + gap * 2, 300, 62, 'Keep Playing', () => o.destroy(), { size: 26, fill: 0x8ee06b }));
  }

  refreshDinoPanel() {
    if (this.preview) this.preview.destroy();
    this.preview = buildDino(this, this.choice);
    fitDino(this.preview, ...L.dinoBox, this.choice.body ? 1 : 0.8);
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
    panel(this, ...L.qPanel, 0xffffff);
    this.qText = txt(this, ...L.qText, '', L.qSize, { fontStyle: 'bold', wordWrap: { width: L.qWrap } }).setOrigin(0.5);
    this.answerButtons = L.ansY.map((y) =>
      button(this, L.ansX, y, L.ansW, L.ansH, '', (b) => this.onAnswer(b), { size: L.ansSize, fill: 0xffffff })
    );
    this.feedback = txt(this, ...L.feedback, '', 21, { align: 'left', fontStyle: 'bold', wordWrap: { width: L.fbWrap } });
    this.nextBtn = button(this, ...L.next, 'Next ➡', () => this.afterAnswer(), { size: 26, fill: 0x8ee06b }).setVisible(false);
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
      this.streak++; this.bestStreak = Math.max(this.bestStreak, this.streak);
      if (this.hadWrong && ++this.comebackRun >= 5) this.comeback = true;
      for (const t of topicsOf(this.current)) this.topicRight[t] = (this.topicRight[t] || 0) + 1;
      btn.setFill(0x8ee06b);
      this.feedback.setText(Phaser.Utils.Array.GetRandom(CHEERS)).setColor('#2e6b1f');
      this.tweens.add({ targets: btn, scale: 1.06, yoyo: true, duration: 140 });
      this.refreshDinoPanel();
      this.time.delayedCall(1100, () => this.afterAnswer());
    } else {
      this.streak = 0; this.hadWrong = true; this.comebackRun = 0;
      if (btn.answer.type === 'silly') this.sillyPicks++;
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
      this.refreshDinoPanel();
      if (this.partIndex >= PART_ORDER.length) {
        this.showNamePicker((dinoNick, diceName) =>
          this.scene.start('Finish', {
            choice: this.choice, correct: this.correct, answered: this.answered, dinoNick,
            stats: { bestStreak: this.bestStreak, comeback: this.comeback, silly: this.sillyPicks, topics: this.topicRight, diceName }
          }));
      } else {
        this.askNext();
      }
    }));
  }

  // ---------- pop-ups ----------
  popupPanel(o) {
    const [x, y, w, h] = L.popup;
    o.add(panel(this, x, y, w, h, 0xfff3c4));
    return { top: y, bottom: y + h, wrap: w - 60 };
  }

  showAhzirWelcome(done) {
    const o = overlay(this);
    const p = this.popupPanel(o);
    o.add(txt(this, CX, p.top + 80, '\u{1F996}  AHZIR!  \u{1F996}', 46, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5));
    o.add(txt(this, CX, p.top + 180, "Your dad says you're a dinosaur expert.\nProve it!", 32, { fontStyle: 'bold', wordWrap: { width: p.wrap } }).setOrigin(0.5));
    o.add(button(this, CX, p.bottom - 70, 240, 64, "Let's go!", () => { o.destroy(); done(); }, { size: 30, fill: 0x8ee06b }));
  }

  // Next fun fact: ones this player has never seen come first, across all their games.
  // Starts over only after every fact has been shown, and never repeats within a game.
  nextFact() {
    const seen = new Set(this.save.seenFacts || []);
    let pool = FACTS.map((_, i) => i).filter((i) => !seen.has(i) && !this.factsThisGame.has(i));
    if (!pool.length) {
      this.save.seenFacts = [];
      pool = FACTS.map((_, i) => i).filter((i) => !this.factsThisGame.has(i));
    }
    const i = Phaser.Utils.Array.GetRandom(pool);
    this.factsThisGame.add(i);
    this.save.seenFacts = [...(this.save.seenFacts || []), i];
    saveGame(this.save);
    return FACTS[i];
  }

  personalFact() {
    return `Did you know that ${this.save.name} really enjoys learning about and talking about dinosaurs?`;
  }

  showFact(done) {
    const fact = this.factCardsShown === this.personalFactSlot ? this.personalFact() : this.nextFact();
    this.factCardsShown++;
    const o = overlay(this);
    const p = this.popupPanel(o);
    o.add(txt(this, CX, p.top + 60, 'FUN FACT TIME!', 40, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5));
    o.add(txt(this, CX, (p.top + p.bottom) / 2 - 5, fact, 28, { wordWrap: { width: p.wrap } }).setOrigin(0.5));
    o.add(button(this, CX, p.bottom - 60, 220, 60, 'Ha! Next', () => { o.destroy(); done(); }, { size: 28, fill: 0x8ee06b }));
  }

  showPicker(part, done) {
    if (part === 'skin') { this.showSkinPicker(done); return; }
    const o = overlay(this);
    o.add(panel(this, ...L.pickPanel, 0xfffaf0));
    o.add(txt(this, CX, L.pickTitle, `You earned a new part!\nPick ${PART_TITLES[part]}:`, 32, { fontStyle: 'bold', wordWrap: { width: L.pickPanel[2] - 40 } }).setOrigin(0.5));

    const options = PART_OPTIONS[part];
    const { cols, cw, ch, gap, top } = L.card;
    const rows = Math.ceil(options.length / cols);
    options.forEach((dino, i) => {
      const row = Math.floor(i / cols);
      const inRow = Math.min(cols, options.length - row * cols);
      const x = CX + (i % cols - (inRow - 1) / 2) * (cw + gap);
      const y = rows === 1 ? H / 2 : top + row * (ch + gap);
      const card = this.add.container(x, y);
      const g = this.add.graphics();
      const draw = (hover) => {
        g.clear();
        g.fillStyle(hover ? 0xfff3c4 : 0xffffff, 1); g.fillRoundedRect(-cw / 2, -ch / 2, cw, ch, 16);
        g.lineStyle(hover ? 5 : 3, 0x23331c, 1); g.strokeRoundedRect(-cw / 2, -ch / 2, cw, ch, 16);
      };
      draw(false);
      const img = partImage(this, `${dino}_${part}`, 0, -18, cw - 40, ch - 75, this.choice.color ?? 0xffffff);
      const label = txt(this, 0, ch / 2 - 28, partLabel(dino, part), 21, { fontStyle: 'bold', wordWrap: { width: cw - 20 } }).setOrigin(0.5);
      card.add([g, img, label]);
      card.setSize(cw, ch).setInteractive({ useHandCursor: true });
      card.on('pointerover', () => draw(true));
      card.on('pointerout', () => draw(false));
      card.on('pointerup', () => { this.choice[part] = dino; o.destroy(); done(); });
      o.add(card);
    });
  }

  // Last step: the player names their dinosaur (starts filled in with "[Name]asaurus").
  showNamePicker(done) {
    const [x, y, w, h] = L.namePanel;
    const o = overlay(this);
    o.add(panel(this, x, y, w, h, 0xfffaf0));
    o.add(txt(this, CX, y + 50, 'Name your dinosaur!', 36, { fontStyle: 'bold', color: '#b34700' }).setOrigin(0.5));
    const preview = buildDino(this, this.choice);
    const boxH = Math.round(h * (PORTRAIT ? 0.42 : 0.36));
    fitDino(preview, x + 30, y + 90, w - 60, boxH);
    o.add(preview);

    const inputY = y + 90 + boxH + 55;
    const dom = this.add.dom(CX - 38, inputY).createFromHTML(
      `<input type="text" id="dinoNameInput" maxlength="${MAX_DINO_NAME}" autocomplete="off"
        style="font-size:28px;padding:10px 14px;border-radius:14px;border:3px solid #23331c;width:${PORTRAIT ? 340 : 380}px;
        text-align:center;font-family:${FONT.replace(/"/g, "'")};outline:none;">`
    );
    const input = dom.getChildByID('dinoNameInput');
    input.value = dinoName(this.save.name);

    const hint = txt(this, CX, inputY + 92, '', 22, { color: '#b3261e', fontStyle: 'bold', wordWrap: { width: w - 60 } }).setOrigin(0.5);
    o.add(txt(this, CX, inputY + 54, 'Keep it, type your own, or roll the dice!', 19).setOrigin(0.5));
    o.add(hint);

    let fromDice = false;  // for the Lucky Dice collectible
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^A-Za-z ]/g, '').replace(/ {2,}/g, ' ').slice(0, MAX_DINO_NAME);
      hint.setText('');
      fromDice = false;
    });

    // 🎲 makes a silly name from the parts they picked
    o.add(button(this, CX + (PORTRAIT ? 175 : 195), inputY, 64, 64, '\u{1F3B2}', () => {
      let name = randomDinoName(this.choice);
      for (let i = 0; i < 10 && !isCleanName(name); i++) name = randomDinoName(this.choice);
      input.value = name;
      hint.setText('');
      fromDice = true;
    }, { size: 30, fill: 0xffffff }));

    const submit = () => {
      const name = input.value.trim().replace(/\b\w/g, (c) => c.toUpperCase());
      if (!name) { hint.setText('Give your dino a name!'); return; }
      if (!isCleanName(name)) { hint.setText("Hmm, let's pick a different name!"); return; }
      dom.destroy();
      o.destroy();
      done(name, fromDice);
    };
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
    o.add(button(this, CX, y + h - 55, 280, 68, "That's the one!", submit, { size: 30, fill: 0x8ee06b }));
  }

  showSkinPicker(done) {
    const S = L.skin;
    if (this.choice.color == null) this.choice.color = COLORS[0].hex;
    if (!this.choice.texture) this.choice.texture = 'smooth';
    const o = overlay(this);
    o.add(panel(this, ...S.panel, 0xfffaf0));
    o.add(txt(this, CX, S.title, PORTRAIT ? 'Last part!\nPick SKIN and COLOR:' : 'Last part! Pick your SKIN and COLOR:', 32, { fontStyle: 'bold' }).setOrigin(0.5));

    let preview;
    const redraw = () => {
      if (preview) preview.destroy();
      preview = buildDino(this, this.choice);
      fitDino(preview, ...S.preview);
      o.add(preview);
      swatches.forEach((s) => s.mark.setVisible(s.hex === this.choice.color));
      skins.forEach((s) => s.mark.setVisible(s.name === this.choice.texture));
    };

    const labelX = PORTRAIT ? CX : 690;
    o.add(txt(this, labelX, S.colorLabel, 'Color', 26, { fontStyle: 'bold' }).setOrigin(0.5));
    const colors = [...COLORS, ...bonusColors(this.save)];
    const many = colors.length > 10;   // bonus colors unlocked: smaller dots, 8 per row
    const swatches = colors.map((col, i) => {
      let x = S.swX(i), y = S.swY(i), r = 26;
      if (many) {
        const per = 8, gap = PORTRAIT ? 62 : 46, x0 = PORTRAIT ? CX : 690;
        x = x0 + ((i % per) - (per - 1) / 2) * gap; y = S.swY(0) + Math.floor(i / per) * (PORTRAIT ? 70 : 62); r = PORTRAIT ? 24 : 19;
      }
      const mark = this.add.circle(x, y, r + 7).setStrokeStyle(6, 0xff7a00).setVisible(false);
      const dot = this.add.circle(x, y, r, col.hex).setStrokeStyle(3, 0x23331c).setInteractive({ useHandCursor: true });
      dot.on('pointerup', () => { this.choice.color = col.hex; redraw(); });
      o.add([mark, dot]);
      return { hex: col.hex, mark };
    });

    o.add(txt(this, labelX, S.skinLabel, 'Skin', 26, { fontStyle: 'bold' }).setOrigin(0.5));
    const skins = Object.entries(TEXTURES).map(([name, label], i) => {
      const x = S.skX(i), y = S.skY(i);
      const mark = this.add.rectangle(x, y - 6, 120, 92).setStrokeStyle(6, 0xff7a00).setVisible(false);
      const base = this.add.rectangle(x, y - 14, 104, 54, 0xd8d8d8).setStrokeStyle(3, 0x23331c);
      const tile = this.add.tileSprite(x, y - 14, 102, 52, `tex_${name}`);
      const t = txt(this, x, y + 26, label, 18, { fontStyle: 'bold' }).setOrigin(0.5);
      base.setInteractive({ useHandCursor: true }).on('pointerup', () => { this.choice.texture = name; redraw(); });
      o.add([mark, base, tile, t]);
      return { name, mark };
    });

    o.add(button(this, ...S.done, 240, 66, 'Done!', () => { o.destroy(); done(); }, { size: 32, fill: 0x8ee06b }));
    redraw();
  }
}
