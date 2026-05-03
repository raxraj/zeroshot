import * as React from "react";
import { Database, Link2 } from "lucide-react";

import { Badge } from "@/components/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { cn } from "@/lib/cn";

export type RelationshipDiagramLayout = "horizontal" | "vertical";
export type RelationshipDiagramJoinType = "INNER" | "LEFT" | "RIGHT" | "FULL";

export interface RelationshipDiagramColumnConfig {
  name: string;
  highlighted?: boolean;
  type?: string;
}

export interface RelationshipDiagramTableConfig {
  name: string;
  tableName: string;
  columns: Array<string | RelationshipDiagramColumnConfig>;
}

export interface RelationshipDiagramJoinConfig {
  leftTable: string;
  rightTable: string;
  leftKey: string;
  rightKey: string;
  joinType: RelationshipDiagramJoinType;
}

export interface RelationshipDiagramConfig {
  tables: RelationshipDiagramTableConfig[];
  joins: RelationshipDiagramJoinConfig[];
}

export interface RelationshipDiagramProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: RelationshipDiagramConfig;
  children?: React.ReactNode;
  layout?: RelationshipDiagramLayout;
}

export interface RelationshipDiagramTableProps {
  name: string;
  tableName: string;
  children?: React.ReactNode;
}

export interface RelationshipDiagramColumnProps {
  name: string;
  highlighted?: boolean;
  type?: string;
}

export interface RelationshipDiagramJoinProps {
  leftTable: string;
  rightTable: string;
  leftKey: string;
  rightKey: string;
  joinType: RelationshipDiagramJoinType;
}

interface NormalizedColumn {
  name: string;
  highlighted?: boolean;
  type?: string;
}

interface NormalizedTable {
  name: string;
  tableName: string;
  columns: NormalizedColumn[];
}

interface RelationshipDiagramComponent
  extends React.ForwardRefExoticComponent<RelationshipDiagramProps & React.RefAttributes<HTMLDivElement>> {
  Table: React.FC<RelationshipDiagramTableProps>;
  Column: React.FC<RelationshipDiagramColumnProps>;
  Join: React.FC<RelationshipDiagramJoinProps>;
}

const RelationshipDiagramTableMarker: React.FC<RelationshipDiagramTableProps> = () => null;
RelationshipDiagramTableMarker.displayName = "RelationshipDiagram.Table";

const RelationshipDiagramColumnMarker: React.FC<RelationshipDiagramColumnProps> = () => null;
RelationshipDiagramColumnMarker.displayName = "RelationshipDiagram.Column";

const RelationshipDiagramJoinMarker: React.FC<RelationshipDiagramJoinProps> = () => null;
RelationshipDiagramJoinMarker.displayName = "RelationshipDiagram.Join";

function normalizeColumn(column: string | RelationshipDiagramColumnConfig): NormalizedColumn {
  return typeof column === "string" ? { name: column } : column;
}

function isElementOfType<T>(node: React.ReactNode, component: React.ComponentType<T>): node is React.ReactElement<T> {
  return React.isValidElement(node) && node.type === component;
}

function parseChildren(children: React.ReactNode): RelationshipDiagramConfig {
  const tables: RelationshipDiagramTableConfig[] = [];
  const joins: RelationshipDiagramJoinConfig[] = [];

  React.Children.forEach(children, (child) => {
    if (isElementOfType(child, RelationshipDiagramTableMarker)) {
      const columns: RelationshipDiagramColumnConfig[] = [];

      React.Children.forEach(child.props.children, (columnChild) => {
        if (isElementOfType(columnChild, RelationshipDiagramColumnMarker)) {
          columns.push({
            name: columnChild.props.name,
            highlighted: columnChild.props.highlighted,
            type: columnChild.props.type,
          });
        }
      });

      tables.push({
        name: child.props.name,
        tableName: child.props.tableName,
        columns,
      });
      return;
    }

    if (isElementOfType(child, RelationshipDiagramJoinMarker)) {
      joins.push({
        leftTable: child.props.leftTable,
        rightTable: child.props.rightTable,
        leftKey: child.props.leftKey,
        rightKey: child.props.rightKey,
        joinType: child.props.joinType,
      });
    }
  });

  return { tables, joins };
}

function normalizeConfig(config: RelationshipDiagramConfig): {
  tables: NormalizedTable[];
  joins: RelationshipDiagramJoinConfig[];
} {
  return {
    tables: config.tables.map((table) => ({
      name: table.name,
      tableName: table.tableName,
      columns: table.columns.map(normalizeColumn),
    })),
    joins: config.joins,
  };
}

function getJoinKeys(tableName: string, joins: RelationshipDiagramJoinConfig[]) {
  const keys = new Set<string>();

  joins.forEach((join) => {
    if (join.leftTable === tableName) {
      keys.add(join.leftKey);
    }
    if (join.rightTable === tableName) {
      keys.add(join.rightKey);
    }
  });

  return keys;
}

function getJoinDirection(join: RelationshipDiagramJoinConfig, leftTableName: string) {
  return join.leftTable === leftTableName ? "left-to-right" : "right-to-left";
}

function getJoinsBetween(
  joins: RelationshipDiagramJoinConfig[],
  leftTableName: string,
  rightTableName: string,
) {
  return joins.filter(
    (join) =>
      (join.leftTable === leftTableName && join.rightTable === rightTableName) ||
      (join.leftTable === rightTableName && join.rightTable === leftTableName),
  );
}

function getUnpairedJoins(
  joins: RelationshipDiagramJoinConfig[],
  tables: NormalizedTable[],
) {
  const pairedJoinKeys = new Set<string>();

  for (let index = 0; index < tables.length - 1; index += 1) {
    const pairJoins = getJoinsBetween(joins, tables[index].tableName, tables[index + 1].tableName);
    pairJoins.forEach((join) => {
      pairedJoinKeys.add(`${join.leftTable}:${join.rightTable}:${join.leftKey}:${join.rightKey}:${join.joinType}`);
    });
  }

  return joins.filter(
    (join) => !pairedJoinKeys.has(`${join.leftTable}:${join.rightTable}:${join.leftKey}:${join.rightKey}:${join.joinType}`),
  );
}

function JoinSummary({
  join,
  leftTableName,
  compact = false,
}: {
  join: RelationshipDiagramJoinConfig;
  leftTableName: string;
  compact?: boolean;
}) {
  const direction = getJoinDirection(join, leftTableName);
  const arrow =
    direction === "left-to-right"
      ? compact
        ? "->"
        : "→"
      : compact
        ? "<-"
        : "←";

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 text-xs text-muted-foreground shadow-sm",
        compact && "justify-center",
      )}
    >
      <Badge variant="outline" className="rounded-full px-2 py-0 text-[10px] font-semibold tracking-[0.18em]">
        {join.joinType}
      </Badge>
      <span className="font-mono">
        {join.leftKey} {arrow} {join.rightKey}
      </span>
    </div>
  );
}

function TableCard({
  table,
  joins,
}: {
  table: NormalizedTable;
  joins: RelationshipDiagramJoinConfig[];
}) {
  const joinKeys = getJoinKeys(table.tableName, joins);

  return (
    <Card className="w-full min-w-0 border-border/80 bg-card/95 shadow-sm">
      <CardHeader className="space-y-3 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-lg">{table.name}</CardTitle>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{table.tableName}</p>
          </div>
          <div className="rounded-full border border-border/80 bg-muted/70 p-2 text-muted-foreground">
            <Database className="h-4 w-4" aria-hidden="true" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2" aria-label={`${table.name} columns`}>
          {table.columns.map((column) => {
            const isJoinKey = column.highlighted || joinKeys.has(column.name);

            return (
              <li
                key={column.name}
                data-highlighted={isJoinKey ? "true" : "false"}
                className={cn(
                  "flex items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm transition-colors",
                  isJoinKey
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-border/70 bg-background/70 text-foreground",
                )}
              >
                <span className="flex items-center gap-2 font-medium">
                  <span
                    className={cn(
                      "inline-flex h-5 w-5 items-center justify-center rounded-full border text-[10px]",
                      isJoinKey
                        ? "border-primary/30 bg-primary/15 text-primary"
                        : "border-border/70 bg-muted/60 text-muted-foreground",
                    )}
                    aria-hidden="true"
                  >
                    {isJoinKey ? <Link2 className="h-3 w-3" /> : "•"}
                  </span>
                  <span className="font-mono">{column.name}</span>
                </span>
                {column.type ? (
                  <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                    {column.type}
                  </span>
                ) : null}
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}

function HorizontalJoinConnector({
  joins,
  leftTableName,
}: {
  joins: RelationshipDiagramJoinConfig[];
  leftTableName: string;
}) {
  if (joins.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full min-w-[11rem] shrink-0 flex-col items-center justify-center gap-3 py-2 md:w-48">
      <div className="hidden h-px w-full bg-border md:block" aria-hidden="true" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {joins.map((join) => (
          <JoinSummary
            key={`${join.leftTable}-${join.rightTable}-${join.leftKey}-${join.rightKey}-${join.joinType}`}
            join={join}
            leftTableName={leftTableName}
            compact
          />
        ))}
      </div>
      <div className="block h-6 w-px bg-border md:hidden" aria-hidden="true" />
    </div>
  );
}

function VerticalJoinConnector({
  joins,
  leftTableName,
}: {
  joins: RelationshipDiagramJoinConfig[];
  leftTableName: string;
}) {
  if (joins.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col items-center gap-3 py-1">
      <div className="h-8 w-px bg-border" aria-hidden="true" />
      <div className="flex flex-wrap items-center justify-center gap-2">
        {joins.map((join) => (
          <JoinSummary
            key={`${join.leftTable}-${join.rightTable}-${join.leftKey}-${join.rightKey}-${join.joinType}`}
            join={join}
            leftTableName={leftTableName}
          />
        ))}
      </div>
      <div className="h-8 w-px bg-border" aria-hidden="true" />
    </div>
  );
}

const RelationshipDiagramRoot = React.forwardRef<HTMLDivElement, RelationshipDiagramProps>(
  ({ config, children, className, layout = "horizontal", ...props }, ref) => {
    const source = React.useMemo(
      () => normalizeConfig(config ?? parseChildren(children)),
      [children, config],
    );
    const unpairedJoins = getUnpairedJoins(source.joins, source.tables);

    return (
      <div
        ref={ref}
        data-layout={layout}
        className={cn(
          "rounded-2xl border border-border/70 bg-gradient-to-br from-background via-background to-muted/30 p-4 md:p-6",
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "flex gap-4",
            layout === "horizontal" ? "flex-col md:flex-row md:items-stretch md:justify-start" : "flex-col",
          )}
        >
          {source.tables.map((table, index) => {
            const nextTable = source.tables[index + 1];
            const pairJoins = nextTable ? getJoinsBetween(source.joins, table.tableName, nextTable.tableName) : [];

            return (
              <React.Fragment key={table.tableName}>
                <div className={cn("min-w-0", layout === "horizontal" ? "flex-1" : "w-full")}>
                  <TableCard table={table} joins={source.joins} />
                </div>
                {nextTable ? (
                  layout === "horizontal" ? (
                    <HorizontalJoinConnector joins={pairJoins} leftTableName={table.tableName} />
                  ) : (
                    <VerticalJoinConnector joins={pairJoins} leftTableName={table.tableName} />
                  )
                ) : null}
              </React.Fragment>
            );
          })}
        </div>

        {unpairedJoins.length > 0 ? (
          <div className="mt-5 rounded-xl border border-dashed border-border/80 bg-muted/40 p-4">
            <div className="mb-3 text-sm font-medium text-foreground">Additional joins</div>
            <div className="flex flex-wrap gap-2">
              {unpairedJoins.map((join) => (
                <JoinSummary
                  key={`${join.leftTable}-${join.rightTable}-${join.leftKey}-${join.rightKey}-${join.joinType}-extra`}
                  join={join}
                  leftTableName={join.leftTable}
                  compact
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  },
);

RelationshipDiagramRoot.displayName = "RelationshipDiagram";

export const RelationshipDiagram = Object.assign(RelationshipDiagramRoot, {
  Table: RelationshipDiagramTableMarker,
  Column: RelationshipDiagramColumnMarker,
  Join: RelationshipDiagramJoinMarker,
}) as RelationshipDiagramComponent;

