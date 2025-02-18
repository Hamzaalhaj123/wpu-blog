"use client";

import { DbQueryResult, PaginationOptions } from "@/actions/utils/dbQuery";
import PaginationGroup from "@/components/shared/PaginationGroup";
import DataTableHeader from "@/components/shared/table/DataTableHeader";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/shared/table/Table";
import useSetSearchParams from "@/hooks/shared/useSetSearchParams";
import useIsMounted from "@/hooks/utils/useIsMounted";
import useParsedSearchParams from "@/hooks/utils/useParsedSearchParams";
import { sortingValidator } from "@/validators/util/sortingValidator";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  paginationMetadata?: DbQueryResult<unknown, PaginationOptions>["metaData"];
};

export default function DataTable<TData, TValue>({ columns, data, paginationMetadata }: DataTableProps<TData, TValue>) {
  const isMounted = useIsMounted();
  const { setSearchParams } = useSetSearchParams();
  const sortData = useParsedSearchParams(sortingValidator);
  const initialSortArr = Object.entries(sortData.sort ?? {}).map(([key, value]) => ({ id: key, desc: value === "desc" }));
  const [sorting, setSorting] = useState<SortingState>(initialSortArr);

  useEffect(() => {
    if (!isMounted()) return;
    const sortString = sorting.map(({ id, desc }) => `${id} ${desc ? "desc" : "asc"}`).join(",");
    setSearchParams((prev) => ({ ...prev, sort: sortString }), "replace");
  }, [isMounted, setSearchParams, sorting]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: !!paginationMetadata,
    manualSorting: true,
    enableSortingRemoval: true,
    enableMultiSort: true,
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
                  <DataTableHeader key={header.id} header={header} />
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
