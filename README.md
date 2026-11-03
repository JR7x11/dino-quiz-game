# Dino Quiz (Ahzirasaurus)

A dinosaur quiz where every 3 right answers earns a dino part. After 6 parts
(body, arms, head, legs, tail, skin + color), the player meets their own
"[Name]asaurus".

## Run it

```
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

`npm run build` makes a `dist/` folder you can upload to your site.

## Where things live

| File | What it holds |
|---|---|
| `src/data/questions.js` | The question bank (sample of 22 for now) |
| `src/data/facts.js` | Funny "Did you know?" facts |
| `src/data/parts.js` | Which dinos have which parts, colors, skins, body attachment points |
| `src/data/art.js` | **Where final art gets plugged in** |
| `src/placeholders.js` | Stand-in art drawn with code (replaced part by part) |
| `src/dino.js` | Puts a dino together from the picked parts |
| `src/scenes/` | Start, Quiz, and Finish screens |

## Adding the real art

1. Put the PNGs in `public/art/`.
2. Add a line for each one in `src/data/art.js` (examples are in that file).
3. Anything not listed keeps using its placeholder, so art can arrive one dino at a time.

## Ahzir extras

- Typing **Ahzir** as the name shows "Ahzir! Your dad says you're a dinosaur expert. Prove it!" before each game.
- Every game Ahzir finishes ends with the HIGH SCORE screen.
- Score History on the start screen is the proof for Dad.

All saving is in the browser only (localStorage). Nothing is sent anywhere.

## Hidden test page

Add `?test` to the address (for example http://localhost:5173/?test) to check that parts fit together:

- **Random 9**: nine fully random dinos. Press Space or the button to reshuffle.
- **Heads / Arms / Legs / Tails**: every body against every option of that part.
- **Fit report**: automatically checks all 150 body + legs + arms combos for legs hidden under the belly, front/back feet that aren't level, and arms that reach the ground.

Click any dino or problem to see it big. Players never see this page.
