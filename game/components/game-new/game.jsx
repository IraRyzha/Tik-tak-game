import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameTitle } from "./ui/game-title";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/get-move-info";
import { GameCell } from "./ui/game-cell";
import { GameActions } from "./ui/game-actions";
import GameOverModal from "./ui/game-over-modal";
import {
  gameStateReducer,
  GAME_STATE_ACTIONS,
  initGameState,
} from "./model/game-state-reducer";
import { useReducer } from "react";
import { getNextStep } from "./model/get-next-step";
import { computeWinner } from "./model/compute-winner";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "./lib/timer";

const PLAYERS_COUNT = 4;

export default function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initGameState,
  );

  useInterval(1000, gameState.currentStep, () => {
    dispatch({ type: GAME_STATE_ACTIONS.TICK, payload: { now: Date.now() } });
  });

  console.log(gameState);

  const nextStep = getNextStep(gameState);
  const winnerSequence = computeWinner(gameState);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    nextStep,
    winnerSequence,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  const { cells, currentStep, timers } = gameState;

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo
            playersCount={4}
            isRatingGame
            timeMode={"1 minute per turn"}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(gameState, player);
          return (
            <PlayerInfo
              key={player.id}
              isRight={index % 2 === 1}
              avatar={player.avatar}
              name={player.name}
              rate={player.rate}
              symbol={player.symbol}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo currentStep={currentStep} nextStep={nextStep} />
        }
        actions={<GameActions />}
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            symbol={cell}
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            onClick={() =>
              dispatch({
                type: GAME_STATE_ACTIONS.CELL_CLICK,
                payload: { index, now: Date.now() },
              })
            }
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            isRight={index % 2 === 1}
            avatar={player.avatar}
            name={player.name}
            rate={player.rate}
            symbol={player.symbol}
            isTimerRunning={false}
            timer={timers[player.symbol]}
          />
        ))}
      />
    </>
  );
}
