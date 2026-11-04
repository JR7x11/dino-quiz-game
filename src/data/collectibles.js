// Collectibles, trophies and set rewards for the Trophy Room.
// Art: until Sutton's pictures are in public/art (keys col_<id> and trophy_cup), the game shows the emoji.
// Order matters: the save code stores collectibles by their position, so only ADD new ones at the end of a set list
// (and new sets at the end of SETS). Never reorder or remove.

export const SETS = [
  { id: 'streak', name: 'Streak Set', how: 'Right answers in a row',
    reward: { name: 'Fossil Gold', hex: 0xd4a017 } },
  { id: 'dig', name: 'Fossil Dig Set', how: 'Found by digging after a game (better scores dig deeper!)',
    reward: { name: 'Ranger Maroon', hex: 0x7a1f2b } },
  { id: 'silly', name: 'Silly Set', how: 'Funny moments',
    reward: { name: 'Rubber Chicken Yellow', hex: 0xffe14d } },
  { id: 'skeleton', name: 'Skeleton Set', how: 'Build a dino using all parts from one species',
    reward: { name: 'Bone White', hex: 0xede4d0 } },
  { id: 'expert', name: 'Expert Set', how: 'Know your stuff about a topic',
    reward: { name: 'Brainy Teal', hex: 0x1fa3a0 } }
];

// emoji = placeholder picture until the real art arrives.
export const COLLECTIBLES = [
  // ---- Streak Set ----
  { id: 'raptor_feather', set: 'streak', name: 'Raptor Feather', emoji: '\u{1FAB6}', hint: 'Get 3 right in a row',
    about: 'Velociraptor had feathers! Scientists can see bumps on its arm bones where the feathers attached.' },
  { id: 'sharp_claw', set: 'streak', name: 'Sharp Claw', emoji: '\u{1F43E}', hint: 'Get 5 right in a row',
    about: 'Raptors had a big curved claw on each foot that they held up off the ground to keep it sharp.' },
  { id: 'golden_fossil', set: 'streak', name: 'Golden Fossil', emoji: '\u{1F31F}', hint: 'Get 10 right in a row',
    about: 'Ten in a row! Some fossils really do sparkle: "fool\'s gold" (pyrite) can form inside them.' },
  { id: 'diamond_egg', set: 'streak', name: 'Diamond Egg', emoji: '\u{1F48E}', hint: 'Get 15 right in a row',
    about: 'Fifteen in a row! Real dinosaur eggs had hard shells, a lot like bird eggs.' },
  { id: 'legendary_skull', set: 'streak', name: 'Legendary Skull', emoji: '\u{1F480}', hint: 'Finish a game with no wrong answers',
    about: 'A perfect game! A big T. rex skull is about as long as a grown-up is tall.' },
  { id: 'comeback_kid', set: 'streak', name: 'Comeback Kid', emoji: '\u{1F4AA}', hint: 'Get 5 right in a row after a wrong answer',
    about: 'Never give up! Paleontologists sometimes dig for years before finding a great fossil.' },

  // ---- Fossil Dig Set ----
  { id: 'dino_poop', set: 'dig', name: 'Petrified Dino Poop', emoji: '\u{1F4A9}', hint: 'Keep digging after games!',
    about: 'Fossil poop is called a coprolite. Scientists study it to learn what dinosaurs ate. (It doesn\'t smell anymore!)' },
  { id: 'ranger_jeep', set: 'dig', name: 'Ranger Jeep', emoji: '\u{1F699}', hint: 'Keep digging after games!',
    about: 'A toy park ranger jeep! Someone must have dropped it at the dig site.' },
  { id: 'megalodon_tooth', set: 'dig', name: 'Megalodon Tooth', emoji: '\u{1F988}', hint: 'Keep digging after games!',
    about: 'Not a dinosaur! Megalodon was a giant shark that lived millions of years after the dinosaurs were gone. Its teeth could be as big as your hand.' },
  { id: 'sabertooth_fang', set: 'dig', name: 'Saber-Tooth Cat Fang', emoji: '\u{1F42F}', hint: 'Keep digging after games!',
    about: 'Not a dinosaur! Saber-toothed cats like Smilodon were mammals that lived during the Ice Age, long after the dinosaurs.' },
  { id: 'amber_bug', set: 'dig', name: 'Amber with a Bug', emoji: '\u{1F99F}', hint: 'Keep digging after games!',
    about: 'Amber is fossilized tree sap. Bugs, and once even a feathered dinosaur tail, have been found trapped inside it.' },
  { id: 'meteorite_chip', set: 'dig', name: 'Meteorite Chip', emoji: '☄️', hint: 'Super rare! Keep digging after games!',
    about: 'A piece of space rock! A giant asteroid hit Earth 66 million years ago and helped end the age of dinosaurs.' },

  // ---- Silly Set ----
  { id: 'claw_grabber', set: 'silly', name: 'T. rex Claw Grabber', emoji: '\u{1F9BE}', hint: 'Put T. rex arms on a big four-legged body',
    about: 'Finally, T. rex can reach the top shelf!' },
  { id: 'arm_dumbbells', set: 'silly', name: 'Tiny Arm Dumbbells', emoji: '\u{1F3CB}️', hint: 'Build 3 dinos with T. rex arms',
    about: 'T. rex arms were short but strong. Each one could probably lift about as much as a grown-up!' },
  { id: 'rubber_chicken', set: 'silly', name: 'Rubber Chicken', emoji: '\u{1F414}', hint: 'Pick a silly answer',
    about: 'Fun fact: chickens really are related to T. rex. Birds are living dinosaurs!' },
  { id: 'lucky_dice', set: 'silly', name: 'Lucky Dice', emoji: '\u{1F3B2}', hint: 'Name 5 dinos with the dice',
    about: 'Roll, roll, roll! Some real dinosaur names are pretty silly too, like Irritator.' },
  { id: 'mismatched_socks', set: 'silly', name: 'Mismatched Socks', emoji: '\u{1F9E6}', hint: 'Build a dino with every part from a different dinosaur',
    about: 'Nothing matches, and that\'s the point!' },
  { id: 'dino_toothbrush', set: 'silly', name: 'Dino-Sized Toothbrush', emoji: '\u{1FAA5}', hint: 'Build 10 dinos with a T. rex or Spinosaurus head',
    about: 'Good news: dinosaurs grew new teeth over and over, all their lives.' },

  // ---- Skeleton Set ----
  { id: 'skel_trex', set: 'skeleton', name: 'T. rex Skull', emoji: '\u{1F996}', hint: 'Build an all-T. rex dino',
    about: 'T. rex had one of the strongest bites of any land animal ever.' },
  { id: 'skel_triceratops', set: 'skeleton', name: 'Triceratops Horn', emoji: '\u{1F98F}', hint: 'Build an all-Triceratops dino',
    about: 'Triceratops brow horns could grow about as long as a baseball bat.' },
  { id: 'skel_stegosaurus', set: 'skeleton', name: 'Stegosaurus Plate', emoji: '\u{1F6E1}️', hint: 'Build an all-Stegosaurus dino',
    about: 'Stegosaurus plates had grooves for blood vessels and may have helped it show off or warm up.' },
  { id: 'skel_spinosaurus', set: 'skeleton', name: 'Spinosaurus Sail Spine', emoji: '⛵', hint: 'Build an all-Spinosaurus dino',
    about: 'The spines holding up Spinosaurus\'s sail could be taller than a grown-up.' },
  { id: 'skel_brachiosaurus', set: 'skeleton', name: 'Brachiosaurus Tooth', emoji: '\u{1F992}', hint: 'Build an all-Brachiosaurus dino',
    about: 'Brachiosaurus had spoon-shaped teeth for stripping leaves off tall trees.' },
  { id: 'skel_ankylosaurus', set: 'skeleton', name: 'Ankylosaurus Tail Club', emoji: '\u{1F528}', hint: 'Build an all-Ankylosaurus dino',
    about: 'Ankylosaurus swung its bony tail club to defend itself.' },

  // ---- Expert Set ----
  { id: 'exp_raptor', set: 'expert', name: 'Raptor Expert', emoji: '\u{1F985}', hint: 'Get 10 raptor questions right', topic: 'raptor', need: 10,
    about: 'Real Velociraptors were only about the size of a turkey!' },
  { id: 'exp_sea', set: 'expert', name: 'Sea Monster Expert', emoji: '\u{1F30A}', hint: 'Get 8 sea reptile questions right', topic: 'sea', need: 8,
    about: 'Mosasaurs and plesiosaurs ruled the seas, but they were reptiles, not dinosaurs.' },
  { id: 'exp_sky', set: 'expert', name: 'Sky Expert', emoji: '\u{1FA81}', hint: 'Get 8 flying reptile questions right', topic: 'sky', need: 8,
    about: 'Pterosaurs flew on wings held up by one super long finger.' },
  { id: 'exp_eggs', set: 'expert', name: 'Egg Expert', emoji: '\u{1F95A}', hint: 'Get 10 egg and baby questions right', topic: 'eggs', need: 10,
    about: 'Some dinosaurs sat on their nests to keep their eggs warm, just like birds.' },
  { id: 'exp_names', set: 'expert', name: 'Name Expert', emoji: '\u{1F4DB}', hint: 'Get 10 name-meaning questions right', topic: 'names', need: 10,
    about: '"Dinosaur" means "terrible lizard."' },
  { id: 'exp_extinction', set: 'expert', name: 'Extinction Expert', emoji: '\u{1F30B}', hint: 'Get 10 extinction questions right', topic: 'extinction', need: 10,
    about: 'Birds, crocodiles, turtles and mammals all survived the asteroid 66 million years ago.' }
];

// Words that put a question into an Expert topic (matched against the question and its right answer).
export const TOPICS = {
  raptor: /raptor|Deinonychus|dromaeosaur/i,
  sea: /mosasaur|plesiosaur|ichthyosaur|Liopleurodon|Elasmosaurus|sea reptile|Megalodon|ocean|sea (animal|creature|lizard)/i,
  sky: /pterosaur|Pteranodon|Quetzalcoatlus|Rhamphorhynchus|flying reptile|wingspan|\bfly\b|flying/i,
  eggs: /\begg|nest|hatchling|embryo|baby|babies/i,
  names: /\bmeans\b|named after|name means|nickname|got its name/i,
  extinction: /asteroid|extinct|Chicxulub|crater|iridium|survive|died out|wiped out/i
};

// Fossil dig: chance of finding something = 35% + up to 50% more for a great score. Weights below pick what.
export const DIG_WEIGHTS = { dino_poop: 40, ranger_jeep: 22, megalodon_tooth: 15, sabertooth_fang: 12, amber_bug: 8, meteorite_chip: 3 };

// Trophies (achievements). The shelf shows a player's 5 rarest. Same rule: only add new ones at the end.
export const RARITY = {
  legendary: { name: 'Legendary', rank: 4, color: 0xffc21a },
  epic: { name: 'Epic', rank: 3, color: 0xa66cff },
  rare: { name: 'Rare', rank: 2, color: 0x4a9be8 },
  common: { name: 'Common', rank: 1, color: 0xc98a4b }
};
export const TROPHIES = [
  { id: 'first_dig', name: 'First Dig', rarity: 'common', hint: 'Finish your first game', test: (p) => p.games >= 1 },
  { id: 'fossil_hunter', name: 'Fossil Hunter', rarity: 'common', hint: 'Play 5 games', test: (p) => p.games >= 5 },
  { id: 'oopsasaurus', name: 'Oops-a-saurus', rarity: 'common', hint: 'Pick 10 silly answers', test: (p) => p.silly >= 10 },
  { id: 'dino_brain', name: 'Dino Brain', rarity: 'rare', hint: 'Get 100 answers right', test: (p) => p.right >= 100 },
  { id: 'mix_master', name: 'Mix Master', rarity: 'rare', hint: 'Build 10 dinos using parts from 3 or more dinosaurs', test: (p) => p.mixed >= 10 },
  { id: 'pure_breed', name: 'Pure Breed', rarity: 'rare', hint: 'Build all-one-species dinos of 3 different dinosaurs', test: (p, c) => ['skel_trex', 'skel_triceratops', 'skel_stegosaurus', 'skel_spinosaurus', 'skel_brachiosaurus', 'skel_ankylosaurus'].filter((id) => c[id]).length >= 3 },
  { id: 'paleontologist', name: 'Paleontologist', rarity: 'epic', hint: 'Play 25 games', test: (p) => p.games >= 25 },
  { id: 'rainbow_rex', name: 'Rainbow Rex', rarity: 'epic', hint: 'Use all 10 starting colors', test: (p) => p.colorsUsed >= 10 },
  { id: 'skin_collector', name: 'Skin Collector', rarity: 'epic', hint: 'Use all 6 skins', test: (p) => p.texturesUsed >= 6 },
  { id: 'triple_perfect', name: 'Triple Perfect', rarity: 'legendary', hint: 'Finish 3 games with no wrong answers', test: (p) => p.perfect >= 3 },
  { id: 'encyclopedia', name: 'Walking Encyclopedia', rarity: 'legendary', hint: 'Get 500 answers right', test: (p) => p.right >= 500 },
  { id: 'museum_curator', name: 'Museum Curator', rarity: 'legendary', hint: 'Play 100 games', test: (p) => p.games >= 100 }
];

export const SHELF_SIZE = 9;
