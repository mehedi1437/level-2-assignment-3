import mongoose from "mongoose";

export type TBooking = {
  customer: mongoose.Types.ObjectId;
  serviceId: mongoose.Types.ObjectId;
  slotId: mongoose.Types.ObjectId;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};
