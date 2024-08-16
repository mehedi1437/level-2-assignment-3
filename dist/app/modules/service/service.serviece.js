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
exports.serviceServices = void 0;
const slot_model_1 = __importDefault(require("../slot/slot.model"));
const service_model_1 = require("./service.model");
const createServiceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.create(payload);
    return result;
});
const getSingleServiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.findById(id);
    return result;
});
const getAllServiceFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.find();
    return result;
});
const updateServiceIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_model_1.Service.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
// ! create slot 
const createSlotIntoDB = (_a) => __awaiter(void 0, [_a], void 0, function* ({ service, date, startTime, endTime, }) {
    // Convert startTime and endTime to minutes
    const startMinutes = parseInt(startTime.split(":")[0]) * 60 + parseInt(startTime.split(":")[1]);
    const endMinutes = parseInt(endTime.split(":")[0]) * 60 + parseInt(endTime.split(":")[1]);
    const serviceDuration = 60; // Assuming 60 minutes per slot
    const totalDuration = endMinutes - startMinutes;
    const numberOfSlots = totalDuration / serviceDuration;
    const slots = [];
    for (let i = 0; i < numberOfSlots; i++) {
        const slotStartTime = startMinutes + i * serviceDuration;
        const slotEndTime = slotStartTime + serviceDuration;
        // Convert minutes back to time format
        const formattedStartTime = `${Math.floor(slotStartTime / 60)
            .toString()
            .padStart(2, "0")}:${(slotStartTime % 60).toString().padStart(2, "0")}`;
        const formattedEndTime = `${Math.floor(slotEndTime / 60)
            .toString()
            .padStart(2, "0")}:${(slotEndTime % 60).toString().padStart(2, "0")}`;
        const slot = yield slot_model_1.default.create({
            service,
            date,
            startTime: formattedStartTime,
            endTime: formattedEndTime,
            isBooked: "available",
        });
        slots.push(slot);
    }
    return slots;
});
exports.serviceServices = {
    createServiceIntoDB,
    getSingleServiceFromDB,
    getAllServiceFromDB,
    updateServiceIntoDB,
    createSlotIntoDB
};
