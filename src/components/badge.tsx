import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        success: "border-transparent bg-success text-success-foreground hover:bg-success/80",
        warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/**
 * Props for the ZeroShot Badge component.
 *
 * @example Basic usage:
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Badge label="Active" variant="success" dot removable onRemove={handleRemove} />
 * ```
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  /**
   * Config API: Text label for the badge.
   * If `children` is also provided, `children` takes precedence.
   * @example <Badge label="New" variant="info" />
   */
  label?: string;

  /**
   * Shows a small colored dot indicator before the text.
   * Useful for status indicators.
   * @default false
   * @example <Badge label="Online" variant="success" dot />
   */
  dot?: boolean;

  /**
   * When true, shows an X button to remove/dismiss the badge.
   * @default false
   * @example <Badge label="React" removable onRemove={() => removeTag("React")} />
   */
  removable?: boolean;

  /**
   * Callback fired when the remove button is clicked.
   * Only relevant when `removable` is true.
   */
  onRemove?: () => void;
}

function Badge({ className, variant, label, dot, removable, onRemove, children, ...props }: BadgeProps) {
  const content = children ?? label;

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {dot && (
        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      )}
      {content}
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-1 -mr-1 h-3.5 w-3.5 rounded-full hover:bg-foreground/20 inline-flex items-center justify-center"
          aria-label={`Remove ${typeof content === "string" ? content : "badge"}`}
        >
          <X className="h-2.5 w-2.5" />
        </button>
      )}
    </div>
  );
}

export { Badge, badgeVariants };
