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
import { syllabusTypeSchema } from '@/lib/zodschema'
import { submitForm, successtoastMessage, failedtoastMessage } from '@/lib/services'
import { FormInput } from '../_component/FormInput'
import SubmitButton from '../_component/SubmitButton'
import { UPDATE_SYLLABUS_TYPE } from '@/lib/routePath'
import { MdModeEdit } from 'react-icons/md'

const UpdateSyllabusType = ({ syllabusType }: { syllabusType: any }) => {
  const form = useForm({
    resolver: zodResolver(syllabusTypeSchema),
    defaultValues: {
      name: syllabusType.name,
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(`${UPDATE_SYLLABUS_TYPE}/${syllabusType.type_id}/`, all_values, 'PUT');
      if (response?.success) {
        successtoastMessage("Successfully updated");
      } else {
        failedtoastMessage("Update failed");
      }
    } catch (error) {
      console.error('Failed to update Syllabus Type:', error);
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
            <DialogTitle>Update Syllabus Type</DialogTitle>
            <DialogDescription>
              Update the Syllabus Type details below
            </DialogDescription>
          </DialogHeader>

          <Form {...form} >
            <form onSubmit={handleForm} className="">
              <FormField name="name" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="name" label="Syllabus Type Name" type="text" />
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

export default UpdateSyllabusType;
