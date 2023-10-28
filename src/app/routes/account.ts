import { Router } from "express";
import AccountController from "../controller/account/AccountController";
import AuthenticationMiddleware from "../middleware/authMiddleware";

const { authenticateUser } = AuthenticationMiddleware;
const { getUsers, getAUser } = AccountController;

const router = Router();

router.get("/", authenticateUser, getUsers);
router.get("/:id", authenticateUser, getAUser);

export default router;
