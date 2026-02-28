export interface DataTableColumn<T> {
    /**
     * Unique key for the column
     */
    key: string;
    /**
     * Header label to display
     */
    header: string;
    /**
     * Optional className for the header cell
     */
    headerClassName?: string;
    /**
     * Optional className for the data cells
     */
    cellClassName?: string;
    /**
     * Render function for the cell content
     */
    render: (row: T, rowIndex: number) => React.ReactNode;
}
export interface DataTableProps<T> {
    /**
     * Array of column definitions
     */
    columns: DataTableColumn<T>[];
    /**
     * Array of data rows
     */
    data: T[];
    /**
     * Optional function to get a unique key for each row
     * Defaults to using the row index
     */
    getRowKey?: (row: T, index: number) => string | number;
    /**
     * Optional className for the table container
     */
    className?: string;
    /**
     * Optional empty state message
     */
    emptyMessage?: string;
}
/**
 * Reusable data table component
 *
 * @example
 * ```tsx
 * <DataTable
 *   columns={[
 *     {
 *       key: 'name',
 *       header: 'Name',
 *       render: (row) => row.name
 *     },
 *     {
 *       key: 'status',
 *       header: 'Status',
 *       render: (row) => <Badge>{row.status}</Badge>
 *     }
 *   ]}
 *   data={items}
 *   getRowKey={(row) => row.id}
 * />
 * ```
 */
export declare function DataTable<T>({ columns, data, getRowKey, className, emptyMessage, }: DataTableProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=data-table.d.ts.map