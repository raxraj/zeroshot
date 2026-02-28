import { VariantProps } from 'class-variance-authority';
import * as React from "react";
/**
 * Button variant styles using class-variance-authority.
 * Supports 6 visual variants and 4 size options.
 */
declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "success" | null | undefined;
    size?: "icon" | "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
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
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
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
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, buttonVariants };
//# sourceMappingURL=button.d.ts.map