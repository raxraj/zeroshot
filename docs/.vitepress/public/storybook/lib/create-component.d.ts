/**
 * ZeroShot Component Factory
 *
 * Standardizes component creation across the entire library.
 * Every ZeroShot component uses this factory to ensure:
 * - Consistent displayName assignment
 * - Automatic React.memo wrapping for performance
 * - Type-safe forwardRef handling
 * - Uniform className merging via cn()
 */
import * as React from "react";
/**
 * Creates a named, memoized, forward-ref component.
 *
 * @param displayName - The component's display name (shown in React DevTools and error messages)
 * @param render - The render function receiving (props, ref)
 * @returns A memoized forwardRef component with displayName set
 *
 * @example
 * ```tsx
 * const MyButton = createComponent<HTMLButtonElement, MyButtonProps>(
 *   "MyButton",
 *   ({ variant, className, ...props }, ref) => (
 *     <button ref={ref} className={cn(variants({ variant }), className)} {...props} />
 *   )
 * );
 * ```
 */
export declare function createComponent<TElement, TProps extends object>(displayName: string, render: (props: TProps, ref: React.ForwardedRef<TElement>) => React.ReactNode): React.MemoExoticComponent<React.ForwardRefExoticComponent<React.PropsWithoutRef<TProps> & React.RefAttributes<TElement>>>;
/**
 * Creates a simple named component (no ref forwarding needed).
 * Used for layout/wrapper components like DialogHeader, CardFooter, etc.
 *
 * @param displayName - The component's display name
 * @param render - The render function
 * @returns A memoized component with displayName set
 *
 * @example
 * ```tsx
 * const CardHeader = createSimpleComponent<CardHeaderProps>(
 *   "CardHeader",
 *   ({ className, ...props }) => (
 *     <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
 *   )
 * );
 * ```
 */
export declare function createSimpleComponent<TProps extends Record<string, unknown>>(displayName: string, render: React.FC<TProps>): React.MemoExoticComponent<React.FC<TProps>>;
//# sourceMappingURL=create-component.d.ts.map