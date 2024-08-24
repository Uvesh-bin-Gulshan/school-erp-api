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
import { departmentSchema, loginSchema } from '@/lib/zodschema'

import { MdModeEdit } from 'react-icons/md'
import { UPDATE_DEPARTMENT } from '@/lib/routePath'
import { submitForm } from '@/lib/helper'
import { failedToastMessage, successToastMessage } from '@/lib/services'
import { FormInput } from '@/app/_component/FormInput'
import SubmitButton from '@/app/_component/SubmitButton'

const UpdateDepartment = ({department}:{department:any}) => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(departmentSchema),
    defaultValues: {
    name:department.name,

  }})

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(`${UPDATE_DEPARTMENT}/${department.department_id}/`,all_values,'PUT');
      if (response?.success) {
        successToastMessage("successfully created");
      } else {
        failedToastMessage("Invalid");
      }
    } catch (error) {
      console.error('Failed to Create Department:', error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className='text-cyan-700 text-md ' asChild>
        <MdModeEdit />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update department</DialogTitle>
            <DialogDescription>
              Update details
            </DialogDescription>
          </DialogHeader>
         
<Form {...form} >
      <form onSubmit={handleForm} className="">
        <FormField  name="name" render={({ field }) => (
          <FormItem >
            <FormControl>
            <FormInput {...field} id="name" label="Department Name" type="text" />

            </FormControl>
        
            <FormMessage />
          </FormItem>
        )} />
       
       
      <SubmitButton className="w-full" text="Submit"  />
      </form>
    </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default UpdateDepartment;
