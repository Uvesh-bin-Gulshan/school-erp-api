"use client";

import { ColumnDef } from "@tanstack/react-table";
import { HallTicket } from "@/lib/types";

// Define the columns for the HallTicket table
export const columns: ColumnDef<HallTicket>[] = [
  {
    accessorKey: "hall_ticket_number",
    header: "Hall Ticket Number",
  },
  {
    accessorKey: "exam_time_table",
    header: "Exam Time Table",
  },
  {
    accessorKey: "student",
    header: "Student",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const hallTicket = row.original;

      return (
        <div className="flex space-x-2">
          <a
            href={`/halltickets/${hallTicket.hall_ticket_number}/view`}
            className="text-blue-600 hover:underline"
          >
            View
          </a>
          <a
            href={`/halltickets/${hallTicket.hall_ticket_number}/update`}
            className="text-green-600 hover:underline"
          >
            Edit
          </a>
          <a
            href={`/halltickets/${hallTicket.hall_ticket_number}/delete`}
            className="text-red-600 hover:underline"
          >
            Delete
          </a>
        </div>
      );
    },
  },
];
