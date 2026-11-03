// SAMPLE QUESTIONS (the full bank of 500 gets written in batches of 50).
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
  }
];
