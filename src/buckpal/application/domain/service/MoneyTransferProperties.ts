import { Injectable } from '@decorators/di';
import Money from '../model/Money';

@Injectable()
class MoneyTransferProperties {
  public maximumTransferThreshold: Money = Money.of(1_000_000);
}

export default MoneyTransferProperties;
