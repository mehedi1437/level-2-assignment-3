import express from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
const router = express.Router();

router.get("/:id", userController.getSingleUser);
router.put(
  "/:id",
  validateRequest(userValidation.userValidationSchema),
  userController.updateUser
);
router.delete("/:id", userController.deleteUser);

export const userRoutes = router;
