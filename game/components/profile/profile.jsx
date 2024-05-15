import clsx from "clsx";
import Image from "next/image";

export function Profile({
  avatar,
  name = "UserName",
  rate = "3874932",
  className,
}) {
  return (
    <div
      className={clsx(
        "flex items-center text-left gap-2.5 text-teal-600",
        className,
      )}
    >
      <Image src={avatar} width={48} height={48} alt="avatar" />
      <div className="overflow-hidden">
        <div className="text-lg leading-tight truncate">{name}</div>
        <div className="text-xs text-slate-400 leading-tight">Rate: {rate}</div>
      </div>
    </div>
  );
}
