"use client";

import React from 'react';

import { subjectFields } from '@/lib/fields';
import { routes } from '@/lib/routePath';
import GenericAddForm from '@/app/_component/GenericAddForm';
import { subjectSchema } from '@/lib/zodschema';

const AddSubject = () => {
  return (
    <GenericAddForm
      schema={subjectSchema}
      fields={subjectFields}
      apiEndpoint={routes.CREATE_SUBJECT}
      successMessage="Subject added successfully"
      failureMessage="Failed to add subject"
      dialogTitle="Add New Subject"
      dialogDescription="Fill in the details to add a new subject."
    />
  );
};

export default AddSubject;
