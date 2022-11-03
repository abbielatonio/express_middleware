export default class ValidationError extends Error {
  status = 422;
  constructor(message) {
    super(message);
  }
}
