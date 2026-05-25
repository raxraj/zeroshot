import type { Meta, StoryObj } from "@storybook/react";
import { FeatureGatePrompt } from "./feature-gate-prompt";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof FeatureGatePrompt> = {
  title: "Components/Billing/FeatureGatePrompt",
  component: FeatureGatePrompt,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    feature: {
      control: "select",
      options: ["quirk", "analyst", "web_search", "advanced_model"],
    },
    variant: {
      control: "select",
      options: ["inline", "overlay"],
    },
    currentPlan: { control: "text" },
    requiredPlan: { control: "text" },
  },
  decorators: [
    (Story, context) => (
      <div
        className={
          context.args.variant === "overlay"
            ? "relative h-64 w-full max-w-md rounded-lg border bg-muted/20"
            : "max-w-md"
        }
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FeatureGatePrompt>;

export const Inline: Story = {
  args: {
    feature: "analyst",
    currentPlan: "free",
    requiredPlan: "pro_plus",
    variant: "inline",
    onUpgradeClick: action("upgrade"),
  },
};

export const Overlay: Story = {
  args: {
    feature: "analyst",
    currentPlan: "free",
    requiredPlan: "pro_plus",
    variant: "overlay",
    onUpgradeClick: action("upgrade"),
  },
};

export const WebSearch: Story = {
  args: {
    feature: "web_search",
    currentPlan: "pro",
    requiredPlan: "ultimate",
    variant: "inline",
    onUpgradeClick: action("upgrade"),
  },
};

export const AdvancedModel: Story = {
  args: {
    feature: "advanced_model",
    currentPlan: "free",
    requiredPlan: "pro",
    variant: "inline",
    onUpgradeClick: action("upgrade"),
  },
};
