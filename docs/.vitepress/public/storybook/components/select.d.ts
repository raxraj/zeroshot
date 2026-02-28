import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
/**
 * Option definition for the Select Config API.
 */
export interface SelectOption {
    /** The value submitted when this option is selected */
    value: string;
    /** Display label */
    label: string;
    /** Whether this option is disabled */
    disabled?: boolean;
}
/**
 * Option group definition for the Select Config API.
 */
export interface SelectOptionGroup {
    /** Group label displayed above the options */
    label: string;
    /** Options within this group */
    options: SelectOption[];
}
/**
 * Props for the ZeroShot Select component.
 *
 * @example Compositional API:
 * ```tsx
 * <Select>
 *   <SelectTrigger><SelectValue placeholder="Pick a fruit" /></SelectTrigger>
 *   <SelectContent>
 *     <SelectItem value="apple">Apple</SelectItem>
 *     <SelectItem value="banana">Banana</SelectItem>
 *   </SelectContent>
 * </Select>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Select
 *   placeholder="Pick a fruit"
 *   options={[
 *     { value: "apple", label: "Apple" },
 *     { value: "banana", label: "Banana" },
 *   ]}
 *   value={fruit}
 *   onValueChange={setFruit}
 * />
 * ```
 */
export interface SelectProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root> {
    /**
     * Config API: Flat list of options to render.
     * When provided, auto-generates SelectTrigger, SelectContent, and SelectItems.
     * If `children` is also provided, `children` takes precedence.
     */
    options?: SelectOption[];
    /**
     * Config API: Grouped options. Renders SelectGroup with SelectLabel headers.
     * Mutually exclusive with `options` (groups take precedence).
     */
    groups?: SelectOptionGroup[];
    /**
     * Placeholder text shown when no value is selected.
     * @example <Select placeholder="Choose..." options={options} />
     */
    placeholder?: string;
    /**
     * Label text rendered above the select.
     * @example <Select label="Country" options={countries} />
     */
    label?: string;
    /**
     * Error message displayed below the select.
     * @example <Select label="Country" error="Required" options={countries} />
     */
    error?: string;
    /**
     * Additional className applied to the trigger element.
     */
    triggerClassName?: string;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLButtonElement>>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton, };
//# sourceMappingURL=select.d.ts.map