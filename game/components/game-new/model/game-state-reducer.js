import { GAME_STEPS, STEP_ORDER } from "../constants";
import { getNextStep } from "./get-next-step";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
  TICK: "tick",
};

export const initGameState = ({
  playersCount,
  defaultTimer,
  currentStepStart,
}) => ({
  cells: new Array(19 * 19).fill(null),
  currentStep: GAME_STEPS.CROSS,
  currentStepStart,
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
      // console.log("action cell click work");
      // console.log(action.payload);
      // console.log(" ");
      if (state.cells[index]) {
        return state;
      }
      return {
        ...state,
        currentStep: getNextStep(state),
        currentStepStart: now,
        cells: updateCells(state, index),
        timers: updateTimers(state, now),
      };
    }
    case GAME_STATE_ACTIONS.TICK: {
      const { now } = action.payload;
      // console.log("action tick work");
      // console.log(action.payload);
      // console.log(" ");
      if (!isTimerOver(state, now)) {
        return state;
      }
      return {
        ...state,
        currentStep: getNextStep(state),
        currentStepStart: now,
        timers: updateTimers(state, now),
      };
    }
    default:
      return state;
  }
};

function updateCells(gameState, index) {
  // console.log("function updateCells work");
  return gameState.cells.map((cell, i) =>
    i === index ? gameState.currentStep : cell,
  );
}

function updateTimers(gameState, now) {
  // console.log("function updateTimers work");
  const diff = now - gameState.currentStepStart;
  const timer = gameState.timers[gameState.currentStep];

  return {
    ...gameState.timers,
    [gameState.currentStep]: timer - diff,
  };
}

function isTimerOver(gameState, now) {
  // console.log("function isTimerOver work");
  const timer = updateTimers(gameState, now)[gameState.currentStep];

  return timer <= 0;
}
