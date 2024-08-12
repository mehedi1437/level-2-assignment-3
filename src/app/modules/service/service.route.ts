import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { serviceValidation } from "./service.validation";
import { serviceController } from "./service.controller";
const router = express.Router();

router.post(
  "/",
  validateRequest(serviceValidation.createServiceValidationSchema),
  serviceController.createService
);

router.get(
  "/:id",
  serviceController.getSingleService
);
router.get(
  "/",
  serviceController.getAllService
);
router.patch(
    '/:id',
    validateRequest(
        serviceValidation.updateServiceValidationSchema,
    ),
    serviceController.updateService,
  );

export const ServiceRoutes = router;
