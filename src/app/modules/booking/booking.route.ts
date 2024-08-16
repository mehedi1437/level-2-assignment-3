import express from "express";
import { bookingController } from "./booking.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bookingValidation } from "./booking.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../auth/user.const";

const router = express.Router();

router.post(
  "/",
  auth(USER_ROLE.user),
  validateRequest(bookingValidation.cretaeBookingValidationSchema),
  bookingController.createBooking
);

router.get("/", auth(USER_ROLE.admin), bookingController.getAllBookings);

export const bookingRoutes = router;

