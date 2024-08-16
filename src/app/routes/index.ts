import { Router } from "express";
import { ServiceRoutes } from "../modules/service/service.route";
import { slotRoutes } from "../modules/slot/slot.route";
import { authRoutes } from "../modules/auth/auth.route";
import { bookingRoutes } from "../modules/booking/booking.route";
import { myBookingsRoutes } from "../modules/booking/myBooking.route";

const router = Router();

const moduleRoutes = [
  
  {
    path: "/services",
    route: ServiceRoutes,
  },
  {
    path: "/slots",
    route: slotRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/bookings",
    route: bookingRoutes,
  },
  {
    path: "/my-bookings",
    route: myBookingsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
