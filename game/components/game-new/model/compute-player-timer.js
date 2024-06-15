export function computePlayerTimer(gameState, player) {
  // console.log("function computePlayerTimer work");
  return {
    timer: gameState.timers[player.symbol],
    timerStartAt:
      player.symbol === gameState.currentStep
        ? gameState.currentStepStart
        : undefined,
  };
}
