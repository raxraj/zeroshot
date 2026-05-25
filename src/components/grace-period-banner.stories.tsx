import type { Meta, StoryObj } from "@storybook/react";
import { GracePeriodBanner } from "./grace-period-banner";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof GracePeriodBanner> = {
  title: "Components/Billing/GracePeriodBanner",
  component: GracePeriodBanner,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    graceCreditsRemaining: { control: { type: "number", min: 0 } },
    dismissStorageKey: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div className="w-full">
        <Story />
        <div className="p-8 text-sm text-muted-foreground">
          Page content appears below the banner.
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GracePeriodBanner>;

export const Default: Story = {
  args: {
    graceCreditsRemaining: 120,
    onContactClick: action("contact"),
    dismissStorageKey: "storybook-grace-banner-demo",
  },
};

export const LowGraceCredits: Story = {
  args: {
    graceCreditsRemaining: 5,
    onContactClick: action("contact"),
    dismissStorageKey: "storybook-grace-banner-low",
  },
};
