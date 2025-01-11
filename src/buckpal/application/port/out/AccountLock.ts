import { AccountId } from '../../domain/model/Account';

interface AccountLock {
  lockAccount(accountId: AccountId):void;
  releaseAccount(accountId: AccountId):void;
}

export default AccountLock;
