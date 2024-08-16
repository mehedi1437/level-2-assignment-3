import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { ServiceRoutes } from "../modules/service/service.route";
import { slotRoutes } from "../modules/slot/slot.route";
import { authRoutes } from "../modules/auth/auth.route";
import { bookingRoutes } from "../modules/booking/booking.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
