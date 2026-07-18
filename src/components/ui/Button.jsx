import { forwardRef } from "react";
import { motion } from "framer-motion";

const VARIANTS = {
  primary:
    "bg-gold text-ink hover:bg-gold-hi shadow-[0_2px_12px_rgba(198,161,91,0.25)] hover:shadow-[0_4px_20px_rgba(198,161,91,0.4)]",
  outline:
    "border border-bone/30 text-bone hover:border-gold hover:text-gold hover:shadow-[0_0_0_1px_rgba(198,161,91,0.2)]",
  ghost: "text-bone hover:text-gold",
};

const SIZES = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/**
 * Shared CTA button. Renders an <a> when `href` is provided, otherwise a
 * <button>. Uses Framer Motion for a subtle press/hover response.
 *
 * Props:
 *   href      — renders an <a> tag (internal or external link)
 *   as        — override the element type ("button" | "a")
 *   variant   — "primary" | "outline" | "ghost"
 *   size      — "sm" | "md" | "lg"
 *   icon      — Lucide icon component rendered after the label
 *   disabled  — disables interaction and adds aria-disabled
 */
const Button = forwardRef(
  (
    {
      as,
      href,
      variant = "primary",
      size = "md",
      className = "",
      children,
      icon: Icon,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const Component = motion[href || as === "a" ? "a" : "button"];
    const classes = [
      "inline-flex items-center justify-center gap-2 rounded-sm font-mono uppercase tracking-[0.15em] font-semibold transition-all duration-300",
      VARIANTS[variant],
      SIZES[size],
      disabled && "pointer-events-none opacity-50",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <Component
        ref={ref}
        href={href}
        whileHover={disabled ? {} : { y: -2 }}
        whileTap={disabled ? {} : { y: 0, scale: 0.97 }}
        transition={{ duration: 0.18 }}
        className={classes}
        aria-disabled={disabled || undefined}
        {...props}
      >
        {children}
        {Icon && <Icon className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />}
      </Component>
    );
  }
);

Button.displayName = "Button";
export default Button;
