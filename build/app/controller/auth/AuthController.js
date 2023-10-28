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
const response_1 = __importDefault(require("../../../utils/response"));
const auth_1 = require("../../services/auth");
const { success, failed } = response_1.default;
const AuthController = {
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        const resp = yield (0, auth_1.loginService)({ email, password });
        if (resp.error)
            return failed(res, resp.data, resp.message, resp.statusCode);
        return success(res, resp.data, resp.message, resp.statusCode);
    }),
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { firstName, lastName, email, password, referral } = req.body;
        const resp = yield (0, auth_1.registerService)({
            firstName,
            lastName,
            email,
            password,
            referral,
        });
        if (resp.error)
            return failed(res, resp.data, resp.message, resp.statusCode);
        return success(res, resp.data, resp.message, resp.statusCode);
    }),
};
exports.default = AuthController;
