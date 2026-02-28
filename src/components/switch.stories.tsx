import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import { Switch } from "./switch";
import { Label } from "./label";

const meta: Meta<typeof Switch> = {
  title: "Components/Forms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-center justify-between space-x-4 w-[350px]">
      <div className="space-y-0.5">
        <Label htmlFor="marketing">Marketing emails</Label>
        <p className="text-sm text-muted-foreground">
          Receive emails about new products and features.
        </p>
      </div>
      <Switch id="marketing" />
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-y-4 w-[350px]">
      <div className="flex items-center justify-between">
        <Label htmlFor="s1">Notifications</Label>
        <Switch id="s1" />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="s2">Email Updates</Label>
        <Switch id="s2" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="s3">SMS Alerts</Label>
        <Switch id="s3" />
      </div>
    </div>
  ),
};

export const WithInteraction: Story = {
  args: {
    onCheckedChange: fn(),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const switchElement = canvas.getByRole("switch");
    
    await userEvent.click(switchElement);
    await expect(args.onCheckedChange).toHaveBeenCalledWith(true);
    
    await userEvent.click(switchElement);
    await expect(args.onCheckedChange).toHaveBeenCalledWith(false);
  },
};
