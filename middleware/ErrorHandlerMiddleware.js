export default function ErrorHandlerMiddleware(err, request, response, next) {
  response.status(err.status || 500).json({
    error: err?.message || "Something went wrong",
  });
}
