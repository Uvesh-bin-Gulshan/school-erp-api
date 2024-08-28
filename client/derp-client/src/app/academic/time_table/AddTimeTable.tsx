"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'


import { failedToastMessage, successToastMessage } from '@/lib/client-helpers'
import { submitForm } from '@/lib/helper'
import { FormInput } from '@/app/_component/FormInput'
import SubmitButton from '@/app/_component/SubmitButton'
import { useRouter } from "next/router"
import { CREATE_TIMETABLE } from "@/lib/routePath"
import { timeTableSchema } from "@/lib/zodschema"
import { Plus } from "lucide-react"
import { useForm } from "react-hook-form"

const AddTimeTable = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(timeTableSchema),
    defaultValues: {
      subject: "",
      teacher: "",
      time: "",
      effective_date: "",
    }
  })

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const all_values = form.getValues();
    try {
      const response = await submitForm(CREATE_TIMETABLE, all_values, 'POST');
      if (response?.success) {
        successToastMessage("Successfully created");
      } else {
        failedToastMessage("Invalid");
      }
    } catch (error) {
      console.error('Failed to create TimeTable:', error);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button><Plus />TimeTable</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new TimeTable</DialogTitle>
            <DialogDescription>
              Add all required details
            </DialogDescription>
          </DialogHeader>

          <Form {...form} >
            <form onSubmit={handleForm} className="">
              <FormField name="subject" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="subject" label="Subject" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="teacher" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="teacher" label="Teacher" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField name="time" render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FormInput {...field} id="time" label="Time" type="time" />
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

export default AddTimeTable;

function zodResolver(timeTableSchema: any) {
  throw new Error("Function not implemented.")
}

