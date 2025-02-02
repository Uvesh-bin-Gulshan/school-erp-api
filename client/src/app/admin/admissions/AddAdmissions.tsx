"use client"

import React, { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { admissionSchema, loginSchema } from '@/lib/zodschema'
import { submitForm, successtoastMessage, failedtoastMessage } from '@/lib/services'
import { ADMISSION_LIST, CREATE_ADMISSION } from '@/lib/routePath'
import { Plus } from 'lucide-react'
import CustomButton from '@/app/_component/CustomButton'


import PersonalInformation from './steps/PersonalInformation'
import AddressInformation from './steps/AddressInformation '
import ContactInformation from './steps/ContactInformation'
import PreviousEducation from './steps/PreviousEducation'
import ApplicationDetails from './steps/ApplicationDetails'
import { MdNavigateNext } from 'react-icons/md'
import SubmitButton from '@/app/_component/SubmitButton'

const AddAdmissions = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const methods = useForm({
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

  const onNextStep = () => {
    setStep(step + 1);
  };

  const onPreviousStep = () => {
    setStep(step - 1);
  };

  const handleForm = async (data:any) => {
    try {
      const response = await submitForm(CREATE_ADMISSION, data, 'POST');
      if (response?.success) {
        console.log(response)
        successtoastMessage("Admission successfully created");
        router.push('../admin/admissions/');
      } else {
        failedtoastMessage("Failed to create admission");
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CustomButton text="Add Admission" icon={<Plus />} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Admission</DialogTitle>
        </DialogHeader>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleForm)} className="space-y-6">
            {step === 1 && <PersonalInformation />}
            {step === 2 && <AddressInformation />}
            {step === 3 && <ContactInformation />}
            {step === 4 && <PreviousEducation />}
            {step === 5 && <ApplicationDetails />}

            <div className="flex p-4 justify-between">
              {step > 1 && <CustomButton  text="Back" icon={<MdNavigateNext />} onClick={onPreviousStep} type="button" />}
              {step < 5 && <CustomButton  text="Next" icon={<MdNavigateNext />
} onClick={onNextStep} className="bg-green-300" type="button" />}
              {step === 5 &&<SubmitButton  text="Submit"  type="submit" />}
            </div>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}

export default AddAdmissions;
