import express from "express";
import {attachControllers} from "@decorators/express";

import SendMoneyController from "./in/web/SendMoneyController";

const app = express();
attachControllers(app, [SendMoneyController]);

export default app;
