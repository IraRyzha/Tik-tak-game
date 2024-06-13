import { GAME_STEPS } from "./constants";
import { CrossIcon } from "../game-new/ui/icons/cross-icon";
import { SquareIcon } from "../game-new/ui/icons/square-icon";
import { TriangleIcon } from "../game-new/ui/icons/triangle-icon";
import { ZeroIcon } from "../game-new/ui/icons/zero-icon";

export function GameSymbol({ symbol, className }) {
  const Icon = {
    [GAME_STEPS.CROSS]: CrossIcon,
    [GAME_STEPS.ZERO]: ZeroIcon,
    [GAME_STEPS.TRIANGLE]: TriangleIcon,
    [GAME_STEPS.SGUARE]: SquareIcon,
  }[symbol];
  return <Icon className={className} />;
}
