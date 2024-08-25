"use client"

import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { admissionSchema } from '@/lib/zodschema';
import PersonalInformation from './steps/PersonalInformation';
import ContactInformation from './steps/ContactInformation';
import PreviousEducation from './steps/PreviousEducation';
import ApplicationDetails from './steps/ApplicationDetails';
import { Button } from '@/components/ui/button';
import { MdNavigateNext } from 'react-icons/md';
import SubmitButton from '@/app/_component/SubmitButton';
import { Form } from '@/components/ui/form';
import { submitForm } from '@/lib/helper';
import { failedToastMessage, successToastMessage } from '@/lib/services';
import { CREATE_ADMISSION } from '@/lib/routePath';
import AddressInformation from './steps/AddressInformation ';

const AddAdmissions = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      student_name: "",
      father_name: "",
      date_of_birth: "",
      profile_image: null,
      state: "",
      district: "",
      locality: "",
      pincode: "",
      mobile_number: "",
      aadhar_number: "",
      previous_institution: "",
      previous_education: "",
      school_education: "",
      previous_result_status: "pass",
      applied_for: "",
      lc_given: false,
      pay_fees: false,
      fees_amount: "",
      required_donation: false,
      admission_status: "pending",
    },
  });

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleForm = async (data: any) => {
    try {
      const response = await submitForm(CREATE_ADMISSION, data, 'POST');
      if (response?.success) {
        successToastMessage("Admission successfully created");
        router.push('../admin/admissions/');
      } else {
        failedToastMessage("Failed to create admission");
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
    // form.setValue("profile_image", file);
//   };
// ``
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          if (currentStep === 5) {
            handleForm(data);
          } else {
            handleNext();
          }
        })}
      >
        {currentStep === 1 && (
          <PersonalInformation/>
        )}
        {currentStep === 2 && <AddressInformation />}
        {currentStep === 3 && <ContactInformation />}
        {currentStep === 4 && <PreviousEducation />}
        {currentStep === 5 && <ApplicationDetails />}

        <div className="flex justify-between mt-4 p-24">
          {currentStep > 1 && (
            <Button variant="link" type="button" onClick={handlePrev}>
              Previous
            </Button>
          )}
          {currentStep < 5 ? (
            <Button variant="link" type="button" onClick={handleNext}>
              Next <MdNavigateNext />
            </Button>
          ) : (
            <SubmitButton type="submit">Submit</SubmitButton>
          )}
        </div>
      </form>
    </FormProvider>
  );
};



export default AddAdmissions;
