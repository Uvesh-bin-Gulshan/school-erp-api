import React from 'react'
import { useFormContext } from 'react-hook-form'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const ApplicationDetails = () => {
  const { control } = useFormContext();

  return (
    <>
          <h1 className='text-lg  text-cyan-700 font-semibold '>
            Application Details</h1>

      <FormField
        name="applied_for"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Applied For</FormLabel>
            <FormControl>
              <Input {...field} type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="lc_given"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>LC Given</FormLabel>
            <FormControl>
              <Checkbox {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="pay_fees"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pay Fees</FormLabel>
            <FormControl>
              <Checkbox {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="fees_amount"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Fees Amount</FormLabel>
            <FormControl>
              <Input {...field} type="text" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="required_donation"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Required Donation</FormLabel>
            <FormControl>
              <Checkbox {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="admission_status"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Admission Status</FormLabel>
            <FormControl>

              <Select {...field}>
              <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select previous Result" />
      </SelectTrigger>
              <SelectContent>
        <SelectGroup>
          <SelectLabel>Pass or Fail</SelectLabel>
          
         
             
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="left">Left</SelectItem>
        </SelectGroup>
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

export default ApplicationDetails;
