import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sensResponse";
import { slotService } from "./slot.serviece";

const getAvaliableSlots = catchAsync(async (req, res) => {
  const { date, serviceId } = req.query;
  const result = await slotService.getAvaliableSlots(
    date as string,
    serviceId as string
  );
  if (result.length < 1) {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.NOT_FOUND,
      message: "No Data Found",
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Available slots retrieved successfully",
    data: result,
  });
});

export const slotController = {
  getAvaliableSlots,
};
