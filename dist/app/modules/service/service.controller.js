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
exports.serviceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sensResponse_1 = __importDefault(require("../../utils/sensResponse"));
const service_serviece_1 = require("./service.serviece");
const createService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_serviece_1.serviceServices.createServiceIntoDB(req.body);
    (0, sensResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Service is created succesfully",
        data: result,
    });
}));
const getSingleService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_serviece_1.serviceServices.getSingleServiceFromDB(id);
    (0, sensResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: " Service retrieved successfully",
        data: result,
    });
}));
const getAllService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_serviece_1.serviceServices.getAllServiceFromDB();
    (0, sensResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: " Services retrieved successfully ",
        data: result,
    });
}));
const updateService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_serviece_1.serviceServices.updateServiceIntoDB(id, req.body);
    (0, sensResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Service is created succesfully",
        data: result,
    });
}));
// ! create slot controller
const createSlot = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { service, date, startTime, endTime } = req.body;
    const result = yield service_serviece_1.serviceServices.createSlotIntoDB({
        service,
        date,
        startTime,
        endTime,
    });
    (0, sensResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Slots created successfully",
        data: result,
    });
}));
exports.serviceController = {
    createService,
    getSingleService,
    getAllService,
    updateService,
    createSlot
};
