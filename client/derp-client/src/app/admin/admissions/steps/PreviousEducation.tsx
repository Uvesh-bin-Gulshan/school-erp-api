import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectItem } from '@/components/ui/select'
import { SelectContent } from '@radix-ui/react-select'

const PreviousEducation = () => {
  const { control } = useFormContext();

  return (
    <>
        <h1 className='text-lg  text-cyan-700 font-semibold '>
        Previous Education</h1>
    
      <FormField
        name="previous_institution"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Previous Institution</FormLabel>
            <FormControl>
              <Input {...field} type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="previous_education"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Previous Education</FormLabel>
            <FormControl>
              <Input {...field} type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="school_education"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>School Education</FormLabel>
            <FormControl>
              <Input {...field} type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="previous_result_status"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Previous Result Status</FormLabel>
            <FormControl>
              <Select {...field}>


              <SelectContent >
                <SelectItem value="pass">Pass</SelectItem>
                <SelectItem value="fail">Fail</SelectItem>
              </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}

export default PreviousEducation;
