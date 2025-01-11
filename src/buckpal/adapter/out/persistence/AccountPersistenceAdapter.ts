import LoadAccountPort from '../../../application/port/out/LoadAccountPort';
import Account from '../../../application/domain/model/Account';

class AccountPersistenceAdapter implements LoadAccountPort {
  loadAccount(accountId: number, baselineDate: Date): Account {
    console.log(accountId);
    console.log(baselineDate);
    return undefined;
  }
}

export default AccountPersistenceAdapter;
