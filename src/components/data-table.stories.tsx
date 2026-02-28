import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./data-table";

const meta: Meta<typeof DataTable> = {
  title: "Components/Display/DataTable",
  component: DataTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable>;

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const columns: import("./data-table").DataTableColumn<User>[] = [
  {
    key: "id",
    header: "ID",
    render: (row) => row.id,
  },
  {
    key: "name",
    header: "Name",
    render: (row) => row.name,
  },
  {
    key: "email",
    header: "Email",
    render: (row) => row.email,
  },
  {
    key: "role",
    header: "Role",
    render: (row) => row.role,
  },
];

const data: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Viewer" },
  { id: 4, name: "Alice Williams", email: "alice@example.com", role: "Editor" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com", role: "Viewer" },
];

export const Default: Story = {
  render: () => (
    <div className="w-[700px]">
      <DataTable columns={columns} data={data} />
    </div>
  ),
};
