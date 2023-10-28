import { Request, Response } from "express";
import Utils from "../../../utils/response";
import { getAUser, getUsers } from "../../services/account";

const { success, failed } = Utils;

const AccountController = {
  getUsers: async (req: Request, res: Response) => {
    const authToken = req.authToken;

    const filter = { ...req.query };

    const resp = await getUsers(String(authToken), filter);
    if (resp?.error)
      return failed(res, resp.data, resp.message, resp.statusCode);
    return success(res, resp.data, resp.message, resp.statusCode);
  },
  getAUser: async (req: Request, res: Response) => {
    const authToken = req.authToken;
    const id = req.params.id;
    const resp = await getAUser(id, String(authToken));
    if (resp?.error)
      return failed(res, resp.data, resp.message, resp.statusCode);
    return success(res, resp.data, resp.message, resp.statusCode);
  },
};
export default AccountController;
