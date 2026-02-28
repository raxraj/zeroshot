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
export declare function EmptyState({ icon, title, description, action, children, size, className, ...props }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=empty-state.d.ts.map