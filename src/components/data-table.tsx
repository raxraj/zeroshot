import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table';

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
export function DataTable<T>({
  columns,
  data,
  getRowKey,
  className = '',
  emptyMessage = 'No data available',
}: DataTableProps<T>) {
  const defaultGetRowKey = (row: T, index: number) => {
    return getRowKey ? getRowKey(row, index) : index;
  };

  if (data.length === 0) {
    return (
      <div className="rounded-xl bg-card border border-border p-12 text-center">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`rounded-xl bg-card border border-border overflow-hidden ${className}`}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key} className={column.headerClassName}>
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={defaultGetRowKey(row, rowIndex)}>
              {columns.map((column) => (
                <TableCell key={column.key} className={column.cellClassName}>
                  {column.render(row, rowIndex)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
