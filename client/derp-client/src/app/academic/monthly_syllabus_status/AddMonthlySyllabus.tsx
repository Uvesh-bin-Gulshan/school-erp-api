"use client";

import React from 'react';
import { routes } from '@/lib/routePath';
import GenericAddForm from '@/app/_component/GenericAddForm';
import { monthlySubjectSyllabusStatusSchema } from '@/lib/zodschema';
import { monthlySubjectSyllabusStatusFields } from '@/lib/fields';

const AddMonthlySubjectSyllabusStatus = () => {
  return (
    <GenericAddForm
      schema={monthlySubjectSyllabusStatusSchema}
      fields={monthlySubjectSyllabusStatusFields}
      apiEndpoint={routes.CREATE_MONTHLY_SYLLABUS_STATUS}
      successMessage="Monthly Syllabus Status added successfully"
      failureMessage="Failed to add Monthly Syllabus Status"
      dialogTitle="Add New Monthly Syllabus Status"
      dialogDescription="Fill in the details to add a new monthly syllabus status."
    />
  );
};

export default AddMonthlySubjectSyllabusStatus;
