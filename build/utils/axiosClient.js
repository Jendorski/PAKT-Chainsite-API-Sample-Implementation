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
exports.chainsiteClient = void 0;
const axios_1 = __importDefault(require("axios"));
const express_http_context_1 = __importDefault(require("express-http-context"));
const https_1 = __importDefault(require("https"));
const config_1 = __importDefault(require("./config"));
const TAG = "";
const chainsiteClient = ({ url, method, payload = {}, headers = {}, reject_unauthorized = true, }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    headers["Content-Type"] = headers["Content-Type"]
        ? headers["Content-Type"]
        : "application/json";
    let httpsAgent;
    if (!reject_unauthorized) {
        httpsAgent = new https_1.default.Agent({ rejectUnauthorized: false });
    }
    const reqId = express_http_context_1.default.get("reqId");
    const sessionId = express_http_context_1.default.get("sessionId");
    if (!headers.requestId && !headers.request_id) {
        headers.request_id = reqId || "NO-LSQ-ID";
    }
    if (!headers.sessionId && !headers.session_id) {
        headers.session_id = sessionId || reqId || "NO-SESSION-ID";
    }
    try {
        const baseUrl = config_1.default.BASE_URL;
        const _res = yield (0, axios_1.default)({
            method: method,
            url: `${baseUrl}${url}`,
            data: payload,
            headers: headers,
            httpsAgent,
        });
        console.log({ _res });
        const responseBody = _res.data || _res.data;
        return {
            success: true,
            message: "success",
            data: responseBody,
            statusCode: _res.status,
        };
    }
    catch (e) {
        console.error(`${TAG}::makeRequest ${String(e)}`);
        const errmsg = (_a = e.message) !== null && _a !== void 0 ? _a : e.response.data.message;
        const responseBody = e.response.data || e.response.data;
        const statusCode = e.response ? e.response.status : 500;
        return {
            success: true,
            message: errmsg,
            data: responseBody,
            statusCode: statusCode,
        };
    }
});
exports.chainsiteClient = chainsiteClient;
