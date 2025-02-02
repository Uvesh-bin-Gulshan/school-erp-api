import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const PersonalInformation = () => {
  const { control } = useFormContext();

  return (
    <>
      <FormField
        name="student_name"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Student Name</FormLabel>
            <FormControl>
              <Input {...field} type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="father_name"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Father Name</FormLabel>
            <FormControl>
              <Input {...field} type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="date_of_birth"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date of Birth</FormLabel>
            <FormControl>
              <Input {...field} type="date" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    <FormField
  name="profile_image"
  control={control}
  render={({ field }) => (
    <FormItem>
      <FormLabel>Profile Image</FormLabel>
      <FormControl>
        <Input
          type="file"
          onChange={(e) => field.onChange(e.target.files?.[0])} // Manually set the file input
          onBlur={field.onBlur}
          // Remove the value field to avoid the error
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

      
    </>
  )
}

export default PersonalInformation;
