import { useId } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Shared field wrapper for every form on the site. Renders an <input>,
 * <textarea>, or <select> depending on `type`, with a consistent mono
 * label and an animated inline error message.
 *
 * Accessibility:
 *   - Label is always associated via `htmlFor` / `id`
 *   - Error message is linked via `aria-describedby`
 *   - `aria-invalid` is set on the control when an error exists
 *   - Required indicator is visually marked with * and communicated via label text
 */
export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  options,
  required = false,
  placeholder,
  rows = 4,
  className = "",
  ...rest
}) {
  // Stable unique ID so the error <p> can be linked via aria-describedby
  const errorId = useId();
  const hasError = Boolean(error);

  const baseClasses = [
    "w-full rounded-sm border px-4 py-3 text-sm text-bone placeholder:text-bone-dim/40 backdrop-blur-xl transition-all duration-300 focus:outline-none focus:ring-1",
    hasError
      ? "border-red-hi/60 bg-red/[0.06] focus:border-red-hi focus:ring-red-hi/40"
      : "border-white/15 bg-white/[0.04] focus:border-gold focus:ring-gold/40 hover:border-white/25",
  ].join(" ");

  const sharedProps = {
    id: name,
    name,
    value,
    onChange,
    onBlur,
    "aria-invalid": hasError,
    "aria-describedby": hasError ? errorId : undefined,
    "aria-required": required || undefined,
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-bone-dim"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-hi" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {type === "textarea" ? (
        <textarea
          {...sharedProps}
          placeholder={placeholder}
          rows={rows}
          className={`${baseClasses} resize-none`}
          {...rest}
        />
      ) : type === "select" ? (
        <div className="relative">
          <select
            {...sharedProps}
            className={`${baseClasses} appearance-none pr-10`}
            {...rest}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-surface text-bone">
                {opt.label}
              </option>
            ))}
          </select>
          {/* Custom dropdown caret */}
          <span
            className="pointer-events-none absolute inset-y-0 right-3 flex items-center"
            aria-hidden="true"
          >
            <svg
              className="h-4 w-4 text-bone-dim"
              fill="none"
              viewBox="0 0 16 16"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      ) : (
        <input
          {...sharedProps}
          type={type}
          placeholder={placeholder}
          className={baseClasses}
          {...rest}
        />
      )}

      <AnimatePresence>
        {hasError && (
          <motion.p
            id={errorId}
            role="alert"
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            transition={{ duration: 0.2 }}
            className="font-mono text-[11px] text-red-hi"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
