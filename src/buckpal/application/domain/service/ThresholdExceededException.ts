import type Money from '../model/Money';

class ThresholdExceededException extends Error {
  status = 500;
  name = 'ThresholdExceededException';

  constructor(threshold: Money, actual: Money) {
    super(
      `Maximum threshold for transferring money exceeded: tried to transfer ${actual} but threshold is ${threshold}!`,
    );
  }
}

export default ThresholdExceededException;
