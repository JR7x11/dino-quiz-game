import Phaser from 'phaser';
import BootScene from './scenes/BootScene.js';
import StartScene from './scenes/StartScene.js';
import QuizScene from './scenes/QuizScene.js';
import FinishScene from './scenes/FinishScene.js';
import TestScene from './scenes/TestScene.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 960,
  height: 600,
  backgroundColor: '#e9f3dc',
  dom: { createContainer: true },
  scale: {
    mode: Phaser.Scale.FIT,
    expandParent: false, // keep the page from stretching to full window height
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
  },
  scene: [BootScene, StartScene, QuizScene, FinishScene, TestScene]
};

window.dinoGame = new Phaser.Game(config);
