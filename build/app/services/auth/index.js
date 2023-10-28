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
exports.registerService = exports.loginService = void 0;
const axiosClient_1 = require("../../../utils/axiosClient");
const constant_1 = require("../../../utils/constant");
const response_1 = __importDefault(require("../../../utils/response"));
const { internalResponse } = response_1.default;
const TAG = "services/auth";
const loginService = ({ email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = {
            email,
            password,
        };
        const url = constant_1.API_PATHS.LOGIN;
        const resp = yield (0, axiosClient_1.chainsiteClient)({
            url,
            method: "POST",
            payload,
        });
        if (!resp.success || resp.statusCode > 226)
            return internalResponse(true, resp.statusCode, resp.message, resp.data);
        return internalResponse(false, resp.statusCode, resp.message, resp.data);
    }
    catch (error) {
        console.log(`${TAG}::loginService ${String(error)}`);
        return internalResponse(true, 422, String(error), null);
    }
});
exports.loginService = loginService;
const registerService = ({ firstName, lastName, email, password, referral, }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = {
            firstName,
            lastName,
            email,
            password,
            referral,
        };
        const url = constant_1.API_PATHS.REGISTER;
        const resp = yield (0, axiosClient_1.chainsiteClient)({
            url,
            method: "POST",
            payload,
        });
        console.log({ resp });
        if (!resp.success || resp.statusCode > 226)
            return internalResponse(true, resp.statusCode, resp.message, resp.data);
        return internalResponse(false, resp.statusCode, resp.message, resp.data);
    }
    catch (error) {
        console.log(`${TAG}::registerService ${String(error)}`);
        return internalResponse(true, 422, String(error), null);
    }
});
exports.registerService = registerService;
