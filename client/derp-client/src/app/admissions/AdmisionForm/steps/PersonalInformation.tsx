"use client"
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const PersonalInformation = () => {
  const { control, setValue } = useFormContext();
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Store the file name for display
      setValue('profile_image', file); // Set the file in the form context
    } else {
      setFileName(''); // Clear file name if no file is selected
      setValue('profile_image', null); // Clear the file in the form context
    }
  };

  return (
    <>
      <h1 className="text-lg mx-24 my-3 text-cyan-700 font-semibold">
        Personal Information
      </h1>
      <div className="grid grid-cols-2 mx-24 gap-4">
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
                  {...field}
                  type="file"
                  onChange={(e) => {
                    handleFileChange(e); // Handle file change
                  }}
                  onBlur={field.onBlur}
                  value={undefined} // Avoid setting value to null or empty string
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
    </>
  );
};

export default PersonalInformation;
