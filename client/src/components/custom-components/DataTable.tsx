import {
  ColumnDef,
  ColumnFiltersState,
  getFilteredRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FaFilter } from "react-icons/fa"
import { AiFillEyeInvisible } from "react-icons/ai"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  initialColumnFilters?: ColumnFiltersState
}

export function DataTable<TData, TValue>({
  columns,
  data,
  initialColumnFilters = [],
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    initialColumnFilters
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [selectedColumn, setSelectedColumn] = React.useState<string | undefined>(undefined)
  const [filterValue, setFilterValue] = React.useState<string>("")

  // Custom filter function for 'startsWith'
  const startsWithFilter = (rowValue: string, filterValue: string) => {
    if (!rowValue) return false
    return rowValue.toLowerCase().startsWith(filterValue.toLowerCase())
  }

  const table = useReactTable({
    data,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnFilters,
    },
    filterFns: {
      startsWith: startsWithFilter,  // Registering custom 'startsWith' filter
    },
  })

  const handleFilterChange = (columnId: string, value: string) => {
    setColumnFilters((old) => {
      const newFilters = old.filter((filter) => filter.id !== columnId)
      if (value) {
        newFilters.push({ id: columnId, value })
      }
      return newFilters
    })
  }

  React.useEffect(() => {
    if (selectedColumn) {
      handleFilterChange(selectedColumn, filterValue)
    }
  }, [selectedColumn, filterValue])

  return (
    <>
      <div className="flex items-center justify-end mr-5 py-4 m-2 space-x-4">
      <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"  className="w-12 ml-2 border text-gray-500 bg-slate-200/50">
            <AiFillEyeInvisible />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <Select onValueChange={(value) => setSelectedColumn(value)}>
          <SelectTrigger className="w-48 ml-2 border text-gray-500 bg-slate-200/50">
            <SelectValue placeholder="Filter By Column" />
          </SelectTrigger>
          <SelectContent>
            {columns.map((column) => (
              <SelectItem key={column.id ?? column.accessorKey as string} value={column.id ?? column.accessorKey as string}>
                {typeof column.header === "function" ? column.id ?? column.accessorKey : column.header}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          placeholder="Enter filter value"
          value={filterValue}
          onChange={(event) => setFilterValue(event.target.value)}
          className="max-w-[50%]"
          disabled={!selectedColumn}
        />
         
      </div>
      <div className="mx-4 ">
        <Table>
          <TableHeader className="rounded-xl bg-gray-100 
          text-sx text-cyan-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="rounded-xl hover:bg-gray-50  " key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  )
}
