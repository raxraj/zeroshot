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
export declare function CodeBlock({ code, language, showLineNumbers, highlightLines, copyable, title, maxHeight, className, ...props }: CodeBlockProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=code-block.d.ts.map