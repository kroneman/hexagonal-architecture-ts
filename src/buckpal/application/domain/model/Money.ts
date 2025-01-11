class Money {
  constructor(private readonly amount: number) {}

  isPositiveOrZero() {
    return this.amount >= 0;
  }

  isNegative() {
    return this.amount < 0;
  }

  isPositive() {
    return this.amount > 0;
  }

  isGreaterThanOrEqualTo(money: Money) {
    return this.amount >= money.amount;
  }

  isGreaterThan(money: Money) {
    return this.amount > money.amount;
  }

  static of(value: number) {
    return new Money(value);
  }

  static add(a: Money, b: Money) {
    return new Money(a.amount + b.amount);
  }

  static subtract(a: Money, b: Money) {
    return new Money(a.amount - b.amount);
  }

  minus(money: Money) {
    return new Money(this.amount - money.amount);
  }

  plus(money: Money) {
    return new Money(this.amount + money.amount);
  }

  negate() {
    return new Money(this.amount * -1);
  }
}

export default Money;
