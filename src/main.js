import Phaser from 'phaser';
import { W, H, PORTRAIT } from './layout.js';
import BootScene from './scenes/BootScene.js';
import StartScene from './scenes/StartScene.js';
import QuizScene from './scenes/QuizScene.js';
import FinishScene from './scenes/FinishScene.js';
import TestScene from './scenes/TestScene.js';
import TrophyScene from './scenes/TrophyScene.js';

// Size the game box so the whole game fits on screen without scrolling.
const box = document.getElementById('game');
box.style.aspectRatio = `${W} / ${H}`;
box.style.width = PORTRAIT ? `min(100vw, ${(W / H) * 100}vh)` : `min(100vw, 1100px, ${(W / H) * 100}vh)`;

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: W,
  height: H,
  backgroundColor: '#e9f3dc',
  dom: { createContainer: true },
  scale: {
    mode: Phaser.Scale.FIT,
    expandParent: false, // keep the page from stretching to full window height
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
  },
  scene: [BootScene, StartScene, QuizScene, FinishScene, TrophyScene, TestScene]
};

window.dinoGame = new Phaser.Game(config);
