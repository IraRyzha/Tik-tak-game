import { STEP_ORDER } from "../constants";

export function getNextStep({ currentStep, playersCount, timers }) {
  const slicedStepOrder = STEP_ORDER.slice(0, playersCount).filter(
    (symbol) => timers[symbol] > 0,
  );
  const nextStepIndex = slicedStepOrder.indexOf(currentStep) + 1;
  return slicedStepOrder[nextStepIndex] ?? slicedStepOrder[0];
}
