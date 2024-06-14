import clsx from "clsx";
import { GameSymbol } from "./game-symbol";

export function GameCell({ symbol, onClick, isWinner, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-orange-600/10",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="h-5 w-5" />}
    </button>
  );
}
