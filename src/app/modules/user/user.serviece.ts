/* eslint-disable @typescript-eslint/no-explicit-any */

import { User } from "../auth/auth.model";


const getUserById = async (userId: string) => {
  const result = await User.findById(userId);
  return result;
};

const updateUser = async (userId: string, updates: any) => {
  const result = User.findByIdAndUpdate(userId, updates, { new: true });
  return result;
};
const deleteUser = async (userId: string) => {
  const result = User.findByIdAndDelete(userId);
  return result;
};

export const userService = {
  getUserById,
  updateUser,
  deleteUser,
};
