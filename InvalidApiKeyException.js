export default class InvalidApiKeyException extends Error {
  status = 403;

  constructor(message) {
    super(message ?? 'Invalid API key provided');
  }
}
