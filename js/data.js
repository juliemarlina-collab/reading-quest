/* ==========================================================================
   Crystal Quest 3: Read & Rise - GAME DATA (edit this file to change content)
   --------------------------------------------------------------------------
   HEROES : the 4 playable heroes (equal abilities).
   WORLDS : the 3 levels (7, 8, 9). Each level has 3 Reading Crystals
            (books) in `challenges`. See the field guide just above WORLDS.
   ========================================================================== */
window.CQ_DATA = (function () {
  'use strict';
  const HEROES = [
    {
      id: 'aiden',
      name: 'Aiden',
      title: 'The Young Adventurer',
      portrait: 'art/portrait_aiden.jpg',
      traits: 'Brave, enthusiastic & adventurous',
      effectLabel: 'Golden Sparkles ✨',
      colors: {
        hair: 0x5c3317,
        tunic: 0x2563eb,
        accent: 0xef4444,
        skin: 0xffe0bd,
        boots: 0x78350f,
        particle: 0xfbbf24,
        eyeColor: '#1e3a8a'
      }
    },
    {
      id: 'luna',
      name: 'Luna',
      title: 'The Forest Mage',
      portrait: 'art/portrait_luna.jpg',
      traits: 'Curious, intelligent & cheerful',
      effectLabel: 'Purple Magic Particles 🔮',
      colors: {
        hair: 0xf472b6,
        tunic: 0x7e22ce,
        accent: 0xfacc15,
        skin: 0xffe4c8,
        boots: 0x581c87,
        particle: 0xc084fc,
        eyeColor: '#6b21a8'
      }
    },
    {
      id: 'rex',
      name: 'Rex',
      title: 'The Scout Ranger',
      portrait: 'art/portrait_rex.jpg',
      traits: 'Energetic, resourceful & observant',
      effectLabel: 'Green Leaf Particles 🍃',
      colors: {
        hair: 0xfbbf24,
        tunic: 0x16a34a,
        accent: 0x854d0e,
        skin: 0xffe0bd,
        boots: 0x422006,
        particle: 0x4ade80,
        eyeColor: '#14532d'
      }
    },
    {
      id: 'mia',
      name: 'Mia',
      title: 'The Crystal Explorer',
      portrait: 'art/portrait_mia.jpg',
      traits: 'Confident, friendly & determined',
      effectLabel: 'Blue & Gold Crystal Particles 💎',
      colors: {
        hair: 0x451a03,
        tunic: 0xeab308,
        accent: 0x9333ea,
        skin: 0xffe0bd,
        boots: 0x5b21b6,
        particle: 0x38bdf8,
        eyeColor: '#7c2d12'
      }
    }
  ];

  /* ------------------------------------------------------------------------
     Each Reading Crystal = one MUET-style reading task (Owl Librarian + book).
       part        : 'Part 1' ... 'Part 7' (MUET Reading 800/3 part it practises)
       type        : 'match'   - questions matched to Text A / B / C   (Part 1)
                     'mcq'     - 3- or 4-option questions, shuffled     (Parts 2, 3, 6, 7)
                     'compare' - two texts, 3-option questions          (Part 4)
                     'gapped'  - sentences A-G fill gaps [1]-[6]        (Part 5)
       texts       : [{ label, title, paras: [ ...paragraphs ] }]
                     In a gapped text write the gaps as [1], [2] ... inside a paragraph.
       options     : gapped only - the 7 sentences (one extra that does not fit)
       questions   :
         q         : question text (gapped: leave out, the game writes "Gap n")
         gap       : gapped only - the gap number
         choices   : mcq/compare only - the options (the game shuffles them)
         correct   : index of the right answer
                     (match: 0 = Text A, 1 = Text B, 2 = Text C; gapped: index in options)
         skill     : reading skill (used in the lecturer's report)
         hint      : shown after a first wrong try
         evidence  : exact words from the text (or a list of them) that prove
                     the answer. They are highlighted in the text after answering,
                     so copy them EXACTLY from the paragraph.
     ------------------------------------------------------------------------ */
  const WORLDS = [
    {
      id: 1,
      level: 7,
      name: 'Lantern Library',
      subtitle: 'Level 7 • MUET Reading Parts 1–3 • Notices & short articles',
      thumb: 'art/card_w1.webp',
      objectiveDesc: 'Match short notices to questions, then read two short articles (3-option questions).',
      skyColor: 0x60a5fa,
      fogColor: 0xa5c8f5,
      waterColor: 0x2563eb,
      groundColor: 0x74b356,
      platformColor: 0xc9a46a,
      crystalColor: 0xfbbf24,
      portalColor: 0xf59e0b,
      totalCoins: 20,
      totalChests: 1,
      chestIndices: [1],
      challenges: [
        {
          id: 'L7-C1',
          part: 'Part 1',
          type: 'match',
          title: 'The Library Notice Board',
          guardian: 'Ora the Owl Librarian',
          time: 'about 5 minutes',
          instructions: 'Read the three short texts. For each question, choose the text (A, B or C) that gives the answer. You may use a text more than once.',
          texts: [
            {
              label: 'Text A',
              title: 'Lantern Library: New E-book Service',
              paras: [
                'From 1 March, students can borrow e-books using the free LibraryGo app. Download the app, then log in with your student ID number and library PIN.',
                'You may borrow up to five e-books at a time for 14 days. Books return automatically, so there are no late fines.',
                'Please note that the self-service printers on Level 2 will be closed for repairs during the first week of March. Ask at the front desk if you need help.'
              ]
            },
            {
              label: 'Text B',
              title: 'Join the Word Wizards English Club!',
              paras: [
                'Want to speak English with more confidence? The Word Wizards meet every Wednesday from 4.00 to 5.30 p.m. in Seminar Room 3. Each week we play word games, hold short debates and practise presentations in a friendly group.',
                'Membership costs RM5 per semester, which pays for snacks and prizes.',
                'This week only, we are meeting in the Lantern Library café instead because Seminar Room 3 is being painted. Bring a friend!'
              ]
            },
            {
              label: 'Text C',
              title: 'Email: Reading task for Week 6',
              paras: [
                'Dear students,',
                "Before our next class, please read the article 'Five Ways to Remember New Words' on the course page. While you read, underline three tips you would like to try and write one question about the article.",
                'Please submit your question online by 9 a.m. on Monday so that I can plan the discussion. Bring a printed copy of the article to class, as we will be marking it in groups.',
                'Regards,\nPuan Aina'
              ]
            }
          ],
          questions: [
            {
              q: 'Which text mentions a temporary change of meeting place?',
              correct: 1,
              skill: 'Scanning for details',
              hint: 'Look for words like "this week only" or "instead".',
              evidence: 'This week only, we are meeting in the Lantern Library café instead because Seminar Room 3 is being painted.'
            },
            {
              q: 'Which text tells readers they do not need to worry about returning something late?',
              correct: 0,
              skill: 'Understanding details',
              hint: 'Which text talks about borrowing, returning and fines?',
              evidence: 'Books return automatically, so there are no late fines.'
            },
            {
              q: 'Which text asks readers to complete a task before a fixed time?',
              correct: 2,
              skill: 'Scanning for details',
              hint: 'Look for a day and a time, and something readers must send.',
              evidence: 'Please submit your question online by 9 a.m. on Monday so that I can plan the discussion.'
            },
            {
              q: 'Which text explains what readers’ money will be used for?',
              correct: 1,
              skill: 'Understanding details',
              hint: 'Which text mentions a price in RM?',
              evidence: 'Membership costs RM5 per semester, which pays for snacks and prizes.'
            }
          ]
        },
        {
          id: 'L7-C2',
          part: 'Part 2',
          type: 'mcq',
          title: 'Pictures Can Help You Remember Words',
          guardian: 'Ora the Owl Librarian',
          time: 'about 6 minutes',
          instructions: 'Read the article, then answer the questions. Choose the best answer (A, B or C).',
          texts: [
            {
              label: '',
              title: 'Pictures Can Help You Remember Words',
              paras: [
                'Many English learners write long lists of new words with their meanings in their first language. This is a useful start, but lists are easy to forget. Language teachers say that adding pictures can make new vocabulary stay in your memory much longer.',
                'Why do pictures help? Our brains store images and words in different ways. When you learn a word together with a picture, you create two paths to the same memory. If one path is weak, the other path can still lead you to the word. This is why many children’s books have a picture on every page.',
                'There are several simple ways to use images. First, try a visual dictionary. Instead of long definitions, it shows labelled drawings of things such as kitchen tools or parts of a car. Visual dictionaries are especially helpful for nouns, because most nouns name things you can see.',
                'Second, you can create your own memory pictures. Think of an English word that sounds like a word you already know, and imagine a funny scene that joins them. For example, to remember the word bald, which means having no hair, you could picture a man with no hair whose shiny head looks like a ball. The stranger the picture, the easier it is to recall.',
                'Third, draw a word map. Write a new word in the centre of a page and draw lines to related words, small sketches and example sentences. A word map shows how words connect, so you learn groups of words instead of single items.',
                'Of course, pictures are not the answer to everything. Abstract words such as honesty or although are hard to draw, and you will still need to read them in sentences. However, even a quick, simple sketch can turn a forgettable list into something your brain wants to keep. You do not need to be an artist; the effort of drawing is part of what helps you learn.'
              ]
            }
          ],
          questions: [
            {
              q: 'What is the main purpose of the article?',
              choices: [
                'To suggest ways that pictures can help learners remember new words',
                'To explain why word lists are the best way to learn vocabulary',
                'To compare children’s books with adult dictionaries'
              ],
              correct: 0,
              skill: 'Main idea',
              hint: 'Read the first paragraph again. What do language teachers say?',
              evidence: 'Language teachers say that adding pictures can make new vocabulary stay in your memory much longer.'
            },
            {
              q: 'According to the writer, why do pictures help memory?',
              choices: [
                'They give the brain two ways to reach the same word.',
                'They remove the need to read words in sentences.',
                'They make English words sound like the first language.'
              ],
              correct: 0,
              skill: 'Specific detail',
              hint: 'Paragraph 2 talks about "paths".',
              evidence: 'When you learn a word together with a picture, you create two paths to the same memory.'
            },
            {
              q: 'Visual dictionaries are especially helpful for nouns because',
              choices: [
                'most nouns name things that can be seen.',
                'nouns have the longest definitions.',
                'nouns are the most common words in English.'
              ],
              correct: 0,
              skill: 'Specific detail',
              hint: 'Find the word "because" in paragraph 3.',
              evidence: 'because most nouns name things you can see'
            },
            {
              q: 'The example of the word "bald" is used to show',
              choices: [
                'how a funny mental picture can link a new word to a familiar one.',
                'that English has many words about hair.',
                'that sounds are harder to remember than pictures.'
              ],
              correct: 0,
              skill: 'Writer’s purpose',
              hint: 'What does the writer tell you to imagine in paragraph 4?',
              evidence: 'you could picture a man with no hair whose shiny head looks like a ball'
            },
            {
              q: 'What does the writer suggest in the last paragraph?',
              choices: [
                'The effort of drawing matters more than drawing well.',
                'Abstract words should never be learned with pictures.',
                'Learners should stop using word lists completely.'
              ],
              correct: 0,
              skill: 'Inference',
              hint: 'Read the last sentence. Do you need to be an artist?',
              evidence: 'You do not need to be an artist; the effort of drawing is part of what helps you learn.'
            }
          ]
        },
        {
          id: 'L7-C3',
          part: 'Part 3',
          type: 'mcq',
          title: 'How to Write a Good Email',
          guardian: 'Ora the Owl Librarian',
          time: 'about 7 minutes',
          instructions: 'Read the article, then answer the questions. Choose the best answer (A, B or C).',
          texts: [
            {
              label: '',
              title: 'How to Write a Good Email',
              paras: [
                'Every day, people around the world send billions of emails. Yet many messages are ignored, misunderstood or simply never opened. Whether you are writing to a lecturer, an employer or a company, a few simple habits can make your emails clearer and more effective.',
                'Start with the subject line. It is the first thing your reader sees, and busy people often decide from the subject line alone whether to open a message now, later or never. A good subject line is short and specific. ‘Question’ tells the reader almost nothing, while ‘Question about Assignment 2 deadline’ tells them exactly what to expect.',
                'Next, think about your opening. If you are writing to someone you do not know well, a polite greeting such as ‘Dear Dr Lim’ is safer than ‘Hi’. It is better to be a little too formal at first; you can always become more relaxed if the other person replies in a friendly way. After the greeting, introduce yourself briefly if the reader may not remember you.',
                'The body of the email should get to the point quickly. State your purpose in the first one or two sentences, then add only the details the reader needs. Keep paragraphs short, and if you are asking for several things, put them in a numbered list. Long blocks of text are tiring to read on a phone screen, and important requests can easily be missed.',
                'Finally, close your email clearly. Tell the reader what you would like them to do next, and by when, if there is a deadline. End with a polite phrase such as ‘Thank you for your time’ or ‘Best regards’, followed by your full name. Students should also include their class or student number, since lecturers may teach hundreds of people.',
                'Before you press Send, read your message one more time. Check the spelling of the reader’s name, make sure any attachment is really attached, and ask yourself whether your tone sounds polite. A careful two-minute check can save you from an embarrassing mistake that cannot be taken back.'
              ]
            }
          ],
          questions: [
            {
              q: 'Why does the writer say the subject line is important?',
              choices: [
                'Readers may decide whether to open the email because of it.',
                'It is the only part of an email that lecturers read.',
                'It must include the writer’s full name.'
              ],
              correct: 0,
              skill: 'Specific detail',
              hint: 'Paragraph 2: what do busy people decide?',
              evidence: 'busy people often decide from the subject line alone whether to open a message now, later or never'
            },
            {
              q: 'The subject line ‘Question about Assignment 2 deadline’ is given as an example of one that is',
              choices: [
                'short and specific.',
                'too formal for a lecturer.',
                'too long to be useful.'
              ],
              correct: 0,
              skill: 'Understanding examples',
              hint: 'What kind of subject line does the writer call "good"?',
              evidence: 'A good subject line is short and specific.'
            },
            {
              q: 'When you write to someone you do not know well, the writer advises you to',
              choices: [
                'begin in a polite, slightly formal way.',
                'introduce yourself in a long paragraph.',
                'wait for a reply before greeting them.'
              ],
              correct: 0,
              skill: 'Specific detail',
              hint: 'Paragraph 3 compares ‘Dear Dr Lim’ with ‘Hi’.',
              evidence: 'It is better to be a little too formal at first'
            },
            {
              q: 'Why does the writer recommend a numbered list?',
              choices: [
                'So that several requests are not missed',
                'Because phone screens cannot show paragraphs',
                'Because lecturers only answer short emails'
              ],
              correct: 0,
              skill: 'Cause and effect',
              hint: 'Read the sentence after the one about numbered lists.',
              evidence: 'Long blocks of text are tiring to read on a phone screen, and important requests can easily be missed.'
            },
            {
              q: 'In the last paragraph, "a mistake that cannot be taken back" refers to a mistake',
              choices: [
                'in an email that has already been sent.',
                'in a reply from the reader.',
                'caused by an attachment that is too large.'
              ],
              correct: 0,
              skill: 'Reference',
              hint: 'The paragraph begins "Before you press Send".',
              evidence: 'A careful two-minute check can save you from an embarrassing mistake that cannot be taken back.'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      level: 8,
      name: 'Ruins of Riddles',
      subtitle: 'Level 8 • MUET Reading Parts 4–5 • Compare texts & gapped texts',
      thumb: 'art/card_w2.webp',
      objectiveDesc: 'Compare two writers’ views, then put the missing sentences back into two texts.',
      skyColor: 0x3b82f6,
      fogColor: 0x9cc2f2,
      waterColor: 0x1d4ed8,
      groundColor: 0xb9a77a,
      platformColor: 0xc8b48a,
      crystalColor: 0x67e8f9,
      portalColor: 0x06b6d4,
      totalCoins: 30,
      totalChests: 2,
      chestIndices: [0, 2],
      challenges: [
        {
          id: 'L8-C1',
          part: 'Part 4',
          type: 'compare',
          title: 'Can Apps Teach You English?',
          guardian: 'Ora the Owl Librarian',
          time: 'about 7 minutes',
          instructions: 'Two writers give their views on language-learning apps. Read both texts, then choose the best answer (A, B or C).',
          texts: [
            {
              label: 'Text A',
              title: 'A student blogger',
              paras: [
                'I used to think learning English meant sitting in a classroom with a thick grammar book. Then I downloaded a language app, and everything changed. Every morning on the bus, I spend ten minutes completing short lessons. The app reminds me if I forget, and I earn points that keep me motivated. In six months, I have learned more than 800 new words.',
                'What I like most is that I can learn anywhere, at my own speed. If I get something wrong, the app shows me the correct answer immediately, so I never feel embarrassed in front of others. Of course, an app cannot do everything. It cannot have a real conversation with me, so I also watch English videos at the weekend. Still, for busy students, I believe apps are the most practical way to build a daily habit.'
              ]
            },
            {
              label: 'Text B',
              title: 'A college lecturer',
              paras: [
                'Language apps are popular, and it is easy to see why. They are cheap, colourful and available on every phone. Short daily lessons can certainly help learners build vocabulary and stay in the habit of studying. However, I worry when students think that an app alone will make them fluent.',
                'Most apps focus on recognising words and choosing correct answers. Real communication is different: you must understand people who speak quickly, explain your ideas when you are unsure, and recover when you make a mistake. These skills grow through practice with real people, which can feel uncomfortable at first. That discomfort is part of learning. My advice is to treat an app as a warm-up, not the whole workout. Use it for ten minutes, then find someone to talk to, even if it is just a classmate.'
              ]
            }
          ],
          questions: [
            {
              q: 'Both writers agree that language apps',
              choices: [
                'help learners build a daily study habit.',
                'can replace classroom lessons.',
                'are too expensive for most students.'
              ],
              correct: 0,
              skill: 'Comparing views',
              hint: 'Find the word "habit" in both texts.',
              evidence: ['I believe apps are the most practical way to build a daily habit', 'Short daily lessons can certainly help learners build vocabulary and stay in the habit of studying.']
            },
            {
              q: 'Unlike Writer A, Writer B thinks that feeling uncomfortable when you speak is',
              choices: [
                'a natural part of learning.',
                'something apps help learners avoid.',
                'a good reason to study alone.'
              ],
              correct: 0,
              skill: 'Comparing views',
              hint: 'Writer A is happy not to feel embarrassed. What does Writer B say about discomfort?',
              evidence: ['so I never feel embarrassed in front of others', 'That discomfort is part of learning.']
            },
            {
              q: 'What does Writer B mean by "treat an app as a warm-up, not the whole workout"?',
              choices: [
                'An app is a useful start but should be followed by real practice.',
                'Learners should do exercise before they study English.',
                'Apps are more useful than speaking with classmates.'
              ],
              correct: 0,
              skill: 'Figurative meaning',
              hint: 'Read the sentence that comes right after it.',
              evidence: 'Use it for ten minutes, then find someone to talk to, even if it is just a classmate.'
            },
            {
              q: 'How does Writer A make up for what the app cannot do?',
              choices: [
                'By watching English videos at the weekend',
                'By joining an English class on the bus',
                'By asking a lecturer for feedback'
              ],
              correct: 0,
              skill: 'Specific detail',
              hint: 'Text A: what can an app not do, and what does the writer do about it?',
              evidence: 'It cannot have a real conversation with me, so I also watch English videos at the weekend.'
            },
            {
              q: 'Which statement best describes the two writers’ attitudes towards apps?',
              choices: [
                'Writer A is enthusiastic, while Writer B is positive but cautious.',
                'Writer A is doubtful, while Writer B is enthusiastic.',
                'Both writers are strongly against apps.'
              ],
              correct: 0,
              skill: 'Writer’s attitude',
              hint: 'Writer A says "everything changed". Writer B says "However, I worry...".',
              evidence: ['Then I downloaded a language app, and everything changed.', 'However, I worry when students think that an app alone will make them fluent.']
            }
          ]
        },
        {
          id: 'L8-C2',
          part: 'Part 5',
          type: 'gapped',
          title: 'Shadowing: Speak Like the Speaker',
          guardian: 'Ora the Owl Librarian',
          time: 'about 8 minutes',
          instructions: 'Six sentences are missing from the text. Choose the sentence (A–G) that fits each gap. There is one extra sentence you do not need.',
          texts: [
            {
              label: '',
              title: 'Shadowing: Speak Like the Speaker',
              paras: [
                'Shadowing is a simple technique that can help you speak English more naturally. The idea is to listen to a recording and repeat what you hear almost at the same time, like a shadow that follows a person everywhere. [1] Many teachers recommend it for learners who already know a lot of grammar but still sound unnatural when they speak.',
                'To begin, choose a short recording, between thirty seconds and two minutes long. [2] It is also helpful if the recording comes with a transcript, so that you can check any words you cannot catch.',
                'First, just listen to the whole recording without speaking. Pay attention to the speaker’s rhythm: which words are stressed, where the speaker pauses and how the voice rises and falls. [3] Then read the transcript and mark the stressed words and the pauses.',
                'Next, play the recording again and speak along with it while looking at the transcript. At this stage, do not worry if you fall behind. [4] Repeat this step several times until you feel comfortable.',
                'Now comes the real challenge. Put the transcript away and shadow the speaker using only your ears. [5] If you get lost, stop, go back a few seconds and try again.',
                'Finally, record yourself and compare your recording with the original. You will probably notice differences you did not hear while you were speaking. [6] Over time, these small improvements add up, and many learners find that their everyday speech becomes smoother and more confident.'
              ]
            }
          ],
          options: [
            'A news report or a short conversation from a learning website works well.',
            'Try to copy not only the words but also the speed, the stress and even the feelings in the voice.',
            'This first listening helps you understand the meaning before you try to copy the sound.',
            'The aim is to keep going and catch up with the speaker, not to be perfect.',
            'Choose one or two of these differences and practise them again tomorrow.',
            'Because you speak while you listen, you train your ears and your mouth together.',
            'Shadowing works best when you practise with a long film of at least two hours.'
          ],
          questions: [
            { gap: 1, correct: 5, skill: 'Text cohesion', hint: 'The sentence before describes what you do. Which option explains why this helps?', evidence: 'repeat what you hear almost at the same time' },
            { gap: 2, correct: 0, skill: 'Text cohesion', hint: 'The sentence before talks about choosing a recording. Which option gives examples of recordings?', evidence: 'choose a short recording, between thirty seconds and two minutes long' },
            { gap: 3, correct: 2, skill: 'Text cohesion', hint: 'This gap is about the first listening, before you speak.', evidence: 'First, just listen to the whole recording without speaking.' },
            { gap: 4, correct: 3, skill: 'Text cohesion', hint: 'The sentence before says "do not worry if you fall behind". What should you do instead?', evidence: 'At this stage, do not worry if you fall behind.' },
            { gap: 5, correct: 1, skill: 'Text cohesion', hint: 'You are now shadowing with only your ears. Which option tells you what to copy?', evidence: 'shadow the speaker using only your ears' },
            { gap: 6, correct: 4, skill: 'Text cohesion', hint: '"these differences" must refer back to something. What did you just notice?', evidence: 'You will probably notice differences you did not hear while you were speaking.' }
          ]
        },
        {
          id: 'L8-C3',
          part: 'Part 5',
          type: 'gapped',
          title: 'Starting an English Club',
          guardian: 'Ora the Owl Librarian',
          time: 'about 8 minutes',
          instructions: 'Six sentences are missing from the text. Choose the sentence (A–G) that fits each gap. There is one extra sentence you do not need.',
          texts: [
            {
              label: '',
              title: 'Starting an English Club',
              paras: [
                'Speaking English outside the classroom is one of the best ways to improve, but many students say they have no one to practise with. One solution is to start your own English club. It may sound like a big job, but with some planning, a small group of friends can grow into a lively community.',
                'The first step is to find members. Start by talking to classmates and friends who also want to improve their English. [1] You could also put up a poster in your college or share a message in a student group online. Even four or five members are enough to begin.',
                'Next, find a place to meet. A quiet corner of the library, an empty classroom or a café can all work well. [2] If some members live far away, you might consider meeting online instead.',
                'Your first meeting is important because it sets the tone for the club. Begin with a simple activity that helps people relax, such as introducing the person sitting next to you. [3] Then ask members what they hope to get from the club, and write their answers down.',
                'Every club needs some kind of leadership. [4] However, the leader’s job is not to teach or to correct everyone’s mistakes. Instead, the leader plans the activities, reminds members about meetings and makes sure that everyone has a chance to speak.',
                'To keep members interested, change the activities from week to week. [5] Some clubs also invite a guest, such as a lecturer or a former student, to give a short talk and answer questions.',
                'Most importantly, remember that mistakes are welcome. [6] When members feel safe, they speak more, and that is exactly how a club helps everyone improve.'
              ]
            }
          ],
          options: [
            'One week you could hold a short debate, and the next week you could play a word game or discuss a film.',
            'Ask each of them to invite one more person who might be interested.',
            'Wherever you choose, make sure it is easy to reach and quiet enough for everyone to hear.',
            'This kind of activity breaks the ice and makes new members feel welcome.',
            'You may decide to choose one leader, or members can take turns leading each meeting.',
            'A club where people are afraid of being laughed at will soon become silent.',
            'The best clubs only accept members who already speak English fluently.'
          ],
          questions: [
            { gap: 1, correct: 1, skill: 'Text cohesion', hint: '"each of them" must refer to people mentioned just before the gap.', evidence: 'Start by talking to classmates and friends who also want to improve their English.' },
            { gap: 2, correct: 2, skill: 'Text cohesion', hint: 'The sentence before lists places. Which option says "Wherever you choose"?', evidence: 'A quiet corner of the library, an empty classroom or a café can all work well.' },
            { gap: 3, correct: 3, skill: 'Text cohesion', hint: '"This kind of activity" refers back to an activity in the sentence before.', evidence: 'Begin with a simple activity that helps people relax' },
            { gap: 4, correct: 4, skill: 'Text cohesion', hint: 'The paragraph is about leadership. Which option talks about a leader?', evidence: 'Every club needs some kind of leadership.' },
            { gap: 5, correct: 0, skill: 'Text cohesion', hint: 'The sentence before says to change activities. Which option gives examples?', evidence: 'change the activities from week to week' },
            { gap: 6, correct: 5, skill: 'Text cohesion', hint: 'The next sentence says "When members feel safe". Which option describes the opposite?', evidence: 'remember that mistakes are welcome' }
          ]
        }
      ]
    },
    {
      id: 3,
      level: 9,
      name: 'Sky Garden',
      subtitle: 'Level 9 • MUET Reading Parts 6–7 • Long texts & the Sphinx',
      thumb: 'art/card_w3.webp',
      objectiveDesc: 'Read three longer articles (4-option questions) and get past the Crystal Sphinx.',
      skyColor: 0x7dd3fc,
      fogColor: 0xc7d2fe,
      waterColor: 0x6366f1,
      groundColor: 0x6cbd4a,
      platformColor: 0xb7a6e6,
      crystalColor: 0xe879f9,
      portalColor: 0xc084fc,
      totalCoins: 30,
      totalChests: 2,
      chestIndices: [0, 1],
      challenges: [
        {
          id: 'L9-C1',
          part: 'Part 6',
          type: 'mcq',
          title: 'Setting Reasonable Learning Goals',
          guardian: 'Ora the Owl Librarian',
          time: 'about 10 minutes',
          instructions: 'Read the article, then answer the questions. Choose the best answer (A, B, C or D).',
          texts: [
            {
              label: '',
              title: 'Setting Reasonable Learning Goals',
              paras: [
                'At the start of every new semester, many students make big promises to themselves. ‘This year I will become fluent in English,’ one says. ‘I will read a book every week,’ says another. By the third week, however, many of these promises have been quietly forgotten. The problem is not a lack of desire. Often, the goals themselves are simply too large or too unclear to follow.',
                'Education experts say that a good learning goal has three qualities. First, it is specific. ‘Improve my English’ is a wish, not a goal, because it does not tell you what to do on Monday morning. ‘Learn ten new words about my field of study every week’ is much clearer. You know exactly what success looks like, and you can tell whether you have achieved it.',
                'Second, a good goal is measurable. If you cannot count or check your progress, it is hard to stay motivated. Some learners keep a simple notebook where they record how many minutes they studied each day or how many pages they read. Looking back over several weeks of small entries can be surprisingly encouraging, especially on days when progress feels slow.',
                'Third, a good goal is reasonable. This is the quality that people ignore most often. A student who has never read a full English novel is unlikely to finish one every week, especially while attending classes and doing part-time work. When a goal is too ambitious, the learner fails again and again, and each failure makes the next attempt feel less worthwhile. In contrast, a modest goal that is achieved builds confidence, and confidence makes it easier to set a slightly bigger goal next time.',
                'One way to keep goals reasonable is to connect them to your daily routine. Instead of planning to study for two hours on Saturday, which is easy to cancel, you might decide to listen to an English podcast during your fifteen-minute walk to class. Linking a new habit to something you already do every day means you do not have to rely on willpower alone.',
                'It also helps to divide a large goal into stages. Imagine that you want to give a confident five-minute presentation in English by the end of the semester. In the first month, you could practise speaking about a familiar topic for one minute. In the second month, you could record yourself speaking for three minutes and listen for common mistakes. By the final month, the five-minute presentation will feel like the next small step rather than a giant leap.',
                'Finally, experts advise learners to review their goals regularly. Every two or three weeks, ask yourself what is working and what is not. Perhaps your vocabulary goal is going well, but your reading goal is too difficult. There is no shame in adjusting a goal; in fact, changing a plan based on experience is a sign of a thoughtful learner, not a weak one.',
                'Learning a language is a long journey, and nobody reaches the end in a single semester. Students who set clear, measurable and reasonable goals, and who are willing to adjust them along the way, are far more likely to keep going long after the excitement of the new semester has disappeared.'
              ]
            }
          ],
          questions: [
            {
              q: 'According to the first paragraph, why do many students fail to keep their promises?',
              choices: [
                'Their goals are too big or too unclear.',
                'They do not really want to improve.',
                'They are too busy with part-time work.',
                'Their lecturers give them too much homework.'
              ],
              correct: 0,
              skill: 'Main idea',
              hint: 'The writer says the problem is NOT a lack of desire. What is it?',
              evidence: 'Often, the goals themselves are simply too large or too unclear to follow.'
            },
            {
              q: 'Why is ‘Improve my English’ described as "a wish, not a goal"?',
              choices: [
                'It does not say what action to take.',
                'It is too difficult to achieve in one year.',
                'It is not connected to a field of study.',
                'It cannot be shared with other people.'
              ],
              correct: 0,
              skill: 'Specific detail',
              hint: 'Look for "because" in paragraph 2.',
              evidence: 'because it does not tell you what to do on Monday morning'
            },
            {
              q: 'According to the writer, what happens when a goal is too ambitious?',
              choices: [
                'Repeated failure makes learners less willing to try again.',
                'Learners slowly become more confident.',
                'Learners finish the goal but forget it quickly.',
                'Learners start studying harder at weekends.'
              ],
              correct: 0,
              skill: 'Cause and effect',
              hint: 'Paragraph 4: what does each failure do?',
              evidence: 'each failure makes the next attempt feel less worthwhile'
            },
            {
              q: 'The podcast example in paragraph 5 shows how to',
              choices: [
                'link a new habit to an existing routine.',
                'study for longer at the weekend.',
                'find better listening materials.',
                'walk to class more quickly.'
              ],
              correct: 0,
              skill: 'Understanding examples',
              hint: 'Read the last sentence of paragraph 5.',
              evidence: 'Linking a new habit to something you already do every day means you do not have to rely on willpower alone.'
            },
            {
              q: 'The phrase "a giant leap" in paragraph 6 is closest in meaning to',
              choices: [
                'a huge, difficult change.',
                'a quick way to finish.',
                'an exciting celebration.',
                'a kind of physical exercise.'
              ],
              correct: 0,
              skill: 'Vocabulary in context',
              hint: 'It is the opposite of "the next small step".',
              evidence: 'will feel like the next small step rather than a giant leap'
            },
            {
              q: 'What is the writer’s attitude towards changing a goal?',
              choices: [
                'It shows careful thinking.',
                'It should be avoided if possible.',
                'It shows that the learner is weak.',
                'It is only acceptable at the end of a semester.'
              ],
              correct: 0,
              skill: 'Writer’s attitude',
              hint: 'Paragraph 7: is there shame in adjusting a goal?',
              evidence: 'changing a plan based on experience is a sign of a thoughtful learner, not a weak one'
            }
          ]
        },
        {
          id: 'L9-C2',
          part: 'Part 7',
          type: 'mcq',
          title: 'Learning How to Ask Good Questions',
          guardian: 'Ora the Owl Librarian',
          time: 'about 10 minutes',
          instructions: 'Read the article, then answer the questions. Choose the best answer (A, B, C or D).',
          texts: [
            {
              label: '',
              title: 'Learning How to Ask Good Questions',
              paras: [
                'Most of us were taught how to answer questions. From primary school onwards, we sat examinations that rewarded the right answers. Far fewer of us were ever taught how to ask questions, yet asking good questions is one of the most useful skills a person can have, both in conversation and in learning.',
                'Think about the last time you met someone new. If you asked only, ‘Where are you from?’ and ‘What do you study?’, the conversation may have ended quickly. Such questions are not wrong, but they can be answered in one or two words. Communication researchers call them closed questions. Open questions, such as ‘What made you choose that course?’, invite the other person to explain, describe and tell stories.',
                'One teacher who trains English learners suggests thinking of a conversation as a ladder with three steps. On the first step are concrete questions about facts: where someone lives, what they do, what they did at the weekend. These questions are easy and safe, so they are a good way to begin. On the second step are personal questions about experiences and feelings: what the person enjoyed most about their weekend, or what was difficult about moving to a new town. On the third and highest step are abstract questions about ideas and opinions: whether cities are better places to live than villages, or how technology has changed friendship.',
                'The order matters. If you jump straight to an abstract question with a stranger, the person may feel uncomfortable or unsure how to answer. If you never move beyond the first step, however, the conversation may stay polite but dull. Skilled speakers climb the ladder slowly, watching how the other person responds. When the other person gives longer answers and asks questions in return, it is usually a sign that they are ready to go higher.',
                'Good questions are also an important tool for learning. Students who ask questions in class tend to remember more, partly because forming a question forces them to notice exactly what they do not understand. Yet many learners stay silent, worried that their question will sound foolish. Teachers often say that if one student is confused, several others probably are too. A question that seems simple may help the whole class.',
                'There are ways to make asking easier. Before a lecture, write down one or two questions about the topic. During a discussion, use polite phrases such as ‘Could you explain what you mean by...?’ or ‘Can I check that I understand correctly?’ These phrases show that you are listening carefully, and they give the speaker a clear way to help you.',
                'Finally, listening is the other half of questioning. A good question followed by a poor listener is a wasted opportunity. When someone answers, try to pick up a detail from their reply and build your next question on it. This shows real interest, and real interest is what turns a short exchange into a memorable conversation.'
              ]
            }
          ],
          questions: [
            {
              q: 'What point does the writer make in the first paragraph?',
              choices: [
                'Schools teach answering questions more than asking them.',
                'Examinations should not have right answers.',
                'Asking questions is less important than answering them.',
                'Most people ask too many questions.'
              ],
              correct: 0,
              skill: 'Main idea',
              hint: 'Compare "taught how to answer" with "taught how to ask".',
              evidence: 'Far fewer of us were ever taught how to ask questions'
            },
            {
              q: 'Why may closed questions end a conversation quickly?',
              choices: [
                'They can be answered in very few words.',
                'They are rude to strangers.',
                'They are about difficult ideas.',
                'They are only used in examinations.'
              ],
              correct: 0,
              skill: 'Cause and effect',
              hint: 'Paragraph 2: how long are the answers to such questions?',
              evidence: 'but they can be answered in one or two words'
            },
            {
              q: 'Which question belongs on the SECOND step of the ladder?',
              choices: [
                '‘What was the hardest part of moving to a new town?’',
                '‘Where do you live?’',
                '‘Is technology changing friendship?’',
                '‘What do you study?’'
              ],
              correct: 0,
              skill: 'Applying information',
              hint: 'The second step is about experiences and feelings.',
              evidence: 'On the second step are personal questions about experiences and feelings'
            },
            {
              q: 'How can a speaker tell that the other person is ready for deeper questions?',
              choices: [
                'The person gives longer answers and asks questions too.',
                'The person stops talking for a while.',
                'The person changes the topic.',
                'The person asks to meet again.'
              ],
              correct: 0,
              skill: 'Specific detail',
              hint: 'Look at the end of paragraph 4: "it is usually a sign...".',
              evidence: 'When the other person gives longer answers and asks questions in return, it is usually a sign that they are ready to go higher.'
            },
            {
              q: 'Why, according to teachers, should students not worry that a question sounds foolish?',
              choices: [
                'Other students probably have the same question.',
                'Teachers give marks for every question.',
                'Simple questions are always the best ones.',
                'Nobody listens to questions in class.'
              ],
              correct: 0,
              skill: 'Inference',
              hint: 'Paragraph 5: if one student is confused...?',
              evidence: 'if one student is confused, several others probably are too'
            },
            {
              q: 'What does the writer suggest in the final paragraph?',
              choices: [
                'Build your next question on what the other person said.',
                'Listening is less important than asking.',
                'Short exchanges are the most memorable.',
                'Prepare all your questions before you meet someone.'
              ],
              correct: 0,
              skill: 'Main idea',
              hint: 'What should you "pick up" from a reply?',
              evidence: 'try to pick up a detail from their reply and build your next question on it'
            }
          ]
        },
        {
          id: 'L9-C3',
          part: 'Part 7',
          type: 'mcq',
          boss: true,
          title: 'The Sphinx’s Riddle: Build a Memory Palace',
          guardian: 'Ora the Owl Librarian',
          time: 'about 10 minutes',
          instructions: 'The Crystal Sphinx guards the last book. Read the article, then answer the questions (A, B, C or D) to calm it.',
          texts: [
            {
              label: '',
              title: 'Build a Memory Palace',
              paras: [
                'More than two thousand years ago, a Greek poet named Simonides was invited to a large dinner. He left the hall for a few minutes, and while he was outside, the roof collapsed. The guests inside could not be recognised, but Simonides found that he could remember exactly where each guest had been sitting. By walking through the room in his mind, he was able to name every person. According to legend, this was the beginning of one of the oldest memory techniques in the world: the memory palace.',
                'A memory palace is a place you know very well, such as your home, your college or the route you take to class. To use it, you imagine yourself walking through this place and leaving something you want to remember at different points along the way. Later, when you need the information, you simply walk through the place again in your mind and ‘collect’ each item.',
                'Why does this work? Human memory is especially good at remembering places and pictures. Our ancestors needed to remember where to find water, food and shelter, so the brain developed a strong ability to store routes and locations. Lists of unconnected words, by contrast, are something the brain was never designed to hold. The memory palace turns a boring list into a journey, which the brain finds much easier to keep.',
                'Language learners can use the technique to remember vocabulary. Imagine you want to learn five words connected with the weather: drizzle, humid, breeze, thunder and forecast. You might picture a light drizzle falling on your doormat, a humid, steamy bathroom, a cool breeze blowing the kitchen curtains, loud thunder shaking your bedroom window, and a TV in the living room showing tomorrow’s forecast. The more unusual and detailed each picture is, the better. A thundercloud sitting on your bed is far more memorable than an ordinary sentence in a notebook.',
                'Memory champions, who compete to remember long lists of numbers or the order of playing cards, almost all use some form of this method. Some of them have built dozens of palaces in their minds. Researchers who studied these champions found that their brains were not unusual in structure. The difference was in the strategy they used, which suggests that the technique can be learned by almost anyone.',
                'There are, however, a few limits. Building a palace takes time and imagination, and some learners find the process strange at first. The technique is also better for remembering separate items, such as words, names or the main points of a speech, than for understanding complex ideas. Knowing that the word ‘humid’ is in your bathroom will help you recall it, but you will still need to read and hear it in real sentences to use it correctly.',
                'For students preparing for an oral presentation, the memory palace can be especially helpful. Instead of reading from notes, a speaker can place each main point in a different room and move through the house while speaking. Ancient Greek and Roman speakers are said to have used the technique in this way.',
                'If you want to try it, start small. Choose a place with five or six clear locations and practise with a short list. Walk through the route slowly in your mind, and revisit it the next day to check what you remember. With a little practice, you may discover that your memory is far more powerful than you thought.'
              ]
            }
          ],
          questions: [
            {
              q: 'How was Simonides able to name the guests?',
              choices: [
                'He remembered where each person had been sitting.',
                'He had written a list of guests before the dinner.',
                'He recognised the clothes they were wearing.',
                'The host told him who had been invited.'
              ],
              correct: 0,
              skill: 'Specific detail',
              hint: 'Paragraph 1: what could Simonides remember?',
              evidence: 'he could remember exactly where each guest had been sitting'
            },
            {
              q: 'According to paragraph 3, why is the human brain good at remembering places?',
              choices: [
                'Early humans needed to remember locations to survive.',
                'Places are easier to describe than words.',
                'People spend most of their time at home.',
                'Lists of words are usually too long.'
              ],
              correct: 0,
              skill: 'Cause and effect',
              hint: 'What did our ancestors need to find?',
              evidence: 'Our ancestors needed to remember where to find water, food and shelter, so the brain developed a strong ability to store routes and locations.'
            },
            {
              q: 'Why does the writer mention "a thundercloud sitting on your bed"?',
              choices: [
                'To show that unusual pictures are easier to remember',
                'To describe the weather in a typical home',
                'To warn readers about dangerous storms',
                'To explain the meaning of the word ‘forecast’'
              ],
              correct: 0,
              skill: 'Writer’s purpose',
              hint: 'Read the sentence just before it.',
              evidence: 'The more unusual and detailed each picture is, the better.'
            },
            {
              q: 'What did researchers discover about memory champions?',
              choices: [
                'Their success came from their method, not from special brains.',
                'Their brains were larger than average.',
                'They can only remember playing cards.',
                'They were born with a perfect memory.'
              ],
              correct: 0,
              skill: 'Inference',
              hint: 'Were the champions’ brains unusual? What was the difference?',
              evidence: 'The difference was in the strategy they used, which suggests that the technique can be learned by almost anyone.'
            },
            {
              q: 'Which limit of the memory palace does the writer mention?',
              choices: [
                'It helps you recall a word but not how to use it in sentences.',
                'It only works for remembering numbers.',
                'Language learners cannot use it.',
                'It makes presentations much longer.'
              ],
              correct: 0,
              skill: 'Specific detail',
              hint: 'Paragraph 6 uses the word ‘humid’ as an example.',
              evidence: 'but you will still need to read and hear it in real sentences to use it correctly'
            },
            {
              q: 'What is the writer’s overall attitude towards the memory palace?',
              choices: [
                'Positive, while recognising some limits',
                'Doubtful, because the method is very old',
                'Critical, because it takes too much time',
                'Neutral, with no opinion given'
              ],
              correct: 0,
              skill: 'Writer’s attitude',
              hint: 'The writer mentions limits, but how does the article end?',
              evidence: ['There are, however, a few limits.', 'you may discover that your memory is far more powerful than you thought']
            }
          ]
        }
      ]
    }
  ];

  return { HEROES, WORLDS };
})();
