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
exports.slotService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const slot_model_1 = __importDefault(require("./slot.model"));
const getAvaliableSlots = (date, serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    // Build query for optional parameters
    const query = {
        isBooked: "available",
    };
    if (date) {
        query.date = date;
    }
    if (serviceId) {
        query.service = serviceId;
    }
    const result = yield slot_model_1.default.find(query).populate('service');
    return result;
});
exports.slotService = {
    getAvaliableSlots,
};
