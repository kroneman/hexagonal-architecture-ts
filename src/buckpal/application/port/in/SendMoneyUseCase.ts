import SendMoneyCommand from './SendMoneyCommand';

interface SendMoneyUseCase {
  sendMoney(command: SendMoneyCommand): boolean;
}

export default SendMoneyUseCase;
