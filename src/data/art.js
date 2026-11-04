// REAL ART GOES HERE.
// Until a part is listed below, the game draws a simple placeholder for it.
// When Sutton's final PNGs are ready, put them in  public/art/  and add a line:
//
//   Bodies (960x600 canvas, same as anchors.json):
//     trex_body: { file: 'art/trex_body.png' },
//
//   Heads, arms, legs, tails: attach = the pixel in that PNG that plugs into the body
//   (neck end of a head, top of a leg, base of a tail):
//     trex_head: { file: 'art/trex_head.png', attach: [52, 300] },
//
//   Texture tiles (seamless squares):
//     tex_scaly: { file: 'art/texture_scaly.png' },
//
// Keys are  <dino>_<part>  (body, head, arms, legs, tail) and  tex_<texture>.
// far: '<key>' = a separate far-side limb image drawn BEHIND the body
//               (the main image is then layered ON TOP of the body, like a real thigh).
// Limbs without a far image get an automatic darker copy behind the body.

export const ART = {
  // T. rex: first real set (cut out, scaled to the body, joints softened)
  trex_body: { file: 'art/trex_body.png' },
  trex_head: { file: 'art/trex_head.png', attach: [51, 122] },
  trex_tail: { file: 'art/trex_tail.png', attach: [522, 45] },
  trex_legs: { file: 'art/trex_legs.png', attach: [162, 90], far: 'trex_legs_far' },
  trex_legs_far: { file: 'art/trex_legs_far.png', attach: [162, 90] },
  trex_arms: { file: 'art/trex_arms.png', attach: [24, 8] },

  // Sutton's shaded bodies (same 960x600 canvas and anchor points as anchors.json).
  triceratops_body: { file: 'art/triceratops_body.png' },
  stegosaurus_body: { file: 'art/stegosaurus_body.png' },
  spinosaurus_body: { file: 'art/spinosaurus_body.png' },
  brachiosaurus_body: { file: 'art/brachiosaurus_body.png' },
  ankylosaurus_body: { file: 'art/ankylosaurus_body.png' },

  // Legs from the second art batch. Single legs: the game adds a darker far-side copy behind the body.
  // "arms" = front legs for these four-legged dinos.
  triceratops_legs: { file: 'art/triceratops_legs.png', attach: [74, 58] },
  triceratops_arms: { file: 'art/triceratops_arms.png', attach: [61, 54] },
  stegosaurus_legs: { file: 'art/stegosaurus_legs.png', attach: [72, 60] },
  stegosaurus_arms: { file: 'art/stegosaurus_arms.png', attach: [57, 50] },

  // Third art batch: heads, legs, arms and the Ankylosaurus tail.
  triceratops_head: { file: 'art/triceratops_head.png', attach: [34, 228] },
  stegosaurus_head: { file: 'art/stegosaurus_head.png', attach: [27, 132] },
  spinosaurus_head: { file: 'art/spinosaurus_head.png', attach: [36, 188] },
  brachiosaurus_head: { file: 'art/brachiosaurus_head.png', attach: [30, 339] },
  ankylosaurus_head: { file: 'art/ankylosaurus_head.png', attach: [26, 120] },
  ankylosaurus_tail: { file: 'art/ankylosaurus_tail.png', attach: [391, 162] },
  spinosaurus_legs: { file: 'art/spinosaurus_legs.png', attach: [89, 60] },
  spinosaurus_arms: { file: 'art/spinosaurus_arms.png', attach: [47, 34] },
  brachiosaurus_legs: { file: 'art/brachiosaurus_legs.png', attach: [79, 60] },
  brachiosaurus_arms: { file: 'art/brachiosaurus_arms.png', attach: [74, 64] },
  ankylosaurus_legs: { file: 'art/ankylosaurus_legs.png', attach: [65, 48] },
  ankylosaurus_arms: { file: 'art/ankylosaurus_arms.png', attach: [52, 50] },

  // Last four tails.
  triceratops_tail: { file: 'art/triceratops_tail.png', attach: [362, 46] },
  stegosaurus_tail: { file: 'art/stegosaurus_tail.png', attach: [435, 62] },
  spinosaurus_tail: { file: 'art/spinosaurus_tail.png', attach: [490, 61] },
  brachiosaurus_tail: { file: 'art/brachiosaurus_tail.png', attach: [508, 55] }
};
