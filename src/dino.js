// Puts a dinosaur together from the parts the player picked.
import { BODY_ANCHORS, FRONT_LEGS } from './data/parts.js';
import { ATTACH } from './placeholders.js';
import { ART } from './data/art.js';

const WHITE = 0xffffff;

function darker(color, f = 0.7) {
  const r = ((color >> 16) & 255) * f, g = ((color >> 8) & 255) * f, b = (color & 255) * f;
  return (r << 16) | (g << 8) | b;
}

// Body with the chosen skin texture baked on top (clipped to the body shape).
function texturedBodyKey(scene, body, texture) {
  const baseKey = `${body}_body`;
  if (!texture || !scene.textures.exists(`tex_${texture}`)) return baseKey;
  const key = `${baseKey}__${texture}`;
  if (scene.textures.exists(key)) return key;

  const bodySrc = scene.textures.get(baseKey).getSourceImage();
  const tileSrc = scene.textures.get(`tex_${texture}`).getSourceImage();
  const canvasTex = scene.textures.createCanvas(key, bodySrc.width, bodySrc.height);
  const ctx = canvasTex.context;
  ctx.drawImage(bodySrc, 0, 0);
  ctx.globalCompositeOperation = 'overlay';
  ctx.fillStyle = ctx.createPattern(tileSrc, 'repeat');
  ctx.fillRect(0, 0, bodySrc.width, bodySrc.height);
  ctx.globalCompositeOperation = 'destination-in';
  ctx.drawImage(bodySrc, 0, 0);
  ctx.globalCompositeOperation = 'source-over';
  canvasTex.refresh();
  return key;
}

function attachImage(scene, c, key, at, tint) {
  const img = scene.add.image(at[0], at[1], key);
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

  // back to front: far-side limbs, body (+skin), near leg, tail, head, near arm
  const legKey = choice.legs && `${choice.legs}_legs`;
  const armKey = choice.arms && `${choice.arms}_arms`;
  const legFar = legKey && ART[legKey]?.far;   // real art with its own far-side leg
  if (legFar) attachImage(scene, c, legFar, A.hip, color);
  else if (legKey) attachImage(scene, c, legKey, [A.hip[0] - 26, A.hip[1] - 10], shade);
  // Front legs from a different dino get stretched/shrunk so all four feet stand on the same ground.
  const armStretch = frontLegStretch(scene, choice);
  if (armKey) attachImage(scene, c, armKey, [A.shoulder[0] - 22, A.shoulder[1] - 10], shade).setScale(1, armStretch);

  const body = scene.add.image(0, 0, texturedBodyKey(scene, choice.body, choice.texture)).setOrigin(0);
  body.setTint(color);
  c.add(body);

  if (legKey) attachImage(scene, c, legKey, A.hip, color);   // near leg layered on top of the body

  if (choice.tail) attachImage(scene, c, `${choice.tail}_tail`, A.tail_base, color);
  if (choice.head) attachImage(scene, c, `${choice.head}_head`, A.neck, color);
  if (choice.arms) attachImage(scene, c, `${choice.arms}_arms`, A.shoulder, color).setScale(1, armStretch);
  return c;
}

// How much to stretch front legs so their feet line up with the back feet (1 = no change).
export function frontLegStretch(scene, choice) {
  const { body, legs, arms } = choice;
  if (!body || !legs || !arms || !FRONT_LEGS.includes(arms)) return 1;
  const A = BODY_ANCHORS[body];
  const lk = `${legs}_legs`, ak = `${arms}_arms`;
  const lh = scene.textures.get(lk).getSourceImage().height;
  const ah = scene.textures.get(ak).getSourceImage().height;
  const ly = (ATTACH[lk] || [0, 0])[1], ay = (ATTACH[ak] || [0, 0])[1];
  const backFoot = A.hip[1] - ly + lh;
  const want = (backFoot - A.shoulder[1]) / (ah - ay);
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
