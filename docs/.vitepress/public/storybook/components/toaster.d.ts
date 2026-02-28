export type ToasterPosition = "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
export interface ToasterProps {
    /**
     * Position of the toast stack on screen.
     * @default "bottom-right"
     */
    position?: ToasterPosition;
    /**
     * Additional className for the toast container.
     */
    className?: string;
}
export declare function Toaster({ position, className }: ToasterProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=toaster.d.ts.map