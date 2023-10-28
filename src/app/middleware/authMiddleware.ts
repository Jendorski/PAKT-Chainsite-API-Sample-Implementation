import { NextFunction, Request, Response } from "../..";
import Utils from "../../utils/response";

const { failed } = Utils;

const AuthenticationMiddleware = {
  authenticateUser: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let token = req.headers.authorization;
      if (!token) return failed(res, null, "No token provided", 401);

      token = token?.replace("Bearer ", "");
      if (!token) return failed(res, null, "No token supplied", 401);

      req.authToken = token;
      next();
    } catch (error: Error | unknown) {
      return failed(res, null, `Internal server error ${String(error)}`, 500);
    }
  },
};
export default AuthenticationMiddleware;
