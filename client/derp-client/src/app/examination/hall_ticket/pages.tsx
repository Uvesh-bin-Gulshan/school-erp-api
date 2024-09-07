"use client";

import React, { useState, useEffect } from "react";
import { useTable, usePagination } from "@tanstack/react-table";
import { columns } from "./columns";
import { HallTicket } from "@/lib/types";

export default function HallTicketPage() {
  const [hallTickets, setHallTickets] = useState<HallTicket[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Hall Tickets from the API
    fetch("/api/halltickets/list")
      .then((response) => response.json())
      .then((data) => {
        setHallTickets(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hall tickets:", error);
        setLoading(false);
      });
  }, []);

  // Setup the table with fetched Hall Tickets
  const table = useTable({
    data: hallTickets,
    columns,
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hall Tickets</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            {table
              .getFlatHeaders()
              .map((header) => (
                <th key={header.id} className="border px-4 py-2">
                  {header.renderHeader()}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.map((row) => (
              <tr key={row.id}>
                {row
                  .getVisibleCells()
                  .map((cell) => (
                    <td key={cell.id} className="border px-4 py-2">
                      {cell.renderCell()}
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
