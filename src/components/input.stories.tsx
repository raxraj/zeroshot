import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { Input } from "./input";
import { Label } from "./label";
import { Search, Mail } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Components/Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithValue: Story = {
  args: {
    value: "Sample text",
    placeholder: "Enter text...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email...",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input placeholder="Search..." className="pl-8" />
    </div>
  ),
};

export const WithSearchIcon: Story = {
  render: () => (
    <div className="relative w-full max-w-sm">
      <Mail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input type="email" placeholder="Email address" className="pl-8" />
    </div>
  ),
};

export const WithInteraction: Story = {
  args: {
    placeholder: "Type something...",
    onChange: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("Type something...");
    
    await userEvent.type(input, "Hello World");
    await expect(input).toHaveValue("Hello World");
    await expect(args.onChange).toHaveBeenCalled();
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="search" placeholder="Search input" />
      <Input type="tel" placeholder="Phone input" />
      <Input type="url" placeholder="URL input" />
    </div>
  ),
  parameters: {
    layout: "centered",
  },
};
