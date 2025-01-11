import type SendMoneyUseCase from '../../../application/port/in/SendMoneyUseCase';

import * as express from 'express';

import SendMoneyCommand from '../../../application/port/in/SendMoneyCommand';
import { AccountId } from '../../../application/domain/model/Account';
import Money from '../../../application/domain/model/Money';

import { Controller, Params, Post, Response } from '@decorators/express';
import { Inject, InjectionToken } from '@decorators/di';

const SendMoneyUseCase = new InjectionToken('SendMoneyUseCase');

@Controller('/')
class SendMoneyController {
  constructor(
    @Inject(SendMoneyUseCase) private sendMoneyUseCase: SendMoneyUseCase,
  ) {}

  @Post('/accounts/send/:sourceAccountId/:targetAccountId/:amount')
  sendMoney(
    @Response() res: express.Response,
    @Params('sourceAccountId') sourceAccountId: number,
    @Params('targetAccountId') targetAccountId: number,
    @Params('amount') amount: number,
  ) {
    try {
      const sendMoneyCommand = new SendMoneyCommand(
        new AccountId(sourceAccountId),
        new AccountId(targetAccountId),
        Money.of(amount),
      );

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
