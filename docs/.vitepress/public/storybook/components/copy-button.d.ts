/**
 * ZeroShot CopyButton — a button that copies text to clipboard with visual feedback.
 *
 * @example Basic usage:
 * ```tsx
 * <CopyButton text="npm install zero-shot" />
 * ```
 *
 * @example Customized:
 * ```tsx
 * <CopyButton text={apiKey} label="Copy API Key" copiedLabel="Copied!" timeout={3000} />
 * ```
 */
import * as React from "react";
export interface CopyButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    /**
     * The text to copy to clipboard when clicked.
     */
    text: string;
    /**
     * Button label shown in the default state.
     * @default "Copy"
     */
    label?: string;
    /**
     * Button label shown after successful copy.
     * @default "Copied!"
     */
    copiedLabel?: string;
    /**
     * Time in ms to show the "copied" state before reverting.
     * @default 2000
     */
    timeout?: number;
    /**
     * Visual variant.
     * @default "outline"
     */
    variant?: "default" | "outline" | "ghost";
    /**
     * Size variant.
     * @default "default"
     */
    size?: "sm" | "default" | "lg" | "icon";
    /**
     * Callback fired after successful copy.
     */
    onCopy?: () => void;
}
export declare function CopyButton({ text, label, copiedLabel, timeout, variant, size, onCopy, className, ...props }: CopyButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=copy-button.d.ts.map