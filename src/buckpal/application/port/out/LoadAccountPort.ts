import type { AccountId } from '../../domain/model/Account';
import type Account from '../../domain/model/Account';

interface LoadAccountPort {
  loadAccount(accountId: AccountId, baselineDate: Date): Account
}

export default LoadAccountPort;
