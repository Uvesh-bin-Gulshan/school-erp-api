"use client";

import React from 'react';

import { courseFields } from '@/lib/fields';
import { routes } from '@/lib/routePath';
import { courseSchema } from '@/lib/zodschema';
import GenericAddForm from '@/app/_component/GenericAddForm';

const AddCourse = () => {
  return (
    <GenericAddForm
      schema={courseSchema}
      fields={courseFields}
      apiEndpoint={routes.CREATE_COURSE}
      successMessage="Course added successfully"
      failureMessage="Failed to add course"
      dialogTitle="Add New Course"
      dialogDescription="Fill in the details to add a new course."
    />
  );
};

export default AddCourse;
