import { Container } from '@decorators/express';
import SendMoneyService from '../application/domain/service/SendMoneyService';
import MoneyTransferProperties from '../application/domain/service/MoneyTransferProperties';

const registerProviders = () => {
  Container.provide([
    {
      provide: 'SendMoneyUseCase',
      useClass: SendMoneyService,
    },
    {
      provide: 'MoneyTransferProperties',
      useClass: MoneyTransferProperties,
    },
  ]);
};

export default registerProviders;
