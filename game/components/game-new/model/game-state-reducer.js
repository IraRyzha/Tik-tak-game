import { GAME_STEPS, STEP_ORDER } from "../constants";
import { getNextStep } from "./get-next-step";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
  TICK: "tick",
};

export const initGameState = ({
  playersCount,
  defaultTimer,
  currentMoveStart,
}) => ({
  cells: new Array(19 * 19).fill(null),
  currentStep: GAME_STEPS.CROSS,
  currentMoveStart,
  playersCount,
  timers: STEP_ORDER.reduce((timers, symbol, index) => {
    if (index < playersCount) {
      timers[symbol] = defaultTimer;
    }
    return timers;
  }, {}),
});

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK: {
      const { index, now } = action.payload;
      if (state.cells[index]) {
        return state;
      }
      return {
        ...state,
        currentStep: getNextStep(state),
        currentMoveStart: now,
        cells: updateCells(state, index),
        timers: updateTimers(state, now),
      };
    }
    case GAME_STATE_ACTIONS.TICK: {
      const { now } = action.payload;
      if (!isTimerOver(state, now)) {
        return state;
      }
      return {
        ...state,
        currentStep: getNextStep(state),
        currentMoveStart: now,
        timers: updateTimers(state, now),
      };
    }
    default:
      return state;
  }
};

function updateCells(gameState, index) {
  return gameState.cells.map((cell, i) =>
    i === index ? gameState.currentStep : cell,
  );
}

function updateTimers(gameState, now) {
  const diff = now - gameState.currentMoveStart;
  const timer = gameState.timers[gameState.currentStep];

  return {
    ...gameState.timers,
    [gameState.currentStep]: timer - diff,
  };
}

function isTimerOver(gameState, now) {
  const timer = updateTimers(gameState, now)[gameState.currentStep];

  return timer <= 0;
}
