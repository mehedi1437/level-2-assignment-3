"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_model_1 = require("./auth.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const registerUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield auth_model_1.User.findOne({ email: payload.email });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const result = yield auth_model_1.User.create(payload);
    return result;
});
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield auth_model_1.User.findOne({ email: payload === null || payload === void 0 ? void 0 : payload.email });
    // console.log(existingUser);
    if (!existingUser) {
        throw new Error("User doesn't exist");
    }
    //   cheaking if the password is correct
    const isPasswordMatched = yield bcryptjs_1.default.compare(payload === null || payload === void 0 ? void 0 : payload.password, existingUser.password);
    if (!isPasswordMatched) {
        throw new Error("Invalid email or password");
    }
    // create Token and send to the client
    const jwtPayload = {
        email: existingUser.email,
        role: existingUser.role,
        _id: existingUser._id,
    };
    const accessToken = jsonwebtoken_1.default.sign(jwtPayload, config_1.default.jwt_access_secret, {
        expiresIn: "10d",
    });
    return { accessToken };
});
exports.authService = {
    registerUserIntoDB,
    loginUser,
};
