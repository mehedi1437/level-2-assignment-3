import express from "express";
import { bookingController } from "./booking.controller";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../auth/user.const";

const router = express.Router();
router.get("/", auth(USER_ROLE.user), bookingController.getUserBookings);

export const myBookingsRoutes = router