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
import { FormInput } from '../_component/FormInput'
import SelectComponent from '../_component/SelectComponent'
import SubmitButton from '../_component/SubmitButton'
import { LOGIN } from '@/lib/routePath'
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
  const options = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' },
  ]
  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const all_values = form.getValues()
    
    try {
      const response=await submitForm(LOGIN,all_values);
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
      <form onSubmit={handleForm} className="">
        <FormField  name="username" render={({ field }) => (
          <FormItem >
            <FormControl>
            <FormInput {...field} id="username" label="Username" type="text" />

            </FormControl>
        
            <FormMessage />
          </FormItem>
        )} />
       
        <FormField name="password" render={({ field }) => (
          <FormItem>
            <FormControl>
            <FormInput {...field} id="password" label="Password" type="text" />
            </FormControl>
        
            <FormMessage />
          </FormItem>
        )} />
      <SubmitButton className="w-full" text="Save"  />
      </form>
    </Form>


</>

)
}

export default Login
