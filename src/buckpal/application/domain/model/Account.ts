export class AccountId {
  constructor(private readonly value: number) {}
}

class Account {
  static AccountId = AccountId;

  private id: AccountId;

  constructor(id: AccountId) {
    this.id = id;
  }
}

export default Account;
