import { z } from "zod";

const userValidationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  role: z.enum(["admin", "user"]).optional().default("user"),
  address: z.string().min(1, { message: "Address is required" }),
});

export const userValidation = { userValidationSchema };
