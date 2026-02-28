/**
 * ZeroShot Component Manifest Types
 *
 * Machine-readable metadata for every component in the library.
 * Designed to be injected into LLM system prompts so AI assistants
 * can generate correct ZeroShot code without hallucinating APIs.
 *
 * @example Generating context for an LLM:
 * ```ts
 * import manifest from "zero-shot/manifest";
 * const systemPrompt = `Use these components:\n${JSON.stringify(manifest)}`;
 * ```
 */
/** Describes a single prop on a component */
export interface ZeroShotPropDef {
    /** Prop name, e.g. "variant" */
    readonly name: string;
    /** TypeScript type as a string, e.g. '"default" | "destructive" | "outline"' */
    readonly type: string;
    /** Whether the prop is required */
    readonly required: boolean;
    /** Default value as a string, or undefined if no default */
    readonly default?: string;
    /** Default value (alias for `default`) */
    readonly defaultValue?: string;
    /** Human-readable description of what this prop does */
    readonly description: string;
}
/** Describes a variant option (e.g., variant="destructive") */
export interface ZeroShotVariantDef {
    /** Variant prop name, e.g. "variant" or "size" */
    readonly name?: string;
    /** Variant prop name (alias) */
    readonly prop?: string;
    /** Available values */
    readonly values: readonly string[];
    /** Default value */
    readonly default?: string;
}
/** A usage example — both compositional and config modes */
export interface ZeroShotExample {
    /** Short label, e.g. "Basic usage" */
    readonly label?: string;
    /** Short title, e.g. "Basic usage" */
    readonly title?: string;
    /** Which API mode this example demonstrates */
    readonly mode?: "compositional" | "config" | "both";
    /** JSX code as a string */
    readonly code: string;
}
/** Component category for organization */
export type ZeroShotCategory = "primitive" | "layout" | "feedback" | "overlay" | "navigation" | "data" | "ai" | "form";
/** Full manifest entry for a single component */
export interface ZeroShotComponentDef {
    /** Component display name, e.g. "Button" */
    readonly name: string;
    /** Human-readable description */
    readonly description: string;
    /** Category for grouping */
    readonly category: ZeroShotCategory;
    /** Whether this component supports the declarative config API */
    readonly hasConfigApi?: boolean;
    /** All props */
    readonly props?: readonly ZeroShotPropDef[];
    /** Variant definitions (subset of props that use cva) */
    readonly variants?: readonly ZeroShotVariantDef[];
    /** Sub-components (e.g., DialogHeader, DialogFooter) */
    readonly subComponents?: readonly string[];
    /** Usage examples */
    readonly examples?: readonly ZeroShotExample[];
    /** npm import path */
    readonly importPath: string;
}
/** The complete manifest for the entire ZeroShot library */
export interface ZeroShotManifest {
    /** Library name */
    readonly name: string;
    /** Library version */
    readonly version: string;
    /** Human-readable description */
    readonly description: string;
    /** All component definitions */
    readonly components: readonly ZeroShotComponentDef[];
    /** Global design tokens available via CSS variables */
    readonly tokens?: readonly string[];
}
//# sourceMappingURL=manifest.d.ts.map