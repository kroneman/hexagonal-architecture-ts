import { Container } from '@decorators/express';
import SendMoneyService from './application/domain/service/SendMoneyService';
import MoneyTransferProperties from './application/domain/service/MoneyTransferProperties';
import AccountPersistenceAdapter from './adapter/out/persistence/AccountPersistenceAdapter';

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
    {
      provide: 'LoadAccountPort',
      useClass: AccountPersistenceAdapter
    }
  ]);
};

export default registerProviders;
