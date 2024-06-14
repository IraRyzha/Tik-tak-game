import { STEP_ORDER } from "../constants";

export function getNextStep(currentStep, playersCount, playersTimeOver) {
  const slicedStepOrder = STEP_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );
  const nextStep = slicedStepOrder.indexOf(currentStep) + 1;
  return slicedStepOrder[nextStep] ?? slicedStepOrder[0];
}
