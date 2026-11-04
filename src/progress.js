// Trophy Room progress: stats, collectibles, trophies, the dino shelf, and the save code.
// Everything lives in the same browser save as scores (save.js). New fields are only ever ADDED,
// so updating the game never wipes anyone's collection.
import { COLLECTIBLES, SETS, TOPICS, DIG_WEIGHTS, TROPHIES, RARITY, SHELF_SIZE } from './data/collectibles.js';
import { COLORS, TEXTURES } from './data/parts.js';

const TOPIC_KEYS = Object.keys(TOPICS);
const TEX_KEYS = Object.keys(TEXTURES);
const FOUR_LEGGED = ['triceratops', 'stegosaurus', 'brachiosaurus', 'ankylosaurus'];
const TOOTHY = ['trex', 'spinosaurus'];
const PARTS = ['body', 'arms', 'head', 'legs', 'tail'];

function blankProgress() {
  return {
    games: 0, right: 0, wrong: 0, silly: 0, dice: 0, trexArms: 0, toothy: 0, mixed: 0, perfect: 0,
    topics: Object.fromEntries(TOPIC_KEYS.map((k) => [k, 0])),
    colors: [], textures: []
  };
}

// Adds the Trophy Room fields to a save (and fills them in from old score history the first time).
export function ensureProgress(save) {
  if (!save.progress) {
    const p = blankProgress();
    for (const s of save.scores || []) {
      p.games++; p.right += s.correct; p.wrong += s.answered - s.correct;
      if (s.answered && s.correct === s.answered) p.perfect++;
    }
    save.progress = p;
  }
  const b = blankProgress();
  save.progress = { ...b, ...save.progress, topics: { ...b.topics, ...(save.progress.topics || {}) } };
  save.collected = save.collected || {};
  save.trophiesShown = save.trophiesShown || [];
  if (!save.shelf) save.shelf = save.lastDino ? [{ choice: save.lastDino, name: save.lastDinoName || 'My Dino' }] : [];
  if (save.pendingDino === undefined) save.pendingDino = null;
  return save;
}

export function topicsOf(q) {
  const right = (q.answers.find((a) => a.correct) || {}).text || '';
  return TOPIC_KEYS.filter((k) => TOPICS[k].test(`${q.q} ${right}`));
}

function summary(save) {
  const p = save.progress;
  const base = COLORS.map((c) => c.hex);
  return { ...p, colorsUsed: base.filter((h) => p.colors.includes(h)).length, texturesUsed: TEX_KEYS.filter((t) => p.textures.includes(t)).length };
}

export function earnedTrophies(save) {
  const s = summary(save);
  return TROPHIES.filter((t) => t.test(s, save.collected));
}
// The player's rarest trophies (rarer first; within a rarity, the harder one first).
export function topTrophies(save, n = 5) {
  return earnedTrophies(save)
    .map((t) => ({ t, i: TROPHIES.indexOf(t) }))
    .sort((a, b) => RARITY[b.t.rarity].rank - RARITY[a.t.rarity].rank || b.i - a.i)
    .slice(0, n).map((x) => x.t);
}

export function setProgress(save, setId) {
  const items = COLLECTIBLES.filter((c) => c.set === setId);
  return { have: items.filter((c) => save.collected[c.id]).length, total: items.length };
}
export function completedSets(save) {
  return SETS.filter((s) => { const p = setProgress(save, s.id); return p.have === p.total; });
}
// Extra colors unlocked by finishing sets.
export function bonusColors(save) {
  return completedSets(ensureProgress(save)).map((s) => s.reward);
}

function pickDig() {
  const entries = Object.entries(DIG_WEIGHTS);
  let r = Math.random() * entries.reduce((a, [, w]) => a + w, 0);
  for (const [id, w] of entries) { if ((r -= w) < 0) return id; }
  return entries[0][0];
}

// Call once at the end of a game. g = { choice, name, correct, answered, bestStreak, comeback, silly, topics, diceName }
export function recordGame(save, g) {
  ensureProgress(save);
  const p = save.progress, c = save.collected;
  const before = new Set(Object.keys(c).filter((k) => c[k]));
  const setsBefore = new Set(completedSets(save).map((s) => s.id));
  const award = (id) => { c[id] = (c[id] || 0) + 1; };

  const ch = g.choice || {};
  const parts = PARTS.map((k) => ch[k]).filter(Boolean);
  const distinct = new Set(parts).size;
  const perfect = g.answered > 0 && g.correct === g.answered;

  p.games++; p.right += g.correct; p.wrong += g.answered - g.correct; p.silly += g.silly || 0;
  if (g.diceName) p.dice++;
  for (const [k, n] of Object.entries(g.topics || {})) p.topics[k] = (p.topics[k] || 0) + n;
  if (ch.color != null && !p.colors.includes(ch.color)) p.colors.push(ch.color);
  if (ch.texture && !p.textures.includes(ch.texture)) p.textures.push(ch.texture);
  if (distinct >= 3) p.mixed++;
  if (ch.arms === 'trex') p.trexArms++;
  if (TOOTHY.includes(ch.head)) p.toothy++;
  if (perfect) p.perfect++;

  // Streak Set (these can be earned again and again; the shelf shows how many)
  const s = g.bestStreak || 0;
  if (s >= 3) award('raptor_feather');
  if (s >= 5) award('sharp_claw');
  if (s >= 10) award('golden_fossil');
  if (s >= 15) award('diamond_egg');
  if (perfect) award('legendary_skull');
  if (g.comeback) award('comeback_kid');

  // Silly Set
  const once = (id, ok) => { if (ok && !c[id]) award(id); };
  once('claw_grabber', ch.arms === 'trex' && FOUR_LEGGED.includes(ch.body));
  once('arm_dumbbells', p.trexArms >= 3);
  once('rubber_chicken', p.silly >= 1);
  once('lucky_dice', p.dice >= 5);
  once('mismatched_socks', parts.length === 5 && distinct === 5);
  once('dino_toothbrush', p.toothy >= 10);

  // Skeleton Set
  if (parts.length === 5 && distinct === 1) once(`skel_${ch.body}`, true);

  // Expert Set
  for (const item of COLLECTIBLES.filter((x) => x.set === 'expert')) once(item.id, (p.topics[item.topic] || 0) >= item.need);

  // Fossil dig: a better score digs deeper
  const pct = g.answered ? g.correct / g.answered : 0;
  let dig = null, digNew = false;
  if (Math.random() < 0.35 + 0.5 * pct) {
    dig = pickDig();
    digNew = !c[dig];
    award(dig);
  }

  // Dino shelf
  let shelfAdded = false;
  if (save.shelf.length < SHELF_SIZE) { save.shelf.push({ choice: ch, name: g.name }); shelfAdded = true; }
  else save.pendingDino = { choice: ch, name: g.name };

  const newCollectibles = COLLECTIBLES.filter((x) => c[x.id] && !before.has(x.id) && x.id !== dig).map((x) => x.id);
  const earned = earnedTrophies(save).map((t) => t.id);
  const newTrophies = earned.filter((id) => !save.trophiesShown.includes(id));
  save.trophiesShown = [...new Set([...save.trophiesShown, ...earned])];
  const newSets = completedSets(save).filter((x) => !setsBefore.has(x.id));

  return { dig, digNew, newCollectibles, newTrophies, newSets, shelfAdded, shelfFull: !shelfAdded };
}

// ---------- Save code ----------
// A short code (8 groups of 4) that holds stats, collectibles and colors/skins used.
// Not case sensitive, dashes optional, and look-alike letters (O/0, I/L/1) are treated the same.
// The dino shelf isn't in the code (it would make the code far too long).
const ALPHA = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
const CODE_COLLECTIBLES = 30; // version 1 holds the first 30 collectibles
const FIELDS = [
  ['games', 11], ['right', 14], ['wrong', 14], ['silly', 6], ['dice', 4], ['trexArms', 3],
  ['toothy', 5], ['mixed', 5], ['perfect', 3], ...TOPIC_KEYS.map((k) => [`topic:${k}`, 5])
];

export function makeSaveCode(save) {
  ensureProgress(save);
  const p = save.progress;
  let bits = '';
  const put = (v, n) => { bits += Math.max(0, Math.min(v, 2 ** n - 1)).toString(2).padStart(n, '0'); };
  put(1, 3); // version
  for (const [k, n] of FIELDS) put(k.startsWith('topic:') ? p.topics[k.slice(6)] || 0 : p[k] || 0, n);
  for (const x of COLLECTIBLES.slice(0, CODE_COLLECTIBLES)) bits += save.collected[x.id] ? '1' : '0';
  for (const col of COLORS) bits += p.colors.includes(col.hex) ? '1' : '0';
  for (const t of TEX_KEYS) bits += p.textures.includes(t) ? '1' : '0';
  bits = bits.padEnd(Math.ceil((bits.length + 6) / 5) * 5 - 6, '0');
  let sum = 0;
  for (let i = 0; i < bits.length; i += 5) sum += parseInt(bits.slice(i, i + 5), 2) * (i / 5 + 1);
  bits += (sum % 64).toString(2).padStart(6, '0');
  let code = '';
  for (let i = 0; i < bits.length; i += 5) code += ALPHA[parseInt(bits.slice(i, i + 5).padEnd(5, '0'), 2)];
  while (code.length % 4) code += '0';
  return code.match(/.{4}/g).join('-');
}

export function cleanCode(text) {
  return (text || '').toUpperCase().replace(/[^0-9A-Z]/g, '').replace(/O/g, '0').replace(/[IL]/g, '1').replace(/U/g, 'V');
}
// Adds dashes as the player types: ABCD-EFGH-...
export function formatCode(text) {
  return (cleanCode(text).match(/.{1,4}/g) || []).join('-');
}

// Restores a code into the save. Never removes anything: keeps whichever is bigger/unlocked.
// Returns true if the code was valid.
export function applySaveCode(save, text) {
  ensureProgress(save);
  const chars = cleanCode(text);
  let bits = '';
  for (const ch of chars) { const v = ALPHA.indexOf(ch); if (v < 0) return false; bits += v.toString(2).padStart(5, '0'); }
  const dataLen = 3 + FIELDS.reduce((a, [, n]) => a + n, 0) + CODE_COLLECTIBLES + COLORS.length + TEX_KEYS.length;
  const padded = Math.ceil((dataLen + 6) / 5) * 5 - 6;
  if (bits.length < padded + 6) return false;
  const body = bits.slice(0, padded), check = parseInt(bits.slice(padded, padded + 6), 2);
  let sum = 0;
  for (let i = 0; i < body.length; i += 5) sum += parseInt(body.slice(i, i + 5), 2) * (i / 5 + 1);
  if (sum % 64 !== check) return false;
  let at = 0;
  const take = (n) => { const v = parseInt(body.slice(at, at + n), 2); at += n; return v; };
  if (take(3) !== 1) return false;
  const p = save.progress;
  for (const [k, n] of FIELDS) {
    const v = take(n);
    if (k.startsWith('topic:')) { const t = k.slice(6); p.topics[t] = Math.max(p.topics[t] || 0, v); } else p[k] = Math.max(p[k] || 0, v);
  }
  for (const x of COLLECTIBLES.slice(0, CODE_COLLECTIBLES)) if (take(1) && !save.collected[x.id]) save.collected[x.id] = 1;
  for (const col of COLORS) if (take(1) && !p.colors.includes(col.hex)) p.colors.push(col.hex);
  for (const t of TEX_KEYS) if (take(1) && !p.textures.includes(t)) p.textures.push(t);
  save.trophiesShown = [...new Set([...save.trophiesShown, ...earnedTrophies(save).map((t) => t.id)])];
  return true;
}
