"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceValidation = void 0;
const zod_1 = require("zod");
const createServiceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        description: zod_1.z.string(),
        price: zod_1.z.number().min(0, { message: "Price must be a positive number" }),
        duration: zod_1.z
            .number()
            .min(1, { message: "Duration must be at least 1 minute" }),
        isDeleted: zod_1.z.boolean().default(false),
    }),
});
const updateServiceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().min(0, { message: "Price must be a positive number" }).optional(),
        duration: zod_1.z
            .number()
            .min(1, { message: "Duration must be at least 1 minute" }).optional(),
        isDeleted: zod_1.z.boolean().default(false).optional(),
    }),
});
exports.serviceValidation = {
    createServiceValidationSchema,
    updateServiceValidationSchema
};
