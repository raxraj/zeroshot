import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
/**
 * A single item definition for the Accordion Config API.
 */
export interface AccordionItemDef {
    /** Unique value identifier for this item */
    value: string;
    /** Text or element to show in the trigger/header */
    trigger: React.ReactNode;
    /** Content revealed when expanded */
    content: React.ReactNode;
    /** Whether this item is disabled */
    disabled?: boolean;
}
/**
 * Props for the ZeroShot Accordion component.
 *
 * @example Compositional API:
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>What is ZeroShot?</AccordionTrigger>
 *     <AccordionContent>An AI-native component library.</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Accordion
 *   type="single"
 *   collapsible
 *   items={[
 *     { value: "q1", trigger: "What is ZeroShot?", content: "An AI-native component library." },
 *     { value: "q2", trigger: "Is it free?", content: "Yes, MIT licensed." },
 *   ]}
 * />
 * ```
 */
export type AccordionProps = (React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>) & {
    /**
     * Config API: Array of accordion items to render.
     * When provided, auto-generates AccordionItem, AccordionTrigger, and AccordionContent.
     * If `children` is also provided, `children` takes precedence.
     */
    items?: AccordionItemDef[];
};
declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
//# sourceMappingURL=accordion.d.ts.map