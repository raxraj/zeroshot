import type { Meta, StoryObj } from "@storybook/react";
import { CreditMeter } from "./credit-meter";

const meta: Meta<typeof CreditMeter> = {
  title: "Components/Billing/CreditMeter",
  component: CreditMeter,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    creditsUsed: { control: { type: "number", min: 0 } },
    monthlyCredits: { control: { type: "number", min: 1 } },
    status: {
      control: "select",
      options: ["active", "grace", "blocked", "expired"],
    },
    periodEnd: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CreditMeter>;

export const Active: Story = {
  args: {
    creditsUsed: 450,
    monthlyCredits: 1000,
    status: "active",
    periodEnd: "2026-06-01T00:00:00.000Z",
  },
};

export const HighUsage: Story = {
  args: {
    creditsUsed: 850,
    monthlyCredits: 1000,
    status: "active",
    periodEnd: "2026-06-01T00:00:00.000Z",
  },
};

export const GracePeriod: Story = {
  args: {
    creditsUsed: 1000,
    monthlyCredits: 1000,
    status: "grace",
    periodEnd: "2026-06-01T00:00:00.000Z",
  },
};

export const Blocked: Story = {
  args: {
    creditsUsed: 1000,
    monthlyCredits: 1000,
    status: "blocked",
    periodEnd: "2026-06-01T00:00:00.000Z",
  },
};

export const Expired: Story = {
  args: {
    creditsUsed: 500,
    monthlyCredits: 1000,
    status: "expired",
    periodEnd: "2026-05-01T00:00:00.000Z",
  },
};
