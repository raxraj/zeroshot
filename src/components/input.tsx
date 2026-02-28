import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Props for the ZeroShot Input component.
 *
 * @example Compositional API:
 * ```tsx
 * <div>
 *   <Label htmlFor="email">Email</Label>
 *   <Input id="email" type="email" placeholder="you@example.com" />
 * </div>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Input label="Email" type="email" placeholder="you@example.com" error="Email is required" />
 * ```
 */
export interface InputProps extends React.ComponentProps<"input"> {
  /**
   * Config API: Renders a label above the input.
   * When provided, wraps the input in a container with an auto-generated label.
   * @example <Input label="Username" />
   */
  label?: string;

  /**
   * Displays an error message below the input and applies error styling.
   * @example <Input label="Email" error="Please enter a valid email" />
   */
  error?: string;

  /**
   * Displays a helper/description text below the input.
   * Hidden when `error` is provided (error takes precedence).
   * @example <Input label="Password" helperText="Must be at least 8 characters" />
   */
  helperText?: string;

  /**
   * Content rendered at the start (left) of the input, inside the border.
   * Typically an icon or short text.
   * @example <Input startAdornment={<SearchIcon />} placeholder="Search..." />
   */
  startAdornment?: React.ReactNode;

  /**
   * Content rendered at the end (right) of the input, inside the border.
   * Typically an icon, button, or unit text.
   * @example <Input endAdornment={<span>kg</span>} type="number" />
   */
  endAdornment?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, helperText, startAdornment, endAdornment, id, ...props }, ref) => {
    const inputId = id || (label ? `zero-shot-input-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);
    const hasAdornment = startAdornment || endAdornment;

    const inputElement = hasAdornment ? (
      <div
        className={cn(
          "flex h-10 w-full items-center rounded-md border border-input bg-background ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
          error && "border-destructive focus-within:ring-destructive",
          props.disabled && "cursor-not-allowed opacity-50",
        )}
      >
        {startAdornment && (
          <span className="flex items-center pl-3 text-muted-foreground">{startAdornment}</span>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            "flex h-full w-full bg-transparent px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed md:text-sm",
            startAdornment && "pl-2",
            endAdornment && "pr-2",
            className,
          )}
          ref={ref}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {endAdornment && (
          <span className="flex items-center pr-3 text-muted-foreground">{endAdornment}</span>
        )}
      </div>
    ) : (
      <input
        type={type}
        id={inputId}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          error && "border-destructive focus-visible:ring-destructive",
          className,
        )}
        ref={ref}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
    );

    // Simple mode: no label, no helper, no error — just the raw input
    if (!label && !error && !helperText) {
      return inputElement;
    }

    // Config API mode: wrapped with label + error/helper
    return (
      <div className="grid w-full gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        {inputElement}
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="text-sm text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
