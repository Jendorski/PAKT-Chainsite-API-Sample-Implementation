import { Router } from "express";
import AuthController from "../controller/auth/AuthController";

const { login, register } = AuthController;

const router = Router();

router.post("/login", login);
router.post("/register", register);

export default router;
