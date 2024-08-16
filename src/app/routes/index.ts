import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { ServiceRoutes } from "../modules/service/service.route";
import { slotRoutes } from "../modules/slot/slot.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
