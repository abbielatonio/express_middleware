import express from "express";
import ValidateTaskMiddleware from "./middleware/ValidateTaskMiddleware.js";
import ApiKeyMiddleware from "./middleware/ApiKeyMiddleware.js";
import ErrorHandlerMiddleware from "./middleware/ErrorHandlerMiddleware.js";

const app = express();

app.use(express.json());
app.use(ApiKeyMiddleware);
app.use(ErrorHandlerMiddleware);

app.use(function (req, res, next) {
  console.log("[", req.method, "]", "/", res.statusCode, req.query, req.body);
  next();
});

const port = 3001;

const tasks = [
  { id: 1, task: "Code" },
  { id: 2, task: "Eat" },
  { id: 3, task: "Repeat" },
];

app.get("/", (request, response) => {
  response.status(200).json(tasks);
});

app.get("/:id", (request, response) => {
  const findTask = tasks.find(
    (task) => task.id === parseInt(request.params.id)
  );

  if (findTask === undefined) {
    response.status(404).json({
      error: "Cannot find task",
    });
  }

  response.json(findTask);
});

app.post("/", ValidateTaskMiddleware, (request, response) => {
  const newTask = {
    id: tasks.length + 1,
    task: request.task,
  };

  tasks.push(newTask);

  response.status(201).json(newTask);
});

app.listen(port, () => {
  console.log(`App listening to part ${port}`);
});

app.use(function (req, res, next) {
  res.status(404);

  if (req.accepts("json")) {
    res.json({ error: "Sorry this page cannot be fond" });
    return;
  }
});
