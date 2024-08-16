"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_validation_1 = require("./service.validation");
const service_controller_1 = require("./service.controller");
const slot_validation_1 = require("../slot/slot.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const user_const_1 = require("../auth/user.const");
const router = express_1.default.Router();
router.post("/", (0, auth_1.default)(user_const_1.USER_ROLE.admin), (0, validateRequest_1.default)(service_validation_1.serviceValidation.createServiceValidationSchema), service_controller_1.serviceController.createService);
router.get("/:id", service_controller_1.serviceController.getSingleService);
router.get("/", service_controller_1.serviceController.getAllService);
router.put("/:id", (0, auth_1.default)(user_const_1.USER_ROLE.admin), (0, validateRequest_1.default)(service_validation_1.serviceValidation.updateServiceValidationSchema), service_controller_1.serviceController.updateService);
router.delete("/:id", (0, auth_1.default)(user_const_1.USER_ROLE.admin), service_controller_1.serviceController.deleteService);
// ! slot create route
router.post("/slots", (0, auth_1.default)(user_const_1.USER_ROLE.admin), (0, validateRequest_1.default)(slot_validation_1.SlotValidation.createSlotValidationSchemaSchema), service_controller_1.serviceController.createSlot);
exports.ServiceRoutes = router;
