import { Request, Response } from "express";
import Utils from "../../../utils/response";
import { loginService, registerService } from "../../services/auth";

const { success, failed } = Utils;

const AuthController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const resp = await loginService({ email, password });
    if (resp.error)
      return failed(res, resp.data, resp.message, resp.statusCode);
    return success(res, resp.data, resp.message, resp.statusCode);
  },
  register: async (req: Request, res: Response) => {
    const { firstName, lastName, email, password, referral } = req.body;
    const resp = await registerService({
      firstName,
      lastName,
      email,
      password,
      referral,
    });
    if (resp.error)
      return failed(res, resp.data, resp.message, resp.statusCode);
    return success(res, resp.data, resp.message, resp.statusCode);
  },
};
export default AuthController;
