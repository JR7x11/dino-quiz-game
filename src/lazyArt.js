// Trophy Room art (collectibles, cup, cabinet, pedestal, stone sign, cave background) is about 2 MB,
// so it isn't loaded before the game starts. It loads quietly in the background once the start screen
// is up, and the Trophy Room / finish screen load anything still missing before they show.
import { ART } from './data/art.js';

export const isLazyArt = (key) => /^(col_|trophy_|dino_cabinet|statue_stand|stone_sign)/.test(key);

// Adds any lazy art that isn't loaded yet to this scene's loader. Returns how many files were queued.
export function queueLazyArt(scene) {
  let n = 0;
  for (const [key, entry] of Object.entries(ART)) {
    if (isLazyArt(key) && !scene.textures.exists(key)) { scene.load.image(key, entry.file); n++; }
  }
  return n;
}

// Starts loading in the background (for scenes that are already showing).
export function loadLazyArtInBackground(scene) {
  if (queueLazyArt(scene)) scene.load.start();
}
