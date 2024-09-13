"use client";

import React from 'react';
import GenericAddForm from '../_component/GenericAddForm';
import { syllabusTypeSchema } from '@/lib/schema';
import { syllabusTypeFields } from '@/lib/fields';
import { routes } from '@/lib/routePath';

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
