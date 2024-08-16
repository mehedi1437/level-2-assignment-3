import SlotModel from "../slot/slot.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBookingIntoDB = async (payload: TBooking, customerId: string) => {
  const slot = await SlotModel.findById(payload.slotId);

  if (!slot) {
    throw new Error("Slot not found");
  }

  if (slot.isBooked !== "available") {
    throw new Error("Slot is already booked");
  }
  slot.isBooked = "booked";
  await slot.save();
  const result = await Booking.create({
    ...payload,
    customer: customerId,
  });
  const populatedResult = await result.populate("customer serviceId slotId");
  return populatedResult;
};

const getAllBookingsFromDB = async () => {
  const result = await Booking.find()
    .populate("customer")
    .populate("serviceId")
    .populate("slotId");

  return result;
};

export const bookingService = {
  createBookingIntoDB,
  getAllBookingsFromDB,
};
