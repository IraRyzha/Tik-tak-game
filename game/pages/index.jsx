import { Header } from "../components/header";
import {
  GameField,
  GameInfo,
  GameTitle,
  useGameState,
} from "../components/game";
import { useState } from "react";

export default function HomePage() {
  const [playersCount] = useState(2);
  const { cells, currentStep, nextStep, handleCellClick, winnerSequence } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 pb-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          playersCount={playersCount}
          currentStep={currentStep}
          className="mt-4"
        />
        <GameField
          playersCount={playersCount}
          cells={cells}
          currentStep={currentStep}
          nextStep={nextStep}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          className="mt-6"
        />
      </main>
    </div>
  );
}
