import avatarSrc1 from "./ui/images/avatar-1.png";
import avatarSrc2 from "./ui/images/avatar-2.png";
import avatarSrc3 from "./ui/images/avatar-3.png";
import avatarSrc4 from "./ui/images/avatar-4.png";

export const GAME_STEPS = {
  CROSS: "cross",
  ZERO: "zero",
  TRIANGLE: "triangle",
  SGUARE: "square",
};

export const STEP_ORDER = [
  GAME_STEPS.CROSS,
  GAME_STEPS.ZERO,
  GAME_STEPS.TRIANGLE,
  GAME_STEPS.SGUARE,
];

export const PLAYERS = [
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
