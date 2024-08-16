"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotValidation = void 0;
const zod_1 = require("zod");
const createSlotValidationSchemaSchema = zod_1.z.object({
    body: zod_1.z.object({
        service: zod_1.z.string().nonempty("Service ID is required."),
        date: zod_1.z.string().nonempty("Date is required."),
        startTime: zod_1.z.string().nonempty("Start time is required."),
        endTime: zod_1.z.string().nonempty("End time is required."),
    }),
});
exports.SlotValidation = {
    createSlotValidationSchemaSchema,
};
