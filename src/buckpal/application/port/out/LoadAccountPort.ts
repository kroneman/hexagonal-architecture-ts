import type Account from '../../domain/model/Account';

interface LoadAccountPort {
  loadAccount(accountId: number, baselineDate: Date): Account
}

export default LoadAccountPort;
