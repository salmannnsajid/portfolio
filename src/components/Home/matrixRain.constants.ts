export const K = {
  kw: "#c770f0", // keywords
  fn: "#dda0dd", // function / hook names
  ty: "#7ec8e3", // types / interfaces
  str: "#98c379", // strings
  cm: "#6b7280", // comments
  tx: "#abb2bf", // plain text
  op: "#e0aaff", // operators / punctuation
  pr: "#e06c75", // properties / methods
  nu: "#d19a66", // numbers / booleans
};

export type Tok = { t: string; c: string };
export type Line = Tok[];

export const SNIPPETS: Line[][] = [
  // /* ── Monday: developer morning routine ── */
  [
    [{ t: "// monday.ts", c: K.cm }],
    [
      { t: "async function ", c: K.kw },
      { t: "startDay", c: K.fn },
      { t: "() {", c: K.tx },
    ],
    [
      { t: "  const coffee = ", c: K.tx },
      { t: "await ", c: K.kw },
      { t: "makeCoffee", c: K.fn },
      { t: "(", c: K.tx },
      { t: "3", c: K.nu },
      { t: ");", c: K.tx },
    ],
    [{ t: "", c: "" }],
    [
      { t: "  if ", c: K.kw },
      { t: "(coffee.", c: K.tx },
      { t: "cups ", c: K.pr },
      { t: "< ", c: K.op },
      { t: "1", c: K.nu },
      { t: ") {", c: K.tx },
    ],
    [
      { t: "    throw new ", c: K.kw },
      { t: "Error", c: K.ty },
      { t: "(", c: K.tx },
      { t: "'Cannot. Send help.'", c: K.str },
      { t: ");", c: K.tx },
    ],
    [{ t: "  }", c: K.tx }],
    [{ t: "", c: "" }],
    [
      { t: "  await ", c: K.kw },
      { t: "openVSCode", c: K.fn },
      { t: "();", c: K.tx },
    ],
    [
      { t: "  await ", c: K.kw },
      { t: "ignore", c: K.fn },
      { t: "(", c: K.tx },
      { t: "'250 unread emails'", c: K.str },
      { t: ");", c: K.tx },
    ],
    [
      { t: "  return ", c: K.kw },
      { t: "startCoding", c: K.fn },
      { t: "(); 🚀", c: K.tx },
    ],
    [{ t: "}", c: K.tx }],
  ],

  // /* ── Tuesday: standup object ── */
  [
    [{ t: "// tuesday.ts", c: K.cm }],
    [
      { t: "const ", c: K.kw },
      { t: "myStandup", c: K.fn },
      { t: ": ", c: K.tx },
      { t: "Update", c: K.ty },
      { t: " = {", c: K.tx },
    ],
    [
      { t: "  yesterday: ", c: K.pr },
      { t: "'Fixed a bug 🐛'", c: K.str },
      { t: ",", c: K.tx },
    ],
    [
      { t: "  today:     ", c: K.pr },
      { t: "'Fix new bugs 🐛🐛'", c: K.str },
      { t: ",", c: K.tx },
    ],
    [
      { t: "  blockers:  ", c: K.pr },
      { t: "'Coffee machine broke'", c: K.str },
      { t: ",", c: K.tx },
    ],
    [{ t: "};", c: K.tx }],
    [{ t: "", c: "" }],
    [{ t: "// what I actually tell the team:", c: K.cm }],
    [
      { t: "console.", c: K.tx },
      { t: "log", c: K.fn },
      { t: "(", c: K.tx },
      { t: "'no blockers ✅'", c: K.str },
      { t: ");", c: K.tx },
    ],
    [{ t: "", c: "" }],
    [
      { t: "setTimeout", c: K.fn },
      { t: "(() => ", c: K.tx },
      { t: "ship", c: K.fn },
      { t: "(), ", c: K.tx },
      { t: "Infinity", c: K.nu },
      { t: "); // 😅", c: K.cm },
    ],
  ],

  // /* ── Wednesday: code review ── */
  [
    [{ t: "// review.ts", c: K.cm }],
    [
      { t: "function ", c: K.kw },
      { t: "reviewPR", c: K.fn },
      { t: "() {", c: K.tx },
    ],
    [
      { t: "  const ", c: K.kw },
      { t: "feedback", c: K.pr },
      { t: " = [", c: K.tx },
    ],
    [
      { t: "    ", c: K.tx },
      { t: "'Looks good!'", c: K.str },
      { t: ",", c: K.tx },
    ],
    [
      { t: "    ", c: K.tx },
      { t: "'One tiny comment...'", c: K.str },
      { t: ",", c: K.tx },
    ],
    [{ t: "  ];", c: K.tx }],
    [{ t: "", c: "" }],
    [
      { t: "  return ", c: K.kw },
      { t: "feedback", c: K.pr },
      { t: "[", c: K.tx },
      { t: "1", c: K.nu },
      { t: "];", c: K.tx },
    ],
    [{ t: "  // 47 comments later 😭", c: K.cm }],
    [{ t: "}", c: K.tx }],
  ],

  // /* ── Thursday: ask AI ── */
  [
    [{ t: "// ai.ts", c: K.cm }],
    [
      { t: "const ", c: K.kw },
      { t: "solution", c: K.pr },
      { t: " = await ", c: K.kw },
      { t: "askAI", c: K.fn },
      { t: "();", c: K.tx },
    ],
    [{ t: "", c: "" }],
    [
      { t: "if ", c: K.kw },
      { t: "(solution.", c: K.tx },
      { t: "works", c: K.pr },
      { t: ") {", c: K.tx },
    ],
    [
      { t: "  return ", c: K.kw },
      { t: "'genius'", c: K.str },
      { t: ";", c: K.tx },
    ],
    [{ t: "} else {", c: K.tx }],
    [
      { t: "  askAI", c: K.fn },
      { t: "(", c: K.tx },
      { t: "'why doesn't it work?'", c: K.str },
      { t: ");", c: K.tx },
    ],
    [{ t: "}", c: K.tx }],
  ],

  // /* ── Friday: famous last words ── */
  [
    [{ t: "// friday.ts", c: K.cm }],
    [{ t: "// deploy checklist", c: K.cm }],
    [
      { t: "const ", c: K.kw },
      { t: "ran_tests   ", c: K.pr },
      { t: "= ", c: K.op },
      { t: "false", c: K.nu },
      { t: "; // later", c: K.cm },
    ],
    [
      { t: "const ", c: K.kw },
      { t: "peer_review ", c: K.pr },
      { t: "= ", c: K.op },
      { t: "false", c: K.nu },
      { t: "; // trust me", c: K.cm },
    ],
    [
      { t: "const ", c: K.kw },
      { t: "backup_taken", c: K.pr },
      { t: "= ", c: K.op },
      { t: "false", c: K.nu },
      { t: "; // fine", c: K.cm },
    ],
    [{ t: "", c: "" }],
    [{ t: "// ship it 🚢", c: K.cm }],
    [
      { t: "await ", c: K.kw },
      { t: "push", c: K.fn },
      { t: "(", c: K.tx },
      { t: "'main'", c: K.str },
      { t: ", { force: ", c: K.tx },
      { t: "true", c: K.nu },
      { t: " });", c: K.tx },
    ],
    [
      { t: "await ", c: K.kw },
      { t: "deploy", c: K.fn },
      { t: "(", c: K.tx },
      { t: "'prod'", c: K.str },
      { t: ");", c: K.tx },
    ],
    [{ t: "", c: "" }],
    [{ t: "// 5:01 PM. phone off. 🏃", c: K.cm }],
  ],

  // /* ── Saturday: side project ── */
  [
    [{ t: "// saturday.ts", c: K.cm }],
    [{ t: "// day 1 of my side project", c: K.cm }],
    [
      { t: "const ", c: K.kw },
      { t: "plan ", c: K.fn },
      { t: "= {", c: K.tx },
    ],
    [
      { t: "  target: ", c: K.pr },
      { t: "'build the next unicorn'", c: K.str },
      { t: ",", c: K.tx },
    ],
    [
      { t: "  eta:    ", c: K.pr },
      { t: "'2 weeks'", c: K.str },
      { t: ", // 😂", c: K.cm },
    ],
    [
      { t: "  stack:  ", c: K.pr },
      { t: "['React', 'AI', 'vibes']", c: K.str },
      { t: ",", c: K.tx },
    ],
    [{ t: "};", c: K.tx }],
    [{ t: "", c: "" }],
    [{ t: "// day 14 of my side project", c: K.cm }],
    [
      { t: "const ", c: K.kw },
      { t: "reality ", c: K.fn },
      { t: "= {", c: K.tx },
    ],
    [
      { t: "  done:     ", c: K.pr },
      { t: "'landing page bg-color'", c: K.str },
      { t: ",", c: K.tx },
    ],
    [
      { t: "  status:   ", c: K.pr },
      { t: "'paused indefinitely'", c: K.str },
      { t: ",", c: K.tx },
    ],
    [{ t: "};", c: K.tx }],
  ],

  /* ── Sunday: sunday scaries ── */
  [
    [{ t: "// sunday.ts", c: K.cm }],
    [
      { t: "type ", c: K.kw },
      { t: "SundayMood", c: K.ty },
      { t: " =", c: K.tx },
    ],
    [
      { t: "  | ", c: K.op },
      { t: "'productive'", c: K.str },
      { t: "     // 10am", c: K.cm },
    ],
    [
      { t: "  | ", c: K.op },
      { t: "'procrastinating'", c: K.str },
      { t: "  // 2pm", c: K.cm },
    ],
    [
      { t: "  | ", c: K.op },
      { t: "'doom-scrolling'", c: K.str },
      { t: "  // 6pm", c: K.cm },
    ],
    [
      { t: "  | ", c: K.op },
      { t: "'panic-coding'", c: K.str },
      { t: "   // 11pm", c: K.cm },
    ],
    [
      { t: "  | ", c: K.op },
      { t: "'why'", c: K.str },
      { t: ";          // 2am", c: K.cm },
    ],
    [{ t: "", c: "" }],
    [
      { t: "const ", c: K.kw },
      { t: "mood", c: K.fn },
      { t: ": ", c: K.tx },
      { t: "SundayMood", c: K.ty },
      { t: " = ", c: K.op },
      { t: "getCurrentMood", c: K.fn },
      { t: "();", c: K.tx },
    ],
    [
      { t: "// always returns ", c: K.cm },
      { t: "'doom-scrolling'", c: K.str },
      { t: " 📱", c: K.cm },
    ],
  ],
];

export const SNIPPET_FILENAMES = [
  "monday.ts",
  "tuesday.ts",
  "review.ts",
  "ai.ts",
  "friday.ts",
  "saturday.ts",
  "sunday.ts",
];

export const CHAR_DELAY = 40; // ms per character
export const LINE_PAUSE = 200; // ms between lines
export const END_PAUSE = 2600; // ms after snippet is done
export const CLEAR_PAUSE = 500; // ms after clearing
