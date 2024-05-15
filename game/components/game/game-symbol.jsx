import { GAME_STEPS } from "./constants";
import { CrossIcon } from "./icons/cross-icon";
import { SquareIcon } from "./icons/square-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { ZeroIcon } from "./icons/zero-icon";

export function GameSymbol({ symbol, className }) {
  const Icon = {
    [GAME_STEPS.CROSS]: CrossIcon,
    [GAME_STEPS.ZERO]: ZeroIcon,
    [GAME_STEPS.TRIANGLE]: TriangleIcon,
    [GAME_STEPS.SGUARE]: SquareIcon,
  }[symbol];
  return <Icon className={className} />;
}
