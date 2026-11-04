// THE QUESTION BANK: 500 questions.
//
// Every question has 4 answers:
//   correct      - the right one
//   believable   - a wrong answer that sounds right
//   kinda        - a wrong answer that's kinda possible
//   silly        - the joke answer
// The game shuffles the answer order every time.
//
// "fact": flipped versions of the same question share a fact id,
// and the game never shows two questions with the same fact in one game.

export const QUESTIONS = [
  {
    id: 'q001', fact: 'spino-sail',
    q: 'Which dinosaur had a giant sail on its back?',
    answers: [
      { text: 'Spinosaurus', correct: true },
      { text: 'Allosaurus', type: 'believable' },
      { text: 'Dimetrodon (trick: it is not a dinosaur!)', type: 'kinda' },
      { text: 'Sailboatasaurus', type: 'silly' }
    ]
  },
  {
    id: 'q002', fact: 'spino-sail',
    q: 'What did Spinosaurus have on its back?',
    answers: [
      { text: 'A tall sail', correct: true },
      { text: 'Rows of bony plates', type: 'believable' },
      { text: 'A hard shell', type: 'kinda' },
      { text: 'A jetpack', type: 'silly' }
    ]
  },
  {
    id: 'q003', fact: 'trike-diet',
    q: 'What did Triceratops mainly eat?',
    answers: [
      { text: 'Plants', correct: true },
      { text: 'Fish', type: 'believable' },
      { text: 'Other dinosaurs', type: 'kinda' },
      { text: 'Chicken nuggets', type: 'silly' }
    ]
  },
  {
    id: 'q004', fact: 'trike-horns',
    q: 'How many horns did Triceratops have on its face?',
    answers: [
      { text: '3', correct: true },
      { text: '2', type: 'believable' },
      { text: '5', type: 'kinda' },
      { text: '47', type: 'silly' }
    ]
  },
  {
    id: 'q005', fact: 'trike-horns',
    q: 'Which dinosaur’s name means "three-horned face"?',
    answers: [
      { text: 'Triceratops', correct: true },
      { text: 'Torosaurus', type: 'believable' },
      { text: 'Pachycephalosaurus', type: 'kinda' },
      { text: 'Hornsalotasaurus', type: 'silly' }
    ]
  },
  {
    id: 'q006', fact: 'trex-fingers',
    q: 'How many fingers did T. rex have on each hand?',
    answers: [
      { text: '2', correct: true },
      { text: '3', type: 'believable' },
      { text: '5', type: 'kinda' },
      { text: '10, with nail polish', type: 'silly' }
    ]
  },
  {
    id: 'q007', fact: 'trex-name',
    q: 'What does the name "Tyrannosaurus rex" mean?',
    answers: [
      { text: 'Tyrant lizard king', correct: true },
      { text: 'Giant hunter king', type: 'believable' },
      { text: 'Thunder lizard', type: 'kinda' },
      { text: 'Tiny arms, big snacks', type: 'silly' }
    ]
  },
  {
    id: 'q008', fact: 'trex-time',
    q: 'When did T. rex live?',
    answers: [
      { text: 'The Late Cretaceous', correct: true },
      { text: 'The Jurassic', type: 'believable' },
      { text: 'The Triassic', type: 'kinda' },
      { text: 'Last Tuesday', type: 'silly' }
    ]
  },
  {
    id: 'q009', fact: 'thagomizer',
    q: 'What are the spikes on the end of a Stegosaurus tail called?',
    answers: [
      { text: 'A thagomizer', correct: true },
      { text: 'A tail club', type: 'believable' },
      { text: 'A stinger', type: 'kinda' },
      { text: 'The Pokey McPokeface', type: 'silly' }
    ]
  },
  {
    id: 'q010', fact: 'anky-club',
    q: 'Which dinosaur had a heavy bony club on the end of its tail?',
    answers: [
      { text: 'Ankylosaurus', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Diplodocus', type: 'kinda' },
      { text: 'Baseballasaurus', type: 'silly' }
    ]
  },
  {
    id: 'q011', fact: 'brachio-legs',
    q: 'How did Brachiosaurus’s front legs compare to its back legs?',
    answers: [
      { text: 'Front legs were longer', correct: true },
      { text: 'Front legs were shorter', type: 'believable' },
      { text: 'They were exactly the same', type: 'kinda' },
      { text: 'They were made of spaghetti', type: 'silly' }
    ]
  },
  {
    id: 'q012', fact: 'brachio-legs',
    q: 'Which dinosaur had front legs longer than its back legs, a bit like a giraffe?',
    answers: [
      { text: 'Brachiosaurus', correct: true },
      { text: 'Diplodocus', type: 'believable' },
      { text: 'Stegosaurus', type: 'kinda' },
      { text: 'Giraffeasaurus', type: 'silly' }
    ]
  },
  {
    id: 'q013', fact: 'raptor-size',
    q: 'About how big was a real Velociraptor?',
    answers: [
      { text: 'About the size of a turkey', correct: true },
      { text: 'About the size of a horse', type: 'believable' },
      { text: 'About the size of a school bus', type: 'kinda' },
      { text: 'About the size of a jellybean', type: 'silly' }
    ]
  },
  {
    id: 'q014', fact: 'raptor-feathers',
    q: 'Did Velociraptor have feathers?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No, only scales', type: 'believable' },
      { text: 'Only on its head', type: 'kinda' },
      { text: 'Only on Sundays', type: 'silly' }
    ]
  },
  {
    id: 'q015', fact: 'birds',
    q: 'Which animals alive today are living dinosaurs?',
    answers: [
      { text: 'Birds', correct: true },
      { text: 'Crocodiles', type: 'believable' },
      { text: 'Lizards', type: 'kinda' },
      { text: 'Goldfish', type: 'silly' }
    ]
  },
  {
    id: 'q016', fact: 'pteranodon',
    q: 'Was Pteranodon a dinosaur?',
    answers: [
      { text: 'No, it was a flying reptile called a pterosaur', correct: true },
      { text: 'Yes, it was a flying dinosaur', type: 'believable' },
      { text: 'No, it was an early bird', type: 'kinda' },
      { text: 'No, it was a kite', type: 'silly' }
    ]
  },
  {
    id: 'q017', fact: 'extinction',
    q: 'What hit Earth about 66 million years ago and helped wipe out the dinosaurs?',
    answers: [
      { text: 'A giant asteroid', correct: true },
      { text: 'A huge blast from the Sun', type: 'believable' },
      { text: 'A piece of the Moon', type: 'kinda' },
      { text: 'A giant meatball', type: 'silly' }
    ]
  },
  {
    id: 'q018', fact: 'pachy-dome',
    q: 'Which dinosaur had a thick, dome-shaped skull?',
    answers: [
      { text: 'Pachycephalosaurus', correct: true },
      { text: 'Parasaurolophus', type: 'believable' },
      { text: 'Iguanodon', type: 'kinda' },
      { text: 'Helmetasaurus', type: 'silly' }
    ]
  },
  {
    id: 'q019', fact: 'parasaur-crest',
    q: 'What was the long tube-shaped crest on Parasaurolophus probably used for?',
    answers: [
      { text: 'Making loud honking sounds', correct: true },
      { text: 'Breathing underwater like a snorkel', type: 'believable' },
      { text: 'Storing extra food', type: 'kinda' },
      { text: 'Drinking smoothies', type: 'silly' }
    ]
  },
  {
    id: 'q020', fact: 'iguanodon-thumb',
    q: 'What did Iguanodon have on its thumbs?',
    answers: [
      { text: 'Big pointy spikes', correct: true },
      { text: 'Webbing for swimming', type: 'believable' },
      { text: 'Tiny feathers', type: 'kinda' },
      { text: 'Thumb rings', type: 'silly' }
    ]
  },
  {
    id: 'q021', fact: 'therizino-claws',
    q: 'Which dinosaur had huge claws about as long as a baseball bat?',
    answers: [
      { text: 'Therizinosaurus', correct: true },
      { text: 'Velociraptor', type: 'believable' },
      { text: 'T. rex', type: 'kinda' },
      { text: 'Scissorhandsasaurus', type: 'silly' }
    ]
  },
  {
    id: 'q022', fact: 'therizino-claws',
    q: 'What was special about Therizinosaurus’s hands?',
    answers: [
      { text: 'Giant claws about as long as a baseball bat', correct: true },
      { text: 'Six fingers on each hand', type: 'believable' },
      { text: 'No fingers at all', type: 'kinda' },
      { text: 'Built-in oven mitts', type: 'silly' }
    ]
  },
  // ---- Meat-eaters ----
  {
    id: 'q023', fact: 'trex-bite',
    q: 'Which dinosaur had one of the strongest bites of any land animal ever?',
    answers: [
      { text: 'Tyrannosaurus rex', correct: true },
      { text: 'Velociraptor', type: 'believable' },
      { text: 'Stegosaurus', type: 'kinda' },
      { text: 'A very angry chipmunk', type: 'silly' }
    ]
  },
  {
    id: 'q024', fact: 'trex-tooth-size',
    q: "About how long were T. rex's biggest teeth, counting the root?",
    answers: [
      { text: 'About 30 cm (12 inches)', correct: true },
      { text: 'About 3 cm (1 inch)', type: 'believable' },
      { text: 'About 2 meters (6 feet)', type: 'kinda' },
      { text: 'As long as a school bus', type: 'silly' }
    ]
  },
  {
    id: 'q025', fact: 'trex-where',
    q: 'Where have T. rex fossils been found?',
    answers: [
      { text: 'Western North America', correct: true },
      { text: 'Africa', type: 'believable' },
      { text: 'Antarctica', type: 'kinda' },
      { text: 'Inside a cereal box', type: 'silly' }
    ]
  },
  {
    id: 'q026', fact: 'allo-period',
    q: 'Allosaurus was a big meat-eater from which time period?',
    answers: [
      { text: 'The Late Jurassic', correct: true },
      { text: 'The Late Cretaceous', type: 'believable' },
      { text: 'The Triassic', type: 'kinda' },
      { text: 'The Snack Age', type: 'silly' }
    ]
  },
  {
    id: 'q027', fact: 'giganoto',
    q: 'Which giant meat-eater from South America was about as big as T. rex?',
    answers: [
      { text: 'Giganotosaurus', correct: true },
      { text: 'Compsognathus', type: 'believable' },
      { text: 'Iguanodon', type: 'kinda' },
      { text: 'Gigantosnackus', type: 'silly' }
    ]
  },
  {
    id: 'q028', fact: 'compy-size',
    q: 'Compsognathus was a meat-eater about the size of a...',
    answers: [
      { text: 'Chicken', correct: true },
      { text: 'Horse', type: 'believable' },
      { text: 'Elephant', type: 'kinda' },
      { text: 'Grain of rice', type: 'silly' }
    ]
  },
  {
    id: 'q029', fact: 'carno-horns',
    q: 'Which meat-eating dinosaur had two horns above its eyes, like a bull?',
    answers: [
      { text: 'Carnotaurus', correct: true },
      { text: 'Velociraptor', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: 'Moosasaurus', type: 'silly' }
    ]
  },
  {
    id: 'q030', fact: 'carno-arms',
    q: 'Carnotaurus is famous for having arms that were...',
    answers: [
      { text: 'Super tiny, even for its size', correct: true },
      { text: "Long like a monkey's", type: 'believable' },
      { text: 'As big as its legs', type: 'kinda' },
      { text: 'Made of spaghetti', type: 'silly' }
    ]
  },
  {
    id: 'q031', fact: 'dilo-crest',
    q: 'Which dinosaur had two thin crests on top of its head?',
    answers: [
      { text: 'Dilophosaurus', correct: true },
      { text: 'Pachycephalosaurus', type: 'believable' },
      { text: 'Ankylosaurus', type: 'kinda' },
      { text: 'Hairdo-saurus', type: 'silly' }
    ]
  },
  {
    id: 'q032', fact: 'dilo-movie',
    q: 'The neck frill and venom spitting of Dilophosaurus in the movies were...',
    answers: [
      { text: 'Made up for the movies', correct: true },
      { text: 'Webbed toes for swimming', type: 'believable' },
      { text: 'Wide, flat feet for wading', type: 'kinda' },
      { text: 'True only on Tuesdays', type: 'silly' }
    ]
  },
  {
    id: 'q033', fact: 'raptor-claw',
    q: "What was special about Velociraptor's feet?",
    answers: [
      { text: 'A big curved claw on each foot', correct: true },
      { text: 'Webbed toes for swimming', type: 'believable' },
      { text: 'Hooves like a horse', type: 'kinda' },
      { text: 'Built-in roller skates', type: 'silly' }
    ]
  },
  {
    id: 'q034', fact: 'raptor-where',
    q: 'Velociraptor fossils were first found in which country?',
    answers: [
      { text: 'Mongolia', correct: true },
      { text: 'USA', type: 'believable' },
      { text: 'Australia', type: 'kinda' },
      { text: 'The Moon', type: 'silly' }
    ]
  },
  {
    id: 'q035', fact: 'fighting-dinos',
    q: 'The famous \'Fighting Dinosaurs\' fossil shows a Velociraptor locked in battle with which dinosaur?',
    answers: [
      { text: 'Protoceratops', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Stegosaurus', type: 'kinda' },
      { text: 'A grumpy goose', type: 'silly' }
    ]
  },
  {
    id: 'q036', fact: 'deinonychus',
    q: 'Which raptor, bigger than Velociraptor, helped scientists realize dinosaurs could be fast and active?',
    answers: [
      { text: 'Deinonychus', correct: true },
      { text: 'Diplodocus', type: 'believable' },
      { text: 'Ankylosaurus', type: 'kinda' },
      { text: 'Sloth-o-saurus', type: 'silly' }
    ]
  },
  {
    id: 'q037', fact: 'baryonyx',
    q: 'Baryonyx had a long snout like a crocodile. What did it eat a lot of?',
    answers: [
      { text: 'Fish', correct: true },
      { text: 'Leaves', type: 'believable' },
      { text: 'Insects', type: 'kinda' },
      { text: 'Pizza', type: 'silly' }
    ]
  },
  {
    id: 'q038', fact: 'spino-water',
    q: 'Scientists think Spinosaurus spent lots of time...',
    answers: [
      { text: 'Near or in water, hunting fish', correct: true },
      { text: 'High up in trees', type: 'believable' },
      { text: 'Deep underground', type: 'kinda' },
      { text: 'At the mall', type: 'silly' }
    ]
  },
  {
    id: 'q039', fact: 'spino-long',
    q: 'Which meat-eating dinosaur was probably even LONGER than T. rex?',
    answers: [
      { text: 'Spinosaurus', correct: true },
      { text: 'Allosaurus', type: 'believable' },
      { text: 'Compsognathus', type: 'kinda' },
      { text: 'A really long hot dog', type: 'silly' }
    ]
  },
  {
    id: 'q040', fact: 'therizino-diet',
    q: 'Even though it had giant claws, Therizinosaurus probably ate mostly...',
    answers: [
      { text: 'Plants', correct: true },
      { text: 'Sharks', type: 'believable' },
      { text: 'Other big dinosaurs', type: 'kinda' },
      { text: 'Spaghetti', type: 'silly' }
    ]
  },
  {
    id: 'q041', fact: 'oviraptor-nest',
    q: "Oviraptor's name means \"egg thief,\" but scientists later found out it was really...",
    answers: [
      { text: 'Sitting on its own nest', correct: true },
      { text: 'Stealing crocodile eggs', type: 'believable' },
      { text: 'Burying eggs to hide them', type: 'kinda' },
      { text: 'Running a bakery', type: 'silly' }
    ]
  },
  {
    id: 'q042', fact: 'oviraptor-beak',
    q: 'Oviraptor had no teeth. Instead it had...',
    answers: [
      { text: 'A beak', correct: true },
      { text: 'Tusks', type: 'believable' },
      { text: 'Fangs', type: 'kinda' },
      { text: 'Braces', type: 'silly' }
    ]
  },
  {
    id: 'q043', fact: 'ornitho-ostrich',
    q: 'Ornithomimids like Gallimimus looked a lot like which bird?',
    answers: [
      { text: 'An ostrich', correct: true },
      { text: 'A penguin', type: 'believable' },
      { text: 'A parrot', type: 'kinda' },
      { text: 'A rubber duck', type: 'silly' }
    ]
  },
  {
    id: 'q044', fact: 'gallimimus-run',
    q: 'Gallimimus was built for...',
    answers: [
      { text: 'Running fast', correct: true },
      { text: 'Swimming deep', type: 'believable' },
      { text: 'Digging tunnels', type: 'kinda' },
      { text: 'Ballet', type: 'silly' }
    ]
  },
  {
    id: 'q045', fact: 'troodon-brain',
    q: 'Which small dinosaur had one of the biggest brains for its body size?',
    answers: [
      { text: 'Troodon', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Diplodocus', type: 'kinda' },
      { text: 'Brainasaurus', type: 'silly' }
    ]
  },
  {
    id: 'q046', fact: 'trex-length',
    q: 'About how long was an adult T. rex from nose to tail?',
    answers: [
      { text: 'About 12 meters (40 feet)', correct: true },
      { text: 'About 2 meters (6 feet)', type: 'believable' },
      { text: 'About 60 meters (200 feet)', type: 'kinda' },
      { text: 'About 12 hot dogs', type: 'silly' }
    ]
  },
  {
    id: 'q047', fact: 'trex-sue',
    q: 'What is the name of one of the biggest and most complete T. rex skeletons ever found?',
    answers: [
      { text: 'Sue', correct: true },
      { text: 'Bob', type: 'believable' },
      { text: 'Rexy', type: 'kinda' },
      { text: 'Princess Chompers', type: 'silly' }
    ]
  },
  {
    id: 'q048', fact: 'sue-where',
    q: 'The T. rex named Sue is on display in a museum in which city?',
    answers: [
      { text: 'Chicago', correct: true },
      { text: 'On four legs', type: 'believable' },
      { text: 'On two legs, dragging its tail on the ground', type: 'kinda' },
      { text: 'Under your bed', type: 'silly' }
    ]
  },
  {
    id: 'q049', fact: 'trex-walk',
    q: 'How did T. rex walk?',
    answers: [
      { text: 'On two legs', correct: true },
      { text: 'On four legs', type: 'believable' },
      { text: 'On its tail', type: 'kinda' },
      { text: 'On a skateboard', type: 'silly' }
    ]
  },
  {
    id: 'q050', fact: 'trex-eyes',
    q: "T. rex's eyes faced forward, which helped it...",
    answers: [
      { text: 'Judge distances well', correct: true },
      { text: 'See behind itself', type: 'believable' },
      { text: 'See in total darkness', type: 'kinda' },
      { text: 'Read comic books', type: 'silly' }
    ]
  },
  {
    id: 'q051', fact: 'trex-smell',
    q: 'T. rex had a very large part of its brain for...',
    answers: [
      { text: 'Smelling', correct: true },
      { text: 'Swimming', type: 'believable' },
      { text: 'Climbing', type: 'kinda' },
      { text: 'Doing math homework', type: 'silly' }
    ]
  },
  {
    id: 'q052', fact: 'albertosaurus',
    q: 'Albertosaurus, a cousin of T. rex, was named after which Canadian province?',
    answers: [
      { text: 'Alberta', correct: true },
      { text: 'Ontario', type: 'believable' },
      { text: 'Quebec', type: 'kinda' },
      { text: "Albert's Pizza Shop", type: 'silly' }
    ]
  },
  {
    id: 'q053', fact: 'coelophysis',
    q: 'Coelophysis was a small meat-eater from which period?',
    answers: [
      { text: 'Late Triassic', correct: true },
      { text: 'Late Cretaceous', type: 'believable' },
      { text: 'The Ice Age', type: 'kinda' },
      { text: 'The Snack-assic', type: 'silly' }
    ]
  },
  {
    id: 'q054', fact: 'ghost-ranch',
    q: 'Hundreds of Coelophysis skeletons were found together at Ghost Ranch in which US state?',
    answers: [
      { text: 'New Mexico', correct: true },
      { text: 'Only its arms', type: 'believable' },
      { text: 'Only its tail', type: 'kinda' },
      { text: 'Atlantis', type: 'silly' }
    ]
  },
  {
    id: 'q055', fact: 'microraptor-wings',
    q: 'Microraptor had feathered wings on...',
    answers: [
      { text: 'All four limbs (arms and legs)', correct: true },
      { text: 'Only its tail', type: 'believable' },
      { text: 'Its head', type: 'kinda' },
      { text: 'Its belly button', type: 'silly' }
    ]
  },
  {
    id: 'q056', fact: 'microraptor-color',
    q: 'Tiny pigment structures in a Microraptor fossil showed its feathers were...',
    answers: [
      { text: 'Shiny black, like a crow', correct: true },
      { text: 'Bright red', type: 'believable' },
      { text: 'Pure white', type: 'kinda' },
      { text: 'Rainbow glitter', type: 'silly' }
    ]
  },
  {
    id: 'q057', fact: 'sinosauropteryx',
    q: 'Sinosauropteryx was the first dinosaur besides birds found with...',
    answers: [
      { text: 'Feathers (fuzzy feathers)', correct: true },
      { text: 'Horns', type: 'believable' },
      { text: 'Armor plates', type: 'kinda' },
      { text: 'A backpack', type: 'silly' }
    ]
  },
  {
    id: 'q058', fact: 'sino-tail',
    q: 'Scientists found that Sinosauropteryx had what pattern on its tail?',
    answers: [
      { text: 'Stripes (light and dark rings)', correct: true },
      { text: 'Spots', type: 'believable' },
      { text: 'Solid green', type: 'kinda' },
      { text: 'A tiny bow tie', type: 'silly' }
    ]
  },
  {
    id: 'q059', fact: 'yutyrannus',
    q: 'Yutyrannus, a big cousin of T. rex, is known to have had...',
    answers: [
      { text: 'Feathers', correct: true },
      { text: 'Wings for flying', type: 'believable' },
      { text: 'Armor plates', type: 'kinda' },
      { text: 'A mustache', type: 'silly' }
    ]
  },
  {
    id: 'q060', fact: 'megalosaurus',
    q: 'Which was the first dinosaur ever given a scientific name, in 1824?',
    answers: [
      { text: 'Megalosaurus', correct: true },
      { text: 'Iguanodon', type: 'believable' },
      { text: 'T. rex', type: 'kinda' },
      { text: 'Steve', type: 'silly' }
    ]
  },
  {
    id: 'q061', fact: 'megalo-where',
    q: 'Megalosaurus was discovered in which country?',
    answers: [
      { text: 'England', correct: true },
      { text: 'Brazil', type: 'believable' },
      { text: 'Japan', type: 'kinda' },
      { text: 'Narnia', type: 'silly' }
    ]
  },
  {
    id: 'q062', fact: 'cryolophosaurus',
    q: 'Cryolophosaurus, a crested meat-eater, was found in which frozen place?',
    answers: [
      { text: 'Antarctica', correct: true },
      { text: 'Siberia', type: 'believable' },
      { text: 'Greenland', type: 'kinda' },
      { text: 'A freezer', type: 'silly' }
    ]
  },
  {
    id: 'q063', fact: 'cryo-nick',
    q: 'Cryolophosaurus had a crest that earned it what nickname?',
    answers: [
      { text: '\'Elvisaurus\'', correct: true },
      { text: 'Above each eye', type: 'believable' },
      { text: 'On the back of its head', type: 'kinda' },
      { text: '\'Hairspray Rex\'', type: 'silly' }
    ]
  },
  {
    id: 'q064', fact: 'ceratosaurus',
    q: 'Ceratosaurus had a horn where?',
    answers: [
      { text: 'On its nose', correct: true },
      { text: 'Green, scaly skin', type: 'believable' },
      { text: 'Habit of lying in rivers', type: 'kinda' },
      { text: 'On its birthday hat', type: 'silly' }
    ]
  },
  {
    id: 'q065', fact: 'suchomimus',
    q: 'Suchomimus means \'crocodile mimic\' because of its...',
    answers: [
      { text: 'Long crocodile-like snout', correct: true },
      { text: 'Green color', type: 'believable' },
      { text: 'Ability to swim backward', type: 'kinda' },
      { text: 'Love of crocodile cartoons', type: 'silly' }
    ]
  },
  {
    id: 'q066', fact: 'tarbosaurus',
    q: 'Tarbosaurus, a close cousin of T. rex, lived in which part of the world?',
    answers: [
      { text: 'Asia', correct: true },
      { text: 'South America', type: 'believable' },
      { text: 'Australia', type: 'kinda' },
      { text: 'Mars', type: 'silly' }
    ]
  },
  {
    id: 'q067', fact: 'meat-teeth',
    q: 'Meat-eating dinosaurs usually had teeth that were...',
    answers: [
      { text: 'Sharp, curved, and jagged like steak knives', correct: true },
      { text: 'Flat like cow teeth', type: 'believable' },
      { text: 'Round like marbles', type: 'kinda' },
      { text: 'Made of candy corn', type: 'silly' }
    ]
  },
  {
    id: 'q068', fact: 'theropods',
    q: 'Almost all meat-eating dinosaurs belonged to which group?',
    answers: [
      { text: 'Theropods', correct: true },
      { text: 'Sauropods', type: 'believable' },
      { text: 'Ankylosaurs', type: 'kinda' },
      { text: 'Snackopods', type: 'silly' }
    ]
  },
  {
    id: 'q069', fact: 'birds-theropods',
    q: 'Birds belong to which dinosaur group?',
    answers: [
      { text: 'Theropods', correct: true },
      { text: 'Sauropods', type: 'believable' },
      { text: 'Ceratopsians', type: 'kinda' },
      { text: 'Tweetopods', type: 'silly' }
    ]
  },
  {
    id: 'q070', fact: 'movie-raptors',
    q: 'The \'Velociraptors\' in the Jurassic Park movies were sized more like which real dinosaur?',
    answers: [
      { text: 'Deinonychus', correct: true },
      { text: 'Compsognathus', type: 'believable' },
      { text: 'Brachiosaurus', type: 'kinda' },
      { text: 'Barney', type: 'silly' }
    ]
  },
  {
    id: 'q071', fact: 'utahraptor',
    q: 'Utahraptor was a big raptor found in which US state?',
    answers: [
      { text: 'Utah', correct: true },
      { text: 'Texas', type: 'believable' },
      { text: 'Hawaii', type: 'kinda' },
      { text: 'Raptorvania', type: 'silly' }
    ]
  },

  // ---- Plant-eaters ----
  {
    id: 'q072', fact: 'sauropods',
    q: 'Long-necked plant-eaters like Brachiosaurus belong to which group?',
    answers: [
      { text: 'Sauropods', correct: true },
      { text: 'Theropods', type: 'believable' },
      { text: 'Raptors', type: 'kinda' },
      { text: 'Neckosaurs', type: 'silly' }
    ]
  },
  {
    id: 'q073', fact: 'diplo-famous',
    q: 'Diplodocus is famous for its very long...',
    answers: [
      { text: 'Neck and tail', correct: true },
      { text: 'Horns', type: 'believable' },
      { text: 'Arms', type: 'kinda' },
      { text: 'Eyelashes', type: 'silly' }
    ]
  },
  {
    id: 'q074', fact: 'diplo-teeth',
    q: 'Diplodocus had teeth shaped like...',
    answers: [
      { text: 'Pegs or pencils at the front of its mouth', correct: true },
      { text: 'Big curved fangs', type: 'believable' },
      { text: 'Flat grinding molars', type: 'kinda' },
      { text: 'Piano keys', type: 'silly' }
    ]
  },
  {
    id: 'q075', fact: 'dippy',
    q: '\'Dippy\' is a famous skeleton copy of which dinosaur?',
    answers: [
      { text: 'Diplodocus', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: "Dippin'-Dots-asaurus", type: 'silly' }
    ]
  },
  {
    id: 'q076', fact: 'brachio-nose',
    q: 'Brachiosaurus had big nose openings in its skull that were...',
    answers: [
      { text: 'High up on its head, above its eyes', correct: true },
      { text: 'At the very tip of its snout', type: 'believable' },
      { text: 'On the sides of its jaw', type: 'kinda' },
      { text: 'On its elbows', type: 'silly' }
    ]
  },
  {
    id: 'q077', fact: 'argentinosaurus',
    q: 'Which dinosaur is one of the heaviest land animals ever known?',
    answers: [
      { text: 'Argentinosaurus', correct: true },
      { text: 'Velociraptor', type: 'believable' },
      { text: 'Stegosaurus', type: 'kinda' },
      { text: 'Fluffosaurus', type: 'silly' }
    ]
  },
  {
    id: 'q078', fact: 'argentino-where',
    q: 'Argentinosaurus was found in which country?',
    answers: [
      { text: 'Argentina', correct: true },
      { text: 'Canada', type: 'believable' },
      { text: 'Egypt', type: 'kinda' },
      { text: 'Antarctica', type: 'silly' }
    ]
  },
  {
    id: 'q079', fact: 'sauropod-eggs',
    q: 'Giant titanosaurs hatched from eggs about the size of a...',
    answers: [
      { text: 'Grapefruit', correct: true },
      { text: 'Car tire', type: 'believable' },
      { text: 'Marble', type: 'kinda' },
      { text: 'Refrigerator', type: 'silly' }
    ]
  },
  {
    id: 'q080', fact: 'gastroliths',
    q: 'Some plant-eating dinosaurs swallowed stones. What are these stones called?',
    answers: [
      { text: 'Gastroliths', correct: true },
      { text: 'Fossils', type: 'believable' },
      { text: 'Coprolites', type: 'kinda' },
      { text: 'Tummy pebbles', type: 'silly' }
    ]
  },
  {
    id: 'q081', fact: 'mamenchisaurus',
    q: 'Which dinosaur had one of the longest necks of any animal ever, about half its body length?',
    answers: [
      { text: 'Mamenchisaurus', correct: true },
      { text: 'Velociraptor', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: 'Giraffe Pete', type: 'silly' }
    ]
  },
  {
    id: 'q082', fact: 'camarasaurus',
    q: 'Camarasaurus is one of the most common sauropod fossils found in...',
    answers: [
      { text: 'North America', correct: true },
      { text: 'Antarctica', type: 'believable' },
      { text: 'Iceland', type: 'kinda' },
      { text: 'Your backyard', type: 'silly' }
    ]
  },
  {
    id: 'q083', fact: 'stego-period',
    q: 'Stegosaurus lived during which period?',
    answers: [
      { text: 'Late Jurassic', correct: true },
      { text: 'Late Cretaceous', type: 'believable' },
      { text: 'Triassic', type: 'kinda' },
      { text: 'The Disco Age', type: 'silly' }
    ]
  },
  {
    id: 'q084', fact: 'iguanodon-teeth',
    q: 'Iguanodon got its name because its teeth looked like the teeth of...',
    answers: [
      { text: 'An iguana', correct: true },
      { text: 'A shark', type: 'believable' },
      { text: 'A horse', type: 'kinda' },
      { text: 'A unicorn', type: 'silly' }
    ]
  },
  {
    id: 'q085', fact: 'iguanodon-nose',
    q: 'When Iguanodon was first described, scientists mistakenly put its thumb spike on its...',
    answers: [
      { text: 'Nose', correct: true },
      { text: 'Tail', type: 'believable' },
      { text: 'Back', type: 'kinda' },
      { text: 'Belly button', type: 'silly' }
    ]
  },
  {
    id: 'q086', fact: 'hadrosaurs',
    q: 'Hadrosaurs are often called...',
    answers: [
      { text: 'Duck-billed dinosaurs', correct: true },
      { text: 'Horned dinosaurs', type: 'believable' },
      { text: 'Armored dinosaurs', type: 'kinda' },
      { text: 'Quack-a-saurs', type: 'silly' }
    ]
  },
  {
    id: 'q087', fact: 'dental-battery',
    q: 'Hadrosaurs had hundreds of teeth packed together in rows called...',
    answers: [
      { text: 'Dental batteries', correct: true },
      { text: 'Gastroliths', type: 'believable' },
      { text: 'Osteoderms', type: 'kinda' },
      { text: 'Chompy stacks', type: 'silly' }
    ]
  },
  {
    id: 'q088', fact: 'edmontosaurus',
    q: 'Edmontosaurus was a big duck-billed dinosaur that lived at the same time as...',
    answers: [
      { text: 'T. rex', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Coelophysis', type: 'kinda' },
      { text: 'Your grandma', type: 'silly' }
    ]
  },
  {
    id: 'q089', fact: 'maiasaura',
    q: "Maiasaura's name means...",
    answers: [
      { text: '\'Good mother lizard\'', correct: true },
      { text: '\'Fast running lizard\'', type: 'believable' },
      { text: '\'Shiny egg lizard\'', type: 'kinda' },
      { text: "\"Mom, I'm hungry lizard\"", type: 'silly' }
    ]
  },
  {
    id: 'q090', fact: 'maia-nests',
    q: 'Maiasaura nesting grounds show that parents probably...',
    answers: [
      { text: 'Took care of their babies', correct: true },
      { text: 'Never saw their babies', type: 'believable' },
      { text: 'Laid eggs up in trees', type: 'kinda' },
      { text: 'Sent babies to daycare', type: 'silly' }
    ]
  },
  {
    id: 'q091', fact: 'corythosaurus',
    q: 'Corythosaurus had a crest shaped like a...',
    answers: [
      { text: 'Helmet', correct: true },
      { text: 'Long tube', type: 'believable' },
      { text: 'Round knob', type: 'kinda' },
      { text: 'Party hat', type: 'silly' }
    ]
  },
  {
    id: 'q092', fact: 'lambeosaurus',
    q: 'Lambeosaurus had a hollow crest shaped like a...',
    answers: [
      { text: 'Hatchet (axe)', correct: true },
      { text: 'Short spike', type: 'believable' },
      { text: 'Long trumpet', type: 'kinda' },
      { text: 'Pizza slice', type: 'silly' }
    ]
  },
  {
    id: 'q093', fact: 'pachy-thick',
    q: "Pachycephalosaurus's skull dome was about how thick?",
    answers: [
      { text: 'Up to about 25 cm (10 inches)', correct: true },
      { text: 'About 1 cm (half an inch)', type: 'believable' },
      { text: 'About 2 meters (6 feet)', type: 'kinda' },
      { text: 'As thick as a mattress', type: 'silly' }
    ]
  },
  {
    id: 'q094', fact: 'psittacosaurus',
    q: 'Psittacosaurus had a beak like which bird?',
    answers: [
      { text: 'A parrot', correct: true },
      { text: 'An eagle', type: 'believable' },
      { text: 'A penguin', type: 'kinda' },
      { text: 'A rubber chicken', type: 'silly' }
    ]
  },
  {
    id: 'q095', fact: 'psittaco-tail',
    q: 'Psittacosaurus had long bristles sticking up from its...',
    answers: [
      { text: 'Tail', correct: true },
      { text: 'Nose', type: 'believable' },
      { text: 'Belly', type: 'kinda' },
      { text: 'Ears', type: 'silly' }
    ]
  },
  {
    id: 'q096', fact: 'protoceratops',
    q: 'Protoceratops was a small cousin of Triceratops that lived in...',
    answers: [
      { text: 'The Gobi Desert of Asia', correct: true },
      { text: 'Canada', type: 'believable' },
      { text: 'Brazil', type: 'kinda' },
      { text: 'Outer space', type: 'silly' }
    ]
  },
  {
    id: 'q097', fact: 'trike-period',
    q: 'Triceratops lived during which period?',
    answers: [
      { text: 'Late Cretaceous', correct: true },
      { text: 'Jurassic', type: 'believable' },
      { text: 'Triassic', type: 'kinda' },
      { text: 'The Pizza Period', type: 'silly' }
    ]
  },
  {
    id: 'q098', fact: 'trike-frill',
    q: 'Unlike some of its cousins, Triceratops had a frill that was...',
    answers: [
      { text: 'Solid bone without big holes', correct: true },
      { text: 'Covered in long spikes', type: 'believable' },
      { text: 'Full of big windows', type: 'kinda' },
      { text: 'Inflatable', type: 'silly' }
    ]
  },
  {
    id: 'q099', fact: 'torosaurus',
    q: 'Torosaurus is known for one of the biggest skulls of any land animal, thanks to its huge...',
    answers: [
      { text: 'Frill', correct: true },
      { text: 'Teeth', type: 'believable' },
      { text: 'Nose horn', type: 'kinda' },
      { text: 'Eyebrows', type: 'silly' }
    ]
  },
  {
    id: 'q100', fact: 'styracosaurus',
    q: 'Styracosaurus had a frill with...',
    answers: [
      { text: 'Long spikes', correct: true },
      { text: 'Smooth edges', type: 'believable' },
      { text: 'Short bumps', type: 'kinda' },
      { text: 'Birthday candles', type: 'silly' }
    ]
  },
  {
    id: 'q101', fact: 'centrosaurus',
    q: 'Huge \'bonebeds\' with many Centrosaurus fossils suggest they lived in...',
    answers: [
      { text: 'Herds', correct: true },
      { text: 'Caves', type: 'believable' },
      { text: 'Trees', type: 'kinda' },
      { text: 'Apartment buildings', type: 'silly' }
    ]
  },
  {
    id: 'q102', fact: 'ceratopsians',
    q: 'Triceratops and its frilled cousins are called...',
    answers: [
      { text: 'Ceratopsians', correct: true },
      { text: 'Sauropods', type: 'believable' },
      { text: 'Raptors', type: 'kinda' },
      { text: 'Frillopods', type: 'silly' }
    ]
  },
  {
    id: 'q103', fact: 'ankylosaurs',
    q: 'Ankylosaurus and other tank-like armored dinosaurs are called...',
    answers: [
      { text: 'Ankylosaurs', correct: true },
      { text: 'Theropods', type: 'believable' },
      { text: 'Hadrosaurs', type: 'kinda' },
      { text: 'Tankosaurs', type: 'silly' }
    ]
  },
  {
    id: 'q104', fact: 'anky-time',
    q: 'Ankylosaurus lived at the same time as...',
    answers: [
      { text: 'T. rex', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Allosaurus', type: 'kinda' },
      { text: 'Dodo birds', type: 'silly' }
    ]
  },
  {
    id: 'q105', fact: 'osteoderms',
    q: "The bony plates in a dinosaur's skin are called...",
    answers: [
      { text: 'Osteoderms', correct: true },
      { text: 'Gastroliths', type: 'believable' },
      { text: 'Coprolites', type: 'kinda' },
      { text: 'Bone-ana chips', type: 'silly' }
    ]
  },
  {
    id: 'q106', fact: 'borealopelta',
    q: 'An armored dinosaur found in Canada was so well preserved it looks like a...',
    answers: [
      { text: 'Sleeping statue with its armor still in place', correct: true },
      { text: 'Jumble of scattered bones', type: 'believable' },
      { text: 'Flattened pancake of bone', type: 'kinda' },
      { text: 'Plastic toy', type: 'silly' }
    ]
  },
  {
    id: 'q107', fact: 'euoplocephalus',
    q: 'Euoplocephalus was so well armored it even had bony plates on its...',
    answers: [
      { text: 'Eyelids', correct: true },
      { text: 'Toes', type: 'believable' },
      { text: 'Belly', type: 'kinda' },
      { text: 'Shoes', type: 'silly' }
    ]
  },
  {
    id: 'q108', fact: 'kentrosaurus',
    q: 'Kentrosaurus, a cousin of Stegosaurus, had plates and lots of...',
    answers: [
      { text: 'Spikes, including on its shoulders', correct: true },
      { text: 'Feathers', type: 'believable' },
      { text: 'Horns on its nose', type: 'kinda' },
      { text: 'Wheels', type: 'silly' }
    ]
  },
  {
    id: 'q109', fact: 'kentro-where',
    q: 'Kentrosaurus was found in which African country?',
    answers: [
      { text: 'Tanzania', correct: true },
      { text: 'South Africa', type: 'believable' },
      { text: 'Egypt', type: 'kinda' },
      { text: 'Madagas-car', type: 'silly' }
    ]
  },
  {
    id: 'q110', fact: 'dino-salad',
    q: 'Grass was rare or missing for most of the dinosaur age. Plant-eaters mostly ate...',
    answers: [
      { text: 'Ferns, conifers, cycads and other plants', correct: true },
      { text: 'Mostly grass', type: 'believable' },
      { text: 'Mostly fruit and nuts', type: 'kinda' },
      { text: 'Salad with ranch', type: 'silly' }
    ]
  },
  {
    id: 'q111', fact: 'flowers',
    q: 'Flowering plants first appeared during which period?',
    answers: [
      { text: 'Cretaceous', correct: true },
      { text: 'Triassic', type: 'believable' },
      { text: 'Jurassic', type: 'kinda' },
      { text: 'The Pollen Period', type: 'silly' }
    ]
  },
  {
    id: 'q112', fact: 'ornithopods',
    q: 'Iguanodon and the duck-billed dinosaurs belong to which group?',
    answers: [
      { text: 'Ornithopods', correct: true },
      { text: 'Sauropods', type: 'believable' },
      { text: 'Theropods', type: 'kinda' },
      { text: 'Duckopods', type: 'silly' }
    ]
  },
  {
    id: 'q113', fact: 'leaellynasaura',
    q: 'Leaellynasaura, a small plant-eater from Australia, was named after...',
    answers: [
      { text: 'The daughter of the scientists who found it', correct: true },
      { text: 'A famous queen', type: 'believable' },
      { text: 'A river', type: 'kinda' },
      { text: 'A pizza chef', type: 'silly' }
    ]
  },
  {
    id: 'q114', fact: 'minmi',
    q: 'Minmi, a small armored dinosaur, was found in which country?',
    answers: [
      { text: 'Australia', correct: true },
      { text: 'USA', type: 'believable' },
      { text: 'China', type: 'kinda' },
      { text: 'Narnia', type: 'silly' }
    ]
  },
  {
    id: 'q115', fact: 'mei',
    q: 'Mei, a tiny dinosaur found curled up like a sleeping bird, has a name that means...',
    answers: [
      { text: '\'Soundly sleeping\'', correct: true },
      { text: '\'Big teeth\'', type: 'believable' },
      { text: '\'Fast runner\'', type: 'kinda' },
      { text: '\'Snore\'', type: 'silly' }
    ]
  },
  {
    id: 'q116', fact: 'sauropod-walk',
    q: 'How did sauropods like Brachiosaurus walk?',
    answers: [
      { text: 'On four legs', correct: true },
      { text: 'On two legs', type: 'believable' },
      { text: 'On two legs, only when running', type: 'kinda' },
      { text: 'Hopping like kangaroos', type: 'silly' }
    ]
  },
  {
    id: 'q117', fact: 'sauropod-heads',
    q: 'Compared to their huge bodies, sauropods had heads that were...',
    answers: [
      { text: 'Very small', correct: true },
      { text: 'Very big', type: 'believable' },
      { text: 'Huge, with big jaws', type: 'kinda' },
      { text: 'Square like a box', type: 'silly' }
    ]
  },
  {
    id: 'q118', fact: 'allo-stego-wound',
    q: 'Scientists found an Allosaurus bone with a hole that matches...',
    answers: [
      { text: 'A Stegosaurus tail spike', correct: true },
      { text: 'A T. rex tooth', type: 'believable' },
      { text: 'A Triceratops horn', type: 'kinda' },
      { text: 'A pencil', type: 'silly' }
    ]
  },
  {
    id: 'q119', fact: 'heterodontosaurus',
    q: 'Heterodontosaurus was special because it had...',
    answers: [
      { text: 'Different kinds of teeth, including fangs', correct: true },
      { text: 'No teeth at all', type: 'believable' },
      { text: 'A tall sail', type: 'kinda' },
      { text: 'Six legs', type: 'silly' }
    ]
  },
  {
    id: 'q120', fact: 'hypsilophodon',
    q: 'Hypsilophodon was a small plant-eater built for...',
    answers: [
      { text: 'Running', correct: true },
      { text: 'Swimming in the ocean', type: 'believable' },
      { text: 'Climbing trees', type: 'kinda' },
      { text: 'Knitting', type: 'silly' }
    ]
  },
  {
    id: 'q121', fact: 'stego-throat',
    q: 'Stegosaurus had little bony bits protecting its...',
    answers: [
      { text: 'Throat', correct: true },
      { text: 'Teeth', type: 'believable' },
      { text: 'Eyes', type: 'kinda' },
      { text: 'Socks', type: 'silly' }
    ]
  },

  // ---- Horns, armor, sizes, history ----
  {
    id: 'q122', fact: 'anky-club-bones',
    q: "Ankylosaurus's tail club was made of...",
    answers: [
      { text: 'Big bony lumps joined together', correct: true },
      { text: "Solid horn, like a rhino's", type: 'believable' },
      { text: 'Cartilage, like a nose', type: 'kinda' },
      { text: 'Bubblegum', type: 'silly' }
    ]
  },
  {
    id: 'q123', fact: 'trike-horn-length',
    q: "Triceratops's brow horns could be about as long as a...",
    answers: [
      { text: 'Baseball bat (about 1 meter)', correct: true },
      { text: 'Ruler (30 cm)', type: 'believable' },
      { text: 'Car (4 meters)', type: 'kinda' },
      { text: 'Noodle', type: 'silly' }
    ]
  },
  {
    id: 'q124', fact: 'trike-skull',
    q: 'About how long could a big Triceratops skull be?',
    answers: [
      { text: 'Over 2 meters (7 feet)', correct: true },
      { text: 'About 30 cm (1 foot)', type: 'believable' },
      { text: 'About 10 meters (33 feet)', type: 'kinda' },
      { text: 'As long as a sneaker', type: 'silly' }
    ]
  },
  {
    id: 'q125', fact: 'stego-rows',
    q: 'Stegosaurus plates are usually shown in...',
    answers: [
      { text: 'Two staggered rows', correct: true },
      { text: 'One single row', type: 'believable' },
      { text: 'Three rows', type: 'kinda' },
      { text: 'Neat little piles', type: 'silly' }
    ]
  },
  {
    id: 'q126', fact: 'spino-spines',
    q: "Spinosaurus's sail was held up by...",
    answers: [
      { text: 'Very long spines on its backbone', correct: true },
      { text: 'Thick muscles', type: 'believable' },
      { text: 'Feathers', type: 'kinda' },
      { text: 'A tiny mast and rope', type: 'silly' }
    ]
  },
  {
    id: 'q127', fact: 'dimetrodon',
    q: 'Dimetrodon, with a sail on its back, was actually...',
    answers: [
      { text: 'Not a dinosaur, and more closely related to mammals', correct: true },
      { text: 'A baby Spinosaurus', type: 'believable' },
      { text: 'A type of pterosaur', type: 'kinda' },
      { text: 'A sailboat', type: 'silly' }
    ]
  },
  {
    id: 'q128', fact: 'dimetrodon-time',
    q: 'Dimetrodon lived...',
    answers: [
      { text: 'Before the first dinosaurs', correct: true },
      { text: 'At the same time as T. rex', type: 'believable' },
      { text: 'After the dinosaurs', type: 'kinda' },
      { text: 'Last summer', type: 'silly' }
    ]
  },
  {
    id: 'q129', fact: 'parasaur-hollow',
    q: "Parasaurolophus's long crest was...",
    answers: [
      { text: 'Hollow, with tubes inside', correct: true },
      { text: 'Solid rock', type: 'believable' },
      { text: 'Made of skin only', type: 'kinda' },
      { text: 'Full of jellybeans', type: 'silly' }
    ]
  },
  {
    id: 'q130', fact: 'pachy-bumps',
    q: 'Pachycephalosaurus had bumps and spikes around its...',
    answers: [
      { text: 'Dome-shaped head', correct: true },
      { text: 'Tail', type: 'believable' },
      { text: 'Feet', type: 'kinda' },
      { text: 'Belly', type: 'silly' }
    ]
  },
  {
    id: 'q131', fact: 'amargasaurus',
    q: 'Amargasaurus had two rows of tall spines on its...',
    answers: [
      { text: 'Neck', correct: true },
      { text: 'Tail tip', type: 'believable' },
      { text: 'Legs', type: 'kinda' },
      { text: 'Nose', type: 'silly' }
    ]
  },
  {
    id: 'q132', fact: 'carno-name',
    q: 'Carnotaurus means...',
    answers: [
      { text: '\'Meat-eating bull\'', correct: true },
      { text: '\'Fast lizard\'', type: 'believable' },
      { text: '\'Horned king\'', type: 'kinda' },
      { text: '\'Car with no doors\'', type: 'silly' }
    ]
  },
  {
    id: 'q133', fact: 'trike-beak',
    q: 'Triceratops had a sharp beak at the front of its mouth, a bit like a...',
    answers: [
      { text: 'Parrot', correct: true },
      { text: 'Duck', type: 'believable' },
      { text: 'Pelican', type: 'kinda' },
      { text: 'Pencil sharpener', type: 'silly' }
    ]
  },
  {
    id: 'q134', fact: 'kosmoceratops',
    q: 'Kosmoceratops had lots of curly horns. About how many horns did it have on its head?',
    answers: [
      { text: '15', correct: true },
      { text: '1', type: 'believable' },
      { text: '50', type: 'kinda' },
      { text: 'A million', type: 'silly' }
    ]
  },
  {
    id: 'q135', fact: 'titanosaur-weight',
    q: 'Giant titanosaurs like Argentinosaurus may have weighed about as much as...',
    answers: [
      { text: '10 or more elephants', correct: true },
      { text: '1 cow', type: 'believable' },
      { text: '2 horses', type: 'kinda' },
      { text: 'A loaf of bread', type: 'silly' }
    ]
  },
  {
    id: 'q136', fact: 'brachio-height',
    q: 'Brachiosaurus could hold its head up about how high?',
    answers: [
      { text: 'About 12 meters (40 feet)', correct: true },
      { text: 'About 2 meters (6 feet)', type: 'believable' },
      { text: 'About 100 meters (330 feet)', type: 'kinda' },
      { text: 'Higher than the Moon', type: 'silly' }
    ]
  },
  {
    id: 'q137', fact: 'trex-weight',
    q: 'An adult T. rex weighed about as much as...',
    answers: [
      { text: 'An elephant or a bit more', correct: true },
      { text: 'A horse', type: 'believable' },
      { text: 'A blue whale', type: 'kinda' },
      { text: 'A bag of feathers', type: 'silly' }
    ]
  },
  {
    id: 'q138', fact: 'dino-sizes',
    q: 'Were all dinosaurs giants?',
    answers: [
      { text: 'No, some were as small as chickens', correct: true },
      { text: 'Yes, all were bigger than a house', type: 'believable' },
      { text: 'Yes, all were as big as T. rex', type: 'kinda' },
      { text: 'No, some were smaller than ants', type: 'silly' }
    ]
  },
  {
    id: 'q139', fact: 'bee-hummingbird',
    q: 'The smallest living dinosaur is...',
    answers: [
      { text: 'The bee hummingbird', correct: true },
      { text: 'The ostrich', type: 'believable' },
      { text: 'The Komodo dragon', type: 'kinda' },
      { text: 'A gummy bear', type: 'silly' }
    ]
  },
  {
    id: 'q140', fact: 'ostrich',
    q: 'The biggest living dinosaur is...',
    answers: [
      { text: 'The ostrich', correct: true },
      { text: 'The elephant', type: 'believable' },
      { text: 'The crocodile', type: 'kinda' },
      { text: "A penguin's grandpa", type: 'silly' }
    ]
  },
  {
    id: 'q141', fact: 'dino-meaning',
    q: 'The word \'dinosaur\' means...',
    answers: [
      { text: '\'Terrible lizard\'', correct: true },
      { text: '\'Giant lizard\'', type: 'believable' },
      { text: '\'Old bones\'', type: 'kinda' },
      { text: "\"Dino's sore\"", type: 'silly' }
    ]
  },
  {
    id: 'q142', fact: 'owen',
    q: 'Who came up with the word \'dinosaur\' in 1842?',
    answers: [
      { text: 'Richard Owen', correct: true },
      { text: 'Charles Darwin', type: 'believable' },
      { text: 'Mary Anning', type: 'kinda' },
      { text: 'Barney', type: 'silly' }
    ]
  },
  {
    id: 'q143', fact: 'mary-anning',
    q: 'Mary Anning was a famous fossil hunter who found many fossils of...',
    answers: [
      { text: 'Sea reptiles like ichthyosaurs and plesiosaurs', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Woolly mammoths', type: 'kinda' },
      { text: 'Unicorns', type: 'silly' }
    ]
  },
  {
    id: 'q144', fact: 'anning-where',
    q: 'Mary Anning found her fossils along the coast of...',
    answers: [
      { text: 'England', correct: true },
      { text: 'Japan', type: 'believable' },
      { text: 'Brazil', type: 'kinda' },
      { text: 'The North Pole', type: 'silly' }
    ]
  },
  {
    id: 'q145', fact: 'bone-wars',
    q: 'The \'Bone Wars\' was a big rivalry between two scientists racing to find dinosaurs in...',
    answers: [
      { text: 'The American West', correct: true },
      { text: 'Antarctica', type: 'believable' },
      { text: 'China', type: 'kinda' },
      { text: 'Space', type: 'silly' }
    ]
  },
  {
    id: 'q146', fact: 'cope-marsh',
    q: 'The two rival scientists in the Bone Wars were...',
    answers: [
      { text: 'Cope and Marsh', correct: true },
      { text: 'Owen and Darwin', type: 'believable' },
      { text: 'Lewis and Clark', type: 'kinda' },
      { text: 'Mario and Luigi', type: 'silly' }
    ]
  },
  {
    id: 'q147', fact: 'dino-monument',
    q: 'Dinosaur National Monument, with a wall of real dinosaur bones, is on the border of...',
    answers: [
      { text: 'Utah and Colorado', correct: true },
      { text: 'Florida and Georgia', type: 'believable' },
      { text: 'Maine and Vermont', type: 'kinda' },
      { text: 'Hawaii and Alaska', type: 'silly' }
    ]
  },
  {
    id: 'q148', fact: 'morrison',
    q: 'Many famous Jurassic dinosaurs like Stegosaurus and Allosaurus come from rock layers called the...',
    answers: [
      { text: 'Morrison Formation', correct: true },
      { text: 'Hell Creek Formation', type: 'believable' },
      { text: 'Grand Canyon', type: 'kinda' },
      { text: 'Pizza Crust Formation', type: 'silly' }
    ]
  },
  {
    id: 'q149', fact: 'hell-creek',
    q: 'T. rex and Triceratops fossils are often found in rock layers called the...',
    answers: [
      { text: 'Hell Creek Formation', correct: true },
      { text: 'Morrison Formation', type: 'believable' },
      { text: 'Burgess Shale', type: 'kinda' },
      { text: 'Sandbox Formation', type: 'silly' }
    ]
  },
  {
    id: 'q150', fact: 'gobi',
    q: 'The Gobi Desert, full of amazing dinosaur fossils, is in which countries?',
    answers: [
      { text: 'Mongolia and China', correct: true },
      { text: 'Egypt and Libya', type: 'believable' },
      { text: 'Mexico and USA', type: 'kinda' },
      { text: 'Antarctica and Mars', type: 'silly' }
    ]
  },
  {
    id: 'q151', fact: 'roy-chapman',
    q: 'Roy Chapman Andrews led famous 1920s expeditions that found some of the first known...',
    answers: [
      { text: 'Dinosaur nests with eggs', correct: true },
      { text: 'T. rex skeletons', type: 'believable' },
      { text: 'Pterosaur feathers', type: 'kinda' },
      { text: 'Dinosaur toothbrushes', type: 'silly' }
    ]
  },
  {
    id: 'q152', fact: 'fossil-what',
    q: 'A fossil is...',
    answers: [
      { text: 'Remains or traces of ancient life preserved in rock', correct: true },
      { text: 'A type of shiny crystal', type: 'believable' },
      { text: 'A dinosaur bone that never changed', type: 'kinda' },
      { text: 'A kind of cookie', type: 'silly' }
    ]
  },
  {
    id: 'q153', fact: 'trace-fossils',
    q: 'Footprints, nests, and poop that turned to stone are called...',
    answers: [
      { text: 'Trace fossils', correct: true },
      { text: 'Body fossils', type: 'believable' },
      { text: 'Crystal fossils', type: 'kinda' },
      { text: 'Footprint pancakes', type: 'silly' }
    ]
  },
  {
    id: 'q154', fact: 'coprolite',
    q: 'A fossilized piece of dinosaur poop is called a...',
    answers: [
      { text: 'Coprolite', correct: true },
      { text: 'Gastrolith', type: 'believable' },
      { text: 'Trilobite', type: 'kinda' },
      { text: 'Poop-a-saurus rock', type: 'silly' }
    ]
  },
  {
    id: 'q155', fact: 'paleontologist',
    q: 'A scientist who studies fossils of ancient life is called a...',
    answers: [
      { text: 'Paleontologist', correct: true },
      { text: 'Archaeologist', type: 'believable' },
      { text: 'Astronaut', type: 'kinda' },
      { text: 'Dino-detective-ologist', type: 'silly' }
    ]
  },
  {
    id: 'q156', fact: 'archaeologist',
    q: 'Do archaeologists dig up dinosaurs?',
    answers: [
      { text: 'No, they study ancient humans; paleontologists study dinosaurs', correct: true },
      { text: "Yes, it's their main job", type: 'believable' },
      { text: 'Yes, but only in Egypt', type: 'kinda' },
      { text: 'Only with spoons', type: 'silly' }
    ]
  },
  {
    id: 'q157', fact: 'fossilization',
    q: 'When a bone becomes a fossil, minerals usually...',
    answers: [
      { text: 'Slowly fill in or replace parts of it, turning it rock-like', correct: true },
      { text: 'Dissolve it away completely', type: 'believable' },
      { text: 'Turn it into crystal', type: 'kinda' },
      { text: 'Make it soft like jelly', type: 'silly' }
    ]
  },
  {
    id: 'q158', fact: 'skin-impressions',
    q: 'Have scientists found fossil dinosaur skin impressions?',
    answers: [
      { text: 'Yes, and some show scales', correct: true },
      { text: 'No, never', type: 'believable' },
      { text: 'Only from baby dinosaurs', type: 'kinda' },
      { text: 'Yes, with tattoos', type: 'silly' }
    ]
  },
  {
    id: 'q159', fact: 'dino-color',
    q: 'How can scientists sometimes tell what color a dinosaur was?',
    answers: [
      { text: 'By studying tiny pigment structures in fossil feathers or skin', correct: true },
      { text: 'By guessing from the color of the rock', type: 'believable' },
      { text: 'By looking at living lizards', type: 'kinda' },
      { text: 'With a magic crayon', type: 'silly' }
    ]
  },
  {
    id: 'q160', fact: 'sauropod-trackways',
    q: 'Long rows of sauropod footprints side by side suggest some sauropods...',
    answers: [
      { text: 'Walked in groups', correct: true },
      { text: 'Swam across lakes', type: 'believable' },
      { text: 'Walked one at a time', type: 'kinda' },
      { text: 'Hopped on one leg', type: 'silly' }
    ]
  },
  {
    id: 'q161', fact: 'bone-rings',
    q: 'Scientists can tell how old a dinosaur was by looking at...',
    answers: [
      { text: 'Growth rings in its bones', correct: true },
      { text: 'The color of its teeth', type: 'believable' },
      { text: 'The length of its tail', type: 'kinda' },
      { text: 'Its birthday candles', type: 'silly' }
    ]
  },
  {
    id: 'q162', fact: 'trex-teen',
    q: 'T. rex grew the fastest when it was a...',
    answers: [
      { text: 'Teenager', correct: true },
      { text: 'Baby in the egg', type: 'believable' },
      { text: 'Very old adult', type: 'kinda' },
      { text: 'Grandpa', type: 'silly' }
    ]
  },
  {
    id: 'q163', fact: 'amber-tail',
    q: 'A feathered dinosaur tail was found preserved in...',
    answers: [
      { text: 'Amber (fossil tree sap)', correct: true },
      { text: 'Ice', type: 'believable' },
      { text: 'Volcanic ash', type: 'kinda' },
      { text: 'Jell-O', type: 'silly' }
    ]
  },
  {
    id: 'q164', fact: 'mesozoic',
    q: 'The Age of Dinosaurs is also called the...',
    answers: [
      { text: 'Mesozoic Era', correct: true },
      { text: 'Ice Age', type: 'believable' },
      { text: 'Stone Age', type: 'kinda' },
      { text: 'Snack Age', type: 'silly' }
    ]
  },
  {
    id: 'q165', fact: 'three-periods',
    q: 'The Mesozoic Era is split into which three periods?',
    answers: [
      { text: 'Triassic, Jurassic, Cretaceous', correct: true },
      { text: 'Jurassic, Ice Age, Stone Age', type: 'believable' },
      { text: 'Triassic, Jurassic, Ice Age', type: 'kinda' },
      { text: 'Breakfast, Lunch, Dinner', type: 'silly' }
    ]
  },
  {
    id: 'q166', fact: 'first-dinos',
    q: 'The first dinosaurs appeared during which period?',
    answers: [
      { text: 'Triassic', correct: true },
      { text: 'Jurassic', type: 'believable' },
      { text: 'Cretaceous', type: 'kinda' },
      { text: 'The Pancake Period', type: 'silly' }
    ]
  },
  {
    id: 'q167', fact: 'extinction-when',
    q: 'The non-bird dinosaurs went extinct about how long ago?',
    answers: [
      { text: '66 million years ago', correct: true },
      { text: '6,600 years ago', type: 'believable' },
      { text: '660 million years ago', type: 'kinda' },
      { text: 'Last Thursday', type: 'silly' }
    ]
  },
  {
    id: 'q168', fact: 'chicxulub-where',
    q: 'The giant crater from the dinosaur-ending asteroid is near which country?',
    answers: [
      { text: 'Mexico', correct: true },
      { text: 'Australia', type: 'believable' },
      { text: 'Canada', type: 'kinda' },
      { text: 'France', type: 'silly' }
    ]
  },
  {
    id: 'q169', fact: 'chicxulub-name',
    q: 'What is the name of the giant crater from the asteroid that helped end the dinosaurs?',
    answers: [
      { text: 'Chicxulub', correct: true },
      { text: 'Meteor Crater', type: 'believable' },
      { text: 'Crater Lake', type: 'kinda' },
      { text: 'The Big Oopsie', type: 'silly' }
    ]
  },
  {
    id: 'q170', fact: 'survivors',
    q: 'Which animals survived the extinction 66 million years ago?',
    answers: [
      { text: 'Birds, crocodiles, turtles, and mammals', correct: true },
      { text: 'Only T. rex', type: 'believable' },
      { text: 'Only insects', type: 'kinda' },
      { text: 'Only unicorns', type: 'silly' }
    ]
  },
  {
    id: 'q171', fact: 'pangaea',
    q: 'When the first dinosaurs appeared, most land was joined into one supercontinent called...',
    answers: [
      { text: 'Pangaea', correct: true },
      { text: 'Atlantis', type: 'believable' },
      { text: 'Laurasia', type: 'kinda' },
      { text: 'Pancake-a', type: 'silly' }
    ]
  },

  // ---- Dino world, other reptiles, birds ----
  {
    id: 'q172', fact: 'humans-dinos',
    q: 'Did people and non-bird dinosaurs ever live at the same time?',
    answers: [
      { text: 'No, those dinosaurs were gone over 60 million years before people', correct: true },
      { text: 'Yes, for a short time at the end', type: 'believable' },
      { text: 'Yes, early humans hunted them', type: 'kinda' },
      { text: 'Yes, they shared lunch', type: 'silly' }
    ]
  },
  {
    id: 'q173', fact: 'mammoth',
    q: 'Was the woolly mammoth a dinosaur?',
    answers: [
      { text: 'No, it was a mammal related to elephants', correct: true },
      { text: 'Yes, a hairy kind of dinosaur', type: 'believable' },
      { text: 'No, it was a giant rhino', type: 'kinda' },
      { text: 'No, it was a giant fuzzy taco', type: 'silly' }
    ]
  },
  {
    id: 'q174', fact: 'smilodon',
    q: 'The saber-toothed cat Smilodon lived...',
    answers: [
      { text: 'Long after the dinosaurs', correct: true },
      { text: 'At the same time as T. rex', type: 'believable' },
      { text: 'Before the dinosaurs', type: 'kinda' },
      { text: 'In the Jurassic Park gift shop', type: 'silly' }
    ]
  },
  {
    id: 'q175', fact: 'mosasaurus',
    q: 'Mosasaurus was a giant sea reptile. Was it a dinosaur?',
    answers: [
      { text: 'No, it was a giant sea lizard', correct: true },
      { text: 'Yes, a swimming dinosaur', type: 'believable' },
      { text: 'No, it was a giant fish', type: 'kinda' },
      { text: 'No, it was a submarine', type: 'silly' }
    ]
  },
  {
    id: 'q176', fact: 'plesiosaurs',
    q: 'Plesiosaurs, with long necks and flippers, were...',
    answers: [
      { text: 'Sea reptiles, not dinosaurs', correct: true },
      { text: 'Dinosaurs that swam', type: 'believable' },
      { text: 'Giant turtles', type: 'kinda' },
      { text: 'Mermaids', type: 'silly' }
    ]
  },
  {
    id: 'q177', fact: 'ichthyosaurs',
    q: 'Ichthyosaurs were sea reptiles shaped a lot like...',
    answers: [
      { text: 'Dolphins', correct: true },
      { text: 'Crabs', type: 'believable' },
      { text: 'Snakes', type: 'kinda' },
      { text: 'Rubber boots', type: 'silly' }
    ]
  },
  {
    id: 'q178', fact: 'ichthy-birth',
    q: 'Fossils show that ichthyosaurs...',
    answers: [
      { text: 'Gave birth to live babies in the water', correct: true },
      { text: 'Laid eggs on the beach', type: 'believable' },
      { text: 'Laid eggs in floating nests', type: 'kinda' },
      { text: 'Built sandcastles', type: 'silly' }
    ]
  },
  {
    id: 'q179', fact: 'pterosaur-wing',
    q: "A pterosaur's wing was mostly held up by one super long...",
    answers: [
      { text: 'Finger', correct: true },
      { text: 'Toe', type: 'believable' },
      { text: 'Feather', type: 'kinda' },
      { text: 'Chopstick', type: 'silly' }
    ]
  },
  {
    id: 'q180', fact: 'quetzalcoatlus',
    q: 'Quetzalcoatlus, one of the largest flying animals ever, was a...',
    answers: [
      { text: 'Pterosaur', correct: true },
      { text: 'Dinosaur', type: 'believable' },
      { text: 'Bird', type: 'kinda' },
      { text: 'Kite', type: 'silly' }
    ]
  },
  {
    id: 'q181', fact: 'quetzal-size',
    q: "Quetzalcoatlus's wingspan was about as wide as a...",
    answers: [
      { text: 'Small airplane (about 10 meters)', correct: true },
      { text: 'Kite (about 2 meters)', type: 'believable' },
      { text: 'Football field', type: 'kinda' },
      { text: 'Shoebox', type: 'silly' }
    ]
  },
  {
    id: 'q182', fact: 'pterodactyl-word',
    q: '\'Pterodactyl\' is a common nickname for...',
    answers: [
      { text: 'Flying reptiles called pterosaurs', correct: true },
      { text: 'Dinosaurs with wings', type: 'believable' },
      { text: 'Giant bats', type: 'kinda' },
      { text: 'Dragons', type: 'silly' }
    ]
  },
  {
    id: 'q183', fact: 'rhamphorhynchus',
    q: 'Rhamphorhynchus was a pterosaur with a long tail ending in a...',
    answers: [
      { text: 'Diamond-shaped flap', correct: true },
      { text: 'Club', type: 'believable' },
      { text: 'Hook', type: 'kinda' },
      { text: 'Pom-pom', type: 'silly' }
    ]
  },
  {
    id: 'q184', fact: 'pteranodon-name',
    q: "Pteranodon's name means \"wing without...\"",
    answers: [
      { text: 'Teeth', correct: true },
      { text: 'Feathers', type: 'believable' },
      { text: 'Bones', type: 'kinda' },
      { text: 'Snacks', type: 'silly' }
    ]
  },
  {
    id: 'q185', fact: 'croc-cousins',
    q: 'Besides other birds, which living animals are the closest relatives of birds?',
    answers: [
      { text: 'Crocodiles and alligators', correct: true },
      { text: 'Lizards', type: 'believable' },
      { text: 'Turtles', type: 'kinda' },
      { text: 'Rubber duckies', type: 'silly' }
    ]
  },
  {
    id: 'q186', fact: 'archaeopteryx',
    q: 'Which famous fossil from Germany looks half dinosaur, half bird?',
    answers: [
      { text: 'Archaeopteryx', correct: true },
      { text: 'Pteranodon', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: 'Chicken Nugget', type: 'silly' }
    ]
  },
  {
    id: 'q187', fact: 'archaeo-features',
    q: 'Archaeopteryx had feathers and wings, but also...',
    answers: [
      { text: 'Teeth and a long bony tail', correct: true },
      { text: 'Horns and a frill', type: 'believable' },
      { text: 'Fur on its body', type: 'kinda' },
      { text: 'A propeller', type: 'silly' }
    ]
  },
  {
    id: 'q188', fact: 'birds-from',
    q: 'Birds evolved from which kind of dinosaurs?',
    answers: [
      { text: 'Small feathered meat-eaters (theropods)', correct: true },
      { text: 'Sauropods', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: 'Stegosaurus', type: 'silly' }
    ]
  },
  {
    id: 'q189', fact: 'wishbone',
    q: 'Many meat-eating dinosaurs had a wishbone, just like...',
    answers: [
      { text: 'Birds', correct: true },
      { text: 'Fish', type: 'believable' },
      { text: 'Snakes', type: 'kinda' },
      { text: 'Wishing wells', type: 'silly' }
    ]
  },
  {
    id: 'q190', fact: 'hollow-bones',
    q: 'Like birds, many theropods had bones with...',
    answers: [
      { text: 'Air spaces inside', correct: true },
      { text: 'Solid bone all the way through', type: 'believable' },
      { text: 'Fat inside', type: 'kinda' },
      { text: 'Pudding inside', type: 'silly' }
    ]
  },
  {
    id: 'q191', fact: 'brooding',
    q: 'Some dinosaur fossils show them sitting on nests with their arms spread out like...',
    answers: [
      { text: 'A bird keeping its eggs warm', correct: true },
      { text: 'A crocodile guarding eggs', type: 'believable' },
      { text: 'A turtle burying eggs', type: 'kinda' },
      { text: 'A soccer goalie', type: 'silly' }
    ]
  },
  {
    id: 'q192', fact: 'hard-eggs',
    q: 'Many dinosaur eggs had...',
    answers: [
      { text: 'Hard shells, like bird eggs', correct: true },
      { text: 'No shells at all', type: 'believable' },
      { text: 'Bumpy shells made of bone', type: 'kinda' },
      { text: 'Bubble wrap', type: 'silly' }
    ]
  },
  {
    id: 'q193', fact: 'soft-eggs',
    q: 'Scientists found that some dinosaurs, like Protoceratops, may have laid eggs that were...',
    answers: [
      { text: 'Soft and leathery', correct: true },
      { text: 'Hard as stone', type: 'believable' },
      { text: 'Huge, as big as basketballs', type: 'kinda' },
      { text: 'Chocolate', type: 'silly' }
    ]
  },
  {
    id: 'q194', fact: 'hatchling',
    q: 'A baby dinosaur that just came out of its egg is called a...',
    answers: [
      { text: 'Hatchling', correct: true },
      { text: 'Fledgling', type: 'believable' },
      { text: 'Cub', type: 'kinda' },
      { text: 'Dino-nugget', type: 'silly' }
    ]
  },
  {
    id: 'q195', fact: 'nest-colonies',
    q: 'Fossil nesting grounds show that some dinosaurs laid eggs...',
    answers: [
      { text: 'In big groups, near each other', correct: true },
      { text: 'Only on mountaintops', type: 'believable' },
      { text: 'Alone, far from others', type: 'kinda' },
      { text: 'In shopping carts', type: 'silly' }
    ]
  },
  {
    id: 'q196', fact: 'dino-sounds',
    q: "Since we can't hear dinosaurs, scientists guess their sounds by studying...",
    answers: [
      { text: 'Their skulls, crests, and living relatives like birds', correct: true },
      { text: 'Their footprints', type: 'believable' },
      { text: 'The size of their teeth', type: 'kinda' },
      { text: 'Their phone calls', type: 'silly' }
    ]
  },
  {
    id: 'q197', fact: 'footprint-speed',
    q: 'Scientists can estimate how fast a dinosaur moved by studying...',
    answers: [
      { text: 'The spacing of its footprints', correct: true },
      { text: 'The color of its bones', type: 'believable' },
      { text: 'The length of its tail', type: 'kinda' },
      { text: 'Its race trophies', type: 'silly' }
    ]
  },
  {
    id: 'q198', fact: 'seven-continents',
    q: 'Dinosaur fossils have been found on how many continents?',
    answers: [
      { text: 'All seven', correct: true },
      { text: 'Only one', type: 'believable' },
      { text: 'Three', type: 'kinda' },
      { text: 'None, they live in museums', type: 'silly' }
    ]
  },
  {
    id: 'q199', fact: 'hip-groups',
    q: 'Scientists split dinosaurs into two big groups based on their...',
    answers: [
      { text: 'Hip bones', correct: true },
      { text: 'Teeth', type: 'believable' },
      { text: 'Skulls', type: 'kinda' },
      { text: 'Number of tails', type: 'silly' }
    ]
  },
  {
    id: 'q200', fact: 'bird-hipped',
    q: "Which group's name means \"bird-hipped\"?",
    answers: [
      { text: 'Ornithischians (like Triceratops)', correct: true },
      { text: 'Saurischians (like T. rex)', type: 'believable' },
      { text: 'Pterosaurs', type: 'kinda' },
      { text: 'Birdy-butt-osaurs', type: 'silly' }
    ]
  },
  {
    id: 'q201', fact: 'upright-legs',
    q: 'Unlike lizards, dinosaurs held their legs...',
    answers: [
      { text: 'Straight under their bodies', correct: true },
      { text: 'Sprawled out to the sides', type: 'believable' },
      { text: "Bent like a frog's", type: 'kinda' },
      { text: 'In their pockets', type: 'silly' }
    ]
  },
  {
    id: 'q202', fact: 'scales-feathers',
    q: 'Did all dinosaurs have feathers?',
    answers: [
      { text: 'No, many had scales', correct: true },
      { text: 'Yes, every single one', type: 'believable' },
      { text: 'Yes, even the biggest ones', type: 'kinda' },
      { text: 'They all wore sweaters', type: 'silly' }
    ]
  },
  {
    id: 'q203', fact: 'continents-moved',
    q: 'During the dinosaur age, the continents...',
    answers: [
      { text: 'Slowly drifted apart', correct: true },
      { text: 'Stayed exactly where they are now', type: 'believable' },
      { text: 'Moved together into one big piece', type: 'kinda' },
      { text: 'Floated like rafts in the sky', type: 'silly' }
    ]
  },
  {
    id: 'q204', fact: 'jurassic-name',
    q: 'The Jurassic Period is named after...',
    answers: [
      { text: 'The Jura Mountains in Europe', correct: true },
      { text: 'A Latin word for \'giant\'', type: 'believable' },
      { text: 'A town in England', type: 'kinda' },
      { text: 'A juice brand', type: 'silly' }
    ]
  },
  {
    id: 'q205', fact: 'cretaceous-name',
    q: '\'Cretaceous\' comes from the Latin word for...',
    answers: [
      { text: 'Chalk', correct: true },
      { text: 'Lizard', type: 'believable' },
      { text: 'Ocean', type: 'kinda' },
      { text: 'Crayon', type: 'silly' }
    ]
  },
  {
    id: 'q206', fact: 'triassic-name',
    q: 'The Triassic got its name because...',
    answers: [
      { text: 'Its rock layers in Germany come in three parts', correct: true },
      { text: 'It had three kinds of dinosaurs', type: 'believable' },
      { text: 'It came third in time', type: 'kinda' },
      { text: 'Everything had three horns', type: 'silly' }
    ]
  },
  {
    id: 'q207', fact: 'mesozoic-length',
    q: 'The Mesozoic Era, the Age of Dinosaurs, lasted about...',
    answers: [
      { text: '186 million years', correct: true },
      { text: '1 million years', type: 'believable' },
      { text: '10,000 years', type: 'kinda' },
      { text: 'A long weekend', type: 'silly' }
    ]
  },
  {
    id: 'q208', fact: 'warm-earth',
    q: 'During much of the dinosaur age, Earth was...',
    answers: [
      { text: 'Warmer than today', correct: true },
      { text: 'Colder than today, with ice everywhere', type: 'believable' },
      { text: 'About the same as today', type: 'kinda' },
      { text: 'Made of cheese', type: 'silly' }
    ]
  },
  {
    id: 'q209', fact: 'sharks-old',
    q: 'Which animals were around even BEFORE the dinosaurs and are still here today?',
    answers: [
      { text: 'Sharks', correct: true },
      { text: 'Horses', type: 'believable' },
      { text: 'Penguins', type: 'kinda' },
      { text: 'Unicorns', type: 'silly' }
    ]
  },
  {
    id: 'q210', fact: 'teeth-replace',
    q: 'Unlike us, dinosaurs could...',
    answers: [
      { text: 'Replace lost teeth again and again', correct: true },
      { text: 'Never lose a tooth', type: 'believable' },
      { text: 'Grow only one set of teeth', type: 'kinda' },
      { text: 'Order new teeth online', type: 'silly' }
    ]
  },
  {
    id: 'q211', fact: 'gizzard-birds',
    q: 'Birds today swallow small stones to help grind food in their...',
    answers: [
      { text: 'Gizzard', correct: true },
      { text: 'Lungs', type: 'believable' },
      { text: 'Beak', type: 'kinda' },
      { text: 'Pockets', type: 'silly' }
    ]
  },
  {
    id: 'q212', fact: 'penguin-dino',
    q: 'Is a penguin a dinosaur?',
    answers: [
      { text: 'Yes, because all birds are dinosaurs', correct: true },
      { text: 'No, penguins are fish', type: 'believable' },
      { text: 'No, penguins are mammals', type: 'kinda' },
      { text: 'Only on Tuesdays', type: 'silly' }
    ]
  },
  {
    id: 'q213', fact: 'trex-chicken-relative',
    q: 'Which is more closely related to T. rex?',
    answers: [
      { text: 'A chicken', correct: true },
      { text: 'A crocodile', type: 'believable' },
      { text: 'A lizard', type: 'kinda' },
      { text: 'A goldfish', type: 'silly' }
    ]
  },
  {
    id: 'q214', fact: 'non-avian',
    q: "Scientists call dinosaurs that aren't birds...",
    answers: [
      { text: 'Non-avian dinosaurs', correct: true },
      { text: 'Ancient dinosaurs', type: 'believable' },
      { text: 'Reptile dinosaurs', type: 'kinda' },
      { text: 'Bird-less nuggets', type: 'silly' }
    ]
  },
  {
    id: 'q215', fact: 'cassowary',
    q: 'The cassowary, a living bird, has a tall crest on its head called a...',
    answers: [
      { text: 'Casque', correct: true },
      { text: 'Crown', type: 'believable' },
      { text: 'Frill', type: 'kinda' },
      { text: 'Helmet hat', type: 'silly' }
    ]
  },
  {
    id: 'q216', fact: 'ostrich-eggs',
    q: 'Which living dinosaur lays the biggest eggs today?',
    answers: [
      { text: 'The ostrich', correct: true },
      { text: 'The chicken', type: 'believable' },
      { text: 'The hummingbird', type: 'kinda' },
      { text: 'The Easter Bunny', type: 'silly' }
    ]
  },
  {
    id: 'q217', fact: 'latin-greek',
    q: 'Dinosaur scientific names usually come from...',
    answers: [
      { text: 'Greek or Latin words', correct: true },
      { text: 'English words', type: 'believable' },
      { text: 'Made-up words with no meaning', type: 'kinda' },
      { text: 'Emoji', type: 'silly' }
    ]
  },
  {
    id: 'q218', fact: 'new-discoveries',
    q: 'Are scientists still discovering new kinds of dinosaurs today?',
    answers: [
      { text: 'Yes, many new ones every year', correct: true },
      { text: 'No, they found them all in 1900', type: 'believable' },
      { text: 'Only one every 100 years', type: 'kinda' },
      { text: 'Only on Mars', type: 'silly' }
    ]
  },
  {
    id: 'q219', fact: 'casts',
    q: 'Many skeletons in museums are...',
    answers: [
      { text: 'Casts, which are copies of the real bones', correct: true },
      { text: 'Carved from wood', type: 'believable' },
      { text: 'Plastic models made from drawings', type: 'kinda' },
      { text: 'Real bones painted gold', type: 'silly' }
    ]
  },
  {
    id: 'q220', fact: 'sue-name',
    q: 'The T. rex Sue was named after...',
    answers: [
      { text: 'Sue Hendrickson, the person who found it', correct: true },
      { text: 'A famous queen', type: 'believable' },
      { text: "The scientist's daughter", type: 'kinda' },
      { text: 'A song', type: 'silly' }
    ]
  },

  // ---- Famous dinosaurs and fossils (incl. flipped versions) ----
  {
    id: 'q221', fact: 'trex-fingers',
    q: 'Which famous dinosaur had just two fingers on each tiny arm?',
    answers: [
      { text: 'T. rex', correct: true },
      { text: 'Spinosaurus', type: 'believable' },
      { text: 'Iguanodon', type: 'kinda' },
      { text: 'Handy McTwofingers', type: 'silly' }
    ]
  },
  {
    id: 'q222', fact: 'thagomizer',
    q: "A Stegosaurus's thagomizer spikes are found on its...",
    answers: [
      { text: 'Tail', correct: true },
      { text: 'Back', type: 'believable' },
      { text: 'Head', type: 'kinda' },
      { text: 'Lunchbox', type: 'silly' }
    ]
  },
  {
    id: 'q223', fact: 'anky-club',
    q: 'What did Ankylosaurus have at the end of its tail?',
    answers: [
      { text: 'A bony club', correct: true },
      { text: 'Long spikes like Stegosaurus', type: 'believable' },
      { text: 'A sail', type: 'kinda' },
      { text: 'A pom-pom', type: 'silly' }
    ]
  },
  {
    id: 'q224', fact: 'raptor-size',
    q: 'Which of these dinosaurs was only about the size of a turkey?',
    answers: [
      { text: 'Velociraptor', correct: true },
      { text: 'Allosaurus', type: 'believable' },
      { text: 'T. rex', type: 'kinda' },
      { text: 'Turkeyasaurus', type: 'silly' }
    ]
  },
  {
    id: 'q225', fact: 'raptor-feathers',
    q: 'Scientists know Velociraptor had feathers because its arm bones have...',
    answers: [
      { text: 'Quill knobs, where feathers attached', correct: true },
      { text: 'Bite marks', type: 'believable' },
      { text: 'Tiny hairs', type: 'kinda' },
      { text: 'Feather stickers', type: 'silly' }
    ]
  },
  {
    id: 'q226', fact: 'birds',
    q: 'Birds are...',
    answers: [
      { text: 'Living dinosaurs', correct: true },
      { text: 'Dinosaur toys', type: 'believable' },
      { text: 'Flying mammals', type: 'kinda' },
      { text: 'Tiny airplanes', type: 'silly' }
    ]
  },
  {
    id: 'q227', fact: 'pteranodon',
    q: 'Pteranodon belonged to which group?',
    answers: [
      { text: 'Pterosaurs', correct: true },
      { text: 'Dinosaurs', type: 'believable' },
      { text: 'Birds', type: 'kinda' },
      { text: 'Bats', type: 'silly' }
    ]
  },
  {
    id: 'q228', fact: 'asteroid-size',
    q: 'The asteroid that helped wipe out the dinosaurs was about how wide?',
    answers: [
      { text: 'About 10 kilometers (6 miles)', correct: true },
      { text: 'About 10 meters (33 feet)', type: 'believable' },
      { text: 'About 1,000 kilometers (600 miles)', type: 'kinda' },
      { text: 'About as big as a basketball', type: 'silly' }
    ]
  },
  {
    id: 'q229', fact: 'pachy-dome',
    q: 'Pachycephalosaurus is famous for its...',
    answers: [
      { text: 'Thick dome-shaped skull', correct: true },
      { text: 'Long neck', type: 'believable' },
      { text: 'Sail', type: 'kinda' },
      { text: 'Duck bill', type: 'silly' }
    ]
  },
  {
    id: 'q230', fact: 'parasaur-crest',
    q: 'Which dinosaur had a long tube-shaped crest that may have worked a bit like a trumpet?',
    answers: [
      { text: 'Parasaurolophus', correct: true },
      { text: 'Triceratops', type: 'believable' },
      { text: 'Velociraptor', type: 'kinda' },
      { text: 'Trumpetosaurus', type: 'silly' }
    ]
  },
  {
    id: 'q231', fact: 'iguanodon-thumb',
    q: 'Which dinosaur had big spikes on its thumbs?',
    answers: [
      { text: 'Iguanodon', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Brachiosaurus', type: 'kinda' },
      { text: 'Thumbs-up-a-saurus', type: 'silly' }
    ]
  },
  {
    id: 'q232', fact: 'trex-name',
    q: "Which dinosaur's name means \"tyrant lizard king\"?",
    answers: [
      { text: 'Tyrannosaurus rex', correct: true },
      { text: 'Giganotosaurus', type: 'believable' },
      { text: 'Brachiosaurus', type: 'kinda' },
      { text: 'King Lizard McRoarface', type: 'silly' }
    ]
  },
  {
    id: 'q233', fact: 'trex-time',
    q: 'Which of these dinosaurs lived in the Late Cretaceous?',
    answers: [
      { text: 'T. rex', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Allosaurus', type: 'kinda' },
      { text: 'Barney', type: 'silly' }
    ]
  },
  {
    id: 'q234', fact: 'trike-diet',
    q: 'Which of these dinosaurs was a plant-eater?',
    answers: [
      { text: 'Triceratops', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Velociraptor', type: 'kinda' },
      { text: 'Cookie Monster', type: 'silly' }
    ]
  },
  {
    id: 'q235', fact: 'stego-period',
    q: 'Which dinosaur lived in the Late Jurassic?',
    answers: [
      { text: 'Stegosaurus', correct: true },
      { text: 'Triceratops', type: 'believable' },
      { text: 'T. rex', type: 'kinda' },
      { text: 'The Jurassic Park ticket guy', type: 'silly' }
    ]
  },
  {
    id: 'q236', fact: 'spino-water',
    q: 'Which dinosaur do scientists think hunted fish in rivers?',
    answers: [
      { text: 'Spinosaurus', correct: true },
      { text: 'Ankylosaurus', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: 'Fishsticks-a-saurus', type: 'silly' }
    ]
  },
  {
    id: 'q237', fact: 'maiasaura',
    q: "Which dinosaur's name means \"good mother lizard\"?",
    answers: [
      { text: 'Maiasaura', correct: true },
      { text: 'Oviraptor', type: 'believable' },
      { text: 'Velociraptor', type: 'kinda' },
      { text: 'Momasaurus', type: 'silly' }
    ]
  },
  {
    id: 'q238', fact: 'owen',
    q: 'Richard Owen is famous for...',
    answers: [
      { text: 'Inventing the word \'dinosaur\'', correct: true },
      { text: 'Finding the first T. rex', type: 'believable' },
      { text: 'Discovering birds', type: 'kinda' },
      { text: 'Inventing chicken nuggets', type: 'silly' }
    ]
  },
  {
    id: 'q239', fact: 'archaeopteryx',
    q: 'Archaeopteryx fossils were found in which country?',
    answers: [
      { text: 'Germany', correct: true },
      { text: 'USA', type: 'believable' },
      { text: 'Brazil', type: 'kinda' },
      { text: 'Birdland', type: 'silly' }
    ]
  },
  {
    id: 'q240', fact: 'dino-meaning',
    q: 'Which word means \'terrible lizard\'?',
    answers: [
      { text: 'Dinosaur', correct: true },
      { text: 'Pterodactyl', type: 'believable' },
      { text: 'Crocodile', type: 'kinda' },
      { text: 'Lizard-zilla', type: 'silly' }
    ]
  },
  {
    id: 'q241', fact: 'coprolite',
    q: 'What is a coprolite?',
    answers: [
      { text: 'Fossilized poop', correct: true },
      { text: 'A dinosaur egg', type: 'believable' },
      { text: 'A footprint', type: 'kinda' },
      { text: 'A piece of rock candy', type: 'silly' }
    ]
  },
  {
    id: 'q242', fact: 'gastroliths',
    q: 'What are gastroliths?',
    answers: [
      { text: 'Stones swallowed to help grind food', correct: true },
      { text: 'Dinosaur eggs', type: 'believable' },
      { text: 'Fossil footprints', type: 'kinda' },
      { text: 'Dinosaur jewelry', type: 'silly' }
    ]
  },
  {
    id: 'q243', fact: 'stan',
    q: '\'Stan,\' a famous T. rex skeleton, set a record in 2020 when it was...',
    answers: [
      { text: 'Sold at auction for about 32 million dollars', correct: true },
      { text: 'Found in Antarctica', type: 'believable' },
      { text: 'Found in a backyard', type: 'kinda' },
      { text: 'Taught to dance', type: 'silly' }
    ]
  },
  {
    id: 'q244', fact: 'trex-arm-length',
    q: "About how long were T. rex's arms?",
    answers: [
      { text: 'About 1 meter (3 feet)', correct: true },
      { text: 'About 10 cm (4 inches)', type: 'believable' },
      { text: 'About 5 meters (16 feet)', type: 'kinda' },
      { text: 'Long enough to hug you', type: 'silly' }
    ]
  },
  {
    id: 'q245', fact: 'trex-arm-strong',
    q: "Even though they were short, T. rex's arms were...",
    answers: [
      { text: 'Strong and muscular', correct: true },
      { text: 'Weak and floppy', type: 'believable' },
      { text: 'Used for walking', type: 'kinda' },
      { text: 'Great at playing piano', type: 'silly' }
    ]
  },
  {
    id: 'q246', fact: 'trex-crush',
    q: 'T. rex could bite hard enough to...',
    answers: [
      { text: 'Crush bone', correct: true },
      { text: 'Cut through steel', type: 'believable' },
      { text: 'Only bite soft food', type: 'kinda' },
      { text: 'Break the sound barrier', type: 'silly' }
    ]
  },
  {
    id: 'q247', fact: 'trex-coprolite',
    q: 'A giant T. rex coprolite (fossil poop) was found to contain...',
    answers: [
      { text: 'Bits of crushed bone', correct: true },
      { text: 'Seeds', type: 'believable' },
      { text: 'Leaves', type: 'kinda' },
      { text: 'Broccoli', type: 'silly' }
    ]
  },
  {
    id: 'q248', fact: 'trike-bitten',
    q: 'Scientists found Triceratops bones with bite marks from...',
    answers: [
      { text: 'T. rex', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Velociraptor', type: 'kinda' },
      { text: 'A beaver', type: 'silly' }
    ]
  },
  {
    id: 'q249', fact: 'stego-trex',
    q: 'Could Stegosaurus and T. rex have ever met?',
    answers: [
      { text: 'No, they lived millions of years apart', correct: true },
      { text: 'Yes, they were neighbors', type: 'believable' },
      { text: 'Yes, near rivers', type: 'kinda' },
      { text: 'Yes, they ate lunch together', type: 'silly' }
    ]
  },
  {
    id: 'q250', fact: 'stego-size',
    q: 'Stegosaurus was about how long?',
    answers: [
      { text: 'About 9 meters (30 feet)', correct: true },
      { text: 'About 1 meter (3 feet)', type: 'believable' },
      { text: 'About 50 meters (165 feet)', type: 'kinda' },
      { text: 'About as long as a pencil', type: 'silly' }
    ]
  },
  {
    id: 'q251', fact: 'anky-size',
    q: 'Ankylosaurus could be about how long?',
    answers: [
      { text: 'About 6 to 8 meters (20 to 26 feet)', correct: true },
      { text: 'About 1 meter (3 feet)', type: 'believable' },
      { text: 'About 40 meters (130 feet)', type: 'kinda' },
      { text: 'About as long as a cat', type: 'silly' }
    ]
  },
  {
    id: 'q252', fact: 'anky-belly',
    q: 'Ankylosaurus had heavy armor on its back, but its belly was probably...',
    answers: [
      { text: 'Not armored', correct: true },
      { text: 'Covered in spikes', type: 'believable' },
      { text: 'Covered in thick plates', type: 'kinda' },
      { text: 'Ticklish', type: 'silly' }
    ]
  },
  {
    id: 'q253', fact: 'brachio-where',
    q: 'The first Brachiosaurus fossils were found in which US state?',
    answers: [
      { text: 'Colorado', correct: true },
      { text: 'Florida', type: 'believable' },
      { text: 'Maine', type: 'kinda' },
      { text: 'Hawaii', type: 'silly' }
    ]
  },
  {
    id: 'q254', fact: 'giraffatitan',
    q: 'A big African dinosaur once called Brachiosaurus now has its own name, which is...',
    answers: [
      { text: 'Giraffatitan', correct: true },
      { text: 'Argentinosaurus', type: 'believable' },
      { text: 'Tanzaniasaurus', type: 'kinda' },
      { text: 'Giraffe-o-matic', type: 'silly' }
    ]
  },
  {
    id: 'q255', fact: 'diplo-length',
    q: 'Diplodocus was about how long?',
    answers: [
      { text: 'About 25 meters (80 feet)', correct: true },
      { text: 'About 3 meters (10 feet)', type: 'believable' },
      { text: 'About 250 meters (800 feet)', type: 'kinda' },
      { text: 'About one noodle', type: 'silly' }
    ]
  },
  {
    id: 'q256', fact: 'tail-dragging',
    q: 'Old pictures showed dinosaurs dragging their tails. Now we know they...',
    answers: [
      { text: 'Held their tails up off the ground', correct: true },
      { text: 'Had no tails', type: 'believable' },
      { text: 'Used their tails as a third leg', type: 'kinda' },
      { text: 'Used their tails as pillows', type: 'silly' }
    ]
  },
  {
    id: 'q257', fact: 'kangaroo-pose',
    q: 'Old models showed T. rex standing straight up like a kangaroo. Today scientists show it...',
    answers: [
      { text: 'With its body level and tail held out straight', correct: true },
      { text: 'Leaning forward on its arms', type: 'believable' },
      { text: 'Walking on four legs', type: 'kinda' },
      { text: 'Doing yoga', type: 'silly' }
    ]
  },
  {
    id: 'q258', fact: 'crystal-palace',
    q: 'The first life-size dinosaur statues, built in 1854, are in which park?',
    answers: [
      { text: 'Crystal Palace Park in London', correct: true },
      { text: 'Central Park in New York', type: 'believable' },
      { text: 'Hyde Park in London', type: 'kinda' },
      { text: 'Jurassic Park', type: 'silly' }
    ]
  },
  {
    id: 'q259', fact: 'compy-meal',
    q: 'A Compsognathus fossil was found with what in its stomach?',
    answers: [
      { text: 'A small lizard', correct: true },
      { text: 'A fish', type: 'believable' },
      { text: 'A T. rex egg', type: 'kinda' },
      { text: 'A cheeseburger', type: 'silly' }
    ]
  },
  {
    id: 'q260', fact: 'baryonyx-meal',
    q: 'A Baryonyx fossil had what inside its stomach area?',
    answers: [
      { text: 'Fish scales', correct: true },
      { text: 'Pine cones', type: 'believable' },
      { text: 'Small stones', type: 'kinda' },
      { text: 'A teddy bear', type: 'silly' }
    ]
  },
  {
    id: 'q261', fact: 'deinocheirus-arms',
    q: 'For a long time, Deinocheirus was a mystery because only its huge...',
    answers: [
      { text: 'Arms had been found', correct: true },
      { text: 'Teeth had been found', type: 'believable' },
      { text: 'Footprints had been found', type: 'kinda' },
      { text: 'Eyebrows had been found', type: 'silly' }
    ]
  },
  {
    id: 'q262', fact: 'deinocheirus-family',
    q: 'When more Deinocheirus bones were found, it turned out to be a giant cousin of...',
    answers: [
      { text: 'Ostrich-like dinosaurs', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: 'Big Bird', type: 'silly' }
    ]
  },
  {
    id: 'q263', fact: 'microraptor-meals',
    q: 'Microraptor fossils show it ate...',
    answers: [
      { text: 'Different foods, including birds, fish, and lizards', correct: true },
      { text: 'Only leaves', type: 'believable' },
      { text: 'Only insects', type: 'kinda' },
      { text: 'Only cupcakes', type: 'silly' }
    ]
  },
  {
    id: 'q264', fact: 'citipati',
    q: 'A famous fossil from Mongolia shows Citipati...',
    answers: [
      { text: 'Sitting on its nest of eggs', correct: true },
      { text: 'Fighting a T. rex', type: 'believable' },
      { text: 'Swimming in a lake', type: 'kinda' },
      { text: 'Sleeping in a hammock', type: 'silly' }
    ]
  },
  {
    id: 'q265', fact: 'dueling-dinos',
    q: 'The \'Dueling Dinosaurs\' fossil from Montana shows a tyrannosaur buried together with a...',
    answers: [
      { text: 'Triceratops', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Brachiosaurus', type: 'kinda' },
      { text: 'Woolly mammoth', type: 'silly' }
    ]
  },
  {
    id: 'q266', fact: 'dakota',
    q: '\'Dakota,\' a dinosaur \'mummy\' with fossilized skin, is which kind of dinosaur?',
    answers: [
      { text: 'Edmontosaurus (duck-billed)', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Velociraptor', type: 'kinda' },
      { text: 'Diplodocus', type: 'silly' }
    ]
  },
  {
    id: 'q267', fact: 'leonardo',
    q: '\'Leonardo,\' a mummified dinosaur with fossil skin, was a...',
    answers: [
      { text: 'Brachylophosaurus (duck-billed)', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Stegosaurus', type: 'kinda' },
      { text: 'Pterodactyl', type: 'silly' }
    ]
  },
  {
    id: 'q268', fact: 'scotty',
    q: '\'Scotty,\' one of the biggest T. rex skeletons ever found, was discovered in...',
    answers: [
      { text: 'Canada', correct: true },
      { text: 'Scotland', type: 'believable' },
      { text: 'Mexico', type: 'kinda' },
      { text: 'Antarctica', type: 'silly' }
    ]
  },
  {
    id: 'q269', fact: 'spino-ww2',
    q: 'The first Spinosaurus fossils were found in Egypt but were destroyed during...',
    answers: [
      { text: 'World War II', correct: true },
      { text: 'A volcano eruption', type: 'believable' },
      { text: 'A flood', type: 'kinda' },
      { text: 'A really big sneeze', type: 'silly' }
    ]
  },
  {
    id: 'q270', fact: 'stromer',
    q: 'Who first described Spinosaurus?',
    answers: [
      { text: 'Ernst Stromer', correct: true },
      { text: 'Richard Owen', type: 'believable' },
      { text: 'Mary Anning', type: 'kinda' },
      { text: 'Professor Spinny', type: 'silly' }
    ]
  },

  // ---- Bodies, behavior, fun names, places ----
  {
    id: 'q271', fact: 'sclerotic-ring',
    q: "Many dinosaurs had a ring of little bones inside each eye, like birds do. It's called a...",
    answers: [
      { text: 'Sclerotic ring', correct: true },
      { text: 'Eye crown', type: 'believable' },
      { text: 'Pupil plate', type: 'kinda' },
      { text: 'Eyeball hula hoop', type: 'silly' }
    ]
  },
  {
    id: 'q272', fact: 'air-sacs',
    q: 'Sauropods had air sacs connected to their lungs, just like...',
    answers: [
      { text: 'Birds', correct: true },
      { text: 'Fish', type: 'believable' },
      { text: 'Frogs', type: 'kinda' },
      { text: 'Balloons', type: 'silly' }
    ]
  },
  {
    id: 'q273', fact: 'trex-toes',
    q: "How many big toes touched the ground on each of T. rex's feet?",
    answers: [
      { text: 'Three', correct: true },
      { text: 'One', type: 'believable' },
      { text: 'Five', type: 'kinda' },
      { text: 'Ten', type: 'silly' }
    ]
  },
  {
    id: 'q274', fact: 'stego-plates-use',
    q: 'Stegosaurus plates had grooves for blood vessels, so they may have helped with...',
    answers: [
      { text: 'Showing off or warming and cooling its body', correct: true },
      { text: 'Digging', type: 'believable' },
      { text: 'Storing food', type: 'kinda' },
      { text: 'Wi-Fi', type: 'silly' }
    ]
  },
  {
    id: 'q275', fact: 'trike-horns-use',
    q: 'Scientists think Triceratops used its horns for...',
    answers: [
      { text: 'Showing off and battling rivals', correct: true },
      { text: 'Digging up roots', type: 'believable' },
      { text: 'Knocking down trees', type: 'kinda' },
      { text: 'Opening cans', type: 'silly' }
    ]
  },
  {
    id: 'q276', fact: 'troodon-eyes',
    q: 'Troodon had big eyes that may have helped it see in...',
    answers: [
      { text: 'Dim light', correct: true },
      { text: 'Muddy water', type: 'believable' },
      { text: 'Bright sunlight only', type: 'kinda' },
      { text: '3D movies', type: 'silly' }
    ]
  },
  {
    id: 'q277', fact: 'duckbill-chew',
    q: 'Duck-billed dinosaurs were great at...',
    answers: [
      { text: 'Chewing tough plants', correct: true },
      { text: 'Catching fish in the ocean', type: 'believable' },
      { text: 'Cracking nuts', type: 'kinda' },
      { text: 'Singing quack songs', type: 'silly' }
    ]
  },
  {
    id: 'q278', fact: 'sauropod-swallow',
    q: "Giant sauropods didn't really chew. Instead they...",
    answers: [
      { text: 'Swallowed plants whole or in big bites', correct: true },
      { text: 'Chewed slowly like cows', type: 'believable' },
      { text: 'Sucked up water plants', type: 'kinda' },
      { text: 'Chewed each bite for hours', type: 'silly' }
    ]
  },
  {
    id: 'q279', fact: 'sauropod-babies',
    q: 'Even giant sauropods started out as babies about as small as a...',
    answers: [
      { text: 'Cat or small dog', correct: true },
      { text: 'School bus', type: 'believable' },
      { text: 'Adult elephant', type: 'kinda' },
      { text: 'Grain of sand', type: 'silly' }
    ]
  },
  {
    id: 'q280', fact: 'sauropod-growth',
    q: 'Giant sauropods grew from tiny hatchlings into huge adults...',
    answers: [
      { text: 'Very quickly, in a few decades or less', correct: true },
      { text: 'In one week', type: 'believable' },
      { text: 'Over about 500 years', type: 'kinda' },
      { text: 'Over a billion years', type: 'silly' }
    ]
  },
  {
    id: 'q281', fact: 'trex-age',
    q: 'Scientists think a big T. rex could live to about...',
    answers: [
      { text: '30 years old', correct: true },
      { text: '500 years old', type: 'believable' },
      { text: '2 years old', type: 'kinda' },
      { text: 'Its 1,000th birthday', type: 'silly' }
    ]
  },
  {
    id: 'q282', fact: 'raptor-claw-use',
    q: "Velociraptor's big toe claw was probably used to...",
    answers: [
      { text: 'Pin down and hold its prey', correct: true },
      { text: 'Dig tunnels', type: 'believable' },
      { text: 'Climb trees', type: 'kinda' },
      { text: 'Comb its feathers', type: 'silly' }
    ]
  },
  {
    id: 'q283', fact: 'crest-display',
    q: 'Scientists think many dinosaur crests were mainly used for...',
    answers: [
      { text: 'Showing off and recognizing each other', correct: true },
      { text: 'Storing water', type: 'believable' },
      { text: 'Breaking branches', type: 'kinda' },
      { text: 'Wi-Fi antennas', type: 'silly' }
    ]
  },
  {
    id: 'q284', fact: 'psittaco-camo',
    q: 'Fossils show Psittacosaurus was darker on top and lighter underneath, which helped it...',
    answers: [
      { text: 'Blend into the forest', correct: true },
      { text: 'Stay cool in the sun', type: 'believable' },
      { text: 'Scare away predators', type: 'kinda' },
      { text: 'Look like a zebra', type: 'silly' }
    ]
  },
  {
    id: 'q285', fact: 'sino-colors',
    q: 'The tail rings of Sinosauropteryx were probably...',
    answers: [
      { text: 'Reddish-brown and white', correct: true },
      { text: 'Green and purple', type: 'believable' },
      { text: 'Black and yellow', type: 'kinda' },
      { text: 'Plaid', type: 'silly' }
    ]
  },
  {
    id: 'q286', fact: 'anchiornis',
    q: 'Anchiornis was the first dinosaur to have its whole-body colors figured out. It had...',
    answers: [
      { text: 'Black, white, and gray feathers with a reddish crest', correct: true },
      { text: 'All bright blue feathers', type: 'believable' },
      { text: 'Yellow scales', type: 'kinda' },
      { text: 'Rainbow stripes', type: 'silly' }
    ]
  },
  {
    id: 'q287', fact: 'borealopelta-color',
    q: 'Scientists found that the armored dinosaur Borealopelta was colored...',
    answers: [
      { text: 'Reddish-brown on top and lighter underneath', correct: true },
      { text: 'Bright green', type: 'believable' },
      { text: 'Spotted like a leopard', type: 'kinda' },
      { text: 'Gold and sparkly', type: 'silly' }
    ]
  },
  {
    id: 'q288', fact: 'sauropod-claw',
    q: "Many sauropods had one big claw on each front foot's...",
    answers: [
      { text: 'Thumb', correct: true },
      { text: 'Pinky', type: 'believable' },
      { text: 'Heel', type: 'kinda' },
      { text: 'Tiptoe', type: 'silly' }
    ]
  },
  {
    id: 'q289', fact: 'oryctodromeus',
    q: 'Oryctodromeus is a small dinosaur found inside a...',
    answers: [
      { text: 'Burrow it may have dug', correct: true },
      { text: 'Cave', type: 'believable' },
      { text: 'Hollow log', type: 'kinda' },
      { text: 'Snow fort', type: 'silly' }
    ]
  },
  {
    id: 'q290', fact: 'oryctodromeus-name',
    q: 'Oryctodromeus means...',
    answers: [
      { text: '\'Digging runner\'', correct: true },
      { text: '\'Flying lizard\'', type: 'believable' },
      { text: '\'Big tooth\'', type: 'kinda' },
      { text: '\'Burrito runner\'', type: 'silly' }
    ]
  },
  {
    id: 'q291', fact: 'scrape-marks',
    q: 'Giant scrape marks in rock may show that some dinosaurs...',
    answers: [
      { text: 'Danced to attract a mate, like some birds do', correct: true },
      { text: 'Dug for water', type: 'believable' },
      { text: 'Sharpened their claws', type: 'kinda' },
      { text: 'Played tic-tac-toe', type: 'silly' }
    ]
  },
  {
    id: 'q292', fact: 'neck-bones',
    q: 'Giraffes have only 7 neck bones. Mamenchisaurus had...',
    answers: [
      { text: 'Many more, up to 19', correct: true },
      { text: 'Only 2', type: 'believable' },
      { text: 'None', type: 'kinda' },
      { text: '1,000', type: 'silly' }
    ]
  },
  {
    id: 'q293', fact: 'anky-swing',
    q: 'Scientists think Ankylosaurus swung its tail club to...',
    answers: [
      { text: 'Defend itself', correct: true },
      { text: 'Knock fruit from trees', type: 'believable' },
      { text: 'Dig holes', type: 'kinda' },
      { text: 'Knock on doors', type: 'silly' }
    ]
  },
  {
    id: 'q294', fact: 'bird-tracks',
    q: 'Many meat-eating dinosaur footprints look like giant...',
    answers: [
      { text: 'Bird footprints', correct: true },
      { text: 'Human footprints', type: 'believable' },
      { text: 'Horse hoofprints', type: 'kinda' },
      { text: 'Sneaker prints', type: 'silly' }
    ]
  },
  {
    id: 'q295', fact: 'ichnite',
    q: 'A fossil footprint is also called a...',
    answers: [
      { text: 'Track or ichnite', correct: true },
      { text: 'Coprolite', type: 'believable' },
      { text: 'Gastrolith', type: 'kinda' },
      { text: 'Toe-print-o-saurus', type: 'silly' }
    ]
  },
  {
    id: 'q296', fact: 'dinosaur-ridge',
    q: 'Dinosaur Ridge, where you can see real dinosaur footprints, is near which city?',
    answers: [
      { text: 'Denver, Colorado', correct: true },
      { text: 'Miami, Florida', type: 'believable' },
      { text: 'Seattle, Washington', type: 'kinda' },
      { text: 'Atlantis', type: 'silly' }
    ]
  },
  {
    id: 'q297', fact: 'dinosaur-valley',
    q: 'At Dinosaur Valley State Park in Texas, you can see dinosaur footprints in a...',
    answers: [
      { text: 'Riverbed', correct: true },
      { text: 'Cave', type: 'believable' },
      { text: 'Desert', type: 'kinda' },
      { text: 'Swimming pool', type: 'silly' }
    ]
  },
  {
    id: 'q298', fact: 'plant-teeth',
    q: 'Plant-eating dinosaurs often had teeth shaped like...',
    answers: [
      { text: 'Leaves or pegs', correct: true },
      { text: 'Steak knives', type: 'believable' },
      { text: 'Daggers', type: 'kinda' },
      { text: 'Forks', type: 'silly' }
    ]
  },
  {
    id: 'q299', fact: 'side-eyes',
    q: 'Many plant-eaters had eyes on the sides of their heads to...',
    answers: [
      { text: 'Watch for danger all around', correct: true },
      { text: 'See better underwater', type: 'believable' },
      { text: 'See at night', type: 'kinda' },
      { text: 'Read two books at once', type: 'silly' }
    ]
  },
  {
    id: 'q300', fact: 'uric-goo',
    q: 'Like birds, dinosaurs probably got rid of extra waste as...',
    answers: [
      { text: 'A white pasty goo instead of lots of pee', correct: true },
      { text: 'Lots of pee, like mammals', type: 'believable' },
      { text: 'Sweat', type: 'kinda' },
      { text: 'Steam', type: 'silly' }
    ]
  },
  {
    id: 'q301', fact: 'oviraptor-crest',
    q: 'Many oviraptor-type dinosaurs had a tall crest a bit like a...',
    answers: [
      { text: "Cassowary's casque", correct: true },
      { text: 'Crown of spikes', type: 'believable' },
      { text: 'Long trumpet', type: 'kinda' },
      { text: 'Pizza slice', type: 'silly' }
    ]
  },
  {
    id: 'q302', fact: 'gizzard-dinos',
    q: 'Some plant-eating dinosaurs may have had a gizzard, a stomach part that...',
    answers: [
      { text: 'Grinds food using swallowed stones', correct: true },
      { text: 'Stores fat', type: 'believable' },
      { text: 'Stores water like a camel', type: 'kinda' },
      { text: 'Plays music', type: 'silly' }
    ]
  },
  {
    id: 'q303', fact: 'nodosaurs',
    q: 'One way nodosaurs were different from ankylosaurids is that nodosaurs...',
    answers: [
      { text: 'Had no tail club', correct: true },
      { text: 'Had a tall crest', type: 'believable' },
      { text: 'Had no armor', type: 'kinda' },
      { text: 'Wore hats', type: 'silly' }
    ]
  },
  {
    id: 'q304', fact: 'edmontonia',
    q: 'Edmontonia, a nodosaur, had big spikes sticking out from its...',
    answers: [
      { text: 'Shoulders', correct: true },
      { text: 'Nose', type: 'believable' },
      { text: 'Tail tip', type: 'kinda' },
      { text: 'Toenails', type: 'silly' }
    ]
  },
  {
    id: 'q305', fact: 'stygimoloch',
    q: 'Stygimoloch had a domed head surrounded by...',
    answers: [
      { text: 'Spiky horns', correct: true },
      { text: 'Feathers', type: 'believable' },
      { text: 'A frill', type: 'kinda' },
      { text: 'Flowers', type: 'silly' }
    ]
  },
  {
    id: 'q306', fact: 'dracorex',
    q: "Which dinosaur's name means \"dragon king of Hogwarts\"?",
    answers: [
      { text: 'Dracorex hogwartsia', correct: true },
      { text: 'Draconyx', type: 'believable' },
      { text: 'Hogwartsia rex', type: 'kinda' },
      { text: 'Harrypottersaurus', type: 'silly' }
    ]
  },
  {
    id: 'q307', fact: 'irritator',
    q: 'Which dinosaur was named because the scientist was annoyed someone had messed with its skull?',
    answers: [
      { text: 'Irritator', correct: true },
      { text: 'Baryonyx', type: 'believable' },
      { text: 'Velociraptor', type: 'kinda' },
      { text: 'Grumposaurus', type: 'silly' }
    ]
  },
  {
    id: 'q308', fact: 'bambiraptor',
    q: 'Which small raptor was named after a famous cartoon deer?',
    answers: [
      { text: 'Bambiraptor', correct: true },
      { text: 'Fawnasaurus', type: 'believable' },
      { text: 'Velociraptor', type: 'kinda' },
      { text: 'Rudolphosaurus', type: 'silly' }
    ]
  },
  {
    id: 'q309', fact: 'gojirasaurus',
    q: 'Gojirasaurus was named after which giant movie monster?',
    answers: [
      { text: 'Godzilla', correct: true },
      { text: 'King Kong', type: 'believable' },
      { text: 'Bigfoot', type: 'kinda' },
      { text: 'Cookie Monster', type: 'silly' }
    ]
  },
  {
    id: 'q310', fact: 'pinocchio-rex',
    q: 'Qianzhousaurus, a T. rex cousin with a long thin snout, got which nickname?',
    answers: [
      { text: '\'Pinocchio rex\'', correct: true },
      { text: '\'Snoot rex\'', type: 'believable' },
      { text: '\'Long rex\'', type: 'kinda' },
      { text: '\'Noodle rex\'', type: 'silly' }
    ]
  },
  {
    id: 'q311', fact: 'zuul',
    q: 'Zuul, an armored dinosaur, was named after a monster from which movie?',
    answers: [
      { text: 'Ghostbusters', correct: true },
      { text: 'Star Wars', type: 'believable' },
      { text: 'Toy Story', type: 'kinda' },
      { text: 'Shrek', type: 'silly' }
    ]
  },
  {
    id: 'q312', fact: 'long-name',
    q: 'Which dinosaur has one of the longest names?',
    answers: [
      { text: 'Micropachycephalosaurus', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Mei', type: 'kinda' },
      { text: 'Bob', type: 'silly' }
    ]
  },
  {
    id: 'q313', fact: 'micropachy',
    q: 'Micropachycephalosaurus has a huge name, but it was actually a...',
    answers: [
      { text: 'Tiny dinosaur', correct: true },
      { text: 'Giant sauropod', type: 'believable' },
      { text: 'Pterosaur', type: 'kinda' },
      { text: 'Sea monster', type: 'silly' }
    ]
  },
  {
    id: 'q314', fact: 'colorado-dino',
    q: 'Which dinosaur is the official state fossil of Colorado?',
    answers: [
      { text: 'Stegosaurus', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: 'Barney', type: 'silly' }
    ]
  },
  {
    id: 'q315', fact: 'wyoming-dino',
    q: 'Triceratops is the official state dinosaur of which state?',
    answers: [
      { text: 'Wyoming', correct: true },
      { text: 'Florida', type: 'believable' },
      { text: 'Alaska', type: 'kinda' },
      { text: 'Hawaii', type: 'silly' }
    ]
  },
  {
    id: 'q316', fact: 'amnh',
    q: "Which New York City museum has one of the world's most famous dinosaur halls?",
    answers: [
      { text: 'American Museum of Natural History', correct: true },
      { text: 'The Louvre', type: 'believable' },
      { text: 'The Metropolitan Museum of Art', type: 'kinda' },
      { text: 'The Museum of Snacks', type: 'silly' }
    ]
  },
  {
    id: 'q317', fact: 'dino-provincial',
    q: 'Dinosaur Provincial Park, full of Cretaceous fossils, is in which country?',
    answers: [
      { text: 'Canada', correct: true },
      { text: 'Australia', type: 'believable' },
      { text: 'Mexico', type: 'kinda' },
      { text: 'Narnia', type: 'silly' }
    ]
  },
  {
    id: 'q318', fact: 'royal-tyrrell',
    q: 'The Royal Tyrrell Museum, famous for its dinosaurs, is in...',
    answers: [
      { text: 'Alberta, Canada', correct: true },
      { text: 'London, England', type: 'believable' },
      { text: 'Sydney, Australia', type: 'kinda' },
      { text: "Somebody's backyard", type: 'silly' }
    ]
  },
  {
    id: 'q319', fact: 'bone-cabin',
    q: 'A rancher in Wyoming once built a cabin out of...',
    answers: [
      { text: 'Dinosaur bones', correct: true },
      { text: 'Petrified wood', type: 'believable' },
      { text: 'Sod and logs', type: 'kinda' },
      { text: 'Gold bars', type: 'silly' }
    ]
  },
  {
    id: 'q320', fact: 'duckbill-teeth',
    q: 'Some duck-billed dinosaurs had more than...',
    answers: [
      { text: '1,000 teeth', correct: true },
      { text: '10 teeth', type: 'believable' },
      { text: '1 tooth', type: 'kinda' },
      { text: 'A million teeth', type: 'silly' }
    ]
  },

  // ---- Not-a-dinosaur tricks, time, digging ----
  {
    id: 'q321', fact: 'pterosaur-walk',
    q: 'Pterosaur footprints show they walked on...',
    answers: [
      { text: 'All fours, using folded wings as front legs', correct: true },
      { text: 'Only their two back legs', type: 'believable' },
      { text: 'Their wingtips and tail', type: 'kinda' },
      { text: 'Stilts', type: 'silly' }
    ]
  },
  {
    id: 'q322', fact: 'elasmosaurus',
    q: 'Elasmosaurus, a plesiosaur, had an extra-long...',
    answers: [
      { text: 'Neck', correct: true },
      { text: 'Tail', type: 'believable' },
      { text: 'Flippers', type: 'kinda' },
      { text: 'Tongue', type: 'silly' }
    ]
  },
  {
    id: 'q323', fact: 'elasmo-mistake',
    q: 'When Elasmosaurus was first put together, a scientist put its head on the end of its...',
    answers: [
      { text: 'Tail', correct: true },
      { text: 'Flipper', type: 'believable' },
      { text: 'Back', type: 'kinda' },
      { text: 'Belly button', type: 'silly' }
    ]
  },
  {
    id: 'q324', fact: 'liopleurodon',
    q: 'Liopleurodon was a...',
    answers: [
      { text: 'Big-headed sea reptile called a pliosaur', correct: true },
      { text: 'Dinosaur', type: 'believable' },
      { text: 'Shark', type: 'kinda' },
      { text: 'Unicorn', type: 'silly' }
    ]
  },
  {
    id: 'q325', fact: 'sea-dinos',
    q: 'Did any non-bird dinosaurs live fully in the ocean like Mosasaurus did?',
    answers: [
      { text: 'No, the big sea reptiles were not dinosaurs', correct: true },
      { text: 'Yes, Mosasaurus was one', type: 'believable' },
      { text: 'Yes, all plesiosaurs were', type: 'kinda' },
      { text: 'Yes, Sharkosaurus', type: 'silly' }
    ]
  },
  {
    id: 'q326', fact: 'sarcosuchus',
    q: 'Sarcosuchus, nicknamed \'SuperCroc,\' was a giant...',
    answers: [
      { text: 'Crocodile relative', correct: true },
      { text: 'Dinosaur', type: 'believable' },
      { text: 'Snake', type: 'kinda' },
      { text: 'Sock puppet', type: 'silly' }
    ]
  },
  {
    id: 'q327', fact: 'deinosuchus',
    q: 'Deinosuchus was a giant crocodile relative that left bite marks on...',
    answers: [
      { text: 'Dinosaur bones', correct: true },
      { text: 'Turtle shells only', type: 'believable' },
      { text: 'Only fish bones', type: 'kinda' },
      { text: 'Pizza crusts', type: 'silly' }
    ]
  },
  {
    id: 'q328', fact: 'titanoboa',
    q: 'Titanoboa, a giant snake, lived...',
    answers: [
      { text: 'After the non-bird dinosaurs died out', correct: true },
      { text: 'At the same time as T. rex', type: 'believable' },
      { text: 'Before the first dinosaurs', type: 'kinda' },
      { text: 'In a giant shoebox', type: 'silly' }
    ]
  },
  {
    id: 'q329', fact: 'megalodon',
    q: 'Megalodon, the giant shark, lived...',
    answers: [
      { text: 'Long after the non-bird dinosaurs', correct: true },
      { text: 'At the same time as T. rex', type: 'believable' },
      { text: 'Before the first dinosaurs', type: 'kinda' },
      { text: 'In a fish tank', type: 'silly' }
    ]
  },
  {
    id: 'q330', fact: 'dodo',
    q: 'Was the dodo a dinosaur?',
    answers: [
      { text: 'Yes, it was a bird, and birds are dinosaurs', correct: true },
      { text: 'No, it was a mammal', type: 'believable' },
      { text: 'No, it was a reptile', type: 'kinda' },
      { text: "It was a dinosaur's pet", type: 'silly' }
    ]
  },
  {
    id: 'q331', fact: 'lizards',
    q: 'Are lizards dinosaurs?',
    answers: [
      { text: "No, they're a different group of reptiles", correct: true },
      { text: 'Yes, all reptiles are dinosaurs', type: 'believable' },
      { text: 'Yes, they are tiny dinosaurs', type: 'kinda' },
      { text: 'Only on weekends', type: 'silly' }
    ]
  },
  {
    id: 'q332', fact: 'komodo',
    q: 'The Komodo dragon is...',
    answers: [
      { text: 'A big lizard, not a dinosaur', correct: true },
      { text: 'A baby dinosaur', type: 'believable' },
      { text: 'A kind of crocodile', type: 'kinda' },
      { text: "A dinosaur's grandpa", type: 'silly' }
    ]
  },
  {
    id: 'q333', fact: 'crocs',
    q: 'Crocodiles are...',
    answers: [
      { text: 'Close cousins of dinosaurs, but not dinosaurs', correct: true },
      { text: 'Dinosaurs', type: 'believable' },
      { text: 'Lizards', type: 'kinda' },
      { text: 'Mammals', type: 'silly' }
    ]
  },
  {
    id: 'q334', fact: 'turtles',
    q: 'Turtles were around at the same time as...',
    answers: [
      { text: 'The dinosaurs', correct: true },
      { text: 'Only mammoths', type: 'believable' },
      { text: 'Only the first fish', type: 'kinda' },
      { text: 'Nobody at all', type: 'silly' }
    ]
  },
  {
    id: 'q335', fact: 'trilobites',
    q: 'Trilobites were sea creatures that lived...',
    answers: [
      { text: 'Long before the dinosaurs', correct: true },
      { text: 'At the same time as T. rex', type: 'believable' },
      { text: 'After the dinosaurs', type: 'kinda' },
      { text: 'In your bathtub', type: 'silly' }
    ]
  },
  {
    id: 'q336', fact: 'ammonites',
    q: 'Ammonites, with spiral shells, were sea animals related to...',
    answers: [
      { text: 'Squid and octopuses', correct: true },
      { text: 'Land snails', type: 'believable' },
      { text: 'Crabs', type: 'kinda' },
      { text: 'Cinnamon rolls', type: 'silly' }
    ]
  },
  {
    id: 'q337', fact: 'ice-age',
    q: 'Did dinosaurs live during the Ice Age with woolly mammoths?',
    answers: [
      { text: 'Only bird dinosaurs did; the others were long gone', correct: true },
      { text: 'Yes, all of them', type: 'believable' },
      { text: 'Yes, the furry ones', type: 'kinda' },
      { text: 'Only T. rex', type: 'silly' }
    ]
  },
  {
    id: 'q338', fact: 'trex-when',
    q: 'T. rex lived about how long ago?',
    answers: [
      { text: '68 to 66 million years ago', correct: true },
      { text: '10,000 years ago', type: 'believable' },
      { text: '1 billion years ago', type: 'kinda' },
      { text: 'Last week', type: 'silly' }
    ]
  },
  {
    id: 'q339', fact: 'stego-when',
    q: 'Stegosaurus lived about how long ago?',
    answers: [
      { text: 'About 150 million years ago', correct: true },
      { text: 'About 1 million years ago', type: 'believable' },
      { text: 'About 66 million years ago', type: 'kinda' },
      { text: 'About 5 minutes ago', type: 'silly' }
    ]
  },
  {
    id: 'q340', fact: 'oldest-dinos',
    q: 'The oldest known dinosaurs lived about...',
    answers: [
      { text: '230 million years ago', correct: true },
      { text: '66 million years ago', type: 'believable' },
      { text: '10 million years ago', type: 'kinda' },
      { text: 'Yesterday', type: 'silly' }
    ]
  },
  {
    id: 'q341', fact: 'eoraptor',
    q: 'Eoraptor, one of the earliest dinosaurs, was about the size of a...',
    answers: [
      { text: 'Fox', correct: true },
      { text: 'Elephant', type: 'believable' },
      { text: 'Mouse', type: 'kinda' },
      { text: 'Bus', type: 'silly' }
    ]
  },
  {
    id: 'q342', fact: 'herrerasaurus',
    q: 'Herrerasaurus, an early meat-eating dinosaur, was found in which country?',
    answers: [
      { text: 'Argentina', correct: true },
      { text: 'Canada', type: 'believable' },
      { text: 'China', type: 'kinda' },
      { text: 'Hawaii', type: 'silly' }
    ]
  },
  {
    id: 'q343', fact: 'triassic-neighbors',
    q: 'Early dinosaurs in the Triassic shared the world with...',
    answers: [
      { text: 'Lots of other reptiles, some bigger than them', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Woolly mammoths', type: 'kinda' },
      { text: 'Robots', type: 'silly' }
    ]
  },
  {
    id: 'q344', fact: 'jurassic-giants',
    q: 'The Jurassic is famous for giant...',
    answers: [
      { text: 'Sauropods like Brachiosaurus and Diplodocus', correct: true },
      { text: 'Woolly mammoths', type: 'believable' },
      { text: 'Saber-toothed cats', type: 'kinda' },
      { text: 'Teddy bears', type: 'silly' }
    ]
  },
  {
    id: 'q345', fact: 'end-cretaceous',
    q: 'Which pair of dinosaurs lived at the very end of the Cretaceous?',
    answers: [
      { text: 'Triceratops and T. rex', correct: true },
      { text: 'Stegosaurus and Allosaurus', type: 'believable' },
      { text: 'Coelophysis and Herrerasaurus', type: 'kinda' },
      { text: 'Barney and Baby Bop', type: 'silly' }
    ]
  },
  {
    id: 'q346', fact: 'liaoning',
    q: 'Which country has found lots of feathered dinosaur fossils, especially in Liaoning Province?',
    answers: [
      { text: 'China', correct: true },
      { text: 'Ireland', type: 'believable' },
      { text: 'Iceland', type: 'kinda' },
      { text: 'Mars', type: 'silly' }
    ]
  },
  {
    id: 'q347', fact: 'majungasaurus',
    q: 'Bite marks show that Majungasaurus, a meat-eater from Madagascar, sometimes ate...',
    answers: [
      { text: 'Other Majungasaurus', correct: true },
      { text: 'Only eggs', type: 'believable' },
      { text: 'Only plants', type: 'kinda' },
      { text: 'Pancakes', type: 'silly' }
    ]
  },
  {
    id: 'q348', fact: 'sahara',
    q: 'Spinosaurus lived in North Africa, in an area that today is...',
    answers: [
      { text: 'The Sahara Desert', correct: true },
      { text: 'A rainforest', type: 'believable' },
      { text: 'A big lake', type: 'kinda' },
      { text: 'A giant mall', type: 'silly' }
    ]
  },
  {
    id: 'q349', fact: 'banjo',
    q: 'Australovenator, a meat-eater from Australia, is nicknamed...',
    answers: [
      { text: '\'Banjo\'', correct: true },
      { text: '\'Kangaroo\'', type: 'believable' },
      { text: '\'Koala\'', type: 'kinda' },
      { text: "\"G'day\"", type: 'silly' }
    ]
  },
  {
    id: 'q350', fact: 'isle-wight',
    q: 'Which island off southern England is famous for dinosaur fossils?',
    answers: [
      { text: 'The Isle of Wight', correct: true },
      { text: 'The Isle of Man', type: 'believable' },
      { text: 'Jersey', type: 'kinda' },
      { text: 'Treasure Island', type: 'silly' }
    ]
  },
  {
    id: 'q351', fact: 'alaska',
    q: 'Dinosaur fossils found in Alaska show that some dinosaurs lived...',
    answers: [
      { text: 'Far north, where winters were dark', correct: true },
      { text: 'Only in summer', type: 'believable' },
      { text: 'Under the ice', type: 'kinda' },
      { text: 'In igloos', type: 'silly' }
    ]
  },
  {
    id: 'q352', fact: 'rock-dating',
    q: 'Scientists mostly figure out how old fossils are by studying the age of...',
    answers: [
      { text: 'The rock layers around them', correct: true },
      { text: "The fossil's weight", type: 'believable' },
      { text: "The fossil's color", type: 'kinda' },
      { text: 'Its birthday party photos', type: 'silly' }
    ]
  },
  {
    id: 'q353', fact: 'deeper-older',
    q: "In rock layers that haven't been flipped or mixed, deeper fossils are usually...",
    answers: [
      { text: 'Older', correct: true },
      { text: 'Younger', type: 'believable' },
      { text: 'Exactly the same age', type: 'kinda' },
      { text: 'Sleepier', type: 'silly' }
    ]
  },
  {
    id: 'q354', fact: 'plaster',
    q: 'When digging up a dinosaur, paleontologists protect the bones by wrapping them in...',
    answers: [
      { text: 'Plaster jackets', correct: true },
      { text: 'Bubble wrap', type: 'believable' },
      { text: 'Newspaper only', type: 'kinda' },
      { text: 'Tortillas', type: 'silly' }
    ]
  },
  {
    id: 'q355', fact: 'brushes',
    q: 'To carefully uncover small fossils, paleontologists often use...',
    answers: [
      { text: 'Brushes and small picks', correct: true },
      { text: 'Big shovels', type: 'believable' },
      { text: 'Power drills', type: 'kinda' },
      { text: 'Spoons and forks', type: 'silly' }
    ]
  },
  {
    id: 'q356', fact: 'fossil-prep',
    q: 'Cleaning rock off a fossil in a lab is called...',
    answers: [
      { text: 'Fossil preparation', correct: true },
      { text: 'Fossil casting', type: 'believable' },
      { text: 'Bone washing', type: 'kinda' },
      { text: 'Dino spa day', type: 'silly' }
    ]
  },
  {
    id: 'q357', fact: 'bonebed',
    q: 'A place with lots of fossil bones packed together is called a...',
    answers: [
      { text: 'Bonebed', correct: true },
      { text: 'Bone field', type: 'believable' },
      { text: 'Fossil nest', type: 'kinda' },
      { text: 'Boneyard buffet', type: 'silly' }
    ]
  },
  {
    id: 'q358', fact: 'rare-fossils',
    q: 'Why is it rare for an animal to become a fossil?',
    answers: [
      { text: "Most bodies rot or get eaten before they're buried", correct: true },
      { text: 'Bones melt over time', type: 'believable' },
      { text: 'Rocks are too hard for fossils to form', type: 'kinda' },
      { text: 'Fossils run away', type: 'silly' }
    ]
  },
  {
    id: 'q359', fact: 'fragile-fossils',
    q: 'Museums often show copies of skeletons because real fossil bones are...',
    answers: [
      { text: 'Very heavy and fragile', correct: true },
      { text: 'Too valuable to show', type: 'believable' },
      { text: 'Too dirty to clean', type: 'kinda' },
      { text: 'Ticklish', type: 'silly' }
    ]
  },
  {
    id: 'q360', fact: 'partial',
    q: 'Do paleontologists usually find complete dinosaur skeletons?',
    answers: [
      { text: 'No, most skeletons are only partly there', correct: true },
      { text: 'Yes, always', type: 'believable' },
      { text: 'Yes, most of the time', type: 'kinda' },
      { text: 'Yes, already put together', type: 'silly' }
    ]
  },
  {
    id: 'q361', fact: 'kid-finds',
    q: 'Have kids ever found important dinosaur fossils?',
    answers: [
      { text: 'Yes, kids have made real discoveries', correct: true },
      { text: 'No, never', type: 'believable' },
      { text: 'Only once, a long time ago', type: 'kinda' },
      { text: 'Only kids wearing capes', type: 'silly' }
    ]
  },
  {
    id: 'q362', fact: 'barnum-brown',
    q: 'The first T. rex skeleton was found by which famous fossil hunter?',
    answers: [
      { text: 'Barnum Brown', correct: true },
      { text: 'Mary Anning', type: 'believable' },
      { text: 'Richard Owen', type: 'kinda' },
      { text: 'A circus clown', type: 'silly' }
    ]
  },
  {
    id: 'q363', fact: 'trex-1905',
    q: 'T. rex was officially named in...',
    answers: [
      { text: '1905', correct: true },
      { text: '1505', type: 'believable' },
      { text: '1995', type: 'kinda' },
      { text: '3005', type: 'silly' }
    ]
  },
  {
    id: 'q364', fact: 'osborn',
    q: 'Who gave T. rex its name?',
    answers: [
      { text: 'Henry Fairfield Osborn', correct: true },
      { text: 'Barnum Brown', type: 'believable' },
      { text: 'Charles Darwin', type: 'kinda' },
      { text: 'Rex the dog', type: 'silly' }
    ]
  },
  {
    id: 'q365', fact: 'trike-bison',
    q: 'When the first Triceratops horns were found, a scientist thought they belonged to a giant...',
    answers: [
      { text: 'Bison', correct: true },
      { text: 'Rhino', type: 'believable' },
      { text: 'Deer', type: 'kinda' },
      { text: 'Unicorn', type: 'silly' }
    ]
  },
  {
    id: 'q366', fact: 'apato-head',
    q: 'For many years, museum Apatosaurus skeletons had the wrong...',
    answers: [
      { text: 'Head', correct: true },
      { text: 'Tail', type: 'believable' },
      { text: 'Legs', type: 'kinda' },
      { text: 'Name tag', type: 'silly' }
    ]
  },
  {
    id: 'q367', fact: 'stego-flat',
    q: 'When Stegosaurus was first described, scientists thought its plates...',
    answers: [
      { text: "Lay flat like a turtle's shell", correct: true },
      { text: 'Stood up in one row', type: 'believable' },
      { text: 'Were scales on its tail', type: 'kinda' },
      { text: 'Spun like a fan', type: 'silly' }
    ]
  },
  {
    id: 'q368', fact: 'hadrosaurus',
    q: 'Hadrosaurus, found in New Jersey in 1858, was one of the first...',
    answers: [
      { text: 'Nearly complete dinosaur skeletons ever found', correct: true },
      { text: 'Dinosaur eggs', type: 'believable' },
      { text: 'Meat-eating dinosaurs', type: 'kinda' },
      { text: 'Dinosaurs in space', type: 'silly' }
    ]
  },
  {
    id: 'q369', fact: 'nj-dino',
    q: 'Hadrosaurus is the official state dinosaur of...',
    answers: [
      { text: 'New Jersey', correct: true },
      { text: 'California', type: 'believable' },
      { text: 'Texas', type: 'kinda' },
      { text: 'Hawaii', type: 'silly' }
    ]
  },
  {
    id: 'q370', fact: 'dino-dna',
    q: 'Could scientists bring back dinosaurs from DNA like in the movies?',
    answers: [
      { text: 'No, dinosaur DNA is far too old to survive', correct: true },
      { text: 'Yes, easily', type: 'believable' },
      { text: 'Yes, from frozen dinosaurs', type: 'kinda' },
      { text: 'Only on weekends', type: 'silly' }
    ]
  },

  // ---- Name meanings and comparisons ----
  {
    id: 'q371', fact: 'allo-name',
    q: 'Allosaurus means...',
    answers: [
      { text: '\'Different lizard\'', correct: true },
      { text: '\'Tyrant lizard\'', type: 'believable' },
      { text: '\'Thunder lizard\'', type: 'kinda' },
      { text: '\'All-the-snacks lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q372', fact: 'allo-portugal',
    q: 'Allosaurus fossils are found mostly in the western USA, and also in...',
    answers: [
      { text: 'Portugal', correct: true },
      { text: 'Japan', type: 'believable' },
      { text: 'Australia', type: 'kinda' },
      { text: 'Iceland', type: 'silly' }
    ]
  },
  {
    id: 'q373', fact: 'big-al',
    q: '\'Big Al\' is a famous, nearly complete skeleton of which dinosaur?',
    answers: [
      { text: 'Allosaurus', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Spinosaurus', type: 'kinda' },
      { text: 'Brachiosaurus', type: 'silly' }
    ]
  },
  {
    id: 'q374', fact: 'bronto-name',
    q: 'Brontosaurus means...',
    answers: [
      { text: '\'Thunder lizard\'', correct: true },
      { text: '\'Terrible lizard\'', type: 'believable' },
      { text: '\'Long-neck lizard\'', type: 'kinda' },
      { text: '\'Burp lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q375', fact: 'apato-name',
    q: 'Apatosaurus means...',
    answers: [
      { text: '\'Deceptive lizard\'', correct: true },
      { text: '\'Ancient lizard\'', type: 'believable' },
      { text: '\'Fast lizard\'', type: 'kinda' },
      { text: '\'Apple lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q376', fact: 'stego-name',
    q: 'Stegosaurus means...',
    answers: [
      { text: '\'Roofed lizard\'', correct: true },
      { text: '\'Spike lizard\'', type: 'believable' },
      { text: '\'Plated king\'', type: 'kinda' },
      { text: '\'Stegos-are-us\'', type: 'silly' }
    ]
  },
  {
    id: 'q377', fact: 'anky-name',
    q: 'Ankylosaurus means...',
    answers: [
      { text: '\'Fused lizard\'', correct: true },
      { text: '\'Armored king\'', type: 'believable' },
      { text: '\'Club lizard\'', type: 'kinda' },
      { text: '\'Ankle lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q378', fact: 'brachio-name',
    q: 'Brachiosaurus means...',
    answers: [
      { text: '\'Arm lizard\'', correct: true },
      { text: '\'Tall lizard\'', type: 'believable' },
      { text: '\'Branch lizard\'', type: 'kinda' },
      { text: '\'Broccoli lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q379', fact: 'diplo-name',
    q: 'Diplodocus means...',
    answers: [
      { text: '\'Double beam\'', correct: true },
      { text: '\'Two heads\'', type: 'believable' },
      { text: '\'Long tail\'', type: 'kinda' },
      { text: '\'Dinosaur doctor\'', type: 'silly' }
    ]
  },
  {
    id: 'q380', fact: 'spino-name',
    q: 'Spinosaurus means...',
    answers: [
      { text: '\'Spine lizard\'', correct: true },
      { text: '\'Spinning lizard\'', type: 'believable' },
      { text: '\'Sail king\'', type: 'kinda' },
      { text: '\'Spaghetti lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q381', fact: 'raptor-name',
    q: 'Velociraptor means...',
    answers: [
      { text: '\'Swift thief\'', correct: true },
      { text: 'Fast eagle', type: 'believable' },
      { text: 'Speedy hunter', type: 'kinda' },
      { text: '\'Bicycle robber\'', type: 'silly' }
    ]
  },
  {
    id: 'q382', fact: 'iguanodon-name',
    q: 'Iguanodon means...',
    answers: [
      { text: '\'Iguana tooth\'', correct: true },
      { text: '\'Big lizard\'', type: 'believable' },
      { text: '\'Iguana king\'', type: 'kinda' },
      { text: '\'Igloo don\'', type: 'silly' }
    ]
  },
  {
    id: 'q383', fact: 'pachy-name',
    q: 'Pachycephalosaurus means...',
    answers: [
      { text: '\'Thick-headed lizard\'', correct: true },
      { text: 'Packing lizard', type: 'believable' },
      { text: 'Thick-skinned lizard', type: 'kinda' },
      { text: '\'Pancake head\'', type: 'silly' }
    ]
  },
  {
    id: 'q384', fact: 'parasaur-name',
    q: 'Parasaurolophus means...',
    answers: [
      { text: '\'Near crested lizard\'', correct: true },
      { text: '\'Parachute lizard\'', type: 'believable' },
      { text: '\'Parrot lizard\'', type: 'kinda' },
      { text: '\'Party lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q385', fact: 'compy-name',
    q: 'Compsognathus means...',
    answers: [
      { text: '\'Pretty jaw\'', correct: true },
      { text: '\'Tiny thief\'', type: 'believable' },
      { text: '\'Small hunter\'', type: 'kinda' },
      { text: '\'Computer lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q386', fact: 'giganoto-name',
    q: 'Giganotosaurus means...',
    answers: [
      { text: '\'Giant southern lizard\'', correct: true },
      { text: '\'Gigantic king\'', type: 'believable' },
      { text: '\'Giant tooth\'', type: 'kinda' },
      { text: '\'Giant snot lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q387', fact: 'dilo-name',
    q: 'Dilophosaurus means...',
    answers: [
      { text: '\'Two-crested lizard\'', correct: true },
      { text: '\'Deadly lizard\'', type: 'believable' },
      { text: '\'Double tooth\'', type: 'kinda' },
      { text: '\'Dill pickle lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q388', fact: 'argentino-name',
    q: 'Argentinosaurus means...',
    answers: [
      { text: '\'Argentina lizard\'', correct: true },
      { text: '\'Silver lizard\'', type: 'believable' },
      { text: '\'Giant lizard\'', type: 'kinda' },
      { text: '\'Secret agent lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q389', fact: 'therizino-name',
    q: 'Therizinosaurus means...',
    answers: [
      { text: '\'Scythe lizard\'', correct: true },
      { text: '\'Claw king\'', type: 'believable' },
      { text: '\'Terrible tree lizard\'', type: 'kinda' },
      { text: '\'Thermos lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q390', fact: 'deinonychus-name',
    q: 'Deinonychus means...',
    answers: [
      { text: '\'Terrible claw\'', correct: true },
      { text: 'Fast toe', type: 'believable' },
      { text: 'Deadly hunter', type: 'kinda' },
      { text: '\'Dino onion\'', type: 'silly' }
    ]
  },
  {
    id: 'q391', fact: 'cerato-name',
    q: 'Ceratosaurus means...',
    answers: [
      { text: '\'Horned lizard\'', correct: true },
      { text: 'Crested king', type: 'believable' },
      { text: 'Corner lizard', type: 'kinda' },
      { text: '\'Cereal lizard\'', type: 'silly' }
    ]
  },
  {
    id: 'q392', fact: 'troodon-name',
    q: 'Troodon means...',
    answers: [
      { text: '\'Wounding tooth\'', correct: true },
      { text: 'Tree tooth', type: 'believable' },
      { text: 'Sharp tooth', type: 'kinda' },
      { text: '\'Troll don\'', type: 'silly' }
    ]
  },
  {
    id: 'q393', fact: 'ornithomimus',
    q: 'Ornithomimus means...',
    answers: [
      { text: '\'Bird mimic\'', correct: true },
      { text: '\'Bird king\'', type: 'believable' },
      { text: '\'Fast runner\'', type: 'kinda' },
      { text: '\'Mime who does bird tricks\'', type: 'silly' }
    ]
  },
  {
    id: 'q394', fact: 'microraptor-name',
    q: 'Microraptor means...',
    answers: [
      { text: '\'Small thief\'', correct: true },
      { text: '\'Big hunter\'', type: 'believable' },
      { text: '\'Tiny bird\'', type: 'kinda' },
      { text: '\'Microwave raptor\'', type: 'silly' }
    ]
  },
  {
    id: 'q395', fact: 'tyrannosaurids',
    q: 'T. rex belongs to a family called the...',
    answers: [
      { text: 'Tyrannosaurids', correct: true },
      { text: 'Dromaeosaurids', type: 'believable' },
      { text: 'Sauropods', type: 'kinda' },
      { text: 'Rex-a-roos', type: 'silly' }
    ]
  },
  {
    id: 'q396', fact: 'dromaeosaurids',
    q: 'Velociraptor belongs to a family called the...',
    answers: [
      { text: 'Dromaeosaurids', correct: true },
      { text: 'Tyrannosaurids', type: 'believable' },
      { text: 'Hadrosaurs', type: 'kinda' },
      { text: 'Raptor-roni', type: 'silly' }
    ]
  },
  {
    id: 'q397', fact: 'big-raptor',
    q: 'Which raptor was one of the biggest of its family?',
    answers: [
      { text: 'Utahraptor', correct: true },
      { text: 'Velociraptor', type: 'believable' },
      { text: 'Microraptor', type: 'kinda' },
      { text: 'Gigantic Fluffraptor', type: 'silly' }
    ]
  },
  {
    id: 'q398', fact: 'trex-giga',
    q: 'Did T. rex and Giganotosaurus ever fight?',
    answers: [
      { text: 'No, they lived millions of years apart on different continents', correct: true },
      { text: 'Yes, in Argentina', type: 'believable' },
      { text: 'Yes, in North America', type: 'kinda' },
      { text: 'Only in museums at night', type: 'silly' }
    ]
  },
  {
    id: 'q399', fact: 'spino-trex',
    q: 'Did Spinosaurus and T. rex ever meet?',
    answers: [
      { text: 'No, they lived on different continents at different times', correct: true },
      { text: 'Yes, they fought in a river', type: 'believable' },
      { text: 'Yes, in Africa', type: 'kinda' },
      { text: 'Yes, at the dentist', type: 'silly' }
    ]
  },
  {
    id: 'q400', fact: 'trex-neighbors',
    q: 'Which of these dinosaurs lived at the same time and place as T. rex?',
    answers: [
      { text: 'Triceratops', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Spinosaurus', type: 'kinda' },
      { text: 'Your pet goldfish', type: 'silly' }
    ]
  },
  {
    id: 'q401', fact: 'stego-neighbors',
    q: 'Which dinosaur lived at the same time and place as Stegosaurus?',
    answers: [
      { text: 'Allosaurus', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: 'A cave person', type: 'silly' }
    ]
  },
  {
    id: 'q402', fact: 'brachio-trex',
    q: 'Which was bigger: Brachiosaurus or T. rex?',
    answers: [
      { text: 'Brachiosaurus', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'They were about the same size', type: 'kinda' },
      { text: 'A hamster', type: 'silly' }
    ]
  },
  {
    id: 'q403', fact: 'smallest-pick',
    q: 'Which of these dinosaurs was the smallest?',
    answers: [
      { text: 'Compsognathus', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: 'Mega-mega-mega-saurus', type: 'silly' }
    ]
  },
  {
    id: 'q404', fact: 'fast-runners',
    q: 'Which dinosaurs were probably among the fastest runners?',
    answers: [
      { text: 'Ostrich-like dinosaurs (ornithomimids)', correct: true },
      { text: 'Ankylosaurs', type: 'believable' },
      { text: 'Sauropods', type: 'kinda' },
      { text: 'Couch-potato-saurs', type: 'silly' }
    ]
  },
  {
    id: 'q405', fact: 'slow-mover',
    q: 'Which of these dinosaurs was probably the slowest mover?',
    answers: [
      { text: 'Ankylosaurus', correct: true },
      { text: 'Gallimimus', type: 'believable' },
      { text: 'Velociraptor', type: 'kinda' },
      { text: 'Cheetah-saurus', type: 'silly' }
    ]
  },
  {
    id: 'q406', fact: 'toothless',
    q: 'Which of these dinosaurs had NO teeth?',
    answers: [
      { text: 'Oviraptor', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Allosaurus', type: 'kinda' },
      { text: 'Shark-a-saurus', type: 'silly' }
    ]
  },
  {
    id: 'q407', fact: 'yutyrannus',
    q: 'Which of these big dinosaurs is known to have had feathers?',
    answers: [
      { text: 'Yutyrannus', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Brachiosaurus', type: 'kinda' },
      { text: 'Elmo', type: 'silly' }
    ]
  },
  {
    id: 'q408', fact: 'four-legs',
    q: 'Which of these dinosaurs walked on four legs?',
    answers: [
      { text: 'Stegosaurus', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Velociraptor', type: 'kinda' },
      { text: 'A two-legged chair', type: 'silly' }
    ]
  },
  {
    id: 'q409', fact: 'two-legs',
    q: 'Which of these dinosaurs walked on two legs?',
    answers: [
      { text: 'Allosaurus', correct: true },
      { text: 'Triceratops', type: 'believable' },
      { text: 'Ankylosaurus', type: 'kinda' },
      { text: 'A kitchen table', type: 'silly' }
    ]
  },
  {
    id: 'q410', fact: 'neck-giraffe',
    q: "A Brachiosaurus neck was about how many times longer than a giraffe's neck?",
    answers: [
      { text: 'About four or five times', correct: true },
      { text: 'About half as long', type: 'believable' },
      { text: 'Exactly the same', type: 'kinda' },
      { text: 'A million times', type: 'silly' }
    ]
  },
  {
    id: 'q411', fact: 'trex-teeth-count',
    q: 'About how many teeth did T. rex have?',
    answers: [
      { text: 'About 50 to 60', correct: true },
      { text: 'About 5', type: 'believable' },
      { text: 'About 500', type: 'kinda' },
      { text: 'Zero; it wore dentures', type: 'silly' }
    ]
  },
  {
    id: 'q412', fact: 'trike-teeth',
    q: 'Triceratops could have up to about 800 teeth, packed in rows in its...',
    answers: [
      { text: 'Jaws, for slicing plants', correct: true },
      { text: 'Horns', type: 'believable' },
      { text: 'Frill', type: 'kinda' },
      { text: 'Tail', type: 'silly' }
    ]
  },
  {
    id: 'q413', fact: 'stego-teeth',
    q: 'Stegosaurus had teeth that were...',
    answers: [
      { text: 'Small and leaf-shaped', correct: true },
      { text: "Huge and pointy like T. rex's", type: 'believable' },
      { text: 'Missing', type: 'kinda' },
      { text: 'Made of diamonds', type: 'silly' }
    ]
  },
  {
    id: 'q414', fact: 'stego-legs',
    q: "Stegosaurus's back legs were...",
    answers: [
      { text: 'Longer than its front legs', correct: true },
      { text: 'Shorter than its front legs', type: 'believable' },
      { text: 'As long as its neck', type: 'kinda' },
      { text: 'Roller skates', type: 'silly' }
    ]
  },
  {
    id: 'q415', fact: 'brachio-diplo',
    q: 'Unlike Diplodocus, Brachiosaurus...',
    answers: [
      { text: 'Had longer front legs, so its back sloped down', correct: true },
      { text: 'Had a longer tail', type: 'believable' },
      { text: 'Walked on two legs', type: 'kinda' },
      { text: 'Had a sail', type: 'silly' }
    ]
  },
  {
    id: 'q416', fact: 'hadrosaur-walk',
    q: 'Duck-billed dinosaurs could probably walk on...',
    answers: [
      { text: 'Two legs or four legs', correct: true },
      { text: 'Only four legs', type: 'believable' },
      { text: 'Only two legs', type: 'kinda' },
      { text: 'Stilts', type: 'silly' }
    ]
  },
  {
    id: 'q417', fact: 'found-fossil',
    q: 'If you find a fossil on public land, the best thing to do is usually to...',
    answers: [
      { text: 'Tell a museum or park ranger', correct: true },
      { text: 'Keep it a secret forever', type: 'believable' },
      { text: 'Sell it right away', type: 'kinda' },
      { text: 'Bury it again and forget it', type: 'silly' }
    ]
  },
  {
    id: 'q418', fact: 'archaeo-when',
    q: 'Archaeopteryx lived about how long ago?',
    answers: [
      { text: 'About 150 million years ago', correct: true },
      { text: 'About 66 million years ago', type: 'believable' },
      { text: 'About 10,000 years ago', type: 'kinda' },
      { text: 'About 5 years ago', type: 'silly' }
    ]
  },
  {
    id: 'q419', fact: 'sparrow-gator',
    q: 'Which shares a closer family tie with T. rex: a sparrow or an alligator?',
    answers: [
      { text: 'A sparrow', correct: true },
      { text: 'An alligator', type: 'believable' },
      { text: "They're exactly equal", type: 'kinda' },
      { text: 'A teddy bear', type: 'silly' }
    ]
  },
  {
    id: 'q420', fact: 'feathered-fly',
    q: 'Could every feathered dinosaur fly?',
    answers: [
      { text: 'No, most feathered dinosaurs could not fly', correct: true },
      { text: 'Yes, all of them', type: 'believable' },
      { text: 'Only the small ones', type: 'kinda' },
      { text: 'Only when it rained', type: 'silly' }
    ]
  },

  // ---- More dinosaurs, eggs and babies, extinction ----
  {
    id: 'q421', fact: 'plateosaurus',
    q: 'Plateosaurus, an early long-necked plant-eater, lived in which period?',
    answers: [
      { text: 'Late Triassic', correct: true },
      { text: 'Late Cretaceous', type: 'believable' },
      { text: 'Jurassic', type: 'kinda' },
      { text: 'The Pizza Period', type: 'silly' }
    ]
  },
  {
    id: 'q422', fact: 'plateo-where',
    q: 'Many Plateosaurus fossils have been found in...',
    answers: [
      { text: 'Germany and Switzerland', correct: true },
      { text: 'Brazil', type: 'believable' },
      { text: 'Japan', type: 'kinda' },
      { text: 'Atlantis', type: 'silly' }
    ]
  },
  {
    id: 'q423', fact: 'mussaurus',
    q: 'Mussaurus means \'mouse lizard\' because the first fossils found were...',
    answers: [
      { text: 'Tiny babies', correct: true },
      { text: 'Small adults', type: 'believable' },
      { text: 'Found in a mouse burrow', type: 'kinda' },
      { text: 'Wearing cheese hats', type: 'silly' }
    ]
  },
  {
    id: 'q424', fact: 'ouranosaurus',
    q: 'Ouranosaurus, a plant-eater from Africa, had a tall...',
    answers: [
      { text: 'Ridge or sail on its back', correct: true },
      { text: 'Horn on its nose', type: 'believable' },
      { text: 'Club on its tail', type: 'kinda' },
      { text: 'Fluffy mane', type: 'silly' }
    ]
  },
  {
    id: 'q425', fact: 'pachyrhinosaurus',
    q: 'Instead of a nose horn, Pachyrhinosaurus had a big...',
    answers: [
      { text: 'Thick bony bump', correct: true },
      { text: 'Long tusk', type: 'believable' },
      { text: 'Tall crest', type: 'kinda' },
      { text: 'Trumpet', type: 'silly' }
    ]
  },
  {
    id: 'q426', fact: 'sauropelta',
    q: 'Sauropelta, an armored dinosaur, had long spikes along its...',
    answers: [
      { text: 'Neck', correct: true },
      { text: 'Tail tip', type: 'believable' },
      { text: 'Nose', type: 'kinda' },
      { text: 'Feet', type: 'silly' }
    ]
  },
  {
    id: 'q427', fact: 'nanuqsaurus',
    q: 'Nanuqsaurus, a smaller cousin of T. rex, was found in...',
    answers: [
      { text: 'Alaska', correct: true },
      { text: 'Florida', type: 'believable' },
      { text: 'Egypt', type: 'kinda' },
      { text: 'Hawaii', type: 'silly' }
    ]
  },
  {
    id: 'q428', fact: 'nanuq-name',
    q: 'Nanuqsaurus means \'polar bear lizard\' in the language of the...',
    answers: [
      { text: 'Iñupiat people of Alaska', correct: true },
      { text: 'Sami people of Norway', type: 'believable' },
      { text: 'Ancient Greeks', type: 'kinda' },
      { text: 'Penguins', type: 'silly' }
    ]
  },
  {
    id: 'q429', fact: 'saltasaurus',
    q: 'Saltasaurus was a sauropod with something unusual for its group:',
    answers: [
      { text: 'Bony armor in its skin', correct: true },
      { text: 'Feathers', type: 'believable' },
      { text: 'A crest', type: 'kinda' },
      { text: 'A trumpet nose', type: 'silly' }
    ]
  },
  {
    id: 'q430', fact: 'shunosaurus',
    q: 'Shunosaurus, a sauropod from China, had a...',
    answers: [
      { text: 'Small club on its tail', correct: true },
      { text: 'Sail on its back', type: 'believable' },
      { text: 'Horn on its nose', type: 'kinda' },
      { text: 'Flag on its head', type: 'silly' }
    ]
  },
  {
    id: 'q431', fact: 'concavenator',
    q: 'Concavenator, a meat-eater from Spain, had a strange...',
    answers: [
      { text: 'Pointed hump on its back', correct: true },
      { text: 'Trunk like an elephant', type: 'believable' },
      { text: 'Horn on its nose', type: 'kinda' },
      { text: 'Propeller', type: 'silly' }
    ]
  },
  {
    id: 'q432', fact: 'caudipteryx',
    q: 'Caudipteryx had a fan of feathers on its...',
    answers: [
      { text: 'Tail', correct: true },
      { text: 'Nose', type: 'believable' },
      { text: 'Head', type: 'kinda' },
      { text: 'Hat', type: 'silly' }
    ]
  },
  {
    id: 'q433', fact: 'yi-qi',
    q: 'Yi qi, a tiny dinosaur from China, had wings made of...',
    answers: [
      { text: 'Skin stretched between long fingers, like a bat', correct: true },
      { text: 'Feathers only', type: 'believable' },
      { text: 'Scales', type: 'kinda' },
      { text: 'Paper', type: 'silly' }
    ]
  },
  {
    id: 'q434', fact: 'guanlong',
    q: 'Guanlong, an early cousin of T. rex, had a big...',
    answers: [
      { text: 'Crest on its head', correct: true },
      { text: 'Club on its tail', type: 'believable' },
      { text: 'Sail', type: 'kinda' },
      { text: 'Saddle', type: 'silly' }
    ]
  },
  {
    id: 'q435', fact: 'dilong',
    q: 'Dilong was a small, early tyrannosaur known to have...',
    answers: [
      { text: 'Fuzzy feathers', correct: true },
      { text: 'Armor plates', type: 'believable' },
      { text: 'Horns', type: 'kinda' },
      { text: 'Roller skates', type: 'silly' }
    ]
  },
  {
    id: 'q436', fact: 'olorotitan',
    q: 'Olorotitan, a duck-billed dinosaur from Russia, has a name that means...',
    answers: [
      { text: '\'Giant swan\'', correct: true },
      { text: '\'Big duck\'', type: 'believable' },
      { text: '\'Russian king\'', type: 'kinda' },
      { text: '\'Hungry goose\'', type: 'silly' }
    ]
  },
  {
    id: 'q437', fact: 'shantungosaurus',
    q: 'Shantungosaurus was one of the biggest...',
    answers: [
      { text: 'Duck-billed dinosaurs', correct: true },
      { text: 'Raptors', type: 'believable' },
      { text: 'Pterosaurs', type: 'kinda' },
      { text: 'Birds', type: 'silly' }
    ]
  },
  {
    id: 'q438', fact: 'masiakasaurus',
    q: 'Masiakasaurus had front teeth that...',
    answers: [
      { text: 'Stuck forward, out of its mouth', correct: true },
      { text: 'Were missing', type: 'believable' },
      { text: "Were flat like a cow's", type: 'kinda' },
      { text: 'Glowed in the dark', type: 'silly' }
    ]
  },
  {
    id: 'q439', fact: 'masiaka-knopfler',
    q: 'Masiakasaurus knopfleri was named after a musician because...',
    answers: [
      { text: 'The scientists listened to his music while digging', correct: true },
      { text: 'He found the fossil', type: 'believable' },
      { text: 'He paid for the dig', type: 'kinda' },
      { text: 'It played guitar', type: 'silly' }
    ]
  },
  {
    id: 'q440', fact: 'long-eggs',
    q: 'The longest dinosaur eggs ever found are about how long?',
    answers: [
      { text: 'About 45 cm (18 inches)', correct: true },
      { text: 'About 2 cm (1 inch)', type: 'believable' },
      { text: 'About 3 meters (10 feet)', type: 'kinda' },
      { text: 'As long as a skyscraper', type: 'silly' }
    ]
  },
  {
    id: 'q441', fact: 'baby-louie',
    q: '\'Baby Louie\' is a famous fossil of a...',
    answers: [
      { text: 'Dinosaur embryo found with giant eggs', correct: true },
      { text: 'Baby T. rex', type: 'believable' },
      { text: 'Baby mammoth', type: 'kinda' },
      { text: 'Baby shark', type: 'silly' }
    ]
  },
  {
    id: 'q442', fact: 'embryos',
    q: 'Have scientists found fossil dinosaur babies still inside their eggs?',
    answers: [
      { text: 'Yes, some embryos have been found', correct: true },
      { text: 'No, never', type: 'believable' },
      { text: 'Only bird embryos', type: 'kinda' },
      { text: 'Yes, wearing tiny diapers', type: 'silly' }
    ]
  },
  {
    id: 'q443', fact: 'baby-yingliang',
    q: 'A fossil embryo nicknamed \'Baby Yingliang\' was curled up inside its egg like...',
    answers: [
      { text: 'A baby bird getting ready to hatch', correct: true },
      { text: 'A snake', type: 'believable' },
      { text: 'A ball', type: 'kinda' },
      { text: 'A burrito', type: 'silly' }
    ]
  },
  {
    id: 'q444', fact: 'nest-mounds',
    q: 'Some dinosaurs may have kept their eggs warm by burying them in...',
    answers: [
      { text: 'Warm soil or rotting plants', correct: true },
      { text: 'Cold mud', type: 'believable' },
      { text: 'Snow', type: 'kinda' },
      { text: 'A sock drawer', type: 'silly' }
    ]
  },
  {
    id: 'q445', fact: 'baby-faces',
    q: 'Like many baby animals, baby dinosaurs had...',
    answers: [
      { text: 'Big eyes and short snouts', correct: true },
      { text: 'Full-sized horns', type: 'believable' },
      { text: 'Grown-up armor', type: 'kinda' },
      { text: 'Tiny sunglasses', type: 'silly' }
    ]
  },
  {
    id: 'q446', fact: 'trike-baby-horns',
    q: 'Baby Triceratops horns started out...',
    answers: [
      { text: 'Small and curved backward', correct: true },
      { text: 'Already full size', type: 'believable' },
      { text: 'Straight and pointed forward', type: 'kinda' },
      { text: 'As cute little bows', type: 'silly' }
    ]
  },
  {
    id: 'q447', fact: 'oviraptor-eggs',
    q: 'Scientists found that some oviraptor-type dinosaurs laid eggs colored...',
    answers: [
      { text: 'Blue-green', correct: true },
      { text: 'Bright orange with stripes', type: 'believable' },
      { text: 'Solid black', type: 'kinda' },
      { text: 'Like Easter eggs', type: 'silly' }
    ]
  },
  {
    id: 'q448', fact: 'deccan',
    q: 'Besides the asteroid, huge volcanic eruptions were also happening at the time in...',
    answers: [
      { text: 'India', correct: true },
      { text: 'Iceland', type: 'believable' },
      { text: 'Hawaii', type: 'kinda' },
      { text: 'Australia', type: 'silly' }
    ]
  },
  {
    id: 'q449', fact: 'dust-dark',
    q: 'After the asteroid hit, dust and soot in the sky...',
    answers: [
      { text: 'Blocked sunlight and made the world colder', correct: true },
      { text: 'Made the world much hotter', type: 'believable' },
      { text: 'Caused it to rain all the time', type: 'kinda' },
      { text: 'Made it snow marshmallows', type: 'silly' }
    ]
  },
  {
    id: 'q450', fact: 'small-survive',
    q: 'Which kinds of animals mostly survived the extinction?',
    answers: [
      { text: 'Smaller animals', correct: true },
      { text: 'Only the biggest animals', type: 'believable' },
      { text: 'Only sea animals', type: 'kinda' },
      { text: 'Only unicorns', type: 'silly' }
    ]
  },
  {
    id: 'q451', fact: 'birds-survived',
    q: 'Which dinosaurs survived the extinction?',
    answers: [
      { text: 'Some birds', correct: true },
      { text: 'Triceratops', type: 'believable' },
      { text: 'Velociraptor', type: 'kinda' },
      { text: 'All of them, in hiding', type: 'silly' }
    ]
  },
  {
    id: 'q452', fact: 'mammals-after',
    q: 'After the non-bird dinosaurs died out, which animals became much bigger and more common?',
    answers: [
      { text: 'Mammals', correct: true },
      { text: 'Trilobites', type: 'believable' },
      { text: 'Pterosaurs', type: 'kinda' },
      { text: 'Dragons', type: 'silly' }
    ]
  },
  {
    id: 'q453', fact: 'pterosaurs-gone',
    q: 'Did pterosaurs survive the asteroid?',
    answers: [
      { text: 'No, they died out too', correct: true },
      { text: 'Yes, they became bats', type: 'believable' },
      { text: 'Yes, they became birds', type: 'kinda' },
      { text: 'Yes, they live in Narnia', type: 'silly' }
    ]
  },
  {
    id: 'q454', fact: 'sea-reptiles-gone',
    q: 'What happened to mosasaurs and plesiosaurs when the asteroid hit?',
    answers: [
      { text: 'They died out too', correct: true },
      { text: 'They became dolphins', type: 'believable' },
      { text: 'They became whales', type: 'kinda' },
      { text: 'They moved to a lake in Scotland', type: 'silly' }
    ]
  },
  {
    id: 'q455', fact: 'iridium',
    q: 'Scientists found a thin rock layer full of a rare metal from space, called...',
    answers: [
      { text: 'Iridium', correct: true },
      { text: 'Iron', type: 'believable' },
      { text: 'Gold', type: 'kinda' },
      { text: 'Moonium', type: 'silly' }
    ]
  },
  {
    id: 'q456', fact: 'alvarez',
    q: 'Which father-and-son team first suggested in 1980 that an asteroid wiped out the dinosaurs?',
    answers: [
      { text: 'Luis and Walter Alvarez', correct: true },
      { text: 'Cope and Marsh', type: 'believable' },
      { text: 'Richard and Charles Owen', type: 'kinda' },
      { text: 'The Wright brothers', type: 'silly' }
    ]
  },

  // ---- Even more dinosaurs (incl. flipped versions) ----
  {
    id: 'q457', fact: 'argentina-giants',
    q: 'Which of these dinosaurs was found in Argentina?',
    answers: [
      { text: 'Giganotosaurus', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'T. rex', type: 'kinda' },
      { text: 'Dino-mite', type: 'silly' }
    ]
  },
  {
    id: 'q458', fact: 'spino-feet',
    q: 'Spinosaurus had wide, flat feet that may have helped it...',
    answers: [
      { text: 'Walk on mud or paddle', correct: true },
      { text: 'Climb trees', type: 'believable' },
      { text: 'Dig burrows', type: 'kinda' },
      { text: 'Tap dance', type: 'silly' }
    ]
  },
  {
    id: 'q459', fact: 'spino-tail',
    q: 'In 2020, scientists found that Spinosaurus had a tall, flat tail shaped like a...',
    answers: [
      { text: 'Paddle', correct: true },
      { text: 'Club', type: 'believable' },
      { text: 'Whip', type: 'kinda' },
      { text: 'Feather duster', type: 'silly' }
    ]
  },
  {
    id: 'q460', fact: 'spino-nostrils',
    q: "Spinosaurus's nostrils were far back on its snout, which may have helped it...",
    answers: [
      { text: 'Breathe while its snout was in the water', correct: true },
      { text: 'Smell far away', type: 'believable' },
      { text: 'Make loud calls', type: 'kinda' },
      { text: 'Whistle songs', type: 'silly' }
    ]
  },
  {
    id: 'q461', fact: 'carno-skin',
    q: 'Fossil skin impressions of Carnotaurus show it had...',
    answers: [
      { text: 'Scales', correct: true },
      { text: 'Feathers', type: 'believable' },
      { text: 'Fur', type: 'kinda' },
      { text: 'Polka dots', type: 'silly' }
    ]
  },
  {
    id: 'q462', fact: 'trex-skin',
    q: 'Small patches of fossil T. rex skin show...',
    answers: [
      { text: 'Small scales', correct: true },
      { text: 'Long fur', type: 'believable' },
      { text: 'Big feathers', type: 'kinda' },
      { text: 'Glitter', type: 'silly' }
    ]
  },
  {
    id: 'q463', fact: 'edmonto-comb',
    q: 'A mummified Edmontosaurus showed it had a fleshy...',
    answers: [
      { text: "Crest on its head, like a rooster's comb", correct: true },
      { text: 'Horn on its nose', type: 'believable' },
      { text: 'Sail on its back', type: 'kinda' },
      { text: 'Third eye', type: 'silly' }
    ]
  },
  {
    id: 'q464', fact: 'sue-injuries',
    q: 'Sue the T. rex had many old injuries that had...',
    answers: [
      { text: 'Healed, so it survived them', correct: true },
      { text: 'Killed it right away', type: 'believable' },
      { text: 'Never healed', type: 'kinda' },
      { text: 'Been caused by a skateboard', type: 'silly' }
    ]
  },
  {
    id: 'q465', fact: 'dino-sick',
    q: 'Fossils show dinosaurs could get sick, including with...',
    answers: [
      { text: 'Bone infections', correct: true },
      { text: 'Chickenpox', type: 'believable' },
      { text: 'Sunburn', type: 'kinda' },
      { text: 'Sunburned noses', type: 'silly' }
    ]
  },
  {
    id: 'q466', fact: 'iguanodon-pinky',
    q: "Iguanodon's pinky finger could...",
    answers: [
      { text: 'Bend to grab things', correct: true },
      { text: 'Spin all the way around', type: 'believable' },
      { text: 'Turn into a hoof', type: 'kinda' },
      { text: 'Play the flute', type: 'silly' }
    ]
  },
  {
    id: 'q467', fact: 'bernissart',
    q: 'Dozens of Iguanodon skeletons were found deep inside a coal mine in which country?',
    answers: [
      { text: 'Belgium', correct: true },
      { text: 'Mexico', type: 'believable' },
      { text: 'Japan', type: 'kinda' },
      { text: 'Kenya', type: 'silly' }
    ]
  },
  {
    id: 'q468', fact: 'hadrosaur-common',
    q: 'Hadrosaurs are some of the most common dinosaur fossils from the...',
    answers: [
      { text: 'Late Cretaceous', correct: true },
      { text: 'Triassic', type: 'believable' },
      { text: 'Ice Age', type: 'kinda' },
      { text: 'Stone Age', type: 'silly' }
    ]
  },
  {
    id: 'q469', fact: 'trike-common',
    q: 'Triceratops is one of the most common dinosaurs found in the...',
    answers: [
      { text: 'Hell Creek Formation', correct: true },
      { text: 'Morrison Formation', type: 'believable' },
      { text: 'Sahara Desert', type: 'kinda' },
      { text: 'Ocean floor', type: 'silly' }
    ]
  },
  {
    id: 'q470', fact: 'titanosaur-name',
    q: 'Titanosaurs got their name from the Titans, who in Greek myths were...',
    answers: [
      { text: 'Giants', correct: true },
      { text: 'Sea monsters', type: 'believable' },
      { text: 'Wise teachers', type: 'kinda' },
      { text: 'Pizza chefs', type: 'silly' }
    ]
  },
  {
    id: 'q471', fact: 'patagotitan',
    q: 'Patagotitan, one of the biggest dinosaurs ever, was found in...',
    answers: [
      { text: 'Argentina', correct: true },
      { text: 'Canada', type: 'believable' },
      { text: 'Germany', type: 'kinda' },
      { text: 'Antarctica', type: 'silly' }
    ]
  },
  {
    id: 'q472', fact: 'patagotitan-cast',
    q: "The Patagotitan cast at New York's American Museum of Natural History is so big that its head...",
    answers: [
      { text: 'Pokes out of the room toward the hallway', correct: true },
      { text: 'Touches the roof of the building', type: 'believable' },
      { text: 'Hangs from the ceiling', type: 'kinda' },
      { text: 'Wears a party hat', type: 'silly' }
    ]
  },
  {
    id: 'q473', fact: 'dreadnoughtus',
    q: 'Dreadnoughtus was named after a type of...',
    answers: [
      { text: 'Battleship', correct: true },
      { text: 'Dragon', type: 'believable' },
      { text: 'Truck', type: 'kinda' },
      { text: 'Sandwich', type: 'silly' }
    ]
  },
  {
    id: 'q474', fact: 'sauroposeidon',
    q: 'Sauroposeidon was named after which Greek god of the sea and earthquakes?',
    answers: [
      { text: 'Poseidon', correct: true },
      { text: 'Zeus', type: 'believable' },
      { text: 'Hercules', type: 'kinda' },
      { text: 'Poseidonut', type: 'silly' }
    ]
  },
  {
    id: 'q475', fact: 'mononykus',
    q: 'Mononykus had tiny arms with just one big...',
    answers: [
      { text: 'Claw', correct: true },
      { text: 'Wing', type: 'believable' },
      { text: 'Feather', type: 'kinda' },
      { text: 'Thumb ring', type: 'silly' }
    ]
  },
  {
    id: 'q476', fact: 'mononykus-ants',
    q: 'Mononykus may have used its single claw to dig for...',
    answers: [
      { text: 'Insects like ants or termites', correct: true },
      { text: 'Roots', type: 'believable' },
      { text: 'Water', type: 'kinda' },
      { text: 'Buried treasure', type: 'silly' }
    ]
  },
  {
    id: 'q477', fact: 'nasutoceratops',
    q: 'Nasutoceratops had horns over its eyes that curved forward like a...',
    answers: [
      { text: "Bull's horns", correct: true },
      { text: "Unicorn's horn", type: 'believable' },
      { text: 'Corkscrew', type: 'kinda' },
      { text: 'Mustache', type: 'silly' }
    ]
  },
  {
    id: 'q478', fact: 'regaliceratops',
    q: 'Regaliceratops was nicknamed after which comic book hero because of its frill and horns?',
    answers: [
      { text: 'Hellboy', correct: true },
      { text: 'Batman', type: 'believable' },
      { text: 'Spider-Man', type: 'kinda' },
      { text: 'Captain Underpants', type: 'silly' }
    ]
  },
  {
    id: 'q479', fact: 'gryposaurus',
    q: 'Gryposaurus is known for its big, bumpy...',
    answers: [
      { text: 'Nose', correct: true },
      { text: 'Tail club', type: 'believable' },
      { text: 'Sail', type: 'kinda' },
      { text: 'Mustache', type: 'silly' }
    ]
  },
  {
    id: 'q480', fact: 'sue-where',
    q: 'Which famous T. rex skeleton is on display at the Field Museum in Chicago?',
    answers: [
      { text: 'Sue', correct: true },
      { text: 'Stan', type: 'believable' },
      { text: 'Scotty', type: 'kinda' },
      { text: 'Rex McRexface', type: 'silly' }
    ]
  },
  {
    id: 'q481', fact: 'chicxulub-name',
    q: 'The Chicxulub crater was made by...',
    answers: [
      { text: 'An asteroid impact', correct: true },
      { text: 'A volcano', type: 'believable' },
      { text: 'An earthquake', type: 'kinda' },
      { text: 'A meteor shower of cupcakes', type: 'silly' }
    ]
  },
  {
    id: 'q482', fact: 'mesozoic',
    q: 'Which era is called the Age of Dinosaurs?',
    answers: [
      { text: 'Mesozoic Era', correct: true },
      { text: 'Paleozoic Era', type: 'believable' },
      { text: 'Cenozoic Era', type: 'kinda' },
      { text: 'Snackozoic Era', type: 'silly' }
    ]
  },
  {
    id: 'q483', fact: 'paleontologist',
    q: 'What does a paleontologist study?',
    answers: [
      { text: 'Fossils of ancient life', correct: true },
      { text: 'Ancient human cultures', type: 'believable' },
      { text: 'Stars and planets', type: 'kinda' },
      { text: 'Pizza toppings', type: 'silly' }
    ]
  },
  {
    id: 'q484', fact: 'sauropods',
    q: 'Which of these dinosaurs is a sauropod?',
    answers: [
      { text: 'Diplodocus', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: 'Saur-pod-cast', type: 'silly' }
    ]
  },
  {
    id: 'q485', fact: 'ceratopsians',
    q: 'Which of these is a ceratopsian?',
    answers: [
      { text: 'Styracosaurus', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Spinosaurus', type: 'kinda' },
      { text: 'Ceratop-snack', type: 'silly' }
    ]
  },
  {
    id: 'q486', fact: 'ankylosaurs',
    q: 'Which of these is an ankylosaur?',
    answers: [
      { text: 'Euoplocephalus', correct: true },
      { text: 'Velociraptor', type: 'believable' },
      { text: 'Brachiosaurus', type: 'kinda' },
      { text: 'Tank McTankface', type: 'silly' }
    ]
  },
  {
    id: 'q487', fact: 'hadrosaurs',
    q: 'Which of these is a duck-billed dinosaur?',
    answers: [
      { text: 'Edmontosaurus', correct: true },
      { text: 'Allosaurus', type: 'believable' },
      { text: 'Triceratops', type: 'kinda' },
      { text: 'Donald Duck-asaurus', type: 'silly' }
    ]
  },
  {
    id: 'q488', fact: 'theropods',
    q: 'Which of these dinosaurs is a theropod?',
    answers: [
      { text: 'Allosaurus', correct: true },
      { text: 'Triceratops', type: 'believable' },
      { text: 'Brachiosaurus', type: 'kinda' },
      { text: 'Thera-potato', type: 'silly' }
    ]
  },
  {
    id: 'q489', fact: 'pangaea',
    q: 'Pangaea was...',
    answers: [
      { text: 'A giant supercontinent', correct: true },
      { text: 'A giant dinosaur', type: 'believable' },
      { text: 'An ancient ocean', type: 'kinda' },
      { text: 'A pancake recipe', type: 'silly' }
    ]
  },
  {
    id: 'q490', fact: 'bee-hummingbird',
    q: 'The bee hummingbird is...',
    answers: [
      { text: 'The smallest living dinosaur', correct: true },
      { text: 'A kind of bee', type: 'believable' },
      { text: 'The biggest bird', type: 'kinda' },
      { text: 'A tiny robot', type: 'silly' }
    ]
  },
  {
    id: 'q491', fact: 'raptor-claw',
    q: 'Which dinosaur had a big curved claw on each foot that it held up off the ground?',
    answers: [
      { text: 'Velociraptor', correct: true },
      { text: 'Stegosaurus', type: 'believable' },
      { text: 'Brachiosaurus', type: 'kinda' },
      { text: 'Claw-dia', type: 'silly' }
    ]
  },

  // ---- Flipped versions ----
  {
    id: 'q492', fact: 'trex-bite',
    q: 'T. rex had one of the strongest bites of any...',
    answers: [
      { text: 'Land animal ever', correct: true },
      { text: 'Fish', type: 'believable' },
      { text: 'Insect', type: 'kinda' },
      { text: 'Teddy bear', type: 'silly' }
    ]
  },
  {
    id: 'q493', fact: 'megalosaurus',
    q: 'Megalosaurus is famous for being...',
    answers: [
      { text: 'The first dinosaur ever scientifically named', correct: true },
      { text: 'The biggest dinosaur ever', type: 'believable' },
      { text: 'The first flying dinosaur', type: 'kinda' },
      { text: 'The first dinosaur astronaut', type: 'silly' }
    ]
  },
  {
    id: 'q494', fact: 'dimetrodon',
    q: 'Which of these sail-backed animals was NOT a dinosaur?',
    answers: [
      { text: 'Dimetrodon', correct: true },
      { text: 'Spinosaurus', type: 'believable' },
      { text: 'Ouranosaurus', type: 'kinda' },
      { text: 'Sailboat Sam', type: 'silly' }
    ]
  },
  {
    id: 'q495', fact: 'quetzal-size',
    q: 'Which giant flying reptile had a wingspan about as wide as a small airplane?',
    answers: [
      { text: 'Quetzalcoatlus', correct: true },
      { text: 'Archaeopteryx', type: 'believable' },
      { text: 'Microraptor', type: 'kinda' },
      { text: 'Big Bird', type: 'silly' }
    ]
  },
  {
    id: 'q496', fact: 'mosasaurus',
    q: 'Which giant sea lizard is often mistaken for a dinosaur?',
    answers: [
      { text: 'Mosasaurus', correct: true },
      { text: 'Spinosaurus', type: 'believable' },
      { text: 'Brachiosaurus', type: 'kinda' },
      { text: 'Nemo', type: 'silly' }
    ]
  },
  {
    id: 'q497', fact: 'ghost-ranch',
    q: 'Which small meat-eater was found by the hundreds at Ghost Ranch, New Mexico?',
    answers: [
      { text: 'Coelophysis', correct: true },
      { text: 'T. rex', type: 'believable' },
      { text: 'Spinosaurus', type: 'kinda' },
      { text: 'Ghosty McGhostface', type: 'silly' }
    ]
  },
  {
    id: 'q498', fact: 'microraptor-wings',
    q: 'Which tiny dinosaur had four feathered wings?',
    answers: [
      { text: 'Microraptor', correct: true },
      { text: 'Velociraptor', type: 'believable' },
      { text: 'Stegosaurus', type: 'kinda' },
      { text: 'Wingy McWingface', type: 'silly' }
    ]
  },
  {
    id: 'q499', fact: 'therizino-diet',
    q: 'Which dinosaur with giant claws probably ate mostly plants?',
    answers: [
      { text: 'Therizinosaurus', correct: true },
      { text: 'Velociraptor', type: 'believable' },
      { text: 'Allosaurus', type: 'kinda' },
      { text: 'Clawsome Salad-saurus', type: 'silly' }
    ]
  },
  {
    id: 'q500', fact: 'amargasaurus',
    q: 'Which sauropod had two rows of tall spines along its neck?',
    answers: [
      { text: 'Amargasaurus', correct: true },
      { text: 'Diplodocus', type: 'believable' },
      { text: 'Brachiosaurus', type: 'kinda' },
      { text: 'Spikey Neckerson', type: 'silly' }
    ]
  }
];
