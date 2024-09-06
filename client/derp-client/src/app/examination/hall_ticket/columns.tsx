"use client";

import { ColumnDef } from "@tanstack/react-table";
import { HallTicket } from "@/lib/types";
import { DataTableColumnHeader } from "@/components/table/data-table-column-header";
import { format } from "date-fns";

// Define the columns for the HallTicket table
export const columns: ColumnDef<HallTicket>[] = [
  {
    accessorKey: "hall_ticket_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hall Ticket No." />
    ),
  },
  {
    accessorKey: "exam_time_table",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Exam Time Table" />
    ),
    cell: ({ row }) => row.original.exam_time_table.name,
  },
  {
    accessorKey: "student",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Student" />
    ),
    cell: ({ row }) => row.original.student.name,
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => format(new Date(row.original.created_at), "dd/MM/yyyy"),
  },
];
