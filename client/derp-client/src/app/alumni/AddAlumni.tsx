"use client"

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import GenericAddForm from '../_component/GenericAddForm'
import { alumniSchema } from '@/lib/zodschema'
import { routes } from "@/lib/routePath";
import { alumniFields } from '@/lib/fields'

const AddAlumni = () => {
  const router = useRouter();

  return (
    <>
      <GenericAddForm
        schema={alumniSchema}
        fields={alumniFields}
        apiEndpoint={`${routes.CREATE_ALUMNI}`}
        successMessage="Alumni added successfully"
        failureMessage="Failed to add alumni"
        dialogTitle="Add Alumni"
        dialogDescription="Add alumni details here"
      />
    </>
  );
}

export default AddAlumni;
