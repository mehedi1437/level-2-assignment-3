/* eslint-disable @typescript-eslint/no-explicit-any */
import SlotModel from "./slot.model";

const getAvaliableSlots = async (date: string, serviceId: string) => {
  // Build query for optional parameters
  const query: any = {
    isBooked: "available",
  };
  if (date) {
    query.date = date;
  }
  if (serviceId) {
    query.service = serviceId;
  }
  const result = await SlotModel.find(query).populate('service');
  return result;
};

export const slotService = {
  
  getAvaliableSlots,
};
