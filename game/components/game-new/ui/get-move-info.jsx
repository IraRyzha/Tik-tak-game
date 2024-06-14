import { GameSymbol } from "./game-symbol";

export function GameMoveInfo({ currentStep, nextStep }) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
        Step: <GameSymbol symbol={currentStep} className="h-5 w-5" />
      </div>
      <div className="flex items-center gap-1 text-xs text-slate-400 leading-tight">
        Next: <GameSymbol symbol={nextStep} className="h-3 w-3" />
      </div>
    </>
  );
}
