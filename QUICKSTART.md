# ZeroShot — Quick Start Guide

Quick reference for developers working with ZeroShot.

## 🎯 Project Structure

```
zero-shot/
├── .storybook/           # Storybook configuration
├── src/
│   ├── components/       # 50+ UI components (Button, Input, Card, etc.)
│   ├── hooks/            # React hooks (use-toast, use-mobile)
│   ├── lib/              # Utilities (cn function for classnames)
│   ├── test/             # Test setup and utilities
│   ├── types/            # TypeScript types (manifest schema)
│   ├── index.ts          # Main export file
│   ├── manifest.ts       # Machine-readable component catalog
│   └── styles.css        # Global styles with CSS variables
├── dist/                 # Build output (generated)
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Build configuration
├── tsconfig.json         # TypeScript configuration
├── vitest.config.ts      # Test configuration
├── README.md             # Full documentation
└── PUBLISHING.md         # Publishing guide
```

## 🚀 Common Commands

```bash
# Install dependencies
npm install

# Development (watch mode)
npm run dev

# Build the library
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint

# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## 📦 Build Output

After running `npm run build`, the following files are generated in `dist/`:

- `index.mjs` — ES Module bundle
- `index.js` — CommonJS bundle
- `index.d.ts` — TypeScript type definitions
- `style.css` — Compiled CSS (importable as `zero-shot/styles.css`)
- `zero-shot-manifest.json` — Machine-readable component catalog for LLM tooling

## 🔧 Key Files

### package.json
- **name**: `zero-shot`
- **version**: `0.1.0`
- **main**: `./dist/index.js` (CommonJS)
- **module**: `./dist/index.mjs` (ES Module)
- **types**: `./dist/index.d.ts`
- **exports**: `.` (ESM/CJS/types), `./styles.css`, `./manifest` (JSON)

### vite.config.ts
- Configured for library mode
- Uses React SWC plugin for fast builds
- Generates both ESM and CJS formats
- Externalizes React and ReactDOM

### src/index.ts
- Main entry point
- Exports all components
- Exports utility functions (cn)
- Exports hooks (useToast, toast)

## 📝 Adding New Components

1. Create component file in `src/components/`
2. Add export to `src/index.ts`
3. Create test file: `component-name.test.tsx`
4. Create story file: `component-name.stories.tsx`
5. Run tests: `npm test`
6. Build: `npm run build`

### Example Component Structure

```tsx
// src/components/my-component.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface MyComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary";
}

export const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("my-component", className)}
        {...props}
      />
    );
  }
);
MyComponent.displayName = "MyComponent";
```

## 🧪 Testing

Tests use Vitest + React Testing Library:

```tsx
// src/components/my-component.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyComponent } from "./my-component";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent>Hello</MyComponent>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
```

## 📖 Storybook

Create stories to document component usage:

```tsx
// src/components/my-component.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "./my-component";

const meta: Meta<typeof MyComponent> = {
  title: "Components/MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: {
    children: "My Component",
  },
};
```

## 🎨 Styling

Components use:
- **Tailwind CSS** for utility classes
- **CSS Variables** for theming
- **cn()** utility function for conditional classes (from class-variance-authority + tailwind-merge)

### Theme Variables

Defined in `src/styles.css`:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* etc. */
}

.dark {
  --background: 222.2 84% 4.9%;
  /* etc. */
}
```

## 📚 Using the Library in Another Project

1. Install:
   ```bash
   npm install zero-shot
   ```

2. Import components and styles:
   ```tsx
   import { Button, Card, Input } from 'zero-shot';
   import 'zero-shot/styles.css';
   ```

3. (Optional) Import the manifest for LLM tooling:
   ```ts
   import manifest from 'zero-shot/manifest';
   ```

4. Configure Tailwind (if using):
   ```js
   // tailwind.config.js
   module.exports = {
     content: [
       './src/**/*.{js,jsx,ts,tsx}',
       './node_modules/zero-shot/**/*.{js,mjs}',
     ],
   };
   ```

## 🔍 Troubleshooting

### Build Errors

**Problem**: Import path errors
- **Solution**: Make sure all imports use `@/` prefix for internal paths

**Problem**: TypeScript errors
- **Solution**: Run `npm run build` to see full error output

### Test Failures

**Problem**: Component not rendering
- **Solution**: Check that `src/test/setup.ts` is being loaded

### Storybook Issues

**Problem**: Components not showing
- **Solution**: Check `.storybook/main.ts` stories glob pattern

## 📦 Components Included

### Form Components
Button, Input, Textarea, Label, Checkbox, Radio, Switch, Select, Slider, Form

### Layout Components
Card, Separator, ScrollArea, ResizablePanel, Tabs

### Feedback Components
Alert, Toast/Toaster, Progress, Skeleton, Badge

### Overlay Components
Dialog, Sheet, Drawer, Popover, HoverCard, Tooltip, AlertDialog

### Navigation Components
NavigationMenu, Menubar, DropdownMenu, ContextMenu, Breadcrumb, Pagination

### Data Display Components
Table, DataTable, Avatar, Accordion

### Utilities
Command, Collapsible, Toggle, ToggleGroup

## 🔗 Key Dependencies

- **React 18.3.1** - UI library
- **Radix UI** - Accessible component primitives
- **Tailwind CSS** - Utility-first styling
- **class-variance-authority** - Component variants
- **Vite** - Build tool
- **Vitest** - Testing framework
- **Storybook** - Documentation

## 📄 Documentation Files

- **README.md** - Complete user documentation
- **PUBLISHING.md** - Publishing and CI/CD guide
- **QUICKSTART.md** - This file, quick reference
- **.storybook/** - Interactive component documentation

## 🎓 Best Practices

1. **Always add tests** for new components
2. **Create stories** for all components
3. **Use TypeScript** with proper types
4. **Follow existing patterns** in component structure
5. **Use the cn() utility** for combining classnames
6. **Export from index.ts** for all public APIs
7. **Keep components simple** and focused
8. **Document props** with TypeScript interfaces

## 🚀 Next Steps

1. Run Storybook to explore components: `npm run storybook`
2. Read the full README.md for detailed usage
3. Check PUBLISHING.md before publishing
4. Add more stories and tests as needed
5. Consider adding visual regression tests with Chromatic

---

For more information, see README.md or visit Storybook at http://localhost:6006
