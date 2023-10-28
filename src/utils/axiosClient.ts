import axios from "axios";
import httpContext from "express-http-context";
import https from "https";
import config from "./config";

type methodTypes = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const TAG = "";

export const chainsiteClient = async ({
  url,
  method,
  payload = {},
  headers = {},
  reject_unauthorized = true,
}: {
  url: string;
  method: methodTypes;
  payload?: {
    [key: string]: Record<
      string,
      boolean | string | number | Record<string, any>
    >;
  };
  headers?: { [key: string]: string };
  reject_unauthorized?: boolean;
}) => {
  headers["Content-Type"] = headers["Content-Type"]
    ? headers["Content-Type"]
    : "application/json";

  let httpsAgent;
  if (!reject_unauthorized) {
    httpsAgent = new https.Agent({ rejectUnauthorized: false });
  }
  const reqId = httpContext.get("reqId");
  const sessionId = httpContext.get("sessionId");

  if (!headers.requestId && !headers.request_id) {
    headers.request_id = reqId || "NO-LSQ-ID";
  }

  if (!headers.sessionId && !headers.session_id) {
    headers.session_id = sessionId || reqId || "NO-SESSION-ID";
  }
  try {
    const baseUrl = config.BASE_URL;
    const _res = await axios({
      method: method,
      url: `${baseUrl}${url}`,
      data: payload,
      headers: headers,
      httpsAgent,
    });
    console.log({ _res });
    const responseBody = _res.data || _res.data;

    return {
      success: true,
      message: "success",
      data: responseBody,
      statusCode: _res.status,
    };
  } catch (e: any) {
    console.error(`${TAG}::makeRequest ${String(e)}`);
    const errmsg = e.message ?? e.response.data.message;
    const responseBody = e.response.data || e.response.data;
    const statusCode = e.response ? e.response.status : 500;
    return {
      success: true,
      message: errmsg,
      data: responseBody,
      statusCode: statusCode,
    };
  }
};
