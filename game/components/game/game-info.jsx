import clsx from "clsx";
import { useEffect, useState } from "react";
import { Profile } from "../profile";
import { GAME_STEPS } from "./constants";
import { GameSymbol } from "./game-symbol";

import avatarSrc1 from "./images/avatar-1.png";
import avatarSrc2 from "./images/avatar-2.png";
import avatarSrc3 from "./images/avatar-3.png";
import avatarSrc4 from "./images/avatar-4.png";

const players = [
  {
    id: 1,
    name: "UserName1",
    rate: 1230,
    avatar: avatarSrc1,
    symbol: GAME_STEPS.CROSS,
  },
  {
    id: 2,
    name: "UserName2andMoreText:)",
    rate: 1050,
    avatar: avatarSrc2,
    symbol: GAME_STEPS.ZERO,
  },
  {
    id: 3,
    name: "UserName3",
    rate: 7000,
    avatar: avatarSrc3,
    symbol: GAME_STEPS.TRIANGLE,
  },
  {
    id: 4,
    name: "UserName4",
    rate: 1050,
    avatar: avatarSrc4,
    symbol: GAME_STEPS.SGUARE,
  },
];

export function GameInfo({ playersCount, currentStep, className }) {
  console.log(` `);
  console.log(`currentStep: ${currentStep}`);
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 grid grid-cols-2 gap-3 justify-between",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          player={player}
          isRight={index % 2 === 1}
          isTimerRunning={player.symbol === currentStep}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ player, isRight, isTimerRunning }) {
  const [seconds, setSeconds] = useState(25);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.floor(seconds % 60)).padStart(2, "0");

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    } else {
      return "text-slate-300";
    }
  };

  useEffect(() => {
    console.log(`useEffect ${player.name} work`);
    if (isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);

      console.log(`useEffect if ${player.name} work`);

      return () => {
        console.log(`useEffect return ${player.name} work`);
        clearInterval(interval);
        setSeconds(25);
      };
    }
  }, [isTimerRunning]);

  return (
    <div className="flex items-center gap-4 start dev">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          avatar={player.avatar}
          name={player.name}
          rate={player.rate}
          className="w-44"
        />
        <div className="h-5 w-5 p-1 bg-white shadow rounded-full absolute -top-1 -left-1">
          <GameSymbol symbol={player.symbol} />
        </div>
      </div>
      <div
        className={clsx("h-8 w-0.5 bg-slate-200", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "text-lg font-semibold",
          isRight && "order-1",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
