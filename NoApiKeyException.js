export default class NoApiKeyException extends Error {
  status = 403;

  constructor(message) {
    super(message ?? 'No API Key provided');
  }
}
