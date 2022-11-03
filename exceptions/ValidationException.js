export default class ValidationException extends Error {
  status = 422;

  constructor(message) {
    super(message);
  }
}
