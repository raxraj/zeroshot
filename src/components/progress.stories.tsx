import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";
import { useEffect, useState } from "react";

const meta: Meta<typeof Progress> = {
  title: "Components/Display/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "The progress value (0-100)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
    className: "w-[400px]",
  },
};

export const Zero: Story = {
  args: {
    value: 0,
    className: "w-[400px]",
  },
};

export const Complete: Story = {
  args: {
    value: 100,
    className: "w-[400px]",
  },
};

export const WithLabel: Story = {
  render: () => {
    const progress = 60;
    return (
      <div className="w-[400px] space-y-2">
        <div className="flex justify-between text-sm">
          <span>Uploading...</span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    );
  },
};

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 10;
        });
      }, 500);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="w-[400px] space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    );
  },
};

export const Multiple: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Video Processing</span>
          <span className="text-muted-foreground">75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Image Upload</span>
          <span className="text-muted-foreground">45%</span>
        </div>
        <Progress value={45} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Data Sync</span>
          <span className="text-muted-foreground">90%</span>
        </div>
        <Progress value={90} />
      </div>
    </div>
  ),
};
