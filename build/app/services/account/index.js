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
exports.getAUser = exports.getUsers = void 0;
const axiosClient_1 = require("../../../utils/axiosClient");
const constant_1 = require("../../../utils/constant");
const helper_1 = require("../../../utils/helper");
const response_1 = __importDefault(require("../../../utils/response"));
const { internalResponse } = response_1.default;
const TAG = "account";
const getUsers = (authToken, filter) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const headers = {
            Authorization: `Bearer ${authToken}`,
        };
        const url = (0, helper_1.parseUrlWithQuery)(constant_1.API_PATHS.ACCOUNT, filter);
        const resp = yield (0, axiosClient_1.chainsiteClient)({
            url,
            method: "GET",
            headers,
        });
        console.log({ resp });
        if (!resp.success || resp.statusCode > 226)
            return internalResponse(true, resp.statusCode, resp.message, resp.data);
        return internalResponse(false, resp.statusCode, resp.message, resp.data);
    }
    catch (error) {
        console.error(`${TAG}::getUsers ${String(error)}`);
        return internalResponse(true, 422, String(error), null);
    }
});
exports.getUsers = getUsers;
const getAUser = (userId, authToken) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const headers = {
            Authorization: `Bearer ${authToken}`,
        };
        const url = `${constant_1.API_PATHS.ACCOUNT}${userId}`;
        const resp = yield (0, axiosClient_1.chainsiteClient)({
            url,
            method: "GET",
            headers,
        });
        console.log({ resp });
        if (!resp.success || resp.statusCode > 226)
            return internalResponse(true, resp.statusCode, resp.message, resp.data);
        return internalResponse(false, resp.statusCode, resp.message, resp.data);
    }
    catch (error) {
        console.error(`${TAG}::getAUser ${String(error)}`);
        return internalResponse(true, 422, String(error), null);
    }
});
exports.getAUser = getAUser;
