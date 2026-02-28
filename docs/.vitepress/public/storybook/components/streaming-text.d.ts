/**
 * ZeroShot StreamingText — renders text that appears character-by-character or word-by-word.
 * The signature component for AI-powered apps that display LLM responses.
 *
 * @example Basic usage:
 * ```tsx
 * <StreamingText text={aiResponse} speed="fast" cursor />
 * ```
 *
 * @example Controlled streaming:
 * ```tsx
 * <StreamingText
 *   text={response}
 *   mode="word"
 *   speed={50}
 *   onComplete={() => setIsStreaming(false)}
 * />
 * ```
 */
import * as React from "react";
/** Speed presets for streaming animations */
type SpeedPreset = "slow" | "normal" | "fast" | "instant";
export interface StreamingTextProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The full text to stream. As this value changes (grows), new characters are animated in.
     * @example text="Hello, I am an AI assistant."
     */
    text: string;
    /**
     * Streaming speed in milliseconds per unit, or a preset name.
     * @default "normal"
     */
    speed?: number | SpeedPreset;
    /**
     * Whether to stream character-by-character or word-by-word.
     * @default "char"
     */
    mode?: "char" | "word";
    /**
     * Show a blinking cursor at the end of streamed text.
     * @default true
     */
    cursor?: boolean;
    /**
     * Callback fired when all text has finished streaming.
     */
    onComplete?: () => void;
    /**
     * When true, displays the full text immediately without animation.
     * Useful for "skip animation" buttons.
     * @default false
     */
    immediate?: boolean;
    /**
     * Element type to render. Defaults to "span" for inline text.
     * @default "span"
     */
    as?: "span" | "p" | "div";
}
export declare function StreamingText({ text, speed, mode, cursor, onComplete, immediate, as: Tag, className, ...props }: StreamingTextProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=streaming-text.d.ts.map