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
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { syllabusStatusSchema } from "@/lib/zodschema"
import { FormInput } from "../../_component/FormInput"
import SubmitButton from "../../_component/SubmitButton"
import { Plus } from "lucide-react"
import { CREATE_SYLLABUS_STATUS_VERIFICATION } from '@/lib/routePath'
import { failedToastMessage, successToastMessage } from '@/lib/services'
import { submitForm } from '@/lib/helper'


const AddSyllabusStatus = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(syllabusStatusSchema),
    defaultValues: {
      month: "",
      status: "",
    },
  });

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(CREATE_SYLLABUS_STATUS_VERIFICATION, all_values, "POST");
      if (response?.success) {
        successToastMessage("Syllabus status successfully created");
      } else {
        failedToastMessage("Invalid submission");
      }
    } catch (error) {
      console.error("Failed to create syllabus status:", error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Plus /> Add Syllabus Status
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new syllabus status</DialogTitle>
            <DialogDescription>Add all required details</DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={handleForm} className="">
              <FormField
                name="month"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FormInput {...field} id="month" label="Month" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <FormInput {...field} id="status" label="Status" type="text" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton className="w-full" text="Submit" />
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddSyllabusStatus;