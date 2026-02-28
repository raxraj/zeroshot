/**
 * ZeroShot — The AI-native React component library
 *
 * Every component supports a Dual API:
 *  1. Compositional (sub-components) for humans writing JSX
 *  2. Config (declarative props) for LLMs generating code
 *
 * @packageDocumentation
 */

// ─── Styles ─────────────────────────────────────────────────────────
import "./styles.css";

// ─── Core utilities ─────────────────────────────────────────────────
export { cn } from "./lib/utils";
export { createComponent, createSimpleComponent } from "./lib/create-component";

// ─── Manifest ───────────────────────────────────────────────────────
export { zeroShotManifest } from "./manifest";

// ─── Types ──────────────────────────────────────────────────────────
export type {
  ZeroShotPropDef,
  ZeroShotVariantDef,
  ZeroShotExample,
  ZeroShotCategory,
  ZeroShotComponentDef,
  ZeroShotManifest,
} from "./types/manifest";

// ─── Hooks ──────────────────────────────────────────────────────────
export { useIsMobile } from "./hooks/use-mobile";
export { ToastProvider, useToast } from "./hooks/use-toast";
export type { ToastVariant, ToastData, ToastInstance, ToastContextValue } from "./hooks/use-toast";

// ═══════════════════════════════════════════════════════════════════
//  AI-Native Components — the ZeroShot differentiators
// ═══════════════════════════════════════════════════════════════════

// ChatThread — full conversation UI
export { ChatThread, ChatBubble, ChatInput, ChatTimestamp } from "./components/chat-thread";
export type {
  ChatMessage,
  ChatThreadProps,
  ChatBubbleProps,
  ChatInputProps,
  ChatTimestampProps,
} from "./components/chat-thread";

// StreamingText — typewriter/streaming text display
export { StreamingText } from "./components/streaming-text";
export type { StreamingTextProps } from "./components/streaming-text";

// CodeBlock — code display with line numbers + copy
export { CodeBlock } from "./components/code-block";
export type { CodeBlockProps } from "./components/code-block";

// CopyButton — clipboard copy with feedback
export { CopyButton } from "./components/copy-button";
export type { CopyButtonProps } from "./components/copy-button";

// MarkdownView — lightweight zero-dep Markdown renderer
export { MarkdownView } from "./components/markdown-view";
export type { MarkdownViewProps } from "./components/markdown-view";

// PromptInput — specialized AI prompt textarea
export { PromptInput } from "./components/prompt-input";
export type { PromptInputProps } from "./components/prompt-input";

// SchemaForm — generate forms from declarative schema
export { SchemaForm } from "./components/schema-form";
export type {
  SchemaFormProps,
  SchemaFieldDef,
  SchemaFieldGroup,
  SchemaFieldOption,
  SchemaFieldType,
  SchemaFieldValidation,
} from "./components/schema-form";

// EmptyState — placeholder for empty data
export { EmptyState } from "./components/empty-state";
export type { EmptyStateProps } from "./components/empty-state";

// LoadingOverlay — loading state overlay
export { LoadingOverlay } from "./components/loading-overlay";
export type { LoadingOverlayProps } from "./components/loading-overlay";

// ═══════════════════════════════════════════════════════════════════
//  Core UI Components (Dual API enhanced)
// ═══════════════════════════════════════════════════════════════════

// Accordion
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/accordion";
export type { AccordionItemDef } from "./components/accordion";

// Alert
export { Alert, AlertTitle, AlertDescription, alertVariants } from "./components/alert";

// Badge
export { Badge, badgeVariants } from "./components/badge";
export type { BadgeProps } from "./components/badge";

// Button
export { Button, buttonVariants } from "./components/button";
export type { ButtonProps } from "./components/button";

// Card
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./components/card";
export type { CardProps } from "./components/card";

// Dialog
export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/dialog";
export type { DialogProps, DialogAction } from "./components/dialog";

// Input
export { Input } from "./components/input";
export type { InputProps } from "./components/input";

// Select
export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "./components/select";
export type { SelectProps, SelectOption, SelectOptionGroup } from "./components/select";

// Tabs
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/tabs";
export type { TabItem } from "./components/tabs";

// Textarea
export { Textarea } from "./components/textarea";
export type { TextareaProps } from "./components/textarea";

// Toaster
export { Toaster } from "./components/toaster";
export type { ToasterProps, ToasterPosition } from "./components/toaster";

// ═══════════════════════════════════════════════════════════════════
//  Foundation Components
// ═══════════════════════════════════════════════════════════════════

// AlertDialog
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./components/alert-dialog";

// Avatar
export { Avatar, AvatarImage, AvatarFallback } from "./components/avatar";

// Breadcrumb
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "./components/breadcrumb";

// Checkbox
export { Checkbox } from "./components/checkbox";

// Command
export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "./components/command";

// DataTable
export { DataTable } from "./components/data-table";
export type { DataTableColumn, DataTableProps } from "./components/data-table";

// Drawer
export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "./components/drawer";

// DropdownMenu
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./components/dropdown-menu";

// Form (react-hook-form integration)
export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from "./components/form";

// HoverCard
export { HoverCard, HoverCardTrigger, HoverCardContent } from "./components/hover-card";

// Label
export { Label } from "./components/label";

// Pagination
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/pagination";

// Popover
export { Popover, PopoverTrigger, PopoverContent } from "./components/popover";

// Progress
export { Progress } from "./components/progress";

// RadioGroup
export { RadioGroup, RadioGroupItem } from "./components/radio-group";

// Resizable
export { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "./components/resizable";

// ScrollArea
export { ScrollArea, ScrollBar } from "./components/scroll-area";

// Separator
export { Separator } from "./components/separator";

// Sheet
export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "./components/sheet";

// Sidebar
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "./components/sidebar";

// Skeleton
export { Skeleton } from "./components/skeleton";

// Slider
export { Slider } from "./components/slider";

// Switch
export { Switch } from "./components/switch";

// Table
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./components/table";

// Toggle
export { Toggle, toggleVariants } from "./components/toggle";

// ToggleGroup
export { ToggleGroup, ToggleGroupItem } from "./components/toggle-group";

// Tooltip
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./components/tooltip";
