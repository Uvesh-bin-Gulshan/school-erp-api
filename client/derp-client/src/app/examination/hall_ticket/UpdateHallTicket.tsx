"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Form, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const UpdateHallTicket = () => {
  const [hallTicket, setHallTicket] = useState({
    hall_ticket_number: "",
    exam_time_table: "",
    student: "",
  });
  const [examTimeTables, setExamTimeTables] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchHallTicket = async () => {
      try {
        const response = await fetch(`/api/examtimetable/retrieve/${id}`);
        const data = await response.json();
        setHallTicket(data);
      } catch (error) {
        console.error("Failed to fetch hall ticket:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchExamTimeTables = async () => {
      try {
        const response = await fetch("/api/examtimetable/list");
        const data = await response.json();
        setExamTimeTables(data);
      } catch (error) {
        console.error("Failed to fetch exam time tables:", error);
      }
    };

    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/students/list");
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Failed to fetch students:", error);
      }
    };

    fetchHallTicket();
    fetchExamTimeTables();
    fetchStudents();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/halltickets/update/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hallTicket),
      });
      if (response.ok) {
        router.push("/halltickets");
      } else {
        console.error("Failed to update hall ticket");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setHallTicket({ ...hallTicket, [name]: value });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Update Hall Ticket</h1>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <FormLabel htmlFor="exam_time_table">Exam Time Table</FormLabel>
          <Select
            id="exam_time_table"
            name="exam_time_table"
            value={hallTicket.exam_time_table}
            onChange={handleChange}
          >
            <option value="">Select an Exam Time Table</option>
            {examTimeTables.map((exam) => (
              <option key={exam.exam_time_table_id} value={exam.exam_time_table_id}>
                {exam.subject} - {exam.time}
              </option>
            ))}
          </Select>
          <FormMessage />
        </FormItem>
        <FormItem>
          <FormLabel htmlFor="student">Student</FormLabel>
          <Select
            id="student"
            name="student"
            value={hallTicket.student}
            onChange={handleChange}
          >
            <option value="">Select a Student</option>
            {students.map((student) => (
              <option key={student.id} value={student.id}>
                {student.name}
              </option>
            ))}
          </Select>
          <FormMessage />
        </FormItem>
        <Button type="submit" className="mt-4">Update Hall Ticket</Button>
      </Form>
    </div>
  );
};

export default UpdateHallTicket;
