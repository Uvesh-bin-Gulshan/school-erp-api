"use client";
import React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { FormInput } from "@/components/custom-components/FormInput";
import SubmitButton from "@/components/custom-components/SubmitButton";
import { failedToastMessage, successToastMessage } from "@/lib/client-helpers";
import { submitForm } from "@/lib/helper";
import { routes } from "@/lib/routePath";
import { loginSchema } from "@/lib/zod-schema/auth-schema";
import CustomForm from "@/components/custom-components/custom-form";

const Login = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const router = useRouter();
  // const options = [
  //   { value: "light", label: "Light" },
  //   { value: "dark", label: "Dark" },
  //   { value: "system", label: "System" },
  // ];

  const handleSuccess = () => {
    router.push("../admissions");
  };

  return (
    <CustomForm 
      form={form}
      submitPath={routes.LOGIN}
      onSuccess={handleSuccess}
      buttonText="Login"
    >
      <FormField
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FormInput
                {...field}
                id="username"
                label="Username"
                type="text"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <FormInput
                {...field}
                id="password"
                label="Password"
                type="password"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </CustomForm>
  );
};

export default Login;
