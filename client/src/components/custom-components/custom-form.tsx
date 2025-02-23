import React from "react";
import { Form } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { submitForm } from "@/lib/helper";
import { successToastMessage, failedToastMessage } from "@/lib/client-helpers";

interface CustomFormProps {
  form: UseFormReturn<any>;
  children: React.ReactNode;
  submitPath: string;
  onSuccess?: (response: any) => void;
  className?: string;
  buttonText?: string;
}

const CustomForm = ({
  form,
  children,
  submitPath,
  onSuccess,
  className,
  buttonText = "Submit"
}: CustomFormProps) => {
  const handleSubmit = async (values: any) => {
    try {
      const response = await submitForm(submitPath, values, "POST");
      if (response?.success) {
        successToastMessage("Operation successful");
        if (onSuccess) {
          onSuccess(response);
        }
      } else {
        failedToastMessage(response?.message || "Operation failed");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      failedToastMessage("An error occurred");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className={className}>
        {children}
        <div className="p-2">
          <Button 
            type="submit"
            className={cn(
              "w-full bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-700 hover:text-cyan-800 hover:bg-white"
            )}
          >
            {buttonText}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CustomForm;