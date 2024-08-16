import mongoose from "mongoose";

export type CreateSlotRequest = {
  service: mongoose.Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
};
export type TSlot = {
  service: mongoose.Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
};

export type CreateSlotResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TSlot[];
};
