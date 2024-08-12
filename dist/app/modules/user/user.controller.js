"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sensResponse_1 = __importDefault(require("../../utils/sensResponse"));
const http_status_1 = __importDefault(require("http-status"));
const user_serviece_1 = require("./user.serviece");
const getSingleUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield user_serviece_1.userService.getUserById(userId);
    if (!result) {
        return res.status(http_status_1.default.NOT_FOUND).json({ success: false, message: "User not found" });
    }
    (0, sensResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User is retrieved successfully",
        data: result,
    });
}));
const updateUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield user_serviece_1.userService.updateUser(userId, req.body);
    if (!result) {
        return res.status(http_status_1.default.NOT_FOUND).json({ success: false, message: "User not found" });
    }
    (0, sensResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User is updated successfully",
        data: result,
    });
}));
const deleteUser = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield user_serviece_1.userService.deleteUser(userId);
    if (!result) {
        return res.status(http_status_1.default.NOT_FOUND).json({ success: false, message: "User not found" });
    }
    (0, sensResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User is deleted successfully",
        data: result,
    });
}));
exports.userController = {
    getSingleUser,
    updateUser,
    deleteUser
};
