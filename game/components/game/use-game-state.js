import { useState } from "react";
import { GAME_STEPS } from "./constants";
import { computeWinner, getNextStep } from "./model";

export function useGameState(playersCount) {
  const [{ cells, currentStep }, setGameState] = useState({
    cells: new Array(19 * 19).fill(),
    currentStep: GAME_STEPS.CROSS,
  });
  const nextStep = getNextStep(currentStep, playersCount);

  const winnerSequence = computeWinner(cells);

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }
      return {
        ...lastGameState,
        currentStep: getNextStep(lastGameState.currentStep, playersCount),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentStep : cell,
        ),
      };
    });
  };

  return { cells, currentStep, nextStep, handleCellClick, winnerSequence };
}
