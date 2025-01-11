import Money from '../../domain/model/Money';
import { AccountId } from '../../domain/model/Account';

interface GetAccountBalanceQuery {
  accountId: AccountId
}

interface GetAccountBalanceUseCase {
  getAccountBalance(query: GetAccountBalanceQuery): Money;
}

export default GetAccountBalanceUseCase;
