"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AccountController_1 = __importDefault(require("../controller/account/AccountController"));
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const { authenticateUser } = authMiddleware_1.default;
const { getUsers, getAUser } = AccountController_1.default;
const router = (0, express_1.Router)();
router.get("/", authenticateUser, getUsers);
router.get("/:id", authenticateUser, getAUser);
exports.default = router;
