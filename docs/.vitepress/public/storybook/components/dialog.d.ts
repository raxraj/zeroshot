import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
/**
 * Action button definition for the Dialog Config API.
 */
export interface DialogAction {
    /** Button label text */
    label: string;
    /** Click handler */
    onClick?: () => void;
    /** Visual variant: "default" renders primary, "outline" renders secondary */
    variant?: "default" | "outline" | "destructive" | "ghost";
    /** When true, this button also closes the dialog */
    closeOnClick?: boolean;
}
/**
 * Props for the ZeroShot Dialog component.
 *
 * @example Compositional API:
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Edit Profile</DialogTitle>
 *       <DialogDescription>Make changes to your profile.</DialogDescription>
 *     </DialogHeader>
 *     <div>Form fields here...</div>
 *     <DialogFooter>
 *       <Button type="submit">Save</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Dialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Edit Profile"
 *   description="Make changes to your profile."
 *   actions={[
 *     { label: "Cancel", variant: "outline", closeOnClick: true },
 *     { label: "Save", onClick: handleSave },
 *   ]}
 * >
 *   <form>...fields...</form>
 * </Dialog>
 * ```
 */
export interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
    /**
     * Config API: Dialog title text. When provided, auto-renders DialogHeader with DialogTitle.
     */
    title?: string;
    /**
     * Config API: Dialog description text. Renders below the title.
     */
    description?: string;
    /**
     * Config API: Action buttons rendered in the footer.
     * @example actions={[{ label: "OK", onClick: handleOk }]}
     */
    actions?: DialogAction[];
    /**
     * Additional className applied to the DialogContent wrapper.
     */
    contentClassName?: string;
}
declare const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<HTMLDivElement>>;
declare const DialogTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const DialogOverlay: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogContent: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
export { Dialog, DialogPortal, DialogOverlay, DialogClose, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, };
//# sourceMappingURL=dialog.d.ts.map