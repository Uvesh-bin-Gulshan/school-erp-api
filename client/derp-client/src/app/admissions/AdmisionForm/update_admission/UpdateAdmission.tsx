"use client";
import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { admissionSchema } from "@/lib/zodschema";
import PersonalInformation from "../steps/PersonalInformation";
import ApplicationDetails from "../steps/ApplicationDetails";
import { MdNavigateNext } from "react-icons/md";
import { UPDATE_ADMISSION } from "@/lib/routePath";
import { failedToastMessage, successToastMessage } from "@/lib/client-helpers";
import AddressInformation from "../steps/AddressInformation ";

const UpdateAdmission = ({ admissionData }: { admissionData: any }) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      student_name: admissionData?.student_name || "",
      father_name: admissionData?.father_name || "",
      date_of_birth: admissionData?.date_of_birth || "",
      profile_image: admissionData?.profile_image || null,
      state: admissionData?.state || "",
      district: admissionData?.district || "",
      locality: admissionData?.locality || "",
      pincode: admissionData?.pincode || "",
      mobile_number: admissionData?.mobile_number || "",
      aadhar_number: admissionData?.aadhar_number || "",
      previous_institution: admissionData?.previous_institution || "",
      previous_education: admissionData?.previous_education || "",
      school_education: admissionData?.school_education || "",
      previous_result_status: admissionData?.previous_result_status || "pass",
      applied_for: admissionData?.applied_for || "",
      lc_given: admissionData?.lc_given || false,
      pay_fees: admissionData?.pay_fees || false,
      fees_amount: admissionData?.fees_amount || "",
      required_donation: admissionData?.required_donation || false,
      admission_status: admissionData?.admission_status || "pending",
    },
  });

  // Wait until admissionData is available before rendering the form
  if (!admissionData) {
    return <div>Loading...</div>;
  }

  const stepFields = [
    ["student_name", "father_name", "date_of_birth", "profile_image"],
    ["state", "district", "locality", "pincode", "mobile_number", "aadhar_number"],
    ["previous_institution", "previous_education", "school_education", "applied_for", "fees_amount"],
  ];
  useEffect(() => {
    if (admissionData) {
      form.setValue("student_name", admissionData.student_name || "");
      form.setValue("father_name", admissionData.father_name || "");
      form.setValue("date_of_birth", admissionData.date_of_birth || "");
      form.setValue("profile_image", admissionData.profile_image || null);
      form.setValue("state", admissionData.state || "");
      form.setValue("district", admissionData.district || "");
      form.setValue("locality", admissionData.locality || "");
      form.setValue("pincode", admissionData.pincode || "");
      form.setValue("mobile_number", admissionData.mobile_number || "");
      form.setValue("aadhar_number", admissionData.aadhar_number || "");
      form.setValue("previous_institution", admissionData.previous_institution || "");
      form.setValue("previous_education", admissionData.previous_education || "");
      form.setValue("school_education", admissionData.school_education || "");
      form.setValue("previous_result_status", admissionData.previous_result_status || "pass");
      form.setValue("applied_for", admissionData.applied_for || "");
      form.setValue("lc_given", admissionData.lc_given || false);
      form.setValue("pay_fees", admissionData.pay_fees || false);
      form.setValue("fees_amount", admissionData.fees_amount || "");
      form.setValue("required_donation", admissionData.required_donation || false);
      form.setValue("admission_status", admissionData.admission_status || "pending");
    }
  }, [admissionData, form]);
  
  
  const steps = [
    <PersonalInformation key="1" />,
    <AddressInformation key="2" />,
    <ApplicationDetails key="3" />,
  ];

  const handleNext = async () => {
    const isValid = await form.trigger(stepFields[currentStep - 1]);
    if (isValid && currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleFormSubmit = async (data: any) => {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        if (data[key] instanceof File) {
          formData.append(key, data[key]);
        } else {
          formData.append(key, data[key]);
        }
      });

      const response = await fetch(`${UPDATE_ADMISSION}/${admissionData.id}`, {
        method: "PUT",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (result?.success) {
        successToastMessage("Admission successfully updated");
        router.push("../admissions/");
      } else {
        const errorMessages = Object.values(result.errors).flat().join("\n");
        failedToastMessage(`Failed to update admission: ${errorMessages}`);
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      failedToastMessage("An unexpected error occurred.");
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          if (currentStep === steps.length) {
            handleFormSubmit(data);
          }
        })}
      >
        {steps[currentStep - 1]}

        <div className="flex justify-between mt-4 p-24 overflow-hidden">
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

export default UpdateAdmission;

