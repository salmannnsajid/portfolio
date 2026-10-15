import { useEffect, useState, useRef } from "react";
import {
  K, SNIPPETS, SNIPPET_FILENAMES,
  CHAR_DELAY, LINE_PAUSE, END_PAUSE, CLEAR_PAUSE,
} from "./matrixRain.constants";
import type { Tok, Line } from "./matrixRain.constants";

const MatrixRain: React.FC = () => {
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [visibleLines, setVisible] = useState<Line[]>([]);
  const [curLine, setCurLine] = useState<Tok[]>([]);
  const [curCharIdx, setCurCharIdx] = useState(0);
  const [lineKey, setLineKey] = useState(0);
  const [blink, setBlink] = useState(true);

  const flatLine = useRef<{ tok: number; char: number }[]>([]);
  const lineIdx = useRef(0);
  const snippet = SNIPPETS[snippetIdx];

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
    setLineKey(0);
  }, [snippetIdx]);

  /* main typing engine */
  useEffect(() => {
    const line = snippet[lineIdx.current];
    if (!line) return;

    flatLine.current = buildFlat(line);

    const advanceLine = () => {
      setVisible((v) => [...v, line]);
      setCurLine([]);
      setCurCharIdx(0);
      setLineKey((k) => k + 1);
      lineIdx.current++;
      if (lineIdx.current >= snippet.length) {
        setTimeout(() => {
          setVisible([]);
          lineIdx.current = 0;
          setTimeout(
            () => setSnippetIdx((i) => (i + 1) % SNIPPETS.length),
            CLEAR_PAUSE
          );
        }, END_PAUSE);
      }
    };

    if (flatLine.current.length === 0) {
      const tid = setTimeout(advanceLine, LINE_PAUSE);
      return () => clearTimeout(tid);
    }

    if (curCharIdx >= flatLine.current.length) {
      const tid = setTimeout(advanceLine, LINE_PAUSE);
      return () => clearTimeout(tid);
    }

    const tid = setTimeout(() => {
      const map = flatLine.current[curCharIdx];
      setCurLine(() =>
        line.map((tok, ti) => {
          if (ti < map.tok) return tok;
          if (ti === map.tok) return { ...tok, t: tok.t.slice(0, map.char + 1) };
          return { ...tok, t: "" };
        })
      );
      setCurCharIdx((c) => c + 1);
    }, CHAR_DELAY);
    return () => clearTimeout(tid);
  }, [curCharIdx, lineKey, snippetIdx]); // eslint-disable-line

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(id);
  }, []);

  const renderLine = (line: Line, idx: number) => (
    <div key={idx} style={{ minHeight: "1.5em", whiteSpace: "pre" }}>
      {line.map((tok, ti) => (
        <span key={ti} style={{ color: tok.c || K.tx }}>
          {tok.t}
        </span>
      ))}
    </div>
  );

  return (
    <div
      style={{
        width: 420,
        maxWidth: "100%",
        background: "#0b1120",
        borderRadius: 12,
        border: "1px solid rgba(148,163,184,0.2)",
        boxShadow:
          "0 20px 50px rgba(0,0,0,0.45)",
        overflow: "hidden",
        fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
      }}
    >
      {/* title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "9px 14px",
          background: "#111a2e",
          borderBottom: "1px solid rgba(148,163,184,0.15)",
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((bg) => (
          <span
            key={bg}
            style={{
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: bg,
              display: "inline-block",
            }}
          />
        ))}
        <span style={{ marginLeft: "auto", color: "#64748b", fontSize: "0.72rem" }}>
          {SNIPPET_FILENAMES[snippetIdx]}
        </span>
      </div>

      {/* editor body */}
      <div style={{ display: "flex", padding: "16px 0", minHeight: 300 }}>
        {/* line numbers */}
        <div
          style={{
            width: 38,
            textAlign: "right",
            paddingRight: 12,
            color: "#334155",
            fontSize: "0.75rem",
            lineHeight: "1.5em",
            userSelect: "none",
            flexShrink: 0,
          }}
        >
          {[...visibleLines, curLine].map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* code area */}
        <div
          style={{
            flex: 1,
            paddingRight: 16,
            fontSize: "0.78rem",
            lineHeight: "1.5em",
            color: K.tx,
            overflowX: "hidden",
          }}
        >
          {visibleLines.map((l, i) => renderLine(l, i))}

          {/* current typing line + cursor */}
          <div style={{ minHeight: "1.5em", whiteSpace: "pre" }}>
            {curLine.map((tok, ti) => (
              <span key={ti} style={{ color: tok.c || K.tx }}>
                {tok.t}
              </span>
            ))}
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1em",
                background: blink ? "#2dd4bf" : "transparent",
                verticalAlign: "text-bottom",
                marginLeft: 1,
                boxShadow: blink ? "0 0 6px #2dd4bf" : "none",
                transition: "background 0.1s",
              }}
            />
          </div>
        </div>
      </div>

      {/* status bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "4px 14px",
          background: "#111a2e",
          borderTop: "1px solid rgba(148,163,184,0.12)",
          color: "#64748b",
          fontSize: "0.65rem",
        }}
      >
        <span>TypeScript · UTF-8</span>
        <span style={{ color: "#2dd4bf" }}>Ln {visibleLines.length + 1}</span>
      </div>
    </div>
  );
};

export default MatrixRain;
