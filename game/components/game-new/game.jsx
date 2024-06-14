import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameTitle } from "./ui/game-title";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/get-move-info";
import { useGameState } from "./model/use-game-state";
import { GameCell } from "./ui/game-cell";
import { GameActions } from "./ui/game-actions";
import GameOverModal from "./ui/game-over-modal";

const PLAYERS_COUNT = 2;

export default function Game() {
  const {
    cells,
    currentStep,
    nextStep,
    playersTimeOver,
    handleCellClick,
    handlePlayerTimeOver,
    winnerSequence,
    winnerSymbol,
  } = useGameState(PLAYERS_COUNT);

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

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
            onClick={() => handleCellClick(index)}
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

// const [playersCount] = useState(4);
//   const {
//     cells,
//     currentStep,
//     nextStep,
//     handleCellClick,
//     handlePlayerTimeOver,
//     winnerSequence,
//     winnerSymbol,
//   } = useGameState(playersCount);

//   return (
//     <React.Fragment>
//       <GameTitle playersCount={playersCount} />
//       <GameInfo
//         playersCount={playersCount}
//         currentStep={currentStep}
//         className="mt-4"
//         isWinner={!!winnerSymbol}
//         onPlayerTimeOver={handlePlayerTimeOver}
//       />
//       <div className="my-5 w-full flex justify-center">
//         {winnerSymbol && <GameSymbol symbol={winnerSymbol} />}
//       </div>
//       <GameField
//         playersCount={playersCount}
//         cells={cells}
//         currentStep={currentStep}
//         nextStep={nextStep}
//         handleCellClick={handleCellClick}
//         winnerSequence={winnerSequence}
//         winnerSymbol={winnerSymbol}
//         className="mt-6"
//       />
//     </React.Fragment>
//   );
