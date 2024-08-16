import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import catchAsync from "../utils/catchAsync";
import config from "../config";
import { TUserRole } from "../modules/auth/auth.interface";

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    //    console.log(token);
    // if the token is exist
    if (!token) {
      throw new Error("You are not authorized");
    }
    //cheak if the  token is valid
    // invalid token
    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        // err
        if (err) {
          throw new Error("You are not authorized");
        }
        const role = (decoded as JwtPayload).role;
        if (requiredRoles && !requiredRoles.includes(role)) {
          throw new Error("You are not authorized");
        }
        req.user = decoded as JwtPayload;
        next();
      }
    );
  });
};

export default auth;
