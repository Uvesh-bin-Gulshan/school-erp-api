"use client";
import React, { useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SubmitButton from "./SubmitButton";
import { MdModeEdit } from "react-icons/md";
import { submitForm } from "@/lib/helper";
import {
  handleToast,
  useDynamicFormConfig,
} from "@/lib/client-helpers";
import FieldRenderer from "./FieldRenderer";
import CustomButton from "./CustomButton";

interface GenericFormProps {
  schema: any;
  fields: any;
  apiEndpoint: string;
  initialData?: any;
  title: string;
  description: string;
  dataSource?:any;
}

const GenericForm = ({
  title,
  description,
  schema,
  fields,
  apiEndpoint,
  initialData,
  dataSource
}: GenericFormProps) => {
  const form = useDynamicFormConfig(schema, {
    defaultValues: {
      ...fields,
      ...initialData,
    },
  });

  const [isPending, startTransition] = useTransition(); // UseTransition for non-blocking updates

  const handleForm = async (event: any) => {
    event.preventDefault();
    const all_values = form.getValues();
    const formData = new FormData();

    fields.forEach((field:any) => {
      if (field.type === "file") {
        formData.append(field.name, all_values[field.name][0]); // Assuming single file upload
      } else {
        formData.append(field.name, all_values[field.name]);
      }
    });

    startTransition(async () => {
      const method = initialData ? "PUT" : "POST";
      const response = await submitForm(apiEndpoint, formData, method);
      handleToast(response.success, response.message);
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {initialData ? <MdModeEdit /> : <CustomButton text={"Add"} />}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}
          {initialData ? `Update ${title}`: <CustomButton text={"Add"} />}
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleForm} className="">
            {fields.map((field: any) => (
              <FieldRenderer key={field.name} field={field} dataSource={dataSource} />
            ))}
            <SubmitButton className="w-full" text="Submit" />
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default GenericForm;
