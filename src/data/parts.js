// What Ahzir can pick, in build order. Each correct-answer trio earns the next one.
export const PART_ORDER = ['body', 'arms', 'head', 'legs', 'tail', 'skin'];

export const PART_TITLES = {
  body: 'a BODY',
  arms: 'some ARMS',
  head: 'a HEAD',
  legs: 'some LEGS',
  tail: 'a TAIL',
  skin: 'SKIN and COLOR'
};

export const DINOS = {
  trex: 'T. rex',
  triceratops: 'Triceratops',
  stegosaurus: 'Stegosaurus',
  spinosaurus: 'Spinosaurus',
  brachiosaurus: 'Brachiosaurus',
  ankylosaurus: 'Ankylosaurus'
};

// Which dinos have art for each part. Add a dino here once its art exists.
export const PART_OPTIONS = {
  body: ['trex', 'triceratops', 'stegosaurus', 'spinosaurus', 'brachiosaurus', 'ankylosaurus'],
  arms: ['trex', 'triceratops', 'stegosaurus', 'spinosaurus', 'brachiosaurus'],
  head: ['trex', 'triceratops', 'stegosaurus', 'spinosaurus', 'brachiosaurus'],
  legs: ['trex', 'triceratops', 'stegosaurus', 'spinosaurus', 'brachiosaurus'],
  tail: ['trex', 'triceratops', 'stegosaurus', 'spinosaurus', 'brachiosaurus']
};

// Four-legged dinos have front legs, not arms.
export const FRONT_LEGS = ['triceratops', 'stegosaurus', 'brachiosaurus'];
export function partLabel(dino, part) {
  if (part === 'arms' && FRONT_LEGS.includes(dino)) return `${DINOS[dino]} front legs`;
  return `${DINOS[dino]} ${part}`;
}

export const COLORS = [
  { name: 'Jungle Green', hex: 0x6fbf4f },
  { name: 'Swamp Olive', hex: 0x8a9a3b },
  { name: 'Ocean Blue', hex: 0x4a90d9 },
  { name: 'Lava Red', hex: 0xd9483b },
  { name: 'Sunset Orange', hex: 0xf08a24 },
  { name: 'Sand Yellow', hex: 0xe8c547 },
  { name: 'Volcano Purple', hex: 0x8e5cc7 },
  { name: 'Mud Brown', hex: 0x9a6a42 },
  { name: 'Rock Gray', hex: 0x9aa0a6 },
  { name: 'Hot Pink', hex: 0xe866a8 }
];

export const TEXTURES = {
  smooth: 'Smooth',
  scaly: 'Scaly',
  bumpy: 'Bumpy',
  armorplates: 'Armor Plates',
  spikes: 'Spikes',
  feathers: 'Feathers'
};

// Attachment points on each body, from Sutton's anchors.json.
// Bodies are drawn on a 960x600 canvas with the top-left at (0,0).
export const BODY_ANCHORS = {
  trex:          { tail_base: [130, 337], hip: [367, 422], shoulder: [628, 339], neck: [818, 259] },
  triceratops:   { tail_base: [144, 344], hip: [383, 419], shoulder: [650, 348], neck: [822, 267] },
  stegosaurus:   { tail_base: [145, 437], hip: [354, 457], shoulder: [639, 411], neck: [826, 383] },
  spinosaurus:   { tail_base: [149, 409], hip: [355, 444], shoulder: [640, 408], neck: [826, 339] },
  brachiosaurus: { tail_base: [130, 387], hip: [346, 413], shoulder: [645, 351], neck: [837, 283] },
  ankylosaurus:  { tail_base: [150, 343], hip: [367, 392], shoulder: [647, 352], neck: [831, 303] }
};
