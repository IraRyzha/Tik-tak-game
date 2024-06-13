import { GameLayout } from "./ui/game-layout";
import { BackLink } from "./ui/back-link";
import { GameInfo } from "./ui/game-info";
import { GameTitle } from "./ui/game-title";
import { PLAYERS } from "./constants";
import { PlayerInfo } from "./ui/player-info";

export default function Game() {
  return (
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
      playersList={PLAYERS.map((player, index) => (
        <PlayerInfo
          key={player.id}
          isRight={index % 2 === 1}
          avatar={player.avatar}
          name={player.name}
          rate={player.rate}
          symbol={player.symbol}
          isTimerRunning={true}
          seconds={20}
        />
      ))}
    />
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
