"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SlotSchema = new mongoose_1.Schema({
    service: { type: mongoose_1.Schema.Types.ObjectId, ref: "service", required: true },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isBooked: { type: String, enum: ["available", "booked"], default: "available" },
}, { timestamps: true });
const SlotModel = (0, mongoose_1.model)("Slot", SlotSchema);
exports.default = SlotModel;
