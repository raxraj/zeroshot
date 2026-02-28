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
export declare function LoadingOverlay({ loading, blur, spinner, loadingText, skeleton, skeletonLines, children, className, ...props }: LoadingOverlayProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=loading-overlay.d.ts.map