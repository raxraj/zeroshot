import * as React from "react";
/**
 * Props for the ZeroShot Input component.
 *
 * @example Compositional API:
 * ```tsx
 * <div>
 *   <Label htmlFor="email">Email</Label>
 *   <Input id="email" type="email" placeholder="you@example.com" />
 * </div>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Input label="Email" type="email" placeholder="you@example.com" error="Email is required" />
 * ```
 */
export interface InputProps extends React.ComponentProps<"input"> {
    /**
     * Config API: Renders a label above the input.
     * When provided, wraps the input in a container with an auto-generated label.
     * @example <Input label="Username" />
     */
    label?: string;
    /**
     * Displays an error message below the input and applies error styling.
     * @example <Input label="Email" error="Please enter a valid email" />
     */
    error?: string;
    /**
     * Displays a helper/description text below the input.
     * Hidden when `error` is provided (error takes precedence).
     * @example <Input label="Password" helperText="Must be at least 8 characters" />
     */
    helperText?: string;
    /**
     * Content rendered at the start (left) of the input, inside the border.
     * Typically an icon or short text.
     * @example <Input startAdornment={<SearchIcon />} placeholder="Search..." />
     */
    startAdornment?: React.ReactNode;
    /**
     * Content rendered at the end (right) of the input, inside the border.
     * Typically an icon, button, or unit text.
     * @example <Input endAdornment={<span>kg</span>} type="number" />
     */
    endAdornment?: React.ReactNode;
}
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export { Input };
//# sourceMappingURL=input.d.ts.map