import { VariantProps } from 'class-variance-authority';
import * as React from "react";
declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | "success" | "info" | "warning" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
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
declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const AlertDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
export { Alert, AlertTitle, AlertDescription, alertVariants };
//# sourceMappingURL=alert.d.ts.map