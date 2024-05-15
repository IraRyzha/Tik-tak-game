import { useState } from "react";
import { GAME_STEPS, STEP_ORDER } from "./constants";

function getNextStep(currentStep, playersCount) {
  const slicedStepOrder = STEP_ORDER.slice(0, playersCount);
  const nextStep = slicedStepOrder.indexOf(currentStep) + 1;
  return slicedStepOrder[nextStep] ?? slicedStepOrder[0];
}

export function useGameState(playersCount) {
  const [{ cells, currentStep }, setGameState] = useState({
    cells: new Array(19 * 19).fill(),
    currentStep: GAME_STEPS.CROSS,
  });
  const nextStep = getNextStep(currentStep, playersCount);

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

  return { cells, currentStep, nextStep, handleCellClick };
}
