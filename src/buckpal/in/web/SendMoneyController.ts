import {Controller, Get, Response, Request} from "@decorators/express";
import {Response as ResponseType} from 'express';

@Controller('/')
class SendMoneyController {
  @Get('/endpoint')
  getEndpoint(@Response() response: ResponseType) {
    response.json({
      foo: 'bar'
    })
  }
}

export default SendMoneyController;
