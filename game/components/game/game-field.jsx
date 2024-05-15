import clsx from "clsx";
import UiButton from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";

export function GameField({
  cells,
  currentStep,
  nextStep,
  handleCellClick,
  className,
}) {
  const actions = (
    <>
      <UiButton size="md" variant="primary">
        Draw
      </UiButton>
      <UiButton size="md" variant="outline">
        Give up
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentStep={currentStep}
        nextStep={nextStep}
      />
      <GameGrid>
        {cells.map((cell, index) => {
          return (
            <GameCell key={index} onClick={() => handleCellClick(index)}>
              {cell && <GameSymbol symbol={cell} className="h-5 w-5" />}
            </GameCell>
          );
        })}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
    >
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7 ",
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentStep, nextStep }) {
  return (
    <div className="flex items-center gap-3">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
          Step: <GameSymbol symbol={currentStep} className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-400 leading-tight">
          Next: <GameSymbol symbol={nextStep} className="h-3 w-3" />
        </div>
      </div>

      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_31px)] grid-rows-[repeat(19,_31px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
}
