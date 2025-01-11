import type SendMoneyUseCase from '../../../application/port/in/SendMoneyUseCase';

import * as express from 'express';

import SendMoneyCommand from '../../../application/port/in/SendMoneyCommand';

import { Controller, Params, Post, Response } from '@decorators/express';
import { Inject } from '@decorators/di';

@Controller('/')
class SendMoneyController {
  constructor(
    @Inject('SendMoneyUseCase') private sendMoneyUseCase: SendMoneyUseCase,
  ) {}

  @Post('/accounts/send/:sourceAccountId/:targetAccountId/:amount')
  sendMoney(
    @Response() res: express.Response,
    @Params('sourceAccountId') sourceAccountId: number,
    @Params('targetAccountId') targetAccountId: number,
    @Params('amount') amount: number,
  ) {
    try {
      const sendMoneyCommand = SendMoneyCommand.fromParams(sourceAccountId, targetAccountId, amount);
      const success = this.sendMoneyUseCase.sendMoney(sendMoneyCommand);
      res.json({
        success,
      });
    } catch (e: any) {
      if (e?.status) {
        res.status(e.status);
      }

      res.send();
    }
  }
}

export default SendMoneyController;
