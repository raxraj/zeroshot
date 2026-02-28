import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Props for the ZeroShot Textarea component.
 *
 * @example Compositional API:
 * ```tsx
 * <Label htmlFor="bio">Bio</Label>
 * <Textarea id="bio" placeholder="Tell us about yourself..." />
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Textarea label="Bio" placeholder="Tell us about yourself..." maxLength={500} error="Too long" />
 * ```
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Config API: Renders a label above the textarea.
   * @example <Textarea label="Description" />
   */
  label?: string;

  /**
   * Displays an error message below the textarea with destructive styling.
   * @example <Textarea label="Bio" error="Bio is required" />
   */
  error?: string;

  /**
   * Displays helper text below the textarea.
   * Hidden when `error` is provided.
   * @example <Textarea label="Bio" helperText="Max 500 characters" />
   */
  helperText?: string;

  /**
   * When true and maxLength is set, shows a character counter (e.g., "120/500").
   * @default false
   * @example <Textarea label="Bio" maxLength={500} showCount />
   */
  showCount?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, showCount, maxLength, id, value, defaultValue, ...props }, ref) => {
    const textareaId = id || (label ? `zero-shot-textarea-${label.toLowerCase().replace(/\s+/g, "-")}` : undefined);
    const [charCount, setCharCount] = React.useState(() => {
      const initial = (value ?? defaultValue ?? "") as string;
      return initial.length;
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (showCount) {
        setCharCount(e.target.value.length);
      }
      props.onChange?.(e);
    };

    const textareaElement = (
      <textarea
        id={textareaId}
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-destructive focus-visible:ring-destructive",
          className,
        )}
        ref={ref}
        maxLength={maxLength}
        value={value}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        {...props}
        onChange={handleChange}
      />
    );

    // Simple mode: no label, no helper, no error, no count
    if (!label && !error && !helperText && !showCount) {
      return textareaElement;
    }

    return (
      <div className="grid w-full gap-1.5">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        {textareaElement}
        <div className="flex justify-between">
          <div>
            {error && (
              <p id={`${textareaId}-error`} className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
            {!error && helperText && (
              <p id={`${textareaId}-helper`} className="text-sm text-muted-foreground">
                {helperText}
              </p>
            )}
          </div>
          {showCount && maxLength && (
            <span className={cn("text-xs text-muted-foreground", charCount >= maxLength && "text-destructive")}>
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
