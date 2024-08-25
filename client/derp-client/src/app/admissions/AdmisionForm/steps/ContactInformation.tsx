import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const ContactInformation = () => {
  const { control } = useFormContext();

  return (
    <>
          <h1 className='text-lg  text-cyan-700 font-semibold '>
            Contact Information</h1>
            <div className='grid grid-cols-2 mx-24 gap-4'>

      <FormField
        name="mobile_number"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mobile Number</FormLabel>
            <FormControl>
              <Input {...field} type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="aadhar_number"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Aadhar Number</FormLabel>
            <FormControl>
              <Input {...field} type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
    </>
  )
}

export default ContactInformation;
