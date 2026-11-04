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
  // Triceratops, Stegosaurus and Brachiosaurus still have flat-cut bellies; swap in the fixed versions when ready.
  triceratops_body: { file: 'art/triceratops_body.png' },
  stegosaurus_body: { file: 'art/stegosaurus_body.png' },
  spinosaurus_body: { file: 'art/spinosaurus_body.png' },
  brachiosaurus_body: { file: 'art/brachiosaurus_body.png' },
  ankylosaurus_body: { file: 'art/ankylosaurus_body.png' }
};
