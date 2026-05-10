const MATS = [
  { key: 'do',  solfege: 'Do',  label: 'Low Do',  name: 'Music Mat (Low Do)',  image: 'assets/mats/lowdo.png',  color: '#cc2222', midi: 60 },
  { key: 're',  solfege: 'Re',  label: 'Re',      name: 'Music Mat (Re)',      image: 'assets/mats/re.png',     color: '#e09818', midi: 62 },
  { key: 'mi',  solfege: 'Mi',  label: 'Mi',      name: 'Music Mat (Mi)',      image: 'assets/mats/mi.png',     color: '#ece020', midi: 64 },
  { key: 'fa',  solfege: 'Fa',  label: 'Fa',      name: 'Music Mat (Fa)',      image: 'assets/mats/fa.png',     color: '#9cd428', midi: 65 },
  { key: 'sol', solfege: 'Sol', label: 'Sol',     name: 'Music Mat (Sol)',     image: 'assets/mats/sol.png',    color: '#52bf5a', midi: 67 },
  { key: 'la',  solfege: 'La',  label: 'La',      name: 'Music Mat (La)',      image: 'assets/mats/la.png',     color: '#78ccea', midi: 69 },
  { key: 'ti',  solfege: 'Ti',  label: 'Ti',      name: 'Music Mat (Ti)',      image: 'assets/mats/ti.png',     color: '#4898cc', midi: 71 },
  { key: 'do8', solfege: 'Do',  label: 'High Do', name: 'Music Mat (High Do)', image: 'assets/mats/highdo.png', color: '#de5598', midi: 72 },
];

// All playable notes across both octaves and all rotations.
// dir: N=natural, W=sharp (+½ step), S=high octave, E=flat (-½ step)
// token: what gets typed/inserted into the composer textarea
// chipLabel: display text on the note chip
const NOTES = [
  // ── Octave 1, Natural (North ↑) ──────────────────────────────────────────
  { key: 'do',    mat: 'do',  dir: 'N', midi: 60, token: 'Do',    chipLabel: 'Do',   name: 'Low Do (C4)',  color: '#cc2222' },
  { key: 're',    mat: 're',  dir: 'N', midi: 62, token: 'Re',    chipLabel: 'Re',   name: 'Re (D4)',      color: '#e09818' },
  { key: 'mi',    mat: 'mi',  dir: 'N', midi: 64, token: 'Mi',    chipLabel: 'Mi',   name: 'Mi (E4)',      color: '#ece020' },
  { key: 'fa',    mat: 'fa',  dir: 'N', midi: 65, token: 'Fa',    chipLabel: 'Fa',   name: 'Fa (F4)',      color: '#9cd428' },
  { key: 'sol',   mat: 'sol', dir: 'N', midi: 67, token: 'Sol',   chipLabel: 'Sol',  name: 'Sol (G4)',     color: '#52bf5a' },
  { key: 'la',    mat: 'la',  dir: 'N', midi: 69, token: 'La',    chipLabel: 'La',   name: 'La (A4)',      color: '#78ccea' },
  { key: 'ti',    mat: 'ti',  dir: 'N', midi: 71, token: 'Ti',    chipLabel: 'Ti',   name: 'Ti (B4)',      color: '#4898cc' },
  { key: 'do8',   mat: 'do8', dir: 'N', midi: 72, token: 'Do8',   chipLabel: 'Do',   name: 'High Do (C5)', color: '#de5598' },
  // ── Octave 1, Sharps (West ←) — all 8 mats ──────────────────────────────
  { key: 'do-w',  mat: 'do',  dir: 'W', midi: 61, token: 'Do#',   chipLabel: 'Do♯',  name: 'C# / Db (C4 West)',  color: '#cc2222' },
  { key: 're-w',  mat: 're',  dir: 'W', midi: 63, token: 'Re#',   chipLabel: 'Re♯',  name: 'D# / Eb (Re West)',  color: '#e09818' },
  { key: 'mi-w',  mat: 'mi',  dir: 'W', midi: 65, token: 'Mi#',   chipLabel: 'Mi♯',  name: 'E# = F4 (Mi West)',  color: '#ece020' },
  { key: 'fa-w',  mat: 'fa',  dir: 'W', midi: 66, token: 'Fa#',   chipLabel: 'Fa♯',  name: 'F# / Gb (Fa West)',  color: '#9cd428' },
  { key: 'sol-w', mat: 'sol', dir: 'W', midi: 68, token: 'Sol#',  chipLabel: 'Sol♯', name: 'G# / Ab (Sol West)', color: '#52bf5a' },
  { key: 'la-w',  mat: 'la',  dir: 'W', midi: 70, token: 'La#',   chipLabel: 'La♯',  name: 'A# / Bb (La West)',  color: '#78ccea' },
  { key: 'ti-w',  mat: 'ti',  dir: 'W', midi: 72, token: 'Ti#',   chipLabel: 'Ti♯',  name: 'B# = C5 (Ti West)',  color: '#4898cc' },
  { key: 'do8-w', mat: 'do8', dir: 'W', midi: 73, token: 'Do8#',  chipLabel: 'Do♯',  name: 'C#5 (High Do West)', color: '#de5598' },
  // ── Octave 2, Natural (South ↓) — all 8 mats ─────────────────────────────
  { key: 'do-s',  mat: 'do',  dir: 'S', midi: 72, token: 'Do2',   chipLabel: "Do'",  name: 'C5 (Low Do South)',  color: '#cc2222' },
  { key: 're-s',  mat: 're',  dir: 'S', midi: 74, token: 'Re2',   chipLabel: "Re'",  name: 'D5 (Re South)',      color: '#e09818' },
  { key: 'mi-s',  mat: 'mi',  dir: 'S', midi: 76, token: 'Mi2',   chipLabel: "Mi'",  name: 'E5 (Mi South)',      color: '#ece020' },
  { key: 'fa-s',  mat: 'fa',  dir: 'S', midi: 77, token: 'Fa2',   chipLabel: "Fa'",  name: 'F5 (Fa South)',      color: '#9cd428' },
  { key: 'sol-s', mat: 'sol', dir: 'S', midi: 79, token: 'Sol2',  chipLabel: "Sol'", name: 'G5 (Sol South)',     color: '#52bf5a' },
  { key: 'la-s',  mat: 'la',  dir: 'S', midi: 81, token: 'La2',   chipLabel: "La'",  name: 'A5 (La South)',      color: '#78ccea' },
  { key: 'ti-s',  mat: 'ti',  dir: 'S', midi: 83, token: 'Ti2',   chipLabel: "Ti'",  name: 'B5 (Ti South)',      color: '#4898cc' },
  { key: 'do8-s', mat: 'do8', dir: 'S', midi: 84, token: 'Do82',  chipLabel: "Do''", name: 'C6 (High Do South)', color: '#de5598' },
];

// Each entry is one of:
//   string  → single mat  e.g. 'do'
//   array   → chord       e.g. ['do','mi','sol']  (sorted low→high for display)
//   null    → rest
const SONGS = [
  {
    // Main riff in A natural minor + Am/C chord punches at phrase endings
    title: 'Game of Thrones',
    notes: [
      'la','do','re',['re','la'],['do','mi'],'la', null,
      'la','do','re',['re','la'],['do','mi'],'la', null,
      'la','do','re','mi','re','do', null,
      ['la','do','mi'], null,
      'fa','sol',['la','do','mi'],
    ],
  },
  {
    // Recorder melody — single notes, fast-paced
    title: 'The Office',
    notes: [
      'ti','ti','ti','sol','ti','do8','ti','sol', null,
      'la','ti','sol','mi','sol','la','sol', null,
      'ti','ti','ti','sol','ti','do8','ti','sol', null,
      'la','ti','sol','mi','sol',
    ],
  },
  {
    // Melody with dramatic full C-major chord on the big "Sol" hit
    title: 'Indiana Jones — Raiders March',
    notes: [
      'do','mi','fa', null,
      ['do','mi','sol'], null, null,
      'do','mi','fa','sol','mi', null,
      're','mi', null,
      'sol','fa','re','do', null, null,
      'do','mi','fa', null,
      ['do','mi','sol'], null, null,
      'do','mi','fa','sol','mi', null,
      ['do','mi','sol'],
    ],
  },
  {
    // Opening chord strum on each phrase, melody on top
    title: "Friends — I'll Be There For You",
    notes: [
      ['sol','re'],'la','sol','fa','mi','re','mi', null,
      ['do','sol'],'re','mi','re','do', null,
      ['fa','do8'],'sol','la','sol','fa','mi', null,
      ['re','la'],'mi','fa','mi','re','do',
    ],
  },
  {
    // Upbeat horn fanfare — single-note melody
    title: 'Parks and Recreation',
    notes: [
      'do','mi','sol','do8', null,
      'sol','mi','re','do', null,
      'do','mi','sol','la', null,
      'sol','mi','re','do', null, null,
      'do','re','mi','sol','la','sol','mi','re','do',
    ],
  },
  {
    // Melody with Do+Mi drone harmony on the main motif
    title: "Zelda's Lullaby",
    notes: [
      ['do','mi'],'sol','re', null,
      ['do','mi'],'sol','re',['do','mi'], null,
      'sol','re',['do','mi'],'do', null,
      're','mi','re','do', null, null,
      ['do','mi'],'sol','re', null,
      ['do','mi'],'sol','la','sol',['do','mi'], null,
      'do','re',['do','mi'],
    ],
  },
  {
    // 3-note repeating riff — F A B — all white keys
    title: "Saria's Song (Lost Woods — Zelda)",
    notes: [
      'fa','la','ti','fa','la','ti','fa','la','ti', null,
      'ti','la','fa','re', null,
      'fa','la','ti','fa','la','ti','fa','la','ti', null,
      'ti','la','fa',
    ],
  },
  {
    // Vocal melody in A natural minor — no accidentals in the melody line
    title: 'House of the Rising Sun',
    notes: [
      'la','la','la','la','do','mi', null,
      'la','do','mi','mi','re', null,
      'do','la','la','la','do','re','mi', null,
      'la','mi','re','do','la',
    ],
  },
  {
    // Main theme — A minor, all white keys; uses Do Re Mi Fa Sol La
    title: 'Downton Abbey',
    notes: [
      'la','la','la','do', null,
      'la','la','la','do', null,
      'mi','mi','la','mi','do', null,
      'mi','mi','la','mi', null,
      'mi','mi','la','mi','do', null,
      're','re','la','mi', null,
      'mi','mi','fa','do','la', null,
      'la','la','fa','do', null,
      'sol','sol','fa','do', null,
      'la','la','la','mi','do',
    ],
  },
  {
    // C major, all white keys — the most universal melody
    title: 'Twinkle Twinkle Little Star',
    notes: [
      'do','do','sol','sol','la','la','sol', null,
      'fa','fa','mi','mi','re','re','do', null,
      'sol','sol','fa','fa','mi','mi','re', null,
      'do','do','sol','sol','la','la','sol', null,
      'fa','fa','mi','mi','re','re','do',
    ],
  },
  {
    // Beethoven's 9th, 4th movement — E F G phrase instantly recognizable
    title: 'Ode to Joy — Beethoven',
    notes: [
      'mi','mi','fa','sol','sol','fa','mi','re',
      'do','do','re','mi','mi','re','re', null,
      'mi','mi','fa','sol','sol','fa','mi','re',
      'do','do','re','mi','re','do','do',
    ],
  },
  {
    // All white keys — C C D C F E pattern is universal
    title: 'Happy Birthday',
    notes: [
      'do','do','re','do','fa','mi', null,
      'do','do','re','do','sol','fa', null,
      'do','do','do8','la','fa','mi','re', null,
      'ti','ti','la','fa','sol','fa',
    ],
  },
  {
    // Main riff in E minor — Mi Mi Sol Mi Re Do Ti — all white keys
    title: 'Seven Nation Army — The White Stripes',
    notes: [
      'mi', null,'mi','sol','mi', null,'re','do', null,'ti', null, null,
      'mi', null,'mi','sol','mi', null,'re','do', null,'re', null, null,
      'mi', null,'mi','sol','mi', null,'re','do', null,'ti', null, null,
      'mi', null,'mi','sol','mi', null,'re','do', null,'re',
    ],
  },
];
