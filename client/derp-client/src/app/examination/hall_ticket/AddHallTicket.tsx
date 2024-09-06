"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { hallTicketSchema } from '@/lib/zodschema';
import { submitForm, successtoastMessage, failedtoastMessage } from '@/lib/services';
import { FormInput } from '../_component/FormInput';
import SubmitButton from '../_component/SubmitButton';
import { CREATE_HALLTICKET } from '@/lib/routePath';
import { Plus } from 'lucide-react';

const AddHallTicket = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(hallTicketSchema),
    defaultValues: {
      exam_time_table: "",
      student: "",
    },
  });

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(CREATE_HALLTICKET, all_values, 'POST');
      if (response?.success) {
        successtoastMessage("Hall ticket successfully created");
      } else {
        failedtoastMessage("Invalid data");
      }
    } catch (error) {
      console.error('Failed to Create Hall Ticket:', error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button><Plus />Add Hall Ticket</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Hall Ticket</DialogTitle>
            <DialogDescription>
              Add all required details
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={handleForm} className="">
              <FormField name="exam_time_table" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="exam_time_table" label="Exam Time Table" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="student" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="student" label="Student" type="text" />
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
};

export default AddHallTicket;
