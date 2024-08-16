import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sensResponse";
import { bookingService } from "./booking.serviece";

const createBooking = catchAsync(async (req, res) => {
  const customerId = req.user._id;
  const result = await bookingService.createBookingIntoDB(req.body, customerId);
  if (!result) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ success: false, message: "Booking not found" });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Booking  succesful",
    data: result,
  });
});
const getAllBookings = catchAsync(async (req, res) => {
  const result = await bookingService.getAllBookingsFromDB();
  if (result.length < 1) {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.NOT_FOUND,
      message: "Bookings not available",
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "All Booking retrived succesfully",
    data: result,
  });
});
const getUserBookings = catchAsync(async (req, res) => {
  const customerId = req.user._id;
  const result = await bookingService.getUserBookingsFromDB(
    customerId as string
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User bookings retrieved successfully",
    data: result,
  });
});
export const bookingController = {
  createBooking,
  getAllBookings,
  getUserBookings,
};
