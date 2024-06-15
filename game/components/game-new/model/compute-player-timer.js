export function computePlayerTimer(gameState, player) {
  return {
    timer: gameState.timers[player.symbol],
    timerStartAt:
      player.symbol === gameState.currentStep
        ? gameState.currentMoveStart
        : undefined,
  };
}
