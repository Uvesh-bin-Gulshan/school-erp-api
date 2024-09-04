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
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { examTypeSchema } from '@/lib/zodschema'
import { CREATE_EXAMTYPE } from '@/lib/routePath'
import { Plus } from 'lucide-react'
import { submitForm } from '@/lib/helper'
import { failedToastMessage, successToastMessage } from '@/lib/client-helpers'
import { FormInput } from '@/app/_component/FormInput'
import SubmitButton from '@/app/_component/SubmitButton'

const AddExamType = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(examTypeSchema),
    defaultValues: {
      name: "",
      effective_date: "",
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(CREATE_EXAMTYPE, all_values, 'POST');
      if (response?.success) {
        successToastMessage("Successfully created");
      } else {
        failedToastMessage("Invalid");
      }
    } catch (error) {
      console.error('Failed to Create Exam Type:', error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button><Plus />Add Exam Type</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new exam type</DialogTitle>
            <DialogDescription>
              Add all required details
            </DialogDescription>
          </DialogHeader>
         
          <Form {...form}>
            <form onSubmit={handleForm} className="">
              <FormField name="name" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="name" label="Exam Type Name" type="text" />
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
              <SubmitButton className="w-full" text="Submit" />
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddExamType;
