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
import { CREATE_SYLLABUS } from '@/lib/routePath'
import { Plus } from 'lucide-react'

const AddSyllabus = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(syllabusSchema),
    defaultValues: {
      title: "",
      description: "",
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(CREATE_SYLLABUS, all_values, 'POST');
      if (response?.success) {
        successToastMessage("Syllabus successfully created");
      } else {
        failedToastMessage("Failed to create syllabus");
      }
    } catch (error) {
      console.error('Failed to Create Syllabus:', error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button><Plus />Syllabus</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new syllabus</DialogTitle>
            <DialogDescription>
              Add all required details
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

export default AddSyllabus;
