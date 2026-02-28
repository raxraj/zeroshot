import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | "info" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
declare function Badge({ className, variant, label, dot, removable, onRemove, children, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
//# sourceMappingURL=badge.d.ts.map