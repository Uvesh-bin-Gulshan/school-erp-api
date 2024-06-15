"use client"
import React from 'react'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'
import {loginSchema} from '@/lib/zodschema'
import toast from "react-hot-toast"
import { redirect } from 'next/navigation'
import { failedtoastMessage, submitForm, successtoastMessage } from '@/lib/services'
import { useRouter } from 'next/navigation'
// import {page}  from '@/app/admin/page'
const Login = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();
  
  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const all_values = form.getValues()
    
    try {
      const response=await submitForm(all_values);
      console.log(response?.success)
      if(response?.success){

        successtoastMessage("successfully created")
        router.push('../admin/admissions/')

      }
      else{
        failedtoastMessage("Invalid credentials")
      }
    } catch (error) {
      console.error('Failed to login:', error);
    }
  }
  
  return (
<>
<Form {...form} >
      <form onSubmit={handleForm} className="space-y-8 w-56  text-center">
        <FormField name="username" render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField name="password" render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
            <FormDescription>
              This is your password.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>


</>

)
}

export default Login
