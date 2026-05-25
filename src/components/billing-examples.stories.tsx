import type { Meta, StoryObj } from "@storybook/react";
import { CreditMeter } from "./credit-meter";
import { UserCreditBadge } from "./user-credit-badge";
import { PlanBadge } from "./plan-badge";
import { GracePeriodBanner } from "./grace-period-banner";
import { ModelSelector, type ModelOption } from "./model-selector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Separator } from "./separator";
import { TooltipProvider } from "./tooltip";
import { action } from "@storybook/addon-actions";
import * as React from "react";

const models: ModelOption[] = [
  { id: "gpt-4o-mini", displayName: "GPT-4o Mini", creditMultiplier: 1 },
  { id: "gpt-4o", displayName: "GPT-4o", creditMultiplier: 5, locked: true, requiredPlan: "pro_plus" },
];

const meta: Meta = {
  title: "Examples/Billing",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const SettingsDashboard: Story = {
  render: function BillingSettings() {
    const [modelId, setModelId] = React.useState("gpt-4o-mini");
    return (
      <div className="min-h-screen bg-background">
        <GracePeriodBanner
          graceCreditsRemaining={42}
          onContactClick={action("contact")}
          dismissStorageKey="storybook-billing-settings-grace"
        />
        <header className="flex items-center justify-between border-b px-6 py-4">
          <h1 className="text-lg font-semibold">Workspace settings</h1>
          <div className="flex items-center gap-3">
            <UserCreditBadge creditsUsed={180} monthlyCap={250} />
            <PlanBadge plan="pro" onUpgradeClick={action("upgrade")} />
          </div>
        </header>
        <main className="mx-auto grid max-w-3xl gap-6 p-6">
          <Card>
            <CardHeader>
              <CardTitle>Organization credits</CardTitle>
              <CardDescription>Usage for the current billing period</CardDescription>
            </CardHeader>
            <CardContent>
              <CreditMeter
                creditsUsed={820}
                monthlyCredits={1000}
                status="active"
                periodEnd="2026-06-01T00:00:00.000Z"
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Default model</CardTitle>
              <CardDescription>Models outside your plan appear locked</CardDescription>
            </CardHeader>
            <CardContent>
              <ModelSelector
                selectedModelId={modelId}
                onChange={setModelId}
                currentPlan="pro"
                allowedModels={models}
                onUpgradeClick={action("upgrade")}
              />
            </CardContent>
          </Card>
        </main>
      </div>
    );
  },
};

export const AppHeader: Story = {
  render: () => (
    <div className="border-b bg-card">
      <div className="flex items-center justify-between px-6 py-3">
        <span className="font-semibold">Dataworm</span>
        <div className="flex max-w-md flex-1 items-center justify-center px-8">
          <CreditMeter
            className="w-full max-w-sm"
            creditsUsed={720}
            monthlyCredits={1000}
            status="active"
            periodEnd="2026-06-01T00:00:00.000Z"
          />
        </div>
        <div className="flex items-center gap-2">
          <UserCreditBadge creditsUsed={42} monthlyCap={100} />
          <Separator orientation="vertical" className="h-6" />
          <PlanBadge plan="pro_plus" onUpgradeClick={action("upgrade")} />
        </div>
      </div>
    </div>
  ),
};
