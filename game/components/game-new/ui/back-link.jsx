import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 -mb-0.5 text-xs font-normal text-teal-600"
    >
      <p>here must be ArrowLeftIcon</p>
      Back to main
    </Link>
  );
}
