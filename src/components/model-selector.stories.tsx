import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { ModelSelector, type ModelOption } from "./model-selector";
import { TooltipProvider } from "./tooltip";
import { action } from "@storybook/addon-actions";

const demoModels: ModelOption[] = [
  { id: "gpt-4o-mini", displayName: "GPT-4o Mini", creditMultiplier: 1 },
  {
    id: "gpt-4o",
    displayName: "GPT-4o",
    creditMultiplier: 5,
    locked: true,
    requiredPlan: "pro_plus",
  },
  {
    id: "claude-opus",
    displayName: "Claude Opus",
    creditMultiplier: 8,
    locked: true,
    requiredPlan: "ultimate",
  },
];

const meta: Meta<typeof ModelSelector> = {
  title: "Components/Billing/ModelSelector",
  component: ModelSelector,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="max-w-sm">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ModelSelector>;

export const Default: Story = {
  render: function ModelSelectorDemo() {
    const [modelId, setModelId] = React.useState("gpt-4o-mini");
    return (
      <ModelSelector
        selectedModelId={modelId}
        onChange={(id) => {
          setModelId(id);
          action("model-change")(id);
        }}
        currentPlan="free"
        allowedModels={demoModels}
        onUpgradeClick={action("upgrade")}
      />
    );
  },
};

export const ProPlan: Story = {
  render: function ModelSelectorPro() {
    const [modelId, setModelId] = React.useState("gpt-4o");
    const models: ModelOption[] = [
      { id: "gpt-4o-mini", displayName: "GPT-4o Mini", creditMultiplier: 1 },
      { id: "gpt-4o", displayName: "GPT-4o", creditMultiplier: 5 },
      {
        id: "claude-opus",
        displayName: "Claude Opus",
        creditMultiplier: 8,
        locked: true,
        requiredPlan: "ultimate",
      },
    ];
    return (
      <ModelSelector
        selectedModelId={modelId}
        onChange={setModelId}
        currentPlan="pro_plus"
        allowedModels={models}
        onUpgradeClick={action("upgrade")}
      />
    );
  },
};
