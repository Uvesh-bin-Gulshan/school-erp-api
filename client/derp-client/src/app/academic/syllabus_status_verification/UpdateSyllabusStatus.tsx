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

import { FormInput } from '../../_component/FormInput'
import SubmitButton from '../../_component/SubmitButton'
import { MdModeEdit } from 'react-icons/md'
import { failedToastMessage, successToastMessage } from '@/lib/services'
import { submitForm } from '@/lib/helper'
import { syllabusStatusSchema } from '@/lib/zodschema'

const UpdateSyllabusStatus = ({ syllabusStatus }: { syllabusStatus: any }) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(syllabusStatusSchema),
    defaultValues: {
      status: syllabusStatus.status,
      remarks: syllabusStatus.remarks,
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(`${UpdateSyllabusStatus}/${syllabusStatus.id}/`, all_values, 'PUT');
      if (response?.success) {
        successToastMessage("Syllabus status successfully updated");
      } else {
        failedToastMessage("Failed to update syllabus status");
      }
    } catch (error) {
      console.error('Failed to Update Syllabus Status:', error);
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
            <DialogTitle>Update Syllabus Status</DialogTitle>
            <DialogDescription>
              Update the details
            </DialogDescription>
          </DialogHeader>
         
          <Form {...form} >
            <form onSubmit={handleForm} className="">
              <FormField name="status" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="status" label="Status" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="remarks" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="remarks" label="Remarks" type="text" />
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

export default UpdateSyllabusStatus;
