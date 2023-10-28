"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function json_send(res, data, message, status, status_code, meta = {}) {
    data = data || null;
    message = message || "";
    status = status || "success";
    const d = {
        status,
        message,
        data,
    };
    res.statusCode = status_code;
    console.log({ message, meta });
    return res.status(status_code).json(d);
}
const Utils = {
    success: (express_res, data, message, status_code = 200, meta = {}) => {
        return json_send(express_res, data, message, "success", status_code, meta);
    },
    failed: (express_res, data, message, status_code = 400, meta = {}) => {
        return json_send(express_res, data, message, "error", status_code, meta);
    },
    internalResponse: (error, statusCode, message, data) => {
        return { error, statusCode, message, data };
    },
};
exports.default = Utils;
