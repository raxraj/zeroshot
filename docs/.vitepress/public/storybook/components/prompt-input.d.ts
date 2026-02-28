/**
 * ZeroShot PromptInput — a specialized textarea for AI prompt composition.
 * Auto-resizes, supports Cmd/Ctrl+Enter, optional token counter, and template system.
 *
 * @example Config API:
 * ```tsx
 * <PromptInput
 *   onSubmit={handleSubmit}
 *   placeholder="Ask anything..."
 *   maxTokens={4096}
 *   showTokenCount
 * />
 * ```
 *
 * @example With template:
 * ```tsx
 * <PromptInput
 *   template="Translate the following to {{language}}:\n\n{{text}}"
 *   variables={{ language: "French" }}
 *   onSubmit={handleSubmit}
 * />
 * ```
 */
import * as React from "react";
export interface PromptInputProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onSubmit"> {
    /**
     * Callback when the prompt is submitted.
     * Receives the full prompt text.
     */
    onSubmit?: (prompt: string) => void;
    /**
     * Callback to cancel/abort a running request.
     * When provided, a stop button is shown while loading.
     */
    onCancel?: () => void;
    /**
     * Whether a request is in progress.
     * Shows loading state and disables input.
     * @default false
     */
    loading?: boolean;
    /**
     * Submit shortcut behavior.
     * - "enter": Enter submits, Shift+Enter for newline
     * - "cmd-enter": Cmd/Ctrl+Enter submits, Enter for newline
     * @default "enter"
     */
    submitKey?: "enter" | "cmd-enter";
    /**
     * Show approximate token count.
     * Uses a simple ~4 chars per token heuristic.
     * @default false
     */
    showTokenCount?: boolean;
    /**
     * Maximum tokens allowed. Shows warning when approaching limit.
     * Only relevant when showTokenCount is true.
     */
    maxTokens?: number;
    /**
     * Template string with {{variable}} placeholders.
     * When provided, the textarea is pre-filled and placeholders are highlighted.
     */
    template?: string;
    /**
     * Variables to fill into the template.
     */
    variables?: Record<string, string>;
    /**
     * Minimum number of rows.
     * @default 1
     */
    minRows?: number;
    /**
     * Maximum number of rows before scrolling.
     * @default 8
     */
    maxRows?: number;
    /**
     * Custom prefix element rendered before the textarea (e.g., model selector).
     */
    startAdornment?: React.ReactNode;
    /**
     * Custom suffix element rendered after the textarea but before the submit button.
     */
    endAdornment?: React.ReactNode;
}
export declare const PromptInput: React.ForwardRefExoticComponent<PromptInputProps & React.RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=prompt-input.d.ts.map