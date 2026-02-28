import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders with default variant", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("renders with destructive variant", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Delete");
  });

  it("renders with outline variant", () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Outline");
  });

  it("can be disabled", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders with small size", () => {
    render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Small");
  });

  it("renders with large size", () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Large");
  });
});
