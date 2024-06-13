import Link from "next/link";
import { ArrowLeftIcon } from "../game-new/ui/icons/arrow-left-icon";
import { StarIcon } from "../game-new/ui/icons/star-icon";
import { UserIcon } from "../game-new/ui/icons/user-icon";
import { HistoryIcon } from "../game-new/ui/icons/history-icon";

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 -mb-0.5 text-xs font-normal text-teal-600"
      >
        <ArrowLeftIcon />
        Back to main
      </Link>
      <h1 className="text-4xl font-normal leading-tight">Tik tak game</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />
          {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon />1 minute per turn
        </div>
      </div>
    </div>
  );
}
