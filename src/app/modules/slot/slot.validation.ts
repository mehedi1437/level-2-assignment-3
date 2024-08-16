import { z } from "zod";

const createSlotValidationSchemaSchema = z.object({
  body: z.object({
    service: z.string().nonempty("Service ID is required."),
    date: z.string().nonempty("Date is required."),
    startTime: z.string().nonempty("Start time is required."),
    endTime: z.string().nonempty("End time is required."),
  }),
});

export const SlotValidation = {
  createSlotValidationSchemaSchema,
};
