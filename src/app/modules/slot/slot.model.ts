import  { model, Schema } from "mongoose";
import { TSlot } from "./slot.interface";

const SlotSchema = new Schema<TSlot>(
  {
    service: { type: Schema.Types.ObjectId, ref: "service", required: true },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isBooked: { type: String, enum: ["available", "booked"], default: "available" },
  },
  { timestamps: true }
);

const SlotModel = model<TSlot>("Slot", SlotSchema);

export default SlotModel;