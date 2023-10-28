import { Router } from "express";
import accountRouter from "./account";
import authRouter from "./auth";

const router = Router();

router.use("/auth", authRouter);
router.use("/account", accountRouter);

export default router;
