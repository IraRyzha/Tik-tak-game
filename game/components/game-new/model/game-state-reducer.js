import { GAME_STEPS } from "../constants";
import { getNextStep } from "./get-next-step";

export const GAME_STATE_ACTIONS = {
  CELL_CLICK: "cell-click",
};

export const gameStateReducer = (state, action) => {
  switch (action.type) {
    case GAME_STATE_ACTIONS.CELL_CLICK:
      if (state.cells[action.payload.index]) {
        return state;
      }
      return {
        ...state,
        currentStep: getNextStep(
          state.currentStep,
          state.playersCount,
          state.playersTimeOver,
        ),
        cells: state.cells.map((cell, i) =>
          i === action.payload.index ? state.currentStep : cell,
        ),
      };
      break;

    default:
      return state;
  }
};

export const initGameState = ({ playersCount }) => ({
  cells: new Array(19 * 19).fill(null),
  currentStep: GAME_STEPS.CROSS,
  playersCount,
});
