"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name is required" }),
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    password: zod_1.z.string().min(1, { message: "Password is required" }),
    phone: zod_1.z.string().min(1, { message: "Phone number is required" }),
    role: zod_1.z.enum(["admin", "user"]).optional().default("user"),
    address: zod_1.z.string().min(1, { message: "Address is required" }),
});
exports.userValidation = { userValidationSchema };
