// Puts a dinosaur together from the parts the player picked.
import { BODY_ANCHORS, FRONT_LEGS, jointScale } from './data/parts.js';
import { ATTACH } from './placeholders.js';
import { ART } from './data/art.js';

const WHITE = 0xffffff;

function darker(color, f = 0.7) {
  const r = ((color >> 16) & 255) * f, g = ((color >> 8) & 255) * f, b = (color & 255) * f;
  return (r << 16) | (g << 8) | b;
}

// Any part with the chosen skin texture baked on top (clipped to the part's shape),
// so the head, tail, arms and legs get the same skin as the body.
function texturedKey(scene, baseKey, texture) {
  if (!texture || !scene.textures.exists(`tex_${texture}`)) return baseKey;
  const key = `${baseKey}__${texture}`;
  if (scene.textures.exists(key)) return key;

  const src = scene.textures.get(baseKey).getSourceImage();
  const tileSrc = scene.textures.get(`tex_${texture}`).getSourceImage();
  const canvasTex = scene.textures.createCanvas(key, src.width, src.height);
  const ctx = canvasTex.context;
  ctx.drawImage(src, 0, 0);
  ctx.globalCompositeOperation = 'overlay';
  ctx.fillStyle = ctx.createPattern(tileSrc, 'repeat');
  ctx.fillRect(0, 0, src.width, src.height);
  ctx.globalCompositeOperation = 'destination-in';
  ctx.drawImage(src, 0, 0);
  ctx.globalCompositeOperation = 'source-over';
  canvasTex.refresh();
  return key;
}

// A copy of a head or tail that fades out toward the joint. Drawn on top of the body,
// it blends the seam so the body's end doesn't show as a hard collar.
const BLEND = 45; // px past the joint where the top copy becomes fully solid
function blendKey(scene, srcKey, ax, joinLeft) {
  const key = `${srcKey}__blend`;
  if (scene.textures.exists(key)) return key;
  const src = scene.textures.get(srcKey).getSourceImage();
  const t = scene.textures.createCanvas(key, src.width, src.height);
  const ctx = t.context;
  ctx.drawImage(src, 0, 0);
  const x0 = joinLeft ? 0 : src.width, x1 = joinLeft ? ax + BLEND : ax - BLEND;
  const g = ctx.createLinearGradient(x0, 0, x1, 0);
  g.addColorStop(0, 'rgba(0,0,0,0)');
  g.addColorStop(1, 'rgba(0,0,0,1)');
  ctx.globalCompositeOperation = 'destination-in';
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, src.width, src.height);
  ctx.globalCompositeOperation = 'source-over';
  t.refresh();
  return key;
}

function attachBlend(scene, c, key, at, tint, texture, joinLeft) {
  const srcKey = texturedKey(scene, key, texture);
  const [ax, ay] = ATTACH[key] || [0, 0];
  const img = scene.add.image(at[0], at[1], blendKey(scene, srcKey, ax, joinLeft));
  img.setOrigin(ax / img.width, ay / img.height);
  img.setTint(tint);
  c.add(img);
  return img;
}

function attachImage(scene, c, key, at, tint, texture) {
  const img = scene.add.image(at[0], at[1], texturedKey(scene, key, texture));
  const [ax, ay] = ATTACH[key] || [img.width / 2, 0];
  img.setOrigin(ax / img.width, ay / img.height);
  img.setTint(tint);
  c.add(img);
  return img;
}

// choice: { body, arms, head, legs, tail, color, texture } (any can be missing while building)
// Returns a Container in body-space coordinates; use fitDino() to size and place it.
export function buildDino(scene, choice) {
  const c = scene.add.container(0, 0);
  if (!choice || !choice.body) {
    const egg = scene.add.ellipse(0, 0, 150, 190, 0xfff3d6).setStrokeStyle(5, 0x3d3d3d);
    const q = scene.add.text(0, 0, '?', { fontFamily: 'Trebuchet MS, Verdana, sans-serif', fontSize: '90px', color: '#3d3d3d', fontStyle: 'bold' }).setOrigin(0.5);
    c.add([egg, q]);
    return c;
  }
  const A = BODY_ANCHORS[choice.body];
  const color = choice.color ?? WHITE;
  const shade = darker(color);

  // back to front: far-side limbs, tail and head (tucked behind so the body hides the joint),
  // body, near leg, near arm. Every part gets the same skin texture as the body.
  const tex = choice.texture;
  const legKey = choice.legs && `${choice.legs}_legs`;
  const armKey = choice.arms && `${choice.arms}_arms`;
  const legFar = legKey && ART[legKey]?.far;   // real art with its own far-side leg
  const legS = legScale(scene, choice.body, choice.legs);
  if (legFar) attachImage(scene, c, legFar, A.hip, color, tex).setScale(legS);
  else if (legKey) attachImage(scene, c, legKey, [A.hip[0] - 26, A.hip[1] - 10], shade, tex).setScale(legS);
  // Front legs from a different dino get stretched/shrunk so all four feet stand on the same ground.
  const armStretch = frontLegStretch(scene, choice);
  const armW = Math.min(1.2, Math.max(0.8, armStretch));   // front legs get a bit wider/narrower too, so they stay in proportion
  if (armKey) attachImage(scene, c, armKey, [A.shoulder[0] - 22, A.shoulder[1] - 10], shade, tex).setScale(armW, armStretch);

  // Heads and tails from other dinos are resized to fit this body's neck and tail.
  const tailS = choice.tail ? jointScale(choice.body, choice.tail, 'tail') : 1;
  const headS = choice.head ? jointScale(choice.body, choice.head, 'neck') : 1;
  if (choice.tail) attachImage(scene, c, `${choice.tail}_tail`, A.tail_base, color, tex).setScale(tailS);
  if (choice.head) attachImage(scene, c, `${choice.head}_head`, A.neck, color, tex).setScale(headS);

  const body = scene.add.image(0, 0, texturedKey(scene, `${choice.body}_body`, tex)).setOrigin(0);
  body.setTint(color);
  c.add(body);

  // Faded copies of the tail and head over the body hide the seam.
  if (choice.tail) attachBlend(scene, c, `${choice.tail}_tail`, A.tail_base, color, tex, false).setScale(tailS);
  if (choice.head) attachBlend(scene, c, `${choice.head}_head`, A.neck, color, tex, true).setScale(headS);

  if (legKey) attachImage(scene, c, legKey, A.hip, color, tex).setScale(legS);   // near leg layered on top of the body
  if (armKey) attachImage(scene, c, armKey, A.shoulder, color, tex).setScale(armW, armStretch);
  return c;
}

// How much to stretch front legs so their feet line up with the back feet (1 = no change).
// Legs from another dino are resized to the body's own leg length, so the body keeps its
// natural stance and the thigh matches the hip (e.g. T. rex legs on an Ankylosaurus get shorter and slimmer).
function limbLength(scene, key) {
  if (!scene.textures.exists(key)) return 0;
  return scene.textures.get(key).getSourceImage().height - (ATTACH[key] || [0, 0])[1];
}
export function legScale(scene, body, legs) {
  if (!body || !legs || body === legs) return 1;
  const own = limbLength(scene, `${body}_legs`), part = limbLength(scene, `${legs}_legs`);
  if (!own || !part) return 1;
  return Math.min(1.5, Math.max(0.6, own / part));
}

// How much to scale front legs so their feet line up with the back feet (1 = no change).
export function frontLegStretch(scene, choice) {
  const { body, legs, arms } = choice;
  if (!body || !legs || !arms || !FRONT_LEGS.includes(arms)) return 1;
  const A = BODY_ANCHORS[body];
  const backFoot = A.hip[1] + limbLength(scene, `${legs}_legs`) * legScale(scene, body, legs);
  const want = (backFoot - A.shoulder[1]) / limbLength(scene, `${arms}_arms`);
  return Math.min(1.6, Math.max(0.6, want));
}

// Scale and center a built dino inside a box.
export function fitDino(container, x, y, w, h, maxScale = 1) {
  container.setScale(1).setPosition(0, 0);
  const b = container.getBounds();
  const s = Math.min(w / b.width, h / b.height, maxScale);
  container.setScale(s);
  container.setPosition(x + w / 2 - b.centerX * s, y + h / 2 - b.centerY * s);
  return container;
}

// A single part on its own (for the pick-a-part cards).
export function partImage(scene, key, x, y, w, h, tint = WHITE) {
  const img = scene.add.image(x, y, trimmedKey(scene, key)).setTint(tint);
  img.setScale(Math.min(w / img.width, h / img.height, 1));
  return img;
}

// Bodies sit on a big 960x600 canvas; crop away the empty space so they show up large on cards.
function trimmedKey(scene, key) {
  if (!key.endsWith('_body')) return key;
  const tKey = `${key}__trim`;
  if (scene.textures.exists(tKey)) return tKey;
  const src = scene.textures.get(key).getSourceImage();
  const cv = document.createElement('canvas');
  cv.width = src.width; cv.height = src.height;
  const ctx = cv.getContext('2d');
  ctx.drawImage(src, 0, 0);
  const data = ctx.getImageData(0, 0, cv.width, cv.height).data;
  let x0 = cv.width, y0 = cv.height, x1 = 0, y1 = 0;
  for (let y = 0; y < cv.height; y += 2) for (let x = 0; x < cv.width; x += 2) {
    if (data[(y * cv.width + x) * 4 + 3] > 20) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  }
  if (x1 <= x0) return key;
  const t = scene.textures.createCanvas(tKey, x1 - x0 + 2, y1 - y0 + 2);
  t.context.drawImage(src, x0, y0, x1 - x0 + 2, y1 - y0 + 2, 0, 0, x1 - x0 + 2, y1 - y0 + 2);
  t.refresh();
  return tKey;
}
