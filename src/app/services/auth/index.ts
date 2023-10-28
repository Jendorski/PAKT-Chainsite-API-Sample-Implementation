import { chainsiteClient } from "../../../utils/axiosClient";
import { API_PATHS } from "../../../utils/constant";
import Utils from "../../../utils/response";

const { internalResponse } = Utils;

const TAG = "services/auth";

export const loginService = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const payload: Record<string, any> = {
      email,
      password,
    };

    const url = API_PATHS.LOGIN;

    const resp = await chainsiteClient({
      url,
      method: "POST",
      payload,
    });
    if (!resp.success || resp.statusCode > 226)
      return internalResponse(true, resp.statusCode, resp.message, resp.data);
    return internalResponse(false, resp.statusCode, resp.message, resp.data);
  } catch (error: Error | unknown) {
    console.log(`${TAG}::loginService ${String(error)}`);
    return internalResponse(true, 422, String(error), null);
  }
};

export const registerService = async ({
  firstName,
  lastName,
  email,
  password,
  referral,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  referral?: string;
}) => {
  try {
    const payload: Record<string, any> = {
      firstName,
      lastName,
      email,
      password,
      referral,
    };

    const url = API_PATHS.REGISTER;

    const resp = await chainsiteClient({
      url,
      method: "POST",
      payload,
    });
    console.log({ resp });
    if (!resp.success || resp.statusCode > 226)
      return internalResponse(true, resp.statusCode, resp.message, resp.data);
    return internalResponse(false, resp.statusCode, resp.message, resp.data);
  } catch (error: Error | unknown) {
    console.log(`${TAG}::registerService ${String(error)}`);
    return internalResponse(true, 422, String(error), null);
  }
};
