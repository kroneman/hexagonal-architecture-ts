
class ValidationException extends Error {
  name = 'ValidationException'

  constructor(message: string) {
    super(message);
  }
}

export default ValidationException;
