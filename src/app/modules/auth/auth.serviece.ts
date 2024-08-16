import bcrypt from "bcryptjs";
import { TUser } from "./auth.interface";
import { User } from "./auth.model";
import jwt from "jsonwebtoken";
import config from "../../config";

const registerUserIntoDB = async (payload: TUser) => {
  const existingUser = await User.findOne({ email: payload.email });
  if (existingUser) {
    throw new Error("User already exists");
  }
  const result = await User.create(payload);

  return result;
};

const loginUser = async (payload: TUser) => {
  const existingUser = await User.findOne({ email: payload?.email });
  // console.log(existingUser);
  if (!existingUser) {
    throw new Error("User doesn't exist");
  }
  //   cheaking if the password is correct
  const isPasswordMatched = await bcrypt.compare(
    payload?.password,
    existingUser.password
  );
  if (!isPasswordMatched) {
    throw new Error("Invalid email or password");
  }
  // create Token and send to the client
  const jwtPayload = {
    email: existingUser.email,
    role: existingUser.role,
    _id:existingUser._id
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: "10d",
  });

  return { accessToken };
};

export const authService = {
  registerUserIntoDB,
  loginUser,
};
