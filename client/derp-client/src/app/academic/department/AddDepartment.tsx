"use client";

import React from 'react';
import { departmentSchema } from '@/lib/zodschema';
import { departmentFields } from '@/lib/fields';
import { routes } from "@/lib/routePath";
import GenericAddForm from '@/app/_component/GenericAddForm';

const AddDepartment = () => {
  return (
    <GenericAddForm
      schema={departmentSchema}
      fields={departmentFields}
      apiEndpoint={`${routes.CREATE_DEPARTMENT}`}
      successMessage="Department added successfully"
      failureMessage="Failed to add department"
      dialogTitle="Add Department"
      dialogDescription="Enter department details here"
    />
  );
};

export default AddDepartment;
