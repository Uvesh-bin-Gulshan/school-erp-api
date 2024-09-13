"use client";

import React from 'react';

import { syllabusTypeFields } from '@/lib/fields';
import { routes } from '@/lib/routePath';
import GenericAddForm from '@/app/_component/GenericAddForm';
import { syllabusTypeSchema } from '@/lib/zodschema';

const AddSyllabusType = () => {
  return (
    <GenericAddForm
      schema={syllabusTypeSchema}
      fields={syllabusTypeFields}
      apiEndpoint={routes.CREATE_SYLLABUS_TYPE}
      successMessage="Syllabus Type added successfully"
      failureMessage="Failed to add Syllabus Type"
      dialogTitle="Add New Syllabus Type"
      dialogDescription="Fill in the details to add a new Syllabus Type."
    />
  );
};

export default AddSyllabusType;
