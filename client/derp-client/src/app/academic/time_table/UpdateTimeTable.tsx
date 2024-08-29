"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { timeTableSchema } from '@/lib/zodschema'
import { MdModeEdit } from 'react-icons/md'
import { UPDATE_TIMETABLE } from '@/lib/routePath'
import { failedToastMessage, successToastMessage } from '@/lib/client-helpers'
import { submitForm } from '@/lib/helper'
import { FormInput } from '@/app/_component/FormInput'
import SubmitButton from '@/app/_component/SubmitButton'

const UpdateTimeTable = ({ timeTable }: { timeTable: any }) => {
  const form = useForm({
    resolver: zodResolver(timeTableSchema),
    defaultValues: {
      subject: timeTable.subject,
      teacher: timeTable.teacher,
      time: timeTable.time,
      effective_date: timeTable.effective_date,
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(`${UPDATE_TIMETABLE}/${timeTable.time_table_id}/`, all_values, 'PUT');
      if (response?.success) {
        successToastMessage("Successfully updated");
      } else {
        failedToastMessage("Update failed");
      }
    } catch (error) {
      console.error('Failed to update TimeTable:', error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <MdModeEdit />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update TimeTable</DialogTitle>
            <DialogDescription>
              Update the TimeTable details below
            </DialogDescription>
          </DialogHeader>

          <Form {...form} >
            <form onSubmit={handleForm} className="">
              <FormField name="subject" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="subject" label="Subject" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="teacher" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="teacher" label="Teacher" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="time" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="time" label="Time" type="time" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="effective_date" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="effective_date" label="Effective Date" type="date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <SubmitButton className="w-full" text="Update" />
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UpdateTimeTable;
