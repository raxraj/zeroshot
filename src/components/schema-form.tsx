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
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Select } from "./select";
import { Button } from "./button";
import { Label } from "./label";
import { Loader2 } from "lucide-react";

// ─── Schema Types ───────────────────────────────────────────────────

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
  min?: number | { value: number; message: string };
  /** Maximum length (strings) or value (numbers) */
  max?: number | { value: number; message: string };
  /** Regex pattern string */
  pattern?: string | { value: string; message: string };
}

/** The supported field types */
export type SchemaFieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "url"
  | "tel"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "date"
  | "hidden";

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

// ─── SchemaForm Props ───────────────────────────────────────────────

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

// ─── Validation ─────────────────────────────────────────────────────

function validateField(
  field: SchemaFieldDef,
  value: string | number | boolean,
): string | null {
  const strValue = String(value);

  // Required check
  if (field.required || field.validation?.required) {
    if (field.type === "checkbox") {
      if (value !== true) {
        return typeof field.validation?.required === "string"
          ? field.validation.required
          : `${field.label ?? field.name} is required`;
      }
    } else if (!strValue.trim()) {
      return typeof field.validation?.required === "string"
        ? field.validation.required
        : `${field.label ?? field.name} is required`;
    }
  }

  if (!strValue.trim()) return null; // Skip other validations if empty and not required

  // Email
  if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(strValue)) {
    return "Please enter a valid email address";
  }

  // URL
  if (field.type === "url") {
    try {
      new URL(strValue);
    } catch {
      return "Please enter a valid URL";
    }
  }

  // Pattern
  if (field.validation?.pattern) {
    const pattern =
      typeof field.validation.pattern === "string"
        ? field.validation.pattern
        : field.validation.pattern.value;
    const message =
      typeof field.validation.pattern === "string"
        ? `${field.label ?? field.name} is invalid`
        : field.validation.pattern.message;
    if (!new RegExp(pattern).test(strValue)) {
      return message;
    }
  }

  // Min
  if (field.validation?.min !== undefined) {
    const minVal = typeof field.validation.min === "number" ? field.validation.min : field.validation.min.value;
    const minMsg = typeof field.validation.min === "number" ? undefined : field.validation.min.message;
    if (field.type === "number") {
      if (Number(strValue) < minVal) {
        return minMsg ?? `Minimum value is ${minVal}`;
      }
    } else {
      if (strValue.length < minVal) {
        return minMsg ?? `Minimum length is ${minVal}`;
      }
    }
  }

  // Max
  if (field.validation?.max !== undefined) {
    const maxVal = typeof field.validation.max === "number" ? field.validation.max : field.validation.max.value;
    const maxMsg = typeof field.validation.max === "number" ? undefined : field.validation.max.message;
    if (field.type === "number") {
      if (Number(strValue) > maxVal) {
        return maxMsg ?? `Maximum value is ${maxVal}`;
      }
    } else {
      if (strValue.length > maxVal) {
        return maxMsg ?? `Maximum length is ${maxVal}`;
      }
    }
  }

  return null;
}

// ─── Field Renderer ─────────────────────────────────────────────────

interface FieldRendererProps {
  field: SchemaFieldDef;
  value: string | number | boolean;
  error: string | null;
  onChange: (value: string | number | boolean) => void;
}

function FieldRenderer({ field, value, error, onChange }: FieldRendererProps) {
  if (field.type === "hidden") {
    return <input type="hidden" name={field.name} value={String(value)} />;
  }

  if (field.type === "checkbox") {
    return (
      <div className="flex items-center gap-2 py-2">
        <input
          type="checkbox"
          id={field.name}
          checked={Boolean(value)}
          onChange={(e) => onChange(e.target.checked)}
          disabled={field.disabled}
          className="h-4 w-4 rounded border-input"
        />
        {field.label && (
          <Label htmlFor={field.name} className="text-sm font-normal">
            {field.label}
            {field.required && <span className="text-destructive ml-0.5">*</span>}
          </Label>
        )}
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    );
  }

  if (field.type === "radio" && field.options) {
    return (
      <div className="space-y-2">
        {field.label && (
          <Label className="text-sm font-medium">
            {field.label}
            {field.required && <span className="text-destructive ml-0.5">*</span>}
          </Label>
        )}
        <div className="space-y-1.5">
          {field.options.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name={field.name}
                value={opt.value}
                checked={value === opt.value}
                onChange={(e) => onChange(e.target.value)}
                disabled={field.disabled || opt.disabled}
                className="h-4 w-4 border-input"
              />
              {opt.label}
            </label>
          ))}
        </div>
        {field.helperText && !error && (
          <p className="text-xs text-muted-foreground">{field.helperText}</p>
        )}
        {error && <p className="text-xs text-destructive">{error}</p>}
      </div>
    );
  }

  if (field.type === "select" && field.options) {
    return (
      <Select
        label={field.label ? `${field.label}${field.required ? " *" : ""}` : undefined}
        options={field.options}
        value={String(value)}
        onValueChange={(v) => onChange(v)}
        placeholder={field.placeholder ?? `Select ${field.label ?? field.name}...`}
        error={error ?? undefined}
        disabled={field.disabled}
      />
    );
  }

  if (field.type === "textarea") {
    return (
      <Textarea
        label={field.label ? `${field.label}${field.required ? " *" : ""}` : undefined}
        placeholder={field.placeholder}
        value={String(value)}
        onChange={(e) => onChange(e.target.value)}
        error={error ?? undefined}
        helperText={field.helperText}
        disabled={field.disabled}
        maxLength={field.maxLength}
        showCount={!!field.maxLength}
        rows={field.rows}
      />
    );
  }

  // Default: text, email, password, number, url, tel, date
  return (
    <Input
      type={field.type}
      label={field.label ? `${field.label}${field.required ? " *" : ""}` : undefined}
      placeholder={field.placeholder}
      value={String(value)}
      onChange={(e) => {
        const v = field.type === "number" ? Number(e.target.value) : e.target.value;
        onChange(v);
      }}
      error={error ?? undefined}
      helperText={field.helperText}
      disabled={field.disabled}
      maxLength={field.maxLength}
    />
  );
}

// ─── Helpers ────────────────────────────────────────────────────────

function isGrouped(schema: SchemaFieldDef[] | SchemaFieldGroup[]): schema is SchemaFieldGroup[] {
  return schema.length > 0 && "fields" in schema[0];
}

function flattenSchema(schema: SchemaFieldDef[] | SchemaFieldGroup[]): SchemaFieldDef[] {
  if (isGrouped(schema)) {
    return schema.flatMap((g) => g.fields);
  }
  return schema;
}

function getDefaultValues(
  fields: SchemaFieldDef[],
  overrides: Record<string, string | number | boolean> = {},
): Record<string, string | number | boolean> {
  const values: Record<string, string | number | boolean> = {};
  for (const field of fields) {
    if (overrides[field.name] !== undefined) {
      values[field.name] = overrides[field.name];
    } else if (field.defaultValue !== undefined) {
      values[field.name] = field.defaultValue;
    } else if (field.type === "checkbox") {
      values[field.name] = false;
    } else if (field.type === "number") {
      values[field.name] = "";
    } else {
      values[field.name] = "";
    }
  }
  return values;
}

// ─── SchemaForm ─────────────────────────────────────────────────────

export function SchemaForm({
  schema,
  onSubmit,
  submitLabel = "Submit",
  onCancel,
  cancelLabel = "Cancel",
  columns = 1,
  loading = false,
  defaultValues: defaultValuesProp,
  showSubmit = true,
  className,
  ...props
}: SchemaFormProps) {
  const allFields = React.useMemo(() => flattenSchema(schema), [schema]);
  const [values, setValues] = React.useState<Record<string, string | number | boolean>>(() =>
    getDefaultValues(allFields, defaultValuesProp),
  );
  const [errors, setErrors] = React.useState<Record<string, string | null>>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const setValue = React.useCallback(
    (name: string, value: string | number | boolean) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      setTouched((prev) => ({ ...prev, [name]: true }));
      // Clear error on change
      setErrors((prev) => {
        if (!prev[name]) return prev;
        return { ...prev, [name]: null };
      });
    },
    [],
  );

  const validateAll = React.useCallback((): boolean => {
    const newErrors: Record<string, string | null> = {};
    let hasError = false;
    for (const field of allFields) {
      const error = validateField(field, values[field.name]);
      newErrors[field.name] = error;
      if (error) hasError = true;
    }
    setErrors(newErrors);
    return !hasError;
  }, [allFields, values]);

  const handleSubmit = React.useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateAll()) return;

      setIsSubmitting(true);
      try {
        await onSubmit?.(values);
      } finally {
        setIsSubmitting(false);
      }
    },
    [validateAll, onSubmit, values],
  );

  const busy = loading || isSubmitting;

  const renderFields = (fields: SchemaFieldDef[]) => (
    <div
      className={cn(
        "grid gap-4",
        columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
      )}
    >
      {fields.map((field) => (
        <div
          key={field.name}
          className={cn(field.colSpan === 2 && columns === 2 && "sm:col-span-2")}
        >
          <FieldRenderer
            field={field}
            value={values[field.name]}
            error={touched[field.name] ? (errors[field.name] ?? null) : null}
            onChange={(v) => setValue(field.name, v)}
          />
        </div>
      ))}
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("space-y-6", className)}
      noValidate
      {...props}
    >
      {isGrouped(schema) ? (
        schema.map((group, i) => (
          <fieldset key={i} className="space-y-4">
            {group.title && (
              <legend className="text-base font-semibold">{group.title}</legend>
            )}
            {group.description && (
              <p className="text-sm text-muted-foreground -mt-2">
                {group.description}
              </p>
            )}
            {renderFields(group.fields)}
          </fieldset>
        ))
      ) : (
        renderFields(schema)
      )}

      {showSubmit && (
        <div className="flex items-center gap-3 pt-2">
          <Button type="submit" loading={busy} disabled={busy}>
            {submitLabel}
          </Button>
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel} disabled={busy}>
              {cancelLabel}
            </Button>
          )}
        </div>
      )}
    </form>
  );
}
