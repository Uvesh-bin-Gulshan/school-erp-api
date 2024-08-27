"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
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
import { vacationPeriodSchema } from '@/lib/zodschema'
import { submitForm, successtoastMessage, failedtoastMessage } from '@/lib/services'
import { FormInput } from '../_component/FormInput'
import SubmitButton from '../_component/SubmitButton'
import { UPDATE_VACATION_PERIOD } from '@/lib/routePath'
import { MdModeEdit } from 'react-icons/md'

const UpdateVacationPeriod = ({ vacationPeriod }: { vacationPeriod: any }) => {
  const form = useForm({
    resolver: zodResolver(vacationPeriodSchema),
    defaultValues: {
      name: vacationPeriod.name,
      start_date: vacationPeriod.start_date,
      end_date: vacationPeriod.end_date,
      description: vacationPeriod.description,
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(`${UPDATE_VACATION_PERIOD}/${vacationPeriod.vacation_id}/`, all_values, 'PUT');
      if (response?.success) {
        successtoastMessage("Successfully updated");
      } else {
        failedtoastMessage("Update failed");
      }
    } catch (error) {
      console.error('Failed to update Vacation Period:', error);
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
            <DialogTitle>Update Vacation Period</DialogTitle>
            <DialogDescription>
              Update the details of the vacation period
            </DialogDescription>
          </DialogHeader>

          <Form {...form} >
            <form onSubmit={handleForm} className="">
              <FormField name="name" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="name" label="Vacation Name" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="start_date" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="start_date" label="Start Date" type="date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="end_date" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="end_date" label="End Date" type="date" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="description" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="description" label="Description" type="text" />
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

export default UpdateVacationPeriod;
