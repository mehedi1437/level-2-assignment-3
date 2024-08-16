import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { serviceValidation } from "./service.validation";
import { serviceController } from "./service.controller";
import { SlotValidation } from "../slot/slot.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../auth/user.const";
const router = express.Router();

router.post(
  "/",
  auth(USER_ROLE.admin),
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
    '/:id',auth(USER_ROLE.admin),
    validateRequest(
        serviceValidation.updateServiceValidationSchema,
    ),
    serviceController.updateService,
  );
  // ! slot create route
  router.post("/slots",auth(USER_ROLE.admin), validateRequest(SlotValidation.createSlotValidationSchemaSchema), serviceController.createSlot);

export const ServiceRoutes = router;
