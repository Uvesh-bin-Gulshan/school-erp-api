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
import { studentSchema } from '@/lib/zodschema'
import { FormInput } from '../_component/FormInput'
import SubmitButton from '../_component/SubmitButton'
import { routes } from '@/lib/routePath'
import { MdModeEdit } from 'react-icons/md'
import { failedToastMessage, successToastMessage } from '@/lib/client-helpers'
import { submitForm } from '@/lib/helper'

const UpdateStudent = ({ student }: { student: any }) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      name: student.name,
      age: student.age,
      grade: student.grade,
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(`${routes.UPDATE_STUDENT}/${student.student_id}/`, all_values, 'PUT');
      if (response?.success) {
        successToastMessage("Student successfully updated");
      } else {
        failedToastMessage("Failed to update student");
      }
    } catch (error) {
      console.error('Failed to Update Student:', error);
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
            <DialogTitle>Update Student</DialogTitle>
            <DialogDescription>
              Update the details
            </DialogDescription>
          </DialogHeader>
         
          <Form {...form} >
            <form onSubmit={handleForm} className="">
              <FormField name="name" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="name" label="Name" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="age" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="age" label="Age" type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="grade" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="grade" label="Grade" type="text" />
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

export default UpdateStudent;
