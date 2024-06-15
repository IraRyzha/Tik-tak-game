import clsx from "clsx";
import { memo } from "react";
import { GameSymbol } from "./game-symbol";

export const GameCell = memo(function GameCell({
  symbol,
  onClick,
  isWinner,
  disabled,
  index,
}) {
  console.log("Game cell render symbol: " + symbol);
  return (
    <button
      onClick={() => onClick(index)}
      disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-orange-600/10",
      )}
    >
      {symbol && <GameSymbol symbol={symbol} className="h-5 w-5" />}
    </button>
  );
});
