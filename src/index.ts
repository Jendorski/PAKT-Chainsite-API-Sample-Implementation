import bodyParser from "body-parser";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import api from "./app/routes/index";
import config from "./utils/config";
import morganMiddleware from "./utils/morgan";

const app = express();

declare global {
  namespace Express {
    export interface Request {
      authToken?: string;
    }
  }
}

// App Midlewares
app.set("trust proxy", true);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);
app.use(morganMiddleware);
app.use(helmet());
app.use(cors());
app.options("*", cors());

app.use(api);

app.listen(config.PORT, function () {
  console.info(`app running on ${config.PORT}`);
});

export default app;
export { NextFunction, Request, Response };
