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
import { syllabusSchema } from '@/lib/zodschema'
import { submitForm, successtoastMessage, failedtoastMessage } from '@/lib/services'
import { FormInput } from '../_component/FormInput'
import SubmitButton from '../_component/SubmitButton'
import { UPDATE_SYLLABUS } from '@/lib/routePath'
import { MdModeEdit } from 'react-icons/md'

const UpdateSyllabus = ({ syllabus }: { syllabus: any }) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(syllabusSchema),
    defaultValues: {
      title: syllabus.title,
      description: syllabus.description,
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(`${UPDATE_SYLLABUS}/${syllabus.syllabus_id}/`, all_values, 'PUT');
      if (response?.success) {
        successtoastMessage("Syllabus successfully updated");
      } else {
        failedtoastMessage("Failed to update syllabus");
      }
    } catch (error) {
      console.error('Failed to Update Syllabus:', error);
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
            <DialogTitle>Update Syllabus</DialogTitle>
            <DialogDescription>
              Update the details
            </DialogDescription>
          </DialogHeader>
         
          <Form {...form} >
            <form onSubmit={handleForm} className="">
              <FormField name="title" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="title" label="Title" type="text" />
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

export default UpdateSyllabus;
