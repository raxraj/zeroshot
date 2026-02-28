/**
 * ZeroShot CopyButton — a button that copies text to clipboard with visual feedback.
 *
 * @example Basic usage:
 * ```tsx
 * <CopyButton text="npm install zero-shot" />
 * ```
 *
 * @example Customized:
 * ```tsx
 * <CopyButton text={apiKey} label="Copy API Key" copiedLabel="Copied!" timeout={3000} />
 * ```
 */
import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CopyButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  /**
   * The text to copy to clipboard when clicked.
   */
  text: string;

  /**
   * Button label shown in the default state.
   * @default "Copy"
   */
  label?: string;

  /**
   * Button label shown after successful copy.
   * @default "Copied!"
   */
  copiedLabel?: string;

  /**
   * Time in ms to show the "copied" state before reverting.
   * @default 2000
   */
  timeout?: number;

  /**
   * Visual variant.
   * @default "outline"
   */
  variant?: "default" | "outline" | "ghost";

  /**
   * Size variant.
   * @default "default"
   */
  size?: "sm" | "default" | "lg" | "icon";

  /**
   * Callback fired after successful copy.
   */
  onCopy?: () => void;
}

const variantClasses: Record<string, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const sizeClasses: Record<string, string> = {
  sm: "h-9 rounded-md px-3 text-xs",
  default: "h-10 px-4 py-2 text-sm",
  lg: "h-11 rounded-md px-8 text-sm",
  icon: "h-10 w-10",
};

export function CopyButton({
  text,
  label = "Copy",
  copiedLabel = "Copied!",
  timeout = 2000,
  variant = "outline",
  size = "default",
  onCopy,
  className,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    onCopy?.();
    setTimeout(() => setCopied(false), timeout);
  }, [text, timeout, onCopy]);

  const isIconOnly = size === "icon";

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      aria-label={copied ? copiedLabel : label}
      {...props}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          {!isIconOnly && <span>{copiedLabel}</span>}
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {!isIconOnly && <span>{label}</span>}
        </>
      )}
    </button>
  );
}
