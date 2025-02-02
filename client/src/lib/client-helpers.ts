import toast from "react-hot-toast"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";

export const useDynamicFormConfig = (schema: ZodSchema, defaultValues: any) => {
  return useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });
};



export const successToastMessage = (message: string) => {
  toast.success(message);
};

export const failedToastMessage = (message: string) => {
  toast.error(message);
};


export const handleToast = (success: boolean, message: string) => {
  success ? successToastMessage(message) : failedToastMessage(message);
};