import clsx from "clsx";
import Image from "next/image";
import { useNow } from "../lib/timer";
import { GameSymbol } from "./game-symbol";

export function PlayerInfo({
  isRight,
  avatar,
  name,
  rate,
  symbol,
  timer,
  timerStartAt,
}) {
  const now = useNow(1000, timerStartAt);
  const mills = Math.max(now ? timer - (now - timerStartAt) : timer, 0);
  const seconds = Math.ceil(mills / 1000);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.floor(seconds % 60)).padStart(2, "0");

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (timerStartAt) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    } else {
      return "text-slate-300";
    }
  };

  return (
    <div className="flex items-center gap-4 start">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="flex items-center text-left gap-2.5 text-teal-600 w-44">
          <Image src={avatar} width={48} height={48} alt="avatar" />
          <div className="overflow-hidden">
            <div className="text-lg leading-tight truncate">{name}</div>
            <div className="text-xs text-slate-400 leading-tight">
              Rate: {rate}
            </div>
          </div>
        </div>
        <div className="h-5 w-5 p-1 bg-white shadow rounded-full absolute -top-1 -left-1">
          <GameSymbol symbol={symbol} />
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
