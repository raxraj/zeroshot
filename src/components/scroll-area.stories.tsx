import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/Layout/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-[350px] whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="h-[200px] w-[150px] rounded-md bg-muted shrink-0 flex items-center justify-center">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const WithSeparators: Story = {
  render: () => {
    const tags = Array.from({ length: 50 }).map((_, i, a) => `Tag ${a.length - i}`);

    return (
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
          {tags.map((tag, index) => (
            <div key={tag}>
              <div className="text-sm py-2">{tag}</div>
              {index < tags.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </ScrollArea>
    );
  },
};

export const LongContent: Story = {
  render: () => (
    <ScrollArea className="h-[400px] w-[600px] rounded-md border p-4">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Terms and Conditions</h2>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i}>
            <h3 className="text-lg font-semibold mb-2">{i + 1}. Section {i + 1}</h3>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
