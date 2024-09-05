"use client"
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { admissionSchema } from '@/lib/zodschema';
import PersonalInformation from './steps/PersonalInformation';
import ContactInformation from './steps/ContactInformation';
import PreviousEducation from './steps/PreviousEducation';
import ApplicationDetails from './steps/ApplicationDetails';
import { MdNavigateNext } from 'react-icons/md';
import SubmitButton from '@/app/_component/SubmitButton';
import { submitForm } from '@/lib/helper';
import { CREATE_ADMISSION } from '@/lib/routePath';
import { failedToastMessage, successToastMessage } from '@/lib/client-helpers';
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

  const steps = [
    <PersonalInformation key="1" />,
    <AddressInformation key="2" />,
    <ContactInformation key="3" />,
    <PreviousEducation key="4" />,
    <ApplicationDetails key="5" />,
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const handleForm = async (data: any) => {
    try {
      const formData = new FormData();
  
      // Append form fields to FormData
      Object.keys(data).forEach(key => {
        if (data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, data[key]);
        }
      });
  
      // Send the form data
      const response = await fetch(CREATE_ADMISSION, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
  
      const result = await response.json();
  
      if (result?.success) {
        successToastMessage("Admission successfully created");
        router.push('../admissions/');
      } else {
        // Display error messages from the API response
        const errorMessages = Object.values(result.errors).flat().join('\n');
        failedToastMessage(`Failed to create admission: ${errorMessages}`);
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
      failedToastMessage("An unexpected error occurred.");
    }
  };
  
  

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          if (currentStep === steps.length) {
            handleForm(data);
          } else {
            handleNext();
          }
        })}
      >
        {steps[currentStep - 1]}

        <div className="flex justify-between mt-4 p-24">
          {currentStep > 1 && (
            <button type="button" onClick={handlePrev}>
              Previous
            </button>
          )}
          {currentStep < steps.length ? (
            <button type="button" onClick={handleNext}>
              Next <MdNavigateNext />
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default AddAdmissions;
