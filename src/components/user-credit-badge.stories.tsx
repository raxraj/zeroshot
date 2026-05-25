import type { Meta, StoryObj } from "@storybook/react";
import { UserCreditBadge } from "./user-credit-badge";
import { TooltipProvider } from "./tooltip";

const meta: Meta<typeof UserCreditBadge> = {
  title: "Components/Billing/UserCreditBadge",
  component: UserCreditBadge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    creditsUsed: { control: { type: "number", min: 0 } },
    monthlyCap: { control: { type: "number", min: 1 } },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof UserCreditBadge>;

export const Default: Story = {
  args: {
    creditsUsed: 180,
    monthlyCap: 250,
  },
};

export const NearLimit: Story = {
  args: {
    creditsUsed: 210,
    monthlyCap: 250,
  },
};

export const AtLimit: Story = {
  args: {
    creditsUsed: 250,
    monthlyCap: 250,
  },
};

export const OverLimit: Story = {
  args: {
    creditsUsed: 275,
    monthlyCap: 250,
  },
};
