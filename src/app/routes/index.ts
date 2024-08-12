import { Router } from "express";
import { userRoutes } from "../modules/user/user.route";
import { ServiceRoutes } from "../modules/service/service.route";

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
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;