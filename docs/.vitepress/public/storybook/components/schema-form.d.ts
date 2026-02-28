/**
 * ZeroShot SchemaForm — generates forms from a declarative schema.
 * The ultimate AI-friendly component: LLMs describe the form shape, SchemaForm renders it.
 *
 * @example
 * ```tsx
 * <SchemaForm
 *   schema={[
 *     { name: "email", type: "email", label: "Email", required: true },
 *     { name: "name", type: "text", label: "Full Name" },
 *     { name: "role", type: "select", label: "Role", options: [
 *       { value: "admin", label: "Admin" },
 *       { value: "user", label: "User" },
 *     ]},
 *     { name: "bio", type: "textarea", label: "Bio", placeholder: "Tell us about yourself" },
 *     { name: "notifications", type: "checkbox", label: "Enable notifications" },
 *   ]}
 *   onSubmit={(values) => console.log(values)}
 *   submitLabel="Create Account"
 * />
 * ```
 */
import * as React from "react";
/** A single option for select/radio fields */
export interface SchemaFieldOption {
    value: string;
    label: string;
    disabled?: boolean;
}
/** Validation rules for a field */
export interface SchemaFieldValidation {
    /** Field is required */
    required?: boolean | string;
    /** Minimum length (strings) or value (numbers) */
    min?: number | {
        value: number;
        message: string;
    };
    /** Maximum length (strings) or value (numbers) */
    max?: number | {
        value: number;
        message: string;
    };
    /** Regex pattern string */
    pattern?: string | {
        value: string;
        message: string;
    };
}
/** The supported field types */
export type SchemaFieldType = "text" | "email" | "password" | "number" | "url" | "tel" | "textarea" | "select" | "checkbox" | "radio" | "date" | "hidden";
/** Definition of a single form field */
export interface SchemaFieldDef {
    /** Unique field name (used as the key in the submitted values object) */
    name: string;
    /** Field type */
    type: SchemaFieldType;
    /** Display label */
    label?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Helper text shown below the field */
    helperText?: string;
    /** Default value */
    defaultValue?: string | number | boolean;
    /** Whether the field is required */
    required?: boolean;
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Options for select and radio types */
    options?: SchemaFieldOption[];
    /** Validation rules */
    validation?: SchemaFieldValidation;
    /** Column span (1 or 2) for grid layout */
    colSpan?: 1 | 2;
    /** Maximum length for text/textarea */
    maxLength?: number;
    /** Number of rows for textarea */
    rows?: number;
}
/** A group of fields with an optional title */
export interface SchemaFieldGroup {
    /** Group title */
    title?: string;
    /** Group description */
    description?: string;
    /** Fields in this group */
    fields: SchemaFieldDef[];
}
export interface SchemaFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
    /**
     * Schema describing the form fields.
     * Can be a flat array of fields or grouped fields.
     */
    schema: SchemaFieldDef[] | SchemaFieldGroup[];
    /**
     * Callback when the form is submitted with validated values.
     */
    onSubmit?: (values: Record<string, string | number | boolean>) => void | Promise<void>;
    /**
     * Label for the submit button.
     * @default "Submit"
     */
    submitLabel?: string;
    /**
     * Show a cancel button.
     */
    onCancel?: () => void;
    /**
     * Label for the cancel button.
     * @default "Cancel"
     */
    cancelLabel?: string;
    /**
     * Number of columns for the form layout.
     * @default 1
     */
    columns?: 1 | 2;
    /**
     * Whether a submission is in progress.
     * @default false
     */
    loading?: boolean;
    /**
     * Initial values for the form fields.
     */
    defaultValues?: Record<string, string | number | boolean>;
    /**
     * Whether to show the submit button.
     * @default true
     */
    showSubmit?: boolean;
}
export declare function SchemaForm({ schema, onSubmit, submitLabel, onCancel, cancelLabel, columns, loading, defaultValues: defaultValuesProp, showSubmit, className, ...props }: SchemaFormProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=schema-form.d.ts.map