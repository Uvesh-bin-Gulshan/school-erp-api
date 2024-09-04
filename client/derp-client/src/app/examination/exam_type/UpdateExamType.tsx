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
import { examTypeSchema } from '@/lib/zodschema'

import { UPDATE_EXAMTYPE } from '@/lib/routePath'
import { Edit } from 'lucide-react'
import { MdModeEdit } from 'react-icons/md'
import { submitForm } from '@/lib/helper'
import { failedToastMessage, successToastMessage } from '@/lib/client-helpers'
import { FormInput } from '@/app/_component/FormInput'
import SubmitButton from '@/app/_component/SubmitButton'

const UpdateExamType = ({ examType }: { examType: any }) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(examTypeSchema),
    defaultValues: {
      name: examType.name,
      effective_date: examType.effective_date,
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(`${UPDATE_EXAMTYPE}/${examType.exam_type_id}/`, all_values, 'PUT');
      if (response?.success) {
        successToastMessage("Successfully updated");
      } else {
        failedToastMessage("Update failed");
      }
    } catch (error) {
      console.error('Failed to Update Exam Type:', error);
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
            <DialogTitle>Update Exam Type</DialogTitle>
            <DialogDescription>
              Update details
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

export default UpdateExamType;
