"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const morgan_1 = __importDefault(require("morgan"));
const stream = {
    // Use the http severity
    write: (message) => console.warn(message),
};
morgan_1.default.token("ip", (request) => request.ip);
morgan_1.default.token("timestamp", () => (0, moment_1.default)().format());
// Build the morgan middleware
const morganMiddleware = (0, morgan_1.default)(":method :url :status -- :response-time ms -- :ip", { stream });
exports.default = morganMiddleware;
