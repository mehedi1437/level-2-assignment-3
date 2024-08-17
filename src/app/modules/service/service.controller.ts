import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sensResponse";
import { serviceServices } from "./service.serviece";

const createService = catchAsync(async (req, res) => {
  const result = await serviceServices.createServiceIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service is created succesfully",
    data: result,
  });
});
const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await serviceServices.getSingleServiceFromDB(id);
  if (!result) {
    return res
      .status(httpStatus.NOT_FOUND)
      .json({ success: false, message: "No Data Found" });
  }

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: " Service retrieved successfully",
    data: result,
  });
});
const getAllService = catchAsync(async (req, res) => {
  const result = await serviceServices.getAllServiceFromDB();
  if (result.length < 1) {
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.NOT_FOUND,
      message: 'No Data Found',
      data: result,
    });
  }
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: " Services retrieved successfully ",
    data: result,
  });
});
const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await serviceServices.updateServiceIntoDB(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service is created succesfully",
    data: result,
  });
});
const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await serviceServices.deleteServiceFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Service deleted successfully",
    data: result,
  });
});

// ! create slot controller
const createSlot = catchAsync(async (req, res) => {
  const { service, date, startTime, endTime } = req.body;
  const result = await serviceServices.createSlotIntoDB({
    service,
    date,
    startTime,
    endTime,
  });

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Slots created successfully",
    data: result,
  });
});
export const serviceController = {
  createService,
  getSingleService,
  getAllService,
  updateService,
  createSlot,
  deleteService
};
