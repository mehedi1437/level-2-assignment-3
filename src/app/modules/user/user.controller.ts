import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sensResponse";
import httpStatus from "http-status";
import { userService } from "./user.serviece";

const getSingleUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userService.getUserById(userId);
  if (!result) {
    return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "User not found" });
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is retrieved successfully",
    data: result,
  });
});
const updateUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userService.updateUser(userId, req.body);
  if (!result) {
    return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "User not found" });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is updated successfully",
    data: result,
  });
});
const deleteUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userService.deleteUser(userId);
  if (!result) {
    return res.status(httpStatus.NOT_FOUND).json({ success: false, message: "User not found" });
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is deleted successfully",
    data: result,
  });
});

export const userController = {
    getSingleUser,
  updateUser,
  deleteUser
};
