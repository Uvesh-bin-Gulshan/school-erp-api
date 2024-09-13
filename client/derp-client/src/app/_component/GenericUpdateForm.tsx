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
import { FormInput } from './FormInput'
import SubmitButton from './SubmitButton'
import { MdModeEdit } from 'react-icons/md'
import { submitForm } from '@/lib/helper'
import { failedToastMessage, successToastMessage } from '@/lib/client-helpers'

const GenericUpdateForm = ({ schema, fields, apiEndpoint, successMessage, failureMessage, triggerIcon: TriggerIcon, dialogTitle, dialogDescription }:any) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: fields.reduce((acc:any, field:any) => {
      acc[field.name] = field.defaultValue || '';
      return acc;
    }, {}),
  });

  const handleForm = async (event:any) => {
    event.preventDefault();
    const all_values = form.getValues();
    const formData = new FormData();

    fields.forEach(field => {
      if (field.type === 'file') {
        formData.append(field.name, all_values[field.name][0]); // Assuming single file upload
      } else {
        formData.append(field.name, all_values[field.name]);
      }
    });

    try {
      const response = await submitForm(
        apiEndpoint, formData, 'PUT'
      
      );
      if (response?.success) {
        successToastMessage(successMessage);
      } else {
        failedToastMessage(failureMessage);
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  const renderField = (field:any) => {
    switch (field.type) {
      case 'text':
        return (
          <FormField
            key={field.name}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormControl>
                  <FormInput {...formField} id={field.name} label={field.label} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case 'select':
        return (
          <FormField
            key={field.name}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                <FormControl>
                  <select {...formField} id={field.name} className="input">
                    {field.options.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case 'file':
        return (
          <FormField
            key={field.name}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                <FormControl>
                  <input {...formField} id={field.name} type="file" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
      <MdModeEdit />
            </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleForm} className="">
            {fields.map(renderField)}
            <SubmitButton className="w-full" text="Submit" />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default GenericUpdateForm