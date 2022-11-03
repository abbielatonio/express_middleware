export default function ValidateTaskMiddleware(request, response, next) {
  const { task } = request.body;
  const { id } = request.body;

  if (!task) {
    return response.status(422).json({
      error: "Task is required",
    });
  }

  if (typeof id !== "number") {
    return response.status(400).json({
      error: "Invalid ID",
    });
  }

  request.task = task;

  next();
}
