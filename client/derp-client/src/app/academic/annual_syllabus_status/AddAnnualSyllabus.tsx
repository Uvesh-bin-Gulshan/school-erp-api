"use client";

import React from 'react';
import { routes } from '@/lib/routePath';
import GenericAddForm from '@/app/_component/GenericAddForm';
import { annuallySubjectSyllabusStatusSchema } from '@/lib/zodschema';
import { annuallySubjectSyllabusStatusFields } from '@/lib/fields';

const AddAnnuallySubjectSyllabusStatus = () => {
  return (
    <GenericAddForm
      schema={annuallySubjectSyllabusStatusSchema}
      fields={annuallySubjectSyllabusStatusFields}
      apiEndpoint={routes.CREATE_ANNUALLY_SUBJECT_SYLLABUS_STATUS}
      successMessage="Annually Subject Syllabus Status added successfully"
      failureMessage="Failed to add syllabus status"
      dialogTitle="Add New Annually Subject Syllabus Status"
      dialogDescription="Fill in the details to add a new annually subject syllabus status."
    />
  );
};

export default AddAnnuallySubjectSyllabusStatus;
