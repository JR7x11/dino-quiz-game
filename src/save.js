// Everything is stored in this browser only (localStorage). Nothing is sent anywhere.
import { ensureProgress } from './progress.js';
const KEY = 'dinoQuizSave.v1';

function defaults() {
  return {
    name: null,          // player's name
    lastDino: null,      // part choices of the last finished dino (redrawn, never stored as an image)
    lastDinoName: null,  // what the player named that dino
    scores: [],          // last 50 games: { date, correct, answered, pct }
    best: null,          // best game ever
    seenQuestions: [],   // question ids already shown, so new games prefer fresh questions
    seenFacts: []        // fun-fact numbers already shown, so new games get fresh facts
  };
}

export function loadSave() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return ensureProgress({ ...defaults(), ...JSON.parse(raw) });
  } catch (e) { /* storage blocked or corrupt: start fresh */ }
  return ensureProgress(defaults());
}

export function saveGame(save) {
  try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) { /* ignore */ }
}

export function isAhzir(name) {
  return (name || '').trim().toLowerCase() === 'ahzir';
}

// "Ahzir" -> "Ahzirasaurus", "Mia" -> "Miasaurus"
export function dinoName(name) {
  const n = (name || 'Mystery').trim();
  const cap = n.charAt(0).toUpperCase() + n.slice(1);
  return /a$/i.test(cap) ? cap + 'saurus' : cap + 'asaurus';
}
