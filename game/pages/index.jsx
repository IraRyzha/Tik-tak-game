import { Header } from "../components/header";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/game";
import { useState } from "react";
import { GameSymbol } from "../components/game/game-symbol";
import UiModal from "../components/uikit/ui-modal";
import UiButton from "../components/uikit/ui-button";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentStep,
    nextStep,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  } = useGameState(playersCount);

  console.log(winnerSymbol);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 pb-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentStep={currentStep}
          className="mt-4"
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        <div className="my-5 w-full flex justify-center">
          {winnerSymbol && <GameSymbol symbol={winnerSymbol} />}
        </div>
        <UiModal
          width="md"
          isOpen={winnerSymbol}
          onClose={() => {
            console.log("close");
          }}
        >
          <UiModal.Header>Game over</UiModal.Header>
          <UiModal.Body>
            <div className="text-sm">
              Winner: <span className="text-teal-600">Ryzha</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton size="md" variant="outline">
              Go back
            </UiButton>
            <UiButton size="md" variant="primary">
              Play again
            </UiButton>
          </UiModal.Footer>
        </UiModal>
        <GameField
          playersCount={playersCount}
          cells={cells}
          currentStep={currentStep}
          nextStep={nextStep}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
          className="mt-6"
        />
      </main>
    </div>
  );
}
