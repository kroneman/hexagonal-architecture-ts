import { AccountId } from '../../domain/model/Account';
import Money from '../../domain/model/Money';
import { IsNotEmpty, validateSync } from 'class-validator';
import ValidationException from '../../../common/ValidationException';
import IsPositiveMoney from './IsPositiveMoney';

class SendMoneyCommand {
  @IsPositiveMoney()
  @IsNotEmpty()
  public money: Money;

  @IsNotEmpty()
  public sourceAccountId: AccountId;

  @IsNotEmpty()
  public targetAccountId: AccountId;

  constructor(
    sourceAccountId: AccountId,
    targetAccountId: AccountId,
    money: Money
  ) {
    this.sourceAccountId = sourceAccountId;
    this.targetAccountId = targetAccountId;
    this.money = money;
    this.validate(this);
  }

  static fromParams(sourceAccountId: number, targetAccountId: number, amount: number) {
    return new SendMoneyCommand(
      new AccountId(sourceAccountId),
      new AccountId(targetAccountId),
      Money.of(amount));
  }

  validate(command: SendMoneyCommand) {
    const validationErrors = validateSync(command);
    if (validationErrors.length) {
      throw new ValidationException('Invalid Send Money Command');
    }
  }
}

export default SendMoneyCommand;
