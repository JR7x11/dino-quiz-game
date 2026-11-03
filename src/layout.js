// Picks the screen shape once, when the game loads.
// Phones held upright get a tall layout; computers and tablets in landscape get a wide one.
const params = new URLSearchParams(window.location.search);

export const TEST_MODE = params.has('test');

export const PORTRAIT = !TEST_MODE && (
  params.has('portrait') || (window.innerHeight > window.innerWidth * 1.1 && !params.has('landscape'))
);

export const W = PORTRAIT ? 600 : 960;
// Tall phones get a taller game (up to 1300) so there's no empty space at the bottom.
export const H = PORTRAIT
  ? Math.round(Math.min(1300, Math.max(1000, (600 * window.innerHeight) / window.innerWidth)))
  : 600;
// Extra height beyond the basic 1000-tall phone layout (0 on wide screens).
export const EXTRA = PORTRAIT ? H - 1000 : 0;
export const CX = W / 2;
