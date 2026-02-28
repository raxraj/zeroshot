import * as React from "react";
/**
 * Props for the ZeroShot Textarea component.
 *
 * @example Compositional API:
 * ```tsx
 * <Label htmlFor="bio">Bio</Label>
 * <Textarea id="bio" placeholder="Tell us about yourself..." />
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Textarea label="Bio" placeholder="Tell us about yourself..." maxLength={500} error="Too long" />
 * ```
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * Config API: Renders a label above the textarea.
     * @example <Textarea label="Description" />
     */
    label?: string;
    /**
     * Displays an error message below the textarea with destructive styling.
     * @example <Textarea label="Bio" error="Bio is required" />
     */
    error?: string;
    /**
     * Displays helper text below the textarea.
     * Hidden when `error` is provided.
     * @example <Textarea label="Bio" helperText="Max 500 characters" />
     */
    helperText?: string;
    /**
     * When true and maxLength is set, shows a character counter (e.g., "120/500").
     * @default false
     * @example <Textarea label="Bio" maxLength={500} showCount />
     */
    showCount?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Textarea };
//# sourceMappingURL=textarea.d.ts.map