"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const auth_validation_1 = require("./auth.validation");
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.post("/signup", (0, validateRequest_1.default)(auth_validation_1.userValidation.registerValidationSchema), auth_controller_1.authController.registerUser);
router.post("/login", (0, validateRequest_1.default)(auth_validation_1.userValidation.loginValidationSchema), auth_controller_1.authController.loginUser);
exports.authRoutes = router;
