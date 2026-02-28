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
import { cn } from "@/lib/utils";
import { Send, Loader2, Square, CornerDownLeft } from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────

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

// ─── Helpers ────────────────────────────────────────────────────────

/** Rough token estimate: ~4 chars per token (GPT-3/4 average) */
function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

/** Resolve template with variables */
function resolveTemplate(template: string, variables: Record<string, string> = {}): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, key: string) => {
    return variables[key] ?? match;
  });
}

// ─── Component ──────────────────────────────────────────────────────

export const PromptInput = React.forwardRef<HTMLTextAreaElement, PromptInputProps>(
  (
    {
      onSubmit,
      onCancel,
      loading = false,
      submitKey = "enter",
      showTokenCount = false,
      maxTokens,
      template,
      variables,
      minRows = 1,
      maxRows = 8,
      startAdornment,
      endAdornment,
      placeholder = "Type your prompt...",
      className,
      value: controlledValue,
      defaultValue,
      onChange,
      ...props
    },
    ref,
  ) => {
    const internalRef = React.useRef<HTMLTextAreaElement>(null);
    const textareaRef = (ref as React.RefObject<HTMLTextAreaElement>) ?? internalRef;

    // Controlled or uncontrolled
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = React.useState<string>(() => {
      if (template) return resolveTemplate(template, variables);
      return (defaultValue as string) ?? "";
    });
    const value = isControlled ? String(controlledValue) : internalValue;

    // Update when template/variables change
    React.useEffect(() => {
      if (template && !isControlled) {
        setInternalValue(resolveTemplate(template, variables));
      }
    }, [template, variables, isControlled]);

    // Auto-resize
    const adjustHeight = React.useCallback(() => {
      const el = textareaRef.current;
      if (!el) return;
      el.style.height = "auto";
      const lineHeight = parseInt(getComputedStyle(el).lineHeight || "20", 10);
      const minHeight = lineHeight * minRows;
      const maxHeight = lineHeight * maxRows;
      el.style.height = `${Math.max(minHeight, Math.min(el.scrollHeight, maxHeight))}px`;
    }, [minRows, maxRows, textareaRef]);

    React.useEffect(() => {
      adjustHeight();
    }, [value, adjustHeight]);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!isControlled) {
          setInternalValue(e.target.value);
        }
        onChange?.(e);
      },
      [isControlled, onChange],
    );

    const handleSubmit = React.useCallback(() => {
      const trimmed = value.trim();
      if (!trimmed || loading) return;
      onSubmit?.(trimmed);
      if (!isControlled) {
        setInternalValue("");
      }
    }, [value, loading, onSubmit, isControlled]);

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (submitKey === "enter" && e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSubmit();
        } else if (submitKey === "cmd-enter" && e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          handleSubmit();
        }
      },
      [submitKey, handleSubmit],
    );

    const tokenCount = showTokenCount ? estimateTokens(value) : 0;
    const tokenWarning = maxTokens ? tokenCount > maxTokens * 0.9 : false;
    const tokenError = maxTokens ? tokenCount > maxTokens : false;

    return (
      <div className={cn("relative flex flex-col gap-1", className)}>
        <div className="flex items-end gap-2 rounded-lg border border-input bg-background ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-colors">
          {startAdornment && (
            <div className="flex items-center pl-3 pb-2.5">{startAdornment}</div>
          )}
          <textarea
            ref={textareaRef}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={loading && !onCancel}
            rows={minRows}
            className="flex-1 resize-none bg-transparent px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-[40px]"
            {...props}
          />
          <div className="flex items-center gap-1 pr-2 pb-2">
            {endAdornment}
            {loading && onCancel ? (
              <button
                type="button"
                onClick={onCancel}
                className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors"
                aria-label="Stop generating"
              >
                <Square className="h-3.5 w-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading || !value.trim()}
                className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors"
                aria-label="Send prompt"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Footer: shortcuts hint + token count */}
        <div className="flex items-center justify-between px-1">
          <span className="text-[10px] text-muted-foreground flex items-center gap-1">
            {submitKey === "enter" ? (
              <>
                <CornerDownLeft className="h-2.5 w-2.5" /> to send,{" "}
                <kbd className="text-[10px]">Shift + Enter</kbd> for newline
              </>
            ) : (
              <>
                <kbd className="text-[10px]">{navigator?.platform?.includes("Mac") ? "⌘" : "Ctrl"} + Enter</kbd> to send
              </>
            )}
          </span>
          {showTokenCount && (
            <span
              className={cn(
                "text-[10px] tabular-nums",
                tokenError
                  ? "text-destructive font-medium"
                  : tokenWarning
                    ? "text-warning font-medium"
                    : "text-muted-foreground",
              )}
            >
              ~{tokenCount.toLocaleString()}
              {maxTokens && ` / ${maxTokens.toLocaleString()}`} tokens
            </span>
          )}
        </div>
      </div>
    );
  },
);
PromptInput.displayName = "PromptInput";
