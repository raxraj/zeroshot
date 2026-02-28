import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Button variant styles using class-variance-authority.
 * Supports 6 visual variants and 4 size options.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        success: "bg-success text-success-foreground hover:bg-success/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * Props for the ZeroShot Button component.
 *
 * @example Compositional API (for humans):
 * ```tsx
 * <Button variant="destructive" size="lg" onClick={handleDelete}>
 *   Delete Account
 * </Button>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Button label="Save Changes" variant="default" loading={isSaving} icon={<Save />} />
 * ```
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * When true, delegates rendering to the child element via Radix Slot.
   * Useful for rendering Buttons as links: `<Button asChild><a href="/home">Home</a></Button>`
   * @default false
   */
  asChild?: boolean;

  /**
   * Config API: Text label for the button. When provided, renders as children.
   * If `children` is also provided, `children` takes precedence.
   * @example <Button label="Submit" />
   */
  label?: string;

  /**
   * Shows a loading spinner and disables the button.
   * The button text remains visible but dimmed.
   * @default false
   * @example <Button loading={isSubmitting} label="Save" />
   */
  loading?: boolean;

  /**
   * Icon element to render alongside the label.
   * Position controlled by `iconPosition`.
   * @example <Button icon={<PlusIcon />} label="Add Item" />
   */
  icon?: React.ReactNode;

  /**
   * Position of the icon relative to the label.
   * @default "start"
   */
  iconPosition?: "start" | "end";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      label,
      loading = false,
      icon,
      iconPosition = "start",
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    // Config API: use label as children if no children provided
    const content = children ?? label;

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!loading && icon && iconPosition === "start" && icon}
        {content && <span className={loading ? "opacity-70" : undefined}>{content}</span>}
        {!loading && icon && iconPosition === "end" && icon}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
