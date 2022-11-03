import InvalidApiKeyException from "../exceptions/InvalidApiKeyException.js";
import NoApiKeyException from "../exceptions/NoApiKeyException.js";

const availableApiKeys = [
  "b6f6IHBm2j",
  "Nspcq48dGN",
  "eJggT83eLQ",
  "Kbjb58PoIm",
  "2XHebRdgvQ",
];

export default function ApiKeyMiddleware(request, response, next) {
  const { api_key: apiKey } = request.query;

  if (!apiKey) {
    throw new NoApiKeyException();
  }

  const find = availableApiKeys.findIndex((key) => key === apiKey);

  if (find === -1) {
    throw new InvalidApiKeyException();
  }

  next();
}
