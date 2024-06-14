import { STEP_ORDER } from "../constants";

export function getNextStep(currentStep, playersCount) {
  const slicedStepOrder = STEP_ORDER.slice(0, playersCount);
  const nextStep = slicedStepOrder.indexOf(currentStep) + 1;
  return slicedStepOrder[nextStep] ?? slicedStepOrder[0];
}
