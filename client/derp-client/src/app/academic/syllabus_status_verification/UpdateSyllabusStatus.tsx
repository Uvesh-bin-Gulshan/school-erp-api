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
import { syllabusStatusSchema } from '@/lib/zodschema'
import { UPDATE_SYLLABUS_STATUS_VERIFICATION } from '@/lib/routePath'
import { MdModeEdit } from 'react-icons/md'
import { submitForm } from '@/lib/helper'
import { FormInput } from '@/app/_component/FormInput'
import SubmitButton from '@/app/_component/SubmitButton'
import { failedToastMessage, successToastMessage } from '@/lib/client-helpers'

const UpdateSyllabusStatus = ({ syllabusStatus }: { syllabusStatus: any }) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(syllabusStatusSchema),
    defaultValues: {
      feedback: syllabusStatus.feedback,
      is_approved: syllabusStatus.is_approved,
      approved_date: syllabusStatus.approved_date,
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(`${UPDATE_SYLLABUS_STATUS_VERIFICATION}/${syllabusStatus.status_verification_id}/`, all_values, 'PUT');
      if (response?.success) {
        successToastMessage("Successfully updated");
      } else {
        failedToastMessage("Invalid");
      }
    } catch (error) {
      console.error('Failed to update Syllabus Status Verification:', error);
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
            <DialogTitle>Update Syllabus Status Verification</DialogTitle>
            <DialogDescription>
              Update the details
            </DialogDescription>
          </DialogHeader>

          <Form {...form} >
            <form onSubmit={handleForm} className="">
              <FormField name="feedback" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="feedback" label="Feedback" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="approved_date" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="approved_date" label="Approved Date" type="datetime-local" />
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
