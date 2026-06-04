import { useEffect, useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./TicTacToe.css";

const CELLS = 9;

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function getWinInfo(squares: (string | null)[]) {
  for (const [a, b, c] of WINNING_LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

function minimax(squares: (string | null)[], isMaximizing: boolean): number {
  const win = getWinInfo(squares);
  if (win) return win.winner === "O" ? 10 : -10;
  if (squares.every(Boolean)) return 0;

  if (isMaximizing) {
    let best = -Infinity;
    for (let i = 0; i < CELLS; i++) {
      if (!squares[i]) {
        squares[i] = "O";
        best = Math.max(best, minimax(squares, false));
        squares[i] = null;
      }
    }
    return best;
  } else {
    let best = Infinity;
    for (let i = 0; i < CELLS; i++) {
      if (!squares[i]) {
        squares[i] = "X";
        best = Math.min(best, minimax(squares, true));
        squares[i] = null;
      }
    }
    return best;
  }
}

function getBestMove(squares: (string | null)[]): number {
  let bestVal = -Infinity;
  let bestMove = -1;
  for (let i = 0; i < CELLS; i++) {
    if (!squares[i]) {
      squares[i] = "O";
      const val = minimax(squares, false);
      squares[i] = null;
      if (val > bestVal) { bestVal = val; bestMove = i; }
    }
  }
  return bestMove;
}

const TicTacToe: React.FC = () => {
  const ref = useScrollReveal();
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isDevTurn, setIsDevTurn] = useState(false);

  const winInfo = getWinInfo(board);
  const isDraw = !winInfo && board.every(Boolean);
  const gameOver = !!winInfo || isDraw;

  useEffect(() => {
    if (!isDevTurn || gameOver) return;
    const timer = setTimeout(() => {
      const move = getBestMove([...board]);
      if (move === -1) return;
      const next = [...board];
      next[move] = "O";
      setBoard(next);
      setIsDevTurn(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [isDevTurn, board, gameOver]);

  const handleClick = (i: number) => {
    if (board[i] || isDevTurn || gameOver) return;
    const next = [...board];
    next[i] = "X";
    setBoard(next);
    setIsDevTurn(true);
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setIsDevTurn(false);
  };

  const status = winInfo
    ? winInfo.winner === "X" ? "You win! 🎉" : "Dev wins!"
    : isDraw ? "It's a draw!"
    : isDevTurn ? "Thinking..." : "Your turn (X)";

  return (
    <section ref={ref} id="play" className="ttt-section">
      <h2 className="ttt-section__title">Take a <strong className="purple">Break</strong></h2>
      <p className="ttt__subtitle">you've seen the work — now beat the dev's algorithm</p>

      <div className="ttt__game">
        <div className="ttt__players">
          <span className="ttt__player ttt__player--x">You (X)</span>
          <span className="ttt__vs">vs</span>
          <span className="ttt__player ttt__player--o">Dev (O)</span>
        </div>

        <p className={`ttt__status${winInfo?.winner === "X" ? " ttt__status--win" : winInfo?.winner === "O" ? " ttt__status--lose" : isDraw ? " ttt__status--draw" : isDevTurn ? " ttt__status--thinking" : ""}`}>
          {status}
        </p>

        <div className={`ttt__board${isDevTurn && !gameOver ? " ttt__board--thinking" : ""}`}>
          {board.map((val, i) => {
            const isWinCell = winInfo?.line.includes(i);
            return (
              <button
                key={i}
                className={`ttt__cell${val === "X" ? " ttt__x" : val === "O" ? " ttt__o" : " ttt__empty"}${isWinCell ? " ttt__win-cell" : ""}`}
                onClick={() => handleClick(i)}
                disabled={!!val || isDevTurn || gameOver}
              >
                {val}
              </button>
            );
          })}
        </div>

        <button className="ttt__reset" onClick={reset}>
          New Game
        </button>
      </div>
    </section>
  );
};

export default TicTacToe;
