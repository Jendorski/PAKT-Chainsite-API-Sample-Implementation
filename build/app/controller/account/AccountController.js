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
const account_1 = require("../../services/account");
const { success, failed } = response_1.default;
const AccountController = {
    getUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const authToken = req.authToken;
        const filter = Object.assign({}, req.query);
        const resp = yield (0, account_1.getUsers)(String(authToken), filter);
        if (resp === null || resp === void 0 ? void 0 : resp.error)
            return failed(res, resp.data, resp.message, resp.statusCode);
        return success(res, resp.data, resp.message, resp.statusCode);
    }),
    getAUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const authToken = req.authToken;
        const id = req.params.id;
        const resp = yield (0, account_1.getAUser)(id, String(authToken));
        if (resp === null || resp === void 0 ? void 0 : resp.error)
            return failed(res, resp.data, resp.message, resp.statusCode);
        return success(res, resp.data, resp.message, resp.statusCode);
    }),
};
exports.default = AccountController;
