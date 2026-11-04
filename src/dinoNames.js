// Random dino names mashed up from the parts the player picked (the 🎲 button).
const STARTS = {
  trex: ['Rex', 'Tyranno', 'Chompa'],
  triceratops: ['Trice', 'Trio', 'Horna'],
  stegosaurus: ['Stego', 'Plato', 'Spiko'],
  spinosaurus: ['Spino', 'Saily', 'Fishy'],
  brachiosaurus: ['Brachio', 'Longo', 'Tallo'],
  ankylosaurus: ['Ankylo', 'Clubba', 'Bonko']
};
const ENDS = ['saurus', 'tops', 'rex', 'raptor', 'don', 'mimus', 'nyx', 'zoid', 'chomp', 'stomp'];
const SKIN_WORDS = {
  smooth: ['Smooth', 'Shiny'], scaly: ['Scaly', 'Sparkly'], bumpy: ['Bumpy', 'Lumpy'],
  armorplates: ['Armored', 'Tanky'], spikes: ['Spiky', 'Pointy'], feathers: ['Feathery', 'Fluffy']
};
const pick = (a) => a[Math.floor(Math.random() * a.length)];

export const MAX_DINO_NAME = 20; // fits the longest default name: 12-letter player name + "asaurus"

export function randomDinoName(choice) {
  const parts = ['body', 'head', 'tail', 'legs', 'arms'].map((p) => choice[p]).filter((d) => STARTS[d]);
  for (let tries = 0; tries < 30; tries++) {
    const start = pick(STARTS[pick(parts)]);
    const end = pick(ENDS);
    const core = (start.endsWith(end[0]) ? start.slice(0, -1) : start) + end;
    const withSkin = SKIN_WORDS[choice.texture] && Math.random() < 0.5 ? `${pick(SKIN_WORDS[choice.texture])} ${core}` : core;
    if (withSkin.length <= MAX_DINO_NAME) return withSkin;
    if (core.length <= MAX_DINO_NAME) return core;
  }
  return 'Mashasaurus';
}
