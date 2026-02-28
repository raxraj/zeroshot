import type { Meta, StoryObj } from "@storybook/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";

const meta: Meta<typeof Sheet> = {
  title: "Components/Overlays/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Navigate through the application</SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Projects
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Team
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Settings
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Notification Center</SheetTitle>
          <SheetDescription>You have 3 unread notifications</SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4">
          <div className="p-4 border rounded-lg">
            <p className="font-medium">New message from John</p>
            <p className="text-sm text-muted-foreground">2 minutes ago</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">Your report is ready</p>
            <p className="text-sm text-muted-foreground">1 hour ago</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="font-medium">System update completed</p>
            <p className="text-sm text-muted-foreground">3 hours ago</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
          <SheetDescription>Perform common actions quickly</SheetDescription>
        </SheetHeader>
        <div className="grid grid-cols-3 gap-4 py-4">
          <Button>New Project</Button>
          <Button>Upload</Button>
          <Button>Share</Button>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

export const WithScrollableContent: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">View Details</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Product Details</SheetTitle>
          <SheetDescription>Complete information about this product</SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <p className="font-medium">Section {i + 1}</p>
              <p className="text-sm text-muted-foreground">
                This is some content for section {i + 1}. You can add any content here.
              </p>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  ),
};
