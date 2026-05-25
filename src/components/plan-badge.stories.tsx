import type { Meta, StoryObj } from "@storybook/react";
import { PlanBadge } from "./plan-badge";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof PlanBadge> = {
  title: "Components/Billing/PlanBadge",
  component: PlanBadge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    plan: {
      control: "select",
      options: ["free", "pro", "pro_plus", "ultimate"],
    },
    interactive: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof PlanBadge>;

export const Free: Story = {
  args: {
    plan: "free",
    onUpgradeClick: action("upgrade"),
  },
};

export const Pro: Story = {
  args: {
    plan: "pro",
    onUpgradeClick: action("upgrade"),
  },
};

export const ProPlus: Story = {
  args: {
    plan: "pro_plus",
    onUpgradeClick: action("upgrade"),
  },
};

export const Ultimate: Story = {
  args: {
    plan: "ultimate",
    onUpgradeClick: action("upgrade"),
  },
};

export const StaticLabel: Story = {
  args: {
    plan: "pro_plus",
    interactive: false,
  },
};

export const AllPlans: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <PlanBadge plan="free" onUpgradeClick={action("upgrade-free")} />
      <PlanBadge plan="pro" onUpgradeClick={action("upgrade-pro")} />
      <PlanBadge plan="pro_plus" onUpgradeClick={action("upgrade-pro-plus")} />
      <PlanBadge plan="ultimate" onUpgradeClick={action("upgrade-ultimate")} />
    </div>
  ),
};
