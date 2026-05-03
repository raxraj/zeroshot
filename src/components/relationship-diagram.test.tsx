import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { RelationshipDiagram } from "./relationship-diagram";

describe("RelationshipDiagram", () => {
  it("renders tables and auto-highlights join keys from config", () => {
    render(
      <RelationshipDiagram
        config={{
          tables: [
            {
              name: "Customers",
              tableName: "customers",
              columns: ["id", "name", "email"],
            },
            {
              name: "Orders",
              tableName: "orders",
              columns: ["id", "customer_id", "amount"],
            },
          ],
          joins: [
            {
              leftTable: "customers",
              rightTable: "orders",
              leftKey: "id",
              rightKey: "customer_id",
              joinType: "INNER",
            },
          ],
        }}
      />,
    );

    const customersColumns = within(screen.getByLabelText("Customers columns"));
    const ordersColumns = within(screen.getByLabelText("Orders columns"));

    expect(customersColumns.getByText("id").closest("li")).toHaveAttribute("data-highlighted", "true");
    expect(customersColumns.getByText("name").closest("li")).toHaveAttribute("data-highlighted", "false");
    expect(ordersColumns.getByText("customer_id").closest("li")).toHaveAttribute("data-highlighted", "true");
    expect(screen.getByText("INNER")).toBeInTheDocument();
  });

  it("parses the compositional API", () => {
    render(
      <RelationshipDiagram>
        <RelationshipDiagram.Table name="Users" tableName="users">
          <RelationshipDiagram.Column name="id" highlighted />
          <RelationshipDiagram.Column name="email" />
        </RelationshipDiagram.Table>
        <RelationshipDiagram.Join
          leftTable="users"
          rightTable="profiles"
          leftKey="id"
          rightKey="user_id"
          joinType="LEFT"
        />
        <RelationshipDiagram.Table name="Profiles" tableName="profiles">
          <RelationshipDiagram.Column name="user_id" />
          <RelationshipDiagram.Column name="bio" />
        </RelationshipDiagram.Table>
      </RelationshipDiagram>,
    );

    expect(screen.getByText("Users")).toBeInTheDocument();
    expect(screen.getByText("Profiles")).toBeInTheDocument();
    expect(screen.getByText("LEFT")).toBeInTheDocument();
    expect(screen.getByText("users")).toBeInTheDocument();
    expect(screen.getByText("profiles")).toBeInTheDocument();
  });

  it("supports the vertical layout", () => {
    const { container } = render(
      <RelationshipDiagram
        layout="vertical"
        config={{
          tables: [
            { name: "Customers", tableName: "customers", columns: ["id"] },
            { name: "Orders", tableName: "orders", columns: ["customer_id"] },
          ],
          joins: [
            {
              leftTable: "customers",
              rightTable: "orders",
              leftKey: "id",
              rightKey: "customer_id",
              joinType: "INNER",
            },
          ],
        }}
      />,
    );

    expect(container.firstChild).toHaveAttribute("data-layout", "vertical");
  });

  it("renders unmatched joins in the additional joins section", () => {
    render(
      <RelationshipDiagram
        config={{
          tables: [
            { name: "Customers", tableName: "customers", columns: ["id"] },
            { name: "Orders", tableName: "orders", columns: ["customer_id", "product_id"] },
            { name: "Products", tableName: "products", columns: ["id"] },
          ],
          joins: [
            {
              leftTable: "customers",
              rightTable: "products",
              leftKey: "id",
              rightKey: "id",
              joinType: "FULL",
            },
          ],
        }}
      />,
    );

    expect(screen.getByText("Additional joins")).toBeInTheDocument();
    expect(screen.getByText("FULL")).toBeInTheDocument();
  });
});
