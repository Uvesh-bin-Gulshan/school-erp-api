import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, {
    message: "username must be at least 3 characters",
  }),
  password: z.string().min(8, {
    message: "password must be at least 3 characters",
  }),
});
