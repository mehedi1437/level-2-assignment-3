import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./auth.validation";
import { authController } from "./auth.controller";

const router = express.Router();

router.post(
  "/signup",
  validateRequest(userValidation.registerValidationSchema),
  authController.registerUser
);
router.post(
  "/login",
  validateRequest(userValidation.loginValidationSchema),
  authController.loginUser
);

export const authRoutes =router
