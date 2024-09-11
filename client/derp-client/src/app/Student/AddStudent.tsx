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
import { FormInput } from '../_component/FormInput'
import SubmitButton from '../_component/SubmitButton'
import { Plus } from 'lucide-react'
import { failedToastMessage, successToastMessage, useDynamicFormConfig } from '@/lib/client-helpers'
import { submitForm } from '@/lib/helper'
import { studentSchema } from '@/lib/zodschema'
import { routes } from "@/lib/routePath";
import GenericUpdateForm from '../_component/GenericUpdateForm'
import { MdModeEdit } from 'react-icons/md'
import GenericAddForm from '../_component/GenericAddForm'
import { studentFields } from '@/lib/fields'

const AddStudent = () => {
  const router = useRouter();
  // const form = useDynamicFormConfig(studentSchema, {

  //   defaultValues: {
  //    student_id:"",
  //    admission:"",
  //    course:"",
  //    department:"",
  //    student_status:"",
     
  //   },
  // });

  // const handleForm = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const all_values = form.getValues();
  //   try {
  //     const response = await submitForm(routes.CREATE_STUDENT, all_values, 'POST');
  //     if (response?.success) {
  //       successToastMessage("Student successfully added");
  //     } else {
  //       failedToastMessage("Failed to add student");
  //     }
  //   } catch (error) {
  //     console.error('Failed to Add Student:', error);
  //   }
  // };

  return (
    <>
      {/* <Dialog>
        <DialogTrigger asChild>
          <Button><Plus />Student</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new student</DialogTitle>
            <DialogDescription>
              Add all required details
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
      </Dialog> */}


<GenericAddForm
        schema={studentSchema}
        fields={studentFields}
        apiEndpoint={`${routes.CREATE_STUDENT}`}
        successMessage="Student updated successfully"
        failureMessage="Failed to update student"
        dialogTitle="Update Student"
        dialogDescription="Update student details here"
      />   

    </>
  );
}

export default AddStudent;
