"use client";

import { PaginatedQueryResult } from "@/actions/utils/getPaginatedQuery";
import PaginationGroup from "@/components/shared/PaginationGroup";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/shared/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  paginationMetadata?: PaginatedQueryResult<unknown>["metaData"];
};

export default function DataTable<TData, TValue>({ columns, data, paginationMetadata }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: !!paginationMetadata,
    manualSorting: true,
    rowCount: paginationMetadata?.totalCount,
    pageCount: paginationMetadata?.pageCount,
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
    <>
      <div className="min-h-[530px]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {paginationMetadata ? (
        <PaginationGroup currentPage={paginationMetadata.page} pageCount={paginationMetadata.pageCount} />
      ) : null}
    </>
  );
}
