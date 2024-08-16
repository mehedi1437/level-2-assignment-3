import { CreateSlotRequest, TSlot } from "../slot/slot.interface";
import SlotModel from "../slot/slot.model";
import { TService } from "./service.interface";
import { Service } from "./service.model";

const createServiceIntoDB = async (payload: TService) => {
  const result = await Service.create(payload);
  return result;
};

const getSingleServiceFromDB = async (id: string) => {
  const result = await Service.findById(id);
  return result;
};
const getAllServiceFromDB = async () => {
  const result = await Service.find();
  return result;
};
const updateServiceIntoDB = async (id: string, payload: Partial<TService>) => {
  const result = await Service.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// ! create slot 
const createSlotIntoDB = async ({
  service,
  date,
  startTime,
  endTime,
}: CreateSlotRequest): Promise<TSlot[]> => {
  // Convert startTime and endTime to minutes
  const startMinutes =
    parseInt(startTime.split(":")[0]) * 60 + parseInt(startTime.split(":")[1]);
  const endMinutes =
    parseInt(endTime.split(":")[0]) * 60 + parseInt(endTime.split(":")[1]);

  const serviceDuration = 60; // Assuming 60 minutes per slot
  const totalDuration = endMinutes - startMinutes;
  const numberOfSlots = totalDuration / serviceDuration;

  const slots: TSlot[] = [];

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

    const slot = await SlotModel.create({
      service,
      date,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      isBooked: "available",
    });


    slots.push(slot);
  }
  return slots;
};

export const serviceServices = {
  createServiceIntoDB,
  getSingleServiceFromDB,
  getAllServiceFromDB,
  updateServiceIntoDB,
  createSlotIntoDB
};
