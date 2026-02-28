import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from "lucide-react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success: "border-success/50 text-success dark:border-success [&>svg]:text-success",
        warning: "border-warning/50 text-warning dark:border-warning [&>svg]:text-warning",
        info: "border-info/50 text-info dark:border-info [&>svg]:text-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

/** Icon mapping: auto-selects the right icon based on variant */
const variantIcons: Record<string, React.ReactNode> = {
  default: <Info className="h-4 w-4" />,
  destructive: <AlertCircle className="h-4 w-4" />,
  success: <CheckCircle2 className="h-4 w-4" />,
  warning: <AlertTriangle className="h-4 w-4" />,
  info: <Info className="h-4 w-4" />,
};

/**
 * Props for the ZeroShot Alert component.
 *
 * @example Compositional API:
 * ```tsx
 * <Alert variant="destructive">
 *   <AlertCircle className="h-4 w-4" />
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>Something went wrong.</AlertDescription>
 * </Alert>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Alert variant="destructive" title="Error" description="Something went wrong." closable />
 * ```
 */
export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  /**
   * Config API: Alert title text.
   * When provided, auto-renders an AlertTitle with appropriate icon.
   * @example <Alert variant="success" title="Saved!" />
   */
  title?: string;

  /**
   * Config API: Alert description text.
   * @example <Alert variant="info" title="Note" description="This action is irreversible." />
   */
  description?: string;

  /**
   * Custom icon to override the auto-selected variant icon.
   * Only used in Config API mode (when `title` is provided).
   * @example <Alert variant="info" title="Tip" icon={<Lightbulb />} />
   */
  icon?: React.ReactNode;

  /**
   * When true, renders a close button in the top-right corner.
   * @default false
   */
  closable?: boolean;

  /**
   * Callback fired when the close button is clicked.
   * Only relevant when `closable` is true.
   */
  onClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, description, icon, closable, onClose, children, ...props }, ref) => {
    // Config API mode: title triggers auto-structure
    if (title && !children) {
      const autoIcon = icon ?? variantIcons[variant || "default"];
      return (
        <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
          {autoIcon}
          <div>
            <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>
            {description && <div className="text-sm [&_p]:leading-relaxed">{description}</div>}
          </div>
          {closable && (
            <button
              onClick={onClose}
              className="absolute right-2 top-2 rounded-sm p-1 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Close alert"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      );
    }

    // Compositional API mode
    return (
      <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props}>
        {children}
        {closable && (
          <button
            onClick={onClose}
            className="absolute right-2 top-2 rounded-sm p-1 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Close alert"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    );
  },
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
  ),
);
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
