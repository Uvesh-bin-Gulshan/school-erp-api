// src/components/ExamTimeTable/AddExamTimeTable.tsx

"use client"

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { routes } from "@/lib/routePath";
import { Plus } from 'lucide-react';
import { examTimeTableSchema } from '@/lib/zodschema';
import { submitForm } from '@/lib/helper';
import { failedToastMessage, successToastMessage } from '@/lib/client-helpers';
import SubmitButton from '@/app/_component/SubmitButton';

const AddExamTimeTable = () => {
  const [examTypes, setExamTypes] = useState([]);
  const [students, setStudents] = useState([]);

  const form = useForm({
    resolver: zodResolver(examTimeTableSchema),
    defaultValues: {
      exam_type: "",
      subject: "",
      total_marks: 0,
      passing_marks: 0,
      time: "",
    }
  });

  useEffect(() => {
    // Fetch Exam Types
    const fetchExamTypes = async () => {
      try {
        const data = await getExamTypes(); // Implement this service
        setExamTypes(data);
      } catch (error) {
        console.error("Failed to fetch Exam Types:", error);
      }
    };

    // Fetch Students
    const fetchStudents = async () => {
      try {
        const data = await getStudents(); // Implement this service
        setStudents(data);
      } catch (error) {
        console.error("Failed to fetch Students:", error);
      }
    };

    fetchExamTypes();
    fetchStudents();
  }, []);

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(routes.CREATE_EXAMTIMETABLE, all_values, 'POST');
      if (response?.success) {
        successToastMessage("Successfully created");
      } else {
        failedToastMessage("Invalid data");
      }
    } catch (error) {
      console.error('Failed to Create Exam Time Table:', error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button><Plus /> Add Exam Time Table</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Exam Time Table</DialogTitle>
            <DialogDescription>
              Fill in all required details to add a new exam time table.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={handleForm} className="">
              {/* Exam Type Field */}
              <FormField name="exam_type" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <select {...field} id="exam_type" className="input-class">
                      <option value="">Select Exam Type</option>
                      {examTypes.map((type: any) => (
                        <option key={type.exam_type_id} value={type.exam_type_id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Subject Field */}
              <FormField name="subject" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <select {...field} id="subject" className="input-class">
                      <option value="">Select Subject</option>
                      {students.map((student: any) => (
                        <option key={student.student_id} value={student.student_id}>
                          {student.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Total Marks Field */}
              <FormField name="total_marks" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} id="total_marks" label="Total Marks" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Passing Marks Field */}
              <FormField name="passing_marks" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} id="passing_marks" label="Passing Marks" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              {/* Time Field */}
              <FormField name="time" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} id="time" label="Time" type="time" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <SubmitButton className="w-full" text="Submit" />
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddExamTimeTable;
