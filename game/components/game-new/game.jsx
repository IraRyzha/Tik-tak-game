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

const PLAYERS_COUNT = 4;

export default function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    { playersCount: PLAYERS_COUNT },
    initGameState,
  );

  const nextStep = getNextStep(gameState.currentStep, gameState.playersCount);
  const winnerSequence = computeWinner(gameState.cells);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    nextStep,
    winnerSequence,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  const { cells, currentStep } = gameState;

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
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            isRight={index % 2 === 1}
            avatar={player.avatar}
            name={player.name}
            rate={player.rate}
            symbol={player.symbol}
            isTimerRunning={false}
            seconds={60}
          />
        ))}
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
                payload: { index },
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
            seconds={5}
          />
        ))}
      />
    </>
  );
}
