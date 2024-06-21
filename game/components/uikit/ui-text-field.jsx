/**
 * @param {{
 * label?: string,
 * helperText?: string,
 * errorText?: string,
 * className?: string,
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 */

import clsx from "clsx";

export default function UiTextField({
  label,
  helperText,
  errorText,
  required,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      {label && (
        <label
          for="example2"
          class={clsx(
            "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5",
            required && "after:text-orange-600 after:content-['*']",
          )}
        >
          {label}
        </label>
      )}
      <input
        type="email"
        id="example2"
        required={required}
        class={clsx(
          `px-3 py-2 leading-tight outline-none border transition-colors
        block w-full rounded-md border-slate-200 shadow-sm 
        focus:border-teal-600 focus:ring focus:ring-teal-600/20 focus:ring-opacity-50 
        disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
        `,
          errorText
            ? "focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600"
            : "focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-200",
        )}
        placeholder="you@email.com"
        {...inputProps}
      />
      {(errorText || helperText) && (
        <p
          class={clsx(
            "mt-1 text-sm ",
            errorText ? "text-orange-600" : "text-slate-400",
          )}
        >
          {errorText ? errorText : helperText}
        </p>
      )}
    </div>
  );
}
