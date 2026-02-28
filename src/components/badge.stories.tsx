import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";
import { CheckCircle, XCircle, AlertCircle, Info } from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "Components/Display/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>
        <CheckCircle className="w-3 h-3 mr-1" />
        Success
      </Badge>
      <Badge variant="destructive">
        <XCircle className="w-3 h-3 mr-1" />
        Error
      </Badge>
      <Badge variant="secondary">
        <AlertCircle className="w-3 h-3 mr-1" />
        Warning
      </Badge>
      <Badge variant="outline">
        <Info className="w-3 h-3 mr-1" />
        Info
      </Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="destructive">Inactive</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};
