import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";

export function BackLink() {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 -mb-0.5 text-xs font-normal text-teal-600"
    >
      <ArrowLeftIcon />
      Back to main
    </Link>
  );
}
