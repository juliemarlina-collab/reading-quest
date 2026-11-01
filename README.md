# Crystal Quest 3: Read & Rise — The Library in the Sky

A 3D reading-practice game for MUET Reading (800/3) learners, Levels 7–9 of the
Crystal Quest series (Levels 1–3 *Listen & Leap*, Levels 4–6 *Speak & Conquer*).
The Crystal Sphinx has dimmed the magic books. Students explore three lands, read
with **Ora the Owl Librarian** and answer MUET-style questions to make each book glow.

| Level | Land | Books (MUET Reading part) |
|---|---|---|
| 7 | Lantern Library (bookshelves, lanterns) | Part 1 matching (3 notices) · Part 2 short article (3 options) · Part 3 article (3 options) |
| 8 | Ruins of Riddles (broken columns, riddle stones) | Part 4 compare two writers · Part 5 gapped text · Part 5 gapped text |
| 9 | Sky Garden (columns, flowers, the Crystal Sphinx) | Part 6 long article (4 options) · Part 7 long article (4 options) · Final book: the Sphinx's riddle |

49 questions in total. The parts are *simplified* (shorter texts, fewer questions)
but use the real MUET task types.

**The Crystal Sphinx (Level 9):** sits beside the last island. It roars (warning, the
ground glows purple), then sends a magic beam across the path for about 2 seconds.
Wait, then run past. Touching the beam costs a heart and returns the hero to the
checkpoint. It never reacts to reading mistakes; while a student reads, it sits and
thinks. Finishing the final book calms it and it flies away.

**Bookworms** crawl back and forth on each island; bumping into one costs a heart.
**Golden scrolls** are the collectibles (+10 points each).

## Play it

Upload the folder to a GitHub repository and turn on **GitHub Pages**. Open the game
from the `https://…github.io/…` link: browsers only load the 3D models and art from a
web address (not from a local file).

## How a book works

1. Walk to the book next to the Owl Librarian and press **E** (or 📖 READ on tablets).
2. The reading panel opens: **text on the left, question on the right**. On a tablet
   in portrait, the text is on top and the questions below. **A− / A+** changes the text size.
3. Read the question first, then scan the text. Two tries per question:
   first try **+100**, second try **+50** (after a hint), then the answer is shown.
4. After every answer the words that **prove** it are highlighted in yellow in the text.
   In gapped texts, the right sentence is written into the gap and used sentences are
   marked "Gap n".
5. After the last question the book glows, the bridge appears and progress is saved.
   An already restored book can be opened again in **review mode** (no points).

## Lecturer report

At the end of each level: score, first-try accuracy and a **reading-skill breakdown**
(main idea, specific detail, inference, vocabulary in context, writer's attitude,
text cohesion…). **Copy** pastes the level's answers into Google Sheets;
**Download CSV** exports every answer saved on that device
(time, student, class, level, text, question, skill, correct, first try, points).

## Editing texts and questions

All content is in `js/data.js`. The field guide is at the top of the `WORLDS` list.
Important: each question's `evidence` must be copied **exactly** from the text
(it is found and highlighted there). Gaps are written `[1]`…`[6]` inside a paragraph.

## Folder structure

| Path | What it is |
|---|---|
| `index.html` | Page layout (menus, HUD, reading panel, results) |
| `css/` | `style.css` (game + reading panel), `tailwind.css` (compiled) |
| `js/data.js` | Heroes, levels and the 9 reading books |
| `js/game.js` | 3D world, movement, reading panel, sphinx, rewards, saving, report |
| `js/lib/` | Three.js r128 + GLTFLoader (local copies) |
| `art/` | Heroes, owl, bookworm, book, scroll, sphinx poses, level cards and backdrops |
| `models/` | Kenney Nature Kit models (CC0) |

Swap art by replacing a file **with the same name**: `card_w1…w3.webp` (level cards),
`backdrop_w1…w3.webp` (panoramas), `owl_idle / talk / happy / point.webp`,
`item_book.webp` (glowing) / `item_book_dim.webp` (not yet read),
`enemy_bookworm / bookworm_move / bookworm_hit.webp`, `item_scroll.webp`,
`sphinx_idle / roar / magic / think / happy / fly.webp` (poses face right),
`title_sphinx.webp` (main menu).

## Credits

Reading texts and questions: written for Crystal Quest; topics follow study-skills
articles from VOA Learning English. 3D scenery: Kenney Nature Kit (www.kenney.nl), CC0 ·
3D engine: Three.js (MIT) · Hero, owl, bookworm, sphinx, item and level art: created
for the Crystal Quest project, Politeknik Port Dickson.
