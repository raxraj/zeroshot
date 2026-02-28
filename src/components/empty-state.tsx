/**
 * ZeroShot EmptyState — placeholder for empty data states, search results, errors, etc.
 * Every app needs one. ZeroShot ships it as a first-class component.
 *
 * @example Basic usage:
 * ```tsx
 * <EmptyState
 *   icon={<InboxIcon />}
 *   title="No messages"
 *   description="You don't have any messages yet."
 * />
 * ```
 *
 * @example With action:
 * ```tsx
 * <EmptyState
 *   icon={<SearchIcon />}
 *   title="No results found"
 *   description="Try adjusting your search or filters."
 *   action={{ label: "Clear filters", onClick: handleClear }}
 * />
 * ```
 */
import * as React from "react";
import { cn } from "@/lib/utils";
import { Inbox } from "lucide-react";

export interface EmptyStateAction {
  /** Button label */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Visual variant */
  variant?: "default" | "outline" | "ghost";
}

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Icon displayed above the title. Defaults to an Inbox icon.
   * @example icon={<SearchIcon className="h-12 w-12" />}
   */
  icon?: React.ReactNode;

  /**
   * Title text.
   * @example title="No results found"
   */
  title: string;

  /**
   * Description text displayed below the title.
   * @example description="Try adjusting your search filters."
   */
  description?: string;

  /**
   * Config API: A single action button rendered below the description.
   * @example action={{ label: "Create new", onClick: handleCreate }}
   */
  action?: EmptyStateAction;

  /**
   * Additional content rendered below the action (or description if no action).
   * Useful for custom CTAs, links, or illustrations.
   */
  children?: React.ReactNode;

  /**
   * Visual size.
   * @default "default"
   */
  size?: "sm" | "default" | "lg";
}

const sizeClasses = {
  sm: { container: "py-6 px-4", icon: "mb-2", title: "text-sm", description: "text-xs" },
  default: { container: "py-10 px-6", icon: "mb-4", title: "text-lg", description: "text-sm" },
  lg: { container: "py-16 px-8", icon: "mb-6", title: "text-xl", description: "text-base" },
};

const actionVariantClasses: Record<string, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

export function EmptyState({
  icon,
  title,
  description,
  action,
  children,
  size = "default",
  className,
  ...props
}: EmptyStateProps) {
  const s = sizeClasses[size];

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center",
        s.container,
        className,
      )}
      {...props}
    >
      <div className={cn("text-muted-foreground", s.icon)}>
        {icon ?? <Inbox className={size === "sm" ? "h-8 w-8" : size === "lg" ? "h-16 w-16" : "h-12 w-12"} />}
      </div>
      <h3 className={cn("font-semibold text-foreground", s.title)}>{title}</h3>
      {description && (
        <p className={cn("mt-1 text-muted-foreground max-w-sm", s.description)}>{description}</p>
      )}
      {action && (
        <button
          onClick={action.onClick}
          className={cn(
            "mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2",
            actionVariantClasses[action.variant ?? "default"],
          )}
        >
          {action.label}
        </button>
      )}
      {children}
    </div>
  );
}
