import type { Meta, StoryObj } from "@storybook/react";

import { RelationshipDiagram } from "./relationship-diagram";

const meta: Meta<typeof RelationshipDiagram> = {
  title: "Components/Data/RelationshipDiagram",
  component: RelationshipDiagram,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RelationshipDiagram>;

export const TwoTables: Story = {
  args: {
    config: {
      tables: [
        {
          name: "Customers",
          tableName: "customers",
          columns: ["id", "name", "email", "segment"],
        },
        {
          name: "Orders",
          tableName: "orders",
          columns: ["id", "customer_id", "amount", "date"],
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
    },
  },
};

export const ThreeTables: Story = {
  args: {
    layout: "vertical",
    config: {
      tables: [
        {
          name: "Customers",
          tableName: "customers",
          columns: ["id", "name", "region"],
        },
        {
          name: "Orders",
          tableName: "orders",
          columns: ["id", "customer_id", "product_id", "amount"],
        },
        {
          name: "Products",
          tableName: "products",
          columns: ["id", "name", "category", "price"],
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
        {
          leftTable: "orders",
          rightTable: "products",
          leftKey: "product_id",
          rightKey: "id",
          joinType: "LEFT",
        },
      ],
    },
  },
};

export const CompositionalApi: Story = {
  render: () => (
    <RelationshipDiagram>
      <RelationshipDiagram.Table name="Users" tableName="users">
        <RelationshipDiagram.Column name="id" highlighted type="uuid" />
        <RelationshipDiagram.Column name="username" type="text" />
        <RelationshipDiagram.Column name="email" type="text" />
      </RelationshipDiagram.Table>

      <RelationshipDiagram.Join
        leftTable="users"
        rightTable="posts"
        leftKey="id"
        rightKey="user_id"
        joinType="INNER"
      />

      <RelationshipDiagram.Table name="Posts" tableName="posts">
        <RelationshipDiagram.Column name="id" type="uuid" />
        <RelationshipDiagram.Column name="user_id" highlighted type="uuid" />
        <RelationshipDiagram.Column name="title" type="text" />
        <RelationshipDiagram.Column name="content" type="json" />
      </RelationshipDiagram.Table>
    </RelationshipDiagram>
  ),
};

