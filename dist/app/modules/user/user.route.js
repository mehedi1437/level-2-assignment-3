"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
router.get("/:id", user_controller_1.userController.getSingleUser);
router.put("/:id", (0, validateRequest_1.default)(user_validation_1.userValidation.userValidationSchema), user_controller_1.userController.updateUser);
router.delete("/:id", user_controller_1.userController.deleteUser);
exports.userRoutes = router;
