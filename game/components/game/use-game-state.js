import { useState } from "react";
import { GAME_STEPS } from "./constants";
import { computeWinner, getNextStep } from "./model";

export function useGameState(playersCount) {
  const [{ cells, currentStep, playersTimeOver }, setGameState] = useState({
    cells: new Array(19 * 19).fill(),
    currentStep: GAME_STEPS.CROSS,
    playersTimeOver: [],
  });
  const nextStep = getNextStep(currentStep, playersCount, playersTimeOver);

  const winnerSequence = computeWinner(cells);

  const winnerSymbol =
    currentStep == nextStep ? currentStep : cells[winnerSequence?.[0]];

  const handleCellClick = (index) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }
      return {
        ...lastGameState,
        currentStep: getNextStep(
          lastGameState.currentStep,
          playersCount,
          lastGameState.playersTimeOver,
        ),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentStep : cell,
        ),
      };
    });
  };

  const handlePlayerTimeOver = (symbol) => {
    setGameState((lastGameState) => {
      return {
        ...lastGameState,
        playersTimeOver: [...lastGameState.playersTimeOver, symbol],
        currentStep: getNextStep(
          lastGameState.currentStep,
          playersCount,
          lastGameState.playersTimeOver,
        ),
      };
    });
  };

  return {
    cells,
    currentStep,
    nextStep,
    playersTimeOver,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  };
}
