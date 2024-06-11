import clsx from "clsx";

/**
 * @param {{
 * children: any,
 * className: string,
 * size: "md" | "lg",
 * variant: "primary" | "outline"
 * }} props
 */

export default function UiButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    "transition-colors leading-tight",
    className,
    {
      md: "w-28 text-sm",
      lg: "w-44 text-2xl",
    }[size],
    {
      primary:
        "bg-teal-600 hover:bg-teal-500 px-5 py-2 rounded-lg text-white font-normal",
      outline:
        "border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-2 rounded font-normal text-nowrap",
    }[variant],
  );

  return <button className={buttonClassName}>{children}</button>;
}
