import Phaser from 'phaser';
import { ART } from '../data/art.js';
import { ATTACH, makePlaceholders } from '../placeholders.js';
import { TEST_MODE } from '../layout.js';

export default class BootScene extends Phaser.Scene {
  constructor() { super('Boot'); }

  preload() {
    // Load any finished art listed in data/art.js.
    for (const [key, entry] of Object.entries(ART)) {
      this.load.image(key, entry.file);
      if (entry.attach) ATTACH[key] = entry.attach;
    }
  }

  create() {
    makePlaceholders(this); // fills in anything that has no real art yet
    // add ?test to the address to open the hidden parts-test page
    this.scene.start(TEST_MODE ? 'Test' : 'Start');
  }
}
