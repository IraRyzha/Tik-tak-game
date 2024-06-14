export function computeWinnerSymbol(gameState, { nextStep, winnerSequence }) {
  return gameState.currentStep == nextStep
    ? gameState.currentStep
    : gameState.cells[winnerSequence?.[0]];
}
