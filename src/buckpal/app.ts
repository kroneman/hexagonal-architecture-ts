import 'reflect-metadata';
import express from 'express';

import SendMoneyController from './adapter/in/web/SendMoneyController';
import { attachControllers } from '@decorators/express';
import registerProviders from './container';

const app = express();

registerProviders();
attachControllers(app, [SendMoneyController]);

export default app;
