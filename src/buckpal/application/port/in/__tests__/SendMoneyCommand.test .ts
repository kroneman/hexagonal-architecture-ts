import SendMoneyCommand from '../SendMoneyCommand';
import Account from '../../../domain/model/Account';
import Money from '../../../domain/model/Money';

describe('SendMoneyCommand', () => {
  it('fails validation, when null is passed into SendMoney command', () => {
    expect(() => new SendMoneyCommand(
      // @ts-ignore
      null,
      null,
      null
    )).toThrow();
  });

  it('passes validation, when valid inputs are passed', () => {
    expect(() => new SendMoneyCommand(
      new Account.AccountId(42),
      new Account.AccountId(43),
      Money.of(10)
    )).not.toThrow();
  });

  it('fails validation, when money is negative', () => {
    expect(() => new SendMoneyCommand(
      new Account.AccountId(42),
      new Account.AccountId(43),
      Money.of(-10)
    )).toThrow();
  });
});
