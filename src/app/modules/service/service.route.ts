import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { serviceValidation } from "./service.validation";
import { serviceController } from "./service.controller";
import { SlotValidation } from "../slot/slot.validation";
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
  // ! slot create route
  router.post("/slots", validateRequest(SlotValidation.createSlotValidationSchemaSchema), serviceController.createSlot);

export const ServiceRoutes = router;
