"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
exports.default = {
    BASE_URL: process.env.CHAINSITE_BASE_URL,
    AUTH_TOKEN: process.env.CHAINSITE_AUTH_TOKEN,
    PORT: process.env.PORT,
    ENV: "test",
    APP_NAME: "PAKT Chainsite API Sample Usage",
};
