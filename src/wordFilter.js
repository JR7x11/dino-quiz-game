// Keeps rude words out of player names and dinosaur names.
// Names can only contain letters and spaces, so only letters need checking.
//
// Two lists, so innocent names don't get blocked by accident:
//  ANYWHERE   - blocked even inside a longer name ("Shitasaurus", "Fuuuckzilla")
//  WHOLE_WORD - short words blocked only as a whole word, or as the front of a
//               dino-style name ("Butt", "Buttasaurus", "Assaurus"), so names like
//               Cassie, Grass, Button, Scrap, Hello and Michelle still work.
//  ALLOWED    - innocent words that happen to contain an ANYWHERE word.
//
// To block another word, add it in lowercase to ANYWHERE or WHOLE_WORD.

const ANYWHERE = [
  'fuck', 'fuk', 'fuq', 'shit', 'bitch', 'biatch', 'bastard', 'cunt', 'dick', 'cock', 'pussy',
  'penis', 'vagina', 'vulva', 'boob', 'tits', 'titty', 'titties', 'nipple', 'dildo', 'porn', 'sexy',
  'horny', 'orgasm', 'masturb', 'jerkoff', 'blowjob', 'handjob', 'rimjob', 'butthole', 'asshole',
  'asshat', 'assface', 'arsehole', 'dumbass', 'jackass', 'smartass', 'bullshit', 'motherf', 'wank',
  'twat', 'slut', 'whore', 'hooker', 'skank', 'molest', 'hitler', 'nigg', 'niger', 'negro', 'fagot',
  'retard', 'tranny', 'dyke', 'kike', 'chink', 'wetback', 'beaner', 'gook', 'raghead', 'towelhead',
  'kkk', 'killyourself', 'suicide', 'cocaine', 'heroin', 'goddam', 'piss', 'douche', 'scrotum',
  'testicle', 'erection', 'boner', 'semen', 'sperm', 'peepee', 'poopoo'
];

const WHOLE_WORD = [
  'ass', 'arse', 'butt', 'sex', 'fag', 'spic', 'spick', 'jap', 'coon', 'nig', 'tit', 'puss', 'balls',
  'ho', 'hoe', 'hell', 'damn', 'crap', 'meth', 'weed', 'cum', 'anal', 'anus', 'kys', 'pedo', 'rape',
  'rapist', 'nazi', 'poop', 'poo', 'pee', 'turd', 'fart'
];

const ALLOWED = [
  'scunthorpe', 'dickens', 'dickinson', 'cocktail', 'cockatoo', 'cockatiel', 'peacock', 'hancock',
  'hitchcock', 'woodcock', 'shuttlecock', 'thorny', 'swank', 'nigeria', 'heroine', 'booboo'
];

// Endings kids add to a rude word ("Assaurus", "Poopy", "Butthead").
const DINO_ENDINGS = ['asaurus', 'osaurus', 'saurus', 'aurus', 'zilla', 'tops', 'rex', 'raptor', 'odon', 'don', 's', 'es',
  'y', 'ie', 'ies', 'head', 'heads', 'face', 'hole', 'brain', 'breath'];

// Real words that look like a short rude word plus an ending ("spic" + "y").
const ALLOWED_WORDS = ['spicy', 'hoy', 'hoey', 'hells'];

function squash(s) {
  return s.replace(/(.)\1+/g, '$1'); // "fuuuck" -> "fuck"
}

function isBadWord(word) {
  if (ALLOWED_WORDS.includes(word)) return false;
  return WHOLE_WORD.some((bad) =>
    word === bad || (word.startsWith(bad) && DINO_ENDINGS.includes(word.slice(bad.length)))
  );
}

// Returns true if the name is OK to use.
export function isCleanName(name) {
  const words = (name || '').toLowerCase().replace(/[^a-z ]/g, '').split(/\s+/).filter(Boolean);

  // 1) rude words anywhere in the name, also with stretched letters squashed ("shiiiit")
  for (const text of [words.join(''), squash(words.join(''))]) {
    let checked = text;
    for (const ok of ALLOWED) checked = checked.split(ok).join(' ');
    if (ANYWHERE.some((bad) => checked.includes(bad))) return false;
  }

  // 2) short rude words as a whole word or the front of a dino name
  return !words.some((w) => isBadWord(w) || isBadWord(squash(w)));
}
