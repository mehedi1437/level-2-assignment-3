import { z } from "zod";

export const cretaeBookingValidationSchema = z.object({
  body: z.object({
    serviceId: z.string().min(24, "Invalid service ID"),
    slotId: z.string().min(24, "Invalid slot ID"),
    vehicleType: z.string().min(1),
    vehicleBrand: z.string().min(1),
    vehicleModel: z.string().min(1),
    manufacturingYear: z.number().min(1900),
    registrationPlate: z.string().min(1),
  }),
});

export const bookingValidation = {
  cretaeBookingValidationSchema,
};
