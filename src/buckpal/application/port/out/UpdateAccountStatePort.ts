import Account from '../../domain/model/Account';

interface UpdateAccountStatePort {
  updateActivities(account: Account): void
}

export default UpdateAccountStatePort;
