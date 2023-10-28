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
const response_1 = __importDefault(require("../../utils/response"));
const { failed } = response_1.default;
const AuthenticationMiddleware = {
    authenticateUser: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let token = req.headers.authorization;
            if (!token)
                return failed(res, null, "No token provided", 401);
            token = token === null || token === void 0 ? void 0 : token.replace("Bearer ", "");
            if (!token)
                return failed(res, null, "No token supplied", 401);
            req.authToken = token;
            next();
        }
        catch (error) {
            return failed(res, null, `Internal server error ${String(error)}`, 500);
        }
    }),
};
exports.default = AuthenticationMiddleware;
