import { z } from "zod";
const createServiceValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number().min(0, { message: "Price must be a positive number" }),
    duration: z
      .number()
      .min(1, { message: "Duration must be at least 1 minute" }),
    isDeleted: z.boolean().default(false),
  }),
});
const updateServiceValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    price: z.number().min(0, { message: "Price must be a positive number" }).optional(),
    duration: z
      .number()
      .min(1, { message: "Duration must be at least 1 minute" }).optional(),
    isDeleted: z.boolean().default(false).optional(),
  }),
});

export const serviceValidation = {
  createServiceValidationSchema,
  updateServiceValidationSchema
};
