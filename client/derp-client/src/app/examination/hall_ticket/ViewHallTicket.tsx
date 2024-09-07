"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { HallTicket } from "@/lib/types";

export default function ViewHallTicket() {
  const [hallTicket, setHallTicket] = useState<HallTicket | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); // Assuming `id` is passed as a URL parameter

  useEffect(() => {
    // Fetch hall ticket details
    fetch(`/api/halltickets/retrieve/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setHallTicket(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hall ticket:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!hallTicket) {
    return <p>No hall ticket found.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Hall Ticket Details</h1>

      <div className="mb-4">
        <strong>Hall Ticket Number:</strong> {hallTicket.hall_ticket_number}
      </div>

      <div className="mb-4">
        <strong>Exam Time Table:</strong> {hallTicket.exam_time_table.subject} - {hallTicket.exam_time_table.time}
      </div>

      <div className="mb-4">
        <strong>Student Name:</strong> {hallTicket.student.name}
      </div>
    </div>
  );
}
