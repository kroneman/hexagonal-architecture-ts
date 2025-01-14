import SendMoneyUseCase from '../../port/in/SendMoneyUseCase';
import SendMoneyCommand from '../../port/in/SendMoneyCommand';
import { Inject, Injectable } from '@decorators/di';
import MoneyTransferProperties from './MoneyTransferProperties';
import ThresholdExceededException from './ThresholdExceededException';
import { subDays } from 'date-fns';

@Injectable()
class SendMoneyService implements SendMoneyUseCase {
  constructor(
    @Inject('MoneyTransferProperties')
    private moneyTransferProperties: MoneyTransferProperties,
  ) {}

  sendMoney(command: SendMoneyCommand): boolean {
    this.checkThreshold(command);

    const baselineDate = subDays(new Date(), 10);
    // const sourceAccount =

    return true;
  }

  private checkThreshold(command: SendMoneyCommand) {
    if (
      command.money.isGreaterThan(
        this.moneyTransferProperties.maximumTransferThreshold,
      )
    ) {
      throw new ThresholdExceededException(
        this.moneyTransferProperties.maximumTransferThreshold,
        command.money,
      );
    }
  }
}

export default SendMoneyService;
