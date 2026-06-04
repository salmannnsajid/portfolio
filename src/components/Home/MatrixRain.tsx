import { useEffect, useState, useRef } from "react";

/* ── colour tokens (match portfolio purple palette) ──────── */
const K = {
  kw:   "#c770f0",   // keywords
  fn:   "#dda0dd",   // function / hook names
  ty:   "#7ec8e3",   // types / interfaces
  str:  "#98c379",   // strings
  cm:   "#6b7280",   // comments
  tx:   "#abb2bf",   // plain text
  op:   "#e0aaff",   // operators / punctuation
  pr:   "#e06c75",   // properties / methods
  nu:   "#d19a66",   // numbers / booleans
};

type Tok = { t: string; c: string };
type Line = Tok[];

const SNIPPETS: Line[][] = [
  /* ── 1: developer morning routine ── */
  [
    [{ t: "// monday.ts", c: K.cm }],
    [{ t: "async function ", c: K.kw }, { t: "startDay", c: K.fn },
     { t: "() {", c: K.tx }],
    [{ t: "  const coffee = ", c: K.tx },
     { t: "await ", c: K.kw }, { t: "makeCoffee", c: K.fn },
     { t: "(", c: K.tx }, { t: "3", c: K.nu }, { t: ");", c: K.tx }],
    [{ t: "", c: "" }],
    [{ t: "  if ", c: K.kw }, { t: "(coffee.", c: K.tx },
     { t: "cups ", c: K.pr }, { t: "< ", c: K.op },
     { t: "1", c: K.nu }, { t: ") {", c: K.tx }],
    [{ t: "    throw new ", c: K.kw }, { t: "Error", c: K.ty },
     { t: "(", c: K.tx }, { t: "'Cannot. Send help.'", c: K.str },
     { t: ");", c: K.tx }],
    [{ t: "  }", c: K.tx }],
    [{ t: "", c: "" }],
    [{ t: "  await ", c: K.kw }, { t: "openVSCode", c: K.fn },
     { t: "();", c: K.tx }],
    [{ t: "  await ", c: K.kw }, { t: "ignore", c: K.fn },
     { t: "(", c: K.tx }, { t: "'250 unread emails'", c: K.str },
     { t: ");", c: K.tx }],
    [{ t: "  return ", c: K.kw },
     { t: "startCoding", c: K.fn }, { t: "(); 🚀", c: K.tx }],
    [{ t: "}", c: K.tx }],
  ],

  /* ── 2: the bug fix algorithm ── */
  [
    [{ t: "// debugging.ts", c: K.cm }],
    [{ t: "async function ", c: K.kw }, { t: "fixBug", c: K.fn },
     { t: "(bug: ", c: K.tx }, { t: "Bug", c: K.ty }, { t: ") {", c: K.tx }],
    [{ t: "  await ", c: K.kw }, { t: "stareAt", c: K.fn },
     { t: "(screen, ", c: K.tx },
     { t: "'2 hours'", c: K.str }, { t: ");", c: K.tx }],
    [{ t: "", c: "" }],
    [{ t: "  if ", c: K.kw }, { t: "(", c: K.tx },
     { t: "stillBroken", c: K.fn }, { t: "(bug)) {", c: K.tx }],
    [{ t: "    await ", c: K.kw }, { t: "searchStackOverflow", c: K.fn },
     { t: "();", c: K.tx }],
    [{ t: "    await ", c: K.kw }, { t: "copyPasteAnswer", c: K.fn },
     { t: "(); // 🙏", c: K.cm }],
    [{ t: "  }", c: K.tx }],
    [{ t: "", c: "" }],
    [{ t: "  // works now, don't touch", c: K.cm }],
    [{ t: "  git.", c: K.tx }, { t: "commit", c: K.fn },
     { t: "(", c: K.tx }, { t: "'fix: minor adjustment'", c: K.str },
     { t: ");", c: K.tx }],
    [{ t: "}", c: K.tx }],
  ],

  /* ── 3: daily standup object ── */
  [
    [{ t: "// standup.ts", c: K.cm }],
    [{ t: "const ", c: K.kw }, { t: "myUpdate", c: K.fn },
     { t: " = {", c: K.tx }],
    [{ t: "  yesterday: ", c: K.pr },
     { t: "'Fixed a bug 🐛'", c: K.str }, { t: ",", c: K.tx }],
    [{ t: "  today:     ", c: K.pr },
     { t: "'Will fix new bug 🐛🐛'", c: K.str }, { t: ",", c: K.tx }],
    [{ t: "  blockers:  ", c: K.pr },
     { t: "'Coffee machine broke'", c: K.str }, { t: ",", c: K.tx }],
    [{ t: "};", c: K.tx }],
    [{ t: "", c: "" }],
    [{ t: "// what I actually say:", c: K.cm }],
    [{ t: "console.", c: K.tx }, { t: "log", c: K.fn },
     { t: "(", c: K.tx }, { t: "'no blockers ✅'", c: K.str },
     { t: ");", c: K.tx }],
    [{ t: "", c: "" }],
    [{ t: "setTimeout", c: K.fn }, { t: "(() => ", c: K.tx },
     { t: "ship", c: K.fn }, { t: "(), ", c: K.tx },
     { t: "Infinity", c: K.nu }, { t: "); // 😅", c: K.cm }],
  ],
];

const CHAR_DELAY  = 28;   // ms per character
const LINE_PAUSE  = 120;  // ms between lines
const END_PAUSE   = 2200; // ms after snippet is done
const CLEAR_PAUSE = 400;  // ms after clearing

const MatrixRain: React.FC = () => {
  const [snippetIdx, setSnippetIdx]   = useState(0);
  const [visibleLines, setVisible]    = useState<Line[]>([]);
  const [curLine, setCurLine]         = useState<Tok[]>([]);
  const [curCharIdx, setCurCharIdx]   = useState(0);
  const [blink, setBlink]             = useState(true);

  /* flatten current snippet line into chars */
  const flatLine = useRef<{ tok: number; char: number }[]>([]);
  const lineIdx  = useRef(0);
  const snippet  = SNIPPETS[snippetIdx];

  /* rebuild flat map when line changes */
  const buildFlat = (line: Line) => {
    const out: { tok: number; char: number }[] = [];
    line.forEach((tok, ti) => {
      for (let ci = 0; ci < tok.t.length; ci++) out.push({ tok: ti, char: ci });
    });
    return out;
  };

  useEffect(() => {
    setBlink(true);
    lineIdx.current = 0;
    setVisible([]);
    setCurLine([]);
    setCurCharIdx(0);
  }, [snippetIdx]);

  /* main typing engine */
  useEffect(() => {
    const line = snippet[lineIdx.current];
    if (!line) return;

    flatLine.current = buildFlat(line);

    /* empty line — skip straight to next */
    if (flatLine.current.length === 0) {
      const tid = setTimeout(() => {
        setVisible(v => [...v, line]);
        setCurLine([]);
        setCurCharIdx(0);
        lineIdx.current++;
        if (lineIdx.current >= snippet.length) {
          setTimeout(() => {
            setVisible([]);
            lineIdx.current = 0;
            setTimeout(() => setSnippetIdx(i => (i + 1) % SNIPPETS.length), CLEAR_PAUSE);
          }, END_PAUSE);
        }
      }, LINE_PAUSE);
      return () => clearTimeout(tid);
    }

    if (curCharIdx >= flatLine.current.length) {
      /* line fully typed — commit and advance */
      const tid = setTimeout(() => {
        setVisible(v => [...v, line]);
        setCurLine([]);
        setCurCharIdx(0);
        lineIdx.current++;
        if (lineIdx.current >= snippet.length) {
          setTimeout(() => {
            setVisible([]);
            lineIdx.current = 0;
            setTimeout(() => setSnippetIdx(i => (i + 1) % SNIPPETS.length), CLEAR_PAUSE);
          }, END_PAUSE);
        }
      }, LINE_PAUSE);
      return () => clearTimeout(tid);
    }

    /* type next character */
    const tid = setTimeout(() => {
      const map = flatLine.current[curCharIdx];
      setCurLine(() => {
        const next = line.map((tok, ti) => {
          if (ti < map.tok) return tok;
          if (ti === map.tok) return { ...tok, t: tok.t.slice(0, map.char + 1) };
          return { ...tok, t: "" };
        });
        return next;
      });
      setCurCharIdx(c => c + 1);
    }, CHAR_DELAY);
    return () => clearTimeout(tid);
  }, [curCharIdx, snippetIdx]);   // eslint-disable-line

  /* cursor blink */
  useEffect(() => {
    const id = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(id);
  }, []);

  const renderLine = (line: Line, idx: number) => (
    <div key={idx} style={{ minHeight: "1.5em", whiteSpace: "pre" }}>
      {line.map((tok, ti) => (
        <span key={ti} style={{ color: tok.c || K.tx }}>{tok.t}</span>
      ))}
    </div>
  );

  return (
    <div style={{
      width: 420, maxWidth: "100%",
      background: "#0d0d1a",
      borderRadius: 12,
      border: "1px solid rgba(199,112,240,0.2)",
      boxShadow: "0 0 50px rgba(199,112,240,0.12), 0 0 100px rgba(123,47,247,0.07)",
      overflow: "hidden",
      fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
    }}>

      {/* title bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "9px 14px",
        background: "#12101f",
        borderBottom: "1px solid rgba(199,112,240,0.15)",
      }}>
        {["#ff5f57","#febc2e","#28c840"].map(bg => (
          <span key={bg} style={{ width: 11, height: 11, borderRadius: "50%", background: bg, display: "inline-block" }} />
        ))}
        <span style={{ marginLeft: "auto", color: "#7b5ea7", fontSize: "0.72rem" }}>
          {["monday.ts","debugging.ts","standup.ts"][snippetIdx]}
        </span>
      </div>

      {/* editor body */}
      <div style={{
        display: "flex",
        padding: "16px 0",
        minHeight: 300,
      }}>

        {/* line numbers */}
        <div style={{
          width: 38, textAlign: "right", paddingRight: 12,
          color: "#3d3557", fontSize: "0.75rem", lineHeight: "1.5em",
          userSelect: "none", flexShrink: 0,
        }}>
          {[...visibleLines, curLine].map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* code area */}
        <div style={{
          flex: 1,
          paddingRight: 16,
          fontSize: "0.78rem",
          lineHeight: "1.5em",
          color: K.tx,
          overflowX: "hidden",
        }}>
          {visibleLines.map((l, i) => renderLine(l, i))}

          {/* current typing line + cursor */}
          <div style={{ minHeight: "1.5em", whiteSpace: "pre" }}>
            {curLine.map((tok, ti) => (
              <span key={ti} style={{ color: tok.c || K.tx }}>{tok.t}</span>
            ))}
            <span style={{
              display: "inline-block",
              width: 2, height: "1em",
              background: blink ? "#c770f0" : "transparent",
              verticalAlign: "text-bottom",
              marginLeft: 1,
              boxShadow: blink ? "0 0 6px #c770f0" : "none",
              transition: "background 0.1s",
            }} />
          </div>
        </div>
      </div>

      {/* status bar */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        padding: "4px 14px",
        background: "#12101f",
        borderTop: "1px solid rgba(199,112,240,0.1)",
        color: "#7b5ea7", fontSize: "0.65rem",
      }}>
        <span>TypeScript · UTF-8</span>
        <span style={{ color: "#c770f0" }}>Ln {visibleLines.length + 1}</span>
      </div>
    </div>
  );
};

export default MatrixRain;
