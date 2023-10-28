import { chainsiteClient } from "../../../utils/axiosClient";
import { API_PATHS } from "../../../utils/constant";
import { parseUrlWithQuery } from "../../../utils/helper";
import Utils from "../../../utils/response";

const { internalResponse } = Utils;

const TAG = "account";

export const getUsers = async (
  authToken: string,
  filter: Record<string, any>
) => {
  try {
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    const url = parseUrlWithQuery(API_PATHS.ACCOUNT, filter);

    const resp = await chainsiteClient({
      url,
      method: "GET",
      headers,
    });

    console.log({ resp });
    if (!resp.success || resp.statusCode > 226)
      return internalResponse(true, resp.statusCode, resp.message, resp.data);
    return internalResponse(false, resp.statusCode, resp.message, resp.data);
  } catch (error: Error | unknown) {
    console.error(`${TAG}::getUsers ${String(error)}`);
    return internalResponse(true, 422, String(error), null);
  }
};

export const getAUser = async (userId: string, authToken: string) => {
  try {
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    const url = `${API_PATHS.ACCOUNT}${userId}`;

    const resp = await chainsiteClient({
      url,
      method: "GET",
      headers,
    });

    console.log({ resp });
    if (!resp.success || resp.statusCode > 226)
      return internalResponse(true, resp.statusCode, resp.message, resp.data);
    return internalResponse(false, resp.statusCode, resp.message, resp.data);
  } catch (error: Error | unknown) {
    console.error(`${TAG}::getAUser ${String(error)}`);
    return internalResponse(true, 422, String(error), null);
  }
};
