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
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(service_validation_1.serviceValidation.createServiceValidationSchema), service_controller_1.serviceController.createService);
exports.ServiceRoutes = router;
