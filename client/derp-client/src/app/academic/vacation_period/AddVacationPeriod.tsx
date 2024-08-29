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

import { Plus } from 'lucide-react'
import { vacationPeriodSchema } from '@/lib/zodschema'
import { submitForm } from '@/lib/helper'
import { failedToastMessage, successToastMessage } from '@/lib/client-helpers'
import { CREATE_VACATION_PERIOD } from '@/lib/routePath'
import { FormInput } from '@/app/_component/FormInput'
import SubmitButton from '@/app/_component/SubmitButton'

const AddVacationPeriod = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(vacationPeriodSchema),
    defaultValues: {
      name: "",
      start_date: "",
      end_date: "",
      description: "",
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(CREATE_VACATION_PERIOD, all_values, 'POST');
      if (response?.success) {
        successToastMessage("Successfully created");
      } else {
        failedToastMessage("Invalid");
      }
    } catch (error) {
      console.error('Failed to create Vacation Period:', error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button><Plus />Vacation Period</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new Vacation Period</DialogTitle>
            <DialogDescription>
              Add all required details
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

              <SubmitButton className="w-full" text="Submit" />
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddVacationPeriod;
