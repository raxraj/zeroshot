import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";
import { useState } from "react";

const meta: Meta<typeof Slider> = {
  title: "Components/Forms/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the slider is disabled",
    },
    min: {
      control: "number",
      description: "Minimum value",
    },
    max: {
      control: "number",
      description: "Maximum value",
    },
    step: {
      control: "number",
      description: "Step increment",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => (
    <div className="w-[400px]">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState([50]);
    return (
      <div className="w-[400px] space-y-4">
        <div className="flex justify-between">
          <label className="text-sm font-medium">Volume</label>
          <span className="text-sm text-muted-foreground">{value[0]}%</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
    );
  },
};

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState([25, 75]);
    return (
      <div className="w-[400px] space-y-4">
        <div className="flex justify-between">
          <label className="text-sm font-medium">Price Range</label>
          <span className="text-sm text-muted-foreground">
            ${value[0]} - ${value[1]}
          </span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[400px]">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
};

export const CustomStep: Story = {
  render: () => {
    const [value, setValue] = useState([50]);
    return (
      <div className="w-[400px] space-y-4">
        <div className="flex justify-between">
          <label className="text-sm font-medium">Value (Step: 10)</label>
          <span className="text-sm text-muted-foreground">{value[0]}</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={10} />
      </div>
    );
  },
};

export const MinMax: Story = {
  render: () => {
    const [value, setValue] = useState([50]);
    return (
      <div className="w-[400px] space-y-4">
        <div className="flex justify-between">
          <label className="text-sm font-medium">Temperature (20-100°C)</label>
          <span className="text-sm text-muted-foreground">{value[0]}°C</span>
        </div>
        <Slider value={value} onValueChange={setValue} min={20} max={100} step={5} />
      </div>
    );
  },
};
