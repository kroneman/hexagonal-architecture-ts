import { AccountId } from '../../domain/model/Account';
import Money from '../../domain/model/Money';
import { IsNotEmpty, IsPositive, validateSync } from 'class-validator';
import ValidationException from '../../../common/ValidationException';

class SendMoneyCommand {
  @IsPositive()
  @IsNotEmpty()
  public money: Money

  @IsNotEmpty()
  public sourceAccountId: AccountId

  @IsNotEmpty()
  public targetAccountId: AccountId
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

  validate(command: SendMoneyCommand) {
    const validationErrors = validateSync(command);
    if (validationErrors.length) {
      throw new ValidationException("Invalid Send Money Command");
    }
  }
}

export default SendMoneyCommand;
