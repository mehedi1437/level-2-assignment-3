"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/user/user.route");
const service_route_1 = require("../modules/service/service.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: user_route_1.userRoutes,
    },
    {
        path: "/services",
        route: service_route_1.ServiceRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
