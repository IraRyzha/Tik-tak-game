import Image from "next/image";
import logoSrc from "./logo.svg";
import avatarSrc from "./avatar.png";
import { Profile } from "../profile";
import ArrowDownIcon from "./icons/arrow-down-icon";
import UiButton from "../uikit/ui-button";

export function Header() {
  return (
    <header className="flex items-center h-24 px-8 py-5 bg-white shadow-md">
      <Image src={logoSrc} alt="logo" />
      <div className="h-8 w-0.5 bg-slate-200 mx-6"></div>

      <UiButton size="lg" variant="primary">
        Play
      </UiButton>

      <button className="ml-auto flex items-center gap-2.5 text-teal-600 hover:text-teal-500 transition-colors">
        <Profile avatar={avatarSrc} />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
