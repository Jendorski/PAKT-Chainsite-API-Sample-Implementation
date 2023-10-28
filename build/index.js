"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const helmet_1 = __importDefault(require("helmet"));
const index_1 = __importDefault(require("./app/routes/index"));
const config_1 = __importDefault(require("./utils/config"));
const morgan_1 = __importDefault(require("./utils/morgan"));
const app = (0, express_1.default)();
// App Midlewares
app.set("trust proxy", true);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, express_fileupload_1.default)({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(morgan_1.default);
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.options("*", (0, cors_1.default)());
app.use(index_1.default);
app.listen(config_1.default.PORT, function () {
    console.info(`app running on ${config_1.default.PORT}`);
});
exports.default = app;
