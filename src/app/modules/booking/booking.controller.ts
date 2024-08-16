import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sensResponse";
import { bookingService } from "./booking.serviece";

const createBooking = catchAsync(async (req, res) => {
  const customerId = req.user._id;
  const result = await bookingService.createBookingIntoDB(req.body, customerId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service is created succesfully",
    data: result,
  });
});
const getAllBookings = catchAsync(async (req, res) => {
  const result = await bookingService.getAllBookingsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service is created succesfully",
    data: result,
  });
});
export const bookingController = {
  createBooking,
  getAllBookings,
};
