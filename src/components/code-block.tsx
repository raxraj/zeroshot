/**
 * ZeroShot CodeBlock — standalone code display with syntax highlighting, copy button, and language badge.
 * Works without any syntax highlighting library — plain styling that looks great.
 * Optionally integrates with Prism or Shiki if available.
 *
 * @example Basic usage:
 * ```tsx
 * <CodeBlock code={`const x = 42;`} language="typescript" />
 * ```
 *
 * @example With options:
 * ```tsx
 * <CodeBlock
 *   code={source}
 *   language="python"
 *   showLineNumbers
 *   copyable
 *   highlightLines={[3, 7]}
 *   title="example.py"
 * />
 * ```
 */
import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The source code to display.
   */
  code: string;

  /**
   * Programming language for syntax badge and potential highlighting.
   * @example "typescript", "python", "json", "bash"
   */
  language?: string;

  /**
   * Show line numbers in the gutter.
   * @default false
   */
  showLineNumbers?: boolean;

  /**
   * Line numbers to visually highlight (1-indexed).
   * @example highlightLines={[3, 5, 7]}
   */
  highlightLines?: number[];

  /**
   * Show a copy-to-clipboard button.
   * @default true
   */
  copyable?: boolean;

  /**
   * Optional title displayed above the code block (e.g., filename).
   * @example title="index.ts"
   */
  title?: string;

  /**
   * Maximum height of the code area. Scrollable if content exceeds.
   * @example maxHeight="400px"
   */
  maxHeight?: string;
}

export function CodeBlock({
  code,
  language,
  showLineNumbers = false,
  highlightLines = [],
  copyable = true,
  title,
  maxHeight,
  className,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for non-secure contexts
      const textarea = document.createElement("textarea");
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  const lines = code.split("\n");
  // Remove trailing empty line if present
  if (lines[lines.length - 1] === "") lines.pop();

  const highlightSet = new Set(highlightLines);

  return (
    <div
      className={cn(
        "relative rounded-lg border bg-zero-shot-code-bg text-zero-shot-code-foreground text-sm overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Header bar */}
      {(title || language || copyable) && (
        <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
          <div className="flex items-center gap-2">
            {title && <span className="text-xs font-medium text-muted-foreground">{title}</span>}
            {language && !title && (
              <span className="text-xs font-mono text-muted-foreground">{language}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {language && title && (
              <span className="text-xs font-mono text-muted-foreground px-1.5 py-0.5 rounded bg-muted">
                {language}
              </span>
            )}
            {copyable && (
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors rounded p-1 hover:bg-muted"
                aria-label={copied ? "Copied" : "Copy code"}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-success" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Code area */}
      <div className="overflow-x-auto" style={maxHeight ? { maxHeight, overflowY: "auto" } : undefined}>
        <pre className="p-4 m-0">
          <code className="font-mono text-sm leading-relaxed">
            {lines.map((line, i) => {
              const lineNum = i + 1;
              const isHighlighted = highlightSet.has(lineNum);
              return (
                <div
                  key={i}
                  className={cn(
                    "flex",
                    isHighlighted && "bg-accent/30 -mx-4 px-4 border-l-2 border-primary",
                  )}
                >
                  {showLineNumbers && (
                    <span className="select-none text-muted-foreground w-8 shrink-0 text-right mr-4 text-xs leading-relaxed">
                      {lineNum}
                    </span>
                  )}
                  <span className="flex-1 whitespace-pre">{line || "\n"}</span>
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}
