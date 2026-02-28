/**
 * ZeroShot LoadingOverlay — wraps content with a loading state overlay.
 * Shows either a spinner or skeleton placeholder while data loads.
 *
 * @example Basic usage:
 * ```tsx
 * <LoadingOverlay loading={isLoading}>
 *   <DataTable columns={columns} data={data} />
 * </LoadingOverlay>
 * ```
 *
 * @example With blur:
 * ```tsx
 * <LoadingOverlay loading={isLoading} blur>
 *   <Card title="Dashboard">...</Card>
 * </LoadingOverlay>
 * ```
 *
 * @example With custom spinner:
 * ```tsx
 * <LoadingOverlay loading={isLoading} spinner={<MyCustomSpinner />}>
 *   {content}
 * </LoadingOverlay>
 * ```
 */
import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LoadingOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the loading overlay is visible.
   * @default false
   */
  loading?: boolean;

  /**
   * Apply a blur effect to the underlying content while loading.
   * @default false
   */
  blur?: boolean;

  /**
   * Custom spinner element. Defaults to a rotating Loader2 icon.
   */
  spinner?: React.ReactNode;

  /**
   * Text displayed below the spinner.
   * @example loadingText="Fetching data..."
   */
  loadingText?: string;

  /**
   * When true, shows animated skeleton pulses instead of a spinner overlay.
   * Children are hidden and replaced with skeleton blocks.
   * @default false
   */
  skeleton?: boolean;

  /**
   * Number of skeleton lines to show when `skeleton` is true.
   * @default 3
   */
  skeletonLines?: number;
}

export function LoadingOverlay({
  loading = false,
  blur = false,
  spinner,
  loadingText,
  skeleton = false,
  skeletonLines = 3,
  children,
  className,
  ...props
}: LoadingOverlayProps) {
  if (!loading) {
    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  }

  // Skeleton mode: replace children with skeleton blocks
  if (skeleton) {
    return (
      <div className={cn("space-y-3", className)} {...props}>
        {Array.from({ length: skeletonLines }, (_, i) => (
          <div
            key={i}
            className={cn(
              "h-4 rounded-md bg-muted animate-pulse",
              i === skeletonLines - 1 && "w-3/4", // Last line shorter
            )}
          />
        ))}
      </div>
    );
  }

  // Overlay mode: show spinner on top of blurred/dimmed content
  return (
    <div className={cn("relative", className)} {...props}>
      <div className={cn(blur && "blur-sm", "transition-all pointer-events-none select-none opacity-50")}>
        {children}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        {spinner ?? <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />}
        {loadingText && (
          <p className="text-sm text-muted-foreground">{loadingText}</p>
        )}
      </div>
    </div>
  );
}
