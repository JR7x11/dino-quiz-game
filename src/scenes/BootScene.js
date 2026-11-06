import Phaser from 'phaser';
import { ART } from '../data/art.js';
import { ATTACH, makePlaceholders } from '../placeholders.js';
import { TEST_MODE } from '../layout.js';
import { isLazyArt } from '../lazyArt.js';

export default class BootScene extends Phaser.Scene {
  constructor() { super('Boot'); }

  preload() {
    // Load the finished dino art listed in data/art.js. (Trophy Room art loads later; see lazyArt.js.)
    for (const [key, entry] of Object.entries(ART)) {
      if (entry.attach) ATTACH[key] = entry.attach;
      if (!isLazyArt(key)) this.load.image(key, entry.file);
    }
  }

  create() {
    makePlaceholders(this); // fills in anything that has no real art yet
    document.getElementById('loading')?.remove();   // the quick HTML title screen shown while loading
    // add ?test to the address to open the hidden parts-test page
    this.scene.start(TEST_MODE ? 'Test' : 'Start');
  }
}
