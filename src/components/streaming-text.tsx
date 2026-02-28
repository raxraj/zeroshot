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
import { cn } from "@/lib/utils";

/** Speed presets for streaming animations */
type SpeedPreset = "slow" | "normal" | "fast" | "instant";

const speedMs: Record<SpeedPreset, number> = {
  slow: 60,
  normal: 30,
  fast: 15,
  instant: 0,
};

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

export function StreamingText({
  text,
  speed = "normal",
  mode = "char",
  cursor = true,
  onComplete,
  immediate = false,
  as: Tag = "span",
  className,
  ...props
}: StreamingTextProps) {
  const [displayedLength, setDisplayedLength] = React.useState(0);
  const [isComplete, setIsComplete] = React.useState(false);
  const prevTextRef = React.useRef("");
  const rafRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const speedValue = typeof speed === "string" ? speedMs[speed] : speed;

  // Split text into units (chars or words)
  const units = React.useMemo(() => {
    if (mode === "word") {
      // Split keeping whitespace attached to the preceding word
      return text.match(/\S+\s*/g) || [];
    }
    return text.split("");
  }, [text, mode]);

  // Reset or extend when text changes
  React.useEffect(() => {
    if (immediate) {
      setDisplayedLength(units.length);
      setIsComplete(true);
      return;
    }

    // If text grew (streaming in), start from where we were
    if (text.startsWith(prevTextRef.current)) {
      // Continue from current position
    } else {
      // Text changed entirely — reset
      setDisplayedLength(0);
      setIsComplete(false);
    }
    prevTextRef.current = text;
  }, [text, immediate, units.length]);

  // Animate
  React.useEffect(() => {
    if (immediate || displayedLength >= units.length) {
      if (displayedLength >= units.length && !isComplete) {
        setIsComplete(true);
        onComplete?.();
      }
      return;
    }

    if (speedValue === 0) {
      setDisplayedLength(units.length);
      return;
    }

    rafRef.current = setTimeout(() => {
      setDisplayedLength((prev) => Math.min(prev + 1, units.length));
    }, speedValue);

    return () => {
      if (rafRef.current) clearTimeout(rafRef.current);
    };
  }, [displayedLength, units.length, speedValue, immediate, isComplete, onComplete]);

  const displayedText = units.slice(0, displayedLength).join("");
  const showCursor = cursor && !isComplete;

  return (
    <Tag className={cn("whitespace-pre-wrap", className)} {...props}>
      {displayedText}
      {showCursor && (
        <span
          className="inline-block w-[2px] h-[1em] bg-current align-text-bottom animate-zero-shot-cursor ml-0.5"
          aria-hidden="true"
        />
      )}
    </Tag>
  );
}
